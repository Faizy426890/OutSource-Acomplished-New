import React from "react";
import Marquee from "react-fast-marquee";

const Home1BannerMarquee = () => {
  const services = [
    "Call Center / Customer Support",
    "BPO Solutions",
    "Appointment Scheduling",
    "Website Development & IT",
    "Accounting & Payroll",
    "Backend Office Management",
  ];

  return (
    <div
      style={{
        marginTop: "2.5rem",
        backgroundColor: "#1a1a1a",
        padding: "1rem 0",
      }}
    >
      <Marquee gradient={false} speed={50}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            paddingRight: "4rem", // 👈 adds gap between end and start
          }}
        >
          {services.map((service, index) => (
            <h6
              key={index}
              style={{
                margin: 0,
                fontSize: "1rem",
                fontWeight: "600",
                color: "#ffffff",
                whiteSpace: "nowrap",
              }}
            >
              {service}
            </h6>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Home1BannerMarquee;
