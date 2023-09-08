import React, { useState } from 'react'

function Buy() {

  const [binanc, setBinanc] = useState(500);

  const [rangeWith, setRangeWith] = useState();

  const Binance = (e) =>{
      setBinanc( e.target.value)
      setRangeWith(e.target.value / 12000 * 100)
  }

  return (
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
                      <p className='m-2'>$</p>
                      <span className="range-slider__value">{binanc}</span>
                    </div>
                  </div>
                  <input
                    className="range-slider__range"
                    type="range"
                    defaultValue={binanc}
                    min={0}
                    max={12000}
                    onChange={Binance}
                    style={{
                      background:
                        `linear-gradient(90deg, rgb(247, 96, 49) ${rangeWith}%, transparent .5%)`
                    }}
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
              <img src="assets/images/free-quote-shape-1.webp" alt="shape3" />
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
  
  )
}

export default Buy
