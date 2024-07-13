import React from "react";
import logo from '../Components/logo.png';
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link " href="#">
                About us
              </a>
              <a className="nav-link " href="#">
                Services
              </a>
              <a className="nav-link " href="#">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
