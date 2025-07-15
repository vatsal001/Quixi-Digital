import React from 'react';
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";

const BlogSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="blog-section-s2 section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animation" data-animation="fade_from_bottom">7.news & blogs</h2>
                    <div className="title-bottom">
                        <h3 className="scroll-text-animation" data-animation="fade_from_bottom">leatest blog</h3>
                        <Link onClick={ClickHandler} to="/blog" className="scroll-text-animation" data-animation="fade_from_bottom"> <span className="rolling-text">All Blog</span>
                            <i className="ti-arrow-top-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(3, 6).map((blog, bitem) => (
                        <div className="col-lg-4 col-md-6 col-12 fade_bottom" key={bitem}>
                            <div className="blog-card">
                                <div className="image">
                                    <img src={blog.screens} alt="" />
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="content">
                                    <span>{blog.create_at}</span>
                                    <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}> <span className="rolling-text">read more</span>
                                        <i className="ti-arrow-top-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="blog-btn fade_bottom">
                        <Link onClick={ClickHandler} to="/blog" className="theme-btn"><span className="rolling-text">more blog</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSectionS2;

