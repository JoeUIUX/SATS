// sats-manager.js
// Process manager for Satellite Automated Testing System
// Starts and manages all three required processes - backend, mcc-proxy, frontend
// edit together with start-sats.bat usually

const { spawn } = require('child_process');
const path = require('path');
const readline = require('readline');
const fs = require('fs');
const os = require('os');

// prerequisite checking function
const checkPrerequisites = () => {
  return new Promise((resolve) => {
    const { spawn } = require('child_process');
    const checks = [];
    
    // Check Node.js
    const nodeCheck = spawn('node', ['--version'], { shell: true });
    nodeCheck.on('close', (code) => {
      if (code === 0) {
        log('✅ Node.js is available', null);
      } else {
        log('❌ Node.js not found - please install from https://nodejs.org/', null);
        checks.push('node');
      }
    });
    
    // Check npm
    const npmCheck = spawn('npm', ['--version'], { shell: true });
    npmCheck.on('close', (code) => {
      if (code === 0) {
        log('✅ npm is available', null);
      } else {
        log('❌ npm not found - should come with Node.js installation', null);
        checks.push('npm');
      }
    });
    
    // Check Python
    const pythonCheck = spawn('python', ['--version'], { shell: true });
    pythonCheck.on('close', (code) => {
      if (code === 0) {
        log('✅ Python is available', null);
        setTimeout(() => resolve(checks.length === 0), 1000);
      } else {
        // Try python3
        const python3Check = spawn('python3', ['--version'], { shell: true });
        python3Check.on('close', (code3) => {
          if (code3 === 0) {
            log('✅ Python3 is available', null);
          } else {
            log('❌ Python/Python3 not found - please install from https://python.org/', null);
            checks.push('python');
          }
          setTimeout(() => resolve(checks.length === 0), 1000);
        });
      }
    });
  });
};

// frontend dependency installation
const installFrontendDependencies = () => {
  return new Promise((resolve) => {
    const nodeModulesPath = path.join(CONFIG.frontendPath, 'node_modules');
    
    if (fs.existsSync(nodeModulesPath)) {
      log('Frontend dependencies already installed', frontendLog);
      resolve(true);
      return;
    }
    
    log('Installing frontend dependencies...', frontendLog);
    log('This may take a few minutes for first-time setup', frontendLog);
    
    const installProcess = spawn(CONFIG.frontendCommand, ['install'], {
      cwd: CONFIG.frontendPath,
      shell: true
    });
    
    installProcess.stdout.on('data', (data) => {
      handleProcessOutput(data, 'Frontend Install', frontendLog);
    });
    
    installProcess.stderr.on('data', (data) => {
      handleProcessOutput(data, 'Frontend Install Error', frontendLog);
    });
    
    installProcess.on('close', (code) => {
      if (code === 0) {
        log('✅ Frontend dependencies installed successfully', frontendLog);
        resolve(true);
      } else {
        log(`❌ Failed to install frontend dependencies (exit code: ${code})`, frontendLog);
        resolve(false);
      }
    });
    
    installProcess.on('error', (err) => {
      log(`❌ Error installing frontend dependencies: ${err.message}`, frontendLog);
      resolve(false);
    });
  });
};

// MCC proxy dependency installation
const installProxyDependencies = () => {
  return new Promise((resolve) => {
    const nodeModulesPath = path.join(CONFIG.proxyPath, 'node_modules');
    
    if (fs.existsSync(nodeModulesPath)) {
      log('MCC proxy dependencies already installed', proxyLog);
      resolve(true);
      return;
    }
    
    log('Installing MCC proxy dependencies...', proxyLog);
    
    const installProcess = spawn(CONFIG.frontendCommand, ['install', 'ws', 'net', 'http'], {
      cwd: CONFIG.proxyPath,
      shell: true
    });
    
    installProcess.stdout.on('data', (data) => {
      handleProcessOutput(data, 'Proxy Install', proxyLog);
    });
    
    installProcess.stderr.on('data', (data) => {
      handleProcessOutput(data, 'Proxy Install Error', proxyLog);
    });
    
    installProcess.on('close', (code) => {
      if (code === 0) {
        log('✅ MCC proxy dependencies installed successfully', proxyLog);
        resolve(true);
      } else {
        log(`❌ Failed to install MCC proxy dependencies (exit code: ${code})`, proxyLog);
        resolve(false);
      }
    });
    
    installProcess.on('error', (err) => {
      log(`❌ Error installing MCC proxy dependencies: ${err.message}`, proxyLog);
      resolve(false);
    });
  });
};

