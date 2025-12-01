'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CompPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <header className="comp-hero">
          <h1 className="signup-title">BigFish Darts Competition</h1>
          <p className="signup-subtitle">Show us your skills and win amazing prizes!</p>
        </header>

        <main>
          {/* Coming Soon Notice */}
          <div className="request-info-section" style={{ marginBottom: '3rem' }}>
            <div className="request-info-card" style={{ background: 'rgba(220, 20, 60, 0.2)', borderColor: 'var(--union-red)', borderWidth: '3px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--union-white)' }}>Competition Coming Soon</h2>
              <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We&apos;re putting the finishing touches on our exciting 170 checkout challenge! 
                Check back soon for details on how to enter and win a set of Luke Littler darts.
              </p>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                In the meantime, join our waitlist to be notified when the competition launches!
              </p>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="comp-challenge" style={{ opacity: 0.7, pointerEvents: 'none' }}>
            <h2>170 Checkout Challenge</h2>
            <div className="challenge-text">
              Video yourself doing a 170 check out and win one Luke Littler darts.
            </div>
            <div className="prize-info">
              <h3>Prize</h3>
              <p>Win a set of Luke Littler darts - no cheating!</p>
            </div>
          </div>

          {/* Rules Section */}
          <div className="comp-rules" style={{ opacity: 0.7, pointerEvents: 'none' }}>
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
          <div className="services-section" style={{ opacity: 0.7, pointerEvents: 'none' }}>
            <h2>How to Enter</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">1</div>
                <h3>Record Your Video</h3>
                <p>Film yourself completing a 170 checkout. Make sure the video is clear and shows all three darts.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">2</div>
                <h3>Check Requirements</h3>
                <p>Ensure your video meets all the competition rules - continuous shot, clear view of board, and your identity visible.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">3</div>
                <h3>Submit Entry</h3>
                <p>Use the contact form below to submit your video. Include your name, email, and a link to your video (YouTube, Google Drive, etc.).</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">4</div>
                <h3>Win Prizes</h3>
                <p>Winners will be contacted via email. Prizes will be shipped to the address you provide.</p>
              </div>
            </div>
          </div>

          {/* Submit Entry CTA */}
          <div className="comp-submit" style={{ opacity: 0.7, pointerEvents: 'none' }}>
            <div className="comp-submit-button" style={{ cursor: 'not-allowed' }}>
              Submit Your Entry
            </div>
            <p style={{ marginTop: '1.5rem', color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
              Use the contact form on our Join Us page to submit your video entry
            </p>
          </div>

          {/* Prize Details */}
          <div className="request-info-section" style={{ opacity: 0.7, pointerEvents: 'none' }}>
            <div className="request-info-card">
              <h2>About the Prize</h2>
              <p>
                Win an authentic set of Luke Littler darts! These professional-grade darts are used by one of the world&apos;s top players.
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>Professional Quality</strong>
                  <p>Authentic Luke Littler signature darts</p>
                </div>
                <div className="request-benefit">
                  <strong>Limited Edition</strong>
                  <p>Exclusive prize for competition winners</p>
                </div>
                <div className="request-benefit">
                  <strong>Free Shipping</strong>
                  <p>Prize shipped directly to your address</p>
                </div>
                <div className="request-benefit">
                  <strong>Verified Authenticity</strong>
                  <p>Official Luke Littler branded darts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="services-section" style={{ opacity: 0.7, pointerEvents: 'none' }}>
            <h2>Tips for Success</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">1</div>
                <h3>Perfect Your Technique</h3>
                <p>Practice the 170 checkout: T20 (60), T20 (60), Bullseye (50). Focus on consistency and accuracy.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">2</div>
                <h3>Good Video Quality</h3>
                <p>Use good lighting, stable camera position, and ensure the dartboard and your throws are clearly visible.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">3</div>
                <h3>One Continuous Shot</h3>
                <p>Record in one take - no cuts or edits. This proves authenticity and makes your entry valid.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">4</div>
                <h3>Show Your Personality</h3>
                <p>While following the rules, let your personality shine through. Creative entries stand out!</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

