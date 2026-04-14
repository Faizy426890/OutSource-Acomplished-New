'use client';

import React from 'react';

const GLOBE_R = 132;
const CX = 150;
const CY = 150;

function toSvg(lng, lat) {
  return {
    x: CX + (lng / 180) * GLOBE_R,
    y: CY - (lat / 90) * GLOBE_R,
  };
}

const usaPos = toSvg(-97, 33);
const pakPos = toSvg(74, 31.5);

const continents = [
  // North America
  'M 38,60 L 55,52 L 85,48 L 108,53 L 118,62 L 114,80 L 106,95 L 96,110 L 80,122 L 68,118 L 60,104 L 48,88 L 42,72 Z',
  // South America
  'M 88,130 L 118,124 L 128,140 L 124,162 L 118,185 L 108,218 L 96,222 L 87,202 L 82,178 L 80,152 Z',
  // Europe
  'M 143,68 L 160,62 L 174,66 L 178,74 L 168,84 L 155,86 L 143,80 Z',
  // Africa
  'M 145,116 L 182,110 L 190,130 L 192,158 L 178,196 L 162,200 L 146,180 L 140,155 L 140,130 Z',
  // Asia (main)
  'M 176,65 L 220,55 L 265,58 L 278,68 L 268,88 L 254,106 L 232,118 L 210,120 L 190,116 L 178,100 L 170,82 Z',
  // Australia
  'M 232,178 L 268,168 L 276,186 L 272,208 L 250,216 L 230,208 L 226,192 Z',
];

function GlobeViz() {
  const latLines = [-60, -30, 0, 30, 60];
  const lngLines = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];

  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
      aria-label="World globe showing office locations in USA and Pakistan"
    >
      <defs>
        <clipPath id="gc">
          <circle cx={CX} cy={CY} r={GLOBE_R} />
        </clipPath>
        <radialGradient id="globeGrad" cx="40%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#EDF5FC" />
          <stop offset="100%" stopColor="#D6E9F8" />
        </radialGradient>
      </defs>

      {/* Ocean fill */}
      <circle cx={CX} cy={CY} r={GLOBE_R} fill="url(#globeGrad)" />

      <g clipPath="url(#gc)">
        {/* Latitude lines */}
        {latLines.map(lat => {
          const y = CY - (lat / 90) * GLOBE_R;
          return (
            <line
              key={`lat${lat}`}
              x1={CX - GLOBE_R} y1={y}
              x2={CX + GLOBE_R} y2={y}
              stroke="#B8D4EC"
              strokeWidth={lat === 0 ? 0.9 : 0.5}
            />
          );
        })}

        {/* Longitude lines */}
        {lngLines.map(lng => {
          const x = CX + (lng / 180) * GLOBE_R;
          return (
            <line
              key={`lng${lng}`}
              x1={x} y1={CY - GLOBE_R}
              x2={x} y2={CY + GLOBE_R}
              stroke="#B8D4EC"
              strokeWidth={lng === 0 ? 0.9 : 0.5}
            />
          );
        })}

        {/* Continents */}
        {continents.map((d, i) => (
          <path key={i} d={d} fill="#C5DCB0" stroke="#A8C895" strokeWidth="0.8" />
        ))}

        {/* USA pulse rings */}
        <circle cx={usaPos.x} cy={usaPos.y} r="14" fill="#00BCD4" fillOpacity="0.1">
          <animate attributeName="r" values="8;18;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={usaPos.x} cy={usaPos.y} r="8" fill="#00BCD4" fillOpacity="0.2">
          <animate attributeName="r" values="5;12;5" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.2;0;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx={usaPos.x} cy={usaPos.y} r="5" fill="#00BCD4" />
        <circle cx={usaPos.x} cy={usaPos.y} r="2.5" fill="#ffffff" />

        {/* Pakistan pulse rings */}
        <circle cx={pakPos.x} cy={pakPos.y} r="14" fill="#4CAF50" fillOpacity="0.1">
          <animate attributeName="r" values="8;18;8" dur="3s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx={pakPos.x} cy={pakPos.y} r="8" fill="#4CAF50" fillOpacity="0.2">
          <animate attributeName="r" values="5;12;5" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.2;0;0.2" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx={pakPos.x} cy={pakPos.y} r="5" fill="#4CAF50" />
        <circle cx={pakPos.x} cy={pakPos.y} r="2.5" fill="#ffffff" />

        {/* Dashed connector */}
        <line
          x1={usaPos.x} y1={usaPos.y}
          x2={pakPos.x} y2={pakPos.y}
          stroke="#94A3B8" strokeWidth="0.8"
          strokeDasharray="4 3"
        />
      </g>

      {/* Globe border */}
      <circle cx={CX} cy={CY} r={GLOBE_R} stroke="#A8C8E0" strokeWidth="1.5" fill="none" />

      {/* USA label */}
      <text
        x={usaPos.x - 22} y={usaPos.y - 10}
        fontSize="8.5" fill="#007B8C"
        fontFamily="system-ui, sans-serif" fontWeight="600"
        letterSpacing="0.5"
      >
        USA
      </text>

      {/* Pakistan label */}
      <text
        x={pakPos.x + 8} y={pakPos.y - 10}
        fontSize="8.5" fill="#2E7D32"
        fontFamily="system-ui, sans-serif" fontWeight="600"
        letterSpacing="0.5"
      >
        PAKISTAN
      </text>
    </svg>
  );
}

