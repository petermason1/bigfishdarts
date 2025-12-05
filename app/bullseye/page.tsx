'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Question categories and questions
const questionCategories = {
  general: [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "How many continents are there?", answer: "7" },
    { question: "What is the largest ocean?", answer: "Pacific Ocean" },
    { question: "Who wrote Romeo and Juliet?", answer: "William Shakespeare" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "In which year did World War II end?", answer: "1945" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  ],
  sports: [
    { question: "How many players are on a football team?", answer: "11" },
    { question: "What is the maximum break in snooker?", answer: "147" },
    { question: "In which sport would you perform a slam dunk?", answer: "Basketball" },
    { question: "How many rings are on the Olympic flag?", answer: "5" },
    { question: "What is the highest score in a single dart throw?", answer: "60" },
    { question: "Which country won the FIFA World Cup in 2018?", answer: "France" },
    { question: "What is the distance from the oche to the dartboard?", answer: "7 feet 9.25 inches" },
    { question: "How many darts are thrown per turn in standard darts?", answer: "3" },
  ],
  entertainment: [
    { question: "Who played James Bond in Casino Royale (2006)?", answer: "Daniel Craig" },
    { question: "What is the highest-grossing film of all time?", answer: "Avatar" },
    { question: "Which band sang 'Bohemian Rhapsody'?", answer: "Queen" },
    { question: "What is the name of the coffee shop in Friends?", answer: "Central Perk" },
    { question: "Who directed the film Inception?", answer: "Christopher Nolan" },
    { question: "What is the longest-running TV show?", answer: "The Simpsons" },
    { question: "Which actor played Tony Stark in Iron Man?", answer: "Robert Downey Jr." },
    { question: "What is the name of the wizard school in Harry Potter?", answer: "Hogwarts" },
  ],
  history: [
    { question: "Who was the first person to walk on the moon?", answer: "Neil Armstrong" },
    { question: "In which year did the Berlin Wall fall?", answer: "1989" },
    { question: "Who was the first female Prime Minister of the UK?", answer: "Margaret Thatcher" },
    { question: "What year did World War I begin?", answer: "1914" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "Which empire was ruled by Julius Caesar?", answer: "Roman Empire" },
    { question: "What was the name of the ship that brought the Pilgrims to America?", answer: "Mayflower" },
    { question: "In which year did the Titanic sink?", answer: "1912" },
  ],
  science: [
    { question: "What is the speed of light?", answer: "299,792,458 meters per second" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "How many bones are in the human body?", answer: "206" },
    { question: "What is the chemical formula for water?", answer: "H2O" },
    { question: "Which gas do plants absorb from the atmosphere?", answer: "Carbon dioxide" },
    { question: "What is the largest organ in the human body?", answer: "Skin" },
    { question: "How many planets are in our solar system?", answer: "8" },
    { question: "What is the most abundant gas in Earth's atmosphere?", answer: "Nitrogen" },
  ],
}

// Dartboard sections with point values
const dartboardSections = [
  { section: 'Bullseye (Inner)', points: 50, color: 'red' },
  { section: 'Bullseye (Outer)', points: 25, color: 'green' },
  { section: 'Triple 20', points: 60, color: 'red' },
  { section: 'Triple 19', points: 57, color: 'red' },
  { section: 'Triple 18', points: 54, color: 'red' },
  { section: 'Double 20', points: 40, color: 'green' },
  { section: 'Double 19', points: 38, color: 'green' },
  { section: 'Double 18', points: 36, color: 'green' },
  { section: 'Single 20', points: 20, color: 'white' },
  { section: 'Single 19', points: 19, color: 'white' },
  { section: 'Single 18', points: 18, color: 'white' },
  { section: 'Miss', points: 0, color: 'gray' },
]

interface Player {
  id: number
  name: string
  score: number
  questionsAnswered: number
  questionsCorrect: number
  roundScore: number // Score for current round
  onPrizeBoard: boolean // Whether player is on prize board (Round 3)
  isDartsPlayer: boolean // Whether this is a darts player
}

interface Question {
  question: string
  answer: string
  category: string
}

