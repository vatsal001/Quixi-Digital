import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogSingle'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo-2.svg';

const BlogDetails = (props) => {


    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <BlogSingle />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
