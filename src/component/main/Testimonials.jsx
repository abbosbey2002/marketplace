import React, { useState } from 'react'

function Testimonials() {

  const [countWith, setCountWith] = useState(1938);

  const Next = ()=>{
    if(countWith > 0){
      setCountWith(countWith-646)
    }else{
      setCountWith(1938)
    }
  }

  const Last = ()=>{
    if(countWith < 1938){
      setCountWith(countWith+646)
    }else{
      setCountWith(0)
    }
  }

  return (
    <div className="testimonials-area pt-100 pb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="single-testimonials-img">
            <div className="testimonials-main">
              <img
                src="assets/images/testimonials/testimonials-img-1.webp"
                alt="testimonials1"
              />
            </div>
            <div className="testimonials-bg-shape12">
              <img
                src="assets/images/testimonials/testimonials-img-bg-shape1.webp"
                alt="testimonials"
              />
            </div>
            <div className="testimonials-img2">
              <img
                src="assets/images/testimonials/testimonials-img-2.webp"
                alt="testimonials2"
              />
            </div>
            <div className="testimonials-img3">
              <img
                src="assets/images/testimonials/testimonials-img-3.webp"
                alt="testimonials2"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-testimonials-content">
            <div className="section-title left-title">
              <span className="top-title">Testimonials</span>
              <h2>What Our Customers Says</h2>
              <p>
                Facilis est et expedita distinctio. Nam libero tempore, cum soluta
                nobis est eldi optio cumque nihil impedit quo minus id quod maxime
                placeat facere.
              </p>
            </div>
            <div className="testimonials-slider owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: `translate3d(-${countWith}px, 0px, 0px)`,
                    transition: "all 1s ease 0s",
                    width: 4522
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-2.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Ash Wednesday</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-3.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Graham Cracker</h3>
                          <p>Founder</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-4.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Frank Senbeans</h3>
                          <p>Web Designer</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-2.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Ash Wednesday</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-3.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Graham Cracker</h3>
                          <p>Founder</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-4.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Frank Senbeans</h3>
                          <p>Web Designer</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 626, marginRight: 20 }}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="assets/images/testimonials/testimonials-img-2.webp"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Ash Wednesday</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="quote-icon">
                          <img
                            src="assets/images/testimonials/quote.svg"
                            alt="quote"
                          />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from toil
                          and pain is cases are perfectly simple and easy to
                          distinguish in a free hour whenour power of choice is
                          untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" onClick={Last} className="owl-prev">
                  <i className="bx bx-chevron-right" />
                </button>
                <button type="button" role="presentation" onClick={Next} className="owl-next">
                  <i className="bx bx-chevron-left" />
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Testimonials
