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
                <h2>We Create Space For A Happy Life</h2>
                <div className="line">
                  {" "}
                  <img src="img/bg/circle_left.png" alt="circle_right" />
                </div>
              </div>

              <p>
                Vivamus mattis ipsum vitae imperdiet eleifend. Nunc scelerisque
                feugiat turpis, et tempor tellus porta vitae. Aenean hendrerit,
                libero sed viverra auctor.
              </p>
              <p>
                Morbi pretium, nisl sit amet placerat imperdiet, enim massa
                venenatis purus, in tincidunt lorem augue ac nunc. Pellentesque
                risus massa, vulputate cursus tortor quis, iaculis maximus
                neque.Aenean hendrerit, libero sed viverra auctor.
              </p>
              <p>
                {" "}
                <img src="img/features/signature.png" alt="img" />{" "}
              </p>
              <p>
                <strong>Romanisa Samu</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
