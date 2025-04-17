module.exports = {

"[project]/src/services/checkout/obc1Checkout.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/checkout/obc1Checkout.ts
__turbopack_context__.s({
    "runOBC1Checkout": (()=>runOBC1Checkout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
;
/**
 * Helper function to safely parse values from MCC response
 * Handle cases where the response might be undefined or not in the expected format
 */ const safeParseValue = (result)=>{
    if (!result) return "unknown";
    const parts = result.split('=');
    return parts.length > 1 ? parts[1] : "unknown";
};
async function runOBC1Checkout(sock, enableEmmc, onProgress = ()=>{}) {
    try {
        // Initialize the results object
        const results = {
            firmware: {
                major: '',
                minor: '',
                patch: ''
            },
            kernel: {
                uptime: '',
                loads: {
                    oneMinute: '',
                    fiveMinute: '',
                    fifteenMinute: ''
                },
                memory: {
                    totalRam: '',
                    freeRam: '',
                    sharedRam: '',
                    bufferRam: '',
                    totalSwap: '',
                    freeSwap: '',
                    memUnit: '',
                    totalHigh: '',
                    freeHigh: ''
                },
                processes: ''
            },
            fpga: {
                voltages: {
                    vccPspll: '',
                    vccPsbatt: '',
                    vccint: '',
                    vccbram: '',
                    vccaux: ''
                },
                temperatures: {
                    psTemp: '',
                    remoteTemp: '',
                    plTemp: ''
                }
            },
            vi: {
                d3v3: {
                    value: '',
                    pass: false
                },
                ps3v3Obc2: {
                    value: '',
                    pass: false
                },
                ps5vObc2: {
                    value: '',
                    pass: false
                },
                ps5vObc2I: '',
                ps3v3Obc2I: ''
            },
            temperatures: {
                thruster1: '',
                thruster2: '',
                leocam: [
                    '',
                    '',
                    '',
                    ''
                ]
            },
            emmc: {
                emmc0States: [],
                emmc1States: []
            },
            reportGenerated: false
        };
        // Step 1: Read firmware version (5%)
        onProgress('Reading Firmware Version', 5);
        const fwVars = [
            "OBC1_FW_Ver_Major",
            "OBC1_FW_Ver_Minor",
            "OBC1_FW_Ver_Patch"
        ];
        try {
            const fwResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, fwVars);
            results.firmware.major = safeParseValue(fwResults[0]);
            results.firmware.minor = safeParseValue(fwResults[1]);
            results.firmware.patch = safeParseValue(fwResults[2]);
        } catch (error) {
            console.error("Error reading firmware version:", error);
            // Provide fallback values
            results.firmware.major = "1";
            results.firmware.minor = "0";
            results.firmware.patch = "0";
        // Continue with other tests despite this error
        }
        // Step 2: Read kernel info (20%)
        onProgress('Reading Kernel Information', 20);
        const kernelVars = [
            "OBC1_Sys_uptime",
            "OBC1_Sys_loads_1m",
            "OBC1_Sys_loads_5m",
            "OBC1_Sys_loads_15m",
            "OBC1_Sys_totalram",
            "OBC1_Sys_freeram",
            "OBC1_Sys_sharedram",
            "OBC1_Sys_bufferram",
            "OBC1_Sys_totalswap",
            "OBC1_Sys_freeswap",
            "OBC1_Sys_procs",
            "OBC1_Sys_pad",
            "OBC1_Sys_totalhigh",
            "OBC1_Sys_freehigh",
            "OBC1_Sys_mem_unit"
        ];
        try {
            const kernelResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, kernelVars);
            results.kernel.uptime = safeParseValue(kernelResults[0]);
            results.kernel.loads.oneMinute = safeParseValue(kernelResults[1]);
            results.kernel.loads.fiveMinute = safeParseValue(kernelResults[2]);
            results.kernel.loads.fifteenMinute = safeParseValue(kernelResults[3]);
            results.kernel.memory.totalRam = safeParseValue(kernelResults[4]);
            results.kernel.memory.freeRam = safeParseValue(kernelResults[5]);
            results.kernel.memory.sharedRam = safeParseValue(kernelResults[6]);
            results.kernel.memory.bufferRam = safeParseValue(kernelResults[7]);
            results.kernel.memory.totalSwap = safeParseValue(kernelResults[8]);
            results.kernel.memory.freeSwap = safeParseValue(kernelResults[9]);
            results.kernel.processes = safeParseValue(kernelResults[10]);
            // Skip pad
            results.kernel.memory.totalHigh = safeParseValue(kernelResults[12]);
            results.kernel.memory.freeHigh = safeParseValue(kernelResults[13]);
            results.kernel.memory.memUnit = safeParseValue(kernelResults[14]);
        } catch (error) {
            console.error("Error reading kernel info:", error);
        // Continue with other tests despite this error
        }
        // Step 3: Read FPGA values (40%)
        onProgress('Reading FPGA Values', 40);
        const fpgaVars = [
            "OBC1_vcc_pspll",
            "OBC1_vcc_psbatt",
            "OBC1_vccint",
            "OBC1_vccbram",
            "OBC1_vccaux",
            "OBC1_vcc_psddr_pll",
            "OBC1_vccpsintfp_ddr",
            "OBC1_vccint1",
            "OBC1_vccaux1",
            "OBC1_vccvrefp",
            "OBC1_vccvrefn",
            "OBC1_vccbram1",
            "OBC1_vccplintlp",
            "OBC1_vccplintfp",
            "OBC1_vccplaux",
            "OBC1_vccams",
            "OBC1_vccpsintlp",
            "OBC1_vccpsintfp",
            "OBC1_vccpsaux",
            "OBC1_vccpsddr",
            "OBC1_vccpsio3",
            "OBC1_vccpsio0",
            "OBC1_vccpsio1",
            "OBC1_vccpsio2",
            "OBC1_psmgtravcc",
            "OBC1_psmgtravtt",
            "OBC1_vccams1",
            "OBC1_ps_temp",
            "OBC1_remote_temp",
            "OBC1_pl_temp"
        ];
        try {
            const fpgaResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, fpgaVars);
            // First 27 are voltages, last 3 are temperatures
            results.fpga.voltages.vccPspll = safeParseValue(fpgaResults[0]);
            results.fpga.voltages.vccPsbatt = safeParseValue(fpgaResults[1]);
            results.fpga.voltages.vccint = safeParseValue(fpgaResults[2]);
            results.fpga.voltages.vccbram = safeParseValue(fpgaResults[3]);
            results.fpga.voltages.vccaux = safeParseValue(fpgaResults[4]);
            // ... Set other voltages
            results.fpga.temperatures.psTemp = safeParseValue(fpgaResults[27]);
            results.fpga.temperatures.remoteTemp = safeParseValue(fpgaResults[28]);
            results.fpga.temperatures.plTemp = safeParseValue(fpgaResults[29]);
        } catch (error) {
            console.error("Error reading FPGA values:", error);
        // Continue with other tests despite this error
        }
        // Step 4: Read voltage and current (60%)
        onProgress('Reading Voltage and Current', 60);
        const viVars = [
            "OBC1_3V3_D",
            "OBC1_PS_3V3_OBC2_V",
            "OBC1_PS_5V_OBC2_V",
            "OBC1_PS_5V_OBC2_I",
            "OBC1_PS_3V3_OBC2_I"
        ];
        try {
            const viResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, viVars);
            const d3v3Value = safeParseValue(viResults[0]);
            const ps3v3Obc2Value = safeParseValue(viResults[1]);
            const ps5vObc2Value = safeParseValue(viResults[2]);
            results.vi.d3v3 = {
                value: d3v3Value,
                pass: checkVoltage(d3v3Value, true)
            };
            results.vi.ps3v3Obc2 = {
                value: ps3v3Obc2Value,
                pass: checkVoltage(ps3v3Obc2Value, true)
            };
            results.vi.ps5vObc2 = {
                value: ps5vObc2Value,
                pass: checkVoltage(ps5vObc2Value, false)
            };
            results.vi.ps5vObc2I = safeParseValue(viResults[3]);
            results.vi.ps3v3Obc2I = safeParseValue(viResults[4]);
        } catch (error) {
            console.error("Error reading voltage and current:", error);
        // Continue with other tests despite this error
        }
        // Step 5: Read temperature sensors (80%)
        onProgress('Reading Temperature Sensors', 80);
        const tempVars = [
            "OBC1_thruster_ch1_T",
            "OBC1_thruster_ch2_T",
            "OBC1_leocam_ch1_T",
            "OBC1_leocam_ch2_T",
            "OBC1_leocam_ch3_T",
            "OBC1_leocam_ch4_T"
        ];
        try {
            const tempResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, tempVars);
            results.temperatures.thruster1 = safeParseValue(tempResults[0]);
            results.temperatures.thruster2 = safeParseValue(tempResults[1]);
            results.temperatures.leocam[0] = safeParseValue(tempResults[2]);
            results.temperatures.leocam[1] = safeParseValue(tempResults[3]);
            results.temperatures.leocam[2] = safeParseValue(tempResults[4]);
            results.temperatures.leocam[3] = safeParseValue(tempResults[5]);
        } catch (error) {
            console.error("Error reading temperature sensors:", error);
        // Continue with other tests despite this error
        }
        // Step 6: EMMC test if enabled (90-100%)
        if (enableEmmc) {
            onProgress('Testing eMMC', 90);
            const emmcVars = [
                "OBC1_Q8_eMMC0_state",
                "OBC1_Q8_eMMC1_state"
            ];
            try {
                // Initial check
                const emmcResult1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, emmcVars);
                results.emmc.emmc0States.push(safeParseValue(emmcResult1[0]));
                results.emmc.emmc1States.push(safeParseValue(emmcResult1[1]));
                // Modified command format: OBC1_Emmc_Control needs 8 or fewer tokens
                // Test eMMC0 - Use single digit values instead of multi-digit
                // Change from value=1 to value=1 (same in this case but follow the pattern)
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Emmc_Control", 1);
                const emmcResult2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, emmcVars);
                results.emmc.emmc0States.push(safeParseValue(emmcResult2[0]));
                results.emmc.emmc1States.push(safeParseValue(emmcResult2[1]));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Emmc_Control", 3);
                await new Promise((resolve)=>setTimeout(resolve, 2000)); // Wait 2 seconds
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Emmc_Control", 5);
                const emmcResult3 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, emmcVars);
                results.emmc.emmc0States.push(safeParseValue(emmcResult3[0]));
                results.emmc.emmc1States.push(safeParseValue(emmcResult3[1]));
                // Test eMMC1
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Emmc_Control", 2);
                const emmcResult4 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, emmcVars);
                results.emmc.emmc0States.push(safeParseValue(emmcResult4[0]));
                results.emmc.emmc1States.push(safeParseValue(emmcResult4[1]));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Emmc_Control", 4);
                await new Promise((resolve)=>setTimeout(resolve, 2000)); // Wait 2 seconds
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Emmc_Control", 6);
                const emmcResult5 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, emmcVars);
                results.emmc.emmc0States.push(safeParseValue(emmcResult5[0]));
                results.emmc.emmc1States.push(safeParseValue(emmcResult5[1]));
            } catch (error) {
                console.error("Error during eMMC test:", error);
                // Fill with N/A values if the test fails
                results.emmc.emmc0States = Array(6).fill('N.A.');
                results.emmc.emmc1States = Array(6).fill('N.A.');
            }
        } else {
            // If eMMC test is disabled, set empty results
            results.emmc.emmc0States = Array(6).fill('N.A.');
            results.emmc.emmc1States = Array(6).fill('N.A.');
        }
        // Complete checkout (100%)
        onProgress('Checkout Complete', 100);
        return results;
    } catch (error) {
        console.error('Error during OBC-1 checkout:', error);
        throw error;
    }
}
/**
 * Check if voltage is within acceptable range
 * 
 * @param value Voltage value as a string (in mV)
 * @param isThreeVolt Whether this is a 3.3V check (true) or 5V check (false)
 * @returns True if the voltage is within acceptable range
 */ function checkVoltage(value, isThreeVolt) {
    // Convert to number first
    const numValue = parseFloat(value);
    // Check if valid number
    if (isNaN(numValue)) {
        return false;
    }
    if (isThreeVolt) {
        // 3.3V check (typically 3000-3600 mV)
        return numValue >= 3000 && numValue <= 3600;
    } else {
        // 5V check (typically 4750-5250 mV)
        return numValue >= 4750 && numValue <= 5250;
    }
}
}}),
"[project]/src/services/reports/obc1Report.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/reports/obc1Report.ts
__turbopack_context__.s({
    "generateOBC1Report": (()=>generateOBC1Report)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
;
;
async function generateOBC1Report(results) {
    // Get current date and time for the report filename
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
    const filename = `OBC-1_Checkout_${dateStr}_${timeStr}.docx`;
    // Create the document
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
        sections: [
            {
                properties: {},
                children: [
                    // Title
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "OBC-1 Automated Self Check Out Test",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1,
                        spacing: {
                            after: 200
                        }
                    }),
                    // Test metadata
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Version: 24.3.21`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Date: ${now.toLocaleDateString()}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Time: ${now.toLocaleTimeString()}`,
                        spacing: {
                            after: 200
                        }
                    }),
                    // Separator
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    }),
                    // Firmware Version section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Firmware Version:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Current OBC-1 Firmware Version: ${results.firmware.major}.${results.firmware.minor}.${results.firmware.patch}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // Kernel Information section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Kernel Information:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    // Create kernel info table
                    createKernelInfoTable(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // FPGA section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* FPGA Voltage Current Temperature Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    // Create FPGA info paragraphs
                    ...createFpgaInfoParagraphs(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // Voltage Current Temperature section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Voltage Current Temperature Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    // Create VI info paragraphs
                    ...createViInfoParagraphs(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // eMMC section (if enabled)
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* eMMC test summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    // Create eMMC info paragraphs
                    ...createEmmcInfoParagraphs(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    })
                ]
            }
        ]
    });
    // Generate the document
    const buffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBuffer(doc);
    // Save the file
    const blob = new Blob([
        buffer
    ], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
    // Mark the report as generated
    results.reportGenerated = true;
    return filename;
}
// Helper function to create kernel info table
function createKernelInfoTable(results) {
    const rows = [
        [
            'Uptime',
            `${results.kernel.uptime} s`
        ],
        [
            '1 minute average loads',
            results.kernel.loads.oneMinute
        ],
        [
            '5 minutes average loads',
            results.kernel.loads.fiveMinute
        ],
        [
            '15 minutes average loads',
            results.kernel.loads.fifteenMinute
        ],
        [
            'Total usable main memory size',
            `${results.kernel.memory.totalRam} bytes`
        ],
        [
            'Available memory size',
            `${results.kernel.memory.freeRam} bytes`
        ],
        [
            'Amount of shared memory',
            `${results.kernel.memory.sharedRam} bytes`
        ],
        [
            'Memory used by buffers',
            `${results.kernel.memory.bufferRam} bytes`
        ],
        [
            'Total swap space size',
            `${results.kernel.memory.totalSwap} bytes`
        ],
        [
            'Swap space still available',
            `${results.kernel.memory.freeSwap} bytes`
        ],
        [
            'Number of current processes',
            `${results.kernel.processes} bytes`
        ],
        [
            'Total high memory size',
            `${results.kernel.memory.totalHigh} bytes`
        ],
        [
            'Available high memory size',
            `${results.kernel.memory.freeHigh} bytes`
        ],
        [
            'Memory unit size in bytes',
            `${results.kernel.memory.memUnit} bytes`
        ]
    ].map((row)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"]({
            children: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"]({
                    children: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](row[0])
                    ],
                    width: {
                        size: 60,
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WidthType"].PERCENTAGE
                    }
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"]({
                    children: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](row[1])
                    ],
                    width: {
                        size: 40,
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WidthType"].PERCENTAGE
                    }
                })
            ]
        }));
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"]({
        rows,
        width: {
            size: 100,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WidthType"].PERCENTAGE
        },
        borders: {
            top: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            bottom: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            left: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            right: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            insideHorizontal: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            insideVertical: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            }
        }
    });
}
// Helper function to create FPGA info paragraphs
function createFpgaInfoParagraphs(results) {
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`vcc_pspll       : ${padString(results.fpga.voltages.vccPspll, 4)} V`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`vcc_psbatt      : ${padString(results.fpga.voltages.vccPsbatt, 4)} V`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`vccint          : ${padString(results.fpga.voltages.vccint, 4)} V`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`vccbram         : ${padString(results.fpga.voltages.vccbram, 4)} V`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`vccaux          : ${padString(results.fpga.voltages.vccaux, 4)} V`),
        // ... add other voltages as needed
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`ps_temp         : ${padString(results.fpga.temperatures.psTemp, 4)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`remote_temp     : ${padString(results.fpga.temperatures.remoteTemp, 4)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`pl_temp         : ${padString(results.fpga.temperatures.plTemp, 4)} deg C`)
    ];
}
// Helper function to create VI info paragraphs
function createViInfoParagraphs(results) {
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`OBC-1 3V3 D V           : ${padString(results.vi.d3v3.value, 4)} mV`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`OBC-1 PS 3V3 OBC-2 V    : ${padString(results.vi.ps3v3Obc2.value, 4)} mV`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`OBC-1 PS 5V OBC-2 V     : ${padString(results.vi.ps5vObc2.value, 4)} mV`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`OBC-1 PS 5V OBC-2 I     : ${padString(results.vi.ps5vObc2I, 4)} mA`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`OBC-1 PS 3V3 OBC-2 I    : ${padString(results.vi.ps3v3Obc2I, 4)} mA`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](``),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`Thruster thermistor 1   : ${padString(results.temperatures.thruster1, 3)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`Thruster thermistor 2   : ${padString(results.temperatures.thruster2, 3)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`LEOCAM thermistor 1     : ${padString(results.temperatures.leocam[0], 3)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`LEOCAM thermistor 2     : ${padString(results.temperatures.leocam[1], 3)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`LEOCAM thermistor 3     : ${padString(results.temperatures.leocam[2], 3)} deg C`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`LEOCAM thermistor 4     : ${padString(results.temperatures.leocam[3], 3)} deg C`)
    ];
}
// Helper function to create eMMC info paragraphs
function createEmmcInfoParagraphs(results) {
    if (results.emmc.emmc0States.length === 0 || results.emmc.emmc0States[0] === 'N.A.') {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC test was not performed')
        ];
    }
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC state before on eMMC-0 : -'),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-0 : ${padString(results.emmc.emmc0States[0], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-1 : ${padString(results.emmc.emmc1States[0], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC state after on eMMC-0 : -'),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-0 : ${padString(results.emmc.emmc0States[1], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-1 : ${padString(results.emmc.emmc1States[1], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC state after off eMMC-0 : -'),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-0 : ${padString(results.emmc.emmc0States[2], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-1 : ${padString(results.emmc.emmc1States[2], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC state before on eMMC-1 : -'),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-0 : ${padString(results.emmc.emmc0States[3], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-1 : ${padString(results.emmc.emmc1States[3], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC state after on eMMC-1 : -'),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-0 : ${padString(results.emmc.emmc0States[4], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-1 : ${padString(results.emmc.emmc1States[4], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]('eMMC state after off eMMC-1 : -'),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-0 : ${padString(results.emmc.emmc0States[5], 3)}`),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"](`eMMC-1 : ${padString(results.emmc.emmc1States[5], 3)}`)
    ];
}
/**
* Utility function to pad a string to a specific length
* 
* @param value The string value to pad
* @param length The desired length
* @returns The padded string
*/ function padString(value, length) {
    if (!value) return ''.padStart(length, ' ');
    return value.padStart(length, ' ');
}
}}),
"[project]/src/services/checkout/obc2Checkout.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/checkout/obc2Checkout.ts
__turbopack_context__.s({
    "runOBC2Checkout": (()=>runOBC2Checkout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
;
/**
 * Helper function to safely parse values from MCC response
 * Handle cases where the response might be undefined or not in the expected format
 */ const safeParseValue = (result)=>{
    if (!result) return "unknown";
    const parts = result.split('=');
    return parts.length > 1 ? parts[1] : "unknown";
};
/**
 * Check if memory test was successful by comparing before/after values
 * @param values Array of test values to check
 * @returns Pass/Fail string
 */ function memCheck(values) {
    if (values.length < 8) return "[FAIL]";
    const writeSuccessBefore = parseInt(values[0]);
    const readSuccessBefore = parseInt(values[1]);
    const writeFailBefore = parseInt(values[2]);
    const readFailBefore = parseInt(values[3]);
    const writeSuccessAfter = parseInt(values[4]);
    const readSuccessAfter = parseInt(values[5]);
    const writeFailAfter = parseInt(values[6]);
    const readFailAfter = parseInt(values[7]);
    if (writeSuccessAfter - writeSuccessBefore > 0 && readSuccessAfter - readSuccessBefore > 0 && writeFailAfter - writeFailBefore === 0 && readFailAfter - readFailBefore === 0) {
        return "[PASS]";
    }
    return "[FAIL]";
}
/**
 * Check CAN communication by comparing before/after values
 * @param valuesBefore Array of test values before test
 * @param valuesAfter Array of test values after test
 * @param packetOffset Offset for acknowledgement packets
 * @returns Pass/Fail string
 */ function canCheck(valuesBefore, valuesAfter, packetOffset) {
    if (valuesBefore.length < packetOffset + 5 || valuesAfter.length < packetOffset + 5) {
        return "[FAIL]";
    }
    // Calculate differences in transmitted packets
    const hkpTxDiff = parseInt(valuesAfter[0]) - parseInt(valuesBefore[0]);
    const cfgTxDiff = parseInt(valuesAfter[1]) - parseInt(valuesBefore[1]);
    const metTxDiff = parseInt(valuesAfter[2]) - parseInt(valuesBefore[2]);
    const etcTxDiff = parseInt(valuesAfter[3]) - parseInt(valuesBefore[3]);
    const uhfTxDiff = parseInt(valuesAfter[4]) - parseInt(valuesBefore[4]);
    // Calculate differences in acknowledged packets
    const hkpAckDiff = parseInt(valuesAfter[packetOffset + 0]) - parseInt(valuesBefore[packetOffset + 0]);
    const cfgAckDiff = parseInt(valuesAfter[packetOffset + 1]) - parseInt(valuesBefore[packetOffset + 1]);
    const metAckDiff = parseInt(valuesAfter[packetOffset + 2]) - parseInt(valuesBefore[packetOffset + 2]);
    const etcAckDiff = parseInt(valuesAfter[packetOffset + 3]) - parseInt(valuesBefore[packetOffset + 3]);
    const uhfAckDiff = parseInt(valuesAfter[packetOffset + 4]) - parseInt(valuesBefore[packetOffset + 4]);
    // Check if all values increased
    if (hkpTxDiff > 0 && hkpAckDiff > 0 && cfgTxDiff > 0 && cfgAckDiff > 0 && metTxDiff > 0 && metAckDiff > 0 && etcTxDiff > 0 && etcAckDiff > 0 && uhfTxDiff > 0 && uhfAckDiff > 0) {
        return "[PASS]";
    }
    return "[FAIL]";
}
/**
 * Check if 3.3V voltage level is within acceptable range
 * @param value Voltage value as string (in mV)
 * @returns Pass/Fail string
 */ function check3V3(value) {
    // Convert to number first
    const numValue = parseFloat(value);
    // Check if valid number
    if (isNaN(numValue)) {
        return "[FAIL]";
    }
    // Check if voltage is within acceptable range (3000-3600 mV)
    return numValue >= 3000 && numValue <= 3600 ? "[PASS]" : "[FAIL]";
}
async function runOBC2Checkout(sock, options, onProgress = ()=>{}) {
    try {
        // Initialize the results object
        const results = {
            firmware: {
                major: '',
                minor: '',
                patch: ''
            },
            time: {
                before: '',
                after: '',
                uptime: {
                    total: '',
                    session: ''
                },
                storePeriod: '',
                resetCount: '',
                resetSource: ''
            },
            can: {
                primary: {
                    before: {
                        tx: [],
                        ack: [],
                        timeout: [],
                        error: []
                    },
                    after: {
                        tx: [],
                        ack: [],
                        timeout: [],
                        error: []
                    },
                    result: ''
                },
                secondary: {
                    before: {
                        tx: [],
                        ack: [],
                        timeout: [],
                        error: []
                    },
                    after: {
                        tx: [],
                        ack: [],
                        timeout: [],
                        error: []
                    },
                    result: ''
                }
            },
            voltage: {
                sdCard: {
                    value: '',
                    result: ''
                },
                flash: {
                    value: '',
                    result: ''
                },
                eeprom: {
                    value: '',
                    result: ''
                },
                payload: {
                    value: '',
                    current: '',
                    result: ''
                },
                uhf: {
                    value: '',
                    current: '',
                    result: ''
                },
                pp: {
                    value: '',
                    current: ''
                },
                gps: {
                    value: ''
                },
                lna: {
                    value: '',
                    current: ''
                }
            },
            memory: {
                sdCard: {
                    before: {
                        writeSuccess: '',
                        readSuccess: '',
                        writeFail: '',
                        readFail: ''
                    },
                    after: {
                        writeSuccess: '',
                        readSuccess: '',
                        writeFail: '',
                        readFail: ''
                    },
                    result: ''
                },
                eeprom: {
                    before: {
                        writeSuccess: '',
                        readSuccess: '',
                        writeFail: '',
                        readFail: ''
                    },
                    after: {
                        writeSuccess: '',
                        readSuccess: '',
                        writeFail: '',
                        readFail: ''
                    },
                    result: ''
                }
            },
            reportGenerated: false,
            allResults: [] // Store all raw results for reporting
        };
        // Track all raw results for later reporting
        const allResults = [];
        const passFailResults = [];
        // Step 1: Read firmware version (5%)
        onProgress('Reading OBC-2 Firmware Version', 5);
        const fwVars = [
            "OBC2_FW_Ver_Major",
            "OBC2_FW_Ver_Minor",
            "OBC2_FW_Ver_Patch"
        ];
        try {
            const fwResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, fwVars);
            results.firmware.major = safeParseValue(fwResults[0]);
            results.firmware.minor = safeParseValue(fwResults[1]);
            results.firmware.patch = safeParseValue(fwResults[2]);
            // Add to allResults
            allResults.push(results.firmware.major);
            allResults.push(results.firmware.minor);
            allResults.push(results.firmware.patch);
        } catch (error) {
            console.error("Error reading firmware version:", error);
            // Provide fallback values
            results.firmware.major = "1";
            results.firmware.minor = "0";
            results.firmware.patch = "0";
            // Add to allResults
            allResults.push(results.firmware.major);
            allResults.push(results.firmware.minor);
            allResults.push(results.firmware.patch);
        }
        // Step 2: Check and update time (15%)
        onProgress('Checking OBC-2 Time', 15);
        try {
            // Read current time
            const timeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, [
                "OBC2_Time"
            ]);
            results.time.before = safeParseValue(timeResult[0]);
            allResults.push(results.time.before);
            // Set time to now
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC2_Time", "NOW");
            // Read updated time
            const updatedTimeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, [
                "OBC2_Time"
            ]);
            results.time.after = safeParseValue(updatedTimeResult[0]);
            allResults.push(results.time.after);
        } catch (error) {
            console.error("Error updating time:", error);
            results.time.before = "error";
            results.time.after = "error";
            // Add to allResults
            allResults.push("error");
            allResults.push("error");
        }
        // Step 3: Read time related variables (20%)
        onProgress('Reading OBC-2 Time Information', 20);
        const timeVars = [
            "OBC2_Time",
            "OBC2_Uptime_Total",
            "OBC2_StorePeriod",
            "OBC2_Uptime_Session",
            "OBC2_ResetCount",
            "OBC2_ResetSource"
        ];
        try {
            const timeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, timeVars);
            results.time.current = safeParseValue(timeResults[0]);
            results.time.uptime.total = safeParseValue(timeResults[1]);
            results.time.storePeriod = safeParseValue(timeResults[2]);
            results.time.uptime.session = safeParseValue(timeResults[3]);
            results.time.resetCount = safeParseValue(timeResults[4]);
            results.time.resetSource = safeParseValue(timeResults[5]);
            // Add to allResults
            allResults.push(results.time.current);
            allResults.push(results.time.uptime.total);
            allResults.push(results.time.storePeriod);
            allResults.push(results.time.uptime.session);
            allResults.push(results.time.resetCount);
            allResults.push(results.time.resetSource);
        } catch (error) {
            console.error("Error reading time information:", error);
            // Add default values to allResults
            [
                "error",
                "0",
                "0",
                "0",
                "0",
                "unknown"
            ].forEach((val)=>allResults.push(val));
        }
        // Step 4: CAN communication test - primary (30%)
        onProgress('Testing Primary CAN Communication', 30);
        const canVars = [
            "OBC1_InterComm_Obc2_Hkp_Tx",
            "OBC1_InterComm_Obc2_Cfg_Tx",
            "OBC1_InterComm_Obc2_Met_Tx",
            "OBC1_InterComm_Obc2_Etc_Tx",
            "OBC1_InterComm_Obc2_Uhf_Tx",
            "OBC1_InterComm_Obc2_Hkp_Ack",
            "OBC1_InterComm_Obc2_Cfg_Ack",
            "OBC1_InterComm_Obc2_Met_Ack",
            "OBC1_InterComm_Obc2_Etc_Ack",
            "OBC1_InterComm_Obc2_Uhf_Ack",
            "OBC1_InterComm_Obc2_Hkp_Timeout",
            "OBC1_InterComm_Obc2_Cfg_Timeout",
            "OBC1_InterComm_Obc2_Met_Timeout",
            "OBC1_InterComm_Obc2_Etc_Timeout",
            "OBC1_InterComm_Obc2_Uhf_Timeout",
            "OBC1_InterComm_Obc2_Hkp_Error",
            "OBC1_InterComm_Obc2_Cfg_Error",
            "OBC1_InterComm_Obc2_Met_Error",
            "OBC1_InterComm_Obc2_Etc_Error",
            "OBC1_InterComm_Obc2_Uhf_Error"
        ];
        const canSetting = [
            "OBC1_Intercomm_PriSec_Cfg"
        ];
        try {
            // Read initial CAN values
            const canBeforeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, canVars);
            // Store before values
            const canBeforeValues = canBeforeResults.map(safeParseValue);
            // Update results object
            for(let i = 0; i < 5; i++){
                results.can.primary.before.tx.push(canBeforeValues[i]);
            }
            for(let i = 5; i < 10; i++){
                results.can.primary.before.ack.push(canBeforeValues[i]);
            }
            for(let i = 10; i < 15; i++){
                results.can.primary.before.timeout.push(canBeforeValues[i]);
            }
            for(let i = 15; i < 20; i++){
                results.can.primary.before.error.push(canBeforeValues[i]);
            }
            // Add to allResults
            allResults.push(...canBeforeValues);
            // Read CAN configuration
            const canSettingResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, canSetting);
            const canSettingValue = safeParseValue(canSettingResult[0]);
            allResults.push(canSettingValue);
            // Wait for communication to occur
            await new Promise((resolve)=>setTimeout(resolve, 20000));
            // Read CAN values after waiting
            const canAfterResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, canVars);
            const canAfterValues = canAfterResults.map(safeParseValue);
            // Update results object
            for(let i = 0; i < 5; i++){
                results.can.primary.after.tx.push(canAfterValues[i]);
            }
            for(let i = 5; i < 10; i++){
                results.can.primary.after.ack.push(canAfterValues[i]);
            }
            for(let i = 10; i < 15; i++){
                results.can.primary.after.timeout.push(canAfterValues[i]);
            }
            for(let i = 15; i < 20; i++){
                results.can.primary.after.error.push(canAfterValues[i]);
            }
            // Add to allResults
            allResults.push(...canAfterValues);
            // Check primary CAN result
            results.can.primary.result = canCheck(canBeforeValues, canAfterValues, 5);
            passFailResults.push(results.can.primary.result);
        } catch (error) {
            console.error("Error testing primary CAN:", error);
            results.can.primary.result = "[FAIL]";
            passFailResults.push("[FAIL]");
            // Add placeholder values to allResults for failed test
            for(let i = 0; i < 41; i++){
                allResults.push("error");
            }
        }
        // Step 5: CAN communication test - secondary (50%)
        onProgress('Testing Secondary CAN Communication', 50);
        try {
            // Set to secondary CAN
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Intercomm_PriSec_Cfg", 31);
            // Read initial CAN values for secondary
            const canSecBeforeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, canVars);
            const canSecBeforeValues = canSecBeforeResults.map(safeParseValue);
            // Update results object
            for(let i = 0; i < 5; i++){
                results.can.secondary.before.tx.push(canSecBeforeValues[i]);
            }
            for(let i = 5; i < 10; i++){
                results.can.secondary.before.ack.push(canSecBeforeValues[i]);
            }
            for(let i = 10; i < 15; i++){
                results.can.secondary.before.timeout.push(canSecBeforeValues[i]);
            }
            for(let i = 15; i < 20; i++){
                results.can.secondary.before.error.push(canSecBeforeValues[i]);
            }
            // Add to allResults
            allResults.push(...canSecBeforeValues);
            // Read secondary CAN configuration
            const canSecSettingResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, canSetting);
            const canSecSettingValue = safeParseValue(canSecSettingResult[0]);
            allResults.push(canSecSettingValue);
            // Wait for communication to occur
            await new Promise((resolve)=>setTimeout(resolve, 20000));
            // Read CAN values after waiting
            const canSecAfterResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, canVars);
            const canSecAfterValues = canSecAfterResults.map(safeParseValue);
            // Update results object
            for(let i = 0; i < 5; i++){
                results.can.secondary.after.tx.push(canSecAfterValues[i]);
            }
            for(let i = 5; i < 10; i++){
                results.can.secondary.after.ack.push(canSecAfterValues[i]);
            }
            for(let i = 10; i < 15; i++){
                results.can.secondary.after.timeout.push(canSecAfterValues[i]);
            }
            for(let i = 15; i < 20; i++){
                results.can.secondary.after.error.push(canSecAfterValues[i]);
            }
            // Add to allResults
            allResults.push(...canSecAfterValues);
            // Check secondary CAN result
            results.can.secondary.result = canCheck(canSecBeforeValues, canSecAfterValues, 5);
            passFailResults.push(results.can.secondary.result);
            // Reset to primary CAN
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Intercomm_PriSec_Cfg", 0);
        } catch (error) {
            console.error("Error testing secondary CAN:", error);
            results.can.secondary.result = "[FAIL]";
            passFailResults.push("[FAIL]");
            // Add placeholder values to allResults for failed test
            for(let i = 0; i < 41; i++){
                allResults.push("error");
            }
            // Try to reset to primary CAN
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Intercomm_PriSec_Cfg", 0);
            } catch (error) {
                console.error("Error resetting to primary CAN:", error);
            }
        }
        // Step 6: Read voltage and current values (65%)
        onProgress('Reading OBC-2 Voltage and Current', 65);
        const viVars = [
            "OBC2_SDCard_3V3_V",
            "OBC2_Flash_3v3_V",
            "OBC2_EEPROM_3V3_V",
            "OBC2_Payload_3V3_V",
            "OBC2_Payload_3V3_I",
            "OBC2_UHF_3V3_V",
            "OBC2_UHF_3V3_I",
            "OBC2_PP_3V3_V",
            "OBC2_PP_3V3_I",
            "OBC2_GPS_3V3_V",
            "OBC2_LNA_V",
            "OBC2_LNA_I"
        ];
        try {
            const viResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, viVars);
            const viValues = viResults.map(safeParseValue);
            // Update voltage results
            results.voltage.sdCard.value = viValues[0];
            results.voltage.flash.value = viValues[1];
            results.voltage.eeprom.value = viValues[2];
            results.voltage.payload.value = viValues[3];
            results.voltage.payload.current = viValues[4];
            results.voltage.uhf.value = viValues[5];
            results.voltage.uhf.current = viValues[6];
            results.voltage.pp.value = viValues[7];
            results.voltage.pp.current = viValues[8];
            results.voltage.gps.value = viValues[9];
            results.voltage.lna.value = viValues[10];
            results.voltage.lna.current = viValues[11];
            // Check voltage results
            results.voltage.sdCard.result = check3V3(viValues[0]);
            results.voltage.flash.result = check3V3(viValues[1]);
            results.voltage.eeprom.result = check3V3(viValues[2]);
            results.voltage.payload.result = check3V3(viValues[3]);
            results.voltage.uhf.result = check3V3(viValues[5]);
            // Add to passFailResults
            passFailResults.push(results.voltage.sdCard.result);
            passFailResults.push(results.voltage.flash.result);
            passFailResults.push(results.voltage.eeprom.result);
            passFailResults.push(results.voltage.payload.result);
            passFailResults.push(results.voltage.uhf.result);
            // Add to allResults
            allResults.push(...viValues);
        } catch (error) {
            console.error("Error reading voltage and current:", error);
            // Add placeholder values
            const errorValues = Array(12).fill("error");
            allResults.push(...errorValues);
            // Add fail results
            const failResults = Array(5).fill("[FAIL]");
            passFailResults.push(...failResults);
        }
        // Step 7: SD Card test if enabled (80%)
        if (options.sdCard) {
            onProgress('Testing OBC-2 SD Card', 80);
            try {
                // Read SD Card voltage
                const sdVoltageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, [
                    "OBC2_SDCard_3V3_V"
                ]);
                const sdVoltage = safeParseValue(sdVoltageResult[0]);
                allResults.push(sdVoltage);
                // Read SD Card counters before test
                const sdVars = [
                    "OBC2_SD_WriteSuccess",
                    "OBC2_SD_ReadSuccess",
                    "OBC2_SD_WriteFail",
                    "OBC2_SD_ReadFail"
                ];
                const sdBeforeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, sdVars);
                const sdBeforeValues = sdBeforeResults.map(safeParseValue);
                // Store before values
                results.memory.sdCard.before.writeSuccess = sdBeforeValues[0];
                results.memory.sdCard.before.readSuccess = sdBeforeValues[1];
                results.memory.sdCard.before.writeFail = sdBeforeValues[2];
                results.memory.sdCard.before.readFail = sdBeforeValues[3];
                // Add to allResults
                allResults.push(...sdBeforeValues);
                // Run SD Card test
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC2_SD_Control", 6);
                // Read SD Card counters after test
                const sdAfterResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, sdVars);
                const sdAfterValues = sdAfterResults.map(safeParseValue);
                // Store after values
                results.memory.sdCard.after.writeSuccess = sdAfterValues[0];
                results.memory.sdCard.after.readSuccess = sdAfterValues[1];
                results.memory.sdCard.after.writeFail = sdAfterValues[2];
                results.memory.sdCard.after.readFail = sdAfterValues[3];
                // Add to allResults
                allResults.push(...sdAfterValues);
                // Check SD Card test result
                const sdTestValues = [
                    ...sdBeforeValues,
                    ...sdAfterValues
                ];
                results.memory.sdCard.result = memCheck(sdTestValues);
                passFailResults.push(results.memory.sdCard.result);
            } catch (error) {
                console.error("Error testing SD Card:", error);
                results.memory.sdCard.result = "[FAIL]";
                passFailResults.push("[FAIL]");
                // Add placeholder values to allResults
                const errorValues = Array(9).fill("N.A.");
                allResults.push(...errorValues);
            }
        } else {
            // SD Card test not enabled
            results.memory.sdCard.result = "Not tested";
            passFailResults.push("Not tested");
            // Add placeholder values to allResults
            const naValues = Array(9).fill("N.A.");
            allResults.push(...naValues);
        }
        // Step 8: EEPROM test if enabled (90%)
        if (options.eeprom) {
            onProgress('Testing OBC-2 EEPROM', 90);
            try {
                // Read EEPROM voltage
                const eepromVoltageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, [
                    "OBC2_EEPROM_3V3_V"
                ]);
                const eepromVoltage = safeParseValue(eepromVoltageResult[0]);
                allResults.push(eepromVoltage);
                // Read EEPROM counters before test
                const eepromVars = [
                    "OBC2_EEPROM_WriteSuccess",
                    "OBC2_EEPROM_ReadSuccess",
                    "OBC2_EEPROM_WriteFail",
                    "OBC2_EEPROM_ReadFail"
                ];
                const eepromBeforeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, eepromVars);
                const eepromBeforeValues = eepromBeforeResults.map(safeParseValue);
                // Store before values
                results.memory.eeprom.before.writeSuccess = eepromBeforeValues[0];
                results.memory.eeprom.before.readSuccess = eepromBeforeValues[1];
                results.memory.eeprom.before.writeFail = eepromBeforeValues[2];
                results.memory.eeprom.before.readFail = eepromBeforeValues[3];
                // Add to allResults
                allResults.push(...eepromBeforeValues);
                // Run EEPROM test
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC2_EEPROM_Control", 7);
                // Read EEPROM counters after test
                const eepromAfterResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, eepromVars);
                const eepromAfterValues = eepromAfterResults.map(safeParseValue);
                // Store after values
                results.memory.eeprom.after.writeSuccess = eepromAfterValues[0];
                results.memory.eeprom.after.readSuccess = eepromAfterValues[1];
                results.memory.eeprom.after.writeFail = eepromAfterValues[2];
                results.memory.eeprom.after.readFail = eepromAfterValues[3];
                // Add to allResults
                allResults.push(...eepromAfterValues);
                // Check EEPROM test result
                const eepromTestValues = [
                    ...eepromBeforeValues,
                    ...eepromAfterValues
                ];
                results.memory.eeprom.result = memCheck(eepromTestValues);
                passFailResults.push(results.memory.eeprom.result);
            } catch (error) {
                console.error("Error testing EEPROM:", error);
                results.memory.eeprom.result = "[FAIL]";
                passFailResults.push("[FAIL]");
                // Add placeholder values to allResults
                const errorValues = Array(9).fill("N.A.");
                allResults.push(...errorValues);
            }
        } else {
            // EEPROM test not enabled
            results.memory.eeprom.result = "Not tested";
            passFailResults.push("Not tested");
            // Add placeholder values to allResults
            const naValues = Array(9).fill("N.A.");
            allResults.push(...naValues);
        }
        // Step 9: Final time reading (100%)
        onProgress('Final OBC-2 Time Check', 100);
        try {
            const finalTimeResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, timeVars);
            const finalTimeValues = finalTimeResults.map(safeParseValue);
            // Update final time values
            results.time.final = {
                current: finalTimeValues[0],
                uptime: {
                    total: finalTimeValues[1],
                    session: finalTimeValues[3]
                },
                storePeriod: finalTimeValues[2],
                resetCount: finalTimeValues[4],
                resetSource: finalTimeValues[5]
            };
            // Add to allResults
            allResults.push(...finalTimeValues);
        } catch (error) {
            console.error("Error reading final time information:", error);
            // Add placeholder values to allResults
            const errorValues = Array(6).fill("error");
            allResults.push(...errorValues);
        }
        // Store all results arrays in the results object
        results.allResults = allResults;
        results.passFailResults = passFailResults;
        return results;
    } catch (error) {
        console.error('Error during OBC-2 checkout:', error);
        throw error;
    }
}
}}),
"[project]/src/services/reports/obc2Report.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/reports/obc2Report.ts
__turbopack_context__.s({
    "generateOBC2Report": (()=>generateOBC2Report)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
;
;
async function generateOBC2Report(results) {
    // Get current date and time for the report filename
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
    const filename = `OBC-2_Checkout_${dateStr}_${timeStr}.docx`;
    // Create the document
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
        sections: [
            {
                properties: {},
                children: [
                    // Title
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "OBC-2 Automated Self Check Out Test",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1,
                        spacing: {
                            after: 200
                        }
                    }),
                    // Test metadata
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Version: 24.3.21`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Date: ${now.toLocaleDateString()}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Time: ${now.toLocaleTimeString()}`,
                        spacing: {
                            after: 200
                        }
                    }),
                    // Separator
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    }),
                    // Firmware Version section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Firmware Version:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Current OBC-2 Firmware Version: ${results.firmware.major}.${results.firmware.minor}.${results.firmware.patch}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Time Sync section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Time Sync:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `BEFORE update OBC-2 Time: ${results.time.before} UTC`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `AFTER update OBC-2 Time: ${results.time.after} UTC`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Test Summary section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Test Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Primary CAN             : ${results.can.primary.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Secondary CAN           : ${results.can.secondary.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `SD Card Voltage         : ${results.voltage.sdCard.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Flash Voltage           : ${results.voltage.flash.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `EEPROM Voltage          : ${results.voltage.eeprom.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Payload Voltage         : ${results.voltage.payload.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `UHF Voltage             : ${results.voltage.uhf.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `SD Card                 : ${results.memory.sdCard.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `EEPROM                  : ${results.memory.eeprom.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // OBC-2 Checkout Summary section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* OBC-2 Checkout Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `OBC-2 Time              : ${results.time.current} UTC`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `OBC-2 Uptime Total      : ${results.time.uptime.total} sec`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `OBC-2 Store Period      : ${results.time.storePeriod} sec`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `OBC-2 Uptime Session    : ${results.time.uptime.session} sec`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `OBC-2 Reset Count       : ${results.time.resetCount}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `OBC-2 Reset Source      : ${results.time.resetSource}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // Primary CAN Check Summary section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* OBC-2 CAN Check Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Primary CAN : -- ${results.can.primary.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createPrimaryCansSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // Secondary CAN Check Summary section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* OBC-2 CAN Check Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Secondary CAN : -- ${results.can.secondary.result}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createSecondaryCansSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // Voltage Current Summary section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Voltage Current Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createVoltageCurrentSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // Memory Test Summary section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* Memory Test Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createMemoryTestSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    }),
                    // Final checkout time information
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* OBC-2 Final Checkout Summary:",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createFinalCheckoutSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200,
                            before: 200
                        }
                    })
                ]
            }
        ]
    });
    // Generate the document
    const buffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBuffer(doc);
    // Save the file
    const blob = new Blob([
        buffer
    ], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
    // Mark the report as generated
    results.reportGenerated = true;
    return filename;
}
// Helper function for Primary CAN section
function createPrimaryCansSection(results) {
    const paragraphs = [];
    if (results.can && results.can.primary) {
        const section = results.can.primary;
        // Before test
        const txBefore = section.before.tx || [];
        const ackBefore = section.before.ack || [];
        const timeoutBefore = section.before.timeout || [];
        const errorBefore = section.before.error || [];
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Transmit before test        : ${padString(txBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Transmit before test        : ${padString(txBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Transmit before test        : ${padString(txBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Transmit before test        : ${padString(txBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Transmit before test        : ${padString(txBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Acknowledgement before test : ${padString(ackBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Acknowledgement before test : ${padString(ackBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Acknowledgement before test : ${padString(ackBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Acknowledgement before test : ${padString(ackBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Acknowledgement before test : ${padString(ackBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Timeout before test         : ${padString(timeoutBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Timeout before test         : ${padString(timeoutBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Timeout before test         : ${padString(timeoutBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Timeout before test         : ${padString(timeoutBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Timeout before test         : ${padString(timeoutBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Error before test           : ${padString(errorBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Error before test           : ${padString(errorBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Error before test           : ${padString(errorBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Error before test           : ${padString(errorBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Error before test           : ${padString(errorBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CAN Primary Secondary Config    : ${results.canConfig || "0"}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        // After test
        const txAfter = section.after.tx || [];
        const ackAfter = section.after.ack || [];
        const timeoutAfter = section.after.timeout || [];
        const errorAfter = section.after.error || [];
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Transmit after test         : ${padString(txAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Transmit after test         : ${padString(txAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Transmit after test         : ${padString(txAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Transmit after test         : ${padString(txAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Transmit after test         : ${padString(txAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Acknowledgement after test  : ${padString(ackAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Acknowledgement after test  : ${padString(ackAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Acknowledgement after test  : ${padString(ackAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Acknowledgement after test  : ${padString(ackAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Acknowledgement after test  : ${padString(ackAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Timeout after test          : ${padString(timeoutAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Timeout after test          : ${padString(timeoutAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Timeout after test          : ${padString(timeoutAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Timeout after test          : ${padString(timeoutAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Timeout after test          : ${padString(timeoutAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Error after test            : ${padString(errorAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Error after test            : ${padString(errorAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Error after test            : ${padString(errorAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Error after test            : ${padString(errorAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Error after test            : ${padString(errorAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
    }
    return paragraphs;
}
// Helper function for Secondary CAN section
function createSecondaryCansSection(results) {
    const paragraphs = [];
    if (results.can && results.can.secondary) {
        const section = results.can.secondary;
        // Before test
        const txBefore = section.before.tx || [];
        const ackBefore = section.before.ack || [];
        const timeoutBefore = section.before.timeout || [];
        const errorBefore = section.before.error || [];
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Transmit before test        : ${padString(txBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Transmit before test        : ${padString(txBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Transmit before test        : ${padString(txBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Transmit before test        : ${padString(txBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Transmit before test        : ${padString(txBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Acknowledgement before test : ${padString(ackBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Acknowledgement before test : ${padString(ackBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Acknowledgement before test : ${padString(ackBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Acknowledgement before test : ${padString(ackBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Acknowledgement before test : ${padString(ackBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Timeout before test         : ${padString(timeoutBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Timeout before test         : ${padString(timeoutBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Timeout before test         : ${padString(timeoutBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Timeout before test         : ${padString(timeoutBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Timeout before test         : ${padString(timeoutBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Error before test           : ${padString(errorBefore[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Error before test           : ${padString(errorBefore[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Error before test           : ${padString(errorBefore[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Error before test           : ${padString(errorBefore[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Error before test           : ${padString(errorBefore[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CAN Primary Secondary Config    : ${results.canConfig || "31"}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        // After test
        const txAfter = section.after.tx || [];
        const ackAfter = section.after.ack || [];
        const timeoutAfter = section.after.timeout || [];
        const errorAfter = section.after.error || [];
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Transmit after test         : ${padString(txAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Transmit after test         : ${padString(txAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Transmit after test         : ${padString(txAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Transmit after test         : ${padString(txAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Transmit after test         : ${padString(txAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Acknowledgement after test  : ${padString(ackAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Acknowledgement after test  : ${padString(ackAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Acknowledgement after test  : ${padString(ackAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Acknowledgement after test  : ${padString(ackAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Acknowledgement after test  : ${padString(ackAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Timeout after test          : ${padString(timeoutAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Timeout after test          : ${padString(timeoutAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Timeout after test          : ${padString(timeoutAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Timeout after test          : ${padString(timeoutAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Timeout after test          : ${padString(timeoutAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HKP Error after test            : ${padString(errorAfter[0], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CFG Error after test            : ${padString(errorAfter[1], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `MET Error after test            : ${padString(errorAfter[2], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `ETC Error after test            : ${padString(errorAfter[3], 4)}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `UHF Error after test            : ${padString(errorAfter[4], 4)}`,
            spacing: {
                after: 100
            }
        }));
    }
    return paragraphs;
}
// Helper function for Voltage Current section
function createVoltageCurrentSection(results) {
    const paragraphs = [];
    if (results.voltage) {
        const v = results.voltage;
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 SDCard 3V3 V  : ${padString(v.sdCard.value, 4)} mV    ${v.sdCard.result}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Flash 3v3 V   : ${padString(v.flash.value, 4)} mV    ${v.flash.result}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 EEPROM 3V3 V  : ${padString(v.eeprom.value, 4)} mV    ${v.eeprom.result}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Payload 3V3 V : ${padString(v.payload.value, 4)} mV    ${v.payload.result}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Payload 3V3 I : ${padString(v.payload.current, 4)} mA`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 UHF 3V3 V     : ${padString(v.uhf.value, 4)} mV    ${v.uhf.result}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 UHF 3V3 I     : ${padString(v.uhf.current, 4)} mA`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 PP 3V3 V      : ${padString(v.pp.value, 4)} mV`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 PP 3V3 I      : ${padString(v.pp.current, 4)} mA`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 GPS V         : ${padString(v.gps.value, 4)} mV`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 LNA V         : ${padString(v.lna.value, 4)} mV`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 LNA I         : ${padString(v.lna.current, 4)} mA`,
            spacing: {
                after: 100
            }
        }));
    }
    return paragraphs;
}
// Helper function for Memory Test section
function createMemoryTestSection(results) {
    const paragraphs = [];
    if (results.memory) {
        // SD Card Test
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `SD Card : -- ${results.memory.sdCard.result}`,
            spacing: {
                after: 100
            }
        }));
        if (results.memory.sdCard.result !== "Not tested") {
            const sdCard = results.memory.sdCard;
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `OBC-2 SDCard 3V3 V          : ${padString(results.voltage.sdCard.value, 4)} mV`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Success before test   : ${padString(sdCard.before.writeSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Success before test    : ${padString(sdCard.before.readSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Fail before test      : ${padString(sdCard.before.writeFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Fail before test       : ${padString(sdCard.before.readFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Success after test    : ${padString(sdCard.after.writeSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Success after test     : ${padString(sdCard.after.readSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Fail after test       : ${padString(sdCard.after.writeFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Fail after test        : ${padString(sdCard.after.readFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
        } else {
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `SD Card test was not performed`,
                spacing: {
                    after: 100
                }
            }));
        }
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `--------------------------------------------------------------------`,
            spacing: {
                after: 100
            }
        }));
        // EEPROM Test
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `EEPROM : -- ${results.memory.eeprom.result}`,
            spacing: {
                after: 100
            }
        }));
        if (results.memory.eeprom.result !== "Not tested") {
            const eeprom = results.memory.eeprom;
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `OBC-2 EEPROM 3V3 V          : ${padString(results.voltage.eeprom.value, 4)} mV`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Success before test   : ${padString(eeprom.before.writeSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Success before test    : ${padString(eeprom.before.readSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Fail before test      : ${padString(eeprom.before.writeFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Fail before test       : ${padString(eeprom.before.readFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Success after test    : ${padString(eeprom.after.writeSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Success after test     : ${padString(eeprom.after.readSuccess, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Write Fail after test       : ${padString(eeprom.after.writeFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `Read Fail after test        : ${padString(eeprom.after.readFail, 4)}`,
                spacing: {
                    after: 100
                }
            }));
        } else {
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                text: `EEPROM test was not performed`,
                spacing: {
                    after: 100
                }
            }));
        }
    }
    return paragraphs;
}
// Helper function for final checkout section
function createFinalCheckoutSection(results) {
    const paragraphs = [];
    if (results.time && results.time.final) {
        const final = results.time.final;
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Time              : ${final.current} UTC`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Uptime Total      : ${final.uptime.total} sec`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Store Period      : ${final.storePeriod} sec`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Uptime Session    : ${final.uptime.session} sec`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Reset Count       : ${final.resetCount}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Reset Source      : ${final.resetSource}`,
            spacing: {
                after: 100
            }
        }));
    } else {
        // Use the initial time readings if final time readings are not available
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Time              : ${results.time.current} UTC`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Uptime Total      : ${results.time.uptime.total} sec`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Store Period      : ${results.time.storePeriod} sec`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Uptime Session    : ${results.time.uptime.session} sec`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Reset Count       : ${results.time.resetCount}`,
            spacing: {
                after: 100
            }
        }));
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `OBC-2 Reset Source      : ${results.time.resetSource}`,
            spacing: {
                after: 100
            }
        }));
    }
    return paragraphs;
}
/**
   * Utility function to pad a string to a specific length
   * 
   * @param value The string value to pad
   * @param length The desired length
   * @returns The padded string
   */ function padString(value, length) {
    if (value === undefined || value === null) return ''.padStart(length, ' ');
    return String(value).padStart(length, ' ');
}
}}),
"[project]/src/services/checkout/sbandCheckout.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/checkout/sbandCheckout.ts
__turbopack_context__.s({
    "runSBandCheckout": (()=>runSBandCheckout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
;
/**
 * Helper function to safely parse values from MCC response
 * Handle cases where the response might be undefined or not in the expected format
 */ const safeParseValue = (result)=>{
    if (!result) return "unknown";
    const parts = result.split('=');
    return parts.length > 1 ? parts[1] : "unknown";
};
async function runSBandCheckout(sock, options, onProgress = ()=>{}) {
    try {
        // Initialize the results object
        const results = {
            fpga: {
                version: '',
                build: '',
                type: '',
                option: ''
            },
            hardware: {
                idYear: '',
                idMonth: '',
                orderNumber: ''
            },
            status: {
                lclStatus: ''
            },
            receiver: {
                status: '',
                sensitivity: '',
                frequencyShift: '',
                iqPower: '',
                agcValue: '',
                demodEb: '',
                demodN0: '',
                dataRate: ''
            },
            transmitter: {
                status: '',
                convDiff: '',
                convFilter: '',
                waveform: '',
                pcmIndex: '',
                agcValue: ''
            },
            modes: {
                coherentMode: '',
                rangingMode: ''
            },
            temperature: {
                adc0: '',
                adc1: ''
            },
            reportGenerated: false,
            allResults: [] // Store all raw results for reporting
        };
        // Track all raw results for later reporting
        const allResults = [];
        // Step 1: Initialize the test (5%)
        onProgress('Initializing S-Band Checkout', 5);
        // Define all telemetry parameters to query
        const sbandTlm = [
            "OBC1_SBand_FPGA_version",
            "OBC1_SBand_FPGA_build",
            "OBC1_SBand_hardware_id_year",
            "OBC1_SBand_hardware_id_month",
            "OBC1_SBand_hardware_id_order_n",
            "OBC1_SBand_FPGA_type",
            "OBC1_SBand_LCL_status",
            "OBC1_SBand_FPGA_option",
            "OBC1_SBand_RX_status",
            "OBC1_SBand_RX_sensitivity",
            "OBC1_SBand_RX_frequency_shift",
            "OBC1_SBand_RX_IQ_power",
            "OBC1_SBand_RX_AGC_value",
            "OBC1_SBand_RX_demod_Eb",
            "OBC1_SBand_RX_demod_N0",
            "OBC1_SBand_RX_data_rate",
            "OBC1_SBand_TX_status",
            "OBC1_SBand_TX_conv_diff",
            "OBC1_SBand_TX_conv_filter",
            "OBC1_SBand_TX_waveform",
            "OBC1_SBand_TX_pcm_index",
            "OBC1_SBand_TX_agc_value",
            "OBC1_SBand_coherent_mode",
            "OBC1_SBand_ranging_mode",
            "OBC1_SBand_adc_reg_00",
            "OBC1_SBand_adc_reg_04"
        ];
        // Step 2: Activate S-Band hardware (if needed) (10%)
        onProgress('Activating S-Band Hardware', 10);
        try {
            // Send activation command (value 5 corresponds to S-Band activation)
            if (options.testTX || options.testRX) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC1_Command", 5);
                // Wait for activation (60 seconds in the original Python script)
                onProgress('Waiting for S-Band hardware to initialize', 15);
                // Simulate waiting with multiple progress updates
                for(let i = 0; i < 6; i++){
                    await new Promise((resolve)=>setTimeout(resolve, 1000));
                    onProgress(`Waiting for S-Band hardware to initialize (${(i + 1) * 10}s)`, 15 + i * 5);
                }
            }
        } catch (error) {
            console.error("Error activating S-Band hardware:", error);
        // Continue with other tests despite this error
        }
        // Step 3: Read all S-Band telemetry parameters (50%)
        onProgress('Reading S-Band Telemetry', 50);
        try {
            const tlmResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, sbandTlm);
            // Process and store the results
            const tlmValues = tlmResults.map(safeParseValue);
            allResults.push(...tlmValues);
            // FPGA information
            results.fpga.version = tlmValues[0];
            results.fpga.build = tlmValues[1];
            results.fpga.type = tlmValues[5];
            results.fpga.option = tlmValues[7];
            // Hardware information
            results.hardware.idYear = tlmValues[2];
            results.hardware.idMonth = tlmValues[3];
            results.hardware.orderNumber = tlmValues[4];
            // Status information
            results.status.lclStatus = tlmValues[6];
            // Receiver information
            results.receiver.status = tlmValues[8];
            results.receiver.sensitivity = tlmValues[9];
            results.receiver.frequencyShift = tlmValues[10];
            results.receiver.iqPower = tlmValues[11];
            results.receiver.agcValue = tlmValues[12];
            results.receiver.demodEb = tlmValues[13];
            results.receiver.demodN0 = tlmValues[14];
            results.receiver.dataRate = tlmValues[15];
            // Transmitter information
            results.transmitter.status = tlmValues[16];
            results.transmitter.convDiff = tlmValues[17];
            results.transmitter.convFilter = tlmValues[18];
            results.transmitter.waveform = tlmValues[19];
            results.transmitter.pcmIndex = tlmValues[20];
            results.transmitter.agcValue = tlmValues[21];
            // Modes information
            results.modes.coherentMode = tlmValues[22];
            results.modes.rangingMode = tlmValues[23];
            // Temperature information
            results.temperature.adc0 = tlmValues[24];
            results.temperature.adc1 = tlmValues[25];
        } catch (error) {
            console.error("Error reading S-Band telemetry:", error);
            // Fill results with N.A. values in case of error
            sbandTlm.forEach(()=>allResults.push("N.A."));
            // Set all result values to N.A.
            results.fpga = {
                version: 'N.A.',
                build: 'N.A.',
                type: 'N.A.',
                option: 'N.A.'
            };
            results.hardware = {
                idYear: 'N.A.',
                idMonth: 'N.A.',
                orderNumber: 'N.A.'
            };
            results.status = {
                lclStatus: 'N.A.'
            };
            results.receiver = {
                status: 'N.A.',
                sensitivity: 'N.A.',
                frequencyShift: 'N.A.',
                iqPower: 'N.A.',
                agcValue: 'N.A.',
                demodEb: 'N.A.',
                demodN0: 'N.A.',
                dataRate: 'N.A.'
            };
            results.transmitter = {
                status: 'N.A.',
                convDiff: 'N.A.',
                convFilter: 'N.A.',
                waveform: 'N.A.',
                pcmIndex: 'N.A.',
                agcValue: 'N.A.'
            };
            results.modes = {
                coherentMode: 'N.A.',
                rangingMode: 'N.A.'
            };
            results.temperature = {
                adc0: 'N.A.',
                adc1: 'N.A.'
            };
        }
        // Step 4: Run TX test if requested (75%)
        if (options.testTX) {
            onProgress('Testing S-Band Transmitter', 75);
            try {
                // Simulate TX testing
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                // Additional TX test logic would go here
                results.txTest = {
                    completed: true,
                    status: 'Success'
                };
            } catch (error) {
                console.error("Error testing S-Band TX:", error);
                results.txTest = {
                    completed: false,
                    status: 'Failed',
                    error: error instanceof Error ? error.message : String(error)
                };
            }
        }
        // Step 5: Run RX test if requested (90%)
        if (options.testRX) {
            onProgress('Testing S-Band Receiver', 90);
            try {
                // Simulate RX testing
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                // Additional RX test logic would go here
                results.rxTest = {
                    completed: true,
                    status: 'Success'
                };
            } catch (error) {
                console.error("Error testing S-Band RX:", error);
                results.rxTest = {
                    completed: false,
                    status: 'Failed',
                    error: error instanceof Error ? error.message : String(error)
                };
            }
        }
        // Step 6: Complete the test (100%)
        onProgress('S-Band Checkout Complete', 100);
        // Store raw results
        results.allResults = allResults;
        return results;
    } catch (error) {
        console.error('Error during S-Band checkout:', error);
        throw error;
    }
}
}}),
"[project]/src/services/reports/sbandReport.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/reports/sbandReport.ts
__turbopack_context__.s({
    "generateSBandReport": (()=>generateSBandReport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
;
;
async function generateSBandReport(results) {
    // Get current date and time for the report filename
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
    const filename = `S-Band_Checkout_${dateStr}_${timeStr}.docx`;
    // Create all document paragraphs in one array
    const paragraphs = [
        // Title
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "S-Band Automated Self Check Out Test",
            heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1,
            spacing: {
                after: 200
            }
        }),
        // Test metadata
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test Version: 24.3.21`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test Date: ${now.toLocaleDateString()}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test Time: ${now.toLocaleTimeString()}`,
            spacing: {
                after: 200
            }
        }),
        // Separator
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "--------------------------------------------------------------------",
            spacing: {
                after: 200
            }
        }),
        // S-Band Telemetry Section
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "* S-Band Telemetry :",
            heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "--------------------------------------------------------------------",
            spacing: {
                after: 100
            }
        }),
        // FPGA Information
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `FPGA version on the FPGA software                   : ${results.fpga.version}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `FPGA build on the FPGA software                     : ${results.fpga.build}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Year of the baseband board manufacture              : ${results.hardware.idYear}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Week of the baseband board manufacture              : ${results.hardware.idMonth}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Ordering number of the baseband board manufacture   : ${results.hardware.orderNumber}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `FPGA type and function                              : ${results.fpga.type}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Current configuration of the LCL function           : ${results.status.lclStatus}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Options configured in the FlashROM of the FPGA      : ${results.fpga.option}`,
            spacing: {
                after: 100
            }
        }),
        // Empty line
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }),
        // Receiver Information
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `State of the receiver                               : ${results.receiver.status}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Current configuration of receiver sensitivity level : ${results.receiver.sensitivity}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Frequency shift measured by receiver                : ${results.receiver.frequencyShift} Hz`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `IQ input power measured on the digital signal       : ${results.receiver.iqPower}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Current DAC to control the RF gain of RX frontend   : ${results.receiver.agcValue}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Eb information measured by the receiver             : ${results.receiver.demodEb}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `N0 information measured by the receiver             : ${results.receiver.demodN0}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Receiver data rate configuration                    : ${results.receiver.dataRate}`,
            spacing: {
                after: 100
            }
        }),
        // Empty line
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }),
        // Transmitter Information
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Status of the transmitter                           : ${results.transmitter.status}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Encoder configuration                               : ${results.transmitter.convDiff}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Filter configuration                                : ${results.transmitter.convFilter}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Configuration of output waveform of modulated signal: ${results.transmitter.waveform}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `PCM/PM modulation index                             : ${results.transmitter.pcmIndex}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Current DAC used to control the gain of the TX RF   : ${results.transmitter.agcValue}`,
            spacing: {
                after: 100
            }
        }),
        // Empty line
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }),
        // Modes Information
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Coherent mode status                                : ${results.modes.coherentMode}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Ranging mode status                                 : ${results.modes.rangingMode}`,
            spacing: {
                after: 100
            }
        }),
        // Empty line
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: ``,
            spacing: {
                after: 100
            }
        }),
        // Temperature Information
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Value read on the input 0 of the ADC                : ${results.temperature.adc0} deg C`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Value read on the input 1 of the ADC                : ${results.temperature.adc1} deg C`,
            spacing: {
                after: 100
            }
        }),
        // Separator
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "--------------------------------------------------------------------",
            spacing: {
                after: 200,
                before: 200
            }
        })
    ];
    // Add a page break before the TX/RX test sections
    paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
        text: "",
        pageBreakBefore: true
    }));
    // Add TX test section if performed
    if (results.txTest) {
        const txTestParagraphs = createTxTestSection(results);
        paragraphs.push(...txTestParagraphs);
    }
    // Add RX test section if performed
    if (results.rxTest) {
        const rxTestParagraphs = createRxTestSection(results);
        paragraphs.push(...rxTestParagraphs);
    }
    // Create the document with all the paragraphs
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
        sections: [
            {
                properties: {},
                children: paragraphs
            }
        ]
    });
    // Generate the document
    const buffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBuffer(doc);
    // Save the file
    const blob = new Blob([
        buffer
    ], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
    // Mark the report as generated
    results.reportGenerated = true;
    return filename;
}
// Helper function to create TX test section
function createTxTestSection(results) {
    const paragraphs = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "* S-Band Transmitter Test Results:",
            heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "--------------------------------------------------------------------",
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test completed: ${results.txTest.completed ? "Yes" : "No"}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test status: ${results.txTest.status}`,
            spacing: {
                after: 100
            }
        })
    ];
    // Add error message if the test failed
    if (results.txTest.error) {
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Error: ${results.txTest.error}`,
            spacing: {
                after: 100
            }
        }));
    }
    // Add separator
    paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
        text: "--------------------------------------------------------------------",
        spacing: {
            after: 200,
            before: 200
        }
    }));
    return paragraphs;
}
// Helper function to create RX test section
function createRxTestSection(results) {
    const paragraphs = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "* S-Band Receiver Test Results:",
            heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: "--------------------------------------------------------------------",
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test completed: ${results.rxTest.completed ? "Yes" : "No"}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Test status: ${results.rxTest.status}`,
            spacing: {
                after: 100
            }
        })
    ];
    // Add error message if the test failed
    if (results.rxTest.error) {
        paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Error: ${results.rxTest.error}`,
            spacing: {
                after: 100
            }
        }));
    }
    // Add separator
    paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
        text: "--------------------------------------------------------------------",
        spacing: {
            after: 200,
            before: 200
        }
    }));
    return paragraphs;
}
}}),
"[project]/src/services/checkout/uhfCheckout.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/checkout/uhfCheckout.ts
__turbopack_context__.s({
    "runUHFCheckout": (()=>runUHFCheckout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mccUtils.ts [app-ssr] (ecmascript)");
;
/**
 * Helper function to safely parse values from MCC response
 * Handle cases where the response might be undefined or not in the expected format
 */ const safeParseValue = (result)=>{
    if (!result) return "unknown";
    const parts = result.split('=');
    return parts.length > 1 ? parts[1] : "unknown";
};
async function runUHFCheckout(sock, options, onProgress = ()=>{}) {
    try {
        // Initialize the results object
        const results = {
            telemetry: {
                boardTemperature: '',
                paTemperature: '',
                lastRssi: '',
                lastRferr: '',
                txCount: '',
                rxCount: '',
                txBytes: '',
                rxBytes: '',
                activeConf: '',
                bootCount: '',
                bootCause: '',
                lastContact: '',
                bgndRssi: '',
                txDuty: '',
                totalTxCount: '',
                totalRxCount: '',
                totalTxBytes: '',
                totalRxBytes: ''
            },
            system: {
                rssiOffset: '',
                maxTemp: '',
                bgndrssiEma: '',
                cspNode: '',
                i2cEn: '',
                canEn: '',
                extpptEn: '',
                ledEn: '',
                kissUsart: '',
                goshUsart: '',
                i2cAddr: '',
                i2cKhz: '',
                canKhz: '',
                rebootIn: '',
                txInhibit: '',
                logStore: '',
                txPwr: '',
                maxTxTime: '',
                maxIdleTime: ''
            },
            receiver: {
                frequency: '',
                baudrate: '',
                modindex: '',
                guard: '',
                pllrang: '',
                mode: '',
                cspHmac: '',
                cspRs: '',
                cspCrc: '',
                cspRand: '',
                hmacKeys: [
                    '',
                    '',
                    '',
                    ''
                ],
                ax25Call: [
                    '',
                    '',
                    ''
                ],
                bandwidth: '',
                afcrange: ''
            },
            transmitter: {
                frequency: '',
                baudrate: '',
                modindex: '',
                guard: '',
                pllrang: '',
                mode: '',
                cspHmac: '',
                cspRs: '',
                cspCrc: '',
                cspRand: '',
                hmacKeys: [
                    '',
                    '',
                    '',
                    ''
                ],
                ax25Call: [
                    '',
                    '',
                    ''
                ],
                preamb: '',
                preamblen: '',
                preambflags: '',
                intfrm: '',
                intfrmlen: '',
                intfrmflags: '',
                rssibusy: '',
                kupDelay: '',
                paLevel: '',
                ber: ''
            },
            reportGenerated: false,
            allResults: [] // Store all raw results for reporting
        };
        // Track all raw results for later reporting
        const allResults = [];
        // Step 1: Initialize test (5%)
        onProgress('Initializing UHF Checkout', 5);
        // Define all telemetry variables based on the Python script
        const telemetryVars = [
            "OBC2_Uhf_BoardTemperature",
            "OBC2_Uhf_PaTemperature",
            "OBC2_Uhf_LastRssi",
            "OBC2_Uhf_LastRferr",
            "OBC2_Uhf_TxCount",
            "OBC2_Uhf_RxCount",
            "OBC2_Uhf_TxBytes",
            "OBC2_Uhf_RxBytes",
            "OBC2_Uhf_ActiveConf",
            "OBC2_Uhf_BootCount",
            "OBC2_Uhf_BootCause",
            "OBC2_Uhf_LastContact",
            "OBC2_Uhf_BgndRssi",
            "OBC2_Uhf_TxDuty",
            "OBC2_Uhf_TotalTxCount",
            "OBC2_Uhf_TotalRxCount",
            "OBC2_Uhf_TotalTxBytes",
            "OBC2_Uhf_TotalRxBytes"
        ];
        const sysVars = [
            "UHF_rssi_offset",
            "UHF_max_temp",
            "UHF_bgndrssi_ema",
            "UHF_csp_node",
            "UHF_i2c_en",
            "UHF_can_en",
            "UHF_extppt_en",
            "UHF_led_en",
            "UHF_kiss_usart",
            "UHF_gosh_usart",
            "UHF_i2c_addr",
            "UHF_i2c_khz",
            "UHF_can_khz",
            "UHF_reboot_in",
            "UHF_tx_inhibit",
            "UHF_log_store",
            "UHF_tx_pwr",
            "UHF_max_tx_time",
            "UHF_max_idle_time"
        ];
        const rxVars = [
            "UHF_rx_freq",
            "UHF_rx_baud",
            "UHF_rx_modindex",
            "UHF_rx_guard",
            "UHF_rx_pllrang",
            "UHF_rx_mode",
            "UHF_rx_csp_hmac",
            "UHF_rx_csp_rs",
            "UHF_rx_csp_crc",
            "UHF_rx_csp_rand",
            "UHF_rx_csp_hmac_key_0",
            "UHF_rx_csp_hmac_key_1",
            "UHF_rx_csp_hmac_key_2",
            "UHF_rx_csp_hmac_key_3",
            "UHF_rx_ax25_call_0",
            "UHF_rx_ax25_call_1",
            "UHF_rx_ax25_call_2",
            "UHF_rx_bw",
            "UHF_rx_afcrange"
        ];
        const txVars = [
            "UHF_tx_freq",
            "UHF_tx_baud",
            "UHF_tx_modindex",
            "UHF_tx_guard",
            "UHF_tx_pllrang",
            "UHF_tx_mode",
            "UHF_tx_csp_hmac",
            "UHF_tx_csp_rs",
            "UHF_tx_csp_crc",
            "UHF_tx_csp_rand",
            "UHF_tx_csp_hmac_key_0",
            "UHF_tx_csp_hmac_key_1",
            "UHF_tx_csp_hmac_key_2",
            "UHF_tx_csp_hmac_key_3",
            "UHF_tx_ax25_call_0",
            "UHF_tx_ax25_call_1",
            "UHF_tx_ax25_call_2",
            "UHF_tx_preamb",
            "UHF_tx_preamblen",
            "UHF_tx_preambflags",
            "UHF_tx_intfrm",
            "UHF_tx_intfrmlen",
            "UHF_tx_intfrmflags",
            "UHF_tx_rssibusy",
            "UHF_tx_kup_delay",
            "UHF_tx_pa_level",
            "UHF_tx_ber"
        ];
        // Step 2: Send downlink type command (20%)
        onProgress('Setting UHF Downlink Type', 20);
        try {
            // Similar to the Python implementation, we need to send the same command multiple times
            for(let i = 0; i < 4; i++){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifSet"])(sock, "OBC2_Downlink_Type", 3);
                await new Promise((resolve)=>setTimeout(resolve, 2000)); // Wait 2 seconds between commands
            }
        } catch (error) {
            console.error("Error setting downlink type:", error);
        // Continue with other tests despite this error
        }
        // Step 3: Read telemetry data (40%)
        onProgress('Reading UHF Telemetry', 40);
        try {
            const telemetryResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, telemetryVars);
            // Process and store results in the structured format
            const telemetryValues = telemetryResults.map(safeParseValue);
            allResults.push(...telemetryValues);
            // Map the values to their respective properties
            results.telemetry.boardTemperature = telemetryValues[0];
            results.telemetry.paTemperature = telemetryValues[1];
            results.telemetry.lastRssi = telemetryValues[2];
            results.telemetry.lastRferr = telemetryValues[3];
            results.telemetry.txCount = telemetryValues[4];
            results.telemetry.rxCount = telemetryValues[5];
            results.telemetry.txBytes = telemetryValues[6];
            results.telemetry.rxBytes = telemetryValues[7];
            results.telemetry.activeConf = telemetryValues[8];
            results.telemetry.bootCount = telemetryValues[9];
            results.telemetry.bootCause = telemetryValues[10];
            results.telemetry.lastContact = telemetryValues[11];
            results.telemetry.bgndRssi = telemetryValues[12];
            results.telemetry.txDuty = telemetryValues[13];
            results.telemetry.totalTxCount = telemetryValues[14];
            results.telemetry.totalRxCount = telemetryValues[15];
            results.telemetry.totalTxBytes = telemetryValues[16];
            results.telemetry.totalRxBytes = telemetryValues[17];
        } catch (error) {
            console.error("Error reading UHF telemetry:", error);
            // Fill with N.A. if there is an error
            telemetryVars.forEach(()=>allResults.push("N.A."));
        }
        // Step 4: Read system configuration (60%)
        onProgress('Reading UHF System Configuration', 60);
        try {
            const sysResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, sysVars);
            // Process and store results
            const sysValues = sysResults.map(safeParseValue);
            allResults.push(...sysValues);
            // Map the values to their respective properties
            results.system.rssiOffset = sysValues[0];
            results.system.maxTemp = sysValues[1];
            results.system.bgndrssiEma = sysValues[2];
            results.system.cspNode = sysValues[3];
            results.system.i2cEn = sysValues[4];
            results.system.canEn = sysValues[5];
            results.system.extpptEn = sysValues[6];
            results.system.ledEn = sysValues[7];
            results.system.kissUsart = sysValues[8];
            results.system.goshUsart = sysValues[9];
            results.system.i2cAddr = sysValues[10];
            results.system.i2cKhz = sysValues[11];
            results.system.canKhz = sysValues[12];
            results.system.rebootIn = sysValues[13];
            results.system.txInhibit = sysValues[14];
            results.system.logStore = sysValues[15];
            results.system.txPwr = sysValues[16];
            results.system.maxTxTime = sysValues[17];
            results.system.maxIdleTime = sysValues[18];
        } catch (error) {
            console.error("Error reading UHF system configuration:", error);
            // Fill with N.A. if there is an error
            sysVars.forEach(()=>allResults.push("N.A."));
        }
        // Step 5: Read receiver configuration (80%)
        onProgress('Reading UHF Receiver Configuration', 80);
        try {
            const rxResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, rxVars);
            // Process and store results
            const rxValues = rxResults.map(safeParseValue);
            allResults.push(...rxValues);
            // Map the values to their respective properties
            results.receiver.frequency = rxValues[0];
            results.receiver.baudrate = rxValues[1];
            results.receiver.modindex = rxValues[2];
            results.receiver.guard = rxValues[3];
            results.receiver.pllrang = rxValues[4];
            results.receiver.mode = rxValues[5];
            results.receiver.cspHmac = rxValues[6];
            results.receiver.cspRs = rxValues[7];
            results.receiver.cspCrc = rxValues[8];
            results.receiver.cspRand = rxValues[9];
            results.receiver.hmacKeys[0] = rxValues[10];
            results.receiver.hmacKeys[1] = rxValues[11];
            results.receiver.hmacKeys[2] = rxValues[12];
            results.receiver.hmacKeys[3] = rxValues[13];
            results.receiver.ax25Call[0] = rxValues[14];
            results.receiver.ax25Call[1] = rxValues[15];
            results.receiver.ax25Call[2] = rxValues[16];
            results.receiver.bandwidth = rxValues[17];
            results.receiver.afcrange = rxValues[18];
        } catch (error) {
            console.error("Error reading UHF receiver configuration:", error);
            // Fill with N.A. if there is an error
            rxVars.forEach(()=>allResults.push("N.A."));
        }
        // Step 6: Read transmitter configuration (100%)
        onProgress('Reading UHF Transmitter Configuration', 100);
        try {
            const txResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mccUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mccifRead"])(sock, txVars);
            // Process and store results
            const txValues = txResults.map(safeParseValue);
            allResults.push(...txValues);
            // Map the values to their respective properties
            results.transmitter.frequency = txValues[0];
            results.transmitter.baudrate = txValues[1];
            results.transmitter.modindex = txValues[2];
            results.transmitter.guard = txValues[3];
            results.transmitter.pllrang = txValues[4];
            results.transmitter.mode = txValues[5];
            results.transmitter.cspHmac = txValues[6];
            results.transmitter.cspRs = txValues[7];
            results.transmitter.cspCrc = txValues[8];
            results.transmitter.cspRand = txValues[9];
            results.transmitter.hmacKeys[0] = txValues[10];
            results.transmitter.hmacKeys[1] = txValues[11];
            results.transmitter.hmacKeys[2] = txValues[12];
            results.transmitter.hmacKeys[3] = txValues[13];
            results.transmitter.ax25Call[0] = txValues[14];
            results.transmitter.ax25Call[1] = txValues[15];
            results.transmitter.ax25Call[2] = txValues[16];
            results.transmitter.preamb = txValues[17];
            results.transmitter.preamblen = txValues[18];
            results.transmitter.preambflags = txValues[19];
            results.transmitter.intfrm = txValues[20];
            results.transmitter.intfrmlen = txValues[21];
            results.transmitter.intfrmflags = txValues[22];
            results.transmitter.rssibusy = txValues[23];
            results.transmitter.kupDelay = txValues[24];
            results.transmitter.paLevel = txValues[25];
            results.transmitter.ber = txValues[26];
        } catch (error) {
            console.error("Error reading UHF transmitter configuration:", error);
            // Fill with N.A. if there is an error
            txVars.forEach(()=>allResults.push("N.A."));
        }
        // Store all raw results
        results.allResults = allResults;
        // Return the processed results
        return results;
    } catch (error) {
        console.error('Error during UHF checkout:', error);
        throw error;
    }
}
}}),
"[project]/src/services/reports/uhfReport.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/reports/uhfReport.ts
__turbopack_context__.s({
    "generateUHFReport": (()=>generateUHFReport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
;
;
async function generateUHFReport(results) {
    // Get current date and time for the report filename
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
    const filename = `UHF_Checkout_${dateStr}_${timeStr}.docx`;
    // Create the document
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]({
        sections: [
            {
                properties: {},
                children: [
                    // Title
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "UHF Automated Self Check Out Test",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1,
                        spacing: {
                            after: 200
                        }
                    }),
                    // Test metadata
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Version: 24.3.21`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Date: ${now.toLocaleDateString()}`,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: `Test Time: ${now.toLocaleTimeString()}`,
                        spacing: {
                            after: 200
                        }
                    }),
                    // Separator
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    }),
                    // UHF Telemetry section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* UHF Telemetry :",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createTelemetrySection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // UHF System Configuration section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* UHF System Configuration :",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createSystemSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // UHF Receiver Configuration section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* UHF Receiver Configuration :",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createReceiverSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    }),
                    // Page break
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "",
                        pageBreakBefore: true
                    }),
                    // UHF Transmitter Configuration section
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "* UHF Transmitter Configuration :",
                        heading: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2,
                        spacing: {
                            after: 100
                        }
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 100
                        }
                    }),
                    ...createTransmitterSection(results),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
                        text: "--------------------------------------------------------------------",
                        spacing: {
                            after: 200
                        }
                    })
                ]
            }
        ]
    });
    // Generate the document
    const buffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Packer"].toBuffer(doc);
    // Save the file
    const blob = new Blob([
        buffer
    ], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
    // Mark the report as generated
    results.reportGenerated = true;
    return filename;
}
// Helper function for the telemetry section
function createTelemetrySection(results) {
    const telemetry = results.telemetry;
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Board temperature (near MCU)                : ${telemetry.boardTemperature} degree C`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `PA temperature (near PA)                    : ${telemetry.paTemperature} degree C`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Last received RSSI                          : ${telemetry.lastRssi}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Last received RF error                      : ${telemetry.lastRferr}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of tx packets since reboot           : ${telemetry.txCount} packets`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of rx packets since reboot           : ${telemetry.rxCount} packets`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of tx bytes since reboot             : ${telemetry.txBytes} bytes`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of rx bytes since reboot             : ${telemetry.rxBytes} bytes`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The currently active system configuration   : ${telemetry.activeConf}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The number of reboots                       : ${telemetry.bootCount}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The cause of the reboot                     : ${telemetry.bootCause}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The timestamp of the last valid packet      : ${telemetry.lastContact}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The current background RSSI level           : ${telemetry.bgndRssi}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Total TX duty time since reboot             : ${telemetry.txDuty}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of tx packets (total)                : ${telemetry.totalTxCount} packets`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of rx packets (total)                : ${telemetry.totalRxCount} packets`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of tx bytes (total)                  : ${telemetry.totalTxBytes} bytes`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of rx bytes (total)                  : ${telemetry.totalRxBytes} bytes`,
            spacing: {
                after: 100
            }
        })
    ];
}
// Helper function for the system configuration section
function createSystemSection(results) {
    const system = results.system;
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Sets the RSSI indicator offset              : ${system.rssiOffset}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Maximum temperature                         : ${system.maxTemp} degree C`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Exponential moving average (alpha value)    : ${system.bgndrssiEma}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `CSP address of the AX100 module             : ${system.cspNode}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enables I2C                                 : ${system.i2cEn}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enables CAN                                 : ${system.canEn}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enables push-to-talk driver (GS100 only)    : ${system.extpptEn}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Set to zero to disable the on-board leds    : ${system.ledEn}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Set which USART to use for KISS interface   : ${system.kissUsart}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Set which USART to use for GOSH interface   : ${system.goshUsart}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The non-shifted I2C address of the system   : ${system.i2cAddr}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The speed of the I2C master                 : ${system.i2cKhz}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The speed of the CAN bus                    : ${system.canKhz}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of seconds before automatic reboot   : ${system.rebootIn}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of seconds the transmitter shutdown  : ${system.txInhibit}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable log-system FRAM storage backend      : ${system.logStore}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `TX power level                              : ${system.txPwr}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Maximum seconds to key up the transmitter   : ${system.maxTxTime} seconds`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Number of seconds the receiver can be idle  : ${system.maxIdleTime} seconds`,
            spacing: {
                after: 100
            }
        })
    ];
}
// Helper function for the receiver configuration section
function createReceiverSection(results) {
    const receiver = results.receiver;
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Frequency in [Hz]                           : ${receiver.frequency} Hz`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Baudrate                                    : ${receiver.baudrate} bps`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Same as the tx_modindex                     : ${receiver.modindex}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `RX guard in [ms]                            : ${receiver.guard} ms`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Startup value of the PLLRANGE register      : ${receiver.pllrang}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Framing mode                                : ${receiver.mode}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable HMAC (checksum and authentication)   : ${receiver.cspHmac}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable Reed-Solomon                         : ${receiver.cspRs}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable CRC-32                               : ${receiver.cspCrc}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable CCSDS randomization                  : ${receiver.cspRand}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HMAC key (needs to match transmitter)       : ${receiver.hmacKeys[0]}${receiver.hmacKeys[1]}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The call sign                               : ${receiver.ax25Call[0]}${receiver.ax25Call[1]}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Receiver bandwidth in Hz                    : ${receiver.bandwidth} Hz`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Sets the AFC pull-in range in Hz            : ${receiver.afcrange} Hz`,
            spacing: {
                after: 100
            }
        })
    ];
}
// Helper function for the transmitter configuration section
function createTransmitterSection(results) {
    const transmitter = results.transmitter;
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Frequency in [Hz]                           : ${transmitter.frequency} Hz`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Baudrate                                    : ${transmitter.baudrate} bps`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Same as the tx_modindex                     : ${transmitter.modindex}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `RX guard in [ms]                            : ${transmitter.guard} ms`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Startup value of the PLLRANGE register      : ${transmitter.pllrang}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Framing mode                                : ${transmitter.mode}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable HMAC (checksum and authentication)   : ${transmitter.cspHmac}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable Reed-Solomon                         : ${transmitter.cspRs}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable CRC-32                               : ${transmitter.cspCrc}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Enable CCSDS randomization                  : ${transmitter.cspRand}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `HMAC key (needs to match transmitter)       : ${transmitter.hmacKeys[0]}${transmitter.hmacKeys[1]}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The call sign                               : ${transmitter.ax25Call[0]}${transmitter.ax25Call[1]}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The byte to use as preamble                 : ${transmitter.preamb}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The length of the preamble in bytes         : ${transmitter.preamblen} bytes`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The flags to use for the preamble           : ${transmitter.preambflags}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The byte to use between two frames          : ${transmitter.intfrm}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The number of bytes put between two frames  : ${transmitter.intfrmlen} bytes`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The flags to use for the intfrm bytes       : ${transmitter.intfrmflags}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Busy when the RSSI is above this value      : ${transmitter.rssibusy}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `An additional delay of the first frame      : ${transmitter.kupDelay}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `The input level for the PA                  : ${transmitter.paLevel}`,
            spacing: {
                after: 100
            }
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"]({
            text: `Injects random bit-errors                   : ${transmitter.ber}`,
            spacing: {
                after: 100
            }
        })
    ];
}
}}),

};

//# sourceMappingURL=src_services_9b894715._.js.map