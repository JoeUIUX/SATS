import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import styles from "./SettingsWindow.module.css";
import { WindowName } from "@/types/types";
import FontLoader from '../FontLoader/FontLoader';

// Define supported fonts for the application
const SUPPORTED_FONTS = [
  { name: "System Default", value: "Arial, sans-serif" },
  { name: "Roboto", value: "Roboto, sans-serif" },
  { name: "Open Sans", value: "Open Sans, sans-serif" },
  { name: "Montserrat", value: "Montserrat, sans-serif" },
  { name: "Source Code Pro", value: "Source Code Pro, monospace" },
];

interface BackgroundOption {
  name: string;
  path: string;
}

interface SettingsWindowProps {
  zIndex: number;
  onMouseDown: () => void;
  onClose: () => void;
  bringWindowToFront: (windowName: WindowName) => void;
  windowZIndexes: { [key: string]: number };
  zIndexCounter: number;
}

const SettingsWindow: React.FC<SettingsWindowProps> = ({
  zIndex,
  onMouseDown,
  onClose,
  bringWindowToFront,
  windowZIndexes,
  zIndexCounter,
}) => {
  // State for settings
  const [selectedFont, setSelectedFont] = useState<string>("System Default");
  const [selectedBackground, setSelectedBackground] = useState<string>("/assets/curve_background.png");
  const [selectedLightBackground, setSelectedLightBackground] = useState<string>("/assets/lightcurve_background.png");
  const [defaultBackgrounds, setDefaultBackgrounds] = useState<BackgroundOption[]>([]);
  const [customBackgrounds, setCustomBackgrounds] = useState<BackgroundOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("appearance");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState<string>("#000000");
  const [lightBgColor, setLightBgColor] = useState<string>("#ffffff");
  const [currentViewMode, setCurrentViewMode] = useState<'dark' | 'light'>('dark');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  // App version info
  const appVersion = "1.0.0";
  const buildDate = "May 31, 2025";
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Dragging functionality
  const nodeRef = useRef<HTMLDivElement>(null!);
  const savedPosition = sessionStorage.getItem('settingsWindowPosition');
  const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
    x: (window.innerWidth - 600) / 2,
    y: (window.innerHeight - 500) / 2
  };
  const [position, setPosition] = useState(defaultPosition);

  // Create portal element once on mount
  const [portalElement] = useState(() => {
    const existingPortal = document.getElementById("settingsWindow-root");
    if (existingPortal) {
      return existingPortal;
    }
    const element = document.createElement("div");
    element.id = "settingsWindow-root";
    document.body.appendChild(element);
    return element;
  });

// 1. Create a ref for the font preview element
const fontPreviewRef = useRef<HTMLDivElement>(null);

// 2. Add a function to directly apply the font to the preview element
const applyFontToPreview = useCallback((fontFamily: string) => {
  if (fontPreviewRef.current) {
    fontPreviewRef.current.style.fontFamily = fontFamily;
    
    // Force a repaint by briefly modifying another style property
    fontPreviewRef.current.style.opacity = '0.99';
    setTimeout(() => {
      if (fontPreviewRef.current) {
        fontPreviewRef.current.style.opacity = '1';
      }
    }, 10);
  }
}, []);

