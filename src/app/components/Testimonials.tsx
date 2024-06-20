import React from "react";

const Testimonials = () => {
  return (
    <section
      className="testimonial-area pt-120 pb-170"
      style={{
        backgroundImage: "url(img/testimonial/test-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-align mb-30">
              <h2>What Our Client Says About Us</h2>
              <div className="line5">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_left" />
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src="img/testimonial/test-img.png" alt="circle_left" />
          </div>

          <div className="col-lg-6">
            <div className="testimonial-active">
              <div className="single-testimonial">
                <div className="testi-author">
                  <img src="img/testimonial/testi_avatar.png" alt="img" />
                  <div className="ta-info">
                    <h6>Eity Akhter</h6>
                    <span>Student</span>
                  </div>
                </div>
                <div className="qt-img">
                  <img src="img/testimonial/qt-icon.png" alt="img" />
                </div>
                <p>
                  Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie
                  interdum, quam massa finibus turpis, ut eleifend tellus massa
                  eget nunc. Maecenas luctus diam id augue fringilla ornare. Sed
                  varius massa non sem rutrum malesuada.
                </p>
              </div>
              <div className="single-testimonial">
                <div className="testi-author">
                  <img src="img/testimonial/testi_avatar.png" alt="img" />
                  <div className="ta-info">
                    <h6>Margie R. Robinson</h6>
                    <span>Web Developer</span>
                  </div>
                </div>
                <div className="qt-img">
                  <img src="img/testimonial/qt-icon.png" alt="img" />
                </div>
                <p>
                  Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie
                  interdum, quam massa finibus turpis, ut eleifend tellus massa
                  eget nunc. Maecenas luctus diam id augue fringilla ornare. Sed
                  varius massa non sem rutrum malesuada.
                </p>
              </div>
              <div className="single-testimonial">
                <div className="testi-author">
                  <img src="img/testimonial/testi_avatar.png" alt="img" />
                  <div className="ta-info">
                    <h6>Margie R. Robinson</h6>
                    <span>Web Developer</span>
                  </div>
                </div>
                <div className="qt-img">
                  <img src="img/testimonial/qt-icon.png" alt="img" />
                </div>
                <p>
                  Etiam quis lacinia ipsum. Aliquam blandit, mauris nec molestie
                  interdum, quam massa finibus turpis, ut eleifend tellus massa
                  eget nunc. Maecenas luctus diam id augue fringilla ornare. Sed
                  varius massa non sem rutrum malesuada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
