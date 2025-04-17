module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/utils/themeEvents.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/themeEvents.ts
// Custom event system for theme changes
/**
 * Event types for theme changes
 */ __turbopack_context__.s({
    "THEME_EVENTS": (()=>THEME_EVENTS),
    "dispatchSettingsUpdatedEvent": (()=>dispatchSettingsUpdatedEvent),
    "dispatchThemeChangedEvent": (()=>dispatchThemeChangedEvent),
    "onSettingsUpdated": (()=>onSettingsUpdated),
    "onThemeChanged": (()=>onThemeChanged)
});
const THEME_EVENTS = {
    THEME_CHANGED: 'theme-changed',
    SETTINGS_UPDATED: 'theme-settings-updated'
};
function dispatchThemeChangedEvent(isDarkMode) {
    const event = new CustomEvent(THEME_EVENTS.THEME_CHANGED, {
        detail: {
            isDarkMode
        }
    });
    window.dispatchEvent(event);
    console.log(`Theme changed event dispatched: isDarkMode=${isDarkMode}`);
}
function dispatchSettingsUpdatedEvent(settings) {
    const event = new CustomEvent(THEME_EVENTS.SETTINGS_UPDATED, {
        detail: {
            settings
        }
    });
    window.dispatchEvent(event);
    console.log('Theme settings updated event dispatched');
}
function onThemeChanged(callback) {
    const handler = (event)=>{
        const customEvent = event;
        callback(customEvent.detail.isDarkMode);
    };
    window.addEventListener(THEME_EVENTS.THEME_CHANGED, handler);
    // Return a cleanup function
    return ()=>{
        window.removeEventListener(THEME_EVENTS.THEME_CHANGED, handler);
    };
}
function onSettingsUpdated(callback) {
    const handler = (event)=>{
        const customEvent = event;
        callback(customEvent.detail.settings);
    };
    window.addEventListener(THEME_EVENTS.SETTINGS_UPDATED, handler);
    // Return a cleanup function
    return ()=>{
        window.removeEventListener(THEME_EVENTS.SETTINGS_UPDATED, handler);
    };
}
}}),
"[project]/src/utils/themeInitializer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// themeInitializer.js - with improved theme switching and event dispatching
// This script should be included in your main layout to initialize themes from the database
// Import theme event functions
__turbopack_context__.s({
    "applyBackgroundSettings": (()=>applyBackgroundSettings),
    "fetchThemeSettings": (()=>fetchThemeSettings),
    "initializeThemeBackgrounds": (()=>initializeThemeBackgrounds),
    "refreshThemeSettings": (()=>refreshThemeSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/themeEvents.ts [app-ssr] (ecmascript)");
;
// API URL from environment or default
const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
// Cache for theme settings to avoid unnecessary fetches
let cachedSettings = null;
let lastFetchTime = 0;
const CACHE_TTL = 2000; // Cache time-to-live in milliseconds (2 seconds)
async function initializeThemeBackgrounds() {
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSettingsUpdatedEvent"])(settings);
    } catch (error) {
        console.error('Error initializing theme backgrounds:', error);
    }
}
async function fetchThemeSettings(forceRefresh = false) {
    const currentTime = Date.now();
    // Use cached settings if they exist and aren't expired, unless force refresh is requested
    if (!forceRefresh && cachedSettings && currentTime - lastFetchTime < CACHE_TTL) {
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
function applyBackgroundSettings(settings, isDarkMode) {
    // Determine which background to use based on current theme
    const backgroundPath = isDarkMode ? settings.background || "/assets/curve_background.png" : settings.background_light || "/assets/lightcurve_background.png";
    // Determine background color for solid color mode
    const backgroundColor = isDarkMode ? settings.backgroundColor || "#000000" : settings.backgroundColorLight || "#ffffff";
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
 */ function observeThemeChanges() {
    // Create observer to watch for theme class changes
    const observer = new MutationObserver(async (mutations)=>{
        for (const mutation of mutations){
            if (mutation.attributeName === 'class') {
                // Check if dark mode was toggled
                const isDarkMode = document.documentElement.classList.contains('dark');
                console.log(`Theme changed to ${isDarkMode ? 'dark' : 'light'} mode - fetching latest settings`);
                // Dispatch theme changed event
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchThemeChangedEvent"])(isDarkMode);
                // Fetch fresh settings from the server and apply them
                try {
                    const settings = await fetchThemeSettings(true); // Force refresh when theme changes
                    applyBackgroundSettings(settings, isDarkMode);
                    // Dispatch event that settings were updated
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSettingsUpdatedEvent"])(settings);
                } catch (error) {
                    console.error('Error applying theme change:', error);
                }
            }
        }
    });
    // Start observing theme changes
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
            'class'
        ]
    });
}
async function refreshThemeSettings() {
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSettingsUpdatedEvent"])(settings);
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
}}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/themeInitializer.js [app-ssr] (ecmascript)");
/* LIGHT DARK MODE SLIDER TOGGLER - START */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function RootLayout({ children }) {
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeThemeBackgrounds"])();
        // Load and apply previously saved font from localStorage
        const loadSavedFont = async ()=>{
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
    const applyFontToDocument = (fontFamily)=>{
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
        const loadFontFile = (fontName)=>{
            const fontUrls = {
                'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
                'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
                'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
                'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
            };
            // Find the font name from the value
            const fontMatch = Object.entries(fontUrls).find(([_, value])=>fontFamily.includes(value.split(',')[0]));
            if (fontMatch) {
                const [matchedFontName] = fontMatch;
                // Type guard to ensure matchedFontName is a valid key
                if (matchedFontName in fontUrls) {
                    const url = fontUrls[matchedFontName];
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
    const loadFonts = ()=>{
        const fontUrls = {
            'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
            'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
            'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
            'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
        };
        // Add each font link to the document head
        Object.entries(fontUrls).forEach(([name, url])=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Your existing code...
        // Load fonts
        loadFonts();
    }, []);
    const toggleDarkMode = async ()=>{
        setDarkMode((prevMode)=>{
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
            setTimeout(async ()=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["refreshThemeSettings"])();
            }, 50);
            return newMode;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: darkMode ? "dark" : "light",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toggleContainer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "switch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: darkMode,
                                onChange: toggleDarkMode
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "slider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faMoon"],
                                        className: "icon moon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faSun"],
                                        className: "icon sun"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 201,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
} /* LIGHT DARK MODE SLIDER TOGGLER - END */ 
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__907d1e69._.js.map