// 3. Add effect to apply the font whenever it changes
useEffect(() => {
  const fontValue = SUPPORTED_FONTS.find(f => f.name === selectedFont)?.value || 'Arial, sans-serif';
  applyFontToPreview(fontValue);
}, [selectedFont, applyFontToPreview]);
  
  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const newIsDarkMode = document.documentElement.classList.contains("dark");
      setIsDarkMode(newIsDarkMode);
      
      // Update the current view mode based on document theme
      setCurrentViewMode(newIsDarkMode ? 'dark' : 'light');
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

  // Load settings and custom backgrounds from backend on mount
  useEffect(() => {
    loadSettings();
    loadBackgrounds();
  }, []);

  // Save position to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('settingsWindowPosition', JSON.stringify(position));
  }, [position]);

  // Handle any saved message display timeout
  useEffect(() => {
    if (savedMessage) {
      const timer = setTimeout(() => {
        setSavedMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [savedMessage]);

  // Load backgrounds from the backend
  const loadBackgrounds = async () => {
    try {
      const response = await fetch(`${backendUrl}/backgrounds`);
      if (response.ok) {
        const data = await response.json();
        setDefaultBackgrounds(data.default_backgrounds || []);
        setCustomBackgrounds(data.custom_backgrounds || []);
      }
    } catch (error) {
      console.error("Error loading backgrounds:", error);
    }
  };

  // Load settings from the backend
  const loadSettings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${backendUrl}/settings`);
      if (response.ok) {
        const data = await response.json();
        console.log("Loaded settings:", data);
        
        // Set font if available
        if (data.font) {
          const fontName = SUPPORTED_FONTS.find(f => f.value === data.font)?.name || "System Default";
          setSelectedFont(fontName);
        }
        
        // Set background if available (dark mode background)
        if (data.background) {
          setSelectedBackground(data.background);
        }
        
        // Set light mode background if available
        if (data.background_light) {
          setSelectedLightBackground(data.background_light);
        }
        
        // Set background color if available
        if (data.backgroundColor) {
          setBgColor(data.backgroundColor);
        }
        
        // Set light background color if available
        if (data.backgroundColorLight) {
          setLightBgColor(data.backgroundColorLight);
        }
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save settings to the backend, immediate font preview update
const saveSettings = async () => {
  setIsLoading(true);
  try {
    const fontValue = SUPPORTED_FONTS.find(f => f.name === selectedFont)?.value || 'Arial, sans-serif';
    applyFontToPreview(fontValue);
    
    // Get the refreshThemeSettings function
    const { refreshThemeSettings } = await import('@/utils/themeInitializer');
    
    const response = await fetch(`${backendUrl}/settings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        font: fontValue,
        background: selectedBackground,
        background_light: selectedLightBackground,
        backgroundColor: bgColor,
        backgroundColorLight: lightBgColor
      }),
    });
    
    if (response.ok) {
      setIsSaved(true);
      setSavedMessage("Settings saved successfully!");
      
      // Apply font to document - COMPREHENSIVE APPROACH
      document.documentElement.style.setProperty('--app-font-family', fontValue);
      
      // Force the font preview to update by re-rendering it
      // This is done by triggering a state change
      setSelectedFont(prevFont => {
        // Re-set to the same value, but this will trigger a re-render with the new key
        return prevFont;
      });
      
      // Create or update the font style element
      let fontStyle = document.getElementById('app-font-style');
      if (!fontStyle) {
        fontStyle = document.createElement('style');
        fontStyle.id = 'app-font-style';
        document.head.appendChild(fontStyle);
      }
      
      // Enhanced CSS with highest specificity selectors to override component styles
      // Target all components directly, especially those in the sidebar
      fontStyle.textContent = `
        /* General elements */
        html body,
        html button,
        html input,
        html select,
        html textarea,
        html a,
        html p,
        html h1, html h2, html h3, html h4, html h5, html h6,
        html span, html div,
        
        /* Application components with direct targeting */
        html .popup,
        html .welcomeWindow,
        html .mainScreen,
        html .content,
        html .aboutSection,
        html .checkoutSection,
        html .settingsWindow,
        html .topSection,
        html .bottomSection,
        
        /* Sidebar specific elements - high specificity */
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
        
        /* Tabs and interactive elements */
        html .tabsContainer *,
        html .activeTab,
        html .tabButton,
        
        /* Force all elements to use the selected font */
        html * {
          font-family: ${fontValue} !important;
        }
      `;
      
      // Apply background to document body based on current theme using the improved refreshThemeSettings
      if (refreshThemeSettings) {
        await refreshThemeSettings();
      } else {
        // Fallback to direct application if import fails
        applyBackground();
      }
      
      // After 2 seconds, reset the saved state
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
      
      // Also directly update sidebar elements for immediate effect
      const sidebarItems = document.querySelectorAll('.sidebar, .menuItem, .profilesButton, .profileSidebarItem');
      sidebarItems.forEach(el => {
        (el as HTMLElement).style.fontFamily = fontValue;
      });
    } else {
      setSavedMessage("Error saving settings");
    }
  } catch (error) {
    console.error("Error saving settings:", error);
    setSavedMessage("Error: Could not connect to server");
  } finally {
    setIsLoading(false);
  }
};

  // Apply background to the page
