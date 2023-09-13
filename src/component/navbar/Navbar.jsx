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
          <NavLink
            to="#nav"
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
          </NavLink>
          <nav className="mean-nav">
            <ul className="navbar-nav ms-auto" style={{ display: menuState }}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/accident" className="nav-link">
                  Accident
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/osago" className="nav-link">
                  Osago
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="others-options d-flex align-items-center">
              <div className="option-item">
                <button className="searchbtn" type="button">
                  <i className="bx bx-search" />
                </button>
              </div>
              <div className="option-item">
                <NavLink to="/contact" className="default-btn">
                  Get A Quote
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="logo">
          <NavLink to="index.html">
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
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  <div className="main-navbar">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-light">
        <NavLink className="navbar-brand" to="index.html">
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
        </NavLink>
        <div className="mean-push" />
        <div
          className="collapse navbar-collapse mean-menu"
          id="navbarSupportedContent"
          style={{ display: "none" }}
        >
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/accident" className="nav-link">
                  Accident
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/osago" className="nav-link">
                  Osago
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
          </ul>
          <div className="others-options d-flex align-items-center">
            <div className="option-item">
              <button className="searchbtn" type="button">
                <i className="bx bx-search" />
              </button>
            </div>
            <div className="option-item mx-2">
              <NavLink to="/register" className="default-btn">
                Register
              </NavLink>
            </div>
            <div className="option-item">
              <NavLink to="/register" className="">
                Language
              </NavLink>
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
      <NavLink

        to="#nav"
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
      </NavLink>
      <div className="container">
        <div className="option-inner">
          <div className="others-options d-flex align-items-center">
            <div className="option-item">
              <button className="searchbtn" type="button">
                <i className="bx bx-search" />
              </button>
            </div>
            <div className="option-item">
              <NavLink to="/contact" className="default-btn">
                Get A Quote
              </NavLink>
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
