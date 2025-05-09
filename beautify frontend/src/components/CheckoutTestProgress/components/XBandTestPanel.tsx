// src/components/CheckoutTestProgress/components/XBandTestPanel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType, isUsingSimulation } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styling as OBC1TestPanel

// Import the X-Band checkout function
import { runXBandCheckout } from '@/services/checkout/xbandCheckout';
import { generateXBandReport } from '@/services/reports/xbandReport';

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

interface XBandTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
  profileId?: string; // Add profile ID for test history
}

interface XBandTestResults {
  voltages: {
    pcs: { value: string, pass: boolean },
    xband: { value: string, pass: boolean },
    xbandOff: { value: string, pass: boolean }
  };
  currents: {
    pcs: string,
    xband: string,
    xbandOff: string
  };
  testedOptions?: string[];
  reportGenerated?: boolean;
  _simulationUsed?: boolean;
}

// Update interface for TestHistoryItem to match what's needed for the X-Band tests
interface TestHistoryItem {
  id: number;
  component_id: string;
  test_type: string;
  test_date: string;
  results: {
    simulated?: boolean;
    voltages?: {
      pcs?: { value?: string, pass?: boolean },
      xband?: { value?: string, pass?: boolean },
      xbandOff?: { value?: string, pass?: boolean }
    };
    currents?: {
      pcs?: string,
      xband?: string,
      xbandOff?: string
    };
    testedOptions?: string[];
  };
  status: string;
  notes?: string;
  is_simulated?: boolean;
}

