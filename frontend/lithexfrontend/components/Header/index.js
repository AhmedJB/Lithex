import { Fragment } from "react";




export default function Header(){



    const html = <Fragment>
            <header id="Header">
    <section>
        <aside>
        <a className="m-t-5" href="index.html"><img alt="Nexo" width={98} src="assets/images/logo.png" /></a>
        </aside>
        <nav>
        <a className="active" href="index.html" aria-current="page"><i className="fa fa-th-list" /><span>Account</span></a><a className href="transactions.html"><i className="fa fa-history" /><span>Transactions</span></a><a className="ExchangeTab" aria-expanded="false" href="exchange/buy.html">Exchange<i className="fas fa-caret-down" /></a><a><i className="fa fa-poll" /><span>Vote</span><span className="HighlightLabel info" style={{marginLeft: 8}}>Soon</span></a>
        </nav>
        <aside>
        <a className="referral-button" href="profile/referrals.html" style={{color: '#4A5056'}}><i className="fa fa-gift fs-xl2" /></a><a className="NotificationsButton" aria-expanded="false" style={{color: '#777d84'}}><i className="fa fa-bell" /></a><a className="MenuHelp" aria-expanded="false" style={{color: '#777d84'}}><i className="fa fa-question-circle" /></a><a className="MenuAccount" aria-expanded="false"><i className="fa fa-user" /><i className="fa fa-angle-down" /></a>
        </aside>
    </section>
    </header>


    </Fragment>



    return html;



}