'use client'

import React from 'react';
import { 
  Users, 
  Heart, 
  Settings, 
  Globe, 
  Calculator, 
  TrendingUp, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
   {
  id: 1,
  title: "Global Call Center Services",
  subtitle: "Worldwide",
  description: "Deliver exceptional customer support across the globe with our professional call center solutions. We provide 24/7 reliable, efficient, and scalable services tailored to businesses of all sizes.",
  icon: Users,
  delay: "200ms"
},
    {
      id: 2,
      title: "Virtual Patient Care Coordinator",
      subtitle: "All 50 States",
      description: "Professional virtual patient care coordination services for Home Health agencies and home care providers across all 50 states with certified coordinators.",
      icon: Heart,
      delay: "400ms"
    },
    {
      id: 3,
      title: "Virtual Administration Tasks",
      subtitle: "Any Industry",
      description: "Streamline your operations with our virtual administration services for Healthcare, Mortgage companies, Telecom, and other industries with skilled professionals.",
      icon: Settings,
      delay: "600ms"
    },
    {
      id: 4,
      title: "Website Development & IT",
      subtitle: "Any Industry",
      description: "Full-stack web development and IT solutions tailored for any industry. From responsive websites to complex web applications and IT infrastructure.",
      icon: Globe,
      delay: "800ms"
    },
    {
      id: 5,
      title: "Accounting & Payroll Services",
      subtitle: "Any Industry",
      description: "Professional accounting and payroll management services for businesses of all sizes. Accurate, timely, and compliant financial solutions across industries.",
      icon: Calculator,
      delay: "400ms"
    },
    {
      id: 6,
      title: "Digital Marketing",
      subtitle: "Growth Solutions",
      description: "Comprehensive digital marketing strategies to elevate your brand's online presence. SEO, content marketing, social media, and paid advertising solutions.",
      icon: TrendingUp,
      delay: "200ms"
    }
  ];

  return (
    <div 
      style={{
        backgroundColor: 'var(--dark-white-color)',
        padding: '120px 0',
        minHeight: '100vh'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {/* Header Section */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '80px'
          }}
        >
          <div>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                color: 'var(--primary-color1)',
                fontSize: '16px',
                fontWeight: '500',
                fontFamily: 'var(--font-inter)'
              }}
            >
              <Sparkles size={20} />
              <span>Professional Services</span>
              <Sparkles size={20} />
            </div>
            <h2 
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'var(--title-color)',
                margin: '0',
                lineHeight: '1.2',
                fontFamily: 'var(--font-hankenGrotesk)'
              }}
            >
              Explore Our Solutions
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px'
          }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                style={{
                  backgroundColor: 'var(--light-gray-color)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--primary-color1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                {/* Background Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, rgba(48, 103, 255, 0.1), rgba(48, 103, 255, 0.02))',
                    borderRadius: '0 20px 0 100px'
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'var(--primary-color1)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '30px',
                      boxShadow: '0 8px 25px rgba(48, 103, 255, 0.3)'
                    }}
                  >
                    <IconComponent 
                      size={36} 
                      color="white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h4 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: 'var(--title-color)',
                      marginBottom: '8px',
                      lineHeight: '1.3',
                      fontFamily: 'var(--font-hankenGrotesk)'
                    }}
                  >
                    {service.title}
                  </h4>

                  {/* Subtitle */}
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--primary-color1)',
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: 'var(--font-inter)'
                    }}
                  >
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p 
                    style={{
                      color: 'var(--text-color)',
                      lineHeight: '1.7',
                      marginBottom: '30px',
                      fontSize: '15px',
                      fontFamily: 'var(--font-inter)'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Explore Button */}
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px 32px',
                      backgroundColor: 'var(--primary-color1)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: 'var(--font-inter)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-color2)';
                      e.currentTarget.style.color = 'var(--dark-white-color)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-color1)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    onClick={() => {
                      // Handle click - you can add navigation logic here
                      console.log(`Exploring ${service.title}`);
                    }}
                  >
                    EXPLORE MORE
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;