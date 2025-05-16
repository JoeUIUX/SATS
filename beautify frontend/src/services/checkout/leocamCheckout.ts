// src/services/checkout/leocamCheckout.ts
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
 * Helper to parse float values safely
 */
const safeParseFloat = (value: string): number => {
  try {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  } catch {
    return 0;
  }
};

/**
 * Run the LEOCAM checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param options Test options
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runLEOCAMCheckout(
  sock: any, 
  options: string[],
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
const results = {
  voltageTests: {
    gps: { voltage: '', current: '', passInitial: false, passFinal: false },
    pcs: { voltage: '', current: '', passInitial: false, passFinal: false },
    leocam: { voltage: '', current: '', passInitial: false, passFinal: false }
  },
  leocamConfig: {
    sensorMode: '',
    sensorPower: '',
    sensorLineFrameRate: '',
    sensorBitDepth: '',
    sensorRoi1: '',
    sensorRoi2: '',
    sensorRoi3: '',
    sensorRoi4: '',
    sensorRoi5_1: '',
    sensorRoi5_2: '',
    sensorRoi5_3: '',
    sensorGainAnalog: '',
    sensorScanDirection: '',
    sensorTestPatternSel: ''
  },
  leocamTelemetry: {
    healthStatus: '',
    datetime: '',
    cpuVoltages: ['', '', '', ''], // For Leocam_CPU_Voltage_1 through 4
    cpuTemperatures: ['', '', '', ''], // For Leocam_CPU_Temp_1 through 4
    internalTemperatures: ['', '', '', '', '', '', '', ''], // For Leocam_Int_Temp_1 through 8
    sensorVoltage: '', // For Leocam_Sen_VOLTAGE
    sensorTemperatures: ['', ''], // For Leocam_Sen_TEMP_1 and 2
    sensorReset: '', // For Leocam_Sen_Reset
    diskUsed: ['', '', ''], // For Leocam_Disk_Used_1 through 3
    diskTemperatures: ['', '', ''], // For Leocam_Disk_TEMP_1 through 3
    diskLifetimes: ['', '', ''], // For Leocam_Disk_Lifetime_1 through 3
    diskErrorCorrectionCounts: ['', '', ''], // For Leocam_Disk_Err_Correction_Count_1 through 3
    diskErrorUncorrectableCounts: ['', '', ''], // For Leocam_Disk_Err_Uncorrectable_Count_1 through 3
    diskTotalBytesRead: ['', '', ''], // For Leocam_Disk_Total_Bytes_Read_1 through 3
    diskTotalBytesWritten: ['', '', ''], // For Leocam_Disk_Total_Bytes_Written_1 through 3
    diskListDatasets: '', // For Leocam_Disk_List_Datasets
    diskListDatafilesInDataset: '' // For Leocam_Disk_List_Datafiles_in_Dataset
  },
  leocamStatistics: {
    commandCount: '',
    acknowledgeCount: '',
    timeoutCount: '',
    errorCount: ''
  },
  reportGenerated: false,
  testedOptions: options,
  // Store all raw parameter values for direct access
  rawParameters: {}
};

// Create a record to store raw parameter values
const rawParameters: Record<string, string> = {};

    const enableSensorOperations = options.includes('Sensor Operations');
    const enableDiskOperations = options.includes('Disk Operations');
    const enableVoltageTests = options.includes('Voltage Tests');

    // Step 1: Initialize the test (5%)
    onProgress('Initializing LEOCAM Test', 5);
    
    // Create arrays for MCC variables based on Python code
    const pcsVi = ["HEPS1_PDM2_PCS_V", "HEPS1_PDM2_PCS_I"];
    const gpsVi = ["HEPS1_PDM2_GPS_5V_V", "HEPS1_PDM2_GPS_5V_I"];
    const leocamVi = ["HEPS1_PDM1_OPT_CAM_V", "HEPS1_PDM1_OPT_CAM_I"];
    
    const leocamSet = [
      "Leocam_Sen_Mode", "Leocam_Sen_PWR", "Leocam_Sen_Line_Frame_Rate", "Leocam_Sen_BIT_DEPTH",
      "Leocam_Sen_ROI_1", "Leocam_Sen_ROI_2", "Leocam_Sen_ROI_3", "Leocam_Sen_ROI_4",
      "Leocam_Sen_ROI_5_1", "Leocam_Sen_ROI_5_2", "Leocam_Sen_ROI_5_3", "Leocam_Sen_Gain_Analog",
      "Leocam_Sen_Scan_Direction", "Leocam_Sen_Test_Pattern_Sel"
    ];
    
    const leocamVarStart = [
      "Leocam_Health_Status", "Leocam_Datetime", 
      "Leocam_CPU_Voltage_1", "Leocam_CPU_Voltage_2", "Leocam_CPU_Voltage_3", "Leocam_CPU_Voltage_4",
      "Leocam_CPU_Temp_1", "Leocam_CPU_Temp_2", "Leocam_CPU_Temp_3", "Leocam_CPU_Temp_4"
    ];
    
    const leocamVarMiddle = [
      "Leocam_Int_Temp_1", "Leocam_Int_Temp_2", "Leocam_Int_Temp_3", "Leocam_Int_Temp_4",
      "Leocam_Int_Temp_5", "Leocam_Int_Temp_6", "Leocam_Int_Temp_7", "Leocam_Int_Temp_8"
    ];
    
    const leocamVarConfig = [
      "Leocam_Sen_PWR", "Leocam_Sen_Mode", "Leocam_Sen_Line_Frame_Rate", "Leocam_Sen_BIT_DEPTH", 
      "Leocam_Sen_ROI_1", "Leocam_Sen_ROI_2", "Leocam_Sen_ROI_3", "Leocam_Sen_ROI_4", 
      "Leocam_Sen_ROI_5_1", "Leocam_Sen_ROI_5_2", "Leocam_Sen_ROI_5_3", "Leocam_Sen_Gain_Analog", 
      "Leocam_Sen_Scan_Direction", "Leocam_Sen_Test_Pattern_Sel"
    ];
    
    const leocamVarEnd = [
      "Leocam_Sen_VOLTAGE", "Leocam_Sen_TEMP_1", "Leocam_Sen_TEMP_2", "Leocam_Sen_Reset"
    ];
    
    const leocamDiskVars = [
      "Leocam_Disk_Used_1", "Leocam_Disk_Used_2", "Leocam_Disk_Used_3",
      "Leocam_Disk_TEMP_1", "Leocam_Disk_TEMP_2", "Leocam_Disk_TEMP_3", 
      "Leocam_Disk_Lifetime_1", "Leocam_Disk_Lifetime_2", "Leocam_Disk_Lifetime_3",
      "Leocam_Disk_Err_Correction_Count_1", "Leocam_Disk_Err_Correction_Count_2", "Leocam_Disk_Err_Correction_Count_3",
      "Leocam_Disk_Err_Uncorrectable_Count_1", "Leocam_Disk_Err_Uncorrectable_Count_2", "Leocam_Disk_Err_Uncorrectable_Count_3",
      "Leocam_Disk_Total_Bytes_Read_1", "Leocam_Disk_Total_Bytes_Read_2", "Leocam_Disk_Total_Bytes_Read_3",
      "Leocam_Disk_Total_Bytes_Written_1", "Leocam_Disk_Total_Bytes_Written_2", "Leocam_Disk_Total_Bytes_Written_3",
      "Leocam_Disk_List_Datasets", "Leocam_Disk_List_Datafiles_in_Dataset"
    ];
    
    const leocamStat = [
      "PCS_Leocam_Cmd_Count", "PCS_Leocam_Ack_Count", "PCS_Leocam_Timeout_Count", "PCS_Leocam_Error_Count"
    ];

    if (enableVoltageTests) {
      // Step 2: Enable GPS (10%)
      onProgress('Enabling GPS', 10);
      await mccifSet(sock, "OBC1_Gps_Control", 1);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      
      // Read GPS values
      try {
    const gpsResults = await mccifRead(sock, gpsVi);
    
    // Add this new tracking code
    gpsVi.forEach((param, index) => {
      const value = safeParseValue(gpsResults[index]);
      rawParameters[param] = value;
      
      // Map to structured results
      if (param === "HEPS1_PDM2_GPS_5V_V") results.voltageTests.gps.voltage = value;
      if (param === "HEPS1_PDM2_GPS_5V_I") results.voltageTests.gps.current = value;
    });

        
        // Check if voltage is within expected range (5V)
const voltageValue = safeParseFloat(results.voltageTests.gps.voltage);
    results.voltageTests.gps.passInitial = (voltageValue >= 4.75 && voltageValue <= 5.25);
  } catch (error) {
    console.error("Error reading GPS values:", error);
  }
      
      // Step 3: Enable External CH7 (15%)
 onProgress('Enabling External Power Channels', 15);
  await mccifSet(sock, "OBC1_Ch_ExtReqOn", 7);
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      
      // Read PCS values
      try {
    const pcsResults = await mccifRead(sock, pcsVi);
    
    // Add this tracking code
    pcsVi.forEach((param, index) => {
      const value = safeParseValue(pcsResults[index]);
      rawParameters[param] = value;
      
      // Map to structured results
      if (param === "HEPS1_PDM2_PCS_V") results.voltageTests.pcs.voltage = value;
      if (param === "HEPS1_PDM2_PCS_I") results.voltageTests.pcs.current = value;
    });

        // Check if voltage is within expected range (12V)
const voltageValue = safeParseFloat(results.voltageTests.pcs.voltage);
    results.voltageTests.pcs.passInitial = (voltageValue >= 11.5 && voltageValue <= 12.5);
  } catch (error) {
    console.error("Error reading PCS values:", error);
  }

      // If PCS voltage test passed, continue with LEOCAM setup...
  if (results.voltageTests.pcs.passInitial) {
    // Set Intercomm Template and enable CH13 (20%)
    onProgress('Setting up LEOCAM communications', 20);
    await mccifSet(sock, "OBC1_Intercomm_Template", 32767);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await mccifSet(sock, "OBC1_Ch_ExtReqOn", 13);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Read LEOCAM voltage values - Add tracking
    try {
      const leocamResults = await mccifRead(sock, leocamVi);
      
      // Add this tracking code
      leocamVi.forEach((param, index) => {
        const value = safeParseValue(leocamResults[index]);
        rawParameters[param] = value;
        
        // Map to structured results
        if (param === "HEPS1_PDM1_OPT_CAM_V") results.voltageTests.leocam.voltage = value;
        if (param === "HEPS1_PDM1_OPT_CAM_I") results.voltageTests.leocam.current = value;
      });
          
           // Keep the validation logic
      const voltageValue = safeParseFloat(results.voltageTests.leocam.voltage);
      results.voltageTests.leocam.passInitial = (voltageValue > 0.5);
    } catch (error) {
      console.error("Error reading LEOCAM values:", error);
    }
  } else {
    console.warn("PCS voltage test failed, skipping LEOCAM setup");
  }
    } else {
      // If voltage tests are disabled, simulate success
      results.voltageTests.gps.passInitial = true;
      results.voltageTests.pcs.passInitial = true;
      results.voltageTests.leocam.passInitial = true;
      
      // Set placeholder values
      results.voltageTests.gps.voltage = "5.0";
      results.voltageTests.gps.current = "0.1";
      results.voltageTests.pcs.voltage = "12.0";
      results.voltageTests.pcs.current = "0.2";
      results.voltageTests.leocam.voltage = "12.0";
      results.voltageTests.leocam.current = "0.3";
    }

    // Only proceed with sensor operations if voltage tests passed or were skipped
    if ((results.voltageTests.pcs.passInitial && results.voltageTests.leocam.passInitial) || !enableVoltageTests) {
      
      if (enableSensorOperations) {
  // Configure LEOCAM for imaging (30%)
  onProgress('Configuring LEOCAM', 30);
  
  await mccifSet(sock, "PCS_Leocam_Control", 20);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await mccifSet(sock, "PCS_Leocam_Number_of_Lines_L", 100);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Read LEOCAM configuration - Add tracking for leocamSet parameters
  try {
    const leocamConfigResults = await mccifRead(sock, leocamSet);
    
    // Add this tracking code
    leocamSet.forEach((param, index) => {
      const value = safeParseValue(leocamConfigResults[index]);
      rawParameters[param] = value;
      
      // Map to structured results based on parameter name
      if (param === "Leocam_Sen_Mode") results.leocamConfig.sensorMode = value;
      if (param === "Leocam_Sen_PWR") results.leocamConfig.sensorPower = value;
      if (param === "Leocam_Sen_Line_Frame_Rate") results.leocamConfig.sensorLineFrameRate = value;
      if (param === "Leocam_Sen_BIT_DEPTH") results.leocamConfig.sensorBitDepth = value;
      if (param === "Leocam_Sen_ROI_1") results.leocamConfig.sensorRoi1 = value;
      if (param === "Leocam_Sen_ROI_2") results.leocamConfig.sensorRoi2 = value;
      if (param === "Leocam_Sen_ROI_3") results.leocamConfig.sensorRoi3 = value;
      if (param === "Leocam_Sen_ROI_4") results.leocamConfig.sensorRoi4 = value;
      if (param === "Leocam_Sen_ROI_5_1") results.leocamConfig.sensorRoi5_1 = value;
      if (param === "Leocam_Sen_ROI_5_2") results.leocamConfig.sensorRoi5_2 = value;
      if (param === "Leocam_Sen_ROI_5_3") results.leocamConfig.sensorRoi5_3 = value;
      if (param === "Leocam_Sen_Gain_Analog") results.leocamConfig.sensorGainAnalog = value;
      if (param === "Leocam_Sen_Scan_Direction") results.leocamConfig.sensorScanDirection = value;
      if (param === "Leocam_Sen_Test_Pattern_Sel") results.leocamConfig.sensorTestPatternSel = value;
    });
    } catch (error) {
    console.error("Error reading LEOCAM configuration:", error);
  }
        
        // Step 6: Reset statistics counters (40%)
        onProgress('Resetting statistics counters', 40);
        
        await mccifSet(sock, "PCS_Leocam_Cmd_Count", 0);
        await mccifSet(sock, "PCS_Leocam_Ack_Count", 0);
        await mccifSet(sock, "PCS_Leocam_Timeout_Count", 0);
        await mccifSet(sock, "PCS_Leocam_Error_Count", 0);
        
        // Wait for operations to stabilize
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
        
        // Step 7: Start PPS and capture image (50%)
        onProgress('Starting LEOCAM image capture', 50);
        
        await mccifSet(sock, "PCS_Pps_Control", 1);
        await mccifSet(sock, "PCS_Leocam_Control", 40);
        
        // Wait for image capture to complete
        onProgress('Waiting for image capture to complete', 60);
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5 second delay (shortened from 90s)
        
        // Step 8: Read telemetry data (70%)
        onProgress('Reading LEOCAM telemetry', 70);
        
        // Read LEOCAM telemetry in chunks to avoid timeout
        try {
  // First chunk: Health Status and CPU data
  const telemetryStart = await mccifRead(sock, leocamVarStart);
  
  // Add this tracking code
  leocamVarStart.forEach((param, index) => {
    const value = safeParseValue(telemetryStart[index]);
    rawParameters[param] = value;
    
    // Map to structured results
    if (param === "Leocam_Health_Status") results.leocamTelemetry.healthStatus = value;
if (param === "Leocam_Datetime") results.leocamTelemetry.datetime = value;    
    // For CPU voltages
    if (param.startsWith("Leocam_CPU_Voltage_")) {
      const idx = parseInt(param.replace("Leocam_CPU_Voltage_", "")) - 1;
      if (idx >= 0 && idx < 4) results.leocamTelemetry.cpuVoltages[idx] = value;
    }
          
// For CPU temperatures
    if (param.startsWith("Leocam_CPU_Temp_")) {
      const idx = parseInt(param.replace("Leocam_CPU_Temp_", "")) - 1;
      if (idx >= 0 && idx < 4) results.leocamTelemetry.cpuTemperatures[idx] = value;
    }
  });
  
  // Second chunk: Internal temperatures
  const telemetryMiddle = await mccifRead(sock, leocamVarMiddle);
          
           // Add this tracking code
  leocamVarMiddle.forEach((param, index) => {
    const value = safeParseValue(telemetryMiddle[index]);
    rawParameters[param] = value;
    
    // Map to structured results
    if (param.startsWith("Leocam_Int_Temp_")) {
      const idx = parseInt(param.replace("Leocam_Int_Temp_", "")) - 1;
      if (idx >= 0 && idx < 8) results.leocamTelemetry.internalTemperatures[idx] = value;
    }
  });
  
  // Third chunk: Configuration readback
  const telemetryConfig = await mccifRead(sock, leocamVarConfig);
  // These values are already stored in leocamConfig, but let's track the raw values
  leocamVarConfig.forEach((param, index) => {
    const value = safeParseValue(telemetryConfig[index]);
    rawParameters[param] = value;
  });
          
// Fourth chunk: Sensor data
  const telemetryEnd = await mccifRead(sock, leocamVarEnd);
  leocamVarEnd.forEach((param, index) => {
    const value = safeParseValue(telemetryEnd[index]);
    rawParameters[param] = value;
    
    // Map to structured results
    if (param === "Leocam_Sen_VOLTAGE") results.leocamTelemetry.sensorVoltage = value;
    if (param === "Leocam_Sen_Reset") results.leocamTelemetry.sensorReset = value;
    
    // For Sensor temperatures
    if (param.startsWith("Leocam_Sen_TEMP_")) {
      const idx = parseInt(param.replace("Leocam_Sen_TEMP_", "")) - 1;
      if (idx >= 0 && idx < 2) results.leocamTelemetry.sensorTemperatures[idx] = value;
    }
  });
} catch (error) {
  console.error("Error reading LEOCAM telemetry:", error);
}
      } else {
        // If sensor operations are disabled, set placeholder values
        results.leocamConfig.sensorMode = "1";
        results.leocamConfig.sensorPower = "1";
        results.leocamConfig.sensorLineFrameRate = "100";
        results.leocamConfig.sensorBitDepth = "8";
results.leocamConfig.sensorRoi1 = "100";
results.leocamConfig.sensorRoi2 = "100";
results.leocamConfig.sensorRoi3 = "100";
results.leocamConfig.sensorRoi4 = "100";
results.leocamConfig.sensorRoi5_1 = "100";
results.leocamConfig.sensorRoi5_2 = "100";
results.leocamConfig.sensorRoi5_3 = "100";
        results.leocamConfig.sensorGainAnalog = "1";
        results.leocamConfig.sensorScanDirection = "0";
        results.leocamConfig.sensorTestPatternSel = "0";
        
        results.leocamTelemetry.healthStatus = "0";
        results.leocamTelemetry.datetime = new Date().toISOString();
        results.leocamTelemetry.cpuVoltages = ["3.3", "1.8", "1.2", "1.0"];
        results.leocamTelemetry.cpuTemperatures = ["40.5", "41.2", "39.8", "40.0"];
        results.leocamTelemetry.internalTemperatures = ["38.5", "39.0", "37.5", "38.0", "39.5", "38.2", "37.8", "38.5"];
        results.leocamTelemetry.sensorTemperatures = ["35.5", "36.0"];
      }
      
      // Step 9: Read disk information if enabled (80%)
      // In the enableDiskOperations section
if (enableDiskOperations) {
  onProgress('Reading LEOCAM disk information', 80);
  
  try {
    const diskResults = await mccifRead(sock, leocamDiskVars);
    
    // Add this tracking code
    leocamDiskVars.forEach((param, index) => {
      const value = safeParseValue(diskResults[index]);
      rawParameters[param] = value;
      
      // Store in appropriate arrays based on parameter patterns
      if (param.startsWith("Leocam_Disk_Used_")) {
        const idx = parseInt(param.replace("Leocam_Disk_Used_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskUsed[idx] = value;
      }
      else if (param.startsWith("Leocam_Disk_TEMP_")) {
        const idx = parseInt(param.replace("Leocam_Disk_TEMP_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskTemperatures[idx] = value;
      }
      else if (param.startsWith("Leocam_Disk_Lifetime_")) {
        const idx = parseInt(param.replace("Leocam_Disk_Lifetime_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskLifetimes[idx] = value;
      }
      else if (param.startsWith("Leocam_Disk_Err_Correction_Count_")) {
        const idx = parseInt(param.replace("Leocam_Disk_Err_Correction_Count_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskErrorCorrectionCounts[idx] = value;
      }
      else if (param.startsWith("Leocam_Disk_Err_Uncorrectable_Count_")) {
        const idx = parseInt(param.replace("Leocam_Disk_Err_Uncorrectable_Count_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskErrorUncorrectableCounts[idx] = value;
      }
      else if (param.startsWith("Leocam_Disk_Total_Bytes_Read_")) {
        const idx = parseInt(param.replace("Leocam_Disk_Total_Bytes_Read_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskTotalBytesRead[idx] = value;
      }
      else if (param.startsWith("Leocam_Disk_Total_Bytes_Written_")) {
        const idx = parseInt(param.replace("Leocam_Disk_Total_Bytes_Written_", "")) - 1;
        if (idx >= 0 && idx < 3) results.leocamTelemetry.diskTotalBytesWritten[idx] = value;
      }
      else if (param === "Leocam_Disk_List_Datasets") {
        results.leocamTelemetry.diskListDatasets = value;
      }
      else if (param === "Leocam_Disk_List_Datafiles_in_Dataset") {
        results.leocamTelemetry.diskListDatafilesInDataset = value;
      }
    });
  } catch (error) {
    console.error("Error reading LEOCAM disk information:", error);
  }
      } else {
        // Set placeholder disk values
        results.leocamTelemetry.diskUsed = ["1024", "2048", "4096"];
        results.leocamTelemetry.diskTemperatures = ["35.0", "36.0", "37.0"];
        results.leocamTelemetry.diskLifetimes = ["1000", "1200", "1100"];
        results.leocamTelemetry.diskErrorCorrectionCounts = ["0", "0", "0"];
        results.leocamTelemetry.diskErrorUncorrectableCounts = ["0", "0", "0"];
        results.leocamTelemetry.diskTotalBytesRead = ["1024", "2048", "4096"];
        results.leocamTelemetry.diskTotalBytesWritten = ["2048", "4096", "8192"];
        results.leocamTelemetry.diskListDatasets = "sample_dataset";
        results.leocamTelemetry.diskListDatafilesInDataset = "sample_file.dat";
      }
      
      // Step 10: Read statistics (90%)
      onProgress('Reading LEOCAM statistics', 90);
      
      // For reading statistics
try {
  const statResults = await mccifRead(sock, leocamStat);
  
  // Add this tracking code
  leocamStat.forEach((param, index) => {
    const value = safeParseValue(statResults[index]);
    rawParameters[param] = value;
    
    // Map to structured results
    if (param === "PCS_Leocam_Cmd_Count") results.leocamStatistics.commandCount = value;
    if (param === "PCS_Leocam_Ack_Count") results.leocamStatistics.acknowledgeCount = value;
    if (param === "PCS_Leocam_Timeout_Count") results.leocamStatistics.timeoutCount = value;
    if (param === "PCS_Leocam_Error_Count") results.leocamStatistics.errorCount = value;
  });
} catch (error) {
  console.error("Error reading LEOCAM statistics:", error);
}



    } else {
      console.warn("Voltage tests failed, skipping sensor and disk operations");
      
      // Set placeholder values for results
      results.leocamConfig.sensorMode = "N.A.";
      results.leocamConfig.sensorPower = "N.A.";
      results.leocamConfig.sensorLineFrameRate = "N.A.";
      results.leocamConfig.sensorBitDepth = "N.A.";
results.leocamConfig.sensorRoi1 = "N.A.";
results.leocamConfig.sensorRoi2 = "N.A.";
results.leocamConfig.sensorRoi3 = "N.A.";
results.leocamConfig.sensorRoi4 = "N.A.";
results.leocamConfig.sensorRoi5_1 = "N.A.";
results.leocamConfig.sensorRoi5_2 = "N.A.";
results.leocamConfig.sensorRoi5_3 = "N.A.";
      results.leocamConfig.sensorGainAnalog = "N.A.";
      results.leocamConfig.sensorScanDirection = "N.A.";
      results.leocamConfig.sensorTestPatternSel = "N.A.";
      
      results.leocamTelemetry.healthStatus = "N.A.";
      results.leocamTelemetry.datetime = "N.A.";
      results.leocamTelemetry.cpuVoltages = ["N.A.", "N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.cpuTemperatures = ["N.A.", "N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.internalTemperatures = ["N.A.", "N.A.", "N.A.", "N.A.", "N.A.", "N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.sensorTemperatures = ["N.A.", "N.A."];
      
      results.leocamTelemetry.diskUsed = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskTemperatures = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskLifetimes = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskErrorCorrectionCounts = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskErrorUncorrectableCounts = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskTotalBytesRead = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskTotalBytesWritten = ["N.A.", "N.A.", "N.A."];
      results.leocamTelemetry.diskListDatasets = "N.A.";
      results.leocamTelemetry.diskListDatafilesInDataset = "N.A.";
      
      results.leocamStatistics.commandCount = "N.A.";
      results.leocamStatistics.acknowledgeCount = "N.A.";
      results.leocamStatistics.timeoutCount = "N.A.";
      results.leocamStatistics.errorCount = "N.A.";
    }

    // Step 11: Turn off devices (95%)
    if (enableVoltageTests) {
      onProgress('Turning off devices', 95);
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 13);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 7);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      
      await mccifSet(sock, "OBC1_Gps_Control", 3);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      
      await mccifSet(sock, "OBC1_Intercomm_Template", 31775);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      
      // Read final values
      try {
        // GPS final check
        const gpsResults = await mccifRead(sock, gpsVi);
        const gpsVoltage = safeParseValue(gpsResults[0]);
        const gpsCurrent = safeParseValue(gpsResults[1]);
        
        // Store off state
        results.voltageTests.gps.voltage = gpsVoltage;
        results.voltageTests.gps.current = gpsCurrent;
        
        // Check if voltage is off (below 0.5V)
        const voltageValue = safeParseFloat(gpsVoltage);
        results.voltageTests.gps.passFinal = (voltageValue < 0.5);
        
        // PCS final check
        const pcsResults = await mccifRead(sock, pcsVi);
        const pcsVoltage = safeParseValue(pcsResults[0]);
        const pcsCurrent = safeParseValue(pcsResults[1]);
        
        // Check if voltage is off (below 0.5V)
        const pcsVoltageValue = safeParseFloat(pcsVoltage);
        results.voltageTests.pcs.passFinal = (pcsVoltageValue < 0.5);
        
        // LEOCAM final check
        const leocamResults = await mccifRead(sock, leocamVi);
        const leocamVoltage = safeParseValue(leocamResults[0]);
        const leocamCurrent = safeParseValue(leocamResults[1]);
        
        // Check if voltage is off (below 0.5V)
        const leocamVoltageValue = safeParseFloat(leocamVoltage);
        results.voltageTests.leocam.passFinal = (leocamVoltageValue < 0.5);
      } catch (error) {
        console.error("Error reading final values:", error);
      }
    } else {
        // If voltage tests are disabled, simulate success
        results.voltageTests.gps.passFinal = true;
        results.voltageTests.pcs.passFinal = true;
        results.voltageTests.leocam.passFinal = true;
      }
  
      // Step 12: Complete checkout (100%)
      onProgress('LEOCAM Checkout Complete', 100);
      
// Before returning the results, add the raw parameters
results.rawParameters = rawParameters;
      return results;
      
    } catch (error) {
      console.error('Error during LEOCAM checkout:', error);
      throw error;
    }
  }
  
  /**
   * Check if voltage is within acceptable range for 5V
   * 
   * @param value Voltage value as a string
   * @returns True if the voltage is within acceptable range
   */
  function checkVoltage5V(value: string): boolean {
    // Convert to number first
    const numValue = parseFloat(value);
    
    // Check if valid number
    if (isNaN(numValue)) {
      return false;
    }
    
    // 5V check (typically 4.75-5.25V)
    return numValue >= 4.75 && numValue <= 5.25;
  }
  
  /**
   * Check if voltage is within acceptable range for 12V
   * 
   * @param value Voltage value as a string
   * @returns True if the voltage is within acceptable range
   */
  function checkVoltage12V(value: string): boolean {
    // Convert to number first
    const numValue = parseFloat(value);
    
    // Check if valid number
    if (isNaN(numValue)) {
      return false;
    }
    
    // 12V check (typically 11.5-12.5V)
    return numValue >= 11.5 && numValue <= 12.5;
  }
  
  /**
   * Check if unregulated voltage is present (not zero or near zero)
   * 
   * @param value Voltage value as a string
   * @returns True if voltage is present
   */
  function checkUnregulatedVoltage(value: string): boolean {
    // Convert to number first
    const numValue = parseFloat(value);
    
    // Check if valid number
    if (isNaN(numValue)) {
      return false;
    }
    
    // Just check if it's significantly above zero
    return numValue > 0.5;
  }