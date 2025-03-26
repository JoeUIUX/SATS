import React, { useState, useEffect, useRef } from "react";
import styles from "./ToTestList.module.css";
import Draggable from "react-draggable";
import { createPortal } from "react-dom";
import { WindowName } from "types/types";

interface ToTestListProps {
  zIndex: number; 
  onMouseDown: () => void; 
  onClose: () => void;
  bringWindowToFront: (windowName: WindowName) => void;
  windowZIndexes: { [key: string]: number };
  zIndexCounter: number;
}

interface RowData {
  id?: number;  // Database ID
  sn: number;
  test: string;
  satellite: string;
  dateTime: string;
  loggedBy: string;
  selected?: boolean;
}

const ToTestList: React.FC<ToTestListProps> = ({ 
  zIndex, 
  onMouseDown, 
  onClose, 
  bringWindowToFront, 
  windowZIndexes, 
  zIndexCounter 
}) => {
  // Use MutableRefObject instead of RefObject to satisfy Draggable's requirements
  const nodeRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<RowData[]>([]);
  const [formData, setFormData] = useState({
    test: "",
    satellite: "",
    loggedBy: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  
  // Important: Add refs to prevent infinite focus loop
  const hasFocused = useRef(false);
  const initialMount = useRef(true);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // API URL from environment or default
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  // Create portal element once on mount
  const [portalElement] = useState(() => {
    // Check if portal already exists
    const existingPortal = document.getElementById("toTestList-root");
    if (existingPortal) {
      return existingPortal;
    }
    
    // Create new portal if needed
    const element = document.createElement("div");
    element.id = "toTestList-root";
    document.body.appendChild(element);
    return element;
  });

  // Important: Store position in sessionStorage to maintain it across renders
  const savedPosition = sessionStorage.getItem('toTestListPosition');
  const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
    x: (window.innerWidth - 800) / 2, 
    y: (window.innerHeight - 500) / 2
  };

  const [position, setPosition] = useState(defaultPosition);
  
  // Fetch data from the server when component mounts
  useEffect(() => {
    console.log("🔵 ToTestList mounted");
    
    // Focus window, but only once on initial mount
    if (initialMount.current && !hasFocused.current) {
      const focusTimeout = setTimeout(() => {
        console.log("🎯 ToTestList initial focusing");
        onMouseDown();
        hasFocused.current = true;
      }, 50);
      
      initialMount.current = false;
      
      return () => clearTimeout(focusTimeout);
    }

    // Fetch data from the server
    fetchTestItems();
  }, []); // Empty dependency array - run once on mount

  // Clean up portal and timers on unmount
  useEffect(() => {
    return () => {
      // Clear any pending save timeouts
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
        saveTimeoutRef.current = null;
      }
      
      hasFocused.current = false; // Reset focus state on unmount
      
      // Don't remove the portal element itself - this causes issues
      // Just reset internal state for next mount
    };
  }, []);

  // Save data to database whenever rows change
  useEffect(() => {
    // Don't save on initial mount
    if (initialMount.current) {
      return;
    }

    // Clear any existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set a new timeout to save data
    saveTimeoutRef.current = setTimeout(() => {
      saveTestItems();
    }, 500); // Debounce saves to avoid too many API calls
  }, [rows]);

  // Save position to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('toTestListPosition', JSON.stringify(position));
  }, [position]);

  // Fetch test items from the database
  const fetchTestItems = async () => {
    setIsLoading(true);
    try {
      console.log("📥 Fetching test items from server");
      const response = await fetch(`${API_URL}/test-items`);
      
      if (!response.ok) {
        throw new Error(`Error fetching test items: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("📊 Received test items:", data);
      
      // Map the data to match our expected format
      const formattedRows = data.map((item: any, index: number) => ({
        id: item.id,
        sn: index + 1, // Ensure sequential numbering
        test: item.test,
        satellite: item.satellite,
        dateTime: item.dateTime,
        loggedBy: item.loggedBy,
        selected: false
      }));
      
      setRows(formattedRows);
      
      // Fall back to localStorage if the server returns no data
      if (formattedRows.length === 0) {
        console.log("📝 No data from server, checking localStorage");
        const savedRows = localStorage.getItem("toTestListRows");
        if (savedRows) {
          const parsedRows = JSON.parse(savedRows);
          setRows(parsedRows);
          
          // Save the localStorage data to the server
          saveTestItems(parsedRows);
        }
      }
    } catch (error) {
      console.error("Error fetching test items:", error);
      
      // Fall back to localStorage on error
      const savedRows = localStorage.getItem("toTestListRows");
      if (savedRows) {
        setRows(JSON.parse(savedRows));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Save test items to both localStorage and the database
  const saveTestItems = async (itemsToSave = rows) => {
    if (itemsToSave.length === 0) {
      console.log("No items to save");
      return;
    }
    
    // Save to localStorage first (as backup)
    localStorage.setItem("toTestListRows", JSON.stringify(itemsToSave));
    
    // Save to the database
    try {
      console.log("💾 Saving test items to server:", itemsToSave);
      setSaveStatus("Saving...");
      
      const response = await fetch(`${API_URL}/test-items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: itemsToSave }),
      });
      
      if (!response.ok) {
        throw new Error(`Error saving test items: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("✅ Server response:", data);
      setSaveStatus("Saved");
      
      // Clear saved status after 2 seconds
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (error) {
      console.error("Error saving test items:", error);
      setSaveStatus("Error saving");
      
      // Clear error status after 3 seconds
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  const addItem = () => {
    if (!formData.test) return; // Prevent adding empty items
    
    const newRow: RowData = {
      sn: rows.length + 1,
      test: formData.test,
      satellite: formData.satellite,
      dateTime: new Date().toLocaleString(),
      loggedBy: formData.loggedBy || "Anonymous",
    };
    
    setRows([...rows, newRow]);
    setFormData({ test: "", satellite: "", loggedBy: "" });
  };

  const deleteItem = async () => {
    const selectedIndex = rows.findIndex((row) => row.selected);
    if (selectedIndex !== -1) {
      const selectedRow = rows[selectedIndex];
      const updatedRows = rows.filter((_, index) => index !== selectedIndex);

      // Update local state with recalculated S/N
      setRows(
        updatedRows.map((row, index) => ({
          ...row,
          sn: index + 1, // Recalculate S/N
        }))
      );

      // If the deleted item has an ID, delete it from the server
      if (selectedRow.id) {
        try {
          console.log(`🗑️ Deleting test item ID ${selectedRow.id} from server`);
          
          const response = await fetch(`${API_URL}/test-items/${selectedRow.id}`, {
            method: 'DELETE',
          });
          
          if (!response.ok) {
            throw new Error(`Error deleting test item: ${response.status}`);
          }
          
          console.log("✅ Item deleted from server");
        } catch (error) {
          console.error("Error deleting test item:", error);
        }
      }

      // Update localStorage
      if (updatedRows.length === 0) {
        localStorage.removeItem("toTestListRows");
      } else {
        localStorage.setItem("toTestListRows", JSON.stringify(updatedRows));
      }
    }
  };

  const clearList = async () => {
    if (window.confirm("Are you sure you want to clear all items?")) {
      setRows([]);
      localStorage.removeItem("toTestListRows"); // Explicitly clear localStorage
      
      // Clear all items from the server
      try {
        console.log("🧹 Clearing all test items from server");
        
        const response = await fetch(`${API_URL}/test-items/clear`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error(`Error clearing test items: ${response.status}`);
        }
        
        console.log("✅ All items cleared from server");
      } catch (error) {
        console.error("Error clearing test items:", error);
      }
    }
  };

  const toggleRowSelection = (index: number) => {
    const updatedRows = rows.map((row, i) => ({
      ...row,
      selected: i === index ? !row.selected : false,
    }));
    setRows(updatedRows);
  };

  // When the window is clicked, bring it to front using the passed function
  const handleWindowClick = (e: React.MouseEvent) => {
    // Prevent bringing to front for clicks on inputs and buttons
    if (
      e.target instanceof HTMLInputElement || 
      e.target instanceof HTMLButtonElement ||
      (e.target instanceof HTMLElement && e.target.closest('button') !== null)
    ) {
      return;
    }
    
    console.log(`🖱️ Clicked ToTestList, bringing to front`);
    onMouseDown();
  };

  // Add state to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Update dark mode state on component mount and when theme changes
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
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Force immediate theme check when component renders
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  // Compute actual z-index to use, falling back to provided zIndex if needed
  const effectiveZIndex = windowZIndexes["ToTestList"] || zIndex;

  // Handle close with confirmation
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents accidental reopening
    console.log("🔴 ToTestList close button clicked");
    
    // Update sessionStorage directly to ensure persistence
    try {
      const savedState = sessionStorage.getItem('windowVisibility');
      if (savedState) {
        const state = JSON.parse(savedState);
        state.ToTestList = false;
        sessionStorage.setItem('windowVisibility', JSON.stringify(state));
      }
    } catch (e) {
      console.error("Error updating sessionStorage:", e);
    }
    
    onClose();
  };

  return createPortal(
    <div 
      style={{
        position: "absolute",
        zIndex: effectiveZIndex,
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
        display: "block", /* Force display */
        willChange: "z-index",
        top: 0,          /* Make sure it's not hidden below viewport */
        left: 0          /* Make sure it's not hidden off-screen */
      }}
      data-window="ToTestList"
      id="toTestList-window"
    >
      <Draggable
        nodeRef={nodeRef as React.RefObject<HTMLElement>}
        handle=".drag-handle"
        position={position}
        onStop={(e, data) => {
          console.log(`📌 ToTestList moved to: x=${data.x}, y=${data.y}`);
          setPosition({ x: data.x, y: data.y });
        }}
      >
        <div 
          ref={nodeRef} 
          className={styles.popup} 
          style={{ 
            position: "fixed", 
            backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
            color: isDarkMode ? "#fff" : "#000",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "800px", // Add explicit width
            minHeight: "400px", // Ensure minimum height  
            userSelect: "none", // Prevent text selection during drag
            willChange: "transform",
            opacity: 1,
            visibility: "visible",
            display: "block" /* Force display */
          }}
          onClick={handleWindowClick}
        >
          {/* Window header */}
          <div className={`${styles.header} drag-handle`} style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Tests to Conduct</h2>
            <button
              onClick={handleClose}
              className={styles.closeButton}
              style={{ 
                color: isDarkMode ? "white" : "black",
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              ✖
            </button>
          </div>
          
          {/* Save status indicator */}
          {saveStatus && (
            <div className={styles.saveStatus} style={{
              padding: "4px 10px",
              margin: "0 0 10px 0",
              fontSize: "14px",
              textAlign: "center",
              backgroundColor: saveStatus.includes("Error") ? "#ffdddd" : "#ddffdd",
              color: saveStatus.includes("Error") ? "#cc0000" : "#007700",
              borderRadius: "4px"
            }}>
              {saveStatus}
            </div>
          )}
          
          {/* Loading indicator */}
          {isLoading ? (
            <div className={styles.loadingIndicator} style={{
              textAlign: "center",
              padding: "20px"
            }}>
              Loading test items...
            </div>
          ) : (
            <>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Test</th>
                    <th>Satellite</th>
                    <th>Date/Time Logged</th>
                    <th>Logged by</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
    <td 
      colSpan={5} 
      style={{ 
        textAlign: "center", 
        padding: "20px",
        color: "#000000", // Always black text
      }}
    >
                        No items added yet. Add a test below.
                      </td>
                    </tr>
                  ) : (
                    rows.map((row, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: row.selected
                            ? isDarkMode
                              ? "#003366" // Dark blue for dark mode
                              : "#d0ebff" // Light blue for light mode
                            : "transparent",
                        }}
                        className={row.selected ? styles.selectedRow : ""}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent window click handler
                          toggleRowSelection(index);
                        }}
                      >
                        <td>{row.sn}</td>
                        <td>{row.test}</td>
                        <td>{row.satellite}</td>
                        <td>{row.dateTime}</td>
                        <td>{row.loggedBy}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className={styles.form}>
                <input
                  type="text"
                  placeholder="Test"
                  value={formData.test}
                  onChange={(e) => setFormData({ ...formData, test: e.target.value })}
                  onClick={(e) => e.stopPropagation()} // Prevent dragging when interacting with inputs
                />
                <input
                  type="text"
                  placeholder="Satellite"
                  value={formData.satellite}
                  onChange={(e) => setFormData({ ...formData, satellite: e.target.value })}
                  onClick={(e) => e.stopPropagation()}
                />
                <input
                  type="text"
                  placeholder="Logged by"
                  value={formData.loggedBy}
                  onChange={(e) => setFormData({ ...formData, loggedBy: e.target.value })}
                  onClick={(e) => e.stopPropagation()}
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem();
                  }} 
                  className={styles.addButton}
                >
                  +
                </button>
              </div>
              <div className={styles.actions}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem();
                  }} 
                  className={styles.deleteButton}
                  disabled={!rows.some(row => row.selected)}
                >
                  Delete Item
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    clearList();
                  }} 
                  className={styles.clearButton}
                  disabled={rows.length === 0}
                >
                  Clear List
                </button>
              </div>
            </>
          )}
        </div>
      </Draggable>
    </div>,
    portalElement
  );
};

export default ToTestList;