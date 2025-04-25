module.exports = {

"[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/components/CheckoutTestProgress/components/GPSTestPanel.tsx
__turbopack_context__.s({
    "GPSTestPanel": (()=>GPSTestPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/OBC1TestPanel.module.css [app-ssr] (css module)"); // Reuse the same styles as OBC1TestPanel
// Import the GPS-specific functions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$gpsCheckout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/checkout/gpsCheckout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$gpsReport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reports/gpsReport.ts [app-ssr] (ecmascript)");
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
        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
const GPSTestPanel = ({ options, sock, onTestComplete, onTestError, onTestStart, isInitialRun })=>{
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRunTest, setHasRunTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForceSimulation, setIsForceSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
            setCurrentStep('Starting GPS Checkout');
            // Validate socket before proceeding
            if (!sock || typeof sock.simulateRead !== 'function' && typeof sock.send !== 'function') {
                console.warn("No valid socket found, creating simulation fallback");
                // Create a minimal simulation object
                const simulatedSock = {
                    simulateRead: (parameters)=>{
                        // Generate simulated values for common parameters
                        return parameters.map((param)=>{
                            // Return specific values for common parameters
                            if (param.includes("_GPS_5V_V")) {
                                return `${param}=5.05`; // 5V supply voltage
                            } else if (param.includes("_GPS_5V_I")) {
                                return `${param}=0.120`; // Current in Amps
                            } else if (param.includes("_GPS_3V3_V")) {
                                return `${param}=3350`; // 3.3V supply in mV
                            } else if (param.includes("_Gps_TxCount")) {
                                return `${param}=${Math.floor(Math.random() * 10)}`; // TX count
                            } else if (param.includes("_Gps_RxCount")) {
                                return `${param}=${Math.floor(Math.random() * 10)}`; // RX count
                            } else if (param.includes("_Gps_TxBytes")) {
                                return `${param}=${Math.floor(Math.random() * 1000)}`; // TX bytes
                            } else if (param.includes("_Gps_RxBytes")) {
                                return `${param}=${Math.floor(Math.random() * 1000)}`; // RX bytes
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
            // Run the GPS checkout test with progress updates
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$gpsCheckout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runGPSCheckout"])(sock, (step, percent)=>{
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
            console.error('Error running GPS checkout:', error);
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
            const reportFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$gpsReport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateGPSReport"])(results);
            alert(`GPS report saved: ${reportFile}`);
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
                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                lineNumber: 233,
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
                                        d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                "GPS Test Status"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                        lineNumber: 245,
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressValue,
                                            style: {
                                                color: isDarkMode ? "#93c5fd" : "#1d4ed8"
                                            },
                                            children: [
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 263,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 262,
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
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 261,
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
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 283,
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
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this),
                                                        option
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this)),
                                            options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                    fontStyle: 'italic',
                                                    fontSize: '13px'
                                                },
                                                children: "No specific options selected. Running standard GPS test."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 282,
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
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, this),
                                            "Connection Mode"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'inline-block',
                                            padding: '4px 8px',
                                            borderRadius: '9999px',
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            backgroundColor: isForceSimulation ? isDarkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0.1)' : isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                                            color: isForceSimulation ? isDarkMode ? '#fbbf24' : '#d97706' : isDarkMode ? '#34d399' : '#059669'
                                        },
                                        children: isForceSimulation ? 'SIMULATION' : 'REAL SOCKET'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 321,
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 365,
                                            columnNumber: 17
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        "Run Test"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                lineNumber: 238,
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
                                                    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this),
                                            "GPS Power Status"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 399,
                                columnNumber: 13
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
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
                                                            children: "GPS 5V Supply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltages.gps5V.value,
                                                                " V"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: 'inline-block',
                                                                    padding: '4px 8px',
                                                                    borderRadius: '9999px',
                                                                    fontSize: '12px',
                                                                    fontWeight: '500',
                                                                    backgroundColor: results.voltages.gps5V.pass ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)' : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                                                                    color: results.voltages.gps5V.pass ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                },
                                                                children: results.voltages.gps5V.pass ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
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
                                                            children: "GPS 5V Current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltages.gps5VCurrent.value,
                                                                " A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "GPS 3.3V Supply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.voltages.gps3V3.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: 'inline-block',
                                                                    padding: '4px 8px',
                                                                    borderRadius: '9999px',
                                                                    fontSize: '12px',
                                                                    fontWeight: '500',
                                                                    backgroundColor: results.voltages.gps3V3.pass ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)' : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                                                                    color: results.voltages.gps3V3.pass ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                },
                                                                children: results.voltages.gps3V3.pass ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                        lineNumber: 392,
                        columnNumber: 11
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
                                                    d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            "GPS Command Test"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '16px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                },
                                                children: "Command Test Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: 'inline-block',
                                                    padding: '4px 12px',
                                                    borderRadius: '9999px',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    backgroundColor: results.stats.commandCheck.pass ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)' : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                                                    color: results.stats.commandCheck.pass ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                },
                                                children: results.stats.commandCheck.pass ? "COMMAND SUCCEEDED" : "COMMAND FAILED"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 527,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                            borderRadius: '8px',
                                            padding: '12px',
                                            marginBottom: '16px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            style: {
                                                width: '100%',
                                                fontSize: '13px',
                                                color: isDarkMode ? '#d1d5db' : '#4b5563'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "TX Count Before:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.txCountBefore
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "TX Count After:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.txCountAfter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "RX Count Before:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.rxCountBefore
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "RX Count After:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.rxCountAfter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "TX Bytes Before:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.txBytesBefore
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "TX Bytes After:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.txBytesAfter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "RX Bytes Before:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.rxBytesBefore
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0'
                                                                },
                                                                children: "RX Bytes After:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '4px 0',
                                                                    fontWeight: '600'
                                                                },
                                                                children: results.stats.rxBytesAfter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 574,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                        lineNumber: 495,
                        columnNumber: 11
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
                                                    d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 600,
                                                columnNumber: 17
                                            }, this),
                                            "GPS Power Off Test"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                        isSimulation: isForceSimulation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 590,
                                columnNumber: 13
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                        },
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                lineNumber: 624,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 617,
                                            columnNumber: 17
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
                                                            children: "GPS 5V Supply (Off)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.powerOff.gps5V.value,
                                                                " V"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: 'inline-block',
                                                                    padding: '4px 8px',
                                                                    borderRadius: '9999px',
                                                                    fontSize: '12px',
                                                                    fontWeight: '500',
                                                                    backgroundColor: results.powerOff.gps5V.pass ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)' : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                                                                    color: results.powerOff.gps5V.pass ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                },
                                                                children: results.powerOff.gps5V.pass ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 19
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
                                                            children: "GPS 5V Current (Off)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.powerOff.gps5VCurrent.value,
                                                                " A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: "GPS 3.3V Supply (Off)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: [
                                                                results.powerOff.gps3V3.value,
                                                                " mV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: 'inline-block',
                                                                    padding: '4px 8px',
                                                                    borderRadius: '9999px',
                                                                    fontSize: '12px',
                                                                    fontWeight: '500',
                                                                    backgroundColor: results.powerOff.gps3V3.pass ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)' : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
                                                                    color: results.powerOff.gps3V3.pass ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                },
                                                                children: results.powerOff.gps3V3.pass ? "PASS" : "FAIL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                    lineNumber: 611,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                        lineNumber: 583,
                        columnNumber: 11
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
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                        lineNumber: 696,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                                    lineNumber: 695,
                                    columnNumber: 15
                                }, this),
                                "Generate Report"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                        lineNumber: 686,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/GPSTestPanel.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=src_components_CheckoutTestProgress_components_GPSTestPanel_tsx_8912621c._.js.map