import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import blogs from '../../api/blogs'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return (
        <section className={"" + props.Qclass}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-md-12 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`post format-standard-image  ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <img src={blog.bloggrid} alt="" />
                                        <span>24 <br />
                                            Feb</span>
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.authorTitle}</Link>
                                            </li>
                                            <li> <Link to="#">Coments
                                                (03)</Link></li>
                                            <li><Link to="#">3 min Read</Link></li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3 className="poort-text poort-in-right"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                        {blog.title2}
                                        </Link>
                                        </h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but
                                            majority have
                                            suffered
                                            teration in some form, by injected humour, or randomised words which
                                            don't look
                                            even slight
                                            believable. If you are going to use a passage of Lorem Ipsum.</p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">Read More</Link>
                                    </div>
                                </div>
                            ))}

                           

                            <div className="pagination-wrapper pagination-wrapper">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="#" aria-label="Previous">
                                            <i className="fi ti-arrow-left left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>
                                    <li>
                                        <Link to="#" aria-label="Next">
                                            <i className="fi ti-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section> 
    )

}

export default BlogList;

