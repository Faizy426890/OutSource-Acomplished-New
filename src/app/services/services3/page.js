"use client";
import MainLayout from "../../../components/layout/MainLayout";
import useFollowCursor from "../../../hooks/useFollowCursor";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import React from "react"; 
import Image from "next/image";
import { Users, Heart, FileText, Code, Calculator, Megaphone , Settings, Phone , Globe , Building2} from 'lucide-react';

const ServicesPage3 = () => {

  useWow()
  // Use the custom hook with your desired selector and rotation
  useFollowCursor(".sevices-wrap .single-services", 12);
  return (
    <MainLayout>
      <div
        className="home4-process-section scroll-margin pt-120 mb-120"
        id="service-section"
      >
     
      </div>
      <div className="home4-service-section pb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title3 mb-60">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                  Solution Provide
                </span>
                <h2>Innovative Service Offering</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="sevices-wrap">
{/* 01 - Call Center / Customer Support */}
<div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <Users size={40} />
    <div className="number">
      <span>01</span>
    </div>
  </div>
  <h5>Call Center / Customer Support</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Deliver exceptional customer support across the globe with our
      professional call center solutions. Reliable, efficient, and
      available 24/7.
    </p>
    <ul className="tag-list">
      <li>Inbound & Outbound Support</li>
      <li>24/7 Multichannel Communication</li>
      <li>Customer Satisfaction Monitoring</li>
      <li>Issue Resolution Tracking</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/customer-support">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div>

{/* 02 - Appointment Scheduling */}
{/* <div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <Heart size={40} />
    <div className="number">
      <span>02</span>
    </div>
  </div>
  <h5>Appointment Scheduling</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Streamline your patient scheduling process with our virtual coordination services designed for home health agencies.
    </p>
    <ul className="tag-list">
      <li>Patient Follow-up Calls</li>
      <li>Therapy Visit Coordination</li>
      <li>Real-Time Scheduling Updates</li>
      <li>Missed Visit Management</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/scheduling">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div> */}

{/* 03 - Website Development & IT */}
<div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <Globe size={40} />
    <div className="number">
      <span>03</span>
    </div>
  </div>
  <h5>Website Development & IT</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Full-stack web development and IT solutions tailored for your business, from responsive websites to complex applications.
    </p>
    <ul className="tag-list">
      <li>Custom Web Development</li>
      <li>API Integration</li>
      <li>Cloud & Hosting Solutions</li>
      <li>Technical Maintenance</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/webdevelopment">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div>

{/* 04 - BPO Solutions */}
<div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <Building2 size={40} />
    <div className="number">
      <span>04</span>
    </div>
  </div>
  <h5>BPO Solutions</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Comprehensive business process outsourcing solutions to manage billing, documentation, and tracking efficiently.
    </p>
    <ul className="tag-list">
      <li>Freight Billing</li>
      <li>POD Tracking</li>
      <li>Shipment Management</li>
      <li>Back Office Support</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/bpo">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div> 
<div
  style={{
    backgroundColor: "#E5E7EB",
  }}
  className="single-services mb-20"
>
  <div className="icon">
    <Heart size={40} />
    <div className="number">
      <span>02</span>
    </div>
  </div>

  <h5>Virtual Patient Care Coordinator</h5>

  <div className="services-img"></div>

  <div className="content">
    <p>
      Our Virtual Patient Care Coordinators provide seamless support for Home
      Health agencies and healthcare providers. We ensure timely communication,
      accurate documentation, and compassionate patient care — all delivered
      remotely with efficiency and professionalism.
    </p>
    <ul className="tag-list">
      <li>Care Coordination</li>
      <li>Patient Communication</li>
      <li>Scheduling & Follow-ups</li>
      <li>Documentation Support</li>
    </ul>
  </div>

  <div className="button-area">
    <Link className="explore-btn" href="/service/virtualcoordinator">
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 12 12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
        />
      </svg>
    </Link>
  </div>
</div>

{/* 05 - Accounting & Payroll */}
<div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <Calculator size={40} />
    <div className="number">
      <span>05</span>
    </div>
  </div>
  <h5>Accounting & Payroll Services</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Comprehensive accounting and payroll services ensuring financial accuracy, compliance, and transparency.
    </p>
    <ul className="tag-list">
      <li>Bookkeeping</li>
      <li>Payroll Processing</li>
      <li>Tax Filing</li>
      <li>Financial Reports</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/accounting">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div>

{/* 06 - Backend Office Management */}
<div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <Settings size={40} />
    <div className="number">
      <span>06</span>
    </div>
  </div>
  <h5>Backend Office Management</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Streamline your administrative operations with efficient back-office management designed for accuracy and speed.
    </p>
    <ul className="tag-list">
      <li>Data Processing</li>
      <li>Admin Support</li>
      <li>Operational Tracking</li>
      <li>Performance Reporting</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/backend">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div>

{/* 07 - Data Entry Services */}
<div style={{ backgroundColor: "#E5E7EB" }} className="single-services mb-20">
  <div className="icon">
    <FileText size={40} />
    <div className="number">
      <span>07</span>
    </div>
  </div>
  <h5>Data Entry Services</h5>
  <div className="services-img"></div>
  <div className="content">
    <p>
      Accurate and efficient data entry services to handle your document processing and data management tasks seamlessly.
    </p>
    <ul className="tag-list">
      <li>Document Indexing</li>
      <li>CRM Data Entry</li>
      <li>Data Cleansing</li>
      <li>Database Management</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/dataentry">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
      </svg>
    </Link>
  </div>
</div>   
{/* 10 - TeleMarketing */}
<div
  style={{
    backgroundColor: "#E5E7EB",
  }}
  className="single-services mb-20"
>
  <div className="icon">
    <Phone size={40} />
    <div className="number">
      <span>10</span>
    </div>
  </div>

  <h5>TeleMarketing</h5>

  <div className="services-img"></div>

  <div className="content">
    <p>
      Increase your sales and customer engagement with our expert telemarketing
      services designed to build meaningful client relationships and drive
      measurable results.
    </p>
    <ul className="tag-list">
      <li>Outbound Sales Campaigns</li>
      <li>Lead Qualification & Conversion</li>
      <li>Customer Retention Programs</li>
      <li>Performance Tracking & Reporting</li>
    </ul>
  </div>

  <div className="button-area">
    <Link className="explore-btn" href="/service/telemarketing">
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 12 12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
        />
      </svg>
    </Link>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage3;