"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import { initializeThemeBackgrounds, refreshThemeSettings } from "@/utils/themeInitializer";

/* LIGHT DARK MODE SLIDER TOGGLER - START */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// Define TypeScript types for font handling
type FontName = 'Roboto' | 'Open Sans' | 'Montserrat' | 'Source Code Pro';

interface FontUrls {
  [key: string]: string; // Add index signature for string keys
}

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
    
    // Initialize theme backgrounds from database settings
    initializeThemeBackgrounds();
    
    // Load and apply previously saved font from localStorage
    const loadSavedFont = async () => {
      // Try to get font setting from backend
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"}/settings`);
        if (response.ok) {
          const settings = await response.json();
          if (settings.font) {
            // Apply the font immediately
            applyFontToDocument(settings.font);
          }
        }
      } catch (error) {
        console.error("Error loading font settings:", error);
      }
    };
    
    loadSavedFont();
  }, []);

  // Helper function to apply font - with proper type annotation
  const applyFontToDocument = (fontFamily: string): void => {
    if (!fontFamily) return;
    
    // Set CSS variable
    document.documentElement.style.setProperty('--app-font-family', fontFamily);
    
    // Create or update style element
    let fontStyle = document.getElementById('app-font-style');
    if (!fontStyle) {
      fontStyle = document.createElement('style');
      fontStyle.id = 'app-font-style';
      document.head.appendChild(fontStyle);
    }
    
    // Set comprehensive CSS rules
    fontStyle.textContent = `
      html body,
      html button,
      html input,
      html select,
      html textarea,
      html a,
      html p,
      html h1, html h2, html h3, html h4, html h5, html h6,
      html span, html div,
      html .sidebar,
      html .sidebar *,
      html .menu,
      html .menu *,
      html .menuItem,
      html .profilesButton,
      html .profileContainer,
      html .profileSidebarItem,
      html .profileButtonGroup,
      html .settingsContainer,
      html .popup,
      html .welcomeWindow,
      html .mainScreen,
      html .content,
      html .aboutSection,
      html .checkoutSection,
      html .settingsWindow,
      html .topSection,
      html .bottomSection,
      html * {
        font-family: ${fontFamily} !important;
      }
    `;
    
    // Load font file if needed (for non-system fonts)
    const loadFontFile = (fontName: string): void => {
      const fontUrls: FontUrls = {
        'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
        'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
        'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
      };
      
      // Find the font name from the value
      const fontMatch = Object.entries(fontUrls).find(([_, value]) => 
        fontFamily.includes(value.split(',')[0])
      );
      
      if (fontMatch) {
        const [matchedFontName] = fontMatch;
        // Type guard to ensure matchedFontName is a valid key
        if (matchedFontName in fontUrls) {
          const url = fontUrls[matchedFontName as keyof typeof fontUrls];
          const link = document.createElement('link');
          link.href = url;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
      }
    };
    
    // Only load external fonts, not system fonts
    if (!fontFamily.includes('Arial') && !fontFamily.includes('sans-serif')) {
      loadFontFile(fontFamily);
    }
  };

  // Add to layout.tsx with proper typing
  const loadFonts = (): void => {
    // Define valid font names as a type to ensure type safety
    type FontName = 'Roboto' | 'Open Sans' | 'Montserrat' | 'Source Code Pro';
    
    const fontUrls: Record<FontName, string> = {
      'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
      'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
      'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
    };
    
    // Add each font link to the document head
    Object.entries(fontUrls).forEach(([name, url]) => {
      // Check if link already exists to prevent duplicates
      const existingLink = document.querySelector(`link[href="${url}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
        console.log(`Loaded font: ${name}`);
      }
    });
  };

  useEffect(() => {
    // Your existing code...
    
    // Load fonts
    loadFonts();
  }, []);

  const toggleDarkMode = async () => {
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

      // Refresh theme settings to ensure we apply the latest backgrounds
      setTimeout(async () => {
        await refreshThemeSettings();
      }, 50);

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