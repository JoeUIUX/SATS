// src/services/reports/propulsionReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for Propulsion checkout results
 * 
 * @param results The Propulsion test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generatePropulsionReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `Propulsion_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "Propulsion Automated Self Check Out Test",
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
        
        // ECU-1 CAN Check Summary
        new Paragraph({
          text: "* CAN Check Summary ECU-1:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        new Paragraph({
          text: "Voltage Current On Record : -",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 1 Voltage   : ${padString(results.ecu1.voltage, 6)} V    ${results.ecu1.status || 'N/A'}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 1 Current   : ${padString(results.ecu1.current, 6)} A`,
          spacing: { after: 100 }
        }),
        
        // Data Get Parameters section with temperature data
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "Data Get Parameters : -",
          spacing: { after: 100 }
        }),
        
        ...createTemperatureInfoParagraphs(results),
        
        // ECU-2 CAN Check Summary
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        new Paragraph({
          text: "* CAN Check Summary ECU-2:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        new Paragraph({
          text: "Voltage Current On Record : -",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 2 Voltage   : ${padString(results.ecu2.voltage, 6)} V    ${results.ecu2.status || 'N/A'}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 2 Current   : ${padString(results.ecu2.current, 6)} A`,
          spacing: { after: 100 }
        }),
        
        // PMA Check Summary
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        new Paragraph({
          text: "* PMA Check Summary :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        ...createPmaInfoParagraphs(results),
        
        // PPU Check Summary
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        new Paragraph({
          text: "* PPU Check Summary :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        ...createPpuInfoParagraphs(results),
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

// Helper function to create temperature info paragraphs
function createTemperatureInfoParagraphs(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.temperatures) {
    Object.entries(results.temperatures).forEach(([key, value]: [string, any]) => {
      paragraphs.push(
        new Paragraph({
          text: `Temperature from ${key.replace(/([A-Z])/g, ' $1').trim()}    : ${padString(value, 4)} deg C`,
          spacing: { after: 50 }
        })
      );
    });
  } else {
    paragraphs.push(
      new Paragraph({
        text: "No temperature data available",
        spacing: { after: 100 }
      })
    );
  }
  
  return paragraphs;
}

// Helper function to create PMA info paragraphs
function createPmaInfoParagraphs(results: any): Paragraph[] {
  if (!results.pma || results.pma.status === 'N.A.') {
    return [new Paragraph({
      text: 'PMA test was not performed',
      spacing: { after: 100 }
    })];
  }
  
  return [
    new Paragraph({
      text: "Timing : -",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "T0, Power On ECU        : 0 s",
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T1, Init Payload        : T0 + ${padString(results.pma.initPayl, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T2, Data Get            : T1 + ${padString(results.pma.dataGet, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T3, Data Send           : T2 + ${padString(results.pma.dataSend, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: "T4, Repeated Data Get   : T3 +   1 s",
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T5, Abort Mission       : T4 + ${padString(results.pma.duration, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T6, Power Off ECU       : T5 + ${padString(results.pma.ecuOff, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "Data Send Parameter : -",
      spacing: { after: 100 }
    }),
    // Would include propulsion TC parameters here
    new Paragraph({
      text: "Test parameters transmitted to propulsion system",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    }),
  ];
}

// Helper function to create PPU info paragraphs
function createPpuInfoParagraphs(results: any): Paragraph[] {
  if (!results.ppu || results.ppu.status === 'N.A.') {
    return [new Paragraph({
      text: 'PPU test was not performed',
      spacing: { after: 100 }
    })];
  }
  
  return [
    new Paragraph({
      text: "Timing : -",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "T0, Power On ECU        : 0 s",
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T1, Init Payload        : T0 + ${padString(results.ppu.initPayl, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T2, Data Get            : T1 + ${padString(results.ppu.dataGet1, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T3, Power On PPU        : T2 + ${padString(results.ppu.ppuOn, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T4, Data Get            : T3 + ${padString(results.ppu.dataGet2, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T5, Data Send           : T4 + ${padString(results.ppu.dataSend, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: "T6, Repeated Data Get   : T5 +   1 s",
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T7, Abort Mission       : T6 + ${padString(results.ppu.duration, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T8, Power Off PPU       : T7 + ${padString(results.ppu.ppuOff, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: `T9, Power Off ECU       : T8 + ${padString(results.ppu.ecuOff, 3)} s`,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "Data Send Parameter : -",
      spacing: { after: 100 }
    }),
    // Would include propulsion TC parameters here
    new Paragraph({
      text: "Test parameters transmitted to propulsion system",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    }),
    
    new Paragraph({
      text: "Voltage Current On Record : -",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PPU 1 Voltage   : ${padString(results.ppu1.voltage, 6)} V    ${results.ppu1.status || 'N/A'}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PPU 1 Current   : ${padString(results.ppu1.current, 6)} A`,
      spacing: { after: 100 }
    }),
  ];
}

/**
* Utility function to pad a string to a specific length
* 
* @param value The string value to pad
* @param length The desired length
* @returns The padded string
*/
function padString(value: string | number, length: number): string {
  const strValue = String(value || '');
  if (!strValue) return ''.padStart(length, ' ');
  
  // If it's a number, format it with fixed precision
  if (!isNaN(Number(strValue))) {
    const num = parseFloat(strValue);
    return num.toFixed(3).padStart(length, ' ');
  }
  
  return strValue.padStart(length, ' ');
}