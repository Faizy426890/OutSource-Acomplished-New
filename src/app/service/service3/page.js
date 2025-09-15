"use client";
import MainLayout from "@/components/layout/MainLayout";
import useFollowCursor from "@/hooks/useFollowCursor";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";
import { Users, Heart, FileText, Code, Calculator, Megaphone } from 'lucide-react';

const ServicePage3 = () => {

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
<div
  className="single-services mb-20"
  style={{
    backgroundColor: "#E5E7EB",
  }}
>
  <div className="icon">
    <Users size={40} />
    <div className="number">
      <span>01</span>
    </div>
  </div>
  <h5>Global Call Center Services</h5>
  <div className="services-img">
    <img
      src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg"
      alt="Call Center Services"
    />
  </div>
  <div className="content">
    <p>
      Deliver exceptional customer support across the globe with our
      professional call center solutions. We provide 24/7 reliable, efficient,
      and scalable services tailored to meet the needs of businesses worldwide.
    </p>
    <ul className="tag-list">
      <li>Customer Support</li>
      <li>Technical Helpdesk</li>
      <li>Inbound & Outbound Calls</li>
      <li>Multilingual Assistance</li>
    </ul>
  </div>
  <div className="button-area">
    <Link className="explore-btn" href="/service/service-details">
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

                <div style={{
    backgroundColor: "#E5E7EB",
  }} className="single-services mb-20">
                  <div className="icon">
                    <Heart size={40} />
                    <div className="number">
                      <span>02</span>
                    </div>
                  </div>
                  <h5>Virtual Patient Care coordinator</h5>
                  <div className="services-img">
                    <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" alt="" />
                  </div>
                 <div className="content">
  <p>
    Comprehensive virtual patient care coordination services across all 50 states for Home Health agencies and home care providers.
  </p>
  <ul className="tag-list">
    <li>Care Coordination</li>
    <li>Patient Support</li>
    <li>Virtual Assistance</li>
    <li>Health Monitoring</li>
  </ul>
</div>

                  <div className="button-area">
                    <Link
                      className="explore-btn"
                      href="/service/service-details"
                    >
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
                <div style={{
    backgroundColor: "#E5E7EB",
  }} className="single-services mb-20">
                  <div className="icon">
                    <FileText size={40} />
                    <div className="number">
                      <span>03</span>
                    </div>
                  </div>
                  <h5>Virtual Administration Tasks</h5>
                  <div className="services-img">
                    <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="" />
                  </div>
                <div className="content">
  <p>
    Professional virtual administration services for any industry including Healthcare, Mortgage companies, Telecom, and more.
  </p>
  <ul className="tag-list">
    <li>Data Entry</li>
    <li>Document Processing</li>
    <li>Administrative Support</li>
    <li>Customer Service</li>
  </ul>
</div>

                  <div className="button-area">
                    <Link
                      className="explore-btn"
                      href="/service/service-details"
                    >
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
                <div style={{
    backgroundColor: "#E5E7EB",
  }} className="single-services mb-20">
                  <div className="icon">
                    <Code size={40} />
                    <div className="number">
                      <span>04</span>
                    </div>
                  </div>
                  <h5>Website Development</h5>
                  <div className="services-img">
                    <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      Custom software development and IT solutions for any industry, delivering cutting-edge technology tailored to your business needs.
                    </p>
                    <ul className="tag-list">
                      <li>Web Development</li>
                      <li>Mobile Apps</li>
                      <li>IT Support</li>
                      <li>System Integration</li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <Link
                      className="explore-btn"
                      href="/service/service-details"
                    >
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
                <div style={{
    backgroundColor: "#E5E7EB",
  }} className="single-services mb-20">
                  <div className="icon">
                    <Calculator size={40} />
                    <div className="number">
                      <span>05</span>
                    </div>
                  </div>
                  <h5>Accounting and Payroll services</h5>
                  <div className="services-img">
                    <img src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg" alt="" />
                  </div>
               <div className="content">
  <p>
    Comprehensive accounting and payroll services for any industry, ensuring accurate financial management and compliance.
  </p>
  <ul className="tag-list">
    <li>Bookkeeping</li>
    <li>Payroll Processing</li>
    <li>Tax Preparation</li>
    <li>Financial Reporting</li>
  </ul>
</div>

                  <div className="button-area">
                    <Link
                      className="explore-btn"
                      href="/service/service-details"
                    >
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
                <div style={{
    backgroundColor: "#E5E7EB",
  }} className="single-services">
                  <div className="icon">
                    <Megaphone size={40} />
                    <div className="number">
                      <span>06</span>
                    </div>
                  </div>
                  <h5>Digital Marketing</h5>
                  <div className="services-img">
                    <img src="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg" alt="" />
                  </div>
                 <div className="content">
  <p>
    Strategic digital marketing solutions to boost your online presence, drive engagement, and increase revenue through targeted campaigns.
  </p>
  <ul className="tag-list">
    <li>Social Media</li>
    <li>SEO</li>
    <li>PPC Advertising</li>
    <li>Content Marketing</li>
  </ul>
</div>

                  <div className="button-area">
                    <Link
                      className="explore-btn"
                      href="/service/service-details"
                    >
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

export default ServicePage3;