'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CoachingPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <header className="signup-hero">
          <h1 className="signup-title">Video Coaching & Throw Analysis</h1>
          <p className="signup-subtitle">Improve your game with professional video analysis and personalized coaching</p>
        </header>

        <main>
          {/* Main Feature Section */}
          <div className="demo-preview-section">
            <div className="demo-card">
              <h2>Professional Throw Analysis</h2>
              <p className="demo-description">
                Get expert analysis of your throwing technique with advanced video tracking and professional coaching feedback.
              </p>
              
              <div className="services-grid" style={{ marginTop: '2rem' }}>
                <div className="service-card">
                  <div className="service-icon">1</div>
                  <h3>Video Review</h3>
                  <p>Submit videos of your throws for detailed professional analysis.</p>
                  <ul>
                    <li>Multi-angle video capture</li>
                    <li>Slow-motion playback</li>
                    <li>Frame-by-frame analysis</li>
                    <li>Detailed written feedback</li>
                  </ul>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">2</div>
                  <h3>Flight Tracking</h3>
                  <p>Advanced technology tracks your dart&apos;s flight path to identify issues.</p>
                  <ul>
                    <li>3D flight path visualization</li>
                    <li>Velocity and trajectory analysis</li>
                    <li>Release point identification</li>
                    <li>Consistency measurement</li>
                  </ul>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">3</div>
                  <h3>Error Detection</h3>
                  <p>Identify what you&apos;re doing wrong with pinpoint accuracy.</p>
                  <ul>
                    <li>Stance and posture analysis</li>
                    <li>Grip and release issues</li>
                    <li>Follow-through problems</li>
                    <li>Timing and rhythm issues</li>
                  </ul>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">4</div>
                  <h3>Online Coaching</h3>
                  <p>One-on-one coaching sessions with professional darts coaches.</p>
                  <ul>
                    <li>Live video coaching sessions</li>
                    <li>Personalized training plans</li>
                    <li>Progress tracking</li>
                    <li>Ongoing support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="services-section">
            <h2>How It Works</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">1</div>
                <h3>Record Your Throws</h3>
                <p>Record videos of your throwing technique from multiple angles. We&apos;ll guide you on the best camera positions.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">2</div>
                <h3>Upload & Analysis</h3>
                <p>Upload your videos through our platform. Our AI and expert coaches analyze every aspect of your throw.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">3</div>
                <h3>Detailed Report</h3>
                <p>Receive a comprehensive analysis report with visual annotations, identified issues, and improvement recommendations.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">4</div>
                <h3>Coaching Session</h3>
                <p>Book a live coaching session to discuss your analysis, get personalized tips, and create a training plan.</p>
              </div>
            </div>
          </div>

          {/* Features Detail */}
          <div className="use-cases-section">
            <h2>What We Analyze</h2>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <div className="use-case-icon">1</div>
                <h3>Stance & Posture</h3>
                <p>Analyze your body position, balance, and alignment for optimal throwing position.</p>
                <ul>
                  <li>Foot placement</li>
                  <li>Body alignment</li>
                  <li>Balance and stability</li>
                  <li>Weight distribution</li>
                </ul>
              </div>
              
              <div className="use-case-card">
                <div className="use-case-icon">2</div>
                <h3>Grip & Release</h3>
                <p>Examine how you hold and release the dart for consistency and accuracy.</p>
                <ul>
                  <li>Grip pressure</li>
                  <li>Finger placement</li>
                  <li>Release timing</li>
                  <li>Follow-through</li>
                </ul>
              </div>
              
              <div className="use-case-card">
                <div className="use-case-icon">3</div>
                <h3>Throwing Motion</h3>
                <p>Break down your throwing motion to identify inefficiencies and improve power.</p>
                <ul>
                  <li>Arm movement</li>
                  <li>Elbow position</li>
                  <li>Wrist action</li>
                  <li>Motion fluidity</li>
                </ul>
              </div>
              
              <div className="use-case-card">
                <div className="use-case-icon">4</div>
                <h3>Flight Path</h3>
                <p>Track your dart&apos;s flight to understand trajectory and identify release issues.</p>
                <ul>
                  <li>Trajectory analysis</li>
                  <li>Velocity tracking</li>
                  <li>Spin detection</li>
                  <li>Consistency patterns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coaching Packages */}
          <div className="services-section">
            <h2>Coaching Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Basic Analysis</h3>
                  <div className="pricing-price">
                    <span className="price-amount">£49</span>
                    <span className="price-period">per session</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Video analysis (up to 5 throws)</li>
                    <li>✓ Written feedback report</li>
                    <li>✓ Flight path tracking</li>
                    <li>✓ Basic improvement tips</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Started
                </Link>
              </div>

              <div className="pricing-card featured">
                <div className="pricing-badge">Most Popular</div>
                <div className="pricing-header">
                  <h3>Complete Analysis</h3>
                  <div className="pricing-price">
                    <span className="price-amount">£99</span>
                    <span className="price-period">per session</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Everything in Basic</li>
                    <li>✓ Detailed video analysis (unlimited throws)</li>
                    <li>✓ 30-minute coaching call</li>
                    <li>✓ Personalized training plan</li>
                    <li>✓ Follow-up support</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Started
                </Link>
              </div>

              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Premium Coaching</h3>
                  <div className="pricing-price">
                    <span className="price-amount">£199</span>
                    <span className="price-period">per month</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Everything in Complete</li>
                    <li>✓ Weekly coaching sessions</li>
                    <li>✓ Continuous video analysis</li>
                    <li>✓ Progress tracking dashboard</li>
                    <li>✓ Priority support</li>
                    <li>✓ Custom training programs</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Started
                </Link>
              </div>

              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Elite Coaching</h3>
                  <div className="pricing-price">
                    <span className="price-amount">£399</span>
                    <span className="price-period">per month</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Everything in Premium</li>
                    <li>✓ Daily coaching check-ins</li>
                    <li>✓ Unlimited video analysis</li>
                    <li>✓ 1-on-1 live sessions (2x/week)</li>
                    <li>✓ Performance analytics</li>
                    <li>✓ Competition preparation</li>
                    <li>✓ Mental game coaching</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="request-info-section">
            <div className="request-info-card">
              <h2>Ready to Improve Your Game?</h2>
              <p>
                Start your journey to becoming a better darts player with professional video analysis and coaching.
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>Expert Analysis</strong>
                  <p>Professional coaches review your technique</p>
                </div>
                <div className="request-benefit">
                  <strong>Track Progress</strong>
                  <p>See measurable improvements over time</p>
                </div>
                <div className="request-benefit">
                  <strong>Personalized Tips</strong>
                  <p>Get advice tailored to your specific needs</p>
                </div>
                <div className="request-benefit">
                  <strong>Improve Faster</strong>
                  <p>Identify and fix issues quickly</p>
                </div>
              </div>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Book Your Analysis
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

