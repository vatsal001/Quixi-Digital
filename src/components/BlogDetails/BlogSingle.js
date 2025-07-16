import { Link, useParams } from "react-router-dom";
import blogs from "../../api/blogs";
import blog3 from "../../images/blog-details/comments-author/img-1.jpg";
import blog4 from "../../images/blog-details/comments-author/img-2.jpg";
import gl1 from "../../images/blog-details/img-3.jpg";
import gl2 from "../../images/blog-details/img-4.jpg";
import blog6 from "../../images/blog-details/sid.jpg";
import CommentForm from "./CommentsFrom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSingle = (props) => {
  const { slug } = useParams();

  const BlogDetails = blogs.find((item) => item.slug === slug);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="blog-single-section blog-single-left-sidebar-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 col-12 offset-lg-1">
            <div className="post format-standard-image">
              <div className="entry-media">
                <img src={BlogDetails.blogSingleImg} alt="" />
              </div>
              <div className="entry-meta">
                <ul>
                  <li>
                    <i className="fi flaticon-calendar"></i>
                    <Link
                      onClick={ClickHandler}
                      to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                    >
                      02 Apr 2024
                    </Link>
                  </li>
                  <li>
                    <i className="fi flaticon-comments"></i>{" "}
                    <Link
                      onClick={ClickHandler}
                      to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                    >
                      Coments (03)
                    </Link>
                  </li>
                  <li>
                    <i className="fi flaticon-clock"></i>
                    <Link
                      onClick={ClickHandler}
                      to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                    >
                      3 min Read
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="entry-details">
                <h3>{BlogDetails.title}</h3>
                <p>
                  he whimsically named Egg Canvas is the brainchild of Erica
                  Choi, a design director and photo grapher based in York. Why
                  the name “Egg Canvas Erica was inspired by her Korean
                  childhood nickname, which means egg, while “canvas” medium
                  with wh art is created. “Egg Canvas therefore, is her
                  life—creating beautiful things each day a blank canvas.
                </p>
                <p>
                  We have covered many special events such as fireworks, fairs,
                  parades, races, walks, awards ceremonies, fashion shows,
                  sporting events, and even a memorial service.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vulputate vestibulum rhon cus, dolor eget viverra
                  pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
                  eu lacus. Vestibulum non justo fun consectetur, cursus ante,
                  tincidunt sapien. Nulla quis diam sit amet turpis interd enim.
                  Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum
                </p>
              </div>
            </div>
            <blockquote>
              Your time is limited, so don’t waste it living someone else’s
              life.Don’t be trapped by dogma – which is living with the
              <span>John Mehedii</span>
            </blockquote>
            <div className="post-team-content">
              <h3>Let our investment management team</h3>
              <div className="row align-items-center">
                <div className="col-lg-7 col-12">
                  <ul className="content">
                    <li>Lorem Ipsum generators on the tend to repeat.</li>
                    <li> If you are going to use a passage.</li>
                    <li> Lorem Ipsum generators on the tend to repeat.</li>
                    <li> If you are going to use a passage.</li>
                    <li> Lorem Ipsum generators on the tend to repeat.</li>
                  </ul>
                </div>
                <div className="col-lg-5 col-12">
                  <img src={blog6} alt="" />
                </div>
              </div>
            </div>
            <div className="item-img">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 im-1">
                  <img src={gl1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 im-1">
                  <img src={gl2} alt="" />
                </div>
              </div>
            </div>
            <p>
              We have covered many special events such as fireworks, fairs,
              parades, races, walks, awards ceremonies, fashion shows, sporting
              events, and even a memorial service.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. vestibulum rhoncus, dolor eget
              viverra pretium, dolor ellus aliquet nunc,
            </p>
            <div className="tag-share-wrap">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="tag-share clearfix">
                    <div className="tag">
                      <span>Tag: </span>
                      <ul>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            Business
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            apps
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            data
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="tag-share-s2 clearfix">
                    <div className="tag">
                      <span>Share: </span>
                      <ul>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            <i className="ti-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            <i className="ti-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            <i className="ti-tumblr-alt"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1"
                          >
                            <i className="ti-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comments-area">
              <div className="comments-section">
                <h3 className="comments-title">(04) Comment</h3>
                <ol className="comments">
                  <li
                    className="comment even thread-even depth-1"
                    id="comment-1"
                  >
                    <div id="div-comment-1">
                      <div className="comment-theme">
                        <div className="comment-image">
                          <img src={blog3} alt="" />
                        </div>
                      </div>
                      <div className="comment-main-area">
                        <div className="comment-wrapper">
                          <div className="comments-meta">
                            <h4>
                              Rohan De Spond{" "}
                              <span className="comments-date">
                                25 january 2021
                              </span>
                            </h4>
                          </div>
                          <div className="comment-area">
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available, but the leap into electronic type
                              setting, remaining essentiallyuncha opularisedthe
                              with the release of Letrasetsheets containingth
                              leap electrtypesetting remainingmajority have.
                              There are many variations of passages of Lorem
                              Ipsum
                            </p>
                            <div className="comments-reply">
                              <a className="comment-reply-link" href="#">
                                <i className="flaticon-back"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div>
                          <div className="comment-theme">
                            <div className="comment-image">
                              <img src={blog4} alt="" />
                            </div>
                          </div>
                          <div className="comment-main-area">
                            <div className="comment-wrapper">
                              <div className="comments-meta">
                                <h4>
                                  Johan Ritaxon
                                  <span className="comments-date">
                                    25 january 2021
                                  </span>
                                </h4>
                              </div>
                              <div className="comment-area">
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have. There
                                  are many variations of passages
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
