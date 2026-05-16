"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home2Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation for required text fields
    if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address!', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          smsConsent // This will send true/false to your backend
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('🎉 Message sent successfully! We\'ll get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          message: ''
        });
        setSmsConsent(false);
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.', {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.', {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="home2-contact-section mb-110">
        <div className="container">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="contact-content">
                <div
                  className="section-title2 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 11 11">
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    Free Audit
                    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 11 11">
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>Explore Our Solutions</h2>
                  <p>
                    We're happy to answer any questions you may have and we help
                    you determine which of our services best fit your needs.
                  </p>
                </div>
                <ul className="wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  {/* List Items (Shortened for space, keep your original list here) */}
                  <li>Ready to boost your online presence</li>
                  <li>Click here to unlock your digital success!</li>
                  <li>Don't miss Join our exclusive insights</li>
                  <li>Transform your business our digital solutions</li>
                </ul>
                <div className="social-area wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <h6>Social Just You Connected Us!</h6>
                  <ul className="social-list">
                    <li><a href="https://www.linkedin.com/company/outsource-accomplished/"><i className="bi bi-linkedin" /> <span>LinkedIn</span></a></li>
                    <li><a href="https://www.facebook.com/share/1CnVgP2V9X/?mibextid=wwXIfr"><i className="bi bi-facebook" /> <span>Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/growedge_x/"><i className="bi bi-instagram" /> <span>Instagram</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="contact-form-wrap wow animate zoomIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                <h3>Get in Touch with us </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Full Name *</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} disabled={isSubmitting} />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Phone Number *</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} disabled={isSubmitting} />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Your Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-30">
                      <div className="form-inner">
                        <label>Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          style={{
                            width: '100%', height: '150px', padding: '12px 16px', fontSize: '16px',
                            border: '1px solid #ccc', borderRadius: '6px', resize: 'vertical'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* OPTIONAL SMS CONSENT SECTION */}
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label style={{ 
                          display: 'flex', alignItems: 'flex-start', cursor: 'pointer',
                          fontSize: '14px', lineHeight: '1.6' 
                        }}>
                          <input 
                            type="checkbox"
                            checked={smsConsent}
                            onChange={(e) => setSmsConsent(e.target.checked)}
                            disabled={isSubmitting}
                            style={{
                              marginRight: '10px', marginTop: '4px', cursor: 'pointer',
                              width: '18px', height: '18px', flexShrink: 0
                            }}
                          />
                      <span style={{ color: '#666' }}>
  (Optional) By checking this box, you consent to receive SMS messages from
  <strong> GrowEdgeX</strong> related to conversational purposes. Message frequency may vary. Message and data rates may apply.
  You may reply <strong>STOP</strong> at any time to opt out or <strong>HELP</strong> for assistance.
  View our{" "}
  <a href="/privacy-policy" style={{ color: '#007bff', textDecoration: 'underline' }}>
    Privacy Policy
  </a>{" "}
  and{" "}
  <a href="/terms" style={{ color: '#007bff', textDecoration: 'underline' }}>
    Terms & Conditions
  </a>.
</span>

                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-inner">
                        <button
                          className="primary-btn2"
                          type="submit"
                          disabled={isSubmitting}
                          data-text={isSubmitting ? "Sending..." : "Submit Now"}
                        >
                          <span>{isSubmitting ? "Sending..." : "Submit Now"}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Contact;
