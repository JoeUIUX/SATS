// src/components/CheckoutTestProgress/components/SBandTestPanel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType, isUsingSimulation } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel
import sbandStyles from './SBandTestPanel.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Import the S-Band-specific functions
import { runSBandCheckout } from '@/services/checkout/sbandCheckout';
import { generateSBandReport } from '@/services/reports/sbandReport';

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

interface SBandTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
  profileId?: string; // Add profile ID for test history
}

// Update TestHistoryItem interface definition to include is_simulated
interface TestHistoryItem {
  id: number;
  component_id: string;
  test_type: string;
  test_date: string;
  results: {
    simulated?: boolean;
    fpga?: {
      version?: string;
      build?: string;
      type?: string;
      option?: string;
    };
    hardware?: {
      idYear?: string;
      idMonth?: string;
      orderNumber?: string;
    };
    status?: {
      lclStatus?: string;
    };
    receiver?: {
      status?: string;
      sensitivity?: string;
      frequencyShift?: string;
      iqPower?: string;
      agcValue?: string;
      demodEb?: string;
      demodN0?: string;
      dataRate?: string;
    };
    transmitter?: {
      status?: string;
      convDiff?: string;
      convFilter?: string;
      waveform?: string;
      pcmIndex?: string;
      agcValue?: string;
    };
    modes?: {
      coherentMode?: string;
      rangingMode?: string;
    };
    temperature?: {
      adc0?: string;
      adc1?: string;
    };
    txTest?: {
      completed?: boolean;
      status?: string;
      error?: string;
    };
    rxTest?: {
      completed?: boolean;
      status?: string;
      error?: string;
    };
    testedOptions?: string[];
  };
  status: string;
  notes?: string;
  is_simulated?: boolean;
}

