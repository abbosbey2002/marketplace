import React from 'react'

function About() {
  return (
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
            <h2>Insurance Always Ready To Protect Your Life &amp; Business</h2>
            <p>
              Dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment so blinded by desire, that they cannot
              foresee the pain and trouble that are bound.
            </p>
          </div>
          <ul>
            <li className="list-inline">
              <img src="assets/images/about/about-icon.svg" alt="about-icon" />
              Refresing to get such a personal touch.
            </li>
            <li className="list-inline">
              <img src="assets/images/about/about-icon.svg" alt="about-icon" />
              Duis aute irure dolor in reprehenderit in voluptate.
            </li>
            <li className="list-inline">
              <img src="assets/images/about/about-icon.svg" alt="about-icon" />
              Velit esse cillum dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <div className="about-btn d-flex align-items-center">
            <a href="about.html" className="default-btn">
              Read More
            </a>
            <div className="call-experts">
              <div className="phone-call">
                <img src="assets/images/phone-call.svg" alt="phone-call" />
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

  )
}

export default About
