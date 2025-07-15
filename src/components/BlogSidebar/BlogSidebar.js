import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className="col col-lg-4">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>search here</h3>
                    <form>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">Technology<span>03</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog" className="active">Marketing
                            <span>02</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog"> Fintech <span>04</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Health & Care <span>05</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title2}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Populer Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="#">Technology</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Marketing</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Fintech</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Health & Care</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Fintech</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Design</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;



