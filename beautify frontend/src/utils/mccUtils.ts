// src/utils/mccUtils.ts
// TypeScript implementation that supports both real and simulated modes

// Define environment configuration
const MCC_CONFIG = {
  // Use environment variables or a default
  SIMULATION_MODE: process.env.REACT_APP_MCC_SIMULATION === 'true' 
                  || process.env.NODE_ENV === 'development',
  LOG_LEVEL: process.env.REACT_APP_MCC_LOG_LEVEL || 'info',
};

// Socket interface to standardize both real and simulated connections
export interface IMccSocket {
  send: (message: string) => Promise<void>;
  receive: (maxBytes?: number, timeout?: number) => Promise<string>;
  close: () => void;
  isSimulated?: boolean; // Flag to identify if this is a simulated socket
}

// Logger for MCC operations
const mccLogger = {
  debug: (message: string, ...args: any[]) => {
    if (MCC_CONFIG.LOG_LEVEL === 'debug') {
      console.debug(`[MCC] ${message}`, ...args);
    }
  },
  info: (message: string, ...args: any[]) => {
    if (['debug', 'info'].includes(MCC_CONFIG.LOG_LEVEL)) {
      console.info(`[MCC] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: any[]) => {
    console.warn(`[MCC] ${message}`, ...args);
  },
  error: (message: string, ...args: any[]) => {
    console.error(`[MCC] ${message}`, ...args);
  }
};

// Simulated MCC Socket implementation
class SimulatedMccSocket implements IMccSocket {
  private readonly simulatedData: Map<string, string>;
  private readonly delays: boolean;
  public isSimulated: boolean = true;
  
  constructor(delays = true) {
    this.simulatedData = new Map();
    this.delays = delays;
    
    // Initialize with some default values
    this.simulatedData.set("OBC1_FW_Ver_Major", "1");
    this.simulatedData.set("OBC1_FW_Ver_Minor", "2");
    this.simulatedData.set("OBC1_FW_Ver_Patch", "3");
    this.simulatedData.set("OBC1_3V3_D", "3300");
    this.simulatedData.set("OBC1_PS_3V3_OBC2_V", "3298");
    this.simulatedData.set("OBC1_PS_5V_OBC2_V", "5042");
    this.simulatedData.set("OBC1_PS_5V_OBC2_I", "120");
    this.simulatedData.set("OBC1_PS_3V3_OBC2_I", "80");
    this.simulatedData.set("OBC1_thruster_ch1_T", "24.5");
    this.simulatedData.set("OBC1_thruster_ch2_T", "25.2");
    this.simulatedData.set("OBC1_leocam_ch1_T", "22.1");
    this.simulatedData.set("OBC1_leocam_ch2_T", "23.0");
    this.simulatedData.set("OBC1_leocam_ch3_T", "22.7");
    this.simulatedData.set("OBC1_leocam_ch4_T", "23.5");
    this.simulatedData.set("OBC1_Q8_eMMC0_state", "1");
    this.simulatedData.set("OBC1_Q8_eMMC1_state", "0");
    this.simulatedData.set("OBC1_vcc_pspll", "0.85");
    this.simulatedData.set("OBC1_vcc_psbatt", "1.20");
    this.simulatedData.set("OBC1_vccint", "1.00");
    this.simulatedData.set("OBC1_vccbram", "1.00");
    this.simulatedData.set("OBC1_vccaux", "1.80");
    this.simulatedData.set("OBC1_ps_temp", "45.2");
    this.simulatedData.set("OBC1_remote_temp", "42.3");
    this.simulatedData.set("OBC1_pl_temp", "47.1");
    this.simulatedData.set("OBC1_Sys_uptime", "12345");
    this.simulatedData.set("OBC1_Sys_loads_1m", "0.25");
    this.simulatedData.set("OBC1_Sys_loads_5m", "0.30");
    this.simulatedData.set("OBC1_Sys_loads_15m", "0.28");
    this.simulatedData.set("OBC1_Sys_totalram", "1048576");
    this.simulatedData.set("OBC1_Sys_freeram", "524288");
    this.simulatedData.set("OBC1_Sys_sharedram", "65536");
    this.simulatedData.set("OBC1_Sys_bufferram", "32768");
    this.simulatedData.set("OBC1_Sys_totalswap", "2097152");
    this.simulatedData.set("OBC1_Sys_freeswap", "2097152");
    this.simulatedData.set("OBC1_Sys_procs", "68");
    this.simulatedData.set("OBC1_Sys_totalhigh", "0");
    this.simulatedData.set("OBC1_Sys_freehigh", "0");
    this.simulatedData.set("OBC1_Sys_mem_unit", "1");
    
    mccLogger.info(`Initialized simulated MCC socket with ${this.simulatedData.size} parameters`);
  }
  
  public async send(message: string): Promise<void> {
    mccLogger.debug(`[SIM] Sending: ${message.trim()}`);
    
    // Parse the message to update simulated data if it's a set command
    if (message.includes('.value=')) {
      const [param, valueStr] = message.trim().split('.value=');
      const value = valueStr.trim();
      this.simulatedData.set(param, value);
      mccLogger.debug(`[SIM] Set ${param} to ${value}`);
    }
    
    // Add simulated delay if enabled
    if (this.delays) {
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));
    }
    
    return Promise.resolve();
  }
  
  public async receive(maxBytes = 4096, timeout = 5000): Promise<string> {
    // This would contain the read logic for parameters that have been 
    // requested with param.log=true in a real implementation
    
    // In our simulation, just get the last parameters from the log=true messages
    const loggedParams = Array.from(this.simulatedData.keys())
      .filter(key => key.endsWith('.log') && this.simulatedData.get(key) === 'true');
    
    // Add simulated delay if enabled
    if (this.delays) {
      await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));
    }
    
    // For simulation, if log=true isn't set (because we don't track it),
    // we'll just respond to the actual parameter name
    // Extract parameter names from something like "param.log=true\n"
    const responses: string[] = [];
    
    // Extract all parameters from buffer that may have been sent with .log=true
    const requestBuffer = this.recentRequests.join('\n');
    const paramMatches = Array.from(requestBuffer.matchAll(/([A-Za-z0-9_]+)\.log=true/g));
    
    if (paramMatches.length > 0) {
      for (const match of paramMatches) {
        const param = match[1];
        // Check if we have this parameter
        if (this.simulatedData.has(param)) {
          responses.push(`${param}=${this.simulatedData.get(param)}`);
        } else {
          // Generate a random value for simulation
          const randomValue = (Math.random() * 100).toFixed(2);
          responses.push(`${param}=${randomValue}`);
        }
      }
    }
    
    mccLogger.debug(`[SIM] Received response: ${responses.join('\n')}`);
    return responses.join('\n');
  }
  
  public close(): void {
    mccLogger.info('[SIM] Closed simulated MCC socket');
  }
  
  // Track recent requests for simulation purposes
  private recentRequests: string[] = [];
  
  // Helper method to simulate reading multiple parameters
public simulateRead(parameters: string[]): string[] {
  // Add debugging output
  console.log(`Simulating read for: ${parameters.join(', ')}`);
  
  return parameters.map(param => {
    // Get value from the map, or generate a realistic one if not found
    let value = this.simulatedData.get(param);
    
    if (!value) {
      // Generate a realistic value based on parameter name
      if (param.includes("FW_Ver")) {
        value = param.includes("Major") ? "1" : 
               param.includes("Minor") ? "2" : "3";
      } else if (param.includes("3V3") || param.includes("3v3")) {
        value = "3300";
      } else if (param.includes("5V") || param.includes("5v")) {
        value = "5000";
      } else if (param.includes("temp") || param.includes("Temp") || param.includes("_T")) {
        value = (20 + Math.floor(Math.random() * 10)).toString();
      } else if (param.includes("eMMC") || param.includes("emmc")) {
        value = "1";
      } else {
        value = "simulated";
      }
      
      // Store it for consistent future responses
      this.simulatedData.set(param, value);
    }
    
    console.log(`Simulated ${param}=${value}`);
    return `${param}=${value}`;
  });
}
}

// Real MCC Socket implementation using WebSocket
class RealMccSocket implements IMccSocket {
  private readonly socket: WebSocket;
  private readonly callbacks: Map<string, (data: string) => void>;
  private readonly timeouts: Map<string, NodeJS.Timeout>;
  public isSimulated: boolean = false;
  
  constructor(socket: WebSocket) {
    this.socket = socket;
    this.callbacks = new Map();
    this.timeouts = new Map();
    
    // Set up message handler
    this.socket.onmessage = this.handleMessage.bind(this);
    this.socket.onerror = this.handleError.bind(this);
    this.socket.onclose = this.handleClose.bind(this);
    
    mccLogger.info('Initialized real MCC socket connection');
  }
  
  private handleMessage(event: MessageEvent): void {
    const data = event.data;
    mccLogger.debug(`[REAL] Received: ${data}`);
    
    // Call any registered callbacks
    for (const [id, callback] of this.callbacks) {
      callback(data);
      
      // Remove the callback and its timeout
      this.callbacks.delete(id);
      const timeout = this.timeouts.get(id);
      if (timeout) {
        clearTimeout(timeout);
        this.timeouts.delete(id);
      }
    }
  }
  
  private handleError(event: Event): void {
    mccLogger.error(`[REAL] WebSocket error: ${event}`);
    
    // Reject all pending callbacks with the error
    for (const [id, callback] of this.callbacks) {
      callback(`ERROR: WebSocket error occurred`);
      this.callbacks.delete(id);
      
      const timeout = this.timeouts.get(id);
      if (timeout) {
        clearTimeout(timeout);
        this.timeouts.delete(id);
      }
    }
  }
  
  private handleClose(event: CloseEvent): void {
    mccLogger.warn(`[REAL] WebSocket closed: ${event.code} ${event.reason}`);
    
    // Reject all pending callbacks
    for (const [id, callback] of this.callbacks) {
      callback(`ERROR: WebSocket closed: ${event.code} ${event.reason}`);
      this.callbacks.delete(id);
      
      const timeout = this.timeouts.get(id);
      if (timeout) {
        clearTimeout(timeout);
        this.timeouts.delete(id);
      }
    }
  }
  
  public async send(message: string): Promise<void> {
    mccLogger.debug(`[REAL] Sending: ${message.trim()}`);
    
    return new Promise<void>((resolve, reject) => {
      if (this.socket.readyState !== WebSocket.OPEN) {
        mccLogger.error('[REAL] Socket not open');
        reject(new Error('Socket not open'));
        return;
      }
      
      try {
        this.socket.send(message);
        resolve();
      } catch (error) {
        mccLogger.error(`[REAL] Send error: ${error}`);
        reject(error);
      }
    });
  }
  
  public async receive(maxBytes = 4096, timeout = 5000): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const id = `receive-${Date.now()}-${Math.random()}`;
      
      // Create a timeout handler
      const timeoutId = setTimeout(() => {
        this.callbacks.delete(id);
        reject(new Error(`Receive timeout after ${timeout}ms`));
      }, timeout);
      
      // Store the timeout and callback
      this.timeouts.set(id, timeoutId);
      this.callbacks.set(id, resolve);
    });
  }
  
  public close(): void {
    mccLogger.info('[REAL] Closing MCC socket');
    this.socket.close();
    
    // Clear all timeouts
    for (const timeoutId of this.timeouts.values()) {
      clearTimeout(timeoutId);
    }
    this.timeouts.clear();
    this.callbacks.clear();
  }
}

/**
 * Test WebSocket connectivity to verify the server is reachable
 * This function is specifically designed to verify connectivity before showing success in the UI
 */
export async function testWebSocketConnection(serverAddress: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      // Create a WebSocket connection just to test if it can connect
      const socket = new WebSocket(`ws://${serverAddress}`);
      
      // Set a timeout to prevent hanging on connection attempts
      const timeout = setTimeout(() => {
        socket.close();
        resolve(false);
      }, 3000);
      
      socket.onopen = () => {
        clearTimeout(timeout);
        socket.close();
        resolve(true);
      };
      
      socket.onerror = () => {
        clearTimeout(timeout);
        socket.close();
        resolve(false);
      };
    } catch (error) {
      mccLogger.error(`Connection test error: ${error}`);
      resolve(false);
    }
  });
}

