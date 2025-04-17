(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1b051285._.js", {

"[project]/src/utils/themeInitializer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/utils/themeInitializer.js'

Expected a semicolon`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
            // Load and apply previously saved font from localStorage
            const loadSavedFont = {
                "RootLayout.useEffect.loadSavedFont": async ()=>{
                    // Try to get font setting from backend
                    try {
                        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"}/settings`);
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
                }
            }["RootLayout.useEffect.loadSavedFont"];
            loadSavedFont();
        }
    }["RootLayout.useEffect"], []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            // Your existing code...
            // Load fonts
            loadFonts();
        }
    }["RootLayout.useEffect"], []);
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$themeInitializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshThemeSettings"])();
            }, 50);
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
                                lineNumber: 204,
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
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faSun"],
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
_s(RootLayout, "jxWvogfm97D9w3+yMzVp/epPJCw=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1b051285._.js.map