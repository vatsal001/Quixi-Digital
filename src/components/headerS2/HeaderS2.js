import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import HeraderAbout from "../HeraderAbout/HeraderAbout";

const HeaderS2 = (props) => {
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
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2 col-3 d-lg-none dl-block">
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
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        <span>Home</span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/home">
                            Creative Agency
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-2">
                            Business Agency
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-3">
                            Digital Agency
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About{" "}
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Services{" "}
                      </Link>
                      <ul className="sub-menu">
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
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Portfolio{" "}
                      </Link>
                      <ul className="sub-menu">
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
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Blog{" "}
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            Blog details{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Pages{" "}
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/team">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/team-single/Henry-Bannet"
                          >
                            Team Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/contact">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-4 col-2">
                <div className="header-right">
                  <span className="location">
                    140 Poplar Road, Mnt, NY 3142
                  </span>
                  <HeraderAbout />
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

export default HeaderS2;
