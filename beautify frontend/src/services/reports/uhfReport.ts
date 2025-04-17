// src/services/reports/uhfReport.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for UHF checkout results
 * 
 * @param results The UHF test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateUHFReport(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `UHF_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "UHF Automated Self Check Out Test",
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
        
        // UHF Telemetry section
        new Paragraph({
          text: "* UHF Telemetry :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        ...createTelemetrySection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // UHF System Configuration section
        new Paragraph({
          text: "* UHF System Configuration :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        ...createSystemSection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // UHF Receiver Configuration section
        new Paragraph({
          text: "* UHF Receiver Configuration :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        ...createReceiverSection(results),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // UHF Transmitter Configuration section
        new Paragraph({
          text: "* UHF Transmitter Configuration :",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        ...createTransmitterSection(results),
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

// Helper function for the telemetry section
function createTelemetrySection(results: any): Paragraph[] {
  const telemetry = results.telemetry;
  return [
    new Paragraph({
      text: `Board temperature (near MCU)                : ${telemetry.boardTemperature} degree C`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PA temperature (near PA)                    : ${telemetry.paTemperature} degree C`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Last received RSSI                          : ${telemetry.lastRssi}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Last received RF error                      : ${telemetry.lastRferr}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of tx packets since reboot           : ${telemetry.txCount} packets`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of rx packets since reboot           : ${telemetry.rxCount} packets`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of tx bytes since reboot             : ${telemetry.txBytes} bytes`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of rx bytes since reboot             : ${telemetry.rxBytes} bytes`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The currently active system configuration   : ${telemetry.activeConf}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The number of reboots                       : ${telemetry.bootCount}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The cause of the reboot                     : ${telemetry.bootCause}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The timestamp of the last valid packet      : ${telemetry.lastContact}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The current background RSSI level           : ${telemetry.bgndRssi}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Total TX duty time since reboot             : ${telemetry.txDuty}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of tx packets (total)                : ${telemetry.totalTxCount} packets`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of rx packets (total)                : ${telemetry.totalRxCount} packets`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of tx bytes (total)                  : ${telemetry.totalTxBytes} bytes`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of rx bytes (total)                  : ${telemetry.totalRxBytes} bytes`,
      spacing: { after: 100 }
    })
  ];
}

// Helper function for the system configuration section
function createSystemSection(results: any): Paragraph[] {
  const system = results.system;
  return [
    new Paragraph({
      text: `Sets the RSSI indicator offset              : ${system.rssiOffset}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Maximum temperature                         : ${system.maxTemp} degree C`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Exponential moving average (alpha value)    : ${system.bgndrssiEma}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `CSP address of the AX100 module             : ${system.cspNode}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enables I2C                                 : ${system.i2cEn}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enables CAN                                 : ${system.canEn}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enables push-to-talk driver (GS100 only)    : ${system.extpptEn}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Set to zero to disable the on-board leds    : ${system.ledEn}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Set which USART to use for KISS interface   : ${system.kissUsart}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Set which USART to use for GOSH interface   : ${system.goshUsart}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The non-shifted I2C address of the system   : ${system.i2cAddr}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The speed of the I2C master                 : ${system.i2cKhz}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The speed of the CAN bus                    : ${system.canKhz}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of seconds before automatic reboot   : ${system.rebootIn}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of seconds the transmitter shutdown  : ${system.txInhibit}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable log-system FRAM storage backend      : ${system.logStore}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `TX power level                              : ${system.txPwr}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Maximum seconds to key up the transmitter   : ${system.maxTxTime} seconds`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Number of seconds the receiver can be idle  : ${system.maxIdleTime} seconds`,
      spacing: { after: 100 }
    })
  ];
}

// Helper function for the receiver configuration section
function createReceiverSection(results: any): Paragraph[] {
  const receiver = results.receiver;
  return [
    new Paragraph({
      text: `Frequency in [Hz]                           : ${receiver.frequency} Hz`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Baudrate                                    : ${receiver.baudrate} bps`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Same as the tx_modindex                     : ${receiver.modindex}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `RX guard in [ms]                            : ${receiver.guard} ms`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Startup value of the PLLRANGE register      : ${receiver.pllrang}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Framing mode                                : ${receiver.mode}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable HMAC (checksum and authentication)   : ${receiver.cspHmac}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable Reed-Solomon                         : ${receiver.cspRs}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable CRC-32                               : ${receiver.cspCrc}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable CCSDS randomization                  : ${receiver.cspRand}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `HMAC key (needs to match transmitter)       : ${receiver.hmacKeys[0]}${receiver.hmacKeys[1]}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The call sign                               : ${receiver.ax25Call[0]}${receiver.ax25Call[1]}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Receiver bandwidth in Hz                    : ${receiver.bandwidth} Hz`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Sets the AFC pull-in range in Hz            : ${receiver.afcrange} Hz`,
      spacing: { after: 100 }
    })
  ];
}

// Helper function for the transmitter configuration section
function createTransmitterSection(results: any): Paragraph[] {
  const transmitter = results.transmitter;
  return [
    new Paragraph({
      text: `Frequency in [Hz]                           : ${transmitter.frequency} Hz`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Baudrate                                    : ${transmitter.baudrate} bps`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Same as the tx_modindex                     : ${transmitter.modindex}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `RX guard in [ms]                            : ${transmitter.guard} ms`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Startup value of the PLLRANGE register      : ${transmitter.pllrang}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Framing mode                                : ${transmitter.mode}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable HMAC (checksum and authentication)   : ${transmitter.cspHmac}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable Reed-Solomon                         : ${transmitter.cspRs}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable CRC-32                               : ${transmitter.cspCrc}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Enable CCSDS randomization                  : ${transmitter.cspRand}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `HMAC key (needs to match transmitter)       : ${transmitter.hmacKeys[0]}${transmitter.hmacKeys[1]}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The call sign                               : ${transmitter.ax25Call[0]}${transmitter.ax25Call[1]}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The byte to use as preamble                 : ${transmitter.preamb}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The length of the preamble in bytes         : ${transmitter.preamblen} bytes`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The flags to use for the preamble           : ${transmitter.preambflags}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The byte to use between two frames          : ${transmitter.intfrm}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The number of bytes put between two frames  : ${transmitter.intfrmlen} bytes`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The flags to use for the intfrm bytes       : ${transmitter.intfrmflags}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Busy when the RSSI is above this value      : ${transmitter.rssibusy}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `An additional delay of the first frame      : ${transmitter.kupDelay}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `The input level for the PA                  : ${transmitter.paLevel}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `Injects random bit-errors                   : ${transmitter.ber}`,
      spacing: { after: 100 }
    })
  ];
}

