"use client"

import { CheckCircle, Users, Globe, Headphones, Shield, Clock, Award, FileCheck } from "lucide-react"
import MainLayout from "../../../components/layout/MainLayout"
import TeleMarketingMatrix from "../../../components/telemarketing-checkbox"
import TeleMarketingExpertise from "../../../components/telemarketing-expertise" 
import Image from "next/image"

const App = () => {
  return (
    <> 
    <MainLayout> 
      <TeleMarketingExpertise/>  
      <TeleMarketingMatrix/> 

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
                    Tele Marketing <span>Services.</span>
                  </h2>
                  <p>
                    We provide comprehensive telemarketing services with professional callers who drive results for your business. Our experienced telemarketers handle everything from lead generation and appointment setting to sales conversions and customer follow-ups. With script optimization, call monitoring, and performance tracking, we deliver measurable ROI and quality customer interactions that build your brand and grow your business.
                  </p>
                  <ul className="key-features">
                    <li>
                      <CheckCircle size={15} />
                      Lead Generation & Qualification
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Appointment Setting
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Sales & Conversion Calls
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Customer Follow-ups
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Market Research Surveys
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
                    src="https://www.telecominc.com/wp-content/uploads/AdobeStock_336131607.jpeg"
                    alt="Tele Marketing Services"
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
                    src="https://d3vyq0yiuvx01p.cloudfront.net/wp-content/uploads/2020/05/types-of-callcenter.jpg"
                    alt="Tele Marketing FAQ"
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
                          01. What types of telemarketing services do you offer?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We offer comprehensive telemarketing services including B2B and B2C lead generation, appointment setting, sales conversions, customer follow-ups, market research surveys, event registrations, and customer retention campaigns. Our services are tailored to your specific industry and target audience with customized scripts and calling strategies.
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
                          02. How do you ensure quality in telemarketing calls?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We implement rigorous quality assurance including call monitoring, script adherence checks, and performance tracking. Our telemarketers undergo comprehensive training in communication skills, product knowledge, and objection handling. We conduct regular call reviews and provide continuous coaching to maintain high conversion rates and professional call standards.
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
                          03. What kind of reporting and analytics do you provide?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We provide detailed daily and weekly reports including call volumes, connect rates, conversion metrics, appointment settings, and sales figures. Our analytics dashboard gives you real-time insights into campaign performance, agent productivity, and ROI. You'll have access to call recordings, lead quality assessments, and comprehensive performance analysis.
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
                          04. Can you handle specialized industries or complex products?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Absolutely. We have experience across various industries including healthcare, technology, finance, education, and professional services. Our telemarketers receive specialized training for complex products and services. We develop industry-specific scripts and calling strategies to effectively communicate value propositions and handle technical inquiries.
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
                          05. How do you source and manage calling lists?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We work with both provided lists and can source targeted calling lists based on your ideal customer profile. Our list management includes data cleaning, verification, and segmentation to ensure optimal calling efficiency. We maintain DNC compliance and follow telemarketing regulations while continuously optimizing lists based on performance data.
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
                  What Makes Our Tele Marketing <span>Different.</span>
                </h2>
                <p>
                  Experience superior telemarketing results with our unique approach combining professional callers, comprehensive training, real-time monitoring, and data-driven optimization for maximum conversions and ROI.
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
                    <h5>24/7 Calling Capabilities</h5>
                    <p>
                      Reach your target audience across different time zones with our flexible calling schedules. We optimize call times based on response patterns and can conduct campaigns during evenings and weekends for maximum reach and conversion opportunities.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Award size={32} />
                  </div>
                  <div className="content">
                    <h5>Professional Caller Training</h5>
                    <p>
                      Comprehensive training in communication skills, objection handling, and product knowledge. Our telemarketers undergo rigorous coaching to ensure they represent your brand professionally and convert leads effectively.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <FileCheck size={32} />
                  </div>
                  <div className="content">
                    <h5>Real-time Call Monitoring</h5>
                    <p>
                      Live call monitoring and instant feedback to maintain quality standards. Our supervisors listen to calls in real-time, providing immediate coaching and ensuring script adherence and professional communication.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Shield size={32} />
                  </div>
                  <div className="content">
                    <h5>Compliance & Regulation Adherence</h5>
                    <p>
                      Strict compliance with telemarketing regulations including DNC lists and calling hours. We maintain proper documentation and follow industry best practices to protect your brand reputation.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Users size={32} />
                  </div>
                  <div className="content">
                    <h5>Specialized Industry Teams</h5>
                    <p>
                      Dedicated teams trained for specific industries and product types. We match telemarketers with relevant experience to your campaign requirements for better engagement and higher conversion rates.
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