export default function GlobalLocationsMap() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#F8F9FB',
      fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '80px 24px',
      boxSizing: 'border-box',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .loc-card {
          background: #ffffff;
          border: 1px solid #E4EAF1;
          border-radius: 20px;
          padding: 32px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          cursor: default;
        }

        .loc-card:hover {
          box-shadow: 0 16px 48px rgba(15, 23, 42, 0.08);
          transform: translateY(-3px);
        }

        .globe-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 80px !important;
          }
        }

        @media (max-width: 480px) {
          .header-eyebrow {
            font-size: 10px !important;
          }
          .loc-card {
            flex-direction: column;
            gap: 14px;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
          }}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#CBD5E1' }} />
            <span
              className="header-eyebrow"
              style={{
                fontSize: '11px',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: '#94A3B8',
                fontWeight: '500',
              }}
            >
              Our Global Network
            </span>
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#CBD5E1' }} />
          </div>

          <h1 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(34px, 5.5vw, 58px)',
            fontWeight: '400',
            color: '#0F172A',
            margin: '0 0 16px',
            lineHeight: '1.15',
            letterSpacing: '-0.5px',
          }}>
            Global Presence
          </h1>

          <p style={{
            fontSize: '15px',
            color: '#64748B',
            margin: '0 auto',
            maxWidth: '420px',
            lineHeight: '1.7',
            fontWeight: '300',
          }}>
            Two continents. One unified team delivering excellence across borders.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div
          className="content-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}
        >

          {/* Globe */}
          <div className="globe-wrapper">
            <GlobeViz />
          </div>

          {/* Office Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Section label */}
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#94A3B8',
              margin: '0 0 4px',
              fontWeight: '500',
            }}>
              Office Locations
            </p>

            {/* USA Card */}
            <div className="loc-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(0, 188, 212, 0.10)',
                border: '1px solid rgba(0, 188, 212, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="#00BCD4"
                  />
                </svg>
              </div>
              <div>
                <span style={{
                  fontSize: '10px',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: '#00ACC1',
                  fontWeight: '500',
                  display: 'block',
                  marginBottom: '6px',
                }}>
                  United States
                </span>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '21px',
                  fontWeight: '400',
                  margin: '0 0 10px',
                  color: '#0F172A',
                  lineHeight: '1.2',
                }}>
                  USA Office
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.85',
                  color: '#64748B',
                  margin: 0,
                  fontWeight: '300',
                }}>
                  400 Chisholm Place, Suite 219 B<br />
                  Plano, TX 75075
                </p>
              </div>
            </div>

            {/* Pakistan Card */}
            <div className="loc-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(76, 175, 80, 0.10)',
                border: '1px solid rgba(76, 175, 80, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="#4CAF50"
                  />
                </svg>
              </div>
              <div>
                <span style={{
                  fontSize: '10px',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: '#388E3C',
                  fontWeight: '500',
                  display: 'block',
                  marginBottom: '6px',
                }}>
                  Pakistan
                </span>
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '21px',
                  fontWeight: '400',
                  margin: '0 0 10px',
                  color: '#0F172A',
                  lineHeight: '1.2',
                }}>
                  Pakistan Office
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.85',
                  color: '#64748B',
                  margin: 0,
                  fontWeight: '300',
                }}>
                  230 A Canal View<br />
                  Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* Footer stat row */}
            <div style={{
              display: 'flex',
              gap: '1px',
              marginTop: '8px',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid #E4EAF1',
              background: '#E4EAF1',
            }}>
              {[
                { label: 'Offices', value: '2' },
                { label: 'Continents', value: '2' },
                { label: 'Countries', value: '2' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    background: '#ffffff',
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '26px',
                    fontWeight: '400',
                    color: '#0F172A',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontWeight: '500',
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}