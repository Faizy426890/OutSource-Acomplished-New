"use client"

import { CheckCircle, Users, Globe, Headphones, Shield, Clock, Award, FileCheck } from "lucide-react"
import MainLayout from "../../../components/layout/MainLayout"
import CustomerSupportMatrix from "../../../components/customersupport-checkbox"
import SupportExpertise from "../../../components/support-expertise" 
import Image from "next/image"

const App = () => {
  return (
    <> 
    <MainLayout> 
      <SupportExpertise/>  
      <CustomerSupportMatrix/> 

      <div className="service-details-page pt-120 mb-120" id="service-details-section">
        <div className="container">
          <div className="service-details-top-area mb-80">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-top-content">
                  <h2>
                    Customer Support <span>Services.</span>
                  </h2>
                  <p>
                    We provide dedicated customer support teams that seamlessly integrate with your business to handle inbound calls, email support, live chat, technical assistance, complaint resolution and more. Our unique approach combines local time zone operations, comprehensive training programs, quality assurance oversight, and secure infrastructure to deliver exceptional customer experiences.
                  </p>
                  <ul className="key-features">
                    <li>
                      <CheckCircle size={15} />
                      Inbound Call Handling
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Email Support Management
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Live Chat Support
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Technical Troubleshooting
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Complaint Resolution
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-img">
                  <Image width={800}   
  height={600}  loading="lazy"
                    src="https://s.wsj.net/public/resources/images/BN-RM771_AFINIT_GR_20170105140613.jpg"
                    alt="Customer Support Services"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="service-details-faq-area wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-lg-4 gy-5 align-items-xl-center">
              <div className="col-lg-6">
                <div className="service-details-faq-img">
                  <Image width={800}   
  height={600}  loading="lazy"
                    src="https://images.ctfassets.net/ukazlt65o6hl/1BalUtkZDLYoeLy0Atl6R1/515ced205ad4bb5186e2f8e47f6f3e72/call-center-skills-for-agent-success-banner.jpeg"
                    alt="FAQ"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseOne"
                          aria-expanded="true"
                          aria-controls="faqcollapseOne"
                        >
                          01. What customer support services do you offer and how do they work?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We provide comprehensive customer support including inbound call handling, email support, live chat, technical troubleshooting, and complaint resolution. Our support teams work in your local time zone to ensure seamless customer service during your business hours, with real-time monitoring and quality assurance.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseTwo"
                          aria-expanded="false"
                          aria-controls="faqcollapseTwo"
                        >
                          02. How do you ensure quality in your customer support services?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Every support agent undergoes a comprehensive 2-month training program covering communication skills, product knowledge, and conflict resolution, followed by 1 month of supervised calls. Our quality assurance team continuously monitors interactions and provides feedback to maintain high service standards and customer satisfaction.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseThree"
                          aria-expanded="false"
                          aria-controls="faqcollapseThree"
                        >
                          03. How secure is my customer data with your service?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We prioritize data security with ISO 27001 certified infrastructure. All customer interactions and data are handled through secure systems with encryption, and our agents follow strict data protection protocols. No sensitive customer information is stored on personal devices or unsecured platforms.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseFour"
                          aria-expanded="false"
                          aria-controls="faqcollapseFour"
                        >
                          04. What service plans do you offer for customer support?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We offer flexible support plans: dedicated full-time agents for 24/7 coverage, part-time teams for business hours only, and specialized teams for technical support or premium customer service. Each plan includes quality monitoring, performance reporting, and regular service reviews to ensure optimal results.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseFive"
                          aria-expanded="false"
                          aria-controls="faqcollapseFive"
                        >
                          05. How do you match support agents to my business needs?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We carefully match agents based on your industry, product complexity, customer demographics, and support requirements. Whether you need general customer service, technical support specialists, or sales-oriented agents, we ensure the right skills and personality fit for your brand voice and customer expectations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
          
      <div className="service-details-feature-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title5 mb-70 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span className="sub-title5 two">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  Our Unique Approach
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  What Makes Our Support Services <span>Different.</span>
                </h2>
                <p>
                  Experience the power of our unique approach combining local time zone operations, comprehensive training, quality assurance oversight, secure infrastructure, and custom expertise matching for superior customer support.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="service-feature-list">
                <li className="single-feature wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Clock size={32} />
                  </div>
                  <div className="content">
                    <h5>24/7 Availability</h5>
                    <p>
                      Round-the-clock support coverage for your customers. Our teams work in shifts to ensure someone is always available to assist your customers, regardless of time zones or holidays, providing consistent service whenever they need help.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Award size={32} />
                  </div>
                  <div className="content">
                    <h5>Comprehensive Training</h5>
                    <p>
                      Every support agent completes a 2-month intensive training program covering communication, product knowledge, and conflict resolution, followed by 1 month of supervised live calls. This ensures they're fully prepared to represent your brand effectively.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <FileCheck size={32} />
                  </div>
                  <div className="content">
                    <h5>Quality Assurance Monitoring</h5>
                    <p>
                      Continuous evaluation of customer interactions to maintain high standards. Our dedicated QA team regularly reviews calls, emails, and chat sessions, providing constructive feedback and coaching to ensure consistent service excellence.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Shield size={32} />
                  </div>
                  <div className="content">
                    <h5>Secure Data Handling</h5>
                    <p>
                      All customer interactions are handled through secure, encrypted systems with ISO 27001 certified infrastructure. We maintain strict data protection protocols to ensure your customer information remains confidential and secure at all times.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Users size={32} />
                  </div>
                  <div className="content">
                    <h5>Custom Skill Matching</h5>
                    <p>
                      Agents selected based on your specific industry and customer needs. We match support professionals to your business requirements, whether you need technical specialists, sales-oriented agents, or general customer service representatives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
    </MainLayout>
    </>
  )
}

export default App