// src/services/checkout/hepsCheckout.ts
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
 * Check if CAN communication is working by comparing before/after values
 * @param valuesBefore Array of values before test
 * @param valuesAfter Array of values after test
 * @param packetOffset Offset for acknowledgement packets
 * @returns Pass/Fail string
 */
function canCheck(valuesBefore: string[], valuesAfter: string[], packetOffset: number): string {
  if (valuesBefore.length < packetOffset + 5 || valuesAfter.length < packetOffset + 5) {
    return "[FAIL]";
  }
  
  // Calculate differences in transmitted packets
  const pcmTxDiff = parseInt(valuesAfter[0]) - parseInt(valuesBefore[0]);
  const psm1TxDiff = parseInt(valuesAfter[1]) - parseInt(valuesBefore[1]);
  const psm2TxDiff = parseInt(valuesAfter[2]) - parseInt(valuesBefore[2]);
  const pdm1TxDiff = parseInt(valuesAfter[3]) - parseInt(valuesBefore[3]);
  const pdm2TxDiff = parseInt(valuesAfter[4]) - parseInt(valuesBefore[4]);
  
  // Calculate differences in acknowledged packets
  const pcmAckDiff = parseInt(valuesAfter[packetOffset + 0]) - parseInt(valuesBefore[packetOffset + 0]);
  const psm1AckDiff = parseInt(valuesAfter[packetOffset + 1]) - parseInt(valuesBefore[packetOffset + 1]);
  const psm2AckDiff = parseInt(valuesAfter[packetOffset + 2]) - parseInt(valuesBefore[packetOffset + 2]);
  const pdm1AckDiff = parseInt(valuesAfter[packetOffset + 3]) - parseInt(valuesBefore[packetOffset + 3]);
  const pdm2AckDiff = parseInt(valuesAfter[packetOffset + 4]) - parseInt(valuesBefore[packetOffset + 4]);
  
  // Check if all values increased
  if (pcmTxDiff > 0 && pcmAckDiff > 0 &&
      psm1TxDiff > 0 && psm1AckDiff > 0 &&
      psm2TxDiff > 0 && psm2AckDiff > 0 &&
      pdm1TxDiff > 0 && pdm1AckDiff > 0 &&
      pdm2TxDiff > 0 && pdm2AckDiff > 0) {
    return "[PASS]";
  }
  
  return "[FAIL]";
}

/**
 * Check if battery voltage is within acceptable range
 * @param value Voltage value as string
 * @returns Pass/Fail string
 */
function checkBatt(value: string): string {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number
  if (isNaN(numValue)) {
    return "[FAIL]";
  }
  
  // Check if voltage is within acceptable range (7.0-8.5V)
  return numValue >= 7.0 && numValue <= 8.5 ? "[PASS]" : "[FAIL]";
}

/**
 * Check if voltage is within acceptable range based on expected value
 * @param value Voltage value as string
 * @param expected Expected voltage value
 * @returns Pass/Fail string
 */
function checkVFloat(value: string, expected: number): string {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number
  if (isNaN(numValue)) {
    return "[FAIL]";
  }
  
  // Allow 10% tolerance
  const min = expected * 0.9;
  const max = expected * 1.1;
  
  // Check if voltage is within acceptable range
  return numValue >= min && numValue <= max ? "[PASS]" : "[FAIL]";
}

