// WebSocket Signaling Server for WebRTC
// Supports both HTTP (ws://) and HTTPS (wss://) for domain deployment
// 
// For local development: node signaling-server.js
// For domain with HTTPS: node signaling-server.js --https --cert /path/to/cert.pem --key /path/to/key.pem
// Or set environment variables: SSL_CERT and SSL_KEY

const WebSocket = require('ws');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const USE_HTTPS = process.env.USE_HTTPS === 'true' || process.argv.includes('--https');

let server;
let wss;

if (USE_HTTPS) {
    // HTTPS/WSS mode for domain deployment
    const certPath = process.env.SSL_CERT || process.argv[process.argv.indexOf('--cert') + 1];
    const keyPath = process.env.SSL_KEY || process.argv[process.argv.indexOf('--key') + 1];
    
    if (!certPath || !keyPath) {
        console.error('HTTPS mode requires --cert and --key options or SSL_CERT/SSL_KEY env vars');
        console.error('Example: node signaling-server.js --https --cert ./cert.pem --key ./key.pem');
        process.exit(1);
    }
    
    try {
        const options = {
            cert: fs.readFileSync(certPath),
            key: fs.readFileSync(keyPath)
        };
        
        server = https.createServer(options);
        wss = new WebSocket.Server({ server });
        console.log(`Signaling server running on wss://localhost:${PORT} (HTTPS)`);
    } catch (error) {
        console.error('Error loading SSL certificates:', error.message);
        process.exit(1);
    }
} else {
    // HTTP/WS mode for local development
    server = http.createServer();
    wss = new WebSocket.Server({ server });
    console.log(`Signaling server running on ws://localhost:${PORT} (HTTP)`);
}

server.listen(PORT, () => {
    const protocol = USE_HTTPS ? 'wss' : 'ws';
    console.log(`✅ Server ready at ${protocol}://localhost:${PORT}`);
    console.log(`📡 Waiting for WebRTC signaling connections...`);
});

// Store rooms and their connections
const rooms = new Map();

wss.on('connection', (ws, req) => {
    console.log('New client connected');
    let currentRoom = null;
    let isInitiator = false;

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            
            switch (data.type) {
                case 'join':
                    currentRoom = data.room;
                    const roomConnections = rooms.get(currentRoom) || [];
                    
                    if (roomConnections.length === 0) {
                        // First person in room - they're the initiator
                        isInitiator = true;
                        rooms.set(currentRoom, [ws]);
                        ws.send(JSON.stringify({
                            type: 'room-joined',
                            isInitiator: true,
                            room: currentRoom
                        }));
                        console.log(`Room ${currentRoom}: First user joined (initiator)`);
                    } else {
                        // Second person in room
                        isInitiator = false;
                        rooms.set(currentRoom, [...roomConnections, ws]);
                        
                        // Notify both users
                        ws.send(JSON.stringify({
                            type: 'room-joined',
                            isInitiator: false,
                            room: currentRoom
                        }));
                        
                        // Notify the first user that someone joined
                        roomConnections.forEach(peer => {
                            if (peer.readyState === WebSocket.OPEN) {
                                peer.send(JSON.stringify({
                                    type: 'peer-joined',
                                    room: currentRoom
                                }));
                            }
                        });
                        
                        console.log(`Room ${currentRoom}: Second user joined`);
                    }
                    break;

                case 'offer':
                case 'answer':
                case 'ice-candidate':
                    // Forward signaling messages to other peer in room
                    const peers = rooms.get(data.room) || [];
                    peers.forEach(peer => {
                        if (peer !== ws && peer.readyState === WebSocket.OPEN) {
                            peer.send(JSON.stringify(data));
                        }
                    });
                    break;
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });

    ws.on('close', () => {
        if (currentRoom) {
            const roomConnections = rooms.get(currentRoom) || [];
            const filtered = roomConnections.filter(conn => conn !== ws);
            
            if (filtered.length === 0) {
                rooms.delete(currentRoom);
                console.log(`Room ${currentRoom}: Closed (empty)`);
            } else {
                rooms.set(currentRoom, filtered);
                console.log(`Room ${currentRoom}: User disconnected`);
            }
        }
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('Waiting for connections...');

