// src/components/CheckoutTestProgress/components/OBC1TestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { runOBC1CheckoutWithDetection } from '@/services/checkout/obc1Checkout';
import { isUsingSimulation } from '@/utils/mccUtils';

// Import the OBC1-specific functions
import { runOBC1Checkout } from '@/services/checkout/obc1Checkout';
import { generateOBC1Report } from '@/services/reports/obc1Report';

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

interface OBC1TestPanelProps {
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
    vi?: {
      d3v3?: any;
      ps3v3Obc2?: any;
      ps5vObc2?: any;
    };
    temperatures?: {
      thruster1?: string;
      thruster2?: string;
      leocam?: string[];
    };
    firmware?: {
      major: string;
      minor: string;
      patch: string;
    };
    kernel?: {
      uptime: string;
      loads: {
        oneMinute: string;
        fiveMinute: string;
        fifteenMinute: string;
      };
      memory: {
        totalRam: string;
        freeRam: string;
        sharedRam: string;
        bufferRam: string;
        totalSwap: string;
        freeSwap: string;
        memUnit: string;
        totalHigh: string;
        freeHigh: string;
      };
      processes: string;
    };
    fpga?: {
      voltages: {
        vccPspll: string;
        vccPsbatt: string;
        vccint: string;
        vccbram: string;
        vccaux: string;
      };
      temperatures: {
        psTemp: string;
        remoteTemp: string;
        plTemp: string;
      };
    };
    emmc?: {
      emmc0States: string[];
      emmc1States: string[];
    };
    testedOptions?: string[];
  };
  status: string;
  notes?: string;
  is_simulated?: boolean; 
}

