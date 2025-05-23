// src/services/checkout/gpsCheckout.ts
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
 * Helper function to check command results similar to cmd_check in the Python code
 * Verifies if TX/RX counts increased properly after sending commands
 */
const checkCommand = (before: string[], after: string[]): boolean => {
  try {
    // Get TX and RX counts before and after
    const txCountBefore = parseInt(before[0]);
    const rxCountBefore = parseInt(before[1]);
    const txCountAfter = parseInt(after[0]);
    const rxCountAfter = parseInt(after[1]);
    
    // Check if TX count increased (command was sent)
    if (txCountAfter - txCountBefore !== 1) {
      return false; // Command not sent
    }
    
    // Check if RX count increased (response was received)
    if (rxCountAfter - rxCountBefore !== 1) {
      return false; // No reply
    }
    
    return true; // Command succeeded
  } catch (error) {
    console.error("Error checking command results:", error);
    return false;
  }
};

/**
 * Checks if a voltage value is near 5V (based on the Python check_v_float)
 */
const check5VFloat = (value: string): boolean => {
  try {
    const floatValue = parseFloat(value);
    return floatValue >= 4.75 && floatValue <= 5.25;
  } catch (error) {
    return false;
  }
};

/**
 * Checks if a 3.3V value is in acceptable range
 */
const check3V3 = (value: string): boolean => {
  try {
    const intValue = parseInt(value);
    return intValue >= 3000 && intValue <= 3600;
  } catch (error) {
    return false;
  }
};

/**
 * Checks if a voltage value is near 0V (power off check)
 */
const checkOffVFloat = (value: string): boolean => {
  try {
    const floatValue = parseFloat(value);
    return floatValue < 0.5; // Less than 0.5V when off
  } catch (error) {
    return false;
  }
};

/**
 * Checks if a millivolt value is near 0mV (power off check)
 */
const checkOffMV = (value: string): boolean => {
  try {
    const intValue = parseInt(value);
    return intValue < 500; // Less than 500mV when off
  } catch (error) {
    return false;
  }
};

