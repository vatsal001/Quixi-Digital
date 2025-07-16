// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // image
// import pimg1 from "../../images/partners/Untitled design (23).png";
// import pimg2 from "../../images/partners/Untitled design (24).png";
// import pimg3 from "../../images/partners/Untitled design (25).png";
// import pimg4 from "../../images/partners/Untitled design (26).png";
// import pimg5 from "../../images/partners/Untitled design (27).png";
// import pimg6 from "../../images/partners/Untitled design (28).png";

// const partners = [
//   {
//     id: "01",
//     pimg: pimg1,
//   },
//   {
//     id: "02",
//     pimg: pimg2,
//   },
//   {
//     id: "03",
//     pimg: pimg3,
//   },
//   {
//     id: "04",
//     pimg: pimg4,
//   },
//   {
//     id: "05",
//     pimg: pimg5,
//   },
//   {
//     id: "06",
//     pimg: pimg6,
//   },
// ];

// const Partners2 = (props) => {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     arrows: false,
//     dots: false,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1399,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 757,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 575,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     // <section className="partners-section fade_bottom">
//     //   <h2 className="d-block m-auto text-center">Our Top Clients</h2>
//     //   <div className="container">
//     //     <ul className="partners-slider">
//     //       <Slider {...settings}>
//     //         {partners.map((partner, pitem) => (
//     //           <div key={pitem}>
//     //             <li style={{ height: "270px" }}>
//     //               <img style={{ width: "50%" }} src={partner.pimg} alt="" />
//     //             </li>
//     //           </div>
//     //         ))}
//     //       </Slider>
//     //     </ul>
//     //   </div>
//     // </section>
//     <section class="client-extendad mtb-120">
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-6">
//             <div class="top-title text-center clirnt-desc">
//               <h2>Our extended family</h2>
//               <p>
//                 We have won the trust and hearts of many brands that we worked
//                 for. And while we work together, deeper connections are forged,
//                 and our family extends.
//               </p>
//             </div>
//             <div class="hc-main">
//               {partners.map((partner, pitem) => {
//                 return (
//                   <div class="hc-desc">
//                     <div class="hc-box">
//                       <img src={partner.pimg} alt={partner.id} />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners2;

import React, { Fragment } from "react";
import NavbarS2 from "../NavbarS2/NavbarS2";
import Footer from "../footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/logo-2.svg";
import pimg1 from "../../images/partners/Untitled design (23).png";
import pimg2 from "../../images/partners/Untitled design (24).png";
import pimg3 from "../../images/partners/Untitled design (25).png";
import pimg4 from "../../images/partners/Untitled design (26).png";
import pimg5 from "../../images/partners/Untitled design (27).png";
import pimg6 from "../../images/partners/Untitled design (28).png";

const clientLogos = [
  { id: 1, name: "Client 1", logo: pimg1 },
  { id: 2, name: "Client 2", logo: pimg2 },
  { id: 3, name: "Client 3", logo: pimg3 },
  { id: 4, name: "Client 4", logo: pimg4 },
  { id: 5, name: "Client 5", logo: pimg5 },
  { id: 6, name: "Client 6", logo: pimg6 },
];

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2.5rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "2rem",
    alignItems: "center",
    justifyItems: "center",
  },
  logoBox: {
    width: "100%",
    maxWidth: "150px",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
  },
  logoImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
};

const ClientsPage = () => {
  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Clients</h1>
        <div style={styles.grid}>
          {clientLogos.map((client) => (
            <div key={client.id} style={styles.logoBox}>
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                style={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default ClientsPage;
