/* implement routing using react-router-dom, 
you’ll need to transform your page.tsx into an entry point for routing. */

/* npm install react-router-dom */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeWindow from "../components/WelcomeWindow/WelcomeWindow";
import MainScreen from "../components/MainScreen/MainScreen";
import ToTestList from "../components/ToTestList/ToTestList";
import ServerWindow from "../components/ServerWindow/ServerWindow";
import ThreeDModelWindow from "../components/ModelWindow/ThreeDModelWindow";

export default function Page() {
  const [showToTestList, setShowToTestList] = useState(false);
  const [showServerWindow, setShowServerWindow] = useState(false);
  const [showThreeDModelWindow, setShowThreeDModelWindow] = useState(false);
  const [zIndexCounter, setZIndexCounter] = useState(10000); // Base z-index
  const [windowZIndexes, setWindowZIndexes] = useState({
    WelcomeWindow: 10003,
    ToTestList: 10002,
    ServerWindow: 10001,
    ThreeDModelWindow: 10000,
  });
  // ✅ initial individual z-index
  const [threeDModelProfileId, setThreeDModelProfileId] = useState<number | null>(1);  // Default value for testing
  const [showWelcomeWindow, setShowWelcomeWindow] = useState(true);

// Main function to bring a window to the front
type WindowName = "WelcomeWindow" | "ToTestList" | "ServerWindow" | "ThreeDModelWindow";

const bringWindowToFront = useCallback((windowName: WindowName) => {
  console.log(`🎯 Bringing ${windowName} to front`);

  // ✅ Ensure the window is shown before updating its z-index
  setTimeout(() => {
    if (windowName === "ToTestList" && !showToTestList) {
      setShowToTestList(true);
    } else if (windowName === "ServerWindow" && !showServerWindow) {
      setShowServerWindow(true);
    } else if (windowName === "ThreeDModelWindow" && !showThreeDModelWindow) {
      setShowThreeDModelWindow(true);
    }
  }, 10);

  setWindowZIndexes((prevIndexes) => {
    const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);

    // ✅ Prevent redundant z-index updates
    if (prevIndexes[windowName] >= highestZIndex) {
      console.warn(`⚠️ ${windowName} is already at the top. No update needed.`);
      return prevIndexes;
    }

    return { ...prevIndexes, [windowName]: highestZIndex + 1 };
  });

  setZIndexCounter((prevCounter) => prevCounter + 1);
}, [showToTestList, showServerWindow, showThreeDModelWindow, windowZIndexes]);


  // Window open/close handlers
  const openToTestList = useCallback(() => {
    console.log("Opening ToTestList window");
    setShowToTestList(true);
    bringWindowToFront("ToTestList");
  }, [bringWindowToFront]);

  const closeToTestList = useCallback(() => {
    console.log("Closing ToTestList window");
    setShowToTestList(false);
  }, []);

  const openServerWindow = useCallback(() => {
    console.log("Opening ServerWindow window");
    setShowServerWindow(true);
    bringWindowToFront("ServerWindow");
  }, [bringWindowToFront]);

  const closeServerWindow = useCallback(() => {
    console.log("Closing ServerWindow window");
    setShowServerWindow(false);
  }, []);

  const openModelWindow = useCallback((profileId: number = 1) => {
    console.log("🛰️ Opening 3D Model window for profile:", profileId);
  
    setShowThreeDModelWindow(false); // 🔴 Ensure it unmounts first
    setTimeout(() => {
      setThreeDModelProfileId(profileId);
      setShowThreeDModelWindow(true); // ✅ Then re-mount the window
      console.log("🔼 Bringing 3D Model window to front");
      bringWindowToFront("ThreeDModelWindow");
    }, 50); // ⏳ Small delay to ensure proper state update
  }, [bringWindowToFront]);
  

  const closeModelWindow = () => {
    console.log("🔴 Closing ThreeDModelWindow...");
    setShowThreeDModelWindow(false);
  };
  
  
  
