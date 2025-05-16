# SATS (Satellite Automated Testing System)

## Overview
SATS is a comprehensive system designed to automate satellite testing processes. It provides engineers and operators with powerful tools for hardware checkout, system verification, and test execution. The system consists of:

- **Backend**: A Python-based Flask server that handles core functionalities, data management, and hardware communication
- **Frontend**: A React/TypeScript application with an intuitive user interface for test configuration, execution, and reporting
- **MCC Proxy**: A Node.js-based proxy for real hardware communication

This system supports efficient satellite testing workflows and includes features like dynamic profile creation, test management, automated checkout testing, 3D model visualization, and comprehensive reporting.

---

## 🎯 Key Features

### Core Functionality
- **Profile Management**: Create, read, update, and delete satellite profiles with rich documentation
- **Test List Management**: Track and manage tests to be conducted with customizable parameters
- **Floating Window System**: Multi-window interface with draggable, resizable components
- **Light/Dark Mode**: Comprehensive theming system with persistent preferences

### Testing & Hardware Integration
- **Automated Testing System**: Component-specific test panels with real-time progress tracking
- **Multiple Subsystem Support**: OBC-1, OBC-2, S-Band, and UHF test implementations
- **Test Report Generation**: Generate detailed Word-format test reports for all components
- **MCC Connection**: Connect to Mission Control Center servers with simulation fallback
- **Simulation Mode**: Toggle between real and simulated test execution

### Data & Visualization
- **Rich Document Support**: Upload and process text, docx, and image files
- **3D Model Visualization**: View and interact with 3D models of satellites
- **Model Optimization**: Automatic optimization of uploaded 3D models
- **Drag-and-Drop Interface**: Interactive component selection for testing
- **Taskbar Integration**: Minimizable windows with status tracking

---

## 📂 Project Structure

