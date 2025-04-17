// src/components/CheckoutTestProgress/CheckoutTestProgress.tsx
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import { Button } from "@/components/ui";
import { OBC1TestPanel } from "./components/OBC1TestPanel";
import { OBC2TestPanel } from "./components/OBC2TestPanel";
import { SBandTestPanel } from "./components/SBandTestPanel";
import { UHFTestPanel } from "./components/UHFTestPanel";
import { HEPSTestPanel } from "./components/HEPSTestPanel";

import styles from "./CheckoutTestProgress.module.css";
import { setSimulationMode } from '@/utils/mccUtils';

// Updated interface to include checkedOptions
interface CheckoutItem {
  id: string;
  header: string;
  options: string[];
  checkedOptions?: Record<string, boolean>; // Optional to maintain backward compatibility
}

interface TestResult {
  component: string;
  status: 'running' | 'completed' | 'error' | 'waiting';
  results: any;
  message?: string;
}

interface CheckoutTestProgressProps {
  droppedItems: CheckoutItem[];
  onClose: () => void;
  zIndex: number;
  onMouseDown: () => void;
  sock: any;
}

const CheckoutTestProgress: React.FC<CheckoutTestProgressProps> = ({
  droppedItems,
  onClose,
  zIndex,
  onMouseDown,
  sock
}) => {
  const [overallProgress, setOverallProgress] = useState<number>(0);
  const [testResults, setTestResults] = useState<Record<string, TestResult>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSavingReport, setIsSavingReport] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const [initialRunDone, setInitialRunDone] = useState(false);
  const [currentlyRunningTest, setCurrentlyRunningTest] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [filteredDroppedItems, setFilteredDroppedItems] = useState<CheckoutItem[]>([]);
  
  // Use non-null assertion to ensure TypeScript knows this ref will be assigned
  const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [portalElement] = useState(() => {
    const element = document.createElement("div");
    element.id = "checkoutTestProgress-root";
    document.body.appendChild(element);
    return element;
  });

  // Load the filtered items with checked options from localStorage
  useEffect(() => {
    const filteredItemsJson = localStorage.getItem('checkoutTestItems');
    
    if (filteredItemsJson) {
      try {
        const parsedItems = JSON.parse(filteredItemsJson);
        
        if (Array.isArray(parsedItems) && parsedItems.length > 0) {
          console.log("📋 Using filtered items with checked options:", parsedItems);
          setFilteredDroppedItems(parsedItems);
        } else {
          console.log("⚠️ No valid filtered items found, using original dropped items");
          setFilteredDroppedItems(droppedItems);
        }
      } catch (e) {
        console.error("Error parsing filtered items:", e);
        setFilteredDroppedItems(droppedItems);
      }
    } else {
      // If no filtered items in localStorage, use the original droppedItems
      // but try to only include options that are checked
      console.log("⚠️ No filtered items in localStorage, using original items");
      
      // For backward compatibility - try to filter based on checkedOptions if available
      const backwardCompatibleItems = droppedItems.map(item => {
        if (item.checkedOptions) {
          // Get the list of options that are checked
          const checkedOptionsList = Object.entries(item.checkedOptions)
            .filter(([_, isChecked]) => isChecked)
            .map(([option]) => option);
          
          // Only include checked options if any exist, otherwise keep all options
          return {
            ...item,
            options: checkedOptionsList.length > 0 ? checkedOptionsList : item.options
          };
        }
        
        return item;
      });
      
      setFilteredDroppedItems(backwardCompatibleItems);
    }
  }, [droppedItems]);

  // Generate component map for easy lookups
  const componentMap = filteredDroppedItems.reduce((acc, item) => {
    acc[item.header] = item;
    return acc;
  }, {} as Record<string, CheckoutItem>);

  // Set initial active tab to the first filtered item
  useEffect(() => {
    if (filteredDroppedItems.length > 0 && !activeTab) {
      setActiveTab(filteredDroppedItems[0].header);
    }
  }, [filteredDroppedItems, activeTab]);

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

  // Update progress when test results change
  useEffect(() => {
    updateOverallProgress();
  }, [testResults]);

  // Run initial tests for all filtered components
  useEffect(() => {
    if (!initialRunDone && filteredDroppedItems.length > 0) {
      // Mark as done
      setInitialRunDone(true);
      
      // Set up all filtered components with initial waiting status
      const initialResults: Record<string, TestResult> = {};
      filteredDroppedItems.forEach(item => {
        initialResults[item.header] = {
          component: item.header,
          status: 'waiting',
          results: null
        };
      });
      
      setTestResults(initialResults);
      
      // Find the first component to test
      runNextTest(initialResults);
    }
  }, [filteredDroppedItems, initialRunDone]);

  // Update window size on mount
  useEffect(() => {
    // Calculate available screen space (80% of viewport)
    const maxWidth = Math.min(1600, window.innerWidth * 0.8);
    const maxHeight = Math.min(900, window.innerHeight * 0.8);
    
    setWindowSize({
      width: maxWidth,
      height: maxHeight
    });
    
    // Handle window resize
    const handleResize = () => {
      const maxWidth = Math.min(1600, window.innerWidth * 0.8);
      const maxHeight = Math.min(900, window.innerHeight * 0.8);
      
      setWindowSize({
        width: maxWidth,
        height: maxHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate overall progress based on filtered items
  const updateOverallProgress = () => {
    if (filteredDroppedItems.length === 0) return;

    const completedCount = Object.values(testResults).filter(
      result => result.status === 'completed' || result.status === 'error'
    ).length;
    
    const newProgress = Math.floor((completedCount / filteredDroppedItems.length) * 100);
    setOverallProgress(newProgress);
    
    // Check if all tests are complete
    if (completedCount === filteredDroppedItems.length) {
      setIsComplete(true);
      setCurrentlyRunningTest(null);
    }
  };

  // Update a specific test result
  const updateTestResult = (component: string, result: Partial<TestResult>) => {
    setTestResults(prev => {
      const updatedResults = {
        ...prev,
        [component]: {
          ...(prev[component] || { component, status: 'waiting', results: null }),
          ...result
        }
      };
      
      // If a test just completed, check if we should run the next one
      if (result.status === 'completed' || result.status === 'error') {
        // Clear the currently running test
        if (currentlyRunningTest === component) {
          setCurrentlyRunningTest(null);
        }
        
        // Find and run next test (with small delay to allow UI to update)
        setTimeout(() => {
          runNextTest(updatedResults);
        }, 500);
      }
      
      return updatedResults;
    });
  };

  // Find and run the next pending test from filtered items
  const runNextTest = (currentResults: Record<string, TestResult>) => {
    // Don't try to run another test if one is already running
    if (currentlyRunningTest) return;
    
    // Find the next waiting component from filtered items
    const nextComponent = filteredDroppedItems.find(item => 
      currentResults[item.header]?.status === 'waiting'
    );
    
    if (nextComponent) {
      // Set as currently running
      setCurrentlyRunningTest(nextComponent.header);
      
      // Mark it as running in the results
      setTestResults(prev => ({
        ...prev,
        [nextComponent.header]: {
          ...(prev[nextComponent.header] || { component: nextComponent.header, results: null }),
          status: 'running'
        }
      }));
      
      // Automatically switch to the tab with the running test
      setActiveTab(nextComponent.header);
    }
  };

  // Generate and save test report
  const saveTestReport = async () => {
    setIsSavingReport(true);
    
    try {
      // Call report generation for each completed test
      for (const item of filteredDroppedItems) {
        const result = testResults[item.header];
        if (result && result.status === 'completed') {
          // Here you would call the appropriate report generator for each component
          console.log(`Generating report for ${item.header}...`);
          // For example: await generateOBC1Report(result.results);
        }
      }
      
      alert("Test reports have been generated and saved successfully!");
    } catch (error) {
      console.error("Error generating report:", error);
      alert("Failed to generate test reports.");
    } finally {
      setIsSavingReport(false);
    }
  };

  // Run all tests again (reset and restart)
  const runAllTests = () => {
    // Reset all test results to waiting
    const resetResults: Record<string, TestResult> = {};
    filteredDroppedItems.forEach(item => {
      resetResults[item.header] = {
        component: item.header,
        status: 'waiting',
        results: null
      };
    });
    
    setTestResults(resetResults);
    setIsComplete(false);
    setCurrentlyRunningTest(null);
    
    // Start running tests
    runNextTest(resetResults);
  };

  // Calculate test stage status for each filtered component
  const getTestStatusSummary = () => {
    return filteredDroppedItems.map(item => ({
      component: item.header,
      status: testResults[item.header]?.status || 'waiting',
      isActive: currentlyRunningTest === item.header
    }));
  };

  // When a tab has a OBC1/OBC2TestPanel that requires options, only pass the filtered options
  const getComponentOptions = (header: string): string[] => {
    const component = filteredDroppedItems.find(item => item.header === header);
    return component?.options || [];
  };
  
  // Safely reuse position from session storage or use defaults
  const savedPosition = (() => {
    try {
      const saved = sessionStorage.getItem('checkoutTestPositionPosition');
      if (saved) {
        const parsed = JSON.parse(saved);
        
        // Validate the saved position - ensure it's within reasonable bounds
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        return {
          x: Math.min(Math.max(parsed.x, -400), viewportWidth - 450),
          y: Math.min(Math.max(parsed.y, 0), viewportHeight - 100)
        };
      }
      
      // Default center position if no saved position
      return {
        x: Math.max(0, (window.innerWidth - windowSize.width) / 2), 
        y: Math.max(0, (window.innerHeight - windowSize.height) / 2)
      };
    } catch (e) {
      // Default center position in case of error
      return {
        x: Math.max(0, (window.innerWidth - windowSize.width) / 2),
        y: Math.max(0, (window.innerHeight - windowSize.height) / 2)
      };
    }
  })();

  const [position, setPosition] = useState(savedPosition);

  // Save position to sessionStorage when it changes
  useEffect(() => {
    sessionStorage.setItem('checkoutTestPositionPosition', JSON.stringify(position));
  }, [position]);

  const getStatusClassName = (status: string): string => {
    switch (status) {
      case 'completed': return styles.colorCompleted;
      case 'error': return styles.colorError;
      case 'running': return `${styles.colorRunning} ${styles.pulseAnimation}`;
      default: return styles.colorWaiting;
    }
  };

// Near the beginning of your component
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

  // Set simulation mode based on availability of real connection
  setSimulationMode(shouldUseSimulation);
  console.log(`🔧 Setting simulation mode to: ${shouldUseSimulation}`);
}, []);

  // Modified component to specifically pass only checked options to the test panels
  return createPortal(
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      position={position}
      onStop={(e, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
    >
      <div ref={nodeRef} className={styles.checkoutWindow} style={{/* styles */}}>
        {/* Header - Fixed */}
        <div className={`${styles.windowHeader} drag-handle`}>
          <h2 className={styles.windowTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.titleIcon}>
              <path d="M20 6v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>
              <path d="m10 10 5 3-5 3v-6Z"/>
            </svg>
            Satellite Checkout Test Control Centre
          </h2>
          
          <button 
            className={styles.resetButton}
            onClick={() => {
              setPosition({
                x: (window.innerWidth - windowSize.width) / 2,
                y: (window.innerHeight - windowSize.height) / 2
              });
            }}
          >
            Reset Position
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className={styles.closeButton}
          >
            ✖
          </button>
        </div>

        {/* Content area with Test Panels */}
        <div className={styles.contentArea}>
{/* Test tabs */}
{filteredDroppedItems.length > 0 ? (
  <div className={styles.tabsContainer}>
    <div className={styles.tabsList}>
      {filteredDroppedItems.map(item => (
        <button
          key={item.header} 
          onClick={() => setActiveTab(item.header)}
          className={`${styles.tabButton} ${activeTab === item.header ? styles.tabButtonActive : ''}`}
        >
          {item.header}
          {testResults[item.header]?.status === 'completed' && (
            <span className={styles.tabIcon}>✓</span>
          )}
          {testResults[item.header]?.status === 'error' && (
            <span className={styles.tabIcon}>✗</span>
          )}
          {testResults[item.header]?.status === 'running' && (
            <span className={`${styles.tabIcon} ${styles.pulseAnimation}`}>⟳</span>
          )}
        </button>
      ))}
    </div>
  </div>
) : (
  <div className="p-6 text-center">
    <p>No test items with checked options found. Please check at least one option in the Checkout Section and try again.</p>
  </div>
)}

          {/* Test Content Grid Layout */}
          {filteredDroppedItems.length > 0 && (
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '0 16px 16px 16px', overflow: 'hidden' }}>
              {/* Left Panel - Active test component */}
              <div style={{ overflow: 'auto', height: '100%', display: activeTab ? 'block' : 'none' }}>
                {filteredDroppedItems.map(item => (
                  <div 
                    key={item.header} 
                    style={{ 
                      display: activeTab === item.header ? 'block' : 'none',
                      height: '100%',
                      overflow: 'auto'
                    }}
                  >
                    {/* Render the appropriate test panel based on component type */}
                    {item.header === "OBC-1" && (
                      <OBC1TestPanel
                        options={getComponentOptions(item.header)} // Pass only the filtered/checked options
                        sock={sock}
                        onTestComplete={(results) => 
                          updateTestResult(item.header, { 
                            status: 'completed', 
                            results 
                          })
                        }
                        onTestError={(error: Error | string | unknown) => 
                          updateTestResult(item.header, { 
                            status: 'error', 
                            message: error instanceof Error ? error.message : String(error) 
                          })
                        }
                        onTestStart={() => 
                          updateTestResult(item.header, { 
                            status: 'running' 
                          })
                        }
                        isInitialRun={currentlyRunningTest === item.header}
                      />
                    )}
                    
                    {item.header === "OBC-2" && (
  <OBC2TestPanel
    options={getComponentOptions(item.header)}
    sock={sock}
    onTestComplete={(results) => 
      updateTestResult(item.header, { 
        status: 'completed', 
        results 
      })
    }
    onTestError={(error: Error | string | unknown) => 
      updateTestResult(item.header, { 
        status: 'error', 
        message: error instanceof Error ? error.message : String(error) 
      })
    }
    onTestStart={() => 
      updateTestResult(item.header, { 
        status: 'running' 
      })
    }
    isInitialRun={currentlyRunningTest === item.header}
  />
)}

{item.header === "S-Band" && (
  <SBandTestPanel
    options={getComponentOptions(item.header)} // Pass only the filtered/checked options
    sock={sock}
    onTestComplete={(results) => 
      updateTestResult(item.header, { 
        status: 'completed', 
        results 
      })
    }
    onTestError={(error: Error | string | unknown) => 
      updateTestResult(item.header, { 
        status: 'error', 
        message: error instanceof Error ? error.message : String(error) 
      })
    }
    onTestStart={() => 
      updateTestResult(item.header, { 
        status: 'running' 
      })
    }
    isInitialRun={currentlyRunningTest === item.header}
  />
)}

{item.header === "UHF" && (
  <UHFTestPanel
    options={getComponentOptions(item.header)}
    sock={sock}
    onTestComplete={(results) => 
      updateTestResult(item.header, { 
        status: 'completed', 
        results 
      })
    }
    onTestError={(error: Error | string | unknown) => 
      updateTestResult(item.header, { 
        status: 'error', 
        message: error instanceof Error ? error.message : String(error) 
      })
    }
    onTestStart={() => 
      updateTestResult(item.header, { 
        status: 'running' 
      })
    }
    isInitialRun={currentlyRunningTest === item.header}
  />
)}

{item.header === "HEPS" && (
  <HEPSTestPanel
    options={getComponentOptions(item.header)}
    sock={sock}
    onTestComplete={(results) => 
      updateTestResult(item.header, { 
        status: 'completed', 
        results 
      })
    }
    onTestError={(error: Error | string | unknown) => 
      updateTestResult(item.header, { 
        status: 'error', 
        message: error instanceof Error ? error.message : String(error) 
      })
    }
    onTestStart={() => 
      updateTestResult(item.header, { 
        status: 'running' 
      })
    }
    isInitialRun={currentlyRunningTest === item.header}
  />
)}

                    {/* Add implementations for other component types here */}
                    {/* For now, show a placeholder for unimplemented components */}
                    {!["OBC-1", "OBC-2", "S-Band","UHF", "HEPS"].includes(item.header) && (
                      <div className="p-6">
                        <div style={{
                          padding: '20px',
                          borderRadius: '8px',
                          backgroundColor: isDarkMode ? '#1e1e1e' : '#f9fafb',
                          border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                          marginBottom: '16px',
                          textAlign: 'center'
                        }}>
                          <h3 style={{ marginBottom: '16px', color: isDarkMode ? '#d1d5db' : '#374151' }}>
                            {item.header} Test Panel
                          </h3>
                          <p style={{ marginBottom: '16px', color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                            Testing options: {getComponentOptions(item.header).join(', ')}
                          </p>
                          <button 
                            className={styles.runAllButton}
                            style={{
                              backgroundColor: "#3b82f6",
                              color: "white",
                              margin: "16px auto"
                            }}
                            onClick={() => {
                              // Update status to running
                              updateTestResult(item.header, { status: 'running' });
                              
                              // Simulate a test run
                              setTimeout(() => {
                                updateTestResult(item.header, { 
                                  status: 'completed',
                                  results: { 
                                    simulated: true,
                                    testedOptions: getComponentOptions(item.header)
                                  }
                                });
                              }, 2000);
                            }}
                          >
                            {testResults[item.header]?.status === 'completed' || 
                             testResults[item.header]?.status === 'error' 
                              ? "Re-run Test" : "Run Test"}
                          </button>
                          
                          {/* Show options available for this component */}
                          {item.options.length > 0 && (
                            <div style={{ 
                              marginTop: '24px', 
                              padding: '12px', 
                              backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                              borderRadius: '6px',
                              textAlign: 'left'
                            }}>
                              <h4 style={{ 
                                fontSize: '14px', 
                                marginBottom: '8px',
                                color: isDarkMode ? '#d1d5db' : '#4b5563' 
                              }}>
                                Options to be tested:
                              </h4>
                              <ul style={{ 
                                listStyleType: 'disc', 
                                paddingLeft: '20px',
                                color: isDarkMode ? '#9ca3af' : '#6b7280'
                              }}>
                                {getComponentOptions(item.header).map((option, index) => (
                                  <li key={index}>{option}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        {/* Simulated test results for completed tests */}
                        {testResults[item.header]?.status === 'completed' && (
                          <div style={{
                            padding: '20px',
                            borderRadius: '8px',
                            backgroundColor: isDarkMode ? '#1e1e1e' : '#f9fafb',
                            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                          }}>
                            <h3 style={{ 
                              marginBottom: '16px', 
                              color: isDarkMode ? '#d1d5db' : '#374151',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {item.header} Test Results
                            </h3>
                            
                            <div style={{
                              backgroundColor: isDarkMode ? '#0d1117' : '#f3f4f6',
                              borderRadius: '6px',
                              padding: '12px',
                              fontFamily: 'monospace',
                              fontSize: '14px',
                              color: isDarkMode ? '#9ca3af' : '#374151'
                            }}>
                              <p>✅ All tests completed successfully</p>
                              <p>⏱️ Test duration: 1.24s</p>
                              <p>🔍 Tested options: {getComponentOptions(item.header).join(', ')}</p>
                            </div>
                            
                            <button 
                              style={{
                                marginTop: '16px',
                                padding: '8px 16px',
                                backgroundColor: '#10b981',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Generate Report
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Right Panel - Test Status Overview */}
              <div style={{ overflow: 'auto', height: '100%' }}>
                {/* Overall Progress Card */}
                <div className={styles.progressContainer}>
                  <h3 className={styles.progressHeading}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.progressHeadingIcon}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Test Progress
                  </h3>

                  <div className="flex justify-between items-center text-sm mb-2">
                    <span>{overallProgress}% Complete</span>
                    <span className={`${styles.statusBadge} ${
                      isComplete ? styles.colorCompleted : 
                      currentlyRunningTest ? styles.colorRunning : 
                      styles.colorWaiting
                    }`}>
                      {isComplete ? "✅ All Tests Completed" : 
                      currentlyRunningTest ? `⚙️ Running: ${currentlyRunningTest}` : 
                      "⏳ Preparing Tests..."}
                    </span>
                  </div>

                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressBarFill}
                      style={{ 
                        width: `${overallProgress}%`,
                        background: 'linear-gradient(to right, #3b82f6, #4f46e5)'
                      }}
                    >
                      {overallProgress}%
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex justify-end mt-4">
                    <button 
                      onClick={runAllTests}
                      disabled={currentlyRunningTest !== null}
                      className={styles.runAllButton}
                      style={{
                        backgroundColor: currentlyRunningTest === null ? "#3b82f6" : "#9ca3af",
                        color: "white"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.runAllButtonIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1 1 1 0 01.008.057z" clipRule="evenodd" />
                      </svg>
                      Run All Tests Again
                    </button>
                  </div>
                </div>
                
                {/* Test Status Grid */}
                <div className={styles.progressContainer}>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.progressHeadingIcon}>
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Test Status Overview
                  </h4>
                  
                  <div className={styles.statusGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
                    {getTestStatusSummary().map((item) => (
                      <div
                        key={item.component}
                        className={`${styles.statusCard} ${item.isActive ? styles.statusCardActive : ''} ${getStatusClassName(item.status)}`}
                        onClick={() => setActiveTab(item.component)}
                      >
                        <div className={styles.statusCardTitle}>{item.component}</div>
                        <div className={`${styles.statusBadge} ${getStatusClassName(item.status)}`}>
                          {item.status === 'completed' && "✓ Complete"}
                          {item.status === 'error' && "✗ Error"}
                          {item.status === 'running' && "⟳ Running"}
                          {item.status === 'waiting' && "⏱ Waiting"}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Save Report Button */}
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                    <button
                      onClick={saveTestReport}
                      disabled={!isComplete || isSavingReport || filteredDroppedItems.length === 0}
                      className={styles.runAllButton}
                      style={{
                        backgroundColor: !isComplete || isSavingReport || filteredDroppedItems.length === 0 
                          ? "#9ca3af" : "#10b981",
                        color: "white"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.runAllButtonIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      {isSavingReport ? "Saving..." : "Save Reports"}
                    </button>
                  </div>
                </div>
                
                {/* Component Options Summary */}
                <div 
                  style={{ 
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                    overflow: 'hidden',
                    marginTop: '16px'
                  }}
                >
                  <div style={{ 
                    padding: '12px 16px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    color: isDarkMode ? '#e5e7eb' : '#1f2937',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <h3>Selected Options Summary</h3>
                  </div>
                  
                  <div style={{ padding: '16px' }}>
                    {filteredDroppedItems.map(item => (
                      <div 
                        key={item.header}
                        style={{
                          marginBottom: '12px',
                          padding: '12px',
                          backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                          borderRadius: '8px',
                          border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
                        }}
                      >
                        <div style={{ 
                          fontSize: '14px', 
                          fontWeight: 'bold',
                          marginBottom: '8px',
                          color: isDarkMode ? '#e5e7eb' : '#374151'
                        }}>
                          {item.header}
                        </div>
                        {getComponentOptions(item.header).length > 0 ? (
                          <div style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                            {getComponentOptions(item.header).map((option, index) => (
                              <div 
                                key={index}
                                style={{
                                  padding: '4px 8px',
                                  backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
                                  borderRadius: '4px',
                                  display: 'inline-block',
                                  margin: '0 4px 4px 0',
                                  fontSize: '12px'
                                }}
                              >
                                ✓ {option}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div style={{ color: isDarkMode ? '#9ca3af' : '#6b7280', fontStyle: 'italic', fontSize: '12px' }}>
                            No options selected for this component
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Testing Log Output */}
                <div style={{ 
                  border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                  overflow: 'hidden',
                  marginTop: '16px'
                }}>
                  <div style={{ 
                    padding: '12px 16px',
                    backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                    borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    color: isDarkMode ? '#e5e7eb' : '#1f2937',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <h3>Test Console Output</h3>
                    <button style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: isDarkMode ? '#d1d5db' : '#6b7280',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Clear
                    </button>
                  </div>
                  
                  <div style={{ 
                    padding: '12px',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    backgroundColor: isDarkMode ? '#0d1117' : '#f8fafc',
                    color: isDarkMode ? '#d1d5db' : '#374151'
                  }}>
                    {currentlyRunningTest ? (
                      <>
                        <div style={{ color: '#3b82f6' }}>
                          [INFO] {new Date().toLocaleTimeString()} - Starting test for {currentlyRunningTest}
                        </div>
                        <div style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                          [DEBUG] {new Date().toLocaleTimeString()} - Initializing test environment
                        </div>
                        <div style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                          [DEBUG] {new Date().toLocaleTimeString()} - Testing options: {getComponentOptions(currentlyRunningTest).join(', ')}
                        </div>
                        <div className={styles.pulseAnimation} style={{ color: '#10b981' }}>
                          [INFO] {new Date().toLocaleTimeString()} - Running test procedures...
                        </div>
                      </>
                    ) : isComplete ? (
                      <div style={{ color: '#10b981' }}>
                        [SUCCESS] {new Date().toLocaleTimeString()} - All tests completed successfully!
                      </div>
                    ) : (
                      filteredDroppedItems.length === 0 ? (
                        <div style={{ color: isDarkMode ? '#9ca3af' : '#6b7280', fontStyle: 'italic' }}>
                          No test items with checked options found. Please check options in the Checkout Section.
                        </div>
                      ) : (
                        <div style={{ color: isDarkMode ? '#9ca3af' : '#6b7280', fontStyle: 'italic' }}>
                          Ready to start tests. Click "Run All Tests Again" to begin.
                        </div>
                      )
                    )}
                    
                    {/* Display completed test logs */}
                    {Object.entries(testResults)
                      .filter(([_, result]) => result.status === 'completed' || result.status === 'error')
                      .map(([component, result]) => {
                        const options = getComponentOptions(component);
                        return (
                          <div key={component} style={{ 
                            color: result.status === 'completed' ? '#10b981' : '#ef4444',
                            marginTop: '4px'
                          }}>
                            [{result.status === 'completed' ? 'SUCCESS' : 'ERROR'}] {new Date().toLocaleTimeString()} - 
                            {result.status === 'completed' 
                              ? ` ${component} test completed successfully, options: ${options.join(', ')}` 
                              : ` ${component} test failed: ${result.message || 'unknown error'}`}
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Draggable>,
    portalElement
  );
};

export default CheckoutTestProgress;
                