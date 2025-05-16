// src/services/checkout/propulsionCheckout.ts
import { mccifSet, mccifRead } from '@/utils/mccUtils';

// Progress callback type
type ProgressCallback = (step: string, percent: number) => void;

// Test options
interface PropulsionTestOptions {
  enablePMA: boolean;
  enablePPU: boolean;
}

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
 * Helper function to check if a voltage is within acceptable range (regulated power)
 */
function checkVoltageReg(value: string): boolean {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number
  if (isNaN(numValue)) {
    return false;
  }
  
  // Regulated voltage check (12V typical for ECU)
  return numValue >= 11.5 && numValue <= 12.5;
}

/**
 * Helper function to check if voltage is in float state (off power)
 */
function checkVoltageFloat(value: string): boolean {
  // Convert to number first
  const numValue = parseFloat(value);
  
  // Check if valid number
  if (isNaN(numValue)) {
    return false;
  }
  
  // Check for float voltage (should be near zero when off)
  return numValue < 0.5;
}

/**
 * Helper function to sum time values for PMA test
 */
function sumPmaTime(values: string[]): number {
  return values.reduce((sum, val) => sum + (parseInt(val) || 0), 0);
}

/**
 * Helper function to sum time values for PPU test
 */
function sumPpuTime(values: string[]): number {
  return values.reduce((sum, val) => sum + (parseInt(val) || 0), 0);
}

