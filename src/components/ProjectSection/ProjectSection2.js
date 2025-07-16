// import React from "react";
// import { Link } from "react-router-dom";
// import pimg1 from "../../images/Screenshot 2025-07-16 012924.png";
// import pancham from "../../images/Screenshot 2025-07-16 085500.png";
// import sughad from "../../images/Screenshot 2025-07-16 085952.png";
// import pimg3 from "../../images/Screenshot 2025-07-16 013138.png";
// import halerez from "../../images/Screenshot 2025-07-16 085652.png";
// import pimg4 from "../../images/image.png";
// import pimg5 from "../../images/Screenshot 2025-07-16 084320.png";
// import pimg7 from "../../images/Screenshot 2025-07-16 084657.png";
// import pimg8 from "../../images/Screenshot 2025-07-16 084939.png";
// import pimg9 from "../../images/Screenshot 2025-07-16 101517.png";
// import pimg10 from "../../images/Screenshot 2025-07-16 230740.png";
// import pimg11 from "../../images/WhatsApp Image 2025-06-13 at 6.43.31 PM.jpeg";
// import pimg12 from "../../images/WhatsApp Image 2025-06-26 at 5.52.15 PM.jpeg";

// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

// const JewelleryProjects = [
//   {
//     id: "4",
//     title: "Jiaah Silver - Social Media Marketing",
//     slug: "https://www.instagram.com/jiaahsilver/",
//     pimg1: pimg4,
//   },
//   {
//     id: "5",
//     title: "Bhavsar Jewellers LLP - Social Media Marketing",
//     slug: "https://www.instagram.com/bhavsarjewellersllp/",
//     pimg1: pimg5,
//   },
//   {
//     id: "3",
//     title: "Vrindaara - Social Media & Campaign Management",
//     slug: "https://www.instagram.com/vrindaara/?hl=en",
//     pimg1: pimg3,
//   },

//   {
//     id: "7",
//     title: "Arabic Gold - Social Media Marketing",
//     slug: "https://www.instagram.com/arabic_gold__/",
//     pimg1: pimg7,
//   },
//   {
//     id: "1",
//     title: "Navrang Jewellers - Social Media Management",
//     slug: "https://www.instagram.com/navrangjewellersaraspur/?hl=en",
//     pimg1: pimg1,
//   },

//   {
//     id: "8",
//     title: "Ratnakar Jewellers",
//     slug: "https://www.instagram.com/ratnakar_jewels_ahmedabad/",
//     pimg1: pimg8,
//   },
//   {
//     id: "9",
//     title: "J.C Soni & Sons Jewels",
//     slug: "https://www.instagram.com/jcsonijewels/",
//     pimg1: pimg9,
//   },
//   {
//     id: "10",
//     title: "Vaikunth Gold Palace",
//     slug: "https://www.instagram.com/vaikunthgoldpalace/",
//     pimg1: pimg10,
//   },
//   {
//     id: "11",
//     title: "Shivkumar Mangaldas Soni",
//     slug: "https://www.instagram.com/shivkumar_mangaldas_soni/",
//     pimg1: pimg11,
//   },
// ];

// const RestaurantProjects = [
//   {
//     id: "1",
//     title: "Pancham Dosa - Social Media Marketing",
//     slug: "https://www.instagram.com/panchamdosa/",
//     pimg1: pancham,
//   },
//   {
//     id: "3",
//     title: "Halerez Cafe",
//     slug: "https://www.instagram.com/halerez_official/?hl=en",
//     pimg1: halerez,
//   },
// ];

// const FarmProjects = [
//   {
//     id: "1",
//     title: "Sughad Farm - Social Media Marketing",
//     slug: "https://www.instagram.com/sughadfarm/",
//     pimg1: sughad,
//   },
// ];

