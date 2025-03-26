// src/services/reports/obc1Report.ts
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

/**
 * Generate a Word document report for OBC-1 checkout results
 * 
 * @param results The OBC-1 test results
 * @returns A promise that resolves to the filename of the saved report
 */
export async function generateOBC1Report(results: any): Promise<string> {
  // Get current date and time for the report filename
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const filename = `OBC-1_Checkout_${dateStr}_${timeStr}.docx`;
  
  // Create the document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          text: "OBC-1 Automated Self Check Out Test",
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
          text: `Current OBC-1 Firmware Version: ${results.firmware.major}.${results.firmware.minor}.${results.firmware.patch}`,
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
        
        // Kernel Information section
        new Paragraph({
          text: "* Kernel Information:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Create kernel info table
        createKernelInfoTable(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // FPGA section
        new Paragraph({
          text: "* FPGA Voltage Current Temperature Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Create FPGA info paragraphs
        ...createFpgaInfoParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // Voltage Current Temperature section
        new Paragraph({
          text: "* Voltage Current Temperature Summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Create VI info paragraphs
        ...createViInfoParagraphs(results),
        
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 200, before: 200 }
        }),
        
        // Page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // eMMC section (if enabled)
        new Paragraph({
          text: "* eMMC test summary:",
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "--------------------------------------------------------------------",
          spacing: { after: 100 }
        }),
        
        // Create eMMC info paragraphs
        ...createEmmcInfoParagraphs(results),
        
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

// Helper function to create kernel info table
function createKernelInfoTable(results: any): Table {
  const rows = [
    ['Uptime', `${results.kernel.uptime} s`],
    ['1 minute average loads', results.kernel.loads.oneMinute],
    ['5 minutes average loads', results.kernel.loads.fiveMinute],
    ['15 minutes average loads', results.kernel.loads.fifteenMinute],
    ['Total usable main memory size', `${results.kernel.memory.totalRam} bytes`],
    ['Available memory size', `${results.kernel.memory.freeRam} bytes`],
    ['Amount of shared memory', `${results.kernel.memory.sharedRam} bytes`],
    ['Memory used by buffers', `${results.kernel.memory.bufferRam} bytes`],
    ['Total swap space size', `${results.kernel.memory.totalSwap} bytes`],
    ['Swap space still available', `${results.kernel.memory.freeSwap} bytes`],
    ['Number of current processes', `${results.kernel.processes} bytes`],
    ['Total high memory size', `${results.kernel.memory.totalHigh} bytes`],
    ['Available high memory size', `${results.kernel.memory.freeHigh} bytes`],
    ['Memory unit size in bytes', `${results.kernel.memory.memUnit} bytes`]
  ].map(row => new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph(row[0])],
        width: { size: 60, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph(row[1])],
        width: { size: 40, type: WidthType.PERCENTAGE }
      })
    ]
  }));

  return new Table({
    rows,
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1 },
      bottom: { style: BorderStyle.SINGLE, size: 1 },
      left: { style: BorderStyle.SINGLE, size: 1 },
      right: { style: BorderStyle.SINGLE, size: 1 },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
      insideVertical: { style: BorderStyle.SINGLE, size: 1 }
    }
  });
}

// Helper function to create FPGA info paragraphs
function createFpgaInfoParagraphs(results: any): Paragraph[] {
  return [
    new Paragraph(`vcc_pspll       : ${padString(results.fpga.voltages.vccPspll, 4)} V`),
    new Paragraph(`vcc_psbatt      : ${padString(results.fpga.voltages.vccPsbatt, 4)} V`),
    new Paragraph(`vccint          : ${padString(results.fpga.voltages.vccint, 4)} V`),
    new Paragraph(`vccbram         : ${padString(results.fpga.voltages.vccbram, 4)} V`),
    new Paragraph(`vccaux          : ${padString(results.fpga.voltages.vccaux, 4)} V`),
    // ... add other voltages as needed
    new Paragraph(`ps_temp         : ${padString(results.fpga.temperatures.psTemp, 4)} deg C`),
    new Paragraph(`remote_temp     : ${padString(results.fpga.temperatures.remoteTemp, 4)} deg C`),
    new Paragraph(`pl_temp         : ${padString(results.fpga.temperatures.plTemp, 4)} deg C`)
  ];
}

