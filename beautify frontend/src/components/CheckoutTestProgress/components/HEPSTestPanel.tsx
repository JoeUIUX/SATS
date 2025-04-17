// src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reusing the same styles as OBC1

// Import the HEPS-specific functions
import { runHEPSCheckout } from '@/services/checkout/hepsCheckout';
import { generateHEPSReport } from '@/services/reports/hepsReport';

// Simulation status badge component
const SimulationBadge: React.FC<{isSimulation: boolean}> = ({ isSimulation }) => (
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

interface HEPSTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
}

export const HEPSTestPanel: React.FC<HEPSTestPanelProps> = ({
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
  
  // Determine if heater testing is enabled based on options
  const enableHeaters = options.includes('Heaters') || options.includes('Heater');
  
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
      setCurrentStep('Starting HEPS Checkout');
      
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
      
      // Run the HEPS checkout test with progress updates
      const results = await runHEPSCheckout(sock, { enableHeaters }, (step, percent) => {
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
      console.error('Error running HEPS checkout:', error);
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
      const reportFile = await generateHEPSReport(results);
      alert(`HEPS report saved: ${reportFile}`);
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
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            HEPS Test Status
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
          
          {/* Heater Testing Status */}
          <div 
            className={styles.parameterBox}
            style={{
              backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
              borderColor: isDarkMode ? "#374151" : "#e5e7eb"
            }}
          >
            <div className={styles.parameterLabel}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.parameterIcon}>
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
              Heater Testing
            </div>
            <span className={`${styles.statusBadge} ${
              enableHeaters ? styles.colorCompleted : styles.colorWaiting
            }`}>
              {enableHeaters ? 'ENABLED' : 'DISABLED'}
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
          {/* Test Summary Card */}
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
                HEPS Test Summary
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.infoCard}>
                <div className={styles.infoContent}>
                  <table 
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      marginBottom: '16px',
                      color: isDarkMode ? "#e5e7eb" : "inherit"
                    }}
                  >
                    <thead 
                      style={{
                        backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                        color: isDarkMode ? "#d1d5db" : "#6b7280"
                      }}
                    >
                      <tr>
                        <th style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px',
                          textAlign: 'left'
                        }}>
                          Parameter
                        </th>
                        <th style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px',
                          textAlign: 'left'
                        }}>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* CAN Tests */}
                      <tr>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          Primary CAN
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.can.primary.result === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.can.primary.result === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.can.primary.result === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                      
                      <tr style={{
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb'
                      }}>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          Secondary CAN
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.can.secondary.result === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.can.secondary.result === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.can.secondary.result === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                      
                      {/* Battery Tests */}
                      <tr>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          Battery 1 Voltage
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.battery.voltage.result1 === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.battery.voltage.result1 === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.battery.voltage.result1 === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                      
                      <tr style={{
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb'
                      }}>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          Battery 2 Voltage
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.battery.voltage.result2 === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.battery.voltage.result2 === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.battery.voltage.result2 === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          Battery 3 Voltage
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.battery.voltage.result3 === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.battery.voltage.result3 === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.battery.voltage.result3 === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                      
                      {/* Converter Tests */}
                      <tr style={{
                        backgroundColor: isDarkMode ? '#111827' : '#f9fafb'
                      }}>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          HDRM 12V Converter 1
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.converters.conv1.hdrm12v.result === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.converters.conv1.hdrm12v.result === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.converters.conv1.hdrm12v.result === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                      
                      {/* Load Tests */}
                      <tr>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          OBC-1 Output
                        </td>
                        <td style={{ 
                          borderBottom: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                          padding: '8px 12px'
                        }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '99px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor: results.rlcl.obc1.result === '[PASS]' 
                              ? isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5'
                              : isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2',
                            color: results.rlcl.obc1.result === '[PASS]'
                              ? isDarkMode ? '#34d399' : '#047857'
                              : isDarkMode ? '#f87171' : '#b91c1c'
                          }}>
                            {results.rlcl.obc1.result === '[PASS]' ? 'PASS' : 'FAIL'}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

export default HEPSTestPanel;