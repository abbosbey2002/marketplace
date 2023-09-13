import React from 'react'
import { NavLink } from 'react-router-dom'

function Pagetop(props) {
    console.log(props)
  return (
    <div className="page-banner-area blog-page-are my-3">
  <div className="container">
    <div className="single-page-banner-content">
      <h1>{props.name}</h1>
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Pagetop