// directory creation function
const createNecessaryDirectories = () => {
  const dirs = [
    CONFIG.logPath,
    path.join(CONFIG.backendPath, 'models'),
    path.join(process.cwd(), 'logs')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      try {
        fs.mkdirSync(dir, { recursive: true });
        log(`✅ Created directory: ${dir}`, null);
      } catch (error) {
        log(`❌ Failed to create directory ${dir}: ${error.message}`, null);
      }
    }
  });
};

// Configuration (adjust these paths as needed)
const CONFIG = {
  backendPath: path.resolve(process.cwd(), 'backend'),
  backendScript: 'backend_server.py',
  proxyPath: path.resolve(process.cwd(), 'mcc-proxy'),
  proxyScript: 'mcc-proxy.js',
  frontendPath: path.resolve(process.cwd(), 'beautify frontend'),
  frontendCommand: os.platform() === 'win32' ? 'npm.cmd' : 'npm',
frontendArgs: ['run', 'dev', '--', '--hostname', 'localhost', '--port', '3000'],
  logPath: path.resolve(process.cwd(), 'logs'),
  logToFile: true,
  venvPath: path.resolve(process.cwd(), 'backend', 'venv'),
  backendEnv: { 
    ...process.env, 
    PYTHONUNBUFFERED: '1',
    FLASK_ENV: 'development',
    DATABASE_SYNC_TIMEOUT: '5000',
    FLASK_DEBUG: '1',
    FLASK_APP: 'backend_server.py',
    PYTHONIOENCODING: 'utf-8',     // Force UTF-8 encoding for Python I/O, to show symbols in console
    FLASK_CORS_ENABLED: 'true',    // Enable CORS specifically
    FLASK_CORS_ORIGINS: 'http://localhost:3000,http://127.0.0.1:3000'  // Whitelist origins
  }
};

// after CONFIG definition
const rotateLogFiles = () => {
  if (!CONFIG.logToFile) return;
  
  const logFiles = ['backend.log', 'mcc-proxy.log', 'frontend.log'];
  
  logFiles.forEach(filename => {
    const logPath = path.join(CONFIG.logPath, filename);
    if (fs.existsSync(logPath)) {
      const stats = fs.statSync(logPath);
      // Check if file size exceeds 10MB (adjust this size as needed)
      if (stats.size > 10 * 1024 * 1024) {
        const date = new Date().toISOString().replace(/[:.]/g, '-');
        const archivePath = path.join(CONFIG.logPath, `${filename}.${date}`);
        
        try {
          // Close existing write streams if they're open
          if (filename === 'backend.log' && backendLog) {
            backendLog.end();
          } else if (filename === 'mcc-proxy.log' && proxyLog) {
            proxyLog.end();
          } else if (filename === 'frontend.log' && frontendLog) {
            frontendLog.end();
          }
          
          // Rename current log file to archive name
          fs.renameSync(logPath, archivePath);
          // Create a new empty log file
          fs.writeFileSync(logPath, `Log rotated at ${new Date().toLocaleString()}\n`);
          log(`Rotated log file: ${filename} -> ${path.basename(archivePath)}`, null);
          
          // Recreate write streams
          if (filename === 'backend.log') {
            backendLog = fs.createWriteStream(logPath, { flags: 'a' });
          } else if (filename === 'mcc-proxy.log') {
            proxyLog = fs.createWriteStream(logPath, { flags: 'a' });
          } else if (filename === 'frontend.log') {
            frontendLog = fs.createWriteStream(logPath, { flags: 'a' });
          }
        } catch (error) {
          log(`Error rotating log file ${filename}: ${error}`, null);
        }
      }
    }
  });
  
  // Clean up old archived logs (keep last 5 for each type)
  try {
    const files = fs.readdirSync(CONFIG.logPath);
    
    // Group archived logs by type
    const logGroups = {};
    files.forEach(file => {
      // Match log files with timestamp suffix
      if (file.match(/^(.*\.log)\.\d{4}-\d{2}-\d{2}T/)) {
        const baseName = file.split('.')[0] + '.log';
        if (!logGroups[baseName]) {
          logGroups[baseName] = [];
        }
        logGroups[baseName].push(file);
      }
    });
    
    // For each log type, keep only the 5 newest files
    Object.keys(logGroups).forEach(baseName => {
      const group = logGroups[baseName];
      if (group.length > 5) {
        // Sort by name (should be chronological due to ISO date format)
        group.sort((a, b) => b.localeCompare(a));
        
        // Delete all but the 5 newest
        group.slice(5).forEach(file => {
          const filePath = path.join(CONFIG.logPath, file);
          fs.unlinkSync(filePath);
          log(`Deleted old log archive: ${file}`, null);
        });
      }
    });
  } catch (error) {
    log(`Error cleaning up old logs: ${error}`, null);
  }
};

