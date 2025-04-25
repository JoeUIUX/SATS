// src/components/CheckoutTestProgress/components/GPSTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the GPS-specific functions
import { runGPSCheckout } from '@/services/checkout/gpsCheckout';
import { generateGPSReport } from '@/services/reports/gpsReport';

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

interface GPSTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
}

export const GPSTestPanel: React.FC<GPSTestPanelProps> = ({
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
      setCurrentStep('Starting GPS Checkout');
      
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
              if (param.includes("_GPS_5V_V")) {
                return `${param}=5.05`; // 5V supply voltage
              } else if (param.includes("_GPS_5V_I")) {
                return `${param}=0.120`; // Current in Amps
              } else if (param.includes("_GPS_3V3_V")) {
                return `${param}=3350`; // 3.3V supply in mV
              } else if (param.includes("_Gps_TxCount")) {
                return `${param}=${Math.floor(Math.random() * 10)}`; // TX count
              } else if (param.includes("_Gps_RxCount")) {
                return `${param}=${Math.floor(Math.random() * 10)}`; // RX count
              } else if (param.includes("_Gps_TxBytes")) {
                return `${param}=${Math.floor(Math.random() * 1000)}`; // TX bytes
              } else if (param.includes("_Gps_RxBytes")) {
                return `${param}=${Math.floor(Math.random() * 1000)}`; // RX bytes
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
      
      // Run the GPS checkout test with progress updates
      const results = await runGPSCheckout(sock, (step, percent) => {
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
      console.error('Error running GPS checkout:', error);
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
      const reportFile = await generateGPSReport(results);
      alert(`GPS report saved: ${reportFile}`);
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
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            GPS Test Status
          </h3>
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.progressContainer}>
            <div className={styles.progressLabel}>
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
                  No specific options selected. Running standard GPS test.
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
            <span style={{
              display: 'inline-block',
              padding: '4px 8px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: isForceSimulation ? 
                (isDarkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0.1)') : 
                (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'),
              color: isForceSimulation ? 
                (isDarkMode ? '#fbbf24' : '#d97706') : 
                (isDarkMode ? '#34d399' : '#059669')
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
          {/* GPS Power Status Card */}
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
                GPS Power Status
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
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS 5V Supply</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltages.gps5V.value} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: results.voltages.gps5V.pass ? 
                          (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)') : 
                          (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)'),
                        color: results.voltages.gps5V.pass ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626')
                      }}>
                        {results.voltages.gps5V.pass ? "PASS" : "FAIL"}
                      </span>
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS 5V Current</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltages.gps5VCurrent.value} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>-</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS 3.3V Supply</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.voltages.gps3V3.value} mV</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: results.voltages.gps3V3.pass ? 
                          (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)') : 
                          (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)'),
                        color: results.voltages.gps3V3.pass ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626')
                      }}>
                        {results.voltages.gps3V3.pass ? "PASS" : "FAIL"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Command Test Card */}
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
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                GPS Command Test
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: '500', fontSize: '14px', color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                  Command Test Status
                </div>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  backgroundColor: results.stats.commandCheck.pass ? 
                    (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)') : 
                    (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)'),
                  color: results.stats.commandCheck.pass ? 
                    (isDarkMode ? '#34d399' : '#059669') : 
                    (isDarkMode ? '#f87171' : '#dc2626')
                }}>
                  {results.stats.commandCheck.pass ? "COMMAND SUCCEEDED" : "COMMAND FAILED"}
                </span>
              </div>
              
              <div style={{ 
                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px'
              }}>
                <table style={{ width: '100%', fontSize: '13px', color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '4px 0' }}>TX Count Before:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.txCountBefore}</td>
                      <td style={{ padding: '4px 0' }}>TX Count After:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.txCountAfter}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 0' }}>RX Count Before:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.rxCountBefore}</td>
                      <td style={{ padding: '4px 0' }}>RX Count After:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.rxCountAfter}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 0' }}>TX Bytes Before:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.txBytesBefore}</td>
                      <td style={{ padding: '4px 0' }}>TX Bytes After:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.txBytesAfter}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 0' }}>RX Bytes Before:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.rxBytesBefore}</td>
                      <td style={{ padding: '4px 0' }}>RX Bytes After:</td>
                      <td style={{ padding: '4px 0', fontWeight: '600' }}>{results.stats.rxBytesAfter}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Power Off Test Card */}
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
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                GPS Power Off Test
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
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS 5V Supply (Off)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerOff.gps5V.value} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: results.powerOff.gps5V.pass ? 
                          (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)') : 
                          (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)'),
                        color: results.powerOff.gps5V.pass ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626')
                      }}>
                        {results.powerOff.gps5V.pass ? "PASS" : "FAIL"}
                      </span>
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS 5V Current (Off)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerOff.gps5VCurrent.value} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>-</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>GPS 3.3V Supply (Off)</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerOff.gps3V3.value} mV</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: results.powerOff.gps3V3.pass ? 
                          (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)') : 
                          (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)'),
                        color: results.powerOff.gps3V3.pass ? 
                          (isDarkMode ? '#34d399' : '#059669') : 
                          (isDarkMode ? '#f87171' : '#dc2626')
                      }}>
                        {results.powerOff.gps3V3.pass ? "PASS" : "FAIL"}
                      </span>
                    </td>
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