import React, { useState } from 'react'
// import { esbuildVersion } from 'vite';

function Experts() {

  const [contWith, setContWith] = useState(1754);

const left = () => {
  console.log(contWith > 3959)
  if (contWith > 3959) {
    setContWith(0);
  } else {
    setContWith(contWith + 439);
  }
};

const right = () => {
  if (contWith < 35040) {
    setContWith(contWith - 439);
  } else {
    setContWith(contWith + 439);
  }
};

  return (
    <div className="experts-area pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <span className="top-title">Our Experts</span>
        <h2>Meet Our Experienced Team</h2>
      </div>
      <div className="experts-slider owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: `translate3d(-${contWith}px, 0px, 0px)`,
              transition: "all 2s ease 0s",
              width: 5265
            }}
          >
            <div
              className="owl-item cloned"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-1.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Graham Cracker</h3>
                  <p>SEO - Founder</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-2.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Donatella Nobatti</h3>
                  <p>Senior Marketer</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-3.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Ash Wednesday</h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-1.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Graham Cracker</h3>
                  <p>SEO - Founder</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-2.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Donatella Nobatti</h3>
                  <p>Senior Marketer</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-3.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Ash Wednesday</h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item active"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-1.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Graham Cracker</h3>
                  <p>SEO - Founder</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item active"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-2.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Donatella Nobatti</h3>
                  <p>Senior Marketer</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item active"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-3.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Ash Wednesday</h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-1.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Graham Cracker</h3>
                  <p>SEO - Founder</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-2.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Donatella Nobatti</h3>
                  <p>Senior Marketer</p>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "418.667px", marginRight: 20 }}
            >
              <div className="single-experts-card">
                <div className="experts-img">
                  <img
                    src="assets/images/our-experts/experts-3.webp"
                    alt="experts"
                  />
                  <div className="experts-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/" target="_blank">
                          <i className="bx bxl-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="experts-content">
                  <h3>Ash Wednesday</h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button type="button" role="presentation" onClick={right} className="owl-prev">
            <i className="bx bx-chevron-left" />
          </button>
          <button type="button" role="presentation" onClick={left} className="owl-next">
            <i className="bx bx-chevron-right" />
          </button>
        </div>
        <div className="owl-dots disabled" />
      </div>
    </div>
  </div>
  
  )
}

export default Experts
