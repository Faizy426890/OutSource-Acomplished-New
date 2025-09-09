"use client";
import React, { useMemo } from "react";
import Home4award from "@/components/award/Home4award";
import { Star, Award, Clock, Users, Headphones, Globe, Target } from "lucide-react"
import CountUp from "react-countup";
import MainLayout from "@/components/layout/MainLayout";
import Home5Team from "@/components/team/Home5Team";
import Home5whyChoose from "@/components/why-choose/Home5whyChoose";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import useWow from "@/hooks/useWow";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Aboutpage = () => {
  useWow();
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".home2-process-next",
        prevEl: ".home2-process-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <MainLayout>
   <div className="home1-about-section scroll-margin pt-120 mb-120" id="about-section">
        <div className="container">
          <div className="row mb-90">
            <div className="col-lg-9 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="2000ms">
              <div className="about-content">
                <div className="about-section-title">
                  <span>
                    <Star size={14} className="inline" />
                    Trusted BPO Excellence
                    <Star size={14} className="inline" />
                  </span>
                  <h2>
                    We are a leading Business Process Outsourcing agency delivering comprehensive solutions across the
                    United States.
                  </h2>
                  <p>
                    Since our founding in 2021, we have grown to become a trusted partner for businesses nationwide,
                    operating through 400+ agencies across all US states. We specialize in customer care support,
                    virtual care coordination, professional staffing solutions, web development, and digital marketing
                    services. Our commitment to excellence and innovation has made us the go-to choice for companies
                    seeking reliable outsourcing solutions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 d-flex justify-content-lg-end wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="2000ms"
            >
              <div className="about-countdown-area">
                <ul>
                  <li className="single-countdown">
                    <div className="icon">
                      <Users size={40} />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">
                          <CountUp end={400} delay={5} />
                        </h5>
                        <span>+</span>
                      </div>
                      <p>Agencies Nationwide</p>
                    </div>
                  </li>
                  <li className="single-countdown">
                    <div className="icon">
                      <Award size={40} />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">
                          <CountUp end={98} delay={5} />
                        </h5>
                        <span>%</span>
                      </div>
                      <p>Client Satisfaction Rate</p>
                    </div>
                  </li>
                  <li className="single-countdown">
                    <div className="icon">
                      <Clock size={40} />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">
                          <CountUp end={24} delay={5} />
                        </h5>
                        <span>/7</span>
                      </div>
                      <p>Support Availability</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bottom-area">
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <Headphones size={40} />
                  </div>
                  <div className="content">
                    <h4>Customer Care Excellence</h4>
                    <p>
                      Our dedicated customer care teams provide 24/7 support across multiple channels, ensuring
                      exceptional service delivery and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <Users size={40} />
                  </div>
                  <div className="content">
                    <h4>Professional Staffing</h4>
                    <p>
                      We connect businesses with top-tier talent through our comprehensive staffing solutions, from
                      temporary placements to permanent hires.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <Globe size={40} />
                  </div>
                  <div className="content">
                    <h4>Web Development & Digital Marketing</h4>
                    <p>
                      Our expert teams deliver cutting-edge web solutions and comprehensive digital marketing strategies
                      to enhance your online presence and drive growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <Target size={40} />
                  </div>
                  <div className="content">
                    <h4>Virtual Care Coordination</h4>
                    <p>
                      Specialized healthcare support services that streamline patient care coordination, appointment
                      scheduling, and medical administrative tasks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home2-process-section two mb-120">
        <div className="container">
          <div
            className="section-title5 text-center mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span className="sub-title5 two">
              <Star size={14} className="inline" />
              Our Process
              <Star size={14} className="inline" />
            </span>
            <h2>
              Delivering Excellence Through <span>Proven BPO Solutions.</span>
            </h2>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="process-slider-area">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper home2-process-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide
                      className="swiper-slide wow animate fadeInDown"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-process">
                        <div className="step">
                          <div className="number">
                            <h6>Step</h6>
                            <span>01</span>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Needs Assessment</h4>
                          <p>
                            We conduct comprehensive analysis of your business requirements to identify the most
                            suitable BPO solutions for your organization.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      className="swiper-slide wow animate fadeInDown"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-process">
                        <div className="step">
                          <div className="number">
                            <h6>Step</h6>
                            <span>02</span>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Solution Design</h4>
                          <p>
                            Our experts design customized BPO solutions tailored to your specific industry needs and
                            operational requirements.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      className="swiper-slide wow animate fadeInDown"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-process">
                        <div className="step">
                          <div className="number">
                            <h6>Step</h6>
                            <span>03</span>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Team Deployment</h4>
                          <p>
                            We deploy skilled professionals and establish dedicated teams to handle your outsourced
                            processes with precision and efficiency.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      className="swiper-slide wow animate fadeInDown"
                      data-wow-delay="800ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-process">
                        <div className="step">
                          <div className="number">
                            <h6>Step</h6>
                            <span>04</span>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Continuous Optimization</h4>
                          <p>
                            We continuously monitor performance metrics and optimize processes to ensure maximum
                            efficiency and client satisfaction.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="single-process">
                        <div className="step">
                          <div className="number">
                            <h6>Step</h6>
                            <span>05</span>
                          </div>
                        </div>
                        <div className="content">
                          <h4>Quality Assurance</h4>
                          <p>
                            Regular quality audits and performance reviews ensure consistent service delivery and
                            adherence to industry standards.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="slider-btn-area">
                  <div className="slider-btn home2-process-prev">
                    <i className="bi bi-arrow-left" />
                  </div>
                  <div className="content">
                    <p>Streamline Your Business Operations</p>
                  </div>
                  <div className="slider-btn home2-process-next">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home5whyChoose />

      {/* <Home4award /> */}

      <Home5Team />


    
    </MainLayout>
  );
};

export default Aboutpage;
