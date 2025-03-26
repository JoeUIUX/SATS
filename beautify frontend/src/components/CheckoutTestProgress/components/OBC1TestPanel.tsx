// src/components/CheckoutTestProgress/components/OBC1TestPanel.tsx
import React, { useState, useEffect } from 'react';
import { Button, Progress, Card, CardContent, Alert } from '@/components/ui';
import { mccifSet, mccifRead } from '@/utils/mccUtils';

// Import the OBC1-specific functions
import { runOBC1Checkout } from '@/services/checkout/obc1Checkout';
import { generateOBC1Report } from '@/services/reports/obc1Report';

interface OBC1TestPanelProps {
  options: string[];
  sock: any;
  onTestComplete: (results: any) => void;
  onTestError: (error: any) => void;
  onTestStart: () => void;
}

export const OBC1TestPanel: React.FC<OBC1TestPanelProps> = ({
  options,
  sock,
  onTestComplete,
  onTestError,
  onTestStart
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [autoStart, setAutoStart] = useState(true);
  
  // Determine if eMMC option is enabled
  const enableEmmc = options.includes('eMMC');
  
  // Auto-start the test when the component mounts
  useEffect(() => {
    if (autoStart) {
      startTest();
    }
  }, []);
  
  // Main function to run the test
  const startTest = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setProgress(0);
    setError(null);

    setProgress(0);
    setError(null);
    
    try {
      // Notify parent that the test has started
      onTestStart();
      
      // Begin the test process
      setCurrentStep('Starting OBC-1 Checkout');
      
      // Run the OBC-1 checkout test with progress updates
      const results = await runOBC1Checkout(sock, enableEmmc, (step, percent) => {
        setCurrentStep(step);
        setProgress(percent);
      });
      
      // Save the results locally
      setResults(results);
      
      // Notify parent that the test is complete
      onTestComplete(results);
      
    } catch (error) {
      console.error('Error running OBC-1 checkout:', error);
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
      const reportFile = await generateOBC1Report(results);
      alert(`OBC-1 report saved: ${reportFile}`);
    } catch (error) {
      console.error('Error generating report:', error);
      setError(error instanceof Error ? error.message : String(error));
    }
  };
  
  return (
    <div className="p-4 space-y-4">
      {error && (
        <Alert variant="destructive">
          <p>{error}</p>
        </Alert>
      )}
      
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">OBC-1 Test Status</h3>
            <div className="text-sm">
              {isRunning ? 'Running...' : results ? 'Complete' : 'Ready'}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{currentStep}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
          
          <div className="mb-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">eMMC Testing:</span>
              <span>{enableEmmc ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
          
          {!isRunning && !results && (
            <Button onClick={startTest} className="mt-2" disabled={isRunning}>
              Run Test Manually
            </Button>
          )}
        </CardContent>
      </Card>
      
      {results && (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Firmware</h3>
              <p>Version: {results.firmware.major}.{results.firmware.minor}.{results.firmware.patch}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Voltages</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>3V3 D: {results.vi.d3v3.value} mV</div>
                <div className={results.vi.d3v3.pass ? "text-green-500" : "text-red-500"}>
                  {results.vi.d3v3.pass ? "PASS" : "FAIL"}
                </div>
                
                <div>PS 3V3 OBC-2: {results.vi.ps3v3Obc2.value} mV</div>
                <div className={results.vi.ps3v3Obc2.pass ? "text-green-500" : "text-red-500"}>
                  {results.vi.ps3v3Obc2.pass ? "PASS" : "FAIL"}
                </div>
                
                <div>PS 5V OBC-2: {results.vi.ps5vObc2.value} mV</div>
                <div className={results.vi.ps5vObc2.pass ? "text-green-500" : "text-red-500"}>
                  {results.vi.ps5vObc2.pass ? "PASS" : "FAIL"}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Temperatures</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Thruster 1:</div>
                <div>{results.temperatures.thruster1} °C</div>
                
                <div>Thruster 2:</div>
                <div>{results.temperatures.thruster2} °C</div>
                
                <div>LEOCAM 1:</div>
                <div>{results.temperatures.leocam[0]} °C</div>
                
                <div>LEOCAM 2:</div>
                <div>{results.temperatures.leocam[1]} °C</div>
              </div>
            </CardContent>
          </Card>
          
          {enableEmmc && (
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">eMMC Test</h3>
                {results.emmc.emmc0States[0] !== 'N.A.' ? (
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div><strong>Test Stage</strong></div>
                    <div><strong>eMMC-0</strong></div>
                    <div><strong>eMMC-1</strong></div>
                    
                    <div>Initial</div>
                    <div>{results.emmc.emmc0States[0]}</div>
                    <div>{results.emmc.emmc1States[0]}</div>
                    
                    <div>eMMC-0 On</div>
                    <div>{results.emmc.emmc0States[1]}</div>
                    <div>{results.emmc.emmc1States[1]}</div>
                    
                    <div>eMMC-0 Off</div>
                    <div>{results.emmc.emmc0States[2]}</div>
                    <div>{results.emmc.emmc1States[2]}</div>
                    
                    <div>eMMC-1 On</div>
                    <div>{results.emmc.emmc0States[3]}</div>
                    <div>{results.emmc.emmc1States[3]}</div>
                    
                    <div>eMMC-1 Off</div>
                    <div>{results.emmc.emmc0States[4]}</div>
                    <div>{results.emmc.emmc1States[4]}</div>
                  </div>
                ) : (
                  <p>eMMC test was not performed</p>
                )}
              </CardContent>
            </Card>
          )}
          
          <div className="flex justify-end">
            <Button onClick={generateReport}>
              Generate Report
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};