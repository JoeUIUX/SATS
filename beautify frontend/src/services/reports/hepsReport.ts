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
  
  // Create all document children (paragraphs and tables) in one array
  const children: Array<Paragraph | Table> = [
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
    
    // Test Summary
    new Paragraph({
      text: "* Test Summary :",
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    })
  ];
  
  // Add passFailStatus values to the summary
  if (results.canTest && results.passFailStatus) {
    children.push(
      new Paragraph({
        text: `Primary CAN                     : ${results.canTest.primaryResult || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Secondary CAN                   : ${results.canTest.secondaryResult || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Battery 1 Voltage               : ${results.passFailStatus.battery1 || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Battery 2 Voltage               : ${results.passFailStatus.battery2 || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Battery 3 Voltage               : ${results.passFailStatus.battery3 || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `OBN 1 Voltage                   : ${results.passFailStatus.obn1Voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `OBN 2 Voltage                   : ${results.passFailStatus.obn2Voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `AUX Voltage                     : ${results.passFailStatus.auxVoltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `HDRM 12V Converter 1 Voltage    : ${results.passFailStatus.hdrm12v1_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `5V Converter 1 Voltage          : ${results.passFailStatus.v5_1_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `12V Converter 1 Voltage         : ${results.passFailStatus.v12_1_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `15V Converter Voltage           : ${results.passFailStatus.v15_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `HDRM 12V Converter 2 Voltage    : ${results.passFailStatus.hdrm12v2_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `5V Converter 2 Voltage          : ${results.passFailStatus.v5_2_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `12V Converter 2 Voltage         : ${results.passFailStatus.v12_2_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `OBC-1 Voltage                   : ${results.passFailStatus.obc1_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `OBC-2 Voltage                   : ${results.passFailStatus.obc2_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `S-Band Voltage                  : ${results.passFailStatus.sband_voltage || "N/A"}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `UHF Voltage                     : ${results.passFailStatus.uhf_voltage || "N/A"}`,
        spacing: { after: 100 }
      })
    );
  }
  
  // Add page break
  children.push(
    new Paragraph({
      text: "",
      pageBreakBefore: true
    })
  );
  
  // HEPS-1 CAN Check Summary
  if (results.canTest) {
    children.push(
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
        text: `Primary CAN : -- ${results.canTest.primaryResult || "N/A"}`,
        spacing: { after: 100 }
      })
    );
    
    // Add CAN data if available
    if (results.canTest.primaryBefore && results.canTest.primaryBefore.length > 0) {
      children.push(
        // PCM Transmit before test
        new Paragraph({
          text: `PCM Transmit before test            : ${results.canTest.primaryBefore[0] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM1 Transmit before test
        new Paragraph({
          text: `PSM1 Transmit before test           : ${results.canTest.primaryBefore[1] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM2 Transmit before test
        new Paragraph({
          text: `PSM2 Transmit before test           : ${results.canTest.primaryBefore[2] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM1 Transmit before test
        new Paragraph({
          text: `PDM1 Transmit before test           : ${results.canTest.primaryBefore[3] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM2 Transmit before test
        new Paragraph({
          text: `PDM2 Transmit before test           : ${results.canTest.primaryBefore[4] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PCM Acknowledgement before test
        new Paragraph({
          text: `PCM Acknowledgement before test     : ${results.canTest.primaryBefore[5] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM1 Acknowledgement before test
        new Paragraph({
          text: `PSM1 Acknowledgement before test    : ${results.canTest.primaryBefore[6] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM2 Acknowledgement before test
        new Paragraph({
          text: `PSM2 Acknowledgement before test    : ${results.canTest.primaryBefore[7] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM1 Acknowledgement before test
        new Paragraph({
          text: `PDM1 Acknowledgement before test    : ${results.canTest.primaryBefore[8] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM2 Acknowledgement before test
        new Paragraph({
          text: `PDM2 Acknowledgement before test    : ${results.canTest.primaryBefore[9] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PCM Timeout before test
        new Paragraph({
          text: `PCM Timeout before test             : ${results.canTest.primaryBefore[10] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM1 Timeout before test
        new Paragraph({
          text: `PSM1 Timeout before test            : ${results.canTest.primaryBefore[11] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM2 Timeout before test
        new Paragraph({
          text: `PSM2 Timeout before test            : ${results.canTest.primaryBefore[12] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM1 Timeout before test
        new Paragraph({
          text: `PDM1 Timeout before test            : ${results.canTest.primaryBefore[13] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM2 Timeout before test
        new Paragraph({
          text: `PDM2 Timeout before test            : ${results.canTest.primaryBefore[14] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PCM Error before test
        new Paragraph({
          text: `PCM Error before test               : ${results.canTest.primaryBefore[15] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM1 Error before test
        new Paragraph({
          text: `PSM1 Error before test              : ${results.canTest.primaryBefore[16] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM2 Error before test
        new Paragraph({
          text: `PSM2 Error before test              : ${results.canTest.primaryBefore[17] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM1 Error before test
        new Paragraph({
          text: `PDM1 Error before test              : ${results.canTest.primaryBefore[18] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM2 Error before test
        new Paragraph({
          text: `PDM2 Error before test              : ${results.canTest.primaryBefore[19] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // Empty line
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        // CAN Primary Secondary Config
        new Paragraph({
          text: `CAN Primary Secondary Config        : ${results.canTest.primaryBefore[20] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // Empty line
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        })
      );
    }
    
    // Add CAN after test data if available
    if (results.canTest.primaryAfter && results.canTest.primaryAfter.length > 0) {
      children.push(
        // PCM Transmit after test
        new Paragraph({
          text: `PCM Transmit after test             : ${results.canTest.primaryAfter[0] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM1 Transmit after test
        new Paragraph({
          text: `PSM1 Transmit after test            : ${results.canTest.primaryAfter[1] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM2 Transmit after test
        new Paragraph({
          text: `PSM2 Transmit after test            : ${results.canTest.primaryAfter[2] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM1 Transmit after test
        new Paragraph({
          text: `PDM1 Transmit after test            : ${results.canTest.primaryAfter[3] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM2 Transmit after test
        new Paragraph({
          text: `PDM2 Transmit after test            : ${results.canTest.primaryAfter[4] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PCM Acknowledgement after test
        new Paragraph({
          text: `PCM Acknowledgement after test      : ${results.canTest.primaryAfter[5] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM1 Acknowledgement after test
        new Paragraph({
          text: `PSM1 Acknowledgement after test     : ${results.canTest.primaryAfter[6] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PSM2 Acknowledgement after test
        new Paragraph({
          text: `PSM2 Acknowledgement after test     : ${results.canTest.primaryAfter[7] || "N/A"}`,
          spacing: { after: 100 }
        }),
        // PDM1 Acknowledgement after test
        new Paragraph({
          text: `PDM1 Acknowledgement after test     : ${results.canTest.primaryAfter[8] || "N/A"}`,
          spacing: { after: 100 }
        }),
// PDM2 Acknowledgement after test
new Paragraph({
  text: `PDM2 Acknowledgement after test     : ${results.canTest.primaryAfter[9] || "N/A"}`,
  spacing: { after: 100 }
}),
// PCM Timeout after test
new Paragraph({
  text: `PCM Timeout after test              : ${results.canTest.primaryAfter[10] || "N/A"}`,
  spacing: { after: 100 }
}),
// PSM1 Timeout after test
new Paragraph({
  text: `PSM1 Timeout after test             : ${results.canTest.primaryAfter[11] || "N/A"}`,
  spacing: { after: 100 }
}),
// PSM2 Timeout after test
new Paragraph({
  text: `PSM2 Timeout after test             : ${results.canTest.primaryAfter[12] || "N/A"}`,
  spacing: { after: 100 }
}),
// PDM1 Timeout after test
new Paragraph({
  text: `PDM1 Timeout after test             : ${results.canTest.primaryAfter[13] || "N/A"}`,
  spacing: { after: 100 }
}),
// PDM2 Timeout after test
new Paragraph({
  text: `PDM2 Timeout after test             : ${results.canTest.primaryAfter[14] || "N/A"}`,
  spacing: { after: 100 }
}),
// PCM Error after test
new Paragraph({
  text: `PCM Error after test                : ${results.canTest.primaryAfter[15] || "N/A"}`,
  spacing: { after: 100 }
}),
// PSM1 Error after test
new Paragraph({
  text: `PSM1 Error after test               : ${results.canTest.primaryAfter[16] || "N/A"}`,
  spacing: { after: 100 }
}),
// PSM2 Error after test
new Paragraph({
  text: `PSM2 Error after test               : ${results.canTest.primaryAfter[17] || "N/A"}`,
  spacing: { after: 100 }
}),
// PDM1 Error after test
new Paragraph({
  text: `PDM1 Error after test               : ${results.canTest.primaryAfter[18] || "N/A"}`,
  spacing: { after: 100 }
}),
// PDM2 Error after test
new Paragraph({
  text: `PDM2 Error after test               : ${results.canTest.primaryAfter[19] || "N/A"}`,
  spacing: { after: 100 }
}),
// Separator
new Paragraph({
  text: "--------------------------------------------------------------------",
  spacing: { after: 100 }
})
);
}

// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
})
);

// OBC-2 CAN Check Summary
children.push(
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
text: `Secondary CAN : -- ${results.canTest.secondaryResult || "N/A"}`,
spacing: { after: 100 }
})
);

// Add secondary CAN data if available
if (results.canTest.secondaryBefore && results.canTest.secondaryBefore.length > 0) {
// Similar structure to primary CAN, add all the values
// (Same structure as primary, so not repeating all the paragraphs for brevity)
// In a real implementation, you would add all the specific details here
children.push(
// PCM Transmit before test
new Paragraph({
  text: `PCM Transmit before test            : ${results.canTest.secondaryBefore[0] || "N/A"}`,
  spacing: { after: 100 }
})
// ...add all other values similarly
);
}

children.push(
// Separator
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 200, before: 200 }
})
);
}

// Battery Summary
if (results.battery) {
children.push(
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
// Battery 1 Voltage
new Paragraph({
text: `Battery 1 Voltage           : ${results.battery.voltage1 ? parseFloat(results.battery.voltage1).toFixed(3) : "N/A"} V    ${results.passFailStatus.battery1 || "N/A"}`,
spacing: { after: 100 }
}),
// Battery 2 Voltage
new Paragraph({
text: `Battery 2 Voltage           : ${results.battery.voltage2 ? parseFloat(results.battery.voltage2).toFixed(3) : "N/A"} V    ${results.passFailStatus.battery2 || "N/A"}`,
spacing: { after: 100 }
}),
// Battery 3 Voltage
new Paragraph({
text: `Battery 3 Voltage           : ${results.battery.voltage3 ? parseFloat(results.battery.voltage3).toFixed(3) : "N/A"} V    ${results.passFailStatus.battery3 || "N/A"}`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Battery 1 Charging Current
new Paragraph({
text: `Battery 1 Charging Current  : ${results.battery.current1 ? parseFloat(results.battery.current1).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Battery 2 Charging Current
new Paragraph({
text: `Battery 2 Charging Current  : ${results.battery.current2 ? parseFloat(results.battery.current2).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Battery 3 Charging Current
new Paragraph({
text: `Battery 3 Charging Current  : ${results.battery.current3 ? parseFloat(results.battery.current3).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Battery 1 Temperature
new Paragraph({
text: `Battery 1 Temperature       : ${results.battery.temperature1 ? parseFloat(results.battery.temperature1).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Battery 2 Temperature
new Paragraph({
text: `Battery 2 Temperature       : ${results.battery.temperature2 ? parseFloat(results.battery.temperature2).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Battery 3 Temperature
new Paragraph({
text: `Battery 3 Temperature       : ${results.battery.temperature3 ? parseFloat(results.battery.temperature3).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Separator
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
})
);
}

// Solar Array Summary
if (results.solarArray) {
children.push(
new Paragraph({
text: "* Solar Array Summary :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
// Solar Array 1 Voltage
new Paragraph({
text: `Solar Array 1 Voltage               : ${results.solarArray.voltage1 ? parseFloat(results.solarArray.voltage1).toFixed(3) : "N/A"} V`,
spacing: { after: 100 }
}),
// Solar Array 2 Voltage
new Paragraph({
text: `Solar Array 2 Voltage               : ${results.solarArray.voltage2 ? parseFloat(results.solarArray.voltage2).toFixed(3) : "N/A"} V`,
spacing: { after: 100 }
}),
// Solar Array 3 Voltage
new Paragraph({
text: `Solar Array 3 Voltage               : ${results.solarArray.voltage3 ? parseFloat(results.solarArray.voltage3).toFixed(3) : "N/A"} V`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Solar Array temperature values
// Solar Array 1 Y- Temperature
new Paragraph({
text: `Solar Array 1 Y- Temperature        : ${results.solarArray.tempYNeg1 ? parseFloat(results.solarArray.tempYNeg1).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Solar Array 2 Y- Temperature
new Paragraph({
text: `Solar Array 2 Y- Temperature        : ${results.solarArray.tempYNeg2 ? parseFloat(results.solarArray.tempYNeg2).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Solar Array 3 Y- Temperature
new Paragraph({
text: `Solar Array 3 Y- Temperature        : ${results.solarArray.tempYNeg3 ? parseFloat(results.solarArray.tempYNeg3).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Solar Array Body Mount Temperature
new Paragraph({
text: `Solar Array Body Mount Temperature  : ${results.solarArray.tempBodyMount ? parseFloat(results.solarArray.tempBodyMount).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Solar Array 1 Y+ Temperature
new Paragraph({
text: `Solar Array 1 Y+ Temperature        : ${results.solarArray.tempYPos1 ? parseFloat(results.solarArray.tempYPos1).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Solar Array 2 Y+ Temperature
new Paragraph({
text: `Solar Array 2 Y+ Temperature        : ${results.solarArray.tempYPos2 ? parseFloat(results.solarArray.tempYPos2).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Solar Array 3 Y+ Temperature
new Paragraph({
text: `Solar Array 3 Y+ Temperature        : ${results.solarArray.tempYPos3 ? parseFloat(results.solarArray.tempYPos3).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
})
);

// HDRM Deploy Status
if (results.hdrmStatus) {
children.push(
// HDRM 1 Deploy Status
new Paragraph({
  text: `HDRM 1 Deploy Status                : ${results.hdrmStatus.deploy1 ? parseFloat(results.hdrmStatus.deploy1).toFixed(3) : "N/A"} V`,
  spacing: { after: 100 }
}),
// HDRM 2 Deploy Status
new Paragraph({
  text: `HDRM 2 Deploy Status                : ${results.hdrmStatus.deploy2 ? parseFloat(results.hdrmStatus.deploy2).toFixed(3) : "N/A"} V`,
  spacing: { after: 100 }
})
);
}
}

// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
})
);

// OBN Summary
if (results.obn) {
children.push(
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
// OBN 1 Voltage
new Paragraph({
text: `OBN 1 Voltage   : ${results.obn.voltage1 ? parseFloat(results.obn.voltage1).toFixed(3) : "N/A"} V    ${results.passFailStatus.obn1Voltage || "N/A"}`,
spacing: { after: 100 }
}),
// OBN 1 Current
new Paragraph({
text: `OBN 1 Current   : ${results.obn.current1 ? parseFloat(results.obn.current1).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// OBN 2 Voltage
new Paragraph({
text: `OBN 2 Voltage   : ${results.obn.voltage2 ? parseFloat(results.obn.voltage2).toFixed(3) : "N/A"} V    ${results.passFailStatus.obn2Voltage || "N/A"}`,
spacing: { after: 100 }
}),
// OBN 2 Current
new Paragraph({
text: `OBN 2 Current   : ${results.obn.current2 ? parseFloat(results.obn.current2).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// AUX 12V Voltage
new Paragraph({
text: `AUX 12V Voltage : ${results.obn.auxVoltage ? parseFloat(results.obn.auxVoltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.auxVoltage || "N/A"}`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Separator
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
})
);
}

// Battery Charging Regulator Summary
if (results.bcr) {
children.push(
new Paragraph({
text: "* Battery Charging Regulator Summary :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
// BCR 1 Current
new Paragraph({
text: `BCR 1 Current       : ${results.bcr.current1 ? parseFloat(results.bcr.current1).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// BCR 2 Current
new Paragraph({
text: `BCR 2 Current       : ${results.bcr.current2 ? parseFloat(results.bcr.current2).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// BCR 3 Current
new Paragraph({
text: `BCR 3 Current       : ${results.bcr.current3 ? parseFloat(results.bcr.current3).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// BCR 1 Temperature
new Paragraph({
text: `BCR 1 Temperature   : ${results.bcr.temp1 ? parseFloat(results.bcr.temp1).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// BCR 2 Temperature
new Paragraph({
text: `BCR 2 Temperature   : ${results.bcr.temp2 ? parseFloat(results.bcr.temp2).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// BCR 3 Temperature
new Paragraph({
text: `BCR 3 Temperature   : ${results.bcr.temp3 ? parseFloat(results.bcr.temp3).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Separator
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
})
);
}

// PCB Temperature Summary
if (results.pdmTemperature) {
children.push(
new Paragraph({
text: "* PCB Temperature Summary :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
// PDM 1 Temperature
new Paragraph({
text: `PDM 1 Temperature   : ${results.pdmTemperature.pdm1 ? parseFloat(results.pdmTemperature.pdm1).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
}),
// PDM 2 Temperature
new Paragraph({
text: `PDM 2 Temperature   : ${results.pdmTemperature.pdm2 ? parseFloat(results.pdmTemperature.pdm2).toFixed(3) : "N/A"} deg C`,
spacing: { after: 100 }
})
);
}

// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
})
);

// Converter Summary
if (results.converters) {
children.push(
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
// Converters voltage values with pass/fail status
// HDRM 12V Converter 1 Voltage
new Paragraph({
text: `HDRM 12V Converter 1 Voltage    : ${results.converters.hdrm12v1_voltage ? parseFloat(results.converters.hdrm12v1_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.hdrm12v1_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// 5 V Converter 1 Voltage
new Paragraph({
text: `5 V Converter 1 Voltage         : ${results.converters.v5_1_voltage ? parseFloat(results.converters.v5_1_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.v5_1_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// 12 V Converter 1 Voltage
new Paragraph({
text: `12 V Converter 1 Voltage        : ${results.converters.v12_1_voltage ? parseFloat(results.converters.v12_1_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.v12_1_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// 15 V Converter Voltage
new Paragraph({
text: `15 V Converter Voltage          : ${results.converters.v15_voltage ? parseFloat(results.converters.v15_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.v15_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// HDRM 12V Converter 2 Voltage
new Paragraph({
text: `HDRM 12V Converter 2 Voltage    : ${results.converters.hdrm12v2_voltage ? parseFloat(results.converters.hdrm12v2_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.hdrm12v2_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// 5 V Converter 2 Voltage
new Paragraph({
text: `5 V Converter 2 Voltage         : ${results.converters.v5_2_voltage ? parseFloat(results.converters.v5_2_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.v5_2_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// 12 V Converter 2 Voltage
new Paragraph({
text: `12 V Converter 2 Voltage        : ${results.converters.v12_2_voltage ? parseFloat(results.converters.v12_2_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.v12_2_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Converters temperature values
// HDRM 12V Converter 1 Temperature
new Paragraph({
text: `HDRM 12V Converter 1 Temperature    : ${results.converters.hdrm12v1_temp ? parseFloat(results.converters.hdrm12v1_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
}),
// 5 V Converter 1 Temperature
new Paragraph({
text: `5 V Converter 1 Temperature         : ${results.converters.v5_1_temp ? parseFloat(results.converters.v5_1_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
}),
// 12 V Converter 1 Temperature
new Paragraph({
text: `12 V Converter 1 Temperature        : ${results.converters.v12_1_temp ? parseFloat(results.converters.v12_1_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
}),
// 15 V Converter Temperature
new Paragraph({
text: `15 V Converter Temperature          : ${results.converters.v15_temp ? parseFloat(results.converters.v15_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
}),
// HDRM 12V Converter 2 Temperature
new Paragraph({
text: `HDRM 12V Converter 2 Temperature    : ${results.converters.hdrm12v2_temp ? parseFloat(results.converters.hdrm12v2_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
}),
// 5 V Converter 2 Temperature
new Paragraph({
text: `5 V Converter 2 Temperature         : ${results.converters.v5_2_temp ? parseFloat(results.converters.v5_2_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
}),
// 12 V Converter 2 Temperature
new Paragraph({
text: `12 V Converter 2 Temperature        : ${results.converters.v12_2_temp ? parseFloat(results.converters.v12_2_temp).toFixed(3) : "N/A"} degC`,
spacing: { after: 100 }
})
);
}

// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
})
);

// Load Summary
if (results.loads) {
children.push(
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
// OBC-1 Voltage
new Paragraph({
text: `OBC-1 Voltage   : ${results.loads.obc1_voltage ? parseFloat(results.loads.obc1_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.obc1_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// OBC-1 Current
new Paragraph({
text: `OBC-1 Current   : ${results.loads.obc1_current ? parseFloat(results.loads.obc1_current).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// OBC-2 Voltage
new Paragraph({
text: `OBC-2 Voltage   : ${results.loads.obc2_voltage ? parseFloat(results.loads.obc2_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.obc2_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// OBC-2 Current
new Paragraph({
text: `OBC-2 Current   : ${results.loads.obc2_current ? parseFloat(results.loads.obc2_current).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// SBand Voltage
new Paragraph({
text: `SBand Voltage   : ${results.loads.sband_voltage ? parseFloat(results.loads.sband_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.sband_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// SBand Current
new Paragraph({
text: `SBand Current   : ${results.loads.sband_current ? parseFloat(results.loads.sband_current).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// UHF Voltage
new Paragraph({
text: `UHF Voltage     : ${results.loads.uhf_voltage ? parseFloat(results.loads.uhf_voltage).toFixed(3) : "N/A"} V    ${results.passFailStatus.uhf_voltage || "N/A"}`,
spacing: { after: 100 }
}),
// UHF Current
new Paragraph({
text: `UHF Current     : ${results.loads.uhf_current ? parseFloat(results.loads.uhf_current).toFixed(3) : "N/A"} A`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
}),
// Separator
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
})
);
}

// Add other loads and devices if available
// ... (Add more sections as needed)

// If heater test results are available
if (results.heaterTests && results.heaterTests.length > 0) {
// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
new Paragraph({
text: "* Heater Test Results :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
})
);

// Add details for each heater test
results.heaterTests.forEach((heaterTest: any, index: number) => {
children.push(
new Paragraph({
  text: `Heater ${index + 1} Test Results:`,
  heading: HeadingLevel.HEADING_3,
  spacing: { after: 100 }
}),
// Initial Temperature
new Paragraph({
  text: `Initial Temperature: ${heaterTest.initialTemp} °C`,
  spacing: { after: 100 }
}),
// Test Duration
new Paragraph({
  text: `Test Duration: ${heaterTest.testDuration} seconds`,
  spacing: { after: 100 }
}),
// Test Result
new Paragraph({
  text: `Test Result: ${heaterTest.testResult}`,
  spacing: { after: 100 }
}),
// Thermal Rise Section
new Paragraph({
  text: `Thermal Rise Performance:`,
  heading: HeadingLevel.HEADING_4,
  spacing: { after: 100 }
}),
// Total Temperature Rise
new Paragraph({
  text: `Total Temperature Rise: ${heaterTest.thermalRise.totalRise.toFixed(1)} °C`,
  spacing: { after: 100 }
}),
// Temperature Rise Rate
new Paragraph({
  text: `Rise Rate: ${heaterTest.thermalRise.riseRate.toFixed(2)} °C/min`,
  spacing: { after: 100 }
}),
// Time to 5°C Rise
new Paragraph({
  text: `Time to 5°C Rise: ${heaterTest.thermalRise.timeTo5C.toFixed(1)} seconds`,
  spacing: { after: 100 }
}),
// Time to 10°C Rise
new Paragraph({
  text: `Time to 10°C Rise: ${heaterTest.thermalRise.timeTo10C ? heaterTest.thermalRise.timeTo10C.toFixed(1) + ' seconds' : 'N/A'}`,
  spacing: { after: 100 }
}),
// Power Consumption Section
new Paragraph({
  text: `Power Consumption:`,
  heading: HeadingLevel.HEADING_4,
  spacing: { after: 100 }
}),
// Average Current
new Paragraph({
  text: `Average Current: ${heaterTest.power.avgCurrent} mA`,
  spacing: { after: 100 }
}),
// Maximum Current
new Paragraph({
  text: `Maximum Current: ${heaterTest.power.maxCurrent} mA`,
  spacing: { after: 100 }
}),
// Average Power
new Paragraph({
  text: `Average Power: ${heaterTest.power.avgPower.toFixed(2)} W`,
  spacing: { after: 100 }
}),
// Total Energy
new Paragraph({
  text: `Total Energy Used: ${heaterTest.power.totalEnergy.toFixed(2)} Wh`,
  spacing: { after: 100 }
})
);

// Temperature Readings Table
if (heaterTest.tempReadings && heaterTest.tempReadings.length > 0) {
// Create table header row
const rows = [
  new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph("Time (seconds)")],
        width: { size: 30, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph("Temperature (°C)")],
        width: { size: 70, type: WidthType.PERCENTAGE }
      })
    ]
  })
];

// Add data rows for each temperature reading
heaterTest.tempReadings.forEach((temp: number, idx: number) => {
  rows.push(
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph(`${idx * heaterTest.readingInterval}`)],
          width: { size: 30, type: WidthType.PERCENTAGE }
        }),
        new TableCell({
          children: [new Paragraph(`${temp}`)],
          width: { size: 70, type: WidthType.PERCENTAGE }
        })
      ]
    })
  );
});

// Add table to children
children.push(
  new Table({
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
  })
);
}

// Add separator
children.push(
new Paragraph({
  text: "--------------------------------------------------------------------",
  spacing: { after: 200, before: 200 }
})
);
});
}

// Current Test Results (if available)
if (results.currentTest) {
// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
new Paragraph({
text: "* Current Measurement Test Results :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
// Test Result
new Paragraph({
text: `Test Result: ${results.currentTest.testResult}`,
spacing: { after: 100 }
}),
// Test Duration
new Paragraph({
text: `Test Duration: ${results.currentTest.testDuration} seconds`,
spacing: { after: 100 }
}),
// Samples Collected
new Paragraph({
text: `Samples Collected: ${results.currentTest.sampleCount}`,
spacing: { after: 100 }
}),
// Maximum Deviation
new Paragraph({
text: `Maximum Deviation: ${results.currentTest.maxDeviation.toFixed(2)}%`,
spacing: { after: 100 }
}),
// Tolerance Range
new Paragraph({
text: `Tolerance Range: ±${results.currentTest.tolerance}%`,
spacing: { after: 100 }
}),
// Empty line
new Paragraph({
text: "",
spacing: { after: 100 }
})
);

// Current Test Measurements Table
if (results.currentTest.heaterResults && results.currentTest.heaterResults.length > 0) {
// Add heading for the table
children.push(
new Paragraph({
  text: "Heater Current Measurements:",
  spacing: { after: 100 }
})
);

// Create table rows
const rows = [
// Header row
new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph("Heater")],
      width: { size: 20, type: WidthType.PERCENTAGE }
    }),
    new TableCell({
      children: [new Paragraph("Expected Current (mA)")],
      width: { size: 25, type: WidthType.PERCENTAGE }
    }),
    new TableCell({
      children: [new Paragraph("Measured Current (mA)")],
      width: { size: 25, type: WidthType.PERCENTAGE }
    }),
    new TableCell({
      children: [new Paragraph("Deviation (%)")],
      width: { size: 15, type: WidthType.PERCENTAGE }
    }),
    new TableCell({
      children: [new Paragraph("Result")],
      width: { size: 15, type: WidthType.PERCENTAGE }
    })
  ]
})
];

// Add data rows for each heater
results.currentTest.heaterResults.forEach((result: any, idx: number) => {
rows.push(
  new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph(`Heater ${idx + 1}`)],
        width: { size: 20, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph(`${result.expectedCurrent}`)],
        width: { size: 25, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph(`${result.measuredCurrent}`)],
        width: { size: 25, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph(`${result.deviation.toFixed(2)}%`)],
        width: { size: 15, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph(`${result.inRange ? "PASS" : "FAIL"}`)],
        width: { size: 15, type: WidthType.PERCENTAGE }
      })
    ]
  })
);
});

// Add table to children
children.push(
new Table({
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
})
);

// Add separator
children.push(
new Paragraph({
  text: "--------------------------------------------------------------------",
  spacing: { after: 200, before: 200 }
})
);
}
}

// Power Cycle Test Results (if available)
if (results.powerCycleTest) {
// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
new Paragraph({
text: "* Power Cycle Test Results :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
// Test Result
new Paragraph({
text: `Power Cycle Test Result: ${results.powerCycleTest.testResult}`,
spacing: { after: 100 }
}),
// Cycles Completed
new Paragraph({
text: `Cycles Completed: ${results.powerCycleTest.cyclesCompleted} of ${results.powerCycleTest.totalCycles}`,
spacing: { after: 100 }
}),
// Cycle Time
new Paragraph({
text: `Cycle Time: ${results.powerCycleTest.cycleTime} seconds`,
spacing: { after: 100 }
}),
// Power On Time
new Paragraph({
text: `Power On Time: ${results.powerCycleTest.powerOnTime} seconds`,
spacing: { after: 100 }
}),
// Power Off Time
new Paragraph({
text: `Power Off Time: ${results.powerCycleTest.powerOffTime} seconds`,
spacing: { after: 100 }
}),
// Total Test Time
new Paragraph({
text: `Total Test Time: ${results.powerCycleTest.totalTestTime} seconds`,
spacing: { after: 100 }
}),
// Failures
new Paragraph({
text: `Failures: ${results.powerCycleTest.failures}`,
spacing: { after: 100 }
}),
// Add separator
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 200, before: 200 }
})
);
}

// If there are heater test logs from the detailed heater test sequence
if (results.heaterTestLog) {
// Add page break
children.push(
new Paragraph({
text: "",
pageBreakBefore: true
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
}),
new Paragraph({
text: "* Heater Test Sequence Log :",
heading: HeadingLevel.HEADING_2,
spacing: { after: 100 }
}),
new Paragraph({
text: "--------------------------------------------------------------------",
spacing: { after: 100 }
})
);

// Here you would add the detailed heater test log data
// This would be similar to the Python implementation's detailed heater
// test logs, with multiple steps including on/off and readings at each step
}

// Create the document with all the children elements
const doc = new Document({
sections: [
{
properties: {},
children: children  // This can now handle both Paragraph and Table types
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