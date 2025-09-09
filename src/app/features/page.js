import Home3countdown from "@/components/countdown/Home3countdown"
import Home3Feature from "@/components/feature/Home3Feature"
import MainLayout from "@/components/layout/MainLayout"
import Home3Tools from "@/components/tools/Home3Tools"
import Home3WorkProcess from "@/components/workProcess/Home3WorkProcess"
import Link from "next/link"
import { Check, Settings } from "lucide-react"

const FeaturesPage = () => {
  return (
    <MainLayout>
      <div className="home3-project-management-section scroll-margin pt-120 mb-120" id="project-section">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <Settings className="inline w-2.5 h-2.5" />
                  BPO Services
                  <Settings className="inline w-2.5 h-2.5" />
                </span>
                <h2>Excellence in Business Process Outsourcing</h2>
                <p>
                  Welcome to OutSource Accomplished, where business process outsourcing meets strategic excellence. As a
                  dynamic force in the realm of BPO services, we are dedicated to propelling businesses into the
                  spotlight of operational success across the United States.
                </p>
              </div>
            </div>
          </div>
          <div className="project-management-tab-wrapper">
            <div className="project-management-nav mb-50">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link"
                    id="marketing-teams-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#marketing-teams"
                    type="button"
                    role="tab"
                    aria-controls="marketing-teams"
                    aria-selected="false"
                  >
                    Digital Marketing
                  </button>
                  <button
                    className="nav-link active"
                    id="it-teams-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#it-teams"
                    type="button"
                    role="tab"
                    aria-controls="it-teams"
                    aria-selected="true"
                  >
                    IT & Web Development
                  </button>
                  <button
                    className="nav-link"
                    id="patient-care-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#patient-care"
                    type="button"
                    role="tab"
                    aria-controls="patient-care"
                    aria-selected="false"
                  >
                    Patient Care Coordination
                  </button>
                  <button
                    className="nav-link"
                    id="customer-support-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#customer-support"
                    type="button"
                    role="tab"
                    aria-controls="customer-support"
                    aria-selected="false"
                  >
                    Customer Support
                  </button>
                  <button
                    className="nav-link"
                    id="planning-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#planning"
                    type="button"
                    role="tab"
                    aria-controls="planning"
                    aria-selected="false"
                  >
                    Staffing Services
                  </button>
                </div>
              </nav>
            </div>
            <div className="project-management-tab">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade"
                  id="marketing-teams"
                  role="tabpanel"
                  aria-labelledby="marketing-teams-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div
                          className="tab-content-top wow animate fadeInDown"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        >
                          <h3>Digital Marketing Services</h3>
                          <p>
                            OutSource Accomplished empowers your business with comprehensive digital marketing
                            solutions. From social media management to targeted advertising campaigns, our expert team
                            delivers measurable results that drive growth and enhance your online presence across all
                            digital channels.
                          </p>
                          <ul>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Social Media Management
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Custom Ad Strategy Development
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Advanced Demographic Targeting
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Content Creation & Design
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Performance Analytics & Reporting
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Multi-Platform Campaign Management
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/service"
                          className="primary-btn2 wow animate fadeInUp"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                          data-text="Get Started Now"
                        >
                          <span>Get Started Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img
                          src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588534/freepik__the-style-is-candid-image-photography-with-natural__86158_huetwy.png"
                          alt=""
                          className="wow animate zoomIn"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="it-teams" role="tabpanel" aria-labelledby="it-teams-tab">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>IT & Web Development Services</h3>
                          <p>
                            Empower your business with cutting-edge IT solutions and web development services. OutSource
                            Accomplished delivers scalable, secure, and innovative technology solutions that streamline
                            operations, enhance user experience, and drive digital transformation for businesses across
                            the United States.
                          </p>
                          <ul>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Custom Web Development
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Mobile App Development
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Cloud Infrastructure Management
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Database Design & Optimization
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              IT Support & Maintenance
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Cybersecurity Solutions
                            </li>
                          </ul>
                        </div>
                        <Link href="/service" className="primary-btn2" data-text="Get Started Now">
                          <span>Get Started Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img
                          src="https://res.cloudinary.com/diml90c1y/image/upload/v1753587088/freepik__the-style-is-candid-image-photography-with-natural__86154_xgdebj.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="patient-care" role="tabpanel" aria-labelledby="patient-care-tab">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>Patient Care Coordination</h3>
                          <p>
                            OutSource Accomplished provides comprehensive patient care coordination services that bridge
                            the gap between healthcare providers and patients. Our dedicated team ensures seamless
                            communication, appointment scheduling, and care management to improve patient outcomes and
                            healthcare efficiency.
                          </p>
                          <ul>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Appointment Scheduling & Management
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Patient Follow-up Services
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Insurance Verification & Authorization
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Medical Records Management
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Care Plan Coordination
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Patient Education & Support
                            </li>
                          </ul>
                        </div>
                        <Link href="/service" className="primary-btn2" data-text="Get Started Now">
                          <span>Get Started Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img
                          src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588515/freepik__the-style-is-candid-image-photography-with-natural__86156_lkssyv.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="customer-support"
                  role="tabpanel"
                  aria-labelledby="customer-support-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>Customer Support Services</h3>
                          <p>
                            Deliver exceptional customer experiences with OutSource Accomplished's comprehensive
                            customer support services. Our trained professionals provide 24/7 multi-channel support,
                            ensuring your customers receive prompt, professional assistance that builds loyalty and
                            drives satisfaction.
                          </p>
                          <ul>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              24/7 Multi-Channel Support
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Live Chat & Email Support
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Technical Troubleshooting
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Order Processing & Tracking
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Customer Retention Programs
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Quality Assurance & Reporting
                            </li>
                          </ul>
                        </div>
                        <Link href="/service" className="primary-btn2" data-text="Get Started Now">
                          <span>Get Started Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img
                          src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588534/freepik__the-style-is-candid-image-photography-with-natural__86158_huetwy.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="planning" role="tabpanel" aria-labelledby="planning-tab">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>Staffing Services</h3>
                          <p>
                            OutSource Accomplished provides comprehensive staffing solutions to meet your workforce
                            needs. From temporary placements to permanent hires, our extensive network of qualified
                            professionals ensures you have the right talent at the right time to drive your business
                            forward.
                          </p>
                          <ul>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Temporary & Contract Staffing
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Permanent Placement Services
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Executive Search & Recruitment
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Skills Assessment & Screening
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Workforce Management Solutions
                            </li>
                            <li>
                              <Check className="inline w-4 h-4 mr-2" />
                              Payroll & Benefits Administration
                            </li>
                          </ul>
                        </div>
                        <Link href="/service" className="primary-btn2" data-text="Get Started Now">
                          <span>Get Started Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img
                          src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588515/freepik__the-style-is-candid-image-photography-with-natural__86156_lkssyv.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home3WorkProcess />
      <Home3countdown />
      <Home3Feature />
      <Home3Tools />
    </MainLayout>
  )
}

export default FeaturesPage
