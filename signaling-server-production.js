// Production-ready WebSocket Signaling Server for WebRTC
// Designed for deployment on a domain with HTTPS/WSS
//
// Usage:
// 1. Install dependencies: npm install ws
// 2. Set up SSL certificates (Let's Encrypt, etc.)
// 3. Run: USE_HTTPS=true SSL_CERT=/path/to/cert.pem SSL_KEY=/path/to/key.pem node signaling-server-production.js
//
// Or use a reverse proxy (nginx) to handle SSL termination

const WebSocket = require('ws');
const https = require('https');
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;
const USE_HTTPS = process.env.USE_HTTPS === 'true';
const SSL_CERT = process.env.SSL_CERT;
const SSL_KEY = process.env.SSL_KEY;

let server;
let wss;

// CORS and security headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
};

if (USE_HTTPS && SSL_CERT && SSL_KEY) {
    try {
        const options = {
            cert: fs.readFileSync(SSL_CERT),
            key: fs.readFileSync(SSL_KEY)
        };
        
        server = https.createServer(options, (req, res) => {
            // Handle CORS preflight
            if (req.method === 'OPTIONS') {
                res.writeHead(200, corsHeaders);
                res.end();
                return;
            }
            
            res.writeHead(200, { ...corsHeaders, 'Content-Type': 'text/plain' });
            res.end('WebRTC Signaling Server - WebSocket endpoint');
        });
        
        wss = new WebSocket.Server({ 
            server,
            perMessageDeflate: false // Disable compression for lower latency
        });
        
        console.log(`✅ HTTPS Signaling server running on wss://0.0.0.0:${PORT}`);
    } catch (error) {
        console.error('❌ Error loading SSL certificates:', error.message);
        process.exit(1);
    }
} else {
    // Fallback to HTTP for development
    server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('WebRTC Signaling Server - WebSocket endpoint');
    });
    
    wss = new WebSocket.Server({ server });
    console.log(`⚠️  HTTP Signaling server running on ws://0.0.0.0:${PORT} (use HTTPS in production!)`);
}

// Store rooms and their connections
const rooms = new Map();

// Cleanup old rooms periodically
setInterval(() => {
    const now = Date.now();
    for (const [roomId, connections] of rooms.entries()) {
        const activeConnections = connections.filter(ws => ws.readyState === WebSocket.OPEN);
        if (activeConnections.length === 0) {
            rooms.delete(roomId);
            console.log(`🧹 Cleaned up empty room: ${roomId}`);
        } else if (activeConnections.length !== connections.length) {
            rooms.set(roomId, activeConnections);
        }
    }
}, 60000); // Clean up every minute

wss.on('connection', (ws, req) => {
    const clientIp = req.socket.remoteAddress;
    console.log(`📱 New client connected from ${clientIp}`);
    
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
                        console.log(`🏠 Room ${currentRoom}: First user joined (initiator)`);
                    } else if (roomConnections.length === 1) {
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
                        
                        console.log(`👥 Room ${currentRoom}: Second user joined - connection established`);
                    } else {
                        // Room is full (only support 2 users)
                        ws.send(JSON.stringify({
                            type: 'error',
                            message: 'Room is full (max 2 users)'
                        }));
                        ws.close();
                    }
                    break;

                case 'offer':
                case 'answer':
                case 'ice-candidate':
                    // Forward signaling messages to other peer in room
                    const peers = rooms.get(data.room) || [];
                    const otherPeers = peers.filter(peer => peer !== ws && peer.readyState === WebSocket.OPEN);
                    
                    if (otherPeers.length > 0) {
                        otherPeers.forEach(peer => {
                            peer.send(JSON.stringify(data));
                        });
                    } else {
                        console.warn(`⚠️  No peers found for room ${data.room}`);
                    }
                    break;
                    
                case 'ping':
                    // Heartbeat to keep connection alive
                    ws.send(JSON.stringify({ type: 'pong' }));
                    break;
            }
        } catch (error) {
            console.error('❌ Error handling message:', error);
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Invalid message format'
            }));
        }
    });

    ws.on('close', () => {
        if (currentRoom) {
            const roomConnections = rooms.get(currentRoom) || [];
            const filtered = roomConnections.filter(conn => conn !== ws);
            
            if (filtered.length === 0) {
                rooms.delete(currentRoom);
                console.log(`🏠 Room ${currentRoom}: Closed (empty)`);
            } else {
                rooms.set(currentRoom, filtered);
                console.log(`👋 Room ${currentRoom}: User disconnected (${filtered.length} remaining)`);
            }
        }
    });

    ws.on('error', (error) => {
        console.error(`❌ WebSocket error for ${clientIp}:`, error.message);
    });
    
    // Send periodic ping to keep connection alive
    const pingInterval = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.ping();
        } else {
            clearInterval(pingInterval);
        }
    }, 30000); // Every 30 seconds
});

server.listen(PORT, '0.0.0.0', () => {
    const protocol = USE_HTTPS ? 'wss' : 'ws';
    console.log(`\n🎯 BigFish Darts Signaling Server`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`✅ Server ready at ${protocol}://0.0.0.0:${PORT}`);
    console.log(`📡 Waiting for WebRTC signaling connections...`);
    console.log(`📊 Active rooms: ${rooms.size}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Received SIGTERM, shutting down gracefully...');
    wss.close(() => {
        server.close(() => {
            console.log('✅ Server closed');
            process.exit(0);
        });
    });
});






