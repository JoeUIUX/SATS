// Fixed page.tsx - Key changes to avoid infinite rendering loop and keep ServerWindow open

/* implement routing using react-router-dom, 
you'll need to transform your page.tsx into an entry point for routing. */

/* npm install react-router-dom */

"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import MainScreen from "../components/MainScreen/MainScreen";
import ToTestList from "../components/ToTestList/ToTestList";
import ServerWindow from "../components/ServerWindow/ServerWindow";
import ThreeDModelWindow from "../components/ModelWindow/ThreeDModelWindow";
import WelcomeWindow from "../components/WelcomeWindow/WelcomeWindow";
import { WindowName } from "@/types/types";

// Global variables to track window states across routes and navigations
let isToTestListOpen = false;
let isServerWindowOpen = false; // Add a global variable for ServerWindow

export default function Page() {
  // Window visibility state - Use refs to avoid state race conditions
  const windowVisibilityRef = useRef({
    ToTestList: false,
    ServerWindow: false,
    ThreeDModelWindow: false,
  });
  
  // State for reactive UI updates
  const [windowVisibility, setWindowVisibility] = useState({
    ToTestList: false,
    ServerWindow: false,
    ThreeDModelWindow: false
  });

  const [zIndexCounter, setZIndexCounter] = useState(10000); // Base z-index
  const [windowZIndexes, setWindowZIndexes] = useState<{
    ToTestList: number;
    ServerWindow: number;
    ThreeDModelWindow: number;
  }>({
    ToTestList: 10002,
    ServerWindow: 10001,
    ThreeDModelWindow: 10000,
  });
  
  const [threeDModelProfileId, setThreeDModelProfileId] = useState<number | null>(1);
  const [isOnMainScreen, setIsOnMainScreen] = useState(false);
  
  // Monitor current route to track if we're on main screen
  const RouteObserver = () => {
    const location = useLocation();
    
    useEffect(() => {
      const isMain = location.pathname === '/main';
      setIsOnMainScreen(isMain);
      
      // When navigating to main screen, restore window visibility from global state
      if (isMain) {
        console.log("🧭 Navigated to main screen, checking window states");
        
        // Check if windows should be open based on global flags
        if (isToTestListOpen && !windowVisibility.ToTestList) {
          console.log("🔄 ToTestList should be visible - restoring state");
          setWindowVisibility(prev => ({ ...prev, ToTestList: true }));
          
          // Force the ref to match as well
          windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ToTestList: true
          };
        }
        
        // Do the same for ServerWindow
        if (isServerWindowOpen && !windowVisibility.ServerWindow) {
          console.log("🔄 ServerWindow should be visible - restoring state");
          setWindowVisibility(prev => ({ ...prev, ServerWindow: true }));
          
          // Force the ref to match as well
          windowVisibilityRef.current = {
            ...windowVisibilityRef.current,
            ServerWindow: true
          };
        }
      }
    }, [location]);
    
    return null;
  };

  // Load window state from sessionStorage on initial mount
  useEffect(() => {
    // Load window visibility from sessionStorage on mount
    const savedVisibility = sessionStorage.getItem('windowVisibility');
    if (savedVisibility) {
      try {
        const parsed = JSON.parse(savedVisibility);
        windowVisibilityRef.current = parsed;
        setWindowVisibility(parsed);
        
        // Update global flags
        isToTestListOpen = parsed.ToTestList;
        isServerWindowOpen = parsed.ServerWindow; // Update global flag for ServerWindow
        
        console.log("📂 Loaded window visibility state:", parsed);
      } catch (e) {
        console.error("Error parsing saved window visibility:", e);
      }
    }
  }, []);

  // Save window visibility to sessionStorage whenever it changes
  useEffect(() => {
    // Save visibility state to sessionStorage for persistence
    sessionStorage.setItem('windowVisibility', JSON.stringify(windowVisibility));
    console.log("💾 Saved window visibility state:", windowVisibility);
    
    // Update global flags
    isToTestListOpen = windowVisibility.ToTestList;
    isServerWindowOpen = windowVisibility.ServerWindow; // Update global flag for ServerWindow
  }, [windowVisibility]);

  // Extra check to ensure windows stay visible when they should be
  useEffect(() => {
    // If global flag is true but component is not visible, fix it
    if (isToTestListOpen && !windowVisibility.ToTestList) {
      console.log("🔄 Fixing ToTestList visibility mismatch");
      setWindowVisibility(prev => ({
        ...prev,
        ToTestList: true
      }));
    }
    
    // Same check for ServerWindow
    if (isServerWindowOpen && !windowVisibility.ServerWindow) {
      console.log("🔄 Fixing ServerWindow visibility mismatch");
      setWindowVisibility(prev => ({
        ...prev,
        ServerWindow: true
      }));
    }
  }, [windowVisibility.ToTestList, windowVisibility.ServerWindow, isOnMainScreen]);

  // Main function to bring a window to front
  const bringWindowToFront = useCallback((windowName: WindowName) => {
    console.log(`🎯 Bringing ${windowName} to front`);
    
    // Update both state and ref to prevent race conditions
    windowVisibilityRef.current = {
      ...windowVisibilityRef.current,
      [windowName]: true
    };
    
    // Update visibility in state for UI rendering
    setWindowVisibility(prev => {
      if (prev[windowName] === true) {
        return prev; // No change needed
      }
      return { ...prev, [windowName]: true };
    });
    
    // Prevent z-index increases if window is already on top
    setWindowZIndexes((prevIndexes) => {
      const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
      
      if (prevIndexes[windowName] >= highestZIndex) {
        console.log(`Window ${windowName} already at highest z-index (${prevIndexes[windowName]})`);
        return prevIndexes; // Return unchanged to prevent loops
      }
      
      // Only update if we're actually bringing something to the front
      console.log(`Updating z-index for ${windowName} from ${prevIndexes[windowName]} to ${highestZIndex + 1}`);
      return { ...prevIndexes, [windowName]: highestZIndex + 1 };
    });
    
    // Only increment counter when actually changing z-indexes
    setZIndexCounter(prev => prev + 1);
  }, []);

