// File: src/components/CheckoutTestProgress/components/UHFTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the UHF-specific functions
import { runUHFCheckout } from '@/services/checkout/uhfCheckout';
import { generateUHFReport } from '@/services/reports/uhfReport';

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

interface UHFTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
}

export const UHFTestPanel: React.FC<UHFTestPanelProps> = ({
  options,
  sock,
  onTestComplete,
  onTestError,
  onTestStart,
  isInitialRun
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasRunTest, setHasRunTest] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isForceSimulation, setIsForceSimulation] = useState(false);
  
  // Determine if transmitter/receiver options are enabled
  const enableTransmitter = options.includes('Transmitter Test');
  const enableReceiver = options.includes('Receiver Test');
  
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
      setCurrentStep('Starting UHF Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common UHF parameters
            return parameters.map(param => {
              // Return specific values for different UHF parameters
              if (param.startsWith("OBC2_Uhf_")) {
                if (param.includes("Temperature")) {
                  return `${param}=${20 + Math.floor(Math.random() * 15)}`; // Temperature between 20-35
                } else if (param.includes("Count")) {
                  return `${param}=${Math.floor(Math.random() * 1000)}`; // Count between 0-999
                } else if (param.includes("Bytes")) {
                  return `${param}=${Math.floor(Math.random() * 10000)}`; // Bytes between 0-9999
                } else if (param.includes("Rssi")) {
                  return `${param}=${-70 - Math.floor(Math.random() * 30)}`; // RSSI between -70 and -100
                } else {
                  return `${param}=${Math.floor(Math.random() * 100)}`; // Generic value 0-99
                }
              } else if (param.startsWith("UHF_")) {
                if (param.includes("freq")) {
                  return `${param}=437500000`; // UHF frequency 437.5 MHz
                } else if (param.includes("baud")) {
                  return `${param}=9600`; // 9600 bps
                } else if (param.includes("temp")) {
                  return `${param}=40`; // Max temp 40 degrees
                } else if (param.includes("time")) {
                  return `${param}=60`; // Time values 60 seconds
                } else {
                  return `${param}=${Math.floor(Math.random() * 10)}`; // Generic setting 0-9
                }
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
      
      // Run the UHF checkout test with progress updates
      const results = await runUHFCheckout(sock, 
        { testTransmitter: enableTransmitter, testReceiver: enableReceiver }, 
        (step, percent) => {
          setCurrentStep(step);
          setProgress(percent);
        }
      );
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running UHF checkout:', error);
      setError(error instanceof Error ? error.message : String(error));
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
      const reportFile = await generateUHFReport(results);
      alert(`UHF report saved: ${reportFile}`);
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
            UHF Test Status
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
              borderColor: isDarkMode ? "#374151" : "#e5e7eb",
              marginTop: '10px'
            }}
          >
            <div className={styles.parameterLabel}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              UHF Testing
            </div>
            <span style={{ display: 'flex', gap: '8px' }}>
              <span className={`${styles.parameterValue} ${
                enableTransmitter ? styles.colorCompleted : styles.colorWaiting
              }`}>
                TX: {enableTransmitter ? 'ENABLED' : 'DISABLED'}
              </span>
              <span className={`${styles.parameterValue} ${
                enableReceiver ? styles.colorCompleted : styles.colorWaiting
              }`}>
                RX: {enableReceiver ? 'ENABLED' : 'DISABLED'}
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
          {/* UHF Telemetry Card */}
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
                UHF Telemetry
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
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Board Temperature</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.boardTemperature} °C</td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PA Temperature</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.paTemperature} °C</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Last RSSI</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.lastRssi}</td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Last RF Error</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.lastRferr}</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>TX Count (Current)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.txCount} packets</td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>RX Count (Current)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.rxCount} packets</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>TX Bytes (Current)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.txBytes} bytes</td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>RX Bytes (Current)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.rxBytes} bytes</td>
                  </tr>

                  <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Active Configuration</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.activeConf}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Boot Count</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.bootCount}</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Background RSSI</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.bgndRssi}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>TX Duty</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.txDuty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* UHF System Configuration Card */}
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
                ? "linear-gradient(to right, #065f46, #059669)" 
                : "linear-gradient(to right, #ecfdf5, #d1fae5)",
              color: isDarkMode ? "#d1fae5" : "#065f46"
            }}
          >
            <h3 className={styles.cardTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              UHF System Configuration
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
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>RSSI Offset</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.rssiOffset}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Maximum Temperature</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.maxTemp} °C</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>I2C Enabled</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.i2cEn}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>CAN Enabled</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.canEn}</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>TX Power Level</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.txPwr}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Max TX Time</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.maxTxTime} seconds</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Max Idle Time</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.maxIdleTime} seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* UHF Receiver Configuration Card */}
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
                <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              UHF Receiver Configuration
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
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Frequency</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.frequency} Hz</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Baudrate</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.baudrate} bps</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Modulation Index</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.modindex}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>RX Guard</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.guard} ms</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Framing Mode</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.mode}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Bandwidth</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.bandwidth} Hz</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>AFC Range</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.afcrange} Hz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* UHF Transmitter Configuration Card */}
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
                ? "linear-gradient(to right, #7e22ce, #a855f7)" 
                : "linear-gradient(to right, #f3e8ff, #e9d5ff)",
              color: isDarkMode ? "#e9d5ff" : "#7e22ce"
            }}
          >
            <h3 className={styles.cardTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              UHF Transmitter Configuration
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
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Frequency</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.frequency} Hz</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Baudrate</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.baudrate} bps</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Modulation Index</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.modindex}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>TX Guard</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.guard} ms</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Framing Mode</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.mode}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Preamble Length</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.preamblen} bytes</td>
                </tr>
                
                <tr>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Preamble Flags</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.preambflags}</td>
                </tr>
                
                <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PA Level</td>
                  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.paLevel}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
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
  </div>
);
};