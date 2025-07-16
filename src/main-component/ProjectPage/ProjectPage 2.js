import React, { Fragment } from "react";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import ProjectSection from "../../components/ProjectSection/ProjectSection2";
import ContactSectionS2 from "../../components/ContactSectionS2/ContactSectionS2";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/logo-2.svg";

const ProjectPage2 = () => {
  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <ProjectSection hclass={"project-section section-padding pb-0"} />

      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectPage2;
