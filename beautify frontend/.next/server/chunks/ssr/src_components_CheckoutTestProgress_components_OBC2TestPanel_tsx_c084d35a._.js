module.exports = {

"[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx
__turbopack_context__.s({
    "OBC2TestPanel": (()=>OBC2TestPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/OBC1TestPanel.module.css [app-ssr] (css module)"); // Reuse the same styles as OBC1TestPanel
// Import the OBC2-specific functions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$obc2Checkout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/checkout/obc2Checkout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$obc2Report$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reports/obc2Report.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Create a reusable SimulationBadge component for consistency
const SimulationBadge = ({ isSimulation })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
const OBC2TestPanel = ({ options, sock, onTestComplete, onTestError, onTestStart, isInitialRun })=>{
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRunTest, setHasRunTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForceSimulation, setIsForceSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine if memory options are enabled
    const enableSdCard = options.includes('SD Card');
    const enableEeprom = options.includes('EEPROM');
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDarkMode = ()=>{
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };
        // Initial check
        checkDarkMode();
        // Watch for theme changes
        const observer = new MutationObserver(()=>{
            checkDarkMode();
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                'class'
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    // Check if we have a real socket or need simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check the socket type and update UI accordingly
        console.log("🔍 Socket debug info:", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debugSocketType"])(sock));
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSimulationMode"])(useSimulation);
        if (useSimulation) {
            console.log("🟢 Using simulation mode for testing");
        } else {
            console.log("🔴 Using real socket mode for testing");
        }
    }, [
        sock
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run test automatically if this is the initial run and we haven't run it yet
        if (isInitialRun && !hasRunTest && !isRunning) {
            console.log("Auto-starting test because isInitialRun =", isInitialRun);
            startTest();
        }
    }, [
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
            setCurrentStep('Starting OBC-2 Checkout');
            // Validate socket before proceeding
            if (!sock || typeof sock.simulateRead !== 'function' && typeof sock.send !== 'function') {
                console.warn("No valid socket found, creating simulation fallback");
                // Create a minimal simulation object
                const simulatedSock = {
                    simulateRead: (parameters)=>{
                        // Generate simulated values for common parameters
                        return parameters.map((param)=>{
                            // Return specific values for common parameters
                            if (param.includes("FW_Ver")) {
                                const version = param.includes("Major") ? "1" : param.includes("Minor") ? "2" : "3";
                                return `${param}=${version}`;
                            } else if (param.includes("3V3") || param.includes("3v3")) {
                                // Voltage values in mV
                                return `${param}=${3300 + Math.floor(Math.random() * 100)}`;
                            } else if (param.includes("temp") || param.includes("Temp")) {
                                // Temperature values
                                return `${param}=${20 + Math.floor(Math.random() * 10)}`;
                            } else if (param.includes("Time")) {
                                // Time values
                                return `${param}=${new Date().toISOString()}`;
                            } else if (param.includes("Uptime")) {
                                // Uptime values
                                return `${param}=${3600 + Math.floor(Math.random() * 3600)}`;
                            } else if (param.includes("InterComm")) {
                                // CAN communication counters
                                return `${param}=${10 + Math.floor(Math.random() * 20)}`;
                            } else if (param.includes("SD_") || param.includes("EEPROM_")) {
                                // Memory counters
                                return `${param}=${5 + Math.floor(Math.random() * 10)}`;
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
            // Run the OBC-2 checkout test with progress updates
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$obc2Checkout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runOBC2Checkout"])(sock, {
                sdCard: enableSdCard,
                eeprom: enableEeprom
            }, (step, percent)=>{
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
            console.error('Error running OBC-2 checkout:', error);
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
            const reportFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$obc2Report$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateOBC2Report"])(results);
            alert(`OBC-2 report saved: ${reportFile}`);
        } catch (error) {
            console.error('Error generating report:', error);
            setError(error instanceof Error ? error.message : String(error));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testPanel,
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                lineNumber: 248,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                style: {
                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                        style: {
                            backgroundColor: isDarkMode ? "#111827" : undefined,
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                            style: {
                                color: isDarkMode ? "#f3f4f6" : "#111827"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                "OBC-2 Test Status"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressStep,
                                                style: {
                                                    color: isDarkMode ? "#d1d5db" : "#4b5563"
                                                },
                                                children: currentStep || 'Waiting to start test...'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressValue,
                                                style: {
                                                    color: isDarkMode ? "#93c5fd" : "#1d4ed8"
                                                },
                                                children: [
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                                        style: {
                                            backgroundColor: isDarkMode ? "#374151" : "#e5e7eb"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBarFill,
                                            style: {
                                                width: `${progress}%`,
                                                background: 'linear-gradient(to right, #3b82f6, #4f46e5)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '14px',
                                            marginBottom: '10px',
                                            color: isDarkMode ? "#d1d5db" : "#374151"
                                        },
                                        children: "Selected Test Options:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px'
                                        },
                                        children: [
                                            options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '6px 10px',
                                                        backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                                                        borderRadius: '4px',
                                                        fontSize: '13px',
                                                        color: isDarkMode ? '#93c5fd' : '#3b82f6',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "12",
                                                            height: "12",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, this),
                                                        option
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)),
                                            options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                    fontStyle: 'italic',
                                                    fontSize: '13px'
                                                },
                                                children: "No specific options selected. Running with defaults."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterBox,
                                style: {
                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            "Connection Mode"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${isForceSimulation ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorWaiting : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                        children: isForceSimulation ? 'SIMULATION' : 'REAL SOCKET'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterBox,
                                style: {
                                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                    marginTop: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this),
                                            "Memory Testing"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterValue} ${enableSdCard ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorWaiting}`,
                                                children: [
                                                    "SD CARD: ",
                                                    enableSdCard ? 'ENABLED' : 'DISABLED'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parameterValue} ${enableEeprom ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorWaiting}`,
                                                children: [
                                                    "EEPROM: ",
                                                    enableEeprom ? 'ENABLED' : 'DISABLED'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startTest,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                disabled: isRunning,
                                style: {
                                    backgroundColor: isRunning ? '#9ca3af' : hasRunTest ? '#4f46e5' : '#10b981',
                                    color: 'white',
                                    marginTop: '20px'
                                },
                                children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinnerIcon,
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 12a9 9 0 11-6.219-8.56"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 402,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 401,
                                            columnNumber: 19
                                        }, this),
                                        "Running Test..."
                                    ]
                                }, void 0, true) : hasRunTest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1 1 1 0 01.008.057z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, this),
                                        "Re-run Test"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 416,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 415,
                                            columnNumber: 19
                                        }, this),
                                        "Run Test"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #064e3b, #065f46)" : "linear-gradient(to right, #ecfdf5, #d1fae5)",
                                    color: isDarkMode ? "#d1fae5" : "#065f46"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 444,
                                                columnNumber: 19
                                            }, this),
                                            "Firmware Information"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 451,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoCard,
                                    style: {
                                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "#059669",
                                                width: "20",
                                                height: "20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 463,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoContent,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoLabel,
                                                    style: {
                                                        color: isDarkMode ? "#9ca3af" : "#6b7280"
                                                    },
                                                    children: "OBC-2 Firmware Version"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoValue,
                                                    style: {
                                                        color: isDarkMode ? "#f3f4f6" : "#111827"
                                                    },
                                                    children: [
                                                        results.firmware.major,
                                                        ".",
                                                        results.firmware.minor,
                                                        ".",
                                                        results.firmware.patch
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 427,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" : "linear-gradient(to right, #eff6ff, #dbeafe)",
                                    color: isDarkMode ? "#dbeafe" : "#1d4ed8"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 502,
                                                columnNumber: 19
                                            }, this),
                                            "Time Synchronization"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 501,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 509,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
                                    style: {
                                        color: isDarkMode ? "#e5e7eb" : "inherit"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeader,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                color: isDarkMode ? "#d1d5db" : "#6b7280"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Parameter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 528,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 526,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 519,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableBody,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "Before Update"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.time.before,
                                                                " UTC"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 534,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableRowAlt,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "After Update"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 538,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.time.after,
                                                                " UTC"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "Current Time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.time.current,
                                                                " UTC"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableRowAlt,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "Uptime Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.time.uptime.total,
                                                                " sec"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "Uptime Session"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.time.uptime.session,
                                                                " sec"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 531,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                    lineNumber: 513,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 512,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 485,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #4c1d95, #6d28d9)" : "linear-gradient(to right, #f5f3ff, #ede9fe)",
                                    color: isDarkMode ? "#ede9fe" : "#6d28d9"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 578,
                                                columnNumber: 19
                                            }, this),
                                            "Voltage Measurements"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 577,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 568,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
                                    style: {
                                        color: isDarkMode ? "#e5e7eb" : "inherit"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeader,
                                            style: {
                                                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                                color: isDarkMode ? "#d1d5db" : "#6b7280"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Parameter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 602,
                                                columnNumber: 1
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 595,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableBody,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "SD Card 3V3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltage.sdCard.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltage.sdCard.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltage.sdCard.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableRowAlt,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "Flash 3V3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltage.flash.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltage.flash.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltage.flash.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "EEPROM 3V3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltage.eeprom.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltage.eeprom.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltage.eeprom.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 637,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableRowAlt,
                                                    style: {
                                                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "Payload 3V3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltage.payload.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltage.payload.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltage.payload.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "UHF 3V3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltage.uhf.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.voltage.uhf.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: results.voltage.uhf.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                            lineNumber: 608,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                    lineNumber: 589,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 588,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 561,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #164e63, #0e7490)" : "linear-gradient(to right, #ecfeff, #cffafe)",
                                    color: isDarkMode ? "#cffafe" : "#0e7490"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M13 7H7v6h6V7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 693,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 691,
                                                columnNumber: 1
                                            }, this),
                                            "CAN Communication Test"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 690,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 699,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 681,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '20px',
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    padding: '10px',
                                                    backgroundColor: isDarkMode ? '#0c4a6e' : '#e0f2fe',
                                                    borderRadius: '8px',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "Primary CAN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.can.primary.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                        style: {
                                                            fontSize: '14px',
                                                            padding: '5px 10px'
                                                        },
                                                        children: results.can.primary.result
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 704,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    padding: '10px',
                                                    backgroundColor: isDarkMode ? '#0c4a6e' : '#e0f2fe',
                                                    borderRadius: '8px',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "Secondary CAN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.can.secondary.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                        style: {
                                                            fontSize: '14px',
                                                            padding: '5px 10px'
                                                        },
                                                        children: results.can.secondary.result
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 721,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 703,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '13px',
                                            color: isDarkMode ? '#94a3b8' : '#64748b',
                                            marginTop: '10px'
                                        },
                                        children: "CAN communication test verifies data transfer between OBC-1 and OBC-2 over both primary and secondary CAN buses. The test measures successful transmission and acknowledgement of HKP, CFG, MET, ETC, and UHF packets."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 739,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 702,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 674,
                        columnNumber: 1
                    }, this),
                    (enableSdCard || enableEeprom) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                style: {
                                    background: isDarkMode ? "linear-gradient(to right, #713f12, #854d0e)" : "linear-gradient(to right, #fffbeb, #fef3c7)",
                                    color: isDarkMode ? "#fef3c7" : "#854d0e"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 3
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 765,
                                                columnNumber: 1
                                            }, this),
                                            "Memory Test Results"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 764,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 772,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 755,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    enableSdCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '20px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: 0
                                                        },
                                                        children: "SD Card Test"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.memory.sdCard.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : results.memory.sdCard.result === "Not tested" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorWaiting : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                        children: results.memory.sdCard.result
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 778,
                                                columnNumber: 3
                                            }, this),
                                            results.memory.sdCard.result !== "Not tested" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
                                                style: {
                                                    marginTop: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeader,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Counter"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 792,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Before Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "After Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 794,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Difference"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 795,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 9
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Write Success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.before.writeSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.after.writeSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.sdCard.after.writeSuccess) - Number(results.memory.sdCard.before.writeSuccess)) ? "0" : Number(results.memory.sdCard.after.writeSuccess) - Number(results.memory.sdCard.before.writeSuccess)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Read Success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 807,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.before.readSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 808,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.after.readSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 809,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.sdCard.after.readSuccess) - Number(results.memory.sdCard.before.readSuccess)) ? "0" : Number(results.memory.sdCard.after.readSuccess) - Number(results.memory.sdCard.before.readSuccess)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 810,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 806,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Write Fail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 814,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.before.writeFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 815,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.after.writeFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.sdCard.after.writeFail) - Number(results.memory.sdCard.before.writeFail)) ? "0" : Number(results.memory.sdCard.after.writeFail) - Number(results.memory.sdCard.before.writeFail)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 817,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 813,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Read Fail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 821,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.before.readFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 822,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.sdCard.after.readFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 823,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.sdCard.after.readFail) - Number(results.memory.sdCard.before.readFail)) ? "0" : Number(results.memory.sdCard.after.readFail) - Number(results.memory.sdCard.before.readFail)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 824,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 9
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 798,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 789,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 777,
                                        columnNumber: 1
                                    }, this),
                                    enableEeprom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: 0
                                                        },
                                                        children: "EEPROM Test"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 5
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.memory.eeprom.result === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : results.memory.eeprom.result === "Not tested" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorWaiting : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                        children: results.memory.eeprom.result
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 5
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 835,
                                                columnNumber: 3
                                            }, this),
                                            results.memory.eeprom.result !== "Not tested" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
                                                style: {
                                                    marginTop: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeader,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Counter"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 849,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Before Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 850,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "After Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Difference"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 9
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Write Success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 857,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.before.writeSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.after.writeSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 859,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.eeprom.after.writeSuccess) - Number(results.memory.eeprom.before.writeSuccess)) ? "0" : Number(results.memory.eeprom.after.writeSuccess) - Number(results.memory.eeprom.before.writeSuccess)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 856,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Read Success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 864,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.before.readSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 865,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.after.readSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 866,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.eeprom.after.readSuccess) - Number(results.memory.eeprom.before.readSuccess)) ? "0" : Number(results.memory.eeprom.after.readSuccess) - Number(results.memory.eeprom.before.readSuccess)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 867,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Write Fail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 871,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.before.writeFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.after.writeFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 873,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.eeprom.after.writeFail) - Number(results.memory.eeprom.before.writeFail)) ? "0" : Number(results.memory.eeprom.after.writeFail) - Number(results.memory.eeprom.before.writeFail)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 874,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 9
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: "Read Fail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 878,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.before.readFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 879,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: results.memory.eeprom.after.readFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 880,
                                                                        columnNumber: 11
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: isNaN(Number(results.memory.eeprom.after.readFail) - Number(results.memory.eeprom.before.readFail)) ? "0" : Number(results.memory.eeprom.after.readFail) - Number(results.memory.eeprom.before.readFail)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                        lineNumber: 881,
                                                                        columnNumber: 11
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                                lineNumber: 877,
                                                                columnNumber: 9
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                                lineNumber: 846,
                                                columnNumber: 5
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 834,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                lineNumber: 775,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 748,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: generateReport,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportButton,
                            style: {
                                backgroundColor: "#10b981",
                                color: "white"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                        lineNumber: 903,
                                        columnNumber: 1
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                                    lineNumber: 902,
                                    columnNumber: 1
                                }, this),
                                "Generate Report"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                            lineNumber: 894,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                        lineNumber: 893,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
                lineNumber: 426,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=src_components_CheckoutTestProgress_components_OBC2TestPanel_tsx_c084d35a._.js.map