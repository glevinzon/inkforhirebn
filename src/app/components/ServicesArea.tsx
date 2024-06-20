import React from "react";

const ServicesArea = () => {
  return (
    <section
      id="services-area2"
      className="services-area2 pt-120 fix"
      style={{
        background: "url(img/bg/service-bg.png) no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50">
              <h2>Our Speciallization</h2>
              <div className="line2">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row home-blog-active">
          <div className="col-lg-4 col-md-12">
            <div className="services-box2 mb-30">
              <div className="services-icon">
                <i className="flaticon flaticon-crane"></i>
              </div>
              <div className="services-content2">
                <h5>
                  <a href="services-detail.html">Construction Work</a>
                </h5>
                <p>
                  Aliquam diam ante, viverra quis quam nec, feugiat scelerisque
                  ipsum. Nunc volutpat sem sed quam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="services-box2 mb-30">
              <div className="services-icon">
                <i className="flaticon flaticon-home"></i>
              </div>
              <div className="services-content2">
                <h5>
                  <a href="services-detail.html">Architecture Design</a>
                </h5>
                <p>
                  Aliquam diam ante, viverra quis quam nec, feugiat scelerisque
                  ipsum. Nunc volutpat sem sed quam.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="services-box2 mb-30">
              <div className="services-icon">
                <i className="flaticon flaticon-blueprint"></i>
              </div>
              <div className="services-content2">
                <h5>
                  <a href="services-detail.html">Floor Plan Design</a>
                </h5>
                <p>
                  Aliquam diam ante, viverra quis quam nec, feugiat scelerisque
                  ipsum. Nunc volutpat sem sed quam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="services-box2 mb-30">
              <div className="services-icon">
                <i className="flaticon flaticon-graphic-design"></i>
              </div>
              <div className="services-content2">
                <h5>
                  <a href="services-detail.html">Interior Designing</a>
                </h5>
                <p>
                  Aliquam diam ante, viverra quis quam nec, feugiat scelerisque
                  ipsum. Nunc volutpat sem sed quam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="services-box2 mb-30">
              <div className="services-icon">
                <i className="flaticon flaticon-living-room"></i>
              </div>
              <div className="services-content2">
                <h5>
                  <a href="services-detail.html">Furniture Production</a>
                </h5>
                <p>
                  Aliquam diam ante, viverra quis quam nec, feugiat scelerisque
                  ipsum. Nunc volutpat sem sed quam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="services-box2 mb-30">
              <div className="services-icon">
                <i className="flaticon flaticon-customer-service"></i>
              </div>
              <div className="services-content2">
                <h5>
                  <a href="services-detail.html">24X7 Support</a>
                </h5>
                <p>
                  Aliquam diam ante, viverra quis quam nec, feugiat scelerisque
                  ipsum. Nunc volutpat sem sed quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
