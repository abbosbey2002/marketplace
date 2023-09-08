import React from 'react'

function Subscriibers() {
  return (
    <div className="subscribe-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="section-title left-title">
            <span className="top-title">Sign Up For Email</span>
            <h2>Signup Our Newsletter</h2>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="subscribe-from">
            <form
              className="newsletter-form"
              data-toggle="validator"
              noValidate={true}
            >
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="EMAIL"
                required=""
                autoComplete="off"
              />
              <button
                className="default-btn disabled"
                type="submit"
                style={{ pointerEvents: "all", cursor: "pointer" }}
              >
                Subscribe
              </button>
              <div id="validator-newsletter" className="form-result" />
            </form>
            <div className="subscribe-shape">
              <img
                src="assets/images/subscribe-bg-shape-1.webp"
                alt="subscribe1"
              />
            </div>
            <div className="subscribe-shape13">
              <img
                src="assets/images/subscribe-bg-shape-2.webp"
                alt="subscribe1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Subscriibers