// const ProjectSection = (props) => {
//   return (
//     <section className={"" + props.hclass}>
//       <div className="container">
//         {/* Jewellery Section */}
//         <div
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             // marginTop: "1rem",
//             padding: "2rem 1rem",
//           }}
//           className="sortable-gallery"
//         >
//           <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
//             Jewellery Space
//           </h3>
//           <div className="row gallery-container g-4">
//             {JewelleryProjects.map((project) => (
//               <div
//                 className="col-lg-6 col-md-6 col-sm-12 scroll-text-animation"
//                 data-animation="fade_from_bottom"
//                 key={project.id}
//               >
//                 <div
//                   className="project-card"
//                   style={{
//                     border: "1px solid #eee",
//                     borderRadius: "12px",
//                     overflow: "hidden",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//                     background: "#fff",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "translateY(-5px)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "translateY(0)")
//                   }
//                 >
//                   <img
//                     src={project.pimg1}
//                     alt={project.title}
//                     style={{
//                       width: "100%",
//                       height: "220px",
//                       objectFit: "cover",
//                       display: "block",
//                       transition: "transform 0.3s ease-in-out",
//                     }}
//                     onMouseOver={(e) =>
//                       (e.currentTarget.style.transform = "scale(1.03)")
//                     }
//                     onMouseOut={(e) =>
//                       (e.currentTarget.style.transform = "scale(1)")
//                     }
//                   />
//                   <div
//                     className="text"
//                     style={{
//                       padding: "1rem",
//                       minHeight: "100px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       textAlign: "center",
//                     }}
//                   >
//                     <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
//                       <a
//                         href={project.slug}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ textDecoration: "none", color: "#000" }}
//                       >
//                         {project.title}
//                       </a>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Restaurant Section */}
//         <div
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             marginTop: "5rem",
//             padding: "2rem 1rem",
//           }}
//           className="sortable-gallery"
//         >
//           <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
//             Restaurant & Cafe Space
//           </h3>
//           <div className="row gallery-container g-4">
//             {RestaurantProjects.map((project) => (
//               <div
//                 className="col-lg-6 col-md-6 col-sm-12 scroll-text-animation"
//                 data-animation="fade_from_bottom"
//                 key={project.id}
//               >
//                 <div
//                   className="project-card"
//                   style={{
//                     border: "1px solid #eee",
//                     borderRadius: "12px",
//                     overflow: "hidden",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//                     background: "#fff",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "translateY(-5px)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "translateY(0)")
//                   }
//                 >
//                   <img
//                     src={project.pimg1}
//                     alt={project.title}
//                     style={{
//                       width: "100%",
//                       height: "220px",
//                       objectFit: "cover",
//                       display: "block",
//                       transition: "transform 0.3s ease-in-out",
//                     }}
//                     onMouseOver={(e) =>
//                       (e.currentTarget.style.transform = "scale(1.03)")
//                     }
//                     onMouseOut={(e) =>
//                       (e.currentTarget.style.transform = "scale(1)")
//                     }
//                   />
//                   <div
//                     className="text"
//                     style={{
//                       padding: "1rem",
//                       minHeight: "100px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       textAlign: "center",
//                     }}
//                   >
//                     <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
//                       <a
//                         href={project.slug}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ textDecoration: "none", color: "#000" }}
//                       >
//                         {project.title}
//                       </a>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Farm Section */}
//         <div
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             marginTop: "5rem",
//             padding: "2rem 1rem",
//           }}
//           className="sortable-gallery"
//         >
//           <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
//             Farm & Landscape Space
//           </h3>
//           <div className="row gallery-container g-4">
//             {FarmProjects.map((project) => (
//               <div
//                 className="col-lg-6 col-md-6 col-sm-12 scroll-text-animation"
//                 data-animation="fade_from_bottom"
//                 key={project.id}
//               >
//                 <div
//                   className="project-card"
//                   style={{
//                     border: "1px solid #eee",
//                     borderRadius: "12px",
//                     overflow: "hidden",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//                     background: "#fff",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "translateY(-5px)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "translateY(0)")
//                   }
//                 >
//                   <img
//                     src={project.pimg1}
//                     alt={project.title}
//                     style={{
//                       width: "100%",
//                       height: "220px",
//                       objectFit: "cover",
//                       display: "block",
//                       transition: "transform 0.3s ease-in-out",
//                     }}
//                     onMouseOver={(e) =>
//                       (e.currentTarget.style.transform = "scale(1.03)")
//                     }
//                     onMouseOut={(e) =>
//                       (e.currentTarget.style.transform = "scale(1)")
//                     }
//                   />
//                   <div
//                     className="text"
//                     style={{
//                       padding: "1rem",
//                       minHeight: "100px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       textAlign: "center",
//                     }}
//                   >
//                     <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
//                       <a
//                         href={project.slug}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ textDecoration: "none", color: "#000" }}
//                       >
//                         {project.title}
//                       </a>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;