// Function to initialize required files with proper encoding
const initializeForEncoding = () => {
  // Create .env file with CORS settings if it doesn't exist
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    try {
      const envContent = `
REACT_APP_BACKEND_URL=http://127.0.0.1:5000

# Set to false to attempt real connections with the server
REACT_APP_MCC_SIMULATION=false

# Set log level (debug, info, warn, error)
REACT_APP_MCC_LOG_LEVEL=debug

# Add an explicit CORS configuration flag
FLASK_CORS_ENABLED=true
FLASK_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
`;
      fs.writeFileSync(envPath, envContent, 'utf8');
      log('Created .env file with CORS settings', null);
    } catch (error) {
      log(`Error creating .env file: ${error}`, null);
    }
  }

  // Create or update .flaskenv file
  const flaskEnvPath = path.join(CONFIG.backendPath, '.flaskenv');
  try {
    const flaskEnvContent = `
FLASK_APP=backend_server.py
FLASK_ENV=development
FLASK_DEBUG=1
FLASK_CORS_ENABLED=true
FLASK_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
PYTHONIOENCODING=utf-8
`;
    fs.writeFileSync(flaskEnvPath, flaskEnvContent, 'utf8');
    log('Created/updated .flaskenv file', null);
  } catch (error) {
    log(`Error creating .flaskenv file: ${error}`, null);
  }
};

// Function to check if virtual environment exists and is valid
const checkVirtualEnv = () => {
  const isWindows = os.platform() === 'win32';
  const activateScript = isWindows 
    ? path.join(CONFIG.venvPath, 'Scripts', 'activate.bat')
    : path.join(CONFIG.venvPath, 'bin', 'activate');
  
  const pythonExe = isWindows
    ? path.join(CONFIG.venvPath, 'Scripts', 'python.exe')
    : path.join(CONFIG.venvPath, 'bin', 'python');
  
  const valid = fs.existsSync(activateScript) && fs.existsSync(pythonExe);
  
  if (!valid) {
    log(`Virtual environment not found or invalid at: ${CONFIG.venvPath}`, null);
    log(`Expected activation script: ${activateScript}`, null);
    log(`Expected Python executable: ${pythonExe}`, null);
  }
  
  return {
    valid,
    activateScript,
    pythonExe
  };
};

// Create logs directory if it doesn't exist
if (CONFIG.logToFile && !fs.existsSync(CONFIG.logPath)) {
  fs.mkdirSync(CONFIG.logPath, { recursive: true });
}

// Create log streams
const backendLog = CONFIG.logToFile ? 
  fs.createWriteStream(path.join(CONFIG.logPath, 'backend.log'), { flags: 'a' }) : null;
