import React, { useState, useEffect } from 'react'
import "./animPart.css"


function Partner() {

  const [width, setWidth] = useState(0)
  
  useEffect(() => {
  
    const interval = setInterval(() => {
      if(width < 4000){
        setWidth(prevWidth => prevWidth + 219);
        // console.log('Running every 2 seconds');
      }else{
        setWidth(0);
        console.log('Running every 2 seconds');
      }
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);



  return (
    <div className="panther-three-area pt-100 pb-100">
  <div className="container">
    <div className="panther-item-three">
      <div className="panther-content d-flex align-items-center justify-content-center">
        Trusted By Over
        <h2>
          <span className="odometer odometer-auto-theme" data-count="35,857">
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
                      <span className="odometer-value">5</span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="odometer-digit">
                <span className="odometer-digit-spacer">8</span>
                <span className="odometer-digit-inner">
                  <span className="odometer-ribbon">
                    <span className="odometer-ribbon-inner">
                      <span className="odometer-value">7</span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </span>
          <span className="target">+</span>
        </h2>
        Happy Customers Including
      </div>
      <div className="panther-slider-two owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage partCarusel"
            style={{
              transform: `translate3d(-${width}px, 0px, 0px)`,
              transition: "all 1s ease 0s",
              width: 4544
            }}
          >
            <div
              className="owl-item cloned"
              style={{ width: "207.2px", marginRight: 20 }}
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
              style={{ width: "207.2px", marginRight: 20 }}
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
              style={{ width: "207.2px", marginRight: 20 }}
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
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-4.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-5.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-1.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-2.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-3.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-4.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-5.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-1.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-2.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-3.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item"
              style={{ width: "207.2px", marginRight: 20 }}
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
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-5.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item cloned active"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-1.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item cloned active"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-2.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item cloned active"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-3.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item cloned active"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-4.webp"
                  alt="panther-logo"
                />
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: "207.2px", marginRight: 20 }}
            >
              <div className="panther-logo">
                <img
                  src="assets/images/pantner/pantner-logo-5.webp"
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

  )
}

export default Partner
