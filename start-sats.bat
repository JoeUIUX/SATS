@echo off
TITLE SATS Process Manager with UTF-8 Support
echo =========================================
echo SATS - Satellite Automated Testing System
echo =========================================
echo.
echo This script will start all required services:
echo  - Backend (Python Flask using virtual environment)
echo  - MCC Proxy (Node.js)
echo  - Frontend (React)
echo.
echo Checking prerequisites...
echo.

REM Set code page to UTF-8
chcp 65001 >nul
echo UTF-8 encoding enabled for console output

REM Check if Python is installed
WHERE python >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo ERROR: Python is not installed or not in PATH
  echo Please install Python from https://www.python.org/downloads/
  echo Make sure to check "Add Python to PATH" during installation
  pause
  exit /b 1
)

REM Check if Node.js is installed
WHERE node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo ERROR: Node.js is not installed or not in PATH
  echo Please install Node.js from https://nodejs.org/
  pause
  exit /b 1
)

REM Check if npm is installed
WHERE npm >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo ERROR: npm is not installed or not in PATH
  echo npm should come with Node.js installation
  pause
  exit /b 1
)

echo ✅ Prerequisites check passed
echo.

REM Check if the virtual environment exists
set VENV_PATH=%~dp0backend\venv
IF NOT EXIST "%VENV_PATH%\Scripts\activate.bat" (
  echo Virtual environment not found at: %VENV_PATH%
  echo Creating virtual environment...
  cd /d %~dp0backend
  python -m venv venv
  
  IF %ERRORLEVEL% NEQ 0 (
    echo Failed to create virtual environment
    pause
    exit /b 1
  )
  
  echo ✅ Virtual environment created successfully
)

REM Install/update backend requirements
echo Checking backend dependencies...
cd /d %~dp0backend
call "%VENV_PATH%\Scripts\activate.bat"
pip install -r requirements.txt
IF %ERRORLEVEL% NEQ 0 (
  echo Failed to install backend requirements
  pause
  exit /b 1
)
echo ✅ Backend dependencies ready

REM Install MCC proxy dependencies
echo Checking MCC proxy dependencies...
cd /d "%~dp0mcc-proxy"
IF NOT EXIST "node_modules" (
  echo Installing MCC proxy dependencies...
  npm install ws net http
  IF %ERRORLEVEL% NEQ 0 (
    echo Failed to install MCC proxy dependencies
    pause
    exit /b 1
  )
  echo ✅ MCC proxy dependencies installed
) ELSE (
  echo ✅ MCC proxy dependencies already installed
)

REM Install frontend dependencies
echo Checking frontend dependencies...
cd /d "%~dp0beautify frontend"
IF NOT EXIST "node_modules" (
  echo Installing frontend dependencies...
  echo This may take a few minutes...
  npm install
  IF %ERRORLEVEL% NEQ 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
  )
  echo ✅ Frontend dependencies installed
) ELSE (
  echo ✅ Frontend dependencies already installed
)

REM Create necessary directories
echo Creating necessary directories...
cd /d %~dp0
IF NOT EXIST "logs" mkdir logs
IF NOT EXIST "backend\models" mkdir "backend\models"
echo ✅ Directory structure ready

REM Kill any existing process that might be using port 5000
echo Killing any processes using port 5000...
FOR /F "tokens=5" %%P IN ('netstat -ano ^| find ":5000"') DO (
  echo Killing process with PID %%P
  taskkill /F /PID %%P 2>nul
)

REM Explicitly set environment variables
set FLASK_APP=backend_server.py
set FLASK_ENV=development
set FLASK_DEBUG=1
set PYTHONUNBUFFERED=1
set PYTHONIOENCODING=utf-8
set FLASK_CORS_ENABLED=true
set FLASK_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

REM Create/update the .env file for CORS settings
echo Creating/updating .env file with CORS settings...
echo REACT_APP_BACKEND_URL=http://127.0.0.1:5000 > .env
echo REACT_APP_MCC_SIMULATION=false >> .env
echo REACT_APP_MCC_LOG_LEVEL=debug >> .env
echo FLASK_CORS_ENABLED=true >> .env
echo FLASK_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000 >> .env

echo.
echo ✅ All dependencies and setup complete!
echo.
echo Press any key to start SATS services or CTRL+C to cancel...
pause > nul

REM Run the process manager script
echo Starting SATS Process Manager...
echo.
echo Available commands:
echo   Q - Quit all processes
echo   R - Restart all processes  
echo   H - Show help
echo.
node sats-manager.js

REM If we get here, the manager exited
echo.
echo SATS Process Manager exited.
pause