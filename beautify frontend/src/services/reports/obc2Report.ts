// src/services/reports/obc2Report.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for OBC-2 checkout results
 * 
 * @param results The OBC-2 test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateOBC2Report(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `OBC-2_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "OBC-2 Automated Self Check Out Test",
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
          text: `Current OBC-2 Firmware Version: ${results.firmware.major}.${results.firmware.minor}.${results.firmware.patch}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
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
          text: `BEFORE update OBC-2 Time: ${results.time.before} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `AFTER update OBC-2 Time: ${results.time.after} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Test Summary section
        new Paragraph({
          text: "* Test Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Primary CAN             : ${results.can.primary.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Secondary CAN           : ${results.can.secondary.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `SD Card Voltage         : ${results.voltage.sdCard.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Flash Voltage           : ${results.voltage.flash.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `EEPROM Voltage          : ${results.voltage.eeprom.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Payload Voltage         : ${results.voltage.payload.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `UHF Voltage             : ${results.voltage.uhf.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `SD Card                 : ${results.memory.sdCard.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `EEPROM                  : ${results.memory.eeprom.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // OBC-2 Checkout Summary section
        new Paragraph({
          text: "* OBC-2 Checkout Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `OBC-2 Time              : ${results.time.current} UTC`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `OBC-2 Uptime Total      : ${results.time.uptime.total} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `OBC-2 Store Period      : ${results.time.storePeriod} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `OBC-2 Uptime Session    : ${results.time.uptime.session} sec`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `OBC-2 Reset Count       : ${results.time.resetCount}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `OBC-2 Reset Source      : ${results.time.resetSource}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // Primary CAN Check Summary section
        new Paragraph({
          text: "* OBC-2 CAN Check Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Primary CAN : -- ${results.can.primary.result}`,
          spacing: { after: 100 }
        }),
        ...createPrimaryCansSection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // Secondary CAN Check Summary section
        new Paragraph({
          text: "* OBC-2 CAN Check Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Secondary CAN : -- ${results.can.secondary.result}`,
          spacing: { after: 100 }
        }),
        ...createSecondaryCansSection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
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
        ...createVoltageCurrentSection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
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
        ...createMemoryTestSection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Final checkout time information
        new Paragraph({
          text: "* OBC-2 Final Checkout Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        ...createFinalCheckoutSection(results),
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

// Helper function for Primary CAN section
function createPrimaryCansSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.can && results.can.primary) {
    const section = results.can.primary;
    
    // Before test
    const txBefore = section.before.tx || [];
    const ackBefore = section.before.ack || [];
    const timeoutBefore = section.before.timeout || [];
    const errorBefore = section.before.error || [];
    
    paragraphs.push(new Paragraph({ text: `HKP Transmit before test        : ${padString(txBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Transmit before test        : ${padString(txBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Transmit before test        : ${padString(txBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Transmit before test        : ${padString(txBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Transmit before test        : ${padString(txBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Acknowledgement before test : ${padString(ackBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Acknowledgement before test : ${padString(ackBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Acknowledgement before test : ${padString(ackBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Acknowledgement before test : ${padString(ackBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Acknowledgement before test : ${padString(ackBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Timeout before test         : ${padString(timeoutBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Timeout before test         : ${padString(timeoutBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Timeout before test         : ${padString(timeoutBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Timeout before test         : ${padString(timeoutBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Timeout before test         : ${padString(timeoutBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Error before test           : ${padString(errorBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Error before test           : ${padString(errorBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Error before test           : ${padString(errorBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Error before test           : ${padString(errorBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Error before test           : ${padString(errorBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CAN Primary Secondary Config    : ${results.canConfig || "0"}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
    
    // After test
    const txAfter = section.after.tx || [];
    const ackAfter = section.after.ack || [];
    const timeoutAfter = section.after.timeout || [];
    const errorAfter = section.after.error || [];
    
    paragraphs.push(new Paragraph({ text: `HKP Transmit after test         : ${padString(txAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Transmit after test         : ${padString(txAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Transmit after test         : ${padString(txAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Transmit after test         : ${padString(txAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Transmit after test         : ${padString(txAfter[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Acknowledgement after test  : ${padString(ackAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Acknowledgement after test  : ${padString(ackAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Acknowledgement after test  : ${padString(ackAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Acknowledgement after test  : ${padString(ackAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Acknowledgement after test  : ${padString(ackAfter[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Timeout after test          : ${padString(timeoutAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Timeout after test          : ${padString(timeoutAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Timeout after test          : ${padString(timeoutAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Timeout after test          : ${padString(timeoutAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Timeout after test          : ${padString(timeoutAfter[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Error after test            : ${padString(errorAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Error after test            : ${padString(errorAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Error after test            : ${padString(errorAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Error after test            : ${padString(errorAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Error after test            : ${padString(errorAfter[4], 4)}`, spacing: { after: 100 } }));
  }
  
  return paragraphs;
}

// Helper function for Secondary CAN section
function createSecondaryCansSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.can && results.can.secondary) {
    const section = results.can.secondary;
    
    // Before test
    const txBefore = section.before.tx || [];
    const ackBefore = section.before.ack || [];
    const timeoutBefore = section.before.timeout || [];
    const errorBefore = section.before.error || [];
    
    paragraphs.push(new Paragraph({ text: `HKP Transmit before test        : ${padString(txBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Transmit before test        : ${padString(txBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Transmit before test        : ${padString(txBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Transmit before test        : ${padString(txBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Transmit before test        : ${padString(txBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Acknowledgement before test : ${padString(ackBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Acknowledgement before test : ${padString(ackBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Acknowledgement before test : ${padString(ackBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Acknowledgement before test : ${padString(ackBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Acknowledgement before test : ${padString(ackBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Timeout before test         : ${padString(timeoutBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Timeout before test         : ${padString(timeoutBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Timeout before test         : ${padString(timeoutBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Timeout before test         : ${padString(timeoutBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Timeout before test         : ${padString(timeoutBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Error before test           : ${padString(errorBefore[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Error before test           : ${padString(errorBefore[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Error before test           : ${padString(errorBefore[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Error before test           : ${padString(errorBefore[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Error before test           : ${padString(errorBefore[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CAN Primary Secondary Config    : ${results.canConfig || "31"}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
    
    // After test
    const txAfter = section.after.tx || [];
    const ackAfter = section.after.ack || [];
    const timeoutAfter = section.after.timeout || [];
    const errorAfter = section.after.error || [];
    
    paragraphs.push(new Paragraph({ text: `HKP Transmit after test         : ${padString(txAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Transmit after test         : ${padString(txAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Transmit after test         : ${padString(txAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Transmit after test         : ${padString(txAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Transmit after test         : ${padString(txAfter[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Acknowledgement after test  : ${padString(ackAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Acknowledgement after test  : ${padString(ackAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Acknowledgement after test  : ${padString(ackAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Acknowledgement after test  : ${padString(ackAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Acknowledgement after test  : ${padString(ackAfter[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Timeout after test          : ${padString(timeoutAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Timeout after test          : ${padString(timeoutAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Timeout after test          : ${padString(timeoutAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Timeout after test          : ${padString(timeoutAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Timeout after test          : ${padString(timeoutAfter[4], 4)}`, spacing: { after: 100 } }));
    
    paragraphs.push(new Paragraph({ text: `HKP Error after test            : ${padString(errorAfter[0], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `CFG Error after test            : ${padString(errorAfter[1], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `MET Error after test            : ${padString(errorAfter[2], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `ETC Error after test            : ${padString(errorAfter[3], 4)}`, spacing: { after: 100 } }));
    paragraphs.push(new Paragraph({ text: `UHF Error after test            : ${padString(errorAfter[4], 4)}`, spacing: { after: 100 } }));
  }
  
  return paragraphs;
}

// Helper function for Voltage Current section
function createVoltageCurrentSection(results: any): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    
    if (results.voltage) {
      const v = results.voltage;
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 SDCard 3V3 V  : ${padString(v.sdCard.value, 4)} mV    ${v.sdCard.result}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Flash 3v3 V   : ${padString(v.flash.value, 4)} mV    ${v.flash.result}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 EEPROM 3V3 V  : ${padString(v.eeprom.value, 4)} mV    ${v.eeprom.result}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Payload 3V3 V : ${padString(v.payload.value, 4)} mV    ${v.payload.result}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Payload 3V3 I : ${padString(v.payload.current, 4)} mA`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 UHF 3V3 V     : ${padString(v.uhf.value, 4)} mV    ${v.uhf.result}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 UHF 3V3 I     : ${padString(v.uhf.current, 4)} mA`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 PP 3V3 V      : ${padString(v.pp.value, 4)} mV`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 PP 3V3 I      : ${padString(v.pp.current, 4)} mA`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({ text: ``, spacing: { after: 100 } }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 GPS V         : ${padString(v.gps.value, 4)} mV`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 LNA V         : ${padString(v.lna.value, 4)} mV`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 LNA I         : ${padString(v.lna.current, 4)} mA`,
        spacing: { after: 100 }
      }));
    }
    
    return paragraphs;
  }
  
  // Helper function for Memory Test section
  function createMemoryTestSection(results: any): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    
    if (results.memory) {
      // SD Card Test
      paragraphs.push(new Paragraph({
        text: `SD Card : -- ${results.memory.sdCard.result}`,
        spacing: { after: 100 }
      }));
      
      if (results.memory.sdCard.result !== "Not tested") {
        const sdCard = results.memory.sdCard;
        
        paragraphs.push(new Paragraph({
          text: `OBC-2 SDCard 3V3 V          : ${padString(results.voltage.sdCard.value, 4)} mV`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Success before test   : ${padString(sdCard.before.writeSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Success before test    : ${padString(sdCard.before.readSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Fail before test      : ${padString(sdCard.before.writeFail, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Fail before test       : ${padString(sdCard.before.readFail, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Success after test    : ${padString(sdCard.after.writeSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Success after test     : ${padString(sdCard.after.readSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Fail after test       : ${padString(sdCard.after.writeFail, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Fail after test        : ${padString(sdCard.after.readFail, 4)}`,
          spacing: { after: 100 }
        }));
      } else {
        paragraphs.push(new Paragraph({
          text: `SD Card test was not performed`,
          spacing: { after: 100 }
        }));
      }
      
      paragraphs.push(new Paragraph({
        text: `--------------------------------------------------------------------`,
        spacing: { after: 100 }
      }));
      
      // EEPROM Test
      paragraphs.push(new Paragraph({
        text: `EEPROM : -- ${results.memory.eeprom.result}`,
        spacing: { after: 100 }
      }));
      
      if (results.memory.eeprom.result !== "Not tested") {
        const eeprom = results.memory.eeprom;
        
        paragraphs.push(new Paragraph({
          text: `OBC-2 EEPROM 3V3 V          : ${padString(results.voltage.eeprom.value, 4)} mV`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Success before test   : ${padString(eeprom.before.writeSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Success before test    : ${padString(eeprom.before.readSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Fail before test      : ${padString(eeprom.before.writeFail, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Fail before test       : ${padString(eeprom.before.readFail, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Success after test    : ${padString(eeprom.after.writeSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Success after test     : ${padString(eeprom.after.readSuccess, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Write Fail after test       : ${padString(eeprom.after.writeFail, 4)}`,
          spacing: { after: 100 }
        }));
        
        paragraphs.push(new Paragraph({
          text: `Read Fail after test        : ${padString(eeprom.after.readFail, 4)}`,
          spacing: { after: 100 }
        }));
      } else {
        paragraphs.push(new Paragraph({
          text: `EEPROM test was not performed`,
          spacing: { after: 100 }
        }));
      }
    }
    
    return paragraphs;
  }
  
  // Helper function for final checkout section
  function createFinalCheckoutSection(results: any): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    
    if (results.time && results.time.final) {
      const final = results.time.final;
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Time              : ${final.current} UTC`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Uptime Total      : ${final.uptime.total} sec`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Store Period      : ${final.storePeriod} sec`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Uptime Session    : ${final.uptime.session} sec`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Reset Count       : ${final.resetCount}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Reset Source      : ${final.resetSource}`,
        spacing: { after: 100 }
      }));
    } else {
      // Use the initial time readings if final time readings are not available
      paragraphs.push(new Paragraph({
        text: `OBC-2 Time              : ${results.time.current} UTC`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Uptime Total      : ${results.time.uptime.total} sec`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Store Period      : ${results.time.storePeriod} sec`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Uptime Session    : ${results.time.uptime.session} sec`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Reset Count       : ${results.time.resetCount}`,
        spacing: { after: 100 }
      }));
      
      paragraphs.push(new Paragraph({
        text: `OBC-2 Reset Source      : ${results.time.resetSource}`,
        spacing: { after: 100 }
      }));
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
  function padString(value: string | number | undefined, length: number): string {
    if (value === undefined || value === null) return ''.padStart(length, ' ');
    return String(value).padStart(length, ' ');
  }