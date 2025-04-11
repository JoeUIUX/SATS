import React, { useState, useEffect } from 'react';
import styles from './Taskbar.module.css';

interface MinimizedWindow {
  id: string;
  title: string;
  icon?: React.ReactNode;
  status?: string;
  progress?: number;
  onRestore: () => void;
}

interface TaskbarProps {
  minimizedWindows: MinimizedWindow[];
}

const Taskbar: React.FC<TaskbarProps> = ({ minimizedWindows }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    
    // Initial check
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Don't render if there are no minimized windows
  if (minimizedWindows.length === 0) {
    return null;
  }

  // Get icon based on window type and status
  const getWindowIcon = (windowId: string, status?: string) => {
    if (windowId === "ServerWindow") {
      // Server window with status-based icon
      if (status?.includes("Connected")) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        );
      } else if (status?.includes("Error") || status?.includes("Failed")) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      } else {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        );
      }
    } else if (windowId === "ToTestList") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6h13"></path>
          <path d="M8 12h13"></path>
          <path d="M8 18h13"></path>
          <path d="M3 6h.01"></path>
          <path d="M3 12h.01"></path>
          <path d="M3 18h.01"></path>
        </svg>
      );
    } else if (windowId === "ThreeDModelWindow") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      );
    }
    
    // Default icon for other windows
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
      </svg>
    );
  };

  // Get status text for display
  const getStatusText = (windowId: string, status?: string) => {
    if (windowId === "ServerWindow") {
      if (status?.includes("Connected")) {
        return status.includes("Simulation") ? "Sim Mode" : "Connected";
      } else if (status?.includes("Error")) {
        return "Error";
      } else if (status?.includes("Failed")) {
        return "Failed";
      } else if (status?.includes("Partial")) {
        return "Partial";
      } else {
        return status || "Offline";
      }
    }
    return "";
  };

  // Get status class for the indicator
  const getStatusClass = (windowId: string, status?: string) => {
    if (windowId === "ServerWindow") {
      if (status?.includes("Connected")) {
        return status.includes("Simulation") ? styles.statusSimulation : styles.statusConnected;
      } else if (status?.includes("Error") || status?.includes("Failed")) {
        return styles.statusError;
      } else if (status?.includes("Partial")) {
        return styles.statusSimulation;
      } else {
        return styles.statusWaiting;
      }
    }
    return styles.statusWaiting;
  };

  // Get icon color based on status
  const getIconColor = (windowId: string, status?: string) => {
    if (windowId === "ServerWindow") {
      if (status?.includes("Connected")) {
        return status.includes("Simulation") ? "#f59e0b" : "#10b981";
      } else if (status?.includes("Error") || status?.includes("Failed")) {
        return "#ef4444";
      } else if (status?.includes("Partial")) {
        return "#f59e0b";
      }
    }
    return isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 24, 39, 0.7)";
  };

  return (
    <div className={styles.taskbar}>
      <div className={styles.taskbarItems}>
        {minimizedWindows.map((window) => {
          const statusText = getStatusText(window.id, window.status);
          const iconColor = getIconColor(window.id, window.status);
          const statusClass = getStatusClass(window.id, window.status);
          const isActive = window.status?.includes("Running") || window.status === "Connecting...";
          
          return (
            <div 
              key={window.id}
              className={styles.taskbarItem}
              onClick={() => {
                console.log(`Restoring window: ${window.id}`);
                window.onRestore();
              }}
            >
              {/* Status indicator dot */}
              <div className={`${styles.statusIndicator} ${statusClass} ${isActive ? styles.pulseAnimation : ''}`}></div>
              
              <span className={styles.taskbarItemIcon} style={{ color: iconColor }}>
                {getWindowIcon(window.id, window.status)}
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: 1 }}>
                <span className={styles.taskbarItemTitle}>
                  {window.title}
                </span>
                {statusText && (
                  <span style={{ 
                    fontSize: '10px', 
                    color: iconColor,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {statusText}
                  </span>
                )}
              </div>
              
              {window.progress !== undefined && (
                <div className={styles.taskbarItemProgress}>
                  <div 
                    className={styles.taskbarItemProgressFill}
                    style={{ 
                      width: `${window.progress}%`,
                      backgroundColor: iconColor
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Taskbar;