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
    
    // System Status Section
    new Paragraph({
      text: "* HEPS System Status :",
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    }),
    
    // System Power Status
    new Paragraph({
      text: `System Power Status             : ${results.system.powerStatus === "1" ? "ON" : "OFF"}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `System Voltage                  : ${results.system.voltage} V`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `System Current                  : ${results.system.current} mA`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `System Power                    : ${results.system.power} W`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `System Power Cycle Count        : ${results.system.powerCycleCount}`,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: `System Operating Time           : ${results.system.operatingTime} min`,
      spacing: { after: 100 }
    }),
    
    // Separator
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    }),
  ];
  
  // Heater Status Section
  children.push(
    new Paragraph({
      text: "* HEPS Heater Status :",
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 100 }
    })
  );
  
  // Add each heater status
  if (results.heaters && results.heaters.length > 0) {
    results.heaters.forEach((heater: any, index: number) => {
      children.push(
        new Paragraph({
          text: `Heater ${index + 1} Status              : ${heater.status === "1" ? "ON" : "OFF"}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Temperature         : ${heater.temperature} °C`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Current             : ${heater.current} mA`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Voltage             : ${heater.voltage} V`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Power               : ${heater.power} W`,
          spacing: { after: 100 }
        }),
        // Empty line between heaters
        new Paragraph({
          text: ``,
          spacing: { after: 100 }
        })
      );
    });
  } else {
    children.push(
      new Paragraph({
        text: `No heater data available`,
        spacing: { after: 100 }
      })
    );
  }
  
  // Separator
  children.push(
    new Paragraph({
      text: "--------------------------------------------------------------------",
      spacing: { after: 200, before: 200 }
    })
  );
  
  // Add a page break before the test results sections
  children.push(
    new Paragraph({
      text: "",
      pageBreakBefore: true
    })
  );
  
  // Heater Test Results Section (if tests were performed)
  if (results.heaterTests && results.heaterTests.length > 0) {
    children.push(
      new Paragraph({
        text: "* HEPS Heater Test Results :",
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      })
    );
    
    // Add each heater test results
    results.heaterTests.forEach((heaterTest: any, index: number) => {
      children.push(
        new Paragraph({
          text: `Heater ${index + 1} Test Result           : ${heaterTest.testResult}`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Initial Temperature   : ${heaterTest.initialTemp} °C`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Final Temperature     : ${heaterTest.tempReadings[heaterTest.tempReadings.length - 1]} °C`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Test Duration         : ${heaterTest.testDuration} seconds`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Total Rise            : ${heaterTest.thermalRise.totalRise.toFixed(1)} °C`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Rise Rate             : ${heaterTest.thermalRise.riseRate.toFixed(2)} °C/min`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Time to 5°C Rise      : ${heaterTest.thermalRise.timeTo5C?.toFixed(1) ?? "N/A"} seconds`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Time to 10°C Rise     : ${heaterTest.thermalRise.timeTo10C?.toFixed(1) ?? "N/A"} seconds`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Average Current       : ${heaterTest.power.avgCurrent} mA`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Max Current           : ${heaterTest.power.maxCurrent} mA`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Average Power         : ${heaterTest.power.avgPower.toFixed(2)} W`,
          spacing: { after: 100 }
        }),
        new Paragraph({
          text: `Heater ${index + 1} Total Energy          : ${heaterTest.power.totalEnergy.toFixed(2)} Wh`,
          spacing: { after: 100 }
        }),
        // Empty line between heater test results
        new Paragraph({
          text: ``,
          spacing: { after: 100 }
        })
      );
      
      // Temperature readings table
      if (heaterTest.tempReadings && heaterTest.tempReadings.length > 0) {
        children.push(
          new Paragraph({
            text: `Heater ${index + 1} Temperature Readings:`,
            spacing: { after: 100 }
          })
        );
        
        // Create temperature readings table
        const rows = [
          // Header row
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
          }),
          // Data rows
          ...heaterTest.tempReadings.map((temp: number, idx: number) => 
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
          )
        ];
        
        // Add the table to the document - directly to children array
        children.push(
          new Table({
            rows,
            width: { size: 90, type: WidthType.PERCENTAGE },
            margins: {
              top: 100,
              bottom: 100,
              left: 100,
              right: 100
            },
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
        
        // Add some spacing after the table
        children.push(
          new Paragraph({
            text: ``,
            spacing: { after: 200 }
          })
        );
      }
    });
    
    // Separator
    children.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 200, before: 200 }
      })
    );
  }
  
  // Current Test Results Section (if tests were performed)
  if (results.currentTest) {
    children.push(
      new Paragraph({
        text: "",
        pageBreakBefore: true
      }),
      new Paragraph({
        text: "* HEPS Current Measurement Test Results :",
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Current Test Result               : ${results.currentTest.testResult}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Test Duration                     : ${results.currentTest.testDuration} seconds`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Samples Collected                 : ${results.currentTest.sampleCount}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Maximum Deviation                 : ${results.currentTest.maxDeviation.toFixed(2)}%`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Tolerance Range                   : ±${results.currentTest.tolerance}%`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: ``,
        spacing: { after: 100 }
      })
    );
    
    // Current test measurements table
    if (results.currentTest.heaterResults && results.currentTest.heaterResults.length > 0) {
      children.push(
        new Paragraph({
          text: `Heater Current Measurements:`,
          spacing: { after: 100 }
        })
      );
      
      // Create measurements table
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
        }),
        // Data rows
        ...results.currentTest.heaterResults.map((result: any, idx: number) => 
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
        )
      ];
      
      // Add the table to the document - directly to children array
      children.push(
        new Table({
          rows,
          width: { size: 100, type: WidthType.PERCENTAGE },
          margins: {
            top: 100,
            bottom: 100,
            left: 100,
            right: 100
          },
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
      
      // Add some spacing after the table
      children.push(
        new Paragraph({
          text: ``,
          spacing: { after: 200 }
        })
      );
    }
    
    // Separator
    children.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 200, before: 200 }
      })
    );
  }
  
  // Power Cycle Test Results Section (if tests were performed)
  if (results.powerCycleTest) {
    children.push(
      new Paragraph({
        text: "",
        pageBreakBefore: true
      }),
      new Paragraph({
        text: "* HEPS Power Cycle Test Results :",
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Power Cycle Test Result           : ${results.powerCycleTest.testResult}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Cycles Completed                  : ${results.powerCycleTest.cyclesCompleted} of ${results.powerCycleTest.totalCycles}`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Cycle Time                        : ${results.powerCycleTest.cycleTime} seconds`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Power On Time                     : ${results.powerCycleTest.powerOnTime} seconds`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Power Off Time                    : ${results.powerCycleTest.powerOffTime} seconds`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Total Test Time                   : ${results.powerCycleTest.totalTestTime} seconds`,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `Failures                          : ${results.powerCycleTest.failures}`,
        spacing: { after: 100 }
      })
    );
    
    // Separator
    children.push(
      new Paragraph({
        text: "--------------------------------------------------------------------",
        spacing: { after: 200, before: 200 }
      })
    );
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