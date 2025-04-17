// themeInitializer.js - with improved theme switching and event dispatching
// This script should be included in your main layout to initialize themes from the database

// Import theme event functions
import { dispatchSettingsUpdatedEvent, dispatchThemeChangedEvent } from './themeEvents';

// API URL from environment or default
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

// Cache for theme settings to avoid unnecessary fetches
let cachedSettings = null;
let lastFetchTime = 0;
const CACHE_TTL = 2000; // Cache time-to-live in milliseconds (2 seconds)

/**
 * Initialize theme backgrounds from the database settings
 * This should be called when the application starts
 */
export async function initializeThemeBackgrounds() {
  try {
    // Fetch settings from the backend
    const settings = await fetchThemeSettings();
    console.log('Loaded theme settings:', settings);
    
    // Get current theme mode
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Apply background settings based on theme
    applyBackgroundSettings(settings, isDarkMode);
    
    // Apply font settings if available
    if (settings.font) {
      applyFontSettings(settings.font);
    }
    
    // Set up observer for theme changes to update background
    observeThemeChanges(settings);
    
    // Dispatch event that settings were initialized
    dispatchSettingsUpdatedEvent(settings);
    
  } catch (error) {
    console.error('Error initializing theme backgrounds:', error);
  }
}

/**
 * Fetch theme settings from the server with caching
 */
export async function fetchThemeSettings(forceRefresh = false) {
  const currentTime = Date.now();
  
  // Use cached settings if they exist and aren't expired, unless force refresh is requested
  if (!forceRefresh && cachedSettings && (currentTime - lastFetchTime < CACHE_TTL)) {
    console.log('Using cached theme settings');
    return cachedSettings;
  }
  
  try {
    console.log('Fetching fresh theme settings from server');
    const response = await fetch(`${API_URL}/settings`);
    if (!response.ok) {
      throw new Error(`Failed to fetch theme settings: ${response.status}`);
    }
    
    const settings = await response.json();
    
    // Update the cache
    cachedSettings = settings;
    lastFetchTime = currentTime;
    
    return settings;
  } catch (error) {
    console.error('Error fetching theme settings:', error);
    
    // If we have cached settings, use them as fallback
    if (cachedSettings) {
      console.warn('Using cached settings as fallback after fetch error');
      return cachedSettings;
    }
    
    // Otherwise, return default settings
    return {
      background: "/assets/curve_background.png",
      background_light: "/assets/lightcurve_background.png",
      backgroundColor: "#000000",
      backgroundColorLight: "#ffffff",
      font: "Arial, sans-serif"
    };
  }
}

// function to handle font application
function applyFontSettings(fontFamily) {
  if (!fontFamily) return;
  
  console.log(`Applying font family: ${fontFamily}`);
  
  // Set CSS custom property for font
  document.documentElement.style.setProperty('--app-font-family', fontFamily);
  
  // Create or update the font style element
  let fontStyle = document.getElementById('app-font-style');
  if (!fontStyle) {
    fontStyle = document.createElement('style');
    fontStyle.id = 'app-font-style';
    document.head.appendChild(fontStyle);
  }
  
  // Apply the font to all relevant elements with higher specificity
  fontStyle.textContent = `
    html body, 
    html button, 
    html input, 
    html select, 
    html textarea,
    html .popup, 
    html .welcomeWindow,
    html .mainScreen,
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
}

/**
 * Apply background settings based on current theme mode
 * @param {Object} settings - The settings object from the server
 * @param {boolean} isDarkMode - Whether dark mode is active
 */
export function applyBackgroundSettings(settings, isDarkMode) {
  // Determine which background to use based on current theme
  const backgroundPath = isDarkMode 
    ? settings.background || "/assets/curve_background.png"
    : settings.background_light || "/assets/lightcurve_background.png";
    
  // Determine background color for solid color mode
  const backgroundColor = isDarkMode
    ? settings.backgroundColor || "#000000"
    : settings.backgroundColorLight || "#ffffff";
  
  // Apply background to body
  if (backgroundPath === "none") {
    // Solid color mode
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = backgroundColor;
    
    // Also update CSS variables
    if (isDarkMode) {
      document.documentElement.style.setProperty('--page-bg-image', 'none');
      document.documentElement.style.setProperty('--page-bg-color', backgroundColor);
    } else {
      document.documentElement.style.setProperty('--page-bg-image', 'none');
      document.documentElement.style.setProperty('--page-bg-color', backgroundColor);
    }
  } else {
    // Image background mode
    document.body.style.backgroundImage = `url(${backgroundPath})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    
    // Also update CSS variables
    if (isDarkMode) {
      document.documentElement.style.setProperty('--page-bg-image', `url(${backgroundPath})`);
    } else {
      document.documentElement.style.setProperty('--page-bg-image', `url(${backgroundPath})`);
    }
  }
  
  console.log(`Applied ${isDarkMode ? 'dark' : 'light'} mode background: ${backgroundPath === "none" ? backgroundColor : backgroundPath}`);
}

/**
 * Observe theme changes to update background accordingly
 * This will fetch fresh settings every time the theme changes
 */
function observeThemeChanges() {
  // Create observer to watch for theme class changes
  const observer = new MutationObserver(async mutations => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        // Check if dark mode was toggled
        const isDarkMode = document.documentElement.classList.contains('dark');
        console.log(`Theme changed to ${isDarkMode ? 'dark' : 'light'} mode - fetching latest settings`);
        
        // Dispatch theme changed event
        dispatchThemeChangedEvent(isDarkMode);
        
        // Fetch fresh settings from the server and apply them
        try {
          const settings = await fetchThemeSettings(true); // Force refresh when theme changes
          applyBackgroundSettings(settings, isDarkMode);
          
          // Dispatch event that settings were updated
          dispatchSettingsUpdatedEvent(settings);
        } catch (error) {
          console.error('Error applying theme change:', error);
        }
      }
    }
  });
  
  // Start observing theme changes
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
}

// Public method to immediately refresh and apply theme settings
export async function refreshThemeSettings() {
  try {
    // Force a refresh of settings from the server
    const settings = await fetchThemeSettings(true);
    
    // Apply based on current theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    applyBackgroundSettings(settings, isDarkMode);
    
    if (settings.font) {
      applyFontSettings(settings.font);
    }
    
    // Dispatch events about the update
    dispatchSettingsUpdatedEvent(settings);
    
    return true;
  } catch (error) {
    console.error('Error refreshing theme settings:', error);
    return false;
  }
}

// Call this function when the DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeBackgrounds);
  } else {
    initializeThemeBackgrounds();
  }
}