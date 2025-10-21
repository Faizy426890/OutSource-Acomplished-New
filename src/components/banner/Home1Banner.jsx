"use client"
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [employees, setEmployees] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    animateCounter(setClients, 150);
    animateCounter(setProjects, 500);
    animateCounter(setEmployees, 1200);
  }, []);

  return (
    <div style={styles.container} id="hero-container">
      <div style={styles.overlay}></div>
      
      <div style={styles.content} id="hero-content">
        <div style={styles.textSection}>
          <h1 style={styles.mainHeading}>
            Empowering Your Global Presence with Grow Edgex - Seamless Backend Support for Your Brand.
          </h1>
          
          <p style={styles.description}>
            We create and manage your branded offshore or onshore office - complete with your logo, your culture,
            and a dedicated team that works only for you. From recruitment and training to daily supervision and
            reporting, we handle everything so you can scale faster, stay in control, and focus on growth.
          </p>
          
          <div style={styles.buttonContainer} id="button-container">
            <a href="/service" style={styles.primaryButton} className="hero-btn">
  Get Started
</a>

<a href="/contact" style={styles.secondaryButton} className="hero-btn">
  Contact Sales
</a>
          </div>
        </div>

        <div style={styles.statsContainer} id="stats-container">
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{clients}+</div>
            <div style={styles.statLabel}>Happy Clients</div>
          </div>
          
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{projects}+</div>
            <div style={styles.statLabel}>Projects Completed</div>
          </div>
          
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{employees}+</div>
            <div style={styles.statLabel}>Employees Globally</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-btn {
          transition: all 0.3s ease;
        }
        
        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .hero-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          #hero-container {
            padding: 100px 40px 50px !important;
          }
        }

        @media (max-width: 768px) {
          #hero-container {
            padding: 130px 30px 40px !important;
            min-height: auto !important;
          }
          
          #hero-content {
            gap: 40px !important;
          }
          
          .hero-btn {
            width: 100%;
            max-width: 200px;
          }
          
          #stats-container {
            gap: 20px !important;
            padding: 0 10px !important;
          }
        }

        @media (max-width: 480px) {
          #hero-container {
            padding: 140px 20px 30px !important;
            background-attachment: scroll !important;
          }
          
          #hero-content {
            gap: 30px !important;
          }
          
          .hero-btn {
            max-width: 160px;
            padding: 12px 24px !important;
            font-size: 13px !important;
          }
          
          #button-container {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          #stats-container {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            max-width: 400px !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(20, 25, 30, 0.5)), url("https://res.cloudinary.com/diml90c1y/image/upload/v1760644456/WhatsApp_Image_2025-10-16_at_2.43.55_PM_qdro2v.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 60px 60px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(8, 20, 35, 0.8) 0%, rgba(12, 25, 40, 0.75) 100%)',
    zIndex: 1,
  },
  
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '60px',
  },
  
  textSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  
  mainHeading: {
    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
    fontWeight: '700',
    lineHeight: '1.3',
    color: '#97c6ffff',
    marginBottom: '25px',
    maxWidth: '900px',
    letterSpacing: '-0.5px',
  },
  
  description: {
    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
    lineHeight: '1.7',
    color: '#dfdfdf',
    marginBottom: '36px',
    maxWidth: '800px',
    fontWeight: '300',
  },
  
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  primaryButton: {
    backgroundColor: '#66dbf5ff',
    color: '#000000ff',
    padding: '15px 40px',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(30, 58, 95, 0.4)',
  },
  
  secondaryButton: {
    backgroundColor: '#ffffff',
    color: '#1e3a5f',
    padding: '15px 40px',
    fontSize: '14px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
  },
  
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '900px',
    padding: '0 20px',
  },
  
   statCard: {
    backgroundColor: 'transparent',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
    border: 'none',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },
  
  statNumber: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '700',
    color: '#71b1ff',
    marginBottom: '8px',
    lineHeight: '1',
  },
  
  statLabel: {
    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
    color: '#dfdfdf',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
};