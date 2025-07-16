import React from "react";
import { Link } from "react-router-dom";
import Services from "../../api/Services";
import FLoGo from "../../images/tasty.png";
import Stert from "../../images/stert.svg";

// images

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className={"" + props.hclass}>
      <div className="footer-topbar">
        <div className="container">
          <div className="wraper splittext-line">
            <h2>
              Let’s <span>Work</span>
            </h2>
            <div className="topbar-button">
              <div>
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="theme-btn"
                >
                  {" "}
                  <span className="rolling-text">Contact us</span>{" "}
                  <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
              <div>
                <h2>Together!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <div className="item fade_bottom">
            <h2 className="title">services</h2>
            <ul>
              {Services.slice(0, 5).map((service, Sitem) => (
                <li key={Sitem}>
                  <Link onClick={ClickHandler} to={`/service`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="shape">
              <img src={Stert} alt="" />
            </div>
          </div>
          <div className="item fade_bottom">
            <h2 className="title">Information</h2>
            <ul>
              {Services.slice(0, 5).map((service, Sitem) => (
                <li key={Sitem}>
                  <Link onClick={ClickHandler} to={`/`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="item widget-contact fade_bottom">
            <h2 className="title">ADDRESS</h2>
            <h3>
              109/S One Commercial Space, Shayona City, Maharana Pratap
              Rd,Ghatlodiya, Chanakyapuri, Ahmedabad, Gujarat 380061
            </h3>
            <h4>+91 88490 62703</h4>
            <ul className="widget-social">
              <li>
                <Link to="#">
                  <i className="ti-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-twitter-alt"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-pinterest"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-2 col-12">
              <Link onClick={ClickHandler} to="/" className="logo">
                <img src={FLoGo} />
              </Link>
            </div>
            <div className="col-lg-10 col-md-10 col-12">
              <div className="footer-nav-list">
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      Home <i className="ti-arrow-top-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About <i className="ti-arrow-top-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Services <i className="ti-arrow-top-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/Project2">
                      Projects <i className="ti-arrow-top-right"></i>
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

export default Footer;
