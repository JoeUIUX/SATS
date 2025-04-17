# Backend - SATS

## Overview
This is the backend for the **Satellite Automated Testing System (SATS)**.  
It is built using **Flask** with **SQLite** for database management and includes API endpoints for managing test profiles.

---

## 🔧 Installation & Setup

### **1️⃣ Create and Activate Virtual Environment**
Before running the backend, create and activate a virtual environment:

#### Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

#### macOS/Linux:
```bash
python -m venv venv
source venv/bin/activate
```

### **2️⃣ Install Dependencies**
Once inside the virtual environment, install the required dependencies:
```bash
pip install -r requirements.txt
```

### **3️⃣ Install gltf-pipeline (Optional for model optimization)**
For GLB/GLTF model optimization, install the gltf-pipeline tool:
```bash
npm install -g gltf-pipeline
```
This requires Node.js and npm to be installed on your system.

### **4️⃣ Run the Backend Server**
To start the development server:
```bash
python backend_server.py
```
By default, the backend will be available at:
```bash
http://127.0.0.1:5000
```

---

## 📂 Project Structure
```
backend/
│-- backend_server.py   # Flask server and API endpoints
│-- mccif.py            # MCC server communication module
│-- satellites.db       # SQLite database file
│-- .env                # Environment variables
│-- requirements.txt    # Required dependencies
│-- models/             # Directory for uploaded 3D models
│-- README.md           # This file
```

---

## 📌 Technologies Used
- **Framework**: Flask
- **Database**: SQLite
- **CORS Handling**: Flask-CORS
- **Environment Management**: Python dotenv
- **Compression**: Flask-Compress
- **3D Model Optimization**: gltf-pipeline

---

## 🔧 Environment Variables
Ensure you have a `.env` file with:
```env
REACT_APP_BACKEND_URL=http://127.0.0.1:5000
FLASK_PORT=5000
SIMULATION_MODE=true
```

---

## 📌 Entity Relationship Diagram (ERD)
```
The database structure is described in the SQLiteDatabaseREADME.md file, which provides details about the satellites.db schema.

Profiles Table: Stores profile information, including descriptions, images, and 3D model paths.
Checkout Items Table: Stores checkout items associated with a profile.
Test Items Table: Manages tests to be conducted with metadata.
For a full description, refer to SQLiteDatabaseREADME.md.
```

## 📋 Key Features
- **Profile Management**: Create, read, update, and delete satellite profiles
- **File Uploads**: Upload text, docx, and image files for profile descriptions
- **3D Model Support**: Upload, optimize, and serve GLB format 3D models
- **Test Items Management**: API endpoints for managing test items to be conducted
- **Checkout Management**: Store and retrieve checkout configurations per profile
- **MCC Communication**: Connect to MCC servers or use simulation mode
- **Response Compression**: Improved performance with Flask-Compress
- **Caching**: Enhanced 3D model delivery with proper caching headers
- **Simulation Mode**: Toggle between real and simulated MCC server connections

## 📦 Requirements
See `requirements.txt` for the full list of Python dependencies:
- Flask
- Flask-CORS
- Flask-Compress
- python-dotenv
- (Others as specified in requirements.txt)

## 🔌 API Endpoints

### Profile Management
- `GET /profiles` - Get all profiles
- `POST /profiles` - Create a new profile
- `PUT /profiles/<name>` - Update a profile
- `DELETE /profiles/<name>` - Delete a profile

### 3D Model Management
- `GET /api/profile/<profile_id>` - Get profile model path
- `POST /api/upload-glb` - Upload a GLB model file
- `GET /models/<filename>` - Serve a 3D model file

### Test Management
- `GET /test-items` - Get all test items
- `POST /test-items` - Save test items
- `DELETE /test-items/<item_id>` - Delete a specific test item
- `DELETE /test-items/clear` - Clear all test items

### Checkout Management
- `POST /checkout/save` - Save checkout items for a profile
- `GET /checkout/load/<profile_id>` - Load checkout items for a profile

### MCC Connection
- `POST /connect_mcc` - Connect to MCC server

## **Author**
👤 **Joe Goh**  
📩 *Feel free to reach out for questions or collaboration!*

---