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
        
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "Data Get Parameters : -",
          spacing: { after: 100 }
        }),
        
        ...createPropulsionTmParagraphs(results.prop1Tm),
        
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "Voltage Current Off Record : -",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 1 Voltage   : ${padString(results.ecu1OffVoltage || '0.000', 6)} V    ${results.passFailStatus[1] || 'N/A'}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 1 Current   : ${padString(results.ecu1OffCurrent || '0.000', 6)} A`,
          spacing: { after: 100 }
        }),
        
        // Add page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // ECU-2 CAN Check Summary
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
        
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "Data Get Parameters : -",
          spacing: { after: 100 }
        }),
        
        ...createPropulsionTmParagraphs(results.prop2Tm),
        
        new Paragraph({
          text: "",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: "Voltage Current Off Record : -",
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 2 Voltage   : ${padString(results.ecu2OffVoltage || '0.000', 6)} V    ${results.passFailStatus[3] || 'N/A'}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `ECU 2 Current   : ${padString(results.ecu2OffCurrent || '0.000', 6)} A`,
          spacing: { after: 100 }
        }),
        
        // Add page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // PMA Check Summary
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
        
        // Add page break
        new Paragraph({
          text: "",
          pageBreakBefore: true
        }),
        
        // PPU Check Summary
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

// Helper function to create propulsion telemetry paragraphs
function createPropulsionTmParagraphs(propTm: any): Paragraph[] {
  if (!propTm) {
    return [
      new Paragraph({
        text: "No propulsion telemetry data available",
        spacing: { after: 100 }
      })
    ];
  }
  
  const propTmParams = [
    { key: "ECU_Temp", label: "Temperature from Electronic Control Unit    :", unit: "deg C" },
    { key: "Anode_PPU_1_Set_Voltage", label: "Set Voltage Anode PPU 1                     :", unit: "V" },
    { key: "Anode_PPU_1_Voltage", label: "Voltage from Anode PPU 1                    :", unit: "V" },
    { key: "Anode_PPU_1_Current", label: "Current from Anode PPU 1                    :", unit: "mA" },
    { key: "Anode_PPU_1_Temp", label: "Temperature of Anode PPU 1                  :", unit: "deg C" },
    { key: "Anode_PPU_2_Set_Voltage", label: "Set Voltage Anode PPU 2                     :", unit: "V" },
    { key: "Anode_PPU_2_Voltage", label: "Voltage from Anode PPU 2                    :", unit: "V" },
    { key: "Anode_PPU_2_Current", label: "Current from Anode PPU 2                    :", unit: "mA" },
    { key: "Anode_PPU_2_Temp", label: "Temperature of Anode PPU 2                  :", unit: "deg C" },
    { key: "Cathode_PPU_1_Set_Voltage", label: "Set Voltage Cathode PPU 1                   :", unit: "V" },
    { key: "Cathode_PPU_1_Voltage", label: "Voltage from Cathode PPU 1                  :", unit: "V" },
    { key: "Cathode_PPU_1_Set_Current", label: "Set Current Cathode PPU 1                   :", unit: "mA" },
    { key: "Cathode_PPU_1_Current", label: "Current from Cathode PPU 1                  :", unit: "mA" },
    { key: "Cathode_PPU_1_Temp", label: "Temperature of Cathode PPU 1                :", unit: "deg C" },
    { key: "Cathode_PPU_2_Set_Voltage", label: "Set Voltage Cathode PPU 2                   :", unit: "V" },
    { key: "Cathode_PPU_2_Voltage", label: "Voltage from Cathode PPU 2                  :", unit: "V" },
    { key: "Cathode_PPU_2_Set_Current", label: "Set Current Cathode PPU 2                   :", unit: "mA" },
    { key: "Cathode_PPU_2_Current", label: "Current from Cathode PPU 2                  :", unit: "mA" },
    { key: "Cathode_PPU_2_Temp", label: "Temperature of Cathode PPU 2                :", unit: "deg C" },
    { key: "Heater_Temp", label: "Temperature of Heater                       :", unit: "deg C" },
    { key: "Heater_1_Current", label: "Current from Heater 1                       :", unit: "A" },
    { key: "Heater_1_Voltage", label: "Voltage from Heater 1                       :", unit: "V" },
    { key: "Heater_1_PWM", label: "PWM of Heater 1                             :", unit: "%" },
    { key: "Heater_2_PWM", label: "PWM of Heater 2                             :", unit: "%" },
    { key: "Heater_2_Current", label: "Current from Heater 2                       :", unit: "A" },
    { key: "Heater_2_Voltage", label: "Voltage from Heater 2                       :", unit: "V" },
    { key: "Heater_3_Current", label: "Current from Heater 3                       :", unit: "A" },
    { key: "Heater_3_Voltage", label: "Voltage from Heater 3                       :", unit: "V" },
    { key: "Heater_3_PWM", label: "PWM of Heater 3                             :", unit: "%" },
    { key: "Heater_4_PWM", label: "PWM of Heater 4                             :", unit: "%" },
    { key: "Heater_4_Current", label: "Current from Heater 4                       :", unit: "A" },
    { key: "Heater_4_Voltage", label: "Voltage from Heater 4                       :", unit: "V" },
    { key: "Thruster_1_Temp", label: "Temperature of Thruster 1                   :", unit: "deg C" },
    { key: "Thruster_2_Temp", label: "Temperature of Thruster 2                   :", unit: "deg C" },
    { key: "HP_Tank_Pressure_1", label: "Pressure from HP transducer 1               :", unit: "bar" },
    { key: "HP_Tank_Pressure_2", label: "Pressure from HP transducer 2               :", unit: "bar" },
    { key: "Regulated_Pressure_1", label: "Pressure from LP transducer 1               :", unit: "mbar" },
    { key: "Regulated_Pressure_2", label: "Pressure from LP transducer 2               :", unit: "mbar" },
    { key: "MFC_1_Pressure", label: "Pressure from LP transducer 3               :", unit: "mbar" },
    { key: "MFC_2_Pressure", label: "Pressure from LP transducer 4               :", unit: "mbar" },
    { key: "MFC_3_Pressure", label: "Pressure from LP transducer 5               :", unit: "mbar" },
    { key: "MFC_4_Pressure", label: "Pressure from LP transducer 6               :", unit: "mbar" },
    { key: "SPARE_1", label: "SPARE 1                                     :", unit: "" },
    { key: "Tank_Temperature_1", label: "Temperature 1 of Tank                       :", unit: "deg C" },
    { key: "Tank_Temperature_2", label: "Temperature 2 of Tank                       :", unit: "deg C" },
    { key: "MFC_1_Temperature", label: "Temperature of MFC 1                        :", unit: "deg C" },
    { key: "MFC_2_Temperature", label: "Temperature of MFC 2                        :", unit: "deg C" },
    { key: "MFC_3_Temperature", label: "Temperature of MFC 3                        :", unit: "deg C" },
    { key: "MFC_4_Temperature", label: "Temperature of MFC 4                        :", unit: "deg C" },
    { key: "Driver_Circuit_1_Temperature", label: "Temperature of Driver Circuit 1             :", unit: "deg C" },
    { key: "Driver_Circuit_2_Temperature", label: "Temperature of Driver Circuit 2             :", unit: "deg C" },
    { key: "PMA_Temperature", label: "Temperature of PMA                          :", unit: "deg C" },
    { key: "IEP_1_PWM", label: "IEP 1 Valve PWM                             :", unit: "%" },
    { key: "IEP_2_PWM", label: "IEP 2 Valve PWM                             :", unit: "%" },
    { key: "IEP_3_Freq", label: "Flow Control Frequency for IEP 3            :", unit: "dHz" },
    { key: "IEP_4_Freq", label: "Flow Control Frequency for IEP 4            :", unit: "dHz" },
    { key: "IEP_5_Freq", label: "Flow Control Frequency for IEP 5            :", unit: "dHz" },
    { key: "IEP_6_Freq", label: "Flow Control Frequency for IEP 6            :", unit: "dHz" },
    { key: "MFC_1_Flow", label: "MFC 1 Full Scale Flow                       :", unit: "0.01%" },
    { key: "MFC_2_Flow", label: "MFC 2 Full Scale Flow                       :", unit: "0.01%" },
    { key: "MFC_3_Flow", label: "MFC 3 Full Scale Flow                       :", unit: "0.01%" },
    { key: "MFC_4_Flow", label: "MFC 4 Full Scale Flow                       :", unit: "0.01%" },
    { key: "SPARE_2", label: "SPARE 2                                     :", unit: "" },
    { key: "MFC_2_Thruster_Selector", label: "Switch Valve 1                              :", unit: "" },
    { key: "MFC_4_Thruster_Selector", label: "Switch Valve 2                              :", unit: "" },
    { key: "MFC_1_Thruster_Selector", label: "Switch Valve 3                              :", unit: "" },
    { key: "MFC_3_Thruster_Selector", label: "Switch Valve 4                              :", unit: "" },
    { key: "Thruster_1_Cathode_Selector", label: "Switch Valve 5                              :", unit: "" },
    { key: "Thruster_2_Cathode_Selector", label: "Switch Valve 6                              :", unit: "" },
    { key: "Anode_PPU1_Aliena_Thruster_Selector", label: "Selector Switch 1                           :", unit: "" },
    { key: "Anode_PPU2_ST_PPU_Thruster_Selector", label: "Selector Switch 2                           :", unit: "" },
    { key: "Cathode_PPU_1_Aliena_Thruster_Selector", label: "Selector Switch 3                           :", unit: "" },
    { key: "Thruster_Unit_1_Cathode_Selector", label: "Selector Switch 4                           :", unit: "" },
    { key: "Cathode_PPU_2_ST_PPU_Thruster_Selector", label: "Selector Switch 5                           :", unit: "" },
    { key: "Thruster_Unit_2_Cathode_Selector", label: "Selector Switch 6                              :", unit: "" },
    { key: "Anode_PPU1_Aliena_Enable", label: "Enable Switch 1                             :", unit: "" },
    { key: "Cathode_PPU1_Aliena_Enable", label: "Enable Switch 2                             :", unit: "" },
    { key: "Test_Override", label: "Test Override                               :", unit: "" },
    { key: "Initialisation_mode", label: "Initialisation mode                         :", unit: "" },
    { key: "SPARE_3", label: "SPARE 3                                     :", unit: "" },
    { key: "SPARE_4", label: "SPARE 4                                     :", unit: "" },
    { key: "SPARE_5", label: "SPARE 5                                     :", unit: "" },
    { key: "Error_vector_1", label: "Error vector 1                              :", unit: "" },
    { key: "Error_Vector_2", label: "Error vector 2                              :", unit: "" },
    { key: "SPARE_6", label: "SPARE 6                                     :", unit: "" },
    { key: "SPARE_7", label: "SPARE 7                                     :", unit: "" }
  ];
  
  const paragraphs: Paragraph[] = [];
  
  for (const param of propTmParams) {
    if (propTm && propTm[param.key] !== undefined) {
      paragraphs.push(
        new Paragraph({
          text: `${param.label} ${padString(propTm[param.key], 4)} ${param.unit}`,
          spacing: { after: 50 }
        })
      );
    }
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
  
  const paragraphs = [
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
    })
  ];
  
  // Add propulsion TC parameters if available
  if (results.propTc) {
    const propTcParams = [
      { key: "Anode_PPU_1_Set_V", label: "Set Voltage Anode PPU 1         :" },
      { key: "Anode_PPU_2_Set_V", label: "Set Voltage Anode PPU 2         :" },
      { key: "Cathode_PPU_1_Set_V", label: "Set Voltage Cathode PPU 1       :" },
      { key: "Cathode_PPU_1_Set_A", label: "Set Current Cathode PPU 1       :" },
      { key: "Cathode_PPU_2_Set_V", label: "Set Voltage Cathode PPU 2       :" },
      { key: "Cathode_PPU_2_Set_A", label: "Set Current Cathode PPU 2       :" },
      { key: "Heater_1_PWM", label: "PWM Setting for Heater 1        :" },
      { key: "Heater_2_PWM", label: "PWM Setting for Heater 2        :" },
      { key: "Heater_3_PWM", label: "PWM Setting for Heater 3        :" },
      { key: "Heater_4_PWM", label: "PWM Setting for Heater 4        :" },
      { key: "Anode_PPU_1_Set_A", label: "Set Current Anode PPU 1         :" },
      { key: "IEP_1_PWM", label: "IEP 1 Valve PWM                 :" },
      { key: "IEP_2_PWM", label: "IEP 2 Valve PWM                 :" },
      { key: "IEP_3_Freq", label: "Flow Control Frequency for IEP3 :" },
      { key: "IEP_4_Freq", label: "Flow Control Frequency for IEP4 :" },
      { key: "IEP_5_Freq", label: "Flow Control Frequency for IEP5 :" },
      { key: "IEP_6_Freq", label: "Flow Control Frequency for IEP6 :" },
      { key: "MFC_1_Flow", label: "MFC 1 Full Scale Flow           :" },
      { key: "MFC_2_Flow", label: "MFC 2 Full Scale Flow           :" },
      { key: "MFC_3_Flow", label: "MFC 3 Full Scale Flow           :" },
      { key: "MFC_4_Flow", label: "MFC 4 Full Scale Flow           :" },
      { key: "Test_Duration", label: "Test Duration                   :" },
      { key: "MFC_2_Thruster_Selector", label: "Switch Valve 1                  :" },
      { key: "MFC_4_Thruster_Selector", label: "Switch Valve 2                  :" },
      { key: "MFC_1_Thruster_Selector", label: "Switch Valve 3                  :" },
      { key: "MFC_3_Thruster_Selector", label: "Switch Valve 4                  :" },
      { key: "Thruster_1_Cathode_Selector", label: "Switch Valve 5                  :" },
      { key: "Thruster_2_Cathode_Selector", label: "Switch Valve 6                  :" },
      { key: "Anode_PPU1_Aliena_Thruster_Selector", label: "Selector Switch 1               :" },
      { key: "Anode_PPU2_ST_PPU_Thruster_Selector", label: "Selector Switch 2               :" },
      { key: "Cathode_PPU_1_Aliena_Thruster_Selector", label: "Selector Switch 3               :" },
      { key: "Thruster_Unit_1_Cathode_Selector", label: "Selector Switch 4               :" },
      { key: "Cathode_PPU_2_ST_PPU_Thruster_Selector", label: "Selector Switch 5               :" },
      { key: "Thruster_Unit_2_Cathode_Selector", label: "Selector Switch 6               :" },
      { key: "Anode_PPU1_Aliena_Enable", label: "Enable Switch 1                 :" },
      { key: "Cathode_PPU1_Aliena_Enable", label: "Enable Switch 2                 :" },
      { key: "Test_Override", label: "Test Duration                   :" },
      { key: "Spare_3", label: "Spare                           :" },
      { key: "Spare_4", label: "Spare                           :" },
      { key: "Spare_5", label: "Spare                           :" }
    ];
    
    for (const param of propTcParams) {
      if (results.propTc[param.key] !== undefined) {
        paragraphs.push(
          new Paragraph({
            text: `${param.label} ${results.propTc[param.key]}`,
            spacing: { after: 50 }
          })
        );
      }
    }
  } else {
    paragraphs.push(
      new Paragraph({
        text: "Test parameters transmitted to propulsion system",
        spacing: { after: 100 }
      })
    );
  }
  
  paragraphs.push(
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    })
  );
  
  // Add voltage/current data during test if available
  if (results.ecu1TestVoltage) {
    paragraphs.push(
      new Paragraph({
        text: "Voltage Current On Record : -",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `ECU 1 Voltage   : ${padString(results.ecu1TestVoltage, 6)} V    ${results.passFailStatus[4] || 'N/A'}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `ECU 1 Current   : ${padString(results.ecu1TestCurrent || '0.000', 6)} A`,
        spacing: { after: 100 }
      })
    );
  }
  
  // Add telemetry data if available
  if (results.pmaTm) {
    paragraphs.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "Data Get Parameters : -",
        spacing: { after: 100 }
      }),
      ...createPropulsionTmParagraphs(results.pmaTm)
    );
  }
  
  // Add statistics if available
  if (results.propStat) {
    paragraphs.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "Statistics : -",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Command Count       : ${results.propStat.Cmd_Count || 'N/A'}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `Acknowledge Count   : ${results.propStat.Ack_Count || 'N/A'}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `Timeout Count       : ${results.propStat.Timeout_Count || 'N/A'}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `Error Count         : ${results.propStat.Error_Count || 'N/A'}`,
        spacing: { after: 50 }
      })
    );
  }
  
  // Add final voltage/current data if available
  if (results.ecu1FinalVoltage) {
    paragraphs.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "Voltage Current Off Record : -",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `ECU 1 Voltage   : ${padString(results.ecu1FinalVoltage, 6)} V    ${results.passFailStatus[5] || 'N/A'}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `ECU 1 Current   : ${padString(results.ecu1FinalCurrent || '0.000', 6)} A`,
        spacing: { after: 100 }
      })
    );
  }
  
  return paragraphs;
}

// Helper function to create PPU info paragraphs
function createPpuInfoParagraphs(results: any): Paragraph[] {
  if (!results.ppu || results.ppu.status === 'N.A.') {
    return [new Paragraph({
      text: 'PPU test was not performed',
      spacing: { after: 100 }
    })];
  }
  
  const paragraphs = [
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
    })
  ];
  
  // Add propulsion TC parameters if available
  if (results.propTc) {
    const propTcParams = [
      { key: "Anode_PPU_1_Set_V", label: "Set Voltage Anode PPU 1         :" },
      { key: "Anode_PPU_2_Set_V", label: "Set Voltage Anode PPU 2         :" },
      { key: "Cathode_PPU_1_Set_V", label: "Set Voltage Cathode PPU 1       :" },
      { key: "Cathode_PPU_1_Set_A", label: "Set Current Cathode PPU 1       :" },
      { key: "Cathode_PPU_2_Set_V", label: "Set Voltage Cathode PPU 2       :" },
      { key: "Cathode_PPU_2_Set_A", label: "Set Current Cathode PPU 2       :" },
      { key: "Heater_1_PWM", label: "PWM Setting for Heater 1        :" },
      { key: "Heater_2_PWM", label: "PWM Setting for Heater 2        :" },
      { key: "Heater_3_PWM", label: "PWM Setting for Heater 3        :" },
      { key: "Heater_4_PWM", label: "PWM Setting for Heater 4        :" },
      { key: "Anode_PPU_1_Set_A", label: "Set Current Anode PPU 1         :" },
      { key: "IEP_1_PWM", label: "IEP 1 Valve PWM                 :" },
      { key: "IEP_2_PWM", label: "IEP 2 Valve PWM                 :" },
      { key: "IEP_3_Freq", label: "Flow Control Frequency for IEP3 :" },
      { key: "IEP_4_Freq", label: "Flow Control Frequency for IEP4 :" },
      { key: "IEP_5_Freq", label: "Flow Control Frequency for IEP5 :" },
      { key: "IEP_6_Freq", label: "Flow Control Frequency for IEP6 :" },
      { key: "MFC_1_Flow", label: "MFC 1 Full Scale Flow           :" },
      { key: "MFC_2_Flow", label: "MFC 2 Full Scale Flow           :" },
      { key: "MFC_3_Flow", label: "MFC 3 Full Scale Flow           :" },
      { key: "MFC_4_Flow", label: "MFC 4 Full Scale Flow           :" },
      { key: "Test_Duration", label: "Test Duration                   :" },
      { key: "MFC_2_Thruster_Selector", label: "Switch Valve 1                  :" },
      { key: "MFC_4_Thruster_Selector", label: "Switch Valve 2                  :" },
      { key: "MFC_1_Thruster_Selector", label: "Switch Valve 3                  :" },
      { key: "MFC_3_Thruster_Selector", label: "Switch Valve 4                  :" },
      { key: "Thruster_1_Cathode_Selector", label: "Switch Valve 5                  :" },
      { key: "Thruster_2_Cathode_Selector", label: "Switch Valve 6                  :" },
      { key: "Anode_PPU1_Aliena_Thruster_Selector", label: "Selector Switch 1               :" },
      { key: "Anode_PPU2_ST_PPU_Thruster_Selector", label: "Selector Switch 2               :" },
      { key: "Cathode_PPU_1_Aliena_Thruster_Selector", label: "Selector Switch 3               :" },
      { key: "Thruster_Unit_1_Cathode_Selector", label: "Selector Switch 4               :" },
      { key: "Cathode_PPU_2_ST_PPU_Thruster_Selector", label: "Selector Switch 5               :" },
      { key: "Thruster_Unit_2_Cathode_Selector", label: "Selector Switch 6               :" },
      { key: "Anode_PPU1_Aliena_Enable", label: "Enable Switch 1                 :" },
      { key: "Cathode_PPU1_Aliena_Enable", label: "Enable Switch 2                 :" },
      { key: "Test_Override", label: "Test Duration                   :" },
      { key: "Spare_3", label: "Spare                           :" },
      { key: "Spare_4", label: "Spare                           :" },
      { key: "Spare_5", label: "Spare                           :" }
    ];
    
    for (const param of propTcParams) {
      if (results.propTc[param.key] !== undefined) {
        paragraphs.push(
          new Paragraph({
            text: `${param.label} ${results.propTc[param.key]}`,
            spacing: { after: 50 }
          })
        );
      }
    }
  } else {
    paragraphs.push(
      new Paragraph({
        text: "Test parameters transmitted to propulsion system",
        spacing: { after: 100 }
      })
    );
  }
  
  paragraphs.push(
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    })
  );
  
  // Add ECU and PPU voltage/current data during test if available
  paragraphs.push(
    new Paragraph({
      text: "Voltage Current On Record : -",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `ECU 1 Voltage   : ${padString(results.ecu1.voltage, 6)} V    ${results.passFailStatus[6] || 'N/A'}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `ECU 1 Current   : ${padString(results.ecu1.current, 6)} A`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PPU 1 Voltage   : ${padString(results.ppu1.voltage, 6)} V    ${results.ppu1.status || 'N/A'}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PPU 1 Current   : ${padString(results.ppu1.current, 6)} A`,
      spacing: { after: 100 }
    })
  );
  
  // Add telemetry data if available
  if (results.ppuTm) {
    paragraphs.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "Data Get Parameters : -",
        spacing: { after: 100 }
      }),
      ...createPropulsionTmParagraphs(results.ppuTm)
    );
  }
  
  // Add statistics if available
  if (results.propStat) {
    paragraphs.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "Statistics : -",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Command Count       : ${results.propStat.Cmd_Count || 'N/A'}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `Acknowledge Count   : ${results.propStat.Ack_Count || 'N/A'}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `Timeout Count       : ${results.propStat.Timeout_Count || 'N/A'}`,
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: `Error Count         : ${results.propStat.Error_Count || 'N/A'}`,
        spacing: { after: 50 }
      })
    );
  }
  
  // Add final voltage/current data if available
  paragraphs.push(
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "Voltage Current Off Record : -",
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `ECU 1 Voltage   : ${padString(results.ecu1OffVoltage || '0.000', 6)} V    ${results.passFailStatus[8] || 'N/A'}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `ECU 1 Current   : ${padString(results.ecu1OffCurrent || '0.000', 6)} A`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PPU 1 Voltage   : ${padString(results.ppu1OffVoltage || '0.000', 6)} V    ${results.passFailStatus[9] || 'N/A'}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `PPU 1 Current   : ${padString(results.ppu1OffCurrent || '0.000', 6)} A`,
      spacing: { after: 100 }
    })
  );
  
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
  const strValue = String(value || '');
  if (!strValue) return ''.padStart(length, ' ');
  
  // If it's a number, format it with fixed precision
  if (!isNaN(Number(strValue))) {
    const num = parseFloat(strValue);
    return num.toFixed(3).padStart(length, ' ');
  }
  
  return strValue.padStart(length, ' ');
}