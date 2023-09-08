import React, { useState, useEffect } from 'react'


function Partner() {

  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth(prevWidth => prevWidth + 219);
      console.log('Running every 2 seconds');
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);



  return (
    <div className="panther-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="client-odometer">
            <h2>
              <span className="odometer odometer-auto-theme" data-count="35,046">
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
                          <span className="odometer-value">5</span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="odometer-formatting-mark">,</span>
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
                  <span className="odometer-digit">
                    <span className="odometer-digit-spacer">8</span>
                    <span className="odometer-digit-inner">
                      <span className="odometer-ribbon">
                        <span className="odometer-ribbon-inner">
                          <span className="odometer-value">4</span>
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
              <span className="target">+</span>
            </h2>
            <p>Trusted By Over Happy Customers Including</p>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="panther-slider owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: `translate3d(-${width}px, 0px, 0px)`,
                  transition: "all 1s ease 0s",
                  width: 3504
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-1.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-2.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-3.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-4.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div className="owl-item" style={{ width: 199, marginRight: 20 }}>
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-1.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div className="owl-item" style={{ width: 199, marginRight: 20 }}>
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-2.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div className="owl-item" style={{ width: 199, marginRight: 20 }}>
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-3.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-4.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-1.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-2.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-3.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div className="owl-item" style={{ width: 199, marginRight: 20 }}>
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-4.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-1.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-2.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-3.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: 199, marginRight: 20 }}
                >
                  <div className="panther-logo">
                    <img
                      src="assets/images/pantner/pantner-logo-4.webp"
                      alt="panther-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <i className="bx bx-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="bx bx-chevron-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Partner
