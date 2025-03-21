"use client";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServerWindow.module.css";
import { Rnd } from "react-rnd"; // Use react-rnd for draggable and resizable windows
import { createPortal } from "react-dom";
import { WindowName } from "types/types";

interface ServerWindowProps {
  onClose: () => void;
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
  bringWindowToFront, 
  windowZIndexes, 
  zIndexCounter 
}) => {
  const [serverAddress, setServerAddress] = useState<string>("");
  const [serverId, setServerId] = useState<string>("");
  const [status, setStatus] = useState<string>("Disconnected");
  const [logs, setLogs] = useState<{ timestamp: string; message: string }[]>([]);

  const logsEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  const windowName = "ServerWindow";

  // Create portal element once on mount
  const [portalElement] = useState(() => {
    const element = document.createElement("div");
    element.id = "serverWindow-root";
    document.body.appendChild(element);
    return element;
  });

  // Important: Store position in sessionStorage to maintain it across renders
  const savedPosition = sessionStorage.getItem('serverWindowPosition');
  const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
    x: (window.innerWidth - 600) / 2, // Correct width of 600px
    y: (window.innerHeight - 500) / 2 // Better vertical centering
  };

  const [position, setPosition] = useState(defaultPosition);
  
  useEffect(() => {
    // Scroll logs to bottom when they update
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    // Cleanup function for component unmount
    return () => {
      if (portalElement && portalElement.parentNode) {
        portalElement.parentNode.removeChild(portalElement);
      }
    };
  }, [logs, portalElement]);

  const nodeRef = useRef<HTMLDivElement>(null!);

  const appendLog = (message: string) => {
    const timestamp = new Date().toLocaleString();
    setLogs((prevLogs) => [...prevLogs, { timestamp, message }]);
  };

  // When the window is clicked, bring it to front using the passed function
  const handleWindowClick = () => {
    console.log(`🖱️ Clicked ${windowName}, bringing to front`);
    onMouseDown();
  };

  const handleConnect = async () => {
    if (!serverAddress || !serverId) {
      alert("Please provide both Server Address and Server ID.");
      return;
    }

    try {
      setStatus("Connecting...");
      appendLog("Attempting to connect to MCC server...");
      console.log("Connecting to:", `${backendUrl}/connect_mcc`); // Log the URL

      const response = await fetch(`${backendUrl}/connect_mcc`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          server_address: serverAddress,
          server_id: serverId,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Non-JSON response:", errorText);
        appendLog(`HTTP error! Status: ${response.status} - ${errorText}`);
        setStatus("Connection Error");
        return;
      }

      const result = await response.json();
      console.log("Backend response:", result);

      if (result.status === "success") {
        setStatus("Connected");
        appendLog(result.message);
        
        // Check if ToTestList is visible from sessionStorage
        const savedVisibility = sessionStorage.getItem('windowVisibility');
        let isToTestListVisible = false;
        
        if (savedVisibility) {
          try {
            const parsedVisibility = JSON.parse(savedVisibility);
            isToTestListVisible = parsedVisibility.ToTestList || false;
          } catch (e) {
            console.error("Error parsing window visibility:", e);
          }
        }
        
        // Save current window state to sessionStorage before navigation
        const currentWindowState = {
          ServerWindow: true,
          ToTestList: isToTestListVisible, // Use the parsed value
          ThreeDModelWindow: false
        };
        
        // Store window state in sessionStorage for persistence
        sessionStorage.setItem('windowVisibility', JSON.stringify(currentWindowState));
        console.log("💾 Saved window state before navigation:", currentWindowState);
        
        setTimeout(() => {
          navigate("/main");
        }, 100);
      } else {
        setStatus("Failed to Connect");
        appendLog(result.message);
      }
    } catch (error) {
      console.error("Error connecting to MCC:", error);
      setStatus("Connection Error");
      appendLog(`Connection error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Debug when z-index changes
  useEffect(() => {
    console.log(`ServerWindow z-index updated to ${zIndex}`);
  }, [zIndex]);
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      console.log("🌓 Dark mode detected:", isDark);
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
    
    // Also check periodically as a backup
    const interval = setInterval(checkDarkMode, 1000);
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
  
  // Ensure light/dark mode styling is applied on render
  useEffect(() => {
    // Force immediate check when component renders
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  // Get the effective z-index value
  const effectiveZIndex = windowZIndexes["ServerWindow"] || zIndex;
  
  // Save position to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('serverWindowPosition', JSON.stringify(position));
  }, [position]);

  return createPortal(
    <Rnd
      position={position}
      size={{
        width: 500,
        height: "auto",
      }}
      dragHandleClassName="drag-handle"
      enableResizing={false}
      onDragStop={(e, d) => {
        console.log(`📌 ServerWindow moved to: x=${d.x}, y=${d.y}`);
        // Save new position to state and sessionStorage
        setPosition({ x: d.x, y: d.y });
      }}
      style={{ 
        position: "fixed",
        zIndex: effectiveZIndex,
        pointerEvents: "auto",
        backgroundColor: isDarkMode ? "#121212" : "white",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        willChange: "transform, z-index"
      }}
      onClick={handleWindowClick}
    >
      <div 
        className={styles.popup} 
        style={{ 
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: isDarkMode ? "#fff" : "#000"
        }}
      >
        <div className={`${styles.header} drag-handle`}>
          <h2>Server Connection</h2>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents accidental reopening
              onClose();
            }}
            className={styles.closeButton}
            style={{
              color: isDarkMode ? "white" : "black", // Apply color dynamically
            }}
          >
            ✖
          </button>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Server Address"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
            className={styles.input}
            onClick={(e) => e.stopPropagation()} // Prevent window click handler
          />
          <input
            type="text"
            placeholder="Server ID"
            value={serverId}
            onChange={(e) => setServerId(e.target.value)}
            className={styles.input}
            onClick={(e) => e.stopPropagation()} // Prevent window click handler
          />
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleConnect();
            }} 
            className={styles.connectButton}
          >
            Connect
          </button>
        </div>
        <p>Status: {status}</p>
        <div className={styles.logs}>
          <h3>Logs</h3>
          <div
            className={styles.logWindow}
            style={{
              maxHeight: "250px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: isDarkMode ? "#2a2a2a" : "#f5f5f5"
            }}
            onClick={(e) => e.stopPropagation()} // Prevent window click handler
          >
            {logs.map((log, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    minWidth: "150px",
                    marginRight: "8px",
                    textAlign: "right",
                  }}
                >
                  [{log.timestamp}]
                </span>
                <span style={{ flex: 1 }}>{log.message}</span>
              </div>
            ))}
            <div ref={logsEndRef}></div>
          </div>
        </div>
      </div>
    </Rnd>,
    document.body
  );
};

export default ServerWindow;