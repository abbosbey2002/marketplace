import React from 'react'
import { NavLink } from 'react-router-dom';


function footer() {
    return (
        <>
            <div className="footer-area pt-100">
                <div className="container">
                    <div className="row pb-100">
                        <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp" data-show="true"
                            style={
                                {
                                    animationName: "slideInUp",
                                    animationDuration: "600ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "0ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both"
                                }
                        }>
                            <div className="footer-widget">
                                <NavLink to="/">
                                    <img src="assets/images/black-logo.webp" className="black-logo" alt="logo"/>
                                    <img src="assets/images/white-logo.webp" className="white-logo" alt="logo"/>
                                </NavLink>
                                <p>
                                    Facilis est et expedita distinct libero teor cum soluta nobis est
                                                eligendi optio cumque nihil impedit quo minus id quod maxime
                                                expedita placeat facere possimus.
                                </p>
                                <ul className="follow-list">
                                    <li>
                                        <NavLink href="https://www.facebook.com/" target="_blank">
                                            <i className="bx bxl-facebook"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="https://twitter.com/" target="_blank">
                                            <i className="bx bxl-twitter"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="https://www.linkedin.com/" target="_blank">
                                            <i className="bx bxl-linkedin"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="https://www.google.com/" target="_blank">
                                            <i className="bx bxl-google"/>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp" data-show="true"
                            style={
                                {
                                    animationName: "slideInUp",
                                    animationDuration: "600ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "180ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both"
                                }
                        }>
                            <div className="footer-widget footer-widget-link2">
                                <h2>About Us</h2>
                                <ul className="footer-widget-list">
                                    <li>
                                        <NavLink to="/">
                                            <i className="bx bx-chevron-right"/>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="about.html">
                                            <i className="bx bx-chevron-right"/>
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="about.html">
                                            <i className="bx bx-chevron-right"/>
                                            How It Works
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="blog.html">
                                            <i className="bx bx-chevron-right"/>
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="contact.html">
                                            <i className="bx bx-chevron-right"/>
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp" data-show="true"
                            style={
                                {
                                    animationName: "slideInUp",
                                    animationDuration: "600ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "360ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both"
                                }
                        }>
                            <div className="footer-widget footer-widget-link">
                                <h2>Our Services</h2>
                                <ul className="footer-widget-list">
                                    <li>
                                        <NavLink href="services-details.html">
                                            <i className="bx bx-chevron-right"/>
                                            Bike Insurance
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="services-details.html">
                                            <i className="bx bx-chevron-right"/>
                                            Finances Management
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="services-details.html">
                                            <i className="bx bx-chevron-right"/>
                                            Home Insurance
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="services-details.html">
                                            <i className="bx bx-chevron-right"/>
                                            Health Insurance
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="services-details.html">
                                            <i className="bx bx-chevron-right"/>
                                            General Insurance
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp" data-show="true"
                            style={
                                {
                                    animationName: "slideInUp",
                                    animationDuration: "600ms",
                                    animationTimingFunction: "ease",
                                    animationDelay: "540ms",
                                    animationDirection: "normal",
                                    animationFillMode: "both"
                                }
                        }>
                            <div className="footer-widget">
                                <h2>Get In Touch</h2>
                                <div className="touch-content">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact-phone.svg" alt="svg"/>
                                    </div>
                                    <NavLink href="tel:(800)2162020">(800) 216 2020</NavLink>
                                </div>
                                <div className="touch-content">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact-mail.svg" alt="svg"/>
                                    </div>
                                    <NavLink href="mailto:hello@inon.com">hello@inon.com</NavLink>
                                </div>
                                <div className="touch-content">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact-map.svg" alt="svg"/>
                                    </div>
                                    <p>No. 12, Ribon Building, Walse street, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-shape-1">
                    <img src="assets/images/footer-shape-1.webp" alt="footer"/>
                </div>
                <div className="footer-shape-2">
                    <img src="assets/images/footer-shape-2.webp" alt="footer"/>
                </div>
                <div className="copyright-content">
                    <div className="d-flex align-items-center justify-content-center">
                        <p>
                            ©
                            <b>Inon</b>
                            is Proudly Owned by
                            <NavLink href="https://hibootstrap.com/" target="_blank">
                                {" "}
                                HiBootstrap
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default footer;
