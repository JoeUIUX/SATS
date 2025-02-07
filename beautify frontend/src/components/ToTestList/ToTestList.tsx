import React, { useState, useEffect } from "react";
import styles from "./ToTestList.module.css";

const ToTestList: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [rows, setRows] = useState<any[]>([]);
  const [form, setForm] = useState({
    test: "",
    satellite: "",
    loggedBy: "",
  });

  // Load data from localStorage only when the component is mounted
  useEffect(() => {
    const savedRows = localStorage.getItem("toTestListRows");
    if (savedRows) {
      console.log("Loaded from localStorage:", JSON.parse(savedRows));
      setRows(JSON.parse(savedRows)); // Restore the list from localStorage
    } else {
      console.log("No saved data found in localStorage.");
    }
  }, []); // Run only once when mounted

  // Save data to localStorage whenever rows change
  useEffect(() => {
    if (rows.length > 0) {
      console.log("Saving to localStorage:", rows);
      localStorage.setItem("toTestListRows", JSON.stringify(rows));
    } else {
      console.log("Skipping save to localStorage because rows are empty.");
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

  // Determine if the page is in dark mode
  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className={styles.popup}>
      <div className={styles.header}>
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
  );
};

export default ToTestList;
