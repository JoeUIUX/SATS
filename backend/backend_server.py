from flask import Flask, jsonify, request, send_from_directory, Response
from flask_cors import CORS
from flask_compress import Compress  # Add compression
from mccif import connect_to_mcc
import os
import sqlite3
import json
from dotenv import load_dotenv
import threading
import time
import subprocess
from datetime import datetime, timedelta  # For caching headers

# Load .env file
load_dotenv()

app = Flask(__name__, static_url_path="", static_folder="models")
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # 100MB limit

# Add compression for better performance
Compress(app)

CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Determine simulation mode from an environment variable
SIMULATION_MODE = os.getenv("SIMULATION_MODE", "true").lower() == "true"

UPLOAD_FOLDER = os.path.join(os.getcwd(), "models")
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Ensure directory exists

# Initialize SQLite database
DATABASE = "satellites.db"

SCAN_INTERVAL = 10  # Time in seconds between scans


def get_db():
    """ Connect to SQLite database and return connection. """
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # Enables column access by name
    return conn


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


@app.route('/connect_mcc', methods=['POST'])
def connect_mcc():
    try:
        data = request.json
        print(f"Received data: {data}")

        server_address = data.get('server_address')
        server_id = data.get('server_id')

        if not server_address or not server_id:
            return jsonify({'status': 'error', 'message': 'Missing server_address or server_id'}), 400

        if SIMULATION_MODE:
            print("Simulating connection to MCC server.")
            return jsonify({
                'status': 'success',
                'message': f"Simulated connection to MCC server at {server_address} with ID {server_id}"
            })

        success = connect_to_mcc(server_address)

        if success:
            return jsonify({
                'status': 'success',
                'message': f"Connected to MCC server at {server_address} with ID {server_id}"
            })
        else:
            return jsonify({
                'status': 'failure',
                'message': f"Failed to connect to MCC server at {server_address}"
            })
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500


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


@app.route('/checkout/save', methods=['POST'])
def save_checkout_items():
    """ Saves the checkout section items for a profile uniquely. """
    try:
        data = request.json
        profile_id = data.get("profile_id")
        item_data = json.dumps(data.get("items", []))

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

        return jsonify({"message": "Checkout items saved successfully."}), 200

    except Exception as e:
        print(f"❌ Error in save_checkout_items: {str(e)}")
        return jsonify({"error": str(e)}), 500


@app.route('/checkout/load/<profile_id>', methods=['GET'])
def load_checkout_items(profile_id):
    """ Loads the saved checkout section items for a profile. """
    try:
        db = get_db()
        row = db.execute("SELECT item_data FROM checkout_items WHERE profile_id = ?", (profile_id,)).fetchone()
        db.close()

        if row:
            print(f"✅ Checkout items loaded for profile {profile_id}: {row['item_data']}")
            return jsonify({"items": json.loads(row["item_data"])}), 200
        else:
            print(f"ℹ️ No saved checkout items found for profile {profile_id}")
            return jsonify({"items": []}), 200  # Return empty if no data is found

    except Exception as e:
        print(f"❌ Error in load_checkout_items: {str(e)}")
        return jsonify({"error": str(e)}), 500


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


if __name__ == "__main__":
    port = int(os.getenv("FLASK_PORT", 5000))
    app.run(debug=True, port=port)