/**
 * Run the GPS checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runGPSCheckout(
  sock: any,
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results = {
      voltages: {
        gps5V: { value: '', pass: false },
        gps5VCurrent: { value: '' },
        gps3V3: { value: '', pass: false }
      },
      stats: {
        txCountBefore: '',
        rxCountBefore: '',
        txBytesBefore: '',
        rxBytesBefore: '',
        txCountAfter: '',
        rxCountAfter: '',
        txBytesAfter: '',
        rxBytesAfter: '',
        commandCheck: { pass: false }
      },
      powerOff: {
        gps5V: { value: '', pass: false },
        gps5VCurrent: { value: '' },
        gps3V3: { value: '', pass: false }
      },
      allResults: [] as string[],
      reportGenerated: false
    };

    // Step 1: Power on GPS (10%)
    onProgress('Powering on GPS', 10);
    
    await mccifSet(sock, "OBC1_Gps_Control", 1);
    
    // Wait for GPS to initialize (60 seconds in original, but we'll reduce for testing)
    const waitTime = 10; // Reduced for testing - original was 60 seconds
    
    // Update progress during wait time
    for (let i = 0; i < waitTime; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      onProgress(`Initializing GPS (${i+1}/${waitTime}s)`, 10 + (i+1) * 20 / waitTime);
    }

    // Step 2: Read GPS voltage and current (30%)
    onProgress('Reading GPS power status', 30);
    
    const gpsVI = ["HEPS1_PDM2_GPS_5V_V", "HEPS1_PDM2_GPS_5V_I"];
    const gpsV = ["OBC2_GPS_3V3_V"];
    
    // Read 5V supply and current
    const viResults = await mccifRead(sock, gpsVI);
    const viValues = viResults.map(safeParseValue);
    results.allResults.push(...viValues);
    
    // Store and validate results
    results.voltages.gps5V.value = viValues[0];
    results.voltages.gps5V.pass = check5VFloat(viValues[0]);
    results.voltages.gps5VCurrent.value = viValues[1];
    
    // Read 3.3V supply
    const vResults = await mccifRead(sock, gpsV);
    const vValues = vResults.map(safeParseValue);
    results.allResults.push(...vValues);
    
    // Store and validate results
    results.voltages.gps3V3.value = vValues[0];
    results.voltages.gps3V3.pass = check3V3(vValues[0]);

    // Step 3: Reset GPS counters (40%)
    onProgress('Resetting GPS counters', 40);
    
    // Reset all counters
    await mccifSet(sock, "OBC1_Gps_TxCount", 0);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await mccifSet(sock, "OBC1_Gps_RxCount", 0);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await mccifSet(sock, "OBC1_Gps_TxBytes", 0);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await mccifSet(sock, "OBC1_Gps_RxBytes", 0);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 4: Read GPS stats before command (50%)
    onProgress('Reading GPS statistics before command', 50);
    
    const gpsStats = ["OBC1_Gps_TxCount", "OBC1_Gps_RxCount", "OBC1_Gps_TxBytes", "OBC1_Gps_RxBytes"];
    
    // Read stats before test command
    const statsBefore = await mccifRead(sock, gpsStats);
    const statsBeforeValues = statsBefore.map(safeParseValue);
    results.allResults.push(...statsBeforeValues);
    
    // Store results
    results.stats.txCountBefore = statsBeforeValues[0];
    results.stats.rxCountBefore = statsBeforeValues[1];
    results.stats.txBytesBefore = statsBeforeValues[2];
    results.stats.rxBytesBefore = statsBeforeValues[3];

    // Step 5: Send test command to GPS (60%)
    onProgress('Sending test command to GPS', 60);
    
    // Send test command (log version)
    await mccifSet(sock, "OBC1_Gps_Control", 2);
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Step 6: Read GPS stats after command (70%)
    onProgress('Reading GPS statistics after command', 70);
    
    // Read stats after test command
    const statsAfter = await mccifRead(sock, gpsStats);
    const statsAfterValues = statsAfter.map(safeParseValue);
    results.allResults.push(...statsAfterValues);
    
    // Store results
    results.stats.txCountAfter = statsAfterValues[0];
    results.stats.rxCountAfter = statsAfterValues[1];
    results.stats.txBytesAfter = statsAfterValues[2];
    results.stats.rxBytesAfter = statsAfterValues[3];
    
    // Check if command succeeded
    results.stats.commandCheck.pass = checkCommand(
      [results.stats.txCountBefore, results.stats.rxCountBefore],
      [results.stats.txCountAfter, results.stats.rxCountAfter]
    );

    // Step 7: Power off GPS (80%)
    onProgress('Powering off GPS', 80);
    
    await mccifSet(sock, "OBC1_Gps_Control", 3); // value =4 for 'Power Off' (21 May 2025 Test)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Step 8: Read GPS power status after power off (90%)
    onProgress('Reading GPS power status after power off', 90);
    
    // Read 5V supply and current after power off
    const viOffResults = await mccifRead(sock, gpsVI);
    const viOffValues = viOffResults.map(safeParseValue);
    results.allResults.push(...viOffValues);
    
    // Store and validate results
    results.powerOff.gps5V.value = viOffValues[0];
    results.powerOff.gps5V.pass = checkOffVFloat(viOffValues[0]);
    results.powerOff.gps5VCurrent.value = viOffValues[1];
    
    // Read 3.3V supply after power off
    const vOffResults = await mccifRead(sock, gpsV);
    const vOffValues = vOffResults.map(safeParseValue);
    results.allResults.push(...vOffValues);
    
    // Store and validate results
    results.powerOff.gps3V3.value = vOffValues[0];
    results.powerOff.gps3V3.pass = checkOffMV(vOffValues[0]);

    // Complete checkout (100%)
    onProgress('Checkout Complete', 100);
    
    return results;
    
  } catch (error) {
    console.error('Error during GPS checkout:', error);
    throw error;
  }
}