"use client"
import { Heart, Scale, Calculator, Cog, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export default function SpecializedServices() {
  const services = [
    {
      id: 1,
      title: "Home Health & Staffing",
      subtitle: "The 'Fingerprint' Advantage",
      tagline: "For Agency Owners tired of the daily grind",
      Icon: Heart,
      color: "#e0730d",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      features: [
        "Custom Software: Niche applications built from real operational experience",
        "Automation: Turn manual tasks into automated workflows, reclaim hours daily",
        "Integration: Connect your existing tools into seamless operational systems",
        "Process Optimization: Identify and eliminate bottlenecks in your workflows"
      ],
      insight: "We build what we wished we had when we were starting out."
    }
  ]

  return (
    <section className="specialized-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <Sparkles size={16} />
            <span>Specialized Mastery Portfolio</span>
          </div>
          <h1 className="main-title">
            Expertise Built From
            <span className="title-gradient">Real Operations</span>
          </h1>
          <p className="main-description">
            We don't just support your business—we run it with the precision of insiders who've built and scaled operations from the ground up.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
              <div className="card-accent" style={{ background: service.color }} />
              
              <div className="card-content">
                {/* Image Column */}
                <div className="card-image-wrapper">
                  <div className="image-container">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image"
                    />
                    <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}40)` }} />
                    <div className="icon-badge" style={{ background: service.color }}>
                      <service.Icon className="badge-icon" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="card-details">
                  {/* Header */}
                  <div className="card-header">
                    <div className="tagline">{service.tagline}</div>
                    <h2 className="service-title">{service.title}</h2>
                    <div className="service-subtitle">{service.subtitle}</div>
                  </div>

                  {/* Insight Card */}
                  <div className="insight-card">
                    <div className="insight-label">Why We're Different</div>
                    <p className="insight-text">{service.insight}</p>
                  </div>

                  {/* Features */}
                  <div className="card-features">
                    <h3 className="features-label">What We Deliver</h3>
                    <ul className="features-list">
                      {service.features.map((feature, fIdx) => {
                        const [title, ...descParts] = feature.split(':')
                        const description = descParts.join(':').trim()
                        
                        return (
                          <li key={fIdx} className="feature-item">
                            <CheckCircle2 className="check-icon" strokeWidth={2.5} />
                            <div className="feature-text">
                              <span className="feature-title">{title}</span>
                              {description && (
                                <span className="feature-desc">: {description}</span>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      <style jsx>{`
        .specialized-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          padding: 64px 16px;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* Header Styles */
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #0775a8ff 0%, #0b8d82ff 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(224, 115, 13, 0.3);
          margin-bottom: 16px;
        }

        .main-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.1;
          margin: 16px 0;
          letter-spacing: -0.02em;
        }

        .title-gradient {
          display: block;
          background: linear-gradient(135deg, #0a5c9eff 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 8px;
        }

        .main-description {
          font-size: clamp(16px, 2vw, 20px);
          color: #475569;
          line-height: 1.7;
          max-width: 800px;
          margin: 16px auto 0;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 64px;
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (min-width: 1400px) {
          .services-grid {
            gap: 48px;
          }
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15), 0 12px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-8px);
          border-color: #cbd5e1;
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          z-index: 10;
        }

        .card-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        /* Image Column */
        .card-image-wrapper {
          position: relative;
          min-height: 280px;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .service-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(224, 115, 13, 0.1), rgba(224, 115, 13, 0.3));
          mix-blend-mode: multiply;
          transition: opacity 0.4s ease;
        }

        .service-card:hover .image-overlay {
          opacity: 0.7;
        }

        .icon-badge {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 72px;
          height: 72px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 5;
        }

        .service-card:hover .icon-badge {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.35), 0 6px 18px rgba(0, 0, 0, 0.2);
        }

        .badge-icon {
          width: 36px;
          height: 36px;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        /* Content Column */
        .card-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 32px 24px;
        }

        @media (min-width: 768px) {
          .card-details {
            padding: 40px 32px;
          }
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tagline {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .service-title {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .service-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 600;
          color: #475569;
        }

        .insight-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .insight-label {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .insight-text {
          font-size: 14px;
          color: #334155;
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
        }

        /* Card Features */
        .card-features {
          display: flex;
          flex-direction: column;
        }

        .features-label {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 16px 0;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          transition: transform 0.2s ease;
        }

        .feature-item:hover {
          transform: translateX(4px);
        }

        .check-icon {
          width: 22px;
          height: 22px;
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.2s ease;
        }

        .feature-item:hover .check-icon {
          transform: scale(1.15);
        }

        .feature-text {
          font-size: 15px;
          line-height: 1.6;
        }

        .feature-title {
          font-weight: 600;
          color: #0f172a;
        }

        .feature-desc {
          color: #475569;
        }

        /* CTA Section */
        .cta-section {
          margin-top: 64px;
        }

        .cta-card {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 20px;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25), 0 12px 30px rgba(0, 0, 0, 0.15);
          border: 1px solid #334155;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #e0730d 0%, #f59e0b 50%, #7c3aed 100%);
        }

        @media (min-width: 640px) {
          .cta-card {
            padding: 64px 48px;
          }
        }

        .cta-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          color: white;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .cta-description {
          font-size: clamp(16px, 2vw, 18px);
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 32px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #e0730d 0%, #f59e0b 100%);
          color: white;
          font-size: 18px;
          font-weight: 600;
          padding: 18px 36px;
          border-radius: 12px;
          border: none;
          box-shadow: 0 14px 35px rgba(224, 115, 13, 0.4), 0 6px 15px rgba(224, 115, 13, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 18px 45px rgba(224, 115, 13, 0.5), 0 8px 20px rgba(224, 115, 13, 0.3);
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .cta-note {
          font-size: 14px;
          color: #94a3b8;
          margin: 16px 0 0 0;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .specialized-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .services-grid {
            gap: 24px;
          }

          .card-details {
            padding: 28px 20px;
            gap: 20px;
          }

          .card-image-wrapper {
            min-height: 240px;
          }

          .icon-badge {
            width: 56px;
            height: 56px;
            bottom: 16px;
            right: 16px;
          }

          .badge-icon {
            width: 28px;
            height: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-image,
          .icon-badge,
          .check-icon,
          .feature-item,
          .cta-button,
          .arrow-icon {
            transition: none;
          }
          
          .service-card:hover,
          .service-card:hover .service-image,
          .service-card:hover .icon-badge {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}