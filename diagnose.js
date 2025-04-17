const { exec } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');

console.log('=== SATS Diagnostic Tool ===');
console.log(`OS: ${os.platform()} ${os.release()}`);
console.log(`Node.js: ${process.version}`);

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

// Check if backend server file exists
function checkFiles() {
  const files = [
    './backend/backend_server.py',
    './mcc-proxy/mcc-proxy.js',
    './beautify frontend/package.json'
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

async function runDiagnostics() {
  await checkPort(5000);  // Backend port
  await checkPort(8080);  // MCC Proxy port
  await checkPort(3000);  // Frontend port
  
  const pythonOk = await checkPython();
  const filesOk = checkFiles();
  
  console.log('\n=== Diagnostic Summary ===');
  console.log(`Python/Python3 available: ${pythonOk ? '✅' : '❌'}`);
  console.log(`Required files exist: ${filesOk ? '✅' : '❌'}`);
  
  console.log('\nRecommendation:');
  if (!pythonOk) {
    console.log('- Install Python and add it to your PATH');
  }
  if (!filesOk) {
    console.log('- Ensure all required files exist in their correct locations');
  }
  
  console.log('\nIf all diagnostics pass but problems persist, try:');
  console.log('1. Start each service manually in separate terminals');
  console.log('2. Check log files in the logs directory');
  console.log('3. Modify sats-manager.js to increase delays between service startups');
}

runDiagnostics();