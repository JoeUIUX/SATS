# Beautify Frontend - SATS

## Overview
This is the frontend for the **Satellite Automated Testing System (SATS)**.  
It is built using **React** with **TypeScript** and uses **CSS Modules** for styling.

---

## 🔧 Installation & Setup

### **1️⃣ Install Dependencies**
Before running the frontend, install the required dependencies:
```bash
npm install
```

### **2️⃣ Run the Frontend**
To start the development server:
```bash
npm run dev
```
By default, the application will be available at:
```bash
http://localhost:3000
```

---

## 📂 Project Structure
```
beautify frontend/
│-- src/
│   ├── app/              # Global styles & layout
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/       # Reusable UI components
│   │   ├── MainScreen/
│   │   │   ├── MainScreen.tsx
│   │   │   ├── MainScreen.module.css
│   │   │   ├── SortableItem.tsx
│   │   ├── ServerWindow/
│   │   ├── ToTestList/
│   │   ├── WelcomeWindow/
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
- **State Management**: React Hooks
- **Styling**: CSS Modules
- **Drag & Drop**: DnD Kit
- **Rich Text Editing**: TipTap Editor

---

## 🔧 Environment Variables
Ensure you have a `.env` file with:
```env
REACT_APP_BACKEND_URL=(your backend server url)
```

---

## **Author**
👤 **Joe Goh**  
📩 *Feel free to reach out for questions or collaboration!*

---