/**
 * Create an MCC socket connection based on configuration
 * 
 * @param serverAddress Server address in format "host:port"
 * @param forceReal Whether to force using a real connection even if simulation mode is enabled
 * @param fallbackToSim Whether to fall back to a simulated connection if the real one fails
 * @returns A promise that resolves to an IMccSocket interface
 */
export async function createMccSocket(
  serverAddress: string, 
  forceReal = false, 
  fallbackToSim = true
): Promise<IMccSocket> {
  // Check if we should use simulation mode
  if (MCC_CONFIG.SIMULATION_MODE && !forceReal) {
    mccLogger.info(`Creating simulated MCC socket (address: ${serverAddress})`);
    return new SimulatedMccSocket();
  }
  
  // Otherwise, create a real WebSocket connection
  mccLogger.info(`Connecting to real MCC server at ${serverAddress}`);
  
  // Extract host and port from server address
  const [host, portStr] = serverAddress.split(":");
  const port = parseInt(portStr || "9377", 10); // Default to 9377 if port not specified
  
  try {
    // Create a WebSocket connection
    const socket = new WebSocket(`ws://${host}:${port}`);
    
    // Wait for the connection to open
    await new Promise<void>((resolve, reject) => {
      socket.onopen = () => {
        mccLogger.info(`✅ WebSocket connection established to ${serverAddress}`);
        resolve();
      };
      
      socket.onerror = (err) => {
        mccLogger.error(`WebSocket connection error: ${err}`);
        reject(new Error(`WebSocket connection error: ${err}`));
      };
      
      // Add a timeout
      setTimeout(() => reject(new Error('Connection timeout (5000ms)')), 5000);
    });
    
    return new RealMccSocket(socket);
  } catch (error) {
    mccLogger.error(`Failed to connect to MCC server: ${error}`);
    
    // Fall back to simulation if configured to do so
    if (fallbackToSim) {
      mccLogger.warn(`Falling back to simulation mode due to connection error`);
      return new SimulatedMccSocket();
    }
    
    throw error;
  }
}

