# How Voice Communication Works 🎤

## Overview

This app enables real-time voice communication between two phones using **WebRTC** (Web Real-Time Communication) technology. The voice is sent via WiFi (or mobile data) through your domain's signaling server to establish a direct connection between the phones.

---

## Architecture Diagram

```
Phone 1 (You)                    Your Domain Server              Phone 2 (Friend)
     │                                  │                              │
     │  1. Connect via WiFi             │                              │
     ├─────────────────────────────────>│                              │
     │                                  │                              │
     │  2. Join Room "ABC123"           │                              │
     ├─────────────────────────────────>│                              │
     │                                  │                              │
     │                                  │  3. Connect via WiFi         │
     │                                  │<─────────────────────────────┤
     │                                  │                              │
     │                                  │  4. Join Room "ABC123"       │
     │                                  │<─────────────────────────────┤
     │                                  │                              │
     │  5. Signaling: Offer/Answer      │                              │
     │<─────────────────────────────────┼─────────────────────────────>│
     │                                  │                              │
     │  6. Direct P2P Connection        │                              │
     │<══════════════════════════════════════════════════════════════>│
     │                                  │                              │
     │  7. Voice Audio Flows Directly   │                              │
     │<══════════════════════════════════════════════════════════════>│
     │                                  │                              │
```

---

## Step-by-Step Process

### Phase 1: Initial Setup

1. **Phone 1 starts the app:**
   - Opens the web app in browser
   - Clicks "Start Camera" → Browser requests camera/microphone permission
   - Camera feed shows on Phone 1's screen

2. **Phone 1 connects to your domain:**
   - Enters server URL: `wss://yourdomain.com` (or auto-detected)
   - Clicks "Join Room" with room ID "ABC123"
   - Browser opens WebSocket connection to your domain's signaling server
   - Server creates room "ABC123" and marks Phone 1 as the initiator

### Phase 2: Second Phone Joins

3. **Phone 2 starts the app:**
   - Opens the same web app
   - Enters the same server URL: `wss://yourdomain.com`
   - Enters the same room ID: "ABC123"
   - Clicks "Join Room"
   - Browser opens WebSocket connection to your domain's signaling server

4. **Server matches them:**
   - Server sees room "ABC123" already has Phone 1
   - Server adds Phone 2 to the room
   - Server sends message to Phone 1: "Someone joined!"
   - Server sends message to Phone 2: "You're connected!"

### Phase 3: WebRTC Connection Setup (Signaling)

5. **Phone 1 creates WebRTC offer:**
   - When Phone 1 clicks "Start Voice", the browser:
     - Creates a `RTCPeerConnection` object
     - Gets audio from microphone
     - Creates an "offer" (SDP - Session Description Protocol)
   - Phone 1 sends the offer to the signaling server via WebSocket

6. **Signaling server forwards the offer:**
   - Server receives offer from Phone 1
   - Server forwards it to Phone 2 via WebSocket

7. **Phone 2 receives and responds:**
   - Phone 2 receives the offer
   - Browser creates its own `RTCPeerConnection`
   - Browser creates an "answer" (SDP)
   - Phone 2 sends the answer back to the server

8. **Server forwards the answer:**
   - Server receives answer from Phone 2
   - Server forwards it to Phone 1

9. **ICE Candidates (Network Discovery):**
   - Both phones discover their network addresses (IP addresses)
   - They exchange "ICE candidates" through the signaling server
   - This helps them find the best path to connect directly

### Phase 4: Direct Peer-to-Peer Connection

10. **Direct connection established:**
    - Once offer/answer and ICE candidates are exchanged
    - WebRTC establishes a **direct connection** between Phone 1 and Phone 2
    - This connection bypasses the server!
    - Audio now flows directly: Phone 1 ↔ Phone 2

11. **Voice audio streaming:**
    - Phone 1's microphone → Encoded audio → Direct connection → Phone 2's speaker
    - Phone 2's microphone → Encoded audio → Direct connection → Phone 1's speaker
    - This happens in real-time with low latency

---

## Key Technologies

### WebRTC (Web Real-Time Communication)
- **What it is:** Browser API for real-time audio/video communication
- **How it works:** Establishes direct peer-to-peer connections between browsers
- **Why it's good:** Low latency, efficient (no server in the middle after setup)

### WebSocket (Signaling)
- **What it is:** Persistent connection for real-time messaging
- **How it's used:** Exchanges connection information (offers, answers, ICE candidates)
- **Why it's needed:** WebRTC needs help to establish the initial connection

### STUN Servers
- **What it is:** Servers that help discover your public IP address
- **How it's used:** When phones are behind routers/firewalls, STUN helps find the connection path
- **Example:** Google's STUN servers (`stun.l.google.com`)

---

## Data Flow

### During Signaling (Setup Phase):
```
Phone 1 → WiFi → Your Domain Server → WiFi → Phone 2
         (WebSocket messages: offers, answers, ICE candidates)
```

### During Voice Communication (After Setup):
```
Phone 1 ←→ Direct P2P Connection ←→ Phone 2
         (Audio streams - bypasses server!)
```

**Important:** Once connected, the server is **not** in the audio path. It only helped establish the connection.

---

## Why This Architecture?

### ✅ Advantages:
1. **Low Latency:** Direct connection means faster audio (no server delay)
2. **Efficient:** Server only handles setup, not continuous audio streaming
3. **Scalable:** Server can handle many rooms simultaneously
4. **Secure:** Uses encrypted connections (WSS for signaling, DTLS for audio)

### ⚠️ Limitations:
1. **NAT/Firewall Issues:** Some networks block direct connections (needs TURN servers)
2. **Requires Signaling Server:** Can't establish connection without it
3. **Browser Support:** Needs modern browser with WebRTC support

---

## Network Paths

### WiFi Connection:
- Phone connects to WiFi router
- Router connects to internet
- Internet routes to your domain server
- Server processes signaling
- Phones establish direct connection (may still go through routers, but optimized)

### Mobile Data:
- Same process, but uses cellular network instead of WiFi
- May have higher latency depending on network quality

---

## Security

1. **WSS (WebSocket Secure):** Signaling uses encrypted WebSocket (like HTTPS)
2. **DTLS (Datagram Transport Layer Security):** Audio streams are encrypted
3. **No Audio Storage:** Server never stores or processes audio - it's just a relay for setup messages

---

## Troubleshooting

### "Can't connect to server"
- Check server URL is correct (`wss://yourdomain.com`)
- Ensure server is running
- Check firewall/network allows WebSocket connections

### "Voice not working after connection"
- May need TURN server for NAT traversal
- Check browser permissions for microphone
- Verify both phones are on the same network or have proper network access

### "High latency/choppy audio"
- Network quality issue
- Try using WiFi instead of mobile data
- Check if direct connection was established (check browser console)

---

## Summary

1. **Phones connect to your domain server via WiFi** (WebSocket)
2. **Server helps them find each other** (room matching)
3. **Phones exchange connection info** (offers, answers, ICE candidates)
4. **Direct peer-to-peer connection established** (WebRTC)
5. **Audio flows directly between phones** (bypassing server)

The server is like a "matchmaker" - it introduces the phones, but then they talk directly to each other!



