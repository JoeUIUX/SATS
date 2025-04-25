// src/services/checkout/adcsCheckout.ts
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
 * Check if the unregulated voltages are within acceptable range
 * @param voltage Voltage value as string
 * @returns Pass/fail status string
 */
const checkUnregVoltage = (voltage: string): string => {
  try {
    const voltageVal = parseFloat(voltage);
    if (voltageVal >= 28.0 && voltageVal <= 32.0) {
      return "PASS";
    } else {
      return "FAIL";
    }
  } catch (error) {
    return "ERROR";
  }
};

/**
 * Check if the voltage is float (off) state
 * @param voltage Voltage value as string
 * @returns Pass/fail status string
 */
const checkOffVFloat = (voltage: string): string => {
  try {
    const voltageVal = parseFloat(voltage);
    if (voltageVal <= 0.5) {
      return "PASS";
    } else {
      return "FAIL";
    }
  } catch (error) {
    return "ERROR";
  }
};

/**
 * Check if command was executed properly by comparing counter values
 * @param counters Array of counter values [cmd_before, ack_before, timeout_before, error_before, 
 *                                          cmd_after,  ack_after,  timeout_after,  error_after]
 * @returns Command execution status
 */
const cmdCheck = (counters: string[]): string => {
  try {
    const cmdBefore = parseInt(counters[0]);
    const ackBefore = parseInt(counters[1]);
    const timeoutBefore = parseInt(counters[2]);
    const errorBefore = parseInt(counters[3]);
    
    const cmdAfter = parseInt(counters[4]);
    const ackAfter = parseInt(counters[5]);
    const timeoutAfter = parseInt(counters[6]);
    const errorAfter = parseInt(counters[7]);
    
    if (cmdAfter - cmdBefore === 1) {
      if (ackAfter - ackBefore === 1) {
        if (timeoutAfter - timeoutBefore === 0) {
          return "PASS";
        } else {
          return "PASS_TIMEOUT";
        }
      } else {
        return "FAIL_NO_REPLY";
      }
    }
    return "FAIL_CMD_NOT_SENT";
  } catch (error) {
    return "ERROR";
  }
};