const applyBackground = async () => {
  // Import the refreshThemeSettings function dynamically
  const { refreshThemeSettings, applyBackgroundSettings } = await import('@/utils/themeInitializer');
  
  // Determine which background to apply based on current theme mode
  const bgPath = isDarkMode ? selectedBackground : selectedLightBackground;
  const bgColorValue = isDarkMode ? bgColor : lightBgColor;
  
  try {
    // First, try to apply using the refreshThemeSettings function which fetches fresh settings
    if (refreshThemeSettings) {
      console.log("Using refreshThemeSettings to apply background changes");
      await refreshThemeSettings();
    } else {
      // Fallback: Apply directly if we couldn't import the function
      console.log("Using direct method to apply background changes");
      
      // Create a settings object that mimics what would come from the server
      const settings = {
        background: selectedBackground,
        background_light: selectedLightBackground,
        backgroundColor: bgColor,
        backgroundColorLight: lightBgColor
      };
      
      // If we have the applyBackgroundSettings function, use it
      if (applyBackgroundSettings) {
        applyBackgroundSettings(settings, isDarkMode);
      } else {
        // Otherwise, fall back to direct DOM manipulation
        if (bgPath === "none") {
          document.body.style.backgroundImage = "none";
          document.body.style.backgroundColor = bgColorValue;
        } else {
          document.body.style.backgroundImage = `url(${bgPath})`;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundRepeat = "no-repeat";
        }
      }
    }
    
    // Tell the backend to apply the background
    fetch(`${backendUrl}/apply-background`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: bgPath,
        isDarkMode: isDarkMode
      }),
    }).catch(error => {
      console.error("Error notifying backend about background change:", error);
    });
  } catch (error) {
    console.error("Error applying background:", error);
  }
};

  // Handle background image upload
  const handleBackgroundUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if file is an image
    if (!file.type.match('image.*')) {
      setSavedMessage("Error: Please upload an image file");
      return;
    }
    
    // Create a formData object
    const formData = new FormData();
    formData.append('background', file);
    
    setIsLoading(true);
    try {
      const response = await fetch(`${backendUrl}/upload-background`, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Add the new background to custom backgrounds
        setCustomBackgrounds(prev => [
          ...prev,
          { name: file.name, path: data.path }
        ]);
        
        // Select the newly uploaded background for the current theme mode
        if (isDarkMode) {
          setSelectedBackground(data.path);
        } else {
          setSelectedLightBackground(data.path);
        }
        
        setSavedMessage("Background uploaded successfully!");
        
        // Refresh background list
        loadBackgrounds();
      } else {
        setSavedMessage("Error uploading background");
      }
    } catch (error) {
      console.error("Error uploading background:", error);
      setSavedMessage("Error: Could not upload background");
    } finally {
      setIsLoading(false);
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Handle the window click event
  const handleWindowClick = () => {
    console.log("🖱️ Clicked SettingsWindow, bringing to front");
    onMouseDown();
  };

  // Get the effective z-index from the windowZIndexes or fall back to the provided zIndex
  const effectiveZIndex = windowZIndexes["SettingsWindow"] || zIndex;

  // Function to toggle view mode (Dark/Light) during setting selection
  const toggleViewMode = () => {
    setCurrentViewMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Get the current background and color based on view mode (not based on actual theme)
  const getCurrentBackground = () => {
    return currentViewMode === 'dark' ? selectedBackground : selectedLightBackground;
  };

  const getCurrentBgColor = () => {
    return currentViewMode === 'dark' ? bgColor : lightBgColor;
  };

  // Update the appropriate background setting based on current view mode
  const handleBackgroundSelect = (path: string) => {
    if (currentViewMode === 'dark') {
      setSelectedBackground(path);
    } else {
      setSelectedLightBackground(path);
    }
  };

  // Update the appropriate background color based on current view mode
  const handleBgColorChange = (color: string) => {
    if (currentViewMode === 'dark') {
      setBgColor(color);
    } else {
      setLightBgColor(color);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSelectOpen &&
        document.querySelector(`.${styles.customSelect}`) && 
        !(document.querySelector(`.${styles.customSelect}`) as HTMLElement).contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSelectOpen, styles.customSelect]);

  return (
    <>
      <FontLoader fontFamily={selectedFont} />
      {createPortal(
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      position={position}
      onStop={(e, data) => {
        console.log(`📍 SettingsWindow moved to: x=${data.x}, y=${data.y}`);
        setPosition({ x: data.x, y: data.y });
      }}
    >
      <div
        ref={nodeRef}
        className={styles.settingsWindow}
        style={{
          position: "fixed",
          zIndex: effectiveZIndex,
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: isDarkMode ? "#fff" : "#000",
        }}
        onClick={handleWindowClick}
      >
        {/* Window header */}
        <div className={`${styles.header} drag-handle`}>
          <h2 className={styles.windowTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.titleIcon}>
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Settings
          </h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className={styles.closeButton}
          >
            ✖
          </button>
        </div>

        {/* Tabs navigation */}
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'appearance' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a10 10 0 1 0 10 10" />
              <path d="M12 12h.01" />
            </svg>
            Appearance
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'about' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            About
          </button>
        </div>

        {/* Content area */}
        <div className={styles.contentArea}>
          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className={styles.settingsSection}>
              <div className={styles.settingGroup}>
                <h3 className={styles.sectionTitle}>Background</h3>
                
                {/* Theme toggle for background previews */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h4>Editing {currentViewMode === 'dark' ? 'Dark' : 'Light'} Mode Background</h4>
                  <button 
                    onClick={toggleViewMode}
                    style={{
                      padding: '8px 12px',
                      backgroundColor: '#00bcd4',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>{currentViewMode === 'dark' ? '☀️' : '🌙'}</span>
                    Switch to {currentViewMode === 'dark' ? 'Light' : 'Dark'} Mode Editor
                  </button>
                </div>
                
                <div className={styles.backgroundSelector}>
                  <div className={styles.backgroundGrid}>
                    {/* Default backgrounds */}
                    {defaultBackgrounds.map((bg) => (
                      <div 
                        key={bg.path} 
                        className={`${styles.backgroundOption} ${getCurrentBackground() === bg.path ? styles.selectedBackground : ''}`}
                        onClick={() => handleBackgroundSelect(bg.path)}
                      >
                        {bg.path === "none" ? (
                          <div className={styles.solidColorPreview} style={{ backgroundColor: getCurrentBgColor() }}>
                            <span>Solid Color</span>
                          </div>
                        ) : (
                          <div className={styles.backgroundPreview}>
                            <img src={bg.path} alt={bg.name} />
                          </div>
                        )}
                        <div className={styles.backgroundName}>{bg.name}</div>
                      </div>
                    ))}
                    
                    {/* Custom backgrounds */}
                    {customBackgrounds.map((bg) => (
                      <div 
                        key={bg.path} 
                        className={`${styles.backgroundOption} ${getCurrentBackground() === bg.path ? styles.selectedBackground : ''}`}
                        onClick={() => handleBackgroundSelect(bg.path)}
                      >
                        <div className={styles.backgroundPreview}>
                          <img src={bg.path} alt={bg.name} />
                        </div>
                        <div className={styles.backgroundName}>{bg.name}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Upload new background */}
                  <div className={styles.uploadBackground}>
                    <h4>Upload New Background</h4>
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={fileInputRef}
                      onChange={handleBackgroundUpload}
                      className={styles.fileInput}
                    />
                    <div className={styles.smallNote}>
                      Recommended size: 1920x1080px or larger
                    </div>
                  </div>
                  
                  {/* Background color picker (for solid color option) */}
                  {getCurrentBackground() === "none" && (
                    <div className={styles.colorPicker}>
                      <h4>Background Color</h4>
                      <div className={styles.colorInputContainer}>
                        <input 
                          type="color" 
                          value={getCurrentBgColor()}
                          onChange={(e) => handleBgColorChange(e.target.value)}
                          className={styles.colorInput}
                        />
                        <input 
                          type="text" 
                          value={getCurrentBgColor()}
                          onChange={(e) => handleBgColorChange(e.target.value)}
                          className={styles.colorText}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.settingGroup}>
                <h3 className={styles.sectionTitle}>Font</h3>
                <div className={styles.fontSelector}>
  {/* Custom select with fonts displayed in their own typeface */}
  <div className={styles.customSelect}>
    <button 
      className={styles.customSelectButton}
      onClick={() => setIsSelectOpen(!isSelectOpen)}
      type="button"
    >
      <span>{selectedFont}</span>
      <span>{isSelectOpen ? '▲' : '▼'}</span>
    </button>
    
    {isSelectOpen && (
      <div className={styles.customSelectOptions}>
        {SUPPORTED_FONTS.map((font) => (
          <div 
            key={font.name} 
            className={styles.customSelectOption}
            onClick={() => {
              setSelectedFont(font.name);
              setIsSelectOpen(false);
            }}
            style={{
              fontFamily: font.value
            }}
          >
            {font.name}
          </div>
        ))}
      </div>
    )}
  </div>
  
  {/* Font preview with iframe that loads all fonts */}
  <div className={styles.fontPreview}>
  <h4 style={{ 
    marginBottom: '8px', 
    fontSize: '14px', 
    fontWeight: '500' 
  }}>Preview</h4>
    <iframe
      srcDoc={`
        <html>
        <head>
          <!-- Load all fonts directly in the iframe -->
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: ${SUPPORTED_FONTS.find(f => f.name === selectedFont)?.value || 'Arial, sans-serif'};
              margin: 0;
              padding: 16px;
              color: ${isDarkMode ? '#fff' : '#000'};
              background-color: ${isDarkMode ? '#1e1e1e' : '#f5f5f5'};
            }
          </style>
        </head>
        <body>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <p>0123456789</p>
        </body>
        </html>
      `}
      style={{
        width: '100%',
        height: '100px',
        border: 'none',
        overflow: 'hidden',
        backgroundColor: 'transparent'
      }}
      title="Font Preview"
    />
  </div>
</div>
              </div>

              <div className={styles.buttonRow}>
                <button 
                  className={styles.saveButton}
                  onClick={saveSettings}
                  disabled={isLoading || isSaved}
                >
                  {isLoading ? (
                    <span className={styles.loadingSpinner}>⟳</span>
                  ) : isSaved ? (
                    <span>✓ Saved</span>
                  ) : (
<span>Save Settings</span>
                  )}
                </button>
                
                {savedMessage && (
                  <div className={`${styles.savedMessage} ${
                    savedMessage.includes('Error') ? styles.errorMessage : styles.successMessage
                  }`}>
                    {savedMessage}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className={styles.settingsSection}>
              <div className={styles.aboutInfo}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/assets/SaRCLogo.png" 
                    alt="Satellite Research Centre Logo" 
                    className={styles.logo}
                  />
                </div>
                
                <h3 className={styles.appTitle}>SATS <br></br><br></br> Satellite Automated Testing System</h3>
                <div className={styles.versionInfo}>
                  <div className={styles.versionRow}>
                    <span className={styles.versionLabel}>Version:</span>
                    <span className={styles.versionValue}>{appVersion}</span>
                  </div>
                  <div className={styles.versionRow}>
                    <span className={styles.versionLabel}>Build Date:</span>
                    <span className={styles.versionValue}>{buildDate}</span>
                  </div>
                  <div className={styles.versionRow}>
                    <span className={styles.versionLabel}>Environment:</span>
                    <span className={styles.versionValue}>{process.env.NODE_ENV}</span>
                  </div>
                </div>
                
<div className={styles.aboutText}>
  <p>
    This application provides a comprehensive interface for automated testing
    of satellite components and systems. It facilitates test management, execution,
    and result analysis.
  </p>
  
  <h4>Main Features:</h4>
  <ul>
    <li><strong>Profile Management:</strong> Create, edit, delete customizable test profiles</li>
    <li><strong>11 Subsystem Tests:</strong> Automated testing for OBC-1/2, S-Band, UHF, ADCS, GPS, HEPS, etc.</li>
    <li><strong>Drag-and-Drop Test Selection:</strong> Visual component selection for customized testing</li>
    <li><strong>3D Model Viewer:</strong> Interactive visualization of uploaded .glb satellite models</li>
    <li><strong>Test History & Reports:</strong> Parameter tracking, visualization, and auto-generated .docx/.pdf reports</li>
    <li><strong>MCC Integration:</strong> Real hardware connection with simulation fallback</li>
    <li><strong>Multi-Window Interface:</strong> Draggable, resizable floating windows with taskbar</li>
    <li><strong>Theming & Customization:</strong> Light/dark mode, fonts, and background settings</li>
  </ul>
  
  <p>
    <em>For complete documentation and setup instructions, refer to the SATS README.md file.</em>
  </p>

 <br></br>
 
 <h4>Credits</h4>
<p>SATS - 🐧Joe Goh, Lew Jia Min</p>
<p><em>Migrated from & Built upon:</em></p>
<p>VLEO Checkout - Ng Siew Juan, Lew Jia Min, William Xu KaiChao  </p>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Draggable>,
    portalElement
  )}
  </>
  );
}

export default SettingsWindow;