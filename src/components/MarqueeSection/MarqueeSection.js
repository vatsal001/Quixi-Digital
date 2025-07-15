import React from "react";
import StartImg from "../../images/stert.svg";

const MarqueeSection = (props) => {
  return (
    <section className="text-animation fade_bottom">
      <div className="marquee_container text-slider">
        <div className="marquee">
          <div className="item">
            <div>
              <img src={StartImg} alt="" />
              <h2>Web develoment</h2>
            </div>
            <div>
              <img src={StartImg} alt="" />
              <h2>Digital marketing</h2>
            </div>
            <div>
              <img src={StartImg} alt="" />
              <h2>Social Media Marketing/Management</h2>
            </div>
          </div>
        </div>
        {/* <div className="marquee">
                    <div className="item">
                        <div>
                            <img src={StartImg} alt="" />
                                <h2>pweb develoment</h2>
                        </div>
                        <div>
                            <img src={StartImg} alt="" />
                                <h2>digital marketing</h2>
                        </div>
                        <div>
                            <img src={StartImg} alt="" />
                                <h2>graphics design</h2>
                        </div>
                    </div>
                </div> */}
      </div>
    </section>
  );
};
export default MarqueeSection;
