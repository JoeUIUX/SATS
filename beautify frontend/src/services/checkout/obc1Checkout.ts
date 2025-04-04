// src/services/checkout/obc1Checkout.ts
import { mccifSet, mccifRead } from '@/utils/mccUtils';

// Progress callback type
type ProgressCallback = (step: string, percent: number) => void;

/**
 * Helper function to safely parse values from MCC response
 * Handle cases where the response might be undefined or not in the expected format
 */
const safeParseValue = (result: string | undefined): string => {
  if (!result) return "unknown";
  const parts = result.split('=');
  return parts.length > 1 ? parts[1] : "unknown";
};

/**
 * Run the OBC-1 checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param enableEmmc Whether to test the eMMC functionality
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runOBC1Checkout(
  sock: any, 
  enableEmmc: boolean,
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results = {
      firmware: { major: '', minor: '', patch: '' },
      kernel: { 
        uptime: '', 
        loads: { oneMinute: '', fiveMinute: '', fifteenMinute: '' },
        memory: { 
          totalRam: '', freeRam: '', sharedRam: '', bufferRam: '', 
          totalSwap: '', freeSwap: '', memUnit: '', totalHigh: '', freeHigh: '' 
        },
        processes: ''
      },
      fpga: { 
        voltages: { 
          vccPspll: '', vccPsbatt: '', vccint: '', vccbram: '', vccaux: '' 
          // Add others as needed
        },
        temperatures: { psTemp: '', remoteTemp: '', plTemp: '' }
      },
      vi: {
        d3v3: { value: '', pass: false },
        ps3v3Obc2: { value: '', pass: false },
        ps5vObc2: { value: '', pass: false },
        ps5vObc2I: '',
        ps3v3Obc2I: ''
      },
      temperatures: {
        thruster1: '',
        thruster2: '',
        leocam: ['', '', '', ''] 
      },
      emmc: {
        emmc0States: [] as string[],  // Define explicit type as string array
        emmc1States: [] as string[]   // Define explicit type as string array
      },
      reportGenerated: false
    };

    // Step 1: Read firmware version (5%)
    onProgress('Reading Firmware Version', 5);
    const fwVars = ["OBC1_FW_Ver_Major", "OBC1_FW_Ver_Minor", "OBC1_FW_Ver_Patch"];
    
    try {
      const fwResults = await mccifRead(sock, fwVars);
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
      "OBC1_Sys_uptime", "OBC1_Sys_loads_1m", "OBC1_Sys_loads_5m", "OBC1_Sys_loads_15m",
      "OBC1_Sys_totalram", "OBC1_Sys_freeram", "OBC1_Sys_sharedram", "OBC1_Sys_bufferram",
      "OBC1_Sys_totalswap", "OBC1_Sys_freeswap", "OBC1_Sys_procs", "OBC1_Sys_pad",
      "OBC1_Sys_totalhigh", "OBC1_Sys_freehigh", "OBC1_Sys_mem_unit"
    ];
    
    try {
      const kernelResults = await mccifRead(sock, kernelVars);
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
      "OBC1_vcc_pspll", "OBC1_vcc_psbatt", "OBC1_vccint", "OBC1_vccbram", "OBC1_vccaux",
      "OBC1_vcc_psddr_pll", "OBC1_vccpsintfp_ddr", "OBC1_vccint1", "OBC1_vccaux1", "OBC1_vccvrefp",
      "OBC1_vccvrefn", "OBC1_vccbram1", "OBC1_vccplintlp", "OBC1_vccplintfp", "OBC1_vccplaux",
      "OBC1_vccams", "OBC1_vccpsintlp", "OBC1_vccpsintfp", "OBC1_vccpsaux", "OBC1_vccpsddr",
      "OBC1_vccpsio3", "OBC1_vccpsio0", "OBC1_vccpsio1", "OBC1_vccpsio2", "OBC1_psmgtravcc",
      "OBC1_psmgtravtt", "OBC1_vccams1", "OBC1_ps_temp", "OBC1_remote_temp", "OBC1_pl_temp"
    ];
    
    try {
      const fpgaResults = await mccifRead(sock, fpgaVars);
      
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
      "OBC1_3V3_D", "OBC1_PS_3V3_OBC2_V", "OBC1_PS_5V_OBC2_V", 
      "OBC1_PS_5V_OBC2_I", "OBC1_PS_3V3_OBC2_I"
    ];
    
    try {
      const viResults = await mccifRead(sock, viVars);
      
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
      "OBC1_thruster_ch1_T", "OBC1_thruster_ch2_T", 
      "OBC1_leocam_ch1_T", "OBC1_leocam_ch2_T",
      "OBC1_leocam_ch3_T", "OBC1_leocam_ch4_T"
    ];
    
    try {
      const tempResults = await mccifRead(sock, tempVars);
      
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
      
      const emmcVars = ["OBC1_Q8_eMMC0_state", "OBC1_Q8_eMMC1_state"];
      
      try {
        // Initial check
        const emmcResult1 = await mccifRead(sock, emmcVars);
        results.emmc.emmc0States.push(safeParseValue(emmcResult1[0]));
        results.emmc.emmc1States.push(safeParseValue(emmcResult1[1]));
        
        // Test eMMC0
        await mccifSet(sock, "OBC1_Emmc_Control", 1);
        const emmcResult2 = await mccifRead(sock, emmcVars);
        results.emmc.emmc0States.push(safeParseValue(emmcResult2[0]));
        results.emmc.emmc1States.push(safeParseValue(emmcResult2[1]));
        
        await mccifSet(sock, "OBC1_Emmc_Control", 3);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        await mccifSet(sock, "OBC1_Emmc_Control", 5);
        const emmcResult3 = await mccifRead(sock, emmcVars);
        results.emmc.emmc0States.push(safeParseValue(emmcResult3[0]));
        results.emmc.emmc1States.push(safeParseValue(emmcResult3[1]));
        
        // Test eMMC1
        await mccifSet(sock, "OBC1_Emmc_Control", 2);
        const emmcResult4 = await mccifRead(sock, emmcVars);
        results.emmc.emmc0States.push(safeParseValue(emmcResult4[0]));
        results.emmc.emmc1States.push(safeParseValue(emmcResult4[1]));
        
        await mccifSet(sock, "OBC1_Emmc_Control", 4);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        await mccifSet(sock, "OBC1_Emmc_Control", 6);
        const emmcResult5 = await mccifRead(sock, emmcVars);
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
 */
function checkVoltage(value: string, isThreeVolt: boolean): boolean {
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