// Debug logging
useEffect(() => {
  console.log("Window States:", {
    welcome: showWelcomeWindow,
    toTestList: showToTestList,
    server: showServerWindow,
    model: showThreeDModelWindow
  });
  console.log("Z-Index Values:", windowZIndexes);
}, [showWelcomeWindow, showToTestList, showServerWindow, showThreeDModelWindow, windowZIndexes]);
  
    // Log window z-indexes when they change (for debugging)
    useEffect(() => {
      console.log("Current window z-indexes:", windowZIndexes);
    }, [windowZIndexes]);
  
    useEffect(() => {
      console.log("===== WINDOW STATE DEBUG =====");
      console.log("showToTestList:", showToTestList);
      console.log("showServerWindow:", showServerWindow);
      console.log("showThreeDModelWindow:", showThreeDModelWindow);
      console.log("windowZIndexes:", windowZIndexes);
      console.log("=============================");
    }, [showToTestList, showServerWindow, showThreeDModelWindow, windowZIndexes]);
    
    const DebugControl = () => (
      <div style={{
        position: 'fixed',
        bottom: 50,
        right: 10, 
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 99999,
        fontSize: '12px'
      }}>
        <div>Window Controls:</div>
        <button onClick={() => setShowToTestList(!showToTestList)}>
          {showToTestList ? 'Hide' : 'Show'} Tests
        </button>
        <button onClick={() => setShowServerWindow(!showServerWindow)}>
          {showServerWindow ? 'Hide' : 'Show'} Server
        </button>
        <button onClick={() => setShowThreeDModelWindow(!showThreeDModelWindow)}>
          {showThreeDModelWindow ? 'Hide' : 'Show'} Model
        </button>
        <div style={{marginTop: '5px'}}>Z-Indexes:</div>
        <div>Tests: {windowZIndexes.ToTestList}</div>
        <div>Server: {windowZIndexes.ServerWindow}</div>
        <div>Model: {windowZIndexes.ThreeDModelWindow}</div>
      </div>
    );

    useEffect(() => {
      console.log(`📌 showThreeDModelWindow changed:`, showThreeDModelWindow);
    }, [showThreeDModelWindow]);

    return (
      <Router>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/main" element={
            <MainScreen 
              openToTestList={openToTestList}
              openServerWindow={openServerWindow}
              openModelWindow={openModelWindow}
            />
          } />
        </Routes>
  
        {/* Debug display */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '5px',
          zIndex: 99999,
          fontSize: '12px'
        }}>
          Welcome: {showWelcomeWindow ? 'SHOW' : 'HIDE'} (z:{windowZIndexes.WelcomeWindow})<br />
          ToTestList: {showToTestList ? 'SHOW' : 'HIDE'} (z:{windowZIndexes.ToTestList})<br />
          ServerWindow: {showServerWindow ? 'SHOW' : 'HIDE'} (z:{windowZIndexes.ServerWindow})<br />
          ModelWindow: {showThreeDModelWindow ? 'SHOW' : 'HIDE'} (z:{windowZIndexes.ThreeDModelWindow})
        </div>

        <div className="window-container">
  {["WelcomeWindow", "ToTestList", "ServerWindow", "ThreeDModelWindow"]
.sort((a, b) => (windowZIndexes[a as WindowName] || 0) - (windowZIndexes[b as WindowName] || 0))
    .map((windowName) => {
      if (windowName === "WelcomeWindow" && showWelcomeWindow)
        return (
          <WelcomeWindow
            key="WelcomeWindow"
            zIndex={windowZIndexes.WelcomeWindow}
            onMouseDown={() => bringWindowToFront("WelcomeWindow")}
            onClose={() => setShowWelcomeWindow(false)}
            bringWindowToFront={bringWindowToFront}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
            openToTestList={openToTestList}
            openServerWindow={openServerWindow}
          />
        );

      if (windowName === "ToTestList" && showToTestList)
        return (
          <ToTestList
            key="ToTestList"
            zIndex={windowZIndexes.ToTestList}
            onMouseDown={() => bringWindowToFront("ToTestList")}
            onClose={closeToTestList}
            bringWindowToFront={bringWindowToFront}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
          />
        );

      if (windowName === "ServerWindow" && showServerWindow)
        return (
          <ServerWindow
            key="ServerWindow"
            zIndex={windowZIndexes.ServerWindow}
            onMouseDown={() => bringWindowToFront("ServerWindow")}
            onClose={closeServerWindow}
            bringWindowToFront={bringWindowToFront}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
          />
        );

      if (windowName === "ThreeDModelWindow" && showThreeDModelWindow && threeDModelProfileId !== null)
        return (
          <ThreeDModelWindow
            key="ThreeDModelWindow"
            profileId={threeDModelProfileId}
            zIndex={windowZIndexes.ThreeDModelWindow}
            onMouseDown={() => bringWindowToFront("ThreeDModelWindow")}
            onClose={closeModelWindow}
            bringWindowToFront={bringWindowToFront}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
          />
        );

      return null;
    })}
</div>


    </Router>
  );
}