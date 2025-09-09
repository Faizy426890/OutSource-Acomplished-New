"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home3Feature = () => {
  const settings = {
    infinite: true,
    centerMode: false,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
  };

  return (
    <>
      <div className="home3-feature-section mb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="feature-content-wrap">
                <div
                  className="section-title mb-40 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
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
                    Why Choose This
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
                  </span>
                  <h2>Innovate with Confidence</h2>
                  <p>
                    At OutSource Accomplished, we combine cutting-edge technology with strategic
                    insight to help brands thrive in the digital world. Our mission is
                    to elevate your business through innovative digital solutions,
                    including web development, automation, design, and marketing —
                    all tailored to accelerate your growth and success online.
                  </p>
                </div>

                <div className="feature-list-wrap">
                  <div className="progressBarContainer">
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature">
                        <div className="content">
                          <h6>List &amp; Board View</h6>
                          <p>
                            OutSource Accomplished offers flexible project management views, allowing
                            teams to toggle between list and board formats with ease.
                            Stay organized, focused, and efficient with visual workflows
                            that adapt to your working style.
                          </p>
                        </div>
                      </div>
                      <span data-slick-index={0} className="progressBar" />
                    </div>

                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature two pt-25">
                        <div className="content">
                          <h6>Multiple Teams</h6>
                          <p>
                            Collaborate across departments effortlessly. Our platform is
                            built to support multiple teams with shared or segmented
                            access, enabling seamless cooperation while maintaining
                            structure and control.
                          </p>
                        </div>
                      </div>
                      <span data-slick-index={1} className="progressBar" />
                    </div>

                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="800ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature three pt-25">
                        <div className="content">
                          <h6>No Page Load</h6>
                          <p>
                            OutSource Accomplished’s platform is built with performance in mind. Enjoy
                            a smooth, single-page experience where everything updates
                            instantly — no page reloads, no waiting, just fast and fluid
                            user interaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <Slider
                {...settings}
                className="slider single-item wow animate zoomIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="slider-item">
                  <div className="feature-img">
                    <img
                      src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588978/freepik__the-style-is-candid-image-photography-with-natural__86159_aslgid.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-img">
                    <img
                      src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588978/freepik__the-style-is-candid-image-photography-with-natural__86159_aslgid.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-img">
                    <img
                      src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588978/freepik__the-style-is-candid-image-photography-with-natural__86159_aslgid.png"
                      alt=""
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Feature;
