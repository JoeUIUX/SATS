"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";

/* LIGHT DARK MODE SLIDER TOGGLER - START */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

/* memory of user specified light/dark mode */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(savedMode === "true");

    // Apply dark/light mode classes to <html> on component mount
    const htmlElement = document.documentElement;
    if (savedMode === "true") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());

      // Update <html> class dynamically
      const htmlElement = document.documentElement;
      if (newMode) {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.add("light");
        htmlElement.classList.remove("dark");
      }

      return newMode;
    });
  };

  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <body>
        <div className="toggleContainer">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider">
              <FontAwesomeIcon icon={faMoon} className="icon moon" />
              <FontAwesomeIcon icon={faSun} className="icon sun" />
            </span>
          </label>
        </div>
        {children}
      </body>
    </html>
  );
}

/* LIGHT DARK MODE SLIDER TOGGLER - END */
