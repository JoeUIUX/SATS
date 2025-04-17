@echo off
TITLE SATS Process Manager with UTF-8 Support
echo ====================================
echo SATS - Satellite Automated Testing System
echo ====================================
echo.
echo This script will start all required services:
echo  - Backend (Python Flask)
echo  - MCC Proxy (Node.js)
echo  - Frontend (React)
echo.
echo Press any key to continue or CTRL+C to cancel...
pause > nul

REM Set code page to UTF-8
chcp 65001
echo UTF-8 encoding enabled for console output

REM Check if Python is installed
WHERE python >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo ERROR: Python is not installed or not in PATH
  echo Please install Python and try again
  pause
  exit /b 1
)

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

REM Navigate to the SATS root directory
cd /d %~dp0

REM Create/update the .env file for CORS settings
echo Creating/updating .env file with CORS settings...
echo REACT_APP_BACKEND_URL=http://127.0.0.1:5000 > .env
echo REACT_APP_MCC_SIMULATION=false >> .env
echo REACT_APP_MCC_LOG_LEVEL=debug >> .env
echo FLASK_CORS_ENABLED=true >> .env
echo FLASK_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000 >> .env

echo Environment setup complete
echo.

REM Run the process manager script with explicit Node.js path
echo Starting SATS Process Manager...
echo.
echo Press Q to quit all processes when done.
echo Press H for more commands.
echo.
node sats-manager.js

REM If we get here, the manager exited
echo.
echo SATS Process Manager exited.
pause