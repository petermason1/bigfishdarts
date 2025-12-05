'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DartSwapPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <header className="signup-hero">
          <h1 className="signup-title">Dart Swap</h1>
          <p className="signup-subtitle">Trade, swap, or sell your darts with other players</p>
          <div className="coming-soon-badge">Coming Soon</div>
        </header>

        <main style={{ padding: '2rem 0' }}>
          {/* Coming Soon Notice */}
          <div className="request-info-section" style={{ marginBottom: '3rem' }}>
            <div className="request-info-card" style={{ background: 'rgba(220, 20, 60, 0.2)', borderColor: 'var(--union-red)', borderWidth: '3px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--union-white)' }}>Dart Swap Coming Soon</h2>
              <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We&apos;re building an exciting platform where you can trade, swap, or sell your darts with other players in the community. 
                Connect with fellow darts enthusiasts and find the perfect set for your game.
              </p>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
                Join our waitlist to be notified when Dart Swap launches and get early access to the trading platform!
              </p>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Preview of What's Coming */}
          <div className="services-section">
            <h2>What You&apos;ll Be Able to Do</h2>
            <p className="services-intro">
              Dart Swap will make it easy to connect with other players and find the perfect darts for your game.
            </p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📝</div>
                <h3>Post Your Darts</h3>
                <p>List your darts with photos, condition details, and what you&apos;re looking for in return.</p>
                <ul>
                  <li>Easy listing creation</li>
                  <li>Photo uploads</li>
                  <li>Condition descriptions</li>
                  <li>Trade preferences</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🔍</div>
                <h3>Browse Listings</h3>
                <p>Search through available darts from other players in the community.</p>
                <ul>
                  <li>Filter by weight and type</li>
                  <li>Search by condition</li>
                  <li>View player ratings</li>
                  <li>Save favorites</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">💬</div>
                <h3>Connect & Trade</h3>
                <p>Message other players to arrange swaps, trades, or purchases.</p>
                <ul>
                  <li>In-app messaging</li>
                  <li>Trade negotiations</li>
                  <li>Safe transactions</li>
                  <li>Community guidelines</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">⭐</div>
                <h3>Trust & Safety</h3>
                <p>Built-in features to ensure safe and fair trading experiences.</p>
                <ul>
                  <li>Player ratings</li>
                  <li>Transaction history</li>
                  <li>Dispute resolution</li>
                  <li>Community moderation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="request-info-section" style={{ marginTop: '3rem' }}>
            <div className="request-info-card">
              <h2>Platform Features</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                When Dart Swap launches, you&apos;ll enjoy:
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>Easy Listings</strong>
                  <p>Simple interface to post your darts with all the details buyers need</p>
                </div>
                <div className="request-benefit">
                  <strong>Smart Search</strong>
                  <p>Find exactly what you&apos;re looking for with advanced filters</p>
                </div>
                <div className="request-benefit">
                  <strong>Secure Messaging</strong>
                  <p>Communicate safely with other traders through the platform</p>
                </div>
                <div className="request-benefit">
                  <strong>Community Ratings</strong>
                  <p>Build trust with ratings and reviews from successful trades</p>
                </div>
                <div className="request-benefit">
                  <strong>Trade History</strong>
                  <p>Keep track of all your swaps and trades in one place</p>
                </div>
                <div className="request-benefit">
                  <strong>Safety First</strong>
                  <p>Guidelines and moderation to ensure safe trading for everyone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Early Access */}
          <div className="services-section" style={{ marginTop: '3rem' }}>
            <div className="service-card" style={{ background: 'rgba(212, 175, 55, 0.2)', borderColor: 'var(--accent-gold)', borderWidth: '3px', maxWidth: '800px', margin: '0 auto' }}>
              <div className="service-icon" style={{ fontSize: '3rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Want Early Access?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Be among the first to use Dart Swap when it launches. Join our waitlist to get notified and receive early access.
              </p>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Join Waitlist
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