/**
 * Run the ADCS checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param options Test options (specific ADCS options)
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runADCSCheckout(
  sock: any, 
  options: { 
    testTelemetry: boolean; 
    testReactionWheels: boolean;
    testSensors?: boolean;
    testMagneticTorquer?: boolean;
  },
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results: any = {
      vi: {
        adcsIfVoltage: { value: '', status: '' },
        adcsIfCurrent: { value: '' },
        adcsRwVoltage: { value: '', status: '' },
        adcsRwCurrent: { value: '' },
        adcsIfVoltageOff: { value: '', status: '' },
        adcsRwVoltageOff: { value: '', status: '' }
      },
      command: {
        status: '',
        details: ''
      },
      telemetry: {
        identifier: '',
        interfaceVersion: '',
        fwVersionMajor: '',
        fwVersionMinor: '',
        runtimeSec: '',
        runtimeMiliSec: ''
      },
      reportGenerated: false,
      // Store all raw results for reporting
      allResults: [],
      // Store all command results for reporting
      commandResults: []
    };

    // Define variables to read
    const adcsVi = ["HEPS1_PDM2_ADCS_IF_V", "HEPS1_PDM2_ADCS-IF_I", "HEPS1_PDM2_ADCD_RW_V", "HEPS1_PDM2_ADCD_RW_I"];
    const adcsTlm128 = [
      "ADCS_TLM_Identifier", "ADCS_TLM_InterfaceVer", "ADCS_TLM_IdFwVerMajor", "ADCS_TLM_IdFwVerMinor",
      "ADCS_TLM_RuntimeSec", "ADCS_TLM_RuntimeMiliSec"
    ];
    const adcsStat = ["OBC1_Adcs_Cmd_Count", "OBC1_Adcs_Ack_Count", "OBC1_Adcs_Timeout_Count", "OBC1_Adcs_Error_Count"];

    // Step 1: Power on the ADCS (10%)
    onProgress('Powering on ADCS', 10);
    
    try {
      // Power on sequence
      await mccifSet(sock, "OBC1_Ch_ExtReqOn", 1);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOn", 2);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
    } catch (error) {
      console.error("Error powering on ADCS:", error);
      // Continue with test despite error
    }

    // Step 2: Read power status (20%)
    onProgress('Reading ADCS power status', 20);
    
    try {
      const viResults = await mccifRead(sock, adcsVi);
      const viValues = viResults.map(safeParseValue);
      
      // Store the values
      results.vi.adcsIfVoltage.value = viValues[0];
      results.vi.adcsIfCurrent.value = viValues[1];
      results.vi.adcsRwVoltage.value = viValues[2];
      results.vi.adcsRwCurrent.value = viValues[3];
      
      // Check the voltages
      results.vi.adcsIfVoltage.status = checkUnregVoltage(viValues[0]);
      results.vi.adcsRwVoltage.status = checkUnregVoltage(viValues[2]);
      
      // Store all results
      results.allResults.push(...viValues);
    } catch (error) {
      console.error("Error reading ADCS power status:", error);
      
      // Set default values on error
      results.vi.adcsIfVoltage = { value: "unknown", status: "ERROR" };
      results.vi.adcsIfCurrent = { value: "unknown" };
      results.vi.adcsRwVoltage = { value: "unknown", status: "ERROR" };
      results.vi.adcsRwCurrent = { value: "unknown" };
      
      // Store placeholder results
      results.allResults.push("unknown", "unknown", "unknown", "unknown");
    }

    // Step 3: Read initial command status (30%)
    onProgress('Reading ADCS command status', 30);
    
    const cmdResults: string[] = [];
    
    try {
      const statResults = await mccifRead(sock, adcsStat);
      const statValues = statResults.map(safeParseValue);
      
      // Store command results before command
      cmdResults.push(...statValues);
      
      // Store all results
      results.allResults.push(...statValues);
    } catch (error) {
      console.error("Error reading ADCS command status:", error);
      
      // Store placeholder results
      cmdResults.push("0", "0", "0", "0");
      results.allResults.push("0", "0", "0", "0");
    }

    // Step 4: Send command to ADCS (40%)
    onProgress('Sending command to ADCS', 40);
    
    try {
      // Set telemetry ID and control
      await mccifSet(sock, "OBC1_Adcs_TlmID", 128);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      
      await mccifSet(sock, "OBC1_Adcs_Control", 2);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    } catch (error) {
      console.error("Error sending command to ADCS:", error);
      // Continue with test despite error
    }

    // Step 5: Read command status after sending command (50%)
    onProgress('Verifying command execution', 50);
    
    try {
      const statResults = await mccifRead(sock, adcsStat);
      const statValues = statResults.map(safeParseValue);
      
      // Store command results after command
      cmdResults.push(...statValues);
      
      // Check command execution status
      results.command.status = cmdCheck(cmdResults);
      
      // Store detailed command results
      results.commandResults = cmdResults;
      
      // Store all results
      results.allResults.push(...statValues);
    } catch (error) {
      console.error("Error reading ADCS command status after command:", error);
      
      // Store placeholder results
      cmdResults.push("0", "0", "0", "0");
      results.allResults.push("0", "0", "0", "0");
      
      // Set command status
      results.command.status = "ERROR";
      results.commandResults = cmdResults;
    }

    // Step 6: Read telemetry (if enabled) (70%)
    if (options.testTelemetry) {
      onProgress('Reading ADCS telemetry', 70);
      
      try {
        const tlmResults = await mccifRead(sock, adcsTlm128);
        const tlmValues = tlmResults.map(safeParseValue);
        
        // Store telemetry values
        results.telemetry.identifier = tlmValues[0];
        results.telemetry.interfaceVersion = tlmValues[1];
        results.telemetry.fwVersionMajor = tlmValues[2];
        results.telemetry.fwVersionMinor = tlmValues[3];
        results.telemetry.runtimeSec = tlmValues[4];
        results.telemetry.runtimeMiliSec = tlmValues[5];
        
        // Store all results
        results.allResults.push(...tlmValues);
      } catch (error) {
        console.error("Error reading ADCS telemetry:", error);
        
        // Set default values on error
        results.telemetry = {
          identifier: "unknown",
          interfaceVersion: "unknown",
          fwVersionMajor: "unknown",
          fwVersionMinor: "unknown",
          runtimeSec: "unknown",
          runtimeMiliSec: "unknown"
        };
        
        // Store placeholder results
        results.allResults.push("unknown", "unknown", "unknown", "unknown", "unknown", "unknown");
      }
    }

    // Step 7: Power off the ADCS (90%)
    onProgress('Powering off ADCS', 90);
    
    try {
      // Power off sequence
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 2);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 1);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
    } catch (error) {
      console.error("Error powering off ADCS:", error);
      // Continue with test despite error
    }

    // Step 8: Verify power off status (100%)
    onProgress('Verifying ADCS power off', 100);
    
    try {
      const viResults = await mccifRead(sock, adcsVi);
      const viValues = viResults.map(safeParseValue);
      
      // Store the values
      results.vi.adcsIfVoltageOff = { value: viValues[0], status: checkOffVFloat(viValues[0]) };
      results.vi.adcsRwVoltageOff = { value: viValues[2], status: checkOffVFloat(viValues[2]) };
      
      // Store current values for completion
      const ifCurrentOff = viValues[1];
      const rwCurrentOff = viValues[3];
      
      // Store all results
      results.allResults.push(...viValues);
    } catch (error) {
      console.error("Error reading ADCS power off status:", error);
      
      // Set default values on error
      results.vi.adcsIfVoltageOff = { value: "unknown", status: "ERROR" };
      results.vi.adcsRwVoltageOff = { value: "unknown", status: "ERROR" };
      
      // Store placeholder results
      results.allResults.push("unknown", "unknown", "unknown", "unknown");
    }

    // Complete checkout (100%)
    onProgress('ADCS Checkout Complete', 100);
    
    // Return the processed results
    return results;
    
  } catch (error) {
    console.error('Error during ADCS checkout:', error);
    throw error;
  }
}