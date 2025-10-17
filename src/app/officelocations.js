'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export default function GlobalLocationsMap() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#ffffff',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <style jsx global>{`
        @media (min-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
            padding: 0 40px !important;
          }
          .header-section {
            padding: 0 40px !important;
            margin-bottom: 60px !important;
          }
        }
        @media (max-width: 1023px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .header-section {
            padding: 0 20px !important;
            margin-bottom: 40px !important;
          }
          .map-container {
            width: 100% !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 640px) {
          .main-grid {
            gap: 32px !important;
            padding: 0 !important;
          }
          .header-section {
            padding: 0 !important;
          }
          .office-title {
            font-size: 24px !important;
          }
          .section-subtitle {
            font-size: 14px !important;
          }
        }
      `}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div className="header-section" style={{ 
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
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: '700',
            color: '#0f172a',
            margin: '0',
            lineHeight: '1.2'
          }}>
            Global Presence
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start',
          padding: '0 20px'
        }}>
          {/* Left Side - Map */}
          <div className="map-container">
            <div style={{
              position: 'relative',
              width: '100%',
              background: '#f8fafc',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0'
            }}>
              <img
                src="https://res.cloudinary.com/diml90c1y/image/upload/v1760660173/ChatGPT_Image_Oct_16_2025_07_15_35_PM_vvxvce.png"
                alt="Global Locations Map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  minHeight: '300px',
                  maxHeight: '600px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* Right Side - Office Locations */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            <div>
              <h2 className="office-title" style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#0f172a',
                margin: '0 0 8px 0'
              }}>
                Office Locations
              </h2>
              <p className="section-subtitle" style={{
                fontSize: '15px',
                color: '#64748b',
                margin: '0',
                lineHeight: '1.6'
              }}>
                Connect with us at our offices worldwide
              </p>
            </div>

            {/* USA Office */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <MapPin style={{ 
                  width: '32px', 
                  height: '32px', 
                  color: '#00BCD4' 
                }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#0f172a'
                }}>
                  USA Office
                </h3>
                <p style={{
                  fontSize: 'clamp(13px, 1.5vw, 14px)',
                  lineHeight: '1.7',
                  margin: '0',
                  color: '#64748b'
                }}>
                  400 Chisholm Place, Suite 219 B<br />
                  Plano, TX 75075
                </p>
              </div>
            </div>

            {/* Pakistan Office */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <MapPin style={{ 
                  width: '32px', 
                  height: '32px', 
                  color: '#8BC34A' 
                }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#0f172a'
                }}>
                  Pakistan Office
                </h3>
                <p style={{
                  fontSize: 'clamp(13px, 1.5vw, 14px)',
                  lineHeight: '1.7',
                  margin: '0',
                  color: '#64748b'
                }}>
                  230 A Canal View<br />
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}