// src/services/reports/leocamReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for LEOCAM checkout results
 * 
 * @param results The LEOCAM test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateLEOCAMReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `LEOCAM_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "LEOCAM Automated Self Check Out Test",
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 200 }
        }),
        
        // Test metadata
        new Paragraph({
          text: `Test Version: 24.3.21`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Test Date: ${now.toLocaleDateString()}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Test Time: ${now.toLocaleTimeString()}`,
          spacing: { after: 200 }
        }),
        
        // Separator
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Voltage Current On Summary
        new Paragraph({
          text: "* Voltage Current On Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        ...createVoltageOnParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // LEOCAM Configuration section
        new Paragraph({
          text: "* LEOCAM Configuration:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        ...createConfigurationParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // LEOCAM Telemetry section
        new Paragraph({
          text: "* LEOCAM Telemetry:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        ...createTelemetryParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "Statistics : -",
          spacing: { after: 100 }
        }),
        
        ...createStatisticsParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // Voltage Current Off Summary
        new Paragraph({
          text: "* Voltage Current Off Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        ...createVoltageOffParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
      ]
    }]
  });
  
  // Generate the document
  const buffer = await Packer.toBuffer(doc);
  
  // Save the file
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  saveAs(blob, filename);
  
  // Mark the report as generated
  results.reportGenerated = true;
  
  return filename;
}

// Helper functions to create document paragraphs

/**
 * Create paragraphs for the Voltage On section
 */
function createVoltageOnParagraphs(results: any): Paragraph[] {
  const gpsVoltage = parseFloat(results.voltageTests.gps.voltage || "0").toFixed(3);
  const gpsCurrent = parseFloat(results.voltageTests.gps.current || "0").toFixed(3);
  const gpsStatus = results.voltageTests.gps.passInitial ? "[PASS]" : "[FAIL]";
  
  const pcsVoltage = parseFloat(results.voltageTests.pcs.voltage || "0").toFixed(3);
  const pcsCurrent = parseFloat(results.voltageTests.pcs.current || "0").toFixed(3);
  const pcsStatus = results.voltageTests.pcs.passInitial ? "[PASS]" : "[FAIL]";
  
  const leocamVoltage = parseFloat(results.voltageTests.leocam.voltage || "0").toFixed(3);
  const leocamCurrent = parseFloat(results.voltageTests.leocam.current || "0").toFixed(3);
  const leocamStatus = results.voltageTests.leocam.passInitial ? "[PASS]" : "[FAIL]";
  
  return [
    new Paragraph(`GPS Voltage     : ${padString(gpsVoltage, 6)} V    ${gpsStatus}`),
    new Paragraph(`GPS Current     : ${padString(gpsCurrent, 6)} A`),
    new Paragraph(``),
    new Paragraph(`PCS Voltage     : ${padString(pcsVoltage, 6)} V    ${pcsStatus}`),
    new Paragraph(`PCS Current     : ${padString(pcsCurrent, 6)} A`),
    new Paragraph(``),
    new Paragraph(`LEOCAM Voltage  : ${padString(leocamVoltage, 6)} V    ${leocamStatus}`),
    new Paragraph(`LEOCAM Current  : ${padString(leocamCurrent, 6)} A`)
  ];
}

/**
 * Create paragraphs for the Configuration section
 */
function createConfigurationParagraphs(results: any): Paragraph[] {
  const config = results.leocamConfig;
  const roiValues = config.sensorRoi || [];
  const roiStr = roiValues.length > 0 ? roiValues.join('') : 'N/A';
  
  return [
    new Paragraph(`Sensor Mode                 : ${config.sensorMode || 'N/A'}`),
    new Paragraph(`Sensor Power                : ${config.sensorPower || 'N/A'}`),
    new Paragraph(`Sensor Line Frame Rate      : ${config.sensorLineFrameRate || 'N/A'}`),
    new Paragraph(`Sensor Bit Depth            : ${config.sensorBitDepth || 'N/A'}`),
    new Paragraph(`Sensor ROI                  : ${roiStr}`),
    new Paragraph(`Sensor Gain Analog          : ${config.sensorGainAnalog || 'N/A'}`),
    new Paragraph(`Sensor Scan Direction       : ${config.sensorScanDirection || 'N/A'}`),
    new Paragraph(`Sensor Test Pattern Select  : ${config.sensorTestPatternSel || 'N/A'}`)
  ];
}

