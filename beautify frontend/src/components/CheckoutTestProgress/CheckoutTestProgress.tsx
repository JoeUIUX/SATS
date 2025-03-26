// src/components/CheckoutTestProgress/CheckoutTestProgress.tsx
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import { Button, Progress, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";

// Import individual component test modules
import { OBC1TestPanel } from "./components/OBC1TestPanel";
//import { OBC2TestPanel } from "./components/OBC2TestPanel";
// Import other test panels as you implement them
// import { SBandTestPanel } from "./components/SBandTestPanel";
// etc.

interface CheckoutItem {
  id: string;
  header: string;
  options: string[];
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
  const nodeRef = useRef<HTMLDivElement>(null);
  const [portalElement] = useState(() => {
    const element = document.createElement("div");
    element.id = "checkoutTestProgress-root";
    document.body.appendChild(element);
    return element;
  });

  // Generate component map for easy lookups
  const componentMap = droppedItems.reduce((acc, item) => {
    acc[item.header] = item;
    return acc;
  }, {} as Record<string, CheckoutItem>);

  // Set initial active tab to the first dropped item
  useEffect(() => {
    if (droppedItems.length > 0 && !activeTab) {
      setActiveTab(droppedItems[0].header);
    }
  }, [droppedItems]);

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

  // Calculate overall progress
  const updateOverallProgress = () => {
    if (droppedItems.length === 0) return;

    const completedCount = Object.values(testResults).filter(
      result => result.status === 'completed' || result.status === 'error'
    ).length;
    
    const newProgress = Math.floor((completedCount / droppedItems.length) * 100);
    setOverallProgress(newProgress);
    
    // Check if all tests are complete
    if (completedCount === droppedItems.length) {
      setIsComplete(true);
    }
  };

  // Update a specific test result
  const updateTestResult = (component: string, result: Partial<TestResult>) => {
    setTestResults(prev => ({
      ...prev,
      [component]: {
        ...(prev[component] || { component, status: 'waiting', results: null }),
        ...result
      }
    }));
  };

  // Generate and save test report
  const saveTestReport = async () => {
    setIsSavingReport(true);
    
    try {
      // Call report generation for each completed test
      for (const item of droppedItems) {
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

  // Safely reuse position from session storage or use defaults
  const savedPosition = (() => {
    try {
      const saved = sessionStorage.getItem('checkoutTestPositionPosition');
      return saved ? JSON.parse(saved) : {
        x: (window.innerWidth - 800) / 2, // Wider window for tabs
        y: (window.innerHeight - 600) / 2
      };
    } catch (e) {
      return {
        x: (window.innerWidth - 800) / 2,
        y: (window.innerHeight - 600) / 2
      };
    }
  })();

  const [position, setPosition] = useState(savedPosition);

  // Save position to sessionStorage when it changes
  useEffect(() => {
    sessionStorage.setItem('checkoutTestPositionPosition', JSON.stringify(position));
  }, [position]);

  const handleWindowClick = () => {
    onMouseDown();
  };

  return createPortal(
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      position={position}
      onStop={(e, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
    >
      <div
        ref={nodeRef}
        style={{
          position: "fixed",
          zIndex,
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: isDarkMode ? "#fff" : "#000",
          width: "800px", // Wider window to accommodate tabs
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`,
          overflow: "hidden",
        }}
        onClick={handleWindowClick}
      >
        <div
          className="drag-handle"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            backgroundColor: isDarkMode ? "#2c2c2c" : "#f0f0f0",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            cursor: "grab",
          }}
        >
          <h2 style={{ margin: 0 }}>Checkout Test Progress</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            style={{
              color: isDarkMode ? "white" : "black",
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span>Overall Progress</span>
              <span>{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="w-full" />
          </div>

          {droppedItems.length > 0 ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-4">
                {droppedItems.map(item => (
                  <TabsTrigger key={item.header} value={item.header} className="flex-1">
                    {item.header}
                    {testResults[item.header]?.status === 'completed' && (
                      <span className="ml-2 text-green-500">✓</span>
                    )}
                    {testResults[item.header]?.status === 'error' && (
                      <span className="ml-2 text-red-500">✗</span>
                    )}
                    {testResults[item.header]?.status === 'running' && (
                      <span className="ml-2 animate-pulse">⟳</span>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {droppedItems.map(item => (
                <TabsContent key={item.header} value={item.header} className="p-0">
                  {/* Render the appropriate test panel based on component type */}
                  {item.header === "OBC-1" && (
                    <OBC1TestPanel
                      options={item.options}
                      sock={sock}
                      onTestComplete={(results) => 
                        updateTestResult(item.header, { 
                          status: 'completed', 
                          results 
                        })
                      }
                      onTestError={(error) => 
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
                    />
                  )}
                  
                  {item.header === "OBC-2" && (
                    <OBC2TestPanel
                      options={item.options}
                      sock={sock}
                      onTestComplete={(results) => 
                        updateTestResult(item.header, { 
                          status: 'completed', 
                          results 
                        })
                      }
                      onTestError={(error) => 
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
                    />
                  )}
                  
                  {/* Add additional component types as you implement them */}
                  {/* For now, show a placeholder for unimplemented components */}
                  {!["OBC-1", "OBC-2"].includes(item.header) && (
                    <div className="p-6 text-center">
                      <p>Test implementation for {item.header} is not available yet.</p>
                      <Button 
                        className="mt-4"
                        onClick={() => {
                          // Simulate a test run
                          updateTestResult(item.header, { status: 'running' });
                          setTimeout(() => {
                            updateTestResult(item.header, { 
                              status: 'completed',
                              results: { simulated: true }
                            });
                          }, 2000);
                        }}
                      >
                        Simulate Test
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className="p-6 text-center">
              <p>No test items selected. Please add items to the Checkout Section and try again.</p>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <Button
              onClick={onClose}
              variant="outline"
              disabled={!isComplete && droppedItems.length > 0}
            >
              Close
            </Button>
            <Button
              onClick={saveTestReport}
              disabled={!isComplete || isSavingReport || droppedItems.length === 0}
            >
              {isSavingReport ? "Saving..." : "Save Reports"}
            </Button>
          </div>
        </div>
      </div>
    </Draggable>,
    portalElement
  );
};

export default CheckoutTestProgress;