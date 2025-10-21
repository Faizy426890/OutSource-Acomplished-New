"use client"

import { CheckCircle, Users, Globe, Headphones, Shield, Clock, Award, FileCheck } from "lucide-react"
import MainLayout from "../../../components/layout/MainLayout"
import BackOfficeMatrix from "../../../components/backoffice-checkbox"
import BackOfficeExpertise from "../../../components/backoffice-expertise" 
import Image from "next/image"

const App = () => {
  return (
    <> 
    <MainLayout> 
      <BackOfficeExpertise/>  
      <BackOfficeMatrix/> 

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
                    Backend Office <span>Management.</span>
                  </h2>
                  <p>
                    We provide dedicated backend office teams that operate as your own offshore/onshore extension under your complete supervision. Our professionals work from our secure facilities with your logo prominently displayed and CCTV access provided to you 24/7. We handle data entry, document processing, administrative support, and operational tasks while maintaining your brand identity and giving you full visibility into daily operations.
                  </p>
                  <ul className="key-features">
                    <li>
                      <CheckCircle size={15} />
                      Your Logo & Branding in Our Office
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      24/7 CCTV Access & Monitoring
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Data Entry & Processing
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Document Management
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Complete Operational Supervision
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
                    src="https://media.istockphoto.com/id/1485525425/photo/it-office-with-workplaces-for-employees-developers-with-yellow-chairs-and-computers.jpg?s=612x612&w=0&k=20&c=7J_NOpHcWYkjGkietzPC7EZXSm3OJK5UylNDJjIeO0E="
                    alt="Backend Office Management Services"
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
                    src="https://cdn.prod.website-files.com/63d926b37ec0d886c2d5d538/66bb6745c8851df356fa6578_66b1e34da1f5c724f2647f6a_6694de41de212dbc0b331a42_IC-foto--1---1-.jpeg"
                    alt="Back Office FAQ"
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
                          01. How does your backend office management service work?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We set up dedicated teams in our secure facilities that operate as your own backend office. Your branding is prominently displayed throughout the workspace, and we provide you with 24/7 CCTV access to monitor operations. Our teams handle data processing, administrative tasks, document management, and other backend functions while working under your direct supervision and following your processes.
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
                          02. What level of supervision and access will I have?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          You have complete supervision with 24/7 CCTV access to monitor your team's activities in real-time. We implement your logo throughout the workspace, and you can conduct virtual walk-throughs anytime. Our managers work closely with you to ensure processes are followed exactly as you specify, with regular reporting and performance monitoring.
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
                          03. How secure are your office facilities and data handling?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Our facilities feature enterprise-grade security including biometric access, 24/7 security personnel, and comprehensive CCTV coverage. All data handling follows strict security protocols with encrypted systems, secure data transfer, and compliance with international data protection standards. Your business information remains completely confidential and secure.
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
                          04. What backend office services can you handle?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We handle comprehensive backend operations including data entry and processing, document management, administrative support, customer service, order processing, inventory management, accounting support, and specialized operational tasks. Our teams are trained to follow your specific workflows and quality standards while maintaining your brand identity.
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
                          05. How do you ensure quality and process adherence?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We implement rigorous quality control measures including process documentation, regular audits, performance monitoring, and continuous training. Your dedicated team follows your standard operating procedures exactly, and our onsite managers ensure adherence to your quality standards. The CCTV access allows you to verify operations personally anytime.
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
                  What Makes Our Backend Office <span>Different.</span>
                </h2>
                <p>
                  Experience complete transparency and control with our unique backend office solution that combines your branding, 24/7 CCTV access, secure facilities, and dedicated teams working under your supervision as your own offshore extension.
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
                    <h5>24/7 CCTV Access & Monitoring</h5>
                    <p>
                      Complete visibility into your backend operations anytime. Access live CCTV feeds 24/7 to monitor your team's activities, ensure process adherence, and maintain quality control from anywhere in the world.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Award size={32} />
                  </div>
                  <div className="content">
                    <h5>Your Branding & Logo Display</h5>
                    <p>
                      Our facilities feature your logo prominently throughout the workspace, creating a seamless extension of your company. Team members work under your brand identity, maintaining consistency with your corporate culture and values.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <FileCheck size={32} />
                  </div>
                  <div className="content">
                    <h5>Complete Process Supervision</h5>
                    <p>
                      Your dedicated teams work under your direct supervision following your standard operating procedures. Our onsite managers ensure strict adherence to your processes while providing regular performance reports and quality checks.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Shield size={32} />
                  </div>
                  <div className="content">
                    <h5>Secure Enterprise Facilities</h5>
                    <p>
                      State-of-the-art secure facilities with biometric access, 24/7 security personnel, and comprehensive monitoring. All data handling follows strict security protocols with encrypted systems and secure infrastructure.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Users size={32} />
                  </div>
                  <div className="content">
                    <h5>Dedicated Team Allocation</h5>
                    <p>
                      Carefully selected teams matched to your specific operational needs. We assign professionals with the right skills and experience for your backend processes, ensuring seamless integration with your business operations.
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