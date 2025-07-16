import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../api/blogs";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSectionS3 = () => {
  return (
    <section className="blog-section-s3 section-padding">
      <div className="container">
        <div className="title">
          <h3>
            See latest articles from <span>our agency</span>
          </h3>
          <Link onClick={ClickHandler} to="/contact" className="theme-btn">
            <span className="rolling-text">Contact us</span>
            <i className="ti-arrow-top-right"></i>
          </Link>
        </div>
        <div
          className="row scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          {blogs.slice(6, 9).map((blog, bitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={bitem}>
              <div className="blog-card">
                <div className="image">
                  <img src={blog.screens} alt="" />
                  <img src={blog.screens} alt="" />
                  <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <span>{blog.create_at}</span>
                  <h3>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-single/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                    {" "}
                    <span className="rolling-text">read more</span>
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionS3;
