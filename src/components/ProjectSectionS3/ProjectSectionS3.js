import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";
import Projects from "../../api/projects";
import TitleShape from "../../images/ab-arrow.png";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ProjectSectionS3 = (props) => {
  const sliderSettings = {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    speed: 3000,
  };

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="title">
          <div className="left">
            <div className="left-content">
              <div
                className="scroll-text-animation"
                data-animation="fade_from_left"
              >
                <h2>Work</h2>
              </div>
            </div>
            <img
              className="scroll-text-animation"
              data-animation="fade_from_bottom"
              src={TitleShape}
              alt=""
            />
          </div>
          <div
            className="right scroll-text-animation"
            data-animation="fade_from_right"
          >
            <h3>
              We <span>provide</span> brilliant idea to grow the{" "}
              <span>startup — agency </span> with your sharp brand.
            </h3>
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <Swiper {...sliderSettings} className="project-slider-active">
          {Projects.slice(8, 12).map((project, item) => (
            <SwiperSlide key={item}>
              <Link
                onClick={ClickHandler}
                to={`/project-single/${project.slug}`}
              >
                <div className="project-box">
                  <img src={project.pimg1} alt="" />
                  <img src={project.pimg1} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          {...sliderSettings}
          dir="rtl"
          className="s2 project-slider-active"
        >
          {Projects.slice(12, 17).map((project, item) => (
            <SwiperSlide key={item}>
              <Link
                onClick={ClickHandler}
                to={`/project-single/${project.slug}`}
              >
                <div className="project-box">
                  <img src={project.pimg1} alt="" />
                  <img src={project.pimg1} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSectionS3;
