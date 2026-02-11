// app/services/[slug]/ServiceDetailClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Mail,
  Phone,
  Calendar,
  FileText,
  BarChart,
  Play,
  Pause,
  X,
  Menu,
  Check,
} from "lucide-react";
import { ServiceDetail } from "./data";

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "process" | "case-studies" | "faq">("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Avg. Time to Value", value: "30 days", icon: Clock },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Award },
  ];

  return (
    <div className="service-detail-page">
      {/* Navigation */}
      <nav className="detail-nav">
        <div className="nav-container">
          <Link href="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          
          <div className="nav-links desktop-only">
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#process">Process</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#faq">FAQ</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Overview</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="detail-hero" style={{ background: `linear-gradient(135deg, ${service.color}10, ${service.color}20)` }}>
        <div className="hero-content">
          <div className="hero-badge" style={{ background: service.color, color: "white" }}>
            <service.Icon size={18} />
            <span>{service.tagline}</span>
          </div>
          
          <h1 className="hero-title">
            {service.title}
            <span className="hero-subtitle">{service.subtitle}</span>
          </h1>

          <div className="hero-stats">
            {service.metrics.map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div key={idx} className="stat-card">
                  <div className="stat-icon" style={{ background: `${service.color}15`, color: service.color }}>
                    <IconComponent size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{metric.value}</div>
                    <div className="stat-label">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero-media">
          <div className="video-container" onClick={() => setIsVideoPlaying(true)}>
            {!isVideoPlaying ? (
              <>
                <video
                  src={service.video}
                  className="hero-video"
                  muted
                  loop
                  playsInline
                />
                <div className="video-overlay" style={{ background: `linear-gradient(135deg, ${service.color}40, ${service.color}60)` }} />
                <div className="play-button" style={{ background: service.color }}>
                  <Play size={32} fill="white" />
                </div>
              </>
            ) : (
              <video
                src={service.video}
                className="hero-video"
                autoPlay
                controls
                playsInline
              />
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="detail-section overview-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The Challenge & Solution</h2>
            <div className="section-divider" style={{ background: service.color }} />
          </div>

          <div className="overview-grid">
            <div className="problem-card">
              <div className="card-icon" style={{ background: `${service.color}15`, color: service.color }}>
                <AlertCircle size={32} />
              </div>
              <h3>The Problem</h3>
              <p>{service.overview.problem}</p>
            </div>

            <div className="solution-card">
              <div className="card-icon" style={{ background: `${service.color}15`, color: service.color }}>
                <CheckCircle size={32} />
              </div>
              <h3>Our Solution</h3>
              <p>{service.overview.solution}</p>
            </div>

            <div className="unique-card">
              <div className="card-icon" style={{ background: `${service.color}15`, color: service.color }}>
                <Award size={32} />
              </div>
              <h3>Why We're Different</h3>
              <p>{service.overview.unique}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="detail-section features-section" style={{ background: `${service.colorLight}` }}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Everything We Deliver</h2>
            <div className="section-divider" style={{ background: service.color }} />
            <p className="section-description">
              Comprehensive operational support designed specifically for your industry
            </p>
          </div>

          <div className="features-grid">
            {service.features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-header">
                    <div className="feature-icon" style={{ background: `${service.color}15`, color: service.color }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-benefits">
                    {feature.benefits.map((benefit, bidx) => (
                      <li key={bidx}>
                        <Check size={16} style={{ color: service.color }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="detail-section process-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Implementation Process</h2>
            <div className="section-divider" style={{ background: service.color }} />
            <p className="section-description">
              A proven methodology for seamless integration and rapid results
            </p>
          </div>

          <div className="process-timeline">
            {service.process.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="process-step">
                  <div className="step-indicator">
                    <div className="step-number" style={{ background: service.color, color: "white" }}>
                      {step.step}
                    </div>
                    {idx < service.process.length - 1 && (
                      <div className="step-connector" style={{ background: `${service.color}30` }} />
                    )}
                  </div>
                  <div className="step-content">
                    <div className="step-icon" style={{ background: `${service.color}15`, color: service.color }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {service.caseStudies.length > 0 && (
        <section id="case-studies" className="detail-section casestudies-section" style={{ background: `${service.colorLight}` }}>
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Real Results, Real Clients</h2>
              <div className="section-divider" style={{ background: service.color }} />
              <p className="section-description">
                See how we've helped businesses like yours transform their operations
              </p>
            </div>

            <div className="case-studies-grid">
              {service.caseStudies.map((caseStudy, idx) => (
                <div key={idx} className="case-study-card">
                  <div className="case-header">
                    <div className="case-industry" style={{ background: `${service.color}15`, color: service.color }}>
                      {caseStudy.industry}
                    </div>
                    <h3 className="case-title">{caseStudy.title}</h3>
                  </div>
                  
                  <div className="case-challenge">
                    <h4>Challenge</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="case-solution">
                    <h4>Solution</h4>
                    <p>{caseStudy.solution}</p>
                  </div>
                  
                  <div className="case-results">
                    <h4>Results</h4>
                    <ul>
                      {caseStudy.results.map((result, ridx) => (
                        <li key={ridx}>
                          <CheckCircle size={18} style={{ color: service.color }} />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="detail-section whychoose-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Industry Leaders Choose Us</h2>
            <div className="section-divider" style={{ background: service.color }} />
          </div>

          <div className="whychoose-grid">
            {service.whyChoose.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="whychoose-card">
                  <div className="whychoose-icon" style={{ background: `${service.color}15`, color: service.color }}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="whychoose-title">{item.title}</h3>
                  <p className="whychoose-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="detail-section faq-section" style={{ background: `${service.colorLight}` }}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" style={{ background: service.color }} />
            <p className="section-description">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="faq-grid">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <div className="faq-question">
                  <div className="faq-icon" style={{ background: `${service.color}15`, color: service.color }}>
                    ?
                  </div>
                  <h3>{faq.question}</h3>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="detail-section cta-section" style={{ background: service.color }}>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Operations?</h2>
            <p className="cta-description">
              Join the 100+ businesses that have scaled with our operational expertise
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button primary">
                Schedule a Discovery Call
                <Calendar size={20} />
              </Link>
              <a href="mailto:hello@operationalexcellence.com" className="cta-button secondary">
                Email Our Team
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-detail-page {
          min-height: 100vh;
          background: #ffffff;
        }

        /* Navigation */
        .detail-nav {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          z-index: 50;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: ${service.color};
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: ${service.color};
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1e293b;
        }

        .mobile-menu {
          display: none;
          padding: 16px 32px;
          background: white;
          border-top: 1px solid #e2e8f0;
        }

        .mobile-menu a {
          display: block;
          padding: 12px 0;
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #e2e8f0;
        }

        .mobile-menu a:last-child {
          border-bottom: none;
        }

        /* Hero Section */
        .detail-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 80px 32px;
          max-width: 1400px;
          margin: 0 auto;
          background: transparent;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 600;
          width: fit-content;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-size: clamp(40px, 5vw, 56px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          display: block;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 600;
          color: ${service.color};
          margin-top: 12px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .hero-media {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          height: fit-content;
        }

        .video-container {
          position: relative;
          aspect-ratio: 16/9;
          cursor: pointer;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        /* Section Styles */
        .detail-section {
          padding: 100px 0;
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-title {
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          margin: 0 auto 24px;
          border-radius: 2px;
        }

        .section-description {
          font-size: 19px;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Overview Grid */
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .problem-card,
        .solution-card,
        .unique-card {
          padding: 40px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .problem-card:hover,
        .solution-card:hover,
        .unique-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: ${service.color}40;
        }

        .card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .overview-grid h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .overview-grid p {
          font-size: 17px;
          line-height: 1.7;
          color: #475569;
          margin: 0;
        }

        /* Features Grid */
        .features-section {
          background: ${service.colorLight};
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .feature-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: ${service.color}40;
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .feature-description {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .feature-benefits {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 15px;
          color: #475569;
        }

        .feature-benefits li span {
          line-height: 1.5;
        }

        /* Process Timeline */
        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          gap: 32px;
          position: relative;
        }

        .step-indicator {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          z-index: 2;
        }

        .step-connector {
          width: 2px;
          height: 80px;
          margin: 8px 0;
        }

        .step-content {
          flex: 1;
          padding-bottom: 32px;
        }

        .step-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .step-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .step-description {
          font-size: 17px;
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        /* Case Studies */
        .case-studies-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }

        .case-study-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }

        .case-industry {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .case-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 32px;
        }

        .case-challenge,
        .case-solution,
        .case-results {
          margin-bottom: 32px;
        }

        .case-study-card h4 {
          font-size: 18px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .case-study-card p {
          font-size: 17px;
          line-height: 1.7;
          color: #475569;
          margin: 0;
        }

        .case-results ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .case-results li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 17px;
          color: #0f172a;
        }

        /* Why Choose Grid */
        .whychoose-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .whychoose-card {
          text-align: center;
          padding: 32px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .whychoose-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: ${service.color}40;
        }

        .whychoose-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .whychoose-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .whychoose-description {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* FAQ Grid */
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .faq-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .faq-card:hover {
          border-color: ${service.color}40;
        }

        .faq-question {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .faq-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .faq-question h3 {
          font-size: 19px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.4;
        }

        .faq-answer p {
          font-size: 17px;
          color: #475569;
          line-height: 1.7;
          margin: 0;
          padding-left: 48px;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
        }

        .cta-content {
          text-align: center;
          color: white;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .cta-description {
          font-size: 20px;
          margin-bottom: 40px;
          opacity: 0.95;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: white;
          color: ${service.color};
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .features-grid,
          .whychoose-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .detail-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 60px 32px;
          }

          .hero-stats {
            max-width: 600px;
          }

          .overview-grid {
            grid-template-columns: 1fr;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-links.desktop-only {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: block;
          }

          .detail-hero {
            padding: 40px 20px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .features-grid,
          .whychoose-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            gap: 16px;
          }

          .step-indicator {
            flex-direction: row;
            gap: 16px;
          }

          .step-connector {
            width: 80px;
            height: 2px;
            margin: 0 8px;
          }

          .faq-answer p {
            padding-left: 0;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-description {
            font-size: 18px;
          }

          .section-container {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .detail-hero {
            padding: 32px 16px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 20px;
          }

          .stat-card {
            padding: 16px;
          }

          .stat-value {
            font-size: 24px;
          }

          .feature-card,
          .case-study-card,
          .faq-card,
          .whychoose-card {
            padding: 24px;
          }

          .case-title {
            font-size: 24px;
          }
        }

        /* Print Styles */
        @media print {
          .detail-nav,
          .video-container,
          .cta-section {
            display: none;
          }

          .service-detail-page {
            background: white;
          }

          .detail-hero,
          .detail-section {
            padding: 40px 0;
            page-break-inside: avoid;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .feature-card,
          .problem-card,
          .solution-card,
          .unique-card,
          .whychoose-card,
          .play-button,
          .cta-button {
            transition: none;
          }

          .feature-card:hover,
          .problem-card:hover,
          .solution-card:hover,
          .unique-card:hover,
          .whychoose-card:hover,
          .play-button:hover,
          .cta-button:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
