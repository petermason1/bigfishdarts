// Game state
let gameState = {
    player1: { name: 'Player 1', score: 501 },
    player2: { name: 'Player 2', score: 501 },
    isPlaying: false
};

// Camera and WebRTC state
let localStream = null;
let peerConnection = null;
let signalingSocket = null;
let currentRoomId = null;
let isInitiator = false;

// WebRTC configuration (using free STUN servers)
// Note: Direct Bluetooth audio streaming is not possible in web browsers.
// However, WebRTC can work over Bluetooth if one phone shares internet via Bluetooth tethering.
// The connection will automatically use whatever network is available (Wi-Fi, mobile data, or Bluetooth tethering).
const rtcConfig = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
    ]
};

// Signaling server URL configuration
// For local testing: 'ws://localhost:8080'
// For domain deployment: 'wss://yourdomain.com' or 'wss://yourdomain.com:8080'
// Note: Use 'wss://' (secure WebSocket) for HTTPS domains, 'ws://' for HTTP
// The app will automatically detect if you're on HTTPS and use WSS if needed
function getSignalingServerUrl() {
    // Check if custom URL is set in localStorage
    const customUrl = localStorage.getItem('signalingServerUrl');
    if (customUrl) {
        return customUrl;
    }
    
    // Auto-detect: if on HTTPS, use WSS; otherwise use WS
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const hostname = window.location.hostname;
    
    // For localhost, use default port
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'ws://localhost:8080';
    }
    
    // For domain, use same hostname with WSS/WS
    return `${protocol}//${hostname}:8080`;
}

let SIGNALING_SERVER_URL = getSignalingServerUrl();

// Update server URL from UI
function updateServerUrl() {
    const serverUrlInput = document.getElementById('serverUrl');
    const url = serverUrlInput.value.trim();
    
    if (url) {
        // Validate URL format
        if (!url.startsWith('ws://') && !url.startsWith('wss://')) {
            alert('Server URL must start with ws:// or wss://');
            return;
        }
        
        localStorage.setItem('signalingServerUrl', url);
        SIGNALING_SERVER_URL = url;
        updateRoomStatus(`Server URL updated: ${url}`);
        console.log('Signaling server URL updated to:', url);
    } else {
        // Clear custom URL and use auto-detected
        localStorage.removeItem('signalingServerUrl');
        SIGNALING_SERVER_URL = getSignalingServerUrl();
        serverUrlInput.value = '';
        updateRoomStatus('Using auto-detected server URL');
    }
}

// Start game function
function startGame() {
    gameState.isPlaying = true;
    alert('Game starting! (Backend integration coming soon)');
    console.log('Game started:', gameState);
}

// Update scores (for future use)
function updateScore(player, points) {
    if (player === 1) {
        gameState.player1.score -= points;
        if (gameState.player1.score < 0) {
            gameState.player1.score = 0;
        }
    } else {
        gameState.player2.score -= points;
        if (gameState.player2.score < 0) {
            gameState.player2.score = 0;
        }
    }
    updateScoreboard();
}

// Update scoreboard display
function updateScoreboard() {
    const scoreElements = document.querySelectorAll('.player-score .score');
    if (scoreElements.length >= 2) {
        scoreElements[0].textContent = gameState.player1.score;
        scoreElements[1].textContent = gameState.player2.score;
    }
}

// ========== Camera Functions ==========

async function startCamera() {
    try {
        // Request camera and microphone access
        localStream = await navigator.mediaDevices.getUserMedia({
            video: { 
                facingMode: 'environment', // Use back camera on mobile
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: true
        });

        const videoElement = document.getElementById('localVideo');
        const placeholder = document.getElementById('videoPlaceholder');
        
        videoElement.srcObject = localStream;
        videoElement.style.display = 'block';
        placeholder.style.display = 'none';
        
        document.getElementById('cameraBtn').style.display = 'none';
        document.getElementById('stopCameraBtn').style.display = 'inline-block';
        
        updateRoomStatus('Camera active - Ready to connect');
        console.log('Camera started successfully');
    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Could not access camera. Please check permissions and try again.');
    }
}

function stopCamera() {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }
    
    const videoElement = document.getElementById('localVideo');
    const placeholder = document.getElementById('videoPlaceholder');
    
    videoElement.srcObject = null;
    videoElement.style.display = 'none';
    placeholder.style.display = 'flex';
    
    document.getElementById('cameraBtn').style.display = 'inline-block';
    document.getElementById('stopCameraBtn').style.display = 'none';
    
    updateRoomStatus('Camera stopped');
    console.log('Camera stopped');
}

// ========== WebRTC Voice Functions ==========

function createOrJoinRoom() {
    const roomIdInput = document.getElementById('roomId');
    const roomId = roomIdInput.value.trim() || generateRoomId();
    roomIdInput.value = roomId;
    currentRoomId = roomId;
    
    connectSignalingServer(roomId);
}

function generateRoomId() {
    return Math.random().toString(36).substring(2, 9).toUpperCase();
}

