// src/components/CheckoutTestProgress/components/SBandTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the S-Band-specific functions
import { runSBandCheckout } from '@/services/checkout/sbandCheckout';
import { generateSBandReport } from '@/services/reports/sbandReport';

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

interface SBandTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
}

export const SBandTestPanel: React.FC<SBandTestPanelProps> = ({
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
  
  // Determine if TX/RX options are enabled
  const enableTX = options.includes('Transmitter Test');
  const enableRX = options.includes('Receiver Test');
  
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
      setCurrentStep('Starting S-Band Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common parameters
            return parameters.map(param => {
              // Return specific values for common S-Band parameters
              if (param.includes("FPGA_version")) {
                return `${param}=1.2.3`;
              } else if (param.includes("FPGA_build")) {
                return `${param}=2022.04`;
              } else if (param.includes("hardware_id_year")) {
                return `${param}=2022`;
              } else if (param.includes("hardware_id_month")) {
                return `${param}=06`;
              } else if (param.includes("hardware_id_order_n")) {
                return `${param}=42`;
              } else if (param.includes("LCL_status")) {
                return `${param}=1`;
              } else if (param.includes("RX_status")) {
                return `${param}=1`;
              } else if (param.includes("RX_frequency_shift")) {
                return `${param}=${500 + Math.floor(Math.random() * 200)}`;
              } else if (param.includes("TX_status")) {
                return `${param}=1`;
              } else if (param.includes("SBand_coherent_mode")) {
                return `${param}=1`;
              } else if (param.includes("SBand_ranging_mode")) {
                return `${param}=0`;
              } else if (param.includes("adc_reg_00") || param.includes("adc_reg_04")) {
                return `${param}=${25 + Math.floor(Math.random() * 10)}`;
              } else {
                return `${param}=${Math.floor(Math.random() * 100)}`;
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
      
      // Run the S-Band checkout test with progress updates
      const results = await runSBandCheckout(sock, 
        { testTX: enableTX, testRX: enableRX }, 
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
      console.error('Error running S-Band checkout:', error);
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
      const reportFile = await generateSBandReport(results);
      alert(`S-Band report saved: ${reportFile}`);
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
            S-Band Test Status
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
              S-Band Testing
            </div>
            <span style={{ display: 'flex', gap: '8px' }}>
              <span className={`${styles.parameterValue} ${
                enableTX ? styles.colorCompleted : styles.colorWaiting
              }`}>
                TX: {enableTX ? 'ENABLED' : 'DISABLED'}
              </span>
              <span className={`${styles.parameterValue} ${
                enableRX ? styles.colorCompleted : styles.colorWaiting
              }`}>
                RX: {enableRX ? 'ENABLED' : 'DISABLED'}
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
                  FPGA Information
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
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <div 
                      className={styles.infoLabel}
                      style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}
                    >
                      S-Band FPGA Version
                    </div>
                    <div 
                      className={styles.infoValue}
                      style={{ color: isDarkMode ? "#f3f4f6" : "#111827" }}
                    >
                      {results.fpga.version}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div 
                    style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                      borderWidth: "1px",
                      borderRadius: "6px",
                      padding: "12px"
                    }}
                  >
                    <div style={{ 
                      fontSize: "12px", 
                      color: isDarkMode ? "#9ca3af" : "#6b7280",
                      marginBottom: "4px"
                    }}>
                      FPGA Build
                    </div>
                    <div style={{ 
                      fontWeight: "bold",
                      color: isDarkMode ? "#f3f4f6" : "#111827" 
                    }}>
                      {results.fpga.build}
                    </div>
                  </div>
                  
                  <div 
                    style={{
                      backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                      borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                      borderWidth: "1px",
                      borderRadius: "6px",
                      padding: "12px"
                    }}
                  >
                    <div style={{ 
                      fontSize: "12px", 
                      color: isDarkMode ? "#9ca3af" : "#6b7280",
                      marginBottom: "4px"
                    }}>
                      FPGA Type
                    </div>
                    <div style={{ 
                      fontWeight: "bold",
                      color: isDarkMode ? "#f3f4f6" : "#111827" 
                    }}>
                      {results.fpga.type}
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
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 00-2.278.592l-.172.086a3.976 3.976 0 01-1.878.409c-.863 0-1.39-.47-1.732-.917l-.254-.387a.75.75 0 00-1.147.06 2.99 2.99 0 01-.537.467c-.18.129-.384.276-.605.434l-.584.392-1.17-1.57a3 3 0 00-.88-2.12L9 8.172z" />
                  </svg>
                  Hardware Information
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
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Board Year</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.hardware.idYear}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Board Month</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.hardware.idMonth}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Order Number</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.hardware.orderNumber}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>LCL Status</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.status.lclStatus}</td>
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
                    <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Receiver Information
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontWeight: 'bold' }}>Receiver Status</span>
                    <span className={`${styles.statusBadge} ${
                      results.receiver.status === '1' ? styles.colorCompleted : styles.colorError
                    }`}>
                      {results.receiver.status === '1' ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>
                </div>
                
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
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Sensitivity</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.sensitivity}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Frequency Shift</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.frequencyShift} Hz</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>IQ Power</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.iqPower}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>AGC Value</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.agcValue}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Eb</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.demodEb}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>N0</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.demodN0}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Data Rate</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.receiver.dataRate}</td>
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
                    ? "linear-gradient(to right, #713f12, #854d0e)" 
                    : "linear-gradient(to right, #fffbeb, #fef3c7)",
                  color: isDarkMode ? "#fef3c7" : "#854d0e"
                }}
              >
                <h3 className={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Transmitter Information
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontWeight: 'bold' }}>Transmitter Status</span>
                    <span className={`${styles.statusBadge} ${
                      results.transmitter.status === '1' ? styles.colorCompleted : styles.colorError
                    }`}>
                      {results.transmitter.status === '1' ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>
                </div>
                
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
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Encoder Configuration</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.convDiff}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Filter Configuration</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.convFilter}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Waveform</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.waveform}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>PCM Index</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.pcmIndex}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>AGC Value</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.transmitter.agcValue}</td>
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
                    ? "linear-gradient(to right, #164e63, #0e7490)" 
                    : "linear-gradient(to right, #ecfeff, #cffafe)",
                  color: isDarkMode ? "#cffafe" : "#0e7490"
                }}
              >
                <h3 className={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Mode Information
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div className="grid grid-cols-2 gap-4">
                  <div style={{
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: results.modes.coherentMode === '1' ? 
                      (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#d1fae5') : 
                      (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>Coherent Mode</div>
                    <div style={{ 
                      fontWeight: 'bold',
                      fontSize: '18px',
                      color: results.modes.coherentMode === '1' ? 
                        (isDarkMode ? '#34d399' : '#059669') : 
                        (isDarkMode ? '#f87171' : '#dc2626')
                    }}>
                      {results.modes.coherentMode === '1' ? 'ENABLED' : 'DISABLED'}
                    </div>
                  </div>
                  
                  <div style={{
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: results.modes.rangingMode === '1' ? 
                      (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#d1fae5') : 
                      (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '14px', marginBottom: '8px' }}>Ranging Mode</div>
                    <div style={{ 
                      fontWeight: 'bold',
                      fontSize: '18px',
                      color: results.modes.rangingMode === '1' ? 
                        (isDarkMode ? '#34d399' : '#059669') : 
                        (isDarkMode ? '#f87171' : '#dc2626')
                    }}>
                      {results.modes.rangingMode === '1' ? 'ENABLED' : 'DISABLED'}
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
                    ? "linear-gradient(to right, #7e22ce, #a855f7)" 
                    : "linear-gradient(to right, #f3e8ff, #e9d5ff)",
                  color: isDarkMode ? "#e9d5ff" : "#7e22ce"
                }}
              >
                <h3 className={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 100 12.071A6.001 6.001 0 0010 4z" clipRule="evenodd" />
                  </svg>
                  Temperature Information
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.tempGrid}>
                  <div className={styles.tempCard}>
                    <div className={styles.tempLabel}>ADC Input 0</div>
                    <div className={styles.tempValue}>{results.temperature.adc0} °C</div>
                  </div>
                  
                  <div className={styles.tempCard}>
                    <div className={styles.tempLabel}>ADC Input 1</div>
                    <div className={styles.tempValue}>{results.temperature.adc1} °C</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special TX test section if TX test was enabled */}
            {enableTX && results.txTest && (
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
                      ? "linear-gradient(to right, #b45309, #d97706)" 
                      : "linear-gradient(to right, #fef3c7, #fde68a)",
                    color: isDarkMode ? "#fef3c7" : "#b45309"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    TX Test Results
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div 
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      backgroundColor: results.txTest.status === 'Success' ? 
                        (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#d1fae5') : 
                        (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold',
                      color: results.txTest.status === 'Success' ? 
                        (isDarkMode ? '#34d399' : '#059669') : 
                        (isDarkMode ? '#f87171' : '#dc2626')
                    }}>
                      {results.txTest.status === 'Success' ? 'PASS' : 'FAIL'}
                    </div>
                    
                    <div style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                      TX Test {results.txTest.completed ? 'Completed' : 'Incomplete'}
                    </div>
                    
                    {results.txTest.error && (
                      <div style={{ 
                        color: isDarkMode ? '#f87171' : '#dc2626',
                        marginTop: '8px',
                        fontStyle: 'italic'
                      }}>
                        Error: {results.txTest.error}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Special RX test section if RX test was enabled */}
            {enableRX && results.rxTest && (
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
                      : "linear-gradient(to right, #dbeafe, #bfdbfe)",
                    color: isDarkMode ? "#dbeafe" : "#1e40af"
                  }}
                >
                  <h3 className={styles.cardTitle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                      <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    RX Test Results
                  </h3>
                  
                  {/* Add simulation badge */}
                  <SimulationBadge isSimulation={isForceSimulation} />
                </div>
                
                <div className={styles.cardContent}>
                  <div 
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      backgroundColor: results.rxTest.status === 'Success' ? 
                        (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#d1fae5') : 
                        (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold',
                      color: results.rxTest.status === 'Success' ? 
                        (isDarkMode ? '#34d399' : '#059669') : 
                        (isDarkMode ? '#f87171' : '#dc2626')
                    }}>
                      {results.rxTest.status === 'Success' ? 'PASS' : 'FAIL'}
                    </div>
                    
                    <div style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                      RX Test {results.rxTest.completed ? 'Completed' : 'Incomplete'}
                    </div>
                    
                    {results.rxTest.error && (
                      <div style={{ 
                        color: isDarkMode ? '#f87171' : '#dc2626',
                        marginTop: '8px',
                        fontStyle: 'italic'
                      }}>
                        Error: {results.rxTest.error}
                      </div>
                    )}
                  </div>
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