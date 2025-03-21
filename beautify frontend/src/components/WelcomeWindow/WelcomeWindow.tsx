"use client";

import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import ToTestList from "../ToTestList/ToTestList"; // Import the ToTestList popup window React Component
import ServerWindow from "../ServerWindow/ServerWindow"; // Import Server Window Component
import styles from "./WelcomeWindow.module.css";
import { WindowName } from "types/types";
import { useNavigate } from "react-router-dom";

// Use require if not using images.d.ts
//const logo = require("../../assets/logo.jpg");

const WelcomeWindow: React.FC<{
  openToTestList: () => void;
  openServerWindow: () => void;
}> = ({ 
  openToTestList,
  openServerWindow
}) => {

  const [dateTime, setDateTime] = useState<string | null>(null);
  const [showToTestList, setShowToTestList] = useState(false);
  const [showServerWindow, setShowServerWindow] = useState(false);
  const [hasTests, setHasTests] = useState(false); // Track if there are rows in the list
  const nodeRef = useRef<HTMLDivElement>(null!);
  const navigate = useNavigate();

  // Check if the page is in dark mode
  const isDarkMode = document.documentElement.classList.contains("dark");

  // Function to format date and time as DD/MM/YYYY HH:MM:SS
  const formatDateTime = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  // Update the date/time every second
  useEffect(() => {
    const updateDateTime = () => setDateTime(formatDateTime(new Date()));
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check for rows in localStorage
  useEffect(() => {
    const savedRows = localStorage.getItem("toTestListRows");
    const hasRows = savedRows ? JSON.parse(savedRows).length > 0 : false;
    // setHasTests is always passed a valid boolean (true or false).
    // may receive null or an empty string due to the logic
    // without true / false and just > 0
    setHasTests(hasRows);
  }, [showToTestList]);

  const handleToTestListOpen = () => {
    console.log("Calling openToTestList");
    openToTestList(); // This will invoke the function from page.tsx
  };

  const handleToTestListClose = () => {
    console.log("ToTestList closed");
    setShowToTestList(false);
  };

  const handleServerWindowOpen = () => {
    console.log("Calling openServerWindow");
    openServerWindow(); // This will invoke the function from page.tsx
  };

  const handleServerWindowClose = () => {
    console.log("ServerWindow closed");
    setShowServerWindow(false);
  };
  
  return (
    <Draggable nodeRef={nodeRef} handle={`.${styles.welcomeHeader}`} positionOffset={{ x: "-50%", y: "-50%" }}>
      <div
        ref={nodeRef}
        className={styles.welcomeWindow}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minHeight: "200px",
          background: isDarkMode
            ? "linear-gradient(135deg, #000000, #1a1a1a)"
            : "linear-gradient(135deg, #ffffff, #e6f7ff)",
        }}
    >
      <header className={`${styles.welcomeHeader} drag-handle`}>
        <img src="/assets/SaRCLogo.png" alt="Satellite Research Centre Logo" className={styles.logo} />
        <h2>Satellite Research Centre</h2>
        <h1>Satellite Automated Testing System</h1>
        {dateTime && <p className={styles.dateTime}>{dateTime}</p>}
      </header>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWithNotification}>
          <button
            className={styles.welcomeButton}
            onClick={handleToTestListOpen}
          >
            Tests to Conduct
          </button>
          {hasTests && <span className={styles.notificationDot}></span>}
        </div>
        <button
          className={styles.welcomeButton}
          onClick={handleServerWindowOpen}
        >
          MCC
        </button>
      </div>
    </div>
</Draggable>
  );
};

export default WelcomeWindow;