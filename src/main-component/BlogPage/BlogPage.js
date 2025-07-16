import React, { Fragment } from "react";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import PageTitle from "../../components/pagetitle/PageTitle";
import BlogList from "../../components/BlogList/BlogList";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

import Logo from "../../images/logo-2.svg";

const BlogPage = () => {
  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <PageTitle pagesub={"Blog"} />
      <BlogList Qclass={"blog-pg-section section-padding"} />
      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};
export default BlogPage;
