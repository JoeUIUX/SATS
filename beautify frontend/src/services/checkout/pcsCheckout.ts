// src/services/checkout/pcsCheckout.ts
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
 * Helper function to safely parse integers
 * @param value String value to parse
 * @returns Parsed integer or 0 if invalid
 */
function safeParseInt(value: string): number {
    if (!value || value === 'undefined' || value === 'null') return 0;
    const parsed = parseInt(value);
    return isNaN(parsed) ? 0 : parsed;
  }
  
  /**
   * Helper function to check memory test results
   * @param values Array of memory test values
   * @returns "[PASS]" or "[FAIL]" based on comparison
   */
  function memCheck(values: string[]): string {
    // Check if we have all required values
    if (values.length < 8) return "[FAIL]";
    
    try {
      // Convert to numbers for comparison using safe parsing
      const initialWriteSuccess = safeParseInt(values[0]);
      const initialReadSuccess = safeParseInt(values[1]);
      const initialWriteFail = safeParseInt(values[2]);
      const initialReadFail = safeParseInt(values[3]);
      
      const finalWriteSuccess = safeParseInt(values[4]);
      const finalReadSuccess = safeParseInt(values[5]);
      const finalWriteFail = safeParseInt(values[6]);
      const finalReadFail = safeParseInt(values[7]);
      
      // Check success counts increased, fail counts didn't change
      if (finalWriteSuccess > initialWriteSuccess &&
          finalReadSuccess > initialReadSuccess &&
          finalWriteFail === initialWriteFail &&
          finalReadFail === initialReadFail) {
        return "[PASS]";
      }
    } catch (error) {
      console.error("Error comparing memory test values:", error);
    }
    
    return "[FAIL]";
  }

