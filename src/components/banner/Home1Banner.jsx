"use client"
import { useState, useEffect } from "react"
import "./HeroSection.css"

export default function HeroSection() {
  const [clients, setClients] = useState(0)
  const [projects, setProjects] = useState(0)
  const [employees, setEmployees] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const animateCounter = (setter, target, duration = 2000) => {
      const steps = 60
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, duration / steps)
    }

    const timeout = setTimeout(() => {
      animateCounter(setClients, 100)
      animateCounter(setProjects, 300)
      animateCounter(setEmployees, 500)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="hero-container">
      <div className="hero-background-gradient"></div>

      <div className={`hero-content ${isVisible ? 'hero-content-visible' : ''}`}>
        <div className="hero-grid">
          <div className="hero-left-section">
            <div className="hero-badge-wrapper">
              <div className="hero-badge hero-animate-slide-left" style={{ animationDelay: '0.1s' }}>
                <span className="hero-sparkle">✨</span>
                <span className="hero-badge-text">Trusted by Industry Leaders</span>
              </div>
            </div>

            <h1 className="hero-main-heading">
              <span>Stop</span>
              <span> Managing.</span>
              <span className="hero-heading-gradient">Start Leading.</span>
            </h1>

            <h2 className="hero-sub-heading hero-animate-slide-left" style={{ animationDelay: '0.5s' }}>
              Stop Managing Your Backend Operations.
              <br />
              Start Leading Your Growth.
            </h2>

            <p className="hero-tagline hero-animate-slide-left" style={{ animationDelay: '0.7s' }}>
              We deliver operational mastery for Healthcare, Home Health agencies, Staffing companies, Law firms,
              IT/Software development, Accounting/Payroll, and Property Management Businesses.
            </p>

            <div className="hero-button-container hero-animate-slide-left" style={{ animationDelay: '0.9s' }}>
              <a href="/service" className="hero-primary-button">
                <span>Get Started Today</span>
                <span className="hero-button-arrow">→</span>
              </a>

              <a href="/contact" className="hero-secondary-button">
                <span>Contact Sales</span>
              </a>
            </div>

            <div className="hero-stats-row hero-animate-slide-left" style={{ animationDelay: '1.1s' }}>
              <div className="hero-stat-item">
                <div className="hero-stat-number">{clients}+</div>
                <div className="hero-stat-label">Happy Clients</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">{projects}+</div>
                <div className="hero-stat-label">Projects </div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">{employees}+</div>
                <div className="hero-stat-label">Team Members</div>
              </div>
            </div>
          </div>

          <div className="hero-right-section">
            <div className="hero-image-wrapper">
              <video
                src="https://res.cloudinary.com/daxjhteb5/video/upload/v1772645094/WEB_HERO_nunlaa.mp4"
                className="hero-image"
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="hero-image-badge">
                <div className="hero-badge-icon">✓</div>
                <div>
                  <div className="hero-badge-title">Verified Partner</div>
                  <div className="hero-badge-subtext">Trusted Since 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-trust-bar">
          <div className="hero-trust-item">
            <span className="hero-trust-icon">🏥</span>
            <span className="hero-trust-text">Healthcare Leaders</span>
          </div>
          <div className="hero-trust-item">
            <span className="hero-trust-icon">💼</span>
            <span className="hero-trust-text">Enterprise Solutions</span>
          </div>
          <div className="hero-trust-item">
            <span className="hero-trust-icon">⚡</span>
            <span className="hero-trust-text">Fast Implementation</span>
          </div>
          <div className="hero-trust-item">
            <span className="hero-trust-icon">🔒</span>
            <span className="hero-trust-text">Secure & Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}
