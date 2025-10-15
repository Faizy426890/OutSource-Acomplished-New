import { CheckCircle, Users, Globe, Headphones, Shield, Clock, Award, FileCheck } from "lucide-react"
import MainLayout from "../../../components/layout/MainLayout"
import AccountantsMatrix from "../../../components/accountingcheckbox"
import StaffExpertise from "../../../components/staff-expertise"
const App = () => {
  return (
    <> 
    <MainLayout> 
      <StaffExpertise/>  
                        <AccountantsMatrix/> 

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
                    Accounting <span>Services.</span>
                  </h2>
                  <p>
                    We provide offshore and onshore accountants who seamlessly integrate with your team to handle bookkeeping, payroll, AR/AP management, financial statements compilation, tax prep, CFO services admin support and more. Our unique approach combines local time zone operations, rigorous training programs, practice manager oversight, and ISO 27001 certified security infrastructure to deliver exceptional results.
                  </p>
                  <ul className="key-features">
                    <li>
                      <CheckCircle size={15} />
                      Bookkeeping Services
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Payroll Management
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      AR/AP Management
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      Financial Statements Compilation
                    </li>
                    <li>
                      <CheckCircle size={15} />
                      CFO Services & Admin Support
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
                    src="https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2022/08/why-hire-a-bookkeeper.png"
                    alt="Accounting Services"
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
                    src="https://akaunting.com/blog/wp-content/uploads/2021/03/The-Difference-Between-Bookkeeping-and-Accounting.jpg"
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
                          01. What accounting services do you offer and how do they work?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We provide comprehensive accounting services including bookkeeping, payroll management, AR/AP management, financial statements compilation, tax preparation, and CFO services. Our offshore and onshore accountants seamlessly integrate with your team, working in your local time zone to ensure smooth operations and timely deliverables.
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
                          02. How do you ensure quality in your accounting services?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Every accountant undergoes a rigorous 3-month training program followed by 3 months of testing before deployment. Our practice managers provide continuous oversight to ensure high-quality, productive output. We also match staff based on your specific needs and industry requirements for optimal results.
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
                          03. How secure is my financial data with your service?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We prioritize data security with ISO 27001 certified infrastructure. All work is conducted on secure local and cloud servers with no data leaving the country. Our robust security protocols ensure the highest level of protection for your sensitive financial information.
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
                          04. What service plans do you offer?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We offer flexible service plans to meet your needs: full-time virtual employee service for dedicated support, part-time hours for specific projects or seasonal needs, and practice manager-led plans for comprehensive oversight. Each plan is tailored to your specific accounting requirements and business size.
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
                          05. How do you match accountants to my business needs?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          We deploy staff based on your specific expertise requirements, industry, and business complexity. Our custom matching process ensures you receive accountants with the right skills and experience for your unique needs, whether you need bookkeeping specialists, tax experts, or CFO-level strategic support.
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
                  What Makes Our Accounting Services <span>Different.</span>
                </h2>
                <p>
                  Experience the power of our unique approach combining local time zone operations, rigorous training, practice manager oversight, secure infrastructure, and custom expertise matching for superior accounting support.
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
                    <h5>Local Time Zone Operations</h5>
                    <p>
                      Professionals working your business hours. Our team operates in your local time zone, ensuring real-time collaboration, immediate responses, and seamless integration with your existing workflows without communication delays.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Award size={32} />
                  </div>
                  <div className="content">
                    <h5>Rigorous Training</h5>
                    <p>
                      Every accountant undergoes a 3-month training program and 3 months of testing before deployment. This comprehensive 6-month preparation ensures they possess the expertise and skills needed to deliver exceptional results from day one.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <FileCheck size={32} />
                  </div>
                  <div className="content">
                    <h5>Practice Manager Oversight</h5>
                    <p>
                      Ensures high-quality, productive output. Our experienced practice managers continuously monitor work quality, provide guidance, implement best practices, and ensure consistent delivery of accurate, timely financial services.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Shield size={32} />
                  </div>
                  <div className="content">
                    <h5>Secure Local Servers</h5>
                    <p>
                      Work is conducted on local and cloud servers with no data leaving the country and through an ISO 27001 certified infrastructure to provide the highest level of data protection for your sensitive financial information.
                    </p>
                  </div>
                </li>
                <li className="single-feature wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
                  <div className="icon">
                    <Users size={32} />
                  </div>
                  <div className="content">
                    <h5>Custom Expertise Matching</h5>
                    <p>
                      Staff deployed based on your specific needs. We carefully match accountants to your industry, software requirements, and business complexity, ensuring you get professionals with the exact expertise your business demands.
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