const proxyLog = CONFIG.logToFile ? 
  fs.createWriteStream(path.join(CONFIG.logPath, 'mcc-proxy.log'), { flags: 'a' }) : null;
const frontendLog = CONFIG.logToFile ? 
  fs.createWriteStream(path.join(CONFIG.logPath, 'frontend.log'), { flags: 'a' }) : null;

// Store process handles
const processes = {
  backend: null,
  proxy: null,
  frontend: null
};

// Helper to get timestamp for logging
const timestamp = () => {
  const now = new Date();
  return `[${now.toLocaleDateString()} ${now.toLocaleTimeString()}]`;
};

// Log both to console and file if configured
const log = (message, stream = null) => {
  const logMessage = `${timestamp()} ${message}`;
  console.log(logMessage);
  if (stream) {
    stream.write(logMessage + '\n');
  }
};

// Process output handler with improved Flask log handling
const handleProcessOutput = (data, processName, stream) => {
  const output = data.toString().trim();
  if (output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.trim()) {
        // Special handling for Flask server messages that come through stderr
        if (processName === 'Backend Error') {
          // Check for Flask startup messages
          if (line.includes('Running on') || 
              line.includes('Press CTRL+C to quit') || 
              line.includes('Restarting with stat') || 
              line.includes('Debugger is active') || 
              line.includes('Debugger PIN') ||
              line.includes('This is a development server')) {
            
            // These are normal startup messages, not errors
            log(`[Backend Info] ${line}`, stream);
          } 
          // Check if the log contains an HTTP request
          else if (line.includes(' HTTP/1.1') || line.includes(' HTTP/2.0')) {
            // Check if it's a successful status code (2xx or 3xx)
            const statusCodeMatch = line.match(/HTTP\/[\d.]+" (\d{3})/);
            const statusCode = statusCodeMatch ? parseInt(statusCodeMatch[1]) : 0;
            
            if (statusCode >= 200 && statusCode < 400) {
              // This is a successful request, not an error
              log(`[Backend Request] ${line}`, stream);
            } else {
              // This is an actual error response
              log(`[Backend Error] ${line}`, stream);
            }
          } else {
            // Keep original error label for actual errors
            log(`[${processName}] ${line}`, stream);
          }
        } else {
          // Standard logging for everything else
          log(`[${processName}] ${line}`, stream);
        }
      }
    });
  }
};

// function to kill any existing processes on port 5000 before starting:
const killProcessOnPort = (port) => {
  try {
    const isWindows = os.platform() === 'win32';
    if (isWindows) {
      // On Windows
      spawn('cmd', ['/c', `for /f "tokens=5" %a in ('netstat -aon ^| findstr :${port}') do taskkill /F /PID %a`], { shell: true });
    } else {
      // On Unix/Mac
      spawn('sh', ['-c', `lsof -i :${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`], { shell: true });
    }
    log(`Attempted to kill any process on port ${port}`, null);
  } catch (error) {
    log(`Error killing process on port ${port}: ${error}`, null);
  }
};

// Start backend process with virtual environment
const startBackend = () => {
  log('Starting backend server...', backendLog);

  // Kill any process on port 5000 before starting
  killProcessOnPort(5000);
  
  // Initialize files with proper encoding settings
  initializeForEncoding();
  
  // Check virtual environment
  const venv = checkVirtualEnv();
  if (!venv.valid) {
    log('WARNING: Virtual environment is not valid or missing', backendLog);
    log('Will attempt to create virtual environment...', backendLog);
    
    // Create virtual environment
    const isWindows = os.platform() === 'win32';
    const createVenvCmd = isWindows ? 'python' : 'python3';
    const createVenvArgs = ['-m', 'venv', CONFIG.venvPath];
    
    try {
      log(`Creating virtual environment at: ${CONFIG.venvPath}`, backendLog);
      const createVenvProcess = spawn(createVenvCmd, createVenvArgs, {
        cwd: CONFIG.backendPath,
        shell: true
      });
      
      createVenvProcess.on('close', (code) => {
        if (code === 0) {
          log('Virtual environment created successfully', backendLog);
          // Attempt to install requirements
          installRequirements();
        } else {
          log(`Failed to create virtual environment (exit code: ${code})`, backendLog);
          startBackendFallback();
        }
      });
    } catch (error) {
      log(`Error creating virtual environment: ${error.message}`, backendLog);
      startBackendFallback();
    }
  } else {
    // Virtual environment exists, proceed to start Flask
    startBackendWithVenv();
  }
};

