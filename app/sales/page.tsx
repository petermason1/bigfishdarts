'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SalesPage() {
  const [navOpen, setNavOpen] = useState(false)
  
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  
  const closeNav = () => {
    setNavOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.jpeg" alt="Big Fish Darts" className="logo-image" />
            <span className="logo-text">Big Fish Darts</span>
            <span className="nav-bell">🔔</span>
          </div>
          <button className={`nav-toggle ${navOpen ? 'active' : ''}`} onClick={toggleNav} aria-label="Toggle navigation">
            <span className="bullseye-icon">🎯</span>
          </button>
          <ul className={`nav-menu ${navOpen ? 'active' : ''}`}>
            <li><Link href="/" className="nav-link" onClick={closeNav}>Join Us</Link></li>
            <li><Link href="/demo" className="nav-link" onClick={closeNav}>Demo</Link></li>
            <li><Link href="/sales" className="nav-link active" onClick={closeNav}>Pricing</Link></li>
            <li><Link href="/comp" className="nav-link" onClick={closeNav}>Competition</Link></li>
            <li><Link href="/coaching" className="nav-link" onClick={closeNav}>Coaching</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <header className="signup-hero">
          <h1 className="signup-title">💰 BigFish Darts Pricing</h1>
          <p className="signup-subtitle">Flexible packages tailored to your event needs</p>
        </header>

        <main>
          {/* Pricing Packages Section */}
          <div className="services-section">
            <h2>Event Packages</h2>
            <p className="services-intro">
              Choose the perfect package for your event. All packages are customizable to meet your specific requirements.
            </p>
            
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Starter Package</h3>
                  <div className="pricing-price">
                    <span className="price-amount">From £299</span>
                    <span className="price-period">per event</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Software setup & configuration</li>
                    <li>✓ Basic scoring system</li>
                    <li>✓ Event hosting support</li>
                    <li>✓ Social media promotion</li>
                    <li>✓ Basic poster design</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Quote
                </Link>
              </div>

              <div className="pricing-card featured">
                <div className="pricing-badge">Most Popular</div>
                <div className="pricing-header">
                  <h3>Complete Package</h3>
                  <div className="pricing-price">
                    <span className="price-amount">From £599</span>
                    <span className="price-period">per event</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Everything in Starter</li>
                    <li>✓ Professional MC/Compare</li>
                    <li>✓ Video screens & displays</li>
                    <li>✓ Tony off Bullseye commentary</li>
                    <li>✓ Full social media management</li>
                    <li>✓ Custom event branding</li>
                    <li>✓ Live scoring & leaderboards</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Quote
                </Link>
              </div>

              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Premium Package</h3>
                  <div className="pricing-price">
                    <span className="price-amount">From £999</span>
                    <span className="price-period">per event</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Everything in Complete</li>
                    <li>✓ Catering & bar service</li>
                    <li>✓ Alcohol for unlicensed venues</li>
                    <li>✓ Professional photography</li>
                    <li>✓ Custom prize packages</li>
                    <li>✓ Themed event decor</li>
                    <li>✓ Multi-board support</li>
                    <li>✓ Priority support</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button">
                  Get Quote
                </Link>
              </div>

              <div className="pricing-card featured" style={{ borderColor: 'var(--union-red)', borderWidth: '4px', background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.15) 0%, rgba(0, 48, 130, 0.15) 100%)' }}>
                <div className="pricing-badge" style={{ background: 'var(--union-red)', fontSize: '1rem', padding: '0.6rem 2rem' }}>🌟 Exclusive</div>
                <div className="pricing-header">
                  <h3>Legends Package</h3>
                  <div className="pricing-price">
                    <span className="price-amount">POA</span>
                    <span className="price-period">per event</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>✓ Everything in Premium</li>
                    <li>✓ <strong>Retired Darts Legend Appearance</strong></li>
                    <li>✓ Meet & greet with the legend</li>
                    <li>✓ Photo opportunities</li>
                    <li>✓ Exhibition matches</li>
                    <li>✓ Autograph sessions</li>
                    <li>✓ Q&A session</li>
                    <li>✓ Exclusive memorabilia</li>
                    <li>✓ VIP experience</li>
                  </ul>
                </div>
                <Link href="/" className="pricing-button" style={{ background: 'var(--union-red)', fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
                  Contact for Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Legends Package Highlight */}
          <div className="request-info-section">
            <div className="request-info-card" style={{ background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.2) 0%, rgba(0, 48, 130, 0.2) 100%)', borderColor: 'var(--union-red)', borderWidth: '3px' }}>
              <h2 style={{ color: 'var(--union-white)', fontSize: '2.5rem', marginBottom: '1rem' }}>🌟 Legends Package - Exclusive Experience</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Take your event to the next level with an exclusive appearance from a retired darts legend. This once-in-a-lifetime experience includes meet & greets, exhibition matches, and unforgettable memories.
              </p>
              <div className="request-benefits">
                <div className="request-benefit" style={{ background: 'rgba(220, 20, 60, 0.2)', borderLeftColor: 'var(--union-red)' }}>
                  <strong>🏆 Darts Legend</strong>
                  <p>Appearance from a retired professional darts player</p>
                </div>
                <div className="request-benefit" style={{ background: 'rgba(220, 20, 60, 0.2)', borderLeftColor: 'var(--union-red)' }}>
                  <strong>📸 Photo Opportunities</strong>
                  <p>Professional photos with the legend</p>
                </div>
                <div className="request-benefit" style={{ background: 'rgba(220, 20, 60, 0.2)', borderLeftColor: 'var(--union-red)' }}>
                  <strong>🎯 Exhibition Matches</strong>
                  <p>Watch the legend play live</p>
                </div>
                <div className="request-benefit" style={{ background: 'rgba(220, 20, 60, 0.2)', borderLeftColor: 'var(--union-red)' }}>
                  <strong>✍️ Autographs</strong>
                  <p>Signed memorabilia and autograph sessions</p>
                </div>
              </div>
              <p style={{ marginTop: '2rem', fontSize: '1.1rem', fontStyle: 'italic', opacity: 0.9 }}>
                Available legends subject to availability. Contact us to discuss which legend would be perfect for your event.
              </p>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.2rem', padding: '1.3rem 3.5rem', background: 'var(--union-red)' }}>
                Inquire About Legends Package
              </Link>
            </div>
          </div>

          {/* Add-On Services */}
          <div className="services-section">
            <h2>Add-On Services</h2>
            <p className="services-intro">
              Enhance your event with these optional add-ons. Mix and match to create your perfect package.
            </p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📸</div>
                <h3>Photography & Videography</h3>
                <p>Professional event coverage to capture all the action.</p>
                <ul>
                  <li>Event photography</li>
                  <li>Video highlights reel</li>
                  <li>Social media content</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🎁</div>
                <h3>Prize Packages</h3>
                <p>Custom prize packages to motivate your players.</p>
                <ul>
                  <li>Custom trophy design</li>
                  <li>Gift vouchers</li>
                  <li>Branded merchandise</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>Event Theming</h3>
                <p>Transform your venue with custom theming.</p>
                <ul>
                  <li>Custom decor</li>
                  <li>Branded materials</li>
                  <li>Lighting & atmosphere</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Analytics & Reporting</h3>
                <p>Detailed insights into your event&apos;s performance.</p>
                <ul>
                  <li>Player statistics</li>
                  <li>Engagement metrics</li>
                  <li>Post-event report</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Quote CTA */}
          <div className="request-info-section">
            <div className="request-info-card">
              <h2>Need a Custom Quote?</h2>
              <p>
                Every event is unique. Contact us to discuss your specific requirements and we&apos;ll create a tailored package that fits your budget and needs.
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>💬 Free Consultation</strong>
                  <p>Discuss your event requirements</p>
                </div>
                <div className="request-benefit">
                  <strong>📋 Custom Packages</strong>
                  <p>Tailored to your venue and budget</p>
                </div>
                <div className="request-benefit">
                  <strong>🎯 Flexible Options</strong>
                  <p>Mix and match services as needed</p>
                </div>
                <div className="request-benefit">
                  <strong>⚡ Quick Response</strong>
                  <p>Fast turnaround on quotes and inquiries</p>
                </div>
              </div>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Request Custom Quote
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="services-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What&apos;s included in the base price?</h3>
                <p>All packages include software setup, basic scoring, and event hosting support. Higher tiers add more services like MC, video screens, and catering.</p>
              </div>
              <div className="faq-item">
                <h3>Can I customize my package?</h3>
                <p>Absolutely! All packages are flexible. Contact us to discuss your specific needs and we&apos;ll create a custom quote.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide equipment?</h3>
                <p>We provide all software and technical setup. Dartboards and physical equipment are typically provided by the venue, but we can arrange rentals if needed.</p>
              </div>
              <div className="faq-item">
                <h3>What about alcohol licensing?</h3>
                <p>We can arrange licensed bar services for unlicensed premises where permitted. This is included in our Premium package or available as an add-on.</p>
              </div>
              <div className="faq-item">
                <h3>How far in advance should I book?</h3>
                <p>We recommend booking at least 2-4 weeks in advance to ensure availability, though we can accommodate shorter notice when possible.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer discounts for multiple events?</h3>
                <p>Yes! We offer special rates for recurring events, corporate packages, and multi-event bookings. Contact us for details.</p>
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

