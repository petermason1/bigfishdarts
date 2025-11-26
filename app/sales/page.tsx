'use client'

import Link from 'next/link'

export default function SalesPage() {
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
            <li><Link href="/sales" className="nav-link active">Pricing</Link></li>
            <li><Link href="/comp" className="nav-link">Competition</Link></li>
            <li><Link href="/coaching" className="nav-link">Coaching</Link></li>
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

