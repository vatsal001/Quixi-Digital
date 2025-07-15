import React from "react";

import Award1 from "../../images/awards/1.jpg";
import Award2 from "../../images/awards/2.jpg";
import Award3 from "../../images/awards/3.jpg";
import start from "../../images/awards/start.svg";
import { Link } from "react-router-dom";

const AwardSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="award-section section-padding">
      <div className="container">
        <div className="title">
          <div className="poort-text poort-in-right">
            <h3>
              Why<span>Quixi</span> Digital?
            </h3>
          </div>
        </div>
        <div className="row align-items-center">
          {/* <div
            className="col-lg-5 col-12  scroll-text-animation"
            data-animation="fade_from_left"
          >
            <div className="image">
              <div className="image-1">
                <img src={Award1} alt="" />
              </div>
              <div className="image-2">
                <img src={Award2} alt="" />
              </div>
              <div className="image-3">
                <img src={Award3} alt="" />
              </div>
              <div className="image-4">
                <img src={start} alt="" />
              </div>
              <div className="bg-text">
                <h1>Awwards</h1>
              </div>
            </div>
          </div> */}
          <div className="col-lg-7 col-12">
            <div className="content">
              <ul>
                <li
                  className="scroll-text-animation"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <h2>
                      <Link onClick={ClickHandler} to="#">
                        ✅ 360° Marketing for Modern Brands
                      </Link>
                    </h2>
                  </div>
                  <Link onClick={ClickHandler} to="#">
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </li>
                <li
                  className="scroll-text-animation"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <h2>
                      <Link onClick={ClickHandler} to="#">
                        ✅ Expert Web Development with a Creative Edge
                      </Link>
                    </h2>
                  </div>
                  <Link onClick={ClickHandler} to="#">
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </li>
                <li
                  className="scroll-text-animation"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <h2>
                      <Link onClick={ClickHandler} to="#">
                        ✅ Content that Actually Convert
                      </Link>
                    </h2>
                  </div>
                  <Link onClick={ClickHandler} to="#">
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </li>
                <li
                  className="scroll-text-animation"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <h2>
                      <Link onClick={ClickHandler} to="#">
                        ✅ Transparent Pricing, Measurable Results
                      </Link>
                    </h2>
                  </div>
                  <Link onClick={ClickHandler} to="#">
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </li>
                <li
                  className="scroll-text-animation"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <h2>
                      <Link onClick={ClickHandler} to="#">
                        ✅ Trusted by Local & National Businesses
                      </Link>
                    </h2>
                  </div>
                  <Link onClick={ClickHandler} to="#">
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
