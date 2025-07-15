import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import ContactSectionS2 from '../../components/ContactSectionS2/ContactSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.svg'



const ServicePage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-site-header-s4'} Logo={Logo} />
            <ServiceSectionS3 />
            <ServiceSectionS2 />
            <ContactSectionS2 />
            <Footer hclass={'footer-section section-padding pb-0'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
