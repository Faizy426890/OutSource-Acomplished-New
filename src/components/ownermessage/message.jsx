"use client"
import { Quote, Shield, Award, TrendingUp } from "lucide-react"

export default function FoundersPromise() {
  const highlights = [
    {
      Icon: Shield,
      label: "Battle-Tested",
      desc: "Real operational experience"
    },
    {
      Icon: Award,
      label: "Proven Success",
      desc: "Built & scaled agencies"
    },
    {
      Icon: TrendingUp,
      label: "Growth Focused",
      desc: "Systems that scale"
    }
  ]

  return (
    <section className="founders-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="content-side">
            <div className="label-badge">
              <Quote size={16} />
              <span>The Founder's Promise</span>
            </div>

            <h2 className="main-heading">
              I Didn't Learn Operations From a <span className="highlight">Textbook</span>
            </h2>

            <div className="quote-block">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                I learned it in the trenches.
              </p>
            </div>

            <div className="story-content">
              <p className="story-paragraph">
                I built a successful <strong>Home Health Staffing agency</strong> from the ground up. I know the stress of coordination, the complexity of payroll, importance of marketing and the urgency of intake.
              </p>

              <p className="story-paragraph">
                I founded <strong className="brand-name">Grow Edgex</strong> to give business owners the one thing I wanted most when I was scaling:
              </p>

              <div className="promise-highlight">
                <div className="promise-icon">
                  <Shield size={24} strokeWidth={2.5} />
                </div>
                <p className="promise-text">
                  A backend that runs itself. We don't just provide you team; we provide the <span className="emphasis">mastery I used to win.</span>
                </p>
              </div>
            </div>

            <div className="founder-info">
              <div className="founder-details">
                <div className="founder-name">Ahmad Azhar</div>
                <div className="founder-title">Founder & CEO, Grow Edgex</div>
              </div>
              <div className="signature-line"></div>
            </div>
          </div>

          <div className="visual-side">
            <div className="founder-card">
              <div className="card-glow"></div>

              <div className="floating-element element-1">
                <div className="stat-badge">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Committed</div>
                </div>
              </div>

              <div className="floating-element element-2">
                <div className="stat-badge">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>

              <div className="founder-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-inner">
                  <div className="avatar">
                    <img
                      src="https://res.cloudinary.com/diml90c1y/image/upload/v1760651711/WhatsApp_Image_2025-10-16_at_4.32.09_PM_peojtw.jpg"
                      alt="Ahmad Azhar"
                    />
                  </div>
                </div>
                <div className="avatar-badge">
                  <Award size={20} strokeWidth={2.5} />
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">Ahmad Azhar</h3>
                <p className="card-subtitle">Founder & CEO</p>

                <div className="highlights-grid">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="highlight-item">
                      <div className="highlight-icon">
                        <item.Icon size={18} strokeWidth={2.5} />
                      </div>
                      <div className="highlight-text">
                        <div className="highlight-label">{item.label}</div>
                        <div className="highlight-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pattern-overlay">
              <div className="pattern-dot"></div>
              <div className="pattern-dot"></div>
              <div className="pattern-dot"></div>
              <div className="pattern-dot"></div>
              <div className="pattern-dot"></div>
              <div className="pattern-dot"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founders-section {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          padding: 80px 16px;
          overflow: hidden;
        }

        .founders-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #1e40af, transparent);
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
        }

        .content-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .label-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(30, 64, 175, 0.08);
          border: 1px solid rgba(30, 64, 175, 0.2);
          color: #1e40af;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
        }

        .main-heading {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .quote-block {
          position: relative;
          padding: 24px 0 24px 40px;
          border-left: 4px solid #1e40af;
          margin: 12px 0;
        }

        .quote-mark {
          position: absolute;
          left: -20px;
          top: 0;
          font-size: 80px;
          color: #1e40af;
          line-height: 1;
          opacity: 0.15;
          font-family: Georgia, serif;
        }

        .quote-text {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 600;
          color: #1e293b;
          margin: 0;
          font-style: italic;
          line-height: 1.4;
        }

        .story-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-paragraph {
          font-size: clamp(15px, 2vw, 17px);
          color: #475569;
          line-height: 1.8;
          margin: 0;
        }

        .story-paragraph strong {
          color: #1e293b;
          font-weight: 600;
        }

        .brand-name {
          color: #1e40af;
          font-weight: 700;
        }

        .promise-highlight {
          display: flex;
          gap: 16px;
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(59, 130, 246, 0.05));
          border: 1px solid rgba(30, 64, 175, 0.15);
          border-radius: 16px;
          padding: 24px;
          margin-top: 12px;
        }

        .promise-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(30, 64, 175, 0.2);
          color: white;
        }

        .promise-text {
          font-size: clamp(15px, 2vw, 17px);
          color: #334155;
          line-height: 1.7;
          margin: 0;
        }

        .emphasis {
          color: #1e40af;
          font-weight: 700;
        }

        .founder-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }

        .founder-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .founder-name {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .founder-title {
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
        }

        .signature-line {
          width: 200px;
          height: 3px;
          background: linear-gradient(90deg, #1e40af, transparent);
          border-radius: 9999px;
        }

        .visual-side {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
        }

        .founder-card {
          position: relative;
          background: white;
          border: 1px solid rgba(30, 64, 175, 0.1);
          border-radius: 24px;
          padding: 40px 32px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08), 0 8px 20px rgba(15, 23, 42, 0.04);
          max-width: 420px;
          width: 100%;
          z-index: 2;
        }

        .card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 24px;
          opacity: 0.1;
          filter: blur(20px);
          z-index: -1;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }

        .floating-element {
          position: absolute;
          z-index: 3;
          animation: float 3s ease-in-out infinite;
        }

        .element-1 {
          top: 20px;
          right: -20px;
          animation-delay: 0s;
        }

        .element-2 {
          bottom: 40px;
          left: -20px;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .stat-badge {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 16px;
          padding: 16px 20px;
          box-shadow: 0 12px 30px rgba(30, 64, 175, 0.25);
          text-align: center;
          min-width: 100px;
        }

        .stat-number {
          font-size: 24px;
          font-weight: 700;
          color: white;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .founder-avatar {
          position: relative;
          width: 160px;
          height: 160px;
          margin: 0 auto 24px;
        }

        .avatar-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .avatar-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 4px 12px rgba(15, 23, 42, 0.1);
        }

        .avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e2e8f0;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-badge {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(30, 64, 175, 0.3);
          border: 3px solid white;
          color: white;
        }

        .card-content {
          text-align: center;
        }

        .card-title {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        .card-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0 0 28px 0;
          font-weight: 500;
        }

        .highlights-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .highlight-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: rgba(30, 64, 175, 0.03);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(30, 64, 175, 0.08);
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          background: rgba(30, 64, 175, 0.06);
          border-color: rgba(30, 64, 175, 0.15);
          transform: translateX(4px);
        }

        .highlight-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }

        .highlight-text {
          flex: 1;
        }

        .highlight-label {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .highlight-desc {
          font-size: 12px;
          color: #64748b;
        }

        .pattern-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          z-index: 1;
          pointer-events: none;
        }

        .pattern-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #1e40af;
          border-radius: 50%;
        }

        .pattern-dot:nth-child(1) {
          top: 10%;
          left: 15%;
          animation: twinkle 2s ease-in-out infinite;
        }

        .pattern-dot:nth-child(2) {
          top: 30%;
          right: 20%;
          animation: twinkle 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .pattern-dot:nth-child(3) {
          bottom: 20%;
          left: 10%;
          animation: twinkle 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .pattern-dot:nth-child(4) {
          top: 60%;
          right: 15%;
          animation: twinkle 2.8s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .pattern-dot:nth-child(5) {
          bottom: 40%;
          right: 30%;
          animation: twinkle 2.3s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        .pattern-dot:nth-child(6) {
          top: 45%;
          left: 25%;
          animation: twinkle 2.7s ease-in-out infinite;
          animation-delay: 1.2s;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @media (max-width: 1023px) {
          .visual-side {
            min-height: 400px;
          }

          .floating-element {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .founders-section {
            padding: 60px 16px;
          }

          .content-wrapper {
            gap: 48px;
          }

          .founder-avatar {
            width: 120px;
            height: 120px;
          }

          .avatar-badge {
            width: 36px;
            height: 36px;
          }

          .avatar-badge svg {
            width: 16px;
            height: 16px;
          }

          .founder-card {
            padding: 32px 24px;
          }

          .quote-block {
            padding-left: 20px;
          }

          .quote-mark {
            left: -10px;
            font-size: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-glow,
          .floating-element,
          .avatar-ring,
          .pattern-dot {
            animation: none;
          }

          .highlight-item:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
