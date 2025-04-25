// src/services/reports/gpsReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for GPS checkout results
 * 
 * @param results The GPS test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateGPSReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `GPS_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "GPS Automated Self Check Out Test",
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
          text: "* Voltage Current Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // GPS power on voltage and current measurements
        new Paragraph({
          text: `GPS 5V Supply Voltage   : ${padFloat(results.voltages.gps5V.value, 6, 3)} V    ${results.voltages.gps5V.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `GPS 5V Supply Current   : ${padFloat(results.voltages.gps5VCurrent.value, 6, 3)} A`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `GPS 3.3V Supply Voltage : ${padString(results.voltages.gps3V3.value, 4)} mV     ${results.voltages.gps3V3.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 100 }
        }),
        
        // Command Check section
        new Paragraph({
          text: "* Command Check:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Command check results
        new Paragraph({
          text: `Log Version : -- ${results.stats.commandCheck.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Transmit Count before test  : ${results.stats.txCountBefore}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Receive Count before test   : ${results.stats.rxCountBefore}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Transmit Bytes before test  : ${results.stats.txBytesBefore}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Receive Bytes before test   : ${results.stats.rxBytesBefore}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Transmit Count after test   : ${results.stats.txCountAfter}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Receive Count after test    : ${results.stats.rxCountAfter}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Transmit Bytes after test   : ${results.stats.txBytesAfter}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Receive Bytes after test    : ${results.stats.rxBytesAfter}`,
          spacing: { after: 100 }
        }),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 100 }
        }),
        
        // Power Off Voltage Current Summary section
        new Paragraph({
          text: "* Voltage Current Summary (After Power Off):",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // GPS power off voltage and current measurements
        new Paragraph({
          text: `GPS 5V Supply Voltage   : ${padFloat(results.powerOff.gps5V.value, 6, 3)} V    ${results.powerOff.gps5V.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `GPS 5V Supply Current   : ${padFloat(results.powerOff.gps5VCurrent.value, 6, 3)} A`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `GPS 3.3V Supply Voltage : ${padString(results.powerOff.gps3V3.value, 4)} mV     ${results.powerOff.gps3V3.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 100 }
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

/**
 * Utility function to format a float value with specified precision
 * 
 * @param value The value to format (as string)
 * @param width The total width of the output string
 * @param precision The number of decimal places
 * @returns The formatted string
 */
function padFloat(value: string, width: number, precision: number): string {
  try {
    const floatValue = parseFloat(value);
    return floatValue.toFixed(precision).padStart(width, ' ');
  } catch (error) {
    return value.padStart(width, ' ');
  }
}