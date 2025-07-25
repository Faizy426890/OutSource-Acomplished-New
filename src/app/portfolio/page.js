"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="portfolio-grid-section scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div className="row g-4 mb-50">
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div     style={{
      width: '100%',
      maxWidth: '100%',
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    }} className="eg-card2">
                <div   className="card-img">
                  <img  style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
                aspectRatio: '1 / 1',

          display: 'block',
        }} src="https://res.cloudinary.com/diml90c1y/image/upload/v1753409698/Capture_ulocrb.png" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: BrandBlitz</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Music Marketing Company
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="eg-card2">
                <div style={{
      width: '100%',
      maxWidth: '100%',
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    }} className="card-img">
                        <img  style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
                aspectRatio: '1 / 1',

          display: 'block',
        }} src="https://res.cloudinary.com/diml90c1y/image/upload/v1753407726/Capture_gx3qjg.png" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: Blac Ruby</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      Artist Portfolio
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div style={{
      width: '100%',
      maxWidth: '100%',
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    }} className="eg-card2">
                <div className="card-img">
                  <img style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
                aspectRatio: '1 / 1',

          display: 'block',
        }} src="https://res.cloudinary.com/diml90c1y/image/upload/v1753407563/Capture_y6ekim.png" alt="" />
                </div>
                <div className="card-content">
                  <span>Client: AI Scribers</span>
                  <h5>
                    <Link href="/portfolio/portfolio-details">
                      AI Powered App
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">AI Integration</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Digital Graphics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <Link href="#" className="load-btn">
                <span>
                  Load More
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;