// Enhanced openToTestList function with force render option
const openToTestList = useCallback((forceRender = false) => {
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
  
  // Verify if window was actually rendered
  setTimeout(() => {
    const elementExists = !!document.querySelector('[data-window="ToTestList"]');
    console.log(`Verification after opening: ToTestList in DOM: ${elementExists}`);
    
    // If it still doesn't exist, try one more time with a state reset
    if (!elementExists) {
      console.log("⚠️ ToTestList still not in DOM after opening - trying state reset");
      
      // Force a clear state first
      setWindowVisibility(prev => ({ ...prev, ToTestList: false }));
      
      // Then re-render after a short delay
      setTimeout(() => {
        setWindowVisibility(prev => ({ ...prev, ToTestList: true }));
      }, 10);
    }
  }, 50);
}, [bringWindowToFront, windowVisibility.ToTestList, setWindowVisibility, setWindowZIndexes, setZIndexCounter]);

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
  }, [setWindowVisibility]);

  // Create openServerWindow function similar to openToTestList
  const openServerWindow = useCallback((forceRender = false) => {
    console.log("🔍 openServerWindow called with forceRender:", forceRender);
    console.log("🔍 Current visibility state:", windowVisibility.ServerWindow);
    console.log("🟢 Opening ServerWindow window, force:", forceRender);
    
// If force render, skip the check for already being open
if (!forceRender && windowVisibility.ServerWindow === true) {
  console.log("ServerWindow already open - just bringing to front");
  
  // Check if the actual window exists in the DOM
  const elementExists = !!document.querySelector('[data-window="ServerWindow"]');
  if (!elementExists) {
    console.log("⚠️ ServerWindow state is true but window not in DOM - forcing render");
    // Continue execution to render the window
  } else {
    // Just bring to front and exit
    bringWindowToFront("ServerWindow");
    return;
  }
}

// Set global flag for cross-component communication
isServerWindowOpen = true;

// Update ref (for immediate access without waiting for re-render)
windowVisibilityRef.current = {
  ...windowVisibilityRef.current,
  ServerWindow: true
};

// Update state (to trigger re-render)
setWindowVisibility(prev => ({ ...prev, ServerWindow: true }));

// Update z-index to bring window to front
setWindowZIndexes((prevIndexes) => {
  const highestZIndex = Math.max(...Object.values(prevIndexes), 10000);
  return { ...prevIndexes, ServerWindow: highestZIndex + 1 };
});

setZIndexCounter(prev => prev + 1);

// Save state to sessionStorage for persistence
const currentState = {
  ...windowVisibilityRef.current,
  ServerWindow: true
};

sessionStorage.setItem('windowVisibility', JSON.stringify(currentState));
console.log("Updated sessionStorage:", currentState);

// Verify if window was actually rendered
setTimeout(() => {
  const elementExists = !!document.querySelector('[data-window="ServerWindow"]');
  console.log(`Verification after opening: ServerWindow in DOM: ${elementExists}`);
  
  // If it still doesn't exist, try one more time with a state reset
  if (!elementExists) {
    console.log("⚠️ ServerWindow still not in DOM after opening - trying state reset");
    
    // Force a clear state first
    setWindowVisibility(prev => ({ ...prev, ServerWindow: false }));
    
    // Then re-render after a short delay
    setTimeout(() => {
      setWindowVisibility(prev => ({ ...prev, ServerWindow: true }));
    }, 10);
  }
}, 50);
}, [bringWindowToFront, windowVisibility.ServerWindow, setWindowVisibility, setWindowZIndexes, setZIndexCounter]);

const closeServerWindow = useCallback(() => {
console.log("🔍 closeServerWindow called");
console.log("🔍 Current visibility state:", windowVisibility.ServerWindow);
console.log("🔴 Closing ServerWindow");

// Update global flag
isServerWindowOpen = false;

// Update ref immediately
windowVisibilityRef.current = {
  ...windowVisibilityRef.current,
  ServerWindow: false
};

// Update state for UI
setWindowVisibility(prev => ({ 
  ...prev, 
  ServerWindow: false 
}));

// Update sessionStorage immediately
try {
  const currentState = {
    ...windowVisibilityRef.current,
    ServerWindow: false
  };
  
  sessionStorage.setItem('windowVisibility', JSON.stringify(currentState));
  console.log("Updated sessionStorage when closing:", currentState);
} catch (e) {
  console.error("Error updating sessionStorage:", e);
}
}, [setWindowVisibility]);

// Super simple implementation with no dependencies
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

return (
<Router>
  <RouteObserver />
  
  <Routes>
    <Route path="/" element={
      <WelcomeWindow 
        openToTestList={openToTestList} 
        openServerWindow={openServerWindow}
      />
    } />
    <Route path="/main" element={
      <MainScreen 
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
    } />
  </Routes>

  {/* Floating windows - now using simple inline rendering for other windows */}
  <div className="window-container">
    {windowVisibility.ToTestList && (
      <ToTestList
        key={`ToTestList-${Date.now()}`} // Force new instance on every render
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
        key="ServerWindow"
        zIndex={windowZIndexes.ServerWindow}
        onMouseDown={() => bringWindowToFront("ServerWindow")}
        onClose={closeServerWindow}
        bringWindowToFront={bringWindowToFront}
        windowZIndexes={windowZIndexes}
        zIndexCounter={zIndexCounter}
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
  </div>
</Router>
);
}