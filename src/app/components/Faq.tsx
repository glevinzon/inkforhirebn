import React from "react";

const Faq = () => {
  return (
    <section id="faq" className="faq-area pt-90 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src="img/bg/faq-img.png" alt="img" />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="section-title center-align pb-25">
              <h2>Frequently Asked Questions</h2>
              <div className="line2">
                {" "}
                <img src="img/bg/circle_left.png" alt="circle_right" />
              </div>
            </div>
            <div className="faq-wrap">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="faq-btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        I want to order. How do I get started?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      You can contact us thru the folowing lines ni your most
                      convenient time... © +673 8972768 & +673 2423008 M
                      iseuljinbn@gmail.com
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="faq-btn"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        I want to see an actual samples. Where should I go?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      You can visit our showroom at: © Unit 9 (corner unit),
                      Ground Floor, Scout Headouarters Building, Kg Mata-Mata,
                      Jalan Gadong, BE 41 19, Brunei Darussalam PRINTING SHOP
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="faq-btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do you compare your pricing range with other
                        printing company?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      We are doing our best that our pricing stays around the
                      market price margin, making sure not to burden our valued
                      clients onto over priced products. Nonetheless, we are
                      very particular on giving our customer the satisfaction of
                      our service without compromising the Quality of the
                      products that we offer. However, as to hte saying,
                      &quot;Quality si Expensive&quot; we stil aims ot provide
                      the best Quality products at al times. Hence, our pricing
                      is best describe as incredibly reasonable.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="faq-btn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What is the mode of payment the company use?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Our company accepts CASH, POCKET APP online transfer, BIBD
                      online transfer and TAFIS 2.0 Payment for Government
                      Sectors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
