'use client'

import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="container">
        <main style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '60vh',
          textAlign: 'center',
          padding: '4rem 2rem'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: 'var(--union-red)'
          }}>
            Under Development
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#666',
            maxWidth: '600px'
          }}>
            We&apos;re working hard to bring you something amazing. Check back soon!
          </p>
        </main>
      </div>

      <Footer />
    </>
  )
}

