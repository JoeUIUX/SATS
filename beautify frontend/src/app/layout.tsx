"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import { initializeThemeBackgrounds, refreshThemeSettings } from "@/utils/themeInitializer";

/* LIGHT DARK MODE SLIDER TOGGLER */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// Define TypeScript types for font handling
type FontName = 'Roboto' | 'Open Sans' | 'Montserrat' | 'Source Code Pro';

interface FontUrls {
  [key: string]: string;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // First useEffect: Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Second useEffect: Initialize theme after mounting
  useEffect(() => {
    if (!mounted) return;

    // Initialize theme from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }

    // Apply dark/light mode classes to <html>
    const htmlElement = document.documentElement;
    if (savedMode === "true") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
    
    // Initialize theme backgrounds and fonts
    const initializeTheme = async () => {
      try {
        await initializeThemeBackgrounds();
        await loadSavedFont();
        loadFonts();
      } catch (error) {
        console.error("Error initializing theme:", error);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(initializeTheme, 100);
  }, [mounted]);

  const loadSavedFont = async () => {
    if (!mounted) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"}/settings`);
      if (response.ok) {
        const settings = await response.json();
        if (settings.font) {
          applyFontToDocument(settings.font);
        }
      }
    } catch (error) {
      console.error("Error loading font settings:", error);
    }
  };

  const applyFontToDocument = (fontFamily: string): void => {
    if (!fontFamily || !mounted) return;
    
    document.documentElement.style.setProperty('--app-font-family', fontFamily);
    
    let fontStyle = document.getElementById('app-font-style');
    if (!fontStyle) {
      fontStyle = document.createElement('style');
      fontStyle.id = 'app-font-style';
      document.head.appendChild(fontStyle);
    }
    
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
    
    const loadFontFile = (fontName: string): void => {
      const fontUrls: FontUrls = {
        'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
        'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
        'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
      };
      
      const fontMatch = Object.entries(fontUrls).find(([_, value]) => 
        fontFamily.includes(value.split(',')[0])
      );
      
      if (fontMatch) {
        const [matchedFontName] = fontMatch;
        if (matchedFontName in fontUrls) {
          const url = fontUrls[matchedFontName as keyof typeof fontUrls];
          const link = document.createElement('link');
          link.href = url;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
      }
    };
    
    if (!fontFamily.includes('Arial') && !fontFamily.includes('sans-serif')) {
      loadFontFile(fontFamily);
    }
  };

  const loadFonts = (): void => {
    if (!mounted) return;

    type FontName = 'Roboto' | 'Open Sans' | 'Montserrat' | 'Source Code Pro';
    
    const fontUrls: Record<FontName, string> = {
      'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
      'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
      'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
    };
    
    Object.entries(fontUrls).forEach(([name, url]) => {
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

  const toggleDarkMode = async () => {
    if (!mounted) return;

    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());

      const htmlElement = document.documentElement;
      if (newMode) {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.add("light");
        htmlElement.classList.remove("dark");
      }

      setTimeout(async () => {
        await refreshThemeSettings();
      }, 50);

      return newMode;
    });
  };

  // Return basic HTML structure during SSR
  if (!mounted) {
    return (
      <html lang="en">
        <body>
          <div suppressHydrationWarning={true} style={{ visibility: 'hidden' }}>
            {children}
          </div>
        </body>
      </html>
    );
  }

  // Return full layout after mounting
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