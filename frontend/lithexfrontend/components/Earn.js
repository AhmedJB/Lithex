import React, { Component } from "react";
import Link from "next/link";
import HeaderMark from "./HeaderMark";
import Footer from "./Footer";

function Earn(props) {

    return (
      <>
      <HeaderMark />
        <section className="banner bg-earn">
          <div className="container-fluid">
            <div className="row margin-row">
              <div className="col-md-6 my-auto">
                <div className="ms-4">
                  <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                    EARN CRYPTO INTEREST
                  </span>
                  <h1>
                    <span className="font-4 tnb black">
                      Earn <span className="blue">20%</span>
                      <br /> on Crypto
                    </span>
                  </h1>
                  <p className="font-1-5 tnr">
                    Make your idle digital assets work for you with LIQD. Start
                    earning up to 20% APR, paid out daily.
                  </p>
                </div>
                <div className="row my-4 margin-row">
                  <div className="col-md-6">
                    <p className="tnr black mb-0">
                      <img
                        src="assets/img/icon-green-tick-in-light-circle.svg"
                        alt="Earn"
                        className="img-fluid"
                      />{" "}
                      Full control over your funds
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="tnr black mb-0">
                      <img
                        src="assets/img/icon-green-tick-in-light-circle.svg"
                        alt="Earn"
                        className="img-fluid"
                      />{" "}
                      Military-grade security
                    </p>
                  </div>
                </div>
                <div className="row margin-row">
                  <div className="col-md-12">
                    <Link href="/register" >
                      <a className="btn btn-bg-register tnb text-1-25">
                      <>Start Earning <i className="fa-solid fa-angle-right"></i></>
                      </a>
                      
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 gx-0">
                <img
                  src="./assets/img/earn-header.png"
                  className="img-fluid"
                  alt="banner-LIQD"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row py-4">
              <div className="col-md-2 my-auto">
                <p className="grey tnr">Rated excellent on</p>
                <img src="assets/img/logo-trustpilot.svg" alt="Trustpilot" />
              </div>
              <div className="col-md-4 my-auto">
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

            <div className="row py-5">
              <div className="col-md-6 my-auto">
                <img
                  src="assets/img/woman-with-laptop.png"
                  className="img-fluid"
                  alt="woman-with-laptop"
                />
              </div>
              <div className="col-md-6 my-auto">
                <h1 className="tnm black">
                  Beat Volatility & Earn Without the Risk
                </h1>
                <p className="tnr">
                  While buying crypto and HODLing it until the price goes up is
                  a great option for turning a profit, it requires lots of time
                  and a bit of luck.
                </p>
                <p className="tnr">
                  With LIQD, you can put your idle assets to work straight away
                  and have a predictable source of passive income without the
                  risk.
                </p>
                <p className="tnr">
                  Just top up and{" "}
                  <Link href="/" className="blue">
                    start earning
                  </Link>{" "}
                  up to 20% annual interest immediately - no further action is
                  needed on your side.
                </p>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-md-12 text-center">
                <h1 className="tnm black">Supported Assets & Rates</h1>
                <p className="tnr font-1-5">
                  Diversify your portfolio with our growing selection of 32
                  digital assets, <br /> including BTC, ETH, LIQD, stablecoins,
                  and more.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="box p-3">
                  <div className="row my-5">
                    <div className="col my-auto">
                      <span className="tnm font-125 float-end">
                        Earn in Kind
                      </span>
                    </div>
                    <div className="col-1 m-auto">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <span className="tnm font-125">Earn in LIQD </span>
                      <span className="badge bg-light blue tnr small p-2 rounded-pill">
                        +2%
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/cc-sc-usdt.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn USDT Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/cc-sc-usdc.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn USDC Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/cc-sc-dai.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn DAI Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/usdp.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn USDP Interest</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/cc-sc-tusd.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn TUSD Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/usd-flag.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn USDX Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/eur-flag.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn EURX Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/gbp-flag.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">10% APR</p>
                        <p className="small mb-0">Earn GBPX Interest</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/bitcoin.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn BTC Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/ethereum.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn ETH Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/liqd.png"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">12% APR</p>
                        <p className="small mb-0">Earn LIQD Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/axs.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">36% APR</p>
                        <p className="small mb-0">Earn AXS Interest</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/ftm.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">18% APR</p>
                        <p className="small mb-0">Earn FTM Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/matic.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">16% APR</p>
                        <p className="small mb-0">Earn MATIC Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/dot.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">15% APR</p>
                        <p className="small mb-0">Earn DOT Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/luna.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">13% APR</p>
                        <p className="small mb-0">Earn LUNA Interest</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/avax.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">12% APR</p>
                        <p className="small mb-0">Earn AVAX Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/ksm.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">12% APR</p>
                        <p className="small mb-0">Earn KSM Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/atom.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">11% APR</p>
                        <p className="small mb-0">Earn ATOM Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/bnb.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn BNB Interest</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/ada.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn ADA Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/sol.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn SOL Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/xrp.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn XRP Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/litecoin.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn LTC Interest</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/link.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn LINK Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/bitcoin-cash.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn BCH Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/tron.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn TRX Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 mx-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/stellar.svg"
                        alt="Earn USDP Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn XLM Interest</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 my-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/eos.svg"
                        alt="Earn USDT Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn EOS Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 my-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/paxg.svg"
                        alt="Earn USDC Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">8% APR</p>
                        <p className="small mb-0">Earn PAXG Interest</p>
                      </div>
                    </div>
                    <div className="col-md-3 my-auto">
                      <img
                        className="crypto-icon"
                        src="assets/img/earn/dogecoin.svg"
                        alt="Earn DAI Interest"
                      />
                      <div className="inline ms-3">
                        <p className="font-weight-bold font-1 mb-0">3% APR</p>
                        <p className="small mb-0">Earn DOGE Interest</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  src="assets/img/earn/liqd.png"
                  alt="LIQD"
                  className="img-fluid my-3"
                />
                <h1 className="tnm black">Why Earn with LIQD</h1>
                <p className="font-125">
                  Grow your portfolio exponentially while keeping your assets
                  safe.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-imgContainer">
                        <img
                          src="assets/img/earn/daily-payouts-green.png"
                          alt="daily payout"
                        />
                      </div>
                      <div className="card-content d-flex flex-column">
                        <div>
                          <h3 className="tnb">Compounding Daily Payouts</h3>
                          <p className="tnr mb-5">
                            {`With LIQD's unique daily payouts*, you get instant
                            access to the interest you've earned. Your yield is
                            automatically paid to your LIQD account, so the next
                            day, you begin earning interest on top of it, too.
                            That way your daily payouts only get bigger over
                            time!`}
                            <br />
                            <small className="tnr small">
                              *Daily payouts apply only to our FLEX offering.
                            </small>
                          </p>
                          <Link href="/earn">
                            <>
                            Start Earning{" "}
                            <i className="fa-solid fa-arrow-right blue"></i>
                            </>
                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-imgContainer">
                        <img
                          src="assets/img/earn/flexible-earnings-green.png"
                          alt="Flexible Earning"
                        />
                      </div>
                      <div className="card-content d-flex flex-column">
                        <div>
                          <h3 className="tnb">Flexible Earnings</h3>
                          <p className="tnr mb-5">
                            Maximize your crypto yield with our bonus rates for
                            Fixed Terms. Trade while you earn with our FLEX
                            offering. Or create a Fixed Term to get an
                            additional interest on your assets.
                          </p>
                          <Link href="/earn">
                            <>
                            Start Earning{" "}
                            <i className="fa-solid fa-arrow-right blue"></i>
                            </>
                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-imgContainer">
                        <img
                          src="assets/img/earn/top-tier-insurance-green.png"
                          alt="top-tier-insurance"
                        />
                      </div>
                      <div className="card-content d-flex flex-column">
                        <div>
                          <h3 className="tnb">Top-tier Insurance</h3>
                          <p className="tnr mb-5">
                            All digital assets held in your LIQD account benefit
                            from a $375M insurance by our industry-renowned
                            custodians in the event of third-party hacks, theft,
                            or loss of private keys.
                          </p>
                          <Link href="/earn">
                            <>
                            Start Earning{" "}
                            <i className="fa-solid fa-arrow-right blue"></i>
                            </>
                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-imgContainer">
                        <img
                          src="assets/img/earn/zero-fees-green.png"
                          alt="zero-fees"
                        />
                      </div>
                      <div className="card-content d-flex flex-column">
                        <div>
                          <h3 className="tnb">Zero Fees</h3>
                          <p className="tnr mb-5">
                            We never charge you any hidden fees or commissions
                            for adding, withdrawing or holding funds. Withdraw
                            at any time without losing your accrued interest or
                            add funds whenever you want to earn even more.
                          </p>
                          <Link href="/earn">
                            <>
                            Start Earning{" "}
                            <i className="fa-solid fa-arrow-right blue"></i>
                            </>
                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 border-right">
                <h1 className="tnb blue">$200M+</h1>
                <p>
                  Already paid out <br />
                  in interest
                </p>
              </div>
              <div className="col-md-3 border-right ps-4">
                <h1 className="tnb blue">3.5М+</h1>
                <p>
                  LIQD users <br />
                  worldwide
                </p>
              </div>
              <div className="col-md-3 border-right ps-4">
                <h1 className="tnb blue">32</h1>
                <p>
                  Supported <br />
                  cryptocurrencies
                </p>
              </div>
              <div className="col-md-3 ps-4">
                <h1 className="tnb blue">200+</h1>
                <p>
                  Available <br />
                  jurisdictions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="card earn-card">
              <div className="row">
                <div className="col-md-6 p-5 m-auto">
                  <h1 className="tnm black">
                    How to Start Earning on your Savings
                  </h1>
                  <p className="tnr grey-2">
                    Create your LIQD account and go from zero to earning in less
                    than a minute. All you have to do is:
                  </p>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <Link
                            href="/app/profile"
                            className="btn btn-primary btn-round me-3"
                          >
                            1
                          </Link>
                          <h5 className="black tnm">
                            Deposit Supported Assets
                          </h5>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Buy assets or transfer funds to your LIQD account.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <Link
                            href="/app/profile"
                            className="btn btn-primary btn-round me-3"
                          >
                            2
                          </Link>
                          <h5 className="black tnm">Start Earning Instantly</h5>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {`You're all set - no further action is needed! You're
                          now earning compounding interest on your crypto, paid
                          out daily.`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5 pr-5 pt-5 pb-0 m-auto">
                  <img
                    src="assets/img/earn/liqd-how-to-earn-asset-step-2.png"
                    className="img-fluid"
                    alt="liqd-how-to-earn-asset"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  src="assets/img/earn/person-1.png"
                  alt="earn"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src="assets/img/earn/person-2.png"
                  alt="earn"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 mt-5 text-center">
                <img
                  src="assets/img/favicons/android-chrome-192x192.png"
                  alt="earn"
                  className="w-30 img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="assets/img/earn/person-3.png"
                  alt="earn"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assets/img/earn/person-4.png"
                  alt="earn"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8 m-auto">
                <h2 className="black text-center">
                  {"Here's What Our 3.5М+ Users Are Saying About Us"}
                </h2>
              </div>
              <div className="col-md-2">
                <img
                  src="assets/img/earn/person-5.png"
                  alt="earn"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid my-5">
            <div className="row g-2">
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@derBaecker94</h6>
                  <p className="mb-0 tnr font-1">
                    Using LIQD for over a year, within others to earn interest
                    on XRP. Could not be happier. All working smoothly.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Christopher Epstein</h6>
                  <p className="mb-0 tnr font-1">
                    From top-notch service, competitive rates, and multiple ways
                    to earn while keeping my crypto safe, everything about LIQD
                    has been positive.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@prettyboibeau</h6>
                  <p className="mb-0 tnr font-1">
                    My platform of choice for HODLing all of my mainstream
                    crypto, whilst also earning 5% daily compounded interest!
                    (6% if I choose monthly simple interest).
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Alen Turk</h6>
                  <p className="mb-0 tnr font-1">
                    The thing I like most is that I earn interests and all the
                    money is protected and insured by LIQD.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@osonwanne</h6>
                  <p className="mb-0 tnr font-1">
                    LIQD offers crypto enthusiasts the best of both worlds -
                    instant access to cash while retaining ownership of their
                    crypto.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Karen</h6>
                  <p className="mb-0 tnr font-1">
                    LIQD offers the perfect solution for Bitcoin hodlers!
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@A3bCrypto</h6>
                  <p className="mb-0 tnr font-1">
                    I simply love LIQD! The APR is amazing!
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@bechokoy_betts</h6>
                  <p className="mb-0 tnr font-1">
                    LIQD has been so great for me for the past 2 years. I earn
                    6% while adding to my bags every month.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Mark Ouwehand</h6>
                  <p className="mb-0 tnr font-1">
                    Finally a way to earn interest on crypto, and to borrow
                    against crypto. So easy to use, love it!
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Martin Janicina</h6>
                  <p className="mb-0 tnr font-1">
                    {`I don't know a better place to earn interest on crypto and
                    fiat other than LIQD.`}
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@PangurBan869</h6>
                  <p className="mb-0 tnr font-1">
                    {`LIQD has a great platform and I love their earn program.
                    It's the place to HODL! #LoveLIQD`}
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Alex H.</h6>
                  <p className="mb-0 tnr font-1">
                    {`Such an easy way to store your crypto and earn passive
                    income. I've been using the platform for a while and I
                    recommend it to friends and family. Thanks, LIQD!`}
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@lilacfilms</h6>
                  <p className="mb-0 tnr font-1">
                    I had no idea where to start with Crypto and had it not been
                    for LIQD I probably would never have got involved. The
                    platform makes everything so easy to use!
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-solid fa-star green font-1-5"></i>
                  <h6 className="black pt-2">Eliott Ross</h6>
                  <p className="mb-0 tnr font-1">
                    If your looking for a place to earn interest and manage your
                    cryptocurrency with a simple to use platform LIQD is the
                    solution.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@Brn2wice</h6>
                  <p className="mb-0 tnr font-1">
                    Recently joined LIQD and it has been great! Earn interest on
                    your holdings. Borrow against it without spending your
                    crypto. No brainer!
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card p-4">
                  <i className="fa-brands fa-twitter blue font-1-5"></i>
                  <h6 className="black pt-2">@Christopher</h6>
                  <p className="mb-0 tnr font-1">
                    Offers great ROI and lets me earn on all of my crypto
                    accounts in a way that I understand and can manage
                    comfortably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="black">FAQs</h1>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto">
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
                          What do I have to do to start earning?
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
                            Signing up for a LIQD account takes less than a
                            minute:
                          </p>
                          <ol>
                            <li>
                              Open the{" "}
                              <Link href="/app/profile" className="blue">
                                LIQD platform
                              </Link>
                            </li>
                            <li>Complete your verification.</li>
                            <li>Buy or transfer crypto to your account.</li>
                            <li>
                              {`You're all set! You're now earning daily interest
                              on your digital assets.`}
                            </li>
                          </ol>
                          <p>
                            <strong>Note:</strong> {"You'll start earning interest"}{" "}
                            <strong>the next day </strong>after your transfer.
                            Keep in mind that assets used as collateral for our
                            Instant Crypto Credit Lines™ will not earn interest.
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
                          What are the interest rates?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>Your interest rate is determined by:</p>
                          <ol>
                            <li>
                              <strong>Your Loyalty tier</strong>, which in turn
                              depends on the ratio of LIQD Tokens against the
                              balance of other assets in your portfolio. The
                              requirements for each tier are as follows:
                              <br />
                              <ul>
                                <li>
                                  <strong>Base:</strong> No LIQD Tokens are
                                  needed.
                                </li>
                                <li>
                                  <strong>Silver:</strong> At least 1% of the
                                  Portfolio Balance in your account must
                                  comprise LIQD Tokens.
                                </li>
                                <li>
                                  <strong>Gold:</strong> At least 5% of the
                                  Portfolio Balance in your account must
                                  comprise LIQD Tokens.
                                </li>
                                <li>
                                  <strong>Platinum:</strong> At least 10% of the
                                  Portfolio Balance in your account must
                                  comprise LIQD Tokens.
                                  <br />
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>The type of interest payout </strong>you
                              choose:
                              <ul>
                                <li>
                                  {`Earning 'in kind' means you receive your
                                  interest payments in the currency you're
                                  earning on.`}
                                </li>
                                <li>
                                  Earning in LIQD means you receive interest
                                  payments in LIQD Tokens and benefit from up to
                                  2% additional interest on all your holdings.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>The type of saving term:</strong> {`FLEX or
                              Fixed. If you choose to create a 1-month Fixed
                              Term on your crypto, you'll earn an extra 1%
                              interest.`}
                            </li>
                          </ol>
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
                          How does LIQD keep my crypto safe?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            LIQD is raising the bar for the entire blockchain
                            space by utilizing the most rigorous KYC and AML
                            policies, impeccable risk assessment, data
                            protection, and enhanced cybersecurity.
                          </p>
                          <p>
                            {`We keep your digital assets safe while you're
                            earning interest through our multifaceted approach
                            to security, including:`}
                          </p>
                          <ul>
                            <li>
                              Military-grade 256-bit encryption for your LIQD
                              account.
                            </li>
                            <li>
                              Storage in Class III vaults through leading
                              blockchain custodians, including BitGo, Ledger
                              Vault, and others.
                            </li>
                            <li>
                              {`$375M insurance from our custodial partners via
                              Lloyd's of London and Marsh &amp; Arch.`}
                            </li>
                            <li>
                              {`ISO/IEC 27001:2013 certificate guaranteeing LIQD's
                              security infrastructure is of the highest
                              standard.`}
                            </li>
                            <li>
                              200-500% overcollateralized crypto credit lines.
                              LIQD never issues credit on a non-collateralized
                              basis, thus ensuring your funds are backed no
                              matter how the market moves.
                            </li>
                          </ul>
                          <p>
                            You can learn more about our security and insurance{" "}
                            <Link href="/security" className="blue">
                              here
                            </Link>
                            .
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
        <section className="py-5">
          <div className="container">
            <div className="card round-1rem">
              <div className="row">
                <div className="col-md-6 m-auto ps-5 my-auto">
                  <h1 className="black tnb">
                    Ready to Make the Most of Your Funds?
                  </h1>
                  <p className="grey-2 tnr">
                    Move your idle assets to Liqd and start earning up to 10%
                    APR in less than a minute.
                  </p>
                  <button
                    className="btn btn-bg-register tnb text-1-25"
                    type="submit"
                  >
                    Create Account <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/img/earn/footer-cta-earn-visual.jpg"
                    className="img-fluid round-1rem-end"
                    alt="Ready to Make the Most of Your Funds?"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }


export default Earn;