/**
 * Connect to the MCC server - a backwards-compatible wrapper for createMccSocket
 * 
 * @param serverAddress Server address in format "host:port"
 * @param forceSim Flag to force simulation mode
 * @param throwErrors Whether to throw errors (if false, returns null on error)
 * @returns A promise that resolves to an IMccSocket interface or null if connection fails
 */
export async function connectToMcc(
  serverAddress: string,
  forceSim = false,
  throwErrors = false
): Promise<IMccSocket | null> {
  try {
    // If forceSim is true, use simulation mode
    if (forceSim) {
      setSimulationMode(true);
      return new SimulatedMccSocket();
    }
    
    return await createMccSocket(serverAddress, false, true);
  } catch (error) {
    mccLogger.error(`Connection error: ${error}`);
    
    if (throwErrors) {
      throw error;
    }
    
    return null;
  }
}

/**
* Send a command to set a parameter value over a socket connection
* 
* @param sock The socket connection to the MCC server
* @param parameter The parameter name to set
* @param value The value to set
* @returns A promise that resolves when the command is sent
*/
export async function mccifSet(sock: any, parameter: string, value: any): Promise<void> {
  // Format the message in the same way as the Python implementation
  const message = `${parameter}.value=${value}\n`;
  
  // Add a log to identify what's happening
  console.log(`📡 mccifSet: ${parameter}=${value}, using ${sock? (sock.isSimulated ? "simulated" : "real") : "no"} socket`);
  
  // Check if we're in development mode and sock might be missing
  if (!sock) {
    console.warn(`Using simulation fallback for ${parameter}=${value}`);
    return Promise.resolve();
  }
  
  // If this is a real socket with send function, use it directly
  if (sock && typeof sock.send === 'function') {
    console.log(`Using ${sock.isSimulated ? "simulated" : "real"} socket to set ${parameter}=${value}`);
    return sock.send(message);
  }
  
  // For backward compatibility, handle the old simulation API
  if (sock && typeof sock.simulateRead === 'function') {
    console.log(`Using simulation mode to set ${parameter}=${value}`);
    if (typeof sock.send === 'function') {
      return sock.send(message);
    }
    return Promise.resolve();
  }
  
  // If no valid socket is available, log the error but don't throw
  console.error("No valid socket connection available");
  return Promise.resolve(); // Don't reject, just continue
}

