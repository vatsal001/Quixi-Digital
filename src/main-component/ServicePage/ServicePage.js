import React, { Fragment } from "react";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
// import ServiceSectionS3 from "../../components/ServiceSectionS3/ServiceSectionS3";
// import ServiceSectionS2 from "../../components/ServiceSectionS2/ServiceSectionS2";
// import ContactSectionS2 from "../../components/ContactSectionS2/ContactSectionS2";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/tasty. (1).png";

// const ServicePage = () => {
//   return (
//     <Fragment>
//       <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
//       <ServiceSectionS3 />
//       <ServiceSectionS2 />
//       <ContactSectionS2 />
//       <Footer hclass={"footer-section section-padding pb-0"} />
//       <Scrollbar />
//     </Fragment>
//   );
// };
// export default ServicePage;

const services = [
  {
    title: "Website Development",
    description:
      "Custom websites and e-commerce platforms built with React, WordPress, Shopify, and Node.js.",
  },
  {
    title: "Reels Marketing",
    description:
      "Boost your reach with high-performing Instagram reels tailored for your audience and goals.",
  },
  {
    title: "Product Photography",
    description:
      "Professional product shoots that make your offerings stand out online and in ads.",
  },
  {
    title: "Performance Marketing",
    description:
      "ROI-driven ads on Meta, Google, and other platforms to generate leads and sales.",
  },
  {
    title: "Social Media Management",
    description:
      "Full-service social media management: content creation, scheduling, captions, and analytics.",
  },
  {
    title: "Branding & Logo Design",
    description:
      "Crafting visual identity with modern logos, branding kits, and color palettes.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your Google ranking with on-page SEO, keyword strategy, and audits.",
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused interfaces and seamless experiences designed to convert and engage.",
  },
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
    marginBottom: "2rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.03)",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.75rem",
    color: "#222",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.5",
  },
};

const ServicePage = () => {
  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Services</h1>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <h2 style={styles.cardTitle}>{service.title}</h2>
              <p style={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default ServicePage;
