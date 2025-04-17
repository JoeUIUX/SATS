// src/components/CheckoutTestProgress/components/OBC2TestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the OBC2-specific functions
import { runOBC2Checkout } from '@/services/checkout/obc2Checkout';
import { generateOBC2Report } from '@/services/reports/obc2Report';

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
}

export const OBC2TestPanel: React.FC<OBC2TestPanelProps> = ({
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
  
  // Determine if memory options are enabled
  const enableSdCard = options.includes('SD Card');
  const enableEeprom = options.includes('EEPROM');
  
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
  
  // Track if we've run tests at least once
  useEffect(() => {
    // Only run test automatically if this is the initial run and we haven't run it yet
    if (isInitialRun && !hasRunTest && !isRunning) {
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
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running OBC-2 checkout:', error);
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
      const reportFile = await generateOBC2Report(results);
      alert(`OBC-2 report saved: ${reportFile}`);
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
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
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
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Uptime Total</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.uptime.total} sec</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Uptime Session</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.time.uptime.session} sec</td>
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
                    ? "linear-gradient(to right, #4c1d95, #6d28d9)" 
                    : "linear-gradient(to right, #f5f3ff, #ede9fe)",
                  color: isDarkMode ? "#ede9fe" : "#6d28d9"
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
<span className={`${styles.statusBadge} ${
  results.can.primary.result === "[PASS]" ? styles.colorCompleted : styles.colorError
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

<div style={{ fontSize: '13px', color: isDarkMode ? '#94a3b8' : '#64748b', marginTop: '10px' }}>
CAN communication test verifies data transfer between OBC-1 and OBC-2 over both primary and secondary CAN buses. 
The test measures successful transmission and acknowledgement of HKP, CFG, MET, ETC, and UHF packets.
</div>
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