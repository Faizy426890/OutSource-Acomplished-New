'use client';

import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function GlobalLocationsMap() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#ffffff',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px',
          padding: '0 20px'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#64748b',
            marginBottom: '12px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Our Global Network
          </p>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            color: '#0f172a',
            margin: '0',
            lineHeight: '1.2'
          }}>
            Global Presence
          </h1>
        </div>

        {/* Main Grid Layout */}
      <div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // two equal columns
    gap: '60px', // add clear space between left & right
    alignItems: 'start',
    padding: '0 40px', // some breathing room from the edges
  }}
>
  {/* Left Side - Map */}
  <div>
    <div
      style={{
        position: 'relative',
        width: '100%',
        background: '#f8fafc',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        minHeight: '400px',
      }}
    >
      <img
        src="https://res.cloudinary.com/diml90c1y/image/upload/v1760660173/ChatGPT_Image_Oct_16_2025_07_15_35_PM_vvxvce.png"
        alt="Global Locations Map"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </div>
  </div>

  {/* Right Side - Office Locations */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    }}
  >
    <div>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#0f172a',
          margin: '0 0 8px 0',
        }}
      >
        Office Locations
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#64748b',
          margin: '0',
          lineHeight: '1.6',
        }}
      >
        Connect with us at our offices worldwide
      </p>
    </div>

    {/* USA Office */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <MapPin style={{ width: '32px', height: '32px', color: '#00BCD4' }} />
      </div>
      <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            color: '#0f172a',
          }}
        >
          USA Office
        </h3>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '1.7',
            margin: '0',
            color: '#64748b',
          }}
        >
          400 Chisholm Place, Suite 219 B
          <br />
          Plano, TX 75075
        </p>
      </div>
    </div>

    {/* Pakistan Office */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <MapPin style={{ width: '32px', height: '32px', color: '#8BC34A' }} />
      </div>
      <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            color: '#0f172a',
          }}
        >
          Pakistan Office
        </h3>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '1.7',
            margin: '0',
            color: '#64748b',
          }}
        >
          230 A Canal View
          <br />
          Lahore , Pakistan
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}