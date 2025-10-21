"use client"

import { useState } from "react"
import Image from "next/image"

const SERVICES = [
  { title: "Appointment Management", imgSrc: "https://cdn-icons-png.flaticon.com/512/2997/2997896.png", alt: "Appointment management illustration" },
  {
    title: "Patient Communication",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3059/3059520.png",
    alt: "Patient communication illustration",
  },
  {
    title: "Care Coordination",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1998/1998664.png",
    alt: "Care coordination illustration",
  },
  {
    title: "Medical Documentation",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    alt: "Medical documentation illustration",
  },
  {
    title: "Referral Management",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
    alt: "Referral management illustration",
  },
  {
    title: "Email Support",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2966/2966328.png",
    alt: "Chronic care support illustration",
  },
]

const TABS = ["Email Support", "Conflict Resolution", "Referral Coordination"];


const DESCRIPTIONS = {
  "Appointment Management": "Comprehensive scheduling, rescheduling, and reminder systems to optimize your practice's calendar and reduce no-shows while improving patient access and satisfaction.",
  "Patient Communication": "Professional patient outreach, education, and follow-up communications to ensure clear understanding of care plans, medications, and treatment recommendations.",
  "Care Coordination": "Seamless coordination between providers, specialists, and healthcare services to ensure continuous, comprehensive care and smooth care transitions for patients.",
  "Medical Documentation": "Accurate support for clinical documentation, progress notes, and care plan updates in your EHR system to maintain complete and current patient records.",
  "Referral Management": "Efficient handling of specialist referrals, prior authorizations, and follow-up coordination to ensure patients receive timely access to needed specialty care.",
  "Email Support": "Efficiently manage all client and customer email communications with timely, professional, and personalized responses.",
}

export default function CareExpertise() {
  const [active, setActive] = useState("Primary Care")
  const [hovered, setHovered] = useState(null)

  return (
    <section className="wrap" aria-labelledby="expertise-heading">
      <header className="header">
        <h2 id="expertise-heading" className="title">
          Our Care Coordination Services
        </h2>
        <p className="sub">
          Enhance your patient care delivery with GrowEdge's expert Virtual Patient Care Coordinators, delivering comprehensive care coordination solutions that ensure seamless clinical operations and exceptional patient experiences across all care settings.
        </p>

        <div className="accent" aria-hidden="true" />

        <nav className="tabs" aria-label="Care specialties we support">
          <div className="tab-rail">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`tab ${active === tab ? "active" : ""}`}
                aria-pressed={active === tab}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <p className="note" role="note">
          We provide specialized care coordination support for Primary Care, Specialty Care, and Chronic Care Management. Each specialty receives tailored coordination approaches for optimal patient outcomes.
        </p>
      </header>

      <ul className="grid" aria-label="Care coordination services" onMouseLeave={() => setHovered(null)}>
        {SERVICES.map((s, idx) => {
          const isActive = hovered === idx
          return (
            <li
              key={s.title}
              className={`card ${isActive ? "active" : ""}`}
              role="button"
              aria-label={s.title}
              tabIndex={0}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(idx)}
              onBlur={(e) => {
                if (!(e.relatedTarget)?.closest(".grid")) setHovered(null)
              }}
              onClick={() => setHovered(isActive ? null : idx)}
            >
              <div className="base">
                <img src={s.imgSrc || "/placeholder.svg"} alt={s.alt} className="icon" />
                <h3 className="card-title">{s.title}</h3>
              </div>

              <div className="overlay" aria-hidden={!isActive}>
                <h4 className="overlay-title">{s.title}</h4>
                <p className="overlay-text">{DESCRIPTIONS[s.title]}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        :global(:root) {
          --ex-bg: var(--color-background, #fff);
          --ex-fg: var(--color-foreground, #111827);
          --ex-muted: #6b7280;
          --ex-border: #e5e7eb;
          --ex-accent: #0b3c7e;
          --ex-tab-line: #cfd5db;
        }

        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 16px 24px;
          color: var(--ex-fg);
          background: var(--ex-bg);
        }

        .header {
          text-align: center;
          margin: 0 auto 12px;
        }

        .title {
          margin: 0 0 10px;
          font-size: 34px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.2px;
          color: #0b0f1a;
        }

        .sub {
          margin: 0 auto 24px;
          max-width: 960px;
          color: var(--ex-muted);
          font-size: 15px;
          line-height: 1.6;
        }

        .accent {
          width: 160px;
          height: 3px;
          background: var(--ex-accent);
          margin: 16px 0 18px;
          margin-left: 0;
        }

        .tabs {
          display: flex;
          justify-content: center;
          margin: 6px 0 8px;
        }

        .tab-rail {
          width: min(640px, 90%);
          border-bottom: 1px solid var(--ex-tab-line);
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 6px;
        }

        .tab {
          background: transparent;
          border: 0;
          padding: 4px 6px;
          font-size: 15px;
          color: #7b8794;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .tab:hover { color: #4b5563; }
        .tab.active {
          color: #0b0f1a;
          font-weight: 700;
          position: relative;
        }
        .tab.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 2px;
          background: var(--ex-accent);
        }

        .note {
          margin: 10px auto 0;
          font-size: 13px;
          color: var(--ex-muted);
        }

        .grid {
          list-style: none;
          margin: 36px 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 56px 56px;
        }

        .card {
          text-align: center;
          cursor: pointer;  
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 300px;
          outline: none;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }

        .base {
          transition: opacity 220ms ease, transform 220ms ease;
          will-change: opacity, transform;
        }

        .card:hover .icon,
        .card:focus .icon {
          transform: translateY(-4px) scale(1.02);
          transition: transform 200ms ease;
        }

        .card.active .base,
        .card:hover .base,
        .card:focus-within .base {
          opacity: 0;
          transform: scale(0.98);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: var(--ex-accent);
          color: #fff;
          display: grid;
          align-content: center;
          justify-items: start;
          padding: 28px 32px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 240ms ease, transform 240ms ease;
          pointer-events: none;
        }

        .card.active .overlay,
        .card:hover .overlay,
        .card:focus-within .overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .overlay-title {
          margin: 0 0 10px 0;
          font-weight: 800;
          color: white;
          letter-spacing: 0.2px;
          font-size: 20px;
        }

        .overlay-text {
          margin: 0;
          line-height: 1.7;
          font-size: 14px;
          color: #e6eef9;
          max-width: 60ch;
        } 
        
        .icon {
          max-width: 100px;
          max-height: 100px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 1024px) {
          .title { font-size: 30px; }
          .grid { gap: 48px; }
          .icon { width: 100px; height: 80px; }
          .overlay { padding: 24px; }
          .overlay-title { font-size: 19px; }
        }

        @media (max-width: 820px) {
          .accent { margin-left: auto; margin-right: auto; }
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 40px 32px;
          }
          .overlay { padding: 22px; }
        }

        @media (max-width: 520px) {
          .title { font-size: 26px; }
          .sub { font-size: 14px; }
          .tab-rail { width: 100%; gap: 16px; }
          .grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .icon { width: 150px; height: 100px; }
          .card-title { font-size: 16px; }
          .overlay { padding: 18px 16px; }
          .overlay-title { font-size: 18px; }
          .overlay-text { font-size: 13px; }
        }
      `}</style>
    </section>
  )
}