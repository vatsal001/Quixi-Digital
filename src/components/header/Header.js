import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header">
      <div className={props.hclass}>
        <nav
          style={{ padding: "5px 0px" }}
          className="navigation navbar navbar-expand-lg navbar-light"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    <img src={props.Logo} alt="" />
                    {/* <span style={{ color: "white" }}>QUIXI DIGITAL</span> */}
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        <span>Quixi Digital </span>
                        <i className="ti-arrow-top-right"></i>
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a
                        href="http://bigbytechsoftlabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        bigbytech Softlabs
                      </a>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About <i className="ti-arrow-top-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/clients">
                        Clients <i className="ti-arrow-top-right"></i>
                      </Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/service">
                        Services <i className="ti-arrow-top-right"></i>
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/service">
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/service-single/Email-Marketing12"
                          >
                            Service Single
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/Project2">
                        Portfolio <i className="ti-arrow-top-right"></i>
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/project">
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/project-single/Jack-Rose"
                          >
                            Portfolio Single
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-2">
                <div className="header-right">
                  <div className="close-form">
                    <Link
                      onClick={ClickHandler}
                      className="theme-btn"
                      to="/contact"
                    >
                      <span> Contact us</span>
                      <i className="ti-arrow-top-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
