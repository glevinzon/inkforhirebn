import React from "react";

const Header = () => {
  return (
    <header className="header-area header-three">
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu text-center text-xl-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Home Page 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Page 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="has-sub">
                        <a href="projects.html">Pages</a>
                        <ul>
                          <li>
                            <a href="projects.html">Gallery</a>
                          </li>
                          <li>
                            <a href="projects-detail.html">Gallery Details</a>
                          </li>

                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <a href="services.html">Services</a>
                        <ul>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="services-detail.html">Services Details</a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-sub">
                        <a href="blog.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 text-right d-none d-lg-block mt-30 mb-30">
                <a href="contact.html" className="btn ss-btn">
                  Make Appointment
                </a>
              </div>

              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
