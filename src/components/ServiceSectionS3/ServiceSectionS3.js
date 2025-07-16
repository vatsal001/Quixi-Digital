import React from "react";
import { Link } from "react-router-dom";
import Services from "../../api/Services";
import Imgage from "../../images/service/icon-1.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ServiceSectionS3 = () => {
  return (
    <section className="service-section-s3 section-padding">
      <div className="container">
        <div
          className="title scroll-text-animation"
          data-animation="fade_from_buttom"
        >
          <h3>
            We solve your brand to grow the <span>startup —</span>
          </h3>
          <Link onClick={ClickHandler} to="/contact" className="theme-btn">
            <span className="rolling-text">Contact us</span>
            <i className="ti-arrow-top-right"></i>
          </Link>
        </div>
        <div
          className="row scroll-text-animation"
          data-animation="fade_from_buttom"
        >
          {Services.slice(11, 14).map((serve, item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item}>
              <div className="service-card-s3">
                <span className="num">{serve.Id}.</span>
                <div className="icon">
                  <img src={Imgage} alt="" />
                </div>
                <h2>
                  <Link
                    onClick={ClickHandler}
                    to={`/service-single/${serve.slug}`}
                  >
                    {serve.title}
                  </Link>
                </h2>
                <p>{serve.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionS3;
