'use client'

import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Globe, 
  Calculator, 
  Settings,
  FileText,
  Target,
  TrendingUp,
  Headphones,
  Phone,
  Building2,
  Sparkles
} from 'lucide-react'; 

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [ 
    {
      id: 1,
      title: "Call Center / Customer Support",
      description: "Deliver exceptional customer support across the globe with our professional call center solutions. 24/7 reliable, efficient services.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      url: "/service/service3",
    }, 
      {
      id: 9,
      title: "BPO Solutions",
      description: "Comprehensive business process outsourcing solutions to handle your freight billing, POD tracking, shipment tracking.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
      url: "/service/bpo",
    },
    {
      id: 2,
      title: "Appointment Scheduling",
      description: "Professional virtual patient care coordination services for Home Health agencies across all 50 states with certified coordinators.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      url: "/service/virtualcoordinator",
    },
    {
      id: 3,
      title: "Website Development & IT",
      description: "Full-stack web development and IT solutions tailored for any industry. From responsive websites to complex applications.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      url: "/service/webdevelopment",
    },
    {
      id: 4,
      title: "Accounting & Payroll",
      description: "Finance and accounting outsourcing services for all your business office processes, finance & accounting needs.",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
      url: "/service/accounting",
    },
    {
      id: 5,
      title: "Backend Office Management",
      description: "Streamline your operations with our comprehensive backend office management solutions for maximum efficiency.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
      url: "/service/backend",
    },
    {
      id: 6,
      title: "Data Entry Services",
      description: "Accurate and fast data entry services to handle your document processing, data management lifecycle & much more.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      url: "/service/dataentry",
    },
    {
      id: 7,
      title: "Lead Generation",
      description: "Generate quality leads and increase your social impact with our targeted lead generation strategies.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      url: "/service/leadgen",
    },
    {
      id: 8,
      title: "Digital Marketing",
      description: "Increase customer satisfaction & visibility while reducing costs with our comprehensive digital marketing solutions.",
      icon: TrendingUp,
      image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?semt=ais_hybrid&w=740&q=80",
      url: "/service/marketing",
    },
    {
      id: 10,
      title: "Tele Marketing",
      description: "100% on time, audited bill processing & management services with our professional telemarketing excellence team.",
      icon: Phone,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop",
      url: "/service/telemarketing",
    },
    {
      id: 11,
      title: "24/7 Chat Support",
      description: "Multi-domain claims processing, insurance data entry & much more with our always available chat support services.",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
      url: "/service/chatsupport",
    },
  ];

  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        padding: '80px 0',
      }}
    >
      <div 
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 40px'
        }}
        className="services-container"
      >
        {/* Header Section */}
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '15px',
              color: '#1c234f',
              fontSize: '12px',
              fontWeight: '700',
              fontFamily: 'var(--font-inter)',
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}
          >
            <Sparkles size={16} />
            <span>PROFESSIONAL SERVICES</span>
            <Sparkles size={16} />
          </div>
          <h2 
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#000000',
              margin: '0',
              lineHeight: '1.2',
              fontFamily: 'var(--font-hankenGrotesk)',
              letterSpacing: '-1px',
              textTransform: 'uppercase'
            }}
            className="main-heading"
          >
            Comprehensive Business Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px'
          }}
          className="services-grid"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return ( 
              <a
                href={service.url}
                key={service.id}
                style={{ 
                  textDecoration: "none",
                  display: 'block'
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  style={{
                    backgroundColor: '#000000',
                    overflow: 'hidden',
                    border: 'none',
                    borderRadius: '0',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: isHovered ? 'scale(1)' : 'scale(1)',
                    zIndex: isHovered ? 10 : 1,
                    boxShadow: isHovered 
                      ? '0 30px 60px rgba(0, 0, 0, 0.3)' 
                      : 'none'
                  }}
                  className="service-card"
                >
                  {/* Background Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.4s ease',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      zIndex: 1
                    }}
                  />
                  
                  {/* Dark Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))',
                      zIndex: 2,
                      transition: 'background 0.4s ease'
                    }}
                  />

                  {/* Content Container */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 3,
                      padding: '10px 5px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between'
                    }}
                    className="service-content"
                  >
                    {/* Top Section */}
                    <div>
                      {/* Icon */}
                      <div
                        style={{
                          marginBottom: '15px',
                          opacity: isHovered ? 0.9 : 1,
                          transition: 'opacity 0.3s ease'
                        }}
                        className="service-icon"
                      >
                        <IconComponent 
                          size={38} 
                          color="white"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Title */}
                      <h3 
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: '#ffffff',
                          marginBottom: '12px',
                          lineHeight: '1.3',
                          fontFamily: 'var(--font-hankenGrotesk)',
                          letterSpacing: '-0.3px',
                          textTransform: 'uppercase'
                        }}
                        className="service-title"
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Bottom Section - Description */}
                    <div>
                      <p
                        style={{
                          fontSize: '14px',
                          fontWeight: '400',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.5',
                          fontFamily: 'var(--font-inter)',
                          margin: 0,
                          marginBottom: '15px',
                          opacity: isHovered ? 1 : 0.85,
                          transition: 'opacity 0.3s ease'
                        }}
                        className="service-description"
                      >
                        {service.description}
                      </p>

                      {/* Explore More Button */}
                      <button
                        style={{
                          backgroundColor: '#ffffff',
                          color: '#000000',
                          border: 'none',
                          padding: '10px 20px',
                          fontSize: '13px',
                          fontWeight: '600',
                          fontFamily: 'var(--font-inter)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                          pointerEvents: isHovered ? 'auto' : 'none'
                        }}
                        className="explore-button"
                      >
                        Explore More
                        <span style={{ fontSize: '16px' }}>→</span>
                      </button>
                    </div>
                  </div>
                </div> 
              </a>
            );
          })}
        </div>

        {/* Responsive CSS */}
        <style jsx>{`
          @media (max-width: 1200px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }

          @media (max-width: 1024px) {
            .services-container {
              padding: 0 20px !important;
            }
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 10px !important;
            }
            .service-card {
              height: 280px !important;
            }
            .service-description {
              display: none !important;
            }
            .explore-button {
              display: none !important;
            }
            .main-heading {
              font-size: 2rem !important;
            }
          }
          
          @media (max-width: 768px) {
            .services-container {
              padding: 0 15px !important;
            }
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 8px !important;
            }
            .service-card {
              height: 240px !important;
            }
            .service-description {
              display: none !important;
            }
            .explore-button {
              display: none !important;
            }
            .main-heading {
              font-size: 1.75rem !important;
              letter-spacing: -0.5px !important;
            }
          }

          @media (max-width: 640px) {
            .services-container {
              padding: 0 12px !important;
            }
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 8px !important;
            }
            .service-card {
              height: 200px !important;
            }
            .service-content {
              padding: 20px 15px !important;
            }
            .service-description {
              display: none !important;
            }
            .explore-button {
              display: none !important;
            }
            .main-heading {
              font-size: 1.5rem !important;
              letter-spacing: -0.5px !important;
            }
          }

          @media (max-width: 480px) {
            .services-container {
              padding: 0 10px !important;
            }
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 6px !important;
            }
            .service-card {
              height: 180px !important;
            }
            .service-content {
              padding: 15px 12px !important;
            }
            .service-title {
              font-size: 0.95rem !important;
              margin-bottom: 8px !important;
            }
            .service-icon svg {
              width: 28px !important;
              height: 28px !important;
            }
            .service-description {
              display: none !important;
            }
            .explore-button {
              display: none !important;
            }
            .main-heading {
              font-size: 1.25rem !important;
              letter-spacing: -0.3px !important;
            }
          }

          @media (max-width: 375px) {
            .service-card {
              height: 160px !important;
            }
            .service-title {
              font-size: 0.85rem !important;
            }
            .main-heading {
              font-size: 1.1rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ServicesSection;