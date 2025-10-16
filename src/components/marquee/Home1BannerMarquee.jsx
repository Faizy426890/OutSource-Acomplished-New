import React from "react";
import Marquee from "react-fast-marquee";

const Home1BannerMarquee = () => {
  const services = [
    "Call Center / Customer Support",
    "BPO Solutions",
    "Appointment Scheduling",
    "Website Development & IT",
    "Accounting & Payroll",
    "Backend Office Management"
  ];

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="0 0 17 17"
    style={{ fill: "#007bff" }} // 💙 blue color added
  >
    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
  </svg>
);


  return (
    <div style={{ 
      marginTop: '2.5rem',
      backgroundColor: '#1a1a1a',
      padding: '1rem 0'
    }}>
      <Marquee gradient={false} speed={50}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                whiteSpace: 'nowrap'
              }}>
                {starIcon}
               <h6
  style={{
    margin: 0,
    fontSize: "1rem",
    fontWeight: "600",
    color: "#ffffffff", // ← add your desired color here
  }}
>
  {service}
</h6>
              </div>
              {index < services.length - 1 && starIcon}
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {services.map((service, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                whiteSpace: 'nowrap',
                marginLeft: index === 0 ? '2rem' : '0'
              }}>
                {starIcon}
               <h6
  style={{
    margin: 0,
    fontSize: "1rem",
    fontWeight: "600",
    color: "white", // ← added white color
  }}
>
  {service}
</h6>

              </div>
              {index < services.length - 1 && (
<div style={{ margin: '0 1rem', color: '#007bff' }}>
  {starIcon}
</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Home1BannerMarquee;