```
SATS Satellite Automated Testing System/
│-- backend/
│   ├── .env                  # backend environment variables
│   ├── backend_server.py     # Flask server and API endpoints
│   ├── mccif.py              # MCC server communication module
│   ├── requirements.txt      # Python dependencies
│   ├── models/               # Directory for uploaded 3D models
│   ├── satellites.db         # SQLite database
│   ├── venv                  # virtual environment
│
│-- mcc-proxy/
│   ├── mcc-proxy.js          # Node.js proxy server for MCC communication
│
│-- beautify frontend/
│   ├── .env                  # frontend environment variables
│   ├── src/
│   │   ├── app/              # Core application structure
│   │   │   ├── globals.css   # Global styles
│   │   │   ├── layout.tsx    # Root layout with theme switching
│   │   │   ├── page.tsx      # Main entry point
│   │
│   │   ├── components/                            # UI components
│   │   │   ├── MainScreen/                        # Main application screen
│   │   │       ├── MainScreen.tsx                 
│   │   │       ├── MainScreen.module.css       
│   │   │       ├── DraggableBox.tsx               # Drag-and-Drop functionality   
│   │   │   
│   │   │   ├── ServerWindow/                      # MCC server connection
│   │   │       ├── ServerWindow.tsx
│   │   │       ├── ServerWindow.module.css   
│   │   │       
│   │   │   ├── ToTestList/                        # Test management
│   │   │       ├── ToTestList.tsx
│   │   │       ├── ToTestList.module.css  
│   │   │   
│   │   │   ├── WelcomeWindow/                     # Welcome screen
│   │   │       ├── WelcomeWindow.tsx
│   │   │       ├── WelcomeWindow.module.css  
│   │   │      
│   │   │   ├── ModelWindow/                       # 3D model visualization
│   │   │       ├── ThreeDModelWindow.jsx
│   │   │       ├── ThreeDModelWindow.module.css  
│   │   │   
│   │   │   ├── Taskbar/                           # Window management taskbar
│   │   │       ├── Taskbar.tsx
│   │   │       ├── Taskbar.module.css  
│   │   │   
│   │   │   ├── SettingsWindow/                    # Settings
│   │   │       ├── SettingsWindow.tsx
│   │   │       ├── SettingsWindow.module.css
│   │   │   
│   │   │   ├── FontLoader/                        # Fonts in SettingsWindow
│   │   │       ├── FontLoader.tsx
│   │   │     
│   │   │   ├── ui/                                # reusable UI elements
│   │   │       ├── alert.tsx
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── progress.tsx
│   │   │       ├── tabs.tsx
│   │   │       ├── index.ts                       # Export UI elements
│   │   │   
│   │   │   ├── CheckoutTestProgress/              # Test execution
│   │   │   │   ├── CheckoutTestProgress.tsx
│   │   │   │   ├── CheckoutTestProgress.module.css
│   │   │   │   ├── components/
│   │   │   │       ├── OBC1TestPanel.tsx          # OBC-1 test
│   │   │   │       ├── OBC1TestPanel.module.css   # reusable base CSS
│   │   │   │       ├── OBC2TestPanel.tsx          # OBC-2 test
│   │   │   │       ├── SBandTestPanel.tsx         # S-Band test
│   │   │   │       ├── SBandTestPanel.module.css  # SBand styles in addition to base CSS
│   │   │   │       ├── UHFTestPanel.tsx           # UHF test
│   │   │   │       ├── ADCSTestPanel.tsx          # ADCS test
│   │   │   │       ├── GPSTestPanel.tsx           # GPS test
│   │   │   │       ├── HEPSTestPanel.tsx          # HEPS test
│   │   │   │       ├── PCSTestPanel.tsx           # PCS test
│   │   │   │       ├── PropulsionTestPanel.tsx    # Propulsion test
│   │   │   │       ├── LEOCAMTestPanel.tsx        # LEOCAM test
│   │   │   │       ├── XBandTestPanel.tsx         # X-Band test
│   │   │   │       ├── TestDetailsModal.tsx       # reusable component for Test History
│   │   │   │       ├── TestHistoryChart.tsx       # reusable component for Test History
│   │   │   │       ├── TestHistoryTable.tsx       # reusable component for Test History
│   │   │   │       ├── index.ts                   # component exports
│   │
│   │   ├── services/         # Business logic
│   │   │   ├── checkout/     # Test execution services
│   │   │   │   ├── obc1Checkout.ts
│   │   │   │   ├── obc2Checkout.ts
│   │   │   │   ├── sbandCheckout.ts
│   │   │   │   ├── uhfCheckout.ts
│   │   │   │   ├── adcsCheckout.ts
│   │   │   │   ├── gpsCheckout.ts
│   │   │   │   ├── hepsCheckout.ts
│   │   │   │   ├── pcsCheckout.ts
│   │   │   │   ├── propulsionCheckout.ts
│   │   │   │   ├── leocamCheckout.ts
│   │   │   │   ├── xbandCheckout.ts
│   │   │   ├── reports/      # Report generation
│   │   │       ├── obc1Report.ts
│   │   │       ├── obc2Report.ts
│   │   │       ├── sbandReport.ts
│   │   │       ├── uhfReport.ts
│   │   │       ├── adcsReport.ts
│   │   │       ├── gpsReport.ts
│   │   │       ├── hepsReport.ts
│   │   │       ├── pcsReport.ts
│   │   │       ├── propulsionReport.ts
│   │   │       ├── leocamReport.ts
│   │   │       ├── xbandReport.ts
│   │
│   │   ├── utils/            # Utility functions
│   │   │   ├── mccUtils.ts   # MCC communication
│   │   │   ├── themeInitializer.ts # Theme management
│   │   │   ├── themeEvents.ts # Theme event system
│   │
│   │   ├── lib/              # Library functions
│   │   │   ├── utils.ts      # General utilities
│   │
│   │   ├── types/            # TypeScript definitions
│   │       ├── types.ts
│
│   ├── image.d.ts            # TypeScript declaration file to handle image type
│
│   ├── package.json          # Node dependencies
│   ├── tsconfig.json         # TypeScript configuration
│   ├── .env                  # Environment variables
│
│-- logs/                     # Log directory for services
│
│-- start-sats.bat            # Windows startup script
│-- sats-manager.js           # Process management script
│-- diagnose.js               # System diagnostic tool
│-- .gitignore
│-- README.md                 # This file
```

---

## 🛠️ Prerequisites

Make sure the following are installed before running the project:

