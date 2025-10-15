import React from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee2 = () => {
  return (
    <>
      <div className="experience-logo-area mb-130">
        <div className="logo-area">
          <div className="marquee_text2">
            <Marquee>
              <a href="#">
                <img src="assets/img/home4/company-logo-01.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/img/home4/company-logo-02.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/img/home4/company-logo-03.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/img/home4/company-logo-04.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/img/home4/company-logo-05.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/img/home4/company-logo-06.png" alt="image" />
              </a>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoMarquee2;
