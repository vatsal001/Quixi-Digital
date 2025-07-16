import React, { Fragment, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import VideoModal from "../../components/ModalVideo/VideoModal";
import { useParams } from "react-router-dom";
import Services from "../../api/Services";
import Video from "../../images/service-single/video.jpg";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/logo-2.svg";

gsap.registerPlugin(ScrollTrigger);

const ServiceSinglePage = (props) => {
  const { slug } = useParams();
  const serviceDetails = Services.find((item) => item.slug === slug);

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
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <section className="service-single-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 offset-lg-1">
              <div className="service-single-wrap">
                <div className="title-image">
                  <img src={serviceDetails.sSImg} alt="eimg" />
                </div>
                <h2 className="poort-text poort-in-right">
                  {serviceDetails.title}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat qui ducimus illum modi? perspiciatis accusamus soluta
                  perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                  Repudiandae provident to consectetur, sapiente, libero iure
                  necessitatibus corporis nulla voluptate, quisquam aut
                  perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut
                  molestiae, delectus rem.
                </p>
                <h3 className="poort-text poort-in-right">
                  We Provide brilliant ideas & the digital agency
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat qui ducimus illum modi? perspiciatis accusamus soluta
                  perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                  Repudiandae provident to consectetur, sapiente, libero iure
                  necessitatibus corporis nulla voluptate, quisquam aut
                  perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut
                  molestiae, delectus rem.
                </p>
                <div className="video-wrap">
                  <div className="video-img">
                    <img src={Video} alt="" />
                    <div className="video-holder">
                      <VideoModal />
                    </div>
                  </div>
                  <div className="video-content">
                    <h2>Why Marketing Important ?</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisici sed do
                      eiusmod tempor incididunt ut labore et{" "}
                    </p>
                    <ul>
                      <li>Research beyond the business plan</li>
                      <li>Marketing options and rates</li>
                      <li>The ability to turnaround consulting</li>
                    </ul>
                  </div>
                </div>
                <p>
                  There are many variations of passages of lorem ipsum is simply
                  free text available in the market, but the majority time you
                  put aside to be in our office. Lorem ipsum dolor sit amet,
                  consectetLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
                <h3 className="quate">
                  Business is the activity of making one's living or making
                  money by produ The NDIS Cing or buying and selling products
                  akes a lifetime
                </h3>
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
export default ServiceSinglePage;
