const WebSocket = require('ws');
const net = require('net');
const http = require('http');

// Create an HTTP server to handle health checks and enable CORS
const server = http.createServer((req, res) => {
  // Add CORS headers to all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  // Regular response for health checks
  res.writeHead(200);
  res.end('MCC Proxy Server is running');
});

// Create a WebSocket server attached to the HTTP server
const wss = new WebSocket.Server({ server });
const PORT = 8080;

wss.on('connection', function connection(ws) {
  console.log('New WebSocket connection from browser');
  let mccSocket = null;
  let isConnected = false;
  
  // Handle messages from the browser
  ws.on('message', function incoming(message) {
    const messageStr = message.toString();
    console.log('Received from browser:', messageStr);
    
    // Parse connection request if it's in JSON format
    if (messageStr.startsWith('{') && messageStr.includes('connect')) {
      try {
        const request = JSON.parse(messageStr);
        if (request.command === 'connect') {
          connectToMCC(request.host, request.port);
          return;
        }
      } catch (e) {
        console.error('Error parsing JSON request:', e);
      }
    }
    
    // Forward message to MCC server if connected
    if (isConnected && mccSocket) {
      mccSocket.write(messageStr);
    } else {
      ws.send(JSON.stringify({ status: 'error', message: 'Not connected to MCC server' }));
    }
  });
  
  // Function to connect to the MCC TCP server
  function connectToMCC(host, port) {
    // Close existing connection if any
    if (mccSocket) {
      mccSocket.destroy();
    }
    
    console.log(`Connecting to MCC server at ${host}:${port}`);
    mccSocket = new net.Socket();
    
    // Set a connection timeout
    const connectionTimeout = setTimeout(() => {
      if (!isConnected) {
        ws.send(JSON.stringify({ status: 'error', message: 'Connection timeout' }));
        mccSocket.destroy();
      }
    }, 10000);
    
    // Connect to the MCC server
    mccSocket.connect(port, host, function() {
      isConnected = true;
      clearTimeout(connectionTimeout);
      console.log('Connected to MCC server');
      ws.send(JSON.stringify({ status: 'connected', message: `Connected to MCC server at ${host}:${port}` }));
    });
    
    // Handle data from the MCC server
    mccSocket.on('data', function(data) {
      console.log('Received from MCC server:', data.toString().trim());
      ws.send(data.toString());
    });
    
    // Handle MCC server disconnection
    mccSocket.on('close', function() {
      isConnected = false;
      console.log('MCC server connection closed');
      ws.send(JSON.stringify({ status: 'disconnected', message: 'MCC server disconnected' }));
    });
    
    // Handle errors
    mccSocket.on('error', function(err) {
      console.error('MCC socket error:', err.message);
      ws.send(JSON.stringify({ status: 'error', message: `Socket error: ${err.message}` }));
    });
  }
  
  // Handle WebSocket connection close
  ws.on('close', function() {
    console.log('Browser disconnected');
    if (mccSocket) {
      mccSocket.destroy();
    }
  });
});

server.listen(PORT, () => {
  console.log(`MCC Proxy Server running on port ${PORT}`);
  console.log(`CORS enabled for all origins`);
});