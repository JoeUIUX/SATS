// using Next.js routing
// remove react-router-dom via npm uninstall react-router-dom in frontend directory


"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MainScreen from "../components/MainScreen/MainScreen";
import ToTestList from "../components/ToTestList/ToTestList";
import ServerWindow from "../components/ServerWindow/ServerWindow";
import ThreeDModelWindow from "../components/ModelWindow/ThreeDModelWindow";
import WelcomeWindow from "../components/WelcomeWindow/WelcomeWindow";
import Taskbar from "../components/Taskbar/Taskbar";
import { WindowName } from "@/types/types";
import SettingsWindow from "../components/SettingsWindow/SettingsWindow";

// Global variable to track ToTestList state across routes and navigations
let isToTestListOpen = false;

// Interface for minimized windows
interface MinimizedWindow {
  id: string;
  title: string;
  status?: string;
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get current route from URL params
  const currentRoute = searchParams.get('route') || 'welcome';

  // Window visibility state - Use refs to avoid state race conditions
  const windowVisibilityRef = useRef({
    ToTestList: false,
    ServerWindow: false,
    ThreeDModelWindow: false,
    SettingsWindow: false,
  });
  
  // State for reactive UI updates
  const [windowVisibility, setWindowVisibility] = useState({
    ToTestList: false,
    ServerWindow: false,
    ThreeDModelWindow: false,
    SettingsWindow: false
  });

  // New state for minimized windows - only for ServerWindow
  const [minimizedWindows, setMinimizedWindows] = useState<MinimizedWindow[]>([]);

  const [zIndexCounter, setZIndexCounter] = useState(10000);
  const [windowZIndexes, setWindowZIndexes] = useState<{
    ToTestList: number;
    ServerWindow: number;
    ThreeDModelWindow: number;
    SettingsWindow: number;
  }>({
    ToTestList: 10002,
    ServerWindow: 10001,
    ThreeDModelWindow: 10000,
    SettingsWindow: 10003,
  });
  
  const [threeDModelProfileId, setThreeDModelProfileId] = useState<number | null>(1);
  const [isOnMainScreen, setIsOnMainScreen] = useState(false);
  const [serverWindowKey, setServerWindowKey] = useState(Date.now());
  
  // Monitor current route to track if we're on main screen
  useEffect(() => {
    const isMain = currentRoute === 'main';
    setIsOnMainScreen(isMain);
    
    // When navigating to main screen, restore window visibility from global state
    if (isMain) {
      console.log("🧭 Navigated to main screen, checking window states");
      
      // Check if ToTestList should be open based on global flag
      if (isToTestListOpen && !windowVisibility.ToTestList) {
        console.log("🔄 ToTestList should be visible - restoring state");
        setWindowVisibility(prev => ({ ...prev, ToTestList: true }));
        
        // Force the ref to match as well
        windowVisibilityRef.current = {
          ...windowVisibilityRef.current,
          ToTestList: true
        };
      }
    }
  }, [currentRoute, windowVisibility.ToTestList]);

  // Navigation functions to replace react-router-dom
  const navigateToMain = () => {
    router.push('/?route=main');
  };

  const navigateToWelcome = () => {
    router.push('/');
  };

