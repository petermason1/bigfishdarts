# BigFish Darts 🎯

Interactive darts gaming platform with real-time video streaming.

## Current Setup

**Simple HTML/CSS/JS** - Fast, no build step, ready to iterate!

- `index.html` - Main game page
- `styles.css` - Styling
- `script.js` - Game logic
- `public/index.html` - Marketing/landing page

## Quick Start

Just open `index.html` in your browser! No build step needed.

Or use a simple server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Future Stack (When Ready)

- **Frontend**: Next.js 15+ (React 18+) with TypeScript
- **Styling**: Tailwind CSS v3
- **Backend**: Node.js + Socket.io + WebRTC
- **Database**: PostgreSQL + Redis

## Project Structure

```
BigFishDarts/
├── index.html          # Main game page (HTML/CSS/JS)
├── styles.css          # Styles
├── script.js           # Game logic
├── public/
│   └── index.html      # Marketing/landing page
└── src/                # (Future Next.js app)
```

## Features

- ✅ Simple HTML/CSS/JS setup
- ✅ Game room UI
- ✅ Scoreboard
- ✅ Responsive design
- ✅ **Camera access** - View dartboard through phone camera
- ✅ **Voice communication** - Real-time voice between two phones via WebRTC
- 🚧 Backend integration (coming)

## Camera & Voice Setup

### 📖 Detailed Explanation

For a complete technical explanation of how the voice communication works, see **[HOW_IT_WORKS.md](./HOW_IT_WORKS.md)** - it covers the entire flow from connection to audio streaming.

### Quick Overview

1. **Camera Access**: Click "Start Camera" to view the dartboard through your phone's camera
2. **Voice Communication**: Two phones can connect via WebRTC for real-time voice

### Setting Up Voice Communication

For voice to work between two phones, you need a signaling server to help establish the WebRTC connection.

#### Option 1: Use the Included Signaling Server

1. Install Node.js if you haven't already
2. Install WebSocket library:
   ```bash
   npm install ws
   ```
3. Run the signaling server:
   ```bash
   node signaling-server.js
   ```
4. The server will run on `ws://localhost:8080`
5. Update `SIGNALING_SERVER_URL` in `script.js` if using a different host/port

#### Option 2: Deploy to Your Domain (WiFi/Domain Setup)

**This is the recommended approach for sending voice via WiFi to a domain!**

1. **Deploy the signaling server to your domain:**
   ```bash
   # On your server, install dependencies
   npm install ws
   
   # Set up SSL certificates (Let's Encrypt recommended)
   # Then run with HTTPS:
   USE_HTTPS=true SSL_CERT=/path/to/cert.pem SSL_KEY=/path/to/key.pem PORT=8080 node signaling-server-production.js
   ```

2. **Or use a reverse proxy (nginx) for SSL:**
   ```nginx
   # nginx config example
   server {
       listen 443 ssl;
       server_name yourdomain.com;
       
       ssl_certificate /path/to/cert.pem;
       ssl_certificate_key /path/to/key.pem;
       
       location / {
           proxy_pass http://localhost:8080;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection "upgrade";
       }
   }
   ```

3. **Update the app:**
   - Open the app on your phone
   - In the "Server URL" field, enter: `wss://yourdomain.com` (or `wss://yourdomain.com:8080` if using custom port)
   - Click "Save"
   - Both phones can now connect via WiFi to your domain!

**How it works:**
- Voice audio is sent via WiFi to your domain's signaling server
- The server helps establish a direct WebRTC connection between the two phones
- Once connected, audio flows peer-to-peer (not through the server)
- The server only handles the initial connection setup

#### Option 3: Use a Cloud Signaling Service

You can use services like:
- [Metered.ca Open Relay](https://www.metered.ca/tools/openrelay/) (free STUN/TURN)
- [Socket.io](https://socket.io/) for signaling
- Or deploy the included `signaling-server.js` to a cloud service (Heroku, Railway, etc.)

#### Option 3: Local Network Setup

For testing on the same network:
1. Find your computer's local IP (e.g., `192.168.1.100`)
2. Update `SIGNALING_SERVER_URL` in `script.js` to `ws://YOUR_IP:8080`
3. Run the signaling server
4. Access the app from both phones using your computer's IP

### Using the Features

1. **Start Camera**: 
   - Click "Start Camera" button
   - Grant camera permissions when prompted
   - The video feed will show your camera view

2. **Connect Two Phones**:
   - On Phone 1: Enter or copy the room ID, click "Join Room"
   - On Phone 2: Enter the same room ID, click "Join Room"
   - Both phones should see "Connected" status

3. **Start Voice**:
   - After both phones are in the same room, click "Start Voice" on either phone
   - The other phone will automatically connect
   - You should see "Voice: Connected" when working

### Bluetooth Audio Limitation

**Important:** Web browsers cannot directly stream audio via Bluetooth between phones. This is a browser security/API limitation:

- Bluetooth audio profiles (A2DP, HFP) are designed for headsets/speakers, not phone-to-phone
- Web Bluetooth API only supports BLE devices, not audio streaming
- Browsers don't expose Bluetooth audio streaming APIs

**Workaround - Bluetooth Tethering:**
If you want to use Bluetooth for the connection, you can use Bluetooth tethering:

1. On Phone 1: Enable Bluetooth tethering/hotspot (share internet via Bluetooth)
2. On Phone 2: Connect to Phone 1's Bluetooth network
3. Both phones can then use WebRTC over the Bluetooth connection
4. The voice will still use WebRTC, but the network connection will be via Bluetooth

**Note:** For true Bluetooth audio streaming (bypassing WebRTC), you would need a native mobile app, not a web app.

### Troubleshooting

- **Camera not working**: Check browser permissions for camera/microphone
- **Voice not connecting**: 
  - Ensure signaling server is running
  - Check that both phones are using the same room ID
  - Verify network connectivity
  - On mobile, ensure you're using HTTPS or localhost (required for getUserMedia)
- **Can't see other phone's video**: Currently only voice is implemented between phones. Camera view is local only.
- **Bluetooth not working**: See "Bluetooth Audio Limitation" section above - direct Bluetooth audio isn't possible in web browsers

## License

ISC
