function About() {
  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="single-page-banner-content">
            <h1>About Us</h1>
            <ul>
              <li>
                <a href="./home">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single-about-image">
                <img src="assets/images/about/about-1.webp" alt="about-1" />
                <div className="about-shape">
                  <img
                    src="assets/images/about/about-shape-1.webp"
                    alt="about-shape"
                  />
                </div>
                <div className="about-shape-1">
                  <img
                    src="assets/images/about/about-shape-2.webp"
                    alt="about-shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-about-content">
                <div className="section-title left-title">
                  <span className="top-title">About Our Company</span>
                  <h2>
                    Insurance Always Ready To Protect Your Life & Business
                  </h2>
                  <p>
                    Dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound.
                  </p>
                </div>
                <ul>
                  <li className="list-inline">
                    <img
                      src="assets/images/about/about-icon.svg"
                      alt="about-icon"
                    />{" "}
                    Refresing to get such a personal touch.
                  </li>
                  <li className="list-inline">
                    <img
                      src="assets/images/about/about-icon.svg"
                      alt="about-icon"
                    />
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </li>
                  <li className="list-inline">
                    <img
                      src="assets/images/about/about-icon.svg"
                      alt="about-icon"
                    />
                    Velit esse cillum dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <div className="about-btn about-page-btn d-flex align-items-center">
                  <div className="call-experts">
                    <div className="phone-call">
                      <img
                        src="assets/images/phone-call.svg"
                        alt="phone-call"
                      />
                    </div>
                    <span>Call To Our Experts</span>
                    <a href="tel:(+0188)76898708">(+0188) 768 98708</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape3">
          <img src="assets/images/about/about-shape-3.webp" alt="image" />
        </div>
      </div>

      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="services-top-item d-flex align-items-end justify-content-between">
            <div className="section-title left-title">
              <span className="top-title">Our Services</span>
              <h2>Inon Best Insurance Services</h2>
            </div>
            <a href="services.html" className="default-btn">
              All Services
            </a>
          </div>
          <div className="row" data-cues="slideInUp">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-services-card d-flex align-items-center">
                <div className="services-icon">
                  <img src="assets/images/services/couple.svg" alt="couple" />
                </div>
                <h3>
                  <a href="services-details.html">Life Insurance</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-services-card d-flex align-items-center">
                <div className="services-icon">
                  <img src="assets/images/services/home.svg" alt="home" />
                </div>
                <h3>
                  <a href="services-details.html">Home Insurance</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-services-card d-flex align-items-center">
                <div className="services-icon bg-icon-color">
                  <img
                    src="assets/images/services/lightbulb.svg"
                    alt="lightbulb"
                  />
                </div>
                <h3>
                  <a href="services-details.html">Business Insurance</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-services-card d-flex align-items-center">
                <div className="services-icon bg-icon-color1">
                  <img src="assets/images/services/heart.svg" alt="heart" />
                </div>
                <h3>
                  <a href="services-details.html">Health Insurance</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-services-card d-flex align-items-center">
                <div className="services-icon bg-icon-color2">
                  <img src="assets/images/services/car.svg" alt="car" />
                </div>
                <h3>
                  <a href="services-details.html">Car Insurance</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-services-card d-flex align-items-center">
                <div className="services-icon bg-icon-color2">
                  <img
                    src="assets/images/services/services-icon-1.svg"
                    alt="lightbulb"
                  />
                </div>
                <h3>
                  <a href="services-details.html">Travel Insurance</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="free-quote-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-free-quote-form">
                <div className="section-title left-title">
                  <span className="top-title">Free Quote</span>
                  <h2>Get An Insurance Quote To Get Started</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Select Type Of Insurance"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="range-slider">
                      <div className="d-flex justify-content-between">
                        <p>Limits Of Balance:</p>
                        <div className="dolor">
                          <p>$</p>
                          <span className="range-slider__value">12000</span>
                        </div>
                      </div>
                      <input
                        className="range-slider__range"
                        type="range"
                        value="6000"
                        min="0"
                        max="12000"
                      />
                    </div>
                  </div>
                  <button type="submit" className="default-btn">
                    Get A Quote Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="free-quote-image">
                <div className="free-quote-main">
                  <img src="assets/images/free-quote-1.webp" alt="free-quote" />
                </div>
                <div className="free-quote-shape">
                  <img
                    src="assets/images/free-quote-shape-1.webp"
                    alt="shape3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="free-quote-shape1">
          <img src="assets/images/free-quote-shape-2.webp" alt="shape3" />
        </div>
        <div className="free-quote-shape2">
          <img src="assets/images/free-quote-shape-3.webp" alt="shape3" />
        </div>
      </div>

      <div className="odometer-two-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
              <div className="odometer-two-content">
                <h2>
                  <span className="odometer" data-count="89">
                    00
                  </span>
                  <span className="target">+</span>
                </h2>
                <p>Gave insurances</p>
                <div className="odometer-shape">
                  <img
                    src="assets/images/odometer/odometer-shape-1.webp"
                    alt="odometer"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
              <div className="odometer-two-content">
                <h2>
                  <span className="odometer" data-count="1120">
                    00
                  </span>
                  <span className="target">+</span>
                </h2>
                <p>Experience Members</p>
                <div className="odometer-shape">
                  <img
                    src="assets/images/odometer/odometer-shape-2.webp"
                    alt="odometer"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
              <div className="odometer-two-content">
                <h2>
                  <span className="odometer" data-count="1.9">
                    00
                  </span>
                  <span className="target">k+</span>
                </h2>
                <p>Satisfied customers</p>
                <div className="odometer-shape">
                  <img
                    src="assets/images/odometer/odometer-shape-3.webp"
                    alt="odometer"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 col-md-3">
              <div className="odometer-two-content">
                <h2>
                  <span className="odometer" data-count="50">
                    00
                  </span>
                  <span className="target">+</span>
                </h2>
                <p>Awards Win</p>
                <div className="odometer-shape">
                  <img
                    src="assets/images/odometer/odometer-shape-4.webp"
                    alt="odometer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="odometer-shape-1">
          <img
            src="assets/images/odometer/odometer-shape-5.webp"
            alt="odometer"
          />
        </div>
        <div className="odometer-shape-2">
          <img
            src="assets/images/odometer/odometer-shape-6.webp"
            alt="odometer"
          />
        </div>
      </div>

      <div className="recruitment-area page-recruitment pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="recruitment-img">
                <img
                  src="assets/images/recruitment-2.webp"
                  alt="recruitment1"
                />
                <div className="recruitment-main1">
                  <img
                    src="assets/images/recruitment-1.webp"
                    alt="recruitment1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-recruitment-content">
                <div className="section-title left-title">
                  <span className="top-title">Recruitment</span>
                  <h2>Personnel Employment In Insurance Company</h2>
                  <p>
                    Dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound.
                  </p>
                </div>
                <ul>
                  <li className="list-inline">
                    <img
                      src="assets/images/about/about-icon-2.svg"
                      alt="about-icon"
                    />
                    Have Monthly Bonuses For Good Staff
                  </li>
                  <li className="list-inline">
                    <img
                      src="assets/images/about/about-icon-2.svg"
                      alt="about-icon"
                    />
                    Participate In The Personal development Courses
                  </li>
                  <li className="list-inline">
                    <img
                      src="assets/images/about/about-icon-2.svg"
                      alt="about-icon"
                    />
                    Have Complimentary Lunch Paid Holidays
                  </li>
                </ul>
                <a href="contact.html" className="default-btn btn-style-2">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="recruitment-shape">
          <img src="assets/images/recruitment-3.webp" alt="recruitment2" />
        </div>
      </div>
    </>
  );
}
export default About;
