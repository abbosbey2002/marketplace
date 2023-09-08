function Footer() {
  return (
    <>
      <div className="footer-area pt-100">
        <div className="container">
          <div className="row pb-100">
            <div style={{opacity: "1"}} className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget">
                <a href="index.html">
                  <img
                    src="assets/images/black-logo.webp"
                    className="black-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/white-logo.webp"
                    className="white-logo"
                    alt="logo"
                  />
                </a>
                <p>
                  Facilis est et expedita distinct libero teor cum soluta nobis
                  est eligendi optio cumque nihil impedit quo minus id quod
                  maxime expedita placeat facere possimus.
                </p>
                <ul className="follow-list">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/" target="_blank">
                      <i className="bx bxl-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{opacity: "1"}} className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget footer-widget-link2">
                <h2>About Us</h2>
                <ul className="footer-widget-list">
                  <li>
                    <a href="index.html">
                      <i className="bx bx-chevron-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <i className="bx bx-chevron-right"></i>About Us
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <i className="bx bx-chevron-right"></i>How It Works
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i className="bx bx-chevron-right"></i>Blog
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="bx bx-chevron-right"></i>Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{opacity: "1"}} className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget footer-widget-link">
                <h2>Our Services</h2>
                <ul className="footer-widget-list">
                  <li>
                    <a href="services-details.html">
                      <i className="bx bx-chevron-right"></i>Bike Insurance
                    </a>
                  </li>
                  <li>
                    <a href="services-details.html">
                      <i className="bx bx-chevron-right"></i>Finances Management
                    </a>
                  </li>
                  <li>
                    <a href="services-details.html">
                      <i className="bx bx-chevron-right"></i>Home Insurance
                    </a>
                  </li>
                  <li>
                    <a href="services-details.html">
                      <i className="bx bx-chevron-right"></i>Health Insurance
                    </a>
                  </li>
                  <li>
                    <a href="services-details.html">
                      <i className="bx bx-chevron-right"></i>General Insurance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{opacity: "1"}} className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget">
                <h2>Get In Touch</h2>
                <div className="touch-content">
                  <div className="contact-icon">
                    <img src="assets/images/contact-phone.svg" alt="svg" />
                  </div>
                  <a href="tel:(800)2162020">(800) 216 2020</a>
                </div>
                <div className="touch-content">
                  <div className="contact-icon">
                    <img src="assets/images/contact-mail.svg" alt="svg" />
                  </div>
                  <a href="/cdn-cgi/l/email-protection#f39b969f9f9cb39a9d9c9ddd909c9e">
                    <span
                      className="__cf_email__"
                      data-cfemail="224a474e4e4d624b4c4d4c0c414d4f"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </div>
                <div className="touch-content">
                  <div className="contact-icon">
                    <img src="assets/images/contact-map.svg" alt="svg" />
                  </div>
                  <p>No. 12, Ribon Building, Walse street, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape-1">
          <img src="assets/images/footer-shape-1.webp" alt="footer" />
        </div>
        <div className="footer-shape-2">
          <img src="assets/images/footer-shape-2.webp" alt="footer" />
        </div>
        <div className="copyright-content">
          <div className="d-flex align-items-center justify-content-center">
            <p>
              © <b>Inon</b> is Proudly Owned by{" "}
              <a href="https://hibootstrap.com/" target="_blank">
                {" "}
                HiBootstrap
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="go-top">
        <i className="bx bxs-chevrons-up"></i>
        <i className="bx bxs-chevrons-up"></i>
      </div>
    </>
  );
}

export default Footer;
