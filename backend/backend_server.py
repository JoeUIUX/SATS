# Fix the indentation issue with route handlers

from flask import Flask, jsonify, request, send_from_directory, Response
from flask_cors import CORS
from flask_compress import Compress  # Add compression
from mccif import connect_to_mcc
import os
import sqlite3
import json
import shutil
from dotenv import load_dotenv
import threading
import time
import subprocess
from datetime import datetime, timedelta  # For caching headers
import requests
import sys
import io

# Force stdout and stderr to use UTF-8 encoding
if sys.platform == 'win32':
    # Specifically for Windows systems
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')


# Load .env file
load_dotenv()

app = Flask(__name__, static_url_path="", static_folder="models")
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # 100MB limit

# Add compression for better performance
Compress(app)

# This ensures all routes have the correct headers
CORS(app,
     resources={r"/*": {
         "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
         "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
         "allow_headers": ["Content-Type", "Authorization"],
         "supports_credentials": True,
         "expose_headers": ["Content-Type", "X-CSRFToken"]
     }})

# Determine simulation mode from an environment variable
SIMULATION_MODE = os.getenv("SIMULATION_MODE", "true").lower() == "true"

UPLOAD_FOLDER = os.path.join(os.getcwd(), "models")
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Ensure directory exists

# Set path for backgrounds folder
BACKGROUNDS_FOLDER = os.path.join(os.getcwd(), "public", "assets")
os.makedirs(BACKGROUNDS_FOLDER, exist_ok=True)  # Ensure backgrounds directory exists

# Initialize SQLite database
DATABASE = "satellites.db"

SCAN_INTERVAL = 10  # Time in seconds between scans for .glb files for profiles

# an OPTIONS handler for checkout/load routes
@app.route('/checkout/load/<profile_id>', methods=['OPTIONS'])
def options_checkout_load(profile_id):
    response = app.make_default_options_response()
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route('/checkout/save', methods=['OPTIONS'])
def handle_options_checkout_save():
    response = app.make_default_options_response()
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


def get_db():
    """ Connect to SQLite database and return connection. """
    try:
        conn = sqlite3.connect(DATABASE)
        conn.row_factory = sqlite3.Row  # Enables column access by name

        # Set pragmas for better reliability
        conn.execute("PRAGMA foreign_keys = ON")
        conn.execute("PRAGMA journal_mode = WAL")
        conn.execute("PRAGMA synchronous = NORMAL")

        return conn
    except Exception as e:
        print(f"❌ Database connection error: {e}")
        raise