// Helper function to create VI info paragraphs
function createViInfoParagraphs(results: any): Paragraph[] {
  return [
    new Paragraph(`OBC-1 3V3 D V           : ${padString(results.vi.d3v3.value, 4)} mV`),
    new Paragraph(`OBC-1 PS 3V3 OBC-2 V    : ${padString(results.vi.ps3v3Obc2.value, 4)} mV`),
    new Paragraph(`OBC-1 PS 5V OBC-2 V     : ${padString(results.vi.ps5vObc2.value, 4)} mV`),
    new Paragraph(`OBC-1 PS 5V OBC-2 I     : ${padString(results.vi.ps5vObc2I, 4)} mA`),
    new Paragraph(`OBC-1 PS 3V3 OBC-2 I    : ${padString(results.vi.ps3v3Obc2I, 4)} mA`),
    new Paragraph(``),
    new Paragraph(`Thruster thermistor 1   : ${padString(results.temperatures.thruster1, 3)} deg C`),
    new Paragraph(`Thruster thermistor 2   : ${padString(results.temperatures.thruster2, 3)} deg C`),
    new Paragraph(`LEOCAM thermistor 1     : ${padString(results.temperatures.leocam[0], 3)} deg C`),
    new Paragraph(`LEOCAM thermistor 2     : ${padString(results.temperatures.leocam[1], 3)} deg C`),
    new Paragraph(`LEOCAM thermistor 3     : ${padString(results.temperatures.leocam[2], 3)} deg C`),
    new Paragraph(`LEOCAM thermistor 4     : ${padString(results.temperatures.leocam[3], 3)} deg C`)
  ];
}

// Helper function to create eMMC info paragraphs
function createEmmcInfoParagraphs(results: any): Paragraph[] {
  if (results.emmc.emmc0States.length === 0 || results.emmc.emmc0States[0] === 'N.A.') {
    return [new Paragraph('eMMC test was not performed')];
  }
  
  return [
    new Paragraph('eMMC state before on eMMC-0 : -'),
    new Paragraph(`eMMC-0 : ${padString(results.emmc.emmc0States[0], 3)}`),
    new Paragraph(`eMMC-1 : ${padString(results.emmc.emmc1States[0], 3)}`),
    new Paragraph('eMMC state after on eMMC-0 : -'),
    new Paragraph(`eMMC-0 : ${padString(results.emmc.emmc0States[1], 3)}`),
    new Paragraph(`eMMC-1 : ${padString(results.emmc.emmc1States[1], 3)}`),
    new Paragraph('eMMC state after off eMMC-0 : -'),
    new Paragraph(`eMMC-0 : ${padString(results.emmc.emmc0States[2], 3)}`),
    new Paragraph(`eMMC-1 : ${padString(results.emmc.emmc1States[2], 3)}`),
    new Paragraph('eMMC state before on eMMC-1 : -'),
    new Paragraph(`eMMC-0 : ${padString(results.emmc.emmc0States[3], 3)}`),
    new Paragraph(`eMMC-1 : ${padString(results.emmc.emmc1States[3], 3)}`),
    new Paragraph('eMMC state after on eMMC-1 : -'),
    new Paragraph(`eMMC-0 : ${padString(results.emmc.emmc0States[4], 3)}`),
    new Paragraph(`eMMC-1 : ${padString(results.emmc.emmc1States[4], 3)}`),
    new Paragraph('eMMC state after off eMMC-1 : -'),
    new Paragraph(`eMMC-0 : ${padString(results.emmc.emmc0States[5], 3)}`),
    new Paragraph(`eMMC-1 : ${padString(results.emmc.emmc1States[5], 3)}`)
];
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
        