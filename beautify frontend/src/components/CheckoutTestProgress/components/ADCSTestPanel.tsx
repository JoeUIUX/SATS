// src/components/CheckoutTestProgress/components/ADCSTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the ADCS-specific functions
import { runADCSCheckout } from '@/services/checkout/adcsCheckout';
import { generateADCSReport } from '@/services/reports/adcsReport';

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

interface ADCSTestPanelProps {
  options: string[];  // Contains only the checked options
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
  isInitialRun: boolean;
}

export const ADCSTestPanel: React.FC<ADCSTestPanelProps> = ({
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
  
  // Map all UI options to specific test functionalities
  const enableVersion = options.includes('Version Check');
  const enableGyroscope = options.includes('Gyroscope');
  const enableMagnetometer = options.includes('Magnetometer');
  const enableStarTracker = options.includes('Star Tracker');
  const enableFOG = options.includes('FOG');
  const enableFineSunSensor = options.includes('Fine Sun Sensor');
  const enableCoarseSunSensor = options.includes('Coarse Sun Sensor');
  const enableEarthSensor = options.includes('Earth Sensor');
  const enableReactionWheels = options.includes('Reaction Wheel');
  const enableMagneticTorquer = options.includes('Magnetic Torquer');
  
  // Group them into main functional categories for testing
  const enableTelemetry = enableVersion || enableGyroscope || enableMagnetometer || 
                          enableStarTracker || enableFOG;
  const enableSensors = enableFineSunSensor || enableCoarseSunSensor || enableEarthSensor;
  const enableActuators = enableReactionWheels || enableMagneticTorquer;
  
// Replace the relevant section in ADCSTestPanel.tsx with this:

const calculateCounterChange = (before: string, after: string): string => {
  // Convert strings to numbers, defaulting to 0 if conversion fails
  const beforeNum = parseInt(before, 10) || 0;
  const afterNum = parseInt(after, 10) || 0;
  
  // Return the difference as a string
  return (afterNum - beforeNum).toString();
};

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
      setCurrentStep('Starting ADCS Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common ADCS parameters
            return parameters.map(param => {
              if (param.includes("ADCS_IF_V") || param.includes("ADCD_RW_V")) {
                return `${param}=${28 + Math.random() * 2}`; // 28-30V
              } else if (param.includes("ADCS-IF_I") || param.includes("ADCD_RW_I")) {
                return `${param}=${0.1 + Math.random() * 0.2}`; // 0.1-0.3A
              } else if (param.includes("OBC1_Adcs_Cmd_Count")) {
                return `${param}=${Math.floor(Math.random() * 5)}`;
              } else if (param.includes("OBC1_Adcs_Ack_Count")) {
                return `${param}=${Math.floor(Math.random() * 5)}`;
              } else if (param.includes("OBC1_Adcs_Timeout_Count")) {
                return `${param}=0`;
              } else if (param.includes("OBC1_Adcs_Error_Count")) {
                return `${param}=0`;
              } else if (param.includes("ADCS_TLM_Identifier")) {
                return `${param}=128`;
              } else if (param.includes("ADCS_TLM_InterfaceVer")) {
                return `${param}=1`;
              } else if (param.includes("ADCS_TLM_IdFwVerMajor")) {
                return `${param}=3`;
              } else if (param.includes("ADCS_TLM_IdFwVerMinor")) {
                return `${param}=5`;
              } else if (param.includes("ADCS_TLM_RuntimeSec")) {
                return `${param}=${Math.floor(Math.random() * 3600)}`; // 0-3600 seconds
              } else if (param.includes("ADCS_TLM_RuntimeMiliSec")) {
                return `${param}=${Math.floor(Math.random() * 1000)}`; // 0-999 milliseconds
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
      
      // Run the ADCS checkout test with progress updates
      const results = await runADCSCheckout(sock, 
        { 
          testTelemetry: enableTelemetry, 
          testReactionWheels: enableReactionWheels,
          testSensors: enableSensors,
          testMagneticTorquer: enableMagneticTorquer
        }, 
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
      console.error('Error running ADCS checkout:', error);
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
      const reportFile = await generateADCSReport(results);
      alert(`ADCS report saved: ${reportFile}`);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  // Determine the status for a voltage check
  const getVoltageStatus = (status: string) => {
    if (!status) return "";
    
    switch(status) {
      case "PASS":
        return (
          <span className={`${styles.statusBadge} ${styles.colorCompleted}`}>
            PASS
          </span>
        );
      case "FAIL":
        return (
          <span className={`${styles.statusBadge} ${styles.colorError}`}>
            FAIL
          </span>
        );
      default:
        return (
          <span className={`${styles.statusBadge} ${styles.colorWaiting}`}>
            {status}
          </span>
        );
    }
  };

  // Get appropriate color class for command status
  const getCommandStatusClass = (status: string) => {
    if (!status) return styles.colorWaiting;
    
    if (status === "PASS" || status === "PASS_TIMEOUT") {
      return styles.colorCompleted;
    } else if (status.startsWith("FAIL") || status === "ERROR") {
      return styles.colorError;
    } else {
      return styles.colorWaiting;
    }
  };

  // Format command status for display
  const formatCommandStatus = (status: string) => {
    switch(status) {
      case "PASS":
        return "PASS";
      case "PASS_TIMEOUT":
        return "PASS (with timeout)";
      case "FAIL_NO_REPLY":
        return "FAIL - No reply";
      case "FAIL_CMD_NOT_SENT":
        return "FAIL - Command not sent";
      case "ERROR":
        return "ERROR";
      default:
        return status || "Unknown";
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
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            ADCS Test Status
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              ADCS Testing
            </div>
            <span style={{ display: 'flex', gap: '8px' }}>
              <span className={`${styles.parameterValue} ${
                enableTelemetry ? styles.colorCompleted : styles.colorWaiting
              }`}>
                Telemetry: {enableTelemetry ? 'ENABLED' : 'DISABLED'}
              </span>
              <span className={`${styles.parameterValue} ${
                enableSensors ? styles.colorCompleted : styles.colorWaiting
              }`}>
                Sensors: {enableSensors ? 'ENABLED' : 'DISABLED'}
              </span>
              <span className={`${styles.parameterValue} ${
                enableActuators ? styles.colorCompleted : styles.colorWaiting
              }`}>
                Actuators: {enableActuators ? 'ENABLED' : 'DISABLED'}
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
          {/* ADCS Voltage/Current Card */}
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
                ADCS Power Status
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
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>ADCS Interface Voltage</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.vi.adcsIfVoltage.value} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      {getVoltageStatus(results.vi.adcsIfVoltage.status)}
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>ADCS Interface Current</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.vi.adcsIfCurrent.value} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}></td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Reaction Wheel Voltage</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.vi.adcsRwVoltage.value} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      {getVoltageStatus(results.vi.adcsRwVoltage.status)}
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Reaction Wheel Current</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.vi.adcsRwCurrent.value} A</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ADCS Command Status Card */}
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
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ADCS Command Status
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div style={{ 
                padding: '16px', 
                borderRadius: '8px',
                backgroundColor: isDarkMode ? "#111827" : "#f9fafb",
                border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: isDarkMode ? "#d1d5db" : "#374151" }}>
                    Telemetry Command 128 Status:
                  </span>
                  <span className={`${styles.statusBadge} ${getCommandStatusClass(results.command.status)}`}>
                    {formatCommandStatus(results.command.status)}
                  </span>
                </div>
              </div>
              
              {/* Command Counter Details */}
              {results.commandResults && results.commandResults.length >= 8 && (
                <div>
                  <h4 style={{ 
                    fontSize: '14px', 
                    marginBottom: '10px',
                    color: isDarkMode ? "#d1d5db" : "#374151"
                  }}>
                    Command Counter Details:
                  </h4>
                  <table 
                    className={styles.table}
                    style={{
                      color: isDarkMode ? "#e5e7eb" : "inherit",
                      marginBottom: '16px'
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
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Counter</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Before</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>After</th>
                        <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Change</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
<tr>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Command Count</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[0]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[4]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
    {calculateCounterChange(results.commandResults[0], results.commandResults[4])}
  </td>
</tr>

<tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Acknowledge Count</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[1]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[5]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
    {calculateCounterChange(results.commandResults[1], results.commandResults[5])}
  </td>
</tr>

<tr>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Timeout Count</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[2]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[6]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
    {calculateCounterChange(results.commandResults[2], results.commandResults[6])}
  </td>
</tr>

<tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Error Count</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[3]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.commandResults[7]}</td>
  <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
    {calculateCounterChange(results.commandResults[3], results.commandResults[7])}
  </td>
</tr>
                    </tbody>
                  </table>
                </div>
              )}
              
              <div>
                {/* Add a small component summary section */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  {/* Version Check Status */}
                  <div style={{ 
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                    textAlign: 'center',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    opacity: enableVersion ? 1 : 0.6
                  }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                      Version
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: 'bold',
                      color: enableVersion ? (isDarkMode ? '#34d399' : '#10b981') : (isDarkMode ? '#9ca3af' : '#6b7280')
                    }}>
                      {enableVersion ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>

                  {/* Gyroscope Status */}
                  <div style={{ 
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                    textAlign: 'center',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    opacity: enableGyroscope ? 1 : 0.6
                  }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                      Gyroscope
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: 'bold',
                      color: enableGyroscope ? (isDarkMode ? '#34d399' : '#10b981') : (isDarkMode ? '#9ca3af' : '#6b7280')
                    }}>
                      {enableGyroscope ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>

                  {/* RW Status */}
                  <div style={{ 
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                    textAlign: 'center',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    opacity: enableReactionWheels ? 1 : 0.6
                  }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                      RW
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: 'bold',
                      color: enableReactionWheels ? (isDarkMode ? '#34d399' : '#10b981') : (isDarkMode ? '#9ca3af' : '#6b7280')
                    }}>
                      {enableReactionWheels ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>

                  {/* Magnetometer Status */}
                  <div style={{ 
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                    textAlign: 'center',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    opacity: enableMagnetometer ? 1 : 0.6
                  }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                      Magnetometer
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: 'bold',
                      color: enableMagnetometer ? (isDarkMode ? '#34d399' : '#10b981') : (isDarkMode ? '#9ca3af' : '#6b7280')
                    }}>
                      {enableMagnetometer ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADCS Telemetry Card */}
          {results.telemetry && (
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
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  ADCS Telemetry
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
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Node Type Identifier</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.identifier}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Program Type Identifier</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.identifier}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Interface Version</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.interfaceVersion}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Firmware Version (Major)</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.fwVersionMajor}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Firmware Version (Minor)</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.fwVersionMinor}</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Runtime (seconds)</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.runtimeSec}</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Runtime (milliseconds)</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.telemetry.runtimeMiliSec}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ADCS Power Off Status Card */}
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
                  ? "linear-gradient(to right, #7f1d1d, #b91c1c)" 
                  : "linear-gradient(to right, #fee2e2, #fecaca)",
                color: isDarkMode ? "#fecaca" : "#7f1d1d"
              }}
            >
              <h3 className={styles.cardTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.cardIcon}>
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                ADCS Power Off Status
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
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>ADCS Interface Voltage</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.vi.adcsIfVoltageOff?.value || "N/A"} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      {getVoltageStatus(results.vi.adcsIfVoltageOff?.status)}
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Reaction Wheel Voltage</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.vi.adcsRwVoltageOff?.value || "N/A"} V</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      {getVoltageStatus(results.vi.adcsRwVoltageOff?.status)}
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