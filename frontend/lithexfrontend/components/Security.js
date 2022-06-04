import React, { Component } from "react";
import Link from "next/link"
import HeaderMark from "./HeaderMark";
import Footer from "./Footer";

function Security(props) {

    return (
      <>
      <HeaderMark />
        <section className="banner bg-security">
          <div className="container-fluid">
            <div className="row margin-row py-5">
              <div className="col-md-7 my-auto">
                <h1>
                  <p className="font-4 bdb blue">Maximum Security</p>
                  <p className="font-4 tnm black">for Your Digital Assets</p>
                </h1>
                <p className="font-1-5 tnr">
                  {`By LIQD's leading partners in custody, overcollateralized
                  lending model, and secure-by-design infrastructure.`}
                </p>
              </div>
              <div className="col-md-5 my-auto">
                <div className="card p-3 border-gray background-none round-1rem shadow-md2 filter-blur">
                  <h2 className="font-4 tnb black text-center">$375,000,000</h2>
                  <p className="dark-grey tnr font-1-375 text-center">
                    digital assets coverage via
                  </p>
                  <div className="row">
                    <div className="col-md-4">
                      <a href="https://www.bakkt.com/">
                        <img
                          src="assets/img/logo-bakkt.svg"
                          alt="Bakkt"
                          target="_blank"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="https://www.bitgo.com/">
                        <img
                          src="assets/img/logo-bitgo.svg"
                          alt="Bitgo"
                          target="_blank"
                          className="img-fluid w-100"
                        />
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="https://www.ledger.com/">
                        <img
                          src="assets/img/logo-ledger.svg"
                          className="img-fluid w-100"
                          alt="Ledger"
                          target="_blank"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Link
                
                href="#security-partners"
              >
                <a className="align-bottom text-center mb-2">
                <>
                {`Your assets' security is guaranteed by`}{" "}
                <i className="fa-solid fa-arrow-down blue"></i>
                </>
                </a>
                
                
              </Link>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-10 text-center m-auto">
                <h1 className="black tnm">
                  LIQD Works With the Leading Authorities in Custody and
                  Compliance
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 my-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c1"
                        aria-expanded="false"
                        aria-controls="c1"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-bakkt.svg"
                          alt="Bakkt"
                        />
                      </button>
                    </h2>
                    <div
                      id="c1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Bakkt</h4>
                          <p className="tnr">
                            {`Bakkt is a trusted digital asset platform providing
                            LIQD with Bitcoin and Ethereum custody in the Bakkt
                            Warehouse, the company's regulated custodian, which
                            comprises both online (warm) and air-gapped (cold)
                            digital asset storage to minimize risks. For extra
                            protection, Bakkt's wallets are covered by an
                            insurance policy from a leading global carrier.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c2"
                        aria-expanded="false"
                        aria-controls="c2"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-bitgo.svg"
                          alt="Bitgo"
                        />
                      </button>
                    </h2>
                    <div
                      id="c2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">BitGo</h4>
                          <p className="tnr">
                            BitGo is the first Qualified Custodian purpose-built
                            for digital assets and a long-standing LIQD partner,
                            serving primarily the retail side of our business.
                            Private keys entrusted to BitGo are held in
                            military-grade Class III vaults and carry $100M in
                            insurance protections.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c3"
                        aria-expanded="false"
                        aria-controls="c3"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-ledger.svg"
                          alt="Ledger"
                        />
                      </button>
                    </h2>
                    <div
                      id="c3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Ledger</h4>
                          <p className="tnr">
                            {`Ledger Vault provides us with institutional-grade
                            self-custody that is accessible 24/7/365 and fully
                            addresses our retail and institutional clients'
                            needs for instant services. Ledger Vault carries
                            $150M third-party insurance led by the Arch UK
                            Lloyds of London syndicate.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c4"
                        aria-expanded="false"
                        aria-controls="c4"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-armanino.svg"
                          alt="Armanino"
                        />
                      </button>
                    </h2>
                    <div
                      id="c4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Armanino</h4>
                          <p className="tnr">
                            As one of the leading accounting and business
                            consulting firms in the US, Armanino is providing
                            uninterrupted access to industry-standard attest
                            reporting and a snapshot of LIQD’s total assets and
                            liabilities, updated daily.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c5"
                        aria-expanded="false"
                        aria-controls="c5"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-aws.svg"
                          alt="Amazon Web Services"
                        />
                      </button>
                    </h2>
                    <div
                      id="c5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Amazon Web Services</h4>
                          <p className="tnr">
                            AWS provides even the most security-sensitive
                            organizations with reliable cloud infrastructure.
                            ISO 27001 and SOC 2 are just a couple of examples
                            from the list of assurance programs with which AWS
                            complies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c6"
                        aria-expanded="false"
                        aria-controls="c6"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-jumio.svg"
                          alt="Jumio"
                        />
                      </button>
                    </h2>
                    <div
                      id="c6"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Jumio</h4>
                          <p className="tnr">
                            {`Jumio's eKYC platform uses Informed AI that
                            incorporates large data sets to deliver end-to-end
                            identity verification. The Jumio KYX platform
                            applies biometric-based authentication and AML
                            screening and supports more than 3,500 ID documents
                            across 200 jurisdictions.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c7"
                        aria-expanded="false"
                        aria-controls="c7"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-securitize.svg"
                          alt="Securitize"
                        />
                      </button>
                    </h2>
                    <div
                      id="c7"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Securitize</h4>
                          <p className="tnr">
                            {`Securitize enables ownership, management, and
                            trading of digital securities (security tokens). The
                            company is an SEC Registered Transfer Agent and its
                            DS protocol allows for tokenized securities to be
                            staked as collateral for LIQD's Instant Crypto
                            Credit Lines™.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c8"
                        aria-expanded="false"
                        aria-controls="c8"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-cloudflare.svg"
                          alt="Cloudflare"
                        />
                      </button>
                    </h2>
                    <div
                      id="c8"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">Cloudflare</h4>
                          <p className="tnr">
                            Cloudflare is a trusted security partner providing
                            protection from critical vulnerabilities and
                            threats, safeguarding network infrastructure against
                            layer 3 and layer 4 DDoS attacks, and securing our
                            team’s devices, networks, and internal applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c9"
                        aria-expanded="false"
                        aria-controls="c9"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-ssl-secured.svg"
                          alt="AES 256-bit SSL Secured"
                        />
                      </button>
                    </h2>
                    <div
                      id="c9"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">AES 256-bit SSL Secured</h4>
                          <p className="tnr">
                            LIQD.fi is 256-bit SSL secured, thus employing one
                            of the most solid encryption methods used in modern
                            encryption algorithms, protocols, and technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c10"
                        aria-expanded="false"
                        aria-controls="c10"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-soc2.svg"
                          alt="SOC 2 Type I & Type II"
                        />
                      </button>
                    </h2>
                    <div
                      id="c10"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">SOC 2 Type I & Type II</h4>
                          <p className="tnr">
                            The SOC 2 compliance framework gauges the levels of
                            security and protection of customer data. Type I
                            evaluates an organization’s internal controls
                            related to financial reporting, and Type II measures
                            its preparedness to handle and protect customer
                            information and data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c11"
                        aria-expanded="false"
                        aria-controls="c11"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-ccss-level-3.svg"
                          alt="CCSS Level 3"
                        />
                      </button>
                    </h2>
                    <div
                      id="c11"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">CCSS Level 3</h4>
                          <p className="tnr">
                            The CCSS is an open security standard for
                            cryptocurrency storage and usage within an
                            organization. The standard has three levels of
                            security. The highest one- Level 3- requires
                            multiple actors for all-critical actions, employs
                            advanced authentication mechanisms, and distributes
                            assets geographically and organisationally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 m-auto">
                <div className="accordion" id="security">
                  <div className="accordion-item security">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c12"
                        aria-expanded="false"
                        aria-controls="c12"
                      >
                        <img
                          className="text-center w-75"
                          src="assets/img/logo-iso.svg"
                          alt="ISO/IEC 27001:2013"
                        />
                      </button>
                    </h2>
                    <div
                      id="c12"
                      className="accordion-collapse collapse"
                      data-bs-parent="#security"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <h4 className="black tnb">ISO/IEC 27001:2013</h4>
                          <p className="tnr">
                            ISO/IEC 27001:2013 Certified Information Security
                            Management System comprises requirements for
                            information security management systems (ISMS) and
                            enables organizations to manage the security of
                            financial information, intellectual property,
                            employee details, or information entrusted by third
                            parties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-black">
          <div className="container-fluid">
            <div className="row">
              <div className="col mb-5">
                <h3 className="font-3-25 text-white text-center">
                  Designed for Security,
                  <br />
                  <span className="green bdb">Driven by Trust</span>
                </h3>
              </div>
            </div>
            <div className="row margin-row">
              <div className="col-md-6">
                <p className="grey-3 tnr">
                  We vouch for the trustworthiness of our best-in-class partners
                  and we take pride in our own commitment: to protect your
                  assets by lending them to institutions on an
                  over-collateralized basis only.
                </p>
                <p className="grey-3 tnr">
                  Compliance with stringent regulations and global KYC and AML
                  standards are testaments that security is LIQD’s utmost
                  priority. That is why individuals, businesses, and
                  institutions big and small trust LIQD with their data.
                </p>
                <p className="grey-3 tnr">
                  LIQD is cultivating a community of security-savvy users and
                  employees to strengthen the blockchain and crypto lending
                  ecosystems. This includes running regular internal security &
                  privacy workshops to ensure that LIQD’s staff is up to speed
                  with today’s cybersecurity matters.
                </p>
              </div>
              <div className="col-md-6">
                <div className="row mb-4">
                  <div className="col-md-4 m-auto">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 4.03418C6.23858 4.03418 4 6.27276 4 9.03418V35.0342C4 37.7956 6.23857 40.0342 9 40.0342H22.5798C22.2026 38.7668 22 37.4241 22 36.0342C22 28.3022 28.268 22.0342 36 22.0342C38.9745 22.0342 41.7323 22.9618 44 24.5435V9.03418C44 6.27276 41.7614 4.03418 39 4.03418H9Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        d="M23 35.0342H13C10.7909 35.0342 9 33.2433 9 31.0342V13.0342C9 10.825 10.7909 9.03418 13 9.03418H35C37.2091 9.03418 39 10.825 39 13.0342V23.0342"
                        stroke="#030405"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M4 16.0342H9"
                        stroke="#030405"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M4 22.0342H9"
                        stroke="#030405"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M4 28.0342H9"
                        stroke="#030405"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M10 42.0342H17V45.0342C17 45.5865 16.5523 46.0342 16 46.0342H11C10.4477 46.0342 10 45.5865 10 45.0342V42.0342Z"
                        fill="#00A76A"
                      ></path>
                      <path
                        d="M31 40.0342H38V43.0342C38 43.5865 37.5523 44.0342 37 44.0342H32C31.4477 44.0342 31 43.5865 31 43.0342V40.0342Z"
                        fill="#00A76A"
                      ></path>
                      <circle
                        cx="36"
                        cy="36.0342"
                        r="12"
                        fill="#00A76A"
                      ></circle>
                      <path
                        d="M38.6175 32.5937C39.1273 32.5937 39.5405 32.1805 39.5405 31.6707C39.5405 31.1609 39.1273 30.7476 38.6175 30.7476V32.5937ZM33.3811 39.4748C32.8713 39.4748 32.458 39.8881 32.458 40.3979C32.458 40.9077 32.8713 41.321 33.3811 41.321V39.4748ZM38.6175 30.7476H34.9084V32.5937H38.6175V30.7476ZM34.9084 36.9574H37.0902V35.1112H34.9084V36.9574ZM37.0902 39.4748H33.3811V41.321H37.0902V39.4748ZM38.3489 38.2161C38.3489 38.9113 37.7854 39.4748 37.0902 39.4748V41.321C38.805 41.321 40.1951 39.9309 40.1951 38.2161H38.3489ZM37.0902 36.9574C37.7854 36.9574 38.3489 37.5209 38.3489 38.2161H40.1951C40.1951 36.5013 38.805 35.1112 37.0902 35.1112V36.9574ZM31.8035 33.8525C31.8035 35.5673 33.1936 36.9574 34.9084 36.9574V35.1112C34.2132 35.1112 33.6496 34.5477 33.6496 33.8525H31.8035ZM34.9084 30.7476C33.1936 30.7476 31.8035 32.1377 31.8035 33.8525H33.6496C33.6496 33.1573 34.2132 32.5937 34.9084 32.5937V30.7476Z"
                        fill="#030405"
                      ></path>
                      <path
                        d="M36.9192 30.0342C36.9192 29.5244 36.5059 29.1111 35.9961 29.1111C35.4863 29.1111 35.073 29.5244 35.073 30.0342H36.9192ZM35.073 42.0342C35.073 42.544 35.4863 42.9573 35.9961 42.9573C36.5059 42.9573 36.9192 42.544 36.9192 42.0342H35.073ZM36.9192 31.6705V30.0342H35.073V31.6705H36.9192ZM35.073 40.3978V42.0342H36.9192V40.3978H35.073Z"
                        fill="#030405"
                      ></path>
                    </svg>
                    <h6 className="mt-3 grey-3">
                      Only Lending on Over-Collateralized Basis
                    </h6>
                  </div>
                  <div className="col-md-4 m-auto">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8119 7.86249C17.8215 7.86249 18.6399 7.04404 18.6399 6.03442C18.6399 5.02481 17.8215 4.20636 16.8119 4.20636V7.86249ZM31.2302 4.20636C30.2206 4.20636 29.4021 5.02481 29.4021 6.03442C29.4021 7.04404 30.2206 7.86249 31.2302 7.86249V4.20636ZM16.8119 43.8625C17.8215 43.8625 18.6399 43.044 18.6399 42.0344C18.6399 41.0248 17.8215 40.2064 16.8119 40.2064V43.8625ZM31.2302 40.2064C30.2206 40.2064 29.4021 41.0248 29.4021 42.0344C29.4021 43.044 30.2206 43.8625 31.2302 43.8625V40.2064ZM4.17194 16.892C4.17194 17.9016 4.99039 18.72 6 18.72C7.00961 18.72 7.82806 17.9016 7.82806 16.892H4.17194ZM7.82806 31.2687C7.82806 30.2591 7.00961 29.4406 6 29.4406C4.99039 29.4406 4.17194 30.2591 4.17194 31.2687H7.82806ZM40.1719 16.892C40.1719 17.9016 40.9904 18.72 42 18.72C43.0096 18.72 43.8281 17.9016 43.8281 16.892H40.1719ZM43.8281 31.2687C43.8281 30.2591 43.0096 29.4406 42 29.4406C40.9904 29.4406 40.1719 30.2591 40.1719 31.2687H43.8281ZM8.74209 7.86249H16.8119V4.20636H8.74209V7.86249ZM31.2302 7.86249H39.2579V4.20636H31.2302V7.86249ZM16.8119 40.2064H8.7421V43.8625H16.8119V40.2064ZM39.2579 40.2064H31.2302V43.8625H39.2579V40.2064ZM7.82806 16.892V8.77652H4.17194V16.892H7.82806ZM7.82806 39.2923V31.2687H4.17194V39.2923H7.82806ZM40.1719 8.77652V16.892H43.8281V8.77652H40.1719ZM40.1719 31.2687V39.2923H43.8281V31.2687H40.1719ZM8.7421 40.2064C8.23729 40.2064 7.82806 39.7971 7.82806 39.2923H4.17194C4.17194 41.8164 6.21807 43.8625 8.7421 43.8625V40.2064ZM39.2579 43.8625C41.7819 43.8625 43.8281 41.8164 43.8281 39.2923H40.1719C40.1719 39.7971 39.7627 40.2064 39.2579 40.2064V43.8625ZM39.2579 7.86249C39.7627 7.86249 40.1719 8.27171 40.1719 8.77652H43.8281C43.8281 6.25249 41.7819 4.20636 39.2579 4.20636V7.86249ZM8.74209 4.20636C6.21807 4.20636 4.17194 6.25248 4.17194 8.77652H7.82806C7.82806 8.27171 8.23729 7.86249 8.74209 7.86249V4.20636Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        d="M22.9453 24.502C17.3803 24.502 12.8555 29.0268 12.8555 34.5918C12.8555 35.632 13.6876 36.5161 14.7798 36.5161H32.9311C33.9713 36.5161 34.8555 35.684 34.8555 34.5918C34.8555 29.0268 30.3306 24.502 24.7656 24.502H22.9453Z"
                        fill="#00A76A"
                      ></path>
                      <path
                        d="M23.8812 11.552C20.7086 11.552 18.1602 14.1005 18.1602 17.273C18.1602 20.4456 20.7086 23.0461 23.8812 23.0461C27.0538 23.0461 29.6022 20.4976 29.6022 17.273C29.6022 14.1525 27.0538 11.552 23.8812 11.552Z"
                        fill="#00A76A"
                      ></path>
                    </svg>
                    <h6 className="mt-3 grey-3">
                      Biometric-Based Identity Verification
                    </h6>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-4 m-auto">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.1571 15.2231C14.988 10.0415 18.1842 5.51834 22.3074 2.09839C10.948 2.96268 2 12.4535 2 24.0342C2 35.6149 10.9478 45.1057 22.3071 45.9701C18.2255 42.5846 15.0524 38.1179 13.2128 33.0017H6.40039V15.5081H13.1009C13.1055 15.4132 13.1239 15.3173 13.1571 15.2231ZM13.6127 16.4297V16.9083C13.7553 16.7831 13.9017 16.6655 14.0516 16.5554C13.9567 16.5508 13.861 16.5324 13.7668 16.4992C13.7127 16.48 13.6612 16.4567 13.6127 16.4297ZM15.0084 15.9745C16.0307 15.4703 17.1706 15.2433 18.3641 15.2433C19.0478 15.2433 19.757 15.3124 20.4636 15.495C21.0608 15.6473 21.6405 15.8431 22.1552 16.1077C22.5617 16.3168 22.9447 16.549 23.2871 16.7992C23.5608 16.9993 23.8952 17.2692 24.1706 17.5992L24.8304 18.3323C24.976 18.1706 25.1284 18.0122 25.2876 17.8573C27.0886 16.1043 29.3371 15.2341 31.8715 15.2341C32.1612 15.2341 32.4473 15.2455 32.7294 15.2683C30.9244 10.5195 27.8805 6.3942 24 3.29959C19.9512 6.52838 16.8132 10.8791 15.0429 15.8895C15.0326 15.9186 15.0211 15.9469 15.0084 15.9745ZM34.8909 15.6922C36.2092 16.117 37.4079 16.8379 38.4553 17.8573C40.2427 19.597 41.1753 21.7694 41.1753 24.2549C41.1753 26.7371 40.245 28.9196 38.4553 30.6616C37.3956 31.6931 36.1809 32.4189 34.8442 32.8416C34.8438 32.8429 34.8433 32.8442 34.8429 32.8456C33.012 38.0271 29.8159 42.5502 25.6929 45.9701C37.0522 45.1057 46 35.6149 46 24.0342C46 12.4535 37.052 2.96268 25.6926 2.09839C29.8158 5.51834 33.012 10.0415 34.8429 15.2231C34.8979 15.3789 34.9121 15.5391 34.8909 15.6922ZM32.5486 33.2636C32.3253 33.2777 32.0995 33.2848 31.8715 33.2848C29.3371 33.2848 27.0886 32.4146 25.2876 30.6616C25.0679 30.4477 24.8611 30.2272 24.6674 30.0003C24.3388 30.5843 23.9044 31.1177 23.3647 31.5899C21.9699 32.8104 20.1783 33.2848 18.2728 33.2848C17.4933 33.2848 16.7146 33.1904 15.9608 32.9958C15.7264 32.9354 15.4942 32.8672 15.2668 32.7904C17.0713 37.5434 20.1168 41.6723 24 44.7691C27.7538 41.7755 30.7247 37.8175 32.5486 33.2636ZM30.459 22.7522C30.0687 23.1468 29.8713 23.6027 29.8713 24.264C29.8713 24.9276 30.0699 25.3775 30.4504 25.7581L30.4591 25.7667L30.4676 25.7755C30.8576 26.1742 31.282 26.3555 31.8715 26.3555C32.4609 26.3555 32.8853 26.1742 33.2753 25.7755L33.2838 25.7667L33.2925 25.7581C33.673 25.3775 33.8717 24.9276 33.8717 24.264C33.8717 23.6027 33.6742 23.1468 33.2839 22.7522L33.2753 22.7435C32.8766 22.3358 32.4484 22.1542 31.8715 22.1542C31.2945 22.1542 30.8663 22.3358 30.4676 22.7434L30.459 22.7522Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        d="M9 30.7439H11.7776V17.3151H9V30.7439Z"
                        fill="#00A76A"
                      ></path>
                      <path
                        d="M20.501 26.8108C20.501 27.3165 20.3116 27.7285 19.9328 28.0469C19.554 28.3746 19.04 28.5338 18.3727 28.5338C17.7955 28.5338 17.2364 28.4027 16.7133 28.1312C16.1812 27.869 15.8386 27.6536 15.6853 27.4944C15.5319 27.3352 15.4147 27.2041 15.3335 27.1011L13.6652 28.8241L13.8726 29.0583C13.9898 29.2081 14.1882 29.3954 14.4678 29.6108C14.7383 29.8355 15.063 30.0509 15.4237 30.2569C15.7845 30.4723 16.2534 30.6596 16.8125 30.8094C17.3716 30.9593 17.9578 31.0342 18.553 31.0342C20.0861 31.0342 21.2855 30.6409 22.1513 29.8542C23.017 29.0676 23.4499 28.0563 23.4499 26.8108C23.4499 25.9305 23.2335 25.2094 22.7916 24.6288C22.3587 24.0576 21.8266 23.6456 21.1954 23.3927C20.5641 23.1492 19.9418 22.9245 19.3196 22.7372C18.6973 22.5499 18.1652 22.3251 17.7324 22.0536C17.2995 21.782 17.074 21.4168 17.074 20.9673C17.074 20.574 17.2364 20.2275 17.561 19.9466C17.8857 19.6656 18.3095 19.5251 18.8326 19.5251C19.2745 19.5251 19.6983 19.6375 20.1132 19.8435C20.528 20.0589 20.8076 20.2275 20.9338 20.3586C21.0601 20.4897 21.1593 20.5927 21.2314 20.6864L22.8908 18.8603L22.7284 18.673C22.6292 18.5419 22.4579 18.3827 22.2234 18.2047C21.9889 18.0268 21.7094 17.8489 21.3938 17.6803C21.0781 17.5118 20.6723 17.3619 20.1763 17.2308C19.6893 17.0997 19.1753 17.0435 18.6432 17.0435C17.3085 17.0435 16.2173 17.4275 15.3786 18.1954C14.5399 18.9633 14.1161 19.8904 14.1161 20.9767C14.1161 21.8569 14.3415 22.578 14.7744 23.1586C15.2163 23.7298 15.7484 24.1419 16.3706 24.3947C16.9929 24.6382 17.6151 24.8536 18.2464 25.0409C18.8777 25.2282 19.4098 25.4529 19.8426 25.7338C20.2755 26.0054 20.501 26.3613 20.501 26.8108Z"
                        fill="#00A76A"
                      ></path>
                      <path
                        d="M27.8355 24.0389C27.8355 22.8027 28.2323 21.7539 29.0439 20.9017C29.8466 20.0496 30.8295 19.6188 31.9839 19.6188C33.1382 19.6188 34.1212 20.0496 34.9238 20.9017C35.7354 21.7539 36.1322 22.8027 36.1322 24.0389C36.1322 25.275 35.7354 26.3238 34.9238 27.1666C34.1212 28.0188 33.1382 28.4402 31.9839 28.4402C30.8295 28.4402 29.8466 28.0188 29.0439 27.1666C28.2323 26.3238 27.8355 25.275 27.8355 24.0389ZM24.9677 24.0295C24.9677 25.9586 25.6441 27.6161 26.9968 28.9833C28.3495 30.3506 30.0179 31.0342 31.9839 31.0342C33.9498 31.0342 35.6182 30.3506 36.9709 28.9833C38.3236 27.6161 39 25.9586 39 24.0295C39 22.1004 38.3236 20.4522 36.9709 19.085C35.6182 17.7178 33.9498 17.0342 31.9839 17.0342C30.0179 17.0342 28.3495 17.7178 26.9968 19.085C25.6441 20.4522 24.9677 22.1004 24.9677 24.0295Z"
                        fill="#00A76A"
                      ></path>
                    </svg>
                    <h6 className="mt-3 grey-3">ISO/IEC 27001 Certified</h6>
                  </div>
                  <div className="col-md-4 m-auto">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 20.0344C6 18.9299 6.89543 18.0344 8 18.0344H40C41.1046 18.0344 42 18.9299 42 20.0344V38.0344C42 42.4527 38.4183 46.0344 34 46.0344H14C9.58172 46.0344 6 42.4527 6 38.0344V20.0344Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        d="M11 4.03418C11 2.92961 11.8954 2.03418 13 2.03418H35C36.1046 2.03418 37 2.92961 37 4.03418V16.0342H11V4.03418Z"
                        fill="#00A76A"
                      ></path>
                      <rect
                        x="16"
                        y="7.03418"
                        width="5"
                        height="4"
                        rx="1"
                        stroke="#030405"
                        strokeWidth="2"
                      ></rect>
                      <rect
                        x="27"
                        y="7.03418"
                        width="5"
                        height="4"
                        rx="1"
                        stroke="#030405"
                        strokeWidth="2"
                      ></rect>
                    </svg>
                    <h6 className="mt-3 grey-3">
                      Segregated Multi-Signature Wallets
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 m-auto">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 10.8918C3 9.42414 4.06067 8.16913 5.49224 7.84564C7.70975 7.34455 10.9822 6.46847 13.5 5.21739C14.9878 4.47809 16.4757 3.60785 17.8702 2.79221L17.8702 2.79219C20.4122 1.30537 22.6439 0 24 0C25.3561 0 27.5878 1.30538 30.1298 2.79219C31.5243 3.60784 33.0122 4.47809 34.5 5.21739C37.0178 6.46847 40.2903 7.34455 42.5078 7.84564C43.9393 8.16913 45 9.42414 45 10.8918V20.4059C45 23.0966 44.6334 25.7433 43.9306 28.2712C43.8955 28.2261 43.8601 28.1812 43.8242 28.1364C42.2875 26.2161 41.1946 24.6663 40.3942 23.4507C40.4877 22.6027 40.5352 21.7456 40.5352 20.8832V13.9492C40.5352 12.3385 39.3772 11.001 37.8611 10.6575C36.2145 10.2844 33.8723 9.64997 32.1051 8.7719C31.0213 8.23333 29.9541 7.60908 28.9203 7.00435L28.9203 7.00432C28.4824 6.74818 28.0505 6.49554 27.6258 6.25439C26.9299 5.85918 26.2515 5.49466 25.6338 5.22772C25.0382 4.9704 24.3909 4.75439 23.7852 4.75439C23.1795 4.75439 22.5321 4.9704 21.9366 5.22772C21.3188 5.49466 20.6404 5.85918 19.9445 6.25439C19.5199 6.49547 19.0882 6.74803 18.6504 7.0041L18.65 7.00433C17.6162 7.60906 16.5491 8.23332 15.4652 8.7719C13.6981 9.64997 11.3558 10.2844 9.70918 10.6575C8.19316 11.001 7.03516 12.3385 7.03516 13.9492V20.8793C7.03516 29.2873 11.5495 37.2023 19.1632 40.9231C20.1991 41.4294 21.1453 41.8713 21.9003 42.1888C22.2768 42.347 22.6196 42.4803 22.9099 42.5757C23.1626 42.6587 23.4925 42.7544 23.7895 42.7544C24.0865 42.7544 24.4163 42.6587 24.6689 42.5757C24.7036 42.5643 24.739 42.5524 24.7752 42.5399C25.3823 44.1152 26.3219 45.5254 27.5079 46.6843C25.7722 47.4851 24.4741 48 24.0058 48C23.3484 48 21.054 46.9851 18.2089 45.589C8.6914 40.9186 3 31.0025 3 20.4008V10.8918ZM38.5352 20.4812C38.4445 20.3434 38.3561 20.2153 38.2709 20.1022C38.1412 19.9298 37.945 19.6896 37.6808 19.4821C37.4022 19.2633 36.9346 18.9934 36.3081 18.9937C35.1694 18.9942 34.6039 19.8593 34.4578 20.1061C34.2491 20.4587 34.1261 20.8466 34.0465 21.1603C33.8797 21.8172 33.7806 22.6547 33.7362 23.5645C33.7143 24.0146 33.7049 24.5002 33.7099 25.0143C33.5117 24.928 33.2818 24.8692 33.0156 24.8529C32.5063 24.8217 32.0685 24.9708 31.8239 25.0679C31.5368 25.182 31.2555 25.3328 30.9961 25.4912C30.4741 25.8099 29.9044 26.2433 29.3427 26.7402C28.2259 27.7281 26.9863 29.104 26.1165 30.6289C24.4537 33.5441 24 35.9859 24 38.3527C24 39.1268 24.0755 39.8833 24.2196 40.6152C24.1569 40.6377 24.0985 40.6579 24.0443 40.6757C23.904 40.7218 23.8239 40.741 23.7895 40.749C23.7551 40.741 23.6748 40.7218 23.5343 40.6756C23.3161 40.6039 23.0283 40.4935 22.6755 40.3451C21.9718 40.0493 21.0647 39.6264 20.0413 39.1262C13.1727 35.7695 9.03516 28.5906 9.03516 20.8793V13.9492C9.03516 13.3285 9.4909 12.7577 10.1512 12.608C11.8298 12.2276 14.3651 11.5518 16.3551 10.563C17.5033 9.99245 18.6688 9.31081 19.7255 8.69279L19.7257 8.69267C20.1479 8.44575 20.5527 8.20899 20.9321 7.99353C21.6143 7.60613 22.2156 7.28586 22.7298 7.06367C23.2663 6.83187 23.6034 6.75439 23.7852 6.75439C23.967 6.75439 24.304 6.83187 24.8405 7.06367C25.3547 7.28586 25.956 7.60613 26.6382 7.99353C27.0177 8.20902 27.4226 8.44582 27.8448 8.69278L27.8448 8.69279L27.8449 8.6928C28.9015 9.31081 30.067 9.99246 31.2152 10.563C33.2052 11.5518 35.7405 12.2277 37.4191 12.608C38.0794 12.7577 38.5352 13.3285 38.5352 13.9492V20.4812ZM33.1996 28.5318C33.2109 28.5274 33.216 28.5258 33.2156 28.5263C33.2151 28.5267 33.2083 28.5295 33.1957 28.5334L33.1996 28.5318Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.8647 38.3527H25.8635C25.8635 43.7561 30.2438 48.1363 35.6471 48.1363C41.0504 48.1363 45.4307 43.7561 45.4307 38.3527H45.4285C45.4285 38.3228 45.4197 33.1113 42.3704 29.301C39.6932 25.9557 38.3166 23.6889 37.5055 22.3534C36.8865 21.3341 36.5969 20.8573 36.31 20.8574C35.6083 20.8577 35.1996 25.2485 36.0556 30.0676C36.6844 33.6078 34.7415 34.7203 33.4588 33.9407C32.389 33.2906 32.7045 30.7923 32.9416 28.9136C33.0959 27.692 33.217 26.7324 32.9028 26.7131C32.1054 26.6643 29.2244 28.9437 27.7364 31.5524C26.2484 34.1611 25.8647 36.2796 25.8647 38.3527Z"
                        fill="#00A76A"
                      ></path>
                    </svg>
                    <h6 className="mt-3 grey-3">
                      Extensive Firewall Server Architecture
                    </h6>
                  </div>
                  <div className="col-md-4 m-auto">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.47428 23.4859C5.47428 20.4836 7.90625 18.0491 10.9071 18.0491C13.9079 18.0491 16.3399 20.4836 16.3399 23.4859C16.3399 26.4881 13.9079 28.9226 10.9071 28.9226C7.90625 28.9226 5.47428 26.4881 5.47428 23.4859ZM0.0214844 41.493C0.0214844 35.9975 4.47642 31.5426 9.97185 31.5426H11.8456C14.5923 31.5426 17.0791 32.6556 18.8796 34.4551C15.1292 35.8306 12.2462 39.0061 11.2755 42.9361H1.46456C0.667571 42.9361 0.0214844 42.29 0.0214844 41.493ZM36.7225 42.9362H46.5338C47.3308 42.9362 47.9769 42.2901 47.9769 41.4931C47.9769 35.9977 43.522 31.5427 38.0266 31.5427H36.1528C33.406 31.5427 30.9192 32.6557 29.1187 34.4552C32.869 35.8308 35.7518 39.0063 36.7225 42.9362ZM31.6552 23.486C31.6552 20.4837 34.0872 18.0492 37.088 18.0492C40.0889 18.0492 42.5208 20.4837 42.5208 23.486C42.5208 26.4882 40.0889 28.9227 37.088 28.9227C34.0872 28.9227 31.6552 26.4882 31.6552 23.486Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5661 27.8525C18.5661 24.8503 20.998 22.4158 23.9989 22.4158C26.9997 22.4158 29.4317 24.8503 29.4317 27.8525C29.4317 30.8548 26.9997 33.2893 23.9989 33.2893C20.998 33.2893 18.5661 30.8548 18.5661 27.8525ZM13.1133 45.8597C13.1133 40.3643 17.5682 35.9093 23.0637 35.9093H24.9374C30.4329 35.9093 34.8878 40.3643 34.8878 45.8597C34.8878 46.6567 34.2417 47.3028 33.4447 47.3028H14.5564C13.7594 47.3028 13.1133 46.6567 13.1133 45.8597Z"
                        fill="#C2EADB"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.4627 1.82428L22.4628 1.82428L22.4628 1.82426C22.6487 1.71545 22.8239 1.61289 22.9834 1.52227C23.2875 1.34941 23.5378 1.21688 23.7415 1.12879C23.8952 1.06235 23.9753 1.04251 24 1.03662C24.0247 1.04251 24.1048 1.06235 24.2585 1.12879C24.4622 1.21688 24.7125 1.34941 25.0166 1.52227C25.1761 1.61289 25.3513 1.71547 25.5372 1.82428C26.0194 2.10647 26.5732 2.43064 27.1094 2.69729C28.0984 3.18913 29.3425 3.51134 30.1094 3.68218V7.58108C30.1094 10.4278 28.5759 13.047 26.0756 14.3074C25.4746 14.6103 24.927 14.8759 24.5032 15.0637C24.2905 15.158 24.1227 15.2266 24.0019 15.2698C23.881 15.2266 23.713 15.1579 23.4999 15.0635C23.0758 14.8756 22.5277 14.6099 21.9262 14.3069C19.4249 13.0467 17.8906 10.427 17.8906 7.57954V3.68218C18.6575 3.51134 19.9016 3.18913 20.8906 2.69729C21.4268 2.43064 21.9806 2.10648 22.4627 1.82428Z"
                        fill="#00A76A"
                      ></path>
                    </svg>
                    <h6 className="mt-3 grey-3">
                      Community-Driven Vulnerability Disclosure
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="margin-row card bg-blue p-3 mt-5">
              <div className="row">
                <div className="col-md-4 my-auto">
                  <h4 className="text-white">
                    <span className="bdb">Licensed & Regulated</span> <br />
                    Digital Assets Institution
                  </h4>
                </div>
                <div className="col-md-4 text-center my-auto">
                  <img
                    src="assets/img/security/institution-stars.svg"
                    className="img-fluid"
                    alt="security"
                  />
                </div>
                <div className="col-md-4 my-auto">
                  <Link
                    href="/LicensesandRegistrations"
                    className="text-white float-end text-end"
                  >
                    <>
                    What does LIQD being
                    <br />
                    licensed and regulated mean?
                    </>
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="row margin-row mb-5">
            <div className="col-md-6 my-auto">
              <h1 className="black">$375 Million Insurance</h1>
              <p className="font-1-5 dark-grey tnr">
                LIQD partners with the foremost providers of security in the
                blockchain space, including BitGo and Ledger Vault, among
                others. Collectively, they carry $375M in insurance protections
                for digital assets held on the LIQD platform via the most
                prestigious syndicates of underwriters.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-security-shield.svg"
                alt="$375 Million Insurance"
                className="float-end w-75"
              />
            </div>
          </div>
          <div className="row margin-row mb-5">
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-security-lock-armanino.svg"
                alt="Real-Time Reserves Audit"
                className="w-75"
              />
            </div>
            <div className="col-md-6 my-auto">
              <h1 className="black">Real-Time Reserves Audit</h1>
              <p className="font-1-5 dark-grey tnr">
                To increase transparency, LIQD is working with Armanino to
                conduct a Proof of Reserves assessment and provide real-time
                attestations over the company’s custodial holdings. With this
                pioneering move for the crypto lending space, we give you the
                ultimate peace of mind that LIQD is able to meet client
                obligations at all times.
              </p>
            </div>
          </div>
          <div className="row margin-row mb-5">
            <div className="col-md-6 my-auto">
              <h1 className="black">
                Military-Grade Storage,
                <br />
                Full Flexibility
              </h1>
              <p className="font-1-5 dark-grey tnr">
                Your assets are stored in military-grade Class III vaults while
                our partners allow for instant access to your funds and full
                independence from third-party providers.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-wallet-coins.svg"
                alt="Military-Grade Storage, Full Flexibility"
                className="float-end w-75"
              />
            </div>
          </div>
          <div className="row margin-row">
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-profile-jumio-content.svg"
                alt="Regulatory Compliance & Anti-Money Laundering"
                className="w-75"
              />
            </div>
            <div className="col-md-6 my-auto">
              <h1 className="black">
                Regulatory Compliance &<br />
                Anti-Money Laundering
              </h1>
              <p className="font-1-5 dark-grey tnr">
                LIQD uses Jumio to adhere to the strictest KYC and AML global
                compliance standards. Jumio is also trusted by Microsoft,
                Oracle, Monzo, and HSBC.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-blue py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  src="assets/img/security/security-996x.png"
                  alt="Security - LIQD"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 s-checklist">
                <ul className="text-white pt-5">
                  <li className="pb-2">Live Automated Platform</li>
                  <li className="pb-2">
                    Full Blockchain-Based Smart Contract Security
                  </li>
                  <li>Extensive Firewall Server Architecture</li>
                </ul>
              </div>
              <div className="col-md-6 s-checklist">
                <ul className="text-white pt-5">
                  <li className="pb-2">Fully Audited Smart Contracts</li>
                  <li className="pb-2">Military-Grade 256-bit Encryption</li>
                  <li>
                    Regular Third-Party Penetration Testing and Platform
                    Assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="row margin-row mb-5">
            <div className="col-12 pb-5 mb-5 text-center">
              <h1 className="black">More Security Features</h1>
            </div>
            <div className="col-md-6 my-auto">
              <h1 className="black">
                Cryptocurrency Security Standard Level 3
              </h1>
              <p className="font-1-5 dark-grey tnr">
                To underpin the robustness of the enterprise, LIQD is making use
                of BitGo’s Enterprise Solution which incorporates the
                Cryptocurrency Security Standard Level 3. The CCSS Level 3
                requires multiple actors for all-critical actions, as advanced
                authentication mechanisms are employed to ensure the
                authenticity of data, while assets are distributed
                geographically and organizationally.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-ccss.svg"
                alt="Cryptocurrency Security Standard Level 3"
                className="float-end w-75"
              />
            </div>
          </div>
          <div className="row margin-row mb-5">
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-data-lock.svg"
                alt="Data Protection and Confidentiality"
                className="w-75"
              />
            </div>
            <div className="col-md-6 my-auto">
              <h1 className="black">Data Protection and Confidentiality</h1>
              <p className="font-1-5 dark-grey tnr">
                Your personal information is contained behind secured networks
                and is only accessible to a limited number of persons who are
                required to keep the information confidential. Аll
                sensitive/credit information you supply is encrypted via Secure
                Socket Layer (SSL) technology. LIQD implements a variety of
                security measures when users enter, submit, or access their
                information.
              </p>
            </div>
          </div>
          <div className="row margin-row mb-5">
            <div className="col-md-6 my-auto">
              <h1 className="black">
                Accredited Information Security Management Systems
              </h1>
              <p className="font-1-5 dark-grey tnr">
                ISO/IEC 27001 guarantees that LIQD’s security infrastructure is
                of the highest standard, thus ensuring the safety of the
                enterprise and minimizing risks for all clients and investors.
                Being ISO/IEC 27001 certified, LIQD is now raising the bar for
                the entire blockchain space, by utilizing the most rigorous
                security policies, impeccable risk assessment, data protection,
                and state-of-the-art cybersecurity.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-iso.svg"
                alt="Accredited Information Security Management Systems"
                className="float-end w-75"
              />
            </div>
          </div>
          <div className="row margin-row">
            <div className="col-md-6">
              <img
                src="assets/img/security/illustration-profile-jumio-content.svg"
                alt="Regulatory Compliance & Anti-Money Laundering"
                className="w-75"
              />
            </div>
            <div className="col-md-6 my-auto">
              <h1 className="black">
                Regulatory Compliance &<br />
                Anti-Money Laundering
              </h1>
              <p className="font-1-5 dark-grey tnr">
                LIQD uses Jumio to adhere to the strictest KYC and AML global
                compliance standards. Jumio is also trusted by Microsoft,
                Oracle, Monzo, and HSBC.
              </p>
            </div>
          </div>
        </section>
        <section className="py-5 bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto ps-5 my-auto text-white">
                <h1>
                  Unleash the <span className="tnb">Power of Your Crypto</span>
                </h1>
                <p className=" tnr">
                  Open your LIQD account today and start buying, selling, and
                  exchanging crypto hassle-free.
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
                  alt="Create Account"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }


export default Security;
