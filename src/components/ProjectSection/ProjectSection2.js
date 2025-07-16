// import React from "react";
// import { Link } from "react-router-dom";
// import Projects from "../../api/projects";
// import pimg1 from "../../images/Screenshot 2025-07-16 012924.png";
// import pancham from "../../images/Screenshot 2025-07-16 085500.png";
// import sughad from "../../images/Screenshot 2025-07-16 085952.png";
// import pimg2 from "../../images/Screenshot 2025-07-16 013036.png";
// import pimg3 from "../../images/Screenshot 2025-07-16 013138.png";
// import halerez from "../../images/Screenshot 2025-07-16 085652.png";
// import pimg4 from "../../images/image.png";
// import pimg5 from "../../images/Screenshot 2025-07-16 084320.png";
// import pimg6 from "../../images/project/6.jpg";
// import pimg7 from "../../images/Screenshot 2025-07-16 084657.png";
// import pimg8 from "../../images/Screenshot 2025-07-16 084939.png";
// import pimg9 from "../../images/Screenshot 2025-07-16 085116.png";
// import pimg10 from "../../images/project/p2.jpg";
// import pimg11 from "../../images/project/p3.jpg";
// import pimg12 from "../../images/project/p4.jpg";
// import pimg13 from "../../images/project/p5.jpg";
// import pimg14 from "../../images/project/p6.jpg";
// import pimg15 from "../../images/project/p7.jpg";
// import pimg16 from "../../images/project/p8.jpg";

// const ClickHandler = () => {
//   window.scrollTo(10, 0);
// };

// const JewelleryProjects = [
//   {
//     id: "1",
//     title: "Navrang Jewellers - Social Media Management",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "KUALA LUMPUR, MALAYSIA",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose",
//     pimg1: pimg1,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "3",
//     title: "Vrindaara - Social Media & Campaign Management",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "KUALA LUMPUR, MALAYSIA",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose3",
//     pimg1: pimg3,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "4",
//     title: "Jiaah Silver - Social Media Marketing",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "KUALA LUMPUR, MALAYSIA",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose4",
//     pimg1: pimg4,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "5",
//     title: "Bhavsar Jewellers LLP - Social Media Marketing",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "Web Design & Dev",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose5",
//     pimg1: pimg5,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "7",
//     title: "Arabic Gold - Social Media Marketing",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "Web Design & Dev",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose7",
//     pimg1: pimg7,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "8",
//     title: "Ratnakar Jewellers",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "Web Design & Dev",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose8",
//     pimg1: pimg8,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "9",
//     title: "Ava Jewels",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "Web Design & Dev",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose9",
//     pimg1: pimg9,
//     date: "Feb 2024",
//     location: "Austria",
//   },
// ];

// const RestaurantProjects = [
//   {
//     id: "1",
//     title: "Pancham Dosa - Social Media Marketing",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "KUALA LUMPUR, MALAYSIA",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose",
//     pimg1: pancham,
//     date: "Feb 2024",
//     location: "Austria",
//   },
//   {
//     id: "3",
//     title: "Halerez Cafe",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "KUALA LUMPUR, MALAYSIA",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose3",
//     pimg1: halerez,
//     date: "Feb 2024",
//     location: "Austria",
//   },
// ];