/**
 * Run the Propulsion checkout test suite
 * @param sock Socket connection to the MCC server
 * @param options Test configuration options
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runPropulsionCheckout(
  sock: any, 
  options: PropulsionTestOptions,
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  
  try {
    // Initialize the results object
    const results: any = {
      ecu1: { voltage: '', current: '', status: '' },
      ecu2: { voltage: '', current: '', status: '' },
      ppu1: { voltage: '', current: '', status: '' },
      ppu2: { voltage: '', current: '', status: '' },
      temperatures: {},
      passFailStatus: [],
      pma: {
        status: options.enablePMA ? 'pending' : 'N.A.',
        initPayl: '',
        dataGet: '',
        dataSend: '',
        ecuOff: '',
        duration: '',
      },
      ppu: {
        status: options.enablePPU ? 'pending' : 'N.A.',
        initPayl: '',
        dataGet1: '',
        ppuOn: '',
        dataGet2: '',
        dataSend: '',
        ppuOff: '',
        ecuOff: '',
        duration: '',
      },
      propTc: {}, // To store propulsion telecommand parameters
      propStat: {}, // For propulsion status parameters
      reportGenerated: false,
      rawParameters: {} // Add this to store all raw parameters
    };

    // Create a record to store raw parameter values
    const rawParameters: Record<string, string> = {};

    // Define arrays of parameters to read based on Python code
    const pmaTimeParams = [
      "OBC1_Prop_PmaCheck_InitPayl_Delay", 
      "OBC1_Prop_PmaCheck_DataGet_Delay",
      "OBC1_Prop_PmaCheck_DataSend_Delay", 
      "OBC1_Prop_PmaCheck_EcuOff_Delay",
      "OBC1_Prop_PmaCheck_Duration"
    ];
    
    const ppuTimeParams = [
      "OBC1_Prop_PpuCheck_InitPayl_Delay", 
      "OBC1_Prop_PpuCheck_DataGet1_Delay",
      "OBC1_Prop_PpuCheck_PpuOn_Delay", 
      "OBC1_Prop_PpuCheck_DataGet2_Delay",
      "OBC1_Prop_PpuCheck_DataSend_Delay", 
      "OBC1_Prop_PpuCheck_PpuOff_Delay",
      "OBC1_Prop_PpuCheck_EcuOff_Delay", 
      "OBC1_Prop_PpuCheck_Duration"
    ];
    
    const propTcParams = [
      "OBC1_Prop_Anode_PPU_1_Set_V", "OBC1_Prop_Anode_PPU_2_Set_V", 
      "OBC1_Prop_Cathode_PPU_1_Set_V", "OBC1_Prop_Cathode_PPU_1_Set_A", 
      "OBC1_Prop_Cathode_PPU_2_Set_V", "OBC1_Prop_Cathode_PPU_2_Set_A",
      "OBC1_Prop_Heater_1_PWM", "OBC1_Prop_Heater_2_PWM", "OBC1_Prop_Heater_3_PWM",
      "OBC1_Prop_Heater_4_PWM", "OBC1_Prop_Anode_PPU_1_Set_A", "OBC1_Prop_IEP_1_PWM",
      "OBC1_Prop_IEP_2_PWM", "OBC1_Prop_IEP_3_Freq", "OBC1_Prop_IEP_4_Freq", 
      "OBC1_Prop_IEP_5_Freq", "OBC1_Prop_IEP_6_Freq", "OBC1_Prop_MFC_1_Flow", 
      "OBC1_Prop_MFC_2_Flow", "OBC1_Prop_MFC_3_Flow", "OBC1_Prop_MFC_4_Flow", 
      "OBC1_Prop_Test_Duration", "OBC1_Prop_MFC_2_Thruster_Selector",
      "OBC1_Prop_MFC_4_Thruster_Selector", "OBC1_Prop_MFC_1_Thruster_Selector",
      "OBC1_Prop_MFC_3_Thruster_Selector", "OBC1_Prop_Thruster_1_Cathode_Selector",
      "OBC1_Prop_Thruster_2_Cathode_Selector", "OBC1_Prop_Anode_PPU1_Aliena_Thruster_Selector",
      "OBC1_Prop_Anode_PPU2_ST_PPU_Thruster_Selector", "OBC1_Prop_Cathode_PPU_1_Aliena_Thruster_Selector",
      "OBC1_Prop_Thruster_Unit_1_Cathode_Selector", "OBC1_Prop_Cathode_PPU_2_ST_PPU_Thruster_Selector",
      "OBC1_Prop_Thruster_Unit_2_Cathode_Selector", "OBC1_Prop_Anode_PPU1_Aliena_Enable",
      "OBC1_Prop_Cathode_PPU1_Aliena_Enable", "OBC1_Prop_Test_Override", "OBC1_Prop_Spare_3",
      "OBC1_Prop_Spare_4", "OBC1_Prop_Spare_5" 
    ];
    
    const ecu1ViParams = ["HEPS1_PDM1_ECU1_V", "HEPS1_PDM1_ECU1_I"];
    const ecu2ViParams = ["HEPS1_PDM2_ECU2_V", "HEPS1_PDM2_ECU2_I"];
    const ppu1ViParams = ["HEPS1_PDM1_THRU1_V", "HEPS1_PDM1_THRU1_I"];
    const ppu2ViParams = ["HEPS1_PDM2_THRU2_V", "HEPS1_PDM2_THRU2_I"];
    
    // Complete propulsion telemetry parameters from the Python code
    const prop1TmParams = [
      "PROPULSION1_ECU_Temp", "PROPULSION1_Anode_PPU_1_Set_Voltage", "PROPULSION1_Anode_PPU_1_Voltage",
      "PROPULSION1_Anode_PPU_1_Current", "PROPULSION1_Anode_PPU_1_Temp",
      "PROPULSION1_Anode_PPU_2_Set_Voltage", "PROPULSION1_Anode_PPU_2_Voltage",
      "PROPULSION1_Anode_PPU_2_Current", "PROPULSION1_Anode_PPU_2_Temp",
      "PROPULSION1_Cathode_PPU_1_Set_Voltage", "PROPULSION1_Cathode_PPU_1_Voltage",
      "PROPULSION1_Cathode_PPU_1_Set_Current", "PROPULSION1_Cathode_PPU_1_Current",
      "PROPULSION1_Cathode_PPU_1_Temp", "PROPULSION1_Cathode_PPU_2_Set_Voltage",
      "PROPULSION1_Cathode_PPU_2_Voltage", "PROPULSION1_Cathode_PPU_2_Set_Current",
      "PROPULSION1_Cathode_PPU_2_Current", "PROPULSION1_Cathode_PPU_2_Temp", "PROPULSION1_Heater_Temp",
      "PROPULSION1_Heater_1_Current", "PROPULSION1_Heater_1_Voltage", "PROPULSION1_Heater_1_PWM",
      "PROPULSION1_Heater_2_PWM", "PROPULSION1_Heater_2_Current", "PROPULSION1_Heater_2_Voltage",
      "PROPULSION1_Heater_3_Current", "PROPULSION1_Heater_3_Voltage", "PROPULSION1_Heater_3_PWM",
      "PROPULSION1_Heater_4_PWM", "PROPULSION1_Heater_4_Current", "PROPULSION1_Heater_4_Voltage",
      "PROPULSION1_Thruster_1_Temp", "PROPULSION1_Thruster_2_Temp", "PROPULSION1_HP_Tank_Pressure_1",
      "PROPULSION1_HP_Tank_Pressure_2", "PROPULSION1_Regulated_Pressure_1",
      "PROPULSION1_Regulated_Pressure_2", "PROPULSION1_MFC_1_Pressure", "PROPULSION1_MFC_2_Pressure",
      "PROPULSION1_MFC_3_Pressure", "PROPULSION1_MFC_4_Pressure", "PROPULSION1_SPARE_1",
      "PROPULSION1_Tank_Temperature_1", "PROPULSION1_Tank_Temperature_2", "PROPULSION1_MFC_1_Temperature",
      "PROPULSION1_MFC_2_Temperature", "PROPULSION1_MFC_3_Temperature", "PROPULSION1_MFC_4_Temperature",
      "PROPULSION1_Driver_Circuit_1_Temperature", "PROPULSION1_Driver_Circuit_2_Temperature",
      "PROPULSION1_PMA_Temperature", "PROPULSION1_IEP_1_PWM", "PROPULSION1_IEP_2_PWM",
      "PROPULSION1_IEP_3_Freq", "PROPULSION1_IEP_4_Freq", "PROPULSION1_IEP_5_Freq",
      "PROPULSION1_IEP_6_Freq", "PROPULSION1_MFC_1_Flow", "PROPULSION1_MFC_2_Flow",
      "PROPULSION1_MFC_3_Flow", "PROPULSION1_MFC_4_Flow", "PROPULSION1_SPARE_2",
      "PROPULSION1_MFC_2_Thruster_Selector", "PROPULSION1_MFC_4_Thruster_Selector",
      "PROPULSION1_MFC_1_Thruster_Selector", "PROPULSION1_MFC_3_Thruster_Selector",
      "PROPULSION1_Thruster_1_Cathode_Selector", "PROPULSION1_Thruster_2_Cathode_Selector",
      "PROPULSION1_Anode_PPU1_Aliena_Thruster_Selector",
      "PROPULSION1_Anode_PPU2_ST_PPU_Thruster_Selector",
      "PROPULSION1_Cathode_PPU_1_Aliena_Thruster_Selector",
      "PROPULSION1_Thruster_Unit_1_Cathode_Selector",
      "PROPULSION1_Cathode_PPU_2_ST_PPU_Thruster_Selector",
      "PROPULSION1_Thruster_Unit_2_Cathode_Selector", "PROPULSION1_Anode_PPU1_Aliena_Enable",
      "PROPULSION1_Cathode_PPU1_Aliena_Enable", "PROPULSION1_Test_Override",
      "PROPULSION1_Initialisation_mode", "PROPULSION1_SPARE_3", "PROPULSION1_SPARE_4",
      "PROPULSION1_SPARE_5", "PROPULSION1_Error_vector_1", "PROPULSION1_Error_Vector_2",
      "PROPULSION1_SPARE_6", "PROPULSION1_SPARE_7"
    ];
    
    const prop2TmParams = [
      "PROPULSION2_ECU_Temp", "PROPULSION2_Anode_PPU_1_Set_Voltage", "PROPULSION2_Anode_PPU_1_Voltage",
      "PROPULSION2_Anode_PPU_1_Current", "PROPULSION2_Anode_PPU_1_Temp",
      "PROPULSION2_Anode_PPU_2_Set_Voltage", "PROPULSION2_Anode_PPU_2_Voltage",
      "PROPULSION2_Anode_PPU_2_Current", "PROPULSION2_Anode_PPU_2_Temp",
      "PROPULSION2_Cathode_PPU_1_Set_Voltage", "PROPULSION2_Cathode_PPU_1_Voltage",
      "PROPULSION2_Cathode_PPU_1_Set_Current", "PROPULSION2_Cathode_PPU_1_Current",
      "PROPULSION2_Cathode_PPU_1_Temp", "PROPULSION2_Cathode_PPU_2_Set_Voltage",
      "PROPULSION2_Cathode_PPU_2_Voltage", "PROPULSION2_Cathode_PPU_2_Set_Current",
      "PROPULSION2_Cathode_PPU_2_Current", "PROPULSION2_Cathode_PPU_2_Temp", "PROPULSION2_Heater_Temp",
      "PROPULSION2_Heater_1_Current", "PROPULSION2_Heater_1_Voltage", "PROPULSION2_Heater_1_PWM",
      "PROPULSION2_Heater_2_PWM", "PROPULSION2_Heater_2_Current", "PROPULSION2_Heater_2_Voltage",
      "PROPULSION2_Heater_3_Current", "PROPULSION2_Heater_3_Voltage", "PROPULSION2_Heater_3_PWM",
      "PROPULSION2_Heater_4_PWM", "PROPULSION2_Heater_4_Current", "PROPULSION2_Heater_4_Voltage",
      "PROPULSION2_Thruster_1_Temp", "PROPULSION2_Thruster_2_Temp", "PROPULSION2_HP_Tank_Pressure_1",
      "PROPULSION2_HP_Tank_Pressure_2", "PROPULSION2_Regulated_Pressure_1",
      "PROPULSION2_Regulated_Pressure_2", "PROPULSION2_MFC_1_Pressure", "PROPULSION2_MFC_2_Pressure",
      "PROPULSION2_MFC_3_Pressure", "PROPULSION2_MFC_4_Pressure", "PROPULSION2_SPARE_1",
      "PROPULSION2_Tank_Temperature_1", "PROPULSION2_Tank_Temperature_2", "PROPULSION2_MFC_1_Temperature",
      "PROPULSION2_MFC_2_Temperature", "PROPULSION2_MFC_3_Temperature", "PROPULSION2_MFC_4_Temperature",
      "PROPULSION2_Driver_Circuit_1_Temperature", "PROPULSION2_Driver_Circuit_2_Temperature",
      "PROPULSION2_PMA_Temperature", "PROPULSION2_IEP_1_PWM", "PROPULSION2_IEP_2_PWM",
      "PROPULSION2_IEP_3_Freq", "PROPULSION2_IEP_4_Freq", "PROPULSION2_IEP_5_Freq",
      "PROPULSION2_IEP_6_Freq", "PROPULSION2_MFC_1_Flow", "PROPULSION2_MFC_2_Flow",
      "PROPULSION2_MFC_3_Flow", "PROPULSION2_MFC_4_Flow", "PROPULSION2_SPARE_2",
      "PROPULSION2_MFC_2_Thruster_Selector", "PROPULSION2_MFC_4_Thruster_Selector",
      "PROPULSION2_MFC_1_Thruster_Selector", "PROPULSION2_MFC_3_Thruster_Selector",
      "PROPULSION2_Thruster_1_Cathode_Selector", "PROPULSION2_Thruster_2_Cathode_Selector",
      "PROPULSION2_Anode_PPU1_Aliena_Thruster_Selector",
      "PROPULSION2_Anode_PPU2_ST_PPU_Thruster_Selector",
      "PROPULSION2_Cathode_PPU_1_Aliena_Thruster_Selector",
      "PROPULSION2_Thruster_Unit_1_Cathode_Selector",
      "PROPULSION2_Cathode_PPU_2_ST_PPU_Thruster_Selector",
      "PROPULSION2_Thruster_Unit_2_Cathode_Selector", "PROPULSION2_Anode_PPU1_Aliena_Enable",
      "PROPULSION2_Cathode_PPU1_Aliena_Enable", "PROPULSION2_Test_Override",
      "PROPULSION2_Initialisation_mode", "PROPULSION2_SPARE_3", "PROPULSION2_SPARE_4",
      "PROPULSION2_SPARE_5", "PROPULSION2_Error_vector_1", "PROPULSION2_Error_Vector_2",
      "PROPULSION2_SPARE_6", "PROPULSION2_SPARE_7"
    ];
    
    const propStatParams = [
      "OBC1_Prop_Cmd_Count", "OBC1_Prop_Ack_Count", 
      "OBC1_Prop_Timeout_Count", "OBC1_Prop_Error_Count"
    ];

    // Start the test sequence - ECU-1 CAN
    onProgress("Testing ECU-1 CAN", 5);
    
    try {
      await mccifSet(sock, "OBC1_Ch_ExtReqOn", 9);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      // Get ECU-1 voltage/current
      const ecu1ViResults = await mccifRead(sock, ecu1ViParams);
      
      // Add this tracking code
      ecu1ViParams.forEach((param, index) => {
        const value = safeParseValue(ecu1ViResults[index]);
        rawParameters[param] = value;
        
        // Map to structured results
        if (param === "HEPS1_PDM1_ECU1_V") results.ecu1.voltage = value;
        if (param === "HEPS1_PDM1_ECU1_I") results.ecu1.current = value;
      });
      
      // Check if voltage is in expected range (regulated)
      const ecu1VoltageStatus = checkVoltageReg(results.ecu1.voltage);
      results.passFailStatus.push(ecu1VoltageStatus ? 'PASS' : 'FAIL');
      results.ecu1.status = ecu1VoltageStatus ? 'PASS' : 'FAIL';
      
      onProgress("Initializing Propulsion ECU-1", 10);
      
      // Initialize ECU-1
      await mccifSet(sock, "OBC1_Prop_EcuId", 1);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait 0.5 seconds
      await mccifSet(sock, "OBC1_Prop_InitPaylSetting", 1);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait 0.5 seconds
      await mccifSet(sock, "OBC1_Prop_Control", 1);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      await mccifSet(sock, "OBC1_Prop_Control", 8);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      // Read all propulsion telemetry values
      const prop1Results = await mccifRead(sock, prop1TmParams);
      
      // Store telemetry values in results
      results.prop1Tm = {};
      prop1TmParams.forEach((param, index) => {
        const value = safeParseValue(prop1Results[index]);
        rawParameters[param] = value;
        
        const name = param.replace('PROPULSION1_', '');
        results.prop1Tm[name] = value;
        
        // Also store temperature values in the temperatures object for easy access
        if (name.includes('Temp') || name.includes('Temperature')) {
          const simpleName = name.replace('_Temperature', '').replace('_Temp', '');
          results.temperatures[simpleName] = value;
        }
      });
      
      onProgress("Powering off ECU-1", 15);
      
      // Power off ECU-1
      await mccifSet(sock, "OBC1_Prop_SingleFiring_Duration", 0);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 9);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      await mccifSet(sock, "OBC1_Prop_SingleFiring_Duration", 2059);
      
      // Check ECU-1 voltage when off (should be near zero)
      const ecu1ViOffResults = await mccifRead(sock, ecu1ViParams);
      
      // Store updated values and track parameters
      ecu1ViParams.forEach((param, index) => {
        const value = safeParseValue(ecu1ViOffResults[index]);
        rawParameters[param] = value; // Update with new value
      });
      
      const ecu1OffVoltage = safeParseValue(ecu1ViOffResults[0]);
      const ecu1OffCurrent = safeParseValue(ecu1ViOffResults[1]);
      
      // Check if voltage is in expected range for powered off (floating)
      const ecu1OffVoltageStatus = checkVoltageFloat(ecu1OffVoltage);
      results.passFailStatus.push(ecu1OffVoltageStatus ? 'PASS' : 'FAIL');
      
    } catch (error) {
      console.error("Error during ECU-1 CAN tests:", error);
      // Continue with other tests despite this error
    }

    // ECU-2 CAN
    onProgress("Testing ECU-2 CAN", 20);
    
    try {
      await mccifSet(sock, "OBC1_Ch_ExtReqOn", 11);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      // Get ECU-2 voltage/current
      const ecu2ViResults = await mccifRead(sock, ecu2ViParams);
      
      // Add tracking code for ECU-2 parameters
      ecu2ViParams.forEach((param, index) => {
        const value = safeParseValue(ecu2ViResults[index]);
        rawParameters[param] = value;
        
        // Map to structured results
        if (param === "HEPS1_PDM2_ECU2_V") results.ecu2.voltage = value;
        if (param === "HEPS1_PDM2_ECU2_I") results.ecu2.current = value;
      });
      
      // Check if voltage is in expected range (regulated)
      const ecu2VoltageStatus = checkVoltageReg(results.ecu2.voltage);
      results.passFailStatus.push(ecu2VoltageStatus ? 'PASS' : 'FAIL');
      results.ecu2.status = ecu2VoltageStatus ? 'PASS' : 'FAIL';
      
      onProgress("Initializing Propulsion ECU-2", 25);
      
      // Initialize ECU-2
      await mccifSet(sock, "OBC1_Prop_EcuId", 2);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait 0.5 seconds
      await mccifSet(sock, "OBC1_Prop_InitPaylSetting", 1);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait 0.5 seconds
      await mccifSet(sock, "OBC1_Prop_Control", 1);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      await mccifSet(sock, "OBC1_Prop_Control", 8);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      // Read all propulsion telemetry values for ECU-2
      const prop2Results = await mccifRead(sock, prop2TmParams);
      
      // Store telemetry values in results
      results.prop2Tm = {};
      prop2TmParams.forEach((param, index) => {
        const value = safeParseValue(prop2Results[index]);
        rawParameters[param] = value;
        
        const name = param.replace('PROPULSION2_', '');
        results.prop2Tm[name] = value;
      });
      
      onProgress("Powering off ECU-2", 30);
      
      // Power off ECU-2
      await mccifSet(sock, "OBC1_Prop_SingleFiring_Duration", 0);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      await mccifSet(sock, "OBC1_Ch_ExtReqOff", 11);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      await mccifSet(sock, "OBC1_Prop_SingleFiring_Duration", 2059);
      
      // Check ECU-2 voltage when off (should be near zero)
      const ecu2ViOffResults = await mccifRead(sock, ecu2ViParams);
      
      // Track parameters
      ecu2ViParams.forEach((param, index) => {
        const value = safeParseValue(ecu2ViOffResults[index]);
        rawParameters[param] = value; // Update with new value
      });
      
      // Check if voltage is in expected range for powered off (floating)
      const ecu2OffVoltage = safeParseValue(ecu2ViOffResults[0]);
      const ecu2OffVoltageStatus = checkVoltageFloat(ecu2OffVoltage);
      results.passFailStatus.push(ecu2OffVoltageStatus ? 'PASS' : 'FAIL');
      
    } catch (error) {
      console.error("Error during ECU-2 CAN tests:", error);
      // Continue with other tests despite this error
    }

    // PMA Tests if enabled
    if (options.enablePMA) {
      onProgress("Running PMA Tests", 40);
      
      try {
        // Set ECU-1 for PMA test
        await mccifSet(sock, "OBC1_Prop_EcuId", 1);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        // Set PMA check duration
        await mccifSet(sock, "OBC1_Prop_PmaCheck_Duration", 499);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        // Read PMA timing parameters
        const pmaTimeResults = await mccifRead(sock, pmaTimeParams);
        
        // Store and track PMA timing values
        pmaTimeParams.forEach((param, index) => {
          const value = safeParseValue(pmaTimeResults[index]);
          rawParameters[param] = value;
        });
        
        // Store PMA timing values - ensure we have values even in simulation mode
        if (sock.isSimulated) {
          results.pma = {
            status: 'completed',
            initPayl: '10',
            dataGet: '15',
            dataSend: '8',
            ecuOff: '5',
            duration: '30',
          };
        } else {
          // Store results from real readings
          results.pma.initPayl = safeParseValue(pmaTimeResults[0]);
          results.pma.dataGet = safeParseValue(pmaTimeResults[1]);
          results.pma.dataSend = safeParseValue(pmaTimeResults[2]);
          results.pma.ecuOff = safeParseValue(pmaTimeResults[3]);
          results.pma.duration = safeParseValue(pmaTimeResults[4]);
        }
        
        // Calculate total test duration
        const testDuration = sumPmaTime([
          results.pma.initPayl,
          results.pma.dataGet,
          results.pma.dataSend,
          results.pma.ecuOff,
          results.pma.duration
        ]);
        
        onProgress("Initiating PMA Control", 50);
        
        // Start PMA control
        await mccifSet(sock, "OBC1_Prop_Control", 22);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        // Read propulsion telecommand parameters
        const propTcResults = await mccifRead(sock, propTcParams);
        
        // Store telecommand parameters
        results.propTc = {};
        propTcParams.forEach((param, index) => {
          const value = safeParseValue(propTcResults[index]);
          rawParameters[param] = value;
          
          const name = param.replace('OBC1_Prop_', '');
          results.propTc[name] = value;
        });
        
        // Execute PMA control command
        await mccifSet(sock, "OBC1_Prop_Control", 23);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
        
        // Check ECU-1 voltage/current during test
        const ecu1ViTestResults = await mccifRead(sock, ecu1ViParams);
        
        // Track parameters
        ecu1ViParams.forEach((param, index) => {
          const value = safeParseValue(ecu1ViTestResults[index]);
          rawParameters[param] = value;
        });
        
        // Check voltage during test
        const ecu1TestVoltage = safeParseValue(ecu1ViTestResults[0]);
        const ecu1TestVoltageStatus = checkVoltageReg(ecu1TestVoltage);
        results.passFailStatus.push(ecu1TestVoltageStatus ? 'PASS' : 'FAIL');
        
        onProgress("Waiting for PMA Test to Complete", 60);
        
        // Wait for the test to complete
        if (testDuration > 0 && testDuration < 600) { // Sanity check duration (max 10 minutes)
          await new Promise(resolve => setTimeout(resolve, testDuration * 1000));
        } else {
          // Use a default wait time if duration is invalid
          await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds default
        }
        
        // Read propulsion status after test
        const propStatResults = await mccifRead(sock, propStatParams);
        
        // Store propulsion status
        results.propStat = {};
        propStatParams.forEach((param, index) => {
          const value = safeParseValue(propStatResults[index]);
          rawParameters[param] = value;
          
          const name = param.replace('OBC1_Prop_', '');
          results.propStat[name] = value;
        });
        
        // Read final ECU-1 voltage/current
        const ecu1ViFinalResults = await mccifRead(sock, ecu1ViParams);
        
        // Track parameters
        ecu1ViParams.forEach((param, index) => {
          const value = safeParseValue(ecu1ViFinalResults[index]);
          rawParameters[param] = value;
        });
        
        // Check final voltage (should be off)
        const ecu1FinalVoltage = safeParseValue(ecu1ViFinalResults[0]);
        const ecu1FinalVoltageStatus = checkVoltageFloat(ecu1FinalVoltage);
        results.passFailStatus.push(ecu1FinalVoltageStatus ? 'PASS' : 'FAIL');
        
        // Update PMA status at the end
        results.pma.status = 'completed';
        
      } catch (error) {
        console.error("Error during PMA tests:", error);
        results.pma.status = 'error';
      }
    } else {
      // If PMA test is not enabled, set default N.A. values
      results.pma = {
        status: 'N.A.',
        initPayl: 'N.A.',
        dataGet: 'N.A.',
        dataSend: 'N.A.',
        ecuOff: 'N.A.',
        duration: 'N.A.',
      };
      
      // Set N.A. values for propTc and propStat as well
      results.propTc = {};
      propTcParams.forEach(param => {
        const name = param.replace('OBC1_Prop_', '');
        results.propTc[name] = 'N.A.';
        rawParameters[param] = 'N.A.';
      });
      
      results.propStat = {};
      propStatParams.forEach(param => {
        const name = param.replace('OBC1_Prop_', '');
        results.propStat[name] = 'N.A.';
        rawParameters[param] = 'N.A.';
      });
      
      // Add placeholder pass/fail results
      results.passFailStatus.push('N.A.');
      results.passFailStatus.push('N.A.');
    }
    
    // PPU Tests if enabled
    if (options.enablePPU) {
      onProgress("Running PPU Tests", 70);
      
      try {
        // Set ECU-1 for PPU test
        await mccifSet(sock, "OBC1_Prop_EcuId", 1);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        // Set PPU ID
        await mccifSet(sock, "OBC1_Prop_PpuId", 1);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        // Read PPU timing parameters
        const ppuTimeResults = await mccifRead(sock, ppuTimeParams);
        
        // Store and track PPU timing values
        ppuTimeParams.forEach((param, index) => {
          const value = safeParseValue(ppuTimeResults[index]);
          rawParameters[param] = value;
        });
        
        // Store PPU timing values - ensure we have values even in simulation mode
        if (sock.isSimulated) {
          results.ppu = {
            status: 'completed',
            initPayl: '8',
            dataGet1: '12',
            ppuOn: '5',
            dataGet2: '10',
            dataSend: '15',
            ppuOff: '7',
            ecuOff: '5',
            duration: '25',
          };
        } else {
          // Store results from real readings
          results.ppu.initPayl = safeParseValue(ppuTimeResults[0]);
          results.ppu.dataGet1 = safeParseValue(ppuTimeResults[1]);
          results.ppu.ppuOn = safeParseValue(ppuTimeResults[2]);
          results.ppu.dataGet2 = safeParseValue(ppuTimeResults[3]);
          results.ppu.dataSend = safeParseValue(ppuTimeResults[4]);
          results.ppu.ppuOff = safeParseValue(ppuTimeResults[5]);
          results.ppu.ecuOff = safeParseValue(ppuTimeResults[6]);
          results.ppu.duration = safeParseValue(ppuTimeResults[7]);
        }
        
        // Calculate total test duration
        const testDuration = sumPpuTime([
          results.ppu.initPayl,
          results.ppu.dataGet1,
          results.ppu.ppuOn,
          results.ppu.dataGet2,
          results.ppu.dataSend,
          results.ppu.ppuOff,
          results.ppu.ecuOff,
          results.ppu.duration
        ]);
        
        onProgress("Initiating PPU Control", 75);
        
        // Start PPU control
        await mccifSet(sock, "OBC1_Prop_Control", 20);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        
        // Read propulsion telecommand parameters
        const propTcResults = await mccifRead(sock, propTcParams);
        
        // Store telecommand parameters
        results.propTc = {};
        propTcParams.forEach((param, index) => {
          const value = safeParseValue(propTcResults[index]);
          rawParameters[param] = value;
          
          const name = param.replace('OBC1_Prop_', '');
          results.propTc[name] = value;
        });
        
        // Execute PPU control command
        await mccifSet(sock, "OBC1_Prop_Control", 21);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
        
        // Check ECU-1 voltage/current during test
        const ecu1ViTestResults = await mccifRead(sock, ecu1ViParams);
        
        // Track parameters
        ecu1ViParams.forEach((param, index) => {
          const value = safeParseValue(ecu1ViTestResults[index]);
          rawParameters[param] = value;
        });
        
        // Check voltage during test
        const ecu1TestVoltage = safeParseValue(ecu1ViTestResults[0]);
        const ecu1TestVoltageStatus = checkVoltageReg(ecu1TestVoltage);
        results.passFailStatus.push(ecu1TestVoltageStatus ? 'PASS' : 'FAIL');
        
        // Check PPU-1 voltage/current during test
        const ppu1ViTestResults = await mccifRead(sock, ppu1ViParams);
        
        // Track PPU-1 parameters
        ppu1ViParams.forEach((param, index) => {
          const value = safeParseValue(ppu1ViTestResults[index]);
          rawParameters[param] = value;
          
          // Store PPU-1 values in structured results
          if (param === "HEPS1_PDM1_THRU1_V") results.ppu1.voltage = value;
          if (param === "HEPS1_PDM1_THRU1_I") results.ppu1.current = value;
        });
        
        // Check PPU-1 voltage
        const ppu1TestVoltageStatus = checkVoltageReg(results.ppu1.voltage);
        results.passFailStatus.push(ppu1TestVoltageStatus ? 'PASS' : 'FAIL');
        results.ppu1.status = ppu1TestVoltageStatus ? 'PASS' : 'FAIL';
        
        onProgress("Waiting for PPU Test to Complete", 85);
        
        // Wait for the test to complete
        if (testDuration > 0 && testDuration < 600) { // Sanity check duration (max 10 minutes)
          await new Promise(resolve => setTimeout(resolve, testDuration * 1000));
        } else {
          // Use a default wait time if duration is invalid
          await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds default
        }
        
        // Read propulsion status after test
        const propStatResults = await mccifRead(sock, propStatParams);
        
        // Store propulsion status
        results.propStat = {};
        propStatParams.forEach((param, index) => {
          const value = safeParseValue(propStatResults[index]);
          rawParameters[param] = value;
          
          const name = param.replace('OBC1_Prop_', '');
          results.propStat[name] = value;
        });
        
        // Read final ECU-1 voltage/current
        const ecu1ViFinalResults = await mccifRead(sock, ecu1ViParams);
        
        // Track parameters
        ecu1ViParams.forEach((param, index) => {
          const value = safeParseValue(ecu1ViFinalResults[index]);
          rawParameters[param] = value;
        });
        
        // Check final voltage (should be off)
        const ecu1FinalVoltage = safeParseValue(ecu1ViFinalResults[0]);
        const ecu1FinalVoltageStatus = checkVoltageFloat(ecu1FinalVoltage);
        results.passFailStatus.push(ecu1FinalVoltageStatus ? 'PASS' : 'FAIL');
        
        // Read final PPU-1 voltage/current
        const ppu1ViFinalResults = await mccifRead(sock, ppu1ViParams);
        
        // Track parameters
        ppu1ViParams.forEach((param, index) => {
          const value = safeParseValue(ppu1ViFinalResults[index]);
          rawParameters[param] = value;
        });
        
        // Check final PPU-1 voltage (should be off)
        const ppu1FinalVoltage = safeParseValue(ppu1ViFinalResults[0]);
        const ppu1FinalVoltageStatus = checkVoltageFloat(ppu1FinalVoltage);
        results.passFailStatus.push(ppu1FinalVoltageStatus ? 'PASS' : 'FAIL');
        
        // Update PPU status
        results.ppu.status = 'completed';
        
      } catch (error) {
        console.error("Error during PPU tests:", error);
        results.ppu.status = 'error';
      }
    } else {
      // If PPU test is not enabled, set default N.A. values
      results.ppu = {
        status: 'N.A.',
        initPayl: 'N.A.',
        dataGet1: 'N.A.',
        ppuOn: 'N.A.',
        dataGet2: 'N.A.',
        dataSend: 'N.A.',
        ppuOff: 'N.A.',
        ecuOff: 'N.A.',
        duration: 'N.A.',
      };
      
      // Set N.A. values for PPU related measures
      results.ppu1 = {
        voltage: 'N.A.',
        current: 'N.A.',
        status: 'N.A.'
      };
      
      // Store N.A. values in rawParameters for PPU parameters
      ppu1ViParams.forEach(param => {
        rawParameters[param] = 'N.A.';
      });
      
      ppuTimeParams.forEach(param => {
        rawParameters[param] = 'N.A.';
      });
      
      // Add placeholder pass/fail results
      results.passFailStatus.push('N.A.');
      results.passFailStatus.push('N.A.');
      results.passFailStatus.push('N.A.');
      results.passFailStatus.push('N.A.');
    }
    
    // Complete checkout (100%)
    onProgress('Checkout Complete', 100);
    
    // Before returning the results, add the raw parameters
    results.rawParameters = rawParameters;
    
    return results;
    
  } catch (error) {
    console.error('Error during Propulsion checkout:', error);
    throw error;
  }
}