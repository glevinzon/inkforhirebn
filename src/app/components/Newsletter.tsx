import React from "react";

const Newsletter = () => {
  return (
    <section
      className="newslater-area pt-170 pb-80"
      style={{
        backgroundImage: "url(img/bg/newlater-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="section-title">
              <h2>Subscribe To Our Newsletter For Latest Update</h2>
              <div className="line2">
                {" "}
                <img src="img/bg/circle_left_w.png" alt="circle_right" />
              </div>
            </div>
            <form
              name="ajax-form"
              id="contact-form4"
              action="#"
              method="post"
              className="contact-form newslater p-relative mt-30"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  id="email2"
                  name="email"
                  type="email"
                  placeholder="Email Address..."
                  value=""
                  required
                />
                <button type="submit" className="btn btn-custom" id="send2">
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
