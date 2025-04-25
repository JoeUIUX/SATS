// src/services/reports/adcsReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for ADCS checkout results
 * 
 * @param results The ADCS test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateADCSReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `ADCS_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "ADCS Automated Self Check Out Test",
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
        
        // Voltage Current Summary section
        new Paragraph({
          text: "* Voltage Current Summary :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Initial power status
        new Paragraph({
          text: `ADCS Interface Voltage      : ${formatVoltage(results.vi.adcsIfVoltage.value)} V    ${formatStatus(results.vi.adcsIfVoltage.status)}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ADCS Interface Current      : ${formatCurrent(results.vi.adcsIfCurrent.value)} A`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ADCS Reaction Wheel Voltage : ${formatVoltage(results.vi.adcsRwVoltage.value)} V    ${formatStatus(results.vi.adcsRwVoltage.status)}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ADCS Reaction Wheel Current : ${formatCurrent(results.vi.adcsRwCurrent.value)} A`,
          spacing: { after: 100 }
        }),
        
        // Separator
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // ADCS Telemetry section
        new Paragraph({
          text: "* ADCS Telemetry :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Command status
        new Paragraph({
          text: `TLM 128 : -- ${formatCommandStatus(results.command.status)}`,
          spacing: { after: 100 }
        }),
        
        // Telemetry details (if available)
        new Paragraph({
          text: `Node type identifier        : ${results.telemetry.identifier || "N/A"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Program type identifier     : ${results.telemetry.identifier || "N/A"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Interface version           : ${results.telemetry.interfaceVersion || "N/A"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Firmware version (Major)    : ${results.telemetry.fwVersionMajor || "N/A"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Firmware version (Minor)    : ${results.telemetry.fwVersionMinor || "N/A"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Runtime (seconds)           : ${results.telemetry.runtimeSec || "N/A"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Runtime (milliseconds)      : ${results.telemetry.runtimeMiliSec || "N/A"}`,
          spacing: { after: 100 }
        }),
        
        // Separator
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Voltage Current Summary after power off section
        new Paragraph({
          text: "* Voltage Current Summary :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Power off status
        new Paragraph({
          text: `ADCS Interface Voltage      : ${formatVoltage(results.vi.adcsIfVoltageOff.value)} V    ${formatStatus(results.vi.adcsIfVoltageOff.status)}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ADCS Interface Current      : ${formatCurrent(results.vi.adcsIfCurrent.value)} A`,  // Reusing the first current measurement
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ADCS Reaction Wheel Voltage : ${formatVoltage(results.vi.adcsRwVoltageOff.value)} V    ${formatStatus(results.vi.adcsRwVoltageOff.status)}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ADCS Reaction Wheel Current : ${formatCurrent(results.vi.adcsRwCurrent.value)} A`,  // Reusing the first current measurement
          spacing: { after: 100 }
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

/**
 * Format voltage value to display with proper precision
 * @param value Voltage value as string
 * @returns Formatted voltage string
 */
function formatVoltage(value: string): string {
  try {
    const voltage = parseFloat(value);
    return voltage.toFixed(3).padStart(6, ' ');
  } catch (error) {
    return value || "0.000";
  }
}

/**
 * Format current value to display with proper precision
 * @param value Current value as string
 * @returns Formatted current string
 */
function formatCurrent(value: string): string {
  try {
    const current = parseFloat(value);
    return current.toFixed(3).padStart(6, ' ');
  } catch (error) {
    return value || "0.000";
  }
}

/**
 * Format status string for display in report
 * @param status Status string
 * @returns Formatted status for report
 */
function formatStatus(status: string): string {
  switch (status) {
    case "PASS":
      return "[PASS]";
    case "FAIL":
      return "[FAIL]";
    case "ERROR":
      return "[ERROR]";
    default:
      return `[${status}]`;
  }
}

/**
 * Format command execution status for display in report
 * @param status Command status
 * @returns Formatted command status for report
 */
function formatCommandStatus(status: string): string {
  switch (status) {
    case "PASS":
      return "[PASS]";
    case "PASS_TIMEOUT":
      return "[PASS] - with timeout";
    case "FAIL_NO_REPLY":
      return "[FAIL] - No reply";
    case "FAIL_CMD_NOT_SENT":
      return "[FAIL] - Command not sent";
    case "ERROR":
      return "[ERROR]";
    default:
      return `[${status}]`;
  }
}