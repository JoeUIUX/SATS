// src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the OBC2-specific functions
import { runOBC2Checkout } from '@/services/checkout/obc2Checkout';
import { generateOBC2Report } from '@/services/reports/obc2Report';

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

interface OBC2TestPanelProps {
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
    firmware?: {
      major?: string;
      minor?: string;
      patch?: string;
    };
    time?: {
      before?: string;
      after?: string;
      current?: string;
      uptime?: {
        total?: string;
        session?: string;
      };
      storePeriod?: string;
      resetCount?: string;
      resetSource?: string;
    };
    can?: {
      primary?: {
        before?: any;
        after?: any;
        result?: string;
      };
      secondary?: {
        before?: any;
        after?: any;
        result?: string;
      };
    };
    voltage?: {
      sdCard?: any;
      flash?: any;
      eeprom?: any;
      payload?: any;
      uhf?: any;
      pp?: any;
      gps?: any;
      lna?: any;
    };
    memory?: {  
      sdCard?: {
        result?: string;
        before?: any;
        after?: any;
      };
      eeprom?: {
        result?: string;
        before?: any;
        after?: any;
      };
    };
    testedOptions?: string[];
  };
  status: string;
  notes?: string;
  is_simulated?: boolean;
}

export const OBC2TestPanel: React.FC<OBC2TestPanelProps> = ({
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
  const [selectedMetric, setSelectedMetric] = useState<string>('voltage.sdCard.value');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  
  // Add state variables for messages
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  
  // Determine if memory options are enabled
  const enableSdCard = options.includes('SD Card');
  const enableEeprom = options.includes('EEPROM');
  
  // API URL
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";
  
  // Available metrics for visualization - expanded based on OBC2Checkout.ts
  const metricOptions = [
    { label: 'SD Card Voltage', value: 'voltage.sdCard.value' },
    { label: 'Flash Voltage', value: 'voltage.flash.value' },
    { label: 'EEPROM Voltage', value: 'voltage.eeprom.value' },
    { label: 'Payload Voltage', value: 'voltage.payload.value' },
    { label: 'UHF Voltage', value: 'voltage.uhf.value' },
    { label: 'PP Voltage', value: 'voltage.pp.value' },
    { label: 'GPS Voltage', value: 'voltage.gps.value' },
    { label: 'LNA Voltage', value: 'voltage.lna.value' },
    { label: 'Payload Current', value: 'voltage.payload.current' },
    { label: 'UHF Current', value: 'voltage.uhf.current' },
    { label: 'PP Current', value: 'voltage.pp.current' },
    { label: 'LNA Current', value: 'voltage.lna.current' },
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
    setDetectedSimulation(useSimulation);
    setSimulationMode(useSimulation);
    
    if (useSimulation) {
      console.log("🟢 Using simulation mode for testing");
    } else {
      console.log("🔴 Using real socket mode for testing");
    }
  }, [sock]);
  
// Create a more responsive version of the useEffect hook
useEffect(() => {
  // This will run whenever isInitialRun changes
  if (isInitialRun) {
    console.log(`🔄 OBC-1 Test Panel received isInitialRun=true signal, running test`);
    // Reset state for a fresh run
    setIsRunning(false); 
    setProgress(0);
    setError(null);
    setHasRunTest(false);
    
    // Start test after a short delay to ensure state is updated
    setTimeout(() => {
      startTest();
    }, 50);
  }
}, [isInitialRun]); // Only depend on isInitialRun
  
  // Add function to fetch test history
  const fetchTestHistory = async (limit: number = 30) => {
    if (!profileId) {
      console.log("Cannot fetch history: No profile ID provided");
      return;
    }
    
    setHistoryLoading(true);
    try {
      console.log(`Fetching test history for profile ${profileId} and component OBC-2`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=OBC-2`, {
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
            const hasVoltageData = item.results.voltage && 
              (item.results.voltage.sdCard || item.results.voltage.flash || 
               item.results.voltage.eeprom || item.results.voltage.payload || 
               item.results.voltage.uhf);
            
            // Must have some CAN data or time data
            const hasCanData = item.results.can && 
              (item.results.can.primary || item.results.can.secondary);
            const hasTimeData = item.results.time && 
              (item.results.time.before || item.results.time.current);
            
            // Consider it a real test if it has voltage data AND (can data OR time data)
            return hasVoltageData && (hasCanData || hasTimeData);
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
        const localHistoryKey = `obc2_real_history_${profileId}`;
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
            component_id: "OBC-2",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: `SD Card: ${enableSdCard ? "Enabled" : "Disabled"}, EEPROM: ${enableEeprom ? "Enabled" : "Disabled"}`,
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
        const localHistoryKey = `obc2_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "OBC-2",
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
      setCurrentStep('Starting OBC-2 Checkout');
      
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
              if (param.includes("FW_Ver")) {
                const version = param.includes("Major") ? "1" : 
                               param.includes("Minor") ? "2" : "3";
                return `${param}=${version}`;
              } else if (param.includes("3V3") || param.includes("3v3")) {
                // Voltage values in mV
                return `${param}=${3300 + Math.floor(Math.random() * 100)}`;
              } else if (param.includes("temp") || param.includes("Temp")) {
                // Temperature values
                return `${param}=${20 + Math.floor(Math.random() * 10)}`;
              } else if (param.includes("Time")) {
                // Time values
                return `${param}=${new Date().toISOString()}`;
              } else if (param.includes("Uptime")) {
                // Uptime values
                return `${param}=${3600 + Math.floor(Math.random() * 3600)}`;
              } else if (param.includes("InterComm")) {
                // CAN communication counters
                return `${param}=${10 + Math.floor(Math.random() * 20)}`;
              } else if (param.includes("SD_") || param.includes("EEPROM_")) {
                // Memory counters
                return `${param}=${5 + Math.floor(Math.random() * 10)}`;
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
      
      // Run the OBC-2 checkout test with progress updates
      const results = await runOBC2Checkout(sock, 
        { sdCard: enableSdCard, eeprom: enableEeprom }, 
        (step, percent) => {
          setCurrentStep(step);
          setProgress(percent);
        }
      );
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Save result to history - determine simulation status
      const wasSimulated = isForceSimulation || detectedSimulation;
      await saveTestResult(results, 'completed', wasSimulated);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running OBC-2 checkout:', error);
      setError(error instanceof Error ? error.message : String(error));
      
      // Save failed result to history if we have partial results
      if (results) {
        const wasSimulated = isForceSimulation || detectedSimulation;
        await saveTestResult(results, 'error', wasSimulated);
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
      const reportFile = await generateOBC2Report(results);
      alert(`OBC-2 report saved: ${reportFile}`);
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
          component: 'OBC-2'  // Limit only OBC-2 records
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
    if (!window.confirm("Are you sure you want to clear ALL test history for OBC-2?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=OBC-2`, {
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
        localStorage.removeItem(`obc2_real_history_${profileId}`);
        localStorage.removeItem(`obc2_sim_history_${profileId}`);
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
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                OBC-2 Test Status
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
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  Memory Testing
                </div>
                <span style={{ display: 'flex', gap: '8px' }}>
                  <span className={`${styles.parameterValue} ${
                    enableSdCard ? styles.colorCompleted : styles.colorWaiting
                  }`}>
                    SD CARD: {enableSdCard ? 'ENABLED' : 'DISABLED'}
                  </span>
                  <span className={`${styles.parameterValue} ${
                    enableEeprom ? styles.colorCompleted : styles.colorWaiting
                  }`}>
                    EEPROM: {enableEeprom ? 'ENABLED' : 'DISABLED'}
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
            
            {results && (
              <div className="space-y-4 mt-4">
                {/* Firmware Version */}
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
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      Firmware Information
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation} />
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
                          OBC-2 Firmware Version
                        </div>
                        <div 
                          className={styles.infoValue}
                          style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}
                        >
                          {results.firmware.major}.{results.firmware.minor}.{results.firmware.patch}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Time Information */}
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
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Time Synchronization
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
                        </tr>
                      </thead>
                      <tbody className={styles.tableBody}>
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Before Update</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.before} UTC</td>
                        </tr>
                        
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>After Update</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.after} UTC</td>
                        </tr>
                        
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Current Time</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.current} UTC</td>
                        </tr>
                        
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Total Uptime</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.uptime.total} sec</td>
                        </tr>
                        
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Session Uptime</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.uptime.session} sec</td>
                        </tr>
                        
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Store Period</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.storePeriod} sec</td>
                        </tr>
                        
                        <tr>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Reset Count</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.resetCount}</td>
                        </tr>
                        
                        <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Reset Source</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.resetSource}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* CAN Communication Test Results */}
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
                      CAN Communication Test
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation} />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                      <div
                        style={{
                          flex: 1,
                          padding: '10px',
                          backgroundColor: isDarkMode ? '#0c4a6e' : '#e0f2fe',
                          borderRadius: '8px',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Primary CAN</div>
                        <span className={`${styles.statusBadge} ${results.can.primary.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                              }`} style={{ fontSize: '14px', padding: '5px 10px' }}>
                                {results.can.primary.result}
                              </span>
                            </div>

                            <div
                              style={{
                                flex: 1,
                                padding: '10px',
                                backgroundColor: isDarkMode ? '#0c4a6e' : '#e0f2fe',
                                borderRadius: '8px',
                                textAlign: 'center'
                              }}
                            >
                              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Secondary CAN</div>
                              <span className={`${styles.statusBadge} ${
                                results.can.secondary.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                              }`} style={{ fontSize: '14px', padding: '5px 10px' }}>
                                {results.can.secondary.result}
                              </span>
                            </div>
                          </div>

                          {/* CAN Communications Details (collapsible) */}
                          <details style={{ marginTop: '15px', borderRadius: '8px', overflow: 'hidden', border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}` }}>
                            <summary style={{ 
                              padding: '10px 15px', 
                              backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
                              cursor: 'pointer',
                              fontWeight: 500,
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                            }}>
                              Show CAN Communications Details
                            </summary>
                            <div style={{ padding: '15px' }}>
                              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>Primary CAN</h4>
                              
                              <h5 style={{ fontSize: '13px', fontWeight: 500, marginTop: '15px', marginBottom: '5px' }}>Before Test:</h5>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ fontSize: '12px' }}>
                                  <div>TX HKP: {results.can.primary.before.tx[0]}</div>
                                  <div>TX CFG: {results.can.primary.before.tx[1]}</div>
                                  <div>TX MET: {results.can.primary.before.tx[2]}</div>
                                  <div>TX ETC: {results.can.primary.before.tx[3]}</div>
                                  <div>TX UHF: {results.can.primary.before.tx[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>ACK HKP: {results.can.primary.before.ack[0]}</div>
                                  <div>ACK CFG: {results.can.primary.before.ack[1]}</div>
                                  <div>ACK MET: {results.can.primary.before.ack[2]}</div>
                                  <div>ACK ETC: {results.can.primary.before.ack[3]}</div>
                                  <div>ACK UHF: {results.can.primary.before.ack[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Timeout HKP: {results.can.primary.before.timeout[0]}</div>
                                  <div>Timeout CFG: {results.can.primary.before.timeout[1]}</div>
                                  <div>Timeout MET: {results.can.primary.before.timeout[2]}</div>
                                  <div>Timeout ETC: {results.can.primary.before.timeout[3]}</div>
                                  <div>Timeout UHF: {results.can.primary.before.timeout[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Error HKP: {results.can.primary.before.error[0]}</div>
                                  <div>Error CFG: {results.can.primary.before.error[1]}</div>
                                  <div>Error MET: {results.can.primary.before.error[2]}</div>
                                  <div>Error ETC: {results.can.primary.before.error[3]}</div>
                                  <div>Error UHF: {results.can.primary.before.error[4]}</div>
                                </div>
                              </div>
                              
                              <h5 style={{ fontSize: '13px', fontWeight: 500, marginTop: '15px', marginBottom: '5px' }}>After Test:</h5>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ fontSize: '12px' }}>
                                  <div>TX HKP: {results.can.primary.after.tx[0]}</div>
                                  <div>TX CFG: {results.can.primary.after.tx[1]}</div>
                                  <div>TX MET: {results.can.primary.after.tx[2]}</div>
                                  <div>TX ETC: {results.can.primary.after.tx[3]}</div>
                                  <div>TX UHF: {results.can.primary.after.tx[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>ACK HKP: {results.can.primary.after.ack[0]}</div>
                                  <div>ACK CFG: {results.can.primary.after.ack[1]}</div>
                                  <div>ACK MET: {results.can.primary.after.ack[2]}</div>
                                  <div>ACK ETC: {results.can.primary.after.ack[3]}</div>
                                  <div>ACK UHF: {results.can.primary.after.ack[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Timeout HKP: {results.can.primary.after.timeout[0]}</div>
                                  <div>Timeout CFG: {results.can.primary.after.timeout[1]}</div>
                                  <div>Timeout MET: {results.can.primary.after.timeout[2]}</div>
                                  <div>Timeout ETC: {results.can.primary.after.timeout[3]}</div>
                                  <div>Timeout UHF: {results.can.primary.after.timeout[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Error HKP: {results.can.primary.after.error[0]}</div>
                                  <div>Error CFG: {results.can.primary.after.error[1]}</div>
                                  <div>Error MET: {results.can.primary.after.error[2]}</div>
                                  <div>Error ETC: {results.can.primary.after.error[3]}</div>
                                  <div>Error UHF: {results.can.primary.after.error[4]}</div>
                                </div>
                              </div>
                              
                              <h4 style={{ fontSize: '14px', fontWeight: 600, marginTop: '20px', marginBottom: '10px' }}>Secondary CAN</h4>
                              
                              <h5 style={{ fontSize: '13px', fontWeight: 500, marginTop: '15px', marginBottom: '5px' }}>Before Test:</h5>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ fontSize: '12px' }}>
                                  <div>TX HKP: {results.can.secondary.before.tx[0]}</div>
                                  <div>TX CFG: {results.can.secondary.before.tx[1]}</div>
                                  <div>TX MET: {results.can.secondary.before.tx[2]}</div>
                                  <div>TX ETC: {results.can.secondary.before.tx[3]}</div>
                                  <div>TX UHF: {results.can.secondary.before.tx[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>ACK HKP: {results.can.secondary.before.ack[0]}</div>
                                  <div>ACK CFG: {results.can.secondary.before.ack[1]}</div>
                                  <div>ACK MET: {results.can.secondary.before.ack[2]}</div>
                                  <div>ACK ETC: {results.can.secondary.before.ack[3]}</div>
                                  <div>ACK UHF: {results.can.secondary.before.ack[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Timeout HKP: {results.can.secondary.before.timeout[0]}</div>
                                  <div>Timeout CFG: {results.can.secondary.before.timeout[1]}</div>
                                  <div>Timeout MET: {results.can.secondary.before.timeout[2]}</div>
                                  <div>Timeout ETC: {results.can.secondary.before.timeout[3]}</div>
                                  <div>Timeout UHF: {results.can.secondary.before.timeout[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Error HKP: {results.can.secondary.before.error[0]}</div>
                                  <div>Error CFG: {results.can.secondary.before.error[1]}</div>
                                  <div>Error MET: {results.can.secondary.before.error[2]}</div>
                                  <div>Error ETC: {results.can.secondary.before.error[3]}</div>
                                  <div>Error UHF: {results.can.secondary.before.error[4]}</div>
                                </div>
                              </div>
                              
                              <h5 style={{ fontSize: '13px', fontWeight: 500, marginTop: '15px', marginBottom: '5px' }}>After Test:</h5>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ fontSize: '12px' }}>
                                  <div>TX HKP: {results.can.secondary.after.tx[0]}</div>
                                  <div>TX CFG: {results.can.secondary.after.tx[1]}</div>
                                  <div>TX MET: {results.can.secondary.after.tx[2]}</div>
                                  <div>TX ETC: {results.can.secondary.after.tx[3]}</div>
                                  <div>TX UHF: {results.can.secondary.after.tx[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>ACK HKP: {results.can.secondary.after.ack[0]}</div>
                                  <div>ACK CFG: {results.can.secondary.after.ack[1]}</div>
                                  <div>ACK MET: {results.can.secondary.after.ack[2]}</div>
                                  <div>ACK ETC: {results.can.secondary.after.ack[3]}</div>
                                  <div>ACK UHF: {results.can.secondary.after.ack[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Timeout HKP: {results.can.secondary.after.timeout[0]}</div>
                                  <div>Timeout CFG: {results.can.secondary.after.timeout[1]}</div>
                                  <div>Timeout MET: {results.can.secondary.after.timeout[2]}</div>
                                  <div>Timeout ETC: {results.can.secondary.after.timeout[3]}</div>
                                  <div>Timeout UHF: {results.can.secondary.after.timeout[4]}</div>
                                </div>
                                <div style={{ fontSize: '12px' }}>
                                  <div>Error HKP: {results.can.secondary.after.error[0]}</div>
                                  <div>Error CFG: {results.can.secondary.after.error[1]}</div>
                                  <div>Error MET: {results.can.secondary.after.error[2]}</div>
                                  <div>Error ETC: {results.can.secondary.after.error[3]}</div>
                                  <div>Error UHF: {results.can.secondary.after.error[4]}</div>
                                </div>
                              </div>
                            </div>
                          </details>

                          <div style={{ fontSize: '13px', color: isDarkMode ? '#94a3b8' : '#64748b', marginTop: '10px' }}>
                            CAN communication test verifies data transfer between OBC-1 and OBC-2 over both primary and secondary CAN buses. 
                            The test measures successful transmission and acknowledgement of HKP, CFG, MET, ETC, and UHF packets.
                          </div>
                        </div>
                      </div>

                      {/* Voltage Readings Card */}
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
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            Voltage & Current Measurements
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
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>SD Card 3V3</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltage.sdCard.value} mV</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.sdCard.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.sdCard.result}
                                  </span>
                                </td>
                              </tr>
                              
                              <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Flash 3V3</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltage.flash.value} mV</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.flash.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.flash.result}
                                  </span>
                                </td>
                              </tr>
                              
                              <tr>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>EEPROM 3V3</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltage.eeprom.value} mV</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.eeprom.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.eeprom.result}
                                  </span>
                                </td>
                              </tr>
                              
                              <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Payload 3V3</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltage.payload.value} mV</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.payload.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.payload.result}
                                  </span>
                                </td>
                              </tr>
                              
                              <tr>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Payload Current</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }} colSpan={2}>{results.voltage.payload.current} mA</td>
                              </tr>
                              
                              <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>UHF 3V3</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltage.uhf.value} mV</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.uhf.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.uhf.result}
                                  </span>
                                </td>
                              </tr>
                              
                              <tr>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>UHF Current</td>
                                <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }} colSpan={2}>{results.voltage.uhf.current} mA</td>
                              </tr>
                            </tbody>
                          </table>

                          {/* Additional Voltage Details Collapsible */}
                          <details style={{ marginTop: '15px', borderRadius: '8px', overflow: 'hidden', border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}` }}>
                            <summary style={{ 
                              padding: '10px 15px', 
                              backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
                              cursor: 'pointer',
                              fontWeight: 500,
                              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                            }}>
                              Show Additional Voltage Details
                            </summary>
                            <div style={{ padding: '15px' }}>
                              <table className={styles.table}>
                                <thead className={styles.tableHeader}>
                                  <tr>
                                    <th>Parameter</th>
                                    <th>Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>PP 3V3 Voltage</td>
                                    <td>{results.voltage.pp.value} mV</td>
                                  </tr>
                                  <tr>
                                    <td>PP 3V3 Current</td>
                                    <td>{results.voltage.pp.current} mA</td>
                                  </tr>
                                  <tr>
                                    <td>GPS 3V3 Voltage</td>
                                    <td>{results.voltage.gps.value} mV</td>
                                  </tr>
                                  <tr>
                                    <td>LNA Voltage</td>
                                    <td>{results.voltage.lna.value} mV</td>
                                  </tr>
                                  <tr>
                                    <td>LNA Current</td>
                                    <td>{results.voltage.lna.current} mA</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </details>
                        </div>
                      </div>
                      
                      {/* Memory Test Results (if enabled) */}
                      {(enableSdCard || enableEeprom) && (
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
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                              </svg>
                              Memory Test Results
                            </h3>
                            
                            {/* Add simulation badge */}
                            <SimulationBadge isSimulation={isForceSimulation} />
                          </div>
                          
                          <div className={styles.cardContent}>
                            {enableSdCard && (
                              <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                  <h4 style={{ margin: 0 }}>SD Card Test</h4>
                                  <span className={`${styles.statusBadge} ${
                                    results.memory.sdCard.result === "[PASS]" ? styles.colorCompleted : 
                                    results.memory.sdCard.result === "Not tested" ? styles.colorWaiting : styles.colorError
                                  }`}>
                                    {results.memory.sdCard.result}
                                  </span>
                                </div>
                                
                                {results.memory.sdCard.result !== "Not tested" && (
                                  <table className={styles.table} style={{ marginTop: '10px' }}>
                                    <thead className={styles.tableHeader}>
                                      <tr>
                                        <th>Counter</th>
                                        <th>Before Test</th>
                                        <th>After Test</th>
                                        <th>Difference</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Write Success</td>
                                        <td>{results.memory.sdCard.before.writeSuccess}</td>
                                        <td>{results.memory.sdCard.after.writeSuccess}</td>
                                        <td>{isNaN(Number(results.memory.sdCard.after.writeSuccess) - Number(results.memory.sdCard.before.writeSuccess)) ? 
                                          "0" : (Number(results.memory.sdCard.after.writeSuccess) - Number(results.memory.sdCard.before.writeSuccess))}</td>
                                      </tr>
                                      <tr>
                                        <td>Read Success</td>
                                        <td>{results.memory.sdCard.before.readSuccess}</td>
                                        <td>{results.memory.sdCard.after.readSuccess}</td>
                                        <td>{isNaN(Number(results.memory.sdCard.after.readSuccess) - Number(results.memory.sdCard.before.readSuccess)) ? 
                                          "0" : (Number(results.memory.sdCard.after.readSuccess) - Number(results.memory.sdCard.before.readSuccess))}</td>
                                      </tr>
                                      <tr>
                                        <td>Write Fail</td>
                                        <td>{results.memory.sdCard.before.writeFail}</td>
                                        <td>{results.memory.sdCard.after.writeFail}</td>
                                        <td>{isNaN(Number(results.memory.sdCard.after.writeFail) - Number(results.memory.sdCard.before.writeFail)) ? 
                                          "0" : (Number(results.memory.sdCard.after.writeFail) - Number(results.memory.sdCard.before.writeFail))}</td>
                                      </tr>
                                      <tr>
                                        <td>Read Fail</td>
                                        <td>{results.memory.sdCard.before.readFail}</td>
                                        <td>{results.memory.sdCard.after.readFail}</td>
                                        <td>{isNaN(Number(results.memory.sdCard.after.readFail) - Number(results.memory.sdCard.before.readFail)) ? 
                                          "0" : (Number(results.memory.sdCard.after.readFail) - Number(results.memory.sdCard.before.readFail))}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                )}
                              </div>
                            )}

                            {enableEeprom && (
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                  <h4 style={{ margin: 0 }}>EEPROM Test</h4>
                                  <span className={`${styles.statusBadge} ${
                                    results.memory.eeprom.result === "[PASS]" ? styles.colorCompleted : 
                                    results.memory.eeprom.result === "Not tested" ? styles.colorWaiting : styles.colorError
                                  }`}>
                                    {results.memory.eeprom.result}
                                  </span>
                                </div>
                                
                                {results.memory.eeprom.result !== "Not tested" && (
                                  <table className={styles.table} style={{ marginTop: '10px' }}>
                                    <thead className={styles.tableHeader}>
                                      <tr>
                                        <th>Counter</th>
                                        <th>Before Test</th>
                                        <th>After Test</th>
                                        <th>Difference</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Write Success</td>
                                        <td>{results.memory.eeprom.before.writeSuccess}</td>
                                        <td>{results.memory.eeprom.after.writeSuccess}</td>
                                        <td>{isNaN(Number(results.memory.eeprom.after.writeSuccess) - Number(results.memory.eeprom.before.writeSuccess)) ? 
                                          "0" : (Number(results.memory.eeprom.after.writeSuccess) - Number(results.memory.eeprom.before.writeSuccess))}</td>
                                      </tr>
                                      <tr>
                                        <td>Read Success</td>
                                        <td>{results.memory.eeprom.before.readSuccess}</td>
                                        <td>{results.memory.eeprom.after.readSuccess}</td>
                                        <td>{isNaN(Number(results.memory.eeprom.after.readSuccess) - Number(results.memory.eeprom.before.readSuccess)) ? 
                                          "0" : (Number(results.memory.eeprom.after.readSuccess) - Number(results.memory.eeprom.before.readSuccess))}</td>
                                      </tr>
                                      <tr>
                                        <td>Write Fail</td>
                                        <td>{results.memory.eeprom.before.writeFail}</td>
                                        <td>{results.memory.eeprom.after.writeFail}</td>
                                        <td>{isNaN(Number(results.memory.eeprom.after.writeFail) - Number(results.memory.eeprom.before.writeFail)) ? 
                                          "0" : (Number(results.memory.eeprom.after.writeFail) - Number(results.memory.eeprom.before.writeFail))}</td>
                                      </tr>
                                      <tr>
                                        <td>Read Fail</td>
                                        <td>{results.memory.eeprom.before.readFail}</td>
                                        <td>{results.memory.eeprom.after.readFail}</td>
                                        <td>{isNaN(Number(results.memory.eeprom.after.readFail) - Number(results.memory.eeprom.before.readFail)) ? 
                                          "0" : (Number(results.memory.eeprom.after.readFail) - Number(results.memory.eeprom.before.readFail))}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Overall Test Summary */}
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
                              : "linear-gradient(to right, #ccfbf1, #d1fae5)",
                            color: isDarkMode ? "#ccfbf1" : "#0f766e"
                          }}
                        >
                          <h3 className={styles.cardTitle}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" clipRule="evenodd" />
</svg>
                            Test Summary
                          </h3>
                          
                          {/* Add simulation badge */}
                          <SimulationBadge isSimulation={isForceSimulation} />
                        </div>
                        
                        <div className={styles.cardContent}>
                          <table className={styles.table}>
                            <thead className={styles.tableHeader}>
                              <tr>
                                <th>Test</th>
                                <th>Result</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Primary CAN</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.can.primary.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.can.primary.result}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Secondary CAN</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.can.secondary.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.can.secondary.result}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>SD Card Voltage</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.sdCard.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.sdCard.result}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Flash Voltage</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.flash.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.flash.result}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>EEPROM Voltage</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.eeprom.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.eeprom.result}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Payload Voltage</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.payload.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.payload.result}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>UHF Voltage</td>
                                <td>
                                  <span className={`${styles.statusBadge} ${
                                    results.voltage.uhf.result === "[PASS]" ? styles.colorCompleted : styles.colorError
                                  }`}>
                                    {results.voltage.uhf.result}
                                  </span>
                                </td>
                              </tr>
                              {enableSdCard && (
                                <tr>
                                  <td>SD Card Memory Test</td>
                                  <td>
                                    <span className={`${styles.statusBadge} ${
                                      results.memory.sdCard.result === "[PASS]" ? styles.colorCompleted : 
                                      results.memory.sdCard.result === "Not tested" ? styles.colorWaiting : styles.colorError
                                    }`}>
                                      {results.memory.sdCard.result}
                                    </span>
                                  </td>
                                </tr>
                              )}
                              {enableEeprom && (
                                <tr>
                                  <td>EEPROM Memory Test</td>
                                  <td>
                                    <span className={`${styles.statusBadge} ${
                                      results.memory.eeprom.result === "[PASS]" ? styles.colorCompleted : 
                                      results.memory.eeprom.result === "Not tested" ? styles.colorWaiting : styles.colorError
                                    }`}>
                                      {results.memory.eeprom.result}
                                    </span>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                          
                          <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <div style={{ 
                              fontSize: '14px', 
                              fontWeight: 600, 
                              marginBottom: '10px', 
                              color: 
                              Object.values(results.voltage).every((v: any) => v.result === "[PASS]") && 
                              results.can.primary.result === "[PASS]" && 
                                results.can.secondary.result === "[PASS]" &&
                                (!enableSdCard || results.memory.sdCard.result === "[PASS]") &&
                                (!enableEeprom || results.memory.eeprom.result === "[PASS]")
                                  ? (isDarkMode ? '#10b981' : '#059669')
                                  : (isDarkMode ? '#ef4444' : '#dc2626')
                            }}>
                               {Object.values(results.voltage).every((v: any) => v.result === "[PASS]") &&
                               results.can.primary.result === "[PASS]" && 
                               results.can.secondary.result === "[PASS]" &&
                               (!enableSdCard || results.memory.sdCard.result === "[PASS]") &&
                               (!enableEeprom || results.memory.eeprom.result === "[PASS]")
                                ? "All tests passed successfully!"
                                : "Some tests failed. See details above."}
                            </div>
                          </div>
                        </div>
                      </div>

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
                OBC-2 Test History
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
                      data={prepareChartData()}
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
                  
                  {/* Information panel before table */}
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
                      {/* Average SD Card Voltage */}
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
                          Average SD Card Voltage
                        </div>
                        <div style={{ 
                          fontSize: '18px',
                          fontWeight: 600,
                          color: isDarkMode ? '#e5e7eb' : '#111827'
                        }}>
                          {(() => {
                            const values = testHistory
                              .map(item => extractValue(item.results, 'voltage.sdCard.value'))
                              .filter(v => v !== null) as number[];
                              
                            if (values.length === 0) return 'N/A';
                            
                            const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                            return `${avg.toFixed(2)} mV`;
                          })()}
                        </div>
                      </div>
                      
                      {/* CAN Communication Success */}
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
                          CAN Communication Success
                        </div>
                        <div style={{ 
                          fontSize: '18px',
                          fontWeight: 600,
                          color: isDarkMode ? '#e5e7eb' : '#111827'
                        }}>
                          {(() => {
                            const primaryResults = testHistory
                              .map(item => item.results?.can?.primary?.result === "[PASS]")
                              .filter(pass => pass !== undefined);
                              
                            const secondaryResults = testHistory
                              .map(item => item.results?.can?.secondary?.result === "[PASS]")
                              .filter(pass => pass !== undefined);
                            
                            const allResults = [...primaryResults, ...secondaryResults];
                            
                            if (allResults.length === 0) return 'N/A';
                            
                            const passCount = allResults.filter(Boolean).length;
                            const passRate = (passCount / allResults.length) * 100;
                            
                            return `${passRate.toFixed(1)}%`;
                          })()}
                        </div>
                      </div>
                      
                      {/* Voltage Pass Rate */}
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
                          Voltage Pass Rate
                        </div>
                        <div style={{ 
                          fontSize: '18px',
                          fontWeight: 600,
                          color: isDarkMode ? '#e5e7eb' : '#111827'
                        }}>
                          {(() => {
                            const voltageResults = testHistory.flatMap(item => {
                              const voltage = item.results?.voltage;
                              if (!voltage) return [];
                              
                              return [
                                voltage.sdCard?.result === "[PASS]",
                                voltage.flash?.result === "[PASS]",
                                voltage.eeprom?.result === "[PASS]",
                                voltage.payload?.result === "[PASS]",
                                voltage.uhf?.result === "[PASS]"
                              ].filter(result => result !== undefined);
                            });
                            
                            if (voltageResults.length === 0) return 'N/A';
                            
                            const passCount = voltageResults.filter(Boolean).length;
                            const passRate = (passCount / voltageResults.length) * 100;
                            
                            return `${passRate.toFixed(1)}%`;
                          })()}
                        </div>
                      </div>
                      
                      {/* Test Success Rate */}
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
                        a.download = `obc2_test_history_${profileId || 'unknown'}.json`;
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
  }