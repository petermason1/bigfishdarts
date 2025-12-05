'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('submitted') === 'true') {
        setSubmitted(true)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // FormSubmit.co handles the submission automatically
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How do I join a darts league?",
      answer: "Simply sign up with your email, choose your interest (player or venue), and we'll notify you when leagues are available in your area. No experience needed - we welcome players of all skill levels."
    },
    {
      question: "Can I host Big Fish Darts at my venue?",
      answer: "Absolutely! We provide complete event packages including software setup, marketing materials, and event hosting support. Contact us to book a demo and discuss your venue's needs."
    },
    {
      question: "What makes Big Fish Darts different?",
      answer: "We combine cutting-edge technology with traditional darts, offering real-time scoring, live tournaments, player profiles, and venue hosting solutions all in one platform. It's the future of competitive darts."
    },
    {
      question: "Is there a cost to join?",
      answer: "Early access is free! Join our waitlist to be among the first to experience Big Fish Darts. We'll keep you updated on launch dates and any future pricing."
    },
    {
      question: "What venues can host Big Fish Darts events?",
      answer: "Perfect for pubs, clubs, bars, corporate venues, and entertainment spaces. We work with venues of all sizes to create memorable darts experiences for their customers."
    }
  ]

  return (
    <>
      <Navbar />

      <div className="home-container">
        {/* Hero Section */}
        <section className="home-hero">
          <div className="home-hero-content">
            <h1 className="home-hero-title">
              Join competitive darts leagues, anywhere in the UK
            </h1>
            <p className="home-hero-subtitle">
              For players: Find tournaments, track live scores, and compete with others. 
              For venues: Host unforgettable darts events that engage customers and boost revenue.
            </p>
            <div className="home-hero-cta">
              <Link href="#signup" className="home-cta-primary">
                Join the Revolution
              </Link>
              <a href="#how-it-works" className="home-cta-secondary">
                How it works
              </a>
            </div>
            <p className="home-hero-reassurance">
              No experience needed • Perfect for pubs, clubs, and leagues
            </p>
          </div>
        </section>

        <main>
          {/* How It Works Section */}
          <section id="how-it-works" className="home-section">
            <div className="home-section-content">
              <h2 className="home-section-title">How it works</h2>
              <div className="home-steps-grid">
                <div className="home-step-card">
                  <div className="home-step-number">1</div>
                  <h3>Sign Up</h3>
                  <p>Join as a player or venue. It takes less than a minute to get started.</p>
                </div>
                <div className="home-step-card">
                  <div className="home-step-number">2</div>
                  <h3>Find or Host</h3>
                  <p>Players discover tournaments near them. Venues set up events and attract players.</p>
                </div>
                <div className="home-step-card">
                  <div className="home-step-number">3</div>
                  <h3>Play & Compete</h3>
                  <p>Track live scores, compete in leagues, and build your player profile.</p>
                </div>
                <div className="home-step-card">
                  <div className="home-step-number">4</div>
                  <h3>Grow Together</h3>
                  <p>Connect with the community, improve your game, and host bigger events.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="home-section home-section-alt">
            <div className="home-section-content">
              <h2 className="home-section-title">Why Big Fish Darts?</h2>
              <div className="home-benefits-grid">
                <div className="home-benefit-card">
                  <div className="home-benefit-icon">🎯</div>
                  <h3>Find Tournaments</h3>
                  <p>Discover local leagues and competitions near you. Never miss a game.</p>
                  <span className="home-benefit-label">For players</span>
                </div>
                <div className="home-benefit-card">
                  <div className="home-benefit-icon">📊</div>
                  <h3>Live Scores</h3>
                  <p>Real-time scoring and leaderboards. Track your progress and rankings.</p>
                  <span className="home-benefit-label">For players</span>
                </div>
                <div className="home-benefit-card">
                  <div className="home-benefit-icon">👤</div>
                  <h3>Player Profiles</h3>
                  <p>Build your darts reputation with stats, achievements, and match history.</p>
                  <span className="home-benefit-label">For players</span>
                </div>
                <div className="home-benefit-card">
                  <div className="home-benefit-icon">🏢</div>
                  <h3>Venue Hosting</h3>
                  <p>Complete event packages: software, marketing, and hosting support included.</p>
                  <span className="home-benefit-label">For venues</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="home-section">
            <div className="home-section-content">
              <h2 className="home-section-title">Everything you need</h2>
              <div className="home-features-grid">
                <div className="home-feature-card">
                  <div className="home-feature-icon">🏆</div>
                  <h3>Competitive Leagues</h3>
                  <ul>
                    <li>Join or create leagues</li>
                    <li>Season-long competitions</li>
                    <li>Prize tournaments</li>
                  </ul>
                </div>
                <div className="home-feature-card">
                  <div className="home-feature-icon">📱</div>
                  <h3>Mobile App</h3>
                  <ul>
                    <li>Check-in at venues</li>
                    <li>View live scores</li>
                    <li>Manage your profile</li>
                  </ul>
                </div>
                <div className="home-feature-card">
                  <div className="home-feature-icon">📈</div>
                  <h3>Analytics & Stats</h3>
                  <ul>
                    <li>Track your performance</li>
                    <li>View detailed statistics</li>
                    <li>Improve your game</li>
                  </ul>
                </div>
                <div className="home-feature-card">
                  <div className="home-feature-icon">🤝</div>
                  <h3>Community</h3>
                  <ul>
                    <li>Connect with players</li>
                    <li>Join discussions</li>
                    <li>Share achievements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof / Testimonials */}
          <section className="home-section home-section-alt">
            <div className="home-section-content">
              <h2 className="home-section-title">What people are saying</h2>
              <div className="home-testimonials-grid">
                <div className="home-testimonial-card">
                  <div className="home-testimonial-stars">★★★★★</div>
                  <p className="home-testimonial-text">
                    "Finally, a platform that makes finding darts tournaments easy. I've joined three leagues in my area and the live scoring is brilliant."
                  </p>
                  <div className="home-testimonial-author">
                    <strong>Sarah M.</strong>
                    <span>Player, Manchester</span>
                  </div>
                  <span className="home-benefit-label">For players</span>
                </div>
                <div className="home-testimonial-card">
                  <div className="home-testimonial-stars">★★★★★</div>
                  <p className="home-testimonial-text">
                    "Hosting Big Fish Darts events has transformed our pub nights. Customer engagement is up 40% and we're booking events weeks in advance."
                  </p>
                  <div className="home-testimonial-author">
                    <strong>James T.</strong>
                    <span>Pub Owner, London</span>
                  </div>
                  <span className="home-benefit-label">For venues</span>
                </div>
                <div className="home-testimonial-card">
                  <div className="home-testimonial-stars">★★★★★</div>
                  <p className="home-testimonial-text">
                    "The player profiles and stats tracking have made our league so much more competitive. Everyone loves seeing their progress."
                  </p>
                  <div className="home-testimonial-author">
                    <strong>Mike R.</strong>
                    <span>League Organizer, Birmingham</span>
                  </div>
                  <span className="home-benefit-label">For players</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="home-section home-section-alt">
            <div className="home-section-content">
              <h2 className="home-section-title">Frequently asked questions</h2>
              <div className="home-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="home-faq-item">
                    <button
                      className="home-faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openFaq === index}
                    >
                      <span>{faq.question}</span>
                      <span className="home-faq-icon">{openFaq === index ? '−' : '+'}</span>
                    </button>
                    {openFaq === index && (
                      <div className="home-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="home-faq-cta">
                <p>Still have questions?</p>
                <Link href="#signup" className="home-cta-primary">
                  Get the app
                </Link>
              </div>
            </div>
          </section>

          {/* Sign Up Form Section */}
          <section id="signup" className="home-section">
            <div className="home-section-content">
              <div className="home-signup-card">
                <h2>Join the Revolution</h2>
                <p className="home-signup-description">
                  Be among the first to experience Big Fish Darts. Join our early access list to start playing 
                  in minutes and get exclusive updates.
                </p>
                
                {!submitted ? (
                  <form 
                    className="home-signup-form" 
                    onSubmit={handleSubmit}
                    action="https://formsubmit.co/Info.bigfishdarts@gmail.com"
                    method="POST"
                  >
                    <input type="hidden" name="_subject" value="New Big Fish Darts Sign-up" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '?submitted=true' : ''} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_format" value="plain" />
                    
                    <div className="home-form-row">
                      <div className="home-form-group">
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
                      
                      <div className="home-form-group">
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
                    </div>
                    
                    <div className="home-form-group">
                      <label htmlFor="interest">I&apos;m interested in: *</label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select an option...</option>
                        <option value="player">Playing in leagues</option>
                        <option value="venue">Hosting at my venue</option>
                        <option value="corporate">Corporate Events & Team Building</option>
                        <option value="competitions">Darts Competitions & Tournaments</option>
                        <option value="all">All of the above</option>
                      </select>
                    </div>
                    
                    <div className="home-form-group">
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
                    
                    <button type="submit" className="home-cta-primary" style={{ width: '100%' }}>
                      Join the Waitlist
                    </button>
                    <p className="home-form-reassurance">
                      No experience needed • Perfect for pubs, clubs, and leagues
                    </p>
                  </form>
                ) : (
                  <div className="home-signup-success">
                    <h3>Thank You!</h3>
                    <p>We&apos;ve received your interest. We&apos;ll be in touch soon with exciting updates!</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="home-section">
            <div className="home-section-content">
              <div className="home-final-cta">
                <h2>Start your darts journey today</h2>
                <p>Join the revolution and be part of the future of competitive darts.</p>
                <Link href="#signup" className="home-cta-primary home-cta-large">
                  Get Started Now
                </Link>
                <p className="home-hero-reassurance">
                  No experience needed • Perfect for pubs, clubs, and leagues
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}
