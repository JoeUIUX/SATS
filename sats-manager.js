// sats-manager.js
// Process manager for Satellite Automated Testing System
// Starts and manages all three required processes

const { spawn } = require('child_process');
const path = require('path');
const readline = require('readline');
const fs = require('fs');
const os = require('os');

// Configuration (adjust these paths as needed)
const CONFIG = {
  backendPath: path.resolve(process.cwd(), 'backend'),
  backendScript: 'backend_server.py',
  proxyPath: path.resolve(process.cwd(), 'mcc-proxy'),
  proxyScript: 'mcc-proxy.js',
  frontendPath: path.resolve(process.cwd(), 'beautify frontend'),
  frontendCommand: os.platform() === 'win32' ? 'npm.cmd' : 'npm',
  frontendArgs: ['run', 'dev'],
  logPath: path.resolve(process.cwd(), 'logs'),
  logToFile: true,
  backendEnv: { 
    ...process.env, 
    PYTHONUNBUFFERED: '1',
    FLASK_ENV: 'development',
    DATABASE_SYNC_TIMEOUT: '5000',
    FLASK_DEBUG: '1',
    FLASK_APP: 'backend_server.py',
    PYTHONIOENCODING: 'utf-8',     // Force UTF-8 encoding for Python I/O
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

// Start backend process
const startBackend = () => {
  log('Starting backend server...', backendLog);

  // Kill any process on port 5000 before starting
  killProcessOnPort(5000);
  
  // Initialize files with proper encoding settings
  initializeForEncoding();
  
  // For Windows: Create explicit command for running Python correctly
  const isWindows = os.platform() === 'win32';
  let command = isWindows ? 'python' : 'python3';
  let args = ['-m', 'flask', 'run', '--host=0.0.0.0', '--port=5000'];

  log(`Starting backend with command: ${command} ${args.join(' ')}`, backendLog);
  
  processes.backend = spawn(command, args, {
    cwd: CONFIG.backendPath,
    shell: true,
    env: {
      ...process.env,
      PYTHONUNBUFFERED: '1',
      FLASK_APP: 'backend_server.py',
      FLASK_ENV: 'development',
      FLASK_DEBUG: '1',
      PYTHONIOENCODING: 'utf-8',
      FLASK_CORS_ENABLED: 'true',
      FLASK_CORS_ORIGINS: 'http://localhost:3000,http://127.0.0.1:3000'
    }
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
const startAll = () => {
  log('Starting all SATS services...', null);

  rotateLogFiles();

  startBackend();
  
  // Increase the delay before starting proxy
  setTimeout(() => {
    startProxy();
    
    // Increase the delay before starting frontend
    setTimeout(() => {
      startFrontend();
      log('All SATS services started!', null);
      log('Press "q" to quit all processes, or "h" for help', null);
    }, 5000); // Increased from 2000ms to 5000ms
  }, 8000); // Increased from 3000ms to 8000ms
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
      // On Windows, we'll need a different approach
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
log('-----------------', null);
log('Starting services...', null);
log('Press "h" for available commands', null);

startAll();