function connectSignalingServer(roomId) {
    try {
        // Try to connect to WebSocket signaling server
        signalingSocket = new WebSocket(`${SIGNALING_SERVER_URL}?room=${roomId}`);
        
        signalingSocket.onopen = () => {
            console.log('Connected to signaling server');
            updateRoomStatus(`Connected to room: ${roomId}`);
            // Check if room is empty (we're the first) or has someone (we join)
            signalingSocket.send(JSON.stringify({ type: 'join', room: roomId }));
        };
        
        signalingSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            handleSignalingMessage(message);
        };
        
        signalingSocket.onerror = (error) => {
            console.error('Signaling server error:', error);
            updateRoomStatus('Signaling server unavailable. Using direct connection method.');
            // Fallback: Use a simpler method or show instructions
            showSignalingInstructions(roomId);
        };
        
        signalingSocket.onclose = () => {
            console.log('Signaling server disconnected');
            updateRoomStatus('Disconnected from signaling server');
        };
    } catch (error) {
        console.error('Could not connect to signaling server:', error);
        showSignalingInstructions(roomId);
    }
}

function showSignalingInstructions(roomId) {
    const statusEl = document.getElementById('roomStatus');
    statusEl.innerHTML = `
        <strong>Room ID: ${roomId}</strong><br>
        <small>Share this room ID with the other phone. For voice to work, you need a signaling server.</small><br>
        <small>See README for setup instructions.</small>
    `;
}

function handleSignalingMessage(message) {
    switch (message.type) {
        case 'room-joined':
            isInitiator = message.isInitiator;
            if (isInitiator) {
                updateRoomStatus(`Room created: ${currentRoomId} - Waiting for peer...`);
            } else {
                updateRoomStatus(`Joined room: ${currentRoomId} - Connecting...`);
                startVoiceCall();
            }
            break;
        case 'peer-joined':
            if (isInitiator) {
                startVoiceCall();
            }
            break;
        case 'offer':
            handleOffer(message.offer);
            break;
        case 'answer':
            handleAnswer(message.answer);
            break;
        case 'ice-candidate':
            handleIceCandidate(message.candidate);
            break;
    }
}

async function startVoiceCall() {
    if (!localStream) {
        alert('Please start camera first to enable microphone');
        return;
    }

    try {
        // Create peer connection
        peerConnection = new RTCPeerConnection(rtcConfig);
        
        // Add local stream tracks
        localStream.getTracks().forEach(track => {
            peerConnection.addTrack(track, localStream);
        });
        
        // Handle remote stream
        peerConnection.ontrack = (event) => {
            const remoteAudio = document.getElementById('remoteAudio');
            remoteAudio.srcObject = event.streams[0];
            remoteAudio.style.display = 'block';
            updateVoiceStatus('Voice: Connected');
            console.log('Received remote audio stream');
        };
        
        // Handle ICE candidates
        peerConnection.onicecandidate = (event) => {
            if (event.candidate && signalingSocket && signalingSocket.readyState === WebSocket.OPEN) {
                signalingSocket.send(JSON.stringify({
                    type: 'ice-candidate',
                    candidate: event.candidate,
                    room: currentRoomId
                }));
            }
        };
        
        // Create and send offer if we're the initiator
        if (isInitiator) {
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
            
            if (signalingSocket && signalingSocket.readyState === WebSocket.OPEN) {
                signalingSocket.send(JSON.stringify({
                    type: 'offer',
                    offer: offer,
                    room: currentRoomId
                }));
            }
        }
        
        document.getElementById('voiceBtn').style.display = 'none';
        document.getElementById('endVoiceBtn').style.display = 'inline-block';
        updateVoiceStatus('Voice: Connecting...');
        
    } catch (error) {
        console.error('Error starting voice call:', error);
        alert('Error starting voice call: ' + error.message);
    }
}

async function handleOffer(offer) {
    try {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        
        if (signalingSocket && signalingSocket.readyState === WebSocket.OPEN) {
            signalingSocket.send(JSON.stringify({
                type: 'answer',
                answer: answer,
                room: currentRoomId
            }));
        }
    } catch (error) {
        console.error('Error handling offer:', error);
    }
}

async function handleAnswer(answer) {
    try {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    } catch (error) {
        console.error('Error handling answer:', error);
    }
}

async function handleIceCandidate(candidate) {
    try {
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (error) {
        console.error('Error handling ICE candidate:', error);
    }
}

function endVoiceCall() {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    
    const remoteAudio = document.getElementById('remoteAudio');
    remoteAudio.srcObject = null;
    remoteAudio.style.display = 'none';
    
    document.getElementById('voiceBtn').style.display = 'inline-block';
    document.getElementById('endVoiceBtn').style.display = 'none';
    updateVoiceStatus('Voice: Off');
    
    if (signalingSocket) {
        signalingSocket.close();
        signalingSocket = null;
    }
    
    updateRoomStatus('Voice call ended');
}

function updateRoomStatus(message) {
    const statusEl = document.getElementById('roomStatus');
    if (statusEl) {
        statusEl.textContent = message;
    }
}

function updateVoiceStatus(message) {
    const statusEl = document.getElementById('voiceStatus');
    if (statusEl) {
        statusEl.textContent = message;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('BigFish Darts loaded!');
    updateScoreboard();
    
    // Generate a default room ID
    const roomIdInput = document.getElementById('roomId');
    if (roomIdInput) {
        roomIdInput.value = generateRoomId();
    }
    
    // Load saved server URL
    const serverUrlInput = document.getElementById('serverUrl');
    if (serverUrlInput) {
        const savedUrl = localStorage.getItem('signalingServerUrl');
        if (savedUrl) {
            serverUrlInput.value = savedUrl;
        } else {
            // Show auto-detected URL
            serverUrlInput.placeholder = `Auto: ${SIGNALING_SERVER_URL}`;
        }
    }
    
    console.log('Signaling server URL:', SIGNALING_SERVER_URL);
});


