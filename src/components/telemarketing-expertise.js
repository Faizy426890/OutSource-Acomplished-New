"use client"

import { useState } from "react"
import Image from "next/image"

const SERVICES = [
  { title: "Lead Generation", imgSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", alt: "Lead generation illustration" },
  {
    title: "Appointment Setting",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2997/2997896.png",
    alt: "Appointment setting illustration",
  },
  {
    title: "Sales Calls",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3059/3059520.png",
    alt: "Sales calls illustration",
  },
  {
    title: "Customer Follow-up",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
    alt: "Customer follow-up illustration",
  },
  {
    title: "Market Research",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
    alt: "Market research illustration",
  },
  {
    title: "Event Registration",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1998/1998664.png",
    alt: "Event registration illustration",
  },
]

const TABS = ["B2B Telemarketing", "B2C Telemarketing", "Market Research"] 

const DESCRIPTIONS = {
  "Lead Generation": "Professional cold calling and prospecting to identify qualified leads for your business. We conduct targeted outreach to build your pipeline with interested prospects ready for follow-up.",
  "Appointment Setting": "Effective appointment setting services to book qualified meetings for your sales team. We handle the initial outreach and scheduling to maximize your sales team's productivity.",
  "Sales Calls": "Direct sales conversion calls to close deals and generate revenue. Our experienced telemarketers present your products/services and convert leads into paying customers.",
  "Customer Follow-up": "Strategic follow-up calls to nurture relationships, gather feedback, and increase customer retention. We maintain engagement with your existing customer base.",
  "Market Research": "Comprehensive market research through structured telephone surveys. We gather valuable insights about market trends, customer preferences, and competitive intelligence.",
  "Event Registration": "Event promotion and registration services to drive attendance for your webinars, seminars, and corporate events through targeted telephone outreach.",
}

export default function TeleMarketingExpertise() {
  const [active, setActive] = useState("B2B Telemarketing")
  const [hovered, setHovered] = useState(null)

  return (
    <section className="wrap" aria-labelledby="expertise-heading">
      <header className="header">
        <h2 id="expertise-heading" className="title">
          Our Tele Marketing Services
        </h2>
        <p className="sub">
          Drive measurable business growth with GrowEdge's professional telemarketing services. Our experienced callers deliver qualified leads, appointments, and sales conversions through targeted outreach and proven calling strategies.
        </p>

        <div className="accent" aria-hidden="true" />

        <nav className="tabs" aria-label="Tele marketing specialties we offer">
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
          All telemarketing services include professional caller training, real-time call monitoring, detailed reporting, and compliance with telemarketing regulations for optimal results.
        </p>
      </header>

      <ul className="grid" aria-label="Tele marketing services" onMouseLeave={() => setHovered(null)}>
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