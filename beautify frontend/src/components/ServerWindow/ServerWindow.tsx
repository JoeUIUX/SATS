"use client";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServerWindow.module.css";
import { Rnd } from "react-rnd"; // ✅ Use `react-rnd` instead of `react-draggable`
import { createPortal } from "react-dom";
import { WindowName } from "types/types";

interface ServerWindowProps {
  onClose: () => void;
}

const portalRoot = (() => {
  let node = document.getElementById("serverWindow-root");
  if (!node) {
    node = document.createElement("div");
    node.id = "serverWindow-root";
    document.body.appendChild(node);
  }
  return node;
})();

const ServerWindow: React.FC<{ 
  zIndex: number; 
  onMouseDown: () => void; 
  onClose: () => void;
  bringWindowToFront: (windowName: WindowName) => void;
  windowZIndexes: { [key: string]: number };  // ✅ Accept this prop
  zIndexCounter: number;  // ✅ Accept this prop
}> = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter }) => {


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
  const [currentZIndex, setCurrentZIndex] = useState(zIndex); // ✅ Track `zIndex`

  const appendLog = (message: string) => {
    const timestamp = new Date().toLocaleString();
    setLogs((prevLogs) => [...prevLogs, { timestamp, message }]);
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
        navigate("/main");
      } else {
        setStatus("Failed to Connect");
        appendLog(result.message);
      }
    } catch (error) {
      console.error("Error connecting to MCC:", error);
      setStatus("Connection Error");
      appendLog(`Connection error: ${error}`);
    }
  };

  // Debug when z-index changes
  useEffect(() => {
    console.log(`ServerWindow z-index updated to ${zIndex}`);
  }, [zIndex]);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  //const isDarkMode = document.documentElement.classList.contains("dark");

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
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
  
  
  console.log(`🎯 ServerWindow received zIndex:`, zIndex);

  return createPortal(
    <div 
    style={{ 
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: windowZIndexes["ServerWindow"],
    }}
    onClick={(e) => { // Change to onClick for better event capturing
      e.stopPropagation();
      console.log("ServerWindow clicked - bringing to front");
      onMouseDown();
    }}
  >
     <Rnd
        default={{
          x: window.innerWidth / 2 - 250,
          y: window.innerHeight / 2 - 200,
          width: 500,
          height: "auto",
        }}
        dragHandleClassName="drag-handle"
        enableResizing={false}
        style={{ 
          pointerEvents: "auto",
          backgroundColor: isDarkMode ? "#121212" : "white",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
        }}
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
              onClick={onClose}
              className={styles.closeButton}
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
            />
            <input
              type="text"
              placeholder="Server ID"
              value={serverId}
              onChange={(e) => setServerId(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleConnect} className={styles.connectButton}>
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
      </Rnd>
    </div>,
    document.body
  );
};

export default ServerWindow;