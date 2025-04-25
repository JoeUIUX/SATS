// src/components/CheckoutTestProgress/components/LEOCAMTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the OBC1 test panel styles

// Import the LEOCAM-specific functions
import { runLEOCAMCheckout } from '@/services/checkout/leocamCheckout';
import { generateLEOCAMReport } from '@/services/reports/leocamReport';

// Reuse the SimulationBadge component for consistency
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
}

export const LEOCAMTestPanel: React.FC<LEOCAMTestPanelProps> = ({
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
      
      // Run the LEOCAM checkout test with progress updates
      const results = await runLEOCAMCheckout(sock, options, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Add the list of tested options to the results
      results.testedOptions = options;
      
      // Save the results locally
      setResults(results);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running LEOCAM checkout:', error);
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
      const reportFile = await generateLEOCAMReport(results);
      alert(`LEOCAM report saved: ${reportFile}`);
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
                hasRunTest ? '#059669' : '#10b981',
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
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                LEOCAM Voltage Test Results
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
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Device</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Voltage</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Current</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Initial Status</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Final Status</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltageTests.gps.voltage} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltageTests.gps.current} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.voltageTests.gps.passInitial ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.voltageTests.gps.passInitial ? "PASS" : "FAIL"}
                      </span>
                    </td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.voltageTests.gps.passFinal ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.voltageTests.gps.passFinal ? "PASS" : "FAIL"}
                      </span>
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PCS</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltageTests.pcs.voltage} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltageTests.pcs.current} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.voltageTests.pcs.passInitial ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.voltageTests.pcs.passInitial ? "PASS" : "FAIL"}
                      </span>
                    </td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.voltageTests.pcs.passFinal ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.voltageTests.pcs.passFinal ? "PASS" : "FAIL"}
                      </span>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>LEOCAM</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltageTests.leocam.voltage} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltageTests.leocam.current} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.voltageTests.leocam.passInitial ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.voltageTests.leocam.passInitial ? "PASS" : "FAIL"}
                      </span>
                    </td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.voltageTests.leocam.passFinal ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.voltageTests.leocam.passFinal ? "PASS" : "FAIL"}
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
                  ? "linear-gradient(to right, #064e3b, #065f46)" 
                  : "linear-gradient(to right, #ecfdf5, #d1fae5)",
                color: isDarkMode ? "#d1fae5" : "#065f46"
              }}
            >
              <h3 className={styles.cardTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                LEOCAM Configuration
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Sensor Mode</div>
                  <span>{results.leocamConfig.sensorMode || 'N/A'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Sensor Power</div>
                  <span>{results.leocamConfig.sensorPower || 'N/A'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Frame Rate</div>
                  <span>{results.leocamConfig.sensorLineFrameRate || 'N/A'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Bit Depth</div>
                  <span>{results.leocamConfig.sensorBitDepth || 'N/A'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                    gridColumn: "span 2"
                  }}
                  >
                  <div className={styles.parameterLabel}>ROI Settings</div>
                  <span>{results.leocamConfig.sensorRoi.join(', ') || 'N/A'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Gain Analog</div>
                  <span>{results.leocamConfig.sensorGainAnalog || 'N/A'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Scan Direction</div>
                  <span>{results.leocamConfig.sensorScanDirection || 'N/A'}</span>
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
                  ? "linear-gradient(to right, #075985, #0369a1)" 
                  : "linear-gradient(to right, #e0f2fe, #bae6fd)",
                color: isDarkMode ? "#bae6fd" : "#0369a1"
              }}
            >
              <h3 className={styles.cardTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                </svg>
                LEOCAM Telemetry Data
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div 
                className={styles.parameterBox}
                style={{
                  backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                  borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                  marginBottom: "16px"
                }}
              >
                <div className={styles.parameterLabel}>Health Status</div>
                <span className={`${styles.statusBadge} ${
                  results.leocamTelemetry.healthStatus === "0" || results.leocamTelemetry.healthStatus === 0 ? 
                  styles.colorCompleted : styles.colorError
                }`}>
                  {results.leocamTelemetry.healthStatus === "0" || results.leocamTelemetry.healthStatus === 0 ? 
                   "HEALTHY" : "ERROR"}
                </span>
              </div>
              
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: 'bold',
                marginBottom: '10px',
                color: isDarkMode ? "#d1d5db" : "#374151"
              }}>
                Temperature Readings
              </h4>
              
              <div className={styles.tempGrid}>
                {/* CPU Temperatures */}
                {results.leocamTelemetry.cpuTemperatures.map((temp: string, index: number) => (
                  <div 
                    key={`cpu-temp-${index}`}
                    className={styles.tempCard}
                    style={{
                      backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                      borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                    }}
                  >
                    <div 
                      className={styles.tempLabel}
                      style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}
                    >
                      CPU {index + 1}
                    </div>
                    <div 
                      className={styles.tempValue}
                      style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}
                    >
                      {temp}°C
                    </div>
                  </div>
                ))}
                
                {/* Internal Temperatures */}
                {results.leocamTelemetry.internalTemperatures.map((temp: string, index: number) => (
                  <div 
                    key={`int-temp-${index}`}
                    className={styles.tempCard}
                    style={{
                      backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                      borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                    }}
                  >
                    <div 
                      className={styles.tempLabel}
                      style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}
                    >
                      Internal {index + 1}
                    </div>
                    <div 
                      className={styles.tempValue}
                      style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}
                    >
                      {temp}°C
                    </div>
                  </div>
                ))}
                
                {/* Sensor Temperatures */}
                {results.leocamTelemetry.sensorTemperatures.map((temp: string, index: number) => (
                  <div 
                    key={`sensor-temp-${index}`}
                    className={styles.tempCard}
                    style={{
                      backgroundColor: isDarkMode ? "rgba(146, 64, 14, 0.1)" : "#fffbeb",
                      borderColor: isDarkMode ? "rgba(252, 211, 77, 0.3)" : "#fcd34d"
                    }}
                  >
                    <div 
                      className={styles.tempLabel}
                      style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}
                    >
                      Sensor {index + 1}
                    </div>
                    <div 
                      className={styles.tempValue}
                      style={{
                        color: isDarkMode ? "#fcd34d" : "#92400e"
                      }}
                    >
                      {temp}°C
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Storage Section */}
              {(options.includes('Disk Operations') || results.leocamTelemetry.diskUsed.length > 0) && (
                <>
                  <h4 style={{ 
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    margin: '16px 0 10px',
                    color: isDarkMode ? "#d1d5db" : "#374151"
                  }}>
                    Storage Information
                  </h4>
                  
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
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Disk</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Usage (KB)</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Temp (°C)</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Lifetime (h)</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                      {results.leocamTelemetry.diskUsed.map((usage: string, index: number) => (
                        <tr 
                          key={`disk-${index}`} 
                          className={index % 2 === 1 ? styles.tableRowAlt : ''}
                          style={{ backgroundColor: index % 2 === 1 && isDarkMode ? "#111827" : undefined }}
                        >
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Disk {index + 1}</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{usage}</td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            {results.leocamTelemetry.diskTemperatures[index] || 'N/A'}
                          </td>
                          <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                            {results.leocamTelemetry.diskLifetimes[index] || 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              
              {/* Statistics Section */}
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: 'bold',
                margin: '16px 0 10px',
                color: isDarkMode ? "#d1d5db" : "#374151"
              }}>
                Command Statistics
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Commands</div>
                  <span>{results.leocamStatistics.commandCount || '0'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Acknowledges</div>
                  <span>{results.leocamStatistics.acknowledgeCount || '0'}</span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Timeouts</div>
                  <span className={parseInt(results.leocamStatistics.timeoutCount || '0') > 0 ? styles.colorError : ''}>
                    {results.leocamStatistics.timeoutCount || '0'}
                  </span>
                </div>
                
                <div 
                  className={styles.parameterBox}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                    borderColor: isDarkMode ? "#374151" : "#e5e7eb"
                  }}
                >
                  <div className={styles.parameterLabel}>Errors</div>
                  <span className={parseInt(results.leocamStatistics.errorCount || '0') > 0 ? styles.colorError : ''}>
                    {results.leocamStatistics.errorCount || '0'}
                  </span>
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
    </div>
  );
};