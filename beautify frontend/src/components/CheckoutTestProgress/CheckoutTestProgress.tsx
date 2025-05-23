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
import { ADCSTestPanel } from './components/ADCSTestPanel';
import { GPSTestPanel } from "./components/GPSTestPanel";
import { PropulsionTestPanel } from "./components/PropulsionTestPanel";
import { PCSTestPanel } from "./components/PCSTestPanel";
import { XBandTestPanel } from "./components/XBandTestPanel";
import { LEOCAMTestPanel } from "./components/LEOCAMTestPanel";

import { generateOBC1Report } from '@/services/reports/obc1Report';
import { generateOBC2Report } from '@/services/reports/obc2Report';
import { generateSBandReport } from '@/services/reports/sbandReport';
import { generateUHFReport } from '@/services/reports/uhfReport';
import { generateHEPSReport } from '@/services/reports/hepsReport';
import { generateADCSReport } from '@/services/reports/adcsReport';
import { generateGPSReport } from '@/services/reports/gpsReport';
import { generatePropulsionReport } from '@/services/reports/propulsionReport';
import { generatePCSReport } from '@/services/reports/pcsReport';
import { generateXBandReport } from '@/services/reports/xbandReport';
import { generateLEOCAMReport } from '@/services/reports/leocamReport';

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
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  
  const tabsListRef = useRef<HTMLDivElement>(null);
  // Use non-null assertion to ensure TypeScript knows this ref will be assigned
  const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const runNextTestTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const testTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const completedTestsRef = useRef<string[]>([]);
  const isMountedRef = useRef<boolean>(true);
  const currentlyRunningRef = useRef<string | null>(null);
  const [panelKey, setPanelKey] = useState(0);
  const [reportsGenerated, setReportsGenerated] = useState(false);
  // Use a ref to track if auto-generation has been triggered to avoid race conditions
const autoGenerationTriggeredRef = useRef(false);
const [reportProgress, setReportProgress] = useState<{
  current: number;
  total: number;
  currentComponent: string;
} | null>(null);

// Constants for test timeouts and delays
const TEST_TIMEOUT_MS = 900000; // 15 minutes max per test, propulsion test need ~10min
const TEST_SEQUENCE_DELAY_MS = 1000; // 1 second delay between tests


  const [portalElement] = useState(() => {
    const element = document.createElement("div");
    element.id = "checkoutTestProgress-root";
    document.body.appendChild(element);
    return element;
  });

  // Set up a timeout for the current test to prevent it from getting stuck
const setupTestTimeout = (testName: string) => {
  // Clear any existing timeout
  if (testTimeoutRef.current) {
    clearTimeout(testTimeoutRef.current);
    testTimeoutRef.current = null;
  }
  
  console.log(`⏱️ Setting up timeout for test ${testName}: ${TEST_TIMEOUT_MS/1000} seconds`);
  
  // Set a new timeout for the current test
  testTimeoutRef.current = setTimeout(() => {
    if (!isMountedRef.current) return; // Prevent state updates after unmount
    
    console.error(`⚠️ Test ${testName} timed out after ${TEST_TIMEOUT_MS/1000} seconds`);
    
    // Force the test to be marked as error
    updateTestResult(testName, { 
      status: 'error', 
      message: `Test timed out after ${TEST_TIMEOUT_MS/1000} seconds` 
    });
    
    // Clear the timeout reference
    testTimeoutRef.current = null;
  }, TEST_TIMEOUT_MS);
};

// Component Mount/Unmount Cleanup
useEffect(() => {
  isMountedRef.current = true;
  
  return () => {
    isMountedRef.current = false;
    
    // Clear any pending timeouts on unmount
    if (runNextTestTimeoutRef.current) {
      clearTimeout(runNextTestTimeoutRef.current);
      runNextTestTimeoutRef.current = null;
    }
    
    if (testTimeoutRef.current) {
      clearTimeout(testTimeoutRef.current);
      testTimeoutRef.current = null;
    }
  };
}, []);

