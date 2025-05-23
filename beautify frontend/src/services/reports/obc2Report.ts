// src/services/reports/obc2Report.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

/**
 * Generate both Word document and PDF reports for OBC-2 checkout results
 * 
 * @param results The OBC-2 test results
 * @returns A promise that resolves to the filename of the saved reports
 */
export async function generateOBC2Report(results: any): Promise<string> {
  try {
    // Generate both Word and PDF reports
    const wordFilename = await generateOBC2WordReport(results);
    const pdfFilename = await generateOBC2PDFReport(results);
    
    return `${wordFilename} and ${pdfFilename}`;
  } catch (error) {
    console.error('❌ Error generating OBC-2 reports:', error);
    throw new Error(`Failed to generate OBC-2 reports: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Generate a Word document report for OBC-2 checkout results
 * 
 * @param results The OBC-2 test results
 * @returns A promise that resolves to the filename of the saved report
 */
async function generateOBC2WordReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `OBC-2_Checkout_${dateStr}_${timeStr}.docx`;
  
  console.log(`📝 Generating OBC-2 Word report: ${filename}`);
  
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
  
  try {
    // Generate the document
    console.log('🔄 Generating Word document...');
    const buffer = await Packer.toBuffer(doc);
    
    // Save the file
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, filename);
    
    console.log(`✅ OBC-2 Word report saved successfully: ${filename}`);
    
    // Mark the report as generated
    results.reportGenerated = true;
    
    return filename;
  } catch (error) {
    console.error('❌ Error generating OBC-2 Word report:', error);
    throw new Error(`Failed to generate OBC-2 Word report: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Generate a PDF report for OBC-2 checkout results
 * 
 * @param results The OBC-2 test results
 * @returns A promise that resolves to the filename of the saved PDF report
 */
async function generateOBC2PDFReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `OBC-2_Checkout_${dateStr}_${timeStr}.pdf`;
  
  console.log(`📝 Generating OBC-2 PDF report: ${filename}`);
  
  try {
    // Create new PDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Set up the document
    let yPosition = 20;
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;
    const margin = 20;

    // Helper function to check if we need a new page
    const checkNewPage = (requiredSpace: number = 20) => {
      if (yPosition + requiredSpace > pageHeight - 30) {
        pdf.addPage();
        yPosition = 20;
        return true;
      }
      return false;
    };

    // Title
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('OBC-2 Automated Self Check Out Test Report', margin, yPosition);
    yPosition += 15;

    // Subtitle
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Generated by SATS - Satellite Automated Testing System', margin, yPosition);
    yPosition += 10;

    // Test metadata
    pdf.setFontSize(10);
    pdf.text(`Test Date: ${now.toLocaleDateString()}`, margin, yPosition);
    yPosition += 6;
    pdf.text(`Test Time: ${now.toLocaleTimeString()}`, margin, yPosition);
    yPosition += 6;
    pdf.text(`Test Status: ${results.error ? 'FAILED' : 'COMPLETED'}`, margin, yPosition);
    yPosition += 15;

    // Add a separator line
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Firmware Version Section
    checkNewPage(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Firmware Version', margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.firmware) {
      pdf.text(`Version: ${results.firmware.major}.${results.firmware.minor}.${results.firmware.patch}`, margin, yPosition);
    } else {
      pdf.text('Firmware information not available', margin, yPosition);
    }
    yPosition += 15;

    // Time Sync Section
    checkNewPage(30);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Time Synchronization', margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.time) {
      pdf.text(`Before Update: ${results.time.before} UTC`, margin, yPosition);
      yPosition += 6;
      pdf.text(`After Update: ${results.time.after} UTC`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Current Time: ${results.time.current} UTC`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Uptime Total: ${results.time.uptime?.total || 'N/A'} sec`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Store Period: ${results.time.storePeriod} sec`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Reset Count: ${results.time.resetCount}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Reset Source: ${results.time.resetSource}`, margin, yPosition);
    } else {
      pdf.text('Time information not available', margin, yPosition);
    }
    yPosition += 15;

    // Test Summary Section
    checkNewPage(50);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Test Summary', margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.can && results.voltage && results.memory) {
      pdf.text(`Primary CAN: ${results.can.primary.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Secondary CAN: ${results.can.secondary.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`SD Card Voltage: ${results.voltage.sdCard.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Flash Voltage: ${results.voltage.flash.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`EEPROM Voltage: ${results.voltage.eeprom.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Payload Voltage: ${results.voltage.payload.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`UHF Voltage: ${results.voltage.uhf.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`SD Card Test: ${results.memory.sdCard.result}`, margin, yPosition);
      yPosition += 6;
      pdf.text(`EEPROM Test: ${results.memory.eeprom.result}`, margin, yPosition);
    } else {
      pdf.text('Test summary not available', margin, yPosition);
    }
    yPosition += 15;

    // CAN Tests Section
    checkNewPage(60);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CAN Bus Tests', margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Primary CAN', margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.can?.primary) {
      const primary = results.can.primary;
      pdf.text(`Result: ${primary.result}`, margin, yPosition);
      yPosition += 6;
      
      // Add before/after statistics if available
      if (primary.before && primary.after) {
        pdf.text('Statistics (Before → After):', margin, yPosition);
        yPosition += 6;
        
        const modules = ['HKP', 'CFG', 'MET', 'ETC', 'UHF'];
        modules.forEach((module, index) => {
          if (primary.before.tx && primary.after.tx) {
            pdf.text(`${module} TX: ${primary.before.tx[index] || 0} → ${primary.after.tx[index] || 0}`, margin + 10, yPosition);
            yPosition += 5;
          }
        });
      }
    }
    yPosition += 10;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Secondary CAN', margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.can?.secondary) {
      const secondary = results.can.secondary;
      pdf.text(`Result: ${secondary.result}`, margin, yPosition);
      yPosition += 6;
    }
    yPosition += 15;

    // Voltage Section
    checkNewPage(50);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Voltage Measurements', margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.voltage) {
      const v = results.voltage;
      pdf.text(`SD Card 3V3: ${v.sdCard?.value || 'N/A'} mV (${v.sdCard?.result || 'N/A'})`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Flash 3V3: ${v.flash?.value || 'N/A'} mV (${v.flash?.result || 'N/A'})`, margin, yPosition);
      yPosition += 6;
      pdf.text(`EEPROM 3V3: ${v.eeprom?.value || 'N/A'} mV (${v.eeprom?.result || 'N/A'})`, margin, yPosition);
      yPosition += 6;
      pdf.text(`Payload 3V3: ${v.payload?.value || 'N/A'} mV (${v.payload?.result || 'N/A'})`, margin, yPosition);
      yPosition += 6;
      pdf.text(`UHF 3V3: ${v.uhf?.value || 'N/A'} mV (${v.uhf?.result || 'N/A'})`, margin, yPosition);
      yPosition += 6;
    } else {
      pdf.text('Voltage information not available', margin, yPosition);
    }
    yPosition += 15;

    // Memory Tests Section
    checkNewPage(40);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Memory Tests', margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (results.memory) {
      pdf.text(`SD Card Test: ${results.memory.sdCard?.result || 'N/A'}`, margin, yPosition);
      yPosition += 6;
      if (results.memory.sdCard?.before && results.memory.sdCard?.after) {
        const sd = results.memory.sdCard;
        pdf.text(`  Write Success: ${sd.before.writeSuccess} → ${sd.after.writeSuccess}`, margin + 10, yPosition);
        yPosition += 5;
        pdf.text(`  Read Success: ${sd.before.readSuccess} → ${sd.after.readSuccess}`, margin + 10, yPosition);
        yPosition += 5;
      }
      yPosition += 6;
      
      pdf.text(`EEPROM Test: ${results.memory.eeprom?.result || 'N/A'}`, margin, yPosition);
      yPosition += 6;
      if (results.memory.eeprom?.before && results.memory.eeprom?.after) {
        const eeprom = results.memory.eeprom;
        pdf.text(`  Write Success: ${eeprom.before.writeSuccess} → ${eeprom.after.writeSuccess}`, margin + 10, yPosition);
        yPosition += 5;
        pdf.text(`  Read Success: ${eeprom.before.readSuccess} → ${eeprom.after.readSuccess}`, margin + 10, yPosition);
        yPosition += 5;
      }
    } else {
      pdf.text('Memory test information not available', margin, yPosition);
    }

    // Add footer to all pages
    const totalPages = pdf.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 10);
      pdf.text(`Generated: ${now.toLocaleString()}`, margin, pageHeight - 10);
    }

    // Save the PDF
    pdf.save(filename);

    console.log(`✅ OBC-2 PDF report saved successfully: ${filename}`);
    return filename;

  } catch (error) {
    console.error('❌ Error generating OBC-2 PDF report:', error);
    throw new Error(`Failed to generate OBC-2 PDF report: ${error instanceof Error ? error.message : String(error)}`);
  }
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