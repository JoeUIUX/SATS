// src/components/CheckoutTestProgress/components/PropulsionTestPanel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import { isUsingSimulation } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse styles from OBC1TestPanel

// Import the Propulsion-specific functions
import { runPropulsionCheckout } from '@/services/checkout/propulsionCheckout';
import { generatePropulsionReport } from '@/services/reports/propulsionReport';

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

interface PropulsionTestPanelProps {
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
    ecu1?: any;
    ppu1?: any;
    temperatures?: any;
    pma?: any;
    ppu?: any;
    testedOptions?: string[];
  };
  status: string;
  notes?: string;
  is_simulated?: boolean; // Add this field with optional marker
}

export const PropulsionTestPanel: React.FC<PropulsionTestPanelProps> = ({
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
  const [selectedMetric, setSelectedMetric] = useState<string>('temperatures.Thruster_1');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  // Add state variables for messages
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  
  // Available metrics for visualization
  const metricOptions = [
    { label: 'ECU-1 Voltage', value: 'ecu1.voltage' },
    { label: 'ECU-1 Current', value: 'ecu1.current' },
    { label: 'PPU-1 Voltage', value: 'ppu1.voltage' },
    { label: 'PPU-1 Current', value: 'ppu1.current' },
    { label: 'Thruster 1 Temp', value: 'temperatures.Thruster_1' },
    { label: 'Thruster 2 Temp', value: 'temperatures.Thruster_2' },
    { label: 'ECU Temp', value: 'temperatures.ECU_Temp' },
    { label: 'Tank Temp 1', value: 'temperatures.Tank_Temperature_1' }
  ];
  
  // Determine test options based on the filtered options
  // check if any option contains "PMA" or "PPU"
  const enablePMA = options.some(option => option.includes('PMA'));
  const enablePPU = options.some(option => option.includes('PPU'));

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
    setDetectedSimulation(useSimulation);
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
      console.log(`Fetching test history for profile ${profileId} and component Propulsion`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=Propulsion`, {
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
            
            // Must have ECU values to be a legitimate test
            const hasEcuData = item.results.ecu1;
            
            // Must have some temperature data
            const hasTempData = item.results.temperatures && 
              Object.keys(item.results.temperatures).length > 0;
            
            // Consider it a real test if it has both ECU and temperature data
            return hasEcuData && hasTempData;
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
        const localHistoryKey = `propulsion_real_history_${profileId}`;
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
            component_id: "Propulsion",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: `PMA:${enablePMA ? 'Enabled' : 'Disabled'}, PPU:${enablePPU ? 'Enabled' : 'Disabled'}`,
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
        const localHistoryKey = `propulsion_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "Propulsion",
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
          component: 'Propulsion'  // Limit only Propulsion records
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
    if (!window.confirm("Are you sure you want to clear ALL test history for Propulsion?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=Propulsion`, {
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
        localStorage.removeItem(`propulsion_real_history_${profileId}`);
        localStorage.removeItem(`propulsion_sim_history_${profileId}`);
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
  
  // Add these functions for multi-select mode
  const toggleMultiSelectMode = () => {
    setIsMultiSelectMode(!isMultiSelectMode);
    if (isMultiSelectMode) {
      // If turning off multi-select mode, clear all selections
      setSelectedItems([]);
    }
  };
  
  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };
  
  const selectAllItems = () => {
    setSelectedItems(testHistory.map(item => item.id));
  };
  
  const deselectAllItems = () => {
    setSelectedItems([]);
  };
  
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
      setCurrentStep('Starting Propulsion Checkout');
      
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
              if (param.includes("ECU") && param.includes("V")) {
                return `${param}=${12.0 + Math.random() * 0.5}`; // 12-12.5V
              } else if (param.includes("ECU") && param.includes("I")) {
                return `${param}=${0.1 + Math.random() * 0.1}`; // 0.1-0.2A
              } else if (param.includes("PmaCheck") || param.includes("PpuCheck")) {
                // Generate timing data for PMA/PPU tests
                return `${param}=${Math.floor(5 + Math.random() * 10)}`; // 5-15 seconds
              } else if (param.includes("PROPULSION") && param.includes("Temp")) {
                // Temperature values
                return `${param}=${20 + Math.floor(Math.random() * 10)}`; // 20-30 deg C
              } else if (param.includes("PROPULSION") && param.includes("Pressure")) {
                // Pressure values
                return `${param}=${5 + Math.floor(Math.random() * 5)}`; // 5-10 bar
              } else if (param.includes("PWM")) {
                return `${param}=${Math.floor(Math.random() * 100)}`; // 0-100%
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
      
      // Check if we're using simulation mode
      const usingSimulation = isUsingSimulation(sock);
      setDetectedSimulation(usingSimulation);
      
      // Run the Propulsion checkout test with progress updates
      const testOptions = {
        enablePMA: enablePMA,
        enablePPU: enablePPU
      };
      
      const results = await runPropulsionCheckout(sock, testOptions, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Save result to history
      await saveTestResult(results, 'completed', usingSimulation);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running Propulsion checkout:', error);
      setError(error instanceof Error ? error.message : String(error));
      onTestError(error);
      
      // Save failed result to history - any error means simulation was likely used
      if (results) {
        await saveTestResult(results, 'error', true);
      }
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
      const reportFile = await generatePropulsionReport(results);
      alert(`Propulsion report saved: ${reportFile}`);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error instanceof Error ? error.message : String(error));
    }
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
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
              </svg>
              Propulsion Test Status
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
              <span className={`${styles.statusBadge} ${
                isForceSimulation ? styles.colorWaiting : styles.colorCompleted
              }`}>
                {isForceSimulation ? 'SIMULATION' : 'REAL SOCKET'}
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
                PMA Testing
              </div>
              <span className={`${styles.statusBadge} ${
                enablePMA ? styles.colorCompleted : styles.colorWaiting
              }`}>
                {enablePMA ? 'ENABLED' : 'DISABLED'}
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
                PPU Testing
              </div>
              <span className={`${styles.statusBadge} ${
                enablePPU ? styles.colorCompleted : styles.colorWaiting
              }`}>
                {enablePPU ? 'ENABLED' : 'DISABLED'}
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
                  ECU-1 Information
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={detectedSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div 
                  className={styles.infoCard}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#059669" width="20" height="20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <div 
                      className={styles.infoLabel}
                      style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}
                    >
                      ECU-1 Voltage/Current
                    </div>
                    <div 
                      className={styles.infoValue}
                      style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}
                    >
                      {results.ecu1?.voltage ? `${parseFloat(results.ecu1.voltage).toFixed(2)} V / ${parseFloat(results.ecu1.current).toFixed(2)} A` : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
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
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Temperature Measurements
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={detectedSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.tempGrid}>
                  {results.temperatures && Object.entries(results.temperatures).map(([key, value]: [string, any], index) => (
                    <div key={index} className={styles.tempCard}>
                      <div className={styles.tempLabel}>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className={styles.tempValue}>{typeof value === 'string' ? value : `${parseFloat(value).toFixed(1)} °C`}</div>
                    </div>
                  ))}
                  {!results.temperatures && (
                    <div style={{ padding: '12px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                      No temperature data available
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Display the PMA section only if the PMA option was checked */}
            {enablePMA && (
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
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    PMA Test Results
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={detectedSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  {results.pma && results.pma.status !== 'N.A.' ? (
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
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Init Payload</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.pma.initPayl} s</td>
                          </tr>
                          
                          <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Data Get</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.pma.dataGet} s</td>
                          </tr>
                          
                          <tr>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Data Send</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.pma.dataSend} s</td>
                          </tr>
                          
                          <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>ECU Off</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.pma.ecuOff} s</td>
                          </tr>
                          
                          <tr>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Test Duration</td>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.pma.duration} s</td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <div 
                        style={{ 
                          padding: "16px", 
                          textAlign: "center", 
                          color: isDarkMode ? "#d1d5db" : "#6b7280",
                          fontStyle: "italic"
                        }}
                      >
                        PMA test was not performed
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Display the PPU section only if the PPU option was checked */}
              {enablePPU && (
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
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      PPU Test Results
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={detectedSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    {results.ppu && results.ppu.status !== 'N.A.' ? (
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
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Init Payload</td>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.initPayl} s</td>
                            </tr>
                            
                            <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Data Get 1</td>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.dataGet1} s</td>
                            </tr>
                            
                            <tr>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PPU On</td>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.ppuOn} s</td>
                            </tr>
                            
                            <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Data Get 2</td>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.dataGet2} s</td>
                            </tr>
                            
                            <tr>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Data Send</td>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.dataSend} s</td>
                            </tr>
                            
                            <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PPU Off</td>
                              <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.ppuOff} s</td>
                            </tr>
                            
                            <tr>
                            <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>ECU Off</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.ecuOff} s</td>
                              </tr>
                              
                              <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Test Duration</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.ppu.duration} s</td>
                              </tr>
                            </tbody>
                          </table>
                        ) : (
                          <div 
                            style={{ 
                              padding: "16px", 
                              textAlign: "center", 
                              color: isDarkMode ? "#d1d5db" : "#6b7280",
                              fontStyle: "italic"
                            }}
                          >
                            PPU test was not performed
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                
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
                Propulsion Test History
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
                
                  {/* First add the information panel before the table */}
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
                        a.download = `propulsion_test_history_${profileId || 'unknown'}.json`;
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