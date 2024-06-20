import React from "react";

const BlogArea = () => {
  return (
    <section id="blog" className="blog-area  p-relative pt-120 pb-90 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              <h2>Latest Blog & News</h2>
              <div className="line5">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_left" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="single-post2 mb-30">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="blog-thumb2">
                    <a href="blog-details.html">
                      <img src="img/blog/inner_b1.jpg" alt="img" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="blog-content2">
                    <div className="b-meta">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-user"></i> Admin
                              </li>
                              <li>
                                <i className="fal fa-calendar-alt"></i> 24th
                                March 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <h4>
                          <a href="blog-details.html">
                            Fusce suscipit arcu velit id scelerisque tempus est
                          </a>
                        </h4>
                        <p>
                          Cras ultrices maximus arcu ut aqam. Aliquam daber a
                          diam.
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-12 col-md-12">
                        <div className="blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-angle-right"></i> Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="single-post2 mb-30">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="blog-thumb2">
                    <a href="blog-details.html">
                      <img src="img/blog/inner_b3.jpg" alt="img" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="blog-content2">
                    <div className="b-meta">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-user"></i> Admin
                              </li>
                              <li>
                                <i className="fal fa-calendar-alt"></i> 24th
                                March 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <h4>
                          <a href="blog-details.html">
                            Fusce suscipit arcu velit id scelerisque tempus est
                          </a>
                        </h4>
                        <p>
                          Cras ultrices maximus arcu ut aqam. Aliquam daber a
                          diam.
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-12 col-md-12">
                        <div className="blog-btn">
                          <a href="blog-details.html">
                            <i className="fas fa-angle-right"></i> Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