type RoundType = 'round1' | 'round2' | 'round3'

export default function BullseyePage() {
  const [numPlayers, setNumPlayers] = useState(3)
  const [players, setPlayers] = useState<Player[]>([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [lastScore, setLastScore] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('general')
  const [round, setRound] = useState(1)
  const [roundType, setRoundType] = useState<RoundType>('round1')
  const [round2Throws, setRound2Throws] = useState<{ playerId: number; score: number }[]>([])
  const [round3NonDartsThrows, setRound3NonDartsThrows] = useState<number[]>([])
  const [round3DartsThrows, setRound3DartsThrows] = useState<number[]>([])
  const [round3NonDartsTotal, setRound3NonDartsTotal] = useState(0)
  const [round3DartsTotal, setRound3DartsTotal] = useState(0)
  const [round3Phase, setRound3Phase] = useState<'non-darts' | 'darts'>('non-darts')
  const [round3CurrentNonDartsPlayerId, setRound3CurrentNonDartsPlayerId] = useState<number | null>(null)

  // Initialize players
  useEffect(() => {
    if (numPlayers > 0 && !gameStarted) {
      const newPlayers: Player[] = Array.from({ length: numPlayers }, (_, i) => ({
        id: i + 1,
        name: `Player ${i + 1}`,
        score: 0,
        questionsAnswered: 0,
        questionsCorrect: 0,
        roundScore: 0,
        onPrizeBoard: false,
        isDartsPlayer: i === 0, // First player is darts player by default
      }))
      setPlayers(newPlayers)
    }
  }, [numPlayers, gameStarted])

  const startGame = () => {
    if (players.length > 0) {
      setGameStarted(true)
      setCurrentPlayerIndex(0)
      setRound(1)
      setRoundType('round1')
      setCurrentQuestion(null)
      setShowAnswer(false)
      setRound2Throws([])
      setRound3NonDartsThrows([])
      setRound3DartsThrows([])
      setRound3NonDartsTotal(0)
      setRound3DartsTotal(0)
      setRound3Phase('non-darts')
      setRound3CurrentNonDartsPlayerId(null)
      // Reset round scores
      setPlayers(players.map(p => ({ ...p, roundScore: 0, onPrizeBoard: false })))
    }
  }

  const resetGame = () => {
    setGameStarted(false)
    setCurrentPlayerIndex(0)
    setRound(1)
    setRoundType('round1')
    setCurrentQuestion(null)
    setShowAnswer(false)
    setLastScore(0)
    setRound2Throws([])
    setRound3NonDartsThrows([])
    setRound3DartsThrows([])
    setRound3NonDartsTotal(0)
    setRound3DartsTotal(0)
    setRound3Phase('non-darts')
    setRound3CurrentNonDartsPlayerId(null)
    setPlayers(players.map(p => ({ 
      ...p, 
      score: 0, 
      questionsAnswered: 0, 
      questionsCorrect: 0,
      roundScore: 0,
      onPrizeBoard: false,
    })))
  }

  const generateQuestion = (): Question => {
    const categories = Object.keys(questionCategories) as Array<keyof typeof questionCategories>
    const category: keyof typeof questionCategories = (selectedCategory as keyof typeof questionCategories) || categories[Math.floor(Math.random() * categories.length)]
    const questions = questionCategories[category]
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    return {
      question: randomQuestion.question,
      answer: randomQuestion.answer,
      category: category,
    }
  }

  const recordDartThrow = (points: number) => {
    if (!gameStarted) return

    const updatedPlayers = [...players]
    const currentPlayer = updatedPlayers[currentPlayerIndex]
    
    if (roundType === 'round1') {
      // Round 1: Original mechanics
      currentPlayer.score += points
      currentPlayer.roundScore += points
      setLastScore(points)
      
      // If points were scored (not a miss), generate a question for the next player
      if (points > 0) {
        const nextPlayerIndex = (currentPlayerIndex + 1) % players.length
        const question = generateQuestion()
        setCurrentQuestion(question)
        setShowAnswer(false)
        
        // Update questions answered for the next player
        updatedPlayers[nextPlayerIndex].questionsAnswered += 1
      }
    } else if (roundType === 'round2') {
      // Round 2: Each darts player throws once, highest scorer gets question
      if (currentPlayer.isDartsPlayer) {
        currentPlayer.roundScore = points // Set round score (single throw)
        currentPlayer.score += points
        setLastScore(points)
        setRound2Throws([...round2Throws, { playerId: currentPlayer.id, score: points }])
        
        // Check if all darts players have thrown
        const dartsPlayers = updatedPlayers.filter(p => p.isDartsPlayer)
        const currentDartsPlayerIndex = dartsPlayers.findIndex(p => p.id === currentPlayer.id)
        
        if (currentDartsPlayerIndex === dartsPlayers.length - 1) {
          // All darts players have thrown, find highest scorer
          const highestScorer = dartsPlayers.reduce((prev, curr) => 
            curr.roundScore > prev.roundScore ? curr : prev
          )
          
          // Generate question for highest scorer
          const question = generateQuestion()
          setCurrentQuestion(question)
          setShowAnswer(false)
          updatedPlayers.find(p => p.id === highestScorer.id)!.questionsAnswered += 1
        } else {
          // Move to next darts player
          const nextDartsPlayerIndex = currentDartsPlayerIndex + 1
          const nextDartsPlayer = dartsPlayers[nextDartsPlayerIndex]
          setCurrentPlayerIndex(updatedPlayers.findIndex(p => p.id === nextDartsPlayer.id))
        }
      }
    } else if (roundType === 'round3') {
      // Round 3: Non-darts player throws 3, then darts player throws 3, need 10 to get on prize board
      if (round3Phase === 'non-darts') {
        // Check if this is the current non-darts player
        if (round3CurrentNonDartsPlayerId && currentPlayer.id === round3CurrentNonDartsPlayerId && !currentPlayer.isDartsPlayer) {
          const newThrows = [...round3NonDartsThrows, points]
          setRound3NonDartsThrows(newThrows)
          const newTotal = round3NonDartsTotal + points
          setRound3NonDartsTotal(newTotal)
          setLastScore(points)
          
          // After 3 throws, switch to darts player
          if (newThrows.length >= 3) {
            setRound3Phase('darts')
            const dartsPlayer = updatedPlayers.find(p => p.isDartsPlayer)
            if (dartsPlayer) {
              setCurrentPlayerIndex(updatedPlayers.findIndex(p => p.id === dartsPlayer.id))
              setRound3DartsThrows([])
              setRound3DartsTotal(0)
            }
          }
        }
      } else {
        // Darts player phase
        const dartsPlayer = updatedPlayers.find(p => p.isDartsPlayer)
        if (dartsPlayer && currentPlayer.id === dartsPlayer.id) {
          const newThrows = [...round3DartsThrows, points]
          setRound3DartsThrows(newThrows)
          const newTotal = round3DartsTotal + points
          setRound3DartsTotal(newTotal)
          setLastScore(points)
          
          // After 3 throws, check if total is 10 or more
          if (newThrows.length >= 3) {
            const combinedTotal = round3NonDartsTotal + newTotal
            const activeNonDartsPlayer = updatedPlayers.find(p => p.id === round3CurrentNonDartsPlayerId)
            
            if (combinedTotal >= 10 && activeNonDartsPlayer) {
              // Both players get on prize board
              activeNonDartsPlayer.onPrizeBoard = true
              activeNonDartsPlayer.score += 50
              dartsPlayer.onPrizeBoard = true
              dartsPlayer.score += 50
            }
            
            // Reset for next pair
            setRound3NonDartsThrows([])
            setRound3DartsThrows([])
            setRound3NonDartsTotal(0)
            setRound3DartsTotal(0)
            setRound3Phase('non-darts')
            
            // Move to next non-darts player
            const nonDartsPlayers = updatedPlayers.filter(p => !p.isDartsPlayer)
            const currentNonDartsIdx = nonDartsPlayers.findIndex(p => p.id === round3CurrentNonDartsPlayerId)
            const nextNonDartsIdx = (currentNonDartsIdx + 1) % nonDartsPlayers.length
            const nextNonDartsPlayer = nonDartsPlayers[nextNonDartsIdx]
            
            if (nextNonDartsPlayer && nextNonDartsIdx !== 0) {
              // More non-darts players to go
              setRound3CurrentNonDartsPlayerId(nextNonDartsPlayer.id)
              setCurrentPlayerIndex(updatedPlayers.findIndex(p => p.id === nextNonDartsPlayer.id))
            } else {
              // All players have completed round 3, cycle back to round 1
              setRound(round + 1)
              setRoundType('round1')
              setCurrentPlayerIndex(0)
              updatedPlayers.forEach(p => { p.roundScore = 0 })
            }
            
            setPlayers(updatedPlayers)
            return
          }
        }
      }
    }
    
    setPlayers(updatedPlayers)
  }

  const answerQuestion = (isCorrect: boolean) => {
    if (!currentQuestion) return

    const updatedPlayers = [...players]
    
    if (roundType === 'round1') {
      // Round 1: Next player answered
      const nextPlayerIndex = (currentPlayerIndex + 1) % players.length
      const nextPlayer = updatedPlayers[nextPlayerIndex]
      
      if (isCorrect) {
        nextPlayer.questionsCorrect += 1
        nextPlayer.score += 10
      }
      
      setPlayers(updatedPlayers)
      setCurrentQuestion(null)
      setShowAnswer(false)
      
      // Move to next player after question is answered
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
      
      // Check if round is complete (all players have thrown)
      if ((currentPlayerIndex + 1) % players.length === 0) {
        // Move to Round 2
        setRound(round + 1)
        setRoundType('round2')
        setRound2Throws([])
        // Reset round scores and set first darts player
        updatedPlayers.forEach(p => {
          p.roundScore = 0
          p.isDartsPlayer = p.id === 1 // First player is darts player
        })
        setPlayers(updatedPlayers)
        const firstDartsPlayer = updatedPlayers.find(p => p.isDartsPlayer)
        if (firstDartsPlayer) {
          setCurrentPlayerIndex(updatedPlayers.findIndex(p => p.id === firstDartsPlayer.id))
        }
      }
    } else if (roundType === 'round2') {
      // Round 2: Highest scorer answered
      const highestScorer = updatedPlayers.filter(p => p.isDartsPlayer).reduce((prev, curr) => 
        curr.roundScore > prev.roundScore ? curr : prev
      )
      
      if (isCorrect) {
        highestScorer.questionsCorrect += 1
        highestScorer.score += 10
      }
      
      setPlayers(updatedPlayers)
      setCurrentQuestion(null)
      setShowAnswer(false)
      
      // Move to Round 3
      setRound(round + 1)
      setRoundType('round3')
      setRound3NonDartsThrows([])
      setRound3DartsThrows([])
      setRound3NonDartsTotal(0)
      setRound3DartsTotal(0)
      setRound3Phase('non-darts')
      // Reset round scores
      updatedPlayers.forEach(p => { p.roundScore = 0 })
      setPlayers(updatedPlayers)
      
      // Start with first non-darts player
      const firstNonDartsPlayer = updatedPlayers.find(p => !p.isDartsPlayer)
      if (firstNonDartsPlayer) {
        setRound3CurrentNonDartsPlayerId(firstNonDartsPlayer.id)
        setCurrentPlayerIndex(updatedPlayers.findIndex(p => p.id === firstNonDartsPlayer.id))
      }
    }
  }

  const getCurrentPlayer = () => players[currentPlayerIndex] || null

  return (
    <>
      <Navbar />
      
      <div className="container">
        <header className="signup-hero" style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/bullseye1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
          <div style={{ 
            background: 'rgba(220, 20, 60, 0.9)',
            padding: '2rem',
            borderRadius: '20px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            border: '3px solid var(--accent-gold)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}>
            <h1 className="signup-title" style={{ 
              fontSize: '3rem',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}>
              🎯 Bullseye Game
            </h1>
            <p className="signup-subtitle" style={{ 
              fontSize: '1.5rem',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            }}>
              Throw darts, score points, answer questions!
            </p>
          </div>
        </header>

        <main style={{ padding: '2rem 0' }}>
          {/* Game Setup */}
          {!gameStarted && (
            <div className="signup-section">
              <div className="signup-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2>Game Setup</h2>
                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="numPlayers" style={{ 
                    display: 'block',
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}>
                    Number of Players/Teams:
                  </label>
                  <input
                    type="number"
                    id="numPlayers"
                    min="1"
                    max="10"
                    value={numPlayers}
                    onChange={(e) => setNumPlayers(parseInt(e.target.value) || 1)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.2rem',
                      borderRadius: '10px',
                      border: '2px solid var(--accent-gold)',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'var(--text-light)',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="category" style={{ 
                    display: 'block',
                    marginBottom: '1rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}>
                    Question Category:
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.2rem',
                      borderRadius: '10px',
                      border: '2px solid var(--accent-gold)',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'var(--text-light)',
                    }}
                  >
                    <option value="general">General Knowledge</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="history">History</option>
                    <option value="science">Science</option>
                  </select>
                </div>

                {/* Player Names */}
                {players.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Player Names:</h3>
                    {players.map((player, index) => (
                      <div key={player.id} style={{ marginBottom: '1rem' }}>
                        <input
                          type="text"
                          placeholder={`Player ${index + 1} Name`}
                          value={player.name}
                          onChange={(e) => {
                            const updated = [...players]
                            updated[index].name = e.target.value
                            setPlayers(updated)
                          }}
                          style={{
                            width: '100%',
                            padding: '0.8rem',
                            fontSize: '1.1rem',
                            borderRadius: '8px',
                            border: '2px solid var(--primary-blue)',
                            background: 'rgba(255,255,255,0.1)',
                            color: 'var(--text-light)',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={startGame}
                  className="signup-button"
                  style={{ 
                    width: '100%',
                    fontSize: '1.3rem',
                    padding: '1.2rem',
                    marginTop: '1rem',
                  }}
                >
                  Start Game
                </button>
              </div>
            </div>
          )}

          {/* Game Play */}
          {gameStarted && (
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {/* Round and Current Player Info */}
              <div style={{ 
                textAlign: 'center',
                marginBottom: '2rem',
                background: 'rgba(220, 20, 60, 0.3)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '2px solid var(--accent-gold)',
              }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {roundType === 'round1' && 'Round 1: Standard Play'}
                  {roundType === 'round2' && 'Round 2: Highest Score Challenge'}
                  {roundType === 'round3' && 'Round 3: Prize Board Round'}
                </h2>
                {roundType === 'round1' && (
                  <>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                      {getCurrentPlayer()?.name}'s Turn to Throw
                    </h3>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9 }}>
                      Score points to trigger a question for the next player
                    </p>
                  </>
                )}
                {roundType === 'round2' && (
                  <>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                      {getCurrentPlayer()?.name}'s Turn (Darts Player)
                    </h3>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9 }}>
                      All darts players throw. Highest scorer gets a question!
                    </p>
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                      {players.filter(p => p.isDartsPlayer).map(p => (
                        <span key={p.id} style={{ 
                          margin: '0 0.5rem',
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(0, 48, 130, 0.3)',
                          borderRadius: '5px',
                        }}>
                          {p.name}: {p.roundScore} pts
                        </span>
                      ))}
                    </div>
                  </>
                )}
                {roundType === 'round3' && (
                  <>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                      {round3Phase === 'non-darts' 
                        ? `${getCurrentPlayer()?.name}'s Turn (Non-Darts Player)`
                        : `${getCurrentPlayer()?.name}'s Turn (Darts Player)`
                      }
                    </h3>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9 }}>
                      {round3Phase === 'non-darts' 
                        ? `Throw 3 darts (${Math.min(round3NonDartsThrows.length + 1, 3)}/3)`
                        : `Throw 3 darts (${Math.min(round3DartsThrows.length + 1, 3)}/3)`
                      }
                    </p>
                    <div style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>
                      <div style={{ marginBottom: '0.5rem' }}>
                        Non-Darts Total: {round3NonDartsTotal} points
                        {round3NonDartsThrows.length > 0 && (
                          <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.8 }}>
                            ({round3NonDartsThrows.join(' + ')})
                          </span>
                        )}
                      </div>
                      {round3Phase === 'darts' && (
                        <div>
                          Darts Total: {round3DartsTotal} points
                          {round3DartsThrows.length > 0 && (
                            <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.8 }}>
                              ({round3DartsThrows.join(' + ')})
                            </span>
                          )}
                        </div>
                      )}
                      {round3Phase === 'darts' && round3DartsThrows.length === 2 && (
                        <div style={{ 
                          marginTop: '0.5rem',
                          padding: '0.5rem',
                          background: round3NonDartsTotal + round3DartsTotal >= 10 
                            ? 'rgba(0, 200, 0, 0.3)' 
                            : 'rgba(220, 20, 60, 0.3)',
                          borderRadius: '5px',
                        }}>
                          Combined: {round3NonDartsTotal + round3DartsTotal} points
                          {round3NonDartsTotal + round3DartsTotal >= 10 && (
                            <span style={{ color: 'var(--accent-gold)', marginLeft: '0.5rem' }}>
                              ✓ On Prize Board! (+50 bonus)
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                )}
                {lastScore > 0 && (
                  <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                    Last throw: {lastScore} points!
                  </p>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                {/* Dartboard Section */}
                <div className="signup-card">
                  <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Throw Dart</h2>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                  }}>
                    {dartboardSections.map((section) => (
                      <button
                        key={section.section}
                        onClick={() => recordDartThrow(section.points)}
                        style={{
                          padding: '1rem',
                          borderRadius: '10px',
                          border: `2px solid ${section.color === 'red' ? 'var(--primary-red)' : section.color === 'green' ? 'var(--accent-gold)' : 'var(--primary-blue)'}`,
                          background: section.color === 'red' 
                            ? 'rgba(220, 20, 60, 0.3)' 
                            : section.color === 'green'
                            ? 'rgba(212, 175, 55, 0.3)'
                            : 'rgba(0, 48, 130, 0.3)',
                          color: 'var(--text-light)',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)'
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.5)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <div>{section.section}</div>
                        <div style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginTop: '0.5rem' }}>
                          {section.points} pts
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question Section */}
                <div className="signup-card">
                  {currentQuestion ? (
                    <>
                      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        {roundType === 'round1' && `Question for ${players[(currentPlayerIndex + 1) % players.length]?.name}`}
                        {roundType === 'round2' && `Question for ${players.filter(p => p.isDartsPlayer).reduce((prev, curr) => curr.roundScore > prev.roundScore ? curr : prev)?.name} (Highest Scorer)`}
                        {roundType === 'round3' && 'No questions in Round 3'}
                      </h2>
                      <div style={{
                        background: 'rgba(0, 48, 130, 0.3)',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        marginBottom: '1rem',
                        border: '2px solid var(--primary-blue)',
                      }}>
                        <p style={{ 
                          fontSize: '1.3rem',
                          fontWeight: 'bold',
                          marginBottom: '1rem',
                          color: 'var(--accent-gold)',
                        }}>
                          {currentQuestion.category.toUpperCase()}
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                          {currentQuestion.question}
                        </p>
                      </div>
                      
                      {showAnswer ? (
                        <div style={{
                          background: 'rgba(220, 20, 60, 0.3)',
                          padding: '1.5rem',
                          borderRadius: '10px',
                          marginBottom: '1rem',
                          border: '2px solid var(--primary-red)',
                        }}>
                          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                            Answer:
                          </p>
                          <p style={{ fontSize: '1.2rem' }}>{currentQuestion.answer}</p>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowAnswer(true)}
                          className="signup-button"
                          style={{ 
                            width: '100%',
                            marginBottom: '1rem',
                            background: 'var(--primary-blue)',
                          }}
                        >
                          Show Answer
                        </button>
                      )}

                      {showAnswer && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                          <button
                            onClick={() => answerQuestion(true)}
                            className="signup-button"
                            style={{ 
                              background: 'var(--primary-blue)',
                              fontSize: '1.1rem',
                            }}
                          >
                            ✓ Correct
                          </button>
                          <button
                            onClick={() => answerQuestion(false)}
                            className="signup-button"
                            style={{ 
                              background: 'var(--primary-red)',
                              fontSize: '1.1rem',
                            }}
                          >
                            ✗ Incorrect
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        {getCurrentPlayer()?.name} should throw a dart first.
                        <br />
                        When points are scored, a question will appear here for the next player.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Scoreboard */}
              <div className="signup-card">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Scoreboard</h2>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.min(players.length, 4)}, 1fr)`,
                  gap: '1rem',
                }}>
                  {players.map((player, index) => (
                    <div
                      key={player.id}
                      style={{
                        background: index === currentPlayerIndex 
                          ? 'rgba(220, 20, 60, 0.4)' 
                          : 'rgba(0, 48, 130, 0.2)',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        border: index === currentPlayerIndex 
                          ? '3px solid var(--accent-gold)' 
                          : '2px solid var(--primary-blue)',
                        textAlign: 'center',
                      }}
                    >
                      <h3 style={{ 
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                        color: index === currentPlayerIndex ? 'var(--accent-gold)' : 'var(--text-light)',
                      }}>
                        {player.name}
                        {index === currentPlayerIndex && ' 🎯'}
                        {player.isDartsPlayer && (
                          <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.8 }}>
                            (Darts)
                          </span>
                        )}
                      </h3>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                        {player.score} pts
                      </div>
                      {player.onPrizeBoard && (
                        <div style={{ 
                          fontSize: '0.9rem', 
                          color: 'var(--accent-gold)',
                          fontWeight: 'bold',
                          marginBottom: '0.5rem',
                          padding: '0.3rem',
                          background: 'rgba(212, 175, 55, 0.3)',
                          borderRadius: '5px',
                        }}>
                          🏆 On Prize Board!
                        </div>
                      )}
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Questions: {player.questionsCorrect}/{player.questionsAnswered}
                        {player.questionsAnswered > 0 && (
                          <span style={{ marginLeft: '0.5rem' }}>
                            ({Math.round((player.questionsCorrect / player.questionsAnswered) * 100)}%)
                          </span>
                        )}
                      </div>
                      {roundType === 'round2' && player.isDartsPlayer && (
                        <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', marginTop: '0.5rem' }}>
                          Round Score: {player.roundScore}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Controls */}
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  onClick={resetGame}
                  className="signup-button"
                  style={{ 
                    background: 'var(--primary-red)',
                    fontSize: '1.1rem',
                    padding: '1rem 2rem',
                  }}
                >
                  Reset Game
                </button>
              </div>
            </div>
          )}

          {/* Game Rules */}
          <div className="signup-section" style={{ marginTop: '3rem' }}>
            <div className="signup-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2>How to Play Bullseye</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <ol style={{ paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Setup:</strong> Choose the number of players/teams (1-10) and select a question category.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Throwing:</strong> The current player throws a dart (or clicks a section to simulate a throw).
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Scoring:</strong> Points are awarded based on where the dart lands. Different sections have different point values.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Questions:</strong> When a player scores points (not a miss), the next player in line gets asked a question from the selected category.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Answering:</strong> The next player answers the question. Correct answers earn 10 bonus points!
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Turn Order:</strong> After a question is answered, play moves to the next player/team.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Winning:</strong> Play continues for as many rounds as you like. The player with the highest score wins!
                  </li>
                </ol>
                <div style={{ 
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.2)',
                  borderRadius: '10px',
                  border: '2px solid var(--accent-gold)',
                }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Tips</h3>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Higher scoring sections trigger questions for your opponents</li>
                    <li>Answering questions correctly gives you bonus points</li>
                    <li>Track your question accuracy to see how well you&apos;re doing</li>
                    <li>You can play with 1 player (practice mode) or multiple players/teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
