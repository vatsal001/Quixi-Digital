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
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-12">
            <div
              className="title scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <h2 style={{ textAlign: "center" }}>
                Our Top <span>Works..</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-12 text-lg-end text-center">
            <div className="project-btn">
              <Link onClick={ClickHandler} to="/Project2" className="theme-btn">
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
            marginTop: "2rem",
            padding: "2rem 1rem",
          }}
          className="sortable-gallery"
        >
          <div className="gallery-filters"></div>
          <div className="row gallery-container g-4">
            {Projects.slice(0, 4).map((project) => (
              <div
                className="col-lg-6 col-md-6 col-sm-12 scroll-text-animation"
                data-animation="fade_from_bottom"
                key={project.id}
              >
                <div
                  className="project-card"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    background: "#fff",
                  }}
                >
                  <img
                    src={project.pimg1}
                    alt={project.title}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div className="text" style={{ padding: "1rem" }}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                      <Link
                        onClick={ClickHandler}
                        to={`/project-single/${project.slug}`}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {project.title}
                      </Link>
                    </h2>
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
