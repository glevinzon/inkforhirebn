import React from "react";

const AwardArea = () => {
  return (
    <section className="award-area pt-120 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50">
              <h2>Our Awards Winning</h2>
              <div className="line2">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center aw-line">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="award-box mb-30 text-center">
              <div className="date mb-30 ">2015-2016</div>
              <div className="icon mb-30 ">
                <img src="img/icon/aw-icon1.png" alt="circle_right" />
              </div>
              <div className="content">
                <h3>Architecture</h3>
                <p>
                  Aenean quis egestas augue. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="award-box mb-30 text-center">
              <div className="date mb-30 ">2016-2017</div>
              <div className="icon mb-30 ">
                <img src="img/icon/aw-icon2.png" alt="circle_right" />
              </div>
              <div className="content">
                <h3>Design</h3>
                <p>
                  Aenean quis egestas augue. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="award-box mb-30 text-center">
              <div className="date mb-30 ">2017-2018</div>
              <div className="icon mb-30 ">
                <img src="img/icon/aw-icon3.png" alt="circle_right" />
              </div>
              <div className="content">
                <h3>Menagement</h3>
                <p>
                  Aenean quis egestas augue. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="award-box mb-30 text-center">
              <div className="date mb-30 ">2018-2019</div>
              <div className="icon mb-30 ">
                <img src="img/icon/aw-icon4.png" alt="circle_right" />
              </div>
              <div className="content">
                <h3>Strategy</h3>
                <p>
                  Aenean quis egestas augue. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardArea;
