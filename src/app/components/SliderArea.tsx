"use client";

const SliderArea = () => {
  return (
    <section id="home" className="slider-area slider-four fix p-relative">
      <div className="slider-active">
        <div
          className="single-slider slider-bg d-flex align-items-center"
          style={{
            background: "url(img/slider/slider_img_bg.png) no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="container">
            <div className="row justify-content-center pt-50">
              <div className="col-lg-7 col-md-7">
                <div className="slider-content s-slider-content mt-200">
                  <h5 data-animation="fadeInDown" data-delay=".4s">
                    50% Get Bonus
                  </h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s">
                    Creative Architecture Around The Word
                  </h2>
                  <p data-animation="fadeInUp" data-delay=".6s">
                    Vivamus mattis ipsum vitae imperdiet eleifend. Nunc
                    scelerisque feugiat turpis, et tempor tellus porta vitae.
                    Aenean hendrerit, libero sed viverra auctor, est tortor
                    pulvinar sem, non luctus ante quam quis urna.
                  </p>

                  <div className="slider-btn mt-30">
                    <a href="services.html" className="btn ss-btn mr-15">
                      Read More
                    </a>
                    <a href="contact.html" className="btn ss-btn active mr-15">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div
                  className="slider-img"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <img src="img/slider/slider_img05.png" alt="slider_img05" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single-slider slider-bg d-flex align-items-center"
          style={{
            background: "url(img/slider/slider_img_bg.png) no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="container">
            <div className="row justify-content-center pt-50">
              <div className="col-lg-7 col-md-7">
                <div className="slider-content s-slider-content mt-200">
                  <h5 data-animation="fadeInDown" data-delay=".4s">
                    70% Get Bonus
                  </h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s">
                    Creative Architecture Around The Word
                  </h2>
                  <p data-animation="fadeInUp" data-delay=".6s">
                    Vivamus mattis ipsum vitae imperdiet eleifend. Nunc
                    scelerisque feugiat turpis, et tempor tellus porta vitae.
                    Aenean hendrerit, libero sed viverra auctor, est tortor
                    pulvinar sem, non luctus ante quam quis urna.
                  </p>

                  <div className="slider-btn mt-30">
                    <a href="services.html" className="btn ss-btn mr-15">
                      Read More
                    </a>
                    <a href="contact.html" className="btn ss-btn active mr-15">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div
                  className="slider-img"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <img src="img/slider/slider_img06.png" alt="slider_img06" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderArea;