import React from "react";
import { Link } from "react-router-dom";
import pimg1 from "../../images/Screenshot 2025-07-16 012924.png";
import pancham from "../../images/Screenshot 2025-07-16 085500.png";
import sughad from "../../images/Screenshot 2025-07-16 085952.png";
import pimg3 from "../../images/Screenshot 2025-07-16 013138.png";
import halerez from "../../images/Screenshot 2025-07-16 085652.png";
import pimg4 from "../../images/image.png";
import pimg5 from "../../images/Screenshot 2025-07-16 084320.png";
import pimg7 from "../../images/Screenshot 2025-07-16 084657.png";
import pimg8 from "../../images/Screenshot 2025-07-16 084939.png";
import pimg9 from "../../images/Screenshot 2025-07-16 101517.png";
import pimg10 from "../../images/Screenshot 2025-07-16 230740.png";
import pimg11 from "../../images/WhatsApp Image 2025-06-13 at 6.43.31 PM.jpeg";
import pimg12 from "../../images/WhatsApp Image 2025-06-26 at 5.52.15 PM.jpeg";

const JewelleryProjects = [
  {
    id: "4",
    title: "Jiaah Silver - Social Media Marketing",
    slug: "https://www.instagram.com/jiaahsilver/",
    pimg1: pimg4,
  },
  {
    id: "5",
    title: "Bhavsar Jewellers LLP - Social Media Marketing",
    slug: "https://www.instagram.com/bhavsarjewellersllp/",
    pimg1: pimg5,
  },
  {
    id: "3",
    title: "Vrindaara - Social Media & Campaign Management",
    slug: "https://www.instagram.com/vrindaara/?hl=en",
    pimg1: pimg3,
  },
  {
    id: "7",
    title: "Arabic Gold - Social Media Marketing",
    slug: "https://www.instagram.com/arabic_gold__/",
    pimg1: pimg7,
  },
  {
    id: "1",
    title: "Navrang Jewellers - Social Media Management",
    slug: "https://www.instagram.com/navrangjewellersaraspur/?hl=en",
    pimg1: pimg1,
  },
  {
    id: "8",
    title: "Ratnakar Jewellers",
    slug: "https://www.instagram.com/ratnakar_jewels_ahmedabad/",
    pimg1: pimg8,
  },
  {
    id: "9",
    title: "J.C Soni & Sons Jewels",
    slug: "https://www.instagram.com/jcsonijewels/",
    pimg1: pimg9,
  },
  {
    id: "10",
    title: "Vaikunth Gold Palace",
    slug: "https://www.instagram.com/vaikunthgoldpalace/",
    pimg1: pimg10,
  },
  {
    id: "11",
    title: "Shivkumar Mangaldas Soni",
    slug: "https://www.instagram.com/shivkumar_mangaldas_soni/",
    pimg1: pimg11,
  },
];

const RestaurantProjects = [
  {
    id: "1",
    title: "Pancham Dosa - Social Media Marketing",
    slug: "https://www.instagram.com/panchamdosa/",
    pimg1: pancham,
  },
  {
    id: "3",
    title: "Halerez Cafe",
    slug: "https://www.instagram.com/halerez_official/?hl=en",
    pimg1: halerez,
  },
];

const FarmProjects = [
  {
    id: "1",
    title: "Sughad Farm - Social Media Marketing",
    slug: "https://www.instagram.com/sughadfarm/",
    pimg1: sughad,
  },
];

const ProjectSection = (props) => {
  return (
    <section className={"" + props.hclass}>
      <style>{`
        .project-section h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #2c3e50;
        }
        .project-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          background: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 1s ease forwards;
          opacity: 0;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .project-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card img:hover {
          transform: scale(1.05);
        }
        .project-card .text {
          padding: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 120px;
        }
        .project-card .text h2 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #333;
        }
        .project-card .text a {
          text-decoration: none;
          color: #1a1a1a;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="container project-section">
        {/* Render Section */}
        {[
          { title: "Jewellery Space", data: JewelleryProjects },
          { title: "Restaurant & Cafe Space", data: RestaurantProjects },
          { title: "Farm & Landscape Space", data: FarmProjects },
        ].map((section, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "2rem 1rem",
              marginTop: index > 0 ? "4rem" : 0,
              background: "#fdfdfd",
            }}
          >
            <h3 className="text-center">{section.title}</h3>
            <div className="row gallery-container g-4">
              {section.data.map((project) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-12 scroll-text-animation"
                  key={project.id}
                >
                  <div className="project-card">
                    <img src={project.pimg1} alt={project.title} />
                    <div className="text">
                      <h2>
                        <a
                          href={project.slug}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
