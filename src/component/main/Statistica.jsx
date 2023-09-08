import React from 'react'

function Statistica() {
  return (
    <div className="odometer-area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-8 col-md-8">
        <div className="row">
          <div className="col-lg-4 col-4 col-sm-4 col-md-4">
            <div className="single-odometer-item">
              <h2 className='odom'>
                <span className="odometer odometer-auto-theme" data-count="1.8">
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">9</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">1</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="odometer-formatting-mark odometer-radix-mark">
                      .
                    </span>
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">8</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                <span className="target">K+</span>
              </h2>
              <p>Gave Insurances</p>
            </div>
          </div>
          <div className="col-lg-4 col-4 col-sm-4 col-md-4">
            <div className="single-odometer-item">
              <h2 className='odom'>
                <span className="odometer odometer-auto-theme" data-count={89}>
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">8</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">9</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                <span className="target">+</span>
              </h2>
              <p>Gave Insurances</p>
            </div>
          </div>
          <div className="col-lg-4 col-4 col-sm-4 col-md-4">
            <div className="single-odometer-item">
              <h2>
                <span className="odometer odometer-auto-theme" data-count="1.9">
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">1</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="odometer-formatting-mark odometer-radix-mark">
                      .
                    </span>
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">9</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                <span className="target">K+</span>
              </h2>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-odometer-item-2">
          <h2>
            <span className="odometer odometer-auto-theme" data-count={30}>
              <div className="odometer-inside">
                <span className="odometer-digit">
                  <span className="odometer-digit-spacer">8</span>
                  <span className="odometer-digit-inner">
                    <span className="odometer-ribbon">
                      <span className="odometer-ribbon-inner">
                        <span className="odometer-value">3</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span className="odometer-digit">
                  <span className="odometer-digit-spacer">8</span>
                  <span className="odometer-digit-inner">
                    <span className="odometer-ribbon">
                      <span className="odometer-ribbon-inner">
                        <span className="odometer-value">0</span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </span>
          </h2>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  </div>
  <div className="odometer-shape1">
    <img src="assets/images/odometer-bg-img.webp" alt="odometer1" />
  </div>
</div>

  )
}

export default Statistica
