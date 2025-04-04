# Satellite Automated Testing System (SATS) Frontend

## Overview
The frontend for the **Satellite Automated Testing System (SATS)** provides a comprehensive interface for satellite testing and monitoring. Built using **React** with **TypeScript** and **CSS Modules** for styling, it offers an intuitive and interactive experience for satellite engineers and operators.

---

## 🔧 Installation & Setup

### **1️⃣ Install Dependencies**
Before running the frontend, install the required dependencies:

```bash
# Install base dependencies
npm install

# Install UI component libraries
npm install @radix-ui/react-progress @radix-ui/react-slot @radix-ui/react-tabs
npm install class-variance-authority clsx tailwind-merge tailwindcss
npm install lucide-react

# Install drag and drop libraries
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
npm install react-draggable react-rnd

# Install document processing libraries
npm install mammoth docx-preview docx turndown file-saver

# Install data processing libraries
npm install papaparse xlsx

# Install 3D libraries
npm install three

# You can also use a single command to install all dependencies
# npm install @radix-ui/react-progress @radix-ui/react-slot @radix-ui/react-tabs class-variance-authority clsx tailwind-merge tailwindcss lucide-react @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities react-draggable react-rnd mammoth docx-preview docx turndown file-saver papaparse xlsx three
```

Alternatively, if you're using the `package.json` file, a simple `npm install` will install all dependencies listed there.

### **2️⃣ Run the Frontend**
To start the development server:
```bash
npm run dev
```
By default, the application will be available at:
```bash
http://localhost:3000
```

### **3️⃣ Backend Connection**
This frontend requires the SATS backend server to be running. Make sure to:
1. Set up the backend (Flask) server
2. Configure the `.env` file with the correct backend URL
3. Ensure the backend is running before attempting to use features like profiles, model uploads, or testing functions

---

## 🚀 Features

### **Profile Management**
- Create, view, edit, and delete satellite profiles
- Upload and manage documentation in various formats (text, DOCX)
- Add and remove images for each profile
- Store and retrieve specifications for each satellite

### **3D Model Visualization**
- Upload and view 3D models of satellites (GLB format)
- Interactive model viewing with rotation, zoom, and pan
- Model statistics and analysis
- Light/dark mode compatible rendering

### **Test Management**
- Drag-and-drop interface for selecting test components
- Configurable test checkouts and configurations
- Test history tracking and management
- Component-specific test options

### **Automated Testing System**
- Component-specific test panels (e.g., OBC-1 Test Panel)
- Real-time test progress tracking
- Test report generation
- Test result visualization
- Support for various component tests with specific options

### **Floating Window System**
- Multi-window interface with modular components
- Draggable and resizable windows
- Z-index management for window focus
- Persistent window state across sessions

### **Light/Dark Mode Support**
- System-wide theme toggling
- Theme-aware components and styling
- Persistent theme preferences

---

## 📂 Project Structure
```
frontend/
│-- src/
│   ├── app/              # Global styles & layout
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/       # Reusable UI components
│   │   ├── MainScreen/
│   │   │   ├── MainScreen.tsx
│   │   │   ├── MainScreen.module.css
│   │   │   ├── DraggableBox.tsx
│   │   ├── ModelWindow/  # 3D Model visualization
│   │   │   ├── ThreeDModelWindow.jsx
│   │   │   ├── ThreeDModelWindow.module.css
│   │   ├── ServerWindow/
│   │   │   ├── ServerWindow.module.css
│   │   │   ├── ServerWindow.tsx
│   │   ├── ToTestList/
│   │   │   ├── ToTestList.module.css
│   │   │   ├── ToTestList.tsx
│   │   ├── WelcomeWindow/
│   │   │   ├── WelcomeWindow.module.css
│   │   │   ├── WelcomeWindow.tsx
│   │   ├── CheckoutTestProgress/ # Test execution and monitoring
│   │   │   ├── CheckoutTestProgress.tsx
│   │   │   ├── CheckoutTestProgress.module.css
│   │   │   ├── components/
│   │   │       ├── OBC1TestPanel.tsx
│   │   │       ├── OBC1TestPanel.module.css
│   │   ├── ui/            # UI component library
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── progress.tsx
│   │       ├── tabs.tsx
│   │       ├── index.ts
│   ├── services/         # Business logic & API services
│   │   ├── checkout/     # Test execution services
│   │   │   ├── obc1Checkout.ts
│   │   ├── reports/      # Report generation services
│   │       ├── obc1Report.ts
│   ├── utils/            # Utility functions
│   │   ├── mccUtils.ts   # MCC communication utilities
│   ├── lib/              # Library functions
│   │   ├── utils.ts      # General utilities
│   ├── types/            # TypeScript type definitions
│   │   ├── types.ts
│   ├── images.d.ts       # Image imports for TypeScript
│-- package.json          # Dependencies & scripts
│-- tsconfig.json         # TypeScript configuration
│-- .env                  # Environment variables
│-- README.md             # This file
```

---

## 📌 Technologies Used
- **Framework**: React with TypeScript
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Styling**: 
  - CSS Modules
  - Tailwind CSS (with class-variance-authority)
- **UI Components**:
  - Shadcn/UI (custom UI component library)
  - Radix UI primitives
- **Drag & Drop**: 
  - DnD Kit (for interactive drag-and-drop UI)
  - react-draggable (For draggable UI elements)
  - react-rnd (For resizable & draggable UI)
- **Rich Text Editing**: TipTap Editor
- **Document Processing**:
  - Mammoth (.docx text extraction)
  - docx-preview (For rendering .docx previews)
  - docx (For generating .docx files)
  - Turndown (Convert HTML to Markdown)
- **3D Rendering**:
  - Three.js
  - Draco Loader (for 3D model compression)
  - GLTF Loader (for loading 3D models)
- **Icons**:
  - React-Icons
  - Font Awesome (via @fortawesome)
  - Lucide React (for UI components)
- **Network Requests**: Fetch API
- **Backend Communication**: REST API
- **File Handling**:
  - File-Saver (for saving generated reports)
  - PapaParse (for CSV processing)
  - SheetJS (for Excel file processing)

---

## 🔧 Environment Variables
Create a `.env` file in the project root with these variables:

```env
# Required: Backend server URL
REACT_APP_BACKEND_URL=http://127.0.0.1:5000

# Optional: Enable simulation mode (corresponds to backend setting)
REACT_APP_MCC_SIMULATION=true

# Optional: Log level for MCC communication
REACT_APP_MCC_LOG_LEVEL=info
```

---

## 🚢 Deployment
### Production Build
To create a production build:
```bash
npm run build
```

The build artifacts will be located in the `build/` directory.

### Deployment Considerations
- Ensure CORS is properly configured on the backend server
- Update environment variables for production endpoints
- Consider using environment-specific configuration for different deployment environments

---

## ❓ Troubleshooting

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

---

## **Author**
👤 **Joe Goh**  
📩 *Feel free to reach out for questions or collaboration!*

---