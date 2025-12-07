'use client'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <header className="signup-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h1 className="signup-title" style={{ fontSize: '6rem', marginBottom: '1rem', fontWeight: 800 }}>
              404
            </h1>
            <h2 className="signup-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Page Not Found
            </h2>
            <p className="signup-subtitle" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <a href="/" className="signup-button" style={{ 
              display: 'inline-block', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '1rem 2.5rem'
            }}>
              Go Home
            </a>
          </div>
        </header>
      </div>

      <Footer />
    </>
  )
}
