import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServerWindow.module.css";
import Draggable from "react-draggable";
import { createPortal } from "react-dom";
import { WindowName } from "@/types/types";
import { testWebSocketConnection } from "@/utils/mccUtils";

interface ServerWindowProps {
  onClose: () => void;
  onMinimize: (status: string) => void; // Prop for minimization
  zIndex: number; 
  onMouseDown: () => void; 
  bringWindowToFront: (windowName: WindowName) => void;
  windowZIndexes: { [key: string]: number };
  zIndexCounter: number;
}

const ServerWindow: React.FC<ServerWindowProps> = ({ 
  zIndex, 
  onMouseDown, 
  onClose,
  onMinimize,
  bringWindowToFront, 
  windowZIndexes, 
  zIndexCounter 
}) => {
  const [serverAddress, setServerAddress] = useState<string>("");
  const [serverPort, setServerPort] = useState<string>("9377"); // Default MCC port
  const [status, setStatus] = useState<string>("Disconnected");
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [connectFailed, setConnectFailed] = useState<boolean>(false);
  const [logs, setLogs] = useState<{ timestamp: string; message: string }[]>([]);
  const [wsConnectionVerified, setWsConnectionVerified] = useState<boolean>(false);
  const [shouldAutoMinimize, setShouldAutoMinimize] = useState<boolean>(false);

  const logsEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  // Create portal element once on mount
  const [portalElement] = useState(() => {
    const existingPortal = document.getElementById("serverWindow-root");
    if (existingPortal) {
      return existingPortal;
    }
    const element = document.createElement("div");
    element.id = "serverWindow-root";
    document.body.appendChild(element);
    return element;
  });

  // Initialize with previous values from localStorage if available
  useEffect(() => {
    try {
      const socketInfo = localStorage.getItem('mccSocketInfo');
      if (socketInfo) {
        const info = JSON.parse(socketInfo);
        if (info.address) {
          const parts = info.address.split(':');
          if (parts.length === 2) {
            setServerAddress(parts[0]);
            setServerPort(parts[1]);
          }
        }
      }
    } catch (e) {
      console.error("Error loading saved server info:", e);
    }
  }, []);

  // Important: Store position in sessionStorage to maintain it across renders
  const savedPosition = sessionStorage.getItem('serverWindowPosition');
  const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
    x: (window.innerWidth - 600) / 2, 
    y: (window.innerHeight - 500) / 2
  };

  const [position, setPosition] = useState(defaultPosition);
  const nodeRef = useRef<HTMLDivElement>(null!);
  
  // Auto-scroll logs to bottom when new logs are added
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Auto-minimize after successful connection and navigation
  useEffect(() => {
    // If shouldAutoMinimize flag is set, minimize the window
    if (shouldAutoMinimize) {
      console.log("🔄 Auto-minimizing ServerWindow after navigation");
      onMinimize(status);
      setShouldAutoMinimize(false);
    }
  }, [shouldAutoMinimize, onMinimize, status]);

  const appendLog = (message: string) => {
    const timestamp = new Date().toLocaleString();
    setLogs((prevLogs) => [...prevLogs, { timestamp, message }]);
  };

  // When the window is clicked, bring it to front
  const handleWindowClick = () => {
    console.log(`Clicked ServerWindow, bringing to front`);
    onMouseDown();
  };

  // Handle minimize button click - call the parent component's onMinimize function
  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Minimizing ServerWindow, current status:", status);
    onMinimize(status);
  };

  // Directly test WebSocket connectivity
  const testDirectWebSocketConnection = async (address: string, port: string): Promise<boolean> => {
    try {
      appendLog(`Testing direct WebSocket connection to ws://${address}:${port}...`);
      const isConnected = await testWebSocketConnection(`${address}:${port}`);
      
      if (isConnected) {
        appendLog("✅ Direct WebSocket connection successful!");
        appendLog("✅ REAL CONNECTION MODE is possible");
        setWsConnectionVerified(true);
      } else {
        appendLog("❌ Direct WebSocket connection failed.");
        appendLog("⚠️ This indicates SIMULATION MODE will likely be used");
      }
      
      return isConnected;
    } catch (error) {
      appendLog(`WebSocket test error: ${error instanceof Error ? error.message : String(error)}`);
      appendLog("⚠️ Due to test error, SIMULATION MODE will be used");
      return false;
    }
  };

  const handleConnect = async () => {
    console.log("Connect button pressed");
    
    // Reset status
    setConnectFailed(false);
    setWsConnectionVerified(false);
    
    // Trim any whitespace from inputs
    const trimmedAddress = serverAddress.trim();
    const trimmedPort = serverPort.trim();
    
    if (!trimmedAddress || !trimmedPort) {
      alert("Please provide both Server Address and Port.");
      return;
    }
    
    try {
      console.log("Starting connection process");
      setIsConnecting(true);
      setStatus("Connecting...");
      appendLog(`Attempting to connect to MCC server at ${trimmedAddress}:${trimmedPort} via proxy...`);
      
      // First try to check if the proxy server is running
      try {
        appendLog("🔍 Checking if proxy server is running...");
        
        const proxyCheck = await fetch("http://localhost:8080", {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'text/plain'
          }
        });
        
        if (proxyCheck.ok) {
          appendLog("✅ Proxy server is running and accessible");
        } else {
          appendLog(`❌ Proxy server returned status ${proxyCheck.status}`);
          appendLog("ℹ️ Please start the proxy server using 'node mcc-proxy.js'");
          setStatus("Proxy Unavailable");
          setConnectFailed(true);
          setIsConnecting(false);
          return;
        }
      } catch (error) {
        console.error("Proxy check error:", error);
        appendLog("❌ Proxy server is not running or not reachable");
        appendLog("ℹ️ Please start the proxy server using 'node mcc-proxy.js'");
        setStatus("Proxy Unavailable");
        setConnectFailed(true);
        setIsConnecting(false);
        return;
      }
      
      // Perform WebSocket connectivity test - this helps determine if we can use real mode
      const wsConnected = await testDirectWebSocketConnection(trimmedAddress, trimmedPort);
      
      // Try to connect via the proxy and backend
      console.log(`Sending connection request to ${backendUrl}/connect_mcc`);
      
      const response = await fetch(`${backendUrl}/connect_mcc`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          server_address: trimmedAddress,
          server_port: trimmedPort,
          server_id: "mcc_client",
          force_real: wsConnected, // Only force real mode if websocket test succeeded
          use_proxy: true
        }),
      });
      
      // Process the response
      let result;
      let errorText = "";
      
      try {
        // Try to parse the response as JSON
        result = await response.json();
        console.log("Backend response:", result);
      } catch (error) {
        // If parsing fails, get the raw text
        errorText = await response.text();
        console.error("Non-JSON response:", errorText);
        appendLog(`HTTP error! Status: ${response.status} - ${errorText}`);
        setStatus("Connection Error");
        setConnectFailed(true);
        setIsConnecting(false);
        return;
      }
      
      console.log("Successfully parsed response:", result);
      
      // Handle different response statuses
      if (result.status === "success") {
        console.log("Connection successful, handling success case");
        // Verify if this is a fully verified connection or just a simulated success
        if (result.verified === true) {
          setStatus("Connected");
          appendLog(`✅ ${result.message}`);
          if (wsConnected) {
            appendLog("✅ WebSocket and backend connection tests both successful!");
            appendLog("✅ USING REAL CONNECTION MODE - Test results will use real data");
          } else {
            appendLog("⚠️ Backend reports success but WebSocket test failed.");
            appendLog("🔄 ENTERING SIMULATION MODE - Test results will be simulated");
          }
        } else if (result.simulation === true) {
          setStatus("Connected (Simulation)");
          appendLog(`ℹ️ ${result.message}`);
          appendLog("🔄 SIMULATION MODE ACTIVE - All test results will be generated");
          appendLog("ℹ️ No real hardware communication will occur");
        } else {
          setStatus("Connected (Unverified)");
          appendLog(`⚠️ ${result.message}`);
          appendLog("🔄 SIMULATION MODE ACTIVE (Unverified Connection)");
          appendLog("⚠️ Connection reported as successful but not fully verified.");
        }
      
        // Save the socket connection info in localStorage
        const mccSocketInfo = {
          isReal: !result.simulation && (result.verified || wsConnected),
          address: `${trimmedAddress}:${trimmedPort}`,
          simulation: result.simulation || !wsConnected,
          verified: result.verified || wsConnected
        };
        
        // Store in localStorage so it persists across navigation
        localStorage.setItem('mccSocketInfo', JSON.stringify(mccSocketInfo));
        appendLog("📦 Connection information saved for use in the application.");
        
        // Add explicit simulation status indicator
        if (mccSocketInfo.simulation) {
          appendLog("⚠️ SIMULATION MODE will be used for all hardware operations");
        } else {
          appendLog("✅ REAL MODE will be used for hardware operations");
        }
        
        // Check if ToTestList is visible from sessionStorage
        const savedVisibility = sessionStorage.getItem('windowVisibility');
        let windowVisibility = { 
          ToTestList: false,
          ServerWindow: true, // Keep ServerWindow visible
          ThreeDModelWindow: false
        };
        
        if (savedVisibility) {
          try {
            const parsedVisibility = JSON.parse(savedVisibility);
            windowVisibility.ToTestList = parsedVisibility.ToTestList || false;
            windowVisibility.ThreeDModelWindow = parsedVisibility.ThreeDModelWindow || false;
          } catch (e) {
            console.error("Error parsing window visibility:", e);
          }
        }
        
        // Store window state in sessionStorage for persistence with ServerWindow visible
        sessionStorage.setItem('windowVisibility', JSON.stringify(windowVisibility));
        console.log("Saved window state before navigation:", windowVisibility);
        
        // Navigate to main screen
        appendLog("🚀 Navigating to main application screen...");
        console.log("📱 About to navigate to /main");
        
        // Set flag to auto-minimize after navigation
        setShouldAutoMinimize(true);
        
        // Add a small delay to ensure all state updates complete
        setTimeout(() => {
          try {
            navigate("/main");
            console.log("📱 Navigation command executed");
          } catch (error) {
            console.error("Navigation error:", error);
            appendLog(`❌ Error navigating to main screen: ${error}`);
          }
        }, 500);
      } else if (result.status === "partial") {
        setStatus("Partial Connection");
        appendLog(`⚠️ ${result.message}`);
        appendLog("🔄 SIMULATION MODE ACTIVE - Partial connection detected");
        appendLog("⚠️ The application will use simulation mode for all features.");
        setConnectFailed(true);
      } else {
        setStatus("Failed to Connect");
        appendLog(`❌ ${result.message}`);
        appendLog("🔄 SIMULATION MODE will be used if you continue to main screen");
        setConnectFailed(true);
      }
    } catch (error) {
      console.error("Error connecting to MCC:", error);
      setStatus("Connection Error");
      appendLog(`❌ Connection error: ${error instanceof Error ? error.message : String(error)}`);
      appendLog("🔄 SIMULATION MODE will be used if you continue to main screen");
      setConnectFailed(true);
    } finally {
      setIsConnecting(false);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

  // Get the effective z-index value
  const effectiveZIndex = windowZIndexes["ServerWindow"] || zIndex;
  
  // Save position to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('serverWindowPosition', JSON.stringify(position));
  }, [position]);

  // Get status color based on connection state
  const getStatusColor = () => {
    if (status === 'Connected') return '#10b981'; // Green
    if (status === 'Connected (Simulation)') return '#f59e0b'; // Amber
    if (status === 'Connecting...') return '#3b82f6'; // Blue
    if (status.includes('Failed') || status.includes('Error') || status === 'Server Unreachable') {
      return '#ef4444'; // Red
    }
    return '#6b7280'; // Gray
  };

  return createPortal(
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      position={position}
      onStop={(e, d) => {
        console.log(`ServerWindow moved to: x=${d.x}, y=${d.y}`);
        setPosition({ x: d.x, y: d.y });
      }}
    >
      <div 
        ref={nodeRef}
        className={styles.popup}
        data-window="ServerWindow"
        id="serverWindow-wrapper"
        style={{ 
          position: "fixed",
          zIndex: effectiveZIndex,
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: isDarkMode ? "#fff" : "#000",
          border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`,
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
        }}
        onClick={handleWindowClick}
      >
        <div className={`${styles.header} drag-handle`}>
          <h2>Server Connection</h2>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleMinimize}
              className={styles.minimizeButton}
              title="Minimize"
            >
              —
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className={styles.closeButton}
              title="Close"
            >
              ✖
            </button>
          </div>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Server Address"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
            className={styles.input}
            onClick={(e) => e.stopPropagation()}
          />
          <input
            type="text"
            placeholder="Port"
            value={serverPort}
            onChange={(e) => setServerPort(e.target.value)}
            className={styles.input}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleConnect();
            }} 
            className={styles.connectButton}
            disabled={isConnecting}
            style={{ 
              backgroundColor: isConnecting ? '#9ca3af' : connectFailed ? '#ef4444' : '#00bcd4',
              cursor: isConnecting ? 'wait' : 'pointer'
            }}
          >
            {isConnecting ? "Connecting..." : connectFailed ? "Retry" : "Connect"}
          </button>
        </div>
        
        <div style={{ 
          padding: '8px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className={styles.statusIndicator}>
            Status: 
            <span style={{ 
              color: getStatusColor(),
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {status}
              
              {/* Pulse animation for "Connecting..." state */}
              {status === 'Connecting...' && (
                <span className={styles.pulse}>⟲</span>
              )}
            </span>
            
            {/* Show simulation badge when appropriate */}
            {(status.includes('Simulation') || 
              (status === 'Connected' && serverAddress.toLowerCase() === 'localhost') ||
              status === 'Partial Connection') && (
              <span className={`${styles.statusBadge} ${styles.simulationBadge}`}>
                SIMULATION MODE
              </span>
            )}
            
            {/* Only show real mode badge when verified and not localhost */}
            {status === 'Connected' && 
              wsConnectionVerified && 
              serverAddress.toLowerCase() !== 'localhost' && (
              <span className={`${styles.statusBadge} ${styles.realBadge}`}>
                REAL CONNECTION
              </span>
            )}
          </div>
          
          {wsConnectionVerified && (
            <span style={{
              backgroundColor: '#10b981', 
              color: 'white', 
              padding: '2px 8px', 
              borderRadius: '9999px', 
              fontSize: '12px'
            }}>
              WebSocket Verified
            </span>
          )}
        </div>
        
        <div className={styles.logs}>
          <h3>Connection Logs</h3>
          <div
            className={styles.logWindow}
            style={{
              backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5",
              maxHeight: '180px',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {logs.map((log, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: '4px' }}>
                <span
                  style={{
                    fontWeight: "bold",
                    minWidth: "150px",
                    marginRight: "8px",
                    textAlign: "right",
                    fontSize: '12px',
                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                  }}
                >
                  [{log.timestamp}]
                </span>
                <span style={{ 
                  flex: 1,
                  color: log.message.includes('✅') ? '#10b981' :
                          log.message.includes('❌') ? '#ef4444' :
                          log.message.includes('⚠️') ? '#f59e0b' :
                          log.message.includes('SIMULATION MODE') ? '#ff9800' :
                          log.message.includes('REAL MODE') ? '#4caf50' :
                          isDarkMode ? '#f3f4f6' : '#1f2937',
                  fontWeight: log.message.includes('SIMULATION MODE') || log.message.includes('REAL MODE') ? 'bold' : 'normal'
                }}>
                  {log.message}
                </span>
              </div>
            ))}
            <div ref={logsEndRef}></div>
          </div>
        </div>
        
        {/* Tips and information */}
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          backgroundColor: isDarkMode ? '#374151' : '#f0f9ff',
          borderRadius: '6px',
          fontSize: '12px'
        }}>
          <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>Connection Notes:</p>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            <li>Ensure the MCC server is running at the specified address/port</li>
            <li>Verify MCC Proxy <code>mcc-proxy.js</code> is running</li>
            <li>Simulation mode will be used if there is no connection</li>
            <li>Minimise this window to keep the connection while working</li>
          </ul>
        </div>
      </div>
    </Draggable>,
    portalElement
  );
}

export default ServerWindow;