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
                                        <NavLink to="https://www.facebook.com/doradev.uz?mibextid=ZbWKwL" target="_blank">
                                            <i className="bx bxl-facebook"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://www.youtube.com/@doradigital" target="_blank">
                                            <i className="bx bxl-youtube"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://www.linkedin.com/company/dora-holding/" target="_blank">
                                            <i className="bx bxl-linkedin"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://t.me/dora_support" target="_blank">
                                            <i className="bx bxl-telegram"/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://www.instagram.com/dora.uz/?igshid=MzRlODBiNWFlZA==" target="_blank">
                                            <i className="bx bxl-instagram"/>
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
                                        <NavLink to="/accident">
                                            <i className="bx bx-chevron-right"/>
                                            Accident
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/osago">
                                            <i className="bx bx-chevron-right"/>
                                            Osago
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register">
                                            <i className="bx bx-chevron-right"/>
                                            Register
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">
                                            <i className="bx bx-chevron-right"/>
                                            Contact
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
                                        <NavLink to="/osago">
                                            <i className="bx bx-chevron-right"/>
                                            Osago
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/accident">
                                            <i className="bx bx-chevron-right"/>
                                            Accident
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
                                    <NavLink to="tel:+998935135324">(93) 513 53 24</NavLink>
                                </div>
                                <div className="touch-content">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact-mail.svg" alt="svg"/>
                                    </div>
                                    <NavLink to="mailto:info@dora.uz">info@dora.uz</NavLink>
                                </div>
                                <div className="touch-content">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact-map.svg" alt="svg"/>
                                    </div>
                                    <p>Chilonzor region, Uzbekistan</p>
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
                            <b>Market Place </b>
                            is Proudly Owned by
                            <NavLink to="https://dora.uz/" target="_blank">
                                {" "}
                                Dora
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default footer;
