"use client"
import React, { useState,useEffect } from 'react';
import { Heart, Scale, Calculator, Cog, ArrowRight, Check, Sparkles, Zap } from 'lucide-react';
import useWow from "../../hooks/useWow"; 
import Header1 from '../../components/header/Header1';
import OperationsHero from '../../components/banner/ServiceBanner'
const test = () => {
  

  const [hoveredCard, setHoveredCard] = useState(null);
  // useWow()
  const services = [
    {
      id: 1,
      title: "Home Health & Staffing",
      subtitle: "The 'Fingerprint' Advantage",
      tagline: "For Agency Owners tired of the daily grind",
      Icon: Heart,
      color: "#e0730d",
      bgColor: "#fff7ed",
      accentColor: "#fb923c",
      video: "https://res.cloudinary.com/daxjhteb5/video/upload/v1772645148/Law_firms_ready_5_vkijl7.mp4",
      features: [
        "Full-Cycle Coordination: Balance patient needs and caregiver schedules with insider precision",
        "Intake & Patient Satisfaction: High-touch first impressions that drive retention",
        "Logistics & Payroll: Stay compliant while keeping your staff happy",
        "Recruitment Engines: Find and vet talent other agencies miss"
      ],
      insight: "Our founder ran a successful agency—we don't just support you, we run operations like insiders."
    },
    {
      id: 2,
      title: "Legal Intake & Professional Services",
      subtitle: "Lead-to-Client Machine",
      tagline: "For Law Firms ready to convert",
      Icon: Scale,
      color: "#1c234f",
      bgColor: "#eff6ff",
      accentColor: "#2563eb",
      video: "https://res.cloudinary.com/daxjhteb5/video/upload/v1772645170/Law_firms_ready_1_ldfhw0.mp4",
      features: [
        "Intake Mastery: High-touch operational rigor ensures every lead is captured, qualified, and converted",
        "Back-Office Logistics: Manage the administrative burden so attorneys focus on the law",
        "Client Pipeline: Systematic approach to moving prospects through your funnel",
        "Document Management: Streamlined case file organization and retrieval"
      ],
      insight: "Same healthcare-level precision, applied to legal client acquisition."
    },
    {
      id: 3,
      title: "Bookkeeping & Accounting",
      subtitle: "White-Label Back-Office",
      tagline: "For Small Businesses & CPA Firms",
      Icon: Calculator,
      color: "#059669",
      bgColor: "#ecfdf5",
      accentColor: "#10b981",
      video: "https://res.cloudinary.com/daxjhteb5/video/upload/v1772645167/Law_firms_ready_4_ubnann.mp4",
      features: [
        "White-Label Accounting: Act as your invisible back-office, handling manual bookkeeping",
        "Payroll & Financial Reporting: Clean, accurate, timely data to keep business healthy",
        "Tax Prep Support: Organize records so CPAs can focus on strategy",
        "Monthly Reconciliation: Ensure every transaction is categorized and accounted for"
      ],
      insight: "Be the strategist. Let us handle the data entry and reconciliation."
    },
    {
      id: 4,
      title: "IT & Workflow Automation",
      subtitle: "The Secret Sauce",
      tagline: "For every industry ready to scale",
      Icon: Cog,
      color: "#7c3aed",
      bgColor: "#faf5ff",
      accentColor: "#a855f7",
      video: "https://res.cloudinary.com/daxjhteb5/video/upload/v1772645148/Law_firms_ready_5_vkijl7.mp4",
      features: [
        "Custom Software: Niche applications built from real operational experience",
        "Automation: Turn manual tasks into automated workflows, reclaim hours daily",
        "Integration: Connect your existing tools into seamless operational systems",
        "Process Optimization: Identify and eliminate bottlenecks in your workflows"
      ],
      insight: "We build what we wished we had when we were starting out."
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We dive deep into your operations, pain points, and goals. No sales pitch—just real talk about what you need."
    },
    {
      step: "02",
      title: "Custom Solution",
      description: "We design a tailored solution with clear metrics, timelines, and deliverables. You'll know exactly what to expect."
    },
    {
      step: "03",
      title: "Rapid Onboarding",
      description: "Our team integrates with your systems in days. We train, test, and refine until everything runs perfectly."
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description: "Weekly reports, regular check-ins. We're obsessed with making your operations better."
    }
  ];

  const testimonials = [
    {
      quote: "They understood our home health agency better than most consultants. Their coordinators handle everything from intake to payroll like they've been with us for years.",
      author: "Sarah Mitchell",
      role: "CEO, CareFirst Home Health",
      rating: 5
    },
    {
      quote: "Our legal intake went from chaos to clockwork. We're converting 40% more leads now, and our attorneys actually have time to practice law.",
      author: "Michael Chen",
      role: "Managing Partner, Chen & Associates",
      rating: 5
    },
    {
      quote: "Best decision we made was outsourcing our bookkeeping to them. Our books are cleaner than they've ever been, and we saved enough to hire two more staff.",
      author: "David Rodriguez",
      role: "CFO, TechStart Solutions",
      rating: 5
    }
  ];

  const industries = [
    "Home Healthcare", "Legal Services", "Accounting Firms", "E-commerce", 
    "Real Estate", "Logistics", "SaaS Companies", "Manufacturing",
    "Financial Services", "Healthcare IT", "Professional Services", "Startups"
  ];

  const stats = [
    { label: 'Industries Served', value: '15+' },
    { label: 'Client Success Rate', value: '98%' },
    { label: 'Hours Saved Monthly', value: '10K+' }
  ];

  return (
    <>
      <style>{`
        .services-showcase {
          min-height: 100vh;
          background: #ffffff;
        }

        .hero-section {
          padding: 5rem 1rem 8rem;
          text-align: center;
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .floating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          border-radius: 9999px;
          background: white;
          box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.1);
          border: 1px solid #e9d5ff;
          margin-bottom: 2rem;
        }

        .badge-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #9333ea;
        }

        .pulse-dot {
          width: 0.5rem;
          height: 0.5rem;
          background: #a855f7;
          border-radius: 9999px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        @media (min-width: 640px) {
          .hero-title { font-size: 3.75rem; }
        }

        @media (min-width: 768px) {
          .hero-title { font-size: 4.5rem; }
        }

        @media (min-width: 1024px) {
          .hero-title { font-size: 6rem; }
        }

        .hero-title-gradient {
          display: block;
          margin-top: 0.5rem;
          color: #2563eb;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 48rem;
          margin: 0 auto 3rem;
          line-height: 1.75;
        }

        @media (min-width: 640px) {
          .hero-subtitle { font-size: 1.25rem; }
        }

        @media (min-width: 768px) {
          .hero-subtitle { font-size: 1.5rem; }
        }

        .hero-subtitle-bold {
          display: block;
          margin-top: 0.5rem;
          font-weight: 600;
          color: #374151;
        }

        .stats-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .stats-bar { gap: 3rem; }
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 1.875rem;
          font-weight: 900;
          color: #9333ea;
        }

        @media (min-width: 768px) {
          .stat-value { font-size: 2.25rem; }
        }

        .stat-label {
          font-size: 0.875rem;
          color: #4b5563;
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem 5rem;
        }

        @media (min-width: 768px) {
          .section-container { padding: 0 1rem 8rem; }
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .section-title { font-size: 3rem; }
        }

        .section-description {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 48rem;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        .service-card {
          background: rgb(230, 229, 229);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: transform 0.3s;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #c1c1c1;
        }

        @media (min-width: 768px) {
          .service-card { border-radius: 2.5rem; }
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
        }

        .service-video-container {
          position: relative;
          height: 16rem;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .service-video-container { height: 20rem; }
        }

        @media (min-width: 768px) {
          .service-video-container { height: 24rem; }
        }

        .service-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          mix-blend-mode: multiply;
        }

        .floating-icon {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 10;
        }

        .icon-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 1rem;
          border-radius: 1rem;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #f3f4f6;
        }

        .service-icon {
          width: 2rem;
          height: 2rem;
        }

        .number-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 10;
        }

        .number-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 9999px;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .number-text {
          font-size: 1.5rem;
          font-weight: 900;
          color: #111827;
        }

        .service-content {
          padding: 1.5rem 2rem 2.5rem;
        }

        @media (min-width: 640px) {
          .service-content { padding: 2rem 2.5rem; }
        }

        .tagline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          margin-bottom: 1.25rem;
        }

        .tagline-text {
          font-size: 0.75rem;
          font-weight: 700;
          color: #374151;
        }

        .service-title {
          font-size: 1.875rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        @media (min-width: 640px) {
          .service-title { font-size: 2.25rem; }
        }

        .service-subtitle {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .service-subtitle { font-size: 1.25rem; }
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .feature-check-wrapper {
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .feature-check {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .check-icon {
          width: 1rem;
          height: 1rem;
          color: white;
        }

        .feature-text {
          color: #374151;
          font-size: 0.875rem;
          line-height: 1.75;
          font-weight: 500;
        }

        @media (min-width: 640px) {
          .feature-text { font-size: 1rem; }
        }

        .insight-box {
          border-radius: 1rem;
          padding: 1.25rem;
          margin-bottom: 2rem;
          border: 2px solid #f3f4f6;
        }

        .insight-content {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .insight-emoji {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .insight-text {
          color: #1f2937;
          font-size: 0.875rem;
          font-style: italic;
          font-weight: 500;
          line-height: 1.75;
        }

        @media (min-width: 640px) {
          .insight-text { font-size: 1rem; }
        }

        .service-cta {
          width: 100%;
          color: white;
          font-weight: 700;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
        }

        @media (min-width: 640px) {
          .service-cta { padding: 1.25rem 1.5rem; }
        }

        .service-cta:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .cta-text {
          font-size: 1rem;
        }

        @media (min-width: 640px) {
          .cta-text { font-size: 1.125rem; }
        }

        .cta-arrow {
          width: 1.25rem;
          height: 1.25rem;
        }

        .process-section {
          background: #f9fafb;
          border-radius: 1.5rem;
          padding: 2rem;
          border: 2px solid #f3f4f6;
        }

        @media (min-width: 768px) {
          .process-section {
            border-radius: 2.5rem;
            padding: 4rem;
          }
        }

        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .process-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .process-line {
          display: none;
        }

        @media (min-width: 768px) {
          .process-line {
            display: block;
            position: absolute;
            top: 3rem;
            left: 0;
            right: 0;
            height: 2px;
            background: #e9d5ff;
          }
        }

        .process-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          position: relative;
          z-index: 10;
        }

        .process-card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .process-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background: #a855f7;
          color: white;
          font-weight: 900;
          font-size: 1.125rem;
          margin-bottom: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .process-title {
          font-size: 1.25rem;
          font-weight: 900;
          color: #111827;
          margin-bottom: 0.75rem;
        }

        .process-description {
          color: #4b5563;
          font-size: 0.875rem;
          line-height: 1.75;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .testimonial-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          border: 2px solid #f3f4f6;
          transition: all 0.3s;
        }

        .testimonial-card:hover {
          border-color: #e9d5ff;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        .rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .star {
          color: #fbbf24;
          font-size: 1.25rem;
        }

        .quote {
          color: #374151;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .author-section {
          border-top: 1px solid #e5e7eb;
          padding-top: 1rem;
        }

        .author-name {
          font-weight: 900;
          color: #111827;
        }

        .author-role {
          font-size: 0.875rem;
          color: #4b5563;
        }

        .industries-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .industry-badge {
          padding: 0.75rem 1.5rem;
          background: white;
          border-radius: 9999px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
          cursor: pointer;
        }

        .industry-badge:hover {
          border-color: #a78bfa;
          background: #faf5ff;
          transform: scale(1.05);
        }

        .industry-text {
          font-weight: 700;
          color: #374151;
        }
      `}</style>

      <div className="">
        <Header1/>
        <OperationsHero/>
        

        {/* Services Grid */}
        <div className="section-container">
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-card" style={{ background: service.bgColor }}>
                  <div className="service-video-container">
                    <video
                      className="service-video"
                      src={service.video}
                      loop
                      muted
                      playsInline
                      autoPlay
                    />
                    
                    <div className="video-overlay" style={{ background: service.bgColor }} />
                    
                    <div className="floating-icon">
                      <div className="icon-container">
                        <service.Icon className="service-icon" style={{ color: service.color }} />
                      </div>
                    </div>

                    <div className="number-badge">
                      <div className="number-container">
                        <span className="number-text">0{service.id}</span>
                      </div>
                    </div>
                  </div>

                  <div className="service-content">
                    <div className="tagline-badge">
                      <Zap style={{ width: '0.875rem', height: '0.875rem', color: '#4b5563' }} />
                      <span className="tagline-text">{service.tagline}</span>
                    </div>

                    <h3 className="service-title">{service.title}</h3>
                    
                    <p className="service-subtitle" style={{ color: service.accentColor }}>
                      {service.subtitle}
                    </p>

                    <div className="features-list">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <div className="feature-check-wrapper">
                            <div className="feature-check" style={{ background: service.accentColor }}>
                              <Check className="check-icon" strokeWidth={3} />
                            </div>
                          </div>
                          <p className="feature-text">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="insight-box" style={{ background: service.bgColor }}>
                      <div className="insight-content">
                        <div className="insight-emoji">💡</div>
                        <p className="insight-text">{service.insight}</p>
                      </div>
                    </div>

                    <button className="service-cta" style={{ background: service.accentColor }}>
                      <span className="cta-text">Explore Service</span>
                      <ArrowRight className="cta-arrow" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="section-container">
          <div className="process-section">
            <div className="section-header">
              <h2 className="section-title">How We Work</h2>
              <p className="section-description">
                A seamless onboarding process designed to get you results fast
              </p>
            </div>

            <div className="process-grid">
              <div className="process-line" />

              {processes.map((process, idx) => (
                <div key={idx}>
                  <div className="process-card">
                    <div className="process-badge">{process.step}</div>
                    <h3 className="process-title">{process.title}</h3>
                    <p className="process-description">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Real results from real businesses who transformed their operations with us
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="author-section">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-description">
              Specialized expertise across multiple sectors
            </p>
          </div>

          <div className="industries-container">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-badge">
                <span className="industry-text">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default test;