// Install requirements in the virtual environment
const installRequirements = () => {
  const isWindows = os.platform() === 'win32';
  const pipExe = isWindows
    ? path.join(CONFIG.venvPath, 'Scripts', 'pip.exe')
    : path.join(CONFIG.venvPath, 'bin', 'pip');
  
  const requirementsPath = path.join(CONFIG.backendPath, 'requirements.txt');
  
  if (!fs.existsSync(requirementsPath)) {
    log(`Requirements file not found at: ${requirementsPath}`, backendLog);
    log('Continuing without installing requirements', backendLog);
    startBackendWithVenv();
    return;
  }
  
  log('Installing requirements in virtual environment...', backendLog);
  
  let installProcess;
  
  if (isWindows) {
    // On Windows, use the pip.exe directly
    installProcess = spawn(pipExe, ['install', '-r', requirementsPath], {
      cwd: CONFIG.backendPath,
      shell: true
    });
  } else {
    // On Unix/Mac, source the activation script
    installProcess = spawn('sh', ['-c', `source "${path.join(CONFIG.venvPath, 'bin', 'activate')}" && pip install -r requirements.txt`], {
      cwd: CONFIG.backendPath,
      shell: true
    });
  }
  
  installProcess.stdout.on('data', (data) => {
    handleProcessOutput(data, 'PIP Install', backendLog);
  });
  
  installProcess.stderr.on('data', (data) => {
    handleProcessOutput(data, 'PIP Install Error', backendLog);
  });
  
  installProcess.on('close', (code) => {
    if (code === 0) {
      log('Requirements installed successfully', backendLog);
    } else {
      log(`Failed to install requirements (exit code: ${code})`, backendLog);
    }
    
    // Proceed to start Flask regardless of requirements install result
    startBackendWithVenv();
  });
};

// Start backend with virtual environment - Alternative approach for Windows
const startBackendWithVenv = () => {
  const isWindows = os.platform() === 'win32';
  
  if (isWindows) {
    // On Windows, use a batch file approach 
    // Create a temporary batch file to handle the virtual environment activation
    const tempBatPath = path.join(os.tmpdir(), 'run_flask_venv.bat');
    const venvActivatePath = path.join(CONFIG.venvPath, 'Scripts', 'activate.bat');
    
    // Build batch file content
    const batchContent = `
@echo off
call "${venvActivatePath}"
cd /d "${CONFIG.backendPath}"
python -m flask run --host=0.0.0.0 --port=5000
`;
    
    // Write the batch file
    try {
      fs.writeFileSync(tempBatPath, batchContent);
      log(`Created temporary batch file at ${tempBatPath}`, backendLog);
      
      // Run the batch file
      processes.backend = spawn('cmd', ['/c', tempBatPath], {
        env: CONFIG.backendEnv,
        shell: true
      });
      
      // Auto-delete the batch file when the process exits
      processes.backend.on('close', () => {
        try {
          fs.unlinkSync(tempBatPath);
          log('Deleted temporary batch file', backendLog);
        } catch (err) {
          log(`Error deleting temporary batch file: ${err.message}`, backendLog);
        }
      });
    } catch (err) {
      log(`Error creating temporary batch file: ${err.message}`, backendLog);
      startBackendFallback();
      return;
    }
  } else {
    // Unix/Mac approach remains the same
    const pythonExe = path.join(CONFIG.venvPath, 'bin', 'python');
    const activateCmd = `source "${path.join(CONFIG.venvPath, 'bin', 'activate')}" && "${pythonExe}" -m flask run --host=0.0.0.0 --port=5000`;
    
    processes.backend = spawn('sh', ['-c', activateCmd], {
      cwd: CONFIG.backendPath,
      shell: true,
      env: CONFIG.backendEnv
    });
  }
  
  // Handle stdout
  processes.backend.stdout.on('data', (data) => {
    handleProcessOutput(data, 'Backend', backendLog);
  });

  // Handle stderr
  processes.backend.stderr.on('data', (data) => {
    handleProcessOutput(data, 'Backend Error', backendLog);
  });

  // Handle process exit
  processes.backend.on('close', (code) => {
    log(`Backend process exited with code ${code}`, backendLog);
    processes.backend = null;
    
    // If process exit was due to error, fall back to system Python
    if (code !== 0) {
      log('Falling back to system Python due to error...', backendLog);
      startBackendFallback();
    }
  });

  processes.backend.on('error', (err) => {
    log(`Backend process error: ${err.message}`, backendLog);
    log('Falling back to system Python...', backendLog);
    startBackendFallback();
  });
};

