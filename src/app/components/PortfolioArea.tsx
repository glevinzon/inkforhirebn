import React from "react";

const PortfolioArea = () => {
  return (
    <section
      className="portfolio-area2 pt-120 fix"
      style={{
        background: "url(img/bg/por-bg.png) no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50">
              <h2>Our Portfolio</h2>
              <div className="line2">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row portfolio-active">
          <div className="col-lg-4 col-md-12">
            <div className="portfolio-box mb-30">
              <img src="img/gallery/protfolio-img01.png" alt="img01" />
              <div className="caption">
                <div className="caption-text">
                  <h5>
                    {" "}
                    <a href="projects-detail.html">High Tech Architecture</a>
                  </h5>
                  <p>Lorem dolor sit amet consectetur</p>
                  <a href="projects-detail.html" className="arrow-icon">
                    <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="portfolio-box mb-30">
              <img src="img/gallery/protfolio-img02.png" alt="img01" />
              <div className="caption">
                <div className="caption-text">
                  <h5>
                    {" "}
                    <a href="projects-detail.html">High Tech Architecture</a>
                  </h5>
                  <p>Lorem dolor sit amet consectetur</p>
                  <a href="projects-detail.html" className="arrow-icon">
                    <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="portfolio-box mb-30">
              <img src="img/gallery/protfolio-img03.png" alt="img01" />
              <div className="caption">
                <div className="caption-text">
                  <h5>
                    {" "}
                    <a href="projects-detail.html">High Tech Architecture</a>
                  </h5>
                  <p>Lorem dolor sit amet consectetur</p>
                  <a href="projects-detail.html" className="arrow-icon">
                    <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="portfolio-box mb-30">
              <img src="img/gallery/protfolio-img04.png" alt="img01" />
              <div className="caption">
                <div className="caption-text">
                  <h5>
                    {" "}
                    <a href="projects-detail.html">High Tech Architecture</a>
                  </h5>
                  <p>Lorem dolor sit amet consectetur</p>
                  <a href="projects-detail.html" className="arrow-icon">
                    <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="portfolio-box mb-30">
              <img src="img/gallery/protfolio-img05.png" alt="img01" />
              <div className="caption">
                <div className="caption-text">
                  <h5>
                    {" "}
                    <a href="projects-detail.html">High Tech Architecture</a>
                  </h5>
                  <p>Lorem dolor sit amet consectetur</p>
                  <a href="projects-detail.html" className="arrow-icon">
                    <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="portfolio-box mb-30">
              <img src="img/gallery/protfolio-img06.png" alt="img01" />
              <div className="caption">
                <div className="caption-text">
                  <h5>
                    {" "}
                    <a href="projects-detail.html">High Tech Architecture</a>
                  </h5>
                  <p>Lorem dolor sit amet consectetur</p>
                  <a href="projects-detail.html" className="arrow-icon">
                    <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;
