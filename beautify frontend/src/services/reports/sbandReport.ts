// src/services/reports/sbandReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for S-Band checkout results
 * 
 * @param results The S-Band test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateSBandReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `S-Band_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create all document paragraphs in one array
  const paragraphs = [
    // Title
    new Paragraph({
      text: "S-Band Automated Self Check Out Test",
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
    
    // S-Band Telemetry Section
    new Paragraph({
      text: "* S-Band Telemetry :",
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    
    // FPGA Information
    new Paragraph({
      text: `FPGA version on the FPGA software                   : ${results.fpga.version}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `FPGA build on the FPGA software                     : ${results.fpga.build}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Year of the baseband board manufacture              : ${results.hardware.idYear}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Week of the baseband board manufacture              : ${results.hardware.idMonth}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Ordering number of the baseband board manufacture   : ${results.hardware.orderNumber}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `FPGA type and function                              : ${results.fpga.type}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Current configuration of the LCL function           : ${results.status.lclStatus}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Options configured in the FlashROM of the FPGA      : ${results.fpga.option}`,
      spacing: { after: 100 }
    }),
    
    // Empty line
    new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }),
    
    // Receiver Information
    new Paragraph({
      text: `State of the receiver                               : ${results.receiver.status}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Current configuration of receiver sensitivity level : ${results.receiver.sensitivity}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Frequency shift measured by receiver                : ${results.receiver.frequencyShift} Hz`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `IQ input power measured on the digital signal       : ${results.receiver.iqPower}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Current DAC to control the RF gain of RX frontend   : ${results.receiver.agcValue}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Eb information measured by the receiver             : ${results.receiver.demodEb}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `N0 information measured by the receiver             : ${results.receiver.demodN0}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Receiver data rate configuration                    : ${results.receiver.dataRate}`,
      spacing: { after: 100 }
    }),
    
    // Empty line
    new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }),
    
    // Transmitter Information
    new Paragraph({
      text: `Status of the transmitter                           : ${results.transmitter.status}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Encoder configuration                               : ${results.transmitter.convDiff}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Filter configuration                                : ${results.transmitter.convFilter}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Configuration of output waveform of modulated signal: ${results.transmitter.waveform}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PCM/PM modulation index                             : ${results.transmitter.pcmIndex}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Current DAC used to control the gain of the TX RF   : ${results.transmitter.agcValue}`,
      spacing: { after: 100 }
    }),
    
    // Empty line
    new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }),
    
    // Modes Information
    new Paragraph({
      text: `Coherent mode status                                : ${results.modes.coherentMode}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Ranging mode status                                 : ${results.modes.rangingMode}`,
      spacing: { after: 100 }
    }),
    
    // Empty line
    new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }),
    
    // Temperature Information
    new Paragraph({
      text: `Value read on the input 0 of the ADC                : ${results.temperature.adc0} deg C`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Value read on the input 1 of the ADC                : ${results.temperature.adc1} deg C`,
      spacing: { after: 100 }
    }),
    
    // Separator
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    }),
  ];
  
  // Add a page break before the TX/RX test sections
  paragraphs.push(
    new Paragraph({
      text: "",
      pageBreakBefore: true
    })
  );
  
  // Add TX test section if performed
  if (results.txTest) {
    const txTestParagraphs = createTxTestSection(results);
    paragraphs.push(...txTestParagraphs);
  }
  
  // Add RX test section if performed
  if (results.rxTest) {
    const rxTestParagraphs = createRxTestSection(results);
    paragraphs.push(...rxTestParagraphs);
  }
  
  // Create the document with all the paragraphs
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs
      }
    ]
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

// Helper function to create TX test section
function createTxTestSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [
    new Paragraph({
      text: "* S-Band Transmitter Test Results:",
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Test completed: ${results.txTest.completed ? "Yes" : "No"}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Test status: ${results.txTest.status}`,
      spacing: { after: 100 }
    })
  ];
  
  // Add error message if the test failed
  if (results.txTest.error) {
    paragraphs.push(
      new Paragraph({
        text: `Error: ${results.txTest.error}`,
        spacing: { after: 100 }
      })
    );
  }
  
  // Add separator
  paragraphs.push(
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    })
  );
  
  return paragraphs;
}

// Helper function to create RX test section
function createRxTestSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [
    new Paragraph({
      text: "* S-Band Receiver Test Results:",
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Test completed: ${results.rxTest.completed ? "Yes" : "No"}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Test status: ${results.rxTest.status}`,
      spacing: { after: 100 }
    })
  ];
  
  // Add error message if the test failed
  if (results.rxTest.error) {
    paragraphs.push(
      new Paragraph({
        text: `Error: ${results.rxTest.error}`,
        spacing: { after: 100 }
      })
    );
  }
  
  // Add separator
  paragraphs.push(
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    })
  );
  
  return paragraphs;
}