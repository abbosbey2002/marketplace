function Contact() {
  return (
    <>
      <div className="page-banner-area blog-page-are">
        <div className="container">
          <div className="single-page-banner-content">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-us-area pt-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Get In Touch</span>
            <h2>Fill In The Contact Now</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-contact-img">
                <div className="contact-main-img">
                  <img
                    src="assets/images/contact-us-img-5.webp"
                    alt="contact-us"
                  />
                </div>
                <div className="contact-us-img1" data-cue="zoomIn">
                  <img
                    src="assets/images/contact-us-img-1.webp"
                    alt="contact-us"
                  />
                </div>
                <div className="contact-us-img2" data-cue="rotateIn">
                  <img
                    src="assets/images/contact-us-img-2.webp"
                    alt="contact-us"
                  />
                </div>
                <div
                  className="contact-us-img3"
                  data-cue="zoomIn"
                  data-duration="2000"
                >
                  <img
                    src="assets/images/contact-us-img-3.webp"
                    alt="contact-us"
                  />
                </div>
                <div className="contact-us-img4" data-cue="slideInLeft">
                  <img
                    src="assets/images/contact-us-img-4.webp"
                    alt="contact-us"
                  />
                </div>
                <div className="contact-main-image1s">
                  <img
                    src="assets/images/contact-main-bg-img.webp"
                    alt="main"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          placeholder="Your Email"
                          required=""
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone_number"
                          placeholder="Phone"
                          required=""
                          data-error="Please enter your number"
                          className="form-control"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="Subject"
                          placeholder="Subject"
                          required=""
                          data-error="Please enter your subject"
                          className="form-control"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          type="text"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          placeholder="Message"
                          required=""
                          data-error="Write your message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            name="gridCheck"
                            value="I agree to the terms and privacy policy."
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            required=""
                          />
                          <label className="form-check-label" for="gridCheck">
                            Accept{" "}
                            <a href="terms-of-service.html">
                              Terms Of Services
                            </a>{" "}
                            And<a href="privacy-policy.html">privacy policy</a>
                          </label>
                          <div className="help-block with-errors gridCheck-error"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        Submit Now
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area pt-70">
        <div className="container">
          <div className="contact-card-item">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="contact-card">
                  <div className="contact-icon">
                    <img src="assets/images/contact-phone-2.svg" alt="Phone" />
                  </div>
                  <h2>Phone Number</h2>
                  <p>
                    <a href="tel:(305) 547-9909">+(305) 547-9909</a>
                  </p>
                  <a href="tel:(305) 547-9908">+(305) 547-9908</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="contact-card">
                  <div className="contact-icon">
                    <img src="assets/images/contact-email.svg" alt="Email" />
                  </div>
                  <h2>Sent Us Email</h2>
                  <p>
                    <a href="/cdn-cgi/l/email-protection#5c34393030331c35323332723f3331">
                      <span
                        className="__cf_email__"
                        data-cfemail="375f525b5b58775e5958591954585a"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </p>
                  <a href="/cdn-cgi/l/email-protection#cba2a5ada48ba2a5a4a5e5a8a4a6">
                    <span
                      className="__cf_email__"
                      data-cfemail="9bf2f5fdf4dbf2f5f4f5b5f8f4f6"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="contact-card">
                  <div className="contact-icon">
                    <img src="assets/images/location-icon.svg" alt="images" />
                  </div>
                  <h2>Our Location</h2>
                  <p>382 NE 191st NY Miami, FL 33179-3899</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area">
        <div className="container-fluid">
          <div className="place-map">
            <iframe
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830902776!2d-74.11976379633643!3d40.69766374862956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1667807354267!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
