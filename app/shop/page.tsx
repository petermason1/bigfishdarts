'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <header className="signup-hero">
          <h1 className="signup-title">Big Fish Darts Shop</h1>
          <p className="signup-subtitle">Premium darts equipment and accessories</p>
          <div className="coming-soon-badge">Coming Soon</div>
        </header>

        <main>
          {/* Coming Soon Notice */}
          <div className="request-info-section" style={{ marginBottom: '3rem' }}>
            <div className="request-info-card" style={{ background: 'rgba(220, 20, 60, 0.2)', borderColor: 'var(--union-red)', borderWidth: '3px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--union-white)' }}>Shop Coming Soon</h2>
              <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We&apos;re putting the finishing touches on our online shop! 
                Soon you&apos;ll be able to browse and purchase premium darts equipment, accessories, and exclusive Big Fish Darts merchandise.
              </p>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
                Join our waitlist to be notified when the shop launches and get exclusive early access offers!
              </p>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: '2rem', fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Preview of What's Coming */}
          <div className="services-section">
            <h2>What You&apos;ll Find in Our Shop</h2>
            <p className="services-intro">
              We&apos;re curating the best selection of darts equipment and accessories for players of all levels.
            </p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3>Professional Darts</h3>
                <p>High-quality darts from top manufacturers including signature models from professional players.</p>
                <ul>
                  <li>Steel tip darts</li>
                  <li>Soft tip darts</li>
                  <li>Professional player signatures</li>
                  <li>Custom weight options</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>Dart Accessories</h3>
                <p>Everything you need to enhance your game and protect your equipment.</p>
                <ul>
                  <li>Flight protectors</li>
                  <li>Dart cases & wallets</li>
                  <li>Sharpening stones</li>
                  <li>O-rings & springs</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">👕</div>
                <h3>Merchandise</h3>
                <p>Show your support for Big Fish Darts with our exclusive branded merchandise.</p>
                <ul>
                  <li>T-shirts & hoodies</li>
                  <li>Hats & caps</li>
                  <li>Bags & accessories</li>
                  <li>Limited edition items</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🎁</div>
                <h3>Gift Sets</h3>
                <p>Perfect gift options for darts enthusiasts, from beginners to professionals.</p>
                <ul>
                  <li>Starter sets</li>
                  <li>Professional sets</li>
                  <li>Custom gift boxes</li>
                  <li>Gift vouchers</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Maintenance & Care</h3>
                <p>Keep your darts in perfect condition with our maintenance products.</p>
                <ul>
                  <li>Cleaning kits</li>
                  <li>Storage solutions</li>
                  <li>Repair tools</li>
                  <li>Care guides</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">⭐</div>
                <h3>Exclusive Items</h3>
                <p>Special edition items and exclusive Big Fish Darts products you won&apos;t find anywhere else.</p>
                <ul>
                  <li>Limited editions</li>
                  <li>Tournament exclusives</li>
                  <li>Autographed items</li>
                  <li>Collector&apos;s pieces</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="request-info-section">
            <div className="request-info-card">
              <h2>Shop Features</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                When our shop launches, you&apos;ll enjoy:
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>Fast & Secure Checkout</strong>
                  <p>Safe payment processing with multiple payment options</p>
                </div>
                <div className="request-benefit">
                  <strong>Free Shipping</strong>
                  <p>Free shipping on orders over £50 (UK only)</p>
                </div>
                <div className="request-benefit">
                  <strong>Easy Returns</strong>
                  <p>30-day return policy for your peace of mind</p>
                </div>
                <div className="request-benefit">
                  <strong>Expert Advice</strong>
                  <p>Get recommendations from our darts experts</p>
                </div>
                <div className="request-benefit">
                  <strong>Loyalty Rewards</strong>
                  <p>Earn points with every purchase and redeem for discounts</p>
                </div>
                <div className="request-benefit">
                  <strong>Gift Wrapping</strong>
                  <p>Free gift wrapping available for special occasions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Pre-Orders */}
          <div className="services-section" style={{ marginTop: '3rem' }}>
            <div className="service-card" style={{ background: 'rgba(212, 175, 55, 0.2)', borderColor: 'var(--accent-gold)', borderWidth: '3px', maxWidth: '800px', margin: '0 auto' }}>
              <div className="service-icon" style={{ fontSize: '3rem' }}>📧</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Interested in Pre-Orders?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Have your eye on something specific? Contact us and we&apos;ll let you know when it becomes available or help you with a pre-order.
              </p>
              <Link href="/" className="signup-button" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
