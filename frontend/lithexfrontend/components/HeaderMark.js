import React, { Component } from "react";
import  Link from "next/link"
import Head from "next/head";

export default function HeaderMark(props) {

    return (
      <>
      <Head>
      <link href="https://use.fontawesome.com/releases/v6.1.1/css/all.css" rel="stylesheet" />

      </Head>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
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
              <ul id="nv" className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/earn" className="nav-link">
                  <a className="nav-link">
                    Earn
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/exchange" className="nav-link">
                  <a className="nav-link">
                    Exchange
                    </a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="/"
                    
                    
                  >
                     <a className="nav-link dropdown-toggle" id="navbarDropdown"
                    data-bs-toggle="dropdown">Company</a> 
                  </Link>
                  <ul className="dropdown-menu stretched">
                    <li className="py-3">
                      <Link href="/aboutus" >
                        <a className="dropdown-item tnb">

                        
                        <>
                        <i className="fa-solid fa-building me-2"></i> About Us
                        <br />
                        <span className="tnr grey-2 ">Get to know LIQD</span>
                        </>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="py-3">
                      <Link
                        href="/licensesandregistrations"
                        
                      >
                        <a className="dropdown-item tnb">
                        <>
                        <i className="fa-solid fa-building-columns me-2"></i>
                        Licenses & Registrations <br />
                        <span className="tnr grey-2 ">
                          Licensed and regulated <br /> digital assets
                          institution
                        </span>
                        </>
                        </a>
                        
                        
                      </Link>
                    </li>
                    {/* <li className="py-3">
                      <Link href="/prime" >
                        <a className="dropdown-item tnb" >
                        <>
                        <i className="fa-solid fa-certificate me-2"></i> LIQD Prime
                        <br />
                        <span className="tnr grey-2 ">Crypto Prime Brokerage</span>
                        </>
                        </a>
                        
                        
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/security" className="nav-link">
                  <a className="nav-link">
                    Security
                    </a>
                  </Link>
                </li>
              </ul>
              <Link href="/app/login">
              <button className="btn btn-register" type="submit">
                  Go To App
                </button>
              </Link>
              
              {/* <form className="d-flex">
                <button className="btn btn-login" type="submit">
                  Login <i className="fa-solid fa-lock"></i>
                </button>
                <button className="btn btn-register" type="submit">
                  Create Account
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </>
    );
  }



