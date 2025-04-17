// src/services/checkout/obc2Checkout.ts
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
 * Check if memory test was successful by comparing before/after values
 * @param values Array of test values to check
 * @returns Pass/Fail string
 */
function memCheck(values: string[]): string {
  if (values.length < 8) return "[FAIL]";
  
  const writeSuccessBefore = parseInt(values[0]);
  const readSuccessBefore = parseInt(values[1]);
  const writeFailBefore = parseInt(values[2]);
  const readFailBefore = parseInt(values[3]);
  
  const writeSuccessAfter = parseInt(values[4]);
  const readSuccessAfter = parseInt(values[5]);
  const writeFailAfter = parseInt(values[6]);
  const readFailAfter = parseInt(values[7]);
  
  if ((writeSuccessAfter - writeSuccessBefore) > 0 &&
      (readSuccessAfter - readSuccessBefore) > 0 &&
      (writeFailAfter - writeFailBefore) === 0 &&
      (readFailAfter - readFailBefore) === 0) {
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
 */
function canCheck(valuesBefore: string[], valuesAfter: string[], packetOffset: number): string {
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
  if (hkpTxDiff > 0 && hkpAckDiff > 0 &&
      cfgTxDiff > 0 && cfgAckDiff > 0 &&
      metTxDiff > 0 && metAckDiff > 0 &&
      etcTxDiff > 0 && etcAckDiff > 0 &&
      uhfTxDiff > 0 && uhfAckDiff > 0) {
    return "[PASS]";
  }
  
  return "[FAIL]";
}

/**
 * Check if 3.3V voltage level is within acceptable range
 * @param value Voltage value as string (in mV)
 * @returns Pass/Fail string
 */
function check3V3(value: string): string {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number
  if (isNaN(numValue)) {
    return "[FAIL]";
  }
  
  // Check if voltage is within acceptable range (3000-3600 mV)
  return numValue >= 3000 && numValue <= 3600 ? "[PASS]" : "[FAIL]";
}

/**
 * Run the OBC-2 checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param options Test options (SD Card, EEPROM, etc.)
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runOBC2Checkout(
  sock: any, 
  options: { sdCard: boolean; eeprom: boolean },
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results: any = {
      firmware: { major: '', minor: '', patch: '' },
      time: {
        before: '',
        after: '',
        uptime: { total: '', session: '' },
        storePeriod: '',
        resetCount: '',
        resetSource: ''
      },
      can: {
        primary: {
          before: { tx: [], ack: [], timeout: [], error: [] },
          after: { tx: [], ack: [], timeout: [], error: [] },
          result: ''
        },
        secondary: {
          before: { tx: [], ack: [], timeout: [], error: [] },
          after: { tx: [], ack: [], timeout: [], error: [] },
          result: ''
        }
      },
      voltage: {
        sdCard: { value: '', result: '' },
        flash: { value: '', result: '' },
        eeprom: { value: '', result: '' },
        payload: { value: '', current: '', result: '' },
        uhf: { value: '', current: '', result: '' },
        pp: { value: '', current: '' },
        gps: { value: '' },
        lna: { value: '', current: '' }
      },
      memory: {
        sdCard: {
          before: { writeSuccess: '', readSuccess: '', writeFail: '', readFail: '' },
          after: { writeSuccess: '', readSuccess: '', writeFail: '', readFail: '' },
          result: ''
        },
        eeprom: {
          before: { writeSuccess: '', readSuccess: '', writeFail: '', readFail: '' },
          after: { writeSuccess: '', readSuccess: '', writeFail: '', readFail: '' },
          result: ''
        }
      },
      reportGenerated: false,
      allResults: [] // Store all raw results for reporting
    };

    // Track all raw results for later reporting
    const allResults: string[] = [];
    const passFailResults: string[] = [];

    // Step 1: Read firmware version (5%)
    onProgress('Reading OBC-2 Firmware Version', 5);
    const fwVars = ["OBC2_FW_Ver_Major", "OBC2_FW_Ver_Minor", "OBC2_FW_Ver_Patch"];
    
    try {
      const fwResults = await mccifRead(sock, fwVars);
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
      const timeResult = await mccifRead(sock, ["OBC2_Time"]);
      results.time.before = safeParseValue(timeResult[0]);
      allResults.push(results.time.before);
      
      // Set time to now
      await mccifSet(sock, "OBC2_Time", "NOW");
      
      // Read updated time
      const updatedTimeResult = await mccifRead(sock, ["OBC2_Time"]);
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
      "OBC2_Time", "OBC2_Uptime_Total", "OBC2_StorePeriod", 
      "OBC2_Uptime_Session", "OBC2_ResetCount", "OBC2_ResetSource"
    ];
    
    try {
      const timeResults = await mccifRead(sock, timeVars);
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
      ["error", "0", "0", "0", "0", "unknown"].forEach(val => allResults.push(val));
    }

    // Step 4: CAN communication test - primary (30%)
    onProgress('Testing Primary CAN Communication', 30);
    const canVars = [
      "OBC1_InterComm_Obc2_Hkp_Tx", "OBC1_InterComm_Obc2_Cfg_Tx", "OBC1_InterComm_Obc2_Met_Tx",
      "OBC1_InterComm_Obc2_Etc_Tx", "OBC1_InterComm_Obc2_Uhf_Tx", "OBC1_InterComm_Obc2_Hkp_Ack",
      "OBC1_InterComm_Obc2_Cfg_Ack", "OBC1_InterComm_Obc2_Met_Ack", "OBC1_InterComm_Obc2_Etc_Ack",
      "OBC1_InterComm_Obc2_Uhf_Ack", "OBC1_InterComm_Obc2_Hkp_Timeout", "OBC1_InterComm_Obc2_Cfg_Timeout",
      "OBC1_InterComm_Obc2_Met_Timeout", "OBC1_InterComm_Obc2_Etc_Timeout",
      "OBC1_InterComm_Obc2_Uhf_Timeout", "OBC1_InterComm_Obc2_Hkp_Error", "OBC1_InterComm_Obc2_Cfg_Error",
      "OBC1_InterComm_Obc2_Met_Error", "OBC1_InterComm_Obc2_Etc_Error", "OBC1_InterComm_Obc2_Uhf_Error"
    ];
    
    const canSetting = ["OBC1_Intercomm_PriSec_Cfg"];
    
    try {
      // Read initial CAN values
      const canBeforeResults = await mccifRead(sock, canVars);
      
      // Store before values
      const canBeforeValues: string[] = canBeforeResults.map(safeParseValue);
      
      // Update results object
      for (let i = 0; i < 5; i++) {
        results.can.primary.before.tx.push(canBeforeValues[i]);
      }
      for (let i = 5; i < 10; i++) {
        results.can.primary.before.ack.push(canBeforeValues[i]);
      }
      for (let i = 10; i < 15; i++) {
        results.can.primary.before.timeout.push(canBeforeValues[i]);
      }
      for (let i = 15; i < 20; i++) {
        results.can.primary.before.error.push(canBeforeValues[i]);
      }
      
      // Add to allResults
      allResults.push(...canBeforeValues);
      
      // Read CAN configuration
      const canSettingResult = await mccifRead(sock, canSetting);
      const canSettingValue = safeParseValue(canSettingResult[0]);
      allResults.push(canSettingValue);
      
      // Wait for communication to occur
      await new Promise(resolve => setTimeout(resolve, 20000));
      
      // Read CAN values after waiting
      const canAfterResults = await mccifRead(sock, canVars);
      const canAfterValues: string[] = canAfterResults.map(safeParseValue);
      
      // Update results object
      for (let i = 0; i < 5; i++) {
        results.can.primary.after.tx.push(canAfterValues[i]);
      }
      for (let i = 5; i < 10; i++) {
        results.can.primary.after.ack.push(canAfterValues[i]);
      }
      for (let i = 10; i < 15; i++) {
        results.can.primary.after.timeout.push(canAfterValues[i]);
      }
      for (let i = 15; i < 20; i++) {
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
      for (let i = 0; i < 41; i++) {
        allResults.push("error");
      }
    }

    // Step 5: CAN communication test - secondary (50%)
    onProgress('Testing Secondary CAN Communication', 50);
    try {
      // Set to secondary CAN
      await mccifSet(sock, "OBC1_Intercomm_PriSec_Cfg", 31);
      
      // Read initial CAN values for secondary
      const canSecBeforeResults = await mccifRead(sock, canVars);
      const canSecBeforeValues: string[] = canSecBeforeResults.map(safeParseValue);
      
      // Update results object
      for (let i = 0; i < 5; i++) {
        results.can.secondary.before.tx.push(canSecBeforeValues[i]);
      }
      for (let i = 5; i < 10; i++) {
        results.can.secondary.before.ack.push(canSecBeforeValues[i]);
      }
      for (let i = 10; i < 15; i++) {
        results.can.secondary.before.timeout.push(canSecBeforeValues[i]);
      }
      for (let i = 15; i < 20; i++) {
        results.can.secondary.before.error.push(canSecBeforeValues[i]);
      }
      
      // Add to allResults
      allResults.push(...canSecBeforeValues);
      
      // Read secondary CAN configuration
      const canSecSettingResult = await mccifRead(sock, canSetting);
      const canSecSettingValue = safeParseValue(canSecSettingResult[0]);
      allResults.push(canSecSettingValue);
      
      // Wait for communication to occur
      await new Promise(resolve => setTimeout(resolve, 20000));
      
      // Read CAN values after waiting
      const canSecAfterResults = await mccifRead(sock, canVars);
      const canSecAfterValues: string[] = canSecAfterResults.map(safeParseValue);
      
      // Update results object
      for (let i = 0; i < 5; i++) {
        results.can.secondary.after.tx.push(canSecAfterValues[i]);
      }
      for (let i = 5; i < 10; i++) {
        results.can.secondary.after.ack.push(canSecAfterValues[i]);
      }
      for (let i = 10; i < 15; i++) {
        results.can.secondary.after.timeout.push(canSecAfterValues[i]);
      }
      for (let i = 15; i < 20; i++) {
        results.can.secondary.after.error.push(canSecAfterValues[i]);
      }
      
      // Add to allResults
      allResults.push(...canSecAfterValues);
      
      // Check secondary CAN result
      results.can.secondary.result = canCheck(canSecBeforeValues, canSecAfterValues, 5);
      passFailResults.push(results.can.secondary.result);
      
      // Reset to primary CAN
      await mccifSet(sock, "OBC1_Intercomm_PriSec_Cfg", 0);
      
    } catch (error) {
      console.error("Error testing secondary CAN:", error);
      results.can.secondary.result = "[FAIL]";
      passFailResults.push("[FAIL]");
      
      // Add placeholder values to allResults for failed test
      for (let i = 0; i < 41; i++) {
        allResults.push("error");
      }
      
      // Try to reset to primary CAN
      try {
        await mccifSet(sock, "OBC1_Intercomm_PriSec_Cfg", 0);
      } catch (error) {
        console.error("Error resetting to primary CAN:", error);
      }
    }

    // Step 6: Read voltage and current values (65%)
    onProgress('Reading OBC-2 Voltage and Current', 65);
    const viVars = [
      "OBC2_SDCard_3V3_V", "OBC2_Flash_3v3_V", "OBC2_EEPROM_3V3_V", "OBC2_Payload_3V3_V",
      "OBC2_Payload_3V3_I", "OBC2_UHF_3V3_V", "OBC2_UHF_3V3_I", "OBC2_PP_3V3_V", "OBC2_PP_3V3_I",
      "OBC2_GPS_3V3_V", "OBC2_LNA_V", "OBC2_LNA_I"
    ];
    
    try {
      const viResults = await mccifRead(sock, viVars);
      const viValues: string[] = viResults.map(safeParseValue);
      
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
        const sdVoltageResult = await mccifRead(sock, ["OBC2_SDCard_3V3_V"]);
        const sdVoltage = safeParseValue(sdVoltageResult[0]);
        allResults.push(sdVoltage);
        
        // Read SD Card counters before test
        const sdVars = ["OBC2_SD_WriteSuccess", "OBC2_SD_ReadSuccess", "OBC2_SD_WriteFail", "OBC2_SD_ReadFail"];
        const sdBeforeResults = await mccifRead(sock, sdVars);
        const sdBeforeValues = sdBeforeResults.map(safeParseValue);
        
        // Store before values
        results.memory.sdCard.before.writeSuccess = sdBeforeValues[0];
        results.memory.sdCard.before.readSuccess = sdBeforeValues[1];
        results.memory.sdCard.before.writeFail = sdBeforeValues[2];
        results.memory.sdCard.before.readFail = sdBeforeValues[3];
        
        // Add to allResults
        allResults.push(...sdBeforeValues);
        
        // Run SD Card test
        await mccifSet(sock, "OBC2_SD_Control", 6);
        
        // Read SD Card counters after test
        const sdAfterResults = await mccifRead(sock, sdVars);
        const sdAfterValues = sdAfterResults.map(safeParseValue);
        
        // Store after values
        results.memory.sdCard.after.writeSuccess = sdAfterValues[0];
        results.memory.sdCard.after.readSuccess = sdAfterValues[1];
        results.memory.sdCard.after.writeFail = sdAfterValues[2];
        results.memory.sdCard.after.readFail = sdAfterValues[3];
        
        // Add to allResults
        allResults.push(...sdAfterValues);
        
        // Check SD Card test result
        const sdTestValues = [...sdBeforeValues, ...sdAfterValues];
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
        const eepromVoltageResult = await mccifRead(sock, ["OBC2_EEPROM_3V3_V"]);
        const eepromVoltage = safeParseValue(eepromVoltageResult[0]);
        allResults.push(eepromVoltage);
        
        // Read EEPROM counters before test
        const eepromVars = ["OBC2_EEPROM_WriteSuccess", "OBC2_EEPROM_ReadSuccess", 
                          "OBC2_EEPROM_WriteFail", "OBC2_EEPROM_ReadFail"];
        const eepromBeforeResults = await mccifRead(sock, eepromVars);
        const eepromBeforeValues = eepromBeforeResults.map(safeParseValue);
        
        // Store before values
        results.memory.eeprom.before.writeSuccess = eepromBeforeValues[0];
        results.memory.eeprom.before.readSuccess = eepromBeforeValues[1];
        results.memory.eeprom.before.writeFail = eepromBeforeValues[2];
        results.memory.eeprom.before.readFail = eepromBeforeValues[3];
        
        // Add to allResults
        allResults.push(...eepromBeforeValues);
        
        // Run EEPROM test
        await mccifSet(sock, "OBC2_EEPROM_Control", 7);
        
        // Read EEPROM counters after test
        const eepromAfterResults = await mccifRead(sock, eepromVars);
        const eepromAfterValues = eepromAfterResults.map(safeParseValue);
        
        // Store after values
        results.memory.eeprom.after.writeSuccess = eepromAfterValues[0];
        results.memory.eeprom.after.readSuccess = eepromAfterValues[1];
        results.memory.eeprom.after.writeFail = eepromAfterValues[2];
        results.memory.eeprom.after.readFail = eepromAfterValues[3];
        
        // Add to allResults
        allResults.push(...eepromAfterValues);
        
        // Check EEPROM test result
        const eepromTestValues = [...eepromBeforeValues, ...eepromAfterValues];
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
      const finalTimeResults = await mccifRead(sock, timeVars);
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