/**
 * Create paragraphs for the Telemetry section
 */
function createTelemetryParagraphs(results: any): Paragraph[] {
  const telemetry = results.leocamTelemetry;
  const paragraphs: Paragraph[] = [];
  
  // Add Health Status and DateTime
  paragraphs.push(new Paragraph(`Health Status                       : ${telemetry.healthStatus || 'N/A'}`));
  paragraphs.push(new Paragraph(`Current Date Time                   : ${telemetry.dateTime || 'N/A'}`));
  
  // Add CPU Voltages
  const cpuVoltages = telemetry.cpuVoltages || [];
  for (let i = 0; i < cpuVoltages.length; i++) {
    paragraphs.push(new Paragraph(`CPU Voltage ${i + 1}                       : ${cpuVoltages[i] || 'N/A'} V`));
  }
  
  // Add CPU Temperatures
  const cpuTemperatures = telemetry.cpuTemperatures || [];
  for (let i = 0; i < cpuTemperatures.length; i++) {
    paragraphs.push(new Paragraph(`CPU Temperature ${i + 1}                   : ${cpuTemperatures[i] || 'N/A'} deg C`));
  }
  
  // Add Internal Temperatures
  const internalTemperatures = telemetry.internalTemperatures || [];
  for (let i = 0; i < internalTemperatures.length; i++) {
    paragraphs.push(new Paragraph(`Internal Temperature ${i + 1}              : ${internalTemperatures[i] || 'N/A'} deg C`));
  }
  
  // Skip duplicating the configuration parameters since they are already in the config section
  
  // Add sensor-specific data
  paragraphs.push(new Paragraph(`Sensor Voltage                      : ${telemetry.sensorVoltage || 'N/A'} V`));
  
  const sensorTemperatures = telemetry.sensorTemperatures || [];
  for (let i = 0; i < sensorTemperatures.length; i++) {
    paragraphs.push(new Paragraph(`Sensor Temperature ${i + 1}                : ${sensorTemperatures[i] || 'N/A'} deg C`));
  }
  
  paragraphs.push(new Paragraph(`Sensor Reset                        : ${telemetry.sensorReset || 'N/A'}`));
  
  // Add disk data
  const diskUsed = telemetry.diskUsed || [];
  for (let i = 0; i < diskUsed.length; i++) {
    paragraphs.push(new Paragraph(`Disk Used ${i + 1}                         : ${diskUsed[i] || 'N/A'} Kbytes`));
  }
  
  const diskTemperatures = telemetry.diskTemperatures || [];
  for (let i = 0; i < diskTemperatures.length; i++) {
    paragraphs.push(new Paragraph(`Disk Temperature ${i + 1}                  : ${diskTemperatures[i] || 'N/A'} deg C`));
  }
  
  const diskLifetimes = telemetry.diskLifetimes || [];
  for (let i = 0; i < diskLifetimes.length; i++) {
    paragraphs.push(new Paragraph(`Disk Lifetime ${i + 1}                     : ${diskLifetimes[i] || 'N/A'} hours`));
  }
  
  const diskErrorCorrectionCounts = telemetry.diskErrorCorrectionCounts || [];
  for (let i = 0; i < diskErrorCorrectionCounts.length; i++) {
    paragraphs.push(new Paragraph(`Disk Error Correction Count ${i + 1}       : ${diskErrorCorrectionCounts[i] || 'N/A'}`));
  }
  
  const diskErrorUncorrectableCounts = telemetry.diskErrorUncorrectableCounts || [];
  for (let i = 0; i < diskErrorUncorrectableCounts.length; i++) {
    paragraphs.push(new Paragraph(`Disk Error Uncorrectable Count ${i + 1}    : ${diskErrorUncorrectableCounts[i] || 'N/A'}`));
  }
  
  const diskTotalBytesRead = telemetry.diskTotalBytesRead || [];
  for (let i = 0; i < diskTotalBytesRead.length; i++) {
    paragraphs.push(new Paragraph(`Disk Total Bytes Read ${i + 1}             : ${diskTotalBytesRead[i] || 'N/A'} MiB`));
  }
  
  const diskTotalBytesWritten = telemetry.diskTotalBytesWritten || [];
  for (let i = 0; i < diskTotalBytesWritten.length; i++) {
    paragraphs.push(new Paragraph(`Disk Total Bytes Written ${i + 1}          : ${diskTotalBytesWritten[i] || 'N/A'} MiB`));
  }
  
  paragraphs.push(new Paragraph(`Disk List Datasets                  : ${telemetry.diskListDatasets || 'N/A'}`));
  paragraphs.push(new Paragraph(`Disk List Datafiles in Dataset      : ${telemetry.diskListDatafilesInDataset || 'N/A'}`));
  
  return paragraphs;
}

