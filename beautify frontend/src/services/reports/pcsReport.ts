// src/services/reports/pcsReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for PCS checkout results
 * 
 * @param results The PCS test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generatePCSReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `PCS_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "PCS Automated Self Check Out Test",
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
        
        // Voltage Current On Summary section
        new Paragraph({
          text: "* Voltage Current On Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Voltage : ${formatFloat(results.on.voltage)} V    ${results.on.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Current : ${formatFloat(results.on.current)} A`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Firmware Version section
        new Paragraph({
          text: "* Firmware Version:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Current PCS Firmware Version    : ${results.firmware.major}.${results.firmware.minor}.${results.firmware.patch}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Time Sync section
        new Paragraph({
          text: "* Time Sync:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `BEFORE update PCS Time  : ${results.timeSync.before} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `AFTER update PCS Time   : ${results.timeSync.after} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // PCS Checkout Summary section
        new Paragraph({
          text: "* PCS Checkout Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Time            : ${results.status.time} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Uptime          : ${results.status.uptime} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS StorePeriod     : ${results.status.storePeriod} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Uptime Session  : ${results.status.uptimeSession} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Reset Count     : ${results.status.resetCount}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Reset Source    : ${results.status.resetSource}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "",
          spacing: { after: 100 }
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
        new Paragraph({
          text: `PCS PS 3V3 PCS1 I   : ${padString(results.vi.ps3v3I, 4)} mA`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS PS 5 PCS1 I     : ${padString(results.vi.ps5I, 4)} mA`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        
        // Memory Test Summary section
        new Paragraph({
          text: "* Memory Test Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Create memory test paragraphs
        ...createMemoryTestParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // PCS Checkout Summary After Test section
        new Paragraph({
          text: "* PCS Checkout Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Time            : ${results.statusAfterTest.time} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Uptime          : ${results.statusAfterTest.uptime} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS StorePeriod     : ${results.statusAfterTest.storePeriod} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Uptime Session  : ${results.statusAfterTest.uptimeSession} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Reset Count     : ${results.statusAfterTest.resetCount}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Reset Source    : ${results.statusAfterTest.resetSource}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Voltage Current Off Summary section
        new Paragraph({
          text: "* Voltage Current Off Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Voltage : ${formatFloat(results.off.voltage)} V    ${results.off.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `PCS Current : ${formatFloat(results.off.current)} A`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
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

// Helper function to create memory test paragraphs
function createMemoryTestParagraphs(results: any): Paragraph[] {
  if (!results.sdCard.enabled) {
    return [new Paragraph('SD Card test was not performed')];
  }
  
  return [
    new Paragraph(`SD Card : -- ${results.sdCard.pass ? "[PASS]" : "[FAIL]"}`),
    new Paragraph(`Write Success before test   : ${padString(results.sdCard.before.writeSuccess, 4)}`),
    new Paragraph(`Read Success before test    : ${padString(results.sdCard.before.readSuccess, 4)}`),
    new Paragraph(`Write Fail before test      : ${padString(results.sdCard.before.writeFail, 4)}`),
    new Paragraph(`Read Fail before test       : ${padString(results.sdCard.before.readFail, 4)}`),
    new Paragraph(`Write Success after test    : ${padString(results.sdCard.after.writeSuccess, 4)}`),
    new Paragraph(`Read Success after test     : ${padString(results.sdCard.after.readSuccess, 4)}`),
    new Paragraph(`Write Fail after test       : ${padString(results.sdCard.after.writeFail, 4)}`),
    new Paragraph(`Read Fail after test        : ${padString(results.sdCard.after.readFail, 4)}`)
  ];
}

/**
 * Format a floating point value with 3 decimal places
 * 
 * @param value The value to format
 * @returns Formatted string with 3 decimal places
 */
function formatFloat(value: string): string {
  try {
    return parseFloat(value).toFixed(3);
  } catch (error) {
    return value;
  }
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