// themeInitializer.js
// This script should be included in your main layout to initialize themes from the database

// API URL from environment or default
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

/**
 * Initialize theme backgrounds from the database settings
 * This should be called when the application starts
 */
export async function initializeThemeBackgrounds() {
  try {
    // Fetch settings from the backend
    const response = await fetch(`${API_URL}/settings`);
    if (!response.ok) {
      console.error('Failed to fetch theme settings:', response.status);
      return;
    }
    
    const settings = await response.json();
    console.log('Loaded theme settings:', settings);
    
    // Get current theme mode
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Apply background settings based on theme
    applyBackgroundSettings(settings, isDarkMode);
    
    // Apply font settings if available
    if (settings.font) {
      document.documentElement.style.fontFamily = settings.font;
    }
    
    // Set up observer for theme changes to update background
    observeThemeChanges(settings);
    
  } catch (error) {
    console.error('Error initializing theme backgrounds:', error);
  }
}

/**
 * Apply background settings based on current theme mode
 */
function applyBackgroundSettings(settings, isDarkMode) {
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
 */
function observeThemeChanges(settings) {
  // Create observer to watch for theme class changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        // Check if dark mode was toggled
        const isDarkMode = document.documentElement.classList.contains('dark');
        console.log(`Theme changed to ${isDarkMode ? 'dark' : 'light'} mode`);
        
        // Apply background based on new theme
        applyBackgroundSettings(settings, isDarkMode);
      }
    });
  });
  
  // Start observing theme changes
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
}

// Call this function when the DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeBackgrounds);
  } else {
    initializeThemeBackgrounds();
  }
}