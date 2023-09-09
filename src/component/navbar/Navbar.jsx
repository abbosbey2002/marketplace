import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    const [menuState, setMenuState] = useState("none");

    const openMenu = () => {
      if(menuState === "none"){
        setMenuState('block');
      }else if(menuState === "block"){
        setMenuState("none")
      }
    }


    return (
        <>
              <div className="navbar-area">
  <div className="main-responsive-nav">
    <div className="container">
      <div className="main-responsive-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className="meanmenu-reveal"
            onClick={openMenu}
            style={{
              right: 0,
              left: "auto",
              textAlign: "center",
              textIndent: 0,
              fontSize: 18
            }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </a>
          <nav className="mean-nav">
            <ul className="navbar-nav ms-auto" style={{ display: menuState }}>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/accident" className="nav-link">
                  Accident
                </a>
              </li>
              <li className="nav-item">
                <a href="/osago" className="nav-link">
                  Osago
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="others-options d-flex align-items-center">
              <div className="option-item">
                <button className="searchbtn" type="button">
                  <i className="bx bx-search" />
                </button>
              </div>
              <div className="option-item">
                <a href="contact.html" className="default-btn">
                  Get A Quote
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="logo">
          <a href="index.html">
            <img
              src="assets/images/black-logo.webp"
              className="black-logo"
              alt="image"
            />
            <img
              src="assets/images/white-logo.webp"
              className="white-logo"
              alt="image"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="main-navbar">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="index.html">
          <img
            src="assets/images/black-logo.webp"
            className="black-logo"
            alt="image"
          />
          <img
            src="assets/images/white-logo.webp"
            className="white-logo"
            alt="image"
          />
        </a>
        <div className="mean-push" />
        <div
          className="collapse navbar-collapse mean-menu"
          id="navbarSupportedContent"
          style={{ display: "none" }}
        >
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/accident" className="nav-link">
                  Accident
                </a>
              </li>
              <li className="nav-item">
                <a href="/osago" className="nav-link">
                  Osago
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact Us
                </a>
              </li>
          </ul>
          <div className="others-options d-flex align-items-center">
            <div className="option-item">
              <button className="searchbtn" type="button">
                <i className="bx bx-search" />
              </button>
            </div>
            <div className="option-item">
              <a href="contact.html" className="default-btn">
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="others-option-for-responsive">
    <div className="container">
      <div className="dot-menu">
        <div className="inner">
          <div className="circle circle-one" />
          <div className="circle circle-two" />
          <div className="circle circle-three" />
        </div>
      </div>
      <a

        href="#nav"
        className="meanmenu-reveal"
 onClick={openMenu}
        style={{
          right: 0,
          left: "auto",
          textAlign: "center",
          textIndent: 0,
          fontSize: 18,

        }}
      >
        <span>
          <span>
            <span />
          </span>
        </span>
      </a>
      <div className="container">
        <div className="option-inner">
          <div className="others-options d-flex align-items-center">
            <div className="option-item">
              <button className="searchbtn" type="button">
                <i className="bx bx-search" />
              </button>
            </div>
            <div className="option-item">
              <a href="contact.html" className="default-btn">
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Navbar