// Main XBandTestPanel component
export const XBandTestPanel: React.FC<XBandTestPanelProps> = ({
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
  const [results, setResults] = useState<XBandTestResults | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasRunTest, setHasRunTest] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isForceSimulation, setIsForceSimulation] = useState(false);
  
  // Add new states for test history
  const [showHistory, setShowHistory] = useState(false);
  const [testHistory, setTestHistory] = useState<TestHistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string>('voltages.xband.value');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  const [detectedSimulation, setDetectedSimulation] = useState(false);
  
  // Add state variables for messages
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  
  // API URL
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
  
  // Available metrics for visualization
  const metricOptions = [
    { label: 'PCS Voltage', value: 'voltages.pcs.value' },
    { label: 'X-Band Voltage', value: 'voltages.xband.value' },
    { label: 'X-Band Off Voltage', value: 'voltages.xbandOff.value' }
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
      console.log(`Fetching test history for profile ${profileId} and component X-Band`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=X-Band`, {
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
            const hasVoltageData = item.results.voltages && 
              (item.results.voltages.pcs || item.results.voltages.xband || item.results.voltages.xbandOff);
            
            // Consider it a real test if it has voltage data
            return hasVoltageData;
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
        const localHistoryKey = `xband_real_history_${profileId}`;
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
            component_id: "X-Band",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: options.includes('Extended Test') ? "Extended X-Band Test" : "Standard X-Band Test",
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
        const localHistoryKey = `xband_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "X-Band",
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
      setCurrentStep('Starting X-Band Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common parameters
            return parameters.map(param => {
              if (param.includes("PCS_V")) return `${param}=12.2`;
              if (param.includes("PCS_I")) return `${param}=0.35`;
              if (param.includes("X-BAND_V")) return `${param}=15.1`;
              if (param.includes("X-BAND_I")) return `${param}=0.22`;
              return `${param}=simulated`;
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
      
      // Check if this is a real or simulated connection
      const actuallySimulated = isUsingSimulation(sock);
      setDetectedSimulation(actuallySimulated);
      
      // Run the X-Band checkout test with progress updates
      const checkoutResults = await runXBandCheckout(sock, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Add the list of tested options to the results
      const finalResults = {
        ...checkoutResults,
        testedOptions: options,
        _simulationUsed: actuallySimulated
      };
      
      // Save the results locally
      setResults(finalResults);
      
      // Save result to history - use the accurate simulation detection
      await saveTestResult(finalResults, 'completed', actuallySimulated);
      
      // Notify parent that the test is complete
      onTestComplete(finalResults);
      
    } catch (error) {
      console.error('Error running X-Band checkout:', error);
      setError(error instanceof Error ? error.message : String(error));
      
      // Save failed result to history - any error means simulation was likely used
      if (results) {
        await saveTestResult(results, 'error', true);
      }
      
      // Notify parent of error
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
      const reportFile = await generateXBandReport(results);
      alert(`X-Band report saved: ${reportFile}`);
      
      // Mark the report as generated
      setResults((prev: XBandTestResults | null) => {
        if (!prev) return prev;
        return { ...prev, reportGenerated: true };
      });
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
          component: 'X-Band'  // Limit only X-Band records
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
    if (!window.confirm("Are you sure you want to clear ALL test history for X-Band?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=X-Band`, {
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
        localStorage.removeItem(`xband_real_history_${profileId}`);
        localStorage.removeItem(`xband_sim_history_${profileId}`);
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
                  <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
                X-Band Test Status
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
                  backgroundColor: isForceSimulation ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
                  color: isForceSimulation ? '#f59e0b' : '#10b981'
                }}>
                  {isForceSimulation ? 'SIMULATION' : 'REAL SOCKET'}
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
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Voltage Measurements
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
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
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PCS Voltage</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltages.pcs.value} V</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge}`} style={{
                            backgroundColor: results.voltages.pcs.pass ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                            color: results.voltages.pcs.pass ? '#10b981' : '#ef4444'
                          }}>
                            {results.voltages.pcs.pass ? "PASS" : "FAIL"}
                          </span>
                        </td>
                      </tr>
                      
                      <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PCS Current</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.currents.pcs} A</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge}`} style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                            color: '#10b981'
                          }}>
                            INFO
                          </span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>X-Band Voltage</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltages.xband.value} V</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge}`} style={{
                            backgroundColor: results.voltages.xband.pass ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                            color: results.voltages.xband.pass ? '#10b981' : '#ef4444'
                          }}>
                            {results.voltages.xband.pass ? "PASS" : "FAIL"}
                          </span>
                        </td>
                      </tr>
                      
                      <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>X-Band Current</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.currents.xband} A</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge}`} style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                            color: '#10b981'
                          }}>
                            INFO
                          </span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>X-Band Off Voltage</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltages.xbandOff.value} V</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge}`} style={{
                            backgroundColor: results.voltages.xbandOff.pass ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                            color: results.voltages.xbandOff.pass ? '#10b981' : '#ef4444'
                          }}>
                            {results.voltages.xbandOff.pass ? "PASS" : "FAIL"}
                          </span>
                        </td>
                      </tr>
                      
                      <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>X-Band Off Current</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.currents.xbandOff} A</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge}`} style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                            color: '#10b981'
                          }}>
                            INFO
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                    Test Procedure Summary
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px"
                  }}>
                    <h4 style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: isDarkMode ? "#d1d5db" : "#374151"
                    }}>
                      Test Sequence Steps
                    </h4>
                    
                    <ol style={{
                      paddingLeft: "20px",
                      color: isDarkMode ? "#9ca3af" : "#6b7280",
                      fontSize: "13px",
                      lineHeight: "1.6"
                    }}>
                      <li>Power on PCS (Payload Control System)</li>
                      <li>Verify PCS voltage is within range (11.5V - 12.5V)</li>
                      <li>Enable intercomm communication</li>
                      <li>Power on X-Band transmitter</li>
                      <li>Verify X-Band voltage is within range (14.5V - 15.5V)</li>
                      <li>Send control commands to X-Band system</li>
                      <li>Verify X-Band responds to commands</li>
                      <li>Power off X-Band transmitter</li>
                      <li>Verify X-Band voltage drops below 1.0V when off</li>
                      <li>Power off PCS</li>
                      <li>Reset intercomm communication</li>
                    </ol>
                  </div>
                  
                  <div style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderRadius: "8px",
                    padding: "16px"
                  }}>
                    <h4 style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: isDarkMode ? "#d1d5db" : "#374151"
                    }}>
                      Overall Test Status
                    </h4>
                    
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px",
                      borderRadius: "6px",
                      backgroundColor: isDarkMode ? "#0d1117" : "#ffffff",
                      border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`
                    }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}>
                        {results.voltages.pcs.pass && results.voltages.xband.pass && results.voltages.xbandOff.pass ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#10b981" width="20" height="20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span style={{
                              color: isDarkMode ? "#10b981" : "#065f46",
                              fontWeight: "600"
                            }}>
                              All tests passed successfully
                            </span>
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ef4444" width="20" height="20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span style={{
                              color: isDarkMode ? "#ef4444" : "#b91c1c",
                              fontWeight: "600"
                            }}>
                              Some tests failed
                            </span>
                          </>
                        )}
                      </div>
                      
                      <button 
                        onClick={generateReport}
                        style={{
                          backgroundColor: "#10b981",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          padding: "8px 12px",
                          fontSize: "13px",
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          cursor: "pointer"
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        Generate Report
                      </button>
                    </div>
                  </div>
                </div>
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
              X-Band Test History
            </h3>
          </div>
          
          <div className={styles.cardContent}>
            {historyLoading ? (
              <div style={{textAlign: 'center',
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

                {/* Test history table */}
                <div style={{
                  marginTop: '12px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                }}>
                  {testHistory.length > 0 ? (
                    <table style={{ 
                      width: '100%', 
                      borderCollapse: 'collapse',
                      fontSize: '14px'
                    }}>
                      <thead style={{ 
                        backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
                        color: isDarkMode ? '#d1d5db' : '#6b7280',
                        fontWeight: 500
                      }}>
                        <tr>
                          {/* Add a checkbox column when in multi-select mode */}
                          {isMultiSelectMode && (
                            <th style={{ 
                              padding: '12px 12px',
                              textAlign: 'center',
                              width: '40px',
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                            }}>
                              <input 
                                type="checkbox"
                                checked={selectedItems.length === testHistory.length}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    selectAllItems();
                                  } else {
                                    deselectAllItems();
                                  }
                                }}
                                style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                              />
                            </th>
                          )}
                          <th style={{ 
                            padding: '12px 16px',
                            textAlign: 'left',
                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                          }}>
                            Date/Time
                          </th>
                          <th style={{ 
                            padding: '12px 16px',
                            textAlign: 'left',
                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                          }}>
                            Test Options
                          </th>
                          <th style={{ 
                            padding: '12px 16px',
                            textAlign: 'left',
                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                          }}>
                            Status
                          </th>
                          {/* Add the Type column */}
                          <th style={{ 
                            padding: '12px 16px',
                            textAlign: 'left',
                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                          }}>
                            Type
                          </th>
                          <th style={{ 
                            padding: '12px 16px',
                            textAlign: 'left',
                            borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                          }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {testHistory.slice().reverse().map((item, index) => (
                          <tr key={item.id} style={{ 
                            backgroundColor: isMultiSelectMode && selectedItems.includes(item.id)
                              ? (isDarkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(99, 102, 241, 0.1)')
                              : (index % 2 === 0 
                                ? (isDarkMode ? '#111827' : '#ffffff') 
                                : (isDarkMode ? '#1f2937' : '#f9fafb')),
                            transition: 'background-color 0.2s ease'
                          }}>
                            {/* Add a checkbox column when in multi-select mode */}
                            {isMultiSelectMode && (
                              <td style={{ 
                                padding: '12px 12px',
                                textAlign: 'center',
                                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                              }}>
                                <input 
                                  type="checkbox"
                                  checked={selectedItems.includes(item.id)}
                                  onChange={() => toggleItemSelection(item.id)}
                                  style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                                />
                              </td>
                            )}
                            <td style={{ 
                              padding: '12px 16px',
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                              color: isDarkMode ? '#e5e7eb' : '#111827'
                            }}>
                              {new Date(item.test_date).toLocaleString()}
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                              color: isDarkMode ? '#e5e7eb' : '#111827'
                            }}>
                              {item.results.testedOptions ? item.results.testedOptions.join(', ') : 'N/A'}
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                            }}>
                              <span style={{ 
                                display: 'inline-block',
                                padding: '4px 8px',
                                borderRadius: '9999px',
                                fontSize: '12px',
                                fontWeight: 500,
                                backgroundColor: item.status === 'completed' 
                                  ? (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5')
                                  : (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                                color: item.status === 'completed'
                                  ? (isDarkMode ? '#34d399' : '#047857')
                                  : (isDarkMode ? '#f87171' : '#b91c1c')
                              }}>
                                {item.status === 'completed' ? 'SUCCESS' : 'FAILED'}
                              </span>
                            </td>
                            {/* Add the Type column cell */}
                            <td style={{ 
                              padding: '12px 16px',
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                            }}>
                              <span style={{ 
                                display: 'inline-block',
                                padding: '4px 8px',
                                borderRadius: '9999px',
                                fontSize: '12px',
                                fontWeight: 500,
                                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                color: isDarkMode ? '#34d399' : '#047857'
                              }}>
                                REAL DATA
                              </span>
                            </td>
                            <td style={{ 
                              padding: '12px 16px',
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                              display: 'flex',
                              gap: '8px'
                            }}>
                              <button 
                                onClick={() => setSelectedHistoryItem(item)}
                                style={{
                                  backgroundColor: isDarkMode ? '#2563eb' : '#3b82f6',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  padding: '4px 8px',
                                  fontSize: '12px',
                                  cursor: 'pointer',
                                  fontWeight: 500,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px'
                                }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                View
                              </button>
                              
                              {/* Only show the delete button when not in multi-select mode */}
                              {!isMultiSelectMode && (
                                <button 
                                  onClick={() => deleteTestHistoryItem(item.id)}
                                  style={{
                                    backgroundColor: isDarkMode ? '#dc2626' : '#ef4444',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '12px',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  Delete
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div style={{
                      padding: '20px',
                      textAlign: 'center',
                      color: isDarkMode ? '#9ca3af' : '#6b7280'
                    }}>
                      <p>No real test data available. Run tests with real hardware connections to collect data.</p>
                      <p style={{ marginTop: '10px', fontSize: '14px' }}>
                        Test data from simulation mode is not stored in the history database.
                      </p>
                    </div>
                  )}
                </div>
                
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
                    {/* Metric Card: Average PCS Voltage */}
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
                        Average PCS Voltage
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => extractValue(item.results, 'voltages.pcs.value'))
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(2)} V`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: Average X-Band Voltage */}
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
                        Average X-Band Voltage
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => extractValue(item.results, 'voltages.xband.value'))
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(2)} V`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: PCS Pass Rate */}
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
                        PCS Pass Rate
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const testResults = testHistory
                            .map(item => item.results?.voltages?.pcs?.pass)
                            .filter(pass => pass !== undefined);
                            
                          if (testResults.length === 0) return 'N/A';
                          
                          const passCount = testResults.filter(Boolean).length;
                          const passRate = (passCount / testResults.length) * 100;
                          
                          return `${passRate.toFixed(1)}%`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: X-Band Pass Rate */}
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
                        X-Band Pass Rate
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const testResults = testHistory
                            .map(item => item.results?.voltages?.xband?.pass)
                            .filter(pass => pass !== undefined);
                            
                          if (testResults.length === 0) return 'N/A';
                          
                          const passCount = testResults.filter(Boolean).length;
                          const passRate = (passCount / testResults.length) * 100;
                          
                          return `${passRate.toFixed(1)}%`;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Export and controls buttons */}
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
                      a.download = `xband_test_history_${profileId || 'unknown'}.json`;
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
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <div style={{
              padding: '16px',
              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: isDarkMode ? '#f3f4f6' : '#111827',
                margin: 0
              }}>
                Test Details - {new Date(selectedHistoryItem.test_date).toLocaleString()}
              </h3>
              <button
                onClick={() => setSelectedHistoryItem(null)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: isDarkMode ? '#9ca3af' : '#6b7280'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '16px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    marginBottom: '4px'
                  }}>
                    Component
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: isDarkMode ? '#f3f4f6' : '#111827'
                  }}>
                    {selectedHistoryItem.component_id}
                  </div>
                </div>
                
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    marginBottom: '4px'
                  }}>
                    Test Type
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: isDarkMode ? '#f3f4f6' : '#111827'
                  }}>
                    {selectedHistoryItem.test_type || 'Standard Test'}
                  </div>
                </div>
                
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    marginBottom: '4px'
                  }}>
                    Status
                  </div>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: selectedHistoryItem.status === 'completed' 
                      ? (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5')
                      : (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                    color: selectedHistoryItem.status === 'completed'
                      ? (isDarkMode ? '#34d399' : '#047857')
                      : (isDarkMode ? '#f87171' : '#b91c1c')
                  }}>
                    {selectedHistoryItem.status === 'completed' ? 'SUCCESS' : 'FAILED'}
                  </div>
                </div>
                
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    marginBottom: '4px'
                  }}>
                    Test Date
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: isDarkMode ? '#f3f4f6' : '#111827'
                  }}>
                    {new Date(selectedHistoryItem.test_date).toLocaleString()}
                  </div>
                </div>
              </div>
              
              {/* Options Tested */}
              <div style={{ marginTop: '16px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isDarkMode ? '#f3f4f6' : '#111827',
                  marginBottom: '8px'
                }}>
                  Options Tested
                </h4>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  {selectedHistoryItem.results.testedOptions ? (
                    selectedHistoryItem.results.testedOptions.map((option: string, index: number) => (
                      <span key={index} style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: isDarkMode ? '#93c5fd' : '#3b82f6'
                      }}>
                        {option}
                      </span>
                    ))
                  ) : (
                    <span style={{
                      color: isDarkMode ? '#9ca3af' : '#6b7280',
                      fontStyle: 'italic'
                    }}>
                      No specific options recorded
                    </span>
                  )}
                </div>
              </div>
              
              {/* Voltage Measurements Summary */}
              <div style={{ marginTop: '24px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isDarkMode ? '#f3f4f6' : '#111827',
                  marginBottom: '12px'
                }}>
                  Voltage Measurements
                </h4>
                
                <div style={{
                  backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                  borderRadius: '6px',
                  padding: '16px',
                  marginBottom: '16px'
                }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '14px'
                  }}>
                    <thead style={{ 
                      color: isDarkMode ? '#d1d5db' : '#6b7280',
                      fontWeight: 500
                    }}>
                      <tr>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Parameter</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Value</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedHistoryItem.results.voltages?.pcs && (
                        <tr>
                          <td style={{ padding: '8px' }}>PCS Voltage</td>
                          <td style={{ padding: '8px' }}>{selectedHistoryItem.results.voltages.pcs.value} V</td>
                          <td style={{ padding: '8px' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              backgroundColor: selectedHistoryItem.results.voltages.pcs.pass
                                ? 'rgba(16, 185, 129, 0.2)'
                                : 'rgba(239, 68, 68, 0.2)',
                              color: selectedHistoryItem.results.voltages.pcs.pass
                                ? (isDarkMode ? '#34d399' : '#047857')
                                : (isDarkMode ? '#f87171' : '#b91c1c'),
                              fontSize: '12px'
                            }}>
                              {selectedHistoryItem.results.voltages.pcs.pass ? 'PASS' : 'FAIL'}
                            </span>
                          </td>
                        </tr>
                      )}
                      
                      {selectedHistoryItem.results.voltages?.xband && (
                        <tr>
                          <td style={{ padding: '8px' }}>X-Band Voltage</td>
                          <td style={{ padding: '8px' }}>{selectedHistoryItem.results.voltages.xband.value} V</td>
                          <td style={{ padding: '8px' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              backgroundColor: selectedHistoryItem.results.voltages.xband.pass
                                ? 'rgba(16, 185, 129, 0.2)'
                                : 'rgba(239, 68, 68, 0.2)',
                              color: selectedHistoryItem.results.voltages.xband.pass
                                ? (isDarkMode ? '#34d399' : '#047857')
                                : (isDarkMode ? '#f87171' : '#b91c1c'),
                              fontSize: '12px'
                            }}>
                              {selectedHistoryItem.results.voltages.xband.pass ? 'PASS' : 'FAIL'}
                            </span>
                          </td>
                        </tr>
                      )}
                      
                      {selectedHistoryItem.results.voltages?.xbandOff && (
                        <tr>
                          <td style={{ padding: '8px' }}>X-Band Off Voltage</td>
                          <td style={{ padding: '8px' }}>{selectedHistoryItem.results.voltages.xbandOff.value} V</td>
                          <td style={{ padding: '8px' }}>
                            <span style={{
                              display: 'inline-block',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              backgroundColor: selectedHistoryItem.results.voltages.xbandOff.pass
                                ? 'rgba(16, 185, 129, 0.2)'
                                : 'rgba(239, 68, 68, 0.2)',
                              color: selectedHistoryItem.results.voltages.xbandOff.pass
                                ? (isDarkMode ? '#34d399' : '#047857')
                                : (isDarkMode ? '#f87171' : '#b91c1c'),
                              fontSize: '12px'
                            }}>
                              {selectedHistoryItem.results.voltages.xbandOff.pass ? 'PASS' : 'FAIL'}
                            </span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div style={{ marginTop: '24px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isDarkMode ? '#f3f4f6' : '#111827',
                  marginBottom: '12px'
                }}>
                  Complete Test Results
                </h4>
                
                <div style={{
                  backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                  borderRadius: '6px',
                  padding: '16px',
                  overflow: 'auto',
                  maxHeight: '400px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: isDarkMode ? '#f3f4f6' : '#111827',
                  whiteSpace: 'pre-wrap'
                }}>
                  {JSON.stringify(selectedHistoryItem.results, null, 2)}
                </div>
              </div>
              
              {selectedHistoryItem.notes && (
                <div style={{ marginTop: '24px' }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: isDarkMode ? '#f3f4f6' : '#111827',
                    marginBottom: '12px'
                  }}>
                    Notes
                  </h4>
                  <div style={{
                    padding: '12px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderRadius: '6px',
                    color: isDarkMode ? '#f3f4f6' : '#111827'
                  }}>
                    {selectedHistoryItem.notes}
                  </div>
                </div>
              )}
              
              <div style={{ 
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <button
                  onClick={() => {
                    // Export the test details
                    const detailsJson = JSON.stringify(selectedHistoryItem, null, 2);
                    const blob = new Blob([detailsJson], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `xband_test_details_${selectedHistoryItem.id}.json`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Export Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default XBandTestPanel;