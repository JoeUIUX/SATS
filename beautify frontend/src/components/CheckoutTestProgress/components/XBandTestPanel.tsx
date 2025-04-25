// src/components/CheckoutTestProgress/components/XBandTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styling as OBC1TestPanel

// Import the X-Band checkout function
import { runXBandCheckout } from '@/services/checkout/xbandCheckout';
import { generateXBandReport } from '@/services/reports/xbandReport';

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
  }

// Main XBandTestPanel component
export const XBandTestPanel: React.FC<XBandTestPanelProps> = ({
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
  const [results, setResults] = useState<XBandTestResults | null>(null);
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
      
      // Run the X-Band checkout test with progress updates
      const checkoutResults = await runXBandCheckout(sock, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Add the list of tested options to the results
      const finalResults = {
        ...checkoutResults,
        testedOptions: options
      };
      
      // Save the results locally
      setResults(finalResults);
      
      // Notify parent that the test is complete
      onTestComplete(finalResults);
      
    } catch (error) {
      console.error('Error running X-Band checkout:', error);
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
    </div>
  );
};