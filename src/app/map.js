"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function GlobalMapPartners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      name: "",
      logo: "https://res.cloudinary.com/daxjhteb5/image/upload/v1776129040/Coffee_Logo-removebg-preview_jpzioa.png",
    },
    {
      name: "",
      logo: "https://res.cloudinary.com/daxjhteb5/image/upload/v1776128986/Khan_Law_Logo_kvjgbt.avif",
    },
    {
      name: "",
      logo: "https://res.cloudinary.com/daxjhteb5/image/upload/v1776128986/Rehab_Logo_ofbqq2.webp",
    },
    {
      name: "",
      logo: "https://res.cloudinary.com/daxjhteb5/image/upload/v1776128985/Nexus_Logo_vwr1yt.png",
    },
  ];

  const stats = [
    { value: "10+", label: "Locations" },
    { value: "5", label: "Continents" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Commitment" },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Syne:wght@400;600;700;800&display=swap');

    :root {
      --bg-primary: #161618;
      --bg-card: #1e1e21;
      --bg-card-hover: #252528;
      --border: rgba(255,255,255,0.07);
      --border-hover: rgba(249,115,22,0.45);
      --accent: #f97316;
      --accent-dim: rgba(249,115,22,0.15);
      --accent-glow: rgba(249,115,22,0.3);
      --text-primary: #f5f4f0;
      --text-muted: #888;
      --radius: 20px;
    }

    .gmp-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

    .gmp-wrap {
      background: var(--bg-primary);
      font-family: 'Syne', sans-serif;
      padding: 96px 24px;
      position: relative;
      overflow: hidden;
    }

    /* Ambient background blobs */
    .gmp-wrap::before {
      content: '';
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
      top: -200px;
      right: -200px;
      pointer-events: none;
    }
    .gmp-wrap::after {
      content: '';
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%);
      bottom: -150px;
      left: -150px;
      pointer-events: none;
    }

    .gmp-inner {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* === SECTION HEADER === */
    .gmp-header {
      text-align: center;
      margin-bottom: 64px;
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .gmp-header.visible { opacity: 1; transform: translateY(0); }

    .gmp-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 18px;
    }
    .gmp-eyebrow::before,
    .gmp-eyebrow::after {
      content: '';
      display: block;
      width: 32px;
      height: 1px;
      background: var(--accent);
      opacity: 0.6;
    }

    .gmp-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.4rem, 5vw, 4rem);
      font-weight: 900;
      color: var(--text-primary);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .gmp-title span {
      color: var(--accent);
      font-style: italic;
    }

    .gmp-divider {
      width: 64px;
      height: 3px;
      background: linear-gradient(90deg, var(--accent), transparent);
      border-radius: 99px;
      margin: 20px auto 0;
    }

    /* === PARTNERS GRID === */
    .gmp-partners-section { margin-bottom: 96px; }

    .gmp-partners-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .gmp-partner-card {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 48px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      overflow: hidden;
      transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
      opacity: 0;
      transform: translateY(40px);
    }
    .gmp-partner-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .gmp-partner-card:nth-child(1) { transition-delay: 0.1s; }
    .gmp-partner-card:nth-child(2) { transition-delay: 0.2s; }
    .gmp-partner-card:nth-child(3) { transition-delay: 0.3s; }
    .gmp-partner-card:nth-child(4) { transition-delay: 0.4s; }

    .gmp-partner-card:hover {
      border-color: var(--border-hover);
      background: var(--bg-card-hover);
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px var(--border-hover), inset 0 1px 0 rgba(255,255,255,0.08);
    }

    /* Shine sweep on hover */
    .gmp-partner-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, transparent 40%, rgba(249,115,22,0.07) 50%, transparent 60%);
      background-size: 200% 200%;
      background-position: 200% 200%;
      transition: background-position 0.6s ease;
      border-radius: inherit;
    }
    .gmp-partner-card:hover::before {
      background-position: -50% -50%;
    }

    /* Bottom accent bar */
    .gmp-partner-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
      border-radius: 99px;
      transition: transform 0.35s ease;
    }
    .gmp-partner-card:hover::after { transform: translateX(-50%) scaleX(1); }

    .gmp-partner-logo {
      width: 100%;
      height: 120px;
      object-fit: contain;
      filter: brightness(0.85) saturate(0.7);
      transition: filter 0.35s ease, transform 0.35s ease;
    }
    .gmp-partner-card:hover .gmp-partner-logo {
      filter: brightness(1.1) saturate(1);
      transform: scale(1.07);
    }

    .gmp-partner-name {
      margin-top: 20px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-muted);
      transition: color 0.35s ease;
    }
    .gmp-partner-card:hover .gmp-partner-name { color: var(--accent); }

    /* === MAP SECTION === */
    .gmp-map-section {}

    .gmp-map-frame {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 28px;
      padding: 48px;
      overflow: hidden;
    }

    /* Subtle grid pattern */
    .gmp-map-frame::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 40px 40px;
      border-radius: inherit;
    }

    /* Corner accent */
    .gmp-map-frame::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle at top right, rgba(249,115,22,0.12), transparent 70%);
      border-radius: inherit;
    }

    .gmp-map-img-wrap {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
    }
    .gmp-map-img-wrap img {
      width: 100%;
      max-width: 820px;
      height: auto;
      border-radius: 12px;
    }

    /* === STATS === */
    .gmp-stats {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      margin-top: 48px;
      padding-top: 40px;
      border-top: 1px solid var(--border);
    }

    .gmp-stat {
      text-align: center;
      padding: 8px 16px;
      position: relative;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .gmp-stat.visible { opacity: 1; transform: translateY(0); }
    .gmp-stat:nth-child(1) { transition-delay: 0.1s; }
    .gmp-stat:nth-child(2) { transition-delay: 0.2s; }
    .gmp-stat:nth-child(3) { transition-delay: 0.3s; }
    .gmp-stat:nth-child(4) { transition-delay: 0.4s; }

    .gmp-stat:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 20%;
      height: 60%;
      width: 1px;
      background: var(--border);
    }

    .gmp-stat-value {
      font-family: 'Playfair Display', serif;
      font-size: 2.6rem;
      font-weight: 900;
      font-style: italic;
      color: var(--accent);
      line-height: 1;
      margin-bottom: 8px;
    }
    .gmp-stat-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    /* === RESPONSIVE === */
    @media (max-width: 1024px) {
      .gmp-partners-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .gmp-wrap { padding: 64px 16px; }
      .gmp-partners-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .gmp-partner-card { padding: 32px 20px; }
      .gmp-partner-logo { height: 80px; }
      .gmp-stats { grid-template-columns: repeat(2, 1fr); }
      .gmp-stat:nth-child(2)::after { display: none; }
      .gmp-stat:nth-child(2) { border-right: none; }
      .gmp-stat:nth-child(3)::after { display: none; }
      .gmp-map-frame { padding: 24px 16px; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="gmp-wrap" ref={sectionRef}>
        <div className="gmp-inner">

          {/* PARTNERS */}
          <div className="gmp-partners-section">
            <div className={`gmp-header ${visible ? 'visible' : ''}`}>
              <div className="gmp-eyebrow">Trusted By</div>
              <h2 className="gmp-title">Our <span>Partners</span></h2>
              <div className="gmp-divider" />
            </div>

            <div className="gmp-partners-grid">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className={`gmp-partner-card ${visible ? 'visible' : ''}`}
                  onMouseEnter={() => setHoveredPartner(i)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <img src={p.logo} alt={p.name} className="gmp-partner-logo" />
                  <span className="gmp-partner-name">{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="gmp-map-section">
            <div className={`gmp-header ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="gmp-eyebrow">Global Reach</div>
              <h2 className="gmp-title">Clients All Around <span>the Globe</span></h2>
              <div className="gmp-divider" />
            </div>

            <div className="gmp-map-frame">
              <div className="gmp-map-img-wrap">
                <img
                  src="https://res.cloudinary.com/daxjhteb5/image/upload/v1776130254/updated_map_pqexf7.png"
                  alt="Global Footprint Map"
                />
              </div>

              <div className="gmp-stats">
                {stats.map((s, i) => (
                  <div key={i} className={`gmp-stat ${visible ? 'visible' : ''}`}>
                    <div className="gmp-stat-value">{s.value}</div>
                    <div className="gmp-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}