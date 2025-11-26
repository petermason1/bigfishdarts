'use client'

import Link from 'next/link'

export default function DemoPage() {
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
            <li><Link href="/demo" className="nav-link active">Demo</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <header className="signup-hero">
          <h1 className="signup-title">🎯 BigFish Darts Demo</h1>
          <p className="signup-subtitle">Preview of our revolutionary darts gaming platform</p>
          <div className="coming-soon-badge" style={{ background: 'var(--union-blue)' }}>Coming Soon</div>
        </header>

        <main>
          {/* Demo Preview Section */}
          <div className="demo-preview-section">
            <div className="demo-card">
              <h2>Interactive Dart Board</h2>
              <p className="demo-description">
                Experience our cutting-edge dart board interface with real-time scoring and video integration.
              </p>
              
              <div className="demo-board-container">
                <div className="dartboard classic-board demo-board">
                  <div className="board-center">
                    <div className="bullseye">BULL</div>
                  </div>
                  <div className="board-rings">
                    <div className="ring triple"></div>
                    <div className="ring double"></div>
                  </div>
                  <div className="board-numbers">
                    <span>20</span><span>1</span><span>18</span><span>4</span><span>13</span>
                    <span>6</span><span>10</span><span>15</span><span>2</span><span>17</span>
                    <span>3</span><span>19</span><span>7</span><span>16</span><span>8</span>
                    <span>11</span><span>14</span><span>9</span><span>12</span><span>5</span>
                  </div>
                </div>
              </div>

              <div className="demo-features">
                <div className="demo-feature-item">
                  <span className="demo-icon">📹</span>
                  <div>
                    <h3>Live Camera Integration</h3>
                    <p>View the dartboard through your phone&apos;s camera in real-time</p>
                  </div>
                </div>
                <div className="demo-feature-item">
                  <span className="demo-icon">🎤</span>
                  <div>
                    <h3>Voice Communication</h3>
                    <p>Connect with other players via WiFi for real-time voice chat</p>
                  </div>
                </div>
                <div className="demo-feature-item">
                  <span className="demo-icon">📊</span>
                  <div>
                    <h3>Real-time Scoring</h3>
                    <p>Automatic score tracking and leaderboards</p>
                  </div>
                </div>
                <div className="demo-feature-item">
                  <span className="demo-icon">🏆</span>
                  <div>
                    <h3>Competitions & Tournaments</h3>
                    <p>Organize and participate in darts competitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="use-cases-section">
            <h2>Perfect For</h2>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <div className="use-case-icon">🏢</div>
                <h3>Corporate Events</h3>
                <p>Team building activities, client entertainment, and company gatherings</p>
                <ul>
                  <li>Interactive team competitions</li>
                  <li>Score tracking and leaderboards</li>
                  <li>Custom branding options</li>
                </ul>
              </div>
              
              <div className="use-case-card">
                <div className="use-case-icon">🍺</div>
                <h3>Pub Nights</h3>
                <p>Transform your venue into an interactive gaming experience</p>
                <ul>
                  <li>Engage customers with competitions</li>
                  <li>Social features and sharing</li>
                  <li>Increase dwell time</li>
                </ul>
              </div>
              
              <div className="use-case-card">
                <div className="use-case-icon">🏆</div>
                <h3>Competitions</h3>
                <p>Organize professional darts tournaments and events</p>
                <ul>
                  <li>Tournament brackets</li>
                  <li>Live scoring and updates</li>
                  <li>Prize management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Complete Event Package Section */}
          <div className="services-section">
            <h2>Complete Event Package</h2>
            <p className="services-intro">
              We provide everything you need for a successful darts competition event. From setup to execution, we&apos;ve got you covered.
            </p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💻</div>
                <h3>Software Setup</h3>
                <p>We set up all the software ready for your competition. No technical knowledge needed - we handle everything from installation to configuration.</p>
                <ul>
                  <li>Complete software installation</li>
                  <li>System configuration</li>
                  <li>Testing and troubleshooting</li>
                  <li>On-site technical support</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Social Media & Marketing</h3>
                <p>We manage your social media and provide professional posters and advertisements to promote your event.</p>
                <ul>
                  <li>Social media management</li>
                  <li>Custom event posters</li>
                  <li>Digital advertisements</li>
                  <li>Event promotion materials</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🎤</div>
                <h3>Event Hosting</h3>
                <p>Run the event with our optional compare (MC) for the evening, or host it yourself - the choice is yours.</p>
                <ul>
                  <li>Professional MC/Compare service</li>
                  <li>Event hosting support</li>
                  <li>Self-hosting option available</li>
                  <li>Full event coordination</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📺</div>
                <h3>Video Screens</h3>
                <p>Video screens with Tony off Bullseye - professional presentation and live scoring display.</p>
                <ul>
                  <li>Large screen displays</li>
                  <li>Live score updates</li>
                  <li>Professional presentation</li>
                  <li>Real-time tournament brackets</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🍕</div>
                <h3>Catering & Bar Service</h3>
                <p>Catering and alcohol service available for unlicensed premises. We can arrange everything.</p>
                <ul>
                  <li>Full catering options</li>
                  <li>Bar service for unlicensed venues</li>
                  <li>Custom menu options</li>
                  <li>Licensed alcohol service</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">✨</div>
                <h3>Custom Solutions</h3>
                <p>We can meet most needs. Contact us to discuss your specific requirements and we&apos;ll create a tailored package.</p>
                <ul>
                  <li>Bespoke event packages</li>
                  <li>Flexible arrangements</li>
                  <li>Custom requirements welcome</li>
                  <li>Tailored to your venue</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Request Info CTA */}
          <div className="request-info-section">
            <div className="request-info-card">
              <h2>Request More Information</h2>
              <p>
                Interested in hosting a BigFish Darts event? We can meet most needs and create a package tailored to your venue and requirements.
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>📋 Custom Quotes</strong>
                  <p>Get a personalized quote for your event</p>
                </div>
                <div className="request-benefit">
                  <strong>💬 Consultation</strong>
                  <p>Discuss your specific needs and requirements</p>
                </div>
                <div className="request-benefit">
                  <strong>🎯 Flexible Packages</strong>
                  <p>Choose the services that work for you</p>
                </div>
              </div>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Request Information & Get Quote
              </Link>
            </div>
          </div>

          {/* Technical Preview */}
          <div className="technical-preview-section">
            <h2>Technical Features</h2>
            <div className="tech-features-grid">
              <div className="tech-feature">
                <h3>🌐 WebRTC Technology</h3>
                <p>Real-time peer-to-peer communication for voice and video</p>
              </div>
              <div className="tech-feature">
                <h3>📱 Mobile First</h3>
                <p>Optimized for phones and tablets with responsive design</p>
              </div>
              <div className="tech-feature">
                <h3>☁️ Cloud Infrastructure</h3>
                <p>Scalable backend for handling multiple concurrent games</p>
              </div>
              <div className="tech-feature">
                <h3>🔒 Secure & Private</h3>
                <p>End-to-end encryption for all communications</p>
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

