import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import HeaderMark from "./HeaderMark";
import FooterMark from "./FooterMark";

export class Home extends Component {
  render() {
    return (
      <>
      <HeaderMark />
      
        <section className="banner bg-light">
          <div className="container-fluid">
            <div className="row margin-row">
              <div className="col-md-5 my-auto">
                <h1>
                  <span className="banner-text-1">
                    Unlock the Power
                    <br /> of
                  </span>{" "}
                  <span className="banner-text-2">Your Crypto</span>
                </h1>
                <div className="row my-4">
                  <div className="col-md-6">
                    <p className="text-1-25 tnm black mb-0">Earn Up to</p>
                    <div className="row">
                      <div className="col-md-4">
                        <span className="blue tnb text-2-625 my-auto">20%</span>
                      </div>
                      <div className="col-md-8 my-auto">
                        <p>Annual interest, paid out daily</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="text-1-25 tnm black mb-0">Borrow Instantly</p>
                    <div className="row">
                      <div className="col-md-3">
                        <span className="blue tnb text-2-625">32</span>
                      </div>
                      <div className="col-md-9">
                        <p>Cryptocurrencies available as collateral</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <Link href="/register" >
                      <a className="btn btn-bg-register tnb text-1-25">
                      <>Create Account <i className="fa-solid fa-angle-right"></i></>
                      </a>
                      
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-7 gx-0">
                <img
                  src="./assets/img/header.jpg"
                  className="img-fluid"
                  alt="banner-LIQD"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="banner-footer bg-white">
          <div className="container-fluid">
            <div className="row margin-row py-4">
              <div className="col-md-2 my-auto">
                <p className="grey tnr">Rated excellent on</p>
                <img src="assets/img/logo-trustpilot.svg" alt="Trustpilot" />
              </div>
              <div className="col-md-3 my-auto">
                <p className="grey tnr">Insured for up to $375 million by</p>
                <img src="assets/img/logo-bitgo.svg" alt="Bitgo" />
                <img
                  src="assets/img/logo-ledger.svg"
                  className="px-3"
                  alt="Ledger"
                />
                <img src="assets/img/logo-bakkt.svg" alt="Bakkt" />
              </div>
              <div className="col-md-2 my-auto">
                <p className="grey tnr">Audited by</p>
                <img src="assets/img/logo-armanino.svg" alt="Armanino" />
              </div>
            </div>
          </div>
        </section>
        <section className="stats py-5">
          <div className="container-fluid">
            <div className="row margin-row">
              <div className="col-md-3">
                <h1 className="bdb blue">$12B+</h1>
                <p>
                  Assets under <br />
                  management
                </p>
              </div>
              <div className="col-md-3">
                <h1 className="bdb blue">3.5М+</h1>
                <p>
                  LIQD users <br />
                  worldwide
                </p>
              </div>
              <div className="col-md-3">
                <h1 className="bdb blue">32</h1>
                <p>
                  Supported <br />
                  cryptocurrencies
                </p>
              </div>
              <div className="col-md-3">
                <h1 className="bdb blue">200+</h1>
                <p>
                  Available <br />
                  jurisdictions
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="earn py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-href={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-href={1}
                      aria-label="Slide 2"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/img/earn-2.jpg"
                        className="d-block w-100"
                        alt="Earn"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/img/earn-1.jpg"
                        className="d-block w-100"
                        alt="Earn"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-5 my-auto">
                <h1>
                  <span className="tnb black">Earn </span>
                  <span className="bdb blue">Interest</span>
                </h1>
                <h3 className="tnr pb-2">
                  Earn daily interest on your crypto and EURx, GBPx and USDx
                </h3>
                <ul>
                  <li className="py-2 tnr">
                    Up to <span className="badge bg-primary">20%</span> annual
                    interest
                  </li>
                  <li className="py-2 tnr">Unique daily payout</li>
                  <li className="py-2 tnr">
                    $375 million insurance on all custodial assets
                  </li>
                  <li className="py-2 tnr">
                    Add or withdraw funds at any time
                  </li>
                </ul>
                <Link href="/earn">
                  <a>
                  <>
                  Earn Crypto Interest{" "}
                  <i className="fa-solid fa-arrow-right blue"></i>
                  </>
                  </a>
                 
                  
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="client py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 m-auto">
                <img
                  src="assets/img/client/logo-ft.svg"
                  className="img-fluid opacity-50"
                  alt="ft"
                />
              </div>
              <div className="col-md-2 m-auto">
                <img
                  src="assets/img/client/logo-independent.svg"
                  className="img-fluid opacity-50"
                  alt="independent"
                />
              </div>
              <div className="col-md-1 m-auto">
                <img
                  src="assets/img/client/bloomberg.svg"
                  className="img-fluid opacity-50"
                  alt="bloomberg"
                />
              </div>
              <div className="col-md-1 m-auto">
                <img
                  src="assets/img/client/forbes.svg"
                  className="img-fluid opacity-50"
                  alt="forbes"
                />
              </div>
              <div className="col-md-1 m-auto">
                <img
                  src="assets/img/client/yahoo.png"
                  className="img-fluid opacity-50"
                  alt="yahoo"
                />
              </div>
              <div className="col-md-1 m-auto">
                <img
                  src="assets/img/client/fox-business.svg"
                  className="img-fluid opacity-50"
                  alt="fox-business"
                />
              </div>
              <div className="col-md-1 m-auto">
                <img
                  src="assets/img/client/coindesk.svg"
                  className="img-fluid opacity-50"
                  alt="coindesk"
                />
              </div>
              <div className="col-md-2 m-auto">
                <img
                  src="assets/img/client/logo-cointelegraph.svg"
                  className="img-fluid opacity-50"
                  alt="cointelegraph"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="security py-5">
          <div className="container">
            <div className="row g-2">
              <div className="col-md-6 m-auto">
                <img
                  src="assets/img/digital.png"
                  className="img-fluid digital-assets"
                  alt="The Ultimate Security for Your Digital Assets"
                />
              </div>
              <div className="col-md-6 m-auto">
                <h1 className="black">
                  The Ultimate Security for Your Digital Assets
                </h1>
                <p className="py-2">
                  The Liqd platform is equipped with a top-quality security
                  infrastructure designed to ensure maximum protection of assets
                  at all times.
                </p>
                <Link href="/security">
                  <a>
                  <>
                  Learn More <i className="fa-solid fa-arrow-right blue"></i>
                  </>
                  </a>
                  
                  
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="container-fluid">
            <div className="row margin-row">
              <div className="col-md-3">
                <img
                  src="assets/img/militry.png"
                  alt="Military-grade Security"
                />
                <h4 className="black mt-3">Military-grade Security</h4>
                <p>Storage held in military-grade Class III vaults</p>
              </div>
              <div className="col-md-3">
                <img
                  src="assets/img/third-party.png"
                  alt="Third-party Audits"
                />
                <h4 className="black mt-3">Third-party Audits</h4>
                <p>Independent, real-time reserves audit by Armanino</p>
              </div>
              <div className="col-md-3">
                <img src="assets/img/iso.png" alt="ISO 27001:2013 Certified" />
                <h4 className="black mt-3">ISO 27001:2013 Certified</h4>
                <p>
                  Impeccable risk assessment, data protection, and enhanced
                  cybersecurity
                </p>
              </div>
              <div className="col-md-3">
                <img
                  src="assets/img/insurance.png"
                  alt="$375 million Insurance"
                />
                <h4 className="black mt-3">$375 million Insurance</h4>
                <p>Insurance on custodial assets</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 m-auto">
                <h6 className="tnb light-blue">Our Mission</h6>
                <h1 className="bdb text-white font-4">
                  Creating the Future of Finance Today
                </h1>
                <div className="row py-4">
                  <div className="col-md-6">
                    <p className="light-blue font-1-375">
                      {`Since 2018 Liqd has strived to bring professional
                      financial services to the world of digital assets.
                      Leveraging the best of the team's years of experience in
                      FinTech along with the power of`}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="light-blue font-1-375">
                      blockchain technology, Liqd is empowering thousands of
                      people to harness the value behind their crypto assets and
                      live the future of finance today.
                    </p>
                  </div>
                </div>
                <Link href="/aboutus" >
                  <a className="text-white">
                  <>
                About Us <i className="fa-solid fa-arrow-right blue"></i>
                </>
                  </a>
                
                </Link>
              </div>
              <div className="col-md-5 m-auto">
                <img src="assets/img/human.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="faq py-5">
          <div className="container">
            <div className="text-center py-5">
              <h1 className="black">FAQs</h1>
              <p>All your questions about Liqd answered.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <nav className="nav flex-column">
                  <Link  href="/earn">
                    <a className="nav-link black">
                    Earn
                    </a>
                    
                  </Link>
                  <Link  href="/exchange">
                    <a className="nav-link grey">
                    Exchange
                    </a>
                    
                  </Link>
                </nav>
              </div>
              <div className="col-md-8">
                <div id="earn">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          How to earn up to 20% interest on crypto?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Start earning up to 20% interest in two simple
                            steps:
                          </p>
                          <ol>
                            <li>
                              Open the{" "}
                              <Link href="/" target="_blank" className="blue">
                                Liqd platform
                              </Link>{" "}
                              or the Liqd Wallet App
                            </li>
                            <li>Transfer assets into your Liqd Wallet</li>
                          </ol>
                          <p>
                            {`You're all set! Now you're earning daily interest
                            that automatically goes into your Savings Wallet.`}
                          </p>
                          <p>
                            <strong>Note:</strong> {`You'll start earning interest`}{" "}
                            <strong>at least 24 hours after</strong> your
                            transfer. Also, assets held in your Credit Line
                            Wallet (i.e. assets being used as collateral) will
                            not earn interest.
                          </p>
                          <p>
                            Find out which digital assets are currently
                            available for our Earn suite and what the exact
                            interest rates are in our{" "}
                            <Link href="/" target="_blank" className="blue">
                              help center
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          How to earn up to 12% interest on EURx, GBPx and USDx?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Earn up to 12% interest on GBPx, EURx, and USDx,
                            following these three simple steps:
                          </p>
                          <ol>
                            <li>
                              Open the{" "}
                              <Link href="" target="_blank" className="blue">
                                Liqd platform
                              </Link>
                              .
                            </li>
                            <li>
                              Complete your{" "}
                              <Link href="/" target="_blank" className="blue">
                                Identity Verification
                              </Link>
                              .
                            </li>
                            <li>
                              Transfer your fiat into your Liqd account.{" "}
                              <strong>
                                {`Don't forget to use your unique reference code!`}
                              </strong>
                            </li>
                          </ol>
                          <p>
                            {`That's it! You'll instantly start earning interest
                            as soon as the transaction is confirmed.`}
                          </p>
                          <p>
                            <strong>Note:</strong> The minimum top-up amounts
                            are €1,000 for EURx, £10 for GBPx.
                          </p>
                          <p>
                            For more detailed information, visit our{" "}
                            <Link href="/" className="blue" target="_blank">
                              help center
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          {`How do I get Liqd's highest interest rate?`}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            To receive up to 20% interest on your savings, you
                            have to:
                          </p>
                          <ul>
                            <li>
                              Become a{" "}
                              <Link href="/" className="blue" target="_blank">
                                Platinum Loyalty tier
                              </Link>{" "}
                              client by making sure at least 10% of your
                              Portfolio Balance comprises Liqd Tokens.
                            </li>
                            <li>
                              Opt to earn your interest in Liqd Tokens for up to
                              2% additional interest.
                            </li>
                          </ul>
                          <p>
                            <em>Example:</em>
                          </p>
                          <p>
                            <em>
                              Value of assets in your Savings Wallet: $10,000
                            </em>
                          </p>
                          <p>
                            <em>
                              Value of Liqd Tokens required for you to get the
                              highest interest: min. of $1,000 in Liqd Tokens
                            </em>
                          </p>
                          <p>
                            <strong>To activate Earn in Liqd:</strong>
                          </p>
                          <ol>
                            <li>
                              Open the{" "}
                              <Link href="/" className="blue" target="_blank">
                                Liqd platform
                              </Link>{" "}
                              or the Liqd Wallet App.
                            </li>
                            <li>
                              Click on the “Settings” menu in the “My profile”
                              section.
                            </li>
                            <li>Activate the option to Earn in Liqd.</li>
                          </ol>
                          <p>
                            <strong>Note:</strong> Please be aware that the Liqd
                            Earn Product, including Earn in Liqd, is not
                            available for citizens or residents of certain
                            jurisdictions, including where restrictions may
                            apply, such as the USA, Bulgaria, and Estonia.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What are Liqd’s interest rates?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>Your interest rate is determined by:</p>
                          <ol>
                            <li>
                              Your Loyalty tier, which in turn depends on the
                              ratio of Liqd Tokens against the balance of other
                              assets in your portfolio. The requirements for
                              each tier are as follows:
                              <ul>
                                <li>
                                  <strong>Base:</strong> No Liqd Tokens are
                                  needed.
                                </li>
                                <li>
                                  <strong>Silver:</strong> At least 1% of the
                                  Portfolio Balance in your account must
                                  comprise Liqd Tokens.
                                </li>
                                <li>
                                  <strong>Gold:</strong> At least 5% of the
                                  Portfolio Balance in your account must
                                  comprise Liqd Tokens.
                                </li>
                                <li>
                                  <strong>Platinum:</strong> At least 10% of the
                                  Portfolio Balance in your account must
                                  comprise Liqd Tokens.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Whether you choose to receive your interest in
                              kind or Liqd Tokens:
                              <ul>
                                <li>
                                  Earning in kind means you receive your
                                  interest payments in the currency you’re
                                  earning on.
                                </li>
                                <li>
                                  Earning in Liqd means you receive interest
                                  payments in Liqd Tokens and benefit from up to
                                  2% additional interest on all your holdings.
                                </li>
                              </ul>
                            </li>
                          </ol>
                          <p>
                            You can calculate your daily interest as shown
                            below:
                          </p>
                          <p>
                            <strong>
                              Daily Interest = Principal amount (in the original
                              cryptocurrency) x (interest rate/365)
                            </strong>
                          </p>
                          <p>
                            <strong>Note:</strong> Your interest rate will
                            change depending on the ratio of Liqd Tokens to
                            other assets in your portfolio and whether you
                            decide to earn interest in Liqd or in kind.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="exchange">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-heading5">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse5"
                          aria-expanded="false"
                          aria-controls="flush-collapse5"
                        >
                          What is the Liqd Exchange?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-heading5"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            {`The Liqd Exchange is Liqd's swap functionality,
                            which allows for immediate exchanges between 100+
                            crypto and fiat pairs directly within the Liqd
                            platform. The feature is a one-stop-shop for the
                            Liqd Token and other crypto and fiat currencies,
                            enabling users to buy, sell, store, borrow against,
                            and earn interest on their assets.`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-heading6">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse6"
                          aria-expanded="false"
                          aria-controls="flush-collapse6"
                        >
                          How can Liqd guarantee the best market prices
                          currently available?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-heading6"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Thanks to our in-house Smart Routing system, the
                            Liqd Exchange simultaneously connects to 5+
                            exchanges to identify the best prices and splits
                            orders depending on the price per volume. The system
                            optimizes swapping between fiat and crypto
                            currencies within a fraction of a second and creates
                            a deal better than any manual execution.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-heading7">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse7"
                          aria-expanded="false"
                          aria-controls="flush-collapse7"
                        >
                          What currencies does the Liqd Exchange support?
                        </button>
                      </h2>
                      <div
                        id="flush-collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-heading7"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The Liqd Exchange currently supports swaps between
                            more than 100 digital and fiat currency pairs,
                            including these Liqd Token pairs:
                          </p>
                          <ul>
                            <li>Liqd / BTC</li>
                            <li>Liqd / ETH</li>
                            <li>Liqd / USDT</li>
                            <li>Liqd / USDx</li>
                            <li>Liqd / EURx</li>
                            <li>Liqd / GBPx</li>
                          </ul>
                          <p>
                            <strong>Note:</strong> Trading Liqd Tokens on the
                            Liqd Exchange requires Identity Verification and is
                            currently not available to US citizens.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-heading8">
                      <button
                        className="accordion-button collapsed font-1-5 grey"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse8"
                        aria-expanded="false"
                        aria-controls="flush-collapse8"
                      >
                        How can I buy and sell Liqd Tokens?
                      </button>
                    </h2>
                    <div
                      id="flush-collapse8"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-heading8"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          The Liqd Exchange eliminates the need for third-party
                          services for buying and selling Liqd Tokens. To buy or
                          sell Liqd Tokens you need to:
                        </p>
                        <ol>
                          <li>
                            Open the{" "}
                            <Link href="/" target="_blank">
                              Liqd platform
                            </Link>
                          </li>
                          <li>Click on the “Exchange” tab</li>
                          <li>Select the currencies you would like to swap</li>
                          <li>{`Click "Exchange"`}</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="unlock bg-blue p-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 m-auto">
                <h1 className="tnr text-white">
                  Unlock the <span className="tnb">Power of Your Crypto</span>
                </h1>
                <p className="text-white py-3">
                  With the account that caters to your profit and prosperity
                  through our leading credit line service for digital assets and
                  high-yield interest on your idle savings.
                </p>
                <button
                  className="btn btn-bg-register tnb text-1-25"
                  type="submit"
                >
                  Create Account <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              <div className="col-md-7 m-auto">
                <img
                  src="assets/img/platform.png"
                  alt="Unlock the Power of Your Crypto"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <FooterMark />
      </>
    );
  }
}

export default Home;
