(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1b051285._.js", {

"[project]/src/utils/themeInitializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// themeInitializer.js
// This script should be included in your main layout to initialize themes from the database
// API URL from environment or default
__turbopack_context__.s({
    "initializeThemeBackgrounds": (()=>initializeThemeBackgrounds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
async function initializeThemeBackgrounds() {
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
 */ function applyBackgroundSettings(settings, isDarkMode) {
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
 */ function observeThemeChanges(settings) {
    // Create observer to watch for theme class changes
    const observer = new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
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
        attributeFilter: [
            'class'
        ]
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/themeInitializer.js [app-client] (ecmascript)");
/* LIGHT DARK MODE SLIDER TOGGLER - START */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function RootLayout({ children }) {
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeThemeBackgrounds"])();
        }
    }["RootLayout.useEffect"], []);
    const toggleDarkMode = ()=>{
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
            return newMode;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: darkMode ? "dark" : "light",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toggleContainer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "switch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: darkMode,
                                onChange: toggleDarkMode
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "slider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMoon"],
                                        className: "icon moon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faSun"],
                                        className: "icon sun"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
} /* LIGHT DARK MODE SLIDER TOGGLER - END */ 
_s(RootLayout, "n2P3coCVngntCnyS/Nqj+dgR7+U=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1b051285._.js.map