(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_CheckoutTestProgress_components_HEPSTestPanel_tsx_71db9fe6._.js", {

"[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx
__turbopack_context__.s({
    "HEPSTestPanel": (()=>HEPSTestPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/OBC1TestPanel.module.css [app-client] (css module)"); // Reuse the same styles as OBC1TestPanel
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
// Import the HEPS-specific functions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$hepsCheckout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/checkout/hepsCheckout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$hepsReport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reports/hepsReport.ts [app-client] (ecmascript)");
// Import test history components - ensuring these are actually used
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/TestHistoryChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/TestHistoryTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CheckoutTestProgress/components/TestDetailsModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
_c = SimulationBadge;
// HEPS Parameter Display Component
const HEPSParameterDisplay = ({ parameters, results, groupName, isDarkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    color: isDarkMode ? "#d1d5db" : "#374151"
                },
                children: [
                    groupName,
                    " Parameters"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                style: {
                    color: isDarkMode ? "#e5e7eb" : "inherit",
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '14px'
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
                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                        padding: '8px 12px',
                                        textAlign: 'left'
                                    },
                                    children: "Parameter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                        padding: '8px 12px',
                                        textAlign: 'left'
                                    },
                                    children: "Value"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: parameters.map((param, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: index % 2 === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableRowAlt : '',
                                style: {
                                    backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                            padding: '8px 12px'
                                        },
                                        children: param
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                            padding: '8px 12px'
                                        },
                                        children: results?.rawParameters?.[param] || 'N/A'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, param, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c1 = HEPSParameterDisplay;
// Define all HEPS parameters from hepsCheckout.ts for reference display
const hepsParameters = {
    canSetting: [
        "OBC1_Intercomm_PriSec_Cfg"
    ],
    canVar: [
        "OBC1_InterComm_Heps1_Pcm_Tx",
        "OBC1_InterComm_Heps1_Psm1_Tx",
        "OBC1_InterComm_Heps1_Psm2_Tx",
        "OBC1_InterComm_Heps1_Pdm1_Tx",
        "OBC1_InterComm_Heps1_Pdm2_Tx",
        "OBC1_InterComm_Heps1_Pcm_Ack",
        "OBC1_InterComm_Heps1_Psm1_Ack",
        "OBC1_InterComm_Heps1_Psm2_Ack",
        "OBC1_InterComm_Heps1_Pdm1_Ack",
        "OBC1_InterComm_Heps1_Pdm2_Ack",
        "OBC1_InterComm_Heps1_Pcm_Timeout",
        "OBC1_InterComm_Heps1_Psm1_Timeout",
        "OBC1_InterComm_Heps1_Psm2_Timeout",
        "OBC1_InterComm_Heps1_Pdm1_Timeout",
        "OBC1_InterComm_Heps1_Pdm2_Timeout",
        "OBC1_InterComm_Heps1_Pcm_Error",
        "OBC1_InterComm_Heps1_Psm1_Error",
        "OBC1_InterComm_Heps1_Psm2_Error",
        "OBC1_InterComm_Heps1_Pdm1_Error",
        "OBC1_InterComm_Heps1_Pdm2_Error"
    ],
    batVi: [
        "HEPS1_PCM_BAT_V_1",
        "HEPS1_PCM_BAT_V_2",
        "HEPS1_PCM_BAT_V_3",
        "HEPS1_PCM_BAT_I_CHAR_1",
        "HEPS1_PCM_BAT_I_CHAR_2",
        "HEPS1_PCM_BAT_I_CHAR_3"
    ],
    batT: [
        "HEPS1_PSM1_BAT_TEMP1",
        "HEPS1_PSM1_BAT_TEMP2",
        "HEPS1_PSM1_BAT_TEMP3"
    ],
    saV: [
        "HEPS1_PCM_SA_V_1",
        "HEPS1_PCM_SA_V_2",
        "HEPS1_PCM_SA_V_3"
    ],
    saT1: [
        "HEPS1_PSM1_SA1_Y-_TEMP",
        "HEPS1_PSM1_SA2_Y-_TEMP"
    ],
    saT2: [
        "HEPS1_PSM2_SA3_Y-_TEMP",
        "HEPS1_PSM2_SA_BM_TEMP",
        "HEPS1_PSM2_SA1_Y+_TEMP",
        "HEPS1_PSM2_SA2_Y+_TEMP",
        "HEPS1_PSM2_SA3_Y+_TEMP"
    ],
    obnVi: [
        "HEPS1_PCM_OBN1_V",
        "HEPS1_PCM_OBN1_I",
        "HEPS1_PCM_OBN2_V",
        "HEPS1_PCM_OBN2_I",
        "HEPS1_PCM_AUX12_V"
    ],
    bcrIt: [
        "HEPS1_PCM_BCR1_I",
        "HEPS1_PCM_BCR2_I",
        "HEPS1_PCM_BCR3_I",
        "HEPS1_PCM_BCR1_TEMP",
        "HEPS1_PCM_BCR2_TEMP",
        "HEPS1_PCM_BCR3_TEMP"
    ],
    pcbT: [
        "HEPS1_PDM1_PCB_TEMP",
        "HEPS1_PDM2_PCB_TEMP"
    ],
    conv1V: [
        "HEPS1_PSM1_HDRM_CON1_V",
        "HEPS1_PSM1_5V_CON1_V",
        "HEPS1_PSM1_12V_CON1_V",
        "HEPS1_PSM1_15V_CON_V"
    ],
    conv2V: [
        "HEPS1_PSM2_HDRM_CON2_V",
        "HEPS1_PSM2_5V_CON2_V",
        "HEPS1_PSM2_12V_CON2_V"
    ],
    conv1T: [
        "HEPS1_PSM1_HDRM_CON1_TEMP",
        "HEPS1_PSM1_5V_CON1_TEMP",
        "HEPS1_PSM1_12V_CON1_TEMP",
        "HEPS1_PSM1_15V_CON1_TEMP"
    ],
    conv2T: [
        "HEPS1_PSM2_HDRM_CON2_TEMP",
        "HEPS1_PSM2_5V_CON2_TEMP",
        "HEPS1_PSM2_12V_CON2_TEMP"
    ],
    rlclVi: [
        "HEPS1_PDM2_OBC1_V",
        "HEPS1_PDM2_OBC1_I",
        "HEPS1_PDM1_OBC2_V",
        "HEPS1_PDM1_OBC2_I",
        "HEPS1_PDM1_S-BAND_V",
        "HEPS1_PDM1_S-BAND_I",
        "HEPS1_PDM2_UHF_V",
        "HEPS1_PDM2_UHF_I"
    ],
    lclVi: [
        "HEPS1_PDM2_ADCS_IF_V",
        "HEPS1_PDM2_ADCS-IF_I",
        "HEPS1_PDM2_ADCD_RW_V",
        "HEPS1_PDM2_ADCD_RW_I",
        "HEPS1_PDM2_GPS_5V_V",
        "HEPS1_PDM2_GPS_5V_I",
        "HEPS1_PDM1_ECU1_V",
        "HEPS1_PDM1_ECU1_I",
        "HEPS1_PDM1_THRU1_V",
        "HEPS1_PDM1_THRU1_I",
        "HEPS1_PDM2_ECU2_V",
        "HEPS1_PDM2_ECU2_I",
        "HEPS1_PDM2_THRU2_V",
        "HEPS1_PDM2_THRU2_I",
        "HEPS1_PDM2_PCS_V",
        "HEPS1_PDM2_PCS_I",
        "HEPS1_PDM1_OPT_CAM_V",
        "HEPS1_PDM1_OPT_CAM_I",
        "HEPS1_PDM1_X-BAND_V",
        "HEPS1_PDM1_X-BAND_I",
        "HEPS1_PDM1_AOD1_V",
        "HEPS1_PDM1_AOD1_I",
        "HEPS1_PDM2_AOD2_V",
        "HEPS1_PDM2_AOD2_I",
        "HEPS1_PDM1_CIP_V",
        "HEPS1_PDM1_CIP_I"
    ],
    hdrmVi: [
        "HEPS1_PDM1_HDRM1_ARM_V",
        "HEPS1_PDM1_HDRM1_SW01_V",
        "HEPS1_PDM1_HDRM1_SW01_I",
        "HEPS1_PDM1_HDRM1_SW02_V",
        "HEPS1_PDM1_HDRM1_SW03_V",
        "HEPS1_PDM1_HDRM1_SW02_I",
        "HEPS1_PDM1_HDRM1_SW03_I",
        "HEPS1_PDM2_HDRM2_ARM_V",
        "HEPS1_PDM2_HDRM2_SW01_V",
        "HEPS1_PDM2_HDRM2_SW01_I",
        "HEPS1_PDM2_HDRM2_SW02_V",
        "HEPS1_PDM2_HDRM2_SW03_V",
        "HEPS1_PDM2_HDRM2_SW02_I",
        "HEPS1_PDM2_HDRM2_SW03_I"
    ],
    heater1Vi: [
        "HEPS1_PSM1_HT1_LCL",
        "HEPS1_PSM1_BAT_HT1_V",
        "HEPS1_PSM1_BAT_HT1_I",
        "HEPS1_PSM1_THRU_HT1_V",
        "HEPS1_PSM1_THRU_HT1_I",
        "HEPS1_PSM1_CAM_HT1_V",
        "HEPS1_PSM1_CAM_HT1_I"
    ],
    heater2Vi: [
        "HEPS1_PSM2_HT2_LCL",
        "HEPS1_PSM2_BAT_HT2_V",
        "HEPS1_PSM2_BAT_HT2_I",
        "HEPS1_PSM2_THRU_HT2_V",
        "HEPS1_PSM2_THRU_HT2_I",
        "HEPS1_PSM2_CAM_HT2_V",
        "HEPS1_PSM2_CAM_HT2_I"
    ]
};
const HEPSTestPanel = ({ options, sock, onTestComplete, onTestError, onTestStart, isInitialRun, profileId })=>{
    _s();
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRunTest, setHasRunTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isForceSimulation, setIsForceSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add new states for test history
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testHistory, setTestHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyLoading, setHistoryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMetric, setSelectedMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('system.voltage');
    const [selectedHistoryItem, setSelectedHistoryItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detectedSimulation, setDetectedSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add state variables for messages
    const [cleanupMessage, setCleanupMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [limitMessage, setLimitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedItems, setSelectedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isMultiSelectMode, setIsMultiSelectMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add states for parameter display
    const [showParameters, setShowParameters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedParameterGroup, setSelectedParameterGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("canVar");
    // Determine if test options are enabled
    const enableHeaterTest = options.includes('Heater Test');
    const enableCurrentTest = options.includes('Current Measurement');
    const enablePowerCycle = options.includes('Power Cycle Test');
    const enableCANTest = options.includes('CAN Test');
    const enableBatteryTest = options.includes('Battery Test');
    const enableConverterTest = options.includes('Converter Test');
    // API URL
    const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
    // Available metrics for visualization - using exact parameter names from hepsCheckout.ts
    const metricOptions = [
        // System metrics
        {
            label: 'System Voltage',
            value: 'system.voltage',
            paramName: 'OBC1_Intercomm_PriSec_Cfg'
        },
        {
            label: 'System Current',
            value: 'system.current',
            paramName: 'OBC1_Intercomm_PriSec_Cfg'
        },
        {
            label: 'System Power',
            value: 'system.power',
            paramName: 'OBC1_Intercomm_PriSec_Cfg'
        },
        // Battery metrics - exact parameter names from hepsCheckout.ts
        {
            label: 'Battery 1 Voltage',
            value: 'battery.voltage1',
            paramName: 'HEPS1_PCM_BAT_V_1'
        },
        {
            label: 'Battery 2 Voltage',
            value: 'battery.voltage2',
            paramName: 'HEPS1_PCM_BAT_V_2'
        },
        {
            label: 'Battery 3 Voltage',
            value: 'battery.voltage3',
            paramName: 'HEPS1_PCM_BAT_V_3'
        },
        {
            label: 'Battery 1 Current',
            value: 'battery.current1',
            paramName: 'HEPS1_PCM_BAT_I_CHAR_1'
        },
        {
            label: 'Battery 2 Current',
            value: 'battery.current2',
            paramName: 'HEPS1_PCM_BAT_I_CHAR_2'
        },
        {
            label: 'Battery 3 Current',
            value: 'battery.current3',
            paramName: 'HEPS1_PCM_BAT_I_CHAR_3'
        },
        {
            label: 'Battery 1 Temperature',
            value: 'battery.temperature1',
            paramName: 'HEPS1_PSM1_BAT_TEMP1'
        },
        {
            label: 'Battery 2 Temperature',
            value: 'battery.temperature2',
            paramName: 'HEPS1_PSM1_BAT_TEMP2'
        },
        {
            label: 'Battery 3 Temperature',
            value: 'battery.temperature3',
            paramName: 'HEPS1_PSM1_BAT_TEMP3'
        },
        // Solar Array metrics - exact parameter names from hepsCheckout.ts
        {
            label: 'Solar Array 1 Voltage',
            value: 'solarArray.voltage1',
            paramName: 'HEPS1_PCM_SA_V_1'
        },
        {
            label: 'Solar Array 2 Voltage',
            value: 'solarArray.voltage2',
            paramName: 'HEPS1_PCM_SA_V_2'
        },
        {
            label: 'Solar Array 3 Voltage',
            value: 'solarArray.voltage3',
            paramName: 'HEPS1_PCM_SA_V_3'
        },
        {
            label: 'Solar Array Y- Temp 1',
            value: 'solarArray.tempYNeg1',
            paramName: 'HEPS1_PSM1_SA1_Y-_TEMP'
        },
        {
            label: 'Solar Array Y- Temp 2',
            value: 'solarArray.tempYNeg2',
            paramName: 'HEPS1_PSM1_SA2_Y-_TEMP'
        },
        {
            label: 'Solar Array Y- Temp 3',
            value: 'solarArray.tempYNeg3',
            paramName: 'HEPS1_PSM2_SA3_Y-_TEMP'
        },
        {
            label: 'Solar Array Body Mount Temp',
            value: 'solarArray.tempBodyMount',
            paramName: 'HEPS1_PSM2_SA_BM_TEMP'
        },
        {
            label: 'Solar Array Y+ Temp 1',
            value: 'solarArray.tempYPos1',
            paramName: 'HEPS1_PSM2_SA1_Y+_TEMP'
        },
        {
            label: 'Solar Array Y+ Temp 2',
            value: 'solarArray.tempYPos2',
            paramName: 'HEPS1_PSM2_SA2_Y+_TEMP'
        },
        {
            label: 'Solar Array Y+ Temp 3',
            value: 'solarArray.tempYPos3',
            paramName: 'HEPS1_PSM2_SA3_Y+_TEMP'
        },
        // OBN metrics - exact parameter names from hepsCheckout.ts
        {
            label: 'OBN 1 Voltage',
            value: 'obn.voltage1',
            paramName: 'HEPS1_PCM_OBN1_V'
        },
        {
            label: 'OBN 2 Voltage',
            value: 'obn.voltage2',
            paramName: 'HEPS1_PCM_OBN2_V'
        },
        {
            label: 'OBN 1 Current',
            value: 'obn.current1',
            paramName: 'HEPS1_PCM_OBN1_I'
        },
        {
            label: 'OBN 2 Current',
            value: 'obn.current2',
            paramName: 'HEPS1_PCM_OBN2_I'
        },
        {
            label: 'OBN AUX Voltage',
            value: 'obn.auxVoltage',
            paramName: 'HEPS1_PCM_AUX12_V'
        },
        // BCR metrics - exact parameter names from hepsCheckout.ts
        {
            label: 'BCR 1 Current',
            value: 'bcr.current1',
            paramName: 'HEPS1_PCM_BCR1_I'
        },
        {
            label: 'BCR 2 Current',
            value: 'bcr.current2',
            paramName: 'HEPS1_PCM_BCR2_I'
        },
        {
            label: 'BCR 3 Current',
            value: 'bcr.current3',
            paramName: 'HEPS1_PCM_BCR3_I'
        },
        {
            label: 'BCR 1 Temperature',
            value: 'bcr.temp1',
            paramName: 'HEPS1_PCM_BCR1_TEMP'
        },
        {
            label: 'BCR 2 Temperature',
            value: 'bcr.temp2',
            paramName: 'HEPS1_PCM_BCR2_TEMP'
        },
        {
            label: 'BCR 3 Temperature',
            value: 'bcr.temp3',
            paramName: 'HEPS1_PCM_BCR3_TEMP'
        },
        // PDM Temperature - exact parameter names from hepsCheckout.ts
        {
            label: 'PDM 1 Temperature',
            value: 'pdmTemperature.pdm1',
            paramName: 'HEPS1_PDM1_PCB_TEMP'
        },
        {
            label: 'PDM 2 Temperature',
            value: 'pdmTemperature.pdm2',
            paramName: 'HEPS1_PDM2_PCB_TEMP'
        },
        // Converters - exact parameter names from hepsCheckout.ts
        {
            label: 'HDRM 12V Converter 1 Voltage',
            value: 'converters.hdrm12v1_voltage',
            paramName: 'HEPS1_PSM1_HDRM_CON1_V'
        },
        {
            label: '5V Converter 1 Voltage',
            value: 'converters.v5_1_voltage',
            paramName: 'HEPS1_PSM1_5V_CON1_V'
        },
        {
            label: '12V Converter 1 Voltage',
            value: 'converters.v12_1_voltage',
            paramName: 'HEPS1_PSM1_12V_CON1_V'
        },
        {
            label: '15V Converter Voltage',
            value: 'converters.v15_voltage',
            paramName: 'HEPS1_PSM1_15V_CON_V'
        },
        {
            label: 'HDRM 12V Converter 2 Voltage',
            value: 'converters.hdrm12v2_voltage',
            paramName: 'HEPS1_PSM2_HDRM_CON2_V'
        },
        {
            label: '5V Converter 2 Voltage',
            value: 'converters.v5_2_voltage',
            paramName: 'HEPS1_PSM2_5V_CON2_V'
        },
        {
            label: '12V Converter 2 Voltage',
            value: 'converters.v12_2_voltage',
            paramName: 'HEPS1_PSM2_12V_CON2_V'
        },
        // Converter temperatures - exact parameter names from hepsCheckout.ts
        {
            label: 'HDRM 12V Converter 1 Temp',
            value: 'converters.hdrm12v1_temp',
            paramName: 'HEPS1_PSM1_HDRM_CON1_TEMP'
        },
        {
            label: '5V Converter 1 Temp',
            value: 'converters.v5_1_temp',
            paramName: 'HEPS1_PSM1_5V_CON1_TEMP'
        },
        {
            label: '12V Converter 1 Temp',
            value: 'converters.v12_1_temp',
            paramName: 'HEPS1_PSM1_12V_CON1_TEMP'
        },
        {
            label: '15V Converter Temp',
            value: 'converters.v15_temp',
            paramName: 'HEPS1_PSM1_15V_CON1_TEMP'
        },
        {
            label: 'HDRM 12V Converter 2 Temp',
            value: 'converters.hdrm12v2_temp',
            paramName: 'HEPS1_PSM2_HDRM_CON2_TEMP'
        },
        {
            label: '5V Converter 2 Temp',
            value: 'converters.v5_2_temp',
            paramName: 'HEPS1_PSM2_5V_CON2_TEMP'
        },
        {
            label: '12V Converter 2 Temp',
            value: 'converters.v12_2_temp',
            paramName: 'HEPS1_PSM2_12V_CON2_TEMP'
        },
        // Loads - exact parameter names from hepsCheckout.ts
        {
            label: 'OBC-1 Voltage',
            value: 'loads.obc1_voltage',
            paramName: 'HEPS1_PDM2_OBC1_V'
        },
        {
            label: 'OBC-1 Current',
            value: 'loads.obc1_current',
            paramName: 'HEPS1_PDM2_OBC1_I'
        },
        {
            label: 'OBC-2 Voltage',
            value: 'loads.obc2_voltage',
            paramName: 'HEPS1_PDM1_OBC2_V'
        },
        {
            label: 'OBC-2 Current',
            value: 'loads.obc2_current',
            paramName: 'HEPS1_PDM1_OBC2_I'
        },
        {
            label: 'S-Band Voltage',
            value: 'loads.sband_voltage',
            paramName: 'HEPS1_PDM1_S-BAND_V'
        },
        {
            label: 'S-Band Current',
            value: 'loads.sband_current',
            paramName: 'HEPS1_PDM1_S-BAND_I'
        },
        {
            label: 'UHF Voltage',
            value: 'loads.uhf_voltage',
            paramName: 'HEPS1_PDM2_UHF_V'
        },
        {
            label: 'UHF Current',
            value: 'loads.uhf_current',
            paramName: 'HEPS1_PDM2_UHF_I'
        },
        // Heater metrics - with exact parameter names
        {
            label: 'Heater 1 Status',
            value: 'heaters[0].status',
            paramName: 'HEPS1_PSM1_HT1_LCL'
        },
        {
            label: 'Heater 1 Voltage',
            value: 'heaters[0].voltage',
            paramName: 'HEPS1_PSM1_BAT_HT1_V'
        },
        {
            label: 'Heater 1 Current',
            value: 'heaters[0].current',
            paramName: 'HEPS1_PSM1_BAT_HT1_I'
        },
        {
            label: 'Heater 2 Status',
            value: 'heaters[1].status',
            paramName: 'HEPS1_PSM2_HT2_LCL'
        },
        {
            label: 'Heater 2 Voltage',
            value: 'heaters[1].voltage',
            paramName: 'HEPS1_PSM2_BAT_HT2_V'
        },
        {
            label: 'Heater 2 Current',
            value: 'heaters[1].current',
            paramName: 'HEPS1_PSM2_BAT_HT2_I'
        }
    ];
    // Check for dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HEPSTestPanel.useEffect": ()=>{
            const checkDarkMode = {
                "HEPSTestPanel.useEffect.checkDarkMode": ()=>{
                    // Continued from previous artifact
                    setIsDarkMode(document.documentElement.classList.contains("dark"));
                }
            }["HEPSTestPanel.useEffect.checkDarkMode"];
            // Initial check
            checkDarkMode();
            // Watch for theme changes
            const observer = new MutationObserver({
                "HEPSTestPanel.useEffect": ()=>{
                    checkDarkMode();
                }
            }["HEPSTestPanel.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "HEPSTestPanel.useEffect": ()=>observer.disconnect()
            })["HEPSTestPanel.useEffect"];
        }
    }["HEPSTestPanel.useEffect"], []);
    // Check if we have a real socket or need simulation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HEPSTestPanel.useEffect": ()=>{
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
    }["HEPSTestPanel.useEffect"], [
        sock
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HEPSTestPanel.useEffect": ()=>{
            // Only run test automatically if this is the initial run and we haven't run it yet
            if (isInitialRun && !hasRunTest && !isRunning) {
                console.log("Auto-starting test because isInitialRun =", isInitialRun);
                startTest();
            }
        }
    }["HEPSTestPanel.useEffect"], [
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
            console.log(`Fetching test history for profile ${profileId} and component HEPS`);
            const response = await fetch(`${API_URL}/test-results/${profileId}?component=HEPS`, {
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
                    // Must have system values to be a legitimate test
                    const hasSystemData = item.results.system && (item.results.system.voltage || item.results.system.current || item.results.system.powerStatus);
                    // Must have some component data - check for any primary component data
                    const hasComponentData = item.results.battery && Object.values(item.results.battery).some((val)=>val) || item.results.solarArray && Object.values(item.results.solarArray).some((val)=>val) || item.results.obn && Object.values(item.results.obn).some((val)=>val) || item.results.bcr && Object.values(item.results.bcr).some((val)=>val) || item.results.converters && Object.values(item.results.converters).some((val)=>val) || item.results.loads && Object.values(item.results.loads).some((val)=>val) || item.results.heaters && item.results.heaters.length > 0;
                    // Consider it a real test if it has both system and component data
                    return hasSystemData && hasComponentData;
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
                const localHistoryKey = `heps_real_history_${profileId}`;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HEPSTestPanel.useEffect": ()=>{
            if (showHistory) {
                fetchTestHistory();
            }
        }
    }["HEPSTestPanel.useEffect"], [
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
            // Store raw parameter information for display
            const rawParameters = {
                canSetting: hepsParameters.canSetting,
                canVar: hepsParameters.canVar,
                batVi: hepsParameters.batVi,
                batT: hepsParameters.batT,
                saV: hepsParameters.saV,
                saT1: hepsParameters.saT1,
                saT2: hepsParameters.saT2,
                obnVi: hepsParameters.obnVi,
                bcrIt: hepsParameters.bcrIt,
                pcbT: hepsParameters.pcbT,
                conv1V: hepsParameters.conv1V,
                conv2V: hepsParameters.conv2V,
                conv1T: hepsParameters.conv1T,
                conv2T: hepsParameters.conv2T,
                rlclVi: hepsParameters.rlclVi,
                lclVi: hepsParameters.lclVi,
                hdrmVi: hepsParameters.hdrmVi,
                heater1Vi: hepsParameters.heater1Vi,
                heater2Vi: hepsParameters.heater2Vi
            };
            // Add simulation flag to the results
            const resultsWithFlag = {
                ...testResults,
                simulated: finalSimulationStatus,
                timestamp: new Date().toISOString(),
                testedOptions: options,
                rawParameters: testResults.rawParameters || {},
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
                        component_id: "HEPS",
                        test_type: options.join(','),
                        results: resultsWithFlag,
                        status: status,
                        notes: `Test options: ${options.join(', ')}`,
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
                const localHistoryKey = `heps_sim_history_${profileId}`;
                try {
                    const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
                    existingHistory.push({
                        id: Date.now(),
                        component_id: "HEPS",
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
        // Handle array index notation in the path (e.g. heaters[0].temperature)
        const arrayIndexMatch = path.match(/^([^\[]+)\[(\d+)\]\.(.+)$/);
        if (arrayIndexMatch) {
            const [, arrayName, indexStr, propName] = arrayIndexMatch;
            const index = parseInt(indexStr);
            if (results[arrayName] && Array.isArray(results[arrayName]) && results[arrayName].length > index) {
                const arrayItem = results[arrayName][index];
                if (arrayItem && typeof arrayItem === 'object' && propName in arrayItem) {
                    const value = arrayItem[propName];
                    const numValue = parseFloat(value);
                    return isNaN(numValue) ? null : numValue;
                }
            }
            return null;
        }
        // Handle regular dot notation (e.g. system.voltage)
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
            setCurrentStep('Starting HEPS Checkout');
            // Validate socket before proceeding
            if (!sock || typeof sock.simulateRead !== 'function' && typeof sock.send !== 'function') {
                console.warn("No valid socket found, creating simulation fallback");
                // Create a minimal simulation object for HEPS
                const simulatedSock = {
                    simulateRead: (parameters)=>{
                        // Generate simulated values for common HEPS parameters
                        return parameters.map((param)=>{
                            // Return specific values for different HEPS parameters
                            if (param.includes("HEPS") || param.includes("Heps")) {
                                if (param.includes("Status") || param.includes("state")) {
                                    return `${param}=${Math.round(Math.random())}`; // 0 or 1
                                } else if (param.includes("Temp") || param.includes("temp") || param.includes("_T")) {
                                    return `${param}=${20 + Math.floor(Math.random() * 30)}`; // 20-50°C
                                } else if (param.includes("Current") || param.includes("_I") || param.includes("_I_")) {
                                    return `${param}=${500 + Math.floor(Math.random() * 500)}`; // 500-1000mA
                                } else if (param.includes("Voltage") || param.includes("_V") || param.includes("_V_")) {
                                    if (param.includes("BAT")) {
                                        return `${param}=${12 + Math.random() * 2}`; // 12-14V for batteries
                                    } else if (param.includes("5V")) {
                                        return `${param}=${5 + (Math.random() * 0.2 - 0.1)}`; // 4.9-5.1V
                                    } else if (param.includes("12V") || param.includes("HDRM")) {
                                        return `${param}=${12 + (Math.random() * 0.4 - 0.2)}`; // 11.8-12.2V
                                    } else if (param.includes("15V")) {
                                        return `${param}=${15 + (Math.random() * 0.5 - 0.25)}`; // 14.75-15.25V
                                    } else if (param.includes("3V3")) {
                                        return `${param}=${3.3 + (Math.random() * 0.1 - 0.05)}`; // 3.25-3.35V
                                    } else {
                                        return `${param}=${28 + Math.random() * 2}`; // 28-30V
                                    }
                                } else if (param.includes("Power")) {
                                    return `${param}=${15 + Math.floor(Math.random() * 10)}`; // 15-25W
                                } else if (param.includes("Count")) {
                                    return `${param}=${Math.floor(Math.random() * 100)}`; // 0-99
                                } else if (param.includes("Test")) {
                                    if (param.includes("Done")) {
                                        return `${param}=1`; // Test completed
                                    } else if (param.includes("Result")) {
                                        return `${param}=PASS`; // Test result
                                    } else {
                                        return `${param}=1`; // Other test flags
                                    }
                                } else {
                                    return `${param}=${Math.floor(Math.random() * 100)}`; // Generic value
                                }
                            } else if (param.includes("OBC1_InterComm")) {
                                // CAN communication variables
                                return `${param}=${Math.floor(Math.random() * 1000)}`;
                            } else if (param.includes("OBC1_Intercomm_PriSec_Cfg")) {
                                return `${param}=0`; // CAN configuration
                            } else if (param.includes("OBC1_Ch_")) {
                                return `${param}=1`; // Channel setting
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
                setDetectedSimulation(true);
            }
            // Run the HEPS checkout test
            const testResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$checkout$2f$hepsCheckout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runHEPSCheckout"])(sock, {
                testHeaters: enableHeaterTest,
                testCurrent: enableCurrentTest,
                testPowerCycle: enablePowerCycle
            }, (step, percent)=>{
                setCurrentStep(step);
                setProgress(percent);
            });
            // Add the list of tested options to the results
            testResults.testedOptions = options;
            // Save the results locally
            setResults(testResults);
            // Save result to history - detect if simulation was used
            const wasSimulated = isForceSimulation || sock && sock.isSimulated;
            await saveTestResult(testResults, 'completed', wasSimulated);
            // Notify parent that the test is complete
            onTestComplete(testResults);
        } catch (error) {
            console.error('Error running test:', error);
            setError(error instanceof Error ? error.message : String(error));
            // Save failed result to history
            if (results) {
                await saveTestResult(results, 'error', true);
            }
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
            const reportFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2f$hepsReport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateHEPSReport"])(results);
            alert(`HEPS report saved: ${reportFile}`);
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
                    component: 'HEPS' // Limit only HEPS records
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
        if (!window.confirm("Are you sure you want to clear ALL test history for HEPS?\nThis action cannot be undone.")) {
            return;
        }
        setHistoryLoading(true);
        try {
            const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=HEPS`, {
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
                localStorage.removeItem(`heps_real_history_${profileId}`);
                localStorage.removeItem(`heps_sim_history_${profileId}`);
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
    // Add these functions for multi-select mode
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
    // Modify the useEffect for socket detection to watch for simulation indicators
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HEPSTestPanel.useEffect": ()=>{
            // Check if we have real socket info saved
            const socketInfo = localStorage.getItem('mccSocketInfo');
            let shouldUseSimulation = true; // Default to simulation
            if (socketInfo) {
                try {
                    const parsed = JSON.parse(socketInfo);
                    if (parsed && parsed.isReal) {
                        console.log("📡 Using real socket based on stored configuration");
                        shouldUseSimulation = false;
                    }
                } catch (e) {
                    console.error("Error parsing socket info:", e);
                }
            }
            // Check the actual socket type more thoroughly
            let isActuallySimulated = true;
            if (sock) {
                // Direct simulation flag check
                if (typeof sock.isSimulated === 'boolean') {
                    isActuallySimulated = sock.isSimulated;
                } else if (typeof sock.simulateRead === 'function') {
                    isActuallySimulated = true;
                } else if (typeof sock.send === 'function' && typeof sock.receive === 'function' && typeof sock.simulateRead === 'undefined') {
                    // Additional check to see if it's been correctly initialized
                    if (sock.readyState === undefined || sock.readyState === 1) {
                        isActuallySimulated = false;
                    }
                }
            }
            // Set both states
            setIsForceSimulation(shouldUseSimulation);
            setDetectedSimulation(isActuallySimulated);
            console.log(`🔧 Socket analysis: Config says simulation=${shouldUseSimulation}, actual detection=${isActuallySimulated}`);
            // Set global simulation mode based on the most accurate information
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSimulationMode"])(isActuallySimulated);
        }
    }["HEPSTestPanel.useEffect"], [
        sock
    ]);
    // Optionally add automatic cleanup on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HEPSTestPanel.useEffect": ()=>{
            if (profileId) {
                // Automatically limit history to 30 records when the component mounts
                limitTestHistory(30);
            }
        }
    }["HEPSTestPanel.useEffect"], [
        profileId
    ]); // Only run when profileId changes
    // Function to get friendly name for parameter groups
    const getParameterGroupName = (key)=>{
        const groupNames = {
            canSetting: "CAN Configuration",
            canVar: "CAN Communication",
            batVi: "Battery Voltage/Current",
            batT: "Battery Temperature",
            saV: "Solar Array Voltage",
            saT1: "Solar Array Temperature 1",
            saT2: "Solar Array Temperature 2",
            obnVi: "OBN Voltage/Current",
            bcrIt: "BCR Current/Temperature",
            pcbT: "PCB Temperature",
            conv1V: "Converter 1 Voltage",
            conv2V: "Converter 2 Voltage",
            conv1T: "Converter 1 Temperature",
            conv2T: "Converter 2 Temperature",
            rlclVi: "RLCL Voltage/Current",
            lclVi: "LCL Voltage/Current",
            hdrmVi: "HDRM Voltage/Current",
            heater1Vi: "Heater 1 Parameters",
            heater2Vi: "Heater 2 Parameters"
        };
        return groupNames[key] || key;
    };
    // Helper function to get human-readable parameter names
    const getReadableParameterName = (rawName)=>{
        // Handle nested paths like 'battery.voltage1'
        if (rawName.includes('.')) {
            const parts = rawName.split('.');
            const parentName = parts[0];
            const childName = parts[1];
            // Convert from camelCase to space-separated words
            const parentReadable = parentName.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
            // Special handling for various parameter types
            if (childName.includes('voltage')) {
                const voltageNumber = childName.replace('voltage', '');
                return `${parentReadable} ${voltageNumber ? voltageNumber : ''} Voltage`;
            } else if (childName.includes('current')) {
                const currentNumber = childName.replace('current', '');
                return `${parentReadable} ${currentNumber ? currentNumber : ''} Current`;
            } else if (childName.includes('temperature')) {
                const tempNumber = childName.replace('temperature', '');
                return `${parentReadable} ${tempNumber ? tempNumber : ''} Temperature`;
            } else if (childName.includes('temp')) {
                if (childName.startsWith('temp')) {
                    // Handle special cases like 'tempYNeg1'
                    if (childName.includes('YNeg')) {
                        const num = childName.replace('tempYNeg', '');
                        return `${parentReadable} Y- Side ${num} Temperature`;
                    } else if (childName.includes('YPos')) {
                        const num = childName.replace('tempYPos', '');
                        return `${parentReadable} Y+ Side ${num} Temperature`;
                    } else if (childName.includes('BodyMount')) {
                        return `${parentReadable} Body Mount Temperature`;
                    }
                } else {
                    const tempNumber = childName.replace('temp', '');
                    return `${parentReadable} ${tempNumber ? tempNumber : ''} Temperature`;
                }
            } else if (childName.includes('power')) {
                return `${parentReadable} Power`;
            } else if (childName.includes('status')) {
                return `${parentReadable} Status`;
            } else if (childName.includes('deploy')) {
                const deployNumber = childName.replace('deploy', '');
                return `${parentReadable} ${deployNumber ? deployNumber : ''} Deployment Status`;
            }
            // For any other cases, just convert camelCase to space-separated
            const childReadable = childName.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
            return `${parentReadable} ${childReadable}`;
        }
        // Handle array index notation for heaters
        if (rawName.includes('[')) {
            const match = rawName.match(/^(.+)\[(\d+)\]\.(.+)$/);
            if (match) {
                const [, arrayName, index, property] = match;
                const arrayReadable = arrayName.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
                const propertyReadable = property.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
                return `${arrayReadable} ${parseInt(index) + 1} ${propertyReadable}`;
            }
        }
        // For top-level parameters, just convert camelCase to space-separated
        return rawName.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
    };
    // Helper function to format values with proper units
    const formatParameterValue = (rawValue, paramName)=>{
        if (rawValue === null || rawValue === undefined) {
            return 'N/A';
        }
        // Try to parse as number
        const numValue = parseFloat(rawValue);
        if (isNaN(numValue)) {
            return rawValue.toString();
        }
        // Add appropriate units based on parameter name
        if (paramName.toLowerCase().includes('voltage')) {
            return `${numValue.toFixed(2)} V`;
        } else if (paramName.toLowerCase().includes('current')) {
            return `${numValue.toFixed(2)} mA`;
        } else if (paramName.toLowerCase().includes('temp')) {
            return `${numValue.toFixed(2)} °C`;
        } else if (paramName.toLowerCase().includes('power')) {
            return `${numValue.toFixed(2)} W`;
        } else if (paramName.toLowerCase().includes('status') || paramName.toLowerCase().includes('deploy')) {
            return numValue === 1 ? 'Enabled' : 'Disabled';
        }
        // Default formatting
        return numValue.toFixed(2);
    };
    // Helper function to render temperature trend chart for heater test results
    const renderTemperatureTrend = (heaterData, index)=>{
        if (!heaterData || !heaterData.tempReadings || heaterData.tempReadings.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px',
                    textAlign: 'center',
                    color: isDarkMode ? '#d1d5db' : '#6b7280',
                    fontStyle: 'italic'
                },
                children: "No temperature data available"
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 1372,
                columnNumber: 7
            }, this);
        }
        // Generate array for the temperature points
        const tempPoints = heaterData.tempReadings.map((temp, idx)=>({
                time: idx * heaterData.readingInterval,
                temp: temp
            }));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: '200px',
                marginBottom: '20px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                        fontSize: '13px',
                        color: isDarkMode ? '#d1d5db' : '#6b7280'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Initial: ",
                                heaterData.initialTemp,
                                "°C"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 1398,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Max: ",
                                Math.max(...heaterData.tempReadings).toFixed(1),
                                "°C"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 1399,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Final: ",
                                heaterData.tempReadings[heaterData.tempReadings.length - 1],
                                "°C"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 1400,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                    lineNumber: 1391,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        height: '160px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '6px',
                        padding: '8px',
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 140,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                            data: tempPoints,
                            margin: {
                                top: 5,
                                right: 20,
                                left: 10,
                                bottom: 5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: isDarkMode ? "#374151" : "#e5e7eb"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 1416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "time",
                                    label: {
                                        value: 'Time (s)',
                                        position: 'bottom'
                                    },
                                    stroke: isDarkMode ? "#9ca3af" : "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 1417,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    dataKey: "temp",
                                    label: {
                                        value: 'Temp (°C)',
                                        angle: -90,
                                        position: 'left'
                                    },
                                    stroke: isDarkMode ? "#9ca3af" : "#6b7280"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 1422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 1427,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: "temp",
                                    stroke: isDarkMode ? "#3b82f6" : "#2563eb",
                                    strokeWidth: 2,
                                    activeDot: {
                                        r: 8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 1428,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 1412,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1411,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                    lineNumber: 1402,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
            lineNumber: 1390,
            columnNumber: 5
        }, this);
    };
    // Helper to render thermal rise data
    const renderThermalRiseData = (heaterData)=>{
        if (!heaterData || !heaterData.thermalRise) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: '16px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    marginBottom: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 'bold'
                                },
                                children: "Temperature Rise:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.thermalRise.totalRise.toFixed(1),
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1459,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Rise Rate:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.thermalRise.riseRate.toFixed(2),
                                    "°C/min"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1464,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Time to 5°C Rise:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.thermalRise.timeTo5C.toFixed(1),
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Time to 10°C Rise:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: heaterData.thermalRise.timeTo10C ? heaterData.thermalRise.timeTo10C.toFixed(1) + 's' : 'N/A'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1474,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1472,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 1450,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
            lineNumber: 1449,
            columnNumber: 5
        }, this);
    };
    // Helper to render power consumption data
    const renderPowerConsumption = (heaterData)=>{
        if (!heaterData || !heaterData.power) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: '16px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '12px',
                    backgroundColor: isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5',
                    borderRadius: '6px',
                    border: `1px solid ${isDarkMode ? 'rgba(16, 185, 129, 0.3)' : '#a7f3d0'}`,
                    marginBottom: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 'bold'
                                },
                                children: "Average Current:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.power.avgCurrent.toFixed(1),
                                    " mA"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1498,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Max Current:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1502,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.power.maxCurrent.toFixed(1),
                                    " mA"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Average Power:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.power.avgPower.toFixed(2),
                                    " W"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1508,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total Energy:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    heaterData.power.totalEnergy.toFixed(2),
                                    " Wh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 1489,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
            lineNumber: 1488,
            columnNumber: 5
        }, this);
    };
    // Function to render a parameter box with human-readable labels
    const renderParameterBox = (paramPath, value, passFailStatus)=>{
        const readableLabel = getReadableParameterName(paramPath);
        const formattedValue = formatParameterValue(value, paramPath);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
            style: {
                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterLabel,
                    children: readableLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                    lineNumber: 1530,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${passFailStatus === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : passFailStatus === "[FAIL]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError : ''}`,
                    children: formattedValue
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                    lineNumber: 1533,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
            lineNumber: 1526,
            columnNumber: 5
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testPanel,
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                    lineNumber: 1548,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 1547,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabsContainer,
                style: {
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    padding: '8px',
                    borderRadius: '8px',
                    marginBottom: '16px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowHistory(false),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${!showHistory ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ''}`,
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
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1558,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowHistory(true),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${showHistory ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ''}`,
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
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1573,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 1552,
                columnNumber: 5
            }, this),
            !showHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1609,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 1608,
                                            columnNumber: 15
                                        }, this),
                                        "HEPS Test Status"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 1607,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1600,
                                columnNumber: 11
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1618,
                                                        columnNumber: 17
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1621,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1617,
                                                columnNumber: 15
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
                                                        background: 'linear-gradient(to right, #3b82f6, #4f46e5)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 1629,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1625,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1616,
                                        columnNumber: 13
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1641,
                                                columnNumber: 15
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
                                                                color: isDarkMode ? '#93c5fd' : '#3b82f6',
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
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1661,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 1660,
                                                                    columnNumber: 21
                                                                }, this),
                                                                option
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 1650,
                                                            columnNumber: 19
                                                        }, this)),
                                                    options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                            fontStyle: 'italic',
                                                            fontSize: '13px'
                                                        },
                                                        children: "No specific options selected. Running with defaults."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1667,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1648,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1640,
                                        columnNumber: 13
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 1688,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1687,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Connection Mode"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1686,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${isForceSimulation || detectedSimulation ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorWaiting : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                children: isForceSimulation || detectedSimulation ? 'SIMULATION' : 'REAL SOCKET'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1692,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1679,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterBox,
                                        style: {
                                            backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                            marginTop: '10px'
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
                                                            fillRule: "evenodd",
                                                            d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 1709,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1708,
                                                        columnNumber: 17
                                                    }, this),
                                                    "HEPS System Tests"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1707,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    enableCANTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                        children: "CAN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1715,
                                                        columnNumber: 19
                                                    }, this),
                                                    enableBatteryTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                        children: "Battery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1720,
                                                        columnNumber: 19
                                                    }, this),
                                                    enableHeaterTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                        children: "Heaters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1725,
                                                        columnNumber: 19
                                                    }, this),
                                                    enableCurrentTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                        children: "Current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1730,
                                                        columnNumber: 19
                                                    }, this),
                                                    enablePowerCycle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                        children: "Power Cycle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1735,
                                                        columnNumber: 19
                                                    }, this),
                                                    enableConverterTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parameterValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted}`,
                                                        children: "Converters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1740,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1713,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startTest,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                        disabled: isRunning,
                                        style: {
                                            backgroundColor: isRunning ? '#9ca3af' : hasRunTest ? '#4f46e5' : '#10b981',
                                            color: 'white',
                                            marginTop: '20px'
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1762,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 1761,
                                                    columnNumber: 19
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1769,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 1768,
                                                    columnNumber: 19
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
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1776,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 1775,
                                                    columnNumber: 19
                                                }, this),
                                                "Run Test"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1748,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1615,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1593,
                        columnNumber: 9
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
                                                            d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 1807,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1806,
                                                        columnNumber: 19
                                                    }, this),
                                                    "HEPS System Status"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1805,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1813,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1796,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: "Power Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: results.system.powerStatus === "1" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                        },
                                                                        children: results.system.powerStatus === "1" ? "POWERED" : "OFF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1842,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "Current State"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1851,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1838,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1823,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: "System Voltage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1866,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#111827'
                                                                        },
                                                                        children: formatParameterValue(results.system.voltage, 'system.voltage')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1880,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "Bus Voltage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1887,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1876,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1861,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: "System Current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1902,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#111827'
                                                                        },
                                                                        children: formatParameterValue(results.system.current, 'system.current')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1916,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "Total Current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1923,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1912,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1897,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1817,
                                                columnNumber: 17
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
                                                                    children: "Parameter"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 1948,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Value"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 1949,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 1950,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 1947,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1940,
                                                        columnNumber: 19
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
                                                                        children: getReadableParameterName('system.powerStatus')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1955,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(results.system.powerStatus, 'system.powerStatus')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1958,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${results.system.powerStatus === "1" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                            children: results.system.powerStatus === "1" ? "ONLINE" : "OFFLINE"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 1962,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1961,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1954,
                                                                columnNumber: 21
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
                                                                        children: getReadableParameterName('system.voltage')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1971,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(results.system.voltage, 'system.voltage')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1974,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${parseFloat(results.system.voltage) > 27 && parseFloat(results.system.voltage) < 30 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                            children: parseFloat(results.system.voltage) > 27 && parseFloat(results.system.voltage) < 30 ? "NORMAL" : "CHECK"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 1978,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1977,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1970,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: getReadableParameterName('system.current')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1989,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(results.system.current, 'system.current')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1992,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${parseFloat(results.system.current) < 1500 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                            children: parseFloat(results.system.current) < 1500 ? "NORMAL" : "HIGH"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 1996,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 1995,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 1988,
                                                                columnNumber: 21
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
                                                                        children: getReadableParameterName('system.power')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2007,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(results.system.power, 'system.power')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2010,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${parseFloat(results.system.power) < 50 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                            children: parseFloat(results.system.power) < 50 ? "NORMAL" : "HIGH"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 2014,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2013,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2006,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: getReadableParameterName('system.powerCycleCount')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2025,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.system.powerCycleCount
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2028,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2031,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2024,
                                                                columnNumber: 21
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
                                                                        children: getReadableParameterName('system.operatingTime')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2035,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            results.system.operatingTime,
                                                                            " min"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2038,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2041,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2034,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 1953,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 1934,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 1816,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 1789,
                                columnNumber: 13
                            }, this),
                            (enableCANTest || results.canTest) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #7c2d12, #9a3412)" : "linear-gradient(to right, #ffedd5, #fed7aa)",
                                            color: isDarkMode ? "#fed7aa" : "#9a3412"
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
                                                            d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 2068,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2067,
                                                        columnNumber: 21
                                                    }, this),
                                                    "CAN Communication Test"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2066,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2074,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2057,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: "Primary CAN Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2089,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: results.canTest?.primaryResult === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                        },
                                                                        children: results.canTest?.primaryResult === "[PASS]" ? "CONNECTED" : "FAILED"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2103,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "Primary Bus"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2112,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2099,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2084,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: "Secondary CAN Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2127,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: results.canTest?.secondaryResult === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                        },
                                                                        children: results.canTest?.secondaryResult === "[PASS]" ? "CONNECTED" : "FAILED"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2141,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "Secondary Bus"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2150,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2137,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2122,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2078,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "CAN Communication Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563',
                                                            marginBottom: '8px'
                                                        },
                                                        children: [
                                                            "Primary CAN: ",
                                                            results.canTest?.primaryResult === "[PASS]" ? "Communication established with all controllers. Packet exchange successful." : "Communication error detected. Check connections and retry."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2176,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                        },
                                                        children: [
                                                            "Secondary CAN: ",
                                                            results.canTest?.secondaryResult === "[PASS]" ? "Redundant bus operational. Failover capability confirmed." : "Secondary bus failure. Redundancy compromised."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2077,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 2050,
                                columnNumber: 15
                            }, this),
                            results.battery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" : "linear-gradient(to right, #eff6ff, #dbeafe)",
                                            color: isDarkMode ? "#dbeafe" : "#1d4ed8"
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
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13 7H7v6h6V7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2219,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2220,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2218,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Battery Status"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2226,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2208,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('battery.voltage1').split(' ')[0],
                                                                    " 1"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2242,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2260,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.battery1 === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.battery.voltage1, 'battery.voltage1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2261,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2255,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2275,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.battery.current1, 'battery.current1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2276,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2270,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Temperature:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2284,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.battery.temperature1, 'battery.temperature1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2285,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2280,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2252,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2237,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('battery.voltage2').split(' ')[0],
                                                                    " 2"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2298,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2316,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.battery2 === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.battery.voltage2, 'battery.voltage2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2317,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2311,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2331,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.battery.current2, 'battery.current2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2332,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2326,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Temperature:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2340,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.battery.temperature2, 'battery.temperature2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2341,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2336,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2308,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2293,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('battery.voltage3').split(' ')[0],
                                                                    " 3"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2354,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2372,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.battery3 === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.battery.voltage3, 'battery.voltage3')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2373,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2367,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2387,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.battery.current3, 'battery.current3')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2388,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2382,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Temperature:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2396,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.battery.temperature3, 'battery.temperature3')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2397,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2392,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2364,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2349,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "Battery Status Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                        },
                                                        children: results.passFailStatus && results.passFailStatus.battery1 === "[PASS]" && results.passFailStatus.battery2 === "[PASS]" && results.passFailStatus.battery3 === "[PASS]" ? "All batteries are within nominal voltage range (11-16V) and operating at expected temperature." : "One or more batteries are outside nominal voltage range. Check battery health and charging circuit."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2420,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2405,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2229,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 2201,
                                columnNumber: 15
                            }, this),
                            results.solarArray && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #b45309, #d97706)" : "linear-gradient(to right, #fef3c7, #fde68a)",
                                            color: isDarkMode ? "#fef3c7" : "#b45309"
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
                                                            d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 2456,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2455,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Solar Array Status"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2454,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2462,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2445,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('solarArray.voltage1').split(' ')[0],
                                                                    " 1"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2478,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2496,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.voltage1, 'solarArray.voltage1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2497,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2491,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Y- Temp:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2506,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.tempYNeg1, 'solarArray.tempYNeg1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2507,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2501,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Y+ Temp:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2515,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.tempYPos1, 'solarArray.tempYPos1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2516,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2511,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2488,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2473,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('solarArray.voltage2').split(' ')[0],
                                                                    " 2"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2529,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2547,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.voltage2, 'solarArray.voltage2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2548,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2542,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Y- Temp:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2557,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.tempYNeg2, 'solarArray.tempYNeg2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2558,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2552,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Y+ Temp:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2566,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.tempYPos2, 'solarArray.tempYPos2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2567,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2562,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2539,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2524,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('solarArray.voltage3').split(' ')[0],
                                                                    " 3"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2580,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2598,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.voltage3, 'solarArray.voltage3')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2599,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2593,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Y- Temp:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2608,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.tempYNeg3, 'solarArray.tempYNeg3')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2609,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2603,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Y+ Temp:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2617,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.solarArray.tempYPos3, 'solarArray.tempYPos3')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2618,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2613,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2590,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2575,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2466,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: getReadableParameterName('solarArray.tempBodyMount')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2633,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                                },
                                                                children: "Temperature:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2643,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 'bold',
                                                                    fontSize: '16px',
                                                                    color: isDarkMode ? '#e5e7eb' : '#111827'
                                                                },
                                                                children: formatParameterValue(results.solarArray.tempBodyMount, 'solarArray.tempBodyMount')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2649,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2642,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2627,
                                                columnNumber: 19
                                            }, this),
                                            results.hdrmStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ? 'rgba(5, 150, 105, 0.1)' : 'rgba(239, 68, 68, 0.1)' : results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ? '#d1fae5' : '#fee2e2',
                                                    borderRadius: '6px',
                                                    border: `1px solid ${isDarkMode ? results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)' : results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ? '#a7f3d0' : '#fecaca'}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "HDRM Deployment Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2675,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            marginBottom: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: isDarkMode ? '#d1d5db' : '#4b5563',
                                                                            marginBottom: '4px'
                                                                        },
                                                                        children: getReadableParameterName('hdrmStatus.deploy1')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2694,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 'bold',
                                                                            color: results.hdrmStatus.deploy1 === "1" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                        },
                                                                        children: formatParameterValue(results.hdrmStatus.deploy1, 'hdrmStatus.deploy1')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2700,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2689,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: isDarkMode ? '#d1d5db' : '#4b5563',
                                                                            marginBottom: '4px'
                                                                        },
                                                                        children: getReadableParameterName('hdrmStatus.deploy2')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2715,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 'bold',
                                                                            color: results.hdrmStatus.deploy2 === "1" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                        },
                                                                        children: formatParameterValue(results.hdrmStatus.deploy2, 'hdrmStatus.deploy2')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2721,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2710,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2684,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2661,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2465,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 2438,
                                columnNumber: 15
                            }, this),
                            results.obn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #6d28d9, #7c3aed)" : "linear-gradient(to right, #f5f3ff, #ede9fe)",
                                            color: isDarkMode ? "#ede9fe" : "#6d28d9"
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 2757,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2756,
                                                        columnNumber: 21
                                                    }, this),
                                                    "OBN (On-Board Network) Status"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2755,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2763,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2746,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('obn.voltage1').split(' ')[0],
                                                                    " 1"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2779,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2797,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.obn1Voltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.obn.voltage1, 'obn.voltage1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2798,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2792,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2811,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.obn.current1, 'obn.current1')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2812,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2807,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2789,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2774,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: [
                                                                    getReadableParameterName('obn.voltage2').split(' ')[0],
                                                                    " 2"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2825,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2843,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.obn2Voltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.obn.voltage2, 'obn.voltage2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2844,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2838,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2857,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.obn.current2, 'obn.current2')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 2858,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 2853,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2835,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2820,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('obn.auxVoltage')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2871,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Voltage:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 2888,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold',
                                                                                color: results.passFailStatus?.auxVoltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                            },
                                                                            children: formatParameterValue(results.obn.auxVoltage, 'obn.auxVoltage')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 2889,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 2884,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 2881,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2866,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2767,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "OBN Status Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2908,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                        },
                                                        children: results.passFailStatus && results.passFailStatus.obn1Voltage === "[PASS]" && results.passFailStatus.obn2Voltage === "[PASS]" && results.passFailStatus.auxVoltage === "[PASS]" ? "All OBN voltages are within nominal range. Network communication links operational." : "One or more OBN voltages are outside nominal range. Check power supply and network connections."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2917,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2902,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2766,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 2739,
                                columnNumber: 15
                            }, this),
                            results.bcr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #0f766e, #0d9488)" : "linear-gradient(to right, #ccfbf1, #99f6e4)",
                                            color: isDarkMode ? "#99f6e4" : "#0f766e"
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
                                                            d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 2953,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 2952,
                                                        columnNumber: 21
                                                    }, this),
                                                    getReadableParameterName('bcr.current1').split(' ')[0],
                                                    " (Battery Charging Regulator)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2951,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 2959,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2942,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                gap: '16px',
                                                marginBottom: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderRadius: '8px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '10px',
                                                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                fontSize: '14px',
                                                                fontWeight: 'bold',
                                                                color: isDarkMode ? '#d1d5db' : '#374151'
                                                            },
                                                            children: [
                                                                getReadableParameterName('bcr.current1').split(' ')[0],
                                                                " 1"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 2975,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '12px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Current:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 2993,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: formatParameterValue(results.bcr.current1, 'bcr.current1')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 2994,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 2988,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Temperature:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3002,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: formatParameterValue(results.bcr.temp1, 'bcr.temp1')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3003,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 2998,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 2985,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 2970,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderRadius: '8px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '10px',
                                                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                fontSize: '14px',
                                                                fontWeight: 'bold',
                                                                color: isDarkMode ? '#d1d5db' : '#374151'
                                                            },
                                                            children: [
                                                                getReadableParameterName('bcr.current2').split(' ')[0],
                                                                " 2"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3016,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '12px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Current:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3034,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: formatParameterValue(results.bcr.current2, 'bcr.current2')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3035,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3029,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Temperature:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3043,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: formatParameterValue(results.bcr.temp2, 'bcr.temp2')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3044,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3039,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3026,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 3011,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderRadius: '8px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '10px',
                                                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                fontSize: '14px',
                                                                fontWeight: 'bold',
                                                                color: isDarkMode ? '#d1d5db' : '#374151'
                                                            },
                                                            children: [
                                                                getReadableParameterName('bcr.current3').split(' ')[0],
                                                                " 3"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3057,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '12px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Current:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3075,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: formatParameterValue(results.bcr.current3, 'bcr.current3')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3076,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3070,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                            },
                                                                            children: "Temperature:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3084,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: formatParameterValue(results.bcr.temp3, 'bcr.temp3')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3085,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3080,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3067,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 3052,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 2963,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 2962,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 2935,
                                columnNumber: 15
                            }, this),
                            results.pdmTemperature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #4f46e5, #4338ca)" : "linear-gradient(to right, #e0e7ff, #c7d2fe)",
                                            color: isDarkMode ? "#c7d2fe" : "#4338ca"
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
                                                            d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3116,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3115,
                                                        columnNumber: 21
                                                    }, this),
                                                    "PDM Temperature"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3122,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3105,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('pdmTemperature.pdm1')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3138,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#111827'
                                                                        },
                                                                        children: formatParameterValue(results.pdmTemperature.pdm1, 'pdmTemperature.pdm1')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3152,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "PCB Temperature"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3159,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3148,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3133,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('pdmTemperature.pdm2')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3175,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '24px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#111827'
                                                                        },
                                                                        children: formatParameterValue(results.pdmTemperature.pdm2, 'pdmTemperature.pdm2')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3189,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: "PCB Temperature"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3196,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3185,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3170,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "PDM Temperature Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3213,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                        },
                                                        children: parseFloat(results.pdmTemperature.pdm1) < 60 && parseFloat(results.pdmTemperature.pdm2) < 60 ? "PDM temperatures are within normal operating range (< 60°C)." : "One or more PDM temperatures exceeded nominal range. Check thermal conditions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3222,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3125,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3098,
                                columnNumber: 15
                            }, this),
                            results.converters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #0f766e, #0d9488)" : "linear-gradient(to right, #ccfbf1, #99f6e4)",
                                            color: isDarkMode ? "#99f6e4" : "#0f766e"
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
                                                            d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3255,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3254,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Power Converters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    marginBottom: '12px',
                                                    color: isDarkMode ? '#e5e7eb' : '#111827'
                                                },
                                                children: "Converter 1 (PSM1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '24px'
                                                },
                                                children: [
                                                    renderParameterBox('converters.hdrm12v1_voltage', results.converters.hdrm12v1_voltage, results.passFailStatus?.hdrm12v1_voltage),
                                                    renderParameterBox('converters.v5_1_voltage', results.converters.v5_1_voltage, results.passFailStatus?.v5_1_voltage),
                                                    renderParameterBox('converters.v12_1_voltage', results.converters.v12_1_voltage, results.passFailStatus?.v12_1_voltage),
                                                    renderParameterBox('converters.v15_voltage', results.converters.v15_voltage, results.passFailStatus?.v15_voltage)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    marginBottom: '12px',
                                                    color: isDarkMode ? '#e5e7eb' : '#111827'
                                                },
                                                children: "Converter 2 (PSM2)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3306,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    renderParameterBox('converters.hdrm12v2_voltage', results.converters.hdrm12v2_voltage, results.passFailStatus?.hdrm12v2_voltage),
                                                    renderParameterBox('converters.v5_2_voltage', results.converters.v5_2_voltage, results.passFailStatus?.v5_2_voltage),
                                                    renderParameterBox('converters.v12_2_voltage', results.converters.v12_2_voltage, results.passFailStatus?.v12_2_voltage)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3315,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "Converter Status Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3347,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                        },
                                                        children: Object.entries(results.passFailStatus || {}).filter(([key])=>key.includes('voltage')).every(([, value])=>value === "[PASS]") ? "All converters operating within voltage specifications. Temperature readings normal." : "One or more converters outside voltage specifications. Check power supply and load conditions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3356,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3341,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3264,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3237,
                                columnNumber: 15
                            }, this),
                            results.loads && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #be123c, #e11d48)" : "linear-gradient(to right, #ffe4e6, #fecdd3)",
                                            color: isDarkMode ? "#fecdd3" : "#be123c"
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
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3391,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3392,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3390,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Load Status"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3398,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3380,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '24px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('loads.obc1_voltage').split(' ')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3414,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3432,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.obc1_voltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.loads.obc1_voltage, 'loads.obc1_voltage')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3433,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3427,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3446,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.loads.obc1_current, 'loads.obc1_current')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3447,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3442,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3424,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3409,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('loads.obc2_voltage').split(' ')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3460,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3478,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.obc2_voltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.loads.obc2_voltage, 'loads.obc2_voltage')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3479,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3473,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3492,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.loads.obc2_current, 'loads.obc2_current')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3493,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3488,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3470,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3455,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('loads.sband_voltage').split(' ')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3506,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3524,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.sband_voltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.loads.sband_voltage, 'loads.sband_voltage')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3525,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3519,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3538,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.loads.sband_current, 'loads.sband_current')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3539,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3534,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3516,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3501,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px',
                                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#374151'
                                                                },
                                                                children: getReadableParameterName('loads.uhf_voltage').split(' ')[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3552,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Voltage:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3570,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold',
                                                                                    color: results.passFailStatus?.uhf_voltage === "[PASS]" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: formatParameterValue(results.loads.uhf_voltage, 'loads.uhf_voltage')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3571,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3565,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                                                                                },
                                                                                children: "Current:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3584,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 'bold'
                                                                                },
                                                                                children: formatParameterValue(results.loads.uhf_current, 'loads.uhf_current')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 3585,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3580,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3562,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3547,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3402,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "Load Status Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3599,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '14px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                        },
                                                        children: results.passFailStatus?.obc1_voltage === "[PASS]" && results.passFailStatus?.obc2_voltage === "[PASS]" && results.passFailStatus?.sband_voltage === "[PASS]" && results.passFailStatus?.uhf_voltage === "[PASS]" ? "All loads receiving correct voltage. Current consumption within expected ranges." : "One or more loads receiving incorrect voltage. Check power distribution system."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3608,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3593,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3401,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3373,
                                columnNumber: 15
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
                                            background: isDarkMode ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" : "linear-gradient(to right, #eff6ff, #dbeafe)",
                                            color: isDarkMode ? "#dbeafe" : "#1d4ed8"
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
                                                            d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3643,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3642,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Heater Status Summary"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3649,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3632,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '16px'
                                                },
                                                children: results.heaters && results.heaters.map((heater, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRadius: '8px',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '8px',
                                                                    backgroundColor: heater.status === "1" ? isDarkMode ? 'rgba(5, 150, 105, 0.2)' : '#d1fae5' : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                                                                    textAlign: 'center',
                                                                    fontSize: '14px',
                                                                    fontWeight: 'bold',
                                                                    color: heater.status === "1" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                },
                                                                children: [
                                                                    getReadableParameterName(`heaters[${index}].status`).split(' ')[0],
                                                                    " ",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3665,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '12px',
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '18px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#111827'
                                                                        },
                                                                        children: formatParameterValue(heater.temperature, `heaters[${index}].temperature`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3683,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '13px',
                                                                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                            marginTop: '4px'
                                                                        },
                                                                        children: formatParameterValue(heater.current, `heaters[${index}].current`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3690,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3679,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3660,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3653,
                                                columnNumber: 17
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
                                                                    children: "Heater"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3716,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3717,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Temperature"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3718,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Current"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3719,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Power"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3720,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3715,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3708,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableBody,
                                                        children: results.heaters && results.heaters.map((heater, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: index % 2 === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableRowAlt : undefined,
                                                                style: {
                                                                    backgroundColor: index % 2 === 1 ? isDarkMode ? "#111827" : "#f9fafb" : undefined
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            getReadableParameterName(`heaters[${index}].status`).split(' ')[0],
                                                                            " ",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3726,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${heater.status === "1" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                            children: formatParameterValue(heater.status, `heaters[${index}].status`)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3730,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3729,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(heater.temperature, `heaters[${index}].temperature`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3736,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(heater.current, `heaters[${index}].current`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3739,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: formatParameterValue(heater.power, `heaters[${index}].power`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3742,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3725,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3723,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3702,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3652,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3625,
                                columnNumber: 13
                            }, this),
                            enableHeaterTest && results.heaterTests && results.heaterTests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #4c1d95, #6d28d9)" : "linear-gradient(to right, #f5f3ff, #ede9fe)",
                                            color: isDarkMode ? "#ede9fe" : "#6d28d9"
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
                                                            d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3772,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3771,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Heater Test Results"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3770,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3778,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3761,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: results.heaterTests.map((heaterTest, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '20px',
                                                    padding: '16px',
                                                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                    borderRadius: '8px',
                                                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#fff'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            marginBottom: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '16px',
                                                                    fontWeight: 'bold',
                                                                    color: isDarkMode ? '#d1d5db' : '#111827',
                                                                    margin: 0
                                                                },
                                                                children: [
                                                                    getReadableParameterName(`heaters[${index}].status`).split(' ')[0],
                                                                    " ",
                                                                    index + 1,
                                                                    " Test Results"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3796,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${heaterTest.testResult === "PASS" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                children: heaterTest.testResult
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3804,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3790,
                                                        columnNumber: 25
                                                    }, this),
                                                    renderTemperatureTrend(heaterTest, index),
                                                    renderThermalRiseData(heaterTest),
                                                    renderPowerConsumption(heaterTest)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3783,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3781,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3754,
                                columnNumber: 17
                            }, this),
                            enableCurrentTest && results.currentTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #713f12, #854d0e)" : "linear-gradient(to right, #fffbeb, #fef3c7)",
                                            color: isDarkMode ? "#fef3c7" : "#854d0e"
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
                                                            d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3845,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3844,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Current Test Results"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3843,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3851,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3834,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '20px',
                                                    padding: '16px',
                                                    backgroundColor: results.currentTest.testResult === "PASS" ? isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5' : isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                                                    borderRadius: '8px',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '20px',
                                                            fontWeight: 'bold',
                                                            color: results.currentTest.testResult === "PASS" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626',
                                                            marginBottom: '8px'
                                                        },
                                                        children: results.currentTest.testResult
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3864,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: isDarkMode ? '#d1d5db' : '#374151',
                                                            fontSize: '14px'
                                                        },
                                                        children: [
                                                            "Current measurements ",
                                                            results.currentTest.testResult === "PASS" ? "within" : "outside",
                                                            " expected range"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3874,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3855,
                                                columnNumber: 21
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
                                                                    children: "Heater"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3896,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Expected (mA)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3897,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Measured (mA)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3898,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Deviation (%)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3899,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Result"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 3900,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 3895,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3888,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableBody,
                                                        children: results.currentTest.heaterResults && results.currentTest.heaterResults.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: index % 2 === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableRowAlt : undefined,
                                                                style: {
                                                                    backgroundColor: index % 2 === 1 ? isDarkMode ? "#111827" : "#f9fafb" : undefined
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            getReadableParameterName(`heaters[${index}].status`).split(' ')[0],
                                                                            " ",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3906,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: result.expectedCurrent
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3909,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: result.measuredCurrent
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3910,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            result.deviation.toFixed(2),
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3911,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${result.inRange ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                            children: result.inRange ? "PASS" : "FAIL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                            lineNumber: 3913,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 3912,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3905,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3903,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3882,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: '16px',
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "Test Summary:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3932,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "• Test Duration: ",
                                                            results.currentTest.testDuration,
                                                            " s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3933,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "• Samples Collected: ",
                                                            results.currentTest.sampleCount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3934,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "• Maximum Deviation: ",
                                                            results.currentTest.maxDeviation.toFixed(2),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3935,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "• Tolerance Range: ±",
                                                            results.currentTest.tolerance,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3936,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3924,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3854,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3827,
                                columnNumber: 17
                            }, this),
                            enablePowerCycle && results.powerCycleTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            background: isDarkMode ? "linear-gradient(to right, #164e63, #0e7490)" : "linear-gradient(to right, #ecfeff, #cffafe)",
                                            color: isDarkMode ? "#cffafe" : "#0e7490"
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
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13 7H7v6h6V7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3962,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 3963,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3961,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Power Cycle Test Results"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3960,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3969,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3951,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '20px',
                                                    padding: '16px',
                                                    backgroundColor: results.powerCycleTest.testResult === "PASS" ? isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5' : isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                                                    borderRadius: '8px',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '20px',
                                                            fontWeight: 'bold',
                                                            color: results.powerCycleTest.testResult === "PASS" ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626',
                                                            marginBottom: '8px'
                                                        },
                                                        children: results.powerCycleTest.testResult
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3982,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: isDarkMode ? '#d1d5db' : '#374151',
                                                            fontSize: '14px'
                                                        },
                                                        children: [
                                                            "Power Cycle Test ",
                                                            results.powerCycleTest.cyclesCompleted,
                                                            " of ",
                                                            results.powerCycleTest.totalCycles,
                                                            " cycles completed"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 3992,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 3973,
                                                columnNumber: 21
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
                                                                    children: "Parameter"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 4014,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                    },
                                                                    children: "Value"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 4015,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4013,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4006,
                                                        columnNumber: 23
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
                                                                        children: "Cycles Completed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4020,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            results.powerCycleTest.cyclesCompleted,
                                                                            " of ",
                                                                            results.powerCycleTest.totalCycles
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4021,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4019,
                                                                columnNumber: 25
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
                                                                        children: "Cycle Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4026,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            results.powerCycleTest.cycleTime,
                                                                            " s"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4027,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4025,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: "Power On Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4031,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            results.powerCycleTest.powerOnTime,
                                                                            " s"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4032,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4030,
                                                                columnNumber: 25
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
                                                                        children: "Power Off Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4036,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            results.powerCycleTest.powerOffTime,
                                                                            " s"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4037,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4035,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: "Total Test Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4041,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: [
                                                                            results.powerCycleTest.totalTestTime,
                                                                            " s"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4042,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4040,
                                                                columnNumber: 25
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
                                                                        children: "Failures"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4046,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                                                                        },
                                                                        children: results.powerCycleTest.failures
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4047,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4045,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4018,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4000,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 3972,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 3944,
                                columnNumber: 17
                            }, this),
                            results.passFailStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4075,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4074,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Pass/Fail Status Summary"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4073,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationBadge, {
                                                isSimulation: isForceSimulation || detectedSimulation
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4081,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 4064,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                                    gap: '16px',
                                                    marginBottom: '24px'
                                                },
                                                children: (()=>{
                                                    const totalTests = Object.values(results.passFailStatus).length;
                                                    const passedTests = Object.values(results.passFailStatus).filter((status)=>status === "[PASS]").length;
                                                    const failedTests = totalTests - passedTests;
                                                    const passRate = totalTests > 0 ? passedTests / totalTests * 100 : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    borderRadius: '8px',
                                                                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    overflow: 'hidden'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '10px',
                                                                            backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                            fontSize: '14px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#374151'
                                                                        },
                                                                        children: "Test Results Summary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4105,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '12px',
                                                                            textAlign: 'center'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '24px',
                                                                                    fontWeight: 'bold',
                                                                                    color: passRate >= 90 ? isDarkMode ? '#34d399' : '#059669' : passRate >= 70 ? isDarkMode ? '#fbbf24' : '#d97706' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: [
                                                                                    passRate.toFixed(1),
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 4119,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '13px',
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                                    marginTop: '4px'
                                                                                },
                                                                                children: "Pass Rate"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 4130,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4115,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4100,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    borderRadius: '8px',
                                                                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    overflow: 'hidden'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '10px',
                                                                            backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                            fontSize: '14px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#374151'
                                                                        },
                                                                        children: "Passed Tests"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4145,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '12px',
                                                                            textAlign: 'center'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '24px',
                                                                                    fontWeight: 'bold',
                                                                                    color: isDarkMode ? '#34d399' : '#059669'
                                                                                },
                                                                                children: passedTests
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 4159,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '13px',
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                                    marginTop: '4px'
                                                                                },
                                                                                children: [
                                                                                    "of ",
                                                                                    totalTests,
                                                                                    " tests"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 4166,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4155,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4140,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    borderRadius: '8px',
                                                                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                    overflow: 'hidden'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '10px',
                                                                            backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                                            fontSize: '14px',
                                                                            fontWeight: 'bold',
                                                                            color: isDarkMode ? '#d1d5db' : '#374151'
                                                                        },
                                                                        children: "Failed Tests"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4181,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '12px',
                                                                            textAlign: 'center'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '24px',
                                                                                    fontWeight: 'bold',
                                                                                    color: failedTests === 0 ? isDarkMode ? '#34d399' : '#059669' : isDarkMode ? '#f87171' : '#dc2626'
                                                                                },
                                                                                children: failedTests
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 4195,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '13px',
                                                                                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                                    marginTop: '4px'
                                                                                },
                                                                                children: [
                                                                                    "of ",
                                                                                    totalTests,
                                                                                    " tests"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                                lineNumber: 4204,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4191,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4176,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true);
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4085,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: 'bold',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#e5e7eb' : '#111827'
                                                        },
                                                        children: "Test Status Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4224,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                                            gap: '16px'
                                                        },
                                                        children: Object.entries(results.passFailStatus).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                    padding: '8px 12px',
                                                                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.3)' : 'rgba(249, 250, 251, 0.5)',
                                                                    borderRadius: '4px',
                                                                    marginBottom: '8px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                                        },
                                                                        children: getReadableParameterName(key)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4248,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge} ${value === "[PASS]" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorCompleted : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorError}`,
                                                                        children: value === "[PASS]" ? "PASS" : "FAIL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4253,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4239,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4233,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4218,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 4084,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 4057,
                                columnNumber: 17
                            }, this),
                            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                style: {
                                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                                    borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                    marginTop: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        style: {
                                            backgroundColor: isDarkMode ? "#111827" : undefined,
                                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                                            background: isDarkMode ? "linear-gradient(to right, #1e40af, #3b82f6)" : "linear-gradient(to right, #dbeafe, #eff6ff)",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>setShowParameters(!showParameters),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                            d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4288,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4287,
                                                        columnNumber: 9
                                                    }, this),
                                                    "Raw Parameter Values"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4286,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                style: {
                                                    transform: showParameters ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4303,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4292,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 4273,
                                        columnNumber: 5
                                    }, this),
                                    showParameters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: 'block',
                                                            marginBottom: '8px',
                                                            color: isDarkMode ? '#d1d5db' : '#4b5563',
                                                            fontWeight: 500
                                                        },
                                                        children: "Select Parameter Group:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4310,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedParameterGroup,
                                                        onChange: (e)=>setSelectedParameterGroup(e.target.value),
                                                        style: {
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '6px',
                                                            backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                                            color: isDarkMode ? '#e5e7eb' : '#111827',
                                                            fontSize: '14px'
                                                        },
                                                        children: Object.keys(hepsParameters).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: key,
                                                                children: getParameterGroupName(key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                lineNumber: 4332,
                                                                columnNumber: 15
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4318,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4309,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HEPSParameterDisplay, {
                                                parameters: hepsParameters[selectedParameterGroup],
                                                results: results,
                                                groupName: getParameterGroupName(selectedParameterGroup),
                                                isDarkMode: isDarkMode
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4339,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px',
                                                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#f9fafb',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4346,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 4308,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 4268,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end mt-6",
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
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4370,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4369,
                                            columnNumber: 19
                                        }, this),
                                        "Generate Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4361,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                lineNumber: 4360,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 1787,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* Test History Panel */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                            background: isDarkMode ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" : "linear-gradient(to right, #dbeafe, #eff6ff)"
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
                                        d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 4399,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4398,
                                    columnNumber: 15
                                }, this),
                                "UHF Test History"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 4397,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 4387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                        children: historyLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '20px',
                                color: isDarkMode ? '#d1d5db' : '#6b7280'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$OBC1TestPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinnerIcon,
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 12a9 9 0 11-6.219-8.56"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                        lineNumber: 4413,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4412,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Loading test history..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4415,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 4407,
                            columnNumber: 15
                        }, this) : testHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '20px',
                                color: isDarkMode ? '#d1d5db' : '#6b7280',
                                fontStyle: 'italic'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No test history available for this profile."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4424,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginTop: '8px',
                                        fontSize: '14px'
                                    },
                                    children: "Run a test to start building your history."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4425,
                                    columnNumber: 17
                                }, this),
                                !profileId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '16px',
                                        padding: '12px',
                                        backgroundColor: isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                                        borderRadius: '6px',
                                        color: isDarkMode ? '#f87171' : '#b91c1c',
                                        fontSize: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4438,
                                            columnNumber: 21
                                        }, this),
                                        " No profile ID detected. Test history requires a valid profile selection."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4430,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                            lineNumber: 4418,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: '8px',
                                                color: isDarkMode ? '#d1d5db' : '#4b5563',
                                                fontWeight: 500
                                            },
                                            children: "Select Metric:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4446,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                            children: metricOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.value, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4468,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4454,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4445,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '300px',
                                        marginBottom: '20px',
                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                        padding: '16px',
                                        borderRadius: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4483,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestHistoryChart"], {
                                            data: testHistory,
                                            metricPath: selectedMetric,
                                            metricLabel: metricOptions.find((m)=>m.value === selectedMetric)?.label || '',
                                            isDarkMode: isDarkMode
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4492,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4476,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '12px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: isDarkMode ? '#e5e7eb' : '#111827',
                                                    marginBottom: '6px'
                                                },
                                                children: "Test History Records"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                lineNumber: 4509,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4508,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 4543,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 4544,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4542,
                                                            columnNumber: 23
                                                        }, this),
                                                        isMultiSelectMode ? 'Exit Selection Mode' : 'Select Items'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4521,
                                                    columnNumber: 21
                                                }, this),
                                                isMultiSelectMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4552,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4568,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                        lineNumber: 4604,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                                    lineNumber: 4603,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Delete Selected (",
                                                                selectedItems.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4584,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4519,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4501,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        backgroundColor: isDarkMode ? '#1e293b' : '#f0f9ff',
                                        border: '1px solid',
                                        borderColor: isDarkMode ? '#475569' : '#bfdbfe'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                marginBottom: '8px',
                                                color: isDarkMode ? '#e5e7eb' : '#1e40af',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4617,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4616,
                                                    columnNumber: 21
                                                }, this),
                                                "Test History Information"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4615,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '14px',
                                                color: isDarkMode ? '#cbd5e1' : '#334155'
                                            },
                                            children: [
                                                "This chart shows only ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "real test data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4622,
                                                    columnNumber: 43
                                                }, this),
                                                " from actual hardware tests. Simulated test results are not included in this history or visualization."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4621,
                                            columnNumber: 19
                                        }, this),
                                        testHistory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                marginTop: '10px',
                                                fontSize: '14px',
                                                color: isDarkMode ? '#fb923c' : '#c2410c',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4628,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "8",
                                                            x2: "12",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4629,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "16",
                                                            x2: "12.01",
                                                            y2: "16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4630,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4627,
                                                    columnNumber: 23
                                                }, this),
                                                "No real test data is available yet. Run tests in real mode (not simulation) to collect actual data."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4626,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4614,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestHistoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestHistoryTable"], {
                                    testHistory: testHistory,
                                    isDarkMode: isDarkMode,
                                    onViewDetails: (item)=>setSelectedHistoryItem(item)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4638,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                marginBottom: '12px',
                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                            },
                                            children: "Key Metrics Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4646,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                                gap: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Average Board Temperature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4667,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                const values = testHistory.map((item)=>extractValue(item.results, 'telemetry.boardTemperature')).filter((v)=>v !== null);
                                                                if (values.length === 0) return 'N/A';
                                                                const avg = values.reduce((sum, v)=>sum + v, 0) / values.length;
                                                                return `${avg.toFixed(2)} °C`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4674,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4661,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Average PA Temperature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4699,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                const values = testHistory.map((item)=>extractValue(item.results, 'telemetry.paTemperature')).filter((v)=>v !== null);
                                                                if (values.length === 0) return 'N/A';
                                                                const avg = values.reduce((sum, v)=>sum + v, 0) / values.length;
                                                                return `${avg.toFixed(2)} °C`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4706,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4693,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Average RSSI"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4731,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontWeight: 600,
                                                                color: isDarkMode ? '#e5e7eb' : '#111827'
                                                            },
                                                            children: (()=>{
                                                                const values = testHistory.map((item)=>extractValue(item.results, 'telemetry.lastRssi')).filter((v)=>v !== null);
                                                                if (values.length === 0) return 'N/A';
                                                                const avg = values.reduce((sum, v)=>sum + v, 0) / values.length;
                                                                return `${avg.toFixed(1)}`;
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4738,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4725,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                                        borderRadius: '8px',
                                                        padding: '12px',
                                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: isDarkMode ? '#9ca3af' : '#6b7280',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Overall Success Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4763,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                            lineNumber: 4770,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4757,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4655,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4645,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '20px',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        gap: '10px',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4808,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4807,
                                                    columnNumber: 21
                                                }, this),
                                                "Clear All History"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4791,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4831,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4830,
                                                    columnNumber: 21
                                                }, this),
                                                "Clean Up Simulated Data"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4814,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4854,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4853,
                                                    columnNumber: 21
                                                }, this),
                                                "Limit History (30 Records)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4837,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                a.download = `uhf_test_history_${profileId || 'unknown'}.json`;
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    style: {
                                                        width: '16px',
                                                        height: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                        lineNumber: 4888,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                                    lineNumber: 4887,
                                                    columnNumber: 21
                                                }, this),
                                                "Export Test History"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4859,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4789,
                                    columnNumber: 17
                                }, this),
                                (cleanupMessage || limitMessage) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '12px',
                                        padding: '12px',
                                        borderRadius: '6px',
                                        backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
                                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                        fontSize: '14px'
                                    },
                                    children: [
                                        cleanupMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: cleanupMessage.includes('✅') ? isDarkMode ? '#34d399' : '#047857' : isDarkMode ? '#f87171' : '#b91c1c',
                                                marginBottom: limitMessage ? '8px' : '0'
                                            },
                                            children: cleanupMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4905,
                                            columnNumber: 23
                                        }, this),
                                        limitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: limitMessage.includes('✅') ? isDarkMode ? '#34d399' : '#047857' : isDarkMode ? '#f87171' : '#b91c1c'
                                            },
                                            children: limitMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                            lineNumber: 4916,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                                    lineNumber: 4896,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                        lineNumber: 4405,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 4380,
                columnNumber: 9
            }, this),
            selectedHistoryItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CheckoutTestProgress$2f$components$2f$TestDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestDetailsModal"], {
                test: selectedHistoryItem,
                onClose: ()=>setSelectedHistoryItem(null),
                isDarkMode: isDarkMode
            }, void 0, false, {
                fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
                lineNumber: 4934,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx",
        lineNumber: 1545,
        columnNumber: 3
    }, this);
};
_s(HEPSTestPanel, "sHOlt6zjy5+gaJ5JU6R5cLE8ow4=");
_c2 = HEPSTestPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SimulationBadge");
__turbopack_context__.k.register(_c1, "HEPSParameterDisplay");
__turbopack_context__.k.register(_c2, "HEPSTestPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_CheckoutTestProgress_components_HEPSTestPanel_tsx_71db9fe6._.js.map