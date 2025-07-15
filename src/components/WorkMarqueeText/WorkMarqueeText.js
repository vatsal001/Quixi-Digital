import React from 'react';
import { Link } from 'react-router-dom';

import Cube from '../../images/cube.svg'
import work1 from '../../images/work/1.svg'
import work2 from '../../images/work/2.svg'
import work3 from '../../images/work/3.svg'
import work4 from '../../images/work/4.svg'





const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const WorkMarqueeText = () => {
    return (
        <div className="work-and-marquee-text">
            <section className="marquee-section-s4">
                <div className="marquee_container">
                    <div className="marquee">
                        <h2><span>pweb develoment<img src={Cube} alt="" /></span> <span>graphics
                            design<img src={Cube} alt="" /></span></h2>
                    </div>
                    <div className="marquee">
                        <h2> <span>digital marketing
                            <img src={Cube} alt="" /></span> <span>graphics design<img
                                src={Cube} alt="" /></span></h2>
                    </div>
                </div>
            </section>

            <section className="work-section section-padding">
                <div className="container">
                    <div className="title">
                        <h3>We solve your brand
                            to grow the <span>startup —</span></h3>
                        <Link onClick={ClickHandler} to="/contact" className="theme-btn"><span className="rolling-text">Contact us</span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                    <div className="row g-0">
                        <div className="col col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="item awward-item">
                                <img src={work1} alt="" />
                                <h2>Select our Services</h2>
                                <p>Lorem ipsum dolor sit amet
                                    sed consectetur elit free</p>
                                <span>1</span>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="item awward-item active">
                                <img src={work2} alt="" />
                                <h2>Transfer to agents</h2>
                                <p>Lorem ipsum dolor sit amet
                                    sed consectetur elit free</p>
                                <span>2</span>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="item awward-item">
                                <img src={work3} alt="" />
                                <h2>Discuss projects</h2>
                                <p>Lorem ipsum dolor sit amet
                                    sed consectetur elit free</p>
                                <span>3</span>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="item awward-item">
                                <img src={work4} alt="" />
                                <h2>start the project</h2>
                                <p>Lorem ipsum dolor sit amet
                                    sed consectetur elit free</p>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkMarqueeText;