import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Slide1 from "../../images/slider/imoje.png";
import Slide2 from "../../images/slider/text-o.png";
import Slide3 from "../../images/Untitled design (38).png";
import Slide4 from "../../images/slider/start.svg";
import Slide5 from "../../images/slider/bg-shap.svg";
import Slide6 from "../../images/slider/round-shape.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".new_img-animet");
    animatedElements.forEach((element) => {
      const image = element.querySelector("img");
      if (!image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, { xPercent: -100, duration: 1.5, ease: "power2.out" });
      tl.from(image, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrap">
          <div className="title">
            <div className="splittext-line">
              <h2
                className="italic scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                Every
              </h2>
              <h2 className="normal scroll-text-animation">
                Digital <img src={Slide1} alt="icon" />
              </h2>
              <h2 className="text-stroke scroll-text-animation">
                S<img src={Slide2} alt="text-icon" />
                lution
              </h2>
              <div
                className="p-style-s2 scroll-text-animation"
                data-animation="fade_from_right"
              >
                <p>
                  Elevate your brand with the Agencyo Agency – everything from
                  strategy to advertising & scale.
                </p>
              </div>
            </div>
            <div className="content_middle">
              <img src={Slide3} alt="background" />
            </div>
          </div>
          <div className="start new_img-animet">
            <img data-speed="0.8" src={Slide4} alt="start" />
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <img src={Slide5} alt="background shape" />
      </div>
      <div className="round-shape">
        <img src={Slide6} alt="round shape" />
      </div>
    </section>
  );
};

export default Hero;
