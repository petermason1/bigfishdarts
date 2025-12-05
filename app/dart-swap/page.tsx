'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface DartListing {
  id: number
  title: string
  description: string
  condition: string
  weight: string
  type: string
  owner: string
  lookingFor: string
  datePosted: string
}

export default function DartSwapPage() {
  const [listings, setListings] = useState<DartListing[]>([
    {
      id: 1,
      title: 'Red Dragon Razor Edge 24g',
      description: 'Excellent condition, barely used. Comes with original case and flights.',
      condition: 'Like New',
      weight: '24g',
      type: 'Steel Tip',
      owner: 'DartPlayer123',
      lookingFor: 'Looking for 22g soft tip darts',
      datePosted: '2 days ago',
    },
    {
      id: 2,
      title: 'Winmau Navigator 3 26g',
      description: 'Great darts, just want to try something different. Some wear but fully functional.',
      condition: 'Good',
      weight: '26g',
      type: 'Steel Tip',
      owner: 'ThrowMaster',
      lookingFor: 'Open to offers or 24g darts',
      datePosted: '5 days ago',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    condition: 'Like New',
    weight: '',
    type: 'Steel Tip',
    lookingFor: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to a backend
    const newListing: DartListing = {
      id: listings.length + 1,
      ...formData,
      owner: 'You',
      datePosted: 'Just now',
    }
    setListings([newListing, ...listings])
    setFormData({
      title: '',
      description: '',
      condition: 'Like New',
      weight: '',
      type: 'Steel Tip',
      lookingFor: '',
    })
    setShowForm(false)
    alert('Your listing has been posted! (This is a demo - listings are not saved)')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <header className="signup-hero">
          <h1 className="signup-title">Dart Swap</h1>
          <p className="signup-subtitle">Trade, swap, or sell your darts with other players</p>
        </header>

        <main style={{ padding: '2rem 0' }}>
          {/* Info Section */}
          <div className="request-info-section" style={{ marginBottom: '3rem' }}>
            <div className="request-info-card">
              <h2>How Dart Swap Works</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                Connect with other darts players to trade, swap, or sell your darts. Find the perfect set or give your old darts a new home!
              </p>
              <div className="request-benefits">
                <div className="request-benefit">
                  <strong>Post Your Darts</strong>
                  <p>List your darts with photos, condition, and what you&apos;re looking for</p>
                </div>
                <div className="request-benefit">
                  <strong>Browse Listings</strong>
                  <p>Search through available darts from other players in the community</p>
                </div>
                <div className="request-benefit">
                  <strong>Connect & Trade</strong>
                  <p>Message other players to arrange swaps, trades, or purchases</p>
                </div>
                <div className="request-benefit">
                  <strong>Safe Trading</strong>
                  <p>Our community guidelines help ensure safe and fair transactions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Post Listing Button */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <button
              onClick={() => setShowForm(!showForm)}
              className="signup-button"
              style={{ 
                fontSize: '1.2rem',
                padding: '1rem 3rem',
                marginBottom: '2rem',
              }}
            >
              {showForm ? 'Cancel' : '+ Post Your Darts'}
            </button>
          </div>

          {/* Post Listing Form */}
          {showForm && (
            <div className="signup-section" style={{ marginBottom: '3rem' }}>
              <div className="signup-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2>Post Your Dart Listing</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      placeholder="e.g., Red Dragon Razor Edge 24g"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      placeholder="Describe the condition, what's included, etc."
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="condition">Condition *</label>
                      <select
                        id="condition"
                        name="condition"
                        required
                        value={formData.condition}
                        onChange={handleChange}
                      >
                        <option value="Like New">Like New</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="weight">Weight *</label>
                      <input
                        type="text"
                        id="weight"
                        name="weight"
                        required
                        placeholder="e.g., 24g"
                        value={formData.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="type">Type *</label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                      >
                        <option value="Steel Tip">Steel Tip</option>
                        <option value="Soft Tip">Soft Tip</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="lookingFor">Looking For</label>
                      <input
                        type="text"
                        id="lookingFor"
                        name="lookingFor"
                        placeholder="What are you looking for?"
                        value={formData.lookingFor}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button type="submit" className="signup-button" style={{ width: '100%', marginTop: '1rem' }}>
                    Post Listing
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Listings */}
          <div className="services-section">
            <h2>Available Listings</h2>
            <p className="services-intro">
              Browse darts available for swap, trade, or purchase from other players.
            </p>

            {listings.length === 0 ? (
              <div className="signup-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                  No listings yet. Be the first to post!
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                {listings.map((listing) => (
                  <div
                    key={listing.id}
                    className="signup-card"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '2rem',
                      alignItems: 'start',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{listing.title}</h3>
                        <span style={{ 
                          fontSize: '0.9rem',
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(212, 175, 55, 0.3)',
                          borderRadius: '5px',
                          color: 'var(--accent-gold)',
                        }}>
                          {listing.condition}
                        </span>
                      </div>
                      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{listing.description}</p>
                      <div style={{ 
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                      }}>
                        <span style={{ 
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(0, 48, 130, 0.3)',
                          borderRadius: '5px',
                        }}>
                          Weight: {listing.weight}
                        </span>
                        <span style={{ 
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(0, 48, 130, 0.3)',
                          borderRadius: '5px',
                        }}>
                          Type: {listing.type}
                        </span>
                      </div>
                      {listing.lookingFor && (
                        <p style={{ 
                          fontSize: '0.9rem',
                          color: 'var(--accent-gold)',
                          fontStyle: 'italic',
                          marginBottom: '0.5rem',
                        }}>
                          💡 {listing.lookingFor}
                        </p>
                      )}
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Posted by <strong>{listing.owner}</strong> • {listing.datePosted}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <button
                        className="signup-button"
                        style={{
                          fontSize: '1rem',
                          padding: '0.8rem 1.5rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Contact
                      </button>
                      <button
                        style={{
                          fontSize: '1rem',
                          padding: '0.8rem 1.5rem',
                          background: 'rgba(255,255,255,0.1)',
                          border: '2px solid var(--primary-blue)',
                          color: 'var(--text-light)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guidelines */}
          <div className="request-info-section" style={{ marginTop: '3rem' }}>
            <div className="request-info-card">
              <h2>Trading Guidelines</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Be Honest:</strong> Accurately describe the condition of your darts and include clear photos when possible.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Communicate Clearly:</strong> Respond promptly to messages and be clear about what you&apos;re offering or looking for.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Safe Trading:</strong> Meet in public places for in-person swaps, or use secure payment methods for purchases.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Be Respectful:</strong> Treat other traders with respect and follow through on agreed trades.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Report Issues:</strong> If you encounter any problems, report them to our support team.
                  </li>
                </ul>
                <div style={{ 
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(220, 20, 60, 0.2)',
                  borderRadius: '10px',
                  border: '2px solid var(--primary-red)',
                }}>
                  <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    ⚠️ Important Note
                  </p>
                  <p style={{ fontSize: '0.95rem' }}>
                    Big Fish Darts is not responsible for transactions between users. All trades and sales are conducted at your own risk. 
                    We recommend using secure payment methods and meeting in safe, public locations for in-person swaps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
