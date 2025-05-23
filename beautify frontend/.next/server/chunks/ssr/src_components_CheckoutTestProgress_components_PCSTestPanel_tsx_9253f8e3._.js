module.exports = {

"[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/components/CheckoutTestProgress/components/PCSTestPanel.tsx
__turbopack_context__.s({
    "PCSTestPanel": (()=>PCSTestPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/OBC1TestPanel.module.css [app-ssr] (css module)"); // Reuse the same CSS
// Import the PCS-specific functions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$pcsCheckout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/checkout/pcsCheckout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$pcsReport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reports/pcsReport.ts [app-ssr] (ecmascript)");
// Import test history components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/TestHistoryChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/TestHistoryTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestDetailsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/TestDetailsModal.tsx [app-ssr] (ecmascript)");
;
;
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
        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
// Helper function to safely parse integers
const safeParseInt = (value)=>{
    if (!value || value === 'undefined' || value === 'null') return 0;
    const parsed = parseInt(value);
    return isNaN(parsed) ? 0 : parsed;
};
// Helper function to safely calculate changes between values
const calculateChange = (before, after)=>{
    const beforeVal = safeParseInt(before);
    const afterVal = safeParseInt(after);
    const difference = afterVal - beforeVal;
    return difference.toString(); // Convert back to string for display
};
const PCSTestPanel = ({ options, sock, onTestComplete, onTestError, onTestStart, isInitialRun, profileId })=>{
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRunTest, setHasRunTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForceSimulation, setIsForceSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detectedSimulation, setDetectedSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add states for test history
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testHistory, setTestHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyLoading, setHistoryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMetric, setSelectedMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('on.voltage');
    const [selectedHistoryItem, setSelectedHistoryItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cleanupMessage, setCleanupMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [limitMessage, setLimitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isMultiSelectMode, setIsMultiSelectMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine if SD Card test option is enabled
    const enableSDTest = options.includes('SD Card');
    // API URL
    const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    // Available metrics for visualization
    const metricOptions = [
        {
            label: 'PCS Voltage (On)',
            value: 'on.voltage'
        },
        {
            label: 'PCS Current (On)',
            value: 'on.current'
        },
        {
            label: 'PCS PS 3V3 I',
            value: 'vi.ps3v3I'
        },
        {
            label: 'PCS PS 5V I',
            value: 'vi.ps5I'
        },
        {
            label: 'PCS Voltage (Off)',
            value: 'off.voltage'
        }
    ];
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
    // Modify the useEffect for socket detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // First check the socket itself
        let isSimulated = true; // Default to simulation (safer assumption)
        if (sock) {
            // Direct simulation flag check - most reliable if present
            if (typeof sock.isSimulated === 'boolean') {
                isSimulated = sock.isSimulated;
            } else if (typeof sock.simulateRead === 'function') {
                isSimulated = true;
            } else if (typeof sock.send === 'function' && typeof sock.receive === 'function' && typeof sock.simulateRead === 'undefined') {
                isSimulated = false;
            }
        }
        // Check localStorage as secondary source (less reliable but could be used as fallback)
        const socketInfoStr = localStorage.getItem('mccSocketInfo');
        let configSaysSimulation = true;
        if (socketInfoStr) {
            try {
                const socketInfo = JSON.parse(socketInfoStr);
                if (socketInfo && socketInfo.isReal === true) {
                    configSaysSimulation = false;
                }
            } catch (e) {
                console.error("Error parsing socket info:", e);
            }
        }
        // Set states based on our determination
        setDetectedSimulation(isSimulated);
        setIsForceSimulation(configSaysSimulation);
        console.log(`Socket analysis: Socket detected as ${isSimulated ? 'SIMULATION' : 'REAL'}, Config says ${configSaysSimulation ? 'SIMULATION' : 'REAL'}`);
        // Global simulation mode should use the most accurate determination (socket itself)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSimulationMode"])(isSimulated);
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
    // Add function to fetch test history
    const fetchTestHistory = async (limit = 30)=>{
        if (!profileId) {
            console.log("Cannot fetch history: No profile ID provided");
            return;
        }
        setHistoryLoading(true);
        try {
            console.log(`Fetching test history for profile ${profileId} and component PCS`);
            const response = await fetch(`${API_URL}/test-results/${profileId}?component=PCS`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Received test history:", data);
                // Filter only non-simulated data
                const filteredData = data.filter((item)=>{
                    // Skip any simulated data
                    if (item.is_simulated === true || item.results?.simulated === true) {
                        console.log(`Filtering out simulated test result: ${item.id}`);
                        return false;
                    }
                    // Check if results object has essential properties
                    if (!item.results) return false;
                    // Must have voltage values to be a legitimate test
                    const hasVoltageData = item.results.on && (item.results.on.voltage || item.results.on.current);
                    // Consider it a real test if it has voltage data
                    return hasVoltageData;
                })// Limit to the most recent 'limit' entries (typically 30)
                .slice(0, limit);
                console.log(`Filtered from ${data.length} to ${filteredData.length} actual test results`);
                setTestHistory(filteredData);
            } else {
                console.error("Failed to fetch test history:", await response.text());
            }
        } catch (error) {
            console.error("Error fetching test history:", error);
            // If the fetch fails, try to use data from localStorage as fallback
            try {
                const localHistoryKey = `pcs_real_history_${profileId}`;
                const localData = localStorage.getItem(localHistoryKey);
                if (localData) {
                    const parsedData = JSON.parse(localData);
                    console.log("Using cached test history from localStorage:", parsedData);
                    // Apply the same limit to localStorage data
                    setTestHistory(parsedData.slice(0, limit));
                }
            } catch (e) {
                console.error("Error reading from localStorage:", e);
            }
        } finally{
            setHistoryLoading(false);
        }
    };
    // Fetch history when showHistory is toggled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showHistory) {
            fetchTestHistory();
        }
    }, [
        showHistory,
        profileId
    ]);
    // Add function to save test result to history
    const saveTestResult = async (testResults, status, wasSimulated)=>{
        if (!profileId) {
            console.log("Cannot save history: No profile ID provided");
            return;
        }
        // Use the passed simulation flag, but also perform our standard checks as a backup
        const detectedSim = detectedSimulation || isForceSimulation || sock && typeof sock.isSimulated === 'boolean' && sock.isSimulated;
        // Final simulation determination with priority to the wasSimulated flag
        const finalSimulationStatus = wasSimulated || detectedSim;
        console.log(`Saving test result: simulation=${finalSimulationStatus} (wasSimulated=${wasSimulated}, detected=${detectedSimulation}, config=${isForceSimulation})`);
        try {
            // Add simulation flag to the results
            const resultsWithFlag = {
                ...testResults,
                simulated: finalSimulationStatus,
                timestamp: new Date().toISOString(),
                testedOptions: options,
                _debug_info: {
                    explicit_simulation: wasSimulated,
                    detected_simulation: detectedSimulation,
                    configured_simulation: isForceSimulation
                }
            };
            // Only save to database if NOT simulated
            if (!finalSimulationStatus) {
                console.log("✅ Saving REAL test data to database");
                const response = await fetch(`${API_URL}/test-results`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        profile_id: profileId,
                        component_id: "PCS",
                        test_type: options.join(','),
                        results: resultsWithFlag,
                        status: status,
                        notes: enableSDTest ? "SD Card Test Enabled" : "SD Card Test Disabled",
                        is_simulated: false
                    }),
                    mode: 'cors'
                });
                if (response.ok) {
                    console.log("Real test result saved to history database");
                } else {
                    console.error("Failed to save test result:", await response.text());
                }
            } else {
                console.log("❌ Detected SIMULATED data - storing in localStorage only");
                // Save to localStorage instead
                const localHistoryKey = `pcs_sim_history_${profileId}`;
                try {
                    const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
                    existingHistory.push({
                        id: Date.now(),
                        component_id: "PCS",
                        test_type: options.join(','),
                        test_date: new Date().toISOString(),
                        results: resultsWithFlag,
                        status: status,
                        notes: "Simulated Test",
                        is_simulated: true
                    });
                    localStorage.setItem(localHistoryKey, JSON.stringify(existingHistory));
                } catch (e) {
                    console.error("Error saving to localStorage:", e);
                }
            }
            // Refresh test history if the history panel is open
            if (showHistory) {
                fetchTestHistory();
            }
        } catch (error) {
            console.error("Error saving test result:", error);
        }
    };
    // Function to extract a value from nested result objects
    const extractValue = (results, path)=>{
        if (!results) return null;
        const parts = path.split('.');
        let value = results;
        for (const part of parts){
            if (value && typeof value === 'object' && part in value) {
                value = value[part];
            } else {
                return null;
            }
        }
        // Try to parse as number
        const numValue = parseFloat(value);
        return isNaN(numValue) ? null : numValue;
    };
    // Format chart data for test history - ensure we only use real data
    const prepareChartData = ()=>{
        return testHistory.filter((item)=>{
            // Ensure we only use real (non-simulated) data for charts
            if (item.is_simulated || item.results?.simulated) {
                return false;
            }
            // Make sure the data point has a value for the selected metric
            const metricValue = extractValue(item.results, selectedMetric);
            return metricValue !== null && metricValue !== undefined && !isNaN(metricValue);
        }).map((item)=>{
            const metricValue = extractValue(item.results, selectedMetric);
            return {
                date: new Date(item.test_date).toLocaleDateString(),
                [selectedMetric.split('.').pop() || 'value']: metricValue,
                tooltipLabel: new Date(item.test_date).toLocaleString(),
                // Add more context to tooltip
                componentId: item.component_id,
                testType: item.test_type,
                dataType: 'Real Data'
            };
        });
    };
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
            setCurrentStep('Starting PCS Checkout');
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
                            } else if (param.includes("PCS_V")) {
                                // Voltage values in V for PCS
                                return `${param}=${12.0 + Math.random() * 0.5}`;
                            } else if (param.includes("PCS_I")) {
                                // Current values in A for PCS
                                return `${param}=${0.2 + Math.random() * 0.1}`;
                            } else if (param.includes("Time")) {
                                // Time values
                                return `${param}=${new Date().toISOString()}`;
                            } else if (param.includes("Uptime")) {
                                return `${param}=${Math.floor(Math.random() * 10000)}`;
                            } else if (param.includes("PS_3V3")) {
                                return `${param}=${Math.floor(Math.random() * 100)}`;
                            } else if (param.includes("PS_5")) {
                                return `${param}=${Math.floor(Math.random() * 100)}`;
                            } else if (param.includes("SD_Write")) {
                                return `${param}=${Math.floor(Math.random() * 10)}`;
                            } else if (param.includes("SD_Read")) {
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
            // Detect if we are using simulation
            const usedSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUsingSimulation"])(sock);
            setDetectedSimulation(usedSimulation);
            // Run the PCS checkout test with progress updates
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$pcsCheckout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runPCSCheckout"])(sock, enableSDTest, (step, percent)=>{
                setCurrentStep(step);
                setProgress(percent);
            });
            // Add the list of tested options to the results
            results.testedOptions = options;
            // Save the results locally
            setResults(results);
            // Save result to history with the simulation status
            await saveTestResult(results, 'completed', usedSimulation);
            // Notify parent that the test is complete
            onTestComplete(results);
        } catch (error) {
            console.error('Error running PCS checkout:', error);
            setError(error instanceof Error ? error.message : String(error));
            onTestError(error);
            // Save failed result to history - any error means simulation was likely used
            if (results) {
                await saveTestResult(results, 'error', true);
            }
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
            const reportFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$pcsReport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatePCSReport"])(results);
            alert(`PCS report saved: ${reportFile}`);
        } catch (error) {
            console.error('Error generating report:', error);
            setError(error instanceof Error ? error.message : String(error));
        }
    };
    /**
   * Clean up simulated test results from the database
   */ const cleanupSimulatedData = async ()=>{
        try {
            const response = await fetch(`${API_URL}/test-results/cleanup-simulated`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });
            if (response.ok) {
                const result = await response.json();
                console.log(`Cleanup complete: ${result.message}`);
                // Show a success message to the user
                setCleanupMessage(`✅ ${result.message}`);
                // Refresh the history after cleanup
                if (showHistory) {
                    fetchTestHistory();
                }
            } else {
                console.error('Failed to clean up simulated data:', await response.text());
                setCleanupMessage('❌ Failed to clean up simulated data');
            }
        } catch (error) {
            console.error('Error cleaning up simulated data:', error);
            setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
        }
    };
    /**
   * Limit test history to a certain number of records
   * @param limit Number of records to keep (default: 30)
   */ const limitTestHistory = async (limit = 30)=>{
        if (!profileId) {
            console.log("Cannot limit history: No profile ID provided");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/test-results/limit/${profileId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    limit,
                    component: 'PCS' // Limit only PCS records
                }),
                mode: 'cors'
            });
            if (response.ok) {
                const result = await response.json();
                console.log(`History limit applied: ${result.message}`);
                // Show a success message to the user
                setLimitMessage(`✅ ${result.message}`);
                // Refresh the history after limiting
                if (showHistory) {
                    fetchTestHistory();
                }
            } else {
                console.error('Failed to limit test history:', await response.text());
                setLimitMessage('❌ Failed to limit test history');
            }
        } catch (error) {
            console.error('Error limiting test history:', error);
            setLimitMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
        }
    };
    /**
   * Clear all test history for this profile and component
   */ const clearAllTestHistory = async ()=>{
        if (!profileId) {
            console.log("Cannot clear history: No profile ID provided");
            return;
        }
        // First confirm with the user
        if (!window.confirm("Are you sure you want to clear ALL test history for PCS?\nThis action cannot be undone.")) {
            return;
        }
        setHistoryLoading(true);
        try {
            const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=PCS`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });
            if (response.ok) {
                const result = await response.json();
                console.log(`Cleared test history: ${result.message}`);
                // Show success message
                setCleanupMessage(`✅ ${result.message}`);
                // Clear the local state
                setTestHistory([]);
                // Also clear the localStorage cache
                localStorage.removeItem(`pcs_real_history_${profileId}`);
                localStorage.removeItem(`pcs_sim_history_${profileId}`);
            } else {
                console.error("Failed to clear test history:", await response.text());
                setCleanupMessage(`❌ Failed to clear test history: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error clearing test history:", error);
            setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
        } finally{
            setHistoryLoading(false);
        }
    };
    /**
   * Delete a single test history item
   */ const deleteTestHistoryItem = async (itemId)=>{
        // Confirm with the user
        if (!window.confirm("Are you sure you want to delete this test history item?\nThis action cannot be undone.")) {
            return;
        }
        try {
            const response = await fetch(`${API_URL}/test-results/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });
            if (response.ok) {
                const result = await response.json();
                console.log(`Deleted test history item: ${result.message}`);
                // Update the local state by removing the deleted item
                setTestHistory((prev)=>prev.filter((item)=>item.id !== itemId));
                // Show a temporary message
                setCleanupMessage(`✅ Test result ${itemId} has been deleted`);
                // Hide the message after a few seconds
                setTimeout(()=>{
                    setCleanupMessage(null);
                }, 3000);
            } else {
                console.error("Failed to delete test history item:", await response.text());
                setCleanupMessage(`❌ Failed to delete test history item: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error deleting test history item:", error);
            setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
        }
    };
    // Add functions for multi-select mode
    /**
   * Toggle multi-select mode
   */ const toggleMultiSelectMode = ()=>{
        setIsMultiSelectMode(!isMultiSelectMode);
        if (isMultiSelectMode) {
            // If turning off multi-select mode, clear all selections
            setSelectedItems([]);
        }
    };
    /**
   * Toggle selection of a single history item
   */ const toggleItemSelection = (itemId)=>{
        setSelectedItems((prev)=>{
            if (prev.includes(itemId)) {
                return prev.filter((id)=>id !== itemId);
            } else {
                return [
                    ...prev,
                    itemId
                ];
            }
        });
    };
    /**
   * Select all visible history items
   */ const selectAllItems = ()=>{
        setSelectedItems(testHistory.map((item)=>item.id));
    };
    /**
   * Deselect all history items
   */ const deselectAllItems = ()=>{
        setSelectedItems([]);
    };
    /**
   * Delete all selected items
   */ const deleteSelectedItems = async ()=>{
        if (selectedItems.length === 0) {
            return;
        }
        // Confirm the deletion
        if (!window.confirm(`Are you sure you want to delete ${selectedItems.length} selected items? This action cannot be undone.`)) {
            return;
        }
        setHistoryLoading(true);
        let successCount = 0;
        let errorCount = 0;
        try {
            // Process each selected item with individual API calls
            for (const itemId of selectedItems){
                try {
                    const response = await fetch(`${API_URL}/test-results/${itemId}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        mode: 'cors'
                    });
                    if (response.ok) {
                        successCount++;
                    } else {
                        errorCount++;
                        console.error(`Failed to delete item ${itemId}:`, await response.text());
                    }
                } catch (error) {
                    errorCount++;
                    console.error(`Error deleting item ${itemId}:`, error);
                }
            }
            // Update the message about success/failure
            if (successCount > 0 && errorCount === 0) {
                setCleanupMessage(`✅ Successfully deleted ${successCount} items`);
            } else if (successCount > 0 && errorCount > 0) {
                setCleanupMessage(`⚠️ Partially successful: Deleted ${successCount} items, but failed to delete ${errorCount} items`);
            } else {
                setCleanupMessage(`❌ Failed to delete any of the ${selectedItems.length} selected items`);
            }
            // Update the test history if any items were successfully deleted
            if (successCount > 0) {
                setTestHistory((prev)=>prev.filter((item)=>!selectedItems.includes(item.id)));
            }
            // Clear the selection after deletion
            setSelectedItems([]);
        } catch (error) {
            console.error("Error during bulk deletion:", error);
            setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
        } finally{
            setHistoryLoading(false);
        }
    };
    // Optionally add automatic cleanup on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profileId) {
            // Automatically limit history to 30 records when the component mounts
            limitTestHistory(30);
        }
    }, [
        profileId
    ]); // Only run when profileId changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testPanel,
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                    lineNumber: 836,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                lineNumber: 835,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabsContainer,
                style: {
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    padding: '8px',
                    borderRadius: '8px',
                    marginBottom: '16px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowHistory(false),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabButton} ${!showHistory ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabButtonActive : ''}`,
                        style: {
                            padding: '8px 16px',
                            borderRadius: '6px',
                            backgroundColor: !showHistory ? isDarkMode ? '#4f46e5' : '#3b82f6' : 'transparent',
                            color: !showHistory ? 'white' : isDarkMode ? '#e5e7eb' : '#374151',
                            border: 'none',
                            fontWeight: 500,
                            cursor: 'pointer'
                        },
                        children: "Current Test"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                        lineNumber: 846,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowHistory(true),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabButton} ${showHistory ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabButtonActive : ''}`,
                        style: {
                            padding: '8px 16px',
                            borderRadius: '6px',
                            backgroundColor: showHistory ? isDarkMode ? '#4f46e5' : '#3b82f6' : 'transparent',
                            color: showHistory ? 'white' : isDarkMode ? '#e5e7eb' : '#374151',
                            border: 'none',
                            fontWeight: 500,
                            cursor: 'pointer'
                        },
                        children: "Test History"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                        lineNumber: 861,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            !showHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 897,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 896,
                                            columnNumber: 17
                                        }, this),
                                        "PCS Test Status"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 895,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 888,
                                columnNumber: 13
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 906,
                                                        columnNumber: 19
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 905,
                                                columnNumber: 17
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
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 913,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 904,
                                        columnNumber: 15
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 929,
                                                columnNumber: 17
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
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 949,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 23
                                                                }, this),
                                                                option
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 938,
                                                            columnNumber: 21
                                                        }, this)),
                                                    options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                            fontStyle: 'italic',
                                                            fontSize: '13px'
                                                        },
                                                        children: "No specific options selected. Running with defaults."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 936,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 928,
                                        columnNumber: 15
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 976,
                                                            columnNumber: 7
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 5
                                                    }, this),
                                                    "Connection Mode"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 974,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge}`,
                                                style: {
                                                    backgroundColor: detectedSimulation ? isDarkMode ? 'rgba(245, 158, 11, 0.2)' : '#fffbeb' : isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5',
                                                    color: detectedSimulation ? isDarkMode ? '#fbbf24' : '#d97706' : isDarkMode ? '#34d399' : '#047857'
                                                },
                                                children: detectedSimulation ? 'SIMULATION' : 'REAL SOCKET'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 980,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 967,
                                        columnNumber: 1
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
                                                            d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1001,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 19
                                                    }, this),
                                                    "SD Card Testing"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 999,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${enableSDTest ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorWaiting}`,
                                                children: enableSDTest ? 'ENABLED' : 'DISABLED'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 992,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startTest,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                        disabled: isRunning,
                                        style: {
                                            backgroundColor: isRunning ? '#9ca3af' : hasRunTest ? '#4f46e5' : '#10b981',
                                            color: 'white'
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 21
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1032,
                                                    columnNumber: 21
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1040,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 21
                                                }, this),
                                                "Run Test"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 903,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                        lineNumber: 881,
                        columnNumber: 11
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1069,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Firmware Information"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1075,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1058,
                                        columnNumber: 17
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1088,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1087,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoContent,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoLabel,
                                                            style: {
                                                                color: isDarkMode ? "#9ca3af" : "#6b7280"
                                                            },
                                                            children: "PCS Firmware Version"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1092,
                                                            columnNumber: 23
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1098,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1091,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1079,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1078,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 1051,
                                columnNumber: 15
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
                                                            d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1127,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1126,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Power Measurements"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1133,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1116,
                                        columnNumber: 17
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
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1151,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                },
                                                                children: "Value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1152,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                },
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1153,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1150,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 21
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
                                                                    children: "PCS Voltage (On)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1158,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        parseFloat(results.on.voltage).toFixed(3),
                                                                        " V"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1159,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.on.pass ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                        children: results.on.pass ? "PASS" : "FAIL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1161,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1157,
                                                            columnNumber: 23
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
                                                                    children: "PCS Current (On)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1170,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        parseFloat(results.on.current).toFixed(3),
                                                                        " A"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1171,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1172,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "PCS PS 3V3 I"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1176,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.vi.ps3v3I,
                                                                        " mA"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1177,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1178,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1175,
                                                            columnNumber: 23
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
                                                                    children: "PCS PS 5V I"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1182,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.vi.ps5I,
                                                                        " mA"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1183,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1184,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1181,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "PCS Voltage (Off)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1188,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        parseFloat(results.off.voltage).toFixed(3),
                                                                        " V"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1189,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${results.off.pass ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                        children: results.off.pass ? "PASS" : "FAIL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1191,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1190,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1187,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1137,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 1109,
                                columnNumber: 15
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
                                            background: isDarkMode ? "linear-gradient(to right, #0e7490, #0ea5e9)" : "linear-gradient(to right, #e0f2fe, #bae6fd)",
                                            color: isDarkMode ? "#bae6fd" : "#0369a1"
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1222,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 21
                                                    }, this),
                                                    "System Status"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1228,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1211,
                                        columnNumber: 17
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
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1246,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                },
                                                                children: "Initial Value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1247,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                style: {
                                                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                },
                                                                children: "Final Value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1248,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1245,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1238,
                                                    columnNumber: 21
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
                                                                    children: "PCS Time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1253,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: results.status.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: results.statusAfterTest.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1255,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1252,
                                                            columnNumber: 23
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
                                                                    children: "PCS Uptime"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1259,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.status.uptime,
                                                                        " sec"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1260,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.statusAfterTest.uptime,
                                                                        " sec"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1261,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Store Period"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1265,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.status.storePeriod,
                                                                        " sec"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1266,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.statusAfterTest.storePeriod,
                                                                        " sec"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1267,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 23
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
                                                                    children: "Uptime Session"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1271,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.status.uptimeSession,
                                                                        " sec"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1272,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: [
                                                                        results.statusAfterTest.uptimeSession,
                                                                        " sec"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1273,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1270,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Reset Count"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1277,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: results.status.resetCount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1278,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: results.statusAfterTest.resetCount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1279,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1276,
                                                            columnNumber: 23
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
                                                                    children: "Reset Source"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1283,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: results.status.resetSource
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1284,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: results.statusAfterTest.resetSource
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1285,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1282,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1231,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 1204,
                                columnNumber: 15
                            }, this),
                            enableSDTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1312,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 23
                                                    }, this),
                                                    "SD Card Test Results"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1310,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1318,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1301,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '16px',
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    backgroundColor: results.sdCard.pass ? isDarkMode ? 'rgba(4, 120, 87, 0.2)' : '#ecfdf5' : isDarkMode ? 'rgba(185, 28, 28, 0.2)' : '#fef2f2',
                                                    color: results.sdCard.pass ? isDarkMode ? '#a7f3d0' : '#047857' : isDarkMode ? '#fee2e2' : '#b91c1c',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    results.sdCard.pass ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1338,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1337,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1342,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1341,
                                                        columnNumber: 25
                                                    }, this),
                                                    "SD Card Test: ",
                                                    results.sdCard.pass ? 'PASS' : 'FAIL'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1322,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                                                    children: "Counter"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1362,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Before Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1363,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "After Test"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Change"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1365,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1361,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1354,
                                                        columnNumber: 23
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
                                                                        children: "Write Success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1370,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.before.writeSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1371,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.after.writeSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1372,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                                                            color: safeParseInt(results.sdCard.after.writeSuccess) > safeParseInt(results.sdCard.before.writeSuccess) ? isDarkMode ? "#a7f3d0" : "#047857" : isDarkMode ? "#fee2e2" : "#b91c1c"
                                                                        },
                                                                        children: calculateChange(results.sdCard.before.writeSuccess, results.sdCard.after.writeSuccess)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1373,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1369,
                                                                columnNumber: 23
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
                                                                        children: "Read Success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1384,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.before.readSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1385,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.after.readSuccess
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1386,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                                                            color: safeParseInt(results.sdCard.after.readSuccess) > safeParseInt(results.sdCard.before.readSuccess) ? isDarkMode ? "#a7f3d0" : "#047857" : isDarkMode ? "#fee2e2" : "#b91c1c"
                                                                        },
                                                                        children: calculateChange(results.sdCard.before.readSuccess, results.sdCard.after.readSuccess)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: "Write Fail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1398,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.before.writeFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.after.writeFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                                                            color: safeParseInt(results.sdCard.after.writeFail) === safeParseInt(results.sdCard.before.writeFail) ? isDarkMode ? "#a7f3d0" : "#047857" : isDarkMode ? "#fee2e2" : "#b91c1c"
                                                                        },
                                                                        children: calculateChange(results.sdCard.before.writeFail, results.sdCard.after.writeFail)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1401,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1397,
                                                                columnNumber: 25
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
                                                                        children: "Read Fail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1412,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.before.readFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1413,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.sdCard.after.readFail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1414,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                                                            color: safeParseInt(results.sdCard.after.readFail) === safeParseInt(results.sdCard.before.readFail) ? isDarkMode ? "#a7f3d0" : "#047857" : isDarkMode ? "#fee2e2" : "#b91c1c"
                                                                        },
                                                                        children: calculateChange(results.sdCard.before.readFail, results.sdCard.after.readFail)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1415,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                lineNumber: 1411,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1348,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1321,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 1294,
                                columnNumber: 17
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1439,
                                            columnNumber: 19
                                        }, this),
                                        "Generate Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1431,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                lineNumber: 1430,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                        lineNumber: 1050,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /* Test History Panel */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                            background: isDarkMode ? "linear-gradient(to right, #1e40af, #3b82f6)" : "linear-gradient(to right, #dbeafe, #eff6ff)"
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
                                        d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1469,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1468,
                                    columnNumber: 15
                                }, this),
                                "PCS Test History"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                            lineNumber: 1467,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                        lineNumber: 1457,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                        children: historyLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '20px',
                                color: isDarkMode ? '#d1d5db' : '#6b7280'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinnerIcon,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    style: {
                                        margin: '0 auto 8px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 12a9 9 0 11-6.219-8.56"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                        lineNumber: 1483,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Loading test history..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1485,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                            lineNumber: 1477,
                            columnNumber: 15
                        }, this) : testHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '20px',
                                color: isDarkMode ? '#d1d5db' : '#6b7280',
                                fontStyle: 'italic'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No test history available for this profile."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1494,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginTop: '8px',
                                        fontSize: '14px'
                                    },
                                    children: "Run a test to start building your history."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1495,
                                    columnNumber: 17
                                }, this),
                                !profileId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '16px',
                                        padding: '12px',
                                        backgroundColor: isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                                        borderRadius: '6px',
                                        color: isDarkMode ? '#f87171' : '#b91c1c',
                                        fontSize: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1508,
                                            columnNumber: 21
                                        }, this),
                                        " No profile ID detected. Test history requires a valid profile selection."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                            lineNumber: 1488,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                color: isDarkMode ? '#d1d5db' : '#4b5563',
                                                fontWeight: 500
                                            },
                                            children: "Select Metric:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1516,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedMetric,
                                            onChange: (e)=>setSelectedMetric(e.target.value),
                                            style: {
                                                width: '100%',
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                color: isDarkMode ? '#e5e7eb' : '#111827',
                                                fontSize: '14px'
                                            },
                                            children: metricOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.value, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1538,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1524,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1515,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '300px',
                                        marginBottom: '20px',
                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                        padding: '16px',
                                        borderRadius: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                marginBottom: '12px',
                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                            },
                                            children: [
                                                metricOptions.find((m)=>m.value === selectedMetric)?.label,
                                                " Trend"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1553,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TestHistoryChart"], {
                                            data: testHistory,
                                            metricPath: selectedMetric,
                                            metricLabel: metricOptions.find((m)=>m.value === selectedMetric)?.label || '',
                                            isDarkMode: isDarkMode
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1562,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1546,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: isDarkMode ? '#e5e7eb' : '#111827',
                                                    marginBottom: '6px'
                                                },
                                                children: "Test History Records"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                lineNumber: 1579,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1578,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: toggleMultiSelectMode,
                                                    style: {
                                                        backgroundColor: isMultiSelectMode ? isDarkMode ? '#4f46e5' : '#6366f1' : isDarkMode ? '#1f2937' : '#f3f4f6',
                                                        color: isMultiSelectMode ? 'white' : isDarkMode ? '#e5e7eb' : '#374151',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        padding: '6px 12px',
                                                        fontSize: '13px',
                                                        fontWeight: 500,
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        transition: 'all 0.2s ease'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1613,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1614,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1612,
                                                            columnNumber: 23
                                                        }, this),
                                                        isMultiSelectMode ? 'Exit Selection Mode' : 'Select Items'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 21
                                                }, this),
                                                isMultiSelectMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: selectAllItems,
                                                            style: {
                                                                backgroundColor: 'transparent',
                                                                color: isDarkMode ? '#93c5fd' : '#2563eb',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                padding: '6px 8px',
                                                                fontSize: '13px',
                                                                fontWeight: 500,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "Select All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1622,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: deselectAllItems,
                                                            style: {
                                                                backgroundColor: 'transparent',
                                                                color: isDarkMode ? '#93c5fd' : '#2563eb',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                padding: '6px 8px',
                                                                fontSize: '13px',
                                                                fontWeight: 500,
                                                                cursor: 'pointer'
                                                            },
                                                            children: "Deselect All"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1638,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: deleteSelectedItems,
                                                            disabled: selectedItems.length === 0,
                                                            style: {
                                                                backgroundColor: selectedItems.length === 0 ? isDarkMode ? '#6b7280' : '#9ca3af' : isDarkMode ? '#dc2626' : '#ef4444',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                padding: '6px 12px',
                                                                fontSize: '13px',
                                                                fontWeight: 500,
                                                                cursor: selectedItems.length === 0 ? 'not-allowed' : 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '6px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                        lineNumber: 1674,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                                    lineNumber: 1673,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Delete Selected (",
                                                                selectedItems.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1654,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1589,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        backgroundColor: isDarkMode ? '#1e293b' : '#f0f9ff',
                                        border: '1px solid',
                                        borderColor: isDarkMode ? '#475569' : '#bfdbfe'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                marginBottom: '8px',
                                                color: isDarkMode ? '#e5e7eb' : '#1e40af',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1687,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1686,
                                                    columnNumber: 21
                                                }, this),
                                                "Test History Information"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1685,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '14px',
                                                color: isDarkMode ? '#cbd5e1' : '#334155'
                                            },
                                            children: [
                                                "This chart shows only ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "real test data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1692,
                                                    columnNumber: 43
                                                }, this),
                                                " from actual hardware tests. Simulated test results are not included in this history or visualization."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1691,
                                            columnNumber: 19
                                        }, this),
                                        testHistory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                marginTop: '10px',
                                                fontSize: '14px',
                                                color: isDarkMode ? '#fb923c' : '#c2410c',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1698,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "8",
                                                            x2: "12",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1699,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "16",
                                                            x2: "12.01",
                                                            y2: "16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1700,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1697,
                                                    columnNumber: 23
                                                }, this),
                                                "No real test data is available yet. Run tests in real mode (not simulation) to collect actual data."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1696,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1684,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TestHistoryTable"], {
                                    testHistory: testHistory,
                                    isDarkMode: isDarkMode,
                                    onViewDetails: (item)=>setSelectedHistoryItem(item)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1708,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                marginBottom: '12px',
                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                            },
                                            children: "Key Metrics Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1716,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Avg. PCS Voltage (On)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1737,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                const values = testHistory.map((item)=>extractValue(item.results, 'on.voltage')).filter((v)=>v !== null);
                                                                if (values.length === 0) return 'N/A';
                                                                const avg = values.reduce((sum, v)=>sum + v, 0) / values.length;
                                                                return `${avg.toFixed(2)} V`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1744,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1731,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Avg. PCS Current (On)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1769,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                const values = testHistory.map((item)=>extractValue(item.results, 'on.current')).filter((v)=>v !== null);
                                                                if (values.length === 0) return 'N/A';
                                                                const avg = values.reduce((sum, v)=>sum + v, 0) / values.length;
                                                                return `${avg.toFixed(3)} A`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1776,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1763,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "SD Card Pass Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1801,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                const sdTests = testHistory.filter((item)=>item.results?.sdCard?.pass !== undefined) // or another property that definitely exists
                                                                .map((item)=>item.results?.sdCard?.pass);
                                                                if (!sdTests.length) return 'N/A';
                                                                const passCount = sdTests.filter(Boolean).length;
                                                                const passRate = passCount / sdTests.length * 100;
                                                                return `${passRate.toFixed(1)}%`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1808,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1795,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Overall Success Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1835,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                if (testHistory.length === 0) return 'N/A';
                                                                const successes = testHistory.filter((item)=>item.status === 'completed').length;
                                                                const successRate = successes / testHistory.length * 100;
                                                                return `${successRate.toFixed(0)}%`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                            lineNumber: 1842,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1829,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1725,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1715,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '20px',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        gap: '10px',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearAllTestHistory,
                                            style: {
                                                backgroundColor: '#dc2626',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                padding: '8px 16px',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1880,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1879,
                                                    columnNumber: 21
                                                }, this),
                                                "Clear All History"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1863,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>cleanupSimulatedData(),
                                            style: {
                                                backgroundColor: '#ef4444',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                padding: '8px 16px',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1903,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1902,
                                                    columnNumber: 21
                                                }, this),
                                                "Clean Up Simulated Data"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1886,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>limitTestHistory(30),
                                            style: {
                                                backgroundColor: '#3b82f6',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                padding: '8px 16px',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1926,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1925,
                                                    columnNumber: 21
                                                }, this),
                                                "Limit History (30 Records)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1909,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                // Implement history export functionality
                                                const historyData = JSON.stringify(testHistory, null, 2);
                                                const blob = new Blob([
                                                    historyData
                                                ], {
                                                    type: 'application/json'
                                                });
                                                const url = URL.createObjectURL(blob);
                                                const a = document.createElement('a');
                                                a.href = url;
                                                a.download = `pcs_test_history_${profileId || 'unknown'}.json`;
                                                document.body.appendChild(a);
                                                a.click();
                                                document.body.removeChild(a);
                                                URL.revokeObjectURL(url);
                                            },
                                            style: {
                                                backgroundColor: '#10b981',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                padding: '8px 16px',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                        lineNumber: 1960,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                                    lineNumber: 1959,
                                                    columnNumber: 21
                                                }, this),
                                                "Export Test History"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1931,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1861,
                                    columnNumber: 17
                                }, this),
                                (cleanupMessage || limitMessage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '12px',
                                        padding: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                        fontSize: '14px'
                                    },
                                    children: [
                                        cleanupMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: cleanupMessage.includes('✅') ? isDarkMode ? '#34d399' : '#047857' : isDarkMode ? '#f87171' : '#b91c1c',
                                                marginBottom: limitMessage ? '8px' : '0'
                                            },
                                            children: cleanupMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1977,
                                            columnNumber: 23
                                        }, this),
                                        limitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: limitMessage.includes('✅') ? isDarkMode ? '#34d399' : '#047857' : isDarkMode ? '#f87171' : '#b91c1c'
                                            },
                                            children: limitMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                            lineNumber: 1988,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                                    lineNumber: 1968,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                        lineNumber: 1475,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                lineNumber: 1450,
                columnNumber: 9
            }, this),
            selectedHistoryItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestDetailsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TestDetailsModal"], {
                test: selectedHistoryItem,
                onClose: ()=>setSelectedHistoryItem(null),
                isDarkMode: isDarkMode
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
                lineNumber: 2006,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/PCSTestPanel.tsx",
        lineNumber: 833,
        columnNumber: 5
    }, this);
};
}}),

};

//# sourceMappingURL=src_components_CheckoutTestProgress_components_PCSTestPanel_tsx_9253f8e3._.js.map