export const OBC1TestPanel: React.FC<OBC1TestPanelProps> = ({
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
  const [selectedMetric, setSelectedMetric] = useState<string>('vi.d3v3.value');
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<TestHistoryItem | null>(null);
  const [detectedSimulation, setDetectedSimulation] = useState(false);
  // Add state variables for messages
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);
  const [limitMessage, setLimitMessage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    firmware: true,
    voltage: true,
    temperature: true,
    fpga: true,
    kernel: true,
    emmc: options.includes('eMMC'),
    rawParameters: false // Default to collapsed

  });
  
  // Available metrics for visualization
  const metricOptions = [
    { label: '3V3 D Voltage', value: 'vi.d3v3.value' },
    { label: 'PS 3V3 OBC-2 Voltage', value: 'vi.ps3v3Obc2.value' },
    { label: 'PS 5V OBC-2 Voltage', value: 'vi.ps5vObc2.value' },
    { label: 'Thruster Temp 1', value: 'temperatures.thruster1' },
    { label: 'Thruster Temp 2', value: 'temperatures.thruster2' },
    { label: 'FPGA PS Temp', value: 'fpga.temperatures.psTemp' },
    { label: 'FPGA Remote Temp', value: 'fpga.temperatures.remoteTemp' },
    { label: 'FPGA PL Temp', value: 'fpga.temperatures.plTemp' },
  ];
  
  // Determine if eMMC option is enabled
  const enableEmmc = options.includes('eMMC');
  
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
      console.log(`Fetching test history for profile ${profileId} and component OBC-1`);
      
      const response = await fetch(`${API_URL}/test-results/${profileId}?component=OBC-1`, {
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
            const hasVoltageData = item.results.vi && 
              (item.results.vi.d3v3 || item.results.vi.ps3v3Obc2 || item.results.vi.ps5vObc2);
            
            // Must have some temperature data
            const hasTempData = item.results.temperatures && 
              (item.results.temperatures.thruster1 || 
               item.results.temperatures.thruster2 || 
               (item.results.temperatures.leocam && item.results.temperatures.leocam.length > 0));
            
            // Consider it a real test if it has both voltage and temperature data
            return hasVoltageData && hasTempData;
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
        const localHistoryKey = `obc1_real_history_${profileId}`;
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
            component_id: "OBC-1",
            test_type: options.join(','),
            results: resultsWithFlag,
            status: status,
            notes: enableEmmc ? "eMMC Test Enabled" : "eMMC Test Disabled",
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
        const localHistoryKey = `obc1_sim_history_${profileId}`;
        try {
          const existingHistory = JSON.parse(localStorage.getItem(localHistoryKey) || '[]');
          existingHistory.push({
            id: Date.now(),
            component_id: "OBC-1",
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
      setCurrentStep('Starting OBC-1 Checkout');
      
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
              } else if (param.includes("3V3") || param.includes("5V")) {
                // Voltage values in mV
                return `${param}=${3300 + Math.floor(Math.random() * 100)}`;
              } else if (param.includes("temp") || param.includes("Temp")) {
                // Temperature values
                return `${param}=${20 + Math.floor(Math.random() * 10)}`;
              } else if (param.includes("eMMC")) {
                return `${param}=1`;
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
      
      // Run the OBC-1 checkout test with the enhanced detection version
      // This will accurately track if simulation was used at any point
      const { results, usedSimulation } = await runOBC1CheckoutWithDetection(sock, enableEmmc, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Update the detected simulation state based on the test results
      setDetectedSimulation(usedSimulation);
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Save result to history - use the accurate simulation detection
      await saveTestResult(results, 'completed', usedSimulation);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running test:', error);
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
      const reportFile = await generateOBC1Report(results);
      alert(`OBC-1 report saved: ${reportFile}`);
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
          component: 'OBC-1'  // Limit only OBC-1 records
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
    if (!window.confirm("Are you sure you want to clear ALL test history for OBC-1?\nThis action cannot be undone.")) {
      return;
    }
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_URL}/test-results/clear/${profileId}?component=OBC-1`, {
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
        localStorage.removeItem(`obc1_real_history_${profileId}`);
        localStorage.removeItem(`obc1_sim_history_${profileId}`);
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

  // Function to toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

  // Helper function to check voltage ranges
  const isVoltageInRange = (value: string, isThreeVolt: boolean): boolean => {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) return false;
    
    if (isThreeVolt) {
      // 3.3V typical range (3000-3600 mV)
      return numVal >= 3000 && numVal <= 3600;
    } else {
      // 5V typical range (4750-5250 mV)
      return numVal >= 4750 && numVal <= 5250;
    }
  };

  // Function to format the voltage display with color based on range
  const formatVoltage = (value: string, isThreeVolt: boolean, isDark: boolean) => {
    const isValid = isVoltageInRange(value, isThreeVolt);
    
    return (
      <span style={{
        color: isValid 
          ? (isDark ? '#10b981' : '#059669') 
          : (isDark ? '#ef4444' : '#b91c1c')
      }}>
        {parseFloat(value).toFixed(0)} mV
      </span>
    );
  };

  // Function to format temperature for display
  const formatTemp = (value: string, isDark: boolean) => {
    const numVal = parseFloat(value);
    // Detecting extreme temperatures (example thresholds)
    const isExtreme = numVal < -10 || numVal > 80;
    
    return (
      <span style={{
        color: isExtreme
          ? (isDark ? '#ef4444' : '#b91c1c')
          : (isDark ? '#fcd34d' : '#92400e')
      }}>
        {numVal.toFixed(1)}°C
      </span>
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
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                OBC-1 Test Status
                
                {/* Add simulation indicator directly in the title */}
                {(isForceSimulation || detectedSimulation) && (
                  <span style={{
                    fontSize: '12px',
                    padding: '2px 8px',
                    marginLeft: '8px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    color: '#f59e0b'
                  }}>
                    SIMULATION MODE
                  </span>
                )}
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
                      backgroundColor: isRunning 
                        ? (isDarkMode ? '#4f46e5' : '#3b82f6') 
                        : (progress === 100 ? '#10b981' : '#3b82f6')
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
          
          {/* Current Test Results (only shown if we have results) */}
          {results && (
            <div className="space-y-4 mt-4">
              {/* Collapsible Section: Firmware Version */}
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
                    color: isDarkMode ? "#d1fae5" : "#065f46",
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('firmware')}
                >
                  <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Firmware Version
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        transform: expandedSections.firmware ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out'
                      }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                {expandedSections.firmware && (
                  <div className={styles.cardContent}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        padding: '12px 16px',
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                        borderRadius: '8px',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <div style={{ fontSize: '13px', fontWeight: 500, color: isDarkMode ? '#9ca3af' : '#6b7280', marginBottom: '4px' }}>
                          Version
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 600, color: isDarkMode ? '#f3f4f6' : '#111827' }}>
                          {results.firmware.major}.{results.firmware.minor}.{results.firmware.patch}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Collapsible Section: Voltages */}
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
                      ? "linear-gradient(to right, #1e40af, #3b82f6)" 
                      : "linear-gradient(to right, #dbeafe, #eff6ff)",
                    color: isDarkMode ? "#bfdbfe" : "#1e40af",
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('voltage')}
                >
                  <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Voltage & Current Summary
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        transform: expandedSections.voltage ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out'
                      }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                {expandedSections.voltage && (
                  <div className={styles.cardContent}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                      gap: '16px',
                    }}>
                      {/* 3V3 D */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          OBC-1 3V3 D
                        </div>
                        <span className={styles.parameterValue} style={{
                          backgroundColor: results.vi.d3v3.pass ? 
                            (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5') : 
                            (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                          color: results.vi.d3v3.pass ?
                            (isDarkMode ? '#10b981' : '#059669') :
                            (isDarkMode ? '#ef4444' : '#b91c1c')
                        }}>
                          {parseFloat(results.vi.d3v3.value).toFixed(0)} mV
                        </span>
                      </div>
                      
                      {/* PS 3V3 OBC-2 */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          PS 3V3 OBC-2
                        </div>
                        <span className={styles.parameterValue} style={{
                          backgroundColor: results.vi.ps3v3Obc2.pass ? 
                            (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5') : 
                            (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                          color: results.vi.ps3v3Obc2.pass ?
                            (isDarkMode ? '#10b981' : '#059669') :
                            (isDarkMode ? '#ef4444' : '#b91c1c')
                        }}>
                          {parseFloat(results.vi.ps3v3Obc2.value).toFixed(0)} mV
                        </span>
                      </div>
                      
                      {/* PS 5V OBC-2 */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          PS 5V OBC-2
                        </div>
                        <span className={styles.parameterValue} style={{
                          backgroundColor: results.vi.ps5vObc2.pass ? 
                            (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5') : 
                            (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                          color: results.vi.ps5vObc2.pass ?
                            (isDarkMode ? '#10b981' : '#059669') :
                            (isDarkMode ? '#ef4444' : '#b91c1c')
                        }}>
                          {parseFloat(results.vi.ps5vObc2.value).toFixed(0)} mV
                        </span>
                      </div>
                      
                      {/* PS 5V OBC-2 Current */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path d="M13 7H7v6h6V7z" />
                            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                          </svg>
                          PS 5V OBC-2 Current
                        </div>
                        <span className={styles.parameterValue}>
                          {parseFloat(results.vi.ps5vObc2I).toFixed(0)} mA
                        </span>
                      </div>
                      
                      {/* PS 3V3 OBC-2 Current */}
                      <div className={styles.parameterBox} style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                      }}>
                        <div className={styles.parameterLabel}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                            <path d="M13 7H7v6h6V7z" />
                            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                          </svg>
                          PS 3V3 OBC-2 Current
                        </div>
                        <span className={styles.parameterValue}>
                          {parseFloat(results.vi.ps3v3Obc2I).toFixed(0)} mA
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
{/* Collapsible Section: Temperature Sensors */}
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
                    color: isDarkMode ? "#fef3c7" : "#92400e",
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('temperature')}
                >
                  <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Temperature Readings
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        transform: expandedSections.temperature ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out'
                      }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                {expandedSections.temperature && (
                  <div className={styles.cardContent}>
                    <div className={styles.tempGrid}>
                      {/* Thruster Temp 1 */}
                      <div className={styles.tempCard} style={{
                        backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                        borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                      }}>
                        <div className={styles.tempLabel} style={{
                          color: isDarkMode ? "#fcd34d" : "#92400e"
                        }}>
                          Thruster 1
                        </div>
                        <div className={styles.tempValue} style={{
                          color: isDarkMode ? "#fcd34d" : "#92400e"
                        }}>
                          {parseFloat(results.temperatures.thruster1).toFixed(1)}°C
                        </div>
                      </div>
                      
                      {/* Thruster Temp 2 */}
                      <div className={styles.tempCard} style={{
                        backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                        borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                      }}>
                        <div className={styles.tempLabel} style={{
                          color: isDarkMode ? "#fcd34d" : "#92400e"
                        }}>
                          Thruster 2
                        </div>
                        <div className={styles.tempValue} style={{
                          color: isDarkMode ? "#fcd34d" : "#92400e"
                        }}>
                          {parseFloat(results.temperatures.thruster2).toFixed(1)}°C
                        </div>
                      </div>
                      
                      {/* LEOCAM Temps */}
                      {results.temperatures.leocam.map((temp: string, i: number) => (
                        <div key={i} className={styles.tempCard} style={{
                          backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                          borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                        }}>
                          <div className={styles.tempLabel} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            LEOCAM {i+1}
                          </div>
                          <div className={styles.tempValue} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            {parseFloat(temp).toFixed(1)}°C
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Collapsible Section: FPGA Voltages & Temperatures */}
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
                      : "linear-gradient(to right, #ede9fe, #f5f3ff)",
                    color: isDarkMode ? "#ede9fe" : "#6d28d9",
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('fpga')}
                >
                  <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                    FPGA Voltages & Temperatures
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      style={{ 
                        width: '16px', 
                        height: '16px',
                        transform: expandedSections.fpga ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out'
                      }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                {expandedSections.fpga && (
                  <div className={styles.cardContent}>
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                        Voltages
                      </h4>
                      
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '12px',
                      }}>
                        {/* vcc_pspll */}
                        <div className={styles.parameterBox} style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        }}>
                          <div className={styles.parameterLabel}>
                            vcc_pspll
                          </div>
                          <span className={styles.parameterValue}>
                            {results.fpga.voltages.vccPspll} V
                          </span>
                        </div>
                        
                        {/* vcc_psbatt */}
                        <div className={styles.parameterBox} style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        }}>
                          <div className={styles.parameterLabel}>
                            vcc_psbatt
                          </div>
                          <span className={styles.parameterValue}>
                            {results.fpga.voltages.vccPsbatt} V
                          </span>
                        </div>
                        
                        {/* vccint */}
                        <div className={styles.parameterBox} style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        }}>
                          <div className={styles.parameterLabel}>
                            vccint
                          </div>
                          <span className={styles.parameterValue}>
                            {results.fpga.voltages.vccint} V
                          </span>
                        </div>
                        
                        {/* vccbram */}
                        <div className={styles.parameterBox} style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        }}>
                          <div className={styles.parameterLabel}>
                            vccbram
                          </div>
                          <span className={styles.parameterValue}>
                            {results.fpga.voltages.vccbram} V
                          </span>
                        </div>
                        
                        {/* vccaux */}
                        <div className={styles.parameterBox} style={{
                          backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                        }}>
                          <div className={styles.parameterLabel}>
                            vccaux
                          </div>
                          <span className={styles.parameterValue}>
                            {results.fpga.voltages.vccaux} V
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                        Temperatures
                      </h4>
                      
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '12px',
                      }}>
                        {/* PS Temp */}
                        <div className={styles.tempCard} style={{
                          backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                          borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                        }}>
                          <div className={styles.tempLabel} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            PS Temperature
                          </div>
                          <div className={styles.tempValue} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            {results.fpga.temperatures.psTemp} °C
                          </div>
                        </div>
                        
                        {/* Remote Temp */}
                        <div className={styles.tempCard} style={{
                          backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                          borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                        }}>
                          <div className={styles.tempLabel} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            Remote Temperature
                          </div>
                          <div className={styles.tempValue} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            {results.fpga.temperatures.remoteTemp} °C
                          </div>
                        </div>
                        
                        {/* PL Temp */}
                        <div className={styles.tempCard} style={{
                          backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                          borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                        }}>
                          <div className={styles.tempLabel} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            PL Temperature
                          </div>
                          <div className={styles.tempValue} style={{
                            color: isDarkMode ? "#fcd34d" : "#92400e"
                          }}>
                            {results.fpga.temperatures.plTemp} °C
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Collapsible Section: Kernel Info */}
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
                      ? "linear-gradient(to right, #0f766e,#134e4a)" 
                        : "linear-gradient(to right, #ccfbf1, #ecfdf5)",
                      color: isDarkMode ? "#ccfbf1" : "#134e4a",
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleSection('kernel')}
                  >
                    <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      Kernel Information
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        style={{ 
                          width: '16px', 
                          height: '16px',
                          transform: expandedSections.kernel ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease-in-out'
                        }}
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    
                    {/* Add simulation badge */}
                    <SimulationBadge isSimulation={isForceSimulation} />
                  </div>
                  
                  {expandedSections.kernel && (
                    <div className={styles.cardContent}>
                      <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                          System Information
                        </h4>
                        
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280', width: '50%' }}>
                                Uptime
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {results.kernel.uptime} s
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                1 minute load average
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {results.kernel.loads.oneMinute}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                5 minute load average
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {results.kernel.loads.fiveMinute}
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                15 minute load average
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {results.kernel.loads.fifteenMinute}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                Number of processes
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {results.kernel.processes}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                          Memory Information
                        </h4>
                        
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280', width: '50%' }}>
                                Total usable main memory
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {parseInt(results.kernel.memory.totalRam).toLocaleString()} bytes
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                Available memory
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {parseInt(results.kernel.memory.freeRam).toLocaleString()} bytes
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                Shared memory
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {parseInt(results.kernel.memory.sharedRam).toLocaleString()} bytes
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                Buffer memory
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {parseInt(results.kernel.memory.bufferRam).toLocaleString()} bytes
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                Total swap space
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {parseInt(results.kernel.memory.totalSwap).toLocaleString()} bytes
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                                Available swap space
                              </td>
                              <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                {parseInt(results.kernel.memory.freeSwap).toLocaleString()} bytes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Collapsible Section: eMMC Test Results (conditional based on enableEmmc) */}
                {enableEmmc && (
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
                          ? "linear-gradient(to right, #4f46e5, #6366f1)" 
                          : "linear-gradient(to right, #e0e7ff, #eef2ff)",
                        color: isDarkMode ? "#e0e7ff" : "#4f46e5",
                        cursor: 'pointer'
                      }}
                      onClick={() => toggleSection('emmc')}
                    >
                      <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                          <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        eMMC Test Results
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          style={{ 
                            width: '16px', 
                            height: '16px',
                            transform: expandedSections.emmc ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out'
                          }}
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </h3>
                      
{/* Add simulation badge */}
<SimulationBadge isSimulation={isForceSimulation} />
                    </div>
                    
                    {expandedSections.emmc && (
                      <div className={styles.cardContent}>
                        {results.emmc.emmc0States && results.emmc.emmc0States.length > 0 && results.emmc.emmc0States[0] !== 'N.A.' ? (
                          <div>
                            <div style={{ marginBottom: '16px' }}>
                              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                eMMC State Transitions
                              </h4>
                              
                              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                                <thead>
                                  <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                                    <th style={{ padding: '8px 12px', textAlign: 'left', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                                      Test State
                                    </th>
                                    <th style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                                      eMMC-0
                                    </th>
                                    <th style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                                      eMMC-1
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      Before ON eMMC-0
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc0States[0]}
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc1States[0]}
                                    </td>
                                  </tr>
                                  <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                                    <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      After ON eMMC-0
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc0States[1]}
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc1States[1]}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      After OFF eMMC-0
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc0States[2]}
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc1States[2]}
                                    </td>
                                  </tr>
                                  <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                                    <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      Before ON eMMC-1
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc0States[3]}
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc1States[3]}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      After ON eMMC-1
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc0States[4]}
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc1States[4]}
                                    </td>
                                  </tr>
                                  <tr style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
                                    <td style={{ padding: '8px 12px', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      After OFF eMMC-1
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc0States[5]}
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, color: isDarkMode ? '#e5e7eb' : '#111827' }}>
                                      {results.emmc.emmc1States[5]}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ) : (
                          <div style={{ textAlign: 'center', padding: '16px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                            eMMC test was skipped or no data available
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Collapsible Section: Raw Parameters */}
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
        ? "linear-gradient(to right, #1e3a8a, #2563eb)" 
        : "linear-gradient(to right, #dbeafe, #eff6ff)",
      color: isDarkMode ? "#bfdbfe" : "#1e3a8a",
      cursor: 'pointer'
    }}
    onClick={() => toggleSection('rawParameters')}
  >
    <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
      Raw Parameter Values
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor" 
        style={{ 
          width: '16px', 
          height: '16px',
          transform: expandedSections.rawParameters ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease-in-out'
        }}
      >
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </h3>
    
    {/* Add simulation badge */}
    <SimulationBadge isSimulation={isForceSimulation} />
  </div>
  
  {expandedSections.rawParameters && (
    <div className={styles.cardContent}>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontSize: '14px', color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
          Displaying all parameters with their exact names as read from the hardware or simulation.
        </p>
      </div>
      
      {/* Firmware Parameters */}
      <h4 style={{ 
        fontSize: '14px', 
        fontWeight: 'bold',
        margin: '16px 0 10px',
        color: isDarkMode ? "#d1d5db" : "#374151"
      }}>
        Firmware Parameters
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
          {["OBC1_FW_Ver_Major", "OBC1_FW_Ver_Minor", "OBC1_FW_Ver_Patch"].map((param, index) => (
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
      
      {/* Kernel Parameters */}
      <h4 style={{ 
        fontSize: '14px', 
        fontWeight: 'bold',
        margin: '20px 0 10px',
        color: isDarkMode ? "#d1d5db" : "#374151"
      }}>
        Kernel Parameters
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
          {[
            "OBC1_Sys_uptime", "OBC1_Sys_loads_1m", "OBC1_Sys_loads_5m", "OBC1_Sys_loads_15m",
            "OBC1_Sys_totalram", "OBC1_Sys_freeram", "OBC1_Sys_sharedram", "OBC1_Sys_bufferram",
            "OBC1_Sys_totalswap", "OBC1_Sys_freeswap", "OBC1_Sys_procs", "OBC1_Sys_pad",
            "OBC1_Sys_totalhigh", "OBC1_Sys_freehigh", "OBC1_Sys_mem_unit"
          ].map((param, index) => (
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
      
      {/* FPGA Parameters */}
      <h4 style={{ 
        fontSize: '14px', 
        fontWeight: 'bold',
        margin: '20px 0 10px',
        color: isDarkMode ? "#d1d5db" : "#374151"
      }}>
        FPGA Parameters
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
          {[
            "OBC1_vcc_pspll", "OBC1_vcc_psbatt", "OBC1_vccint", "OBC1_vccbram", "OBC1_vccaux",
            "OBC1_vcc_psddr_pll", "OBC1_vccpsintfp_ddr", "OBC1_vccint1", "OBC1_vccaux1", "OBC1_vccvrefp",
            "OBC1_vccvrefn", "OBC1_vccbram1", "OBC1_vccplintlp", "OBC1_vccplintfp", "OBC1_vccplaux",
            "OBC1_vccams", "OBC1_vccpsintlp", "OBC1_vccpsintfp", "OBC1_vccpsaux", "OBC1_vccpsddr",
            "OBC1_vccpsio3", "OBC1_vccpsio0", "OBC1_vccpsio1", "OBC1_vccpsio2", "OBC1_psmgtravcc",
            "OBC1_psmgtravtt", "OBC1_vccams1", "OBC1_ps_temp", "OBC1_remote_temp", "OBC1_pl_temp"
          ].map((param, index) => (
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
      
      {/* Voltage and Current Parameters */}
      <h4 style={{ 
        fontSize: '14px', 
        fontWeight: 'bold',
        margin: '20px 0 10px',
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
          {[
            "OBC1_3V3_D", "OBC1_PS_3V3_OBC2_V", "OBC1_PS_5V_OBC2_V", 
            "OBC1_PS_5V_OBC2_I", "OBC1_PS_3V3_OBC2_I"
          ].map((param, index) => (
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
      
      {/* Temperature Parameters */}
      <h4 style={{ 
        fontSize: '14px', 
        fontWeight: 'bold',
        margin: '20px 0 10px',
        color: isDarkMode ? "#d1d5db" : "#374151"
      }}>
        Temperature Parameters
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
          {[
            "OBC1_thruster_ch1_T", "OBC1_thruster_ch2_T", 
            "OBC1_leocam_ch1_T", "OBC1_leocam_ch2_T",
            "OBC1_leocam_ch3_T", "OBC1_leocam_ch4_T"
          ].map((param, index) => (
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
      
      {/* eMMC Parameters (if enabled) */}
      {enableEmmc && (
        <>
          <h4 style={{ 
            fontSize: '14px', 
            fontWeight: 'bold',
            margin: '20px 0 10px',
            color: isDarkMode ? "#d1d5db" : "#374151"
          }}>
            eMMC Parameters
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
              {/* Show the raw values for all states of eMMC */}
{Object.entries(results.rawParameters || {})
  .filter(([key]) => key.includes('eMMC'))
  .map(([param, value], index) => (
    <tr 
      key={param} 
      className={index % 2 === 1 ? styles.tableRowAlt : ''}
      style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
    >
      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{param}</td>
      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb", padding: '8px 12px' }}>{String(value) || 'N/A'}</td>
    </tr>
  ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )}
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
              OBC-1 Test History
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
                    metricLabel={metricOptions.find(m => m.value === selectedMetric)?.label || 'Value'}
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
                
                {/* Test History Table - using the imported TestHistoryTable component */}
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
                    {/* Metric Card: Average 3V3 D Voltage */}
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
                        Average 3V3 D Voltage
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const values = testHistory
                            .map(item => extractValue(item.results, 'vi.d3v3.value'))
                            .filter(v => v !== null) as number[];
                            
                          if (values.length === 0) return 'N/A';
                          
                          const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                          return `${avg.toFixed(2)} mV`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: 3V3 Pass Rate */}
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
                        3V3 Pass Rate
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          const testResults = testHistory
                            .map(item => item.results?.vi?.d3v3?.pass)
                            .filter(pass => pass !== undefined);
                            
                          if (testResults.length === 0) return 'N/A';
                          
                          const passCount = testResults.filter(Boolean).length;
                          const passRate = (passCount / testResults.length) * 100;
                          
                          return `${passRate.toFixed(1)}%`;
                        })()}
                      </div>
                    </div>
                    
                    {/* Metric Card: Average Temperature */}
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
                        Avg. Thruster Temp
                      </div>
                      <div style={{ 
                        fontSize: '18px',
                        fontWeight: 600,
                        color: isDarkMode ? '#e5e7eb' : '#111827'
                      }}>
                        {(() => {
                          // Get all thruster1 temperatures from history
                          const temps1 = testHistory
                            .map(item => extractValue(item.results, 'temperatures.thruster1'))
                            .filter(v => v !== null) as number[];
                            
                          // Get all thruster2 temperatures from history
                          const temps2 = testHistory
                            .map(item => extractValue(item.results, 'temperatures.thruster2'))
                            .filter(v => v !== null) as number[];
                            
                          if (temps1.length === 0 && temps2.length === 0) return 'N/A';
                          
                          // Calculate average of all readings
                          const allTemps = [...temps1, ...temps2];
                          const avg = allTemps.reduce((sum, v) => sum + v, 0) / allTemps.length;
                          
                          return `${avg.toFixed(1)} °C`;
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
                  {/* Clear All History Button - New */}
                  <button 
                    onClick={clearAllTestHistory}
                    style={{
                      backgroundColor: '#dc2626', /* Deeper red for more dangerous action */
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
                      a.download = `obc1_test_history_${profileId || 'unknown'}.json`;
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