// Fallback to starting backend without virtual environment
const startBackendFallback = () => {
  log('Falling back to system Python for Flask server', backendLog);
  
  // For Windows: Create explicit command for running Python correctly
  const isWindows = os.platform() === 'win32';
  let command = isWindows ? 'python' : 'python3';
  let args = ['-m', 'flask', 'run', '--host=0.0.0.0', '--port=5000'];

  log(`Starting backend with command: ${command} ${args.join(' ')}`, backendLog);
  
  processes.backend = spawn(command, args, {
    cwd: CONFIG.backendPath,
    shell: true,
    env: CONFIG.backendEnv
  });

  // Handle stdout
  processes.backend.stdout.on('data', (data) => {
    handleProcessOutput(data, 'Backend', backendLog);
  });

  // Handle stderr
  processes.backend.stderr.on('data', (data) => {
    handleProcessOutput(data, 'Backend Error', backendLog);
  });

  // Handle process exit
  processes.backend.on('close', (code) => {
    log(`Backend process exited with code ${code}`, backendLog);
    processes.backend = null;
  });

  processes.backend.on('error', (err) => {
    log(`Backend process error: ${err.message}`, backendLog);
  });
};

// Start MCC proxy process
const startProxy = () => {
  log('Starting MCC proxy server...', proxyLog);
  processes.proxy = spawn('node', [CONFIG.proxyScript], {
    cwd: CONFIG.proxyPath,
    shell: true
  });

  // Handle stdout
  processes.proxy.stdout.on('data', (data) => {
    handleProcessOutput(data, 'MCC Proxy', proxyLog);
  });

  // Handle stderr
  processes.proxy.stderr.on('data', (data) => {
    handleProcessOutput(data, 'MCC Proxy Error', proxyLog);
  });

  // Handle process exit
  processes.proxy.on('close', (code) => {
    log(`MCC Proxy process exited with code ${code}`, proxyLog);
    processes.proxy = null;
  });

  processes.proxy.on('error', (err) => {
    log(`MCC Proxy process error: ${err.message}`, proxyLog);
  });
};

// Start frontend process
const startFrontend = () => {
  log('Starting frontend development server...', frontendLog);
  processes.frontend = spawn(CONFIG.frontendCommand, CONFIG.frontendArgs, {
    cwd: CONFIG.frontendPath,
    shell: true
  });

  // Handle stdout
  processes.frontend.stdout.on('data', (data) => {
    handleProcessOutput(data, 'Frontend', frontendLog);
  });

  // Handle stderr
  processes.frontend.stderr.on('data', (data) => {
    handleProcessOutput(data, 'Frontend Error', frontendLog);
  });

  // Handle process exit
  processes.frontend.on('close', (code) => {
    log(`Frontend process exited with code ${code}`, frontendLog);
    processes.frontend = null;
  });

  processes.frontend.on('error', (err) => {
    log(`Frontend process error: ${err.message}`, frontendLog);
  });
};

