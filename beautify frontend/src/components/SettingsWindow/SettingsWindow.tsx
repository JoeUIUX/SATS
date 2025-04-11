import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import styles from "./SettingsWindow.module.css";
import { WindowName } from "@/types/types";

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

  // Save settings to the backend
  const saveSettings = async () => {
    setIsLoading(true);
    try {
      const fontValue = SUPPORTED_FONTS.find(f => f.name === selectedFont)?.value || SUPPORTED_FONTS[0].value;
      
      const response = await fetch(`${backendUrl}/settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          font: fontValue,
          background: selectedBackground,        // Dark mode background
          background_light: selectedLightBackground, // Light mode background
          backgroundColor: bgColor,              // Dark mode solid color
          backgroundColorLight: lightBgColor     // Light mode solid color
        }),
      });
      
      if (response.ok) {
        setIsSaved(true);
        setSavedMessage("Settings saved successfully!");
        
        // Apply font to document
        document.documentElement.style.fontFamily = fontValue;
        
        // Apply background to document body based on current theme
        applyBackground();
        
        // After 2 seconds, reset the saved state
        setTimeout(() => {
          setIsSaved(false);
        }, 2000);
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
  const applyBackground = () => {
    // Determine which background to apply based on current theme mode
    const bgPath = isDarkMode ? selectedBackground : selectedLightBackground;
    const bgColorValue = isDarkMode ? bgColor : lightBgColor;
    
    // Apply background to document body
    if (bgPath === "none") {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = bgColorValue;
    } else {
      document.body.style.backgroundImage = `url(${bgPath})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    
    // Also update the CSS variables in :root
    // This ensures the background persists after page refresh
    try {
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

  return createPortal(
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
                  <select
                    value={selectedFont}
                    onChange={(e) => setSelectedFont(e.target.value)}
                    className={styles.select}
                  >
                    {SUPPORTED_FONTS.map((font) => (
                      <option key={font.name} value={font.name}>
                        {font.name}
                      </option>
                    ))}
                  </select>
                  
                  <div className={styles.fontPreview} style={{ 
                    fontFamily: SUPPORTED_FONTS.find(f => f.name === selectedFont)?.value 
                  }}>
                    <p>The quick brown fox jumps over the lazy dog.</p>
                    <p>0123456789</p>
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
                
                <h3 className={styles.appTitle}>Satellite Automated Testing System</h3>
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
  <li>Checkout Test - Subsystems and Components</li>
  <li>Real-time hardware integration with simulation fallback capability</li>
  <li>Interactive Satellite 3D model Viewer</li>
  <li>Comprehensive test result logging and report generation</li>
  <li>Customisability features</li>
</ul>
                  

<h4>NTU Professional Internship Project:</h4>
<p><em>Building Satellite - Development and implementation of Automated Testing System for Satellite</em></p>
<p>Developed from January to May 2025</p>

<p className="mt-4 text-sm">
  <span className="opacity-60">For more information: </span>
  <a href="https://github.com/JoeUIUX" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/JoeUIUX</a>
</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Draggable>,
    portalElement
  );
};

export default SettingsWindow;