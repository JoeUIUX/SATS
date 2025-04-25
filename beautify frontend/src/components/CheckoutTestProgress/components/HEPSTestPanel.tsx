// src/components/CheckoutTestProgress/components/HEPSTestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Alert } from '@/components/ui';
import { mccifSet, mccifRead, setSimulationMode, debugSocketType } from '@/utils/mccUtils';
import styles from './OBC1TestPanel.module.css'; // Reuse the same styles as OBC1TestPanel

// Import the HEPS-specific functions
import { runHEPSCheckout } from '@/services/checkout/hepsCheckout';
import { generateHEPSReport } from '@/services/reports/hepsReport';

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
  
  // Determine if heater test options are enabled
  const enableHeaterTest = options.includes('Heater Test');
  const enableCurrentTest = options.includes('Current Measurement');
  const enablePowerCycle = options.includes('Power Cycle Test');
  
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
      setCurrentStep('Starting HEPS Checkout');
      
      // Validate socket before proceeding
      if (!sock || (typeof sock.simulateRead !== 'function' && 
                   typeof sock.send !== 'function')) {
        console.warn("No valid socket found, creating simulation fallback");
        
        // Create a minimal simulation object
        const simulatedSock = {
          simulateRead: (parameters: string[]) => {
            // Generate simulated values for common HEPS parameters
            return parameters.map(param => {
              // Return specific values for different HEPS parameters
              if (param.includes("HEPS_Heater")) {
                if (param.includes("Status")) {
                  return `${param}=${Math.round(Math.random())}`;  // 0 or 1
                } else if (param.includes("Temperature")) {
                  return `${param}=${20 + Math.floor(Math.random() * 30)}`;  // 20-50°C
                } else if (param.includes("Current")) {
                  return `${param}=${500 + Math.floor(Math.random() * 500)}`;  // 500-1000mA
                } else if (param.includes("Voltage")) {
                  return `${param}=${28 + Math.random() * 2}`;  // 28-30V
                } else if (param.includes("Power")) {
                  return `${param}=${15 + Math.floor(Math.random() * 10)}`;  // 15-25W
                } else if (param.includes("Count")) {
                  return `${param}=${Math.floor(Math.random() * 100)}`;  // 0-99
                } else if (param.includes("Test")) {
                  if (param.includes("Done")) {
                    return `${param}=1`;  // Test completed
                  } else if (param.includes("Result")) {
                    return `${param}=PASS`;  // Test result
                  } else {
                    return `${param}=1`;  // Other test flags
                  }
                } else {
                  return `${param}=${Math.floor(Math.random() * 100)}`;  // Generic value
                }
              } else if (param.includes("HEPS_Power")) {
                if (param.includes("Status")) {
                  return `${param}=1`;  // Power on
                } else {
                  return `${param}=${Math.floor(Math.random() * 100)}`;  // Generic value
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
      
      // Run the HEPS checkout test with progress updates
      const results = await runHEPSCheckout(sock, 
        { 
          testHeaters: enableHeaterTest, 
          testCurrent: enableCurrentTest, 
          testPowerCycle: enablePowerCycle 
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

  // Helper function to render the temperature trend chart
  const renderTemperatureTrend = (heaterData: any, index: number) => {
    if (!heaterData || !heaterData.tempReadings || heaterData.tempReadings.length === 0) {
      return (
        <div style={{ 
          padding: '16px', 
          textAlign: 'center', 
          color: isDarkMode ? '#d1d5db' : '#6b7280',
          fontStyle: 'italic'
        }}>
          No temperature data available
        </div>
      );
    }

    // Generate array for the temperature points
    const tempPoints = heaterData.tempReadings.map((temp: number, idx: number) => ({
      time: idx * heaterData.readingInterval,
      temp: temp
    }));

    return (
      <div style={{ height: '200px', marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '8px',
          fontSize: '13px',
          color: isDarkMode ? '#d1d5db' : '#6b7280'
        }}>
          <span>Initial: {heaterData.initialTemp}°C</span>
          <span>Max: {Math.max(...heaterData.tempReadings).toFixed(1)}°C</span>
          <span>Final: {heaterData.tempReadings[heaterData.tempReadings.length - 1]}°C</span>
        </div>
        <div style={{ 
          position: 'relative',
          height: '160px',
          backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
          border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
          borderRadius: '6px',
          padding: '8px',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute',
            bottom: '8px',
            left: '8px',
            right: '8px',
            height: '130px'
          }}>
            {/* SVG line chart for temperature */}
            <svg width="100%" height="100%" viewBox={`0 0 ${tempPoints.length} 100`} preserveAspectRatio="none">
              <polyline
                points={tempPoints.map((point: any, i: number) => 
                  `${i * (100 / (tempPoints.length - 1))},${100 - ((point.temp - Math.min(...heaterData.tempReadings)) / 
                  (Math.max(...heaterData.tempReadings) - Math.min(...heaterData.tempReadings)) * 100)}`
                ).join(' ')}
                stroke={isDarkMode ? '#3b82f6' : '#2563eb'}
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          {/* Simple X-axis label */}
          <div style={{ 
            position: 'absolute', 
            bottom: '0', 
            right: '8px',
            fontSize: '10px',
            color: isDarkMode ? '#9ca3af' : '#6b7280'
          }}>
            {heaterData.testDuration}s
          </div>
        </div>
      </div>
    );
  };

  // Helper to render thermal rise data
  const renderThermalRiseData = (heaterData: any) => {
    if (!heaterData || !heaterData.thermalRise) {
      return null;
    }

    return (
      <div style={{ marginBottom: '16px' }}>
        <div style={{ 
          padding: '12px',
          backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
          borderRadius: '6px',
          border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
          marginBottom: '8px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>Temperature Rise:</span>
            <span>{heaterData.thermalRise.totalRise.toFixed(1)}°C</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Rise Rate:</span>
            <span>{heaterData.thermalRise.riseRate.toFixed(2)}°C/min</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Time to 5°C Rise:</span>
            <span>{heaterData.thermalRise.timeTo5C.toFixed(1)}s</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Time to 10°C Rise:</span>
            <span>{heaterData.thermalRise.timeTo10C ? heaterData.thermalRise.timeTo10C.toFixed(1) + 's' : 'N/A'}</span>
          </div>
        </div>
      </div>
    );
  };

  // Helper to render power consumption data
  const renderPowerConsumption = (heaterData: any) => {
    if (!heaterData || !heaterData.power) {
      return null;
    }

    return (
      <div style={{ marginBottom: '16px' }}>
        <div style={{ 
          padding: '12px',
          backgroundColor: isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5',
          borderRadius: '6px',
          border: `1px solid ${isDarkMode ? 'rgba(16, 185, 129, 0.3)' : '#a7f3d0'}`,
          marginBottom: '8px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>Average Current:</span>
            <span>{heaterData.power.avgCurrent.toFixed(1)} mA</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Max Current:</span>
            <span>{heaterData.power.maxCurrent.toFixed(1)} mA</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Average Power:</span>
            <span>{heaterData.power.avgPower.toFixed(2)} W</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Total Energy:</span>
            <span>{heaterData.power.totalEnergy.toFixed(2)} Wh</span>
          </div>
        </div>
      </div>
    );
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
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
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
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
              HEPS Testing
            </div>
            <span style={{ display: 'flex', gap: '8px' }}>
              <span className={`${styles.parameterValue} ${
                enableHeaterTest ? styles.colorCompleted : styles.colorWaiting
              }`}>
                Heaters: {enableHeaterTest ? 'ENABLED' : 'DISABLED'}
              </span>
              <span className={`${styles.parameterValue} ${
                enableCurrentTest ? styles.colorCompleted : styles.colorWaiting
              }`}>
                Current: {enableCurrentTest ? 'ENABLED' : 'DISABLED'}
              </span>
              <span className={`${styles.parameterValue} ${
                enablePowerCycle ? styles.colorCompleted : styles.colorWaiting
              }`}>
                Power Cycle: {enablePowerCycle ? 'ENABLED' : 'DISABLED'}
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
          {/* HEPS System Status Card */}
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
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                HEPS System Status
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div style={{
                  borderRadius: '8px',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    padding: '10px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: isDarkMode ? '#d1d5db' : '#374151'
                  }}>
                    Power Status
                  </div>
                  <div style={{
                    padding: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: results.system.powerStatus === "1" ? 
                        (isDarkMode ? '#34d399' : '#059669') : 
                        (isDarkMode ? '#f87171' : '#dc2626')
                    }}>
                      {results.system.powerStatus === "1" ? "POWERED" : "OFF"}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: isDarkMode ? '#9ca3af' : '#6b7280',
                      marginTop: '4px'
                    }}>
                      Current State
                    </div>
                  </div>
                </div>
                
                <div style={{
                  borderRadius: '8px',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    padding: '10px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: isDarkMode ? '#d1d5db' : '#374151'
                  }}>
                    System Voltage
                  </div>
                  <div style={{
                    padding: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: isDarkMode ? '#d1d5db' : '#111827'
                    }}>
                      {results.system.voltage} V
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: isDarkMode ? '#9ca3af' : '#6b7280',
                      marginTop: '4px'
                    }}>
                      Bus Voltage
                    </div>
                  </div>
                </div>
                
                <div style={{
                  borderRadius: '8px',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    padding: '10px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: isDarkMode ? '#d1d5db' : '#374151'
                  }}>
                    System Current
                  </div>
                  <div style={{
                    padding: '12px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: isDarkMode ? '#d1d5db' : '#111827'
                    }}>
                      {results.system.current} mA
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: isDarkMode ? '#9ca3af' : '#6b7280',
                      marginTop: '4px'
                    }}>
                      Total Current
                    </div>
                  </div>
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
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power Status</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                      <span className={`${styles.statusBadge} ${
                        results.system.powerStatus === "1" ? styles.colorCompleted : styles.colorError
                      }`}>
                        {results.system.powerStatus === "1" ? "ON" : "OFF"}
                      </span>
                    </td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>System Voltage</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.voltage} V</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>System Current</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.current} mA</td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>System Power</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.power} W</td>
                  </tr>
                  
                  <tr>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power Cycle Count</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.powerCycleCount}</td>
                  </tr>
                  
                  <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Operating Time</td>
                    <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.system.operatingTime} min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Heater Status Summary Card */}
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
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                Heater Status Summary
              </h3>
              
              {/* Add simulation badge */}
              <SimulationBadge isSimulation={isForceSimulation} />
            </div>
            
            <div className={styles.cardContent}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                gap: '16px',
                marginBottom: '16px'
              }}>
                {results.heaters && results.heaters.map((heater: any, index: number) => (
                  <div key={index} style={{
                    borderRadius: '8px',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      padding: '8px',
                      backgroundColor: heater.status === "1" ? 
                        (isDarkMode ? 'rgba(5, 150, 105, 0.2)' : '#d1fae5') : 
                        (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: heater.status === "1" ? 
                        (isDarkMode ? '#34d399' : '#059669') : 
                        (isDarkMode ? '#f87171' : '#dc2626')
                    }}>
                      Heater {index + 1}
                    </div>
                    <div style={{
                      padding: '12px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#111827'
                      }}>
                        {heater.temperature}°C
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: isDarkMode ? '#9ca3af' : '#6b7280',
                        marginTop: '4px'
                      }}>
                        {heater.current} mA
                      </div>
                    </div>
                  </div>
                ))}
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
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Heater</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Status</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Temperature</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Current</th>
                    <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  {results.heaters && results.heaters.map((heater: any, index: number) => (
                    <tr key={index} className={index % 2 === 1 ? styles.tableRowAlt : undefined} style={{ backgroundColor: index % 2 === 1 ? (isDarkMode ? "#111827" : "#f9fafb") : undefined }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Heater {index + 1}</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        <span className={`${styles.statusBadge} ${
                          heater.status === "1" ? styles.colorCompleted : styles.colorError
                        }`}>
                          {heater.status === "1" ? "ON" : "OFF"}
                        </span>
                      </td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{heater.temperature}°C</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{heater.current} mA</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{heater.power} W</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Heater Test Results (Only shown if heater tests were enabled and run) */}
          {enableHeaterTest && results.heaterTests && results.heaterTests.length > 0 && (
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
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Heater Test Results
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                {results.heaterTests.map((heaterTest: any, index: number) => (
                  <div key={index} style={{ 
                    marginBottom: '20px', 
                    padding: '16px',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#fff'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}>
                      <h4 style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold',
                        color: isDarkMode ? '#d1d5db' : '#111827',
                        margin: 0
                      }}>
                        Heater {index + 1} Test Results
                      </h4>
                      <span className={`${styles.statusBadge} ${
                        heaterTest.testResult === "PASS" ? styles.colorCompleted : styles.colorError
                      }`}>
                        {heaterTest.testResult}
                      </span>
                    </div>
                    
                    {/* Temperature trend chart */}
                    {renderTemperatureTrend(heaterTest, index)}
                    
                    {/* Thermal rise data */}
                    {renderThermalRiseData(heaterTest)}
                    
                    {/* Power consumption data */}
                    {renderPowerConsumption(heaterTest)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Power Cycle Test Results (Only shown if power cycle tests were enabled and run) */}
          {enablePowerCycle && results.powerCycleTest && (
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
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Power Cycle Test Results
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div style={{ 
                  marginBottom: '20px', 
                  padding: '16px',
                  backgroundColor: results.powerCycleTest.testResult === "PASS" ? 
                    (isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5') : 
                    (isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2'),
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold',
                    color: results.powerCycleTest.testResult === "PASS" ? 
                      (isDarkMode ? '#34d399' : '#059669') : 
                      (isDarkMode ? '#f87171' : '#dc2626'),
                    marginBottom: '8px'
                  }}>
                    {results.powerCycleTest.testResult}
                  </div>
                  <div style={{ 
                    color: isDarkMode ? '#d1d5db' : '#374151',
                    fontSize: '14px'
                  }}>
                    Power Cycle Test {results.powerCycleTest.cyclesCompleted} of {results.powerCycleTest.totalCycles} cycles completed
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
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Cycles Completed</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                        {results.powerCycleTest.cyclesCompleted} of {results.powerCycleTest.totalCycles}
                      </td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Cycle Time</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.cycleTime} s</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power On Time</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.powerOnTime} s</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Power Off Time</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.powerOffTime} s</td>
                    </tr>
                    
                    <tr>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Total Test Time</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.totalTestTime} s</td>
                    </tr>
                    
                    <tr className={styles.tableRowAlt} style={{ backgroundColor: isDarkMode ? "#111827" : "#f9fafb" }}>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Failures</td>
                      <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{results.powerCycleTest.failures}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Current Measurement Test Results (Only shown if current tests were enabled and run) */}
          {enableCurrentTest && results.currentTest && (
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
                  Current Measurement Test Results
                </h3>
                
                {/* Add simulation badge */}
                <SimulationBadge isSimulation={isForceSimulation} />
              </div>
              
              <div className={styles.cardContent}>
                <div style={{ 
                  marginBottom: '20px', 
                  padding: '16px',
                  backgroundColor: results.currentTest.testResult === "PASS" ? 
                    (isDarkMode ? 'rgba(5, 150, 105, 0.1)' : '#d1fae5') : 
                    (isDarkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2'),
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold',
                    color: results.currentTest.testResult === "PASS" ? 
                      (isDarkMode ? '#34d399' : '#059669') : 
                      (isDarkMode ? '#f87171' : '#dc2626'),
                    marginBottom: '8px'
                  }}>
                    {results.currentTest.testResult}
                  </div>
                  <div style={{ 
                    color: isDarkMode ? '#d1d5db' : '#374151',
                    fontSize: '14px'
                  }}>
                    Current measurements {results.currentTest.testResult === "PASS" ? "within" : "outside"} expected range
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
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Heater</th>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Expected (mA)</th>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Measured (mA)</th>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Deviation (%)</th>
                      <th style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Result</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tableBody}>
                    {results.currentTest.heaterResults && results.currentTest.heaterResults.map((result: any, index: number) => (
                      <tr key={index} className={index % 2 === 1 ? styles.tableRowAlt : undefined} style={{ backgroundColor: index % 2 === 1 ? (isDarkMode ? "#111827" : "#f9fafb") : undefined }}>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>Heater {index + 1}</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{result.expectedCurrent}</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{result.measuredCurrent}</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>{result.deviation.toFixed(2)}%</td>
                        <td style={{ borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}>
                          <span className={`${styles.statusBadge} ${
                            result.inRange ? styles.colorCompleted : styles.colorError
                          }`}>
                            {result.inRange ? "PASS" : "FAIL"}
                          </span>
                        </td>
                      </tr>
                    ))}
</tbody>
                </table>
                
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : '#f9fafb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: isDarkMode ? '#d1d5db' : '#4b5563'
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Test Summary:</div>
                  <div>• Test Duration: {results.currentTest.testDuration} s</div>
                  <div>• Samples Collected: {results.currentTest.sampleCount}</div>
                  <div>• Maximum Deviation: {results.currentTest.maxDeviation.toFixed(2)}%</div>
                  <div>• Tolerance Range: ±{results.currentTest.tolerance}%</div>
                </div>
              </div>
            </div>
          )}
          
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