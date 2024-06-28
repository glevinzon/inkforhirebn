import React from "react";

const AboutArea = () => {
  return (
    <section id="about" className="about-area about-p pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              className="s-about-img p-relative  wow fadeInLeft  animated"
              data-animation="fadeInLeft"
              data-delay=".4s"
            >
              <img src="img/features/about_img.png" alt="img" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              className="about-content s-about-content  wow fadeInRight  animated"
              data-animation="fadeInRight"
              data-delay=".4s"
            >
              <div className="about-title second-title pb-25">
                <h2>Your Local Partner in Dynamic Advertising Solutions</h2>
                <div className="line">
                  {" "}
                  <img src="img/bg/circle_left.png" alt="circle_right" />
                </div>
              </div>

              <p>
                Iseuljin Enterprise is a local advertising company here in
                Brunei. Our business caters small to large scale advertising
                projects. We are driven to produce quality, reliable and
                economical products to meet the advertising needs of local
                businesses and local economy. We specialize in designing,
                customize printing, events and corporate essentials supplies,
                signages and more. As we continue to grow, we foresee a wide
                range of market to serve and be able to promote economy’s growth
                thru our valued clients using our products as a catalyst for
                their businesses success. We are committed to continue as a
                company that is trustworthy. It’s our pleasure to serve you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
