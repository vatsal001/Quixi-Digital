import React from "react";
import CountUp from "react-countup";
import Shape from "../../images/funfact-bg-shape.svg";
import fanfact1 from "../../images/fanfact-1.jpg";
import fanfact2 from "../../images/fanfact-2.jpg";

const FunFact = (props) => {
  return (
    <section className="fanfuct-section section-padding">
      <div className="container">
        <div className="top-content">
          <div className="title">
            <h3 className="splittext-line">
              company
              <span>inside..</span>
            </h3>
          </div>
          {/* <div className="left-image">
                        <img src={fanfact1} alt="" />
                    </div>
                    <div className="right-image">
                        <img src={fanfact2} alt="" />
                    </div> */}
        </div>
        <div className="funfact-wrap">
          <div className="row">
            <div className="col col-lg-4 col-md-4 col-12">
              <div className="item">
                <h3>Team Members</h3>
                <h2>
                  <span>
                    <CountUp end={15} enableScrollSpy />
                  </span>
                  +
                </h2>
              </div>
            </div>
            <div className="col col-lg-4 col-md-4 col-12 ">
              <div className="item">
                <h3>Years of experience</h3>
                <h2>
                  <span>
                    <CountUp end={2} enableScrollSpy />
                  </span>
                  +
                </h2>
              </div>
            </div>
            <div className="col col-lg-4 col-md-4 col-12 ">
              <div className="item">
                <h3>Happy Customers</h3>
                <h2>
                  <span>
                    <CountUp end={75} enableScrollSpy />
                  </span>
                  +
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <img src={Shape} alt="" />
      </div>
    </section>
  );
};

export default FunFact;
