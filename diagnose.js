const { exec } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

console.log('=== SATS Diagnostic Tool ===');
console.log(`OS: ${os.platform()} ${os.release()}`);
console.log(`Node.js: ${process.version}`);

// Define key paths (similar to sats-manager.js)
const rootDir = process.cwd();
const backendPath = path.join(rootDir, 'backend');
const venvPath = path.join(backendPath, 'venv');

// Check if port 5000 is in use
function checkPort(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      console.log(`Port ${port} is in use. Status: ${res.statusCode}`);
      resolve(true);
    });
    
    req.on('error', () => {
      console.log(`Port ${port} is available`);
      resolve(false);
    });
    
    req.setTimeout(1000, () => {
      req.abort();
      console.log(`Port ${port} check timed out`);
      resolve(false);
    });
  });
}

// Check Python version
function checkPython() {
  return new Promise((resolve) => {
    exec('python --version', (error, stdout, stderr) => {
      if (error) {
        console.log('Python not found. Trying python3...');
        exec('python3 --version', (error2, stdout2, stderr2) => {
          if (error2) {
            console.log('❌ Python/Python3 not found in PATH');
            resolve(false);
          } else {
            console.log(`✅ Python3 found: ${stdout2.trim()}`);
            resolve(true);
          }
        });
      } else {
        console.log(`✅ Python found: ${stdout.trim() || stderr.trim()}`);
        resolve(true);
      }
    });
  });
}

// Check virtual environment
function checkVirtualEnv() {
  return new Promise((resolve) => {
    const isWindows = os.platform() === 'win32';
    const activateScript = isWindows 
      ? path.join(venvPath, 'Scripts', 'activate.bat')
      : path.join(venvPath, 'bin', 'activate');
    
    const pythonExe = isWindows
      ? path.join(venvPath, 'Scripts', 'python.exe')
      : path.join(venvPath, 'bin', 'python');

    if (fs.existsSync(venvPath)) {
      if (fs.existsSync(activateScript) && fs.existsSync(pythonExe)) {
        console.log(`✅ Virtual environment found and appears valid at: ${venvPath}`);
        
        // Check installed packages in the venv
        const pipCmd = isWindows 
          ? `"${path.join(venvPath, 'Scripts', 'pip.exe')}" list`
          : `${path.join(venvPath, 'bin', 'pip')} list`;
        
        exec(pipCmd, (error, stdout, stderr) => {
          if (error) {
            console.log(`⚠️ Warning: Unable to list packages in virtual environment: ${error.message}`);
          } else {
            const packageCount = stdout.split('\n').length - 2; // Subtract header rows
            console.log(`✅ Virtual environment has ${packageCount} packages installed`);
            
            // Check for Flask specifically
            if (stdout.includes('Flask ')) {
              console.log('✅ Flask is installed in the virtual environment');
            } else {
              console.log('⚠️ Warning: Flask does not appear to be installed in the virtual environment');
            }
          }
          resolve(true);
        });
      } else {
        console.log(`⚠️ Virtual environment exists at ${venvPath} but appears to be incomplete`);
        console.log(`   Expected activate script: ${fs.existsSync(activateScript) ? '✅' : '❌'}`);
        console.log(`   Expected Python executable: ${fs.existsSync(pythonExe) ? '✅' : '❌'}`);
        resolve(false);
      }
    } else {
      console.log(`❌ Virtual environment not found at: ${venvPath}`);
      resolve(false);
    }
  });
}

// Check if backend server file exists
function checkFiles() {
  const files = [
    './backend/backend_server.py',
    './mcc-proxy/mcc-proxy.js',
    './beautify frontend/package.json',
    './backend/requirements.txt'  // Added check for requirements.txt
  ];
  
  let allExist = true;
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ File exists: ${file}`);
    } else {
      console.log(`❌ File missing: ${file}`);
      allExist = false;
    }
  });
  
  return allExist;
}

// Check if Flask environment file exists
function checkFlaskEnv() {
  const flaskEnvPath = path.join(backendPath, '.flaskenv');
  
  if (fs.existsSync(flaskEnvPath)) {
    console.log(`✅ Flask environment file exists: ${flaskEnvPath}`);
    // Optionally read the file to check content
    try {
      const content = fs.readFileSync(flaskEnvPath, 'utf8');
      if (content.includes('FLASK_APP=backend_server.py')) {
        console.log('✅ .flaskenv has FLASK_APP set correctly');
      } else {
        console.log('⚠️ Warning: .flaskenv may not have FLASK_APP set correctly');
      }
    } catch (error) {
      console.log(`⚠️ Warning: Could not read .flaskenv file: ${error.message}`);
    }
    return true;
  } else {
    console.log(`❌ Flask environment file missing: ${flaskEnvPath}`);
    return false;
  }
}

async function runDiagnostics() {
  await checkPort(5000);  // Backend port
  await checkPort(8080);  // MCC Proxy port
  await checkPort(3000);  // Frontend port
  
  const pythonOk = await checkPython();
  const filesOk = checkFiles();
  const flaskEnvOk = checkFlaskEnv();
  const venvOk = await checkVirtualEnv();
  
  console.log('\n=== Diagnostic Summary ===');
  console.log(`Python/Python3 available: ${pythonOk ? '✅' : '❌'}`);
  console.log(`Required files exist: ${filesOk ? '✅' : '❌'}`);
  console.log(`Flask environment file: ${flaskEnvOk ? '✅' : '❌'}`);
  console.log(`Virtual environment: ${venvOk ? '✅' : '❌'}`);
  
  console.log('\nRecommendation:');
  if (!pythonOk) {
    console.log('- Install Python and add it to your PATH');
  }
  if (!filesOk) {
    console.log('- Ensure all required files exist in their correct locations');
  }
  if (!flaskEnvOk) {
    console.log('- Create a .flaskenv file in the backend directory with appropriate settings');
  }
  if (!venvOk) {
    console.log('- Create a virtual environment by running:');
    console.log('  cd backend && python -m venv venv');
    console.log('- Then install required packages:');
    console.log('  cd backend && venv\\Scripts\\activate && pip install -r requirements.txt');
  }
  
  console.log('\nIf all diagnostics pass but problems persist, try:');
  console.log('1. Start each service manually in separate terminals');
  console.log('2. Check log files in the logs directory');
  console.log('3. Try running start-sats.bat which will now properly activate the virtual environment');
}

runDiagnostics();