  // Load window state from sessionStorage on initial mount
  useEffect(() => {
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
  useEffect(() => {
    sessionStorage.setItem('windowVisibility', JSON.stringify(windowVisibility));
    console.log("💾 Saved window visibility state:", windowVisibility);
    
    // Update global flag for ToTestList
    isToTestListOpen = windowVisibility.ToTestList;
  }, [windowVisibility]);

  // Extra check to ensure ToTestList stays visible when it should be
  useEffect(() => {
    if (isToTestListOpen && !windowVisibility.ToTestList) {
      console.log("🔄 Fixing ToTestList visibility mismatch");
      setWindowVisibility(prev => ({
        ...prev,
        ToTestList: true
      }));
    }
  }, [windowVisibility.ToTestList, isOnMainScreen]);

  // Dedicated function to restore a window from taskbar
  const restoreWindowFromTaskbar = (windowId: WindowName) => {
    console.log(`♻️ Restoring ${windowId} from taskbar with direct method`);
    
    // 1. Remove from minimized windows
    setMinimizedWindows(prev => prev.filter(w => w.id !== windowId));
    
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
    setWindowVisibility(prev => ({ ...prev, [windowId]: true }));
    
    // 5. Force a remount of the window (for ServerWindow only)
    if (windowId === "ServerWindow") {
      console.log("🔄 Generating new ServerWindow key to force remount");
      setServerWindowKey(Date.now());
    }
    
    // 6. Update z-index to bring to front
    setWindowZIndexes(prev => {
      const highestZIndex = Math.max(...Object.values(prev), 10000);
      return { ...prev, [windowId]: highestZIndex + 1 };
    });
    
    // 7. Increment z-index counter
    setZIndexCounter(prev => prev + 1);
  };

  // Main function to bring a window to front
  const bringWindowToFront = useCallback((windowName: WindowName) => {
    console.log(`🎯 Bringing ${windowName} to front`);
    
    // Update both state and ref to prevent race conditions
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      [windowName]: true
    };
    
    // Check if the window is minimized and restore it
    const isMinimized = minimizedWindows.some(win => win.id === windowName);
    
    if (isMinimized) {
      // Use the direct restore method instead of handling here
      restoreWindowFromTaskbar(windowName);
      return; // Exit early since restoreWindowFromTaskbar handles everything
    }
    
    // Update visibility in state for UI rendering if not already visible
    setWindowVisibility(prev => {
      if (prev[windowName] === true && !isMinimized) {
        return prev; // No change needed unless it was minimized
      }
      return { ...prev, [windowName]: true };
    });
    
    // Prevent z-index increases if window is already on top
    setWindowZIndexes((prevIndexes) => {
      const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
      
      if (prevIndexes[windowName] >= highestZIndex && !isMinimized) {
        console.log(`Window ${windowName} already at highest z-index (${prevIndexes[windowName]})`);
        return prevIndexes; // Return unchanged to prevent loops
      }
      
      // Only update if we're actually bringing something to the front
      console.log(`Updating z-index for ${windowName} from ${prevIndexes[windowName]} to ${highestZIndex + 1}`);
      return { ...prevIndexes, [windowName]: highestZIndex + 1 };
    });
    
    // Only increment counter when actually changing z-indexes
    setZIndexCounter(prev => prev + 1);
  }, [minimizedWindows]);

  // Function to minimize a window - ONLY for ServerWindow
  const minimizeServerWindow = useCallback((status: string) => {
    console.log(`⬇️ Minimizing ServerWindow with status: ${status}`);
    
    // Add to minimized windows
    setMinimizedWindows(prev => {
      // Check if already minimized
      if (prev.some(win => win.id === "ServerWindow")) {
        // Update the status of the existing window
        return prev.map(win => 
          win.id === "ServerWindow" 
            ? { ...win, status }
            : win
        );
      }
      
      // Add to minimized windows
      return [...prev, {
        id: "ServerWindow",
        title: "Server Connection",
        status
      }];
    });
    
    // Hide the window
    setWindowVisibility(prev => ({
      ...prev,
      ServerWindow: false
    }));
    
    // Update ref
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      ServerWindow: false
    };
    
  }, []);

const openToTestList = useCallback((forceRender = false) => {
  console.log("🔍 openToTestList called with forceRender:", forceRender);
  console.log("🔍 Current visibility state:", windowVisibility.ToTestList);
  
  // If window is already open and we're not forcing a render, just bring to front
  if (!forceRender && windowVisibility.ToTestList === true) {
    console.log("ToTestList already open - just bringing to front");
    bringWindowToFront("ToTestList");
    return;
  }
  
  console.log("🟢 Opening ToTestList window, force:", forceRender);
  
  // Set global flag for cross-component communication
  isToTestListOpen = true;
  
  // Update ref (for immediate access without waiting for re-render)
  windowVisibilityRef.current = {
    ...windowVisibilityRef.current,
    ToTestList: true
  };
  
  // Update state (to trigger re-render)
  setWindowVisibility(prev => ({ ...prev, ToTestList: true }));
  
  // Update z-index to bring window to front
  setWindowZIndexes((prevIndexes) => {
    const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
    return { ...prevIndexes, ToTestList: highestZIndex + 1 };
  });
  
  setZIndexCounter(prev => prev + 1);
  
  // Save state to sessionStorage for persistence
  const currentState = {
    ...windowVisibilityRef.current,
    ToTestList: true
  };
  
  sessionStorage.setItem('windowVisibility', JSON.stringify(currentState));
  console.log("Updated sessionStorage:", currentState);
  
}, [bringWindowToFront, windowVisibility.ToTestList]); // no unnecessary verification logic

