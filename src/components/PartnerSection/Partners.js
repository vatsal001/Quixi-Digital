import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import pimg1 from "../../images/partners/Untitled design (23).png";
import pimg2 from "../../images/partners/Untitled design (24).png";
import pimg3 from "../../images/partners/Untitled design (25).png";
import pimg4 from "../../images/partners/Untitled design (26).png";
import pimg5 from "../../images/partners/Untitled design (27).png";
import pimg6 from "../../images/partners/Untitled design (28).png";

const partners = [
  {
    id: "01",
    pimg: pimg1,
  },
  {
    id: "02",
    pimg: pimg2,
  },
  {
    id: "03",
    pimg: pimg3,
  },
  {
    id: "04",
    pimg: pimg4,
  },
  {
    id: "05",
    pimg: pimg5,
  },
  {
    id: "06",
    pimg: pimg6,
  },
];

const Partners2 = (props) => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <section className="partners-section fade_bottom">
    //   <h2 className="d-block m-auto text-center">Our Top Clients</h2>
    //   <div className="container">
    //     <ul className="partners-slider">
    //       <Slider {...settings}>
    //         {partners.map((partner, pitem) => (
    //           <div key={pitem}>
    //             <li style={{ height: "270px" }}>
    //               <img style={{ width: "50%" }} src={partner.pimg} alt="" />
    //             </li>
    //           </div>
    //         ))}
    //       </Slider>
    //     </ul>
    //   </div>
    // </section>
    <section class="client-extendad mtb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="top-title text-center clirnt-desc">
              <h2>Our extended family</h2>
              <p>
                We have won the trust and hearts of many brands that we worked
                for. And while we work together, deeper connections are forged,
                and our family extends.
              </p>
            </div>
            <div class="hc-main">
              {partners.map((partner, pitem) => {
                return (
                  <div class="hc-desc">
                    <div class="hc-box">
                      <img src={partner.pimg} alt={partner.id} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners2;