1. **Git**: [Download Git](https://git-scm.com/downloads)
2. **Python 3.7+**: [Download Python](https://www.python.org/downloads/)
3. **Node.js** (with npm): [Download Node.js](https://nodejs.org/)
4. **gltf-pipeline** (optional, for 3D model optimization): `npm install -g gltf-pipeline`

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
Run the following commands in your terminal:
```bash
git clone https://github.com/JoeUIUX/SATS.git
cd "SATS Satellite Automated Testing System"
```

### 2️⃣ Backend Setup
Follow these steps to set up the backend:

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   
   For Windows:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```
   
   For macOS/Linux:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install the required Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create a `.env` file** in the `backend` folder and add the following:
   ```env
   REACT_APP_BACKEND_URL=http://127.0.0.1:5000
   FLASK_PORT=5000
   SIMULATION_MODE=true
   FLASK_CORS_ENABLED=true
   ```

5. **Run the backend server manually:**
   ```bash
   python backend_server.py
   ```
   Or continue with the full setup to use the integrated process manager.

### 3️⃣ MCC Proxy Setup
The MCC proxy server enables real hardware communication:

1. **Navigate to the mcc-proxy folder:**
   ```bash
   cd ../mcc-proxy
   ```

2. **Install dependencies:**
   ```bash
   npm install ws net http
   ```

3. **Run the proxy server manually:**
   ```bash
   node mcc-proxy.js
   ```
   Or continue with the full setup to use the integrated process manager.

### 4️⃣ Frontend Setup
Follow these steps to set up the frontend:

1. **Navigate to the frontend folder:**
   ```bash
   cd "../beautify frontend"
   ```

2. **Install the frontend dependencies:**
   ```bash
   npm install
   ```

   This will install all dependencies listed in package.json, including:
   - UI component libraries (Radix UI, tailwindcss)
   - Drag and drop libraries
   - Document processing libraries
   - 3D libraries

3. **Run the frontend development server manually:**
   ```bash
   npm run dev
   ```
   Or continue with the full setup to use the integrated process manager.

### 5️⃣ Unified System Startup (Recommended)
SATS includes a process manager that handles all components simultaneously:

1. **From the project root directory**, run:
   ```bash
   node sats-manager.js
   ```
   
   Or on Windows, simply use the batch file:
   ```bash
   start-sats.bat
   ```

2. **Command reference** within the process manager:
   - `q` - Quit all processes
   - `r` - Restart all processes
   - `b` - Restart backend only
   - `p` - Restart proxy only
   - `f` - Restart frontend only
   - `s` - Show status of all processes
   - `l` - Show log paths
   - `h` - Display help
   - `c` - Clean/rotate log files

3. **Logs** are stored in the `logs/` directory for debugging.

4. **System diagnosis**: If you encounter issues, use the diagnosis tool:
   ```bash
   node diagnose.js
   ```

5. **Open the Application** in your browser:
   ```
   http://localhost:3000
   ```

---

## 📝 Environment Variables

### Backend Environment Variables
In the `backend/.env` file:
```env
REACT_APP_BACKEND_URL=http://127.0.0.1:5000
FLASK_PORT=5000
SIMULATION_MODE=true
FLASK_CORS_ENABLED=true
FLASK_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### Frontend Environment Variables
In the `beautify frontend/.env` file:
```env
# Required: Backend server URL
REACT_APP_BACKEND_URL=http://127.0.0.1:5000

# Optional: Enable simulation mode for MCC
REACT_APP_MCC_SIMULATION=false

# Optional: Log level for MCC communication
REACT_APP_MCC_LOG_LEVEL=debug

# Add an explicit CORS configuration flag
FLASK_CORS_ENABLED=true
```

---

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

### Theme Management
- `GET /settings` - Get application settings including theme
- `POST /settings` - Save application settings
- `GET /backgrounds` - Get available background options
- `POST /upload-background` - Upload a custom background
- `POST /apply-background` - Apply a selected background

---

## 📋 Dependencies

### Backend Dependencies
The Python backend requires the following dependencies (listed in `requirements.txt`):

- **Flask** – Web framework
- **Flask-Cors** – Cross-Origin Resource Sharing support
- **Flask-Compress** – Response compression for better performance
- **SQLite3** – Database management
- **python-dotenv** – Environment variable management
- **Requests** – HTTP request library

🔹 **Install all backend dependencies with:**
```bash
pip install -r requirements.txt
```

### MCC Proxy Dependencies
- **ws** - WebSocket implementation
- **net** - Network utilities
- **http** - HTTP server implementation

### Frontend Dependencies
The React frontend uses the following dependencies (defined in `package.json`):

#### Core Libraries
- **`react`, `react-dom`, `react-router-dom`** – Core React and routing
- **`@dnd-kit/sortable`, `@dnd-kit/core`, `@dnd-kit/utilities`** – Drag-and-drop functionality
- **`@tiptap/react`, `@tiptap/starter-kit`** – Rich text editing

#### UI Components
- **`@radix-ui/react-progress`, `@radix-ui/react-slot`, `@radix-ui/react-tabs`** - UI primitives
- **`class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss`** - Styling utilities
- **`lucide-react`** - Icon library
- **`react-draggable`, `react-rnd`** - For draggable and resizable windows

#### Document Processing
- **`docx`** – Report generation
- **`file-saver`** - File download functionality
- **`papaparse`** - CSV parsing
- **`sheetjs`** - Excel file processing

#### 3D Visualization
- **`three`** – 3D model rendering

🔹 **Install all frontend dependencies with:**
```bash
npm install
```

---

## 🔍 Troubleshooting

### System Startup Issues
If the entire system doesn't start properly:
- Run the diagnostic tool: `node diagnose.js`
- Check all service logs in the `logs/` directory
- Verify that all ports (3000, 5000, 8080) are available
- Make sure Node.js and Python are in your PATH

### Window Visibility Issues
If windows aren't appearing or showing correctly:
- Check the browser console for errors
- Clear browser sessionStorage and reload the page
- Ensure z-index values aren't conflicting with other components

### 3D Model Loading Problems
If 3D models don't load:
- Verify the model file is in GLB format
- Check file size (keep under 100MB for optimal performance)
- Ensure backend server is properly configured for file uploads
- Look for CORS issues in browser console

### Backend Connection Issues
If the frontend can't communicate with the backend:
- Verify backend server is running
- Check that REACT_APP_BACKEND_URL is set correctly
- Look for network errors in browser console
- Ensure backend CORS settings allow requests from frontend

### Test Execution Issues
If tests aren't running properly:
- Check MCC connection in the server window
- Verify the socket connection is established
- Look for errors in the test console output
- Ensure proper options are selected for the components being tested

### MCC Proxy Connection Issues
If the MCC proxy fails to connect:
- Check if the proxy server is running
- Verify the port settings are correct
- Look for any firewall restrictions
- If using real hardware, confirm the hardware is properly configured

---

## 📦 New Features & Additions

### Latest Feature Additions
- **Multiple Test Panels**: Added OBC-2, S-Band, and UHF test panels
- **Comprehensive Report Generation**: Report generators for all subsystems
- **Taskbar Component**: New taskbar for managing minimized windows
- **Enhanced Theme System**: Dynamic theme changes with event system
- **Background Customization**: Upload and manage custom backgrounds
- **Window State Management**: Persistent window positions and states
- **Diagnostic Tools**: System diagnosis and troubleshooting utilities
- **Process Manager**: Unified service management for easier startup
- **Log Rotation**: Automatic log management to prevent disk space issues

### Upcoming Features
- Data visualization for test results
- Additional hardware component support
- Test sequence automation
- Advanced 3D model interaction
- User account management
- PDF report generation
- Test history and comparison tools

---

## 🎯 Best Practices

### System Operation
- Always use the process manager (`sats-manager.js` or `start-sats.bat`) for the most stable operation
- For development, consider running components individually for better error isolation
- Check logs regularly for potential issues (`logs/` directory)
- Use simulation mode for development and testing without hardware
- Enable real mode only when hardware is properly connected

### Development Guidelines
- Follow the established component patterns for new features
- Use TypeScript for type safety
- Implement proper error handling in all network operations
- Use CSS modules for component-specific styling
- Maintain the existing theme compatibility

---

## **Author**
👤 **Joe Goh**  

---