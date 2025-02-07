# SATS (Satellite Automated Testing System)

## Overview
SATS is a project designed to automate satellite testing processes. It consists of:
- **Backend**: A Python-based server that handles core functionalities.
- **Frontend**: A React-based user interface for user interaction.
  
This system supports efficient satellite testing workflows and includes features like dynamic profile creation and test management.

---

## Project Structure
SATS Satellite Automated Testing System/
│-- backend/
│   ├── backend_server.py
│   ├── mccif.py
│   ├── requirements.txt 
│-- beautify frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   ├── components/
│   │   │   ├── MainScreen/
│   │   │   │   ├── MainScreen.module.css
│   │   │   │   ├── MainScreen.tsx
│   │   │   │   ├── SortableItem.tsx
│   │   │   ├── ServerWindow/
│   │   │   │   ├── ServerWindow.module.css
│   │   │   │   ├── ServerWindow.tsx
│   │   │   ├── ToTestList/
│   │   │   │   ├── ToTestList.module.css
│   │   │   │   ├── ToTestList.tsx
│   │   │   ├── WelcomeWindow/
│   │   │   │   ├── WelcomeWindow.module.css
│   │   │   │   ├── WelcomeWindow.tsx
│   │   ├── types/
│   │   │   ├── types.ts
│   │   ├── images.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
│-- .gitignore
│-- README.md

---

## Prerequisites
Make sure the following are installed before running the project:

1. **Git**: [Download Git](https://git-scm.com/downloads)
2. **Python 3.7+**: [Download Python](https://www.python.org/downloads/)
3. **Node.js** (with npm): [Download Node.js](https://nodejs.org/)

---

## Setup Instructions

### 1️⃣ Clone the Repository
Run the following commands in your terminal:
```bash
git clone https://github.com/JoeUIUX/SATS.git
cd "SATS Satellite Automated Testing System"


## **2️⃣ Backend Setup**
Follow these steps to set up the backend:

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install the required Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create a `.env` file** in the `backend` folder and add the following:
   ```env
   REACT_APP_BACKEND_URL=http://127.0.0.1:5000
   ```
   *(Replace the URL with the appropriate backend server URL if needed.)*

4. **Run the backend server:**
   ```bash
   python backend_server.py
   ```

---

## **3️⃣ Frontend Setup**
Follow these steps to set up the frontend:

1. **Navigate to the frontend folder:**
   ```bash
   cd "../beautify frontend"
   ```

2. **Install the frontend dependencies:**
   ```bash
   npm install
   ```

3. **Run the frontend development server:**
   ```bash
   npm run dev
   ```

---

## **4️⃣ Running the Combined Functionality**
Follow these steps to ensure both backend and frontend run together:

### **Start the Backend First:**
```bash
cd backend
python backend_server.py
```

### **Start the Frontend:**
Open a **new terminal window** and navigate to the `beautify frontend` folder:
```bash
cd "../beautify frontend"
npm run dev
```

### **Open the Application in Your Browser:**
```bash
http://localhost:3000
```

---

## **Dependencies**

### **Backend Dependencies**
The Python backend requires the following dependencies (listed in `requirements.txt`):

- **Flask** – Web framework
- **Flask-Cors** – Cross-Origin Resource Sharing support
- **SQLite3** – Database management
- **Requests** – HTTP request library

🔹 **Install all backend dependencies with:**
```bash
pip install -r requirements.txt
```

---

### **Frontend Dependencies**
The React frontend uses the following dependencies (defined in `package.json`):

- **`react`, `react-dom`, `react-router-dom`** – Core React and routing
- **`@dnd-kit/sortable`** – Drag-and-drop functionality
- **`@tiptap/react`, `@tiptap/starter-kit`** – Rich text editing
- **`mammoth`, `docx`, `docx-preview`** – `.docx` file processing
- **`font-awesome`** – Icons

🔹 **Install all frontend dependencies with:**
```bash
npm install
```

---

## **Technologies Used**
### **Frontend**
- **Framework**: React with TypeScript
- **Styling**: CSS Modules
- **Drag-and-Drop**: DnD Kit
- **Rich Text Editing**: TipTap Editor

### **Backend**
- **Framework**: Flask
- **Database**: SQLite
- **Environment Management**: Python `.env` files

---

## **Notes**
✔️ **Always start the backend server before running the frontend.**  
✔️ If you encounter issues, check:
   - The `.env` file configuration.
   - That all dependencies are installed correctly.

---

## **Author**
👤 **Joe Goh**  
📩 *Feel free to reach out for questions or collaboration!*

---