/**
 * Run the PCS checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param enableSDTest Whether to test the SD card functionality
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runPCSCheckout(
  sock: any, 
  enableSDTest: boolean,
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results = {
      on: {
        voltage: '',
        current: '',
        pass: false
      },
      firmware: { major: '', minor: '', patch: '' },
      timeSync: {
        before: '',
        after: ''
      },
      status: {
        time: '',
        uptime: '',
        storePeriod: '',
        uptimeSession: '',
        resetCount: '',
        resetSource: ''
      },
      vi: {
        ps3v3I: '',
        ps5I: ''
      },
      sdCard: {
        enabled: enableSDTest,
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
        pass: false
      },
      statusAfterTest: {
        time: '',
        uptime: '',
        storePeriod: '',
        uptimeSession: '',
        resetCount: '',
        resetSource: ''
      },
      off: {
        voltage: '',
        current: '',
        pass: false
      },
      reportGenerated: false
    };

    // Step 1: Turn on PCS (10%)
    onProgress('Powering on PCS', 10);
    await mccifSet(sock, "OBC1_Ch_ExtReqOn", 7);
    // Allow time for power up
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Step 2: Read voltage and current (20%)
    onProgress('Reading Voltage and Current', 20);
    const pcs_vi = ["HEPS1_PDM2_PCS_V", "HEPS1_PDM2_PCS_I"];
    
    try {
      const viResults = await mccifRead(sock, pcs_vi);
      results.on.voltage = safeParseValue(viResults[0]);
      results.on.current = safeParseValue(viResults[1]);
      
      // Check if voltage is within acceptable range (9-13V)
      const voltage = parseFloat(results.on.voltage);
      results.on.pass = !isNaN(voltage) && voltage >= 9 && voltage <= 13;
    } catch (error) {
      console.error("Error reading voltage and current:", error);
      // Continue with other tests despite this error
    }

    // Only continue if voltage check passed
    if (results.on.pass) {
      // Step 3: Enable communication and read firmware (30%)
      onProgress('Reading Firmware Version', 30);
      await mccifSet(sock, "OBC1_Intercomm_Template", 32767);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for communication to establish
      
      const fw_var = ["PCS_FW_Ver_Major", "PCS_FW_Ver_Minor", "PCS_FW_Ver_Patch"];
      try {
        const fwResults = await mccifRead(sock, fw_var);
        results.firmware.major = safeParseValue(fwResults[0]);
        results.firmware.minor = safeParseValue(fwResults[1]);
        results.firmware.patch = safeParseValue(fwResults[2]);
      } catch (error) {
        console.error("Error reading firmware version:", error);
      }

      // Step 4: Sync time (40%)
      onProgress('Synchronizing Time', 40);
      try {
        // Read time before sync
        const timeBeforeSync = await mccifRead(sock, ["PCS_Time"]);
        results.timeSync.before = safeParseValue(timeBeforeSync[0]);
        
        // Set current time
        await mccifSet(sock, "PCS_Time", "NOW");
        
        // Read time after sync
        const timeAfterSync = await mccifRead(sock, ["PCS_Time"]);
        results.timeSync.after = safeParseValue(timeAfterSync[0]);
      } catch (error) {
        console.error("Error during time sync:", error);
      }

      // Step 5: Read system status (50%)
      onProgress('Reading System Status', 50);
      const time_var = ["PCS_Time", "PCS_Uptime_Total", "PCS_StorePeriod", "PCS_Uptime_Session", "PCS_ResetCount", "PCS_ResetSource"];
      
      try {
        const statusResults = await mccifRead(sock, time_var);
        results.status.time = safeParseValue(statusResults[0]);
        results.status.uptime = safeParseValue(statusResults[1]);
        results.status.storePeriod = safeParseValue(statusResults[2]);
        results.status.uptimeSession = safeParseValue(statusResults[3]);
        results.status.resetCount = safeParseValue(statusResults[4]);
        results.status.resetSource = safeParseValue(statusResults[5]);
      } catch (error) {
        console.error("Error reading system status:", error);
      }

      // Step 6: Read voltage and current from power supply (60%)
      onProgress('Reading Power Supply Values', 60);
      const vi_var = ["PCS_PS_3V3_PCS1_I", "PCS_PS_5_PCS1_I"];
      
      try {
        const powerResults = await mccifRead(sock, vi_var);
        results.vi.ps3v3I = safeParseValue(powerResults[0]);
        results.vi.ps5I = safeParseValue(powerResults[1]);
      } catch (error) {
        console.error("Error reading power supply values:", error);
      }

      // Step 7: SD Card test if enabled (70-80%)
      if (enableSDTest) {
        onProgress('Testing SD Card', 70);
        const sd_var = ["PCS_SD_WriteSuccess", "PCS_SD_ReadSuccess", "PCS_SD_WriteFail", "PCS_SD_ReadFail"];
        
        try {
          // Read initial SD card counters
          const sdInitialResults = await mccifRead(sock, sd_var);
          results.sdCard.before.writeSuccess = safeParseValue(sdInitialResults[0]);
          results.sdCard.before.readSuccess = safeParseValue(sdInitialResults[1]);
          results.sdCard.before.writeFail = safeParseValue(sdInitialResults[2]);
          results.sdCard.before.readFail = safeParseValue(sdInitialResults[3]);
          
          // Run SD card test
          await mccifSet(sock, "PCS_SD_Control", 6);
          // Wait for the test to complete
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          // Read final SD card counters
          const sdFinalResults = await mccifRead(sock, sd_var);
          results.sdCard.after.writeSuccess = safeParseValue(sdFinalResults[0]);
          results.sdCard.after.readSuccess = safeParseValue(sdFinalResults[1]);
          results.sdCard.after.writeFail = safeParseValue(sdFinalResults[2]);
          results.sdCard.after.readFail = safeParseValue(sdFinalResults[3]);
          
          // Check if the test passed
          const allValues = [
            results.sdCard.before.writeSuccess,
            results.sdCard.before.readSuccess,
            results.sdCard.before.writeFail,
            results.sdCard.before.readFail,
            results.sdCard.after.writeSuccess,
            results.sdCard.after.readSuccess,
            results.sdCard.after.writeFail,
            results.sdCard.after.readFail
          ];
          
          results.sdCard.pass = memCheck(allValues) === "[PASS]";
        } catch (error) {
          console.error("Error during SD card test:", error);
        }
      } else {
        results.sdCard.enabled = false;
        results.sdCard.pass = false;
      }

      // Step 8: Read system status again (90%)
      onProgress('Reading Final System Status', 90);
      try {
        const finalStatusResults = await mccifRead(sock, time_var);
        results.statusAfterTest.time = safeParseValue(finalStatusResults[0]);
        results.statusAfterTest.uptime = safeParseValue(finalStatusResults[1]);
        results.statusAfterTest.storePeriod = safeParseValue(finalStatusResults[2]);
        results.statusAfterTest.uptimeSession = safeParseValue(finalStatusResults[3]);
        results.statusAfterTest.resetCount = safeParseValue(finalStatusResults[4]);
        results.statusAfterTest.resetSource = safeParseValue(finalStatusResults[5]);
      } catch (error) {
        console.error("Error reading final system status:", error);
      }

      // Close communication
      await mccifSet(sock, "OBC1_Intercomm_Template", 31775);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Step 9: Power off and check off state (100%)
    onProgress('Powering off PCS', 100);
    await mccifSet(sock, "OBC1_Ch_ExtReqOff", 7);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for power down
    
    try {
      const offResults = await mccifRead(sock, pcs_vi);
      results.off.voltage = safeParseValue(offResults[0]);
      results.off.current = safeParseValue(offResults[1]);
      
      // Check if voltage is near 0 when off
      const voltage = parseFloat(results.off.voltage);
      results.off.pass = !isNaN(voltage) && voltage < 1.0;
    } catch (error) {
      console.error("Error reading off voltage and current:", error);
    }

    // Complete checkout
    onProgress('Checkout Complete', 100);
    
    return results;
    
  } catch (error) {
    console.error('Error during PCS checkout:', error);
    throw error;
  }
}