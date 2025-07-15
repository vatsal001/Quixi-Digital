import React from "react";
import { Link } from "react-router-dom";
import footetlogo from "../../images/f-logo.svg";

const FooterS2 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="footer-section-s2">
      <div className="container">
        <div className="footer-topbar">
          <h2 className="splittext-line">get in touch</h2>
          <div className="topbar-button btn-wrapper">
            <Link
              onClick={ClickHandler}
              to="/contact"
              className="theme-btn button--stroke btn-move"
              data-block="button"
            >
              <span className="button__spotlight"></span>
              Contact us
            </Link>
          </div>
        </div>
        <div className="footer">
          <div className="left-widget">
            <div className="widget-contact">
              <div className="title">
                <h2>
                  New York office <i className="ti-arrow-down"></i>
                </h2>
                <p>4517 Washington Ave. Manch ester, Kentucky 39495</p>
              </div>
              <h3>+1  333 20 98 40</h3>
              <h4>info@Quixi Digital.com</h4>
            </div>
            <div className="widget-contact">
              <div className="title">
                <h2>
                  San Francisco <i className="ti-arrow-down"></i>
                </h2>
                <p>4517 Washington Ave. Manch ester, Kentucky 39495</p>
              </div>

              <img src={footetlogo} alt="" />
            </div>
          </div>
          <div className="right-widget">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                allowFullScreen
              ></iframe>
            </div>
            <nav className="f-menu">
              <ul>
                <li>
                  <Link onClick={ClickHandler} to="#" className="rolling-text">
                    SOLUTIONS
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="#" className="rolling-text">
                    WORKS
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="#" className="rolling-text">
                    INSIGHTS
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="#" className="rolling-text">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="#" className="rolling-text">
                    WE HIRE
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-lower">
          <div className="container">
            <div className="row align-items-center g-0">
              <div className="col-lg-5 col-12">
                <p className="copyright">
                  Copyright &copy; <span>2024</span> Wpocean by All rights
                  reserved.
                </p>
              </div>
              <div className="col-lg-3 col-12">
                <p>Saturday - Thursday</p>
              </div>
              <div className="col-lg-4 col-12">
                <ul className="widget-social">
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      <i className="ti-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterS2;
