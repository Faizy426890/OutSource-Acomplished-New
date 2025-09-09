"use client"
import CountUp from "react-countup"
import { Users, Heart, Clock, Building } from "lucide-react"

const Home3countdown = () => {
  return (
    <>
      <div className="home3-countdown-section mb-110">
        <div className="container">
          <div className="section-title white wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                <g>
                  <circle cx={5} cy={5} r={5} />
                </g>
              </svg>
              BPO Excellence
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                <g>
                  <circle cx={5} cy={5} r={5} />
                </g>
              </svg>
            </span>
            <h2>Elevate Your Business Operations</h2>
            <p>
              Welcome to OutSource Accomplished, where business process outsourcing meets strategic excellence. As a
              dynamic force in BPO services across the United States, we are dedicated to propelling businesses into the
              spotlight of operational success since 2021.
            </p>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-3 col-sm-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-countdown">
                <div className="icon">
                  <Users size={35} />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">
                      <CountUp end={2} delay={5} />
                    </h5>
                    <span>K+</span>
                  </div>
                  <p>Satisfied clients trust our comprehensive BPO solutions across the United States.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-countdown">
                <div className="icon">
                  <Building size={35} />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">
                      <CountUp end={400} delay={5} />
                    </h5>
                    <span>+</span>
                  </div>
                  <p>HomeHealth Agencies partnered with us for reliable virtual care coordination services.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-countdown">
                <div className="icon">
                  <Clock size={35} />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">
                      <CountUp end={3} delay={5} />
                    </h5>
                    <span> Min</span>
                  </div>
                  <p>Average response time for our customer support and virtual care coordination teams.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="single-countdown">
                <div className="icon">
                  <Heart size={35} />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">
                      <CountUp end={99} delay={5} />
                    </h5>
                    <span>%</span>
                  </div>
                  <p>Client satisfaction rate across all our BPO services including staffing and web development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home3countdown
