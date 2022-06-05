import React, { Component } from "react";
import  Link from "next/link"

export default function FooterMark(props) {
  
    return (
      <div>
        <footer className="p-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 my-auto mb-3">
                <img
                  src="assets/img/logo/footer-logo.png"
                  alt="Liqd"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 mb-3">
                <h4 className="tnm black">Sign up for updates</h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-updt">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <h4 className="tnm black">Follow us</h4>
                <div className="social">
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f btn btn-light"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-twitter btn btn-light"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-reddit-alien btn btn-light"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-medium btn btn-light"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-telegram btn btn-light"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-2 mb-3">
                <img
                  src="assets/img/footer-trust-pilot.png"
                  alt="Liqd TrustPilot"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-3">
                <h5>Products</h5>
                <ul className="tnr ls-none">
                  <li className="pb-2">
                    <Link href="/">Buy</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Earn</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Exchange</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">LIQD Prime</Link>
                  </li>
                  <li>
                    <Link href="/">Referral</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Company</h5>
                <ul className="tnr ls-none">
                  <li className="pb-2">
                    <Link href="/">About Us</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Blog</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Careers</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Licences</Link>
                  </li>
                  <li>
                    <Link href="/">Community</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Help</h5>
                <ul className="tnr ls-none">
                  <li className="pb-2">
                    <Link href="/">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/">Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Legal</h5>
                <ul className="tnr ls-none">
                  <li className="pb-2">
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Wallet Terms</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Earn Terms</Link>
                  </li>
                  <li className="pb-2">
                    <Link href="/">Exchange Terms</Link>
                  </li>
                  <li>
                    <Link href="/">Cookies Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 my-auto">
                <img src="assets/img/sms.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-3 my-auto">
                <img
                  src="assets/img/licence.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 my-auto">
                <img
                  src="assets/img/audited.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-2 my-auto">
                <i className="fa-solid fa-language"></i> English
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-5">
                <p className="small mb-1 tnr">
                  The LIQD Earn Interest Product is not available for citizens
                  or residents of certain jurisdictions, including where
                  restrictions may apply, such as Bulgaria, Estonia and the USA.
                </p>
                <p className="small mb-1 tnr">
                  For any inquiries please contact us at support@LIQD.io
                </p>
                <p className="small mb-1 tnr">
                  Copyright © 2018-2022 LIQD. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }



