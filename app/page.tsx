'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  
  // Check if form was submitted (redirected back from FormSubmit)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('submitted') === 'true') {
        setSubmitted(true)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    // FormSubmit.co handles the submission automatically
    // Form will submit to FormSubmit.co which sends email to Info.bigfishdarts@gmail.com
    // No need to preventDefault - let the form submit naturally
    // FormSubmit will redirect back to our page with ?submitted=true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.jpeg" alt="BigFish Darts" className="logo-image" />
            <span className="logo-text">BigFish Darts</span>
          </div>
          <ul className="nav-menu">
            <li><a href="/" className="nav-link active">Join Us</a></li>
            <li><Link href="/demo" className="nav-link">Demo</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <header className="signup-hero">
          <div className="hero-logo-container">
            <img src="/logo.jpeg" alt="BigFish Darts Logo" className="hero-logo" />
          </div>
          <h1 className="signup-title">The Future of Darts is Coming</h1>
          <p className="signup-subtitle">
            Revolutionary darts gaming experience for corporate events, pub nights, and competitive play
          </p>
          <div className="coming-soon-badge">Coming Soon</div>
        </header>

        <main>
          {/* Sign Up Form */}
          <div className="signup-section">
            <div className="signup-card">
              <h2>Be the First to Know</h2>
              <p className="signup-description">
                We&apos;re building something special. Join our early access list to be notified when we launch 
                and get exclusive updates about our revolutionary darts platform.
              </p>
              
              {!submitted ? (
                <form 
                  id="signupForm" 
                  className="signup-form" 
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/Info.bigfishdarts@gmail.com"
                  method="POST"
                >
                  {/* FormSubmit.co configuration */}
                  <input type="hidden" name="_subject" value="New BigFish Darts Sign-up" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?submitted=true' : ''} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_format" value="plain" />
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="interest">I&apos;m interested in: *</label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="">Select an option...</option>
                      <option value="corporate">Corporate Events & Team Building</option>
                      <option value="pub">Pub Nights & Social Events</option>
                      <option value="competitions">Darts Competitions & Tournaments</option>
                      <option value="investment">Investment & Partnership Opportunities</option>
                      <option value="all">All of the above</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Tell us more (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What excites you about this? Any specific use cases?"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <button type="submit" className="signup-button">Join the Waitlist</button>
                </form>
              ) : (
                <div id="signupSuccess" className="signup-success">
                  <h3>✅ Thank You!</h3>
                  <p>We&apos;ve received your interest. We&apos;ll be in touch soon with exciting updates!</p>
                </div>
              )}
            </div>
          </div>

          {/* Features Preview */}
          <div className="features-preview">
            <h2>What We&apos;re Building</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🏢</div>
                <h3>Corporate Events</h3>
                <p>Perfect for team building, client entertainment, and company events. Bring the excitement of darts to your next corporate gathering.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🍺</div>
                <h3>Pub Nights</h3>
                <p>Transform your pub night into an interactive experience. Engage customers with competitive darts gaming and social features.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Competitions</h3>
                <p>Organize and participate in darts competitions and tournaments. Track scores, rankings, and create memorable competitive experiences.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Innovation</h3>
                <p>Cutting-edge technology meets traditional darts. We&apos;re creating something that hasn&apos;t been done before.</p>
              </div>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="partnership-section">
            <div className="partnership-card">
              <h2>Looking for Partners & Investors</h2>
              <p>
                We&apos;re seeking strategic partners and investors who share our vision for revolutionizing the darts experience. 
                Whether you&apos;re interested in corporate partnerships, venue collaborations, or investment opportunities, 
                we&apos;d love to hear from you.
              </p>
              <div className="partnership-benefits">
                <div className="benefit-item">
                  <strong>💰 Investment Opportunities</strong>
                  <p>Join us in building the future of interactive darts gaming</p>
                </div>
                <div className="benefit-item">
                  <strong>🤝 Corporate Partnerships</strong>
                  <p>Partner with us for corporate events and team building solutions</p>
                </div>
                <div className="benefit-item">
                  <strong>🏪 Venue Collaborations</strong>
                  <p>Bring BigFish Darts to your pub, bar, or entertainment venue</p>
                </div>
              </div>
              <p className="contact-note">
                <strong>Contact us:</strong> <a href="mailto:Info.bigfishdarts@gmail.com" id="contactEmail" style={{ color: 'var(--union-red)', textDecoration: 'none' }}>Info.bigfishdarts@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Why Join Section */}
          <div className="why-join-section">
            <h2>Why Join Early?</h2>
            <div className="benefits-list">
              <div className="benefit-box">
                <span className="benefit-number">1</span>
                <div>
                  <h3>Early Access</h3>
                  <p>Be among the first to experience our revolutionary platform</p>
                </div>
              </div>
              <div className="benefit-box">
                <span className="benefit-number">2</span>
                <div>
                  <h3>Exclusive Updates</h3>
                  <p>Get insider information about features, launch dates, and special events</p>
                </div>
              </div>
              <div className="benefit-box">
                <span className="benefit-number">3</span>
                <div>
                  <h3>Shape the Product</h3>
                  <p>Your feedback will help shape the future of BigFish Darts</p>
                </div>
              </div>
              <div className="benefit-box">
                <span className="benefit-number">4</span>
                <div>
                  <h3>Special Offers</h3>
                  <p>Early supporters may receive special pricing and exclusive benefits</p>
                </div>
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