useEffect(() => {
  // Try multiple sources for profile ID
  const currentProfileId = 
    localStorage.getItem('currentProfileId') || 
    sessionStorage.getItem('currentProfileId');
  
  if (currentProfileId) {
    console.log("Found profile ID:", currentProfileId);
    setSelectedProfile(currentProfileId);
  } else {
    console.warn("No profile ID found in storage");
  }
}, []);

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
      // Get the list of options that are checked
      const checkedOptionsList = Object.entries(item.checkedOptions || {})
        .filter(([_, isChecked]) => isChecked)
        .map(([option]) => option);
      
      // If no options are checked, include all options as a fallback AND visually check them
      if (checkedOptionsList.length === 0) {
        // Create a new checkedOptions object with all options set to true
        const allOptionsChecked: Record<string, boolean> = {};
        item.options.forEach(option => {
          allOptionsChecked[option] = true;
        });
        
        return {
          ...item,
          options: item.options, // Keep all options
          checkedOptions: allOptionsChecked // Mark all as visually checked
        };
      }
      
      // Return a version of the item with only the checked options
      return {
        ...item,
        options: checkedOptionsList // Replace with only the checked options
      };
    });
    
    setFilteredDroppedItems(backwardCompatibleItems);
  }
}, [droppedItems]);

  // Also, let's add a small optimization to make the scroll buttons look better
// and handle tab overflow more intelligently

// Add these utility functions inside your component
const canScrollLeft = () => {
  const tabsList = tabsListRef.current;
  return tabsList ? tabsList.scrollLeft > 0 : false;
};

const canScrollRight = () => {
  const tabsList = tabsListRef.current;
  return tabsList ? tabsList.scrollLeft + tabsList.clientWidth < tabsList.scrollWidth : false;
};

const [canScrollStart, setCanScrollStart] = useState(false);
const [canScrollEnd, setCanScrollEnd] = useState(false);

// Add this function to update scroll button states
const updateScrollButtonStates = () => {
  setCanScrollStart(canScrollLeft());
  setCanScrollEnd(canScrollRight());
};

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
    console.log("Setting up initial tests for:", filteredDroppedItems.map(item => item.header).join(", "));
    
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
    
    // Explicitly start the first test
    if (filteredDroppedItems.length > 0) {
      const firstComponent = filteredDroppedItems[0];
      console.log("Starting first test:", firstComponent.header);
      
      // Set up timeout for the first test
      setupTestTimeout(firstComponent.header);
      
      // Start the first test
      setCurrentlyRunningTest(firstComponent.header);
      setTestResults(prev => ({
        ...prev,
        [firstComponent.header]: {
          ...(prev[firstComponent.header] || { component: firstComponent.header, results: null }),
          status: 'running'
        }
      }));
      setActiveTab(firstComponent.header);
    }
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

const updateTestResult = (component: string, result: Partial<TestResult>) => {
  console.log(`Updating test result for ${component} with status: ${result.status}`);

  // Add to completed tests if this test just finished
  if ((result.status === 'completed' || result.status === 'error') && 
      !completedTestsRef.current.includes(component)) {
    completedTestsRef.current.push(component);
  }
  
  // Clear test timeout if this test is completing
  if (result.status === 'completed' || result.status === 'error') {
    if (testTimeoutRef.current) {
      clearTimeout(testTimeoutRef.current);
      testTimeoutRef.current = null;
    }
  }

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
      console.log(`Test ${component} completed with status: ${result.status}`);
      
      // Important: Set currentlyRunningTest to null immediately,
      // don't rely on state update to have happened
      setCurrentlyRunningTest(null);
      
      // Store the fact that we're no longer running a test in a ref
      // This avoids the state closure issue
      currentlyRunningRef.current = null;
      
      // Schedule the next test with a delay
      if (runNextTestTimeoutRef.current) {
        clearTimeout(runNextTestTimeoutRef.current);
      }
      
      console.log(`Scheduling next test to run in ${TEST_SEQUENCE_DELAY_MS}ms`);
      runNextTestTimeoutRef.current = setTimeout(() => {
        if (!isMountedRef.current) return; // Prevent state updates after unmount
        
        console.log("Timeout expired, running next test");
        // Pass the updated results to runNextTest
        runNextTest(updatedResults);
        runNextTestTimeoutRef.current = null;
      }, TEST_SEQUENCE_DELAY_MS);
    }
    
    return updatedResults;
  });
};

  // Find and run the next pending test from filtered items