// Start all processes
const startAll = async () => {
  log('SATS Startup Sequence Starting...', null);
  log('=================================', null);
  
  // Step 1: Check prerequisites
  log('Step 1: Checking prerequisites...', null);
  const prereqsOk = await checkPrerequisites();
  if (!prereqsOk) {
    log('❌ Prerequisites check failed. Please install missing components.', null);
    return;
  }
  
  // Step 2: Create directories
  log('Step 2: Creating necessary directories...', null);
  createNecessaryDirectories();
  
  // Step 3: Rotate logs
  log('Step 3: Checking log files...', null);
  rotateLogFiles();
  
  // Step 4: Install dependencies
  log('Step 4: Installing dependencies...', null);
  
  const frontendOk = await installFrontendDependencies();
  const proxyOk = await installProxyDependencies();
  
  if (!frontendOk || !proxyOk) {
    log('❌ Dependency installation failed. Check logs for details.', null);
    log('You may need to run npm install manually in the respective directories.', null);
  }
  
  // Step 5: Start services
  log('Step 5: Starting all SATS services...', null);
  
  startBackend();
  
  setTimeout(() => {
    startProxy();
    
    setTimeout(() => {
      startFrontend();
      log('==========================================', null);
      log('✅ All SATS services started successfully!', null);
      log('🌐 Frontend: http://localhost:3000', null);
      log('🔧 Backend: http://localhost:5000', null);
      log('🔗 MCC Proxy: ws://localhost:8080', null);
      log('==========================================', null);
      log('Commands: q=quit, r=restart, h=help', null);
    }, 5000);
  }, 8000);
};
  
  // Helper function to kill a process with the appropriate signal for the platform
  const killProcess = (proc, name) => {
    if (proc) {
      log(`Stopping ${name} process...`, null);
      
      // Use different kill approach based on platform
      if (os.platform() === 'win32') {
        // Windows needs taskkill for proper termination
        spawn('taskkill', ['/pid', proc.pid, '/f', '/t']);
      } else {
        // Linux/Mac can use kill signals
        proc.kill('SIGTERM');
      }
    }
  };

  // Gracefully stop all processes
const stopAll = () => {
  log('Stopping all SATS services...', null);

    // Add database cleanup signal for the backend process
    if (processes.backend) {
      log('Sending database cleanup signal to backend...', backendLog);
      // Send SIGUSR1 as a custom signal for clean database shutdown
      // On Windows, need a different approach
      if (os.platform() !== 'win32') {
        processes.backend.kill('SIGUSR1');
        // Give it time to properly close DB connections
        setTimeout(() => {
          killProcess(processes.backend, 'Backend');
        }, 2000);
      } else {
        // On Windows, just kill the process
        killProcess(processes.backend, 'Backend');
      }
    }
  
  // Stop in reverse order of starting
  killProcess(processes.frontend, 'Frontend');
  setTimeout(() => {
    killProcess(processes.proxy, 'MCC Proxy');
    setTimeout(() => {
      killProcess(processes.backend, 'Backend');
      setTimeout(() => {
        log('All processes stopped.', null);
        if (backendLog) backendLog.end();
        if (proxyLog) proxyLog.end();
        if (frontendLog) frontendLog.end();
        process.exit(0);
      }, 1000);
    }, 1000);
  }, 1000);
};

// Handle process shutdown
process.on('SIGINT', () => {
  log('Received SIGINT signal', null);
  stopAll();
});

process.on('SIGTERM', () => {
  log('Received SIGTERM signal', null);
  stopAll();
});

// Interactive command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Listen for single key presses
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

