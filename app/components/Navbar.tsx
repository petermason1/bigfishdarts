'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  
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

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <img src="/logo.jpeg" alt="Big Fish Darts" className="logo-image" />
          <span className="logo-text">Big Fish Darts</span>
        </Link>
        <button 
          className={`nav-toggle ${navOpen ? 'active' : ''}`} 
          onClick={toggleNav} 
          aria-label="Toggle navigation"
        >
          <div className="target-icon">
            <span className="target-ring target-ring-outer"></span>
            <span className="target-ring target-ring-middle"></span>
            <span className="target-ring target-ring-inner"></span>
            <span className="target-center"></span>
          </div>
        </button>
        <ul className={`nav-menu ${navOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeNav}>
              Join Us
            </Link>
          </li>
          <li>
            <Link href="/demo" className={`nav-link ${isActive('/demo') ? 'active' : ''}`} onClick={closeNav}>
              Demo
            </Link>
          </li>
          <li>
            <Link href="/sales" className={`nav-link ${isActive('/sales') ? 'active' : ''}`} onClick={closeNav}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/comp" className={`nav-link ${isActive('/comp') ? 'active' : ''}`} onClick={closeNav}>
              Competition
            </Link>
          </li>
          <li>
            <Link href="/coaching" className={`nav-link ${isActive('/coaching') ? 'active' : ''}`} onClick={closeNav}>
              Coaching
            </Link>
          </li>
          <li>
            <Link href="/bullseye" className={`nav-link ${isActive('/bullseye') ? 'active' : ''}`} onClick={closeNav}>
              Bullseye Game
            </Link>
          </li>
          <li>
            <Link href="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`} onClick={closeNav}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/dart-swap" className={`nav-link ${isActive('/dart-swap') ? 'active' : ''}`} onClick={closeNav}>
              Dart Swap
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

