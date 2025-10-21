"use client"

import { useState } from "react"
import Image from "next/image"

const SERVICES = [
  { title: "Custom Web Development", imgSrc: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png", alt: "Custom web development illustration" },
  {
    title: "E-commerce Solutions",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
    alt: "E-commerce solutions illustration",
  },
  {
    title: "Mobile App Development",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2460/2460768.png",
    alt: "Mobile app development illustration",
  },
  {
    title: "CMS Development",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2920/2920243.png",
    alt: "CMS development illustration",
  },
  {
    title: "IT Infrastructure",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2920/2920243.png",
    alt: "IT infrastructure illustration",
  },
  {
    title: "Maintenance & Support",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2997/2997896.png",
    alt: "Maintenance and support illustration",
  },
]

const TABS = ["Web Development", "Mobile Development", "IT Services"] 

const DESCRIPTIONS = {
  "Custom Web Development": "Tailored web applications built with modern technologies to meet your specific business requirements, featuring responsive design, optimal performance, and scalable architecture.",
  "E-commerce Solutions": "Complete online store development with secure payment integration, inventory management, and seamless user experiences to drive your online sales and business growth.",
  "Mobile App Development": "Native and cross-platform mobile applications for iOS and Android, designed for optimal performance and engaging user experiences across all devices.",
  "CMS Development": "Custom content management systems and WordPress solutions that empower you to manage your website content easily while maintaining design consistency and functionality.",
  "IT Infrastructure": "Robust IT infrastructure setup including cloud solutions, server management, network configuration, and security implementations to support your business operations.",
  "Maintenance & Support": "Ongoing website maintenance, security updates, performance monitoring, and technical support to ensure your digital assets remain secure and up-to-date.",
}

export default function WebDevExpertise() {
  const [active, setActive] = useState("Web Development")
  const [hovered, setHovered] = useState(null)

  return (
    <section className="wrap" aria-labelledby="expertise-heading">
      <header className="header">
        <h2 id="expertise-heading" className="title">
          Our Development Services
        </h2>
        <p className="sub">
          Transform your digital presence with GrowEdge's expert development teams, delivering comprehensive website development and IT solutions that ensure cutting-edge technology, seamless functionality, and unmatched technical support for all your digital needs.
        </p>

        <div className="accent" aria-hidden="true" />

        <nav className="tabs" aria-label="Development specialties we offer">
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
          We provide specialized development services across Web Development, Mobile Development, and IT Services. Each specialty receives tailored approaches and the latest technologies for optimal results.
        </p>
      </header>

      <ul className="grid" aria-label="Development services" onMouseLeave={() => setHovered(null)}>
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