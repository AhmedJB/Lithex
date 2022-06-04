import React, { Component } from "react";
import Link from "next/link"
import HeaderMark from "./HeaderMark";
import Footer from "./Footer";


function LicensesandRegistrations(props) {

    return (
      <>
      <HeaderMark />
        <section className="py-5 d-flex align-items-center justify-content-center">
          <div className="container-fluid">
            <div className="row margin-row py-5">
              <div className="col-8 m-auto text-center">
                <h1 className="font-4 bdb blue">Licenses & Registrations</h1>
                <p className="dark-grey tnr font-1-5">
                  In order to ensure the provision of their portfolio of
                  services in full compliance with all applicable global and
                  local regulations and standards, the LIQD companies hold
                  licenses and registrations in numerous jurisdictions
                  worldwide, and are constantly bringing their operations in
                  line with newly adopted legislative changes.
                </p>
                <p className="mt-5">Audited by</p>
                <img src="assets/img/logo-armanino.svg" alt="Armanino" />
              </div>
            </div>
            <div className="row margin-row pt-5">
              <div className="col-5 mx-auto text-center">
                <img src="assets/img/logo-fntt.png" />
                <p className="small mt-4">LITHUANIA</p>
                <h4 className="bdb black">
                  Financial Crime Investigation Service
                </h4>
                <p className="tnr">
                  Registration as Virtual Currency Exchange Operator and
                  Depository Virtual Currency Wallet Operator
                </p>
                <p className="small mt-2 tnr mb-0">COMPANY</p>
                <p>LIQD Services UAB</p>
              </div>
            </div>
          </div>
        </section>

        <section className="earn py-5">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1 className="black">
                  What does LIQD being
                  <br />
                  Licensed and Regulated mean?
                </h1>
                <svg
                  width="52"
                  height="42"
                  viewBox="0 0 52 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.0923 14.3628C44.0923 13.9868 43.7874 13.6819 43.4113 13.6819H8.28463C7.90853 13.6819 7.60364 13.9868 7.60364 14.3628V31.2452C7.60364 31.6214 7.90853 31.9263 8.28463 31.9263H11.4848C11.861 31.9263 12.1659 31.6214 12.1659 31.2452V19.7646C12.1659 18.0852 13.5272 16.7239 15.2066 16.7239C16.8859 16.7239 18.2472 18.0852 18.2472 19.7646V31.2452C18.2472 31.6214 18.5521 31.9263 18.9283 31.9263H22.1269C22.5029 31.9263 22.8078 31.6214 22.8078 31.2452V19.7651C22.8078 18.0857 24.1691 16.7244 25.8485 16.7244C27.5278 16.7244 28.8893 18.0857 28.8893 19.7651V31.2452C28.8893 31.6214 29.1942 31.9263 29.5702 31.9263H32.7719C33.1481 31.9263 33.453 31.6214 33.453 31.2452V19.7651C33.453 18.0857 34.8143 16.7244 36.4937 16.7244C38.173 16.7244 39.5344 18.0857 39.5344 19.7651V31.2452C39.5344 31.6214 39.8392 31.9263 40.2154 31.9263H43.4113C43.7874 31.9263 44.0923 31.6214 44.0923 31.2452V14.3628Z"
                    fill="black"
                  ></path>
                  <path
                    d="M24.6863 0.545771C25.4209 0.200076 26.2714 0.200074 27.006 0.545771L48.9358 10.8657C49.594 11.1754 49.3733 12.1628 48.6458 12.1628H3.04646C2.31903 12.1628 2.0983 11.1754 2.75649 10.8657L24.6863 0.545771Z"
                    fill="black"
                  ></path>
                  <path
                    d="M46.4482 33.4482H5.24008C4.86397 33.4482 4.55908 33.7531 4.55908 34.1292V35.808C4.55908 36.1841 4.86397 36.489 5.24008 36.489H46.4482C46.8243 36.489 47.1292 36.1841 47.1292 35.808V34.1292C47.1292 33.7531 46.8243 33.4482 46.4482 33.4482Z"
                    fill="black"
                  ></path>
                  <path
                    d="M49.4914 38.0088H2.20175C1.82564 38.0088 1.52075 38.3137 1.52075 38.6898V40.3685C1.52075 40.7446 1.82564 41.0495 2.20175 41.0495H49.4914C49.8675 41.0495 50.1724 40.7446 50.1724 40.3685V38.6898C50.1724 38.3137 49.8675 38.0088 49.4914 38.0088Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <table className="table table-responsive table-borderless">
                  <thead className="bg-blue text-white">
                    <tr className="text-center">
                      <th scope="col">What We Need To Provide</th>
                      <th scope="col">Why Is It Important</th>
                      <th scope="col">What Does It Mean For You</th>
                    </tr>
                  </thead>
                  <tbody className="tnr">
                    <tr>
                      <td>Adequate operational capital </td>
                      <td>
                        <p>
                          a) We are subject to the minimum initial capital and
                          own funds requirement. Own capital requirement is
                          intended for covering the risk of a provision of
                          payment services.
                        </p>
                        <p className="mt-3">
                          b) We protect your funds with our security measures
                          (segregation of funds and funds insurance).
                        </p>
                      </td>
                      <td>
                        Your payouts are protected as entrusted to a company
                        with adequate operating capital.
                      </td>
                    </tr>
                    <tr>
                      <td>Internal and external auditor is mandatory</td>
                      <td>Our accounts are subject to additional check.</td>
                      <td>Four layers of defense for your business.</td>
                    </tr>
                    <tr>
                      <td>
                        Sound Anti-money laundering (AML) policies and
                        procedures
                      </td>
                      <td>
                        <p>
                          a) Risk-based approach (RBA) in assessing and managing
                          the money laundering and terrorist financing risk to
                          the company.
                        </p>
                        <p className="mt-3">
                          b) We perform customer due diligence (CDD),
                          identification and verification procedures, including
                          enhanced due diligence, screening against UN, EU, OFAC
                          sanction lists.
                        </p>
                      </td>
                      <td>
                        Our AML/CTF policies and procedures make us reliable
                        partner within the financial sector safeguarding our own
                        and your business reputation.
                      </td>
                    </tr>
                    <tr>
                      <td>Data protection and security</td>
                      <td>
                        We maintain high level IT security checks and data
                        protection processes, access right procedures and data
                        encryption.
                      </td>
                      <td>
                        Your sensitive information is safe and protected with
                        us.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto ps-5 my-auto text-white">
                <h1>
                  Harness the <br />
                  <span className="tnb">Power of Your Crypto</span>
                </h1>
                <p className=" tnr">
                  With the account that caters to your profit and prosperity
                  through our leading credit line service for digital assets and
                  high-yield interest on your idle savings.
                </p>
                <Link href="/register" >
                      <a className="btn btn-bg-register tnb text-1-25">
                      <>Create Account <i className="fa-solid fa-angle-right"></i></>
                      </a>
                      
                    </Link>
              </div>
              <div className="col-md-6">
                <img
                  src="assets/img/security/platform.png"
                  className="img-fluid"
                  alt="Ready to Swap?"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }


export default LicensesandRegistrations;
