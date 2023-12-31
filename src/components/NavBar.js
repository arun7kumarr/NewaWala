//rce
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavBar = ()=> {

    return (
      <div>
        <nav className="navbar  navbar-expand-lg fixed-top bg-body-tertiary bg-secondary" >
  <div className="container-fluid bg-secondary">
    <Link className="navbar-brand" to="/">NewsWala</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item font-weight-bold">
          <Link className="nav-link active  text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item font-weight-bold">
          <Link className="nav-link   text-dark" to="/">General</Link>
        </li>
        <li className="nav-item font-weight-bold">
          <Link className="nav-link  text-dark" to="/business">Business</Link>
        </li>
        <li className="nav-item font-weight-bold">
          <Link className="nav-link  text-dark" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item font-weight-bold">
          <Link className="nav-link  text-dark" to="/health">Health</Link>
        </li>
        <li className="nav-item font-weight-bold">
          <Link className="nav-link  text-dark" to="/science">Science</Link>
        </li>
        <li className="nav-item font-weight-bold">
        </li>
        <li className="nav-item font-weight-bold">
          <Link className="nav-link  text-dark" to="/technology">Technology</Link>
        </li>  
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
}

export default NavBar
