import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import testimonial1 from '../../images/testimonial/1.jpg'
import testimonial2 from '../../images/testimonial/2.jpg'
import start from '../../images/stert.svg'
import rightshape from '../../images/testimonial/right-shape.png'


const testimonials = [
    {
        id: '01',
        Des: "Thread is a full-service creative studio based in Lancaster,Penns-ylvania, serving clients worldwide. Whether we are crafting brand strategies, producing and directing films,shaping visual identities, creating compelling photography.Our team of experts is dedicated to crafting solutions that drive growth and transform your.",
        Title: 'Robert J. Hare',
        Sub: "Founder & Ceo",
        image: testimonial1,
    },
    {
        id: '02',
        Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,or randomised words which don't look even slightly believable. or randomised  words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to  there",
        Title: 'Lisa J. Hanna',
        Sub: "Admin",
        image: testimonial2,
    },

]

const Testimonial = (props) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);


    return (
        <section className={"" + props.hclass}>
            <div className="testimonial-wrap testimonial-slider">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="image">
                                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} arrows={false} >
                                    {testimonials.map((testitem, titem) => (
                                        <div className="item" key={titem}>
                                            <img src={testitem.image} alt="" />
                                        </div>
                                    ))}
                                </Slider>
                                <div className="start">
                                    <img src={start} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="testimonial-content">
                                <h3>feedback<span>...</span></h3>
                                <div className="slider-text ">
                                    <Slider asNavFor={nav1}
                                        ref={slider => (sliderRef2 = slider)}
                                        slidesToShow={1}
                                        swipeToSlide={false}
                                        focusOnSelect={false} fade={true}>
                                        {testimonials.map((testitem, titem) => (
                                            <div className="item" key={titem}>
                                                <p>{testitem.Des}.</p>
                                                <h4>{testitem.Title} / <span>{testitem.Sub}</span></h4>
                                            </div>
                                        ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape">
                    <svg width="1575" height="1108" viewBox="0 0 1575 1108" fill="none">
                        <g filter="url(#filter0_f_1_342)">
                            <ellipse cx="787.906" cy="554.021" rx="474.434" ry="83.9948"
                                transform="rotate(23.3308 787.906 554.021)" fill="#FD5B38" fillOpacity="0.21" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1_342" x="0.976105" y="0.859863" width="1573.86" height="1106.32"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1_342" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="right-shape">
                    <img src={rightshape} alt="" />
                </div>
                <div className="side-text-slid">
                    <div className="marquee">
                        <h2>testimonial</h2>
                    </div>
                    <div className="marquee">
                        <h2>testimonial</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;







