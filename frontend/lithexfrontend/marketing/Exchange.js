import React, { Component } from "react";
import Link from "next/link"
import HeaderMark from "./HeaderMark";
import FooterMark from "./FooterMark";

function Exchange(props) {

    return (
      <>
      <HeaderMark />
        <section className="banner bg-white">
          <div className="container-fluid">
            <div className="row margin-row">
              <div className="col-md-6 my-auto">
                <span className="badge bg-badge blue tnr small py-2 rounded-pill">
                  INSTANT CRYPTO EXCHANGE
                </span>
                <h1>
                  <span className="font-4 tnb black">
                    Swap & Earn up to
                    <br /> <span className="blue">10%</span> in Cashback
                  </span>
                </h1>
                <p className="font-1-5 tnr">
                  Exchange between 100+ market pairs and earn up to 10% interest
                  depending on your Loyalty tier.
                </p>
                <div className="row my-4">
                  <div className="col-md-6 mb-3">
                    <p className="tnr black mb-0">
                      <img
                        src="assets/img/exchange/icon-indigo500-tick-in-indigo50.svg"
                        alt="Up to 10% interest earn"
                        className="img-fluid"
                      />{" "}
                      Up to 10% interest earn
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p className="tnr black mb-0">
                      <img
                        src="assets/img/exchange/icon-indigo500-tick-in-indigo50.svg"
                        alt="Instant execution"
                        className="img-fluid"
                      />{" "}
                      Instant execution
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p className="tnr black mb-0">
                      <img
                        src="assets/img/exchange/icon-indigo500-tick-in-indigo50.svg"
                        alt="Easy, intuitive interface"
                        className="img-fluid"
                      />{" "}
                      Easy, intuitive interface
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p className="tnr black mb-0">
                      <img
                        src="assets/img/exchange/icon-indigo500-tick-in-indigo50.svg"
                        alt="Up to 1x leverage"
                        className="img-fluid"
                      />{" "}
                      Up to 1x leverage
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <Link href="/app/exchange" >
                      <a className="btn btn-bg-register tnb text-1-25">
                      <>Exchange Now <i className="fa-solid fa-angle-right"></i></>
                      </a>
                      
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="./assets/img/exchange/promo-atf-visual.png"
                  className="img-fluid"
                  alt="banner-LIQD"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row margin-row py-4">
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
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto text-center">
                <h2 className="black tnm">
                  The LIQD Exchange <br /> Loyalty Program
                </h2>
                <p className="font-1-5 tnr grey-2">
                  Depending on your Loyalty tier, you can earn up to 1% instant
                  cashback for <br /> every swap you make on the LIQD Exchange
                </p>
                <img
                  src="assets/img/exchange/exchange-loyalty-benefits.png"
                  className="img-fluid"
                  alt="exchange-loyalty-benefits"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto text-center">
                <h2 className="black tnm">Why Swap Crypto on LIQD</h2>
                <p className="font-1-5 tnr grey-2">
                  Enjoy instant transactions, fixed-price execution and
                  unlimited <br /> number of swaps with the smartest exchange
                  out there
                </p>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-md-4 m-auto">
                <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                  FIXED-PRICE EXECUTION
                </span>
                <h4 className="black mt-2">Pay Exactly What You See</h4>
                <p className="tnr">
                  Unlike most exchanges where prices might fluctuate by up to
                  5%, LIQD fixes the rate the moment you place your order. That
                  means the price you see is the price you pay.
                </p>
              </div>
              <div className="col-md-4 m-auto">
                <img
                  src="assets/img/exchange/exchange-learn-more-1.png"
                  alt="Pay Exactly What You See"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-4 m-auto">
                <img
                  src="assets/img/exchange/exchange-learn-more-2.png"
                  alt="INSTANT SWAPS"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 m-auto">
                <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                  INSTANT SWAPS
                </span>
                <h4 className="black mt-2">Swap with Lightning Speed</h4>
                <p className="tnr">
                  The crypto market moves fast, so should you. Exchange any of
                  the available market pairs in real-time. Your balances are
                  updated instantly, the moment your order is confirmed.
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-4 m-auto">
                <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                  SMART ROUTING SYSTEM
                </span>
                <h4 className="black mt-2">We Crunch the Numbers for You</h4>
                <p className="tnr">
                  {`You don't have to look around for the best price. Our Smart
                  Routing System connects to the top 10 exchanges at once,
                  providing you with the most cost-effective execution possible.`}
                </p>
              </div>
              <div className="col-md-4 m-auto">
                <img
                  src="assets/img/exchange/exchange-learn-more-3.png"
                  alt="SMART ROUTING SYSTEM"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-4 m-auto">
                <img
                  src="assets/img/exchange/exchange-learn-more-4.png"
                  alt="All Top Coins Are a Click Away"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 m-auto">
                <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                  200+ MARKET PAIRS
                </span>
                <h4 className="black mt-2">All Top Coins Are a Click Away</h4>
                <p className="tnr">
                  {`Have fun with the world's most popular coins effortlessly from
                  any device. Market pairs are available for all currencies
                  supported by LIQD, including BTC, ETH, LIQD, and more.`}
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-4 m-auto">
                <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                  BANK CARD SUPPORT
                </span>
                <h4 className="black mt-2">Top Up Instantly with Card</h4>
                <p className="tnr">
                  Buy Bitcoin, Ethereum, Litecoin, and other select
                  cryptocurrencies quickly and securely with your credit or
                  debit card.
                </p>
              </div>
              <div className="col-md-4 m-auto">
                <img
                  src="assets/img/exchange/exchange-learn-more-6.png"
                  alt="BANK CARD SUPPORT"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-4 m-auto">
                <img
                  src="assets/img/exchange/exchange-learn-more-5.png"
                  alt="IMMEDIATE INTEREST"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4 m-auto">
                <span className="badge bg-badge py-2 blue tnr small rounded-pill">
                  IMMEDIATE INTEREST
                </span>
                <h4 className="black mt-2">Earn While You Exchange</h4>
                <p className="tnr">
                  {`All new assets are placed directly in your Savings Wallet,
                  meaning you're always earning high-yield interest - even in
                  between swaps.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto text-center">
                <h2 className="black tnm">Supported Market Pairs</h2>
                <p className="font-1-5 tnr grey-2">
                  Choose between 100+ pairs for all coins available on the LIQD
                  platform.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-4 mb-3">
                <div className="accordion" id="market-pair">
                  <div className="accordion-item market-pair">
                    <h2 className="accordion-header" id="h1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c1"
                        aria-expanded="false"
                        aria-controls="c1"
                      >
                        <img
                          className="crypto-icon"
                          src="assets/img/earn/bitcoin.svg"
                          alt="Bitcoin"
                        />
                        <div className="inline ms-3">
                          <p className="tnm grey font-1-5 mb-0">Bitcoin</p>
                          <p className="tnm grey-2 mb-0">Market Pair</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="c1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#market-pair"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / ETH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / LIQD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / USDT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / USDC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / TUSD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / USDP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / DAI
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / UST
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / BCH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / LTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / XRP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / EOS
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / BNB
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / XLM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / PAXG
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / LINK
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / ADA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / DOT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / SOL
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / AVAX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / KSM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / ATOM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / DOGE
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / MANA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / SAND
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / USDX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / EURX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / GBPX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            BTC / LUNA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="accordion" id="market-pair">
                  <div className="accordion-item market-pair">
                    <h2 className="accordion-header" id="h2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c2"
                        aria-expanded="false"
                        aria-controls="c2"
                      >
                        <img
                          className="crypto-icon"
                          src="assets/img/earn/ethereum.svg"
                          alt="Ethereum"
                        />
                        <div className="inline ms-3">
                          <p className="tnm grey font-1-5 mb-0">Ethereum</p>
                          <p className="tnm grey-2 mb-0">Market Pair</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="c2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#market-pair"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / BTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / LIQD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / USDT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / USDC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / TUSD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / USDP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / DAI
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / UST
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / LTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / XRP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / EOS
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / BNB
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / XLM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / PAXG
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / LINK
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / ADA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / DOT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / SOL
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / AVAX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / KSM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / ATOM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / DOGE
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / MANA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / SAND
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / USDX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / EURX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / GBPX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            ETH / LUNA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="accordion" id="market-pair">
                  <div className="accordion-item market-pair">
                    <h2 className="accordion-header" id="h3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c3"
                        aria-expanded="false"
                        aria-controls="c3"
                      >
                        <img
                          className="crypto-icon"
                          src="assets/img/earn/liqd.png"
                          alt="Bitcoin"
                        />
                        <div className="inline ms-3">
                          <p className="tnm grey font-1-5 mb-0">LIQD</p>
                          <p className="tnm grey-2 mb-0">Market Pair</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="c3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#market-pair"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / BTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / ETH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / USDT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / USDC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / USDX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / EURX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            LIQD / GBPX
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="accordion" id="market-pair">
                  <div className="accordion-item market-pair">
                    <h2 className="accordion-header" id="h4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c4"
                        aria-expanded="false"
                        aria-controls="c4"
                      >
                        <img
                          className="crypto-icon"
                          src="assets/img/earn/cc-sc-usdt.svg"
                          alt="Tether / USDT"
                        />
                        <div className="inline ms-3">
                          <p className="tnm grey font-1-5 mb-0">Tether</p>
                          <p className="tnm grey-2 mb-0">Market Pair</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="c4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#market-pair"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / ETH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / LIQD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / BTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / USDC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / TUSD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / USDP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / DAI
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / UST
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / BCH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / LTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / XRP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / EOS
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / BNB
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / XLM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / PAXG
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / LINK
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / ADA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / DOT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / SOL
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / AVAX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / KSM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / ATOM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / DOGE
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / MANA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / SAND
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / USDX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / EURX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / GBPX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDT / LUNA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="accordion" id="market-pair">
                  <div className="accordion-item market-pair">
                    <h2 className="accordion-header" id="h5">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c5"
                        aria-expanded="false"
                        aria-controls="c5"
                      >
                        <img
                          className="crypto-icon"
                          src="assets/img/earn/cc-sc-usdc.svg"
                          alt="USD Coin"
                        />
                        <div className="inline ms-3">
                          <p className="tnm grey font-1-5 mb-0">USD Coin</p>
                          <p className="tnm grey-2 mb-0">Market Pair</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="c5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#market-pair"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / BTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / ETH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / LIQD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / USDT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / DAI
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / USDP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / TUSD
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / UST
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / LTC
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / XRP
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / BNB
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / BCH
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / XLM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / LINK
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / TRX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / EOS
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / PAXG
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / ADA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / DOT
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / SOL
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / AVAX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / KSM
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / DOGE
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / MANA
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2">
                            USDC / USDX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2 ">
                            USDC / EURX
                          </div>
                          <div className="col-md-6 my-2 tnr grey-2 ">
                            USDC / LUNA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="accordion" id="market-pair">
                  <div className="accordion-item market-pair">
                    <h2 className="accordion-header" id="h6">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#c6"
                        aria-expanded="false"
                        aria-controls="c6"
                      >
                        <img
                          className="crypto-icon"
                          src="assets/img/earn/axs.svg"
                          alt="Axie Infinity"
                        />
                        <div className="inline ms-3">
                          <p className="tnm grey font-1-5 mb-0">
                            Axie Infinity
                          </p>
                          <p className="tnm grey-2 mb-0">Market Pair</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="c6"
                      className="accordion-collapse collapse"
                      data-bs-parent="#market-pair"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6 my-2 tnr grey-2">AXS / BTC</div>
                          <div className="col-md-6 my-2 tnr grey-2">AXS / ETH</div>
                          <div className="col-md-6 my-2 tnr grey-2">AXS / USDT</div>
                          <div className="col-md-6 my-2 tnr grey-2">AXS / USDX</div>
                          <div className="col-md-6 my-2 tnr grey-2">AXS / EURX</div>
                          <div className="col-md-6 my-2 tnr grey-2">AXS / GBPX</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-5 bg-black round-1rem ">
              <div className="row">
                <div className="col-md-6 m-auto p-5">
                  <h1 className="text-white">
                    Buy Up to 3x More With the LIQD Booster
                  </h1>
                  <p className="grey-2 tnr">
                    The LIQD Booster allows you to amplify the purchasing power
                    of your portfolio and boost your crypto exposure up to 3
                    times. Your existing holdings and newly-acquired assets will
                    serve as collateral for a crypto-backed credit to finance
                    the acquisition.
                  </p>
                  <ul className="grey-2 tnr booster">
                    <li>Take advantage of upward market trends.</li>
                    <li>Grow your crypto holdings, without extra capital.</li>
                    <li>
                      Profit from selling once you reach your price target.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/img/exchange/booster-visual.png"
                    className="img-fluid h-100"
                    alt="Buy Up to 3x More With the LIQD Booster"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6 m-auto p-5">
                <h1 className="black">How the LIQD Exchange Works</h1>
                <p className="grey-2 tnr font-1-5">
                  Buy, sell, and swap intuitively - whatever your experience
                  level.
                </p>
                <ul className="tnr exchange-ul">
                  <li>
                    <h4 className="tnm black">Open the LIQD Platform</h4>
                    Go to the LIQD platform or the LIQD app, click on the
                    Exchange tab and select the buy, sell, or swap option.
                  </li>
                  <li className="my-3">
                    <h4 className="tnm black">Select Your Currency Pair</h4>
                    Pick the currency you want to pay with, the currency you
                    would like to receive, and the amount you would like to
                    exchange.
                  </li>
                  <li>
                    <h4 className="tnm black">Click Exchange</h4>
                    {`Click 'Preview Exchange' to review your transaction and
                    finalize it by selecting the 'Exchange' button. That's it,
                    you're all set!`}
                  </li>
                </ul>
              </div>
              <div className="col-md-6 m-auto">
                <img
                  src="assets/img/exchange/how-nexo-exchange-works.png"
                  className="img-fluid"
                  alt="how-nexo-exchange-works"
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
                  <>
                  Learn More <i className="fa-solid fa-arrow-right blue"></i>
                  </>
                  
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="container">
            <div className="row">
              <div className="col-md-2 m-auto text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 18C4.44772 18 4 18.4477 4 19V21C4 21.5523 4.44772 22 5 22H5.90361L5.08072 34.7493C5.03701 35.4266 5.57457 36 6.25327 36H13.7467C14.4254 36 14.963 35.4266 14.9193 34.7493L14.0964 22H15C15.5523 22 16 21.5523 16 21V19C16 18.4477 15.5523 18 15 18H5Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 18C18.4477 18 18 18.4477 18 19V21C18 21.5523 18.4477 22 19 22H19.9036L19.0807 34.7493C19.037 35.4266 19.5746 36 20.2533 36H27.7467C28.4254 36 28.963 35.4266 28.9193 34.7493L28.0964 22H29C29.5523 22 30 21.5523 30 21V19C30 18.4477 29.5523 18 29 18H19Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34 18C33.4477 18 33 18.4477 33 19V21C33 21.5523 33.4477 22 34 22H34.9036L34.0807 34.7493C34.037 35.4266 34.5746 36 35.2533 36H42.7467C43.4254 36 43.963 35.4266 43.9193 34.7493L43.0964 22H44C44.5523 22 45 21.5523 45 21V19C45 18.4477 44.5523 18 44 18H34Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    d="M1.0202 38.8586C1.09058 38.3659 1.5125 38 2.01015 38H45.9898C46.4875 38 46.9094 38.3659 46.9798 38.8586L47.8369 44.8586C47.923 45.461 47.4555 46 46.847 46H1.15301C0.544463 46 0.0769983 45.461 0.16306 44.8586L1.0202 38.8586Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.715419 8.91582C0.291046 9.04179 0 9.43179 0 9.87447V15C0 15.5523 0.447714 16 0.999999 16H47C47.5523 16 48 15.5523 48 15V9.87425C48 9.43168 47.7091 9.04174 47.2849 8.91568L25.7206 2.5076C24.6059 2.17634 23.4189 2.17617 22.304 2.50712L0.715419 8.91582ZM24 13C25.6569 13 27 11.6568 27 9.99998C27 8.34313 25.6569 6.99998 24 6.99998C22.3431 6.99998 21 8.34313 21 9.99998C21 11.6568 22.3431 13 24 13Z"
                    fill="#1E4DD8"
                  ></path>
                </svg>
                <h4 className="black font-1 mt-3">
                  Military-Grade
                  <br />
                  256-Bit Encryption
                </h4>
              </div>
              <div className="col-md-2 m-auto text-center">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.33325 3.79425C5.57183 3.79425 3.33325 6.03283 3.33325 8.79425V12.9609H6.49992V11.9609C6.49992 9.19949 8.7385 6.96092 11.4999 6.96092H28.4999C31.2613 6.96092 33.4999 9.19949 33.4999 11.9609V19.3284C34.641 19.6867 35.7065 20.2157 36.6666 20.8854V8.79425C36.6666 6.03283 34.428 3.79425 31.6666 3.79425H8.33325ZM6.49992 14.6276H3.33325V17.9609H6.49992V14.6276ZM6.49992 19.6276H3.33325V22.9609H6.49992V19.6276ZM6.49992 24.6276H3.33325V28.7942C3.33325 31.5557 5.57183 33.7942 8.33325 33.7942H18.8164C18.5171 32.7888 18.3498 31.7266 18.3344 30.6276H11.4999C8.7385 30.6276 6.49992 28.389 6.49992 25.6276V24.6276ZM29.9999 18.7943C24.1803 18.7943 19.356 23.0552 18.4765 28.6276H11.4999C9.84307 28.6276 8.49992 27.2844 8.49992 25.6276V11.9609C8.49992 10.3041 9.84306 8.96092 11.4999 8.96092H28.4999C30.1568 8.96092 31.4999 10.3041 31.4999 11.9609V18.8898C31.0088 18.8268 30.5082 18.7943 29.9999 18.7943Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    d="M8.33325 35.4609H14.1666V37.7943C14.1666 38.3466 13.7189 38.7943 13.1666 38.7943H9.33325C8.78097 38.7943 8.33325 38.3466 8.33325 37.7943V35.4609Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 30.4609C40 35.9838 35.5228 40.4609 30 40.4609C24.4772 40.4609 20 35.9838 20 30.4609C20 24.9381 24.4772 20.4609 30 20.4609C35.5228 20.4609 40 24.9381 40 30.4609ZM30.9983 25.8247V25.4609C30.9983 24.9087 30.5506 24.4609 29.9983 24.4609C29.446 24.4609 28.9983 24.9087 28.9983 25.4609V25.8262C27.4848 25.8752 26.2729 27.1175 26.2729 28.6429C26.2729 30.1994 27.5347 31.4611 29.0911 31.4611H30.9093C31.3612 31.4611 31.7275 31.8274 31.7275 32.2793C31.7275 32.7312 31.3612 33.0975 30.9093 33.0975H27.8184C27.2661 33.0975 26.8184 33.5452 26.8184 34.0975C26.8184 34.6498 27.2661 35.0975 27.8184 35.0975H28.9983V35.4609C28.9983 36.0132 29.446 36.4609 29.9983 36.4609C30.5506 36.4609 30.9983 36.0132 30.9983 35.4609V35.0961C32.5136 35.0491 33.7275 33.806 33.7275 32.2793C33.7275 30.7229 32.4657 29.4611 30.9093 29.4611H29.0911C28.6393 29.4611 28.2729 29.0948 28.2729 28.6429C28.2729 28.1911 28.6393 27.8247 29.0911 27.8247H32.182C32.7343 27.8247 33.182 27.377 33.182 26.8247C33.182 26.2725 32.7343 25.8247 32.182 25.8247H30.9983Z"
                    fill="#1E4DD8"
                  ></path>
                </svg>
                <h4 className="black font-1 mt-3">
                  Storage in <br /> Class III Vaults
                </h4>
              </div>
              <div className="col-md-2 m-auto text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10.8918C3 9.42414 4.06067 8.16913 5.49224 7.84564C7.70975 7.34455 10.9822 6.46847 13.5 5.21739C17.7 3.13043 21.9 0 24 0C26.1 0 30.3 3.13043 34.5 5.21739C37.0178 6.46847 40.2903 7.34455 42.5078 7.84564C43.9393 8.16913 45 9.42414 45 10.8918V20.4059C45 31.0049 39.3116 40.9192 29.7974 45.5902C26.9551 46.9857 24.6631 48 24.0058 48C23.3484 48 21.054 46.9851 18.2089 45.589C8.6914 40.9186 3 31.0025 3 20.4008V10.8918Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16V17.126C33.7252 17.5701 35 19.1362 35 21V33C35 35.2091 33.2091 37 31 37H17C14.7909 37 13 35.2091 13 33V21C13 19.1362 14.2748 17.5701 16 17.126V16ZM20 17H28V16C28 13.7909 26.2091 12 24 12C21.7909 12 20 13.7909 20 16V17Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.9999 21.5C24.9999 20.9477 24.5521 20.5 23.9999 20.5C23.4476 20.5 22.9999 20.9477 22.9999 21.5L22.9999 22L22.9994 22C21.3426 22 19.9995 23.3432 19.9995 25C19.9995 26.6568 21.3426 28 22.9995 27.9999L24 27.9999L24.9997 27.9999C25.5521 27.9999 25.9998 28.4477 25.9998 29.0001C25.9997 29.5524 25.552 30.0001 24.9997 30.0001L21.4996 30C20.9473 30 20.4996 30.4478 20.4996 31.0001C20.4996 31.5523 20.9473 32.0001 21.4996 32L22.9999 32L22.9999 32.5C22.9999 33.0523 23.4476 33.5 23.9999 33.5C24.5522 33.5 24.9999 33.0522 24.9999 32.5L24.9999 32.0001C26.6566 32 27.9996 30.657 27.9998 29.0003C28 27.3433 26.6567 25.9999 24.9997 25.9999L24 25.9999L24 25.9999L22.9994 25.9999C22.4472 25.9999 21.9995 25.5522 21.9995 25C21.9995 24.4477 22.4472 24 22.9994 24L26.4996 24.0001C27.0519 24.0001 27.4996 23.5523 27.4996 23.0001C27.4996 22.4478 27.0519 22.0001 26.4996 22L24.9999 22L24.9999 21.5Z"
                    fill="white"
                  ></path>
                </svg>
                <h4 className="black font-1 mt-3">
                  $375M Insurance <br /> on Custodial Assets
                </h4>
              </div>
              <div className="col-md-2 m-auto text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1571 15.189C14.988 10.0073 18.1842 5.48416 22.3074 2.06421C10.948 2.9285 2 12.4193 2 24.0001C2 35.5807 10.9478 45.0715 22.3071 45.9359C18.2256 42.5504 15.0524 38.0838 13.2128 32.9676H6.4V15.474H13.1009C13.1055 15.3791 13.1238 15.2832 13.1571 15.189ZM13.6123 16.3953V16.8743C13.7549 16.7489 13.9014 16.6313 14.0514 16.5212C13.9566 16.5165 13.8609 16.4982 13.7668 16.465C13.7126 16.4458 13.661 16.4224 13.6123 16.3953ZM15.0085 15.9402C16.0306 15.4362 17.1704 15.2092 18.3637 15.2092C19.0474 15.2092 19.7566 15.2783 20.4632 15.4609C21.0604 15.6132 21.6401 15.809 22.1548 16.0737C22.5614 16.2827 22.9443 16.5149 23.2867 16.7652C23.5604 16.9652 23.8948 17.2352 24.1703 17.5651L24.8301 18.2983C24.9756 18.1365 25.128 17.9782 25.2872 17.8232C27.0882 16.0703 29.3368 15.2001 31.8711 15.2001C32.161 15.2001 32.4472 15.2115 32.7294 15.2343C30.9245 10.4854 27.8806 6.36006 24 3.26541C19.9512 6.4942 16.8132 10.845 15.0429 15.8553C15.0326 15.8844 15.0211 15.9127 15.0085 15.9402ZM34.8909 15.6582C36.209 16.083 37.4077 16.8039 38.4549 17.8232C40.2423 19.5629 41.1749 21.7354 41.1749 24.2208C41.1749 26.703 40.2447 28.8855 38.4549 30.6276C37.3953 31.6589 36.1808 32.3847 34.8443 32.8074C34.8438 32.8088 34.8433 32.8101 34.8429 32.8114C33.012 37.9929 29.8159 42.516 25.6929 45.9359C37.0522 45.0715 46 35.5807 46 24.0001C46 12.4193 37.052 2.9285 25.6926 2.06421C29.8158 5.48416 33.012 10.0073 34.8429 15.189C34.8979 15.3448 34.9121 15.5051 34.8909 15.6582ZM32.5486 33.2295C32.3251 33.2436 32.0993 33.2507 31.8711 33.2507C29.3368 33.2507 27.0882 32.3805 25.2872 30.6276C25.0675 30.4137 24.8607 30.1932 24.667 29.9663C24.3384 30.5502 23.904 31.0836 23.3643 31.5559C21.9695 32.7763 20.1779 33.2507 18.2724 33.2507C17.4929 33.2507 16.7142 33.1563 15.9604 32.9618C15.7262 32.9013 15.4942 32.8332 15.2669 32.7565C17.0715 37.5094 20.1168 41.6382 24 44.7349C27.7538 41.7414 30.7247 37.7834 32.5486 33.2295ZM30.4586 22.7181C30.0683 23.1128 29.8709 23.5687 29.8709 24.2299C29.8709 24.8936 30.0695 25.3435 30.45 25.724L30.4587 25.7327L30.4672 25.7414C30.8572 26.1402 31.2816 26.3214 31.8711 26.3214C32.4605 26.3214 32.8849 26.1402 33.2749 25.7414L33.2835 25.7327L33.2921 25.724C33.6726 25.3435 33.8713 24.8936 33.8713 24.2299C33.8713 23.5687 33.6738 23.1128 33.2835 22.7181L33.2749 22.7094C32.8762 22.3018 32.448 22.1202 31.8711 22.1202C31.2941 22.1202 30.8659 22.3017 30.4672 22.7094L30.4586 22.7181Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    d="M9 30.7097H11.7776V17.2809H9V30.7097Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    d="M20.501 26.7766C20.501 27.2823 20.3116 27.6943 19.9328 28.0127C19.554 28.3405 19.04 28.4997 18.3727 28.4997C17.7955 28.4997 17.2364 28.3686 16.7133 28.097C16.1812 27.8348 15.8386 27.6194 15.6853 27.4602C15.5319 27.301 15.4147 27.1699 15.3335 27.0669L13.6652 28.79L13.8726 29.0241C13.9898 29.1739 14.1882 29.3612 14.4678 29.5766C14.7383 29.8013 15.063 30.0167 15.4237 30.2227C15.7845 30.4381 16.2534 30.6254 16.8125 30.7753C17.3716 30.9251 17.9578 31 18.553 31C20.0861 31 21.2855 30.6067 22.1513 29.8201C23.017 29.0334 23.4499 28.0221 23.4499 26.7766C23.4499 25.8963 23.2335 25.1753 22.7916 24.5946C22.3587 24.0234 21.8266 23.6114 21.1954 23.3585C20.5641 23.115 19.9418 22.8903 19.3196 22.703C18.6973 22.5157 18.1652 22.291 17.7324 22.0194C17.2995 21.7478 17.074 21.3826 17.074 20.9331C17.074 20.5398 17.2364 20.1933 17.561 19.9124C17.8857 19.6314 18.3095 19.491 18.8326 19.491C19.2745 19.491 19.6983 19.6033 20.1132 19.8094C20.528 20.0247 20.8076 20.1933 20.9338 20.3244C21.0601 20.4555 21.1593 20.5585 21.2314 20.6522L22.8908 18.8261L22.7284 18.6388C22.6292 18.5077 22.4579 18.3485 22.2234 18.1706C21.9889 17.9926 21.7094 17.8147 21.3938 17.6462C21.0781 17.4776 20.6723 17.3278 20.1763 17.1967C19.6893 17.0656 19.1753 17.0094 18.6432 17.0094C17.3085 17.0094 16.2173 17.3933 15.3786 18.1612C14.5399 18.9291 14.1161 19.8562 14.1161 20.9425C14.1161 21.8227 14.3415 22.5438 14.7744 23.1244C15.2163 23.6957 15.7484 24.1077 16.3706 24.3605C16.9929 24.604 17.6151 24.8194 18.2464 25.0067C18.8777 25.194 19.4098 25.4187 19.8426 25.6997C20.2755 25.9712 20.501 26.3271 20.501 26.7766Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    d="M27.8355 24.0047C27.8355 22.7686 28.2323 21.7197 29.0439 20.8676C29.8466 20.0154 30.8295 19.5846 31.9839 19.5846C33.1382 19.5846 34.1212 20.0154 34.9238 20.8676C35.7354 21.7197 36.1322 22.7686 36.1322 24.0047C36.1322 25.2408 35.7354 26.2896 34.9238 27.1324C34.1212 27.9846 33.1382 28.406 31.9839 28.406C30.8295 28.406 29.8466 27.9846 29.0439 27.1324C28.2323 26.2896 27.8355 25.2408 27.8355 24.0047ZM24.9677 23.9953C24.9677 25.9244 25.6441 27.5819 26.9968 28.9492C28.3495 30.3164 30.0179 31 31.9839 31C33.9498 31 35.6182 30.3164 36.9709 28.9492C38.3236 27.5819 39 25.9244 39 23.9953C39 22.0662 38.3236 20.4181 36.9709 19.0508C35.6182 17.6836 33.9498 17 31.9839 17C30.0179 17 28.3495 17.6836 26.9968 19.0508C25.6441 20.4181 24.9677 22.0662 24.9677 23.9953Z"
                    fill="#1E4DD8"
                  ></path>
                </svg>
                <h4 className="black font-1 mt-3">
                  ISO 27001:2013 <br /> Certified
                </h4>
              </div>
              <div className="col-md-2 m-auto text-center">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33341 18.7943H10.0001V12.1276H6.66675C6.20651 12.1276 5.83341 11.7545 5.83341 11.2943C5.83341 10.8341 6.20651 10.461 6.66675 10.461H33.3334C33.7936 10.461 34.1667 10.8341 34.1667 11.2943C34.1667 11.7545 33.7936 12.1276 33.3334 12.1276H30.0001V18.7943H36.6667C37.5872 18.7943 38.3334 18.0481 38.3334 17.1276V5.46098C38.3334 4.5405 37.5872 3.79431 36.6667 3.79431H3.33342C2.41294 3.79431 1.66675 4.5405 1.66675 5.46098V17.1276C1.66675 18.0481 2.41294 18.7943 3.33341 18.7943Z"
                    fill="#9EB3EE"
                  ></path>
                  <g clipPath="url(#clip0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6667 38.7943C10.7462 38.7943 10 38.0481 10 37.1276V7.1276C10 6.20713 10.7462 5.46094 11.6667 5.46094H28.3333C29.2538 5.46094 30 6.20713 30 7.1276V37.1276C30 38.0481 29.2538 38.7943 28.3333 38.7943H11.6667ZM14.1667 36.2943C13.2462 36.2943 12.5 35.5481 12.5 34.6276V12.1276H27.5V34.6276C27.5 35.5481 26.7538 36.2943 25.8333 36.2943H14.1667Z"
                      fill="#1E4DD8"
                    ></path>
                    <ellipse
                      cx="19.9999"
                      cy="22.1276"
                      rx="4.16667"
                      ry="4.16667"
                      fill="#1E4DD8"
                    ></ellipse>
                    <ellipse
                      cx="27.4999"
                      cy="36.2943"
                      rx="4.16667"
                      ry="4.16667"
                      fill="#1E4DD8"
                    ></ellipse>
                    <circle
                      cx="13.3334"
                      cy="36.2943"
                      r="4.16667"
                      fill="#1E4DD8"
                    ></circle>
                    <ellipse
                      cx="19.9999"
                      cy="30.4609"
                      rx="1.66667"
                      ry="1.66667"
                      fill="#1E4DD8"
                    ></ellipse>
                    <ellipse
                      cx="19.9999"
                      cy="13.7943"
                      rx="1.66667"
                      ry="1.66667"
                      fill="#1E4DD8"
                    ></ellipse>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path
                        d="M10 36.7943C10 37.8989 10.8954 38.7943 12 38.7943H28C29.1046 38.7943 30 37.8989 30 36.7943V12.1276H10V36.7943Z"
                        fill="white"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <h4 className="black font-1 mt-3">
                  Log-in & <br />
                  Withdrawal alert
                </h4>
              </div>
              <div className="col-md-2 m-auto text-center">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8598 25.461C7.12601 25.461 1.66724 31.2609 1.66724 38.4155C1.66724 39.5452 2.52915 40.461 3.59237 40.461H26.4088C27.472 40.461 28.3339 39.5452 28.3339 38.4155C28.3339 31.2609 22.8751 25.461 16.1414 25.461H13.8598Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    d="M21.6668 16.2943C21.6668 19.9762 18.6821 22.961 15.0002 22.961C11.3183 22.961 8.3335 19.9762 8.3335 16.2943C8.3335 12.6124 11.3183 9.62762 15.0002 9.62762C18.6821 9.62762 21.6668 12.6124 21.6668 16.2943Z"
                    fill="#9EB3EE"
                  ></path>
                  <path
                    d="M6.66667 16.2943C6.66667 11.6919 10.3976 7.96092 15 7.96092C19.6024 7.96092 23.3333 11.6919 23.3333 16.2943H25C25 10.7714 20.5228 6.29425 15 6.29425C9.47715 6.29425 5 10.7714 5 16.2943H6.66667Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    d="M1.66675 17.1276C1.66675 15.2866 3.15913 13.7943 5.00008 13.7943H6.16756C6.4437 13.7943 6.66756 14.0181 6.66756 14.2943V19.961C6.66756 20.2372 6.4437 20.461 6.16756 20.461H5.00089C3.15995 20.461 1.66675 18.9685 1.66675 17.1276Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    d="M28.3342 17.1278C28.3342 15.2868 26.8418 13.7944 25.0009 13.7944H23.8334C23.5573 13.7944 23.3334 14.0183 23.3334 14.2944V19.9612C23.3334 20.2373 23.5573 20.4612 23.8334 20.4612H25.0001C26.841 20.4612 28.3342 18.9687 28.3342 17.1278Z"
                    fill="#1E4DD8"
                  ></path>
                  <path
                    d="M24.1673 19.6276H15.834"
                    stroke="#1E4DD8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.6676 12.1276C34.8892 12.1276 37.5009 9.51593 37.5009 6.29427C37.5009 3.07261 34.8892 0.460938 31.6676 0.460938C28.4459 0.460938 25.8342 3.07261 25.8342 6.29427C25.8342 9.51593 28.4459 12.1276 31.6676 12.1276ZM32.6676 3.81848C32.6676 3.2662 32.2198 2.81848 31.6676 2.81848C31.1153 2.81848 30.6676 3.2662 30.6676 3.81848V6.31848V7.31848H31.6676H33.3342C33.8865 7.31848 34.3342 6.87077 34.3342 6.31848C34.3342 5.7662 33.8865 5.31848 33.3342 5.31848H32.6676V3.81848Z"
                    fill="#1E4DD8"
                  ></path>
                </svg>
                <h4 className="black font-1 mt-3">
                  24/7 Customer
                  <br /> Support
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="black">FAQs</h1>
              <p className="grey-2">
                All your questions about the LIQD Exchange answered.
              </p>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div id="exchange">
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
                          How to earn up to 0.5% cashback via the Loyalty
                          Program?
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
                            {`To earn instant cashback on every swap, make sure at
                            least 1% of your Portfolio Balance consists of LIQD
                            Tokens. The cashback you get depends on your Loyalty
                            Tier – the higher your Loyalty tier is, the more
                            cashback you'll earn.`}
                            <br />
                          </p>
                          <p>
                            If you want to get the maximum cashback of 0.5%,
                            join the Premium Loyalty tier by holding at least
                            10% of your Portfolio Balance in LIQD.&nbsp;
                          </p>

                          <p>
                            <strong>Example</strong>
                            <br />
                          </p>
                          <p>
                            <em>
                              {`Let's say you stay within LIQD's Premium Loyalty
                              tier and you swap USDC for $5,000 worth of BTC via
                              the LIQD Exchange. That means you'll get $25 worth
                              of BTC in instant cashback:`}
                            </em>
                          </p>

                          <p>
                            <em>$5,000*0.05% = $25 in BTC</em>
                          </p>

                          <p>
                            To find out the exact cashback rates for each tier,
                            visit our{" "}
                            <a
                              href="https://support.nexo.io/"
                              title="help center"
                              rel="noopener noreferrer nofollow"
                            >
                              Help Center
                            </a>
                            .&nbsp;
                          </p>
                          <p>
                            <br />
                            <strong>Note:</strong> {`The total cashback paid is
                            limited up to $100,000 in exchange volume per month.
                            That means you'll be earning cashback until your
                            total monthly amount of swaps exceeds $100,000. That
                            limit resets back to $0 on the 1st day of each
                            month.`}
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
                          What is the LIQD Exchange?
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
                            The LIQD Exchange is our swap functionality, which
                            allows you to buy, sell, and swap instantly between{" "}
                            <strong>200+</strong> <strong>market pairs</strong>{" "}
                            within the comfort of the LIQD platform or the LIQD
                            app.
                          </p>
                          <p>
                            With the tap of a finger and without wasting time on
                            withdrawal confirmations, you can make real-time
                            conversions between all currencies supported by
                            LIQD, <strong>including our native token.</strong>
                            &nbsp;
                          </p>
                          <p>
                            There are <strong>no limits</strong> on the number
                            of swaps you can make, with minimum and maximum
                            order value of <strong>$30</strong> and{" "}
                            <strong>$250,000</strong>, respectively.
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
                          What currencies does the LIQD Exchange support?
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
                            The LIQD Exchange currently supports swaps between
                            200+ market pairs, including these LIQD Token pairs:
                          </p>
                          <ul>
                            <li>LIQD / BTC</li>
                            <li>LIQD / ETH</li>
                            <li>LIQD / USDT</li>
                            <li>LIQD / USDC</li>
                            <li>LIQD / USDx</li>
                            <li>LIQD / EURx</li>
                            <li>LIQD / GBPx</li>
                          </ul>
                          <p>
                            <strong>Note: </strong>Buying and selling coins on
                            the LIQD Exchange requires Identity Verification, as
                            well as swapping LIQD Tokens and XRP. The LIQD Token
                            is currently unavailable to US citizens.
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
                          How can I swap Bitcoin & Crypto via the LIQD Exchange?
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
                            The LIQD Exchange eliminates the need to leave the
                            platform if you want to buy, sell, or swap coins.
                            All you have to do is:
                          </p>
                          <ol>
                            <li>
                              Open the{" "}
                              <u>
                                <Link href="/">LIQD platform</Link>
                              </u>
                            </li>
                            <li>{`Click on the "Exchange" tab.`}</li>
                            <li>
                              Select the currencies you would like to swap.
                            </li>
                            <li>{`Click "Exchange".`}</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="h5">
                        <button
                          className="accordion-button collapsed font-1-5 grey"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#c5"
                          aria-expanded="false"
                          aria-controls="c5"
                        >
                          How does the LIQD Booster work?
                        </button>
                      </h2>
                      <div
                        id="c5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            The LIQD Booster offers a quick and simple way to
                            execute leveraged crypto purchases on the LIQD
                            Exchange with up to $250,000 per single booster
                            transaction. You can buy up to 3 times more of the
                            cryptocurrency you want (except stablecoins and the
                            LIQD Token), using your current crypto holdings and
                            newly-acquired assets as collateral for a
                            crypto-backed credit.
                          </p>
                          <p>
                            The whole flow is intuitive and user-friendly. All
                            you have to do is:
                          </p>
                          <ol>
                            <li>
                              Top up crypto with our Buy with Card option or
                              transfer funds from an external wallet.
                            </li>
                            <li>
                              {`Click on the Exchange tab and choose the 'Booster'
                              option.`}
                            </li>
                            <li>
                              Select the currency you want to leverage against,
                              the leverage percentage (from 1.25x up to 3x) and
                              the asset you want to acquire.
                            </li>
                            <li>
                              {`And that's it! The newly-acquired assets will be
                              added to your Credit Line Wallet as collateral for
                              your booster transaction.`}
                            </li>
                            <li>
                              Once you repay the outstanding crypto credit, you
                              get to retain the difference between the sale
                              price of the assets you borrowed and your original
                              investment.
                            </li>
                          </ol>
                          <p>
                            Fees for the LIQD Booster are factored into your
                            outstanding credit line balance and constitute a
                            percentage of the value of the additional assets we
                            purchase in your name for the booster transaction.
                            There are three different fee tiers that are
                            determined by your LTV.
                          </p>
                          <ul>
                            <li>
                              Up to 50% LTV:<strong> 1% Booster Fee</strong>
                            </li>
                            <li>
                              50-60% LTV: <strong>2% Booster Fee</strong>
                            </li>
                            <li>
                              60-70% LTC: <strong>3% Booster Fee</strong>
                            </li>
                          </ul>
                          <p>
                            <strong>Example</strong>
                          </p>
                          <p>
                            <em>
                              {`Let's say you keep $50,000 worth of BTC inside
                              your LIQD account and you have no outstanding
                              credit. Here's your starting account balance:`}
                            </em>
                          </p>
                          <ul>
                            <li>
                              <em>Outstanding credit: $0</em>
                            </li>
                            <li>
                              <em>Collateral value: $50,000</em>
                            </li>
                            <li>
                              <em>Loan-to-value ratio: 0%</em>
                            </li>
                          </ul>
                          <p>
                            <em>
                              You feel good about the future price of ETH and
                              this optimism manifests in your desire to acquire
                              $100,000 worth of the asset.
                            </em>
                          </p>
                          <p>
                            <em>
                              You initiate a 2x booster transaction facilitated
                              through your $50,000 BTC portfolio. You get
                              $100,000 worth of ETH, and the difference is
                              covered by a crypto-backed credit, collateralized
                              by your newly-acquired ETH holdings.
                            </em>
                          </p>
                          <p>
                            <em>
                              After the booster transaction is executed, you
                              will see $51,000 in outstanding crypto credit:
                            </em>
                          </p>
                          <ul>
                            <li>
                              <em>
                                Outstanding credit: $51,000, comprised of
                                $50,000 initial credit and $1,000 Booster fee
                                (2%)
                              </em>
                            </li>
                            <li>
                              <em>Collateral value: $100,000</em>
                            </li>
                            <li>
                              <em>Loan-to-value ratio: 51%</em>
                            </li>
                          </ul>
                          <p>
                            <em>
                              You can then repay the credit once ETH reaches
                              your price target and collect your newly-acquired
                              asset, benefiting from the price growth.
                            </em>
                          </p>
                          <p>
                            <strong>Note:</strong> Needless to say, the market
                            never moves in a single direction. Similarly, as a
                            leverage trading product, the LIQD Booster can work
                            in both ways – it amplifies your gains when the
                            chosen asset appreciates, yet magnifies the losses
                            when prices are falling. In order to make an
                            educated decision, you need to have a thorough
                            understanding of how the loan-to-value (LTV) ratio
                            and price-based margin calls and liquidations work.
                          </p>
                          <p>
                            <strong>Disclaimer:</strong> Please be aware that
                            the LIQD Booster is not available for citizens or
                            residents of certain jurisdictions, including where
                            restrictions may apply, such as the USA, Canada, and
                            Australia.
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
                  <h1 className="black tnb">Ready to Swap?</h1>
                  <p className="grey-2 tnr">
                    Open your LIQD account today and start buying, selling, and
                    exchanging crypto hassle-free.
                  </p>
                  <button
                    className="btn btn-bg-register tnb text-1-25"
                    type="submit"
                  >
                    Exchange Now <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/img/exchange/footer-cta-generic.jpg"
                    className="img-fluid round-1rem-end"
                    alt="Ready to Swap?"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterMark />
      </>
    );
  }


export default Exchange;
