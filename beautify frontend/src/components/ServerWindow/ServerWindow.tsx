"use client";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServerWindow.module.css";

interface ServerWindowProps {
  onClose: () => void;
}

const ServerWindow: React.FC<ServerWindowProps> = ({ onClose }) => {
  const [serverAddress, setServerAddress] = useState<string>("");
  const [serverId, setServerId] = useState<string>("");
  const [status, setStatus] = useState<string>("Disconnected");
  const [logs, setLogs] = useState<{ timestamp: string; message: string }[]>([]);

  const logsEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  const appendLog = (message: string) => {
    const timestamp = new Date().toLocaleString();
    setLogs((prevLogs) => [...prevLogs, { timestamp, message }]);
  };

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

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

  return (
    <div className={styles.popup} style={{ width: "500px" }}>
      <div className={styles.header}>
        <h2>Server Connection</h2>
        <button
          onClick={onClose}
          className={styles.closeButton}
          style={{
            color: 
              typeof document !== "undefined" &&
              document.documentElement.classList.contains("dark")
                ? "white"
                : "black",
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
  );
};

export default ServerWindow;
