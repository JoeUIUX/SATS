// src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType, isUsingSimulation } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the OBC1 test panel styles

// Import the LEOCAM-specific functions
import { runLEOCAMCheckout } from '@/services/checkout/leocamCheckout';
import { generateLEOCAMReport } from '@/services/reports/leocamReport';

// Import test history components
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

interface SimulationBadgeProps {
  isSimulation: boolean;
}

interface LEOCAMTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
  profileId?: string; // Add profile ID for test history
}

// Update your TestHistoryItem interface definition to include is_simulated
interface TestHistoryItem {
  id: number;
  component_id: string;
  test_type: string;
  test_date: string;
  results: {
    simulated?: boolean;
    voltageTests?: {
      gps?: any;
      pcs?: any;
      leocam?: any;
    };
    leocamTelemetry?: {
      healthStatus?: string;
      cpuTemperatures?: string[];
      internalTemperatures?: string[];
      sensorTemperatures?: string[];
    };
    testedOptions?: string[];
  };
  status: string;
  notes?: string;
  is_simulated?: boolean;
}

// Add these parameter array constants before the component's return statement 
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

export const LEOCAMTestPanel: React.FC<LEOCAMTestPanelProps> = ({
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
  const [selectedMetric, setSelectedMetric] = useState<string>('voltageTests.gps.voltage');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  const [detectedSimulation, setDetectedSimulation] = useState(false);
  
  // Add state variables for messages
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  
  // Available metrics for visualization
  const metricOptions = [
    { label: 'GPS Voltage', value: 'voltageTests.gps.voltage' },
    { label: 'PCS Voltage', value: 'voltageTests.pcs.voltage' },
    { label: 'LEOCAM Voltage', value: 'voltageTests.leocam.voltage' },
    { label: 'CPU Temperature 1', value: 'leocamTelemetry.cpuTemperatures[0]' },
    { label: 'CPU Temperature 2', value: 'leocamTelemetry.cpuTemperatures[1]' },
    { label: 'Sensor Temperature 1', value: 'leocamTelemetry.sensorTemperatures[0]' }
  ];
  
  // Determine if various test options are enabled
  const enableVoltageTests = options.includes('Voltage Tests');
  const enableSensorOperations = options.includes('Sensor Operations');
  const enableDiskOperations = options.includes('Disk Operations');
  
  // API URL
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
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

  // Modify the useEffect for socket detection
useEffect(() => {
  // First check the socket itself
  let isSimulated = true; // Default to simulation (safer assumption)
  
  if (sock) {
    // Direct simulation flag check - most reliable if present
    if (typeof sock.isSimulated === 'boolean') {
      isSimulated = sock.isSimulated;
    } 
    // If it has a simulateRead method, it's definitely a simulation socket
    else if (typeof sock.simulateRead === 'function') {
      isSimulated = true;
    }
    // If it has send/receive methods but no simulation methods, likely real
    else if (typeof sock.send === 'function' && typeof sock.receive === 'function' && 
             typeof sock.simulateRead === 'undefined') {
      isSimulated = false;
    }
  }
  
  // Check localStorage as secondary source (less reliable but could be used as fallback)
  const socketInfoStr = localStorage.getItem('mccSocketInfo');
  let configSaysSimulation = true;

  if (socketInfoStr) {
    try {
      const socketInfo = JSON.parse(socketInfoStr);
      if (socketInfo && socketInfo.isReal === true) {
        configSaysSimulation = false;
      }
    } catch (e) {
      console.error("Error parsing socket info:", e);
    }
  }
  
  // Set states based on our determination
  setDetectedSimulation(isSimulated);
  setIsForceSimulation(configSaysSimulation);
  
  console.log(`Socket analysis: Socket detected as ${isSimulated ? 'SIMULATION' : 'REAL'}, Config says ${configSaysSimulation ? 'SIMULATION' : 'REAL'}`);
  
  // Global simulation mode should use the most accurate determination (socket itself)
  setSimulationMode(isSimulated);
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
      console.log(`Fetching test history for profile ${profileId} and component LEOCAM`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=LEOCAM`, {
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
            
            // Must have voltage values to be a legitimate test
            const hasVoltageData = item.results.voltageTests && 
              (item.results.voltageTests.gps || item.results.voltageTests.pcs || item.results.voltageTests.leocam);
            
            // Must have some telemetry data
            const hasTelemetryData = item.results.leocamTelemetry && 
              (item.results.leocamTelemetry.healthStatus || 
               (item.results.leocamTelemetry.cpuTemperatures && item.results.leocamTelemetry.cpuTemperatures.length > 0) || 
               (item.results.leocamTelemetry.sensorTemperatures && item.results.leocamTelemetry.sensorTemperatures.length > 0));
            
            // Consider it a real test if it has both voltage and temperature data
            return hasVoltageData && hasTelemetryData;
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
        const localHistoryKey = `leocam_real_history_${profileId}`;
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
      // Add simulation flag to the results
      const resultsWithFlag = {
        ...testResults,
        simulated: finalSimulationStatus,
        timestamp: new Date().toISOString(),
        testedOptions: options,
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
            component_id: "LEOCAM",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: `Voltage Tests: ${enableVoltageTests}, Sensor Operations: ${enableSensorOperations}, Disk Operations: ${enableDiskOperations}`,
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
        const localHistoryKey = `leocam_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "LEOCAM",
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
    
    const parts = path.split('.');
    let value = results;
    
    for (const part of parts) {
      if (part.includes('[') && part.includes(']')) {
        // Handle array access
        const arrayNameEndIndex = part.indexOf('[');
        const indexEndIndex = part.indexOf(']');
        
        const arrayName = part.substring(0, arrayNameEndIndex);
        const index = parseInt(part.substring(arrayNameEndIndex + 1, indexEndIndex));
        
        if (value && typeof value === 'object' && arrayName in value) {
          const array = value[arrayName];
          if (Array.isArray(array) && index >= 0 && index < array.length) {
            value = array[index];
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else if (value && typeof value === 'object' && part in value) {
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
      setCurrentStep('Starting LEOCAM Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common parameters
            return parameters.map(param => {
              // Return specific values for common parameters
              if (param.includes("GPS") || param.includes("5V")) {
                return `${param}=${5.0 + (Math.random() * 0.2 - 0.1).toFixed(3)}`;
              } else if (param.includes("PCS")) {
                return `${param}=${12.0 + (Math.random() * 0.4 - 0.2).toFixed(3)}`;
              } else if (param.includes("CAM")) {
                return `${param}=${12.0 + (Math.random() * 0.4 - 0.2).toFixed(3)}`;
              } else if (param.includes("TEMP") || param.includes("Temp")) {
                // Temperature values
                return `${param}=${35 + Math.floor(Math.random() * 10)}`;
              } else if (param.includes("PWR") || param.includes("Power")) {
                return `${param}=1`;
              } else if (param.includes("Mode")) {
                return `${param}=0`;
              } else if (param.includes("Sen_")) {
                return `${param}=100`;
              } else if (param.includes("Count")) {
                return `${param}=${Math.floor(Math.random() * 10)}`;
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
      }
      
      // Determine if we're using simulation
      const usingSimulation = isUsingSimulation(sock);
      setDetectedSimulation(usingSimulation);
      
      // Run the LEOCAM checkout test with progress updates
      const results = await runLEOCAMCheckout(sock, options, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Save result to history - use the accurate simulation detection
      await saveTestResult(results, 'completed', usingSimulation);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running LEOCAM checkout:', error);
      setError(error instanceof Error ? error.message : String(error));
      
      // Save failed result to history - any error means simulation was likely used
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
      const reportFile = await generateLEOCAMReport(results);
      alert(`LEOCAM report saved: ${reportFile}`);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  /**
   * Clean up simulated test results from the database
   * This will remove any test results that were incorrectly saved as real but were actually simulated
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
          component: 'LEOCAM'  // Limit only LEOCAM records
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
    if (!window.confirm("Are you sure you want to clear ALL test history for LEOCAM?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=LEOCAM`, {
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
        localStorage.removeItem(`leocam_real_history_${profileId}`);
        localStorage.removeItem(`leocam_sim_history_${profileId}`);
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

    } catch (error) {console.error("Error during bulk deletion:", error);
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
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                LEOCAM Test Status
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
                      background: 'linear-gradient(to right, #10b981, #059669)'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Display the testing options */}
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
                      color: isDarkMode ? '#34d399' : '#059669',
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
              
{/* Connection Status */}
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
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                }}
              >
                <div className={styles.parameterLabel}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  Test Options
                </div>
                <span className={`${styles.statusBadge} ${styles.colorCompleted}`}>
                  {options.length > 0 ? `LEOCAM TEST ENABLED` : 'LEOCAM TEST DISABLED'}
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
                  color: 'white'
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
          
{results && (
  <div className="space-y-4 mt-4">
    {/* Raw Parameter Values Panel - This replaces all existing result panels */}
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
            ? "linear-gradient(to right, #1e40af, #3b82f6)" 
            : "linear-gradient(to right, #dbeafe, #eff6ff)"
        }}
      >
        <h3 className={styles.cardTitle} style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          LEOCAM Test Results - Raw Parameter Values
        </h3>
        
        {/* Add simulation badge */}
        <SimulationBadge isSimulation={detectedSimulation} />
      </div>
      
      <div className={styles.cardContent}>
        
        {/* Voltage and Current Parameters */}
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold',
          margin: '16px 0 10px',
          color: isDarkMode ? "#d1d5db" : "#374151"
        }}>
          Voltage and Current Parameters
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
            {pcsVi.concat(gpsVi, leocamVi).map((param, index) => (
              <tr 
                key={param} 
                className={index % 2 === 1 ? styles.tableRowAlt : ''}
                style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
              >
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{results.rawParameters?.[param] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* LEOCAM Sensor Parameters */}
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold',
          margin: '20px 0 10px',
          color: isDarkMode ? "#d1d5db" : "#374151"
        }}>
          LEOCAM Sensor Parameters
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
            {leocamSet.map((param, index) => (
              <tr 
                key={param} 
                className={index % 2 === 1 ? styles.tableRowAlt : ''}
                style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
              >
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{results.rawParameters?.[param] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* LEOCAM Telemetry Parameters */}
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold',
          margin: '20px 0 10px',
          color: isDarkMode ? "#d1d5db" : "#374151"
        }}>
          LEOCAM Telemetry Parameters
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
            {[...leocamVarStart, ...leocamVarMiddle, ...leocamVarConfig, ...leocamVarEnd].map((param, index) => (
              <tr 
                key={param} 
                className={index % 2 === 1 ? styles.tableRowAlt : ''}
                style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
              >
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{results.rawParameters?.[param] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* LEOCAM Disk Parameters */}
          <>
            <h4 style={{ 
              fontSize: '14px', 
              fontWeight: 'bold',
              margin: '20px 0 10px',
              color: isDarkMode ? "#d1d5db" : "#374151"
            }}>
              LEOCAM Disk Parameters
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
                {leocamDiskVars.map((param, index) => (
                  <tr 
                    key={param} 
                    className={index % 2 === 1 ? styles.tableRowAlt : ''}
                    style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
                  >
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{results.rawParameters?.[param] || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
 
        
        {/* LEOCAM Statistics Parameters */}
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: 'bold',
          margin: '20px 0 10px',
          color: isDarkMode ? "#d1d5db" : "#374151"
        }}>
          LEOCAM Statistics Parameters
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
            {leocamStat.map((param, index) => (
              <tr 
                key={param} 
                className={index % 2 === 1 ? styles.tableRowAlt : ''}
                style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
              >
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{results.rawParameters?.[param] || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    {/* Keep the Generate Report button */}
    <div>
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
                  ? "linear-gradient(to right, #1e40af, #3b82f6)" 
                  : "linear-gradient(to right, #dbeafe, #eff6ff)"
              }}
            >
              <h3 className={styles.cardTitle} style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                LEOCAM Test History
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
                  
                  {/* Metric Trend Chart */}
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
                      metricLabel={metricOptions.find(m => m.value === selectedMetric)?.label || selectedMetric}
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
  
                  {/* Test History Table */}
                  <TestHistoryTable 
                    testHistory={testHistory}
                    isDarkMode={isDarkMode}
                    onViewDetails={(item) => setSelectedHistoryItem(item)}
                  />
                  
                  {/* Export History Section */}
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
                    
                    {/* Export History Button */}
                    <button 
                      onClick={() => {
                        // Implement history export functionality
                        const historyData = JSON.stringify(testHistory, null, 2);
                        const blob = new Blob([historyData], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `leocam_test_history_${profileId || 'unknown'}.json`;
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
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
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

export default LEOCAMTestPanel;