(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_SettingsWindow_da0e8920._.js", {

"[project]/src/components/SettingsWindow/SettingsWindow.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "aboutInfo": "SettingsWindow-module__hn1lxq__aboutInfo",
  "aboutText": "SettingsWindow-module__hn1lxq__aboutText",
  "activeTab": "SettingsWindow-module__hn1lxq__activeTab",
  "appTitle": "SettingsWindow-module__hn1lxq__appTitle",
  "backgroundGrid": "SettingsWindow-module__hn1lxq__backgroundGrid",
  "backgroundName": "SettingsWindow-module__hn1lxq__backgroundName",
  "backgroundOption": "SettingsWindow-module__hn1lxq__backgroundOption",
  "backgroundPreview": "SettingsWindow-module__hn1lxq__backgroundPreview",
  "backgroundSelector": "SettingsWindow-module__hn1lxq__backgroundSelector",
  "buttonRow": "SettingsWindow-module__hn1lxq__buttonRow",
  "closeButton": "SettingsWindow-module__hn1lxq__closeButton",
  "colorInput": "SettingsWindow-module__hn1lxq__colorInput",
  "colorInputContainer": "SettingsWindow-module__hn1lxq__colorInputContainer",
  "colorPicker": "SettingsWindow-module__hn1lxq__colorPicker",
  "colorText": "SettingsWindow-module__hn1lxq__colorText",
  "contentArea": "SettingsWindow-module__hn1lxq__contentArea",
  "customSelect": "SettingsWindow-module__hn1lxq__customSelect",
  "customSelectButton": "SettingsWindow-module__hn1lxq__customSelectButton",
  "customSelectOption": "SettingsWindow-module__hn1lxq__customSelectOption",
  "customSelectOptions": "SettingsWindow-module__hn1lxq__customSelectOptions",
  "drag-handle": "SettingsWindow-module__hn1lxq__drag-handle",
  "errorMessage": "SettingsWindow-module__hn1lxq__errorMessage",
  "fadeOut": "SettingsWindow-module__hn1lxq__fadeOut",
  "fileInput": "SettingsWindow-module__hn1lxq__fileInput",
  "fontPreview": "SettingsWindow-module__hn1lxq__fontPreview",
  "fontSelector": "SettingsWindow-module__hn1lxq__fontSelector",
  "header": "SettingsWindow-module__hn1lxq__header",
  "loadingSpinner": "SettingsWindow-module__hn1lxq__loadingSpinner",
  "logo": "SettingsWindow-module__hn1lxq__logo",
  "logoContainer": "SettingsWindow-module__hn1lxq__logoContainer",
  "saveButton": "SettingsWindow-module__hn1lxq__saveButton",
  "savedMessage": "SettingsWindow-module__hn1lxq__savedMessage",
  "sectionTitle": "SettingsWindow-module__hn1lxq__sectionTitle",
  "select": "SettingsWindow-module__hn1lxq__select",
  "selectedBackground": "SettingsWindow-module__hn1lxq__selectedBackground",
  "settingGroup": "SettingsWindow-module__hn1lxq__settingGroup",
  "settingsSection": "SettingsWindow-module__hn1lxq__settingsSection",
  "settingsWindow": "SettingsWindow-module__hn1lxq__settingsWindow",
  "smallNote": "SettingsWindow-module__hn1lxq__smallNote",
  "solidColorPreview": "SettingsWindow-module__hn1lxq__solidColorPreview",
  "spin": "SettingsWindow-module__hn1lxq__spin",
  "successMessage": "SettingsWindow-module__hn1lxq__successMessage",
  "tabButton": "SettingsWindow-module__hn1lxq__tabButton",
  "tabIcon": "SettingsWindow-module__hn1lxq__tabIcon",
  "tabsContainer": "SettingsWindow-module__hn1lxq__tabsContainer",
  "titleIcon": "SettingsWindow-module__hn1lxq__titleIcon",
  "uploadBackground": "SettingsWindow-module__hn1lxq__uploadBackground",
  "versionInfo": "SettingsWindow-module__hn1lxq__versionInfo",
  "versionLabel": "SettingsWindow-module__hn1lxq__versionLabel",
  "versionRow": "SettingsWindow-module__hn1lxq__versionRow",
  "versionValue": "SettingsWindow-module__hn1lxq__versionValue",
  "windowTitle": "SettingsWindow-module__hn1lxq__windowTitle",
});
}}),
"[project]/src/components/SettingsWindow/SettingsWindow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SettingsWindow/SettingsWindow.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FontLoader$2f$FontLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FontLoader/FontLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Define supported fonts for the application
const SUPPORTED_FONTS = [
    {
        name: "System Default",
        value: "Arial, sans-serif"
    },
    {
        name: "Roboto",
        value: "Roboto, sans-serif"
    },
    {
        name: "Open Sans",
        value: "Open Sans, sans-serif"
    },
    {
        name: "Montserrat",
        value: "Montserrat, sans-serif"
    },
    {
        name: "Source Code Pro",
        value: "Source Code Pro, monospace"
    }
];
const SettingsWindow = ({ zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter })=>{
    _s();
    // State for settings
    const [selectedFont, setSelectedFont] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("System Default");
    const [selectedBackground, setSelectedBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/assets/curve_background.png");
    const [selectedLightBackground, setSelectedLightBackground] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/assets/lightcurve_background.png");
    const [defaultBackgrounds, setDefaultBackgrounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customBackgrounds, setCustomBackgrounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("appearance");
    const [savedMessage, setSavedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bgColor, setBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#000000");
    const [lightBgColor, setLightBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [currentViewMode, setCurrentViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [isSelectOpen, setIsSelectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // App version info
    const appVersion = "1.0.0";
    const buildDate = "May 31, 2025";
    const backendUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    // Refs
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Dragging functionality
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const savedPosition = sessionStorage.getItem('settingsWindowPosition');
    const defaultPosition = savedPosition ? JSON.parse(savedPosition) : {
        x: (window.innerWidth - 600) / 2,
        y: (window.innerHeight - 500) / 2
    };
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultPosition);
    // Create portal element once on mount
    const [portalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SettingsWindow.useState": ()=>{
            const existingPortal = document.getElementById("settingsWindow-root");
            if (existingPortal) {
                return existingPortal;
            }
            const element = document.createElement("div");
            element.id = "settingsWindow-root";
            document.body.appendChild(element);
            return element;
        }
    }["SettingsWindow.useState"]);
    // 1. Create a ref for the font preview element
    const fontPreviewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 2. Add a function to directly apply the font to the preview element
    const applyFontToPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SettingsWindow.useCallback[applyFontToPreview]": (fontFamily)=>{
            if (fontPreviewRef.current) {
                fontPreviewRef.current.style.fontFamily = fontFamily;
                // Force a repaint by briefly modifying another style property
                fontPreviewRef.current.style.opacity = '0.99';
                setTimeout({
                    "SettingsWindow.useCallback[applyFontToPreview]": ()=>{
                        if (fontPreviewRef.current) {
                            fontPreviewRef.current.style.opacity = '1';
                        }
                    }
                }["SettingsWindow.useCallback[applyFontToPreview]"], 10);
            }
        }
    }["SettingsWindow.useCallback[applyFontToPreview]"], []);
    // 3. Add effect to apply the font whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsWindow.useEffect": ()=>{
            const fontValue = SUPPORTED_FONTS.find({
                "SettingsWindow.useEffect": (f)=>f.name === selectedFont
            }["SettingsWindow.useEffect"])?.value || 'Arial, sans-serif';
            applyFontToPreview(fontValue);
        }
    }["SettingsWindow.useEffect"], [
        selectedFont,
        applyFontToPreview
    ]);
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsWindow.useEffect": ()=>{
            const checkDarkMode = {
                "SettingsWindow.useEffect.checkDarkMode": ()=>{
                    const newIsDarkMode = document.documentElement.classList.contains("dark");
                    setIsDarkMode(newIsDarkMode);
                    // Update the current view mode based on document theme
                    setCurrentViewMode(newIsDarkMode ? 'dark' : 'light');
                }
            }["SettingsWindow.useEffect.checkDarkMode"];
            // Initial check
            checkDarkMode();
            // Watch for theme changes
            const observer = new MutationObserver({
                "SettingsWindow.useEffect": ()=>{
                    checkDarkMode();
                }
            }["SettingsWindow.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "SettingsWindow.useEffect": ()=>observer.disconnect()
            })["SettingsWindow.useEffect"];
        }
    }["SettingsWindow.useEffect"], []);
    // Load settings and custom backgrounds from backend on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsWindow.useEffect": ()=>{
            loadSettings();
            loadBackgrounds();
        }
    }["SettingsWindow.useEffect"], []);
    // Save position to sessionStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsWindow.useEffect": ()=>{
            sessionStorage.setItem('settingsWindowPosition', JSON.stringify(position));
        }
    }["SettingsWindow.useEffect"], [
        position
    ]);
    // Handle any saved message display timeout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsWindow.useEffect": ()=>{
            if (savedMessage) {
                const timer = setTimeout({
                    "SettingsWindow.useEffect.timer": ()=>{
                        setSavedMessage(null);
                    }
                }["SettingsWindow.useEffect.timer"], 3000);
                return ({
                    "SettingsWindow.useEffect": ()=>clearTimeout(timer)
                })["SettingsWindow.useEffect"];
            }
        }
    }["SettingsWindow.useEffect"], [
        savedMessage
    ]);
    // Load backgrounds from the backend
    const loadBackgrounds = async ()=>{
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
    const loadSettings = async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch(`${backendUrl}/settings`);
            if (response.ok) {
                const data = await response.json();
                console.log("Loaded settings:", data);
                // Set font if available
                if (data.font) {
                    const fontName = SUPPORTED_FONTS.find((f)=>f.value === data.font)?.name || "System Default";
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
        } finally{
            setIsLoading(false);
        }
    };
    // Save settings to the backend, immediate font preview update
    const saveSettings = async ()=>{
        setIsLoading(true);
        try {
            const fontValue = SUPPORTED_FONTS.find((f)=>f.name === selectedFont)?.value || 'Arial, sans-serif';
            applyFontToPreview(fontValue);
            // Get the refreshThemeSettings function
            const { refreshThemeSettings } = await __turbopack_context__.r("[project]/src/utils/themeInitializer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const response = await fetch(`${backendUrl}/settings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    font: fontValue,
                    background: selectedBackground,
                    background_light: selectedLightBackground,
                    backgroundColor: bgColor,
                    backgroundColorLight: lightBgColor
                })
            });
            if (response.ok) {
                setIsSaved(true);
                setSavedMessage("Settings saved successfully!");
                // Apply font to document - COMPREHENSIVE APPROACH
                document.documentElement.style.setProperty('--app-font-family', fontValue);
                // Force the font preview to update by re-rendering it
                // This is done by triggering a state change
                setSelectedFont((prevFont)=>{
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
                setTimeout(()=>{
                    setIsSaved(false);
                }, 2000);
                // Also directly update sidebar elements for immediate effect
                const sidebarItems = document.querySelectorAll('.sidebar, .menuItem, .profilesButton, .profileSidebarItem');
                sidebarItems.forEach((el)=>{
                    el.style.fontFamily = fontValue;
                });
            } else {
                setSavedMessage("Error saving settings");
            }
        } catch (error) {
            console.error("Error saving settings:", error);
            setSavedMessage("Error: Could not connect to server");
        } finally{
            setIsLoading(false);
        }
    };
    // Apply background to the page
    const applyBackground = async ()=>{
        // Import the refreshThemeSettings function dynamically
        const { refreshThemeSettings, applyBackgroundSettings } = await __turbopack_context__.r("[project]/src/utils/themeInitializer.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
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
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    path: bgPath,
                    isDarkMode: isDarkMode
                })
            }).catch((error)=>{
                console.error("Error notifying backend about background change:", error);
            });
        } catch (error) {
            console.error("Error applying background:", error);
        }
    };
    // Handle background image upload
    const handleBackgroundUpload = async (e)=>{
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
                setCustomBackgrounds((prev)=>[
                        ...prev,
                        {
                            name: file.name,
                            path: data.path
                        }
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
        } finally{
            setIsLoading(false);
            // Clear the file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };
    // Handle the window click event
    const handleWindowClick = ()=>{
        console.log("🖱️ Clicked SettingsWindow, bringing to front");
        onMouseDown();
    };
    // Get the effective z-index from the windowZIndexes or fall back to the provided zIndex
    const effectiveZIndex = windowZIndexes["SettingsWindow"] || zIndex;
    // Function to toggle view mode (Dark/Light) during setting selection
    const toggleViewMode = ()=>{
        setCurrentViewMode((prev)=>prev === 'dark' ? 'light' : 'dark');
    };
    // Get the current background and color based on view mode (not based on actual theme)
    const getCurrentBackground = ()=>{
        return currentViewMode === 'dark' ? selectedBackground : selectedLightBackground;
    };
    const getCurrentBgColor = ()=>{
        return currentViewMode === 'dark' ? bgColor : lightBgColor;
    };
    // Update the appropriate background setting based on current view mode
    const handleBackgroundSelect = (path)=>{
        if (currentViewMode === 'dark') {
            setSelectedBackground(path);
        } else {
            setSelectedLightBackground(path);
        }
    };
    // Update the appropriate background color based on current view mode
    const handleBgColorChange = (color)=>{
        if (currentViewMode === 'dark') {
            setBgColor(color);
        } else {
            setLightBgColor(color);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsWindow.useEffect": ()=>{
            const handleClickOutside = {
                "SettingsWindow.useEffect.handleClickOutside": (event)=>{
                    if (isSelectOpen && document.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelect}`) && !document.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelect}`).contains(event.target)) {
                        setIsSelectOpen(false);
                    }
                }
            }["SettingsWindow.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SettingsWindow.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["SettingsWindow.useEffect"];
        }
    }["SettingsWindow.useEffect"], [
        isSelectOpen,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FontLoader$2f$FontLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fontFamily: selectedFont
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                nodeRef: nodeRef,
                handle: ".drag-handle",
                position: position,
                onStop: (e, data)=>{
                    console.log(`📍 SettingsWindow moved to: x=${data.x}, y=${data.y}`);
                    setPosition({
                        x: data.x,
                        y: data.y
                    });
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: nodeRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsWindow,
                    style: {
                        position: "fixed",
                        zIndex: effectiveZIndex,
                        backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
                        color: isDarkMode ? "#fff" : "#000"
                    },
                    onClick: handleWindowClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} drag-handle`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].windowTitle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleIcon,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                            lineNumber: 537,
                                            columnNumber: 13
                                        }, this),
                                        "Settings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                    lineNumber: 536,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onClose();
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                    children: "✖"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                    lineNumber: 543,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                            lineNumber: 535,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabsContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${activeTab === 'appearance' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                    onClick: ()=>setActiveTab('appearance'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabIcon,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2a10 10 0 1 0 10 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 12h.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                            lineNumber: 560,
                                            columnNumber: 13
                                        }, this),
                                        "Appearance"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                    lineNumber: 556,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${activeTab === 'about' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                                    onClick: ()=>setActiveTab('about'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabIcon,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 16v-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 8h.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                            lineNumber: 571,
                                            columnNumber: 13
                                        }, this),
                                        "About"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                    lineNumber: 567,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                            lineNumber: 555,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentArea,
                            children: [
                                activeTab === 'appearance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "Background"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        marginBottom: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: [
                                                                "Editing ",
                                                                currentViewMode === 'dark' ? 'Dark' : 'Light',
                                                                " Mode Background"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: toggleViewMode,
                                                            style: {
                                                                padding: '8px 12px',
                                                                backgroundColor: '#00bcd4',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: currentViewMode === 'dark' ? '☀️' : '🌙'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 610,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Switch to ",
                                                                currentViewMode === 'dark' ? 'Light' : 'Dark',
                                                                " Mode Editor"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundSelector,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundGrid,
                                                            children: [
                                                                defaultBackgrounds.map((bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundOption} ${getCurrentBackground() === bg.path ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedBackground : ''}`,
                                                                        onClick: ()=>handleBackgroundSelect(bg.path),
                                                                        children: [
                                                                            bg.path === "none" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].solidColorPreview,
                                                                                style: {
                                                                                    backgroundColor: getCurrentBgColor()
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Solid Color"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                    lineNumber: 626,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                lineNumber: 625,
                                                                                columnNumber: 27
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundPreview,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: bg.path,
                                                                                    alt: bg.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                lineNumber: 629,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundName,
                                                                                children: bg.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                lineNumber: 633,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, bg.path, true, {
                                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 23
                                                                    }, this)),
                                                                customBackgrounds.map((bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundOption} ${getCurrentBackground() === bg.path ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedBackground : ''}`,
                                                                        onClick: ()=>handleBackgroundSelect(bg.path),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundPreview,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: bg.path,
                                                                                    alt: bg.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                    lineNumber: 645,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                lineNumber: 644,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundName,
                                                                                children: bg.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, bg.path, true, {
                                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadBackground,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    children: "Upload New Background"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    ref: fileInputRef,
                                                                    onChange: handleBackgroundUpload,
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInput
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].smallNote,
                                                                    children: "Recommended size: 1920x1080px or larger"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 19
                                                        }, this),
                                                        getCurrentBackground() === "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorPicker,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    children: "Background Color"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorInputContainer,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "color",
                                                                            value: getCurrentBgColor(),
                                                                            onChange: (e)=>handleBgColorChange(e.target.value),
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorInput
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: getCurrentBgColor(),
                                                                            onChange: (e)=>handleBgColorChange(e.target.value),
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorText
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                            lineNumber: 678,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "Font"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontSelector,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelect,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelectButton,
                                                                    onClick: ()=>setIsSelectOpen(!isSelectOpen),
                                                                    type: "button",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: selectedFont
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                            lineNumber: 700,
                                                                            columnNumber: 7
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: isSelectOpen ? '▲' : '▼'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                            lineNumber: 701,
                                                                            columnNumber: 7
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 695,
                                                                    columnNumber: 5
                                                                }, this),
                                                                isSelectOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelectOptions,
                                                                    children: SUPPORTED_FONTS.map((font)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customSelectOption,
                                                                            onClick: ()=>{
                                                                                setSelectedFont(font.name);
                                                                                setIsSelectOpen(false);
                                                                            },
                                                                            style: {
                                                                                fontFamily: font.value
                                                                            },
                                                                            children: font.name
                                                                        }, font.name, false, {
                                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                            lineNumber: 707,
                                                                            columnNumber: 11
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 705,
                                                                    columnNumber: 7
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fontPreview,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        marginBottom: '8px',
                                                                        fontSize: '14px',
                                                                        fontWeight: '500'
                                                                    },
                                                                    children: "Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 3
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                                    srcDoc: `
        <html>
        <head>
          <!-- Load all fonts directly in the iframe -->
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: ${SUPPORTED_FONTS.find((f)=>f.name === selectedFont)?.value || 'Arial, sans-serif'};
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
      `,
                                                                    style: {
                                                                        width: '100%',
                                                                        height: '100px',
                                                                        border: 'none',
                                                                        overflow: 'hidden',
                                                                        backgroundColor: 'transparent'
                                                                    },
                                                                    title: "Font Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 5
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                            lineNumber: 690,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                                    onClick: saveSettings,
                                                    disabled: isLoading || isSaved,
                                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner,
                                                        children: "⟳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 21
                                                    }, this) : isSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "✓ Saved"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Save Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 1
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 17
                                                }, this),
                                                savedMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedMessage} ${savedMessage.includes('Error') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successMessage}`,
                                                    children: savedMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                activeTab === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settingsSection,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/SaRCLogo.png",
                                                    alt: "Satellite Research Centre Logo",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appTitle,
                                                children: "Satellite Automated Testing System"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                lineNumber: 808,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionRow,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionLabel,
                                                                children: "Version:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionValue,
                                                                children: appVersion
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 812,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionRow,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionLabel,
                                                                children: "Build Date:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionValue,
                                                                children: buildDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 816,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionRow,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionLabel,
                                                                children: "Environment:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].versionValue,
                                                                children: ("TURBOPACK compile-time value", "development")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                lineNumber: 809,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsWindow$2f$SettingsWindow$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutText,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "This application provides a comprehensive interface for automated testing of satellite components and systems. It facilitates test management, execution, and result analysis."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        children: "Main Features:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 831,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Checkout Test - Subsystems and Components"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 833,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Real-time hardware integration with simulation fallback capability"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Interactive Satellite 3D model Viewer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Comprehensive test result logging and report generation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 3
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Customisability features"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 3
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        children: "NTU Professional Internship Project - Jan to May 2025:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Building Satellite - Development and implementation of Automated Testing System for Satellite"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                            lineNumber: 842,
                                                            columnNumber: 4
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                                lineNumber: 824,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                        lineNumber: 799,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                                    lineNumber: 798,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                            lineNumber: 581,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                    lineNumber: 523,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsWindow/SettingsWindow.tsx",
                lineNumber: 514,
                columnNumber: 5
            }, this), portalElement)
        ]
    }, void 0, true);
};
_s(SettingsWindow, "tt36N2V7ya4pTS75xmyJNciIhUM=");
_c = SettingsWindow;
const __TURBOPACK__default__export__ = SettingsWindow;
var _c;
__turbopack_context__.k.register(_c, "SettingsWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_SettingsWindow_da0e8920._.js.map