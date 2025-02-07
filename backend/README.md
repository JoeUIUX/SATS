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

### **3️⃣ Run the Backend Server**
To start the development server:
```bash
python backend_server.py
```
By default, the backend will be available at:
```bash
http://127.0.0.1:5000
replace with your backend server url as required
```

---

## 📂 Project Structure
```
backend/
│-- backend_server.py   # Flask server and API endpoints
│-- mccif.py            # MCC server communication module
│-- profiles.db         # SQLite database file
│-- .env                # Environment variables
│-- requirements.txt    # Required dependencies
│-- README.md           # This file
```

---

## 📌 Technologies Used
- **Framework**: Flask
- **Database**: SQLite
- **CORS Handling**: Flask-CORS
- **Environment Management**: Python dotenv

---

## 🔧 Environment Variables
Ensure you have a `.env` file with:
```env
REACT_APP_BACKEND_URL=http://127.0.0.1:5000
```

---

## **Author**
👤 **Joe Goh**  
📩 *Feel free to reach out for questions or collaboration!*

---

