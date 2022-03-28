import { Fragment } from "react";






export default function ProfileNavigation(props){

    const html = (
      <Fragment>
        <div className="actions">
          <a className="ActionButton" href="borrow.html">
            <img alt src="/assets/icons/borrow-dashboard.svg" />
            <strong>Borrow</strong>
            <span>Cash or Stablecoins</span>
          </a>
          <a className="ActionButton" href="repayment.html">
            <img alt src="/assets/icons/repay-dashboard.svg" />
            <strong>Repay</strong>
            <span>with Crypto, Cash or Stablecoins</span>
          </a>
          <a className="ActionButton" href="exchange/buy.html">
            <img alt="Nexo Wallet" src="/assets/icons/exchange-dashboard.svg" />
            <strong>Exchange</strong>
            <span>Buy, Sell and Swap</span>
          </a>
        </div>
      </Fragment>
    );


    return html;




}