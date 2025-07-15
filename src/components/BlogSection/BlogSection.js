import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {

    const settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };


    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animationt" data-animation="fade_from_right">Latest Articles</h2>
                    <div className="title-bottom">
                        <h3 className="scroll-text-animationt" data-animation="fade_from_right">journal insight <span>of arolax</span></h3>
                        <Link onClick={ClickHandler} to="/blog"> <span className="rolling-text">Read All Posts</span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                </div>
                <Slider {...settings}>
                    {blogs.slice(0, 3).map((blog, bitem) => (
                        <div className="blog-card" key={bitem}>
                            <div className="image">
                                <img src={blog.screens} alt="" />
                            </div>
                            <div className="content">
                                <span>{blog.create_at}</span>
                                <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                <p>{blog.title2}</p>
                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}> <span>Clients Served</span>
                                    <i className="ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
}

export default BlogSection;




