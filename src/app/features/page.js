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
  Business Process Solutions
  <Settings className="inline w-2.5 h-2.5" />
</span>
<h2>Excellence in Business Process Solutions</h2>
<p>
  Welcome to GrowEdge, where innovation meets reliability. We deliver comprehensive business process solutions — all managed by our dedicated in-house experts, ensuring consistency, quality, and unmatched accountability across every operation in the United States.
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
        id="customer-support-tab"
        data-bs-toggle="tab"
        data-bs-target="#customer-support"
        type="button"
        role="tab"
        aria-controls="customer-support"
        aria-selected="false"
    >
        Call Centre / Customer Support
    </button>

    <button
        className="nav-link"
        id="accounting-payroll-tab"
        data-bs-toggle="tab"
        data-bs-target="#accounting-payroll"
        type="button"
        role="tab"
        aria-controls="accounting-payroll"
        aria-selected="false"
    >
        Accounting and Payroll 
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
        Website Development and IT 
    </button>
</div>
              </nav>
            </div>
            <div className="project-management-tab">
              <div className="tab-content" id="nav-tabContent">
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
                        <h3>Call Centre / Customer Support</h3>
                        <p>
                            Deliver exceptional customer experiences with GrowEdge's comprehensive
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

    <div className="tab-pane fade" id="accounting-payroll" role="tabpanel" aria-labelledby="accounting-payroll-tab">
        <div className="row g-0">
            <div className="col-lg-6">
                <div className="project-management-tab-content">
                    <div className="tab-content-top">
                        <h3>Accounting and Payroll</h3>
                        <p>
                            Streamline your financial operations with GrowEdge's reliable accounting and payroll solutions. 
                            Our services ensure accuracy, compliance, and efficiency in managing your finances, allowing you to 
                            focus on core business growth.
                        </p>
                        <ul>
                            <li>
                                <Check className="inline w-4 h-4 mr-2" />
                                Payroll Processing & Administration
                            </li>
                            <li>
                                <Check className="inline w-4 h-4 mr-2" />
                                General Ledger Management
                            </li>
                            <li>
                                <Check className="inline w-4 h-4 mr-2" />
                                Accounts Payable & Receivable
                            </li>
                            <li>
                                <Check className="inline w-4 h-4 mr-2" />
                                Financial Reporting & Analysis
                            </li>
                            <li>
                                <Check className="inline w-4 h-4 mr-2" />
                                Tax Compliance Support
                            </li>
                            <li>
                                <Check className="inline w-4 h-4 mr-2" />
                                Benefits Administration Support
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

    <div className="tab-pane fade show active" id="it-teams" role="tabpanel" aria-labelledby="it-teams-tab">
        <div className="row g-0">
            <div className="col-lg-6">
                <div className="project-management-tab-content">
                    <div className="tab-content-top">
                        <h3>Website Development and IT Services</h3>
                        <p>
                            Empower your business with cutting-edge IT solutions and web development services. GrowEdge delivers scalable, secure, and innovative technology solutions that streamline
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
