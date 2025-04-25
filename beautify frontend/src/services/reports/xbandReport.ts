// src/services/reports/xbandReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for X-Band checkout results
 * 
 * @param results The X-Band test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateXBandReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `X-Band_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "X-Band Automated Self Check Out Test",
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
        
        // Voltage Current On Record
        new Paragraph({
          text: "Voltage Current On Record : -",
          spacing: { after: 100 }
        }),
        
        // PCS Voltage
        new Paragraph({
          text: `PCS Voltage : ${padString(results.voltages.pcs.value, 6)} V    ${results.voltages.pcs.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        
        // PCS Current
        new Paragraph({
          text: `PCS Current : ${padString(results.currents.pcs, 6)} A`,
          spacing: { after: 100 }
        }),
        
        // SPU On Record
        new Paragraph({
          text: "SPU On Record : -",
          spacing: { after: 100 }
        }),
        
        // X-Band Voltage
        new Paragraph({
          text: `X-Band Voltage : ${padString(results.voltages.xband.value, 6)} V    ${results.voltages.xband.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        
        // X-Band Current
        new Paragraph({
          text: `X-Band Current : ${padString(results.currents.xband, 6)} A`,
          spacing: { after: 100 }
        }),
        
        // SPU Off Record
        new Paragraph({
          text: "SPU Off Record : -",
          spacing: { after: 100 }
        }),
        
        // X-Band Voltage after off
        new Paragraph({
          text: `X-Band Voltage : ${padString(results.voltages.xbandOff.value, 6)} V    ${results.voltages.xbandOff.pass ? "[PASS]" : "[FAIL]"}`,
          spacing: { after: 100 }
        }),
        
        // X-Band Current after off
        new Paragraph({
          text: `X-Band Current : ${padString(results.currents.xbandOff, 6)} A`,
          spacing: { after: 100 }
        }),
        
        // Voltage Current Off Record
        new Paragraph({
          text: "Voltage Current Off Record : -",
          spacing: { after: 100 }
        }),
        
        // PCS Voltage off
        new Paragraph({
          text: `PCS Voltage : 0.000 V    [PASS]`,
          spacing: { after: 100 }
        }),
        
        // PCS Current off
        new Paragraph({
          text: `PCS Current : 0.000 A`,
          spacing: { after: 100 }
        }),
        
        // Separator
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // Test Options section
        new Paragraph({
          text: "* Test Options:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // List of tested options
        ...createOptionsSection(results),
        
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

// Helper function to create test options section
function createOptionsSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  // Add paragraph for each option that was tested
  if (results.testedOptions && results.testedOptions.length > 0) {
    results.testedOptions.forEach((option: string) => {
      paragraphs.push(
        new Paragraph({
          text: `- ${option}`,
          spacing: { after: 100 }
        })
      );
    });
  } else {
    paragraphs.push(
      new Paragraph({
        text: "No specific options were selected for this test.",
        spacing: { after: 100 }
      })
    );
  }
  
  return paragraphs;
}

/**
* Utility function to pad a string to a specific length
* 
* @param value The string value to pad
* @param length The desired length
* @returns The padded string
*/
function padString(value: string | number, length: number): string {
  const stringValue = String(value);
  if (!stringValue) return ''.padStart(length, ' ');
  
  // For numeric values, ensure proper formatting
  if (!isNaN(Number(stringValue))) {
    return parseFloat(stringValue).toFixed(3).padStart(length, ' ');
  }
  
  return stringValue.padStart(length, ' ');
}