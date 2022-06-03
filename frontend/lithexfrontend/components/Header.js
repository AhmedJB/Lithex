import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src="assets/img/logo/logo.png" alt="LIQD" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/earn" className="nav-link">
                    Earn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/exchange" className="nav-link">
                    Exchange
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                  >
                    Company
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="py-3">
                      <Link to="/aboutus" className="dropdown-item tnb">
                        <i className="fa-solid fa-building me-2"></i> About Us
                        <br />
                        <span className="tnr grey-2 ">Get to know LIQD</span>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="py-3">
                      <Link
                        to="/LicensesandRegistrations"
                        className="dropdown-item tnb"
                      >
                        <i className="fa-solid fa-building-columns me-2"></i>
                        Licenses & Registrations <br />
                        <span className="tnr grey-2 ">
                          Licensed and regulated <br /> digital assets
                          institution
                        </span>
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link to="/prime" className="dropdown-item tnb">
                        <i className="fa-solid fa-certificate me-2"></i> LIQD Prime
                        <br />
                        <span className="tnr grey-2 ">Crypto Prime Brokerage</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/security" className="nav-link">
                    Security
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-login" type="submit">
                  Login <i className="fa-solid fa-lock"></i>
                </button>
                <button className="btn btn-register" type="submit">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