/**
* Read parameter values over a socket connection
* 
* @param sock The socket connection to the MCC server
* @param parameters Array of parameter names to read
* @returns A promise that resolves to an array of response strings
*/
export async function mccifRead(sock: any, parameters: string[]): Promise<string[]> {
  // Log what's happening
  console.log(`📡 mccifRead: ${parameters.length} parameters, using ${sock? (sock.isSimulated ? "simulated" : "real") : "no"} socket`);
  
  // If we have a socket with simulateRead function, use it directly
  if (sock && typeof sock.simulateRead === 'function') {
    console.log(`Using simulation to read ${parameters.length} parameters`);
    return sock.simulateRead(parameters);
  }
    
  // Check if we have a real socket with send/receive functions
  if (sock && typeof sock.send === 'function') {
    console.log(`📡 ${sock.isSimulated ? "SIMULATED" : "REAL"} READ: Reading ${parameters.length} parameters from server`);
    try {
      // Construct message to enable logging for each parameter
      let message = "";
      for (const param of parameters) {
        message += `${param}.log=true\n`;
      }
      
      // Send the message
      await sock.send(message);
      
      // Receive the response
      const response = await sock.receive(4096, 20000); // 20 second timeout
      
      // Process the response
      console.log(`📡 Data received for ${parameters.length} parameters:`, response);
      
      // Check if the response is just a string 'simulated response'
      if (response === 'simulated response') {
        console.log('⚠️ Received "simulated response" from socket - falling back to simulated values');
        return parameters.map(param => {
          // Generate simulated values based on parameter name
          if (param.includes("FW_Ver")) {
            const version = param.includes("Major") ? "1" : 
                           param.includes("Minor") ? "2" : "3";
            return `${param}=${version}`;
          } else if (param.includes("3V3") || param.includes("5V")) {
            return `${param}=${3300 + Math.floor(Math.random() * 100)}`;
          } else if (param.includes("temp") || param.includes("Temp")) {
            return `${param}=${20 + Math.floor(Math.random() * 10)}`;
          } else if (param.includes("eMMC")) {
            return `${param}=1`;
          } else {
            return `${param}=simulated`;
          }
        });
      }
      
      const lines = response.split('\n');
      const result = lines.slice(0, parameters.length);
      
      // Disable logging
      message = "";
      for (const param of parameters) {
        message += `${param}.log=false\n`;
      }
      await sock.send(message);
      
      console.log(`📡 Data received for ${parameters.length} parameters:`, result);
      return result;
    } catch (error) {
      console.error(`MCC read error: ${error}`);
      // Fall back to simulation if there's an error
      console.warn("Falling back to simulation due to error");
    }
  }

  // If we're in development mode without a real server or proper simulation, return hardcoded values
  console.warn("No valid socket connection available, using fallback simulated values");
  
  // Create a simple fallback
  return parameters.map(param => {
    switch (param) {
      case "OBC1_FW_Ver_Major":
        return "OBC1_FW_Ver_Major=1";
      case "OBC1_FW_Ver_Minor":
        return "OBC1_FW_Ver_Minor=2";
      case "OBC1_FW_Ver_Patch":
        return "OBC1_FW_Ver_Patch=3";
      case "OBC1_3V3_D":
        return "OBC1_3V3_D=3300";
      case "OBC1_PS_3V3_OBC2_V":
        return "OBC1_PS_3V3_OBC2_V=3298";
      case "OBC1_PS_5V_OBC2_V":
        return "OBC1_PS_5V_OBC2_V=5042";
      case "OBC1_thruster_ch1_T":
        return "OBC1_thruster_ch1_T=24.5";
      case "OBC1_thruster_ch2_T":
        return "OBC1_thruster_ch2_T=25.2";
      case "OBC1_Q8_eMMC0_state":
        return "OBC1_Q8_eMMC0_state=1";
      case "OBC1_Q8_eMMC1_state":
        return "OBC1_Q8_eMMC1_state=0";
      default:
        return `${param}=simulated`;
    }
  });
}

// Export a helper to check if we're in simulation mode
export function isSimulationMode(): boolean {
  return MCC_CONFIG.SIMULATION_MODE;
}

// Export a helper to toggle simulation mode at runtime
// In utils/mccUtils.ts, modify setSimulationMode
export function setSimulationMode(enabled: boolean): void {
  const previous = MCC_CONFIG.SIMULATION_MODE;
  MCC_CONFIG.SIMULATION_MODE = enabled;
  
  if (previous !== enabled) {
    mccLogger.info(`Simulation mode changed from ${previous} to ${enabled}`);
    
    // Broadcast the change to help with debugging
    window.dispatchEvent(new CustomEvent('mcc-simulation-changed', { 
      detail: { enabled }
    }));
  }
}

export function debugSocketType(sock: any): string {
  if (!sock) return "No socket";
  if (sock.isSimulated === true) return "Simulated socket";
  if (sock.isSimulated === false) return "Real socket";
  if (typeof sock.simulateRead === 'function') return "Legacy simulated socket";
  if (typeof sock.send === 'function' && typeof sock.receive === 'function') return "Socket with send/receive";
  return "Unknown socket type";
}