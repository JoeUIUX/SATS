// src/services/reports/hepsReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for HEPS checkout results
 * 
 * @param results The HEPS test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateHEPSReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `HEPS_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "HEPS Automated Self Check Out Test",
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
        
        // Test Summary section
        new Paragraph({
          text: "* Test Summary :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Primary CAN                     : ${results.can.primary.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Secondary CAN                   : ${results.can.secondary.result}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Battery 1 Voltage               : ${results.battery.voltage.result1}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Battery 2 Voltage               : ${results.battery.voltage.result2}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
            text: `Battery 3 Voltage               : ${results.battery.voltage.result3}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `OBN 1 Voltage                   : ${results.obn.obn1.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `OBN 2 Voltage                   : ${results.obn.obn2.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `AUX Voltage                     : ${results.obn.aux12v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `HDRM 12V Converter 1 Voltage    : ${results.converters.conv1.hdrm12v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `5V Converter 1 Voltage          : ${results.converters.conv1.conv5v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `12V Converter 1 Voltage         : ${results.converters.conv1.conv12v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `15V Converter Voltage           : ${results.converters.conv1.conv15v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `HDRM 12V Converter 2 Voltage    : ${results.converters.conv2.hdrm12v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `5V Converter 2 Voltage          : ${results.converters.conv2.conv5v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `12V Converter 2 Voltage         : ${results.converters.conv2.conv12v.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `OBC-1 Voltage                   : ${results.rlcl.obc1.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `OBC-2 Voltage                   : ${results.rlcl.obc2.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `S-Band Voltage                  : ${results.rlcl.sband.result}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: `UHF Voltage                     : ${results.rlcl.uhf.result}`,
            spacing: { after: 100 }
          }),
          
          // Page break
          new Paragraph({
            text: "",
            pageBreakBefore: true
          }),
          
          // HEPS-1 CAN Check Summary section
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "* HEPS-1 CAN Check Summary :",
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
          ...createPrimaryCanSection(results),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          
          // Page break
          new Paragraph({
            text: "",
            pageBreakBefore: true
          }),
          
          // OBC-2 CAN Check Summary section
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "* OBC-2 CAN Check Summary :",
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
          ...createSecondaryCanSection(results),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          
          // Page break
          new Paragraph({
            text: "",
            pageBreakBefore: true
          }),
          
          // Battery Summary section
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "* Battery Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createBatterySection(results),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          
          // Solar Array Summary section
          new Paragraph({
            text: "* Solar Array Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createSolarArraySection(results),
          
          // Page break
          new Paragraph({
            text: "",
            pageBreakBefore: true
          }),
          
          // OBN Summary section
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "* OBN Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createOBNSection(results),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          
          // Battery Charging Regulator Summary section
          new Paragraph({
            text: "* Battery Charging Regulator Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createBCRSection(results),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          
          // PCB Temperature Summary section
          new Paragraph({
            text: "* PCB Temperature Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createPCBSection(results),
          
          // Page break
          new Paragraph({
            text: "",
            pageBreakBefore: true
          }),
          
          // Converter Summary section
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "* Converter Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createConverterSection(results),
          
          // Page break
          new Paragraph({
            text: "",
            pageBreakBefore: true
          }),
          
          // Load Summary section
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "* Load Summary :",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 }
          }),
          new Paragraph({
            text: "--------------------------------------------------------------------",
            spacing: { after: 100 }
          }),
          ...createLoadSection(results),
          
          // If heater tests were enabled, add heater test results
          ...(hasHeaterTestResults(results) ? [
              // Page break before heater test results
              new Paragraph({
                text: "",
                pageBreakBefore: true
              }),
              
              // Heater 1 Test Summary section
              new Paragraph({
                text: "--------------------------------------------------------------------",
                spacing: { after: 100 }
              }),
              new Paragraph({
                text: "* Heater 1 Test Summary :",
                heading: HeadingLevel.HEADING_2,
                spacing: { after: 100 }
              }),
              new Paragraph({
                text: "--------------------------------------------------------------------",
                spacing: { after: 100 }
              }),
              ...createHeater1TestSection(results),
              new Paragraph({
                text: "--------------------------------------------------------------------",
                spacing: { after: 100 }
              }),
              
              // Page break
              new Paragraph({
                text: "",
                pageBreakBefore: true
              }),
              
              // Heater 2 Test Summary section
              new Paragraph({
                text: "--------------------------------------------------------------------",
                spacing: { after: 100 }
              }),
              new Paragraph({
                text: "* Heater 2 Test Summary :",
                heading: HeadingLevel.HEADING_2,
                spacing: { after: 100 }
              }),
              new Paragraph({
                text: "--------------------------------------------------------------------",
                spacing: { after: 100 }
              }),
              ...createHeater2TestSection(results),
              new Paragraph({
                text: "--------------------------------------------------------------------",
                spacing: { after: 100 }
              })
          ] : [])
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
   * Check if heater test results are present
   */
  function hasHeaterTestResults(results: any): boolean {
    return results.heater &&
           results.heater.heater1 &&
           results.heater.heater1.test &&
           results.heater.heater1.test.lclOn &&
           results.heater.heater1.test.lclOn.length > 0;
  }
  
  /**
   * Helper function to create Primary CAN section
   */
  function createPrimaryCanSection(results: any): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    
    if (results.can && results.can.primary) {
      const primary = results.can.primary;
      
      // Before test values
      paragraphs.push(new Paragraph({
        text: `PCM Transmit before test            : ${formatString(primary.before.tx[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Transmit before test           : ${formatString(primary.before.tx[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Transmit before test           : ${formatString(primary.before.tx[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Transmit before test           : ${formatString(primary.before.tx[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Transmit before test           : ${formatString(primary.before.tx[4])}`,
        spacing: { after: 100 }
      }));
      
      // Acknowledgement before test
      paragraphs.push(new Paragraph({
        text: `PCM Acknowledgement before test     : ${formatString(primary.before.ack[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Acknowledgement before test    : ${formatString(primary.before.ack[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Acknowledgement before test    : ${formatString(primary.before.ack[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Acknowledgement before test    : ${formatString(primary.before.ack[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Acknowledgement before test    : ${formatString(primary.before.ack[4])}`,
        spacing: { after: 100 }
      }));
      
      // Timeout before test
      paragraphs.push(new Paragraph({
        text: `PCM Timeout before test             : ${formatString(primary.before.timeout[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Timeout before test            : ${formatString(primary.before.timeout[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Timeout before test            : ${formatString(primary.before.timeout[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Timeout before test            : ${formatString(primary.before.timeout[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Timeout before test            : ${formatString(primary.before.timeout[4])}`,
        spacing: { after: 100 }
      }));
      
      // Error before test
      paragraphs.push(new Paragraph({
        text: `PCM Error before test               : ${formatString(primary.before.error[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Error before test              : ${formatString(primary.before.error[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Error before test              : ${formatString(primary.before.error[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Error before test              : ${formatString(primary.before.error[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Error before test              : ${formatString(primary.before.error[4])}`,
        spacing: { after: 100 }
      }));
      
      // Empty line and CAN config
      paragraphs.push(new Paragraph({
        text: ``,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `CAN Primary Secondary Config        : 0`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: ``,
        spacing: { after: 100 }
      }));
      
      // After test values
      paragraphs.push(new Paragraph({
        text: `PCM Transmit after test             : ${formatString(primary.after.tx[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Transmit after test            : ${formatString(primary.after.tx[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Transmit after test            : ${formatString(primary.after.tx[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Transmit after test            : ${formatString(primary.after.tx[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Transmit after test            : ${formatString(primary.after.tx[4])}`,
        spacing: { after: 100 }
      }));
      
      // Acknowledgement after test
      paragraphs.push(new Paragraph({
        text: `PCM Acknowledgement after test      : ${formatString(primary.after.ack[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Acknowledgement after test     : ${formatString(primary.after.ack[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Acknowledgement after test     : ${formatString(primary.after.ack[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Acknowledgement after test     : ${formatString(primary.after.ack[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Acknowledgement after test     : ${formatString(primary.after.ack[4])}`,
        spacing: { after: 100 }
      }));
      
      // Timeout after test
      paragraphs.push(new Paragraph({
        text: `PCM Timeout after test              : ${formatString(primary.after.timeout[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Timeout after test             : ${formatString(primary.after.timeout[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Timeout after test             : ${formatString(primary.after.timeout[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Timeout after test             : ${formatString(primary.after.timeout[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Timeout after test             : ${formatString(primary.after.timeout[4])}`,
        spacing: { after: 100 }
      }));
      
      // Error after test
      paragraphs.push(new Paragraph({
        text: `PCM Error after test                : ${formatString(primary.after.error[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Error after test               : ${formatString(primary.after.error[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Error after test               : ${formatString(primary.after.error[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Error after test               : ${formatString(primary.after.error[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Error after test               : ${formatString(primary.after.error[4])}`,
        spacing: { after: 100 }
      }));
    }
    
    return paragraphs;
  }
  
  /**
   * Helper function to create Secondary CAN section
   */
  function createSecondaryCanSection(results: any): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    
    if (results.can && results.can.secondary) {
      const secondary = results.can.secondary;
      
      // Before test values
      paragraphs.push(new Paragraph({
        text: `PCM Transmit before test            : ${formatString(secondary.before.tx[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Transmit before test           : ${formatString(secondary.before.tx[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Transmit before test           : ${formatString(secondary.before.tx[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Transmit before test           : ${formatString(secondary.before.tx[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Transmit before test           : ${formatString(secondary.before.tx[4])}`,
        spacing: { after: 100 }
      }));
      
      // Acknowledgement before test
      paragraphs.push(new Paragraph({
        text: `PCM Acknowledgement before test     : ${formatString(secondary.before.ack[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Acknowledgement before test    : ${formatString(secondary.before.ack[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Acknowledgement before test    : ${formatString(secondary.before.ack[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Acknowledgement before test    : ${formatString(secondary.before.ack[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Acknowledgement before test    : ${formatString(secondary.before.ack[4])}`,
        spacing: { after: 100 }
      }));
      
      // Timeout before test
      paragraphs.push(new Paragraph({
        text: `PCM Timeout before test             : ${formatString(secondary.before.timeout[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Timeout before test            : ${formatString(secondary.before.timeout[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Timeout before test            : ${formatString(secondary.before.timeout[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Timeout before test            : ${formatString(secondary.before.timeout[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Timeout before test            : ${formatString(secondary.before.timeout[4])}`,
        spacing: { after: 100 }
      }));
      
      // Error before test
      paragraphs.push(new Paragraph({
        text: `PCM Error before test               : ${formatString(secondary.before.error[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Error before test              : ${formatString(secondary.before.error[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Error before test              : ${formatString(secondary.before.error[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Error before test              : ${formatString(secondary.before.error[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Error before test              : ${formatString(secondary.before.error[4])}`,
        spacing: { after: 100 }
      }));
      
      // Empty line and CAN config
      paragraphs.push(new Paragraph({
        text: ``,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `CAN Primary Secondary Config        : 31`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: ``,
        spacing: { after: 100 }
      }));
      
      // After test values
      paragraphs.push(new Paragraph({
        text: `PCM Transmit after test             : ${formatString(secondary.after.tx[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Transmit after test            : ${formatString(secondary.after.tx[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Transmit after test            : ${formatString(secondary.after.tx[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Transmit after test            : ${formatString(secondary.after.tx[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Transmit after test            : ${formatString(secondary.after.tx[4])}`,
        spacing: { after: 100 }
      }));
      
      // Acknowledgement after test
      paragraphs.push(new Paragraph({
        text: `PCM Acknowledgement after test      : ${formatString(secondary.after.ack[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Acknowledgement after test     : ${formatString(secondary.after.ack[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Acknowledgement after test     : ${formatString(secondary.after.ack[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Acknowledgement after test     : ${formatString(secondary.after.ack[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Acknowledgement after test     : ${formatString(secondary.after.ack[4])}`,
        spacing: { after: 100 }
      }));
      
      // Timeout after test
      paragraphs.push(new Paragraph({
        text: `PCM Timeout after test              : ${formatString(secondary.after.timeout[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Timeout after test             : ${formatString(secondary.after.timeout[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Timeout after test             : ${formatString(secondary.after.timeout[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Timeout after test             : ${formatString(secondary.after.timeout[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Timeout after test             : ${formatString(secondary.after.timeout[4])}`,
        spacing: { after: 100 }
      }));
      
      // Error after test
      paragraphs.push(new Paragraph({
        text: `PCM Error after test                : ${formatString(secondary.after.error[0])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM1 Error after test               : ${formatString(secondary.after.error[1])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PSM2 Error after test               : ${formatString(secondary.after.error[2])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM1 Error after test               : ${formatString(secondary.after.error[3])}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `PDM2 Error after test               : ${formatString(secondary.after.error[4])}`,
        spacing: { after: 100 }
      }));
    }
    
    return paragraphs;
  }
  
  /**
   * Helper function to create Battery section
   */
  function createBatterySection(results: any): Paragraph[] {
    const paragraphs: Paragraph[] = [];
    
    if (results.battery) {
      const battery = results.battery;
      
      // Battery voltage
      paragraphs.push(new Paragraph({
        text: `Battery 1 Voltage           : ${formatNumber(battery.voltage.bat1)} V    ${battery.voltage.result1}`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery 2 Voltage           : ${formatNumber(battery.voltage.bat2)} V    ${battery.voltage.result2}`,
        spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Battery 3 Voltage           : ${formatNumber(battery.voltage.bat3)} V    ${battery.voltage.result3}`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // Battery current
    paragraphs.push(new Paragraph({
      text: `Battery 1 Charging Current  : ${formatNumber(battery.current.bat1)} A`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Battery 2 Charging Current  : ${formatNumber(battery.current.bat2)} A`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Battery 3 Charging Current  : ${formatNumber(battery.current.bat3)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // Battery temperature
    paragraphs.push(new Paragraph({
      text: `Battery 1 Temperature       : ${formatNumber(battery.temperature.bat1)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Battery 2 Temperature       : ${formatNumber(battery.temperature.bat2)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Battery 3 Temperature       : ${formatNumber(battery.temperature.bat3)} deg C`,
      spacing: { after: 100 }
    }));
  }
  
  return paragraphs;
}

/**
 * Helper function to create Solar Array section
 */
function createSolarArraySection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.solarArray) {
    const solarArray = results.solarArray;
    
    // Solar Array voltage
    paragraphs.push(new Paragraph({
      text: `Solar Array 1 Voltage               : ${formatNumber(solarArray.voltage.sa1)} V`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 2 Voltage               : ${formatNumber(solarArray.voltage.sa2)} V`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 3 Voltage               : ${formatNumber(solarArray.voltage.sa3)} V`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // Solar Array temperature
    paragraphs.push(new Paragraph({
      text: `Solar Array 1 Y- Temperature        : ${formatNumber(solarArray.temperature.sa1Yneg)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 2 Y- Temperature        : ${formatNumber(solarArray.temperature.sa2Yneg)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 3 Y- Temperature        : ${formatNumber(solarArray.temperature.sa3Yneg)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array Body Mount Temperature  : ${formatNumber(solarArray.temperature.bodyMount)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 1 Y+ Temperature        : ${formatNumber(solarArray.temperature.sa1Ypos)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 2 Y+ Temperature        : ${formatNumber(solarArray.temperature.sa2Ypos)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `Solar Array 3 Y+ Temperature        : ${formatNumber(solarArray.temperature.sa3Ypos)} deg C`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // HDRM deploy status
    paragraphs.push(new Paragraph({
      text: `HDRM 1 Deploy Status                : ${formatNumber(solarArray.hdrmStatus.hdrm1)} V`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `HDRM 2 Deploy Status                : ${formatNumber(solarArray.hdrmStatus.hdrm2)} V`,
      spacing: { after: 100 }
    }));
  }
  
  return paragraphs;
}

/**
 * Helper function to create OBN section
 */
function createOBNSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.obn) {
    const obn = results.obn;
    
    // OBN 1
    paragraphs.push(new Paragraph({
      text: `OBN 1 Voltage   : ${formatNumber(obn.obn1.voltage)} V    ${obn.obn1.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `OBN 1 Current   : ${formatNumber(obn.obn1.current)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // OBN 2
    paragraphs.push(new Paragraph({
      text: `OBN 2 Voltage   : ${formatNumber(obn.obn2.voltage)} V    ${obn.obn2.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `OBN 2 Current   : ${formatNumber(obn.obn2.current)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // AUX 12V
    paragraphs.push(new Paragraph({
      text: `AUX 12V Voltage : ${formatNumber(obn.aux12v.voltage)} V    ${obn.aux12v.result}`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
  }
  
  return paragraphs;
}

/**
 * Helper function to create BCR section
 */
function createBCRSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.bcr) {
    const bcr = results.bcr;
    
    // BCR Current
    paragraphs.push(new Paragraph({
      text: `BCR 1 Current       : ${formatNumber(bcr.current.bcr1)} A`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `BCR 2 Current       : ${formatNumber(bcr.current.bcr2)} A`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `BCR 3 Current       : ${formatNumber(bcr.current.bcr3)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // BCR Temperature
    paragraphs.push(new Paragraph({
      text: `BCR 1 Temperature   : ${formatNumber(bcr.temperature.bcr1)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `BCR 2 Temperature   : ${formatNumber(bcr.temperature.bcr2)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `BCR 3 Temperature   : ${formatNumber(bcr.temperature.bcr3)} deg C`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
  }
  
  return paragraphs;
}

/**
 * Helper function to create PCB section
 */
function createPCBSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.pcb && results.pcb.temperature) {
    const pcb = results.pcb;
    
    // PCB Temperature
    paragraphs.push(new Paragraph({
      text: `PDM 1 Temperature   : ${formatNumber(pcb.temperature.pdm1)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `PDM 2 Temperature   : ${formatNumber(pcb.temperature.pdm2)} deg C`,
      spacing: { after: 100 }
    }));
  }
  
  return paragraphs;
}

/**
 * Helper function to create Converter section
 */
function createConverterSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.converters) {
    const converters = results.converters;
    
    // Converter 1 Voltage
    paragraphs.push(new Paragraph({
      text: `HDRM 12V Converter 1 Voltage    : ${formatNumber(converters.conv1.hdrm12v.voltage)} V    ${converters.conv1.hdrm12v.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `5 V Converter 1 Voltage         : ${formatNumber(converters.conv1.conv5v.voltage)} V    ${converters.conv1.conv5v.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `12 V Converter 1 Voltage        : ${formatNumber(converters.conv1.conv12v.voltage)} V    ${converters.conv1.conv12v.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `15 V Converter Voltage          : ${formatNumber(converters.conv1.conv15v.voltage)} V    ${converters.conv1.conv15v.result}`,
      spacing: { after: 100 }
    }));
    
    // Converter 2 Voltage
    paragraphs.push(new Paragraph({
      text: `HDRM 12V Converter 2 Voltage    : ${formatNumber(converters.conv2.hdrm12v.voltage)} V    ${converters.conv2.hdrm12v.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `5 V Converter 2 Voltage         : ${formatNumber(converters.conv2.conv5v.voltage)} V    ${converters.conv2.conv5v.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `12 V Converter 2 Voltage        : ${formatNumber(converters.conv2.conv12v.voltage)} V    ${converters.conv2.conv12v.result}`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // Converter 1 Temperature
    paragraphs.push(new Paragraph({
      text: `HDRM 12V Converter 1 Temperature    : ${formatNumber(converters.conv1.temperature.hdrm12v)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `5 V Converter 1 Temperature         : ${formatNumber(converters.conv1.temperature.conv5v)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `12 V Converter 1 Temperature        : ${formatNumber(converters.conv1.temperature.conv12v)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `15 V Converter Temperature          : ${formatNumber(converters.conv1.temperature.conv15v)} deg C`,
      spacing: { after: 100 }
    }));
    
    // Converter 2 Temperature
    paragraphs.push(new Paragraph({
      text: `HDRM 12V Converter 2 Temperature    : ${formatNumber(converters.conv2.temperature.hdrm12v)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `5 V Converter 2 Temperature         : ${formatNumber(converters.conv2.temperature.conv5v)} deg C`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `12 V Converter 2 Temperature        : ${formatNumber(converters.conv2.temperature.conv12v)} deg C`,
      spacing: { after: 100 }
    }));
  }
  
  return paragraphs;
}

/**
 * Helper function to create Load section
 */
function createLoadSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.rlcl) {
    const rlcl = results.rlcl;
    
    // OBC-1
    paragraphs.push(new Paragraph({
      text: `OBC-1 Voltage   : ${formatNumber(rlcl.obc1.voltage)} V    ${rlcl.obc1.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `OBC-1 Current   : ${formatNumber(rlcl.obc1.current)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // OBC-2
    paragraphs.push(new Paragraph({
      text: `OBC-2 Voltage   : ${formatNumber(rlcl.obc2.voltage)} V    ${rlcl.obc2.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `OBC-2 Current   : ${formatNumber(rlcl.obc2.current)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // S-Band
    paragraphs.push(new Paragraph({
      text: `SBand Voltage   : ${formatNumber(rlcl.sband.voltage)} V    ${rlcl.sband.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `SBand Current   : ${formatNumber(rlcl.sband.current)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
    
    // UHF
    paragraphs.push(new Paragraph({
      text: `UHF Voltage     : ${formatNumber(rlcl.uhf.voltage)} V    ${rlcl.uhf.result}`,
      spacing: { after: 100 }
    }));
    paragraphs.push(new Paragraph({
      text: `UHF Current     : ${formatNumber(rlcl.uhf.current)} A`,
      spacing: { after: 100 }
    }));
    
    // Empty line
    paragraphs.push(new Paragraph({
      text: ``,
      spacing: { after: 100 }
    }));
  }
  
  // LCL, HDRM and other loads could be added here in a similar fashion
  // but we'll skip them for brevity since they follow the same pattern
  
  return paragraphs;
}

/**
 * Helper function to create Heater 1 Test section
 */
function createHeater1TestSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.heater && results.heater.heater1 && results.heater.heater1.test) {
    const test = results.heater.heater1.test;
    
    // LCL On Record
    paragraphs.push(new Paragraph({
      text: `Heater 1 LCL On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.lclOn && test.lclOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.lclOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.lclOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.lclOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.lclOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.lclOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.lclOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.lclOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Battery HT Switch On Record
    paragraphs.push(new Paragraph({
      text: `Battery HT Switch On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.batteryOn && test.batteryOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.batteryOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.batteryOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.batteryOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.batteryOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.batteryOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.batteryOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.batteryOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Battery HT Switch Off Record
    paragraphs.push(new Paragraph({
      text: `Battery HT Switch Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.batteryOff && test.batteryOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.batteryOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.batteryOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.batteryOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.batteryOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.batteryOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.batteryOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.batteryOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Thruster HT Switch On Record
    paragraphs.push(new Paragraph({
      text: `Thruster HT Switch On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.thrusterOn && test.thrusterOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.thrusterOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.thrusterOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.thrusterOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.thrusterOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.thrusterOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.thrusterOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.thrusterOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Thruster HT Switch Off Record
    paragraphs.push(new Paragraph({
      text: `Thruster HT Switch Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.thrusterOff && test.thrusterOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.thrusterOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.thrusterOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.thrusterOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.thrusterOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.thrusterOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.thrusterOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.thrusterOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // LEOCAM HT Switch On Record
    paragraphs.push(new Paragraph({
      text: `LEOCAM HT Switch On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.leocamOn && test.leocamOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.leocamOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.leocamOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.leocamOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.leocamOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.leocamOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.leocamOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.leocamOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // LEOCAM HT Switch Off Record
    paragraphs.push(new Paragraph({
      text: `LEOCAM HT Switch Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.leocamOff && test.leocamOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.leocamOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.leocamOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.leocamOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.leocamOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.leocamOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.leocamOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.leocamOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Heater 1 LCL Off Record
    paragraphs.push(new Paragraph({
      text: `Heater 1 LCL Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.lclOff && test.lclOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 1 Voltage        : ${formatNumber(test.lclOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Voltage     : ${formatNumber(test.lclOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT1 Current     : ${formatNumber(test.lclOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Voltage    : ${formatNumber(test.lclOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT1 Current    : ${formatNumber(test.lclOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Voltage      : ${formatNumber(test.lclOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT1 Current      : ${formatNumber(test.lclOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
  }
  
  return paragraphs;
}

/**
 * Helper function to create Heater 2 Test section
 */
function createHeater2TestSection(results: any): Paragraph[] {
  const paragraphs: Paragraph[] = [];
  
  if (results.heater && results.heater.heater2 && results.heater.heater2.test) {
    const test = results.heater.heater2.test;
    
    // LCL On Record
    paragraphs.push(new Paragraph({
      text: `Heater 2 LCL On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.lclOn && test.lclOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.lclOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.lclOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.lclOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.lclOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.lclOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.lclOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.lclOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Battery HT Switch On Record
    paragraphs.push(new Paragraph({
      text: `Battery HT Switch On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.batteryOn && test.batteryOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.batteryOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.batteryOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.batteryOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.batteryOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.batteryOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.batteryOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.batteryOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Battery HT Switch Off Record
    paragraphs.push(new Paragraph({
      text: `Battery HT Switch Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.batteryOff && test.batteryOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.batteryOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.batteryOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.batteryOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.batteryOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.batteryOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.batteryOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.batteryOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Thruster HT Switch On Record
    paragraphs.push(new Paragraph({
      text: `Thruster HT Switch On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.thrusterOn && test.thrusterOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.thrusterOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.thrusterOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.thrusterOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.thrusterOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.thrusterOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.thrusterOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.thrusterOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Thruster HT Switch Off Record
    paragraphs.push(new Paragraph({
      text: `Thruster HT Switch Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.thrusterOff && test.thrusterOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.thrusterOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.thrusterOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.thrusterOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.thrusterOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.thrusterOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.thrusterOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.thrusterOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // LEOCAM HT Switch On Record
    paragraphs.push(new Paragraph({
      text: `LEOCAM HT Switch On Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.leocamOn && test.leocamOn.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.leocamOn[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.leocamOn[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.leocamOn[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.leocamOn[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.leocamOn[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.leocamOn[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.leocamOn[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // LEOCAM HT Switch Off Record
    paragraphs.push(new Paragraph({
      text: `LEOCAM HT Switch Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.leocamOff && test.leocamOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.leocamOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.leocamOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.leocamOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.leocamOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.leocamOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.leocamOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.leocamOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
    
    // Heater 2 LCL Off Record
    paragraphs.push(new Paragraph({
      text: `Heater 2 LCL Off Record: - `,
      spacing: { after: 100 }
    }));
    
    if (test.lclOff && test.lclOff.length >= 7) {
      paragraphs.push(new Paragraph({
        text: `Heater 2 Voltage        : ${formatNumber(test.lclOff[0])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Voltage     : ${formatNumber(test.lclOff[1])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Battery HT2 Current     : ${formatNumber(test.lclOff[2])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Voltage    : ${formatNumber(test.lclOff[3])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `Thruster HT2 Current    : ${formatNumber(test.lclOff[4])} A`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Voltage      : ${formatNumber(test.lclOff[5])} V`,
        spacing: { after: 100 }
      }));
      paragraphs.push(new Paragraph({
        text: `LEOCAM HT2 Current      : ${formatNumber(test.lclOff[6])} A`,
        spacing: { after: 100 }
      }));
    }
  }
  
  return paragraphs;
}

/**
 * Utility function to format string values
 */
function formatString(value: string | undefined): string {
  if (!value) return '';
  return value;
}

/**
 * Utility function to format numeric values
 */
function formatNumber(value: string | undefined): string {
  if (!value) return '0.000';
  
  try {
    const numValue = parseFloat(value);
    return numValue.toFixed(3);
  } catch {
    return '0.000';
  }
}

