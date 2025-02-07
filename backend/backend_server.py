from flask import Flask, jsonify, request
from flask_cors import CORS
from mccif import connect_to_mcc
import os
import sqlite3
import json

app = Flask(__name__)
CORS(app)

# Determine simulation mode from an environment variable
SIMULATION_MODE = os.getenv("SIMULATION_MODE", "true").lower() == "true"

# Initialize SQLite database
DATABASE = "profiles.db"


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
            images TEXT DEFAULT '[]',  -- Stores Base64 image data as JSON
            uploadedFileName TEXT DEFAULT '' -- ✅ Added column for storing file name
        )
        """
    )
    db.commit()
    db.close()


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
            "uploadedFileName": row["uploadedFileName"] if "uploadedFileName" in row.keys() else ""  # ✅ Ensure key exists
        })
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

        db.execute(
            "INSERT INTO profiles (name, description, images, uploadedFileName) VALUES (?, ?, ?, ?)",
            (name, data.get("description", ""), json.dumps(data.get("images", [])), data.get("uploadedFileName", ""))
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

if __name__ == '__main__':
    app.run(debug=True)
