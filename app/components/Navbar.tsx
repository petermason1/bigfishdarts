'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
}

interface NavbarProps {
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
}

// COMMENTED OUT - Navigation links hidden during development
const defaultLinks: NavLink[] = [
  // { href: '/', label: 'Join Us' },
  // { href: '/demo', label: 'Demo' },
  // { href: '/sales', label: 'Pricing' },
  // { href: '/comp', label: 'Competition' },
  // { href: '/bullseye', label: 'Bullseye Game' },
  // { href: '/shop', label: 'Shop' },
  // { href: '/dart-swap', label: 'Dart Swap' },
]

export default function Navbar({ 
  links = defaultLinks, 
  ctaLabel = 'Join the Revolution',
  ctaHref = '/',
  onCtaClick
}: NavbarProps) {
  const [navOpen, setNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [navOpen])
  
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  
  const closeNav = () => {
    setNavOpen(false)
  }
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname?.startsWith(path)) return true
    return false
  }

  const handleCtaClick = () => {
    closeNav()
    if (onCtaClick) {
      onCtaClick()
    }
  }

  return (
    <header 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      <nav className="navbar-container" aria-label="Main navigation">
        {/* Logo */}
        <Link 
          href="/" 
          className="navbar-logo"
          onClick={closeNav}
          aria-label="Big Fish Darts Home"
        >
          <img src="/logo.jpeg" alt="Big Fish Darts" className="navbar-logo-image" />
          <span className="navbar-logo-text">Big Fish Darts</span>
        </Link>

        {/* COMMENTED OUT - Desktop Navigation */}
        {/* <ul className="navbar-menu" aria-label="Navigation menu">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={closeNav}
              >
                {link.label}
                {isActive(link.href) && <span className="navbar-link-indicator" aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* COMMENTED OUT - CTA Button - Desktop */}
        {/* <div className="navbar-cta-desktop">
          <Link
            href={ctaHref}
            className="navbar-cta-button"
            onClick={handleCtaClick}
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </Link>
        </div> */}

        {/* COMMENTED OUT - Mobile Hamburger Button */}
        {/* <button 
          className={`navbar-toggle ${navOpen ? 'active' : ''}`}
          onClick={toggleNav}
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          aria-controls="mobile-menu"
        >
          <span className="navbar-toggle-line" />
          <span className="navbar-toggle-line" />
          <span className="navbar-toggle-line" />
        </button> */}
      </nav>

      {/* COMMENTED OUT - Mobile Menu */}
      {/* <div 
        id="mobile-menu"
        className={`navbar-mobile-menu ${navOpen ? 'active' : ''}`}
        aria-hidden={!navOpen}
      >
        <ul className="navbar-mobile-menu-list">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`navbar-mobile-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={closeNav}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="navbar-cta-mobile">
          <Link
            href={ctaHref}
            className="navbar-cta-button"
            onClick={handleCtaClick}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {navOpen && (
        <div 
          className="navbar-overlay"
          onClick={closeNav}
          aria-hidden="true"
        />
      )} */}
    </header>
  )
}
