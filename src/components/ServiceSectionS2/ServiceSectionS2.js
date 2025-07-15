import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Services from "../../api/Services";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = (props) => {

    const [activeItem, setActiveItem] = useState(null);

    const handleHover = (sitem) => {
        setActiveItem(sitem);
    };



    return (
        <section className="service-section-s2 section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animation" data-animation="fade_from_bottom">3.Services area</h2>
                    <div className="title-bottom">
                        <h3 className="scroll-text-animation" data-animation="fade_from_bottom">Explore services</h3>
                        <Link onClick={ClickHandler} to="/service" className="scroll-text-animation" data-animation="fade_from_bottom">
                            <span className="rolling-text">All Services </span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                </div>
                <div className="row g-0">
                    {Services.slice(6, 11).map((service, sitem) => (
                        <div className="col-12 fade_bottom" key={sitem}>
                            <div className={`service-card ${activeItem === service ? 'active' : ' item'}`}
                                onMouseEnter={() => handleHover(service)}>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                </div>
                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="icon">
                                    <i className="ti-arrow-top-right"></i>
                                </Link>
                                <div className="image">
                                    <img src={service.sImg} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;




