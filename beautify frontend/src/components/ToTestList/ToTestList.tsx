import React, { useState, useEffect, useRef } from "react";
import styles from "./ToTestList.module.css";
import Draggable from "react-draggable";
import { createPortal } from "react-dom";
import { WindowName } from "types/types";

const ToTestList: React.FC<{ 
  zIndex: number; 
  onMouseDown: () => void; 
  onClose: () => void;
  bringWindowToFront: (windowName: WindowName) => void;
  windowZIndexes: { [key: string]: number };  // ✅ Accept this prop
  zIndexCounter: number;  // ✅ Accept this prop
}> = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter }) => {

  const nodeRef = useRef<HTMLDivElement>(null!); // ✅ Ensure nodeRef is initialized
  const [rows, setRows] = useState<any[]>([]);
  const [form, setForm] = useState({
    test: "",
    satellite: "",
    loggedBy: "",
  });

  const [currentZIndex, setCurrentZIndex] = useState(zIndex); // ✅ Track `zIndex`

  // Portal management
  const [portalElement] = useState(() => {
    // Create portal element once
    const element = document.createElement("div");
    element.id = "toTestList-root";
    document.body.appendChild(element);
    return element;
  });

  // Load data from localStorage
useEffect(() => {
  // Load data from localStorage
  const savedRows = localStorage.getItem("toTestListRows");
  if (savedRows) {
    setRows(JSON.parse(savedRows));
  }

  // Cleanup function for when component unmounts
  return () => {
    if (portalElement && portalElement.parentNode) {
      portalElement.parentNode.removeChild(portalElement);
    }
  };
}, [portalElement]);

  // Save data to localStorage when rows change
  useEffect(() => {
    if (rows.length > 0) {
      localStorage.setItem("toTestListRows", JSON.stringify(rows));
    } else {
      localStorage.removeItem("toTestListRows");
    }
  }, [rows]);

  const addItem = () => {
    const newRow = {
      sn: rows.length + 1,
      test: form.test,
      satellite: form.satellite,
      dateTime: new Date().toLocaleString(),
      loggedBy: form.loggedBy,
    };
    setRows([...rows, newRow]);
    setForm({ test: "", satellite: "", loggedBy: "" });
  };

  const deleteItem = () => {
    const selectedIndex = rows.findIndex((row) => row.selected);
    if (selectedIndex !== -1) {
      const updatedRows = rows.filter((_, index) => index !== selectedIndex);

      if (updatedRows.length === 0) {
        // If the list is empty, clear localStorage
        localStorage.removeItem("toTestListRows");
      } else {
        // Otherwise, update the rows and save to localStorage
        localStorage.setItem("toTestListRows", JSON.stringify(updatedRows));
      }

      // Update state with recalculated S/N
      setRows(
        updatedRows.map((row, index) => ({
          ...row,
          sn: index + 1, // Recalculate S/N
        }))
      );
    }
  };

  const clearList = () => {
    setRows([]);
    localStorage.removeItem("toTestListRows"); // Explicitly clear localStorage
  };

  const toggleRowSelection = (index: number) => {
    const updatedRows = rows.map((row, i) => ({
      ...row,
      selected: i === index ? !row.selected : false,
    }));
    setRows(updatedRows);
  };

  // Add state to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Update dark mode state on component mount and when theme changes
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

  // Determine if the page is in dark mode
  //const isDarkMode = document.documentElement.classList.contains("dark");

  // ✅ Ensure ToTestList mounts in a completely separate DOM node
  const portalRoot = document.getElementById("toTestList-root") || (() => {
    const root = document.createElement("div");
    root.id = "toTestList-root";
    document.body.appendChild(root);
    return root;
  })();

  // Debug when z-index changes
  useEffect(() => {
    console.log(`ToTestList z-index updated to ${zIndex}`);
  }, [zIndex]);

  console.log(`🎯 ToTestList received zIndex:`, zIndex);

  const windowName = "ToTestList";

  // Log when component renders
  useEffect(() => {
    console.log("ToTestList component rendering with z-index:", zIndex);
  }, [zIndex]);

  

  return createPortal(
    <Draggable nodeRef={nodeRef} handle=".drag-handle">
      <div 
        ref={nodeRef} 
        className={styles.popup} 
        style={{ 
          position: "fixed", 
          zIndex: windowZIndexes["ToTestList"],
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: isDarkMode ? "#fff" : "#000",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
        }}
        onClick={onMouseDown} // Change onMouseDown to onClick for better event capturing
      >
        <div className={`${styles.header} drag-handle`}>
          <h2>Tests to Conduct</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
          ✖
        </button>
      </div>
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
          {rows.map((row, index) => (
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
              onClick={() => toggleRowSelection(index)}
            >
              <td>{row.sn}</td>
              <td>{row.test}</td>
              <td>{row.satellite}</td>
              <td>{row.dateTime}</td>
              <td>{row.loggedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Test"
          value={form.test}
          onChange={(e) => setForm({ ...form, test: e.target.value })}
        />
        <input
          type="text"
          placeholder="Satellite"
          value={form.satellite}
          onChange={(e) => setForm({ ...form, satellite: e.target.value })}
        />
        <input
          type="text"
          placeholder="Logged by"
          value={form.loggedBy}
          onChange={(e) => setForm({ ...form, loggedBy: e.target.value })}
        />
        <button onClick={addItem} className={styles.addButton}>
          +
        </button>
      </div>
      <div className={styles.actions}>
        <button onClick={deleteItem} className={styles.deleteButton}>
          Delete Item
        </button>
        <button onClick={clearList} className={styles.clearButton}>
          Clear List
        </button>
      </div>
    </div>
    </Draggable>,
      document.body
  );
};

export default ToTestList;
