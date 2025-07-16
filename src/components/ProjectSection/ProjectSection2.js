import React from "react";
import { Link } from "react-router-dom";
import Projects from "../../api/projects";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ProjectSection = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div
              className="title scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <h2>
                Our Top
                <span>Works..</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="project-btn">
              <Link onClick={ClickHandler} to="/project" className="theme-btn">
                {" "}
                <span className="rolling-text"> Portfolio</span>
                <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "5rem",
          }}
          className="sortable-gallery"
        >
          <div className="gallery-filters"></div>
          <div className="row gallery-container">
            {Projects.slice(0, 4).map((project, item) => (
              <div
                className="col col-lg-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
                key={item}
              >
                <div className="project-card">
                  <img src={project.pimg1} alt="" />
                  <div className="text">
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/project-single/${project.slug}`}
                      >
                        {project.title}
                      </Link>
                    </h2>
                    {/* <span>Digital Marketing</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
