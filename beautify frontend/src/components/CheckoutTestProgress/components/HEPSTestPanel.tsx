// src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Import the HEPS-specific functions
import { runHEPSCheckout } from '@/services/checkout/hepsCheckout';
import { generateHEPSReport } from '@/services/reports/hepsReport';

// Import test history components - ensuring these are actually used
import { TestHistoryChart, TestHistoryTable } from '@/components/CheckoutTestProgress/components';
import { TestDetailsModal } from '@/components/CheckoutTestProgress/components';

// Create a reusable SimulationBadge component for consistency
const SimulationBadge: React.FC<SimulationBadgeProps> = ({ isSimulation }) => (
  <div style={{ 
    fontSize: '12px', 
    padding: '2px 8px', 
    backgroundColor: isSimulation ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
    color: isSimulation ? '#f59e0b' : 'inherit',
    borderRadius: '4px',
    display: isSimulation ? 'block' : 'none'
  }}>
    Simulated Data
  </div>
);

// HEPS Parameter Display Component
const HEPSParameterDisplay: React.FC<{
  parameters: string[];
  results: any;
  groupName: string;
  isDarkMode: boolean;
}> = ({ parameters, results, groupName, isDarkMode }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h4 style={{ 
        fontSize: '16px', 
        fontWeight: 'bold',
        marginBottom: '10px',
        color: isDarkMode ? "#d1d5db" : "#374151"
      }}>
        {groupName} Parameters
      </h4>
      
      <table 
        className={styles.table}
        style={{
          color: isDarkMode ? "#e5e7eb" : "inherit",
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}
      >
        <thead 
          className={styles.tableHeader}
          style={{
            backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
            color: isDarkMode ? "#d1d5db" : "#6b7280"
          }}
        >
          <tr>
            <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px', textAlign: 'left' }}>Parameter</th>
            <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px', textAlign: 'left' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr 
              key={param} 
              className={index % 2 === 1 ? styles.tableRowAlt : ''}
              style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
            >
              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>
                {results?.rawParameters?.[param] || 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface SimulationBadgeProps {
  isSimulation: boolean;
}

interface HEPSTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
  profileId?: string; // Add profile ID for test history
}

// Update your TestHistoryItem interface definition
interface TestHistoryItem {
  id: number;
  component_id: string;
  test_type: string;
  test_date: string;
  results: {
    simulated?: boolean;
    system?: {
      powerStatus?: string;
      voltage?: string;
      current?: string;
      power?: string;
      powerCycleCount?: string;
      operatingTime?: string;
    };
    battery?: {
      voltage1?: string;
      voltage2?: string;
      voltage3?: string;
      current1?: string;
      current2?: string;
      current3?: string;
      temperature1?: string;
      temperature2?: string;
      temperature3?: string;
    };
    solarArray?: {
      voltage1?: string;
      voltage2?: string;
      voltage3?: string;
      tempYNeg1?: string;
      tempYNeg2?: string;
      tempYNeg3?: string;
      tempBodyMount?: string;
      tempYPos1?: string;
      tempYPos2?: string;
      tempYPos3?: string;
    };
    hdrmStatus?: {
      deploy1?: string;
      deploy2?: string;
    };
    obn?: {
      voltage1?: string;
      current1?: string;
      voltage2?: string;
      current2?: string;
      auxVoltage?: string;
    };
    bcr?: {
      current1?: string;
      current2?: string;
      current3?: string;
      temp1?: string;
      temp2?: string;
      temp3?: string;
    };
    pdmTemperature?: {
      pdm1?: string;
      pdm2?: string;
    };
    converters?: {
      hdrm12v1_voltage?: string;
      v5_1_voltage?: string;
      v12_1_voltage?: string;
      v15_voltage?: string;
      hdrm12v2_voltage?: string;
      v5_2_voltage?: string;
      v12_2_voltage?: string;
      hdrm12v1_temp?: string;
      v5_1_temp?: string;
      v12_1_temp?: string;
      v15_temp?: string;
      hdrm12v2_temp?: string;
      v5_2_temp?: string;
      v12_2_temp?: string;
    };
    loads?: {
      obc1_voltage?: string;
      obc1_current?: string;
      obc2_voltage?: string;
      obc2_current?: string;
      sband_voltage?: string;
      sband_current?: string;
      uhf_voltage?: string;
      uhf_current?: string;
    };
    canTest?: {
      primaryResult?: string;
      secondaryResult?: string;
      primaryBefore?: string[];
      primaryAfter?: string[];
      secondaryBefore?: string[];
      secondaryAfter?: string[];
    };
    heaters?: any[];
    heaterTests?: any[];
    currentTest?: any;
    powerCycleTest?: any;
    passFailStatus?: Record<string, string>;
    testedOptions?: string[];
    rawParameters?: Record<string, string[]>;
  };
  status: string;
  notes?: string;
  is_simulated?: boolean;
}

// Define all HEPS parameters from hepsCheckout.ts for reference display
const hepsParameters = {
  canSetting: ["OBC1_Intercomm_PriSec_Cfg"],
  canVar: [
    "OBC1_InterComm_Heps1_Pcm_Tx", "OBC1_InterComm_Heps1_Psm1_Tx", "OBC1_InterComm_Heps1_Psm2_Tx",
    "OBC1_InterComm_Heps1_Pdm1_Tx", "OBC1_InterComm_Heps1_Pdm2_Tx", "OBC1_InterComm_Heps1_Pcm_Ack",
    "OBC1_InterComm_Heps1_Psm1_Ack", "OBC1_InterComm_Heps1_Psm2_Ack", "OBC1_InterComm_Heps1_Pdm1_Ack",
    "OBC1_InterComm_Heps1_Pdm2_Ack", "OBC1_InterComm_Heps1_Pcm_Timeout", "OBC1_InterComm_Heps1_Psm1_Timeout", 
    "OBC1_InterComm_Heps1_Psm2_Timeout", "OBC1_InterComm_Heps1_Pdm1_Timeout", "OBC1_InterComm_Heps1_Pdm2_Timeout",
    "OBC1_InterComm_Heps1_Pcm_Error", "OBC1_InterComm_Heps1_Psm1_Error", "OBC1_InterComm_Heps1_Psm2_Error", 
    "OBC1_InterComm_Heps1_Pdm1_Error", "OBC1_InterComm_Heps1_Pdm2_Error"
  ],
  batVi: [
    "HEPS1_PCM_BAT_V_1", "HEPS1_PCM_BAT_V_2", "HEPS1_PCM_BAT_V_3", 
    "HEPS1_PCM_BAT_I_CHAR_1", "HEPS1_PCM_BAT_I_CHAR_2", "HEPS1_PCM_BAT_I_CHAR_3"
  ],
  batT: ["HEPS1_PSM1_BAT_TEMP1", "HEPS1_PSM1_BAT_TEMP2", "HEPS1_PSM1_BAT_TEMP3"],
  saV: ["HEPS1_PCM_SA_V_1", "HEPS1_PCM_SA_V_2", "HEPS1_PCM_SA_V_3"],
  saT1: ["HEPS1_PSM1_SA1_Y-_TEMP", "HEPS1_PSM1_SA2_Y-_TEMP"],
  saT2: [
    "HEPS1_PSM2_SA3_Y-_TEMP", "HEPS1_PSM2_SA_BM_TEMP", "HEPS1_PSM2_SA1_Y+_TEMP", 
    "HEPS1_PSM2_SA2_Y+_TEMP", "HEPS1_PSM2_SA3_Y+_TEMP"
  ],
  obnVi: ["HEPS1_PCM_OBN1_V", "HEPS1_PCM_OBN1_I", "HEPS1_PCM_OBN2_V", "HEPS1_PCM_OBN2_I", "HEPS1_PCM_AUX12_V"],
  bcrIt: [
    "HEPS1_PCM_BCR1_I", "HEPS1_PCM_BCR2_I", "HEPS1_PCM_BCR3_I", 
    "HEPS1_PCM_BCR1_TEMP", "HEPS1_PCM_BCR2_TEMP", "HEPS1_PCM_BCR3_TEMP"
  ],
  pcbT: ["HEPS1_PDM1_PCB_TEMP", "HEPS1_PDM2_PCB_TEMP"],
  conv1V: ["HEPS1_PSM1_HDRM_CON1_V", "HEPS1_PSM1_5V_CON1_V", "HEPS1_PSM1_12V_CON1_V", "HEPS1_PSM1_15V_CON_V"],
  conv2V: ["HEPS1_PSM2_HDRM_CON2_V", "HEPS1_PSM2_5V_CON2_V", "HEPS1_PSM2_12V_CON2_V"],
  conv1T: [
    "HEPS1_PSM1_HDRM_CON1_TEMP", "HEPS1_PSM1_5V_CON1_TEMP", 
    "HEPS1_PSM1_12V_CON1_TEMP", "HEPS1_PSM1_15V_CON1_TEMP"
  ],
  conv2T: ["HEPS1_PSM2_HDRM_CON2_TEMP", "HEPS1_PSM2_5V_CON2_TEMP", "HEPS1_PSM2_12V_CON2_TEMP"],
  rlclVi: [
    "HEPS1_PDM2_OBC1_V", "HEPS1_PDM2_OBC1_I", "HEPS1_PDM1_OBC2_V", "HEPS1_PDM1_OBC2_I",
    "HEPS1_PDM1_S-BAND_V", "HEPS1_PDM1_S-BAND_I", "HEPS1_PDM2_UHF_V", "HEPS1_PDM2_UHF_I"
  ],
  lclVi: [
    "HEPS1_PDM2_ADCS_IF_V", "HEPS1_PDM2_ADCS-IF_I", "HEPS1_PDM2_ADCD_RW_V", "HEPS1_PDM2_ADCD_RW_I",
    "HEPS1_PDM2_GPS_5V_V", "HEPS1_PDM2_GPS_5V_I", "HEPS1_PDM1_ECU1_V", "HEPS1_PDM1_ECU1_I",
    "HEPS1_PDM1_THRU1_V", "HEPS1_PDM1_THRU1_I", "HEPS1_PDM2_ECU2_V", "HEPS1_PDM2_ECU2_I",
    "HEPS1_PDM2_THRU2_V", "HEPS1_PDM2_THRU2_I", "HEPS1_PDM2_PCS_V", "HEPS1_PDM2_PCS_I",
    "HEPS1_PDM1_OPT_CAM_V", "HEPS1_PDM1_OPT_CAM_I", "HEPS1_PDM1_X-BAND_V", "HEPS1_PDM1_X-BAND_I",
    "HEPS1_PDM1_AOD1_V", "HEPS1_PDM1_AOD1_I", "HEPS1_PDM2_AOD2_V", "HEPS1_PDM2_AOD2_I",
    "HEPS1_PDM1_CIP_V", "HEPS1_PDM1_CIP_I"
  ],
  hdrmVi: [
    "HEPS1_PDM1_HDRM1_ARM_V", "HEPS1_PDM1_HDRM1_SW01_V", "HEPS1_PDM1_HDRM1_SW01_I",
    "HEPS1_PDM1_HDRM1_SW02_V", "HEPS1_PDM1_HDRM1_SW03_V", "HEPS1_PDM1_HDRM1_SW02_I",
    "HEPS1_PDM1_HDRM1_SW03_I", "HEPS1_PDM2_HDRM2_ARM_V", "HEPS1_PDM2_HDRM2_SW01_V",
    "HEPS1_PDM2_HDRM2_SW01_I", "HEPS1_PDM2_HDRM2_SW02_V", "HEPS1_PDM2_HDRM2_SW03_V",
    "HEPS1_PDM2_HDRM2_SW02_I", "HEPS1_PDM2_HDRM2_SW03_I"
  ],
  heater1Vi: [
    "HEPS1_PSM1_HT1_LCL", "HEPS1_PSM1_BAT_HT1_V", "HEPS1_PSM1_BAT_HT1_I", 
    "HEPS1_PSM1_THRU_HT1_V", "HEPS1_PSM1_THRU_HT1_I", "HEPS1_PSM1_CAM_HT1_V", 
    "HEPS1_PSM1_CAM_HT1_I"
  ],
  heater2Vi: [
    "HEPS1_PSM2_HT2_LCL", "HEPS1_PSM2_BAT_HT2_V", "HEPS1_PSM2_BAT_HT2_I", 
    "HEPS1_PSM2_THRU_HT2_V", "HEPS1_PSM2_THRU_HT2_I", "HEPS1_PSM2_CAM_HT2_V", 
    "HEPS1_PSM2_CAM_HT2_I"
  ]
};

export const HEPSTestPanel: React.FC<HEPSTestPanelProps> = ({
  options,
  sock,
  onTestComplete,
  onTestError,
  onTestStart,
  isInitialRun,
  profileId
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasRunTest, setHasRunTest] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isForceSimulation, setIsForceSimulation] = useState(false);
  
  // Add new states for test history
  const [showHistory, setShowHistory] = useState(false);
  const [testHistory, setTestHistory] = useState<TestHistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string>('system.voltage');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  const [detectedSimulation, setDetectedSimulation] = useState(false);
  
  // Add state variables for messages
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  
// Add states for parameter display
const [showParameters, setShowParameters] = useState(false);
const [selectedParameterGroup, setSelectedParameterGroup] = useState<string>("canVar");
  
  // Determine if test options are enabled
  const enableHeaterTest = options.includes('Heater Test');
  const enableCurrentTest = options.includes('Current Measurement');
  const enablePowerCycle = options.includes('Power Cycle Test');
  const enableCANTest = options.includes('CAN Test');
  const enableBatteryTest = options.includes('Battery Test');
  const enableConverterTest = options.includes('Converter Test');
  
  // API URL
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
  
  // Available metrics for visualization - using exact parameter names from hepsCheckout.ts
  const metricOptions = [
    // System metrics
    { label: 'System Voltage', value: 'system.voltage', paramName: 'OBC1_Intercomm_PriSec_Cfg' },
    { label: 'System Current', value: 'system.current', paramName: 'OBC1_Intercomm_PriSec_Cfg' },
    { label: 'System Power', value: 'system.power', paramName: 'OBC1_Intercomm_PriSec_Cfg' },
    
    // Battery metrics - exact parameter names from hepsCheckout.ts
    { label: 'Battery 1 Voltage', value: 'battery.voltage1', paramName: 'HEPS1_PCM_BAT_V_1' },
    { label: 'Battery 2 Voltage', value: 'battery.voltage2', paramName: 'HEPS1_PCM_BAT_V_2' },
    { label: 'Battery 3 Voltage', value: 'battery.voltage3', paramName: 'HEPS1_PCM_BAT_V_3' },
    { label: 'Battery 1 Current', value: 'battery.current1', paramName: 'HEPS1_PCM_BAT_I_CHAR_1' },
    { label: 'Battery 2 Current', value: 'battery.current2', paramName: 'HEPS1_PCM_BAT_I_CHAR_2' },
    { label: 'Battery 3 Current', value: 'battery.current3', paramName: 'HEPS1_PCM_BAT_I_CHAR_3' },
    { label: 'Battery 1 Temperature', value: 'battery.temperature1', paramName: 'HEPS1_PSM1_BAT_TEMP1' },
    { label: 'Battery 2 Temperature', value: 'battery.temperature2', paramName: 'HEPS1_PSM1_BAT_TEMP2' },
    { label: 'Battery 3 Temperature', value: 'battery.temperature3', paramName: 'HEPS1_PSM1_BAT_TEMP3' },
    
    // Solar Array metrics - exact parameter names from hepsCheckout.ts
    { label: 'Solar Array 1 Voltage', value: 'solarArray.voltage1', paramName: 'HEPS1_PCM_SA_V_1' },
    { label: 'Solar Array 2 Voltage', value: 'solarArray.voltage2', paramName: 'HEPS1_PCM_SA_V_2' },
    { label: 'Solar Array 3 Voltage', value: 'solarArray.voltage3', paramName: 'HEPS1_PCM_SA_V_3' },
    { label: 'Solar Array Y- Temp 1', value: 'solarArray.tempYNeg1', paramName: 'HEPS1_PSM1_SA1_Y-_TEMP' },
    { label: 'Solar Array Y- Temp 2', value: 'solarArray.tempYNeg2', paramName: 'HEPS1_PSM1_SA2_Y-_TEMP' },
    { label: 'Solar Array Y- Temp 3', value: 'solarArray.tempYNeg3', paramName: 'HEPS1_PSM2_SA3_Y-_TEMP' },
    { label: 'Solar Array Body Mount Temp', value: 'solarArray.tempBodyMount', paramName: 'HEPS1_PSM2_SA_BM_TEMP' },
    { label: 'Solar Array Y+ Temp 1', value: 'solarArray.tempYPos1', paramName: 'HEPS1_PSM2_SA1_Y+_TEMP' },
    { label: 'Solar Array Y+ Temp 2', value: 'solarArray.tempYPos2', paramName: 'HEPS1_PSM2_SA2_Y+_TEMP' },
    { label: 'Solar Array Y+ Temp 3', value: 'solarArray.tempYPos3', paramName: 'HEPS1_PSM2_SA3_Y+_TEMP' },
    
    // OBN metrics - exact parameter names from hepsCheckout.ts
    { label: 'OBN 1 Voltage', value: 'obn.voltage1', paramName: 'HEPS1_PCM_OBN1_V' },
    { label: 'OBN 2 Voltage', value: 'obn.voltage2', paramName: 'HEPS1_PCM_OBN2_V' },
    { label: 'OBN 1 Current', value: 'obn.current1', paramName: 'HEPS1_PCM_OBN1_I' },
    { label: 'OBN 2 Current', value: 'obn.current2', paramName: 'HEPS1_PCM_OBN2_I' },
    { label: 'OBN AUX Voltage', value: 'obn.auxVoltage', paramName: 'HEPS1_PCM_AUX12_V' },
    
    // BCR metrics - exact parameter names from hepsCheckout.ts
    { label: 'BCR 1 Current', value: 'bcr.current1', paramName: 'HEPS1_PCM_BCR1_I' },
    { label: 'BCR 2 Current', value: 'bcr.current2', paramName: 'HEPS1_PCM_BCR2_I' },
    { label: 'BCR 3 Current', value: 'bcr.current3', paramName: 'HEPS1_PCM_BCR3_I' },
    { label: 'BCR 1 Temperature', value: 'bcr.temp1', paramName: 'HEPS1_PCM_BCR1_TEMP' },
    { label: 'BCR 2 Temperature', value: 'bcr.temp2', paramName: 'HEPS1_PCM_BCR2_TEMP' },
    { label: 'BCR 3 Temperature', value: 'bcr.temp3', paramName: 'HEPS1_PCM_BCR3_TEMP' },
    
    // PDM Temperature - exact parameter names from hepsCheckout.ts
    { label: 'PDM 1 Temperature', value: 'pdmTemperature.pdm1', paramName: 'HEPS1_PDM1_PCB_TEMP' },
    { label: 'PDM 2 Temperature', value: 'pdmTemperature.pdm2', paramName: 'HEPS1_PDM2_PCB_TEMP' },
    
    // Converters - exact parameter names from hepsCheckout.ts
    { label: 'HDRM 12V Converter 1 Voltage', value: 'converters.hdrm12v1_voltage', paramName: 'HEPS1_PSM1_HDRM_CON1_V' },
    { label: '5V Converter 1 Voltage', value: 'converters.v5_1_voltage', paramName: 'HEPS1_PSM1_5V_CON1_V' },
    { label: '12V Converter 1 Voltage', value: 'converters.v12_1_voltage', paramName: 'HEPS1_PSM1_12V_CON1_V' },
    { label: '15V Converter Voltage', value: 'converters.v15_voltage', paramName: 'HEPS1_PSM1_15V_CON_V' },
    { label: 'HDRM 12V Converter 2 Voltage', value: 'converters.hdrm12v2_voltage', paramName: 'HEPS1_PSM2_HDRM_CON2_V' },
    { label: '5V Converter 2 Voltage', value: 'converters.v5_2_voltage', paramName: 'HEPS1_PSM2_5V_CON2_V' },
    { label: '12V Converter 2 Voltage', value: 'converters.v12_2_voltage', paramName: 'HEPS1_PSM2_12V_CON2_V' },
    
    // Converter temperatures - exact parameter names from hepsCheckout.ts
    { label: 'HDRM 12V Converter 1 Temp', value: 'converters.hdrm12v1_temp', paramName: 'HEPS1_PSM1_HDRM_CON1_TEMP' },
    { label: '5V Converter 1 Temp', value: 'converters.v5_1_temp', paramName: 'HEPS1_PSM1_5V_CON1_TEMP' },
    { label: '12V Converter 1 Temp', value: 'converters.v12_1_temp', paramName: 'HEPS1_PSM1_12V_CON1_TEMP' },
    { label: '15V Converter Temp', value: 'converters.v15_temp', paramName: 'HEPS1_PSM1_15V_CON1_TEMP' },
    { label: 'HDRM 12V Converter 2 Temp', value: 'converters.hdrm12v2_temp', paramName: 'HEPS1_PSM2_HDRM_CON2_TEMP' },
    { label: '5V Converter 2 Temp', value: 'converters.v5_2_temp', paramName: 'HEPS1_PSM2_5V_CON2_TEMP' },
    { label: '12V Converter 2 Temp', value: 'converters.v12_2_temp', paramName: 'HEPS1_PSM2_12V_CON2_TEMP' },
    
    // Loads - exact parameter names from hepsCheckout.ts
    { label: 'OBC-1 Voltage', value: 'loads.obc1_voltage', paramName: 'HEPS1_PDM2_OBC1_V' },
    { label: 'OBC-1 Current', value: 'loads.obc1_current', paramName: 'HEPS1_PDM2_OBC1_I' },
    { label: 'OBC-2 Voltage', value: 'loads.obc2_voltage', paramName: 'HEPS1_PDM1_OBC2_V' },
    { label: 'OBC-2 Current', value: 'loads.obc2_current', paramName: 'HEPS1_PDM1_OBC2_I' },
    { label: 'S-Band Voltage', value: 'loads.sband_voltage', paramName: 'HEPS1_PDM1_S-BAND_V' },
    { label: 'S-Band Current', value: 'loads.sband_current', paramName: 'HEPS1_PDM1_S-BAND_I' },
    { label: 'UHF Voltage', value: 'loads.uhf_voltage', paramName: 'HEPS1_PDM2_UHF_V' },
    { label: 'UHF Current', value: 'loads.uhf_current', paramName: 'HEPS1_PDM2_UHF_I' },
    
    // Heater metrics - with exact parameter names
    { label: 'Heater 1 Status', value: 'heaters[0].status', paramName: 'HEPS1_PSM1_HT1_LCL' },
    { label: 'Heater 1 Voltage', value: 'heaters[0].voltage', paramName: 'HEPS1_PSM1_BAT_HT1_V' },
    { label: 'Heater 1 Current', value: 'heaters[0].current', paramName: 'HEPS1_PSM1_BAT_HT1_I' },
    { label: 'Heater 2 Status', value: 'heaters[1].status', paramName: 'HEPS1_PSM2_HT2_LCL' },
    { label: 'Heater 2 Voltage', value: 'heaters[1].voltage', paramName: 'HEPS1_PSM2_BAT_HT2_V' },
    { label: 'Heater 2 Current', value: 'heaters[1].current', paramName: 'HEPS1_PSM2_BAT_HT2_I' }
  ];

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
// Continued from previous artifact
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    
    // Initial check
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Check if we have a real socket or need simulation
  useEffect(() => {
    // Check the socket type and update UI accordingly
    console.log("🔍 Socket debug info:", debugSocketType(sock));
    
    // Check if this is coming from localStorage
    const socketInfoStr = localStorage.getItem('mccSocketInfo');
    let useSimulation = true; // Default to simulation

    if (socketInfoStr) {
      try {
        const socketInfo = JSON.parse(socketInfoStr);
        // If we have valid socket info and it's marked as real (not simulation)
        if (socketInfo && socketInfo.isReal === true) {
          console.log("📱 Using real socket configuration from localStorage");
          useSimulation = false;
        } else {
          console.log("📱 Socket in localStorage marked as simulation");
          useSimulation = true;
        }
      } catch (error) {
        console.error("Error parsing socket info:", error);
      }
    } else {
      console.log("📱 No socket info in localStorage");
    }

    // If the socket has an explicit isSimulated flag, use that
    if (sock && sock.isSimulated !== undefined) {
      useSimulation = sock.isSimulated;
      console.log(`📱 Using socket's own isSimulated flag: ${useSimulation}`);
    }

    setIsForceSimulation(useSimulation);
    setSimulationMode(useSimulation);
    
    if (useSimulation) {
      console.log("🟢 Using simulation mode for testing");
    } else {
      console.log("🔴 Using real socket mode for testing");
    }
  }, [sock]);
  
  useEffect(() => {
    // Only run test automatically if this is the initial run and we haven't run it yet
    if (isInitialRun && !hasRunTest && !isRunning) {
      console.log("Auto-starting test because isInitialRun =", isInitialRun);
      startTest();
    }
  }, [isInitialRun, hasRunTest, isRunning]);
  
  // Add function to fetch test history
  const fetchTestHistory = async (limit: number = 30) => {
    if (!profileId) {
      console.log("Cannot fetch history: No profile ID provided");
      return;
    }
    
    setHistoryLoading(true);
    try {
      console.log(`Fetching test history for profile ${profileId} and component HEPS`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=HEPS`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("Received test history:", data);
        
        // Filter only non-simulated data
        const filteredData = data
          .filter((item: TestHistoryItem) => {
            // Skip any simulated data
            if (item.is_simulated === true || item.results?.simulated === true) {
              console.log(`Filtering out simulated test result: ${item.id}`);
              return false;
            }
            
            // Check if results object has essential properties
            if (!item.results) return false;
            
            // Must have system values to be a legitimate test
            const hasSystemData = item.results.system && 
              (item.results.system.voltage || item.results.system.current || item.results.system.powerStatus);
            
            // Must have some component data - check for any primary component data
            const hasComponentData = (
              (item.results.battery && Object.values(item.results.battery).some(val => val)) || 
              (item.results.solarArray && Object.values(item.results.solarArray).some(val => val)) ||
              (item.results.obn && Object.values(item.results.obn).some(val => val)) ||
              (item.results.bcr && Object.values(item.results.bcr).some(val => val)) ||
              (item.results.converters && Object.values(item.results.converters).some(val => val)) ||
              (item.results.loads && Object.values(item.results.loads).some(val => val)) ||
              (item.results.heaters && item.results.heaters.length > 0)
            );
            
            // Consider it a real test if it has both system and component data
            return hasSystemData && hasComponentData;
          })
          // Limit to the most recent 'limit' entries (typically 30)
          .slice(0, limit);
        
        console.log(`Filtered from ${data.length} to ${filteredData.length} actual test results`);
        setTestHistory(filteredData);
      } else {
        console.error("Failed to fetch test history:", await response.text());
      }
    } catch (error) {
      console.error("Error fetching test history:", error);
      
      // If the fetch fails, try to use data from localStorage as fallback
      try {
        const localHistoryKey = `heps_real_history_${profileId}`;
        const localData = localStorage.getItem(localHistoryKey);
        if (localData) {
          const parsedData = JSON.parse(localData);
          console.log("Using cached test history from localStorage:", parsedData);
          // Apply the same limit to localStorage data
          setTestHistory(parsedData.slice(0, limit));
        }
      } catch (e) {
        console.error("Error reading from localStorage:", e);
      }
    } finally {
      setHistoryLoading(false);
    }
  };
  
  // Fetch history when showHistory is toggled
  useEffect(() => {
    if (showHistory) {
      fetchTestHistory();
    }
  }, [showHistory, profileId]);
  
  // Add function to save test result to history
  const saveTestResult = async (testResults: any, status: string, wasSimulated: boolean) => {
    if (!profileId) {
      console.log("Cannot save history: No profile ID provided");
      return;
    }
    
    // Use the passed simulation flag, but also perform our standard checks as a backup
    const detectedSim = detectedSimulation || isForceSimulation || 
                      (sock && typeof sock.isSimulated === 'boolean' && sock.isSimulated);
    
    // Final simulation determination with priority to the wasSimulated flag
    const finalSimulationStatus = wasSimulated || detectedSim;
    
    console.log(`Saving test result: simulation=${finalSimulationStatus} (wasSimulated=${wasSimulated}, detected=${detectedSimulation}, config=${isForceSimulation})`);
    
    try {
      // Store raw parameter information for display
      const rawParameters: Record<string, string[]> = {
        canSetting: hepsParameters.canSetting,
        canVar: hepsParameters.canVar,
        batVi: hepsParameters.batVi,
        batT: hepsParameters.batT,
        saV: hepsParameters.saV,
        saT1: hepsParameters.saT1,
        saT2: hepsParameters.saT2,
        obnVi: hepsParameters.obnVi,
        bcrIt: hepsParameters.bcrIt,
        pcbT: hepsParameters.pcbT,
        conv1V: hepsParameters.conv1V,
        conv2V: hepsParameters.conv2V,
        conv1T: hepsParameters.conv1T,
        conv2T: hepsParameters.conv2T,
        rlclVi: hepsParameters.rlclVi,
        lclVi: hepsParameters.lclVi,
        hdrmVi: hepsParameters.hdrmVi,
        heater1Vi: hepsParameters.heater1Vi,
        heater2Vi: hepsParameters.heater2Vi
      };
      
      // Add simulation flag to the results
      const resultsWithFlag = {
        ...testResults,
        simulated: finalSimulationStatus,
        timestamp: new Date().toISOString(),
        testedOptions: options,
        rawParameters: testResults.rawParameters || {}, // Ensure raw parameters are preserved
        _debug_info: {
          explicit_simulation: wasSimulated,
          detected_simulation: detectedSimulation,
          configured_simulation: isForceSimulation
        }
      };
      
      // Only save to database if NOT simulated
      if (!finalSimulationStatus) {
        console.log("✅ Saving REAL test data to database");
        const response = await fetch(`${API_URL}/test-results`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            profile_id: profileId,
            component_id: "HEPS",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: `Test options: ${options.join(', ')}`,
            is_simulated: false
          }),
          mode: 'cors'
        });
        
        if (response.ok) {
          console.log("Real test result saved to history database");
        } else {
          console.error("Failed to save test result:", await response.text());
        }
      } else {
        console.log("❌ Detected SIMULATED data - storing in localStorage only");
        
        // Save to localStorage instead
        const localHistoryKey = `heps_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "HEPS",
            test_type: options.join(','),
            test_date: new Date().toISOString(),
            results: resultsWithFlag,
            status: status,
            notes: "Simulated Test",
            is_simulated: true
          });
          localStorage.setItem(localHistoryKey, JSON.stringify(existingHistory));
        } catch (e) {
          console.error("Error saving to localStorage:", e);
        }
      }
      
      // Refresh test history if the history panel is open
      if (showHistory) {
        fetchTestHistory();
      }
    } catch (error) {
      console.error("Error saving test result:", error);
    }
  };
  
  // Function to extract a value from nested result objects
  const extractValue = (results: any, path: string): number | null => {
    if (!results) return null;
    
    // Handle array index notation in the path (e.g. heaters[0].temperature)
    const arrayIndexMatch = path.match(/^([^\[]+)\[(\d+)\]\.(.+)$/);
    if (arrayIndexMatch) {
      const [, arrayName, indexStr, propName] = arrayIndexMatch;
      const index = parseInt(indexStr);
      
      if (results[arrayName] && Array.isArray(results[arrayName]) && results[arrayName].length > index) {
        const arrayItem = results[arrayName][index];
        if (arrayItem && typeof arrayItem === 'object' && propName in arrayItem) {
          const value = arrayItem[propName];
          const numValue = parseFloat(value);
          return isNaN(numValue) ? null : numValue;
        }
      }
      return null;
    }
    
    // Handle regular dot notation (e.g. system.voltage)
    const parts = path.split('.');
    let value = results;
    
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        return null;
      }
    }
    
    // Try to parse as number
    const numValue = parseFloat(value);
    return isNaN(numValue) ? null : numValue;
  };
  
  // Format chart data for test history - ensure we only use real data
  const prepareChartData = () => {
    return testHistory
      .filter(item => {
        // Ensure we only use real (non-simulated) data for charts
        if (item.is_simulated || item.results?.simulated) {
          return false;
        }
        
        // Make sure the data point has a value for the selected metric
        const metricValue = extractValue(item.results, selectedMetric);
        return metricValue !== null && metricValue !== undefined && !isNaN(metricValue);
      })
      .map(item => {
        const metricValue = extractValue(item.results, selectedMetric);
        
        return {
          date: new Date(item.test_date).toLocaleDateString(),
          [selectedMetric.split('.').pop() || 'value']: metricValue,
          tooltipLabel: new Date(item.test_date).toLocaleString(),
          // Add more context to tooltip
          componentId: item.component_id,
          testType: item.test_type,
          dataType: 'Real Data'
        };
      });
  };
  
  const startTest = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setProgress(0);
    setError(null);
    setHasRunTest(true);
    
    try {
      // Notify parent that the test has started
      onTestStart();
      
      // Begin the test process
      setCurrentStep('Starting HEPS Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object for HEPS
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common HEPS parameters
            return parameters.map(param => {
              // Return specific values for different HEPS parameters
              if (param.includes("HEPS") || param.includes("Heps")) {
                if (param.includes("Status") || param.includes("state")) {
                  return `${param}=${Math.round(Math.random())}`;  // 0 or 1
                } else if (param.includes("Temp") || param.includes("temp") || param.includes("_T")) {
                  return `${param}=${20 + Math.floor(Math.random() * 30)}`;  // 20-50°C
                } else if (param.includes("Current") || param.includes("_I") || param.includes("_I_")) {
                  return `${param}=${500 + Math.floor(Math.random() * 500)}`;  // 500-1000mA
                } else if (param.includes("Voltage") || param.includes("_V") || param.includes("_V_")) {
                  if (param.includes("BAT")) {
                    return `${param}=${12 + Math.random() * 2}`;  // 12-14V for batteries
                  } else if (param.includes("5V")) {
                    return `${param}=${5 + (Math.random() * 0.2 - 0.1)}`;  // 4.9-5.1V
                  } else if (param.includes("12V") || param.includes("HDRM")) {
                    return `${param}=${12 + (Math.random() * 0.4 - 0.2)}`;  // 11.8-12.2V
                  } else if (param.includes("15V")) {
                    return `${param}=${15 + (Math.random() * 0.5 - 0.25)}`;  // 14.75-15.25V
                  } else if (param.includes("3V3")) {
                    return `${param}=${3.3 + (Math.random() * 0.1 - 0.05)}`;  // 3.25-3.35V
                  } else {
                    return `${param}=${28 + Math.random() * 2}`;  // 28-30V
                  }
                } else if (param.includes("Power")) {
                  return `${param}=${15 + Math.floor(Math.random() * 10)}`;  // 15-25W
                } else if (param.includes("Count")) {
                  return `${param}=${Math.floor(Math.random() * 100)}`;  // 0-99
                } else if (param.includes("Test")) {
                  if (param.includes("Done")) {
                    return `${param}=1`;  // Test completed
                  } else if (param.includes("Result")) {
                    return `${param}=PASS`;  // Test result
                  } else {
                    return `${param}=1`;  // Other test flags
                  }
                } else {
                  return `${param}=${Math.floor(Math.random() * 100)}`;  // Generic value
                }
              } else if (param.includes("OBC1_InterComm")) { 
                // CAN communication variables
                return `${param}=${Math.floor(Math.random() * 1000)}`;
              } else if (param.includes("OBC1_Intercomm_PriSec_Cfg")) {
                return `${param}=0`;  // CAN configuration
              } else if (param.includes("OBC1_Ch_")) {
                return `${param}=1`;  // Channel setting
              } else {
                return `${param}=simulated`;
              }
            });
          },
          send: async (message: string) => {
            console.log(`[SIM] Sending: ${message}`);
            return Promise.resolve();
          },
          receive: async () => {
            console.log(`[SIM] Receiving data`);
            return Promise.resolve("simulated response");
          },
          isSimulated: true
        };
        
        // Use the simulated socket
        sock = simulatedSock;
        setDetectedSimulation(true);
      }
      
      // Run the HEPS checkout test
      const testResults = await runHEPSCheckout(sock, 
        { 
          testHeaters: enableHeaterTest, 
          testCurrent: enableCurrentTest, 
          testPowerCycle: enablePowerCycle 
        }, 
        (step, percent) => {
          setCurrentStep(step);
          setProgress(percent);
        }
      );
      
      // Add the list of tested options to the results
      testResults.testedOptions = options;
      
      // Save the results locally
      setResults(testResults);
      
