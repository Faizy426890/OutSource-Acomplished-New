import React from "react";
import { Users, Globe, BarChart3, HeartPulse, ChevronRight } from "lucide-react";

const Home1Approach = () => {
  return (
    <>
      <div className="home1-approach-section mb-110" style={{ padding: '40px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  color: '#4f46e5', 
                  fontWeight: '600', 
                  fontSize: '1.1rem', 
                  marginBottom: '0.5rem', 
                  background: '#f1f5f9', 
                  padding: '8px 20px', 
                  borderRadius: '30px' 
                }}>
                  <Users size={16} />
                  BPO Excellence
                  <Users size={16} />
                </span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem' }}>
                  The OutSource Accomplished Approach
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="approach-area">
          <div className="container-fluid">
            <div className="row g-xl-4 gy-5 divider" style={{ position: 'relative' }}>
              {/* Care Coordination Card */}
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-approach" style={{
                  position: 'relative',
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  borderTop: '4px solid transparent',
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #4f46e5, #7c3aed)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  overflow: 'hidden'
                }}>
                  <div className="img-area" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/5995/5995245.png" 
                      alt="Care Coordination" 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'contain', 
                        borderRadius: '16px', 
                        padding: '12px', 
                        background: '#f1f5f9', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease'
                      }} 
                    />
                  </div>
                  <div className="dot" style={{ position: 'absolute', top: '30px', right: '30px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: '10px', height: '10px', borderRadius: '50%', background: '#4f46e5', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="approach-content-wrap" style={{ position: 'relative' }}>
                    <div className="scroll-content-area">
                      <div className="content scrollTextAni">
                        <span style={{ display: 'inline-block', color: '#4f46e5', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px' }}>Service 01</span>
                        <h5 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Staffing Services</h5>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                          Comprehensive patient care management with dedicated coordination teams.
                        </p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#4f46e5' }}>Patient Advocacy: </strong>Dedicated professionals ensuring patient needs are met.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#4f46e5' }}>Appointment Management: </strong>Efficient scheduling and follow-up system.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#4f46e5' }}>Care Plan Coordination: </strong>Seamless implementation of treatment plans.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#4f46e5' }}>Provider Communication: </strong>Bridge between patients and healthcare providers.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Care Coordination Card */}
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-approach" style={{
                  position: 'relative',
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  borderTop: '4px solid transparent',
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #10b981, #34d399)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  overflow: 'hidden'
                }}>
                  <div className="img-area" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/2965/2965938.png" 
                      alt="Virtual Care Coordination" 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'contain', 
                        borderRadius: '16px', 
                        padding: '12px', 
                        background: '#f0fdf4', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease'
                      }} 
                    />
                  </div>
                  <div className="dot" style={{ position: 'absolute', top: '30px', right: '30px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="approach-content-wrap" style={{ position: 'relative' }}>
                    <div className="scroll-content-area">
                      <div className="content scrollTextAni">
                        <span style={{ display: 'inline-block', color: '#10b981', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', background: '#f0fdf4', padding: '4px 12px', borderRadius: '20px' }}>Service 02</span>
                        <h5 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Virtual Care Coordinator</h5>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                          Remote care management solutions for modern healthcare needs.
                        </p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#10b981' }}>Telehealth Support: </strong>Remote patient monitoring and virtual consultations.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#10b981' }}>Digital Health Records: </strong>Secure management of electronic health information.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#10b981' }}>Remote Patient Monitoring: </strong>Continuous health tracking with technology.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#10b981' }}>Virtual Assistance: </strong>24/7 support for patients and providers.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Development Card */}
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="single-approach" style={{
                  position: 'relative',
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  borderTop: '4px solid transparent',
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #8b5cf6, #a78bfa)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  overflow: 'hidden'
                }}>
                  <div className="img-area" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" 
                      alt="Website Development" 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'contain', 
                        borderRadius: '16px', 
                        padding: '12px', 
                        background: '#faf5ff', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease'
                      }} 
                    />
                  </div>
                  <div className="dot" style={{ position: 'absolute', top: '30px', right: '30px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: '10px', height: '10px', borderRadius: '50%', background: '#8b5cf6', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="approach-content-wrap" style={{ position: 'relative' }}>
                    <div className="scroll-content-area">
                      <div className="content scrollTextAni">
                        <span style={{ display: 'inline-block', color: '#8b5cf6', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', background: '#faf5ff', padding: '4px 12px', borderRadius: '20px' }}>Service 03</span>
                        <h5 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Website Development</h5>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                          Professional web solutions tailored to healthcare and business needs.
                        </p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#8b5cf6' }}>Responsive Design: </strong>Websites that work seamlessly across all devices.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#8b5cf6' }}>Healthcare Portals: </strong>Secure patient portals and information systems.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#8b5cf6' }}>E-Commerce Solutions: </strong>Online platforms for healthcare products and services.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#8b5cf6' }}>Maintenance & Support: </strong>Ongoing technical support and updates.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Marketing Card */}
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
              >
                <div className="single-approach" style={{
                  position: 'relative',
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  borderTop: '4px solid transparent',
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #f59e0b, #fbbf24)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  overflow: 'hidden'
                }}>
                  <div className="img-area" style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/5036/5036951.png" 
                      alt="Digital Marketing" 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'contain', 
                        borderRadius: '16px', 
                        padding: '12px', 
                        background: '#fffbeb', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease'
                      }} 
                    />
                  </div>
                  <div className="dot" style={{ position: 'absolute', top: '30px', right: '30px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="approach-content-wrap" style={{ position: 'relative' }}>
                    <div className="scroll-content-area">
                      <div className="content scrollTextAni">
                        <span style={{ display: 'inline-block', color: '#f59e0b', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', background: '#fffbeb', padding: '4px 12px', borderRadius: '20px' }}>Service 04</span>
                        <h5 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem' }}>Digital Marketing</h5>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                          Strategic online marketing to grow your healthcare practice or business.
                        </p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#f59e0b' }}>SEO Optimization: </strong>Improve visibility in search engine results.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#f59e0b' }}>Content Marketing: </strong>Educational content that engages your audience.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#f59e0b' }}>Social Media Management: </strong>Build your online presence and community.
                          </li>
                          <li style={{ marginBottom: '0.8rem', paddingLeft: '24px', position: 'relative', color: '#475569', lineHeight: '1.5' }}>
                            <strong style={{ color: '#f59e0b' }}>Performance Analytics: </strong>Data-driven insights to optimize your strategy.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Approach;