"use client";

import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import ToTestList from "../ToTestList/ToTestList";
import ServerWindow from "../ServerWindow/ServerWindow";
import styles from "./WelcomeWindow.module.css";
import { WindowName } from "@/types/types";
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

// Function to format date and time as DD/MM/YYYY HH:MM:SS Timezone
const formatDateTime = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  // Add timezone information

  // in format e.g. "America/New_York" or "Asia/Singapore"
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // alternative, in format e.g. "GMT+0800"
  const timezoneOffset = date.toTimeString().split(' ')[1];
  
  // update const here accordingly as timezone or timezoneOffset
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} (${timezoneOffset})`;
};

  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showSatellite, setShowSatellite] = useState(false);
  const [showPenguin, setShowPenguin] = useState(false);
  const [showPenguinPopup, setShowPenguinPopup] = useState(false);

  const handleLogoClick = () => {
  setLogoClickCount(prev => {
    const newCount = prev + 1;
    
    // Every 13 clicks, show BOTH the satellite and penguin
    if (newCount % 13 === 0) {
      setShowSatellite(true);
      setShowPenguin(true);
      
      // Hide satellite after 4.5 seconds
      setTimeout(() => {
        setShowSatellite(false);
      }, 4500);
      
      // Hide penguin after 10.5 seconds
      setTimeout(() => {
        setShowPenguin(false);
      }, 10500);
    }
    
    return newCount;
  });
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
      <img 
          src="/assets/SaRCLogo.png" 
          alt="Satellite Research Centre Logo" 
          className={styles.logo} 
          draggable="false" 
          onClick={handleLogoClick}
          onDragStart={(e) => e.preventDefault()}
        />
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

{showSatellite && (
  <div style={{
    position: 'fixed',
    top: '20%',
    left: '-500px',
    fontSize: '60px',
    zIndex: 99999,
    animation: 'satelliteBounce 4s ease-out forwards', 
    pointerEvents: 'none'
  }}>
    🛰️
    <style jsx>{`
      @keyframes satelliteBounce {
        0% { 
          transform: translateX(-100px) rotate(0deg); 
        }
        12.5% {
          transform: translateX(12.5vw) rotate(45deg) scale(1.05);
        }
        25% {
          transform: translateX(25vw) rotate(90deg) scale(1.1);
        }
        37.5% {
          transform: translateX(37.5vw) rotate(135deg) scale(1.15);
        }
        50% { 
          transform: translateX(50vw) rotate(180deg) scale(1.2); 
        }
        62.5% {
          transform: translateX(62.5vw) rotate(225deg) scale(1.15);
        }
        75% {
          transform: translateX(75vw) rotate(270deg) scale(1.1);
        }
        87.5% {
          transform: translateX(87.5vw) rotate(315deg) scale(1.05);
        }
        100% { 
          transform: translateX(calc(100vw + 100px)) rotate(360deg) scale(1); 
        }
      }
    `}</style>
  </div>
)}

{showPenguin && (
  <div 
    style={{
      position: 'fixed',
      top: '60%',
      left: '-500px',
      fontSize: '50px',
      zIndex: 99998,
      animation: 'penguinBounce 10s ease-in-out forwards', 
      pointerEvents: 'auto',
      cursor: 'pointer',
      filter: 'drop-shadow(0 0 8px rgba(0, 123, 181, 0.6))' 
    }}
    onClick={() => {
      console.log("If you found the easter egg or if you are reading this, feel free to come say hi!🐧 https://www.linkedin.com/in/joegohguanwei/")
    }}
  >
    🐧
    <style jsx>{`
      @keyframes penguinBounce {
        0% { 
          transform: translateX(-100px) translateY(0) rotate(0deg); 
        }
        7.5% {
          transform: translateX(7.5vw) translateY(-30px) rotate(-10deg);
        }
        15% {
          transform: translateX(15vw) translateY(0) rotate(10deg);
        }
        22.5% {
          transform: translateX(22.5vw) translateY(-40px) rotate(-15deg);
        }
        30% {
          transform: translateX(30vw) translateY(0) rotate(15deg);
        }
        37.5% {
          transform: translateX(37.5vw) translateY(-35px) rotate(-12deg);
        }
        45% {
          transform: translateX(45vw) translateY(0) rotate(12deg);
        }
        52.5% {
          transform: translateX(52.5vw) translateY(-30px) rotate(-8deg);
        }
        60% {
          transform: translateX(60vw) translateY(0) rotate(8deg);
        }
        67.5% {
          transform: translateX(67.5vw) translateY(-25px) rotate(-5deg);
        }
        75% {
          transform: translateX(75vw) translateY(0) rotate(5deg);
        }
        82.5% {
          transform: translateX(82.5vw) translateY(-20px) rotate(-3deg);
        }
        90% {
          transform: translateX(90vw) translateY(0) rotate(3deg);
        }
        95% {
          transform: translateX(95vw) translateY(-10px) rotate(-1deg);
        }
        100% { 
          transform: translateX(calc(100vw + 100px)) translateY(-10px) rotate(0deg); 
        }
      }
    `}</style>
  </div>
)}

    </div>
</Draggable>
  );
};

export default WelcomeWindow;