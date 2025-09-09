import MainLayout from "@/components/layout/MainLayout"
import Home5Workprocess from "@/components/workProcess/Home5Workprocess"
import { CheckCircle, Users, Globe, Headphones, Settings } from "lucide-react"

export const metadata = {
  title: "OutSourcing Accomplished",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
}

const ServiceDetailsPage = () => {
  return (
    <MainLayout>
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
                    BPO <span>Services.</span>
                  </h2>
                  <p>
                    Where excellence meets efficiency in comprehensive business process outsourcing solutions. Founded
                    with a vision to transform how businesses operate, we provide specialized BPO services that drive
                    growth and operational excellence. From staffing solutions to virtual care coordination, every
                    service is delivered with precision and commitment to your success.
                  </p>
                  <ul className="key-features">
                    <li>
                      <CheckCircle size={15} />
                      Staffing Services
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Virtual Care Coordinators
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Website Development
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Customer Support Services
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Process Optimization
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Quality Assurance
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
                  <img
                    src="https://res.cloudinary.com/diml90c1y/image/upload/v1753587088/freepik__the-style-is-candid-image-photography-with-natural__86154_xgdebj.png"
                    alt=""
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
                  <img
                    src="https://res.cloudinary.com/diml90c1y/image/upload/v1757365305/freepik__the-style-is-candid-image-photography-with-natural__72294_usu7ui.jpg"
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
                          01. What BPO services do you offer and how do they work?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We offer comprehensive BPO services including Staffing Services, Virtual Care Coordinators,
                          Website Development, and Customer Support Services. Our solutions are designed to streamline
                          your operations, reduce costs, and improve efficiency through dedicated teams and proven
                          processes.
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
                          02. How do you ensure quality in your BPO services?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We maintain strict quality standards through comprehensive training programs, regular
                          performance monitoring, quality assurance protocols, and continuous feedback loops. Our
                          experienced team leaders ensure all deliverables meet your specific requirements and industry
                          standards.
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
                          03. What are the requirements for starting BPO services?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          To get started, we need to understand your specific business requirements, current processes,
                          and desired outcomes. We'll conduct a thorough assessment, provide a customized solution
                          proposal, and establish clear communication channels and performance metrics for seamless
                          service delivery.
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
                          04. How can I scale my BPO services?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Our BPO services are designed for scalability. You can easily expand your team size, add new
                          service lines, or increase operational hours based on your business growth. We provide
                          flexible contracts and rapid scaling capabilities to match your evolving needs.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFive">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseFive"
                          aria-expanded="true"
                          aria-controls="faqcollapseFive"
                        >
                          05. What support do you provide during the transition?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We provide comprehensive transition support including dedicated project managers, detailed
                          process documentation, staff training, gradual handover phases, and 24/7 support during the
                          initial period to ensure smooth integration with your existing operations.
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

      <Home5Workprocess />

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
                  Service Features
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  Professional BPO Solutions That Drive <span>Results.</span>
                </h2>
                <p>
                  Experience the power of specialized business process outsourcing with our comprehensive service
                  offerings designed to optimize your operations and accelerate growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="service-feature-list">
                <li className="single-feature wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Users size={32} />
                  </div>
                  <div className="content">
                    <h5>Staffing Services</h5>
                    <p>
                      Comprehensive staffing solutions providing skilled professionals across various industries. Our
                      recruitment expertise ensures you get the right talent for your specific business needs.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Headphones size={32} />
                  </div>
                  <div className="content">
                    <h5>Virtual Care Coordinators</h5>
                    <p>
                      Dedicated virtual care coordination services ensuring seamless patient care management,
                      appointment scheduling, and healthcare support with professional expertise.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Globe size={32} />
                  </div>
                  <div className="content">
                    <h5>Website Development</h5>
                    <p>
                      Professional website development services creating responsive, user-friendly, and feature-rich web
                      solutions tailored to your business requirements and brand identity.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Settings size={32} />
                  </div>
                  <div className="content">
                    <h5>Customer Support Services</h5>
                    <p>
                      Professional customer support services providing 24/7 assistance, multi-channel communication, and
                      exceptional customer experience management for your business.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="service-details-tools-section mb-120">
       
      </div>
    </MainLayout>
  )
}

export default ServiceDetailsPage
