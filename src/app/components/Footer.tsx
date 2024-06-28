import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-bg footer-p"
      style={{
        background: "url(img/bg/footer-bg.png) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="footer-top pt-70 pb-40">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title mb-30">
                  <img src="img/ink-for-hire/logo.png" alt="img" />
                </div>
                <div className="f-contact">
                  <ul>
                    <li>
                      <i className="icon fal fa-phone"></i>
                      <span>
                        +673 2423008
                        <br />
                        +673 8972768
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-envelope"></i>
                      <span>
                        <a href="mailto:inkforhirebn@gmail.com">
                          inkforhirebn@gmail.com
                        </a>
                        <br />
                        <a href="mailto:iseuljinbn@gmail.com">
                          iseuljinbn@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check"></i>
                      <span>
                        Unit 9, Scout Headquarters Building,
                        <br /> Kampung Mata-Mata, Jalan Gadong,
                        <br /> BE4119, Brunei Darussalam
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Links</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html"> About Us</a>
                    </li>
                    <li>
                      <a href="services.html"> Services </a>
                    </li>
                    <li>
                      <a href="contact.html"> Contact Us</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Services</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Privercy</a>
                    </li>
                    <li>
                      <a href="#">Term & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Our Gallery</h2>
                </div>
                <div className="f-insta">
                  <ul>
                    <li>
                      <a
                        href="img/instagram/f-galler-01.png"
                        className="popup-image"
                      >
                        <img src="img/instagram/f-galler-01.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="img/instagram/f-galler-02.png"
                        className="popup-image"
                      >
                        <img src="img/instagram/f-galler-02.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="img/instagram/f-galler-03.png"
                        className="popup-image"
                      >
                        <img src="img/instagram/f-galler-03.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="img/instagram/f-galler-04.png"
                        className="popup-image"
                      >
                        <img src="img/instagram/f-galler-04.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="img/instagram/f-galler-05.png"
                        className="popup-image"
                      >
                        <img src="img/instagram/f-galler-05.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="img/instagram/f-galler-06.png"
                        className="popup-image"
                      >
                        <img src="img/instagram/f-galler-06.png" alt="img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              Copyright © 2024 Ink For Hire. All rights reserved.
            </div>
            <div className="col-lg-6 text-right text-xl-right">
              <div className="footer-social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
