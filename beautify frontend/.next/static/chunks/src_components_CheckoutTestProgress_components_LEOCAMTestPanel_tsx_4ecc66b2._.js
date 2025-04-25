(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_CheckoutTestProgress_components_LEOCAMTestPanel_tsx_4ecc66b2._.js", {

"[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx
__turbopack_context__.s({
    "LEOCAMTestPanel": (()=>LEOCAMTestPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/OBC1TestPanel.module.css [app-client] (css module)"); // Reuse the OBC1 test panel styles
// Import the LEOCAM-specific functions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$leocamCheckout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/checkout/leocamCheckout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$leocamReport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reports/leocamReport.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// Reuse the SimulationBadge component for consistency
const SimulationBadge = ({ isSimulation })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '12px',
            padding: '2px 8px',
            backgroundColor: isSimulation ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
            color: isSimulation ? '#f59e0b' : 'inherit',
            borderRadius: '4px',
            display: isSimulation ? 'block' : 'none'
        },
        children: "Simulated Data"
    }, void 0, false, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
_c = SimulationBadge;
const LEOCAMTestPanel = ({ options, sock, onTestComplete, onTestError, onTestStart, isInitialRun })=>{
    _s();
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRunTest, setHasRunTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForceSimulation, setIsForceSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LEOCAMTestPanel.useEffect": ()=>{
            const checkDarkMode = {
                "LEOCAMTestPanel.useEffect.checkDarkMode": ()=>{
                    setIsDarkMode(document.documentElement.classList.contains("dark"));
                }
            }["LEOCAMTestPanel.useEffect.checkDarkMode"];
            // Initial check
            checkDarkMode();
            // Watch for theme changes
            const observer = new MutationObserver({
                "LEOCAMTestPanel.useEffect": ()=>{
                    checkDarkMode();
                }
            }["LEOCAMTestPanel.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "LEOCAMTestPanel.useEffect": ()=>observer.disconnect()
            })["LEOCAMTestPanel.useEffect"];
        }
    }["LEOCAMTestPanel.useEffect"], []);
    // Check if we have a real socket or need simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LEOCAMTestPanel.useEffect": ()=>{
            // Check the socket type and update UI accordingly
            console.log("🔍 Socket debug info:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debugSocketType"])(sock));
            // Check if this is coming from localStorage
            const socketInfoStr = localStorage.getItem('mccSocketInfo');
            let useSimulation = true; // Default to simulation
            if (socketInfoStr) {
                try {
                    const socketInfo = JSON.parse(socketInfoStr);
                    // If we have valid socket info and it's marked as real (not simulation)
                    if (socketInfo && socketInfo.isReal === true) {
                        console.log("📱 Using real socket configuration from localStorage");
                        useSimulation = false;
                    } else {
                        console.log("📱 Socket in localStorage marked as simulation");
                        useSimulation = true;
                    }
                } catch (error) {
                    console.error("Error parsing socket info:", error);
                }
            } else {
                console.log("📱 No socket info in localStorage");
            }
            // If the socket has an explicit isSimulated flag, use that
            if (sock && sock.isSimulated !== undefined) {
                useSimulation = sock.isSimulated;
                console.log(`📱 Using socket's own isSimulated flag: ${useSimulation}`);
            }
            setIsForceSimulation(useSimulation);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSimulationMode"])(useSimulation);
            if (useSimulation) {
                console.log("🟢 Using simulation mode for testing");
            } else {
                console.log("🔴 Using real socket mode for testing");
            }
        }
    }["LEOCAMTestPanel.useEffect"], [
        sock
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LEOCAMTestPanel.useEffect": ()=>{
            // Only run test automatically if this is the initial run and we haven't run it yet
            if (isInitialRun && !hasRunTest && !isRunning) {
                console.log("Auto-starting test because isInitialRun =", isInitialRun);
                startTest();
            }
        }
    }["LEOCAMTestPanel.useEffect"], [
        isInitialRun,
        hasRunTest,
        isRunning
    ]);
    const startTest = async ()=>{
        if (isRunning) return;
        setIsRunning(true);
        setProgress(0);
        setError(null);
        setHasRunTest(true);
        try {
            // Notify parent that the test has started
            onTestStart();
            // Begin the test process
            setCurrentStep('Starting LEOCAM Checkout');
            // Validate socket before proceeding
            if (!sock || typeof sock.simulateRead !== 'function' && typeof sock.send !== 'function') {
                console.warn("No valid socket found, creating simulation fallback");
                // Create a minimal simulation object
                const simulatedSock = {
                    simulateRead: (parameters)=>{
                        // Generate simulated values for common parameters
                        return parameters.map((param)=>{
                            // Return specific values for common parameters
                            if (param.includes("GPS") || param.includes("5V")) {
                                return `${param}=${5.0 + (Math.random() * 0.2 - 0.1).toFixed(3)}`;
                            } else if (param.includes("PCS")) {
                                return `${param}=${12.0 + (Math.random() * 0.4 - 0.2).toFixed(3)}`;
                            } else if (param.includes("CAM")) {
                                return `${param}=${12.0 + (Math.random() * 0.4 - 0.2).toFixed(3)}`;
                            } else if (param.includes("TEMP") || param.includes("Temp")) {
                                // Temperature values
                                return `${param}=${35 + Math.floor(Math.random() * 10)}`;
                            } else if (param.includes("PWR") || param.includes("Power")) {
                                return `${param}=1`;
                            } else if (param.includes("Mode")) {
                                return `${param}=0`;
                            } else if (param.includes("Sen_")) {
                                return `${param}=100`;
                            } else if (param.includes("Count")) {
                                return `${param}=${Math.floor(Math.random() * 10)}`;
                            } else {
                                return `${param}=simulated`;
                            }
                        });
                    },
                    send: async (message)=>{
                        console.log(`[SIM] Sending: ${message}`);
                        return Promise.resolve();
                    },
                    receive: async ()=>{
                        console.log(`[SIM] Receiving data`);
                        return Promise.resolve("simulated response");
                    },
                    isSimulated: true
                };
                // Use the simulated socket
                sock = simulatedSock;
            }
            // Run the LEOCAM checkout test with progress updates
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$leocamCheckout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runLEOCAMCheckout"])(sock, options, (step, percent)=>{
                setCurrentStep(step);
                setProgress(percent);
            });
            // Add the list of tested options to the results
            results.testedOptions = options;
            // Save the results locally
            setResults(results);
            // Notify parent that the test is complete
            onTestComplete(results);
        } catch (error) {
            console.error('Error running LEOCAM checkout:', error);
            setError(error instanceof Error ? error.message : String(error));
            onTestError(error);
        } finally{
            setIsRunning(false);
            setProgress(100);
            setCurrentStep('Test Complete');
        }
    };
    // Generate a report from the test results
    const generateReport = async ()=>{
        if (!results) {
            setError('No test results available to generate a report');
            return;
        }
        try {
            const reportFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$leocamReport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLEOCAMReport"])(results);
            alert(`LEOCAM report saved: ${reportFile}`);
        } catch (error) {
            console.error('Error generating report:', error);
            setError(error instanceof Error ? error.message : String(error));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testPanel,
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                style: {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                        style: {
                            backgroundColor: isDarkMode ? "#111827" : undefined,
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            style: {
                                color: isDarkMode ? "#f3f4f6" : "#111827"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                "LEOCAM Test Status"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressStep,
                                                style: {
                                                    color: isDarkMode ? "#d1d5db" : "#4b5563"
                                                },
                                                children: currentStep || 'Waiting to start test...'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressValue,
                                                style: {
                                                    color: isDarkMode ? "#93c5fd" : "#1d4ed8"
                                                },
                                                children: [
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                                        style: {
                                            backgroundColor: isDarkMode ? "#374151" : "#e5e7eb"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarFill,
                                            style: {
                                                width: `${progress}%`,
                                                background: 'linear-gradient(to right, #10b981, #059669)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '14px',
                                            marginBottom: '10px',
                                            color: isDarkMode ? "#d1d5db" : "#374151"
                                        },
                                        children: "Selected Test Options:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px'
                                        },
                                        children: [
                                            options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '6px 10px',
                                                        backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                                                        borderRadius: '4px',
                                                        fontSize: '13px',
                                                        color: isDarkMode ? '#34d399' : '#059669',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "12",
                                                            height: "12",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, this),
                                                        option
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)),
                                            options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                    fontStyle: 'italic',
                                                    fontSize: '13px'
                                                },
                                                children: "No specific options selected. Running with defaults."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                style: {
                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            "Connection Mode"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${isForceSimulation ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorWaiting : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                        children: isForceSimulation ? 'SIMULATION' : 'REAL SOCKET'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                style: {
                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this),
                                            "Test Options"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                        children: options.length > 0 ? `LEOCAM TEST ENABLED` : 'LEOCAM TEST DISABLED'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startTest,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                disabled: isRunning,
                                style: {
                                    backgroundColor: isRunning ? '#9ca3af' : hasRunTest ? '#059669' : '#10b981',
                                    color: 'white'
                                },
                                children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinnerIcon,
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 12a9 9 0 11-6.219-8.56"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 379,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this),
                                        "Running Test..."
                                    ]
                                }, void 0, true) : hasRunTest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1 1 1 0 01.008.057z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        "Re-run Test"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        "Run Test"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #064e3b, #065f46)" : "linear-gradient(to right, #ecfdf5, #d1fae5)",
                                    color: isDarkMode ? "#d1fae5" : "#065f46"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            "LEOCAM Voltage Test Results"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 420,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                    style: {
                                        color: isDarkMode ? "#e5e7eb" : "inherit"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeader,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                color: isDarkMode ? "#d1d5db" : "#6b7280"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Device"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Voltage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Initial Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Final Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableBody,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "GPS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltageTests.gps.voltage,
                                                                " V"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltageTests.gps.current,
                                                                " A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltageTests.gps.passInitial ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltageTests.gps.passInitial ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltageTests.gps.passFinal ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltageTests.gps.passFinal ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableRowAlt,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "PCS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltageTests.pcs.voltage,
                                                                " V"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltageTests.pcs.current,
                                                                " A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltageTests.pcs.passInitial ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltageTests.pcs.passInitial ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltageTests.pcs.passFinal ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltageTests.pcs.passFinal ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "LEOCAM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltageTests.leocam.voltage,
                                                                " V"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltageTests.leocam.current,
                                                                " A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltageTests.leocam.passInitial ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltageTests.leocam.passInitial ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltageTests.leocam.passFinal ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltageTests.leocam.passFinal ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #064e3b, #065f46)" : "linear-gradient(to right, #ecfdf5, #d1fae5)",
                                    color: isDarkMode ? "#d1fae5" : "#065f46"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this),
                                            "LEOCAM Configuration"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 525,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "Sensor Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorMode || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 547,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "Sensor Power"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorPower || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "Frame Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorLineFrameRate || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "Bit Depth"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorBitDepth || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                                gridColumn: "span 2"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "ROI Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorRoi.join(', ') || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 600,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "Gain Analog"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorGainAnalog || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                    children: "Scan Direction"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: results.leocamConfig.sensorScanDirection || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #075985, #0369a1)" : "linear-gradient(to right, #e0f2fe, #bae6fd)",
                                    color: isDarkMode ? "#bae6fd" : "#0369a1"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            "LEOCAM Telemetry Data"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 652,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                        style: {
                                            backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                            marginBottom: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                children: "Health Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 664,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.leocamTelemetry.healthStatus === "0" || results.leocamTelemetry.healthStatus === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                children: results.leocamTelemetry.healthStatus === "0" || results.leocamTelemetry.healthStatus === 0 ? "HEALTHY" : "ERROR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 665,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            marginBottom: '10px',
                                            color: isDarkMode ? "#d1d5db" : "#374151"
                                        },
                                        children: "Temperature Readings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempGrid,
                                        children: [
                                            results.leocamTelemetry.cpuTemperatures.map((temp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempCard,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                                                        borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempLabel,
                                                            style: {
                                                                color: isDarkMode ? "#fcd34d" : "#92400e"
                                                            },
                                                            children: [
                                                                "CPU ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempValue,
                                                            style: {
                                                                color: isDarkMode ? "#fcd34d" : "#92400e"
                                                            },
                                                            children: [
                                                                temp,
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `cpu-temp-${index}`, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 19
                                                }, this)),
                                            results.leocamTelemetry.internalTemperatures.map((temp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempCard,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                                                        borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempLabel,
                                                            style: {
                                                                color: isDarkMode ? "#fcd34d" : "#92400e"
                                                            },
                                                            children: [
                                                                "Internal ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempValue,
                                                            style: {
                                                                color: isDarkMode ? "#fcd34d" : "#92400e"
                                                            },
                                                            children: [
                                                                temp,
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `int-temp-${index}`, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 19
                                                }, this)),
                                            results.leocamTelemetry.sensorTemperatures.map((temp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempCard,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                                                        borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempLabel,
                                                            style: {
                                                                color: isDarkMode ? "#fcd34d" : "#92400e"
                                                            },
                                                            children: [
                                                                "Sensor ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tempValue,
                                                            style: {
                                                                color: isDarkMode ? "#fcd34d" : "#92400e"
                                                            },
                                                            children: [
                                                                temp,
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `sensor-temp-${index}`, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this),
                                    (options.includes('Disk Operations') || results.leocamTelemetry.diskUsed.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 'bold',
                                                    margin: '16px 0 10px',
                                                    color: isDarkMode ? "#d1d5db" : "#374151"
                                                },
                                                children: "Storage Information"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 775,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                                style: {
                                                    color: isDarkMode ? "#e5e7eb" : "inherit"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeader,
                                                        style: {
                                                            backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                            color: isDarkMode ? "#d1d5db" : "#6b7280"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Disk"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                    lineNumber: 798,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Usage (KB)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Temp (°C)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                    lineNumber: 800,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Lifetime (h)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                    lineNumber: 801,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                            lineNumber: 797,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableBody,
                                                        children: results.leocamTelemetry.diskUsed.map((usage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: index % 2 === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableRowAlt : '',
                                                                style: {
                                                                    backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            "Disk ",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                        lineNumber: 811,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: usage
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                        lineNumber: 812,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.leocamTelemetry.diskTemperatures[index] || 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                        lineNumber: 813,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.leocamTelemetry.diskLifetimes[index] || 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, `disk-${index}`, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                                lineNumber: 806,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 784,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            margin: '16px 0 10px',
                                            color: isDarkMode ? "#d1d5db" : "#374151"
                                        },
                                        children: "Command Statistics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 827,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                                style: {
                                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                        children: "Commands"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: results.leocamStatistics.commandCount || '0'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 837,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                                style: {
                                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                        children: "Acknowledges"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: results.leocamStatistics.acknowledgeCount || '0'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 848,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                                style: {
                                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                        children: "Timeouts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: parseInt(results.leocamStatistics.timeoutCount || '0') > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError : '',
                                                        children: results.leocamStatistics.timeoutCount || '0'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                                style: {
                                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                                                        children: "Errors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: parseInt(results.leocamStatistics.errorCount || '0') > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError : '',
                                                        children: results.leocamStatistics.errorCount || '0'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                                lineNumber: 872,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 836,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                        lineNumber: 628,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: generateReport,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reportButton,
                            style: {
                                backgroundColor: "#10b981",
                                color: "white"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                        lineNumber: 898,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                                    lineNumber: 897,
                                    columnNumber: 15
                                }, this),
                                "Generate Report"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                            lineNumber: 889,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
                lineNumber: 403,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
};
_s(LEOCAMTestPanel, "cUn6ZpYkX41aD7ftCvUBMzFN1a8=");
_c1 = LEOCAMTestPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "SimulationBadge");
__turbopack_context__.k.register(_c1, "LEOCAMTestPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_CheckoutTestProgress_components_LEOCAMTestPanel_tsx_4ecc66b2._.js.map