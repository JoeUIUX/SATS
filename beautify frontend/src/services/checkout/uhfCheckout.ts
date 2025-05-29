// src/services/checkout/uhfCheckout.ts
import { mccifSet, mccifRead } from '@/utils/mccUtils';

// Progress callback type
type ProgressCallback = (step: string, percent: number) => void;

/**
 * Helper function to safely parse values from MCC response
 * Handle cases where the response might be undefined or not in the expected format
 */
const safeParseValue = (result: string | undefined): string => {
  if (!result) return "unknown";
  const parts = result.split('=');
  return parts.length > 1 ? parts[1] : "unknown";
};

/**
 * Run the UHF checkout test suite
 * 
 * @param sock Socket connection to the MCC server
 * @param options Test options (enables specific UHF tests)
 * @param onProgress Callback for progress updates
 * @returns The test results
 */
export async function runUHFCheckout(
  sock: any, 
  options: { testTransmitter: boolean; testReceiver: boolean },
  onProgress: ProgressCallback = () => {}
): Promise<any> {
  try {
    // Initialize the results object
    const results: any = {
      telemetry: {
        boardTemperature: '',
        paTemperature: '',
        lastRssi: '',
        lastRferr: '',
        txCount: '',
        rxCount: '',
        txBytes: '',
        rxBytes: '',
        activeConf: '',
        bootCount: '',
        bootCause: '',
        lastContact: '',
        bgndRssi: '',
        txDuty: '',
        totalTxCount: '',
        totalRxCount: '',
        totalTxBytes: '',
        totalRxBytes: ''
      },
      system: {
        rssiOffset: '',
        maxTemp: '',
        bgndrssiEma: '',
        cspNode: '',
        i2cEn: '',
        canEn: '',
        extpptEn: '',
        ledEn: '',
        kissUsart: '',
        goshUsart: '',
        i2cAddr: '',
        i2cKhz: '',
        canKhz: '',
        rebootIn: '',
        txInhibit: '',
        logStore: '',
        txPwr: '',
        maxTxTime: '',
        maxIdleTime: ''
      },
      receiver: {
        frequency: '',
        baudrate: '',
        modindex: '',
        guard: '',
        pllrang: '',
        mode: '',
        cspHmac: '',
        cspRs: '',
        cspCrc: '',
        cspRand: '',
        hmacKeys: ['', '', '', ''],
        ax25Call: ['', '', ''],
        bandwidth: '',
        afcrange: ''
      },
      transmitter: {
        frequency: '',
        baudrate: '',
        modindex: '',
        guard: '',
        pllrang: '',
        mode: '',
        cspHmac: '',
        cspRs: '',
        cspCrc: '',
        cspRand: '',
        hmacKeys: ['', '', '', ''],
        ax25Call: ['', '', ''],
        preamb: '',
        preamblen: '',
        preambflags: '',
        intfrm: '',
        intfrmlen: '',
        intfrmflags: '',
        rssibusy: '',
        kupDelay: '',
        paLevel: '',
        ber: ''
      },
      reportGenerated: false,
      allResults: [] // Store all raw results for reporting
    };

    // Track all raw results for later reporting
    const allResults: string[] = [];

    // Step 1: Initialize test (5%)
    onProgress('Initializing UHF Checkout', 5);
    
    const telemetryVars = [
      "OBC2_Uhf_BoardTemperature", "OBC2_Uhf_PaTemperature", "OBC2_Uhf_LastRssi",
      "OBC2_Uhf_LastRferr", "OBC2_Uhf_TxCount", "OBC2_Uhf_RxCount", "OBC2_Uhf_TxBytes",
      "OBC2_Uhf_RxBytes", "OBC2_Uhf_ActiveConf", "OBC2_Uhf_BootCount", "OBC2_Uhf_BootCause",
      "OBC2_Uhf_LastContact", "OBC2_Uhf_BgndRssi", "OBC2_Uhf_TxDuty", "OBC2_Uhf_TotalTxCount",
      "OBC2_Uhf_TotalRxCount", "OBC2_Uhf_TotalTxBytes", "OBC2_Uhf_TotalRxBytes"
    ];

    const sysVars = [
      "UHF_rssi_offset", "UHF_max_temp", "UHF_bgndrssi_ema", "UHF_csp_node", "UHF_i2c_en", "UHF_can_en",
      "UHF_extppt_en", "UHF_led_en", "UHF_kiss_usart", "UHF_gosh_usart", "UHF_i2c_addr", "UHF_i2c_khz",
      "UHF_can_khz", "UHF_reboot_in", "UHF_tx_inhibit", "UHF_log_store", "UHF_tx_pwr", "UHF_max_tx_time",
      "UHF_max_idle_time"
    ];

    const rxVars = [
      "UHF_rx_freq", "UHF_rx_baud", "UHF_rx_modindex", "UHF_rx_guard", "UHF_rx_pllrang", "UHF_rx_mode",
      "UHF_rx_csp_hmac", "UHF_rx_csp_rs", "UHF_rx_csp_crc", "UHF_rx_csp_rand", "UHF_rx_csp_hmac_key_0",
      "UHF_rx_csp_hmac_key_1", "UHF_rx_csp_hmac_key_2", "UHF_rx_csp_hmac_key_3", "UHF_rx_ax25_call_0",
      "UHF_rx_ax25_call_1", "UHF_rx_ax25_call_2", "UHF_rx_bw", "UHF_rx_afcrange"
    ];

    const txVars = [
      "UHF_tx_freq", "UHF_tx_baud", "UHF_tx_modindex", "UHF_tx_guard", "UHF_tx_pllrang", "UHF_tx_mode",
      "UHF_tx_csp_hmac", "UHF_tx_csp_rs", "UHF_tx_csp_crc", "UHF_tx_csp_rand", "UHF_tx_csp_hmac_key_0",
      "UHF_tx_csp_hmac_key_1", "UHF_tx_csp_hmac_key_2", "UHF_tx_csp_hmac_key_3", "UHF_tx_ax25_call_0",
      "UHF_tx_ax25_call_1", "UHF_tx_ax25_call_2", "UHF_tx_preamb", "UHF_tx_preamblen", "UHF_tx_preambflags",
      "UHF_tx_intfrm", "UHF_tx_intfrmlen", "UHF_tx_intfrmflags", "UHF_tx_rssibusy", "UHF_tx_kup_delay",
      "UHF_tx_pa_level", "UHF_tx_ber"
    ];
    
    // Step 2: Send downlink type command (20%)
    onProgress('Setting UHF Downlink Type', 20);

    try {
      // Similar to the Python implementation, need to send the same command multiple times
      for (let i = 0; i < 4; i++) {
        await mccifSet(sock, "OBC2_Downlink_Type", 3);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds between commands
      }
    } catch (error) {
      console.error("Error setting downlink type:", error);
      // Continue with other tests despite this error
    }

    // Step 3: Read telemetry data (40%)
    onProgress('Reading UHF Telemetry', 40);

    try {
      const telemetryResults = await mccifRead(sock, telemetryVars);
      
      // Process and store results in the structured format
      const telemetryValues = telemetryResults.map(safeParseValue);
      allResults.push(...telemetryValues);
      
      // Map the values to their respective properties
      results.telemetry.boardTemperature = telemetryValues[0];
      results.telemetry.paTemperature = telemetryValues[1];
      results.telemetry.lastRssi = telemetryValues[2];
      results.telemetry.lastRferr = telemetryValues[3];
      results.telemetry.txCount = telemetryValues[4];
      results.telemetry.rxCount = telemetryValues[5];
      results.telemetry.txBytes = telemetryValues[6];
      results.telemetry.rxBytes = telemetryValues[7];
      results.telemetry.activeConf = telemetryValues[8];
      results.telemetry.bootCount = telemetryValues[9];
      results.telemetry.bootCause = telemetryValues[10];
      results.telemetry.lastContact = telemetryValues[11];
      results.telemetry.bgndRssi = telemetryValues[12];
      results.telemetry.txDuty = telemetryValues[13];
      results.telemetry.totalTxCount = telemetryValues[14];
      results.telemetry.totalRxCount = telemetryValues[15];
      results.telemetry.totalTxBytes = telemetryValues[16];
      results.telemetry.totalRxBytes = telemetryValues[17];
    } catch (error) {
      console.error("Error reading UHF telemetry:", error);
      
      // Fill with N.A. if there is an error
      telemetryVars.forEach(() => allResults.push("N.A."));
    }

    // Step 4: Read system configuration (60%)
    onProgress('Reading UHF System Configuration', 60);

    try {
      const sysResults = await mccifRead(sock, sysVars);
      
      // Process and store results
      const sysValues = sysResults.map(safeParseValue);
      allResults.push(...sysValues);
      
      // Map the values to their respective properties
      results.system.rssiOffset = sysValues[0];
      results.system.maxTemp = sysValues[1];
      results.system.bgndrssiEma = sysValues[2];
      results.system.cspNode = sysValues[3];
      results.system.i2cEn = sysValues[4];
      results.system.canEn = sysValues[5];
      results.system.extpptEn = sysValues[6];
      results.system.ledEn = sysValues[7];
      results.system.kissUsart = sysValues[8];
      results.system.goshUsart = sysValues[9];
      results.system.i2cAddr = sysValues[10];
      results.system.i2cKhz = sysValues[11];
      results.system.canKhz = sysValues[12];
      results.system.rebootIn = sysValues[13];
      results.system.txInhibit = sysValues[14];
      results.system.logStore = sysValues[15];
      results.system.txPwr = sysValues[16];
      results.system.maxTxTime = sysValues[17];
      results.system.maxIdleTime = sysValues[18];
    } catch (error) {
      console.error("Error reading UHF system configuration:", error);
      
      // Fill with N.A. if there is an error
      sysVars.forEach(() => allResults.push("N.A."));
    }

    // Step 5: Read receiver configuration (80%)
    onProgress('Reading UHF Receiver Configuration', 80);

    try {
      const rxResults = await mccifRead(sock, rxVars);
      
      // Process and store results
      const rxValues = rxResults.map(safeParseValue);
      allResults.push(...rxValues);
      
      // Map the values to their respective properties
      results.receiver.frequency = rxValues[0];
      results.receiver.baudrate = rxValues[1];
      results.receiver.modindex = rxValues[2];
      results.receiver.guard = rxValues[3];
      results.receiver.pllrang = rxValues[4];
      results.receiver.mode = rxValues[5];
      results.receiver.cspHmac = rxValues[6];
      results.receiver.cspRs = rxValues[7];
      results.receiver.cspCrc = rxValues[8];
      results.receiver.cspRand = rxValues[9];
      results.receiver.hmacKeys[0] = rxValues[10];
      results.receiver.hmacKeys[1] = rxValues[11];
      results.receiver.hmacKeys[2] = rxValues[12];
      results.receiver.hmacKeys[3] = rxValues[13];
      results.receiver.ax25Call[0] = rxValues[14];
      results.receiver.ax25Call[1] = rxValues[15];
      results.receiver.ax25Call[2] = rxValues[16];
      results.receiver.bandwidth = rxValues[17];
      results.receiver.afcrange = rxValues[18];
    } catch (error) {
      console.error("Error reading UHF receiver configuration:", error);
      
      // Fill with N.A. if there is an error
      rxVars.forEach(() => allResults.push("N.A."));
    }

    // Step 6: Read transmitter configuration (100%)
    onProgress('Reading UHF Transmitter Configuration', 100);

    try {
      const txResults = await mccifRead(sock, txVars);
      
      // Process and store results
      const txValues = txResults.map(safeParseValue);
      allResults.push(...txValues);
      
      // Map the values to their respective properties
      results.transmitter.frequency = txValues[0];
      results.transmitter.baudrate = txValues[1];
      results.transmitter.modindex = txValues[2];
      results.transmitter.guard = txValues[3];
      results.transmitter.pllrang = txValues[4];
      results.transmitter.mode = txValues[5];
      results.transmitter.cspHmac = txValues[6];
      results.transmitter.cspRs = txValues[7];
      results.transmitter.cspCrc = txValues[8];
      results.transmitter.cspRand = txValues[9];
      results.transmitter.hmacKeys[0] = txValues[10];
      results.transmitter.hmacKeys[1] = txValues[11];
      results.transmitter.hmacKeys[2] = txValues[12];
      results.transmitter.hmacKeys[3] = txValues[13];
      results.transmitter.ax25Call[0] = txValues[14];
      results.transmitter.ax25Call[1] = txValues[15];
      results.transmitter.ax25Call[2] = txValues[16];
      results.transmitter.preamb = txValues[17];
      results.transmitter.preamblen = txValues[18];
      results.transmitter.preambflags = txValues[19];
      results.transmitter.intfrm = txValues[20];
      results.transmitter.intfrmlen = txValues[21];
      results.transmitter.intfrmflags = txValues[22];
      results.transmitter.rssibusy = txValues[23];
      results.transmitter.kupDelay = txValues[24];
      results.transmitter.paLevel = txValues[25];
      results.transmitter.ber = txValues[26];
    } catch (error) {
      console.error("Error reading UHF transmitter configuration:", error);
      
      // Fill with N.A. if there is an error
      txVars.forEach(() => allResults.push("N.A."));
    }

    // Store all raw results
    results.allResults = allResults;
    
    // Return the processed results
    return results;
  } catch (error) {
    console.error('Error during UHF checkout:', error);
    throw error;
  }
}