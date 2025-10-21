"use client"

import { CheckCircle, Users, Globe, Headphones, Shield, Clock, Award, FileCheck } from "lucide-react"
import MainLayout from "../../../components/layout/MainLayout"
import PatientCareMatrix from "../../../components/patientcare-checkbox"
import CareExpertise from "../../../components/care-expertise" 
import Image from "next/image"

const App = () => {
  return (
    <> 
    <MainLayout> 
      <CareExpertise/>  
      <PatientCareMatrix/> 

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
                    Virtual Patient Care <span>Coordination.</span>
                  </h2>
                  <p>
                    We provide dedicated Virtual Patient Care Coordinators who seamlessly integrate with your healthcare team to manage appointment scheduling, patient communication, follow-up care, medical documentation, and care coordination. Our unique approach combines healthcare expertise, comprehensive training, quality assurance oversight, and HIPAA-compliant infrastructure to ensure exceptional patient experiences and smooth clinical operations.
                  </p>
                  <ul className="key-features">
                    <li>
                      <CheckCircle size={15} />
                      Appointment Scheduling & Management
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Patient Communication & Education
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Care Follow-up & Reminder Systems
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Medical Documentation Support
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Care Coordination & Referral Management
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
                    src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1059107342DevelopmentAssociate.jpg=ws1280x960"
                    alt="Virtual Patient Care Coordination Services"
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
                    src="https://blog.searcha.net/wp-content/uploads/2024/12/formacion-como-setter-de-ventas-1.jpg"
                    alt="Patient Care Coordination FAQ"
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
                          01. What patient care coordination services do you offer and how do they work?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We provide comprehensive virtual patient care coordination including appointment scheduling, patient communication, follow-up care coordination, medical documentation support, and referral management. Our coordinators work as an extension of your healthcare team, ensuring seamless patient experiences and efficient clinical operations through secure, HIPAA-compliant platforms.
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
                          02. How do you ensure quality in your patient care coordination services?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Every care coordinator undergoes a comprehensive 3-month training program covering healthcare protocols, patient communication, medical terminology, and EHR systems, followed by 1 month of supervised practice. Our healthcare quality assurance team continuously monitors interactions and provides ongoing training to maintain the highest standards of patient care and satisfaction.
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
                          03. How secure is patient health information with your service?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We prioritize patient data security with HIPAA-compliant infrastructure and processes. All patient interactions and health information are handled through encrypted, secure systems with strict access controls. Our coordinals follow rigorous privacy protocols, and we maintain comprehensive compliance with healthcare data protection regulations.
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
                          04. What service plans do you offer for patient care coordination?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We offer flexible care coordination plans: dedicated full-time coordinators for large practices, part-time support for smaller clinics, and specialized teams for specific medical specialties. Each plan includes quality monitoring, performance reporting, and regular service reviews to ensure optimal patient care and practice efficiency.
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
                          05. How do you match care coordinators to our medical practice needs?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We carefully match coordinators based on your medical specialty, practice size, patient demographics, and specific workflow requirements. Whether you need general care coordination, specialty-specific support, or complex chronic care management, we ensure the right expertise and personality fit for your practice culture and patient needs.
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
                  What Makes Our Care Coordination <span>Different.</span>
                </h2>
                <p>
                  Experience the power of our unique approach combining healthcare expertise, comprehensive training, quality assurance oversight, HIPAA-compliant infrastructure, and custom specialty matching for superior patient care coordination.
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
                    <h5>Extended Practice Hours</h5>
                    <p>
                      Care coordination support beyond regular office hours. Our teams provide coverage during evenings and weekends, ensuring patients can always reach someone for scheduling, questions, and support when your practice is closed.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Award size={32} />
                  </div>
                  <div className="content">
                    <h5>Healthcare-Specific Training</h5>
                    <p>
                      Every care coordinator completes a 3-month intensive training program covering medical terminology, healthcare protocols, patient communication, and EHR systems, followed by supervised practice. This ensures they're fully prepared to support your clinical team effectively.
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
                      Continuous evaluation of patient interactions to maintain healthcare standards. Our dedicated healthcare QA team regularly reviews communications, documentation, and coordination activities, providing feedback to ensure consistent care quality.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Shield size={32} />
                  </div>
                  <div className="content">
                    <h5>HIPAA-Compliant Security</h5>
                    <p>
                      All patient interactions and health information are handled through secure, encrypted systems with HIPAA-compliant infrastructure. We maintain strict privacy protocols and access controls to protect sensitive patient data at all times.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Users size={32} />
                  </div>
                  <div className="content">
                    <h5>Specialty-Specific Matching</h5>
                    <p>
                      Coordinators selected based on your medical specialty and practice needs. We match healthcare professionals to your specific requirements, whether you need primary care coordination, specialty practice support, or complex chronic care management.
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