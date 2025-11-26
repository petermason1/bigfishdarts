'use client'

import Link from 'next/link'

export default function CompPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.jpeg" alt="BigFish Darts" className="logo-image" />
            <span className="logo-text">BigFish Darts</span>
          </div>
          <ul className="nav-menu">
            <li><Link href="/" className="nav-link">Join Us</Link></li>
            <li><Link href="/demo" className="nav-link">Demo</Link></li>
            <li><Link href="/sales" className="nav-link">Pricing</Link></li>
            <li><Link href="/comp" className="nav-link active">Competition</Link></li>
            <li><Link href="/coaching" className="nav-link">Coaching</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <header className="comp-hero">
          <h1 className="signup-title">🏆 BigFish Darts Competition</h1>
          <p className="signup-subtitle">Show us your skills and win amazing prizes!</p>
        </header>

        <main>
          {/* Challenge Section */}
          <div className="comp-challenge">
            <h2>170 Checkout Challenge</h2>
            <div className="challenge-text">
              Video yourself doing a 170 check out and win one Luke Littler darts.
            </div>
            <div className="prize-info">
              <h3>🎁 Prize</h3>
              <p>Win a set of Luke Littler darts - no cheating!</p>
            </div>
          </div>

          {/* Rules Section */}
          <div className="comp-rules">
            <h3>Competition Rules</h3>
            <ul>
              <li>Video must show a complete 170 checkout (T20, T20, Bullseye)</li>
              <li>All three darts must be visible in the video</li>
              <li>No editing or cuts in the video - must be one continuous shot</li>
              <li>Video must clearly show the dartboard and your throws</li>
              <li>Your face or identifying feature must be visible to prove it&apos;s you</li>
              <li>Submit your video via the contact form below</li>
              <li>Winners will be selected by BigFish Darts team</li>
              <li>Competition closes on the date specified (TBA)</li>
            </ul>
          </div>

          {/* How to Enter */}
          <div className="services-section">
            <h2>How to Enter</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📹</div>
                <h3>1. Record Your Video</h3>
                <p>Film yourself completing a 170 checkout. Make sure the video is clear and shows all three darts.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">✅</div>
                <h3>2. Check Requirements</h3>
                <p>Ensure your video meets all the competition rules - continuous shot, clear view of board, and your identity visible.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📧</div>
                <h3>3. Submit Entry</h3>
                <p>Use the contact form below to submit your video. Include your name, email, and a link to your video (YouTube, Google Drive, etc.).</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🏆</div>
                <h3>4. Win Prizes</h3>
                <p>Winners will be contacted via email. Prizes will be shipped to the address you provide.</p>
              </div>
            </div>
          </div>

          {/* Submit Entry CTA */}
          <div className="comp-submit">
            <Link href="/" className="comp-submit-button">
              Submit Your Entry
            </Link>
            <p style={{ marginTop: '1.5rem', color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
              Use the contact form on our Join Us page to submit your video entry
            </p>
          </div>

          {/* Prize Details */}
          <div className="request-info-section">
            <div className="request-info-card">
              <h2>About the Prize</h2>
              <p>
                Win an authentic set of Luke Littler darts! These professional-grade darts are used by one of the world&apos;s top players.
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>🎯 Professional Quality</strong>
                  <p>Authentic Luke Littler signature darts</p>
                </div>
                <div className="request-benefit">
                  <strong>🏆 Limited Edition</strong>
                  <p>Exclusive prize for competition winners</p>
                </div>
                <div className="request-benefit">
                  <strong>📦 Free Shipping</strong>
                  <p>Prize shipped directly to your address</p>
                </div>
                <div className="request-benefit">
                  <strong>⭐ Verified Authenticity</strong>
                  <p>Official Luke Littler branded darts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="services-section">
            <h2>Tips for Success</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📐</div>
                <h3>Perfect Your Technique</h3>
                <p>Practice the 170 checkout: T20 (60), T20 (60), Bullseye (50). Focus on consistency and accuracy.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Good Video Quality</h3>
                <p>Use good lighting, stable camera position, and ensure the dartboard and your throws are clearly visible.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">⏱️</div>
                <h3>One Continuous Shot</h3>
                <p>Record in one take - no cuts or edits. This proves authenticity and makes your entry valid.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">✨</div>
                <h3>Show Your Personality</h3>
                <p>While following the rules, let your personality shine through. Creative entries stand out!</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="signup-footer">
        <p>&copy; 2024 BigFish Darts. All rights reserved.</p>
        <p className="footer-note">Building the future of interactive darts gaming</p>
      </footer>
    </>
  )
}

