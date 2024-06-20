import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-area pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="pricing-box pricing-box2 text-center mb-60">
                  <div className="pricing-head">
                    <h2>Basic Plan</h2>
                    <div className="price-count">
                      <h2>$49</h2>
                    </div>
                  </div>

                  <div className="pricing-body mt-20 mb-30 text-center">
                    <ul>
                      <li>Graphic Design</li>
                      <li>Web Design</li>
                      <li>UI/UX</li>
                      <li>SEO Marketing</li>
                      <li>Business Analysis</li>
                    </ul>
                  </div>

                  <div className="pricing-btn">
                    <a href="shop-details.html" className="btn ss-btn">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="pricing-box pricing-box2 active text-center mb-60">
                  <div className="pricing-head">
                    <h2>Standart Plan</h2>
                    <div className="price-count">
                      <h2>$99</h2>
                    </div>
                  </div>

                  <div className="pricing-body mt-20 mb-30 text-center">
                    <ul>
                      <li>Graphic Design</li>
                      <li>Web Design</li>
                      <li>UI/UX</li>
                      <li>SEO Marketing</li>
                      <li>Business Analysis</li>
                    </ul>
                  </div>

                  <div className="pricing-btn">
                    <a href="shop-details.html" className="btn ss-btn">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <div className="section-title center-align mb-30">
              <h2>Most Prominent Plans To Offer You</h2>
              <div className="line5">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_left" />
              </div>
            </div>
            <p>
              Quisque rhoncus tortor et est rhoncus fringilla. Aenean vulputate
              tellus non odio tempus, a mollis leo congue. Ut purus justo,
              pellentesque eget sagittis sed, varius sit amet ex.
            </p>
            <p>
              Aliquam iaculis hendrerit nunc at consequat. Suspendisse vitae
              enim eleifend, scelerisque lacus in, commodo erat. Nulla semper
              lacus sapien, viverra ultricies augue viverra nec. Cras finibus
              orci ligula, at porttitor sapien euismod egetliquam et velit quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
