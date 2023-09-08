import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <NavLink to="index.html">
                  <img src="assets/images/black-logo.webp" className="black-logo" alt="image" />
                  <img src="assets/images/white-logo.webp" className="white-logo" alt="image" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <NavLink className="navbar-brand" to="index.html">
                <img width="70%" src="https://www.dora.uz/assets/images/fav.png" className="black-logo" alt="image" />
                <img src="assets/images/white-logo.webp" className="white-logo" alt="image" />
              </NavLink>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink to="#" className="nav-link active">
                      Accident
                      <i className="bx bx-down-arrow-alt" />
                    </NavLink>
                   </li>
                  <li className="nav-item">
                    <NavLink to="#" className="nav-link active">
                      Home
                      <i className="bx bx-down-arrow-alt" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="index.html" className="nav-link active">
                          Home Demo - 1
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="index-2.html" className="nav-link">
                          Home Demo - 2
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="index-3.html" className="nav-link">
                          Home Demo - 3
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="#" className="nav-link">
                      Pages
                      <i className="bx bx-down-arrow-alt" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="about.html" className="nav-link">
                          About Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="pricing.html" className="nav-link">
                          Pricing
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                          Services
                          <i className="bx bx-down-arrow-alt" />
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <NavLink to="services.html" className="nav-link">
                              Services
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="services-details.html" className="nav-link">
                              Services Details
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="faq.html" className="nav-link">
                          FAQ
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="team.html" className="nav-link">
                          Team
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="testimonials.html" className="nav-link">
                          Testimonials
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                          User Pages
                          <i className="bx bx-down-arrow-alt" />
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <NavLink to="my-account.html" className="nav-link">
                              My Account
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="login.html" className="nav-link">
                              Login
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="register.html" className="nav-link">
                              Register
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="forgot-password.html" className="nav-link">
                              Forgot Password
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="terms-of-service.html" className="nav-link">
                          Terms of Service
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="error.html" className="nav-link">
                          Error
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="coming-soon.html" className="nav-link">
                          Coming Soon
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink to="#" className="nav-link">
                      Portfolio
                      <i className="bx bx-down-arrow-alt" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="portfolio.html" className="nav-link">
                          Portfolio
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="portfolio-details.html" className="nav-link">
                          Portfolio Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="#" className="nav-link">
                      Blog
                      <i className="bx bx-down-arrow-alt" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="blog.html" className="nav-link">
                          Blog
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="author.html" className="nav-link">
                          Author
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="categories.html" className="nav-link">
                          Categories
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="tags.html" className="nav-link">
                          Tags
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="search-page.html" className="nav-link">
                          Search Page
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="blog-details.html" className="nav-link">
                          Blog Details
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <NavLink to="contact.html" className="nav-link">
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
                    <NavLink to="contact.html" className="default-btn">
                      Get NAVLINK Quote
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
            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <button className="searchbtn" type="button">
                      <i className="bx bx-search" />
                    </button>
                  </div>
                  <div className="option-item">
                    <NavLink to="contact.html" className="default-btn">
                      Get NAVLINK Quote
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