def create_table():
    """ Ensure the profiles table exists in the database with description and images fields. """
    db = get_db()
    db.execute(
        """
       CREATE TABLE IF NOT EXISTS profiles (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT UNIQUE NOT NULL,
           description TEXT DEFAULT 'No details provided.',
           images TEXT DEFAULT '[]',
           uploadedFileName TEXT DEFAULT '',
           model_path TEXT DEFAULT NULL
       )
       """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS checkout_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            profile_id TEXT NOT NULL,
            item_data TEXT NOT NULL,
            UNIQUE(profile_id)
        )
        """
    )

    # Create settings table for application-wide settings including backgrounds
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS app_settings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            setting_key TEXT UNIQUE NOT NULL,
            setting_value TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """
    )

    # Create custom_backgrounds table to track uploaded backgrounds
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS custom_backgrounds (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            path TEXT UNIQUE NOT NULL,
            is_dark_mode INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """
    )

    db.commit()
    db.close()


# Model optimization function
def optimize_glb_model(file_path):
    """Optimize GLB model before storage using gltf-pipeline"""
    try:
        # Check if gltf-pipeline is installed
        try:
            subprocess.run(['gltf-pipeline', '--version'],
                           check=True,
                           stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE)
        except (subprocess.SubprocessError, FileNotFoundError):
            print("⚠️ gltf-pipeline not found. Using original model file.")
            return file_path

        # If gltf-pipeline is available, run the optimization
        output_path = file_path.replace('.glb', '_optimized.glb')

        # Execute gltf-pipeline with Draco compression
        print(f"🔧 Optimizing model: {file_path}")
        result = subprocess.run([
            'gltf-pipeline',
            '-i', file_path,
            '-o', output_path,
            '--draco.compressionLevel=7'
        ], check=True, capture_output=True, text=True)

        print(f"✅ Model optimized: {output_path}")
        print(f"📊 Optimization output: {result.stdout}")

        # If optimization successful, return the optimized path
        if os.path.exists(output_path) and os.path.getsize(output_path) > 0:
            # Calculate size reduction
            original_size = os.path.getsize(file_path)
            optimized_size = os.path.getsize(output_path)
            reduction = ((original_size - optimized_size) / original_size) * 100

            print(
                f"📦 Size reduction: {reduction:.2f}% (Original: {original_size / 1024 / 1024:.2f}MB, Optimized: {optimized_size / 1024 / 1024:.2f}MB)")

            # Keep the original file as backup
            backup_path = file_path + ".backup"
            os.rename(file_path, backup_path)

            # Use the optimized file
            return output_path
        else:
            print("⚠️ Optimization produced invalid file. Using original model.")
            return file_path
    except Exception as e:
        print(f"❌ Error optimizing model: {e}")
        return file_path  # Return original on error


# Call this function when the server starts
create_table()


@app.route('/')
def home():
    return "Welcome to the MCC Backend API. Use POST /connect_mcc to interact with the server."


# This is just the modified connect_mcc route from backend_server.py
# You can replace this route in your existing backend_server.py file

@app.route('/connect_mcc', methods=['POST'])
def connect_mcc():
    try:
        data = request.json
        print(f"Received data: {data}")

        server_address = data.get('server_address')
        server_port = data.get('server_port', '9377')  # default to port 9377 if not provided
        server_id = data.get('server_id')
        force_real = data.get('force_real', False)
        use_proxy = data.get('use_proxy', False)  # Check if using proxy

        if not server_address or not server_id:
            return jsonify({'status': 'error', 'message': 'Missing server_address or server_id'}), 400

        # Combine address and port for the connection
        full_address = f"{server_address}:{server_port}"
        print(f"Connecting to: {full_address}")

        # For simulation mode, just return success without actual connection verification
        if SIMULATION_MODE and not force_real:
            print("Simulating connection to MCC server.")
            return jsonify({
                'status': 'success',
                'message': f"Simulated connection to MCC server at {server_address} with ID {server_id}",
                'verified': False,  # Indicate this is not a verified connection
                'simulation': True
            })

        # If using proxy, try to verify the proxy connection
        if use_proxy:
            try:
                # Try to check if the proxy is running
                proxy_response = requests.get('http://localhost:8080', timeout=3)
                if proxy_response.status_code != 200:
                    return jsonify({
                        'status': 'error',
                        'message': 'Proxy server is not running or returned an error'
                    }), 502

                print("✅ Proxy server is running")
                return jsonify({
                    'status': 'success',
                    'message': f"Connected to MCC server at {server_address} via proxy",
                    'verified': True,
                    'simulation': False,
                    'proxy': True
                })
            except Exception as e:
                print(f"❌ Proxy check failed: {e}")
                return jsonify({
                    'status': 'error',
                    'message': f"Failed to connect to proxy server: {e}"
                }), 502

        # For real connection attempts, try to verify the connection
        # First, check if the server is reachable with a simple socket connection
        import socket
        connection_success = False
        socket_check = None

        try:
            # Try to establish a TCP connection to verify server exists
            socket_check = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            socket_check.settimeout(3)  # 3 second timeout
            socket_check.connect((server_address, int(server_port)))
            connection_success = True
            print(f"✅ Socket connection test successful to {server_address}:{server_port}")
        except (socket.error, socket.timeout, ValueError) as e:
            print(f"❌ Socket connection test failed: {e}")
            connection_success = False
        finally:
            if socket_check:
                socket_check.close()

        # Now attempt actual MCC connection
        mcc_success = False
        if connection_success:
            # Use the imported connect_to_mcc function instead of reimplementing it
            success = connect_to_mcc(full_address)
            mcc_success = success is not None

            if mcc_success:
                print(f"✅ Full MCC connection successful to {full_address}")
            else:
                print(f"❌ MCC connection failed despite socket connection")

        # Return appropriate response based on connection status
        if connection_success:
            if mcc_success:
                return jsonify({
                    'status': 'success',
                    'message': f"Connected to MCC server at {server_address} with ID {server_id}",
                    'verified': True,
                    'simulation': False
                })
            else:
                # Socket connection works but MCC protocol fails
                return jsonify({
                    'status': 'partial',
                    'message': f"Server at {server_address} is reachable, but MCC protocol failed.",
                    'verified': False,
                    'simulation': False
                }), 206  # Partial Content status
        else:
            # Complete failure - server not reachable
            return jsonify({
                'status': 'failure',
                'message': f"Failed to connect to server at {server_address}:{server_port}",
                'verified': False,
                'simulation': False
            }), 502  # Bad Gateway status

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e),
            'verified': False,
            'simulation': False
        }), 500


# ✅ **New API: Fetch All Profiles with Images**
@app.route("/profiles", methods=["GET"])
def get_profiles():
    db = get_db()
    cursor = db.execute("SELECT id, name, description, images FROM profiles")
    profiles = []
    for row in cursor.fetchall():
        profiles.append({
            "id": row["id"],
            "name": row["name"],
            "description": row["description"],
            "images": json.loads(row["images"]) if row["images"] else [],
            "uploadedFileName": row["uploadedFileName"] if "uploadedFileName" in row.keys() else ""
            # ✅ Ensure key exists
        })
    db.close()
    return jsonify(profiles)


# ✅ **New API: Add a Profile with Description and Images**
@app.route('/profiles', methods=['POST'])
def add_profile():
    """ Add a new profile, ensuring uniqueness and storing descriptions, images, and file names. """
    try:
        data = request.json
        name = data.get("name", "").strip()

        if not name:
            return jsonify({"error": "Profile name cannot be empty."}), 400

        db = get_db()
        existing_profile = db.execute("SELECT id FROM profiles WHERE name = ?", (name,)).fetchone()

        if existing_profile:
            return jsonify({"error": "Profile name must be unique."}), 400  # More specific error

        # ✅ Store images as JSON in the database
        images_json = json.dumps(data.get("images", []))

        db.execute(
            "INSERT INTO profiles (name, description, images, uploadedFileName) VALUES (?, ?, ?, ?)",
            (name, data.get("description", ""), images_json, data.get("uploadedFileName", ""))
        )
        db.commit()

        new_profile = db.execute("SELECT * FROM profiles WHERE name = ?", (name,)).fetchone()
        db.close()

        return jsonify({
            "message": "Profile added successfully.",
            "id": new_profile["id"],
            "name": new_profile["name"],
            "description": new_profile["description"],
            "images": json.loads(new_profile["images"]),
            "uploadedFileName": new_profile["uploadedFileName"]  # ✅ Ensure frontend gets the filename
        }), 201

    except sqlite3.IntegrityError:
        return jsonify({"error": "Profile name must be unique."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ **New API: Update Profile Description and Images**
@app.route('/profiles/<name>', methods=['PUT'])
def update_profile(name):
    """ Update the description, images, and uploaded file name of an existing profile. """
    try:
        data = request.json
        description = data.get("description", "").strip()
        images = data.get("images", [])  # ✅ Store multiple images as JSON
        uploadedFileName = data.get("uploadedFileName", "")

        if not description:
            return jsonify({"error": "Description cannot be empty."}), 400

        db = get_db()
        db.execute(
            "UPDATE profiles SET description = ?, images = ?, uploadedFileName = ? WHERE name = ?",
            (description, json.dumps(images), uploadedFileName, name)
        )
        db.commit()
        db.close()

        return jsonify({"message": f"Profile {name} updated successfully."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ **New API: Delete a Profile**
@app.route('/profiles/<name>', methods=['DELETE'])
def delete_profile(name):
    """ Delete a profile from the database. """
    db = get_db()
    db.execute("DELETE FROM profiles WHERE name = ?", (name,))
    db.commit()
    db.close()
    return jsonify({"message": "Profile deleted successfully."})


@app.route('/checkout/save', methods=['POST', 'OPTIONS'])
def save_checkout_items():
    """ Saves the checkout section items for a profile uniquely. """
    # Handle OPTIONS request for CORS preflight
    if request.method == 'OPTIONS':
        response = app.make_default_options_response()
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

    try:
        data = request.json
        profile_id = data.get("profile_id")
        item_data = json.dumps(data.get("items", []))

        print(f"📝 Attempting to save checkout items for profile: {profile_id}")
        print(f"📝 Data structure: {item_data[:100]}...")  # Print first 100 chars

        if not profile_id:
            return jsonify({"error": "Profile ID is required."}), 400

        db = get_db()
        db.execute(
            """
            INSERT INTO checkout_items (profile_id, item_data)
            VALUES (?, ?) 
            ON CONFLICT(profile_id) DO UPDATE SET item_data = excluded.item_data
            """,
            (profile_id, item_data)
        )
        db.commit()
        db.close()

        print(f"✅ Checkout items saved uniquely for profile: {profile_id}")
        # Log some data structure info to verify checkedOptions are included
        items = json.loads(item_data)
        for item in items:
            if 'checkedOptions' in item:
                print(f"  - {item['header']} has {len(item['checkedOptions'])} checked options")

        response = jsonify({"message": "Checkout items saved successfully."})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response, 200

    except Exception as e:
        import traceback
        print(f"❌ Error in save_checkout_items: {str(e)}")
        print(traceback.format_exc())  # Print full stack trace for debugging

        response = jsonify({"error": str(e)})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response, 500


# Update the checkout/load/<profile_id> route to also handle OPTIONS
@app.route('/checkout/load/<profile_id>', methods=['GET'])
def load_checkout_items(profile_id):
    """Loads the saved checkout section items for a profile."""
    try:
        # Plain text logging without emojis
        print(f"Loading checkout items for profile {profile_id}")

        db = get_db()
        row = db.execute("SELECT item_data FROM checkout_items WHERE profile_id = ?", (profile_id,)).fetchone()
        db.close()

        if row:
            print(f"Found checkout items for profile {profile_id}")

            # Create response with proper CORS headers
            response = jsonify({"items": json.loads(row["item_data"])})
            response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
            response.headers.add('Access-Control-Allow-Credentials', 'true')
            return response, 200
        else:
            print(f"No saved checkout items found for profile {profile_id}")

            # Create response with proper CORS headers
            response = jsonify({"items": []})
            response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
            response.headers.add('Access-Control-Allow-Credentials', 'true')
            return response, 200  # Return empty if no data is found

    except Exception as e:
        # Plain text error logging without emojis
        print(f"Error in load_checkout_items: {str(e)}")
        import traceback
        print(traceback.format_exc())  # Print full stack trace for debugging

        # Create error response with proper CORS headers
        response = jsonify({"error": str(e), "items": []})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response, 500


@app.route("/api/profile/<int:profile_id>", methods=["GET"])
def get_profile_model(profile_id):
    """Fetch the 3D model path for a given profile ID."""
    try:
        db = get_db()
        row = db.execute("SELECT model_path FROM profiles WHERE id = ?", (profile_id,)).fetchone()
        db.close()

        if row and row["model_path"]:
            model_path = row["model_path"]
            if not os.path.exists(os.path.join(UPLOAD_FOLDER, os.path.basename(model_path))):
                # File doesn't exist, return null path but still a 200 status
                return jsonify({"model_path": None, "message": "Model file not found"}), 200

            # File exists, return the path
            return jsonify({"model_path": model_path}), 200
        else:
            # No model assigned to this profile
            return jsonify({"model_path": None, "message": "No model assigned"}), 200

    except Exception as e:
        print(f"Error in get_profile_model: {str(e)}")
        return jsonify({"error": str(e), "model_path": None}), 500


# ✅ **API: Upload and Assign `.glb` Model to a Profile**
@app.route("/api/upload-glb", methods=["POST"])
def upload_glb():
    if "file" not in request.files or "profile_id" not in request.form:
        return jsonify({"error": "Missing file or profile ID"}), 400

    file = request.files["file"]
    profile_id = request.form["profile_id"]

    if not file.filename.endswith(".glb"):
        return jsonify({"error": "Invalid file format. Only .glb allowed"}), 400

    filename = f"profile_{profile_id}.glb"
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    # Add optimization step
    print(f"📦 Original file size: {os.path.getsize(file_path) / 1024 / 1024:.2f}MB")
    try:
        optimized_path = optimize_glb_model(file_path)
        print(f"✅ Using model path: {optimized_path}")

        # Update the filename if optimization created a new file
        if optimized_path != file_path:
            filename = os.path.basename(optimized_path)

            # If the new filename doesn't match our naming convention, rename it
            if not filename.startswith(f"profile_{profile_id}"):
                new_filename = f"profile_{profile_id}_optimized.glb"
                new_path = os.path.join(UPLOAD_FOLDER, new_filename)
                os.rename(optimized_path, new_path)
                filename = new_filename
                optimized_path = new_path
    except Exception as e:
        print(f"⚠️ Model optimization failed, using original file: {e}")
        # Continue with the original file

    try:
        db = get_db()
        full_path = f"/models/{filename}"  # ✅ Store the full path
        db.execute("UPDATE profiles SET model_path = ? WHERE id = ?", (full_path, profile_id))
        db.commit()
        db.close()
        return jsonify({"message": "File uploaded successfully", "model_path": f"/models/{filename}"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def sync_models_with_db():
    """ Scan the models directory and update the database with new .glb files. """
    db = get_db()
    cursor = db.cursor()
    existing_models = {row["model_path"] for row in
                       cursor.execute("SELECT model_path FROM profiles WHERE model_path IS NOT NULL").fetchall()}

    for filename in os.listdir(UPLOAD_FOLDER):
        if filename.endswith(".glb"):
            model_path = f"/models/{filename}"
            if model_path not in existing_models:
                profile_id = filename.replace("profile_", "").replace(".glb", "")
                cursor.execute("UPDATE profiles SET model_path = ? WHERE id = ?", (model_path, profile_id))

    db.commit()
    db.close()


# Run the sync function at startup
sync_models_with_db()


def scan_and_update_database():
    """Periodically scan the models folder and update the database with new .glb files."""
    while True:
        try:
            conn = get_db()
            cursor = conn.cursor()

            # Get existing model paths from the database
            cursor.execute("SELECT model_path FROM profiles")
            existing_models = {row["model_path"] for row in cursor.fetchall() if row["model_path"]}

            # Scan the models folder for .glb files
            model_files = {f for f in os.listdir(UPLOAD_FOLDER) if f.endswith(".glb")}

            # Find new files that are not in the database
            new_files = model_files - existing_models

            for new_file in new_files:
                # Try to find an empty profile slot to assign the new model
                cursor.execute("SELECT id FROM profiles WHERE model_path IS NULL LIMIT 1")
                profile = cursor.fetchone()

                if profile:
                    profile_id = profile["id"]
                    cursor.execute("UPDATE profiles SET model_path = ? WHERE id = ?", (new_file, profile_id))
                    conn.commit()
                    print(f"✅ Added {new_file} to profile {profile_id} in the database.")
                else:
                    print(f"⚠️ No available profile for {new_file}, skipping.")

            conn.close()
        except Exception as e:
            print(f"❌ Error scanning models folder: {e}")

        time.sleep(SCAN_INTERVAL)  # Wait before scanning again


# Start the scanning thread
threading.Thread(target=scan_and_update_database, daemon=True).start()


# ✅ Serve static `.glb` models with caching
@app.route("/models/<filename>")
def get_model(filename):
    # Set response with specified mimetype
    response = send_from_directory(app.config["UPLOAD_FOLDER"],
                                   filename,
                                   mimetype="model/gltf-binary",
                                   as_attachment=False)

    # Add caching headers for better performance
    # Set cache to 1 year (31536000 seconds)
    response.headers["Cache-Control"] = "public, max-age=31536000"
    response.headers["Expires"] = (datetime.utcnow() + timedelta(days=365)).strftime("%a, %d %b %Y %H:%M:%S GMT")

    # Add ETag for better caching
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    if os.path.exists(file_path):
        # Generate ETag based on file size and modification time
        file_stat = os.stat(file_path)
        etag = f'"{file_stat.st_size}-{file_stat.st_mtime}"'
        response.headers["ETag"] = etag

    return response


# Create the test_items table when the server starts
def create_test_items_table():
    """ Create the test_items table in the database if it doesn't exist. """
    db = get_db()
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS test_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            test TEXT NOT NULL,
            satellite TEXT,
            dateTime TEXT,
            loggedBy TEXT
        )
        """
    )
    db.commit()
    db.close()


# Call this function when the server starts
create_test_items_table()


# Add these routes to handle test items
@app.route('/test-items', methods=['GET'])
def get_test_items():
    """ Get all test items from the database. """
    db = get_db()
    cursor = db.execute("SELECT id, test, satellite, dateTime, loggedBy FROM test_items ORDER BY id")
    items = []
    for row in cursor.fetchall():
        items.append({
            "id": row["id"],
            "test": row["test"],
            "satellite": row["satellite"],
            "dateTime": row["dateTime"],
            "loggedBy": row["loggedBy"]
        })
    db.close()
    return jsonify(items)


@app.route('/test-items', methods=['POST'])
def save_test_items():
    """ Save test items to the database. """
    try:
        data = request.json
        items = data.get("items", [])

        if not items:
            return jsonify({"error": "No items provided"}), 400

        db = get_db()

        # Clear existing items first
        db.execute("DELETE FROM test_items")

        # Insert new items
        for item in items:
            db.execute(
                """
                INSERT INTO test_items (test, satellite, dateTime, loggedBy)
                VALUES (?, ?, ?, ?)
                """,
                (item["test"], item["satellite"], item["dateTime"], item["loggedBy"])
            )

        db.commit()
        db.close()

        return jsonify({"message": f"Successfully saved {len(items)} test items"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/test-items/<int:item_id>', methods=['DELETE'])
def delete_test_item(item_id):
    """ Delete a specific test item from the database. """
    try:
        db = get_db()
        db.execute("DELETE FROM test_items WHERE id = ?", (item_id,))
        db.commit()
        db.close()
        return jsonify({"message": f"Successfully deleted test item {item_id}"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/test-items/clear', methods=['DELETE'])
def clear_test_items():
    """ Clear all test items from the database. """
    try:
        db = get_db()
        db.execute("DELETE FROM test_items")
        db.commit()
        db.close()
        return jsonify({"message": "Successfully cleared all test items"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ===== NEW BACKGROUND SETTINGS ROUTES =====

# Get current app settings including background settings
@app.route('/settings', methods=['GET'])
def get_settings():
    """Get all application settings"""
    try:
        db = get_db()
        cursor = db.execute("SELECT setting_key, setting_value FROM app_settings")
        settings = {}

        for row in cursor.fetchall():
            settings[row["setting_key"]] = row["setting_value"]

        # Get default background settings if not found in database
        if "background" not in settings:
            settings["background"] = "/assets/curve_background.png"  # Dark mode default

        if "background_light" not in settings:
            settings["background_light"] = "/assets/lightcurve_background.png"  # Light mode default

        if "backgroundColor" not in settings:
            settings["backgroundColor"] = "#000000"  # Default background color

        if "font" not in settings:
            settings["font"] = "Arial, sans-serif"  # Default font

        db.close()
        return jsonify(settings), 200
    except Exception as e:
        print(f"❌ Error getting settings: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Save app settings
@app.route('/settings', methods=['POST'])
def save_settings():
    """Save application settings"""
    try:
        data = request.json

        if not data:
            return jsonify({"error": "No settings provided"}), 400

        db = get_db()

        # Process each setting
        for key, value in data.items():
            # Skip null or empty values
            if value is None or value == "":
                continue

            # For background settings, make special handling
            if key == "background":
                # Save the background path - this is the dark mode background
                db.execute(
                    """
                    INSERT INTO app_settings (setting_key, setting_value, updated_at)
                    VALUES (?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(setting_key) DO UPDATE SET 
                    setting_value = excluded.setting_value,
                    updated_at = CURRENT_TIMESTAMP
                    """,
                    (key, value)
                )
            elif key == "backgroundColor":
                # Save the background color
                db.execute(
                    """
                    INSERT INTO app_settings (setting_key, setting_value, updated_at)
                    VALUES (?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(setting_key) DO UPDATE SET 
                    setting_value = excluded.setting_value,
                    updated_at = CURRENT_TIMESTAMP
                    """,
                    (key, value)
                )
            elif key == "font":
                # Save the font
                db.execute(
                    """
                    INSERT INTO app_settings (setting_key, setting_value, updated_at)
                    VALUES (?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(setting_key) DO UPDATE SET 
                    setting_value = excluded.setting_value,
                    updated_at = CURRENT_TIMESTAMP
                    """,
                    (key, value)
                )
            else:
                # Save any other settings
                db.execute(
                    """
                    INSERT INTO app_settings (setting_key, setting_value, updated_at)
                    VALUES (?, ?, CURRENT_TIMESTAMP)
                    ON CONFLICT(setting_key) DO UPDATE SET 
                    setting_value = excluded.setting_value,
                    updated_at = CURRENT_TIMESTAMP
                    """,
                    (key, value)
                )

        db.commit()
        db.close()

        return jsonify({
            "message": "Settings saved successfully",
            "settings": data
        }), 200
    except Exception as e:
        print(f"❌ Error saving settings: {str(e)}")
        return jsonify({"error": str(e)}), 500

# Get available backgrounds
@app.route('/backgrounds', methods=['GET'])
def get_backgrounds():
    """Get all available backgrounds including defaults and custom uploads"""
    try:
        # Default backgrounds from assets folder
        default_backgrounds = [
            {"name": "Curve Background (Dark)", "path": "/assets/curve_background.png"},
            {"name": "Light Curve Background", "path": "/assets/lightcurve_background.png"},
            {"name": "Solid Color", "path": "none"}
        ]

        # Get custom backgrounds from database
        db = get_db()
        cursor = db.execute("SELECT name, path FROM custom_backgrounds ORDER BY created_at DESC")

        custom_backgrounds = []
        for row in cursor.fetchall():
            custom_backgrounds.append({
                "name": row["name"],
                "path": row["path"]
            })

        db.close()

        return jsonify({
            "default_backgrounds": default_backgrounds,
            "custom_backgrounds": custom_backgrounds
        }), 200
    except Exception as e:
        print(f"❌ Error getting backgrounds: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Upload a new background
@app.route('/upload-background', methods=['POST'])
def upload_background():
    """Upload a new background image"""
    if 'background' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['background']

    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    # Check if file is an image
    if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
        return jsonify({"error": "Invalid file format. Only PNG, JPG, JPEG and GIF are allowed."}), 400

    try:
        # Generate unique filename to avoid overwriting existing files
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        original_filename = file.filename
        filename = f"custom_bg_{timestamp}_{original_filename}"

        # Save the file to the backgrounds folder
        file_path = os.path.join(BACKGROUNDS_FOLDER, filename)
        file.save(file_path)

        # Insert into the database
        db = get_db()
        db.execute(
            """
            INSERT INTO custom_backgrounds (name, path)
            VALUES (?, ?)
            """,
            (original_filename, f"/assets/{filename}")
        )
        db.commit()
        db.close()

        return jsonify({
            "message": "Background uploaded successfully",
            "name": original_filename,
            "path": f"/assets/{filename}"
        }), 200
    except Exception as e:
        print(f"❌ Error uploading background: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Delete a custom background
@app.route('/backgrounds/<int:background_id>', methods=['DELETE'])
def delete_background(background_id):
    """Delete a custom background"""
    try:
        db = get_db()

        # Get the background info first
        row = db.execute("SELECT path FROM custom_backgrounds WHERE id = ?", (background_id,)).fetchone()

        if not row:
            return jsonify({"error": "Background not found"}), 404

        # Get the file path
        file_path = row["path"]

        # Delete the record from database
        db.execute("DELETE FROM custom_backgrounds WHERE id = ?", (background_id,))
        db.commit()
        db.close()

        # Delete the actual file
        try:
            # Extract filename from path
            filename = os.path.basename(file_path)
            full_path = os.path.join(BACKGROUNDS_FOLDER, filename)

            if os.path.exists(full_path):
                os.remove(full_path)
                print(f"✅ Deleted background file: {filename}")
        except Exception as file_error:
            print(f"⚠️ Error deleting background file: {file_error}")
            # Continue even if file deletion fails

        return jsonify({"message": "Background deleted successfully"}), 200
    except Exception as e:
        print(f"❌ Error deleting background: {str(e)}")
        return jsonify({"error": str(e)}), 500


# Serve static assets - this enables access to background images
@app.route("/assets/<filename>")
def get_asset(filename):
    """Serve static assets like background images with proper caching"""
    response = send_from_directory(BACKGROUNDS_FOLDER, filename)

    # Add caching headers
    response.headers["Cache-Control"] = "public, max-age=86400"  # 1 day cache
    response.headers["Expires"] = (datetime.utcnow() + timedelta(days=1)).strftime("%a, %d %b %Y %H:%M:%S GMT")

    # Add ETag for better caching
    file_path = os.path.join(BACKGROUNDS_FOLDER, filename)
    if os.path.exists(file_path):
        file_stat = os.stat(file_path)
        etag = f'"{file_stat.st_size}-{file_stat.st_mtime}"'
        response.headers["ETag"] = etag

    return response


# Apply a background to CSS
@app.route('/apply-background', methods=['POST'])
def apply_background():
    """Apply a background to the CSS by updating the :root variables"""
    try:
        data = request.json
        background_path = data.get('path')
        is_dark_mode = data.get('isDarkMode', False)

        if not background_path:
            return jsonify({"error": "No background path provided"}), 400

        # Save the background setting based on mode
        setting_key = "background" if is_dark_mode else "background_light"

        db = get_db()
        db.execute(
            """
            INSERT INTO app_settings (setting_key, setting_value, updated_at)
            VALUES (?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(setting_key) DO UPDATE SET 
            setting_value = excluded.setting_value,
            updated_at = CURRENT_TIMESTAMP
            """,
            (setting_key, background_path)
        )
        db.commit()
        db.close()

        return jsonify({
            "message": f"Background applied successfully for {('dark' if is_dark_mode else 'light')} mode",
            "path": background_path
        }), 200
    except Exception as e:
        print(f"❌ Error applying background: {str(e)}")
        return jsonify({"error": str(e)}), 500

    # Add this function to backend_server.py
    def ensure_db_persistence():
        """Ensure database changes are immediately flushed to disk"""
        conn = get_db()
        # Set pragma for immediate disk writes
        conn.execute('PRAGMA synchronous = FULL')
        conn.execute('PRAGMA journal_mode = WAL')
        conn.commit()
        conn.close()

    # Call this function right after create_table()
    create_table()
    ensure_db_persistence()

    # Add after the get_db function
    def ensure_connection_safety():
        """Ensures SQLite connections are thread-safe and durable"""
        try:
            db = get_db()
            # Set pragmas to enforce durability
            db.execute("PRAGMA journal_mode = WAL")
            db.execute("PRAGMA synchronous = NORMAL")
            db.execute("PRAGMA busy_timeout = 5000")
            db.commit()
            db.close()
            print("✅ Database connection safety ensured")
        except Exception as e:
            print(f"❌ Error configuring database: {e}")

    # Call this early in the script execution
    ensure_connection_safety()


if __name__ == "__main__":
    port = int(os.getenv("FLASK_PORT", 5000))
    app.run(debug=True, port=port, host='0.0.0.0')