/**
 * Create paragraphs for the Statistics section
 */
function createStatisticsParagraphs(results: any): Paragraph[] {
  const stats = results.leocamStatistics;
  
  return [
    new Paragraph(`Command Count       : ${stats.commandCount || 'N/A'}`),
    new Paragraph(`Acknowledge Count   : ${stats.acknowledgeCount || 'N/A'}`),
    new Paragraph(`Timeout Count       : ${stats.timeoutCount || 'N/A'}`),
    new Paragraph(`Error Count         : ${stats.errorCount || 'N/A'}`)
  ];
}

/**
 * Create paragraphs for the Voltage Off section
 */
function createVoltageOffParagraphs(results: any): Paragraph[] {
  const gpsVoltage = parseFloat(results.voltageTests.gps.voltage || "0").toFixed(3);
  const gpsCurrent = parseFloat(results.voltageTests.gps.current || "0").toFixed(3);
  const gpsStatus = results.voltageTests.gps.passFinal ? "[PASS]" : "[FAIL]";
  
  const pcsVoltage = parseFloat(results.voltageTests.pcs.voltage || "0").toFixed(3);
  const pcsCurrent = parseFloat(results.voltageTests.pcs.current || "0").toFixed(3);
  const pcsStatus = results.voltageTests.pcs.passFinal ? "[PASS]" : "[FAIL]";
  
  const leocamVoltage = parseFloat(results.voltageTests.leocam.voltage || "0").toFixed(3);
  const leocamCurrent = parseFloat(results.voltageTests.leocam.current || "0").toFixed(3);
  const leocamStatus = results.voltageTests.leocam.passFinal ? "[PASS]" : "[FAIL]";
  
  return [
    new Paragraph(`GPS Voltage     : ${padString(gpsVoltage, 6)} V    ${gpsStatus}`),
    new Paragraph(`GPS Current     : ${padString(gpsCurrent, 6)} A`),
    new Paragraph(``),
    new Paragraph(`PCS Voltage     : ${padString(pcsVoltage, 6)} V    ${pcsStatus}`),
    new Paragraph(`PCS Current     : ${padString(pcsCurrent, 6)} A`),
    new Paragraph(``),
    new Paragraph(`LEOCAM Voltage  : ${padString(leocamVoltage, 6)} V    ${leocamStatus}`),
    new Paragraph(`LEOCAM Current  : ${padString(leocamCurrent, 6)} A`)
  ];
}

/**
* Utility function to pad a string to a specific length
* 
* @param value The string value to pad
* @param length The desired length
* @returns The padded string
*/
function padString(value: string, length: number): string {
  if (!value) return ''.padStart(length, ' ');
  return value.padStart(length, ' ');
}