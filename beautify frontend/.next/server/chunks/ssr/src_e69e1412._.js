module.exports = {

"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/mccUtils.ts
// TypeScript implementation that supports both real and simulated modes
// Define environment configuration
__turbopack_context__.s({
    "connectToMcc": (()=>connectToMcc),
    "createMccSocket": (()=>createMccSocket),
    "debugSocketType": (()=>debugSocketType),
    "isSimulationMode": (()=>isSimulationMode),
    "mccifRead": (()=>mccifRead),
    "mccifSet": (()=>mccifSet),
    "setSimulationMode": (()=>setSimulationMode),
    "testWebSocketConnection": (()=>testWebSocketConnection)
});
const MCC_CONFIG = {
    // Use environment variables or a default
    SIMULATION_MODE: process.env.REACT_APP_MCC_SIMULATION === 'true' || ("TURBOPACK compile-time value", "development") === 'development',
    LOG_LEVEL: process.env.REACT_APP_MCC_LOG_LEVEL || 'info'
};
// Logger for MCC operations
// SHOWN IN BROWSER CONSOLE
const mccLogger = {
    debug: (message, ...args)=>{
        if (MCC_CONFIG.LOG_LEVEL === 'debug') {
            console.debug(`[MCC] ${message}`, ...args);
        }
    },
    info: (message, ...args)=>{
        if ([
            'debug',
            'info'
        ].includes(MCC_CONFIG.LOG_LEVEL)) {
            console.info(`[MCC] ${message}`, ...args);
        }
    },
    warn: (message, ...args)=>{
        console.warn(`[MCC] ${message}`, ...args);
    },
    error: (message, ...args)=>{
        console.error(`[MCC] ${message}`, ...args);
    }
};
// Simulated MCC Socket implementation
class SimulatedMccSocket {
    simulatedData;
    delays;
    isSimulated = true;
    constructor(delays = true){
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
    async send(message) {
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
            await new Promise((resolve)=>setTimeout(resolve, 50 + Math.random() * 100));
        }
        return Promise.resolve();
    }
    async receive(maxBytes = 4096, timeout = 5000) {
        // This would contain the read logic for parameters that have been 
        // requested with param.log=true in a real implementation
        // In our simulation, just get the last parameters from the log=true messages
        const loggedParams = Array.from(this.simulatedData.keys()).filter((key)=>key.endsWith('.log') && this.simulatedData.get(key) === 'true');
        // Add simulated delay if enabled
        if (this.delays) {
            await new Promise((resolve)=>setTimeout(resolve, 100 + Math.random() * 200));
        }
        // For simulation, if log=true isn't set (because we don't track it),
        // we'll just respond to the actual parameter name
        // Extract parameter names from something like "param.log=true\n"
        const responses = [];
        // Extract all parameters from buffer that may have been sent with .log=true
        const requestBuffer = this.recentRequests.join('\n');
        const paramMatches = Array.from(requestBuffer.matchAll(/([A-Za-z0-9_]+)\.log=true/g));
        if (paramMatches.length > 0) {
            for (const match of paramMatches){
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
    close() {
        mccLogger.info('[SIM] Closed simulated MCC socket');
    }
    // Track recent requests for simulation purposes
    recentRequests = [];
    // Helper method to simulate reading multiple parameters
    simulateRead(parameters) {
        // Add debugging output
        console.log(`Simulating read for: ${parameters.join(', ')}`);
        return parameters.map((param)=>{
            // Get value from the map, or generate a realistic one if not found
            let value = this.simulatedData.get(param);
            if (!value) {
                // Generate a realistic value based on parameter name
                if (param.includes("FW_Ver")) {
                    value = param.includes("Major") ? "1" : param.includes("Minor") ? "2" : "3";
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
class RealMccSocket {
    socket;
    callbacks;
    timeouts;
    isSimulated = false;
    constructor(socket){
        this.socket = socket;
        this.callbacks = new Map();
        this.timeouts = new Map();
        // Set up message handler
        this.socket.onmessage = this.handleMessage.bind(this);
        this.socket.onerror = this.handleError.bind(this);
        this.socket.onclose = this.handleClose.bind(this);
        mccLogger.info('Initialized real MCC socket connection');
    }
    handleMessage(event) {
        const data = event.data;
        mccLogger.debug(`[REAL] Received: ${data}`);
        // Call any registered callbacks
        for (const [id, callback] of this.callbacks){
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
    handleError(event) {
        mccLogger.error(`[REAL] WebSocket error: ${event}`);
        // Reject all pending callbacks with the error
        for (const [id, callback] of this.callbacks){
            callback(`ERROR: WebSocket error occurred`);
            this.callbacks.delete(id);
            const timeout = this.timeouts.get(id);
            if (timeout) {
                clearTimeout(timeout);
                this.timeouts.delete(id);
            }
        }
    }
    handleClose(event) {
        mccLogger.warn(`[REAL] WebSocket closed: ${event.code} ${event.reason}`);
        // Reject all pending callbacks
        for (const [id, callback] of this.callbacks){
            callback(`ERROR: WebSocket closed: ${event.code} ${event.reason}`);
            this.callbacks.delete(id);
            const timeout = this.timeouts.get(id);
            if (timeout) {
                clearTimeout(timeout);
                this.timeouts.delete(id);
            }
        }
    }
    async send(message) {
        mccLogger.debug(`[REAL] Sending: ${message.trim()}`);
        return new Promise((resolve, reject)=>{
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
    async receive(maxBytes = 4096, timeout = 5000) {
        return new Promise((resolve, reject)=>{
            const id = `receive-${Date.now()}-${Math.random()}`;
            // Create a timeout handler
            const timeoutId = setTimeout(()=>{
                this.callbacks.delete(id);
                reject(new Error(`Receive timeout after ${timeout}ms`));
            }, timeout);
            // Store the timeout and callback
            this.timeouts.set(id, timeoutId);
            this.callbacks.set(id, resolve);
        });
    }
    close() {
        mccLogger.info('[REAL] Closing MCC socket');
        this.socket.close();
        // Clear all timeouts
        for (const timeoutId of this.timeouts.values()){
            clearTimeout(timeoutId);
        }
        this.timeouts.clear();
        this.callbacks.clear();
    }
}
async function testWebSocketConnection(serverAddress) {
    return new Promise((resolve)=>{
        try {
            // Create a WebSocket connection just to test if it can connect
            const socket = new WebSocket(`ws://${serverAddress}`);
            // Set a timeout to prevent hanging on connection attempts
            const timeout = setTimeout(()=>{
                socket.close();
                resolve(false);
            }, 3000);
            socket.onopen = ()=>{
                clearTimeout(timeout);
                socket.close();
                resolve(true);
            };
            socket.onerror = ()=>{
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
async function createMccSocket(serverAddress, forceReal = false, fallbackToSim = true) {
    // Check if we should use simulation mode
    if (MCC_CONFIG.SIMULATION_MODE && !forceReal) {
        mccLogger.info(`Creating simulated MCC socket (address: ${serverAddress})`);
        return new SimulatedMccSocket();
    }
    // Parse the original server address
    const [host, portStr] = serverAddress.split(":");
    const port = parseInt(portStr || "9377", 10);
    try {
        // Connect to our proxy server instead of directly to the MCC server
        const proxyUrl = "ws://localhost:8080"; // WebSocket proxy URL
        mccLogger.info(`Connecting to MCC server at ${host}:${port} via proxy ${proxyUrl}`);
        const socket = new WebSocket(proxyUrl);
        // Wait for the WebSocket connection to open
        await new Promise((resolve, reject)=>{
            socket.onopen = ()=>{
                mccLogger.info(`WebSocket connection to proxy established`);
                // Once connected to the proxy, request connection to the actual MCC server
                const connectRequest = {
                    command: 'connect',
                    host: host,
                    port: port
                };
                socket.send(JSON.stringify(connectRequest));
                // Set up handler for the connection response
                const messageHandler = (event)=>{
                    try {
                        const response = JSON.parse(event.data);
                        if (response.status === 'connected') {
                            mccLogger.info(`Successfully connected to MCC server via proxy`);
                            socket.removeEventListener('message', messageHandler);
                            resolve();
                        } else if (response.status === 'error') {
                            socket.removeEventListener('message', messageHandler);
                            reject(new Error(response.message || 'Failed to connect to MCC server'));
                        }
                    } catch (error) {
                    // Not a JSON response, might be regular MCC data
                    // Just ignore it for now
                    }
                };
                socket.addEventListener('message', messageHandler);
                // Add a timeout for the MCC server connection
                setTimeout(()=>{
                    socket.removeEventListener('message', messageHandler);
                    reject(new Error('MCC connection timeout (10000ms)'));
                }, 10000);
            };
            socket.onerror = (err)=>{
                mccLogger.error(`WebSocket connection to proxy error: ${err}`);
                reject(new Error(`WebSocket connection error to proxy`));
            };
            // Add a timeout for the proxy connection
            setTimeout(()=>reject(new Error('Proxy connection timeout (5000ms)')), 5000);
        });
        // At this point, we're connected to both the proxy and the MCC server
        return new ProxyMccSocket(socket);
    } catch (error) {
        mccLogger.error(`Failed to connect to MCC server via proxy: ${error}`);
        // Fall back to simulation if configured to do so
        if (fallbackToSim) {
            mccLogger.warn(`Falling back to simulation mode due to connection error`);
            return new SimulatedMccSocket();
        }
        throw error;
    }
}
// New class to handle communication through the proxy
class ProxyMccSocket {
    socket;
    callbacks;
    timeouts;
    isSimulated = false;
    constructor(socket){
        this.socket = socket;
        this.callbacks = new Map();
        this.timeouts = new Map();
        // Set up message handler
        this.socket.onmessage = this.handleMessage.bind(this);
        this.socket.onerror = this.handleError.bind(this);
        this.socket.onclose = this.handleClose.bind(this);
        mccLogger.info('Initialized proxy MCC socket connection');
    }
    // In mccUtils.ts, in the ProxyMccSocket class handleMessage method
    handleMessage(event) {
        const data = event.data;
        mccLogger.debug(`[PROXY] Received: ${data}`);
        // Try to parse as JSON first (might be a control message from the proxy)
        try {
            const jsonResponse = JSON.parse(data);
            if (jsonResponse.status) {
                // This is a control message, not MCC data
                mccLogger.info(`Proxy message: ${jsonResponse.message}`);
                return;
            }
        } catch (e) {
        // Not JSON, treat as regular MCC data
        }
        // Call all registered callbacks with the raw data
        const handlersToRemove = [];
        for (const [id, callback] of this.callbacks){
            callback(data);
            // Add to removal list
            handlersToRemove.push(id);
            // Clear the timeout
            const timeout = this.timeouts.get(id);
            if (timeout) {
                clearTimeout(timeout);
                this.timeouts.delete(id);
            }
        }
        // Remove callbacks outside the loop to avoid modification during iteration
        for (const id of handlersToRemove){
            this.callbacks.delete(id);
        }
    }
    handleError(event) {
        mccLogger.error(`[PROXY] WebSocket error: ${event}`);
        // Reject all pending callbacks with the error
        for (const [id, callback] of this.callbacks){
            callback(`ERROR: WebSocket error occurred`);
            this.callbacks.delete(id);
            const timeout = this.timeouts.get(id);
            if (timeout) {
                clearTimeout(timeout);
                this.timeouts.delete(id);
            }
        }
    }
    handleClose(event) {
        mccLogger.warn(`[PROXY] WebSocket closed: ${event.code} ${event.reason}`);
        // Reject all pending callbacks
        for (const [id, callback] of this.callbacks){
            callback(`ERROR: WebSocket closed: ${event.code} ${event.reason}`);
            this.callbacks.delete(id);
            const timeout = this.timeouts.get(id);
            if (timeout) {
                clearTimeout(timeout);
                this.timeouts.delete(id);
            }
        }
    }
    async send(message) {
        mccLogger.debug(`[PROXY] Sending: ${message.trim()}`);
        return new Promise((resolve, reject)=>{
            if (this.socket.readyState !== WebSocket.OPEN) {
                mccLogger.error('[PROXY] Socket not open');
                reject(new Error('Socket not open'));
                return;
            }
            try {
                this.socket.send(message);
                resolve();
            } catch (error) {
                mccLogger.error(`[PROXY] Send error: ${error}`);
                reject(error);
            }
        });
    }
    async receive(maxBytes = 4096, timeout = 20000) {
        return new Promise((resolve, reject)=>{
            const id = `receive-${Date.now()}-${Math.random()}`;
            // Create a timeout handler
            const timeoutId = setTimeout(()=>{
                this.callbacks.delete(id);
                reject(new Error(`Receive timeout after ${timeout}ms`));
            }, timeout);
            // Store the timeout and callback
            this.timeouts.set(id, timeoutId);
            this.callbacks.set(id, resolve);
        });
    }
    close() {
        mccLogger.info('[PROXY] Closing MCC socket');
        this.socket.close();
        // Clear all timeouts
        for (const timeoutId of this.timeouts.values()){
            clearTimeout(timeoutId);
        }
        this.timeouts.clear();
        this.callbacks.clear();
    }
}
async function connectToMcc(serverAddress, forceSim = false, throwErrors = false) {
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
async function mccifSet(sock, parameter, value) {
    // Format the message in the same way as the Python implementation
    // Ensure clean formatting with no extra whitespace or tokens
    const message = `${parameter}.value=${value}\n`;
    // Add a log to identify what's happening
    console.log(`📡 mccifSet: ${parameter}=${value}, using ${sock ? sock.isSimulated ? "simulated" : "real" : "no"} socket`);
    // Check if we're in development mode and sock might be missing
    if (!sock) {
        console.warn(`Using simulation fallback for ${parameter}=${value}`);
        return Promise.resolve();
    }
    // If this is a real socket with send function, use it directly
    if (sock && typeof sock.send === 'function') {
        console.log(`Using ${sock.isSimulated ? "simulated" : "real"} socket to set ${parameter}=${value}`);
        try {
            await sock.send(message);
            // Add a small delay after sending command to ensure processing
            await new Promise((resolve)=>setTimeout(resolve, 100));
            return Promise.resolve();
        } catch (error) {
            console.error(`Error sending command ${parameter}=${value}:`, error);
            return Promise.resolve(); // Continue despite error
        }
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
async function mccifRead(sock, parameters) {
    // Log what's happening
    console.log(`📡 mccifRead: ${parameters.length} parameters, using ${sock ? sock.isSimulated ? "simulated" : "real" : "no"} socket`);
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
            for (const param of parameters){
                message += `${param}.log=true\n`;
            }
            // Send the message
            await sock.send(message);
            // Add a small delay to ensure the server has time to process
            await new Promise((resolve)=>setTimeout(resolve, 100));
            // Receive the response - INCREASE CHUNK SIZE and REDUCE TIMEOUT maybe
            // 4096 bytes and 20000ms
            const response = await sock.receive(4096, 20000);
            if (!response || response.length === 0) {
                throw new Error("Empty response from server");
            }
            // Process the response
            console.log(`📡 Data received for ${parameters.length} parameters:`, response);
            // Check if the response is just a string 'simulated response'
            if (response === 'simulated response') {
                console.log('⚠️ Received "simulated response" from socket - falling back to simulated values');
                return simulateParameterValues(parameters);
            }
            // Split response into lines and handle partial responses
            const lines = response.split('\n');
            // If we don't get enough lines, try to use what we have
            const result = lines.slice(0, Math.min(parameters.length, lines.length));
            // If we got fewer lines than expected, pad with simulated values
            if (result.length < parameters.length) {
                console.log(`⚠️ Received only ${result.length} of ${parameters.length} parameters - padding with simulations`);
                // Create a map of received parameters for lookup
                const receivedParams = new Map();
                for (const line of result){
                    const parts = line.split('=');
                    if (parts.length >= 2) {
                        receivedParams.set(parts[0], line);
                    }
                }
                // Build final result array with actual or simulated values
                const finalResult = parameters.map((param)=>{
                    if (receivedParams.has(param)) {
                        return receivedParams.get(param);
                    } else {
                        return simulateParameter(param);
                    }
                });
                return finalResult;
            }
            // Disable logging before returning
            message = "";
            for (const param of parameters){
                message += `${param}.log=false\n`;
            }
            await sock.send(message);
            return result;
        } catch (error) {
            console.error(`MCC read error: ${error}`);
            // Fall back to simulation if there's an error
            console.warn("Falling back to simulation due to error");
            return simulateParameterValues(parameters);
        }
    }
    // If we're in development mode without a real server or proper simulation, return hardcoded values
    console.warn("No valid socket connection available, using fallback simulated values");
    return simulateParameterValues(parameters);
}
// Helper function to generate simulated values
function simulateParameterValues(parameters) {
    return parameters.map((param)=>simulateParameter(param));
}
function simulateParameter(param) {
    // Generate appropriate simulated values based on parameter name
    if (param.includes("FW_Ver")) {
        const version = param.includes("Major") ? "1" : param.includes("Minor") ? "2" : "3";
        return `${param}=${version}`;
    } else if (param.includes("3V3") || param.includes("3v3")) {
        return `${param}=${3300 + Math.floor(Math.random() * 100)}`;
    } else if (param.includes("5V") || param.includes("5v")) {
        return `${param}=${5000 + Math.floor(Math.random() * 100)}`;
    } else if (param.includes("temp") || param.includes("Temp") || param.includes("_T")) {
        return `${param}=${20 + Math.floor(Math.random() * 10)}`;
    } else if (param.includes("eMMC")) {
        return `${param}=1`;
    } else {
        return `${param}=simulated`;
    }
}
function isSimulationMode() {
    return MCC_CONFIG.SIMULATION_MODE;
}
function setSimulationMode(enabled) {
    const previous = MCC_CONFIG.SIMULATION_MODE;
    MCC_CONFIG.SIMULATION_MODE = enabled;
    if (previous !== enabled) {
        mccLogger.info(`Simulation mode changed from ${previous} to ${enabled}`);
        // Broadcast the change to help with debugging
        window.dispatchEvent(new CustomEvent('mcc-simulation-changed', {
            detail: {
                enabled
            }
        }));
    }
}
function debugSocketType(sock) {
    if (!sock) return "No socket";
    if (sock.isSimulated === true) return "Simulated socket";
    if (sock.isSimulated === false) return "Real socket";
    if (typeof sock.simulateRead === 'function') return "Legacy simulated socket";
    if (typeof sock.send === 'function' && typeof sock.receive === 'function') return "Socket with send/receive";
    return "Unknown socket type";
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Fixed page.tsx - Key changes to avoid infinite rendering loop and keep ServerWindow open
/* implement routing using react-router-dom, 
you'll need to transform your page.tsx into an entry point for routing. */ /* npm install react-router-dom */ __turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MainScreen/MainScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ToTestList/ToTestList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServerWindow/ServerWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ModelWindow/ThreeDModelWindow.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WelcomeWindow/WelcomeWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Taskbar/Taskbar.tsx [app-ssr] (ecmascript)"); // Import the Taskbar component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SettingsWindow/SettingsWindow.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Global variable to track ToTestList state across routes and navigations
let isToTestListOpen = false;
function Page() {
    // Window visibility state - Use refs to avoid state race conditions
    const windowVisibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        ToTestList: false,
        ServerWindow: false,
        ThreeDModelWindow: false,
        SettingsWindow: false
    });
    // State for reactive UI updates
    const [windowVisibility, setWindowVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ToTestList: false,
        ServerWindow: false,
        ThreeDModelWindow: false,
        SettingsWindow: false
    });
    // New state for minimized windows - only for ServerWindow
    // Store just the window info, not the restore function
    const [minimizedWindows, setMinimizedWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [zIndexCounter, setZIndexCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10000); // Base z-index
    const [windowZIndexes, setWindowZIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ToTestList: 10002,
        ServerWindow: 10001,
        ThreeDModelWindow: 10000,
        SettingsWindow: 10003
    });
    const [threeDModelProfileId, setThreeDModelProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isOnMainScreen, setIsOnMainScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverWindowKey, setServerWindowKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Date.now()); // Key for ServerWindow
    // Monitor current route to track if we're on main screen
    const RouteObserver = ()=>{
        const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            const isMain = location.pathname === '/main';
            setIsOnMainScreen(isMain);
            // When navigating to main screen, restore window visibility from global state
            if (isMain) {
                console.log("🧭 Navigated to main screen, checking window states");
                // Check if ToTestList should be open based on global flag
                if (isToTestListOpen && !windowVisibility.ToTestList) {
                    console.log("🔄 ToTestList should be visible - restoring state");
                    setWindowVisibility((prev)=>({
                            ...prev,
                            ToTestList: true
                        }));
                    // Force the ref to match as well
                    windowVisibilityRef.current = {
                        ...windowVisibilityRef.current,
                        ToTestList: true
                    };
                }
            }
        }, [
            location
        ]);
        return null;
    };
    // Load window state from sessionStorage on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load window visibility from sessionStorage on mount
        const savedVisibility = sessionStorage.getItem('windowVisibility');
        if (savedVisibility) {
            try {
                const parsed = JSON.parse(savedVisibility);
                windowVisibilityRef.current = parsed;
                setWindowVisibility(parsed);
                // Update global flag for ToTestList
                isToTestListOpen = parsed.ToTestList;
                console.log("📂 Loaded window visibility state:", parsed);
            } catch (e) {
                console.error("Error parsing saved window visibility:", e);
            }
        }
    }, []);
    // Save window visibility to sessionStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Save visibility state to sessionStorage for persistence
        sessionStorage.setItem('windowVisibility', JSON.stringify(windowVisibility));
        console.log("💾 Saved window visibility state:", windowVisibility);
        // Update global flag for ToTestList
        isToTestListOpen = windowVisibility.ToTestList;
    }, [
        windowVisibility
    ]);
    // Extra check to ensure ToTestList stays visible when it should be
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If global flag is true but component is not visible, fix it
        if (isToTestListOpen && !windowVisibility.ToTestList) {
            console.log("🔄 Fixing ToTestList visibility mismatch");
            setWindowVisibility((prev)=>({
                    ...prev,
                    ToTestList: true
                }));
        }
    }, [
        windowVisibility.ToTestList,
        isOnMainScreen
    ]);
    // Dedicated function to restore a window from taskbar
    const restoreWindowFromTaskbar = (windowId)=>{
        console.log(`♻️ Restoring ${windowId} from taskbar with direct method`);
        // 1. Remove from minimized windows
        setMinimizedWindows((prev)=>prev.filter((w)=>w.id !== windowId));
        // 2. Update sessionStorage directly
        try {
            const visibility = JSON.parse(sessionStorage.getItem('windowVisibility') || '{}');
            visibility[windowId] = true;
            sessionStorage.setItem('windowVisibility', JSON.stringify(visibility));
        } catch (e) {
            console.error("Error updating sessionStorage:", e);
        }
        // 3. Update windowVisibilityRef
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            [windowId]: true
        };
        // 4. Force UI state update
        setWindowVisibility((prev)=>({
                ...prev,
                [windowId]: true
            }));
        // 5. Force a remount of the window (for ServerWindow only)
        if (windowId === "ServerWindow") {
            console.log("🔄 Generating new ServerWindow key to force remount");
            setServerWindowKey(Date.now());
        }
        // 6. Update z-index to bring to front
        setWindowZIndexes((prev)=>{
            const highestZIndex = Math.max(...Object.values(prev), 10000);
            return {
                ...prev,
                [windowId]: highestZIndex + 1
            };
        });
        // 7. Increment z-index counter
        setZIndexCounter((prev)=>prev + 1);
    };
    // Main function to bring a window to front
    const bringWindowToFront = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((windowName)=>{
        console.log(`🎯 Bringing ${windowName} to front`);
        // Update both state and ref to prevent race conditions
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            [windowName]: true
        };
        // Check if the window is minimized and restore it
        const isMinimized = minimizedWindows.some((win)=>win.id === windowName);
        if (isMinimized) {
            // Use the direct restore method instead of handling here
            restoreWindowFromTaskbar(windowName);
            return; // Exit early since restoreWindowFromTaskbar handles everything
        }
        // Update visibility in state for UI rendering if not already visible
        setWindowVisibility((prev)=>{
            if (prev[windowName] === true && !isMinimized) {
                return prev; // No change needed unless it was minimized
            }
            return {
                ...prev,
                [windowName]: true
            };
        });
        // Prevent z-index increases if window is already on top
        setWindowZIndexes((prevIndexes)=>{
            const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
            if (prevIndexes[windowName] >= highestZIndex && !isMinimized) {
                console.log(`Window ${windowName} already at highest z-index (${prevIndexes[windowName]})`);
                return prevIndexes; // Return unchanged to prevent loops
            }
            // Only update if we're actually bringing something to the front
            console.log(`Updating z-index for ${windowName} from ${prevIndexes[windowName]} to ${highestZIndex + 1}`);
            // FIX: Use prevIndexes instead of prev
            return {
                ...prevIndexes,
                [windowName]: highestZIndex + 1
            };
        });
        // Only increment counter when actually changing z-indexes
        setZIndexCounter((prev)=>prev + 1);
    }, [
        minimizedWindows
    ]);
    // Function to minimize a window - ONLY for ServerWindow
    const minimizeServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((status)=>{
        console.log(`⬇️ Minimizing ServerWindow with status: ${status}`);
        // Add to minimized windows - just the window info, not the restore function
        setMinimizedWindows((prev)=>{
            // Check if already minimized
            if (prev.some((win)=>win.id === "ServerWindow")) {
                // Update the status of the existing window
                return prev.map((win)=>win.id === "ServerWindow" ? {
                        ...win,
                        status
                    } : win);
            }
            // Add to minimized windows - ONLY STORE THE DATA, NOT THE FUNCTION
            return [
                ...prev,
                {
                    id: "ServerWindow",
                    title: "Server Connection",
                    status
                }
            ];
        });
        // Hide the window
        setWindowVisibility((prev)=>({
                ...prev,
                ServerWindow: false
            }));
        // Update ref
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ServerWindow: false
        };
    }, []);
    // Enhanced openToTestList function with force render option
    const openToTestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((forceRender = false)=>{
        console.log("🔍 openToTestList called with forceRender:", forceRender);
        console.log("🔍 Current visibility state:", windowVisibility.ToTestList);
        console.log("🟢 Opening ToTestList window, force:", forceRender);
        // If force render, skip the check for already being open
        if (!forceRender && windowVisibility.ToTestList === true) {
            console.log("ToTestList already open - just bringing to front");
            // Check if the actual window exists in the DOM
            const elementExists = !!document.querySelector('[data-window="ToTestList"]');
            if (!elementExists) {
                console.log("⚠️ ToTestList state is true but window not in DOM - forcing render");
            // Continue execution to render the window
            } else {
                // Just bring to front and exit
                bringWindowToFront("ToTestList");
                return;
            }
        }
        // Set global flag for cross-component communication
        isToTestListOpen = true;
        // Update ref (for immediate access without waiting for re-render)
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ToTestList: true
        };
        // Update state (to trigger re-render)
        setWindowVisibility((prev)=>({
                ...prev,
                ToTestList: true
            }));
        // Update z-index to bring window to front
        setWindowZIndexes((prevIndexes)=>{
            const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
            return {
                ...prevIndexes,
                ToTestList: highestZIndex + 1
            };
        });
        setZIndexCounter((prev)=>prev + 1);
        // Save state to sessionStorage for persistence
        const currentState = {
            ...windowVisibilityRef.current,
            ToTestList: true
        };
        sessionStorage.setItem('windowVisibility', JSON.stringify(currentState));
        console.log("Updated sessionStorage:", currentState);
        // Verify if window was actually rendered
        setTimeout(()=>{
            const elementExists = !!document.querySelector('[data-window="ToTestList"]');
            console.log(`Verification after opening: ToTestList in DOM: ${elementExists}`);
            // If it still doesn't exist, try one more time with a state reset
            if (!elementExists) {
                console.log("⚠️ ToTestList still not in DOM after opening - trying state reset");
                // Force a clear state first
                setWindowVisibility((prev)=>({
                        ...prev,
                        ToTestList: false
                    }));
                // Then re-render after a short delay
                setTimeout(()=>{
                    setWindowVisibility((prev)=>({
                            ...prev,
                            ToTestList: true
                        }));
                }, 10);
            }
        }, 50);
    }, [
        bringWindowToFront,
        windowVisibility.ToTestList
    ]);
    const closeToTestList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("🔍 closeToTestList called");
        console.log("🔍 Current visibility state:", windowVisibility.ToTestList);
        console.log("🔴 Closing ToTestList window");
        // Update global flag
        isToTestListOpen = false;
        // Update ref immediately
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ToTestList: false
        };
        // Update state for UI
        setWindowVisibility((prev)=>({
                ...prev,
                ToTestList: false
            }));
        // Update sessionStorage immediately
        try {
            const currentState = {
                ...windowVisibilityRef.current,
                ToTestList: false
            };
            sessionStorage.setItem('windowVisibility', JSON.stringify(currentState));
            console.log("Updated sessionStorage when closing:", currentState);
        } catch (e) {
            console.error("Error updating sessionStorage:", e);
        }
    }, []);
    const openServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("🟢 Opening ServerWindow window");
        // Check if window is minimized
        const isMinimized = minimizedWindows.some((win)=>win.id === "ServerWindow");
        if (isMinimized) {
            // Use the direct restore method
            restoreWindowFromTaskbar("ServerWindow");
            return;
        }
        // Update ref first
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ServerWindow: true
        };
        // Set visibility directly
        setWindowVisibility((prev)=>({
                ...prev,
                ServerWindow: true
            }));
        // Update z-index
        setWindowZIndexes((prevIndexes)=>{
            const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
            return {
                ...prevIndexes,
                ServerWindow: highestZIndex + 1
            };
        });
        setZIndexCounter((prev)=>prev + 1);
    }, [
        minimizedWindows
    ]);
    const closeServerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("🔴 Closing ServerWindow");
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ServerWindow: false
        };
        setWindowVisibility((prev)=>({
                ...prev,
                ServerWindow: false
            }));
        // Remove from minimized windows if it was minimized
        setMinimizedWindows((prev)=>prev.filter((win)=>win.id !== "ServerWindow"));
    }, []);
    const openModelWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((profileId = 1)=>{
        console.log(`🛰️ Opening 3D Model window for profile ID: ${profileId}`);
        // Update profile ID once
        setThreeDModelProfileId(profileId);
        // Update visibility
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ThreeDModelWindow: true
        };
        setWindowVisibility((prev)=>({
                ...prev,
                ThreeDModelWindow: true
            }));
        // Update z-index
        setWindowZIndexes((prev)=>{
            const highestZIndex = Math.max(...Object.values(prev), 10000);
            return {
                ...prev,
                ThreeDModelWindow: highestZIndex + 1
            };
        });
        setZIndexCounter((prev)=>prev + 1);
    }, []);
    const closeModelWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("🔴 Closing ThreeDModelWindow...");
        // Just update visibility
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ThreeDModelWindow: false
        };
        setWindowVisibility((prev)=>({
                ...prev,
                ThreeDModelWindow: false
            }));
    }, []);
    const openSettingsWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("🟢 Opening SettingsWindow");
        // Update ref first
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            SettingsWindow: true
        };
        // Set visibility directly
        setWindowVisibility((prev)=>({
                ...prev,
                SettingsWindow: true
            }));
        // Update z-index
        setWindowZIndexes((prevIndexes)=>{
            const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
            return {
                ...prevIndexes,
                SettingsWindow: highestZIndex + 1
            };
        });
        setZIndexCounter((prev)=>prev + 1);
    }, []);
    const closeSettingsWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("🔴 Closing SettingsWindow");
        windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            SettingsWindow: false
        };
        setWindowVisibility((prev)=>({
                ...prev,
                SettingsWindow: false
            }));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteObserver, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeWindow$2f$WelcomeWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            openToTestList: openToTestList,
                            openServerWindow: openServerWindow
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/main",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainScreen$2f$MainScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            showSettingsWindow: windowVisibility.SettingsWindow,
                            openSettingsWindow: openSettingsWindow,
                            closeSettingsWindow: closeSettingsWindow,
                            openToTestList: openToTestList,
                            closeToTestList: closeToTestList,
                            openServerWindow: openServerWindow,
                            openModelWindow: openModelWindow,
                            closeModelWindow: closeModelWindow,
                            showToTestList: windowVisibility.ToTestList,
                            showThreeDModelWindow: windowVisibility.ThreeDModelWindow,
                            threeDModelProfileId: threeDModelProfileId,
                            windowZIndexes: windowZIndexes,
                            bringWindowToFront: bringWindowToFront,
                            zIndexCounter: zIndexCounter
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-container",
                children: [
                    windowVisibility.ToTestList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToTestList$2f$ToTestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.ToTestList,
                        onMouseDown: ()=>bringWindowToFront("ToTestList"),
                        onClose: closeToTestList,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, `ToTestList-${Date.now()}`, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 515,
                        columnNumber: 11
                    }, this),
                    windowVisibility.ServerWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServerWindow$2f$ServerWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.ServerWindow,
                        onMouseDown: ()=>bringWindowToFront("ServerWindow"),
                        onClose: closeServerWindow,
                        onMinimize: minimizeServerWindow,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, `ServerWindow-${serverWindowKey}`, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 527,
                        columnNumber: 11
                    }, this),
                    windowVisibility.ThreeDModelWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModelWindow$2f$ThreeDModelWindow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        profileId: threeDModelProfileId,
                        zIndex: windowZIndexes.ThreeDModelWindow,
                        onMouseDown: ()=>bringWindowToFront("ThreeDModelWindow"),
                        onClose: closeModelWindow,
                        showThreeDModelWindow: windowVisibility.ThreeDModelWindow,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter,
                        bringWindowToFront: bringWindowToFront
                    }, `ThreeDModel-${threeDModelProfileId}`, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this),
                    windowVisibility.SettingsWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        zIndex: windowZIndexes.SettingsWindow,
                        onMouseDown: ()=>bringWindowToFront("SettingsWindow"),
                        onClose: closeSettingsWindow,
                        bringWindowToFront: bringWindowToFront,
                        windowZIndexes: windowZIndexes,
                        zIndexCounter: zIndexCounter
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 554,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2f$Taskbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                minimizedWindows: minimizedWindows.map((window)=>({
                        ...window,
                        onRestore: ()=>restoreWindowFromTaskbar(window.id)
                    }))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 482,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_e69e1412._.js.map