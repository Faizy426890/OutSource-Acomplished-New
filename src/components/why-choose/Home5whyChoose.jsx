"use client";
import CountUp from "react-countup";

const Home5whyChoose = () => {
  return (
    <>
      <div className="home5-why-choose-section mb-120">
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title5 two">
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  Discover the Advantage
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  Growing <span>BPO Company in the United States</span>{" "}
                  delivering excellence in Outsourcing.
                </h2>
                <p>
                  We are a fast-growing BPO company in the United States,
                  committed to helping businesses scale with smart outsourcing
                  solutions. From <strong>24/7 Customer Support</strong> to{" "}
                  <strong>Digital Marketing, Web Development, and IT
                  Services</strong>, our dedicated team blends expertise,
                  innovation, and passion to deliver measurable results. By
                  partnering with us, you gain a reliable extension of your
                  business that drives efficiency, boosts performance, and
                  ensures customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div
              className="col-lg-5 col-md-8 wow animate fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="why-choose-img">
                <img
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1753410759/freepik__the-style-is-candid-image-photography-with-natural__43503_e74651.jpg"
                  alt="BPO Services"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="why-choose-content">
                <p>
                  Our mission is to empower businesses of all sizes with
                  world-class outsourcing solutions. Whether it’s providing
                  seamless <strong>customer service</strong>, building strong{" "}
                  <strong>digital marketing campaigns</strong>, crafting{" "}
                  <strong>custom websites</strong>, or managing{" "}
                  <strong>IT infrastructure</strong>, we bring global talent and
                  technology together for your success. Our growing network of
                  clients trusts us to deliver consistent value and results.
                </p>
                <div className="about-coundown-area">
                  <div className="row g-0">
                    <div
                      className="col-md-6 wow animate fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-countdown">
                        <div className="number">
                          <h2 className="counter">
                            <CountUp end={120} delay={2} />
                          </h2>
                        </div>
                        <div className="content">
                          <p>Projects Completed</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 d-flex justify-content-end wow animate fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-countdown two">
                        <div className="number">
                          <h2 className="counter">
                            <CountUp end={2} delay={2} />
                          </h2>
                          <span>K+</span>
                        </div>
                        <div className="content">
                          <p>Satisfied Clients</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 d-flex justify-content-center wow animate fadeInUp"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-countdown three">
                        <div className="number">
                          <h2 className="counter">
                            <CountUp end={5} delay={1} />
                          </h2>
                        </div>
                        <div className="content">
                          <p>Years of Experience</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 d-flex justify-content-end wow animate fadeInUp"
                      data-wow-delay="800ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-countdown four">
                        <div className="number">
                          <h2 className="counter">
                            <CountUp end={25} delay={3} />
                          </h2>
                        </div>
                        <div className="content">
                          <p>Awards & Recognition</p>
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
    </>
  );
};

export default Home5whyChoose;
