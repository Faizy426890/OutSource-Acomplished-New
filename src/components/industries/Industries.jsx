'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const industriesData = [
 
  {
    icon: "📞",
    title: "Call Centre / Customer Support",
    description:
      "Our call center services enhance customer experience through multi-channel support, ensuring quick resolutions, stronger relationships, and improved customer satisfaction.",
    services: [
      "Inbound & Outbound Support",
      "Technical Helpdesk",
      "Sales & Lead Generation",
      "Complaint Handling & Resolution",
      "Multilingual Support",
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    shadowColor: "rgba(240, 147, 251, 0.3)",
  }, 
   {
    icon: "🏥",
    title: "Healthcare Sector",
    description:
      "We help healthcare providers, insurers, and administrators streamline operations with secure, accurate, and compliant support solutions designed to improve patient care and efficiency.",
    services: [
      "Medical Billing & Coding",
      "Patient Data Management",
      "Appointment Scheduling & Follow-ups",
      "Insurance Verification & Claims Processing",
      "24/7 Patient Support",
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shadowColor: "rgba(102, 126, 234, 0.3)",
  },
  { 
    icon: "💻",
    title: "IT Industry",
    description:
      "We support technology companies with IT-enabled services that drive efficiency, innovation, and cost reduction—helping businesses keep pace with digital transformation.",
    services: [
      "Technical Support & Troubleshooting",
      "Data Processing & Management",
      "Software Testing & QA Support",
      "Helpdesk & IT Infrastructure Support",
      "Website Development",
    ],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shadowColor: "rgba(79, 172, 254, 0.3)",
  },
];


const statsData = [
  {
    number: 500,
    label: "Trusted by 500+ Clients",
    suffix: "+",
    icon: "👥",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    number: 73,
    label: "Ongoing Projects",
    suffix: "",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    number: 200,
    label: "Employees",
    suffix: "+",
    icon: "👨‍💼",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  }
];

const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="industry-card rounded-lg"
    >
      {/* Header with Icon and Gradient */}
      <div className="card-header">
        <div className="icon-container">
          <span className="card-icon">{industry.icon}</span>
        </div>
        <div className="header-decoration"></div>
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-title">{industry.title}</h3>
        <p className="card-description">{industry.description}</p>

        {/* Services */}
        <div className="services-section">
          <h4 className="services-title">Our Services</h4>
          <ul className="services-list">
            {industry.services.map((service, serviceIndex) => (
              <motion.li
                key={serviceIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: serviceIndex * 0.1 + index * 0.2 }}
                className="service-item"
              >
                <div className="service-bullet"></div>
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .industry-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .industry-card:hover {
          box-shadow: 0 30px 60px ${industry.shadowColor};
          transform: translateY(-5px);
        }

        .card-header {
          height: 200px;
          background: ${industry.gradient};
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .industry-card:hover .card-header::before {
          opacity: 1;
        }

        .icon-container {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .industry-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
          background: rgba(255, 255, 255, 0.3);
        }

        .card-icon {
          font-size: 3rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .header-decoration {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .header-decoration::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
        }

        .card-content {
          padding: 40px 32px;
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-description {
          color: #666;
          line-height: 1.7;
          margin-bottom: 32px;
          font-size: 1rem;
        }

        .services-section {
          margin-top: 24px;
        }

        .services-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 12px;
        }

        .services-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: ${industry.gradient};
          border-radius: 2px;
        }

        .services-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
          transition: all 0.2s ease;
        }

        .service-item:hover {
          color: #1a1a1a;
          transform: translateX(4px);
        }

        .service-bullet {
          width: 8px;
          height: 8px;
          background: ${industry.gradient};
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
          box-shadow: 0 2px 4px ${industry.shadowColor};
        }
      `}</style>
    </motion.div>
  );
};

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="stat-card"
    >
      <div className="stat-background"></div>

      <div className="stat-content">
        <div className="stat-icon-container">
          <span className="stat-icon">{stat.icon}</span>
        </div>

        <div className="stat-number">
          {inView && (
            <CountUp
              start={0}
              end={stat.number}
              duration={2.5}
              suffix={stat.suffix}
              separator=","
            />
          )}
        </div>

        <h3 className="stat-label">{stat.label}</h3>

        <div className="stat-decoration"></div>
      </div>

      <style jsx>{`
        .stat-card {
          position: relative;
          background: #1a1a1a;
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .stat-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${stat.gradient};
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover .stat-background {
          opacity: 0.15;
        }

        .stat-content {
          position: relative;
          z-index: 2;
        }

        .stat-icon-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: ${stat.gradient};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon-container {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .stat-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
          line-height: 1;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 500;
          color: #cccccc;
          margin: 0 0 24px 0;
          transition: color 0.3s ease;
        }

        .stat-card:hover .stat-label {
          color: #ffffff;
        }

        .stat-decoration {
          width: 60px;
          height: 4px;
          background: ${stat.gradient};
          margin: 0 auto;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </motion.div>
  );
};

export default function Industries() {
  const [industriesRef, industriesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="container">
      {/* Industries Section */}
      <section className="industries-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Industries We <span className="title-gradient">Serve</span>
          </h2>
          <p className="section-description">
            Delivering exceptional service across diverse industries with precision,
            expertise, and unwavering commitment to excellence.
          </p>
          <div className="title-decoration"></div>
        </motion.div>

        <div ref={industriesRef} className="industries-grid">
          {industriesData.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Our <span className="title-gradient">Impact</span>
          </h2>
          <p className="section-description">
            Numbers that showcase our commitment to delivering outstanding results
          </p>
        </motion.div>

        {/* <div ref={statsRef} className="stats-grid">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div> */}
      </section>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
        }

        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .industries-section {
          padding: 120px 24px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .stats-section {
          padding: 120px 24px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .title-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.3rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .title-decoration {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          margin: 40px auto 0;
          border-radius: 2px;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 4rem;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .section-title {
            font-size: 4.5rem;
          }
        }
      `}</style>
    </div>
  );
}