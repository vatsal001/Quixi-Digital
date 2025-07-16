import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import Projects from "../../api/projects";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/logo-2.svg";
import psi1 from "../../images/project-details/01.jpg";
import psi2 from "../../images/project-details/02.jpg";
import psingle1 from "../../images/project-details/03.jpg";
import psingle2 from "../../images/project-details/04.jpg";

const ProjectSingle = (props) => {
  const { slug } = useParams();

  const ProjectSingle = Projects.find((item) => item.slug === slug);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <section className="project-single-page section-padding">
        <div className="container">
          <div className="project-wrap">
            <div className="project-top-info">
              <div className="row align-items-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title poort-text poort-in-right">
                    <h2>{ProjectSingle.title}</h2>
                    <h3>
                      Deeper Dive into Our Digital Product Design Masterpieces
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omniste natus voluptatem
                      accusantiume rem aperia eaque ipsa quae abillo inventore
                      veritatis quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim epsam voluptatem quia voluptas
                      aspernatur odites sed quia consequunture
                    </p>
                  </div>
                  <Link
                    onClick={ClickHandler}
                    to="/service"
                    className="theme-btn"
                  >
                    {" "}
                    <span className="rolling-text">All Services</span>
                  </Link>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="project-info">
                    <ul>
                      <li>
                        <h3>Clients</h3>
                        <span>Design Studio In USA </span>
                      </li>
                      <li>
                        <h3>Project Type</h3>
                        <span>Digital Product Design</span>
                      </li>
                      <li>
                        <h3>Date</h3>
                        <span>25 October 2024 </span>
                      </li>
                      <li>
                        <h3>Website</h3>
                        <span>
                          {" "}
                          <Link onClick={ClickHandler} to="#">
                            wiatech.com
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="image-gallery">
                <ul>
                  <li>
                    <img src={psi1} alt="" />
                  </li>
                  <li>
                    <img src={psi2} alt="" />
                  </li>
                </ul>
              </div>
              <div className="info-content">
                <div className="info-item">
                  <div className="left">
                    <h2 className="poort-text poort-in-right">
                      Interesting facts in Development
                    </h2>
                  </div>
                  <div className="right">
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter
                    </p>
                    <div className="item">
                      <ul>
                        <li>Efficient Sprint Planning</li>
                        <li>Standups and Demos</li>
                      </ul>
                      <ul>
                        <li>Iterative Delivery Approach</li>
                        <li>Problem-solving</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="left">
                    <h2 className="poort-text poort-in-right">
                      The Results of Our Project
                    </h2>
                  </div>
                  <div className="right s2">
                    <p>
                      Will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness rejects,
                      dislikes, or avoids pleasure{" "}
                    </p>
                    <div className="item">
                      <ul>
                        <li>
                          <h3>
                            <i className="ti-check"></i>Support clients
                          </h3>
                          <span>
                            Sed ut perspiciatis unde omnis natus voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                            inventore
                          </span>
                        </li>
                        <li>
                          <h3>
                            <i className="ti-check"></i>Solve problems
                          </h3>
                          <span>
                            Sed ut perspiciatis unde omnis natus voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                            inventore
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-img">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 ">
                    <img src={psingle1} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 ">
                    <img src={psingle2} alt="" />
                  </div>
                </div>
              </div>
              <div className="page-chang">
                <div className="previous-post post">
                  <Link onClick={ClickHandler} to="#">
                    Business Website Design
                  </Link>
                </div>
                <button className="post-btn">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.68457 0.444336H7.0903V6.88878H0.68457V0.444336ZM0.68457 13.3333H7.0903V19.7777H0.68457V13.3333ZM7.0903 26.2221H0.68457V32.6665H7.0903V26.2221ZM13.4959 0.444336H19.9016V6.88878H13.4959V0.444336ZM19.9016 13.3333H13.4959V19.7777H19.9016V13.3333ZM13.4959 26.2221H19.9016V32.6665H13.4959V26.2221ZM32.7133 0.444336H26.3076V6.88878H32.7133V0.444336ZM26.3076 13.3333H32.7133V19.7777H26.3076V13.3333ZM32.7133 26.2221H26.3076V32.6665H32.7133V26.2221Z"
                      fill="#FF7236"
                    />
                  </svg>
                </button>
                <div className="next-post post">
                  <Link onClick={ClickHandler} to="#" className="next">
                    Next <i className="ti-angle-right"></i>
                  </Link>
                  <Link onClick={ClickHandler} to="#">
                    Mobile Application Design
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectSingle;
