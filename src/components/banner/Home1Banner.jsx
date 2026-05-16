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
                <div className="hero-stat-label">Projects</div>
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

        {/* ── Certifications Bar ── */}
        <div style={{
          width: '100%',
          padding: '2.5rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginTop: '0.5rem',
        }}>
          <p style={{
            margin: 0,
            fontSize: '12px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.45)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>
            Certifications &amp; Compliance
          </p>

          {/* Cert grid — row on desktop, column on mobile */}
          <style>{`
            .cert-grid {
              display: flex;
              align-items: stretch;
              justify-content: center;
              width: 100%;
              max-width: 780px;
              flex-direction: row;
            }

            .cert-card {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 14px;
              padding: 28px 20px;
              background: rgba(255,255,255,0.06);
            }

            .cert-card--first {
              border: 1.5px solid rgba(255,255,255,0.12);
              border-radius: 12px 0 0 12px;
            }

            .cert-card--middle {
              border-top: 1.5px solid rgba(255,255,255,0.12);
              border-bottom: 1.5px solid rgba(255,255,255,0.12);
            }

            .cert-card--last {
              border: 1.5px solid rgba(255,255,255,0.12);
              border-radius: 0 12px 12px 0;
            }

            .cert-card__title {
              font-size: 16px;
              font-weight: 700;
              color: #000000ff;
              margin-bottom: 4px;
            }

            .cert-card__subtitle {
              font-size: 12px;
              font-weight: 500;
            }

            @media (max-width: 640px) {
              .cert-grid {
                flex-direction: column;
                gap: 16px;
                max-width: 100%;
              }

              .cert-card--first {
                border: 1.5px solid rgba(255,255,255,0.12);
                border-radius: 12px;
              }

              .cert-card--middle {
                border: 1.5px solid rgba(255,255,255,0.12);
                border-radius: 12px;
              }

              .cert-card--last {
                border: 1.5px solid rgba(255,255,255,0.12);
                border-radius: 12px;
              }

              .cert-card {
                padding: 36px 24px;
                gap: 20px;
              }

              .cert-card__title {
                font-size: 18px;
              }

              .cert-card__subtitle {
                font-size: 13px;
              }
            }
          `}</style>

          <div className="cert-grid">
            {/* ISO 27001 */}
            <div className="cert-card cert-card--first">
              <img
                src="https://res.cloudinary.com/daxjhteb5/image/upload/v1778944394/ChatGPT_Image_May_16__2026__07_01_33_PM-removebg-preview_dzhtsd.png"
                alt="ISO 27001 Certified"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
              />
              <div style={{ textAlign: 'center' }}>
                <div className="cert-card__title">ISO 27001 Certification</div>
                <div className="cert-card__subtitle" style={{ color: 'rgba(39,39,39,0.5)' }}>Information Security</div>
              </div>
            </div>

            {/* ISO 9001 */}
            <div className="cert-card cert-card--middle">
              <img
                src="https://res.cloudinary.com/daxjhteb5/image/upload/v1778944394/ChatGPT_Image_May_16__2026__07_04_49_PM-removebg-preview_ijzpvv.png"
                alt="ISO 9001 Certified"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
              />
              <div style={{ textAlign: 'center' }}>
                <div className="cert-card__title">ISO 9001 Certification</div>
                <div className="cert-card__subtitle" style={{ color: 'rgba(29,29,29,0.5)' }}>Quality Management</div>
              </div>
            </div>

            {/* HIPAA */}
            <div className="cert-card cert-card--last">
              <img
                src="https://res.cloudinary.com/daxjhteb5/image/upload/v1778944394/Hipaa-removebg-preview_qzdjcs.png"
                alt="HIPAA Compliant"
                style={{ width: '180px', height: '180px', objectFit: 'contain' }}
              />
              <div style={{ textAlign: 'center' }}>
                <div className="cert-card__title">HIPAA Compliant</div>
                <div className="cert-card__subtitle" style={{ color: 'rgba(40,40,40,0.5)' }}>Health Data Privacy</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}