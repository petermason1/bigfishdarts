// Game state
let gameState = {
    player1: { name: 'Player 1', score: 501 },
    player2: { name: 'Player 2', score: 501 },
    isPlaying: false
};

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
    document.querySelector('.player-score:first-child .score').textContent = gameState.player1.score;
    document.querySelector('.player-score:last-child .score').textContent = gameState.player2.score;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('BigFish Darts loaded!');
    updateScoreboard();
});