/**
 * Run the HEPS checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param options Test options (enableHeaters)
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runHEPSCheckout(
  sock: any, 
  options: { enableHeaters: boolean },
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize results object to store all test data
    const results: any = {
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
      battery: {
        voltage: { bat1: '', bat2: '', bat3: '', result1: '', result2: '', result3: '' },
        current: { bat1: '', bat2: '', bat3: '' },
        temperature: { bat1: '', bat2: '', bat3: '' }
      },
      solarArray: {
        voltage: { sa1: '', sa2: '', sa3: '' },
        temperature: { 
          sa1Yneg: '', sa2Yneg: '', sa3Yneg: '', 
          bodyMount: '', sa1Ypos: '', sa2Ypos: '', sa3Ypos: '' 
        },
        hdrmStatus: { hdrm1: '', hdrm2: '' }
      },
      obn: {
        obn1: { voltage: '', current: '', result: '' },
        obn2: { voltage: '', current: '', result: '' },
        aux12v: { voltage: '', result: '' }
      },
      bcr: {
        current: { bcr1: '', bcr2: '', bcr3: '' },
        temperature: { bcr1: '', bcr2: '', bcr3: '' }
      },
      pcb: {
        temperature: { pdm1: '', pdm2: '' }
      },
      converters: {
        conv1: {
          hdrm12v: { voltage: '', result: '' },
          conv5v: { voltage: '', result: '' },
          conv12v: { voltage: '', result: '' },
          conv15v: { voltage: '', result: '' },
          temperature: { hdrm12v: '', conv5v: '', conv12v: '', conv15v: '' }
        },
        conv2: {
          hdrm12v: { voltage: '', result: '' },
          conv5v: { voltage: '', result: '' },
          conv12v: { voltage: '', result: '' },
          temperature: { hdrm12v: '', conv5v: '', conv12v: '' }
        }
      },
      rlcl: {
        obc1: { voltage: '', current: '', result: '' },
        obc2: { voltage: '', current: '', result: '' },
        sband: { voltage: '', current: '', result: '' },
        uhf: { voltage: '', current: '', result: '' }
      },
      lcl: {}, // Will be populated with many LCL values
      hdrm: {}, // Will be populated with HDRM values
      heater: {
        heater1: {
          status: '',
          battery: { voltage: '', current: '' },
          thruster: { voltage: '', current: '' },
          leocam: { voltage: '', current: '' },
          test: {} // Will be populated during heater test
        },
        heater2: {
          status: '',
          battery: { voltage: '', current: '' },
          thruster: { voltage: '', current: '' },
          leocam: { voltage: '', current: '' },
          test: {} // Will be populated during heater test
        }
      },
      allResults: [], // Store all raw results for reporting
      passFailResults: [] // Store pass/fail results for reporting
    };

    // Define all parameter groups
    const canVars = ["OBC1_InterComm_Heps1_Pcm_Tx", "OBC1_InterComm_Heps1_Psm1_Tx", "OBC1_InterComm_Heps1_Psm2_Tx",
                     "OBC1_InterComm_Heps1_Pdm1_Tx", "OBC1_InterComm_Heps1_Pdm2_Tx", "OBC1_InterComm_Heps1_Pcm_Ack",
                     "OBC1_InterComm_Heps1_Psm1_Ack", "OBC1_InterComm_Heps1_Psm2_Ack", "OBC1_InterComm_Heps1_Pdm1_Ack",
                     "OBC1_InterComm_Heps1_Pdm2_Ack", "OBC1_InterComm_Heps1_Pcm_Timeout",
                     "OBC1_InterComm_Heps1_Psm1_Timeout", "OBC1_InterComm_Heps1_Psm2_Timeout",
                     "OBC1_InterComm_Heps1_Pdm1_Timeout", "OBC1_InterComm_Heps1_Pdm2_Timeout",
                     "OBC1_InterComm_Heps1_Pcm_Error", "OBC1_InterComm_Heps1_Psm1_Error",
                     "OBC1_InterComm_Heps1_Psm2_Error", "OBC1_InterComm_Heps1_Pdm1_Error",
                     "OBC1_InterComm_Heps1_Pdm2_Error"];
    
    const canSetting = ["OBC1_Intercomm_PriSec_Cfg"];
    
    const batVI = ["HEPS1_PCM_BAT_V_1", "HEPS1_PCM_BAT_V_2", "HEPS1_PCM_BAT_V_3", "HEPS1_PCM_BAT_I_CHAR_1",
                   "HEPS1_PCM_BAT_I_CHAR_2", "HEPS1_PCM_BAT_I_CHAR_3"];
    
    const batT = ["HEPS1_PSM1_BAT_TEMP1", "HEPS1_PSM1_BAT_TEMP2", "HEPS1_PSM1_BAT_TEMP3"];
    
    const saV = ["HEPS1_PCM_SA_V_1", "HEPS1_PCM_SA_V_2", "HEPS1_PCM_SA_V_3"];
    
    const saT1 = ["HEPS1_PSM1_SA1_Y-_TEMP", "HEPS1_PSM1_SA2_Y-_TEMP"];
    
    const saT2 = ["HEPS1_PSM2_SA3_Y-_TEMP", "HEPS1_PSM2_SA_BM_TEMP", "HEPS1_PSM2_SA1_Y+_TEMP", "HEPS1_PSM2_SA2_Y+_TEMP",
                  "HEPS1_PSM2_SA3_Y+_TEMP"];
    
    const hdrmStatus = ["HEPS1_PSM1_HDRM_DEPLOY_STATUS1", "HEPS1_PSM2_HDRM_DEPLOY_STATUS2"];
    
    const obnVI = ["HEPS1_PCM_OBN1_V", "HEPS1_PCM_OBN1_I", "HEPS1_PCM_OBN2_V", "HEPS1_PCM_OBN2_I", "HEPS1_PCM_AUX12_V"];
    
    const bcrIT = ["HEPS1_PCM_BCR1_I", "HEPS1_PCM_BCR2_I", "HEPS1_PCM_BCR3_I", "HEPS1_PCM_BCR1_TEMP",
                   "HEPS1_PCM_BCR2_TEMP", "HEPS1_PCM_BCR3_TEMP"];
    
    const pcbT = ["HEPS1_PDM1_PCB_TEMP", "HEPS1_PDM2_PCB_TEMP"];
    
    const conv1V = ["HEPS1_PSM1_HDRM_CON1_V", "HEPS1_PSM1_5V_CON1_V", "HEPS1_PSM1_12V_CON1_V", "HEPS1_PSM1_15V_CON_V"];
    
    const conv2V = ["HEPS1_PSM2_HDRM_CON2_V", "HEPS1_PSM2_5V_CON2_V", "HEPS1_PSM2_12V_CON2_V"];
    
    const conv1T = ["HEPS1_PSM1_HDRM_CON1_TEMP", "HEPS1_PSM1_5V_CON1_TEMP", "HEPS1_PSM1_12V_CON1_TEMP",
                    "HEPS1_PSM1_15V_CON1_TEMP"];
    
    const conv2T = ["HEPS1_PSM2_HDRM_CON2_TEMP", "HEPS1_PSM2_5V_CON2_TEMP", "HEPS1_PSM2_12V_CON2_TEMP"];
    
    const rlclVI = ["HEPS1_PDM2_OBC1_V", "HEPS1_PDM2_OBC1_I", "HEPS1_PDM1_OBC2_V", "HEPS1_PDM1_OBC2_I",
                    "HEPS1_PDM1_S-BAND_V", "HEPS1_PDM1_S-BAND_I", "HEPS1_PDM2_UHF_V", "HEPS1_PDM2_UHF_I"];
    
    const lclVI = ["HEPS1_PDM2_ADCS_IF_V", "HEPS1_PDM2_ADCS-IF_I", "HEPS1_PDM2_ADCD_RW_V", "HEPS1_PDM2_ADCD_RW_I",
                   "HEPS1_PDM2_GPS_5V_V", "HEPS1_PDM2_GPS_5V_I", "HEPS1_PDM1_ECU1_V", "HEPS1_PDM1_ECU1_I",
                   "HEPS1_PDM1_THRU1_V", "HEPS1_PDM1_THRU1_I", "HEPS1_PDM2_ECU2_V", "HEPS1_PDM2_ECU2_I",
                   "HEPS1_PDM2_THRU2_V", "HEPS1_PDM2_THRU2_I", "HEPS1_PDM2_PCS_V", "HEPS1_PDM2_PCS_I",
                   "HEPS1_PDM1_OPT_CAM_V", "HEPS1_PDM1_OPT_CAM_I", "HEPS1_PDM1_X-BAND_V", "HEPS1_PDM1_X-BAND_I",
                   "HEPS1_PDM1_AOD1_V", "HEPS1_PDM1_AOD1_I", "HEPS1_PDM2_AOD2_V", "HEPS1_PDM2_AOD2_I",
                   "HEPS1_PDM1_CIP_V", "HEPS1_PDM1_CIP_I"];
    
    const hdrmVI = ["HEPS1_PDM1_HDRM1_ARM_V", "HEPS1_PDM1_HDRM1_SW01_V", "HEPS1_PDM1_HDRM1_SW01_I",
                    "HEPS1_PDM1_HDRM1_SW02_V", "HEPS1_PDM1_HDRM1_SW03_V", "HEPS1_PDM1_HDRM1_SW02_I",
                    "HEPS1_PDM1_HDRM1_SW03_I", "HEPS1_PDM2_HDRM2_ARM_V", "HEPS1_PDM2_HDRM2_SW01_V",
                    "HEPS1_PDM2_HDRM2_SW01_I", "HEPS1_PDM2_HDRM2_SW02_V", "HEPS1_PDM2_HDRM2_SW03_V",
                    "HEPS1_PDM2_HDRM2_SW02_I", "HEPS1_PDM2_HDRM2_SW03_I"];
    
    const heater1VI = ["HEPS1_PSM1_HT1_LCL", "HEPS1_PSM1_BAT_HT1_V", "HEPS1_PSM1_BAT_HT1_I", "HEPS1_PSM1_THRU_HT1_V",
                       "HEPS1_PSM1_THRU_HT1_I", "HEPS1_PSM1_CAM_HT1_V", "HEPS1_PSM1_CAM_HT1_I"];
    
    const heater2VI = ["HEPS1_PSM2_HT2_LCL", "HEPS1_PSM2_BAT_HT2_V", "HEPS1_PSM2_BAT_HT2_I", "HEPS1_PSM2_THRU_HT2_V",
                       "HEPS1_PSM2_THRU_HT2_I", "HEPS1_PSM2_CAM_HT2_V", "HEPS1_PSM2_CAM_HT2_I"];

    // Step 1: Test Primary CAN (5%)
    onProgress('Testing Primary CAN Communication', 5);
    
    try {
      // Read initial CAN values
      const canBeforeResults = await mccifRead(sock, canVars);
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
      results.allResults.push(...canBeforeValues);
      
      // Read CAN configuration
      const canSettingResult = await mccifRead(sock, canSetting);
      const canSettingValue = safeParseValue(canSettingResult[0]);
      results.allResults.push(canSettingValue);
      
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
      results.allResults.push(...canAfterValues);
      
      // Check primary CAN result
      results.can.primary.result = canCheck(canBeforeValues, canAfterValues, 5);
      results.passFailResults.push(results.can.primary.result);
      
    } catch (error) {
      console.error("Error testing primary CAN:", error);
      results.can.primary.result = "[FAIL]";
      results.passFailResults.push("[FAIL]");
      
      // Add placeholder values to allResults for failed test
      for (let i = 0; i < 41; i++) {
        results.allResults.push("error");
      }
    }

    // Step 2: Test Secondary CAN (10%)
    onProgress('Testing Secondary CAN Communication', 10);
    
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
      results.allResults.push(...canSecBeforeValues);
      
      // Read secondary CAN configuration
      const canSecSettingResult = await mccifRead(sock, canSetting);
      const canSecSettingValue = safeParseValue(canSecSettingResult[0]);
      results.allResults.push(canSecSettingValue);
      
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
      results.allResults.push(...canSecAfterValues);
      
      // Check secondary CAN result
      results.can.secondary.result = canCheck(canSecBeforeValues, canSecAfterValues, 5);
      results.passFailResults.push(results.can.secondary.result);
      
      // Reset to primary CAN
      await mccifSet(sock, "OBC1_Intercomm_PriSec_Cfg", 0);
      
    } catch (error) {
      console.error("Error testing secondary CAN:", error);
      results.can.secondary.result = "[FAIL]";
      results.passFailResults.push("[FAIL]");
      
      // Add placeholder values to allResults for failed test
      for (let i = 0; i < 41; i++) {
        results.allResults.push("error");
      }
      
      // Try to reset to primary CAN
      try {
        await mccifSet(sock, "OBC1_Intercomm_PriSec_Cfg", 0);
      } catch (error) {
        console.error("Error resetting to primary CAN:", error);
      }
    }

    // Step 3: Battery checks (20%)
    onProgress('Reading Battery Parameters', 20);
    
    try {
      // Read battery voltage and current
      const batVIResults = await mccifRead(sock, batVI);
      const batVIValues: string[] = batVIResults.map(safeParseValue);
      
      // Store battery voltage values
      results.battery.voltage.bat1 = batVIValues[0];
      results.battery.voltage.bat2 = batVIValues[1];
      results.battery.voltage.bat3 = batVIValues[2];
      
      // Store battery current values
      results.battery.current.bat1 = batVIValues[3];
      results.battery.current.bat2 = batVIValues[4];
      results.battery.current.bat3 = batVIValues[5];
      
      // Check battery voltages
      results.battery.voltage.result1 = checkBatt(batVIValues[0]);
      results.battery.voltage.result2 = checkBatt(batVIValues[1]);
      results.battery.voltage.result3 = checkBatt(batVIValues[2]);
      
      // Add to passFailResults
      results.passFailResults.push(results.battery.voltage.result1);
      results.passFailResults.push(results.battery.voltage.result2);
      results.passFailResults.push(results.battery.voltage.result3);
      
      // Add to allResults
      results.allResults.push(...batVIValues);
      
      // Read battery temperature
      const batTResults = await mccifRead(sock, batT);
      const batTValues: string[] = batTResults.map(safeParseValue);
      
      // Store battery temperature values
      results.battery.temperature.bat1 = batTValues[0];
      results.battery.temperature.bat2 = batTValues[1];
      results.battery.temperature.bat3 = batTValues[2];
      
      // Add to allResults
      results.allResults.push(...batTValues);
      
    } catch (error) {
      console.error("Error reading battery parameters:", error);
      
      // Set default error values
      const errorVals = Array(9).fill("error");
      results.allResults.push(...errorVals);
      
      // Add fail results to passFailResults
      results.passFailResults.push("[FAIL]", "[FAIL]", "[FAIL]");
    }

    // Step 4: Solar Array checks (30%)
    onProgress('Reading Solar Array Parameters', 30);
    
    try {
      // Read solar array voltage
      const saVResults = await mccifRead(sock, saV);
      const saVValues: string[] = saVResults.map(safeParseValue);
      
      // Store solar array voltage values
      results.solarArray.voltage.sa1 = saVValues[0];
      results.solarArray.voltage.sa2 = saVValues[1];
      results.solarArray.voltage.sa3 = saVValues[2];
      
      // Add to allResults
      results.allResults.push(...saVValues);
      
      // Read solar array temperature (first group)
      const saT1Results = await mccifRead(sock, saT1);
      const saT1Values: string[] = saT1Results.map(safeParseValue);
      
      // Store solar array temperature values (first group)
      results.solarArray.temperature.sa1Yneg = saT1Values[0];
      results.solarArray.temperature.sa2Yneg = saT1Values[1];
      
      // Add to allResults
      results.allResults.push(...saT1Values);
      
      // Read solar array temperature (second group)
      const saT2Results = await mccifRead(sock, saT2);
      const saT2Values: string[] = saT2Results.map(safeParseValue);
      
      // Store solar array temperature values (second group)
      results.solarArray.temperature.sa3Yneg = saT2Values[0];
      results.solarArray.temperature.bodyMount = saT2Values[1];
      results.solarArray.temperature.sa1Ypos = saT2Values[2];
      results.solarArray.temperature.sa2Ypos = saT2Values[3];
      results.solarArray.temperature.sa3Ypos = saT2Values[4];
      
      // Add to allResults
      results.allResults.push(...saT2Values);
      
      // Read HDRM deploy status
      const hdrmStatusResults = await mccifRead(sock, hdrmStatus);
      const hdrmStatusValues: string[] = hdrmStatusResults.map(safeParseValue);
      
      // Store HDRM deploy status
      results.solarArray.hdrmStatus.hdrm1 = hdrmStatusValues[0];
      results.solarArray.hdrmStatus.hdrm2 = hdrmStatusValues[1];
      
      // Add to allResults
      results.allResults.push(...hdrmStatusValues);
      
    } catch (error) {
      console.error("Error reading solar array parameters:", error);
      
// Set default error values for Solar Array parameters
      const errorVals = Array(12).fill("error");
      results.allResults.push(...errorVals);
    }

    // Step 5: OBN checks (40%)
    onProgress('Reading OBN Parameters', 40);
    
    try {
      // Read OBN voltage and current
      const obnVIResults = await mccifRead(sock, obnVI);
      const obnVIValues: string[] = obnVIResults.map(safeParseValue);
      
      // Store OBN values
      results.obn.obn1.voltage = obnVIValues[0];
      results.obn.obn1.current = obnVIValues[1];
      results.obn.obn2.voltage = obnVIValues[2];
      results.obn.obn2.current = obnVIValues[3];
      results.obn.aux12v.voltage = obnVIValues[4];
      
      // Check OBN voltages
      results.obn.obn1.result = checkVFloat(obnVIValues[0], 3.3);
      results.obn.obn2.result = checkVFloat(obnVIValues[2], 3.3);
      results.obn.aux12v.result = checkVFloat(obnVIValues[4], 12.0);
      
      // Add to passFailResults
      results.passFailResults.push(results.obn.obn1.result);
      results.passFailResults.push(results.obn.obn2.result);
      results.passFailResults.push(results.obn.aux12v.result);
      
      // Add to allResults
      results.allResults.push(...obnVIValues);
      
    } catch (error) {
      console.error("Error reading OBN parameters:", error);
      
      // Set default error values
      const errorVals = Array(5).fill("error");
      results.allResults.push(...errorVals);
      
      // Add fail results to passFailResults
      results.passFailResults.push("[FAIL]", "[FAIL]", "[FAIL]");
    }

    // Step 6: Battery Charging Regulator checks (50%)
    onProgress('Reading BCR Parameters', 50);
    
    try {
      // Read BCR current and temperature
      const bcrITResults = await mccifRead(sock, bcrIT);
      const bcrITValues: string[] = bcrITResults.map(safeParseValue);
      
      // Store BCR values
      results.bcr.current.bcr1 = bcrITValues[0];
      results.bcr.current.bcr2 = bcrITValues[1];
      results.bcr.current.bcr3 = bcrITValues[2];
      results.bcr.temperature.bcr1 = bcrITValues[3];
      results.bcr.temperature.bcr2 = bcrITValues[4];
      results.bcr.temperature.bcr3 = bcrITValues[5];
      
      // Add to allResults
      results.allResults.push(...bcrITValues);
      
      // Read PCB temperature
      const pcbTResults = await mccifRead(sock, pcbT);
      const pcbTValues: string[] = pcbTResults.map(safeParseValue);
      
      // Store PCB temperature values
      results.pcb.temperature.pdm1 = pcbTValues[0];
      results.pcb.temperature.pdm2 = pcbTValues[1];
      
      // Add to allResults
      results.allResults.push(...pcbTValues);
      
    } catch (error) {
      console.error("Error reading BCR and PCB parameters:", error);
      
      // Set default error values
      const errorVals = Array(8).fill("error");
      results.allResults.push(...errorVals);
    }

    // Step 7: Converters checks (60%)
    onProgress('Reading Converter Parameters', 60);
    
    try {
      // Read Converter 1 voltage
      const conv1VResults = await mccifRead(sock, conv1V);
      const conv1VValues: string[] = conv1VResults.map(safeParseValue);
      
      // Store Converter 1 voltage values
      results.converters.conv1.hdrm12v.voltage = conv1VValues[0];
      results.converters.conv1.conv5v.voltage = conv1VValues[1];
      results.converters.conv1.conv12v.voltage = conv1VValues[2];
      results.converters.conv1.conv15v.voltage = conv1VValues[3];
      
      // Check converter voltages
      results.converters.conv1.hdrm12v.result = checkVFloat(conv1VValues[0], 12.0);
      results.converters.conv1.conv5v.result = checkVFloat(conv1VValues[1], 5.0);
      results.converters.conv1.conv12v.result = checkVFloat(conv1VValues[2], 12.0);
      results.converters.conv1.conv15v.result = checkVFloat(conv1VValues[3], 15.0);
      
      // Add to passFailResults
      results.passFailResults.push(results.converters.conv1.hdrm12v.result);
      results.passFailResults.push(results.converters.conv1.conv5v.result);
      results.passFailResults.push(results.converters.conv1.conv12v.result);
      results.passFailResults.push(results.converters.conv1.conv15v.result);
      
      // Add to allResults
      results.allResults.push(...conv1VValues);
      
      // Read Converter 2 voltage
      const conv2VResults = await mccifRead(sock, conv2V);
      const conv2VValues: string[] = conv2VResults.map(safeParseValue);
      
      // Store Converter 2 voltage values
      results.converters.conv2.hdrm12v.voltage = conv2VValues[0];
      results.converters.conv2.conv5v.voltage = conv2VValues[1];
      results.converters.conv2.conv12v.voltage = conv2VValues[2];
      
      // Check converter voltages
      results.converters.conv2.hdrm12v.result = checkVFloat(conv2VValues[0], 12.0);
      results.converters.conv2.conv5v.result = checkVFloat(conv2VValues[1], 5.0);
      results.converters.conv2.conv12v.result = checkVFloat(conv2VValues[2], 12.0);
      
      // Add to passFailResults
      results.passFailResults.push(results.converters.conv2.hdrm12v.result);
      results.passFailResults.push(results.converters.conv2.conv5v.result);
      results.passFailResults.push(results.converters.conv2.conv12v.result);
      
      // Add to allResults
      results.allResults.push(...conv2VValues);
      
      // Read Converter 1 temperature
      const conv1TResults = await mccifRead(sock, conv1T);
      const conv1TValues: string[] = conv1TResults.map(safeParseValue);
      
      // Store Converter 1 temperature values
      results.converters.conv1.temperature.hdrm12v = conv1TValues[0];
      results.converters.conv1.temperature.conv5v = conv1TValues[1];
      results.converters.conv1.temperature.conv12v = conv1TValues[2];
      results.converters.conv1.temperature.conv15v = conv1TValues[3];
      
      // Add to allResults
      results.allResults.push(...conv1TValues);
      
      // Read Converter 2 temperature
      const conv2TResults = await mccifRead(sock, conv2T);
      const conv2TValues: string[] = conv2TResults.map(safeParseValue);
      
      // Store Converter 2 temperature values
      results.converters.conv2.temperature.hdrm12v = conv2TValues[0];
      results.converters.conv2.temperature.conv5v = conv2TValues[1];
      results.converters.conv2.temperature.conv12v = conv2TValues[2];
      
      // Add to allResults
      results.allResults.push(...conv2TValues);
      
    } catch (error) {
      console.error("Error reading converter parameters:", error);
      
      // Set default error values
      const errorVals = Array(14).fill("error");
      results.allResults.push(...errorVals);
      
      // Add fail results to passFailResults
      const failResults = Array(7).fill("[FAIL]");
      results.passFailResults.push(...failResults);
    }

    // Step 8: RLCL checks (70%)
    onProgress('Reading RLCL Parameters', 70);
    
    try {
      // Read RLCL voltage and current
      const rlclVIResults = await mccifRead(sock, rlclVI);
      const rlclVIValues: string[] = rlclVIResults.map(safeParseValue);
      
      // Store RLCL values
      results.rlcl.obc1.voltage = rlclVIValues[0];
      results.rlcl.obc1.current = rlclVIValues[1];
      results.rlcl.obc2.voltage = rlclVIValues[2];
      results.rlcl.obc2.current = rlclVIValues[3];
      results.rlcl.sband.voltage = rlclVIValues[4];
      results.rlcl.sband.current = rlclVIValues[5];
      results.rlcl.uhf.voltage = rlclVIValues[6];
      results.rlcl.uhf.current = rlclVIValues[7];
      
      // Check RLCL voltages
      results.rlcl.obc1.result = checkVFloat(rlclVIValues[0], 12.0);
      results.rlcl.obc2.result = checkVFloat(rlclVIValues[2], 12.0);
      results.rlcl.sband.result = checkVFloat(rlclVIValues[4], 12.0);
      results.rlcl.uhf.result = checkVFloat(rlclVIValues[6], 12.0);
      
      // Add to passFailResults
      results.passFailResults.push(results.rlcl.obc1.result);
      results.passFailResults.push(results.rlcl.obc2.result);
      results.passFailResults.push(results.rlcl.sband.result);
      results.passFailResults.push(results.rlcl.uhf.result);
      
      // Add to allResults
      results.allResults.push(...rlclVIValues);
      
    } catch (error) {
      console.error("Error reading RLCL parameters:", error);
      
      // Set default error values
      const errorVals = Array(8).fill("error");
      results.allResults.push(...errorVals);
      
      // Add fail results to passFailResults
      const failResults = Array(4).fill("[FAIL]");
      results.passFailResults.push(...failResults);
    }

    // Step 9: LCL, HDRM, Heater parameters (85%)
    onProgress('Reading LCL, HDRM, and Heater Parameters', 85);
    
    try {
      // Read LCL voltage and current
      const lclVIResults = await mccifRead(sock, lclVI);
      const lclVIValues: string[] = lclVIResults.map(safeParseValue);
      
      // Store LCL values in the results object
      for (let i = 0; i < lclVIValues.length; i += 2) {
        const key = lclVI[i].replace('HEPS1_PDM1_', '').replace('HEPS1_PDM2_', '').replace('_V', '');
        results.lcl[key] = {
          voltage: lclVIValues[i],
          current: lclVIValues[i+1]
        };
      }
      
      // Add to allResults
      results.allResults.push(...lclVIValues);
      
      // Read HDRM voltage and current
      const hdrmVIResults = await mccifRead(sock, hdrmVI);
      const hdrmVIValues: string[] = hdrmVIResults.map(safeParseValue);
      
      // Store HDRM values in the results object
      for (let i = 0; i < hdrmVIValues.length; i++) {
        const key = hdrmVI[i].replace('HEPS1_PDM1_', '').replace('HEPS1_PDM2_', '');
        results.hdrm[key] = hdrmVIValues[i];
      }
      
      // Add to allResults
      results.allResults.push(...hdrmVIValues);
      
      // Read Heater 1 values
      const heater1VIResults = await mccifRead(sock, heater1VI);
      const heater1VIValues: string[] = heater1VIResults.map(safeParseValue);
      
      // Store Heater 1 values
      results.heater.heater1.status = heater1VIValues[0];
      results.heater.heater1.battery.voltage = heater1VIValues[1];
      results.heater.heater1.battery.current = heater1VIValues[2];
      results.heater.heater1.thruster.voltage = heater1VIValues[3];
      results.heater.heater1.thruster.current = heater1VIValues[4];
      results.heater.heater1.leocam.voltage = heater1VIValues[5];
      results.heater.heater1.leocam.current = heater1VIValues[6];
      
      // Add to allResults
      results.allResults.push(...heater1VIValues);
      
      // Read Heater 2 values
      const heater2VIResults = await mccifRead(sock, heater2VI);
      const heater2VIValues: string[] = heater2VIResults.map(safeParseValue);
      
      // Store Heater 2 values
      results.heater.heater2.status = heater2VIValues[0];
      results.heater.heater2.battery.voltage = heater2VIValues[1];
      results.heater.heater2.battery.current = heater2VIValues[2];
      results.heater.heater2.thruster.voltage = heater2VIValues[3];
      results.heater.heater2.thruster.current = heater2VIValues[4];
      results.heater.heater2.leocam.voltage = heater2VIValues[5];
      results.heater.heater2.leocam.current = heater2VIValues[6];
      
      // Add to allResults
      results.allResults.push(...heater2VIValues);
      
    } catch (error) {
      console.error("Error reading LCL, HDRM, and Heater parameters:", error);
      
      // Set default error values
      const errorVals = Array(47).fill("error");
      results.allResults.push(...errorVals);
    }

    // Step 10: Heater testing if enabled (95-100%)
    if (options.enableHeaters) {
      onProgress('Testing Heaters', 95);
      
      try {
        // Initialize heater test results
        results.heater.heater1.test = {
          lclOn: [],
          batteryOn: [],
          batteryOff: [],
          thrusterOn: [],
          thrusterOff: [],
          leocamOn: [],
          leocamOff: [],
          lclOff: []
        };
        
        results.heater.heater2.test = {
          lclOn: [],
          batteryOn: [],
          batteryOff: [],
          thrusterOn: [],
          thrusterOff: [],
          leocamOn: [],
          leocamOff: [],
          lclOff: []
        };
        
        // Test Heater 1
        // Turn on Heater 1 LCL
        await mccifSet(sock, "OBC1_Ch_ExtReqOn", 18);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on LCL
        const heater1LclOnResults = await mccifRead(sock, heater1VI);
        const heater1LclOnValues = heater1LclOnResults.map(safeParseValue);
        results.heater.heater1.test.lclOn = heater1LclOnValues;
        results.allResults.push(...heater1LclOnValues);
        
        // Turn on Battery Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOn", 1);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on Battery Heater
        const heater1BattOnResults = await mccifRead(sock, heater1VI);
        const heater1BattOnValues = heater1BattOnResults.map(safeParseValue);
        results.heater.heater1.test.batteryOn = heater1BattOnValues;
        results.allResults.push(...heater1BattOnValues);
        
        // Turn off Battery Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOff", 1);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off Battery Heater
        const heater1BattOffResults = await mccifRead(sock, heater1VI);
        const heater1BattOffValues = heater1BattOffResults.map(safeParseValue);
        results.heater.heater1.test.batteryOff = heater1BattOffValues;
        results.allResults.push(...heater1BattOffValues);
        
        // Turn on Thruster Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOn", 2);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on Thruster Heater
        const heater1ThruOnResults = await mccifRead(sock, heater1VI);
        const heater1ThruOnValues = heater1ThruOnResults.map(safeParseValue);
        results.heater.heater1.test.thrusterOn = heater1ThruOnValues;
        results.allResults.push(...heater1ThruOnValues);
        
        // Turn off Thruster Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOff", 2);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off Thruster Heater
        const heater1ThruOffResults = await mccifRead(sock, heater1VI);
        const heater1ThruOffValues = heater1ThruOffResults.map(safeParseValue);
        results.heater.heater1.test.thrusterOff = heater1ThruOffValues;
        results.allResults.push(...heater1ThruOffValues);
        
        // Turn on LEOCAM Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOn", 3);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on LEOCAM Heater
        const heater1LeocamOnResults = await mccifRead(sock, heater1VI);
        const heater1LeocamOnValues = heater1LeocamOnResults.map(safeParseValue);
        results.heater.heater1.test.leocamOn = heater1LeocamOnValues;
        results.allResults.push(...heater1LeocamOnValues);
        
        // Turn off LEOCAM Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOff", 3);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off LEOCAM Heater
        const heater1LeocamOffResults = await mccifRead(sock, heater1VI);
        const heater1LeocamOffValues = heater1LeocamOffResults.map(safeParseValue);
        results.heater.heater1.test.leocamOff = heater1LeocamOffValues;
        results.allResults.push(...heater1LeocamOffValues);
        
        // Turn off Heater 1 LCL
        await mccifSet(sock, "OBC1_Ch_ExtReqOff", 18);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off LCL
        const heater1LclOffResults = await mccifRead(sock, heater1VI);
        const heater1LclOffValues = heater1LclOffResults.map(safeParseValue);
        results.heater.heater1.test.lclOff = heater1LclOffValues;
        results.allResults.push(...heater1LclOffValues);
        
        // Test Heater 2
        // Turn on Heater 2 LCL
        await mccifSet(sock, "OBC1_Ch_ExtReqOn", 19);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on LCL
        const heater2LclOnResults = await mccifRead(sock, heater2VI);
        const heater2LclOnValues = heater2LclOnResults.map(safeParseValue);
        results.heater.heater2.test.lclOn = heater2LclOnValues;
        results.allResults.push(...heater2LclOnValues);
        
        // Turn on Battery Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOn", 4);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on Battery Heater
        const heater2BattOnResults = await mccifRead(sock, heater2VI);
        const heater2BattOnValues = heater2BattOnResults.map(safeParseValue);
        results.heater.heater2.test.batteryOn = heater2BattOnValues;
        results.allResults.push(...heater2BattOnValues);
        
        // Turn off Battery Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOff", 4);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off Battery Heater
        const heater2BattOffResults = await mccifRead(sock, heater2VI);
        const heater2BattOffValues = heater2BattOffResults.map(safeParseValue);
        results.heater.heater2.test.batteryOff = heater2BattOffValues;
        results.allResults.push(...heater2BattOffValues);
        
        // Turn on Thruster Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOn", 5);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on Thruster Heater
        const heater2ThruOnResults = await mccifRead(sock, heater2VI);
        const heater2ThruOnValues = heater2ThruOnResults.map(safeParseValue);
        results.heater.heater2.test.thrusterOn = heater2ThruOnValues;
        results.allResults.push(...heater2ThruOnValues);
        
        // Turn off Thruster Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOff", 5);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off Thruster Heater
        const heater2ThruOffResults = await mccifRead(sock, heater2VI);
        const heater2ThruOffValues = heater2ThruOffResults.map(safeParseValue);
        results.heater.heater2.test.thrusterOff = heater2ThruOffValues;
        results.allResults.push(...heater2ThruOffValues);
        
        // Turn on LEOCAM Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOn", 6);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning on LEOCAM Heater
        const heater2LeocamOnResults = await mccifRead(sock, heater2VI);
        const heater2LeocamOnValues = heater2LeocamOnResults.map(safeParseValue);
        results.heater.heater2.test.leocamOn = heater2LeocamOnValues;
        results.allResults.push(...heater2LeocamOnValues);
        
        // Turn off LEOCAM Heater
        await mccifSet(sock, "OBC1_Ch_HeaterSwReqOff", 6);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off LEOCAM Heater
        const heater2LeocamOffResults = await mccifRead(sock, heater2VI);
        const heater2LeocamOffValues = heater2LeocamOffResults.map(safeParseValue);
        results.heater.heater2.test.leocamOff = heater2LeocamOffValues;
        results.allResults.push(...heater2LeocamOffValues);
        
        // Turn off Heater 2 LCL
        await mccifSet(sock, "OBC1_Ch_ExtReqOff", 19);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Read values after turning off LCL
        const heater2LclOffResults = await mccifRead(sock, heater2VI);
        const heater2LclOffValues = heater2LclOffResults.map(safeParseValue);
        results.heater.heater2.test.lclOff = heater2LclOffValues;
        results.allResults.push(...heater2LclOffValues);
        
      } catch (error) {
        console.error("Error testing heaters:", error);
        
        // Set default error values for heater tests - 2 heaters * 8 test states * 7 parameters = 112 values
        const errorVals = Array(112).fill("0.000");
        results.allResults.push(...errorVals);
      }
    } else {
      // Skip heater test but fill in dummy values
      const dummyValues = Array(112).fill("0.000");
      results.allResults.push(...dummyValues);
    }

    // Complete checkout (100%)
    onProgress('HEPS Checkout Complete', 100);
    
    return results;
    
  } catch (error) {
    console.error('Error during HEPS checkout:', error);
    throw error;
  }
}

