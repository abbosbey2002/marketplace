import React from 'react'

function Header() {
  return (
    <div className="banner-area">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="single-banner-content">
            <span>Whatever Life Takes You</span>
            <h1>Insurance Matters In Your Life</h1>
            <p>
              On the other hand we denounce with righteous indignation and dislike
              men who are so beguiled adem ralized by the charms of pleasure
              moment.
            </p>
            <div className="banner-btn d-flex align-items-center">
              <a href="contact.html" className="default-btn">
                Get Started
              </a>
              <div className="banner-video-watch">
                <div className="watch-img">
                  <img
                    src="assets/images/banner/video-watch-img.webp"
                    alt="video-watch-img"
                  />
                  <div className="video-play">
                    <a
                      href="https://www.youtube.com/watch?v=-z-wtyXjFIg"
                      className="popup-youtube"
                    >
                      <i className="bx bx-play" />
                    </a>
                  </div>
                </div>
                <p>Watch Our Story</p>
              </div>
            </div>
            <div className="banner-shape-6">
              <img src="assets/images/banner/banner-shape-6.webp" alt="banner" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-banner-image">
            <div className="banner-image3s">
              <div className="banner-main-img">
                <img src="assets/images/banner/banner-1.webp" alt="banner-1" />
              </div>
              <div className="banner-shape">
                <img
                  src="assets/images/banner/banner-shape-1.webp"
                  alt="banner-shape"
                />
              </div>
              <div className="banner-shape-1">
                <img
                  src="assets/images/banner/banner-shape-2.webp"
                  alt="banner-shape"
                />
              </div>
            </div>
            <div className="happy-customer-card">
              <h2>
                <span className="odometer odometer-auto-theme" data-count={26}>
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">2</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">6</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                <span className="target">K+</span>
              </h2>
              <p>Happy Customer</p>
              <ul>
                <li className="d-inline list-inline">
                  <img
                    src="assets/images/banner/happy-customer-1.webp"
                    alt="happy-customer-1"
                  />
                </li>
                <li className="d-inline list-inline">
                  <img
                    src="assets/images/banner/happy-customer-2.webp"
                    alt="happy-customer-2"
                  />
                </li>
                <li className="d-inline list-inline">
                  <img
                    src="assets/images/banner/happy-customer-3.webp"
                    alt="happy-customer-3"
                  />
                </li>
                <li className="d-inline list-inline">
                  <img
                    src="assets/images/banner/happy-customer-4.webp"
                    alt="happy-customer-4"
                  />
                </li>
                <li className="d-inline list-inline">
                  <img
                    src="assets/images/banner/happy-customer-5.webp"
                    alt="happy-customer-5"
                  />
                </li>
              </ul>
            </div>
            <div className="customer-services">
              <div className="hours">
                <img src="assets/images/banner/24-hours.svg" alt="24-hours" />
              </div>
              <span>24/7</span>
              <p>Customer Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-shape-3">
      <img src="assets/images/banner/banner-shape-3.webp" alt="banner" />
    </div>
    <div className="banner-shape-4">
      <img src="assets/images/banner/banner-shape-4.webp" alt="banner" />
    </div>
    <div className="banner-shape-5">
      <img src="assets/images/banner/banner-shape-5.webp" alt="banner" />
    </div>
    <div className="banner-shape-7">
      <img src="assets/images/banner/banner-shape-7.webp" alt="banner" />
    </div>
  </div>
  )
}

export default Header
