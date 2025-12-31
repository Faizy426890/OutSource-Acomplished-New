"use client"
import { Heart, Scale, Calculator, Cog, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export default function App() {
  const services = [
    {
      id: 1,
      title: "Home Health & Staffing",
      subtitle: "The 'Fingerprint' Advantage",
      tagline: "For Agency Owners tired of the daily grind",
      Icon: Heart,
      color: "#e0730d",
      video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767143842/Law_firms_ready_5_sllshx.mp4",
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
      video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767133077/Law_firms_ready_a4ptl3.mp4",
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
      video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767143843/Law_firms_ready_4_x5olmf.mp4",
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
      video: "https://res.cloudinary.com/diml90c1y/video/upload/v1767134458/Law_firms_ready_1_ijsxgx.mp4",
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

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-accent" style={{ background: service.color }} />

              <div className="card-video-wrapper">
                <div className="video-container">
                  <video
                    src={service.video}
                    className="service-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="video-overlay" style={{ background: `linear-gradient(135deg, ${service.color}10, ${service.color}30)` }} />
                  <div className="icon-badge" style={{ background: service.color }}>
                    <service.Icon className="badge-icon" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              <div className="card-details">
                <div className="card-header">
                  <div className="tagline">{service.tagline}</div>
                  <h2 className="service-title">{service.title}</h2>
                  <div className="service-subtitle">{service.subtitle}</div>
                </div>

                <div className="insight-card">
                  <div className="insight-label">Why We're Different</div>
                  <p className="insight-text">{service.insight}</p>
                </div>

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

                <button className="learn-more-btn">
                  <span>Learn More</span>
                  <ArrowRight className="arrow-icon" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .specialized-section {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 30%, rgba(224, 115, 13, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 50%),
            linear-gradient(135deg, #fefefe 0%, #f8fafc 50%, #f1f5f9 100%);
          padding: 60px 10px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #0d73e0ff 0%, #2a5be3ff 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 10px 35px rgba(224, 115, 13, 0.35), 0 4px 15px rgba(224, 115, 13, 0.2);
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 45px rgba(224, 115, 13, 0.4), 0 6px 20px rgba(224, 115, 13, 0.25);
        }

        .main-title {
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin: 24px 0;
          letter-spacing: -0.02em;
        }

        .title-gradient {
          display: block;
          background: linear-gradient(135deg, #1349bf 0%, #044fb7 50%, #044fb7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 8px;
        }

        .main-description {
          font-size: clamp(17px, 2vw, 20px);
          color: #475569;
          line-height: 1.7;
          max-width: 850px;
          margin: 20px auto 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
            auto-rows: 1fr;
          }
        }

        .service-card {
          position: relative;
          background: white; 
          padding : 0px;
          border-radius: 24px;
          box-shadow:
            0 5px 10px rgba(0, 0, 0, 0.08),
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInScale 0.7s ease-out backwards;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 600px;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }

        .service-card:hover {
          box-shadow:
            0 35px 80px rgba(0, 0, 0, 0.12),
            0 15px 35px rgba(0, 0, 0, 0.08);
          transform: translateY(-8px);
          border-color: rgba(224, 115, 13, 0.3);
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          z-index: 10;
        }

        .card-video-wrapper {
          position: relative;
          overflow: hidden;
          background: #0f172a;
          width: 100%;
          height: 320px;
          border-radius: 0;
          margin: 0;
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0;
        }

        .service-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }

        .service-card:hover .service-video {
          transform: scale(1.05);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          mix-blend-mode: multiply;
          transition: opacity 0.4s ease;
          pointer-events: none;
          opacity: 0.3;
        }

        .service-card:hover .video-overlay {
          opacity: 0.5;
        }

        .icon-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 70px;
          height: 70px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 15px 50px rgba(0, 0, 0, 0.35),
            0 5px 15px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 5;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .service-card:hover .icon-badge {
          transform: scale(1.15) rotate(-5deg);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.45),
            0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .badge-icon {
          width: 36px;
          height: 36px;
          color: white;
          filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.25));
        }

        .card-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 32px;
          flex: 1;
          overflow: hidden;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tagline {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .service-title {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .service-subtitle {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 600;
          background: linear-gradient(135deg, #e0730d 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .insight-card {
          background: linear-gradient(135deg, #fefefe 0%, #f8fafc 100%);
          border-radius: 16px;
          padding: 20px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.03),
            0 1px 4px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }

        .insight-card:hover {
          border-color: rgba(224, 115, 13, 0.3);
          box-shadow:
            0 8px 20px rgba(224, 115, 13, 0.1),
            0 2px 8px rgba(224, 115, 13, 0.06);
        }

        .insight-label {
          font-size: 11px;
          font-weight: 700;
          color: #e0730d;
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

        .card-features {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .features-label {
          font-size: 11px;
          font-weight: 700;
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
          gap: 12px;
        }

        .feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          transition: all 0.3s ease;
          padding: 6px;
          border-radius: 10px;
        }

        .feature-item:hover {
          transform: translateX(4px);
          background: linear-gradient(135deg, rgba(224, 115, 13, 0.04), rgba(245, 158, 11, 0.04));
        }

        .check-icon {
          width: 20px;
          height: 20px;
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

        .feature-item:hover .check-icon {
          transform: scale(1.1);
          color: #10b981;
        }

        .feature-text {
          font-size: 13px;
          line-height: 1.6;
        }

        .feature-title {
          font-weight: 700;
          color: #0f172a;
        }

        .feature-desc {
          color: #475569;
          font-weight: 400;
        }

        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #0d9ae0ff 0%, #0b78f5ff 100%);
          color: white;
          font-size: 15px;
          font-weight: 700;
          padding: 16px 32px;
          border-radius: 12px;
          border: none;
          box-shadow:
            0 10px 30px rgba(224, 115, 13, 0.3),
            0 4px 12px rgba(224, 115, 13, 0.2);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          margin-top: auto;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 15px 40px rgba(224, 115, 13, 0.4),
            0 6px 18px rgba(224, 115, 13, 0.25);
          background: linear-gradient(135deg, #0bb7f5ff 0%, #247dfbff 100%);
        }

        .learn-more-btn:active {
          transform: translateY(0);
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .learn-more-btn:hover .arrow-icon {
          transform: translateX(5px);
        }

        @media (max-width: 767px) {
          .specialized-section {
            padding: 48px 2px;
          }

          .section-header {
            margin-bottom: 48px;
          }

          .services-grid {
            gap: 32px;
          }

          .service-card {
            min-height: 600px;
          }

          .card-video-wrapper {
            height: 250px;
          }

          .card-details {
            padding: 24px;
            gap: 20px;
          }

          .icon-badge {
            width: 60px;
            height: 60px;
            bottom: 12px;
            right: 12px;
          }

          .badge-icon {
            width: 30px;
            height: 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-video,
          .icon-badge,
          .check-icon,
          .feature-item,
          .section-header {
            animation: none;
            transition: none;
          }

          .service-card:hover,
          .service-card:hover .service-video,
          .service-card:hover .icon-badge {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}