export const SBandTestPanel: React.FC<SBandTestPanelProps> = ({
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
  const [detectedSimulation, setDetectedSimulation] = useState(false);
  
  // Add new states for test history
  const [showHistory, setShowHistory] = useState(false);
  const [testHistory, setTestHistory] = useState<TestHistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string>('receiver.frequencyShift');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  
  // Add state variables for history management
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  
  // Map options to capabilities - determine if TX/RX options are enabled
  const mapOptionsToCapabilities = () => {
    // Default both to false
    let shouldEnableTransmitter = false;
    let shouldEnableReceiver = false;
    
    // Check for specific options and map them to capabilities
    if (options.includes('Telemetry')) {
      // Telemetry typically involves receiving data, so enable receiver
      shouldEnableReceiver = true;
    }
    
    if (options.includes('Ground Pass')) {
      // Ground Pass typically involves both transmitting commands and receiving telemetry
      shouldEnableTransmitter = true;
      shouldEnableReceiver = true;
    }
    
    // Add other mappings based on specific test options
    if (options.includes('Transmitter Test')) {
      shouldEnableTransmitter = true;
    }
    
    if (options.includes('Receiver Test')) {
      shouldEnableReceiver = true;
    }
    
    return { shouldEnableTransmitter, shouldEnableReceiver };
  };
  
  // Get the capabilities based on selected options
  const { shouldEnableTransmitter, shouldEnableReceiver } = mapOptionsToCapabilities();
  
  // Use these for conditional rendering and UI display
  const enableTX = shouldEnableTransmitter;
  const enableRX = shouldEnableReceiver;
  
  // API URL
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
  
  // Available metrics for visualization
  const metricOptions = [
    { label: 'Receiver Frequency Shift', value: 'receiver.frequencyShift' },
    { label: 'Transmitter Status', value: 'transmitter.status' },
    { label: 'Receiver Status', value: 'receiver.status' },
    { label: 'Receiver Sensitivity', value: 'receiver.sensitivity' },
    { label: 'Receiver IQ Power', value: 'receiver.iqPower' },
    { label: 'Receiver AGC Value', value: 'receiver.agcValue' },
    { label: 'Receiver Demod Eb', value: 'receiver.demodEb' },
    { label: 'Receiver Demod N0', value: 'receiver.demodN0' },
    { label: 'Receiver Data Rate', value: 'receiver.dataRate' },
    { label: 'Temperature ADC0', value: 'temperature.adc0' },
    { label: 'Temperature ADC1', value: 'temperature.adc1' }
  ];
  
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
  
  // Check if we have a real socket or need simulation
  useEffect(() => {
    // Check the socket type and update UI accordingly
    console.log("🔍 Socket debug info:", debugSocketType(sock));
    
    // Initial socket simulation check
    let isActuallySimulated = isUsingSimulation(sock);
    setDetectedSimulation(isActuallySimulated);
    
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
  
  // Function to fetch test history
  const fetchTestHistory = async (limit: number = 30) => {
    if (!profileId) {
      console.log("Cannot fetch history: No profile ID provided");
      return;
    }
    
    setHistoryLoading(true);
    try {
      console.log(`Fetching test history for profile ${profileId} and component S-Band`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=S-Band`, {
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
            
            // Must have receiver or transmitter data to be a legitimate test
            const hasReceiverData = item.results.receiver && 
              (item.results.receiver.status || item.results.receiver.frequencyShift);
            
            const hasTransmitterData = item.results.transmitter && 
              item.results.transmitter.status;
            
            // Consider it a real test if it has receiver or transmitter data
            return hasReceiverData || hasTransmitterData;
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
        const localHistoryKey = `sband_real_history_${profileId}`;
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
  
  // Function to save test result to history
  const saveTestResult = async (testResults: any, status: string, wasSimulated: boolean) => {
    if (!profileId) {
      console.log("Cannot save history: No profile ID provided");
      return;
    }
    
    // Use the passed simulation flag, but also perform standard checks as a backup
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
            component_id: "S-Band",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: `TX: ${enableTX ? 'Enabled' : 'Disabled'}, RX: ${enableRX ? 'Enabled' : 'Disabled'}`,
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
        const localHistoryKey = `sband_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "S-Band",
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
      setCurrentStep('Starting S-Band Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common parameters
            return parameters.map(param => {
              // Return specific values for common S-Band parameters
              if (param.includes("FPGA_version")) {
                return `${param}=1.2.3`;
              } else if (param.includes("FPGA_build")) {
                return `${param}=2022.04`;
              } else if (param.includes("hardware_id_year")) {
                return `${param}=2022`;
              } else if (param.includes("hardware_id_month")) {
                return `${param}=06`;
              } else if (param.includes("hardware_id_order_n")) {
                return `${param}=42`;
              } else if (param.includes("LCL_status")) {
                return `${param}=1`;
              } else if (param.includes("RX_status")) {
                return `${param}=1`;
              } else if (param.includes("RX_frequency_shift")) {
                return `${param}=${500 + Math.floor(Math.random() * 200)}`;
              } else if (param.includes("TX_status")) {
                return `${param}=1`;
              } else if (param.includes("SBand_coherent_mode")) {
                return `${param}=1`;
              } else if (param.includes("SBand_ranging_mode")) {
                return `${param}=0`;
              } else if (param.includes("adc_reg_00") || param.includes("adc_reg_04")) {
                return `${param}=${25 + Math.floor(Math.random() * 10)}`;
              } else {
                return `${param}=${Math.floor(Math.random() * 100)}`;
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
        // Mark this as a simulation
        setDetectedSimulation(true);
      }
      
      // Specifically check if this is a simulation run
      const wasSimulation = isUsingSimulation(sock);
      setDetectedSimulation(wasSimulation);
      
      // Run the S-Band checkout test with progress updates
      const results = await runSBandCheckout(sock, 
        { testTX: enableTX, testRX: enableRX }, 
        (step, percent) => {
          setCurrentStep(step);
          setProgress(percent);
        }
      );
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Save result to history
      await saveTestResult(results, 'completed', wasSimulation);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running S-Band checkout:', error);
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
      const reportFile = await generateSBandReport(results);
      alert(`S-Band report saved: ${reportFile}`);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  // Clean up simulated test results from the database
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

  // Limit test history to a certain number of records
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
          component: 'S-Band'  // Limit only S-Band records
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

  // Clear all test history for this profile and component
  const clearAllTestHistory = async () => {
    if (!profileId) {
      console.log("Cannot clear history: No profile ID provided");
      return;
    }

    // First confirm with the user
    if (!window.confirm("Are you sure you want to clear ALL test history for S-Band?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=S-Band`, {
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
        localStorage.removeItem(`sband_real_history_${profileId}`);
        localStorage.removeItem(`sband_sim_history_${profileId}`);
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

  // Delete a single test history item
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

  // Toggle multi-select mode
  const toggleMultiSelectMode = () => {
    setIsMultiSelectMode(!isMultiSelectMode);
    if (isMultiSelectMode) {
      // If turning off multi-select mode, clear all selections
      setSelectedItems([]);
    }
  };

  // Toggle selection of a single history item
  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  // Select all visible history items
  const selectAllItems = () => {
    setSelectedItems(testHistory.map(item => item.id));
  };

  // Deselect all history items
  const deselectAllItems = () => {
    setSelectedItems([]);
  };

  // Delete all selected items
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
                  <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
                  <path d="M7.879 6.464a1 1 0 01-1.414 1.414 3 3 0 000 4.243 1 1 0 11-1.414 1.414 5 5 0 010-7.07 1 1 0 011.414 0zm4.242 0a1 1 0 011.414 0 5 5 0 010 7.072 1 1 0 01-1.414-1.414 3 3 0 000-4.244 1 1 0 010-1.414z" />
                </svg>
                S-Band Test Status
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
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                  marginTop: '10px'
                }}
              >
                <div className={styles.parameterLabel}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                    <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  S-Band Testing
                </div>
                <span style={{ display: 'flex', gap: '8px' }}>
                  <span className={`${styles.parameterValue} ${
                    enableTX ? styles.colorCompleted : styles.colorWaiting
                  }`}>
                    TX: {enableTX ? 'ENABLED' : 'DISABLED'}
                  </span>
                  <span className={`${styles.parameterValue} ${
                    enableRX ? styles.colorCompleted : styles.colorWaiting
                  }`}>
                    RX: {enableRX ? 'ENABLED' : 'DISABLED'}
                  </span>
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
          
          {/* Test Results Display - Only shown when results are available */}
          {results && (
            <div className="space-y-4 mt-4">
              {/* FPGA Information Card */}
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
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                    FPGA Information
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    {/* FPGA Version */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_FPGA_version
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.fpga.version}
                      </div>
                    </div>

                    {/* FPGA Build */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_FPGA_build
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.fpga.build}
                      </div>
                    </div>

                    {/* FPGA Type */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_FPGA_type
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.fpga.type}
                      </div>
                    </div>
                    
                    {/* FPGA Option */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_FPGA_option
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.fpga.option}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hardware Information Card */}
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
                      ? "linear-gradient(to right, #1e40af, #2563eb)" 
                      : "linear-gradient(to right, #dbeafe, #eff6ff)",
                    color: isDarkMode ? "#bfdbfe" : "#1e40af"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Hardware Information
                  </h3>
                  
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    {/* Year */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_hardware_id_year
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.hardware.idYear}
                      </div>
                    </div>

                    {/* Month */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_hardware_id_month
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.hardware.idMonth}
                      </div>
                    </div>

                    {/* Order Number */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_hardware_id_order_n
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.hardware.orderNumber}
                      </div>
                    </div>

                    {/* LCL Status */}
                    <div style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderRadius: '8px',
                      padding: '12px',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                    }}>
                      <div style={{ 
                        fontSize: '12px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginBottom: '4px'
                      }}>
                        OBC1_SBand_LCL_status
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {results.status.lclStatus === "1" ? "ON" : "OFF"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Receiver Information Card */}
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
                      ? "linear-gradient(to right, #7c3aed, #8b5cf6)" 
                      : "linear-gradient(to right, #ede9fe, #f5f3ff)",
                    color: isDarkMode ? "#ede9fe" : "#7c3aed"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    Receiver Information
                  </h3>
                  
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    {/* Status */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_RX_status
                      </div>
                      <span className={`${sbandStyles.statusBadge} ${
                        results.receiver.status === "1" ? sbandStyles.colorCompleted : sbandStyles.colorError
                      }`}>
                        {results.receiver.status === "1" ? "ACTIVE" : "INACTIVE"}
                      </span>
                    </div>

                    {/* Sensitivity */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
  <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
                        OBC1_SBand_RX_sensitivity
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.sensitivity}
                      </span>
                    </div>

                    {/* Frequency Shift */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path d="M13.105 4.142a1 1 0 011.414 0l4.242 4.242a1 1 0 010 1.414l-4.242 4.243a1 1 0 01-1.414-1.415l2.536-2.535H4a1 1 0 110-2h11.641l-2.536-2.535a1 1 0 010-1.414z" />
                        </svg>
                        OBC1_SBand_RX_frequency_shift
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.frequencyShift} Hz
                      </span>
                    </div>

                    {/* IQ Power */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_RX_IQ_power
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.iqPower}
                      </span>
                    </div>
                    
                    {/* AGC Value */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_RX_AGC_value
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.agcValue}
                      </span>
                    </div>
                    
                    {/* Demod Eb */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        OBC1_SBand_RX_demod_Eb
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.demodEb}
                      </span>
                    </div>

                    {/* Demod N0 */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        OBC1_SBand_RX_demod_N0
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.demodN0}
                      </span>
                    </div>

                    {/* Data Rate */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1 1 1 0 01.008.057z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_RX_data_rate
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.receiver.dataRate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transmitter Information Card */}
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
                      ? "linear-gradient(to right, #be185d, #db2777)" 
                      : "linear-gradient(to right, #fce7f3, #fbcfe8)",
                    color: isDarkMode ? "#fce7f3" : "#be185d"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.672-2.43 2.902a41.202 41.202 0 01-13.14 0c-1.437-.23-2.43-1.49-2.43-2.902V5.426c0-1.413.993-2.67 2.43-2.902z" />
                      <path d="M3.18 11.9a.75.75 0 00-1.36.604c.35.79.87 1.475 1.53 2.008.66.533 1.43.893 2.25 1.05.82.156 1.66.157 2.47.001.82-.156 1.58-.517 2.24-1.05.66-.533 1.18-1.217 1.53-2.007a.75.75 0 00-1.36-.604c-.23.518-.54.961-.92 1.307-.38.345-.82.58-1.29.679-.47.1-.95.1-1.42.001-.47-.099-.91-.334-1.29-.679-.38-.346-.69-.789-.92-1.307z" />
                    </svg>
                    Transmitter Information
                  </h3>
                  
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    {/* Status */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_TX_status
                      </div>
                      <span className={`${sbandStyles.statusBadge} ${
                        results.transmitter.status === "1" ? sbandStyles.colorCompleted : sbandStyles.colorError
                      }`}>
                        {results.transmitter.status === "1" ? "ACTIVE" : "INACTIVE"}
                      </span>
                    </div>

                    {/* Encoder Configuration */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_TX_conv_diff
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.transmitter.convDiff}
                      </span>
                    </div>

                    {/* Filter Configuration */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_TX_conv_filter
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.transmitter.convFilter}
                      </span>
                    </div>

                    {/* Waveform */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path d="M2 4.5A2.5 2.5 0 014.5 2h11a2.5 2.5 0 010 5h-11A2.5 2.5 0 012 4.5zM2 10a2.5 2.5 0 012.5-2.5h7a2.5 2.5 0 010 5h-7A2.5 2.5 0 012 10zM2 15.5A2.5 2.5 0 014.5 13h11a2.5 2.5 0 010 5h-11A2.5 2.5 0 012 15.5z" />
                        </svg>
                        OBC1_SBand_TX_waveform
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.transmitter.waveform}
                      </span>
                    </div>

                    {/* PCM Index */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path d="M13 7H7v6h6V7z" />
                          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_TX_pcm_index
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.transmitter.pcmIndex}
                      </span>
                    </div>

                    {/* AGC Value */}
                    <div className={sbandStyles.parameterBox} style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                    }}>
                      <div className={sbandStyles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        OBC1_SBand_TX_agc_value
                      </div>
                      <span className={sbandStyles.parameterValue}>
                        {results.transmitter.agcValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modes & Temperature Card */}
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
                      ? "linear-gradient(to right, #92400e, #b45309)" 
                      : "linear-gradient(to right, #fef3c7, #fffbeb)",
                    color: isDarkMode ? "#fef3c7" : "#92400e"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Modes & Temperature
                  </h3>
                  
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                      gap: '16px',
                      marginBottom: '20px'
                    }}>
                      <h4 style={{ 
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '8px',
                        color: isDarkMode ? '#e5e7eb' : '#111827',
                        gridColumn: '1 / -1'
                      }}>
                        Operation Modes
                      </h4>
                      
                      {/* Coherent Mode */}
                      <div className={sbandStyles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={sbandStyles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                          </svg>
                          OBC1_SBand_coherent_mode
                        </div>
                        <span className={`${sbandStyles.statusBadge} ${
                          results.modes.coherentMode === "1" ? sbandStyles.colorCompleted : sbandStyles.colorWaiting
                        }`}>
                          {results.modes.coherentMode === "1" ? "ENABLED" : "DISABLED"}
                        </span>
                      </div>
                      
                      {/* Ranging Mode */}
                      <div className={sbandStyles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={sbandStyles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={sbandStyles.parameterIcon}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                          </svg>
                          OBC1_SBand_ranging_mode
                        </div>
                        <span className={`${sbandStyles.statusBadge} ${
                          results.modes.rangingMode === "1" ? sbandStyles.colorCompleted : sbandStyles.colorWaiting
                        }`}>
                          {results.modes.rangingMode === "1" ? "ENABLED" : "DISABLED"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    <h4 style={{ 
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: isDarkMode ? '#e5e7eb' : '#111827',
                      gridColumn: '1 / -1'
                    }}>
                      Temperature Readings
                    </h4>
                    
                    {/* Temperature ADC0 */}
                    <div className={styles.tempCard} style={{
                      backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                      borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                    }}>
                      <div className={styles.tempLabel} style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}>
                        OBC1_SBand_adc_reg_00
                      </div>
                      <div className={styles.tempValue} style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}>
                        {results.temperature.adc0} °C
                      </div>
                    </div>
                    
                    {/* Temperature ADC1 */}
                    <div className={styles.tempCard} style={{
                      backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                      borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                    }}>
                      <div className={styles.tempLabel} style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}>
                        OBC1_SBand_adc_reg_04
                      </div>
                      <div className={styles.tempValue} style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}>
                        {results.temperature.adc1} °C
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TX/RX Test Results (if performed) */}
              {results.txTest && (
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
                      color: isDarkMode ? "#ffe4e6" : "#be123c"
                    }}
                  >
                    <h3 className={styles.cardTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728a1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      TX Test Results
                    </h3>
                    
                    <SimulationBadge isSimulation={isForceSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                      gap: '16px'
                    }}>
                      {/* TX Test Status */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          Test Status
                        </div>
                        <span className={`${styles.statusBadge} ${
                          results.txTest.status === "Success" ? styles.colorCompleted : styles.colorError
                        }`}>
                          {results.txTest.status}
                        </span>
                      </div>
                      
                      {/* TX Test Completed */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Test Completed
                        </div>
                        <span className={`${styles.statusBadge} ${
                          results.txTest.completed ? styles.colorCompleted : styles.colorError
                        }`}>
                          {results.txTest.completed ? "YES" : "NO"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Error Message (if any) */}
                    {results.txTest.error && (
                      <div style={{
                        marginTop: '16px',
                        padding: '12px',
                        backgroundColor: isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                        borderRadius: '6px',
                        color: isDarkMode ? '#f87171' : '#b91c1c',
                        fontSize: '14px'
                      }}>
                        <strong>Error:</strong> {results.txTest.error}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* RX Test Results (if performed) */}
              {results.rxTest && (
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
                        ? "linear-gradient(to right, #1d4ed8, #3b82f6)" 
                        : "linear-gradient(to right, #dbeafe, #bfdbfe)",
                      color: isDarkMode ? "#dbeafe" : "#1d4ed8"
                    }}
                  >
                    <h3 className={styles.cardTitle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      RX Test Results
                    </h3>
                    
                    <SimulationBadge isSimulation={isForceSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                      gap: '16px'
                    }}>
                      {/* RX Test Status */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          Test Status
                        </div>
                        <span className={`${styles.statusBadge} ${
                          results.rxTest.status === "Success" ? styles.colorCompleted : styles.colorError
                        }`}>
                          {results.rxTest.status}
                        </span>
                      </div>
                      
                      {/* RX Test Completed */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Test Completed
                        </div>
                        <span className={`${styles.statusBadge} ${
                          results.rxTest.completed ? styles.colorCompleted : styles.colorError
                        }`}>
                          {results.rxTest.completed ? "YES" : "NO"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Error Message (if any) */}
                    {results.rxTest.error && (
                      <div style={{
                        marginTop: '16px',
                        padding: '12px',
                        backgroundColor: isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2',
                        borderRadius: '6px',
                        color: isDarkMode ? '#f87171' : '#b91c1c',
                        fontSize: '14px'
                      }}>
                        <strong>Error:</strong> {results.rxTest.error}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Generate Report Button */}
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
              S-Band Test History
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
                
                {/* Additional Metrics Summary */}
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
                    {/* Metric Card: Average RX Status */}
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
                        Active Receiver Rate
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => item.results?.receiver?.status === '1')
                            .filter(v => v !== undefined);
                            
                          if (values.length === 0) return 'N/A';
                          
                          const successCount = values.filter(Boolean).length;
                          const successRate = (successCount / values.length) * 100;
                          return `${successRate.toFixed(1)}%`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: Average Frequency Shift */}
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
                        Avg. Frequency Shift
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => {
                              const val = item.results?.receiver?.frequencyShift;
                              return val ? parseFloat(val) : null;
                            })
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(1)} Hz`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: TX Status Rate */}
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
                        Active TX Rate
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => item.results?.transmitter?.status === '1')
                            .filter(v => v !== undefined);
                            
                          if (values.length === 0) return 'N/A';
                          
                          const successCount = values.filter(Boolean).length;
                          const successRate = (successCount / values.length) * 100;
                          return `${successRate.toFixed(1)}%`;
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
                      a.download = `sband_test_history_${profileId || 'unknown'}.json`;
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
      
      {/* Test Details Modal - using the imported TestDetailsModal component */}
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