// Save result to history - detect if simulation was used
const wasSimulated = isForceSimulation || (sock && sock.isSimulated);
await saveTestResult(testResults, 'completed', wasSimulated);
      
      // Notify parent that the test is complete
      onTestComplete(testResults);
      
    } catch (error) {
      console.error('Error running test:', error);
      setError(error instanceof Error ? error.message : String(error));
      
      // Save failed result to history
      if (results) {
        await saveTestResult(results, 'error', true);
      }
      
      onTestError(error);
    } finally {
      setIsRunning(false);
      setProgress(100);
      setCurrentStep('Test Complete');
    }
  };
  
  // Generate a report from the test results
  const generateReport = async () => {
    if (!results) {
      setError('No test results available to generate a report');
      return;
    }
    
    try {
      const reportFile = await generateHEPSReport(results);
      alert(`HEPS report saved: ${reportFile}`);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  /**
   * Clean up simulated test results from the database
   */
  const cleanupSimulatedData = async () => {
    try {
      const response = await fetch(`${API_URL}/test-results/cleanup-simulated`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`Cleanup complete: ${result.message}`);
        
        // Show a success message to the user
        setCleanupMessage(`✅ ${result.message}`);
        
        // Refresh the history after cleanup
        if (showHistory) {
          fetchTestHistory();
        }
      } else {
        console.error('Failed to clean up simulated data:', await response.text());
        setCleanupMessage('❌ Failed to clean up simulated data');
      }
    } catch (error) {
      console.error('Error cleaning up simulated data:', error);
      setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  /**
   * Limit test history to a certain number of records
   * @param limit Number of records to keep (default: 30)
   */
  const limitTestHistory = async (limit: number = 30) => {
    if (!profileId) {
      console.log("Cannot limit history: No profile ID provided");
      return;
    }
    
    try {
      const response = await fetch(`${API_URL}/test-results/limit/${profileId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          limit,
          component: 'HEPS'  // Limit only HEPS records
        }),
        mode: 'cors'
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`History limit applied: ${result.message}`);
        
        // Show a success message to the user
        setLimitMessage(`✅ ${result.message}`);
        
        // Refresh the history after limiting
        if (showHistory) {
          fetchTestHistory();
        }
      } else {
        console.error('Failed to limit test history:', await response.text());
        setLimitMessage('❌ Failed to limit test history');
      }
    } catch (error) {
      console.error('Error limiting test history:', error);
      setLimitMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  /**
   * Clear all test history for this profile and component
   */
  const clearAllTestHistory = async () => {
    if (!profileId) {
      console.log("Cannot clear history: No profile ID provided");
      return;
    }

    // First confirm with the user
    if (!window.confirm("Are you sure you want to clear ALL test history for HEPS?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=HEPS`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`Cleared test history: ${result.message}`);
        
        // Show success message
        setCleanupMessage(`✅ ${result.message}`);
        
        // Clear the local state
        setTestHistory([]);
        
        // Also clear the localStorage cache
        localStorage.removeItem(`heps_real_history_${profileId}`);
        localStorage.removeItem(`heps_sim_history_${profileId}`);
      } else {
        console.error("Failed to clear test history:", await response.text());
        setCleanupMessage(`❌ Failed to clear test history: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error clearing test history:", error);
      setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setHistoryLoading(false);
    }
  };

  /**
   * Delete a single test history item
   */
  const deleteTestHistoryItem = async (itemId: number) => {
    // Confirm with the user
    if (!window.confirm("Are you sure you want to delete this test history item?\nThis action cannot be undone.")) {
      return;
    }
    
    try {
      const response = await fetch(`${API_URL}/test-results/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`Deleted test history item: ${result.message}`);
        
        // Update the local state by removing the deleted item
        setTestHistory(prev => prev.filter(item => item.id !== itemId));
        
        // Show a temporary message
        setCleanupMessage(`✅ Test result ${itemId} has been deleted`);
        
        // Hide the message after a few seconds
        setTimeout(() => {
          setCleanupMessage(null);
        }, 3000);
      } else {
        console.error("Failed to delete test history item:", await response.text());
        setCleanupMessage(`❌ Failed to delete test history item: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting test history item:", error);
      setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Add these functions for multi-select mode
  /**
   * Toggle multi-select mode
   */
  const toggleMultiSelectMode = () => {
    setIsMultiSelectMode(!isMultiSelectMode);
    if (isMultiSelectMode) {
      // If turning off multi-select mode, clear all selections
      setSelectedItems([]);
    }
  };

  /**
   * Toggle selection of a single history item
   */
  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  /**
   * Select all visible history items
   */
  const selectAllItems = () => {
    setSelectedItems(testHistory.map(item => item.id));
  };

  /**
   * Deselect all history items
   */
  const deselectAllItems = () => {
    setSelectedItems([]);
  };

  /**
   * Delete all selected items
   */
  const deleteSelectedItems = async () => {
    if (selectedItems.length === 0) {
      return;
    }

    // Confirm the deletion
    if (!window.confirm(`Are you sure you want to delete ${selectedItems.length} selected items? This action cannot be undone.`)) {
      return;
    }

    setHistoryLoading(true);
    let successCount = 0;
    let errorCount = 0;

    try {
      // Process each selected item with individual API calls
      for (const itemId of selectedItems) {
        try {
          const response = await fetch(`${API_URL}/test-results/${itemId}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            mode: 'cors'
          });
          
          if (response.ok) {
            successCount++;
          } else {
            errorCount++;
            console.error(`Failed to delete item ${itemId}:`, await response.text());
          }
        } catch (error) {
          errorCount++;
          console.error(`Error deleting item ${itemId}:`, error);
        }
      }
      
      // Update the message about success/failure
      if (successCount > 0 && errorCount === 0) {
        setCleanupMessage(`✅ Successfully deleted ${successCount} items`);
      } else if (successCount > 0 && errorCount > 0) {
        setCleanupMessage(`⚠️ Partially successful: Deleted ${successCount} items, but failed to delete ${errorCount} items`);
      } else {
        setCleanupMessage(`❌ Failed to delete any of the ${selectedItems.length} selected items`);
      }
      
      // Update the test history if any items were successfully deleted
      if (successCount > 0) {
        setTestHistory(prev => prev.filter(item => !selectedItems.includes(item.id)));
      }
      
      // Clear the selection after deletion
      setSelectedItems([]);
    } catch (error) {
      console.error("Error during bulk deletion:", error);
      setCleanupMessage(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setHistoryLoading(false);
    }
  };

  // Modify the useEffect for socket detection to watch for simulation indicators
  useEffect(() => {
    // Check if we have real socket info saved
    const socketInfo = localStorage.getItem('mccSocketInfo');
    let shouldUseSimulation = true; // Default to simulation

    if (socketInfo) {
      try {
        const parsed = JSON.parse(socketInfo);
        if (parsed && parsed.isReal) {
          console.log("📡 Using real socket based on stored configuration");
          shouldUseSimulation = false;
        }
      } catch (e) {
        console.error("Error parsing socket info:", e);
      }
    }

    // Check the actual socket type more thoroughly
    let isActuallySimulated = true;
    
    if (sock) {
      // Direct simulation flag check
      if (typeof sock.isSimulated === 'boolean') {
        isActuallySimulated = sock.isSimulated;
      } 
      // Check if it's using the simulation fallback
      else if (typeof sock.simulateRead === 'function') {
        isActuallySimulated = true;
      }
      // Check if it's a real socket with a receive method but no simulation methods
      else if (typeof sock.send === 'function' && typeof sock.receive === 'function' && typeof sock.simulateRead === 'undefined') {
        // Additional check to see if it's been correctly initialized
        if (sock.readyState === undefined || sock.readyState === 1) { // 1 = OPEN for WebSocket
          isActuallySimulated = false;
        }
      }
    }
    
    // Set both states
    setIsForceSimulation(shouldUseSimulation);
    setDetectedSimulation(isActuallySimulated);
    
    console.log(`🔧 Socket analysis: Config says simulation=${shouldUseSimulation}, actual detection=${isActuallySimulated}`);
    
// Set global simulation mode based on the most accurate information
  setSimulationMode(isActuallySimulated);
}, [sock]);

// Optionally add automatic cleanup on component mount
useEffect(() => {
  if (profileId) {
    // Automatically limit history to 30 records when the component mounts
    limitTestHistory(30);
  }
}, [profileId]); // Only run when profileId changes

// Function to get friendly name for parameter groups
const getParameterGroupName = (key: string): string => {
  const groupNames: Record<string, string> = {
    canSetting: "CAN Configuration",
    canVar: "CAN Communication",
    batVi: "Battery Voltage/Current",
    batT: "Battery Temperature",
    saV: "Solar Array Voltage",
    saT1: "Solar Array Temperature 1",
    saT2: "Solar Array Temperature 2",
    obnVi: "OBN Voltage/Current",
    bcrIt: "BCR Current/Temperature",
    pcbT: "PCB Temperature",
    conv1V: "Converter 1 Voltage",
    conv2V: "Converter 2 Voltage",
    conv1T: "Converter 1 Temperature",
    conv2T: "Converter 2 Temperature",
    rlclVi: "RLCL Voltage/Current",
    lclVi: "LCL Voltage/Current",
    hdrmVi: "HDRM Voltage/Current",
    heater1Vi: "Heater 1 Parameters",
    heater2Vi: "Heater 2 Parameters"
  };
  
  return groupNames[key] || key;
};

// Helper function to get human-readable parameter names
const getReadableParameterName = (rawName: string): string => {
  // Handle nested paths like 'battery.voltage1'
  if (rawName.includes('.')) {
    const parts = rawName.split('.');
    const parentName = parts[0];
    const childName = parts[1];
    
    // Convert from camelCase to space-separated words
    const parentReadable = parentName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
    
    // Special handling for various parameter types
    if (childName.includes('voltage')) {
      const voltageNumber = childName.replace('voltage', '');
      return `${parentReadable} ${voltageNumber ? voltageNumber : ''} Voltage`;
    } else if (childName.includes('current')) {
      const currentNumber = childName.replace('current', '');
      return `${parentReadable} ${currentNumber ? currentNumber : ''} Current`;
    } else if (childName.includes('temperature')) {
      const tempNumber = childName.replace('temperature', '');
      return `${parentReadable} ${tempNumber ? tempNumber : ''} Temperature`;
    } else if (childName.includes('temp')) {
      if (childName.startsWith('temp')) {
        // Handle special cases like 'tempYNeg1'
        if (childName.includes('YNeg')) {
          const num = childName.replace('tempYNeg', '');
          return `${parentReadable} Y- Side ${num} Temperature`;
        } else if (childName.includes('YPos')) {
          const num = childName.replace('tempYPos', '');
          return `${parentReadable} Y+ Side ${num} Temperature`;
        } else if (childName.includes('BodyMount')) {
          return `${parentReadable} Body Mount Temperature`;
        }
      } else {
        const tempNumber = childName.replace('temp', '');
        return `${parentReadable} ${tempNumber ? tempNumber : ''} Temperature`;
      }
    } else if (childName.includes('power')) {
      return `${parentReadable} Power`;
    } else if (childName.includes('status')) {
      return `${parentReadable} Status`;
    } else if (childName.includes('deploy')) {
      const deployNumber = childName.replace('deploy', '');
      return `${parentReadable} ${deployNumber ? deployNumber : ''} Deployment Status`;
    }
    
    // For any other cases, just convert camelCase to space-separated
    const childReadable = childName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
    
    return `${parentReadable} ${childReadable}`;
  }
  
  // Handle array index notation for heaters
  if (rawName.includes('[')) {
    const match = rawName.match(/^(.+)\[(\d+)\]\.(.+)$/);
    if (match) {
      const [, arrayName, index, property] = match;
      const arrayReadable = arrayName
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      
      const propertyReadable = property
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      
      return `${arrayReadable} ${parseInt(index) + 1} ${propertyReadable}`;
    }
  }
  
  // For top-level parameters, just convert camelCase to space-separated
  return rawName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
};

// Helper function to format values with proper units
const formatParameterValue = (rawValue: any, paramName: string): string => {
  if (rawValue === null || rawValue === undefined) {
    return 'N/A';
  }
  
  // Try to parse as number
  const numValue = parseFloat(rawValue);
  if (isNaN(numValue)) {
    return rawValue.toString();
  }
  
  // Add appropriate units based on parameter name
  if (paramName.toLowerCase().includes('voltage')) {
    return `${numValue.toFixed(2)} V`;
  } else if (paramName.toLowerCase().includes('current')) {
    return `${numValue.toFixed(2)} mA`;
  } else if (paramName.toLowerCase().includes('temp')) {
    return `${numValue.toFixed(2)} °C`;
  } else if (paramName.toLowerCase().includes('power')) {
    return `${numValue.toFixed(2)} W`;
  } else if (paramName.toLowerCase().includes('status') || paramName.toLowerCase().includes('deploy')) {
    return numValue === 1 ? 'Enabled' : 'Disabled';
  }
  
  // Default formatting
  return numValue.toFixed(2);
};

// Helper function to render temperature trend chart for heater test results
const renderTemperatureTrend = (heaterData: any, index: number) => {
  if (!heaterData || !heaterData.tempReadings || heaterData.tempReadings.length === 0) {
    return (
      <div style={{ 
        padding: '16px', 
        textAlign: 'center', 
        color: isDarkMode ? '#d1d5db' : '#6b7280',
        fontStyle: 'italic'
      }}>
        No temperature data available
      </div>
    );
  }

  // Generate array for the temperature points
  const tempPoints = heaterData.tempReadings.map((temp: number, idx: number) => ({
    time: idx * heaterData.readingInterval,
    temp: temp
  }));

  return (
    <div style={{ height: '200px', marginBottom: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '8px',
        fontSize: '13px',
        color: isDarkMode ? '#d1d5db' : '#6b7280'
      }}>
        <span>Initial: {heaterData.initialTemp}°C</span>
        <span>Max: {Math.max(...heaterData.tempReadings).toFixed(1)}°C</span>
        <span>Final: {heaterData.tempReadings[heaterData.tempReadings.length - 1]}°C</span>
      </div>
      <div style={{ 
        position: 'relative',
        height: '160px',
        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
        borderRadius: '6px',
        padding: '8px',
        overflow: 'hidden'
      }}>
        <ResponsiveContainer width="100%" height={140}>
          <LineChart
            data={tempPoints}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
            <XAxis 
              dataKey="time" 
              label={{ value: 'Time (s)', position: 'bottom' }}
              stroke={isDarkMode ? "#9ca3af" : "#6b7280"}
            />
            <YAxis 
              dataKey="temp"
              label={{ value: 'Temp (°C)', angle: -90, position: 'left' }}
              stroke={isDarkMode ? "#9ca3af" : "#6b7280"}
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke={isDarkMode ? "#3b82f6" : "#2563eb"} 
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Helper to render thermal rise data
const renderThermalRiseData = (heaterData: any) => {
  if (!heaterData || !heaterData.thermalRise) {
    return null;
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ 
        padding: '12px',
        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
        borderRadius: '6px',
        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
        marginBottom: '8px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold' }}>Temperature Rise:</span>
          <span>{heaterData.thermalRise.totalRise.toFixed(1)}°C</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Rise Rate:</span>
          <span>{heaterData.thermalRise.riseRate.toFixed(2)}°C/min</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Time to 5°C Rise:</span>
          <span>{heaterData.thermalRise.timeTo5C.toFixed(1)}s</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Time to 10°C Rise:</span>
          <span>{heaterData.thermalRise.timeTo10C ? heaterData.thermalRise.timeTo10C.toFixed(1) + 's' : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

// Helper to render power consumption data
const renderPowerConsumption = (heaterData: any) => {
  if (!heaterData || !heaterData.power) {
    return null;
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ 
        padding: '12px',
        backgroundColor: isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5',
        borderRadius: '6px',
        border: `1px solid ${isDarkMode ? 'rgba(16, 185, 129, 0.3)' : '#a7f3d0'}`,
        marginBottom: '8px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold' }}>Average Current:</span>
          <span>{heaterData.power.avgCurrent.toFixed(1)} mA</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Max Current:</span>
          <span>{heaterData.power.maxCurrent.toFixed(1)} mA</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Average Power:</span>
          <span>{heaterData.power.avgPower.toFixed(2)} W</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Total Energy:</span>
          <span>{heaterData.power.totalEnergy.toFixed(2)} Wh</span>
        </div>
      </div>
    </div>
  );
};

// Function to render a parameter box with human-readable labels
const renderParameterBox = (paramPath: string, value: string, passFailStatus?: string) => {
  const readableLabel = getReadableParameterName(paramPath);
  const formattedValue = formatParameterValue(value, paramPath);

  return (
    <div className={styles.parameterBox} style={{
      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
    }}>
      <div className={styles.parameterLabel}>
        {readableLabel}
      </div>
      <span className={`${styles.parameterValue} ${
        passFailStatus === "[PASS]" ? styles.colorCompleted :
        passFailStatus === "[FAIL]" ? styles.colorError :
        ''
      }`}>
        {formattedValue}
      </span>
    </div>
  );
};

return (
  <div className={styles.testPanel}>
    {error && (
      <Alert variant="destructive">
        <p>{error}</p>
      </Alert>
    )}
    
    <div className={styles.tabsContainer} style={{
      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
      padding: '8px',
      borderRadius: '8px',
      marginBottom: '16px',
    }}>
      <button
        onClick={() => setShowHistory(false)}
        className={`${styles.tabButton} ${!showHistory ? styles.tabButtonActive : ''}`}
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          backgroundColor: !showHistory ? (isDarkMode ? '#4f46e5' : '#3b82f6') : 'transparent',
          color: !showHistory ? 'white' : (isDarkMode ? '#e5e7eb' : '#374151'),
          border: 'none',
          fontWeight: 500,
          cursor: 'pointer'
        }}
      >
        Current Test
      </button>
      <button
        onClick={() => setShowHistory(true)}
        className={`${styles.tabButton} ${showHistory ? styles.tabButtonActive : ''}`}
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          backgroundColor: showHistory ? (isDarkMode ? '#4f46e5' : '#3b82f6') : 'transparent',
          color: showHistory ? 'white' : (isDarkMode ? '#e5e7eb' : '#374151'),
          border: 'none',
          fontWeight: 500,
          cursor: 'pointer'
        }}
      >
        Test History
      </button>
    </div>
    
    {/* Current Test Panel */}
    {!showHistory ? (
      <>
        <div 
          className={styles.card}
          style={{
            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
          }}
        >
          <div 
            className={styles.cardHeader}
            style={{
              backgroundColor: isDarkMode ? "#111827" : undefined,
              borderColor: isDarkMode ? "#374151" : "#e5e7eb"
            }}
          >
            <h3 className={styles.cardTitle} style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
              HEPS Test Status
            </h3>
          </div>
          
          <div className={styles.cardContent}>
            <div className={styles.progressContainer}>
              <div className={styles.progressLabel}>
                <span className={styles.progressStep} style={{ color: isDarkMode ? "#d1d5db" : "#4b5563" }}>
                  {currentStep || 'Waiting to start test...'}
                </span>
                <span className={styles.progressValue} style={{ color: isDarkMode ? "#93c5fd" : "#1d4ed8" }}>
                  {progress}%
                </span>
              </div>
              <div 
                className={styles.progressBar}
                style={{ backgroundColor: isDarkMode ? "#374151" : "#e5e7eb" }}
              >
                <div 
                  className={styles.progressBarFill}
                  style={{ 
                    width: `${progress}%`,
                    background: 'linear-gradient(to right, #3b82f6, #4f46e5)'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Display the testing options with human-readable labels */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                fontSize: '14px', 
                marginBottom: '10px',
                color: isDarkMode ? "#d1d5db" : "#374151"
              }}>
                Selected Test Options:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {options.map((option, index) => (
                  <div key={index} style={{ 
                    padding: '6px 10px', 
                    backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                    borderRadius: '4px',
                    fontSize: '13px',
                    color: isDarkMode ? '#93c5fd' : '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {option}
                  </div>
                ))}
                {options.length === 0 && (
                  <div style={{ 
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    fontStyle: 'italic',
                    fontSize: '13px'
                  }}>
                    No specific options selected. Running with defaults.
                  </div>
                )}
              </div>
            </div>
            
            {/* Connection Status with improved labels */}
            <div 
              className={styles.parameterBox}
              style={{
                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
              }}
            >
              <div className={styles.parameterLabel}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Connection Mode
              </div>
  <span className={`${styles.statusBadge}`} style={{
    backgroundColor: detectedSimulation ? 
      (isDarkMode ? 'rgba(245, 158, 11, 0.2)' : '#fffbeb') : 
      (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'),
    color: detectedSimulation ? 
      (isDarkMode ? '#fbbf24' : '#d97706') : 
      (isDarkMode ? '#34d399' : '#047857')
  }}>
    {detectedSimulation ? 'SIMULATION' : 'REAL SOCKET'}
                </span>
            </div>
            
            <div 
              className={styles.parameterBox}
              style={{
                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                marginTop: '10px'
              }}
            >
              <div className={styles.parameterLabel}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                HEPS System Tests
              </div>
              <span style={{ display: 'flex', gap: '8px' }}>
                {enableCANTest && (
                  <span className={`${styles.parameterValue} ${styles.colorCompleted}`}>
                    CAN
                  </span>
                )}
                {enableBatteryTest && (
                  <span className={`${styles.parameterValue} ${styles.colorCompleted}`}>
                    Battery
                  </span>
                )}
                {enableHeaterTest && (
                  <span className={`${styles.parameterValue} ${styles.colorCompleted}`}>
                    Heaters
                  </span>
                )}
                {enableCurrentTest && (
                  <span className={`${styles.parameterValue} ${styles.colorCompleted}`}>
                    Current
                  </span>
                )}
                {enablePowerCycle && (
                  <span className={`${styles.parameterValue} ${styles.colorCompleted}`}>
                    Power Cycle
                  </span>
                )}
                {enableConverterTest && (
                  <span className={`${styles.parameterValue} ${styles.colorCompleted}`}>
                    Converters
                  </span>
                )}
              </span>
            </div>
            
            {/* Run/Re-run Test Button */}
            <button 
              onClick={startTest} 
              className={styles.button}
              disabled={isRunning}
              style={{ 
                backgroundColor: isRunning ? '#9ca3af' :
                  hasRunTest ? '#4f46e5' : '#10b981',
                color: 'white',
                marginTop: '20px'
              }}
            >
              {isRunning ? (
                <>
                  <svg className={styles.spinnerIcon} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  Running Test...
                </>
              ) : hasRunTest ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.buttonIcon}>
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1 1 1 0 01.008.057z" clipRule="evenodd" />
                  </svg>
                  Re-run Test
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.buttonIcon}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Run Test
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Current Test Results (only shown if we have results) */}
        {results && (
          <div className="space-y-4 mt-4">
            {/* HEPS System Status Card with improved parameter names */}
            <div 
              className={styles.card}
              style={{
                backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
              }}
            >
              <div 
                className={styles.cardHeader} 
                style={{ 
                  background: isDarkMode 
                    ? "linear-gradient(to right, #064e3b, #065f46)" 
                    : "linear-gradient(to right, #ecfdf5, #d1fae5)",
                  color: isDarkMode ? "#d1fae5" : "#065f46"
                }}
              >
                <h3 className={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  HEPS System Status
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    borderRadius: '8px',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      padding: '10px',
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: isDarkMode ? '#d1d5db' : '#374151'
                    }}>
                      Power Status
                    </div>
                    <div style={{
                      padding: '12px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: results.system.powerStatus === "1" ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626')
                      }}>
                        {results.system.powerStatus === "1" ? "POWERED" : "OFF"}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginTop: '4px'
                      }}>
                        Current State
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    borderRadius: '8px',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      padding: '10px',
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: isDarkMode ? '#d1d5db' : '#374151'
                    }}>
                      System Voltage
                    </div>
                    <div style={{
                      padding: '12px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '24px',
fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#111827'
                      }}>
                        {formatParameterValue(results.system.voltage, 'system.voltage')}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginTop: '4px'
                      }}>
                        Bus Voltage
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    borderRadius: '8px',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      padding: '10px',
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: isDarkMode ? '#d1d5db' : '#374151'
                    }}>
                      System Current
                    </div>
                    <div style={{
                      padding: '12px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#111827'
                      }}>
                        {formatParameterValue(results.system.current, 'system.current')}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginTop: '4px'
                      }}>
                        Total Current
                      </div>
                    </div>
                  </div>
                </div>

                <table 
                  className={styles.table}
                  style={{
                    color: isDarkMode ? "#e5e7eb" : "inherit"
                  }}
                >
                  <thead 
                    className={styles.tableHeader}
                    style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      color: isDarkMode ? "#d1d5db" : "#6b7280"
                    }}
                  >
                    <tr>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Parameter</th>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Value</th>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Status</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tableBody}>
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {getReadableParameterName('system.powerStatus')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {formatParameterValue(results.system.powerStatus, 'system.powerStatus')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        <span className={`${styles.statusBadge} ${
                          results.system.powerStatus === "1" ? styles.colorCompleted : styles.colorError
                        }`}>
                          {results.system.powerStatus === "1" ? "ONLINE" : "OFFLINE"}
                        </span>
                      </td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {getReadableParameterName('system.voltage')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {formatParameterValue(results.system.voltage, 'system.voltage')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        <span className={`${styles.statusBadge} ${
                          parseFloat(results.system.voltage) > 27 && parseFloat(results.system.voltage) < 30
                            ? styles.colorCompleted : styles.colorError
                        }`}>
                          {parseFloat(results.system.voltage) > 27 && parseFloat(results.system.voltage) < 30
                            ? "NORMAL" : "CHECK"}
                        </span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {getReadableParameterName('system.current')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {formatParameterValue(results.system.current, 'system.current')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        <span className={`${styles.statusBadge} ${
                          parseFloat(results.system.current) < 1500 
                            ? styles.colorCompleted : styles.colorError
                        }`}>
                          {parseFloat(results.system.current) < 1500 
                            ? "NORMAL" : "HIGH"}
                        </span>
                      </td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {getReadableParameterName('system.power')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {formatParameterValue(results.system.power, 'system.power')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        <span className={`${styles.statusBadge} ${
                          parseFloat(results.system.power) < 50 
                            ? styles.colorCompleted : styles.colorError
                        }`}>
                          {parseFloat(results.system.power) < 50 
                            ? "NORMAL" : "HIGH"}
                        </span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {getReadableParameterName('system.powerCycleCount')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {results.system.powerCycleCount}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>-</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {getReadableParameterName('system.operatingTime')}
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {results.system.operatingTime} min
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CAN Test Results with improved parameter names */}
            {(enableCANTest || results.canTest) && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #7c2d12, #9a3412)" 
                      : "linear-gradient(to right, #ffedd5, #fed7aa)",
                    color: isDarkMode ? "#fed7aa" : "#9a3412"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    CAN Communication Test
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        Primary CAN Status
                      </div>
                      <div style={{
                        padding: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: results.canTest?.primaryResult === "[PASS]" ? 
                            (isDarkMode ? '#34d399' : '#059669') : 
                            (isDarkMode ? '#f87171' : '#dc2626')
                        }}>
                          {results.canTest?.primaryResult === "[PASS]" ? "CONNECTED" : "FAILED"}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: isDarkMode ? '#9ca3af' : '#6b7280',
                          marginTop: '4px'
                        }}>
                          Primary Bus
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        Secondary CAN Status
                      </div>
                      <div style={{
                        padding: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: results.canTest?.secondaryResult === "[PASS]" ? 
                            (isDarkMode ? '#34d399' : '#059669') : 
                            (isDarkMode ? '#f87171' : '#dc2626')
                        }}>
                          {results.canTest?.secondaryResult === "[PASS]" ? "CONNECTED" : "FAILED"}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: isDarkMode ? '#9ca3af' : '#6b7280',
                          marginTop: '4px'
                        }}>
                          Secondary Bus
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
                      CAN Communication Summary
                    </h4>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563',
                      marginBottom: '8px'
                    }}>
                      Primary CAN: {results.canTest?.primaryResult === "[PASS]" ? 
                        "Communication established with all controllers. Packet exchange successful." : 
                        "Communication error detected. Check connections and retry."}
                    </p>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      Secondary CAN: {results.canTest?.secondaryResult === "[PASS]" ? 
                        "Redundant bus operational. Failover capability confirmed." : 
                        "Secondary bus failure. Redundancy compromised."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Battery Status with improved parameter names */}
            {results.battery && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" 
                      : "linear-gradient(to right, #eff6ff, #dbeafe)",
                    color: isDarkMode ? "#dbeafe" : "#1d4ed8"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                    Battery Status
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* Battery 1 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('battery.voltage1').split(' ')[0]} 1
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.battery1 === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.battery.voltage1, 'battery.voltage1')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.battery.current1, 'battery.current1')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Temperature:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.battery.temperature1, 'battery.temperature1')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Battery 2 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('battery.voltage2').split(' ')[0]} 2
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.battery2 === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.battery.voltage2, 'battery.voltage2')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.battery.current2, 'battery.current2')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Temperature:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.battery.temperature2, 'battery.temperature2')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Battery 3 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('battery.voltage3').split(' ')[0]} 3
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.battery3 === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.battery.voltage3, 'battery.voltage3')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.battery.current3, 'battery.current3')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Temperature:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.battery.temperature3, 'battery.temperature3')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
                      Battery Status Summary
                    </h4>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      {results.passFailStatus && 
                       results.passFailStatus.battery1 === "[PASS]" && 
                       results.passFailStatus.battery2 === "[PASS]" && 
                       results.passFailStatus.battery3 === "[PASS]" ? 
                        "All batteries are within nominal voltage range (11-16V) and operating at expected temperature." : 
                        "One or more batteries are outside nominal voltage range. Check battery health and charging circuit."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Solar Array Status with improved parameter names */}
            {results.solarArray && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #b45309, #d97706)" 
                      : "linear-gradient(to right, #fef3c7, #fde68a)",
                    color: isDarkMode ? "#fef3c7" : "#b45309"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" clipRule="evenodd" />
                    </svg>
                    Solar Array Status
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* Solar Array 1 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('solarArray.voltage1').split(' ')[0]} 1
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.voltage1, 'solarArray.voltage1')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Y- Temp:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.tempYNeg1, 'solarArray.tempYNeg1')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Y+ Temp:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.tempYPos1, 'solarArray.tempYPos1')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Solar Array 2 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('solarArray.voltage2').split(' ')[0]} 2
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.voltage2, 'solarArray.voltage2')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Y- Temp:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.tempYNeg2, 'solarArray.tempYNeg2')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Y+ Temp:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.tempYPos2, 'solarArray.tempYPos2')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Solar Array 3 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('solarArray.voltage3').split(' ')[0]} 3
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.voltage3, 'solarArray.voltage3')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Y- Temp:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.tempYNeg3, 'solarArray.tempYNeg3')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Y+ Temp:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.solarArray.tempYPos3, 'solarArray.tempYPos3')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Body Mount Temperature */}
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
                      {getReadableParameterName('solarArray.tempBodyMount')}
                    </h4>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ 
                        fontSize: '14px',
                        color: isDarkMode ? '#d1d5db' : '#4b5563'
                      }}>
                        Temperature:
                      </span>
                      <span style={{ 
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {formatParameterValue(results.solarArray.tempBodyMount, 'solarArray.tempBodyMount')}
                      </span>
                    </div>
                  </div>
                  
                  {/* HDRM Deployment Status */}
                  {results.hdrmStatus && (
                    <div style={{
                      padding: '12px',
                      backgroundColor: isDarkMode ? 
                        (results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ? 
                          'rgba(5, 150, 105, 0.1)' : 'rgba(239, 68, 68, 0.1)') : 
                        (results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ? 
                          '#d1fae5' : '#fee2e2'),
                      borderRadius: '6px',
                      border: `1px solid ${isDarkMode ? 
                        (results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ?
                          'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)') :
                        (results.hdrmStatus.deploy1 === "1" && results.hdrmStatus.deploy2 === "1" ?
                          '#a7f3d0' : '#fecaca')}`
                    }}>
                      <h4 style={{ 
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        HDRM Deployment Status
                      </h4>
                      
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px'
                      }}>
                        <div style={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}>
                          <span style={{ 
                            color: isDarkMode ? '#d1d5db' : '#4b5563',
                            marginBottom: '4px'
                          }}>
                            {getReadableParameterName('hdrmStatus.deploy1')}
                          </span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.hdrmStatus.deploy1 === "1" ?
                              (isDarkMode ? '#34d399' : '#059669') :
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.hdrmStatus.deploy1, 'hdrmStatus.deploy1')}
                          </span>
                        </div>
                        
                        <div style={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}>
                          <span style={{ 
                            color: isDarkMode ? '#d1d5db' : '#4b5563',
                            marginBottom: '4px'
                          }}>
                            {getReadableParameterName('hdrmStatus.deploy2')}
                          </span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.hdrmStatus.deploy2 === "1" ?
                              (isDarkMode ? '#34d399' : '#059669') :
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.hdrmStatus.deploy2, 'hdrmStatus.deploy2')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* OBN (On-Board Network) Status with improved parameter names */}
            {results.obn && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #6d28d9, #7c3aed)" 
                      : "linear-gradient(to right, #f5f3ff, #ede9fe)",
                    color: isDarkMode ? "#ede9fe" : "#6d28d9"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    OBN (On-Board Network) Status
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* OBN 1 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('obn.voltage1').split(' ')[0]} 1
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.obn1Voltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.obn.voltage1, 'obn.voltage1')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.obn.current1, 'obn.current1')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* OBN 2 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('obn.voltage2').split(' ')[0]} 2
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.obn2Voltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.obn.voltage2, 'obn.voltage2')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.obn.current2, 'obn.current2')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* AUX Voltage */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('obn.auxVoltage')}
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.auxVoltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.obn.auxVoltage, 'obn.auxVoltage')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
                      OBN Status Summary
                    </h4>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      {results.passFailStatus && 
                       results.passFailStatus.obn1Voltage === "[PASS]" && 
                       results.passFailStatus.obn2Voltage === "[PASS]" && 
                       results.passFailStatus.auxVoltage === "[PASS]" ? 
                        "All OBN voltages are within nominal range. Network communication links operational." : 
                        "One or more OBN voltages are outside nominal range. Check power supply and network connections."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* BCR (Battery Charging Regulator) with improved parameter names */}
            {results.bcr && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #0f766e, #0d9488)" 
                      : "linear-gradient(to right, #ccfbf1, #99f6e4)",
                    color: isDarkMode ? "#99f6e4" : "#0f766e"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    {getReadableParameterName('bcr.current1').split(' ')[0]} (Battery Charging Regulator)
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* BCR 1 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('bcr.current1').split(' ')[0]} 1
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.bcr.current1, 'bcr.current1')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Temperature:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.bcr.temp1, 'bcr.temp1')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* BCR 2 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('bcr.current2').split(' ')[0]} 2
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.bcr.current2, 'bcr.current2')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Temperature:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.bcr.temp2, 'bcr.temp2')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* BCR 3 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('bcr.current3').split(' ')[0]} 3
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.bcr.current3, 'bcr.current3')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Temperature:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.bcr.temp3, 'bcr.temp3')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* PDM Temperature with improved parameter names */}
            {results.pdmTemperature && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #4f46e5, #4338ca)" 
                      : "linear-gradient(to right, #e0e7ff, #c7d2fe)",
                    color: isDarkMode ? "#c7d2fe" : "#4338ca"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    PDM Temperature
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* PDM 1 Temperature */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('pdmTemperature.pdm1')}
                      </div>
                      <div style={{
                        padding: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: isDarkMode ? '#d1d5db' : '#111827'
                        }}>
                          {formatParameterValue(results.pdmTemperature.pdm1, 'pdmTemperature.pdm1')}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: isDarkMode ? '#9ca3af' : '#6b7280',
                          marginTop: '4px'
                        }}>
                          PCB Temperature
                        </div>
                      </div>
                    </div>
                    
                    {/* PDM 2 Temperature */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('pdmTemperature.pdm2')}
                      </div>
                      <div style={{
                        padding: '12px',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: isDarkMode ? '#d1d5db' : '#111827'
                        }}>
                          {formatParameterValue(results.pdmTemperature.pdm2, 'pdmTemperature.pdm2')}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: isDarkMode ? '#9ca3af' : '#6b7280',
                          marginTop: '4px'
                        }}>
                          PCB Temperature
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
PDM Temperature Status
                    </h4>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      {parseFloat(results.pdmTemperature.pdm1) < 60 && parseFloat(results.pdmTemperature.pdm2) < 60 ?
                        "PDM temperatures are within normal operating range (< 60°C)." :
                        "One or more PDM temperatures exceeded nominal range. Check thermal conditions."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Converters with improved parameter names */}
            {results.converters && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #0f766e, #0d9488)" 
                      : "linear-gradient(to right, #ccfbf1, #99f6e4)",
                    color: isDarkMode ? "#99f6e4" : "#0f766e"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Power Converters
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <h4 style={{ 
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: isDarkMode ? '#e5e7eb' : '#111827'
                  }}>
                    Converter 1 (PSM1)
                  </h4>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    {/* Using renderParameterBox to display parameters with human-readable names */}
                    {renderParameterBox(
                      'converters.hdrm12v1_voltage', 
                      results.converters.hdrm12v1_voltage, 
                      results.passFailStatus?.hdrm12v1_voltage
                    )}
                    
                    {renderParameterBox(
                      'converters.v5_1_voltage', 
                      results.converters.v5_1_voltage, 
                      results.passFailStatus?.v5_1_voltage
                    )}
                    
                    {renderParameterBox(
                      'converters.v12_1_voltage', 
                      results.converters.v12_1_voltage, 
                      results.passFailStatus?.v12_1_voltage
                    )}
                    
                    {renderParameterBox(
                      'converters.v15_voltage', 
                      results.converters.v15_voltage, 
                      results.passFailStatus?.v15_voltage
                    )}
                  </div>
                  
                  <h4 style={{ 
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: isDarkMode ? '#e5e7eb' : '#111827'
                  }}>
                    Converter 2 (PSM2)
                  </h4>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* Using renderParameterBox for consistent display */}
                    {renderParameterBox(
                      'converters.hdrm12v2_voltage', 
                      results.converters.hdrm12v2_voltage, 
                      results.passFailStatus?.hdrm12v2_voltage
                    )}
                    
                    {renderParameterBox(
                      'converters.v5_2_voltage', 
                      results.converters.v5_2_voltage, 
                      results.passFailStatus?.v5_2_voltage
                    )}
                    
                    {renderParameterBox(
                      'converters.v12_2_voltage', 
                      results.converters.v12_2_voltage, 
                      results.passFailStatus?.v12_2_voltage
                    )}
                  </div>
                  
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
                      Converter Status Summary
                    </h4>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      {Object.entries(results.passFailStatus || {})
                        .filter(([key]) => key.includes('voltage'))
                        .every(([, value]) => value === "[PASS]") ?
                        "All converters operating within voltage specifications. Temperature readings normal." :
                        "One or more converters outside voltage specifications. Check power supply and load conditions."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Loads with improved parameter names */}
            {results.loads && (
              <div 
                className={styles.card}
                style={{
                  backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div 
                  className={styles.cardHeader} 
                  style={{ 
                    background: isDarkMode 
                      ? "linear-gradient(to right, #be123c, #e11d48)" 
                      : "linear-gradient(to right, #ffe4e6, #fecdd3)",
                    color: isDarkMode ? "#fecdd3" : "#be123c"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    Load Status
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    {/* OBC-1 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('loads.obc1_voltage').split(' ')[0]}
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.obc1_voltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.loads.obc1_voltage, 'loads.obc1_voltage')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.loads.obc1_current, 'loads.obc1_current')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* OBC-2 */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('loads.obc2_voltage').split(' ')[0]}
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.obc2_voltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.loads.obc2_voltage, 'loads.obc2_voltage')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.loads.obc2_current, 'loads.obc2_current')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* S-Band */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
                        {getReadableParameterName('loads.sband_voltage').split(' ')[0]}
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.sband_voltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.loads.sband_voltage, 'loads.sband_voltage')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.loads.sband_current, 'loads.sband_current')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* UHF */}
                    <div style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        padding: '10px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#374151'
                      }}>
{getReadableParameterName('loads.uhf_voltage').split(' ')[0]}
                      </div>
                      <div style={{
                        padding: '12px'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Voltage:</span>
                          <span style={{ 
                            fontWeight: 'bold',
                            color: results.passFailStatus?.uhf_voltage === "[PASS]" ? 
                              (isDarkMode ? '#34d399' : '#059669') : 
                              (isDarkMode ? '#f87171' : '#dc2626')
                          }}>
                            {formatParameterValue(results.loads.uhf_voltage, 'loads.uhf_voltage')}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between'
                        }}>
                          <span style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>Current:</span>
                          <span style={{ fontWeight: 'bold' }}>
                            {formatParameterValue(results.loads.uhf_current, 'loads.uhf_current')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827'
                    }}>
                      Load Status Summary
                    </h4>
                    
                    <p style={{ 
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      {results.passFailStatus?.obc1_voltage === "[PASS]" && 
                       results.passFailStatus?.obc2_voltage === "[PASS]" &&
                       results.passFailStatus?.sband_voltage === "[PASS]" &&
                       results.passFailStatus?.uhf_voltage === "[PASS]" ?
                        "All loads receiving correct voltage. Current consumption within expected ranges." :
                        "One or more loads receiving incorrect voltage. Check power distribution system."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Heater Status Summary Card with improved parameter names */}
            <div 
              className={styles.card}
              style={{
                backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                borderColor: isDarkMode ? "#374151" : "#e5e7eb"
              }}
            >
              <div 
                className={styles.cardHeader} 
                style={{ 
                  background: isDarkMode 
                    ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" 
                    : "linear-gradient(to right, #eff6ff, #dbeafe)",
                  color: isDarkMode ? "#dbeafe" : "#1d4ed8"
                }}
              >
                <h3 className={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                  </svg>
                  Heater Status Summary
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  {results.heaters && results.heaters.map((heater: any, index: number) => (
                    <div key={index} style={{
                      borderRadius: '8px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          padding: '8px',
                          backgroundColor: heater.status === "1" ? 
                            (isDarkMode ? 'rgba(5, 150, 105, 0.2)' : '#d1fae5') : 
                            (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                          textAlign: 'center',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: heater.status === "1" ? 
                            (isDarkMode ? '#34d399' : '#059669') : 
                            (isDarkMode ? '#f87171' : '#dc2626')
                        }}>
                          {getReadableParameterName(`heaters[${index}].status`).split(' ')[0]} {index + 1}
                        </div>
                        <div style={{
                          padding: '12px',
                          textAlign: 'center'
                        }}>
                          <div style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: isDarkMode ? '#d1d5db' : '#111827'
                          }}>
                            {formatParameterValue(heater.temperature, `heaters[${index}].temperature`)}
                          </div>
                          <div style={{
                            fontSize: '13px',
                            color: isDarkMode ? '#9ca3af' : '#6b7280',
                            marginTop: '4px'
                          }}>
                            {formatParameterValue(heater.current, `heaters[${index}].current`)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <table 
                    className={styles.table}
                    style={{
                      color: isDarkMode ? "#e5e7eb" : "inherit"
                    }}
                  >
                    <thead 
                      className={styles.tableHeader}
                      style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        color: isDarkMode ? "#d1d5db" : "#6b7280"
                      }}
                    >
                      <tr>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Heater</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Status</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Temperature</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Current</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                      {results.heaters && results.heaters.map((heater: any, index: number) => (
                        <tr key={index} className={index % 2 === 1 ? styles.tableRowAlt : undefined} style={{ backgroundColor: index % 2 === 1 ? (isDarkMode ? "#111827" : "#f9fafb") : undefined }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            {getReadableParameterName(`heaters[${index}].status`).split(' ')[0]} {index + 1}
                          </td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            <span className={`${styles.statusBadge} ${
                              heater.status === "1" ? styles.colorCompleted : styles.colorError
                            }`}>
                              {formatParameterValue(heater.status, `heaters[${index}].status`)}
                            </span>
                          </td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            {formatParameterValue(heater.temperature, `heaters[${index}].temperature`)}
                          </td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            {formatParameterValue(heater.current, `heaters[${index}].current`)}
                          </td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
{formatParameterValue(heater.power, `heaters[${index}].power`)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Heater Test Results (Only shown if heater tests were enabled and run) with improved parameter names */}
              {enableHeaterTest && results.heaterTests && results.heaterTests.length > 0 && (
                <div 
                  className={styles.card}
                  style={{
                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div 
                    className={styles.cardHeader} 
                    style={{ 
                      background: isDarkMode 
                        ? "linear-gradient(to right, #4c1d95, #6d28d9)" 
                        : "linear-gradient(to right, #f5f3ff, #ede9fe)",
                      color: isDarkMode ? "#ede9fe" : "#6d28d9"
                    }}
                  >
                    <h3 className={styles.cardTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Heater Test Results
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    {results.heaterTests.map((heaterTest: any, index: number) => (
                      <div key={index} style={{ 
                        marginBottom: '20px', 
                        padding: '16px',
                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#fff'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '12px'
                        }}>
                          <h4 style={{ 
                            fontSize: '16px', 
                            fontWeight: 'bold',
                            color: isDarkMode ? '#d1d5db' : '#111827',
                            margin: 0
                          }}>
                            {getReadableParameterName(`heaters[${index}].status`).split(' ')[0]} {index + 1} Test Results
                          </h4>
                          <span className={`${styles.statusBadge} ${
                            heaterTest.testResult === "PASS" ? styles.colorCompleted : styles.colorError
                          }`}>
                            {heaterTest.testResult}
                          </span>
                        </div>
                        
                        {/* Temperature trend chart */}
                        {renderTemperatureTrend(heaterTest, index)}
                        
                        {/* Thermal rise data */}
                        {renderThermalRiseData(heaterTest)}
                        
                        {/* Power consumption data */}
                        {renderPowerConsumption(heaterTest)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Test Results (if enabled) with improved parameter names */}
              {enableCurrentTest && results.currentTest && (
                <div 
                  className={styles.card}
                  style={{
                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div 
                    className={styles.cardHeader} 
                    style={{ 
                      background: isDarkMode 
                        ? "linear-gradient(to right, #713f12, #854d0e)" 
                        : "linear-gradient(to right, #fffbeb, #fef3c7)",
                      color: isDarkMode ? "#fef3c7" : "#854d0e"
                    }}
                  >
                    <h3 className={styles.cardTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      Current Test Results
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div style={{ 
                      marginBottom: '20px', 
                      padding: '16px',
                      backgroundColor: results.currentTest.testResult === "PASS" ? 
                        (isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5') : 
                        (isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2'),
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold',
                        color: results.currentTest.testResult === "PASS" ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626'),
                        marginBottom: '8px'
                      }}>
                        {results.currentTest.testResult}
                      </div>
                      <div style={{ 
                        color: isDarkMode ? '#d1d5db' : '#374151',
                        fontSize: '14px'
                      }}>
                        Current measurements {results.currentTest.testResult === "PASS" ? "within" : "outside"} expected range
                      </div>
                    </div>
                    
                    <table 
                      className={styles.table}
                      style={{
                        color: isDarkMode ? "#e5e7eb" : "inherit"
                      }}
                    >
                      <thead 
                        className={styles.tableHeader}
                        style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          color: isDarkMode ? "#d1d5db" : "#6b7280"
                        }}
                      >
                        <tr>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Heater</th>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Expected (mA)</th>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Measured (mA)</th>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Deviation (%)</th>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Result</th>
                        </tr>
                      </thead>
                      <tbody className={styles.tableBody}>
                        {results.currentTest.heaterResults && results.currentTest.heaterResults.map((result: any, index: number) => (
                          <tr key={index} className={index % 2 === 1 ? styles.tableRowAlt : undefined} style={{ backgroundColor: index % 2 === 1 ? (isDarkMode ? "#111827" : "#f9fafb") : undefined }}>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                              {getReadableParameterName(`heaters[${index}].status`).split(' ')[0]} {index + 1}
                            </td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{result.expectedCurrent}</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{result.measuredCurrent}</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{result.deviation.toFixed(2)}%</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                              <span className={`${styles.statusBadge} ${
                                result.inRange ? styles.colorCompleted : styles.colorError
                              }`}>
                                {result.inRange ? "PASS" : "FAIL"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    
                    <div style={{
                      marginTop: '16px',
                      padding: '12px',
                      backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#f9fafb',
                      borderRadius: '6px',
                      fontSize: '14px',
                      color: isDarkMode ? '#d1d5db' : '#4b5563'
                    }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Test Summary:</div>
                      <div>• Test Duration: {results.currentTest.testDuration} s</div>
                      <div>• Samples Collected: {results.currentTest.sampleCount}</div>
                      <div>• Maximum Deviation: {results.currentTest.maxDeviation.toFixed(2)}%</div>
                      <div>• Tolerance Range: ±{results.currentTest.tolerance}%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Power Cycle Test Results (if enabled) with improved parameter names */}
              {enablePowerCycle && results.powerCycleTest && (
                <div 
                  className={styles.card}
                  style={{
                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div 
                    className={styles.cardHeader} 
                    style={{ 
                      background: isDarkMode 
                        ? "linear-gradient(to right, #164e63, #0e7490)" 
                        : "linear-gradient(to right, #ecfeff, #cffafe)",
                      color: isDarkMode ? "#cffafe" : "#0e7490"
                    }}
                  >
                    <h3 className={styles.cardTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                      Power Cycle Test Results
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div style={{ 
                      marginBottom: '20px', 
                      padding: '16px',
                      backgroundColor: results.powerCycleTest.testResult === "PASS" ? 
                        (isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5') : 
                        (isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2'),
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold',
                        color: results.powerCycleTest.testResult === "PASS" ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626'),
                        marginBottom: '8px'
                      }}>
                        {results.powerCycleTest.testResult}
                      </div>
                      <div style={{ 
                        color: isDarkMode ? '#d1d5db' : '#374151',
                        fontSize: '14px'
                      }}>
                        Power Cycle Test {results.powerCycleTest.cyclesCompleted} of {results.powerCycleTest.totalCycles} cycles completed
                      </div>
                    </div>
                    
                    <table 
                      className={styles.table}
                      style={{
                        color: isDarkMode ? "#e5e7eb" : "inherit"
                      }}
                    >
                      <thead 
                        className={styles.tableHeader}
                        style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          color: isDarkMode ? "#d1d5db" : "#6b7280"
                        }}
                      >
                        <tr>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Parameter</th>
                          <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Value</th>
                        </tr>
                      </thead>
                      <tbody className={styles.tableBody}>
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Cycles Completed</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            {results.powerCycleTest.cyclesCompleted} of {results.powerCycleTest.totalCycles}
                          </td>
                        </tr>
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Cycle Time</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.cycleTime} s</td>
                        </tr>
                        
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power On Time</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.powerOnTime} s</td>
                        </tr>
                        
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power Off Time</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.powerOffTime} s</td>
                        </tr>
                        
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Total Test Time</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.totalTestTime} s</td>
                        </tr>
                        
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Failures</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.failures}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Pass/Fail Status Summary with improved parameter names */}
              {results.passFailStatus && (
                <div 
                  className={styles.card}
                  style={{
                    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div 
                    className={styles.cardHeader} 
                    style={{ 
                      background: isDarkMode 
                        ? "linear-gradient(to right, #064e3b, #065f46)" 
                        : "linear-gradient(to right, #ecfdf5, #d1fae5)",
                      color: isDarkMode ? "#d1fae5" : "#065f46"
                    }}
                  >
                    <h3 className={styles.cardTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Pass/Fail Status Summary
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation || detectedSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                      gap: '16px',
                      marginBottom: '24px'
                    }}>
                      {/* Count pass/fail statuses */}
                      {(() => {
                        const totalTests = Object.values(results.passFailStatus).length;
                        const passedTests = Object.values(results.passFailStatus).filter(status => status === "[PASS]").length;
                        const failedTests = totalTests - passedTests;
                        const passRate = totalTests > 0 ? (passedTests / totalTests) * 100 : 0;
                        
                        return (
                          <>
                            <div style={{
                              borderRadius: '8px',
                              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                padding: '10px',
                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: isDarkMode ? '#d1d5db' : '#374151'
                              }}>
                                Test Results Summary
                              </div>
                              <div style={{
                                padding: '12px',
                                textAlign: 'center'
                              }}>
                                <div style={{
                                  fontSize: '24px',
                                  fontWeight: 'bold',
                                  color: passRate >= 90 ? 
                                    (isDarkMode ? '#34d399' : '#059669') : 
                                    passRate >= 70 ?
                                      (isDarkMode ? '#fbbf24' : '#d97706') :
                                      (isDarkMode ? '#f87171' : '#dc2626')
                                }}>
                                  {passRate.toFixed(1)}%
                                </div>
                                <div style={{
                                  fontSize: '13px',
                                  color: isDarkMode ? '#9ca3af' : '#6b7280',
                                  marginTop: '4px'
                                }}>
                                  Pass Rate
                                </div>
                              </div>
                            </div>
                            
                            <div style={{
                              borderRadius: '8px',
                              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                padding: '10px',
                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: isDarkMode ? '#d1d5db' : '#374151'
                              }}>
                                Passed Tests
                              </div>
                              <div style={{
                                padding: '12px',
                                textAlign: 'center'
                              }}>
                                <div style={{
                                  fontSize: '24px',
                                  fontWeight: 'bold',
                                  color: isDarkMode ? '#34d399' : '#059669'
                                }}>
                                  {passedTests}
                                </div>
                                <div style={{
                                  fontSize: '13px',
                                  color: isDarkMode ? '#9ca3af' : '#6b7280',
                                  marginTop: '4px'
                                }}>
                                  of {totalTests} tests
                                </div>
                              </div>
                            </div>
                            
                            <div style={{
                              borderRadius: '8px',
                              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                              overflow: 'hidden'
                            }}>
                              <div style={{
                                padding: '10px',
                                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: isDarkMode ? '#d1d5db' : '#374151'
                              }}>
                                Failed Tests
                              </div>
                              <div style={{
                                padding: '12px',
                                textAlign: 'center'
                              }}>
                                <div style={{
                                  fontSize: '24px',
                                  fontWeight: 'bold',
                                  color: failedTests === 0 ?
                                    (isDarkMode ? '#34d399' : '#059669') :
                                    (isDarkMode ? '#f87171' : '#dc2626')
                                }}>
                                  {failedTests}
                                </div>
                                <div style={{
                                  fontSize: '13px',
                                  color: isDarkMode ? '#9ca3af' : '#6b7280',
                                  marginTop: '4px'
                                }}>
                                  of {totalTests} tests
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                    
                    <div style={{
                      padding: '12px',
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderRadius: '6px',
                      marginBottom: '16px'
                    }}>
                      <h4 style={{ 
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        Test Status Details
                      </h4>
                      
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '16px'
                      }}>
                        {Object.entries(results.passFailStatus).map(([key, value]) => (
                          <div key={key} style={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 12px',
                            backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.3)' : 'rgba(249, 250, 251, 0.5)',
                            borderRadius: '4px',
                            marginBottom: '8px'
                          }}>
                            <span style={{ 
                              color: isDarkMode ? '#d1d5db' : '#4b5563'
                            }}>
                              {getReadableParameterName(key)}
                            </span>
                            <span className={`${styles.statusBadge} ${
                              value === "[PASS]" ? styles.colorCompleted : styles.colorError
                            }`}>
                              {value === "[PASS]" ? "PASS" : "FAIL"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Raw Parameter Values Section - add this after the main results cards */}
{results && (
  <div className={styles.card} style={{
    backgroundColor: isDarkMode ? "#1e1e1e" : "white",
    borderColor: isDarkMode ? "#374151" : "#e5e7eb",
    marginTop: '20px'
  }}>
    <div className={styles.cardHeader} style={{
      backgroundColor: isDarkMode ? "#111827" : undefined,
      borderColor: isDarkMode ? "#374151" : "#e5e7eb",
      background: isDarkMode 
        ? "linear-gradient(to right, #1e40af, #3b82f6)" 
        : "linear-gradient(to right, #dbeafe, #eff6ff)",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer'
    }}
    onClick={() => setShowParameters(!showParameters)}
    >
      <h3 className={styles.cardTitle} style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        Raw Parameter Values
      </h3>
              {/* Add simulation badge */}
        <SimulationBadge isSimulation={detectedSimulation} />
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="currentColor"
        style={{ 
          transform: showParameters ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}
      >
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
    
    {showParameters && (
      <div className={styles.cardContent}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ 
            display: 'block',
            marginBottom: '8px',
            color: isDarkMode ? '#d1d5db' : '#4b5563',
            fontWeight: 500
          }}>
            Select Parameter Group:
          </label>
          <select
            value={selectedParameterGroup}
            onChange={(e) => setSelectedParameterGroup(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
              color: isDarkMode ? '#e5e7eb' : '#111827',
              fontSize: '14px'
            }}
          >
            {Object.keys(hepsParameters).map(key => (
              <option key={key} value={key}>
                {getParameterGroupName(key)}
              </option>
            ))}
          </select>
        </div>
        
        <HEPSParameterDisplay 
          parameters={hepsParameters[selectedParameterGroup as keyof typeof hepsParameters]}
          results={results}
          groupName={getParameterGroupName(selectedParameterGroup)}
          isDarkMode={isDarkMode}
        />
        
        <div style={{
          padding: '12px',
          backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#f9fafb',
          borderRadius: '6px',
          fontSize: '14px',
          color: isDarkMode ? '#d1d5db' : '#4b5563'
        }}>
        </div>
      </div>
    )}
  </div>
)}
              
              {/* Generate Report Button */}
              <div className="flex justify-end mt-6">
                <button 
                  onClick={generateReport}
                  className={styles.reportButton}
                  style={{
                    backgroundColor: "#10b981",
                    color: "white"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.buttonIcon}>
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  Generate Report
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
       /* Test History Panel */
        <div 
          className={styles.card}
          style={{
            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
            borderColor: isDarkMode ? "#374151" : "#e5e7eb"
          }}
        >
          <div 
            className={styles.cardHeader}
            style={{
              backgroundColor: isDarkMode ? "#111827" : undefined,
              borderColor: isDarkMode ? "#374151" : "#e5e7eb",
              background: isDarkMode 
                ? "linear-gradient(to right, #1e3a8a, #1d4ed8)" 
                : "linear-gradient(to right, #dbeafe, #eff6ff)"
            }}
          >
            <h3 className={styles.cardTitle} style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              UHF Test History
            </h3>
          </div>
          
          <div className={styles.cardContent}>
            {historyLoading ? (
              <div style={{ 
                textAlign: 'center',
                padding: '20px',
                color: isDarkMode ? '#d1d5db' : '#6b7280'
              }}>
                <svg className={styles.spinnerIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 8px' }}>
                  <path d="M21 12a9 9 0 11-6.219-8.56" />
                </svg>
                <p>Loading test history...</p>
              </div>
            ) : testHistory.length === 0 ? (
              <div style={{ 
                textAlign: 'center',
                padding: '20px',
                color: isDarkMode ? '#d1d5db' : '#6b7280',
                fontStyle: 'italic'
              }}>
                <p>No test history available for this profile.</p>
                <p style={{ marginTop: '8px', fontSize: '14px' }}>
                  Run a test to start building your history.
                </p>
                
                {!profileId && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    backgroundColor: isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                    borderRadius: '6px',
                    color: isDarkMode ? '#f87171' : '#b91c1c',
                    fontSize: '14px'
                  }}>
                    <strong>Note:</strong> No profile ID detected. Test history requires a valid profile selection.
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Visualization Controls */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ 
                    display: 'block',
                    marginBottom: '8px',
                    color: isDarkMode ? '#d1d5db' : '#4b5563',
                    fontWeight: 500
                  }}>
                    Select Metric:
                  </label>
                  <select
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      color: isDarkMode ? '#e5e7eb' : '#111827',
                      fontSize: '14px'
                    }}
                  >
                    {metricOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Use TestHistoryChart component */}
                <div style={{
                  height: '300px',
                  marginBottom: '20px',
                  backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                  padding: '16px',
                  borderRadius: '8px'
                }}>
                  <h4 style={{ 
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: isDarkMode ? '#e5e7eb' : '#111827'
                  }}>
                    {metricOptions.find(m => m.value === selectedMetric)?.label} Trend
                  </h4>
                  
                  <TestHistoryChart
                    data={testHistory}
                    metricPath={selectedMetric}
                    metricLabel={metricOptions.find(m => m.value === selectedMetric)?.label || ''}
                    isDarkMode={isDarkMode}
                  />
                </div>

                {/* Multi-select controls */}
                <div style={{ 
                  marginTop: '20px', 
                  marginBottom: '12px', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 600,
                      color: isDarkMode ? '#e5e7eb' : '#111827',
                      marginBottom: '6px'
                    }}>
                      Test History Records
                    </h4>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Toggle button for multi-select mode */}
                    <button
                      onClick={toggleMultiSelectMode}
                      style={{
                        backgroundColor: isMultiSelectMode 
                          ? (isDarkMode ? '#4f46e5' : '#6366f1') 
                          : (isDarkMode ? '#1f2937' : '#f3f4f6'),
                        color: isMultiSelectMode 
                          ? 'white' 
                          : (isDarkMode ? '#e5e7eb' : '#374151'),
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                      </svg>
                      {isMultiSelectMode ? 'Exit Selection Mode' : 'Select Items'}
                    </button>
                    
                    {/* Only show these controls when in multi-select mode */}
                    {isMultiSelectMode && (
                      <>
                        <button
                          onClick={selectAllItems}
                          style={{
                            backgroundColor: 'transparent',
                            color: isDarkMode ? '#93c5fd' : '#2563eb',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 8px',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer'
                          }}
                        >
                          Select All
                        </button>
                        
                        <button
                          onClick={deselectAllItems}
                          style={{
                            backgroundColor: 'transparent',
                            color: isDarkMode ? '#93c5fd' : '#2563eb',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 8px',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer'
                          }}
                        >
                          Deselect All
                        </button>
                        
                        <button
                          onClick={deleteSelectedItems}
                          disabled={selectedItems.length === 0}
                          style={{
                            backgroundColor: selectedItems.length === 0 
                              ? (isDarkMode ? '#6b7280' : '#9ca3af') 
                              : (isDarkMode ? '#dc2626' : '#ef4444'),
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: selectedItems.length === 0 ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Delete Selected ({selectedItems.length})
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Information panel before the table */}
                <div style={{ marginBottom: '20px', padding: '12px', borderRadius: '8px', backgroundColor: isDarkMode ? '#1e293b' : '#f0f9ff', border: '1px solid', borderColor: isDarkMode ? '#475569' : '#bfdbfe' }}>
                  <h4 style={{ marginBottom: '8px', color: isDarkMode ? '#e5e7eb' : '#1e40af', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Test History Information
                  </h4>
                  <p style={{ fontSize: '14px', color: isDarkMode ? '#cbd5e1' : '#334155' }}>
                    This chart shows only <strong>real test data</strong> from actual hardware tests. 
                    Simulated test results are not included in this history or visualization.
                  </p>
                  {testHistory.length === 0 && (
                    <p style={{ marginTop: '10px', fontSize: '14px', color: isDarkMode ? '#fb923c' : '#c2410c', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      No real test data is available yet. Run tests in real mode (not simulation) to collect actual data.
                    </p>
                  )}
                </div>
                
                {/* Use TestHistoryTable component */}
                <TestHistoryTable
                  testHistory={testHistory}
                  isDarkMode={isDarkMode}
                  onViewDetails={(item) => setSelectedHistoryItem(item)}
                />

                {/* Additional UHF Metrics Summary */}
                <div style={{ marginTop: '20px' }}>
                  <h4 style={{ 
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: isDarkMode ? '#e5e7eb' : '#111827'
                  }}>
                    Key Metrics Summary
                  </h4>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '12px'
                  }}>
                    {/* Metric Card: Average Board Temperature */}
                    <div style={{
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        Average Board Temperature
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => extractValue(item.results, 'telemetry.boardTemperature'))
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(2)} °C`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: Average PA Temperature */}
                    <div style={{
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        Average PA Temperature
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => extractValue(item.results, 'telemetry.paTemperature'))
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(2)} °C`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: Average RSSI */}
                    <div style={{
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        Average RSSI
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => extractValue(item.results, 'telemetry.lastRssi'))
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(1)}`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: Test Success Rate */}
                    <div style={{
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        Overall Success Rate
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          if (testHistory.length === 0) return 'N/A';
                          
                          const successes = testHistory.filter(item => item.status === 'completed').length;
                          const successRate = (successes / testHistory.length) * 100;
                          
                          return `${successRate.toFixed(0)}%`;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Export History Button */}
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
                  {/* Clear All History Button */}
                  <button 
                    onClick={clearAllTestHistory}
                    style={{
                      backgroundColor: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Clear All History
                  </button>
                  
                  {/* Clean Up Simulated Data Button */}
                  <button 
                    onClick={() => cleanupSimulatedData()}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Clean Up Simulated Data
                  </button>
                  
                  {/* Limit History Button */}
                  <button 
                    onClick={() => limitTestHistory(30)}
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Limit History (30 Records)
                  </button>
                  
                  <button 
                    onClick={() => {
                      // Implement history export functionality
                      const historyData = JSON.stringify(testHistory, null, 2);
                      const blob = new Blob([historyData], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `uhf_test_history_${profileId || 'unknown'}.json`;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                    style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Export Test History
                  </button>
                </div>

                {/* Status Messages for Cleanup and Limit Operations */}
                {(cleanupMessage || limitMessage) && (
                  <div style={{ 
                    marginTop: '12px',
                    padding: '12px',
                    borderRadius: '6px',
                    backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    fontSize: '14px'
                  }}>
                    {cleanupMessage && (
                      <div style={{ 
                        color: cleanupMessage.includes('✅') ? 
                          (isDarkMode ? '#34d399' : '#047857') : 
                          (isDarkMode ? '#f87171' : '#b91c1c'),
                        marginBottom: limitMessage ? '8px' : '0'
                      }}>
                        {cleanupMessage}
                      </div>
                    )}
                    
                    {limitMessage && (
                      <div style={{ 
                        color: limitMessage.includes('✅') ? 
                          (isDarkMode ? '#34d399' : '#047857') : 
                          (isDarkMode ? '#f87171' : '#b91c1c')
                      }}>
                        {limitMessage}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Test Details Modal */}
      {selectedHistoryItem && (
        <TestDetailsModal
          test={selectedHistoryItem}
          onClose={() => setSelectedHistoryItem(null)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};