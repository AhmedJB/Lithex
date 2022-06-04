import React, { Component } from "react";
import HeaderMark from "./HeaderMark";
import FooterMark from "./FooterMark";
import Link from "next/link"

function Prime(props) {
 
    return (
      <>
        <HeaderMark />
        <section className="banner bg-prime vh-100">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-12 text-center mx-auto">
                <span className="badge bg-dark py-2 px-3 mb-2 prime-text tnr small rounded-pill">
                  LIQD PRIME
                </span>
                <h1 className="font-4 tnb prime-text">
                  Prime Brokerage
                  <br />
                  Reinvented for the Crypto Age
                </h1>
                <p className="font-1-5 prime-text tnr">
                  We give you all the necessary tools to trade, borrow, lend,
                  and
                  <br />
                  securely store digital assets.
                </p>
                <Link
                  href="/app/login"
                  
                >
                  <a className="btn btn-bg-register text-1-25 text-center mb-2">
                  Get Started
                  <i className="fa-solid fa-angle-right ms-2"></i>
                  </a>
                  
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 text-center">
          <div className="container-fluid">
            <div className="row margin-row">
              <div className="col-md-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2"
                >
                  <rect
                    width="10"
                    height="20"
                    rx="0.974987"
                    transform="matrix(-1 0 0 1 36.7098 18.3145)"
                    fill="#F6E3D0"
                  ></rect>
                  <rect
                    width="10"
                    height="10"
                    rx="1"
                    transform="matrix(-1 0 0 1 13.4384 28.3145)"
                    fill="#F6E3D0"
                  ></rect>
                  <rect
                    width="10"
                    height="15"
                    rx="0.974987"
                    transform="matrix(-1 0 0 1 25.0741 23.3145)"
                    fill="#F6E3D0"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.91593 23.65C3.27041 22.9938 3.27907 21.9385 3.93526 21.293L15.2613 10.1513C15.9094 9.51366 16.949 9.51316 17.5978 10.1502L21.8286 14.3042L33.8599 2.1796C34.5082 1.52622 35.5635 1.52214 36.2169 2.17049C36.8703 2.81885 36.8743 3.87412 36.226 4.5275L23.027 17.829C22.381 18.4799 21.3306 18.4867 20.6762 17.8443L16.4312 13.6762L6.27287 23.6693C5.61668 24.3148 4.56144 24.3062 3.91593 23.65Z"
                    fill="#E1A163"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.6243 3.35356C27.6243 2.43308 28.3705 1.68689 29.291 1.68689L35.0431 1.68689C35.9635 1.68689 36.7097 2.43308 36.7097 3.35356L36.7097 9.08591C36.7097 10.0064 35.9635 10.7526 35.0431 10.7526C34.1226 10.7526 33.3764 10.0064 33.3764 9.08591L33.3764 5.02022L29.291 5.02022C28.3705 5.02022 27.6243 4.27403 27.6243 3.35356Z"
                    fill="#E1A163"
                  ></path>
                </svg>
                <p className="tnr prime-text">
                  Deep liquidity
                  <br />
                  pool
                </p>
              </div>
              <div className="col-md-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.3531 3.67579C25.848 2.39136 23.0086 1.66663 20 1.66663C9.87477 1.66663 1.66666 9.87474 1.66666 20C1.66666 30.1252 9.87477 38.3333 20 38.3333C30.1252 38.3333 38.3333 30.1252 38.3333 20C38.3333 17.0672 37.6447 14.2952 36.4203 11.837L35.3183 12.9568C34.615 13.654 33.6381 14.0023 32.6523 13.9074L31.8216 13.8274C32.7872 15.673 33.3333 17.7727 33.3333 20C33.3333 27.3638 27.3638 33.3333 20 33.3333C12.6362 33.3333 6.66666 27.3638 6.66666 20C6.66666 12.6362 12.6362 6.66663 20 6.66663C22.2861 6.66663 24.4379 7.24198 26.3183 8.25579L26.25 7.49996C26.161 6.51531 26.5137 5.54195 27.2128 4.84286L28.3531 3.67579ZM25.0175 10.3961C23.5174 9.61079 21.8106 9.16663 20 9.16663C14.0169 9.16663 9.16666 14.0169 9.16666 20C9.16666 25.983 14.0169 30.8333 20 30.8333C25.9831 30.8333 30.8333 25.983 30.8333 20C30.8333 18.2569 30.4217 16.6101 29.6903 15.1512L25.7577 19.0582C25.8075 19.3648 25.8333 19.6793 25.8333 20C25.8333 23.2216 23.2217 25.8333 20 25.8333C16.7783 25.8333 14.1667 23.2216 14.1667 20C14.1667 16.7783 16.7783 14.1666 20 14.1666C20.3814 14.1666 20.7542 14.2032 21.1152 14.2731L25.0175 10.3961Z"
                    fill="#F6E3D0"
                  ></path>
                  <circle cx="20" cy="20" r="3.33333" fill="#F6E3D0"></circle>
                  <path
                    d="M34.7253 0.522193C34.6935 0.170262 34.2656 0.0152083 34.0157 0.265076L28.4959 5.85634C28.1464 6.20589 27.97 6.69257 28.0145 7.18489L28.2231 9.49185L18.817 18.9057C18.1686 19.5591 18.1727 20.6143 18.826 21.2627C19.4794 21.9111 20.5346 21.9071 21.183 21.2537L30.5715 11.8576L32.9167 12.0834C33.4096 12.1308 33.898 11.9567 34.2497 11.6081L39.7721 6.05447C40.0216 5.80721 39.872 5.38117 39.5227 5.34419L35.119 4.87791L34.7253 0.522193Z"
                    fill="#E1A163"
                  ></path>
                </svg>
                <p className="tnr prime-text">
                  Cost-effective
                  <br />
                  execution
                </p>
              </div>
              <div className="col-md-3">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.24337 6.55674C4.0504 6.82631 3.1665 7.87216 3.1665 9.09521V17.0194C3.1665 25.8541 7.90934 34.1175 15.8406 38.0095C18.2115 39.1729 20.1235 40.0187 20.6714 40.0187C21.219 40.0187 23.1291 39.1734 25.4977 38.0106C33.4262 34.118 38.1665 25.8561 38.1665 17.0236V9.09521C38.1665 7.87216 37.2826 6.82631 36.0896 6.55674C34.2417 6.13916 31.5147 5.4091 29.4165 4.36653C28.1766 3.75045 26.9368 3.02524 25.7747 2.34553C23.6564 1.10652 21.7966 0.0187073 20.6665 0.0187073C19.5364 0.0187073 17.6766 1.10652 15.5583 2.34554C14.3962 3.02524 13.1564 3.75045 11.9165 4.36653C9.81835 5.4091 7.09129 6.13916 5.24337 6.55674ZM26.3286 17.2378C26.644 16.9027 26.628 16.3753 26.2929 16.0598C25.9577 15.7444 25.4303 15.7604 25.1149 16.0955L19.0001 22.5925L16.2558 19.8481C15.9303 19.5227 15.4027 19.5227 15.0772 19.8481C14.7518 20.1736 14.7518 20.7012 15.0772 21.0266L18.2458 24.1952C18.6785 24.6279 19.3833 24.6172 19.8027 24.1716L26.3286 17.2378Z"
                    fill="#F6E3D0"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6663 30.8333C26.6494 30.8333 31.4997 25.9831 31.4997 20C31.4997 14.0169 26.6494 9.16666 20.6663 9.16666C14.6833 9.16666 9.83301 14.0169 9.83301 20C9.83301 25.9831 14.6833 30.8333 20.6663 30.8333ZM26.3284 17.2378C26.6438 16.9027 26.6279 16.3753 26.2927 16.0598C25.9576 15.7444 25.4302 15.7604 25.1148 16.0955L19 22.5925L16.2556 19.8481C15.9302 19.5227 15.4025 19.5227 15.0771 19.8481C14.7516 20.1736 14.7516 20.7012 15.0771 21.0266L18.2456 24.1952C18.6783 24.6279 19.3831 24.6172 19.8025 24.1716L26.3284 17.2378Z"
                    fill="#E1A163"
                  ></path>
                </svg>
                <p className="tnr prime-text">
                  Top-tier custody by BitGo,
                  <br />
                  Fireblocks & Ledger Vault
                </p>
              </div>
              <div className="col-md-3">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.32361 6.44274C3.89494 6.7788 2.8335 8.03284 2.8335 9.5005V14.1362C2.8335 24.7379 8.4064 34.9188 18.1 39.2119C19.2023 39.7001 20.0121 40 20.3383 40C20.6643 40 21.4728 39.7006 22.5733 39.2131C32.2638 34.92 37.8335 24.7403 37.8335 14.1414V9.5005C37.8335 8.03284 36.7721 6.7788 35.3434 6.44274C33.5184 6.01346 31.0302 5.31515 29.0835 4.34783C27.8436 3.73174 26.6038 3.00653 25.4417 2.32683C23.3234 1.08781 21.4636 0 20.3335 0C19.2034 0 17.3436 1.08781 15.2253 2.32683C14.0632 3.00653 12.8234 3.73174 11.5835 4.34783C9.63676 5.31515 7.14861 6.01346 5.32361 6.44274ZM20.3331 17.0833C20.7933 17.0833 21.1664 17.4564 21.1664 17.9167V18.3334L22.4169 18.3334C22.8771 18.3334 23.2502 18.7065 23.2502 19.1667C23.2502 19.627 22.8771 20.0001 22.4169 20.0001L19.5001 20.0001C19.0399 20.0001 18.6668 20.3731 18.6668 20.8334C18.6668 21.2936 19.0399 21.6667 19.5001 21.6666L21.167 21.6666C22.5479 21.6666 23.6672 22.7861 23.6671 24.1669C23.6669 25.5476 22.5471 26.6667 21.1664 26.6667L21.1664 27.0833C21.1664 27.5436 20.7934 27.9167 20.3331 27.9167C19.8729 27.9167 19.4998 27.5436 19.4998 27.0834L19.4998 26.6667H18.2502C17.79 26.6667 17.4169 26.2936 17.4169 25.8334C17.4169 25.3732 17.79 25.0001 18.2502 25.0001H21.167C21.6273 25.0001 22.0004 24.627 22.0004 24.1668C22.0005 23.7065 21.6273 23.3333 21.167 23.3333L19.5001 23.3333C18.1194 23.3333 17.0002 22.214 17.0002 20.8333C17.0002 19.4528 18.1192 18.3336 19.4997 18.3334V17.9167C19.4997 17.4564 19.8728 17.0833 20.3331 17.0833Z"
                    fill="#F6E3D0"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3337 6.66666C16.6518 6.66666 13.667 9.65142 13.667 13.3333V14.2717C12.2293 14.6417 11.167 15.9468 11.167 17.5V27.5C11.167 29.3409 12.6594 30.8333 14.5003 30.8333H26.167C28.0079 30.8333 29.5003 29.3409 29.5003 27.5V17.5C29.5003 15.9468 28.438 14.6417 27.0003 14.2717V13.3333C27.0003 9.65142 24.0156 6.66666 20.3337 6.66666ZM23.667 13.3333V14.1667H17.0003V13.3333C17.0003 11.4924 18.4927 9.99999 20.3337 9.99999C22.1746 9.99999 23.667 11.4924 23.667 13.3333ZM20.3335 17.0833C20.7938 17.0833 21.1669 17.4564 21.1669 17.9166L21.1669 18.3334L22.4166 18.3334C22.8769 18.3334 23.25 18.7065 23.25 19.1667C23.25 19.6269 22.8769 20 22.4166 20L19.4999 20C19.0396 20 18.6666 20.3731 18.6666 20.8333C18.6666 21.2935 19.0396 21.6666 19.4999 21.6666L21.1668 21.6666C22.5476 21.6666 23.667 22.7861 23.6668 24.1669C23.6667 25.5475 22.5475 26.6666 21.1669 26.6667L21.1669 27.0833C21.1669 27.5435 20.7938 27.9166 20.3336 27.9166C19.8734 27.9167 19.5002 27.5436 19.5002 27.0833L19.5002 26.6667H18.25C17.7897 26.6667 17.4166 26.2936 17.4166 25.8334C17.4166 25.3731 17.7897 25 18.25 25H21.1668C21.627 25 22.0001 24.627 22.0001 24.1667C22.0002 23.7064 21.6271 23.3333 21.1668 23.3333L19.4999 23.3333C18.1192 23.3333 16.9999 22.214 16.9999 20.8333C16.9999 19.4526 18.1195 18.3334 19.5002 18.3334L19.5002 17.9166C19.5002 17.4564 19.8733 17.0833 20.3335 17.0833Z"
                    fill="#E1A163"
                  ></path>
                </svg>
                <p className="tnr prime-text">
                  $375M insurance via
                  <br />
                  Lloyd's and Marsh & Arch
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text">
          <div className="container">
            <h2 className="text-center mb-5">
              Best Execution Price Using Deep & Diversified Liquidity
            </h2>
            <div className="row mb-5">
              <div className="col-md-6">
                <img
                  src="/assets/img/prime/prime-trading-visual.png"
                  className="img-fluid"
                  alt="prime-trading-visual"
                />
              </div>
              <div className="col-md-6 my-auto p-checklist">
                <h2>Trading</h2>
                <p>
                  LIQD Prime's best-in-class infrastructure helps you execute
                  large orders smoothly and reliably, with competitive trading
                  fees.
                </p>
                <ul>
                  <li className="mb-2">
                    Get cost-effective execution with LIQD's Smart Routing
                    System.
                  </li>
                  <li className="mb-2">
                    Access diversified liquidity, aggregated from the world's
                    leading exchanges, liquidity providers, and selected market
                    makers.
                  </li>
                  <li className="mb-2">
                    Trade directly through API calls or use our intuitive
                    trading user interface.
                  </li>
                  <li>
                    Have access to our 24/7 OTC desk for high-touch executions
                    of spot and derivatives instruments.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6 my-auto p-checklist">
                <h2>Custody</h2>
                <p>
                  Our custody framework combines industry-leading solutions from
                  the best in the space: BitGo, Fireblocks, and Ledger Vault.
                </p>
                <ul>
                  <li className="mb-4">
                    All your digital assets are stored in military-grade Class
                    III vaults.
                  </li>
                  <li className="mb-4">
                    Get instant access to your funds at all times for trading.
                  </li>
                  <li className="mb-4">
                    Stay protected with our custodians' comprehensive $375M
                    insurance coverage.
                  </li>
                  <li>
                    Industry-first, real-time audit of LIQD's custodial holdings
                    by Armanino LLP.
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/img/prime/prime-custody-visual.png"
                  className="img-fluid"
                  alt="prime-custody-visual"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img
                  src="/assets/img/prime/prime-landing-visual.png"
                  className="img-fluid"
                  alt="prime-landing-visual"
                />
              </div>
              <div className="col-md-6 my-auto p-checklist">
                <h2>Lending</h2>
                <p>
                  Whether you are looking for margin trading or an OTC loan, our
                  top-tier lending services will provide you with liquidity on
                  demand.
                </p>
                <ul>
                  <li className="mb-2">
                    Get access to institutional financing options for
                    cryptocurrencies, stablecoins, and fiat.
                  </li>
                  <li className="mb-2">
                    Scale your trading strategy while preserving the value of
                    your crypto assets.
                  </li>
                  <li className="mb-2">
                    Add extra leverage to your portfolio by borrowing at the
                    best market rates.
                  </li>
                  <li>
                    All collateral loans have flexible duration and are powered
                    by our deep liquidity pool.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text">
          <div className="container">
            <div className="row">
              <h2 className="text-center">Our Clients</h2>
              <p className="text-center mb-5">
                We created LIQD Prime to give you an end-to-end crypto
                brokerage,
                <br />
                combining deep liquidity, margin trading, and secure custody.
              </p>
              <div className="col-md-4">
                <div className="card p-card">
                  <img
                    src="/assets/img/prime/prime-inst-investors.jpg"
                    className="card-img-top"
                    alt="Institutions"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Institutions</h5>
                    <p className="card-text tnr">
                      LIQD Prime provides institutions with a full suite of
                      financial services for trading, borrowing, lending, and
                      securely storing digital currencies. Onboard once and
                      trade on multiple spot and derivatives venues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-card">
                  <img
                    src="/assets/img/prime/prime-corporates.jpg"
                    className="card-img-top"
                    alt="Corporates"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Corporates</h5>
                    <p className="card-text tnr">
                      We give corporates the tools to beat inflation and
                      diversify their reserves into digital assets such as
                      Bitcoin or Ethereum. Simply share your goal with us and we
                      will provide you with a variety of financing options to
                      help you reach your goal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-card">
                  <img
                    src="/assets/img/prime/prime-private.jpg"
                    className="card-img-top"
                    alt="Private Clients"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Private Clients</h5>
                    <p className="card-text tnr">
                      We provide white-glove services to high-net-worth
                      individuals and family offices looking to build a crypto
                      portfolio and create new yield opportunities. Manage your
                      operations from a single place with a dedicated account
                      manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text">
          <div className="container">
            <div className="row">
              <h2 className="text-center">Why LIQD Prime</h2>
              <p className="text-center mb-5">
                Bespoke services, unlimited capabilities, and safety, combined
                with
                <br />a personal touch.
              </p>
              <div className="col-md-12 mb-4">
                <div className="card p-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-5 my-auto">
                        <img
                          src="/assets/img/prime/3d-security-gray.png"
                          className="card-img-top img-fluid w-80"
                          alt="Military-Grade Security"
                        />
                      </div>
                      <div className="col-md-7 my-auto">
                        <h3 className="card-title tnm">
                          Military-Grade Security
                        </h3>
                        <p className="card-text tnr">
                          Our platform is equipped with a top-tier security
                          infrastructure
                          <br />
                          designed to ensure maximum protection of your assets
                          at all times.
                          <br />
                          In addition, all custodial assets are insured for up
                          to $375M via
                          <br />
                          Lloyd's of London and Marsh & Arch.
                        </p>
                        <Link
                          
                          href="/security"
                        >
                          <a className="text-white tnr text-1-25">
                          Learn More
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ms-2"
                          >
                            <rect
                              width="30"
                              height="30"
                              rx="15"
                              fill="#E1A163"
                            ></rect>
                            <path
                              d="M14.1381 9.85233L14.7212 9.29464C14.8395 9.17634 14.9831 9.11719 15.1521 9.11719C15.3211 9.11719 15.4647 9.17634 15.583 9.29464L20.5008 14.2124C20.6191 14.3307 20.6783 14.4744 20.6783 14.6434C20.6783 14.8124 20.6191 14.956 20.5008 15.0743L15.583 19.9921C15.4647 20.1104 15.3211 20.1696 15.1521 20.1696C14.9831 20.1696 14.8395 20.1104 14.7212 19.9921L14.1381 19.4344C14.0198 19.3162 13.9607 19.1725 13.9607 19.0035C13.9776 18.8345 14.0452 18.6909 14.1635 18.5726L17.2054 15.6574H9.93009C9.76109 15.6574 9.61745 15.5982 9.49915 15.4799C9.38085 15.3616 9.3217 15.218 9.3217 15.049V14.2378C9.3217 14.0688 9.38085 13.9252 9.49915 13.8069C9.61745 13.6886 9.76109 13.6294 9.93009 13.6294H17.2054L14.1635 10.7142C14.0452 10.5959 13.9776 10.4523 13.9607 10.2833C13.9607 10.1143 14.0198 9.97062 14.1381 9.85233Z"
                              fill="#14171A"
                            ></path>
                          </svg>
                          </a>
                          
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="card p-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-7 my-auto">
                        <h3 className="card-title tnm">
                          Full Suite of Services
                        </h3>
                        <p className="card-text tnr">
                          Manage all your financial needs – trading, borrowing,
                          custody, and
                          <br />
                          lending - with a single institution. Go through the
                          onboarding
                          <br />
                          process just once and get access to the broader crypto
                          <br />
                          marketplace through a unified interface.
                        </p>
                      </div>
                      <div className="col-md-5 my-auto">
                        <img
                          src="/assets/img/prime/3d-all-in-one-gray.png"
                          className="card-img-top img-fluid w-80"
                          alt="Full Suite of Services"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-card">
                  <div className="card-body p-5">
                    <h3 className="card-title tnm">
                      Bespoke Lending Solutions
                    </h3>
                    <p className="card-text tnr">
                      LIQD's large retail balance and our strong institutional
                      relationships allow us to accommodate any borrowing needs,
                      regardless of the size and duration.
                    </p>
                    <img
                      src="/assets/img/prime/3d-liquidity-gray.png"
                      className="card-img-top img-fluid w-80"
                      alt="Bespoke Lending Solutions"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-card">
                  <div className="card-body p-5">
                    <h3 className="card-title tnm">Cost-Effective Execution</h3>
                    <p className="card-text tnr">
                      LIQD aggregates liquidity from the biggest spot and
                      derivatives trading venues. Our Smart Order Routing engine
                      provides you with the most cost-effective execution
                      available on the market.
                    </p>
                    <img
                      src="/assets/img/prime/3d-cost-effective.png"
                      className="card-img-top img-fluid w-80"
                      alt="Cost-Effective Execution"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text">
          <div className="container">
            <div className="row">
              <div className="col-md-6 prime-border m-auto">
                <h2 className="tnm mb-4">
                  LIQD is the World's Leading Digital Assets Institution
                </h2>
                <Link  href="/aboutus">
                  <a  className="tnr prime-text font- 1">
                  More About LIQD
                  <i className="fa-solid fa-arrow-right ms-2 prime-link"></i>
                  </a>
                  
                </Link>
              </div>
              <div className="col-md-6 m-auto px-4">
                <p className="tnr">
                  We are a trusted partner for leading trading firms, hedge
                  funds, family offices, and OTC desks. Combining top-tier
                  custody with large-scale lending and financing, deep
                  liquidity, and efficient low latency execution, LIQD can help
                  you scale and execute a multitude of trading or investment
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card p-card">
                  <div className="card-body p-4">
                    <img
                      src="/assets/img/prime/icon-quote-gold.svg"
                      className="img-fluid"
                      alt="Quote"
                    />
                    <p className="card-text tnr pt-2 pb-3">
                      The idea of crypto lending is one of the most
                      revolutionary things that happened because of the wide
                      adoption and popularity of cryptocurrencies (...) LIQD is
                      considered to be the first platform to provide instant
                      crypto backed loans is adding XRP as the newest collateral
                      option on their platform.
                    </p>
                    <img
                      src="/assets/img/prime/logo-reuters.svg"
                      className="img-fluid filter-invert"
                      alt="Bloomberg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-card">
                  <div className="card-body p-4">
                    <img
                      src="/assets/img/prime/icon-quote-gold.svg"
                      className="img-fluid"
                      alt="Quote"
                    />
                    <p className="card-text tnr pt-2 pb-3">
                      LIQD, which is backed by TechCrunch founder Michael
                      Arrington, has introduced several initiatives over the
                      last few months and recently became the first project to
                      accept XRP as collateral. The company which functions as a
                      bridge between the crypto world and the financial world.
                    </p>
                    <img
                      src="/assets/img/prime/forbes.svg"
                      className="img-fluid filter-invert"
                      alt="Forbes"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card p-card">
                  <div className="card-body p-4">
                    <img
                      src="/assets/img/prime/icon-quote-gold.svg"
                      className="img-fluid"
                      alt="Quote"
                    />
                    <p className="card-text tnr pt-2 pb-3">
                      This is not a startup this is a team that has a successful
                      track record of over 10 years extending over $120 million
                      in credit...The group recently raised over $50 million for
                      LIQD, its crypto lending venture. All money will be loaned
                      out to so-called hodlers, or those who intend to hold
                      digital currency long-term.
                    </p>
                    <img
                      src="/assets/img/prime/american-banker.svg"
                      className="img-fluid filter-invert"
                      alt="American Banker"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-card">
                  <div className="card-body p-4">
                    <img
                      src="/assets/img/prime/icon-quote-gold.svg"
                      className="img-fluid"
                      alt="Quote"
                    />
                    <p className="card-text tnr pt-2 pb-3">
                      LIQD gives clients a tool that billionaires have had for
                      years.
                    </p>
                    <img
                      src="/assets/img/prime/bloomberg.svg"
                      className="img-fluid filter-invert"
                      alt="Reuterus"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-card">
                  <div className="card-body p-4">
                    <img
                      src="/assets/img/prime/icon-quote-gold.svg"
                      className="img-fluid"
                      alt="Quote"
                    />
                    <p className="card-text tnr pt-2 pb-3">
                      Since the launch of LIQDnomics, LIQD price has seen an
                      increase of more than 480% with its market capitalization
                      increasing from $68 million to its current value of $383
                      million over a three-month period.
                    </p>
                    <img
                      src="/assets/img/prime/logo-cointelegraph.svg"
                      className="img-fluid filter-invert"
                      alt="Cointelegraph"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-card">
                  <div className="card-body p-4">
                    <img
                      src="/assets/img/prime/icon-quote-gold.svg"
                      className="img-fluid"
                      alt="Quote"
                    />
                    <p className="card-text tnr pt-2 pb-3">
                      LIQD offered to provide immediate funding of up to $2
                      million per customer to SALT Lending's backlog of loan
                      applicants.
                    </p>
                    <img
                      src="/assets/img/prime/logo-cnbc-vertical.svg"
                      className="img-fluid filter-invert"
                      alt="CNBC"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="tnr">
                  We've teamed up with the world's brightest, so we can provide
                  you with the best-in-class services you deserve.
                </h3>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-bakkt-white.svg"
                  alt="Bakkt"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-bitgo-white.svg"
                  alt="Bitgo"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-ledger-white.svg"
                  alt="Ledger"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-paxos-white.svg"
                  alt="Paxos"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-blockchain-white.svg"
                  alt="Blockchain"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-circle-white.svg"
                  alt="Circle"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-fireblocks-whie.svg"
                  alt="FireBlocks"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-bcb-group-white.svg"
                  alt="BCB Group"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-terra-white.svg"
                  alt="Terra"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-brink-white-400x.webp"
                  alt="Brink"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-nomics-white.svg"
                  alt="Nomics"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-brave-white.svg"
                  alt="Brave"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-securitize-white.svg"
                  alt="securitize"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3 mb-5 m-auto">
                <img
                  src="/assets/img/prime/logo/logo-jumio-white.svg"
                  alt="Jumio"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color-prime py-5 prime-text">
          <div className="container">
            <div className="card p-card p-5">
              <div className="row">
                <div className="col-6 m-auto">
                  <h2 className="tnm">Let's Get Started</h2>
                  <p className="tnr font-1-5">
                    Just fill out the form below, and we'll get back to you
                    within 24 hours.
                  </p>
                </div>
                <div className="col-6 m-auto">
                  <img
                    src="/assets/img/prime/prime-form-visual.jpg"
                    alt="prime-form-visual"
                    className="img-fluid"
                  />
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label font-1">
                        First Name<span className="prime-link">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control input-prime"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label font-1">
                        Last Name<span className="prime-link">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control input-prime"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label font-1">
                        What are you interested in?
                        <span className="prime-link">*</span>
                      </label>
                      <select className="form-select select-prime">
                        <option value=""></option>
                        <option value="Spot trading">Spot Trading</option>
                        <option value="Margin trading">Margin trading</option>
                        <option value="Derivatives trading">
                          Derivatives trading
                        </option>
                        <option value="Custody">Custody</option>
                        <option value="Borrowing from LIQD">
                          Borrowing from LIQD
                        </option>
                        <option value="Lending from LIQD">
                          Lending from LIQD
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label font-1">
                            Phone<span className="prime-link">*</span>
                          </label>
                          <input
                            type="tel"
                            className="form-control input-prime"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label font-1">
                            Email<span className="prime-link">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control input-prime"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label font-1">
                            Country<span className="prime-link">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control input-prime"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label font-1">
                            Who are you?<span className="prime-link">*</span>
                          </label>
                          <select className="form-select select-prime">
                            <option value=""></option>
                            <option value="Individual with assets < $5,000,000">
                              Individual with assets &lt; $5,000,000
                            </option>
                            <option value="Individual with assets > $5,000,000">
                              Individual with assets &gt; $5,000,000
                            </option>
                            <option value="Institution with AUM > $15,000,000">
                              Institution with AUM &gt; $15,000,000
                            </option>
                            <option value="Institution with AUM < $15,000,000">
                              Institution with AUM &lt; $15,000,000
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label font-1">
                        How can we help you?
                        <span className="prime-link">*</span>
                      </label>
                      <textarea
                        class="form-control text-area-prime"
                        rows="9"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row text-center mt-5">
                  <div className="col-md-12">
                    <button className="btn btn-lg btn-bg-register">
                      Get in Touch <i class="fa-solid fa-angle-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <FooterMark />
      </>
    );
  }


export default Prime;
