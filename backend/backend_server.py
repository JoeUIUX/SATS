from flask import Flask, jsonify, request
from flask_cors import CORS
from mccif import connect_to_mcc
import os
import sqlite3
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# Determine simulation mode from an environment variable
SIMULATION_MODE = os.getenv("SIMULATION_MODE", "true").lower() == "true"

# Initialize SQLite database
DATABASE = "satellites.db"


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
            uploadedFileName TEXT DEFAULT ''
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


if __name__ == '__main__':
    app.run(debug=True)
