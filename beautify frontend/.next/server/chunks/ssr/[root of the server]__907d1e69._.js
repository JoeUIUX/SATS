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
// themeInitializer.js - improved theme switching and event dispatching with complete SSR protection
// script to initialize themes from the database
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
    // ENHANCED SSR CHECK - Don't run during SSR
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('Skipping theme initialization during SSR');
        return;
    }
    "TURBOPACK unreachable";
}
async function fetchThemeSettings(forceRefresh = false) {
    // SSR CHECK
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('Skipping fetch during SSR');
        return getDefaultSettings();
    }
    "TURBOPACK unreachable";
    const currentTime = undefined;
}
// Helper function to get default settings
function getDefaultSettings() {
    return {
        background: "/assets/curve_background.png",
        background_light: "/assets/lightcurve_background.png",
        backgroundColor: "#000000",
        backgroundColorLight: "#ffffff",
        font: "Arial, sans-serif"
    };
}
// function to handle font application
function applyFontSettings(fontFamily) {
    // SSR CHECK
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    "TURBOPACK unreachable";
    // Create or update the font style element
    let fontStyle;
}
function applyBackgroundSettings(settings, isDarkMode) {
    // SSR CHECK
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    "TURBOPACK unreachable";
    // Determine which background to use based on current theme
    const backgroundPath = undefined;
    // Determine background color for solid color mode
    const backgroundColor = undefined;
}
/**
 * Observe theme changes to update background accordingly
 * This will fetch fresh settings every time the theme changes
 */ function observeThemeChanges() {
    // SSR CHECK
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    "TURBOPACK unreachable";
    // Create observer to watch for theme class changes
    const observer = undefined;
}
async function refreshThemeSettings() {
    // SSR CHECK
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('Skipping refresh during SSR');
        return false;
    }
    "TURBOPACK unreachable";
} // REMOVED: Automatic execution at module load
 // The initialization is called manually from layout.tsx after mounting, to prevent hydration errors when loading SATS at localhost:3000
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
/* LIGHT DARK MODE SLIDER TOGGLER */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-ssr] (ecmascript)");
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
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // First useEffect: Set mounted state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Second useEffect: Initialize theme after mounting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const initializeTheme = async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeThemeBackgrounds"])();
                await loadSavedFont();
                loadFonts();
            } catch (error) {
                console.error("Error initializing theme:", error);
            }
        };
        // Small delay to ensure DOM is ready
        setTimeout(initializeTheme, 100);
    }, [
        mounted
    ]);
    const loadSavedFont = async ()=>{
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
    const applyFontToDocument = (fontFamily)=>{
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
        const loadFontFile = (fontName)=>{
            const fontUrls = {
                'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
                'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
                'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
                'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
            };
            const fontMatch = Object.entries(fontUrls).find(([_, value])=>fontFamily.includes(value.split(',')[0]));
            if (fontMatch) {
                const [matchedFontName] = fontMatch;
                if (matchedFontName in fontUrls) {
                    const url = fontUrls[matchedFontName];
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
    const loadFonts = ()=>{
        if (!mounted) return;
        const fontUrls = {
            'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
            'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
            'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
            'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
        };
        Object.entries(fontUrls).forEach(([name, url])=>{
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
    const toggleDarkMode = async ()=>{
        if (!mounted) return;
        setDarkMode((prevMode)=>{
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
            setTimeout(async ()=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["refreshThemeSettings"])();
            }, 50);
            return newMode;
        });
    };
    // Return basic HTML structure during SSR
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "en",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    suppressHydrationWarning: true,
                    style: {
                        visibility: 'hidden'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this);
    }
    // Return full layout after mounting
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
                                lineNumber: 220,
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
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faSun"],
                                        className: "icon sun"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__907d1e69._.js.map