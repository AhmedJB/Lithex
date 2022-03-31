import Head from 'next/head'
import { Fragment , useContext, useState, useEffect } from "react";
import Script from "next/script"
import Header from '../../components/header';
import BalancesCards from '../../components/BalancesCards';
import IdentityVerification from '../../components/IdentityVerification';
import ProfileNavigation from '../../components/ProfileNavigation';
import CoinList from '../../components/CoinList';
import Footer from '../../components/Footer';
import Link from "next/link"
import { UserContext } from '../../contexts/UserContext';
import  Router  from 'next/router';
import Loader from '../../components/Loader';


export default function profile(){

    const [User,setUser] = useContext(UserContext);
    const [loading,setLoading] = useState(true);



    
    


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
        
        <title>Profile</title>
        </Head>
       <div id="nexo-platform" className="application">
       <Header location="profile"  />
  <main>
    <section className="DashboardPage">
      <div>
        <div className="NexoBenefits empty" />
        <div className="banners">
          <a href="exchange/swap/eth_btc.html">
            <div className="Banner lowestCryptCreditLineRates" style={{backgroundImage: 'url("https://static.nexo.io/banners/platform/lower-interest-bg.png")'}}>
              <img alt width="100%" src="https://static.nexo.io/banners/platform/lower-interest-text.png" />
            </div>
          </a>
          <a href="exchange/buy.html">
            <div className="Banner earnUpTo10PercentsOAssets" style={{backgroundImage: 'url("https://static.nexo.io/banners/platform/interest-bg.png")'}}>
              <img alt width="100%" src="https://static.nexo.io/banners/platform/earn-on-crypto-content.png" />
            </div>
          </a>
        </div>

        <BalancesCards />
            <IdentityVerification />
        <div className="card">
            <ProfileNavigation />
                <CoinList />
          <div className="AccountTotalAssetValuePerWallet">
            <h5 aria-expanded="false">
              Estimated Total Value of Crypto: <span>$0.00</span>
            </h5>
            <small>If the value of your collateralassets reaches
              <span>$0.00</span>, small partial loan repayments will be
              initiated automatically</small>
          </div>
        </div>
        <div className="SocialShare standalone card">
          <h6 className="fs-18 m-b-15">
            Share With Your Friends &amp; Family:
          </h6>
          <div className="grid-buttons">
            <div className="col">
              <a className="sharing-button-facebook" target="_blank" rel="noopener noreferrer" href><img alt width={20} src="/assets/icons/facebook.svg" /><span className="sharing-button-text">Share</span></a>
            </div>
            <div className="col">
              <a className="sharing-button-twitter" target="_blank" rel="noopener noreferrer" href><img alt width={20} src="/assets/icons/twitter.svg" /><span className="sharing-button-text">Tweet</span></a>
            </div>
            <div className="col">
              <a className="sharing-button-linkedin" target="_blank" rel="noopener noreferrer" href><img alt width={20} src="/assets/icons/linkedin.svg" /><span className="sharing-button-text">Post</span></a>
            </div>
            <div className="col">
              <div className="copy-btn">
                <textarea readOnly style={{position: 'fixed', width: 0, height: 0, opacity: 0}} defaultValue={""} /><a className="sharing-button-link" target="_blank" rel="noopener noreferrer" href><img alt width={20} src="/assets/icons/link.svg" /><span className="sharing-button-text">Copy URL</span></a><i className="fa fa-check" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
   </main>
</div>



    </Fragment>


    return (loading ?  <Loader setLoading={setLoading} /> : html)



}