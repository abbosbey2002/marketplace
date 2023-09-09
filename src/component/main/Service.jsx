import React from 'react'
import { NavLink } from 'react-router-dom'

function Service() {
  return (
    <div className="services-area pt-100 pb-70">
    <div className="container">
      <div className="services-top-item d-flex align-items-end justify-content-between">
        <div className="section-title left-title">
          <span className="top-title">Our Services</span>
          <h2>Inon Best Insurance Services</h2>
        </div>
        <NavLink to="services.html" className="default-btn">
          All Services
        </NavLink>
      </div>
      <div className="row" data-cues="slideInUp" data-disabled="true">
        <div
          className="col-lg-4 col-sm-6 col-md-6"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "0ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="single-services-card d-flex align-items-center">
            <div className="services-icon">
              <img src="assets/images/services/couple.svg" alt="couple" />
            </div>
            <h3>
              <NavLink to="/accident">Life Insurance</NavLink>
            </h3>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 col-md-6"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "180ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="single-services-card d-flex align-items-center">
            <div className="services-icon">
              <img src="assets/images/services/home.svg" alt="home" />
            </div>
            <h3>
              <NavLink to="services-details.html">Home Insurance</NavLink>
            </h3>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 col-md-6"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "360ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="single-services-card d-flex align-items-center">
            <div className="services-icon bg-icon-color">
              <img src="assets/images/services/lightbulb.svg" alt="lightbulb" />
            </div>
            <h3>
              <NavLink to="services-details.html">Business Insurance</NavLink>
            </h3>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 col-md-6"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "0ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="single-services-card d-flex align-items-center">
            <div className="services-icon bg-icon-color1">
              <img src="assets/images/services/heart.svg" alt="heart" />
            </div>
            <h3>
              <NavLink to="services-details.html">Health Insurance</NavLink>
            </h3>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 col-md-6"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "180ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="single-services-card d-flex align-items-center">
            <div className="services-icon bg-icon-color2">
              <img src="assets/images/services/car.svg" alt="car" />
            </div>
            <h3>
              <NavLink to="/osago">Car Insurance</NavLink>
            </h3>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 col-md-6"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "360ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="single-services-card d-flex align-items-center">
            <div className="services-icon bg-icon-color2">
              <img
                src="assets/images/services/services-icon-1.svg"
                alt="lightbulb"
              />
            </div>
            <h3>
              <NavLink to="/osago">Travel Insurance</NavLink>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Service
