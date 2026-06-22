// app/services/[slug]/ServiceDetailClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Award,
  Mail,
  Calendar,
  X,
  Menu,
  Check,
} from "lucide-react";
import { ServiceDetail } from "./data";
import { getIcon } from "./icon-map";
import "./ServiceDetailClient.css";

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Resolve the hero badge icon once up front
  const HeroIcon = getIcon(service.Icon);

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

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
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

      {/* Hero Section — image/video block removed, replaced with an icon-led layout */}
      <section
        className="detail-hero detail-hero--no-media"
        style={{
          background: `linear-gradient(135deg, ${service.color}10, ${service.color}20)`,
        }}
      >
        <div className="hero-content">
          <div
            className="hero-badge"
            style={{ background: service.color, color: "white" }}
          >
            <HeroIcon size={18} />
            <span>{service.tagline}</span>
          </div>

          <h1 className="hero-title">
            {service.title}
            <span className="hero-subtitle">{service.subtitle}</span>
          </h1>

          <div className="hero-stats">
            {service.metrics.map((metric, idx) => {
              const IconComponent = getIcon(metric.icon);
              return (
                <div key={idx} className="stat-card">
                  <div
                    className="stat-icon"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    <IconComponent size={22} />
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
      </section>

      {/* Overview Section */}
      <section id="overview" className="detail-section overview-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The Challenge & Solution</h2>
            <div
              className="section-divider"
              style={{ background: service.color }}
            />
          </div>

          <div className="overview-grid">
            <div className="problem-card">
              <div
                className="card-icon"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                }}
              >
                <AlertCircle size={32} />
              </div>
              <h3>The Problem</h3>
              <p>{service.overview.problem}</p>
            </div>

            <div className="solution-card">
              <div
                className="card-icon"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                }}
              >
                <CheckCircle size={32} />
              </div>
              <h3>Our Solution</h3>
              <p>{service.overview.solution}</p>
            </div>

            <div className="unique-card">
              <div
                className="card-icon"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                }}
              >
                <Award size={32} />
              </div>
              <h3>Why We're Different</h3>
              <p>{service.overview.unique}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="detail-section features-section"
        style={{ background: `${service.colorLight}` }}
      >
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Everything We Deliver</h2>
            <div
              className="section-divider"
              style={{ background: service.color }}
            />
            <p className="section-description">
              Comprehensive operational support designed specifically for your industry
            </p>
          </div>

          <div className="features-grid">
            {service.features.map((feature, idx) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-header">
                    <div
                      className="feature-icon"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                      }}
                    >
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
            <div
              className="section-divider"
              style={{ background: service.color }}
            />
            <p className="section-description">
              A proven methodology for seamless integration and rapid results
            </p>
          </div>

          <div className="process-timeline">
            {service.process.map((step, idx) => {
              const IconComponent = getIcon(step.icon);
              return (
                <div key={idx} className="process-step">
                  <div className="step-indicator">
                    <div
                      className="step-number"
                      style={{
                        background: service.color,
                        color: "white",
                      }}
                    >
                      {step.step}
                    </div>
                    {idx < service.process.length - 1 && (
                      <div
                        className="step-connector"
                        style={{ background: `${service.color}30` }}
                      />
                    )}
                  </div>
                  <div className="step-content">
                    <div
                      className="step-icon"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                      }}
                    >
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
        <section
          id="case-studies"
          className="detail-section casestudies-section"
          style={{ background: `${service.colorLight}` }}
        >
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Real Results, Real Clients</h2>
              <div
                className="section-divider"
                style={{ background: service.color }}
              />
              <p className="section-description">
                See how we've helped businesses like yours transform their operations
              </p>
            </div>

            <div className="case-studies-grid">
              {service.caseStudies.map((caseStudy, idx) => (
                <div key={idx} className="case-study-card">
                  <div className="case-header">
                    <div
                      className="case-industry"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                      }}
                    >
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
            <div
              className="section-divider"
              style={{ background: service.color }}
            />
          </div>

          <div className="whychoose-grid">
            {service.whyChoose.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <div key={idx} className="whychoose-card">
                  <div
                    className="whychoose-icon"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    <IconComponent size={24} />
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
      <section
        id="faq"
        className="detail-section faq-section"
        style={{ background: `${service.colorLight}` }}
      >
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div
              className="section-divider"
              style={{ background: service.color }}
            />
            <p className="section-description">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="faq-grid">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <div className="faq-question">
                  <div
                    className="faq-icon"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
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
      <section
        className="detail-section cta-section"
        style={{ background: service.color }}
      >
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
    </div>
  );
}