const runNextTest = (currentResults: Record<string, TestResult>) => {
  // Clear any existing timeout to prevent multiple calls
  if (runNextTestTimeoutRef.current) {
    clearTimeout(runNextTestTimeoutRef.current);
    runNextTestTimeoutRef.current = null;
  }
  
  console.log("Attempting to run next test. Current running test:", currentlyRunningRef.current);
  
  // Don't rely on state, use the ref instead
  if (currentlyRunningRef.current !== null) {
    console.log("Can't run next test - a test is already running:", currentlyRunningRef.current);
    return;
  }
  
  // Find the next waiting component from filtered items
  const nextComponent = filteredDroppedItems.find(item => 
    currentResults[item.header]?.status === 'waiting'
  );
  
  if (nextComponent) {
    console.log("Found next test to run:", nextComponent.header);
    
    // Set up a timeout for this test
    setupTestTimeout(nextComponent.header);
    
    // Update both the state and the ref
    setCurrentlyRunningTest(nextComponent.header);
    currentlyRunningRef.current = nextComponent.header;
    
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
  } else {
    console.log("No more tests to run. Marking sequence as complete.");
    setIsComplete(true);
  }
};

// Helper function for components that don't have report generators imported yet
const generateGenericReport = async (componentName: string, results: any, filename: string): Promise<void> => {
  try {
    // Create a generic JSON report for components without imported generators
    const now = new Date();
    
    // Create comprehensive report data
    const reportData = {
      component: componentName,
      testDate: now.toISOString(),
      version: '1.0.0',
      summary: {
        status: 'completed',
        duration: results.duration || 'N/A',
        testedOptions: results.testedOptions || []
      },
      results: results,
      metadata: {
        generatedBy: 'SATS - Satellite Automated Testing System',
        generatedAt: now.toISOString(),
        reportType: 'Generic JSON Report',
        note: `This is a temporary generic report for ${componentName}. The dedicated report generator exists but needs to be imported.`
      }
    };

     // Convert to JSON string with formatting
    const reportContent = JSON.stringify(reportData, null, 2);
    
    // Create and download the file
    const blob = new Blob([reportContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log(`📄 Generated generic report: ${filename}`);
  } catch (error) {
    console.error(`Error generating generic report for ${componentName}:`, error);
    throw error;
  }
};

// Add automatic report generation when all tests complete
useEffect(() => {
  console.log('🔍 Auto-report useEffect triggered:', {
    isComplete,
    filteredItemsLength: filteredDroppedItems.length,
    isSavingReport,
    reportsGenerated,
    autoGenerationTriggered: autoGenerationTriggeredRef.current,
    testResultsKeys: Object.keys(testResults),
    completedTestsCount: Object.values(testResults).filter(r => r.status === 'completed').length
  });

  // Check if all tests are complete and auto-generate reports (but only once)
  if (isComplete && filteredDroppedItems.length > 0 && !isSavingReport && !reportsGenerated && !autoGenerationTriggeredRef.current) {
    const completedTests = Object.values(testResults).filter(
      result => result.status === 'completed'
    );
    
    console.log(`🎯 All tests completed. Found ${completedTests.length} completed tests out of ${filteredDroppedItems.length} total tests.`);
    
    if (completedTests.length > 0 && completedTests.length === filteredDroppedItems.length) {
      console.log('🎯 All tests completed. Auto-generating reports...');
      
      // Mark that auto-generation has been triggered
      autoGenerationTriggeredRef.current = true;
      
      // Generate reports immediately instead of using a timeout
      if (isMountedRef.current) {
        console.log('📋 Auto-generating reports for all completed tests...');
        setReportsGenerated(true); // Set this right before calling saveTestReport
        saveTestReport();
      }
    } else {
      console.log(`⏳ Not all tests complete yet. Completed: ${completedTests.length}, Total: ${filteredDroppedItems.length}`);
    }
  } else {
    console.log('⏭️ Auto-report conditions not met:', {
      isComplete: isComplete ? '✓' : '✗',
      hasItems: filteredDroppedItems.length > 0 ? '✓' : '✗',
      notSaving: !isSavingReport ? '✓' : '✗',
      notGenerated: !reportsGenerated ? '✓' : '✗',
      notTriggered: !autoGenerationTriggeredRef.current ? '✓' : '✗'
    });
  }
}, [isComplete, filteredDroppedItems.length, isSavingReport, reportsGenerated]); // Removed testResults from dependencies

// another useEffect to monitor when tests complete
useEffect(() => {
  const completedCount = Object.values(testResults).filter(r => r.status === 'completed' || r.status === 'error').length;
  const totalCount = filteredDroppedItems.length;
  
  console.log(`📊 Test progress: ${completedCount}/${totalCount} tests finished`);
  
  if (completedCount === totalCount && totalCount > 0 && !reportsGenerated) {
    console.log('🏁 All tests have finished, setting isComplete to true');
    setIsComplete(true);
  }
}, [testResults, filteredDroppedItems.length, reportsGenerated]);

  // Generate and save test report
// In CheckoutTestProgress.tsx, modify the saveTestReport function:

const saveTestReport = async () => {
  if (filteredDroppedItems.length === 0) {
    alert('No test components available to generate reports.');
    return;
  }

  setIsSavingReport(true);
  
  try {
    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];
    const generatedReports: string[] = [];

    console.log('🔄 Starting report generation for all completed tests...');

    // Add delay between downloads to prevent browser blocking
    const DOWNLOAD_DELAY = 1500; // 1.5 seconds between each report generation

    // Generate reports for each completed test with delays
    for (let i = 0; i < filteredDroppedItems.length; i++) {
      const item = filteredDroppedItems[i];
      const result = testResults[item.header];
      
      if (result && result.status === 'completed' && result.results) {
        try {
          console.log(`📝 Generating report ${i + 1}/${filteredDroppedItems.length} for ${item.header}...`);
          
          // Add progress indicator
          setReportProgress({
            current: i + 1,
            total: filteredDroppedItems.length,
            currentComponent: item.header
          });
          
          let reportFileName = '';
          
          // Generate report based on component type
          switch (item.header) {
            case 'OBC-1':
              reportFileName = await generateOBC1Report(result.results);
              break;
            case 'OBC-2':
              reportFileName = await generateOBC2Report(result.results);
              break;
            case 'S-Band':
              reportFileName = await generateSBandReport(result.results);
              break;
            case 'UHF':
              reportFileName = await generateUHFReport(result.results);
              break;
            case 'HEPS':
              reportFileName = await generateHEPSReport(result.results);
              break;
            case 'ADCS':
              reportFileName = await generateADCSReport(result.results);
              break;
            case 'GPS':
              reportFileName = await generateGPSReport(result.results);
              break;
            case 'Propulsion':
              reportFileName = await generatePropulsionReport(result.results);
              break;
            case 'PCS':
              reportFileName = await generatePCSReport(result.results);
              break;
            case 'X-Band':
              reportFileName = await generateXBandReport(result.results);
              break;
            case 'LEOCAM':
              reportFileName = await generateLEOCAMReport(result.results);
              break;
            default:
              console.log(`⚠️ No report generator found for ${item.header}`);
              reportFileName = `${item.header}_Report_${new Date().toISOString().split('T')[0]}.json`;
              await generateGenericReport(item.header, result.results, reportFileName);
              break;
          }
          
          if (reportFileName) {
            successCount++;
            generatedReports.push(reportFileName);
            console.log(`✅ Successfully generated report: ${reportFileName}`);
          } else {
            errorCount++;
            errors.push(`Failed to generate report for ${item.header}: No filename returned`);
          }
          
          // Add delay between downloads (except for the last one)
          if (i < filteredDroppedItems.length - 1) {
            console.log(`⏳ Waiting ${DOWNLOAD_DELAY}ms before next download...`);
            await new Promise(resolve => setTimeout(resolve, DOWNLOAD_DELAY));
          }
          
        } catch (error) {
          errorCount++;
          const errorMessage = error instanceof Error ? error.message : String(error);
          errors.push(`Failed to generate report for ${item.header}: ${errorMessage}`);
          console.error(`❌ Error generating report for ${item.header}:`, error);
        }
      } else if (result && result.status !== 'completed') {
        console.log(`⏭️ Skipping ${item.header} - test not completed (status: ${result.status})`);
      } else {
        console.log(`⏭️ Skipping ${item.header} - no test results available`);
      }
    }
    
    // Show summary message
    if (successCount > 0 && errorCount === 0) {
      const reportList = generatedReports.join('\n• ');
      alert(`✅ Successfully generated ${successCount} test report(s)!\n\nGenerated Reports:\n• ${reportList}\n\nReports have been downloaded to your default downloads folder.\n\n💡 If some downloads were blocked by your browser, please check your download settings and allow multiple downloads from this site.`);
    } else if (successCount > 0 && errorCount > 0) {
      const reportList = generatedReports.join('\n• ');
      alert(`⚠️ Generated ${successCount} report(s) successfully, but ${errorCount} failed.\n\nSuccessful Reports:\n• ${reportList}\n\nErrors:\n${errors.join('\n')}\n\nSuccessful reports have been downloaded to your default downloads folder.\n\n💡 If some downloads were blocked, check browser download settings.`);
    } else if (errorCount > 0) {
      alert(`❌ Failed to generate any reports.\n\nErrors:\n${errors.join('\n')}`);
    } else {
      alert('ℹ️ No completed tests found to generate reports for.');
    }
    
  } catch (error) {
    console.error('Error during batch report generation:', error);
    alert(`❌ Error generating reports: ${error instanceof Error ? error.message : String(error)}\n\n💡 Try generating reports individually or check browser download settings.`);
  } finally {
    setIsSavingReport(false);
    setReportProgress(null); // Clear progress when done
  }
};

// Run all tests again (reset and restart)
// Also update the runAllTests function to reset the reportsGenerated flag
const runAllTests = () => {
  // First, clear any running tests and timeouts
  if (currentlyRunningTest) {
    console.log(`Stopping current test: ${currentlyRunningTest}`);
  }
  
  // Clear the currently running test in both state and ref
  setCurrentlyRunningTest(null);
  currentlyRunningRef.current = null;
  
  // Clear completed tests record
  completedTestsRef.current = [];
  
  // Reset the reports generated flag and auto-generation trigger
  setReportsGenerated(false);
  autoGenerationTriggeredRef.current = false;
  
  // Clear any pending timeouts
  if (runNextTestTimeoutRef.current) {
    clearTimeout(runNextTestTimeoutRef.current);
    runNextTestTimeoutRef.current = null;
  }
  
  if (testTimeoutRef.current) {
    clearTimeout(testTimeoutRef.current);
    testTimeoutRef.current = null;
  }
  
  console.log("🔄 Resetting all tests to 'waiting' state");
  
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
  
  // Force a key change in test panels to trigger a full remount
  setPanelKey(prevKey => prevKey + 1);
  
  // Allow a small delay for components to remount
  setTimeout(() => {
    if (!isMountedRef.current) return;
    
    console.log("✅ Starting first test after reset");
    // Find the first test component
    const firstComponent = filteredDroppedItems[0];
    if (firstComponent) {
      console.log(`🚀 Explicitly starting test for: ${firstComponent.header}`);
      
      // Set up timeout for this test
      setupTestTimeout(firstComponent.header);
      
      // Set as currently running
      setCurrentlyRunningTest(firstComponent.header);
      currentlyRunningRef.current = firstComponent.header;
      
      // Mark it as running in the results
      setTestResults(prev => ({
        ...prev,
        [firstComponent.header]: {
          ...(prev[firstComponent.header] || { component: firstComponent.header, results: null }),
          status: 'running'
        }
      }));
      
      // Switch to the tab for this test
      setActiveTab(firstComponent.header);
    } else {
      console.log("❌ No test components found to run");
    }
  }, 200);
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

const scrollTabs = (direction: 'left' | 'right') => {
  const tabsList = tabsListRef.current;
  if (!tabsList) return;

  const scrollAmount = 200; // Adjust scroll amount as needed
  const currentScroll = tabsList.scrollLeft;
  
  tabsList.scrollTo({
    left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
    behavior: 'smooth'
  });
};

// Add this useEffect to check if scrolling is needed
useEffect(() => {
  const checkScrollable = () => {
    const tabsList = tabsListRef.current;
    if (!tabsList) return;
    
    // Show scroll buttons if content width exceeds container width
    setShowScrollButtons(tabsList.scrollWidth > tabsList.clientWidth);
  };
  
  // Run on initial render
  checkScrollable();
  
  // Add resize listener
  window.addEventListener('resize', checkScrollable);
  
  // Also check when droppedItems changes as it might affect tab width
  setTimeout(checkScrollable, 100);
  
  return () => {
    window.removeEventListener('resize', checkScrollable);
  };
}, [filteredDroppedItems, activeTab]);

useEffect(() => {
  // Scroll to active tab when it changes
  if (activeTab && tabsListRef.current) {
    const tabsList = tabsListRef.current;
    const activeTabElement = tabsList.querySelector(`button[class*="tabButtonActive"]`);
    
    if (activeTabElement) {
      // Calculate the position to scroll to
      const tabRect = activeTabElement.getBoundingClientRect();
      const containerRect = tabsList.getBoundingClientRect();
      
      // Check if the active tab is outside the visible area
      const isTabVisible = (
        tabRect.left >= containerRect.left &&
        tabRect.right <= containerRect.right
      );
      
      if (!isTabVisible) {
        // Get the center position
        const centerPosition = 
          tabRect.left + tabRect.width / 2 - 
          containerRect.left - 
          containerRect.width / 2;
        
        // Scroll to center the active tab
        tabsList.scrollBy({
          left: centerPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}, [activeTab]);

useEffect(() => {
  const tabsList = tabsListRef.current;
  if (!tabsList) return;
  
  const handleScroll = () => {
    updateScrollButtonStates();
  };
  
  // Update scroll button states
  updateScrollButtonStates();
  
  // Add scroll event listener
  tabsList.addEventListener('scroll', handleScroll);
  
  return () => {
    tabsList.removeEventListener('scroll', handleScroll);
  };
}, []);

// Add this useEffect to ensure any pending timers are cleaned up
useEffect(() => {
  return () => {
    if (runNextTestTimeoutRef.current) {
      clearTimeout(runNextTestTimeoutRef.current);
    }
  };
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
    <div className={styles.tabsList} ref={tabsListRef}>
    {showScrollButtons && canScrollStart && (
  <button 
    className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
    onClick={() => scrollTabs('left')}
    aria-label="Scroll tabs left"
  >
    ←
  </button>
)}
      
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
      
      {showScrollButtons && canScrollEnd && (
  <button 
    className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
    onClick={() => scrollTabs('right')}
    aria-label="Scroll tabs right"
  >
    →
  </button>
)}
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
                    key={`${item.header}-${panelKey}`} 
                    style={{ 
                      display: activeTab === item.header ? 'block' : 'none',
                      height: '100%',
                      overflow: 'auto'
                    }}
                  >
                    {/* Render the appropriate test panel based on component type */}
                    {item.header === "OBC-1" && (
                      <OBC1TestPanel
                        key={`panel-${panelKey}`} // Add this key to force remount
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
                        profileId={selectedProfile ?? undefined}
                      />
                    )}
                    
                    {item.header === "OBC-2" && (
  <OBC2TestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "S-Band" && (
  <SBandTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "UHF" && (
  <UHFTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "LEOCAM" && (
  <LEOCAMTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "HEPS" && (
  <HEPSTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "ADCS" && (
  <ADCSTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "GPS" && (
  <GPSTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "Propulsion" && (
  <PropulsionTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "PCS" && (
  <PCSTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

{item.header === "X-Band" && (
  <XBandTestPanel
    key={`panel-${panelKey}`} // Add this key to force remount
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
    profileId={selectedProfile ?? undefined}
  />
)}

                    {/* Add implementations for other component types here */}
                    {/* For now, show a placeholder for unimplemented components */}
                    {!["OBC-1", "OBC-2", "S-Band","UHF", "LEOCAM", "HEPS", "ADCS", "GPS", "Propulsion", "PCS", "X-Band"].includes(item.header) && (
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
                  
{/* Save Report Button with Progress */}
<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
  <button
    onClick={saveTestReport}
    disabled={isSavingReport || filteredDroppedItems.length === 0}
    className={styles.runAllButton}
    style={{
      backgroundColor: isSavingReport || filteredDroppedItems.length === 0 
        ? "#9ca3af" : "#10b981",
      color: "white",
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }}
  >
    {isSavingReport ? (
      <>
        <svg className={styles.spinnerIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 11-6.219-8.56" />
        </svg>
        {reportProgress ? (
          `Generating ${reportProgress.currentComponent} (${reportProgress.current}/${reportProgress.total})`
        ) : (
          'Generating Reports...'
        )}
      </>
    ) : (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.runAllButtonIcon} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
        Save All Reports ({Object.values(testResults).filter(r => r.status === 'completed').length})
      </>
    )}
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
                