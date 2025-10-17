"use client"
import React, { useState } from 'react'; 
import Image from 'next/image';

export default function GlobalMapPartners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    {
      name: "Partner 1",
      logo: "https://res.cloudinary.com/diml90c1y/image/upload/v1760649446/MicrosoftTeams-image__1_-removebg-preview_gx2m5i.png"
    },
    {
      name: "Partner 2",
      logo: "https://res.cloudinary.com/diml90c1y/image/upload/v1760649584/WhatsApp_Image_2025-10-16_at_4.18.44_PM-removebg-preview_nynzwo.png"
    }
  ];

  const containerStyle = {
    width: '100%',
    background: 'linear-gradient(to bottom, #f9fafb, #ffffff)',
    padding: '64px 16px',
  };

  const maxWidthContainerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
  };

  const partnersSectionStyle = {
    marginBottom: '80px',
  };

  const titleContainerStyle = {
    textAlign: 'center',
    marginBottom: '48px',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '16px',
  };

  const titleUnderlineStyle = {
    width: '96px',
    height: '4px',
    background: '#f97316',
    margin: '0 auto',
    borderRadius: '9999px',
  };

  const subtitleStyle = {
    marginTop: '24px',
    fontSize: '1.125rem',
    color: '#4b5563',
    maxWidth: '672px',
    margin: '24px auto 0',
  };

  const partnersGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
  };

  const getPartnerCardStyle = (index) => ({
    position: 'relative',
    background: 'transparent',
    borderRadius: '16px',
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '280px',
    height: '200px',
    transform: hoveredPartner === index ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  });

  const partnerLogoStyle = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    width: 'auto',
    height: 'auto',
    filter: hoveredPartner !== null && hoveredPartner !== undefined ? 
      `brightness(${hoveredPartner === partners.indexOf(partners.find((_, i) => i === hoveredPartner)) ? 1.1 : 1})` : 
      'brightness(1)',
    transition: 'all 0.3s ease',
  };

  const mapContainerStyle = {
    marginBottom: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const mapWrapperStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    background: 'transparent',
    borderRadius: '24px',
    padding: '40px', 
    paddingLeft:'20px',
    overflow: 'hidden',
  };

  const decorElement1Style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '256px',
    height: '256px',
    background: 'rgba(249, 115, 22, 0.1)',
    opacity: 0.3,
    marginRight: '-128px',
    marginTop: '-128px',
  };

  const decorElement2Style = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '256px',
    height: '256px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    filter: 'blur(64px)',
    opacity: 0.3,
    marginLeft: '-128px',
    marginBottom: '-128px',
  };

  const mapImageContainerStyle = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const mapImageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '24px',
    marginTop: '40px',
    paddingTop: '32px',
    borderTop: '1px solid #e5e7eb',
  };

  const statItemStyle = {
    textAlign: 'center',
  };

  const statNumberStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#f97316',
    marginBottom: '8px',
  };

  const statLabelStyle = {
    fontSize: '1rem',
    color: '#4b5563',
  };

  const responsiveStyles = `
    /* Mobile First - Extra Small Devices */
    @media (max-width: 480px) {
      .title { 
        font-size: 1.75rem !important; 
        line-height: 1.2 !important;
        padding: 0 8px !important;
      }
      .subtitle { 
        font-size: 0.938rem !important; 
        padding: 0 12px !important;
        line-height: 1.5 !important;
      }
      .stat-number { 
        font-size: 1.5rem !important; 
      }
      .stat-label { 
        font-size: 0.813rem !important; 
      }
      .map-wrapper { 
        padding: 0px !important;
        border-radius: 10px !important;
      }
      .partner-card { 
        width: 160px !important; 
        height: 120px !important;
        padding: 20px !important; 
      }
      .partners-grid {
        gap: 16px !important;
      }
      .partners-section {
        margin-bottom: 48px !important;
      }
      .map-container {
        margin-bottom: 32px !important;
      }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
        margin-top: 24px !important;
        padding-top: 24px !important;
      }
    }

    /* Small Devices */
    @media (min-width: 481px) and (max-width: 640px) {
      .title { 
        font-size: 2rem !important; 
        line-height: 1.2 !important;
      }
      .subtitle { 
        font-size: 1rem !important; 
        padding: 0 16px !important;
      }
      .stat-number { 
        font-size: 1.875rem !important; 
      }
      .stat-label { 
        font-size: 0.875rem !important; 
      }
      .map-wrapper { 
        padding: 28px !important;
        border-radius: 20px !important;
      }
      .partner-card { 
        width: 200px !important; 
        height: 150px !important;
        padding: 28px !important; 
      }
      .partners-grid {
        gap: 20px !important;
      }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 20px !important;
      }
    }

    /* Medium Devices - Tablets */
    @media (min-width: 641px) and (max-width: 768px) {
      .title { 
        font-size: 2.25rem !important; 
      }
      .subtitle {
        font-size: 1.063rem !important;
      }
      .partner-card { 
        width: 220px !important; 
        height: 170px !important;
        padding: 32px !important;
      }
      .map-wrapper {
        padding: 36px !important;
      }
      .stats-grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }

    /* Large Tablets and Small Laptops */
    @media (min-width: 769px) and (max-width: 1024px) {
      .title { 
        font-size: 2.5rem !important; 
      }
      .partner-card { 
        width: 250px !important; 
        height: 180px !important;
        padding: 36px !important;
      }
      .map-wrapper {
        padding: 40px !important;
      }
    }

    /* Desktop */
    @media (min-width: 1025px) {
      .map-wrapper {
        padding: 48px !important;
      }
    }

    /* Extra Large Screens */
    @media (min-width: 1440px) {
      .title {
        font-size: 3.5rem !important;
      }
      .subtitle {
        font-size: 1.25rem !important;
      }
      .map-wrapper {
        max-width: 1000px !important;
      }
    }

    /* Ensure proper spacing on all devices */
    .container {
      padding-left: clamp(16px, 5vw, 32px);
      padding-right: clamp(16px, 5vw, 32px);
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={containerStyle} className="container">
        <div style={maxWidthContainerStyle}>
          {/* Partners Section */}
          <div style={partnersSectionStyle} className="partners-section">
            <div style={titleContainerStyle}>
              <h2 className="title" style={titleStyle}>
                Our Partners
              </h2>
              <div style={titleUnderlineStyle}></div>
            </div>
            
            <div className="partners-grid" style={partnersGridStyle}>
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-card"
                  style={getPartnerCardStyle(index)}
                  onMouseEnter={() => setHoveredPartner(index)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={partnerLogoStyle}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div style={mapContainerStyle} className="map-container">
            <div style={titleContainerStyle}>
              <h2 className="title" style={titleStyle}>
                Clients All Around the Globe 
              </h2>
              <div style={titleUnderlineStyle}></div>
              <p className="subtitle" style={subtitleStyle}>
                Serving clients across continents with our worldwide network
              </p>
            </div>

            <div className="map-wrapper" style={mapWrapperStyle}>
             
              
              <div style={mapImageContainerStyle}>
                <Image 
                width={1000}
                height={1000} 
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1760656467/ChatGPT_Image_Oct_16_2025_06_14_11_PM_yxjkgy.png"
                  alt="Global Footprint Map"
                  style={mapImageStyle}
                />
              </div>

              <div style={statsGridStyle} className="stats-grid">
                <div style={statItemStyle}>
                  <div className="stat-number" style={statNumberStyle}>10+</div>
                  <div className="stat-label" style={statLabelStyle}>Locations</div>
                </div>
                <div style={statItemStyle}>
                  <div className="stat-number" style={statNumberStyle}>5</div>
                  <div className="stat-label" style={statLabelStyle}>Continents</div>
                </div>
                <div style={statItemStyle}>
                  <div className="stat-number" style={statNumberStyle}>24/7</div>
                  <div className="stat-label" style={statLabelStyle}>Support</div>
                </div>
                <div style={statItemStyle}>
                  <div className="stat-number" style={statNumberStyle}>100%</div>
                  <div className="stat-label" style={statLabelStyle}>Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}