// Define available commands
const commands = {
  'q': {
    description: 'Quit all processes and exit',
    action: stopAll
  },
  'r': {
    description: 'Restart all processes',
    action: () => {
      stopAll();
      setTimeout(startAll, 5000);
    }
  },
  'b': {
    description: 'Restart backend only',
    action: () => {
      if (processes.backend) {
        killProcess(processes.backend, 'Backend');
        setTimeout(startBackend, 2000);
      } else {
        startBackend();
      }
    }
  },
  'p': {
    description: 'Restart proxy only',
    action: () => {
      if (processes.proxy) {
        killProcess(processes.proxy, 'Proxy');
        setTimeout(startProxy, 2000);
      } else {
        startProxy();
      }
    }
  },
  'f': {
    description: 'Restart frontend only',
    action: () => {
      if (processes.frontend) {
        killProcess(processes.frontend, 'Frontend');
        setTimeout(startFrontend, 2000);
      } else {
        startFrontend();
      }
    }
  },
  's': {
    description: 'Show status of all processes',
    action: () => {
      log('Process Status:', null);
      log(`Backend: ${processes.backend ? 'Running' : 'Stopped'}`, null);
      log(`MCC Proxy: ${processes.proxy ? 'Running' : 'Stopped'}`, null);
      log(`Frontend: ${processes.frontend ? 'Running' : 'Stopped'}`, null);
    }
  },
  'l': {
    description: 'Show log paths',
    action: () => {
      if (CONFIG.logToFile) {
        log('Log file locations:', null);
        log(`Backend: ${path.join(CONFIG.logPath, 'backend.log')}`, null);
        log(`MCC Proxy: ${path.join(CONFIG.logPath, 'mcc-proxy.log')}`, null);
        log(`Frontend: ${path.join(CONFIG.logPath, 'frontend.log')}`, null);
      } else {
        log('Log to file is disabled', null);
      }
    }
  },
  'h': {
    description: 'Show help',
    action: () => {
      log('Available commands:', null);
      Object.keys(commands).forEach(key => {
        log(`  ${key}: ${commands[key].description}`, null);
      });
    }
  },
  'c': {
  description: 'Clean/rotate log files',
  action: rotateLogFiles
},
'd': {
    description: 'Run diagnostics',
    action: async () => {
      log('Running system diagnostics...', null);
      const prereqsOk = await checkPrerequisites();
      createNecessaryDirectories();
      
      // Check if all services are responding
      const http = require('http');
      
      // Check backend
      const backendReq = http.get('http://localhost:5000', (res) => {
        log(`✅ Backend responding (Status: ${res.statusCode})`, null);
      });
      backendReq.on('error', () => {
        log('❌ Backend not responding', null);
      });
      backendReq.setTimeout(2000, () => {
        backendReq.abort();
        log('❌ Backend timeout', null);
      });
      
      // Check frontend
      const frontendReq = http.get('http://localhost:3000', (res) => {
        log(`✅ Frontend responding (Status: ${res.statusCode})`, null);
      });
      frontendReq.on('error', () => {
        log('❌ Frontend not responding', null);
      });
      frontendReq.setTimeout(2000, () => {
        frontendReq.abort();
        log('❌ Frontend timeout', null);
      });
    }
  },
  
  'i': {
    description: 'Reinstall all dependencies',
    action: async () => {
      log('Reinstalling all dependencies...', null);
      
      // Remove node_modules directories
      const frontendNodeModules = path.join(CONFIG.frontendPath, 'node_modules');
      const proxyNodeModules = path.join(CONFIG.proxyPath, 'node_modules');
      
      try {
        if (fs.existsSync(frontendNodeModules)) {
          fs.rmSync(frontendNodeModules, { recursive: true, force: true });
          log('Removed frontend node_modules', null);
        }
        if (fs.existsSync(proxyNodeModules)) {
          fs.rmSync(proxyNodeModules, { recursive: true, force: true });
          log('Removed proxy node_modules', null);
        }
      } catch (error) {
        log(`Error removing node_modules: ${error.message}`, null);
      }
      
      // Reinstall
      await installFrontendDependencies();
      await installProxyDependencies();
      log('Dependency reinstallation complete', null);
    }
  }
};

// Process keypresses
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    // Ctrl+C
    stopAll();
  } else if (commands[str]) {
    commands[str].action();
  }
});

// Start all processes
log('SATS Process Manager', null);
log('--------------------', null);
log('Starting services...', null);
log('Press "h" for available commands', null);

startAll();