// const FarmProjects = [
//   {
//     id: "1",
//     title: "Sughad Farm - Social Media Marketing",
//     title2: "Commercial",
//     title3: "Architecture",
//     subtitle: "KUALA LUMPUR, MALAYSIA",
//     subtitle2: "Architecture Design",
//     slug: "Jack-Rose",
//     pimg1: sughad,
//     date: "Feb 2024",
//     location: "Austria",
//   },
// ];
// const ProjectSection = (props) => {
//   return (
//     <section className={"" + props.hclass}>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 col-12">
//             <div
//               className="title scroll-text-animation"
//               data-animation="fade_from_bottom"
//             >
//               <h2 style={{ textAlign: "center" }}>Portfolio</h2>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             border: "1px solid black",
//             borderRadius: "10px",
//             marginTop: "5rem",
//             marginLeft: "5px",
//             marginRight: "5px",
//           }}
//           className="sortable-gallery"
//         >
//           <h3 style={{ textAlign: "center", margin: "3rem" }}>
//             Jewellery Space
//           </h3>
//           <div className="row gallery-container">
//             {JewelleryProjects.map((project, item) => (
//               <div
//                 className="col col-lg-6 col-12 scroll-text-animation"
//                 data-animation="fade_from_bottom"
//                 key={item}
//               >
//                 <div className="project-card">
//                   <img src={project.pimg1} alt="" />
//                   <div className="text">
//                     <h2>
//                       <Link
//                         onClick={ClickHandler}
//                         to={`/project-single/${project.slug}`}
//                       >
//                         {project.title}
//                       </Link>
//                     </h2>
//                     {/* <span>Digital Marketing</span> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           style={{
//             border: "1px solid black",
//             borderRadius: "10px",
//             marginTop: "5rem",
//             marginLeft: "5px",
//             marginRight: "5px",
//           }}
//           className="sortable-gallery"
//         >
//           <h3 style={{ textAlign: "center", margin: "3rem" }}>
//             Restaurant & Cafe Space
//           </h3>
//           <div className="row gallery-container">
//             {RestaurantProjects.map((project, item) => (
//               <div
//                 className="col col-lg-6 col-12 scroll-text-animation"
//                 data-animation="fade_from_bottom"
//                 key={item}
//               >
//                 <div className="project-card">
//                   <img src={project.pimg1} alt="" />
//                   <div className="text">
//                     <h2>
//                       <Link
//                         onClick={ClickHandler}
//                         to={`/project-single/${project.slug}`}
//                       >
//                         {project.title}
//                       </Link>
//                     </h2>
//                     {/* <span>Digital Marketing</span> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           style={{
//             border: "1px solid black",
//             borderRadius: "10px",
//             marginTop: "5rem",
//             marginLeft: "5px",
//             marginRight: "5px",
//           }}
//           className="sortable-gallery"
//         >
//           <h3 style={{ textAlign: "center", margin: "3rem" }}>
//             Farm & Landscape Space
//           </h3>
//           <div className="row gallery-container">
//             {FarmProjects.map((project, item) => (
//               <div
//                 className="col col-lg-6 col-12 scroll-text-animation"
//                 data-animation="fade_from_bottom"
//                 key={item}
//               >
//                 <div className="project-card">
//                   <img src={project.pimg1} alt="" />
//                   <div className="text">
//                     <h2>
//                       <Link
//                         onClick={ClickHandler}
//                         to={`/project-single/${project.slug}`}
//                       >
//                         {project.title}
//                       </Link>
//                     </h2>
//                     {/* <span>Digital Marketing</span> */}
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
import pimg9 from "../../images/Screenshot 2025-07-16 085116.png";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const JewelleryProjects = [
  {
    id: "1",
    title: "Navrang Jewellers - Social Media Management",
    slug: "Jack-Rose",
    pimg1: pimg1,
  },
  {
    id: "3",
    title: "Vrindaara - Social Media & Campaign Management",
    slug: "Jack-Rose3",
    pimg1: pimg3,
  },
  {
    id: "4",
    title: "Jiaah Silver - Social Media Marketing",
    slug: "Jack-Rose4",
    pimg1: pimg4,
  },
  {
    id: "5",
    title: "Bhavsar Jewellers LLP - Social Media Marketing",
    slug: "Jack-Rose5",
    pimg1: pimg5,
  },
  {
    id: "7",
    title: "Arabic Gold - Social Media Marketing",
    slug: "Jack-Rose7",
    pimg1: pimg7,
  },
  {
    id: "8",
    title: "Ratnakar Jewellers",
    slug: "Jack-Rose8",
    pimg1: pimg8,
  },
  {
    id: "9",
    title: "Ava Jewels",
    slug: "Jack-Rose9",
    pimg1: pimg9,
  },
];

const RestaurantProjects = [
  {
    id: "1",
    title: "Pancham Dosa - Social Media Marketing",
    slug: "Jack-Rose",
    pimg1: pancham,
  },
  {
    id: "3",
    title: "Halerez Cafe",
    slug: "Jack-Rose3",
    pimg1: halerez,
  },
];

const FarmProjects = [
  {
    id: "1",
    title: "Sughad Farm - Social Media Marketing",
    slug: "Jack-Rose",
    pimg1: sughad,
  },
];

const ProjectSection = (props) => {
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mx-auto">
            <div
              className="title scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <h2 style={{ textAlign: "center" }}>Portfolio</h2>
            </div>
          </div>
        </div>

        {/* Jewellery Section */}
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "5rem",
            padding: "2rem 1rem",
          }}
          className="sortable-gallery"
        >
          <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
            Jewellery Space
          </h3>
          <div className="row gallery-container g-4">
            {JewelleryProjects.map((project) => (
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

        {/* Restaurant Section */}
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "5rem",
            padding: "2rem 1rem",
          }}
          className="sortable-gallery"
        >
          <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
            Restaurant & Cafe Space
          </h3>
          <div className="row gallery-container g-4">
            {RestaurantProjects.map((project) => (
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

        {/* Farm Section */}
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            marginTop: "5rem",
            padding: "2rem 1rem",
          }}
          className="sortable-gallery"
        >
          <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
            Farm & Landscape Space
          </h3>
          <div className="row gallery-container g-4">
            {FarmProjects.map((project) => (
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