  const closeToTestList = useCallback(() => {
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
    setWindowVisibility(prev => ({ 
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

  const openServerWindow = useCallback(() => {
    console.log("🟢 Opening ServerWindow window");
    
    // Check if window is minimized
    const isMinimized = minimizedWindows.some(win => win.id === "ServerWindow");
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
    setWindowVisibility(prev => ({ ...prev, ServerWindow: true }));
    
    // Update z-index
    setWindowZIndexes((prevIndexes) => {
      const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
      return { ...prevIndexes, ServerWindow: highestZIndex + 1 };
    });
    
    setZIndexCounter(prev => prev + 1);
  }, [minimizedWindows]);

  const closeServerWindow = useCallback(() => {
    console.log("🔴 Closing ServerWindow");
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      ServerWindow: false
    };
    setWindowVisibility(prev => ({ ...prev, ServerWindow: false }));
    
    // Remove from minimized windows if it was minimized
    setMinimizedWindows(prev => prev.filter(win => win.id !== "ServerWindow"));
  }, []);

  const openModelWindow = useCallback((profileId: number = 1) => {
    console.log(`🛰️ Opening 3D Model window for profile ID: ${profileId}`);
    
    // Update profile ID once
    setThreeDModelProfileId(profileId);
    
    // Update visibility
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      ThreeDModelWindow: true
    };
    setWindowVisibility(prev => ({
      ...prev,
      ThreeDModelWindow: true
    }));

    // Update z-index
    setWindowZIndexes(prev => {
      const highestZIndex = Math.max(...Object.values(prev), 10000);
      return { ...prev, ThreeDModelWindow: highestZIndex + 1 };
    });

    setZIndexCounter(prev => prev + 1);
  }, []);

  const closeModelWindow = useCallback(() => {
    console.log("🔴 Closing ThreeDModelWindow...");
    
    // Just update visibility
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      ThreeDModelWindow: false
    };
    setWindowVisibility(prev => ({ 
      ...prev, 
      ThreeDModelWindow: false 
    }));
  }, []);

  const openSettingsWindow = useCallback(() => {
    console.log("🟢 Opening SettingsWindow");
    
    // Update ref first
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      SettingsWindow: true
    };
    
    // Set visibility directly
    setWindowVisibility(prev => ({ ...prev, SettingsWindow: true }));
    
    // Update z-index
    setWindowZIndexes((prevIndexes) => {
      const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
      return { ...prevIndexes, SettingsWindow: highestZIndex + 1 };
    });
    
    setZIndexCounter(prev => prev + 1);
  }, []);
  
  const closeSettingsWindow = useCallback(() => {
    console.log("🔴 Closing SettingsWindow");
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      SettingsWindow: false
    };
    setWindowVisibility(prev => ({ ...prev, SettingsWindow: false }));
  }, []);

  // Render based on current route
  const renderCurrentView = () => {
    if (currentRoute === 'main') {
      return (
        <MainScreen 
          showSettingsWindow={windowVisibility.SettingsWindow}
          openSettingsWindow={openSettingsWindow}
          closeSettingsWindow={closeSettingsWindow}
          openToTestList={openToTestList}
          closeToTestList={closeToTestList}
          openServerWindow={openServerWindow}
          openModelWindow={openModelWindow}
          closeModelWindow={closeModelWindow}
          showToTestList={windowVisibility.ToTestList}
          showThreeDModelWindow={windowVisibility.ThreeDModelWindow}
          threeDModelProfileId={threeDModelProfileId}
          windowZIndexes={windowZIndexes}
          bringWindowToFront={bringWindowToFront}
          zIndexCounter={zIndexCounter}
        />
      );
    }
    
    // Default to WelcomeWindow
    return (
      <WelcomeWindow 
        openToTestList={openToTestList} 
        openServerWindow={openServerWindow}
        // Pass navigation function to allow navigation to main
        onNavigateToMain={navigateToMain}
      />
    );
  };

  return (
    <>
      {/* Main content based on route */}
      {renderCurrentView()}

      {/* Floating windows */}
      <div className="window-container">
{windowVisibility.ToTestList && (
  <ToTestList
    key="ToTestList"  // <- USE STABLE KEY
    zIndex={windowZIndexes.ToTestList}
    onMouseDown={() => bringWindowToFront("ToTestList")}
    onClose={closeToTestList}
    bringWindowToFront={bringWindowToFront}
    windowZIndexes={windowZIndexes}
    zIndexCounter={zIndexCounter}
  />
)}

        {windowVisibility.ServerWindow && (
          <ServerWindow
            key={`ServerWindow-${serverWindowKey}`}
            zIndex={windowZIndexes.ServerWindow}
            onMouseDown={() => bringWindowToFront("ServerWindow")}
            onClose={closeServerWindow}
            onMinimize={minimizeServerWindow}
            bringWindowToFront={bringWindowToFront}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
            // Pass navigation function for when connection is successful
            onNavigateToMain={navigateToMain}
          />
        )}

        {windowVisibility.ThreeDModelWindow && (
          <ThreeDModelWindow
            key={`ThreeDModel-${threeDModelProfileId}`}
            profileId={threeDModelProfileId}
            zIndex={windowZIndexes.ThreeDModelWindow}
            onMouseDown={() => bringWindowToFront("ThreeDModelWindow")}
            onClose={closeModelWindow}
            showThreeDModelWindow={windowVisibility.ThreeDModelWindow}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
            bringWindowToFront={bringWindowToFront}
          />
        )}

        {windowVisibility.SettingsWindow && (
          <SettingsWindow
            zIndex={windowZIndexes.SettingsWindow}
            onMouseDown={() => bringWindowToFront("SettingsWindow")}
            onClose={closeSettingsWindow}
            bringWindowToFront={bringWindowToFront}
            windowZIndexes={windowZIndexes}
            zIndexCounter={zIndexCounter}
          />
        )}
      </div>

      {/* Add Taskbar component */}
      <Taskbar 
        minimizedWindows={minimizedWindows.map(window => ({
          ...window,
          onRestore: () => restoreWindowFromTaskbar(window.id as WindowName)
        }))} 
      />
    </>
  );
}