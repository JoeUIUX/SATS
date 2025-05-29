// src/services/checkout/xbandCheckout.ts
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
 * Run the X-Band checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runXBandCheckout(
  sock: any,
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results = {
      voltages: {
        pcs: { value: '', pass: false },
        xband: { value: '', pass: false },
        xbandOff: { value: '', pass: false }
      },
      currents: {
        pcs: '',
        xband: '',
        xbandOff: ''
      },
      reportGenerated: false
    };

    // Step 1: Initialize (10%)
    onProgress('Initializing X-Band Test', 10);
    
    // Step 2: Enable PCS (20%)
    onProgress('Enabling PCS', 20);
    
    // await mccifSet(sock, "OBC1_Ch_ExtReqOn", 7);
    await mccifSet(sock, "OBC1_Heps_Lcl_ExtReqOn", 14); //changed parameter name and value (21 May 2025 Test)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Step 3: Check PCS voltage and current (30%)
    onProgress('Checking PCS Voltage and Current', 30);
    
    const pcsVI = ["HEPS1_PDM2_PCS_V", "HEPS1_PDM2_PCS_I"];
    const pcsResults = await mccifRead(sock, pcsVI);
    
    // Parse the results
    const pcsV = safeParseValue(pcsResults[0]);
    const pcsI = safeParseValue(pcsResults[1]);
    
    results.voltages.pcs.value = pcsV;
    results.currents.pcs = pcsI;
    
    // Check if voltage is within expected range (around 12V)
    const pcsVoltage = parseFloat(pcsV);
    results.voltages.pcs.pass = !isNaN(pcsVoltage) && pcsVoltage >= 11.5 && pcsVoltage <= 12.5;
    
    // If PCS voltage check passes, continue with X-Band tests
    if (results.voltages.pcs.pass) {
      // Step 4: Enable intercomm (40%)
      onProgress('Enabling Intercomm', 40);
      
      await mccifSet(sock, "OBC1_Intercomm_Template", 32767);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 5: Enable X-Band (50%)
      onProgress('Enabling X-Band', 50);
      
      // await mccifSet(sock, "OBC1_Ch_ExtReqOn", 14); // changed parameter name and value (21 May 2025 Test)
    await mccifSet(sock, "OBC1_Heps_Lcl_ExtReqOn", 14);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check X-Band voltage and current
      const xbandVI = ["HEPS1_PDM1_X-BAND_V", "HEPS1_PDM1_X-BAND_I"];
      const xbandResults = await mccifRead(sock, xbandVI);
      
      // Parse the results
      const xbandV = safeParseValue(xbandResults[0]);
      const xbandI = safeParseValue(xbandResults[1]);
      
      results.voltages.xband.value = xbandV;
      results.currents.xband = xbandI;
      
      // Check if voltage is within expected range (around 15V)
      const xbandVoltage = parseFloat(xbandV);
      results.voltages.xband.pass = !isNaN(xbandVoltage) && xbandVoltage >= 14.5 && xbandVoltage <= 15.5;
      
      // Step 6: Test X-Band control (60%)
      onProgress('Testing X-Band Control', 60);
      
      // Send control commands
      await mccifSet(sock, "PCS_Xband_Control", 8);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      await mccifSet(sock, "PCS_Xband_Control", 2);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check X-Band voltage and current after control commands
      const xbandAfterControlResults = await mccifRead(sock, xbandVI);
      
      // Step 7: Test X-Band complete control (70%)
      onProgress('Testing X-Band Complete Control', 70);
      
      await mccifSet(sock, "PCS_Xband_Control", 7);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Step 8: Turn off X-Band (80%)
      onProgress('Turning Off X-Band', 80);
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 14);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check X-Band voltage and current when off
      const xbandOffResults = await mccifRead(sock, xbandVI);
      
      // Parse the results
      const xbandOffV = safeParseValue(xbandOffResults[0]);
      const xbandOffI = safeParseValue(xbandOffResults[1]);
      
      results.voltages.xbandOff.value = xbandOffV;
      results.currents.xbandOff = xbandOffI;
      
      // Check if voltage is near zero when off
      const xbandOffVoltage = parseFloat(xbandOffV);
      results.voltages.xbandOff.pass = !isNaN(xbandOffVoltage) && xbandOffVoltage < 1.0;
      
      // Step 9: Turn off PCS (90%)
      onProgress('Turning Off PCS', 90);
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 7);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check PCS voltage and current when off
      const pcsOffResults = await mccifRead(sock, pcsVI);
      
      // Reset intercomm (95%)
      onProgress('Resetting Intercomm', 95);
      
      await mccifSet(sock, "OBC1_Intercomm_Template", 31775);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } else {
      // If PCS voltage check fails, skip remaining tests
      onProgress('PCS Voltage Failed, Skipping Remaining Tests', 50);
      
      results.voltages.xband = { value: '0.0', pass: false };
      results.currents.xband = '0.0';
      results.voltages.xbandOff = { value: '0.0', pass: false };
      results.currents.xbandOff = '0.0';
    }
    
    // Step 10: Complete checkout (100%)
    onProgress('X-Band Checkout Complete', 100);
    
    return results;
  } catch (error) {
    console.error('Error during X-Band checkout:', error);
    throw error;
  }
}

/**
 * Check if X-Band voltage is within acceptable range
 * 
 * @param value Voltage value as a string
 * @returns True if the voltage is within acceptable range (around 15V)
 */
function checkXBandVoltage(value: string): boolean {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number and within range
  return !isNaN(numValue) && numValue >= 14.5 && numValue <= 15.5;
}

/**
 * Check if PCS voltage is within acceptable range
 * 
 * @param value Voltage value as a string
 * @returns True if the voltage is within acceptable range (around 12V)
 */
function checkPCSVoltage(value: string): boolean {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number and within range
  return !isNaN(numValue) && numValue >= 11.5 && numValue <= 12.5;
}

/**
 * Check if voltage is low enough to be considered "off"
 * 
 * @param value Voltage value as a string
 * @returns True if the voltage is below 1.0V
 */
function checkOffVoltage(value: string): boolean {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number and below threshold
  return !isNaN(numValue) && numValue < 1.0;
}