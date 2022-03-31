import { Fragment, useContext, useState, useEffect } from "react";
import { logout,isLogged } from "../../Utils";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link"
import Router from "next/router";

export default function Header(props) {
    const [openUserDropdown,setOpenUserDropdown] = useState(false);
    const [User,setUser] = useContext(UserContext);

    useEffect(() => {
        if (User.logged) {
            console.log("here")
        }else{
            console.log("need login");
            Router.push("/app/login")
        }
    }
        

   ,[User] )

  const html = (
    <Fragment>
      <header id="Header">
        <section>
          <aside>
            <a className="m-t-5" href="index.html">
              <img alt="Nexo" width={98} src="/assets/images/logo.png" />
            </a>
          </aside>
          <nav>
           <Link href="/app/profile">
           <a className={ props.location == "profile" ? "active" : "" }     aria-current="page">
              <i className="fa fa-th-list" />
              <span>Account</span>
            </a>
               </Link> 
            
            <Link href="/app/transaction">
            <a className={ props.location == "transaction" ? "active" : "" } >
              <i className="fa fa-history" />
              <span>Transactions</span>
            </a>
            </Link>
            
            <a
              className="ExchangeTab"
              aria-expanded="false"
              href="exchange/buy.html"
            >
              Exchange
              <i className="fas fa-caret-down" />
            </a>
            <a>
              <i className="fa fa-poll" />
              <span>Vote</span>
              <span className="HighlightLabel info" style={{ marginLeft: 8 }}>
                Soon
              </span>
            </a>
          </nav>
          <aside>
            <a
              className="referral-button"
              href="profile/referrals.html"
              style={{ color: "#4A5056" }}
            >
              <i className="fa fa-gift fs-xl2" />
            </a>

            <a
              className="NotificationsButton"
              aria-expanded="false"
              style={{ color: "#777d84" }}
            >
              <i className="fa fa-bell" />
            </a>
            <a
              className="MenuHelp"
              aria-expanded="false"
              style={{ color: "#777d84" }}
            >
              <i className="fa fa-question-circle" />
            </a>

            <div className="dropdown-handler" onClick={() => setOpenUserDropdown(!openUserDropdown)}>
            <a
              
              className="MenuAccount"
              aria-expanded="false"
            >
              <i className="fa fa-user" />
              <i className="fa fa-angle-down" />
            </a>
             { openUserDropdown && <div
              data-tippy-root
              id="tippy-9"
              style={{
                zIndex: 9999,
                margin: 0,
                position: "absolute",
                bottom: -10,
                inset: "0px auto auto 0px",
                transform: "translate(-50%, 38px)",
              }}
            >
              <div
                className="Menu tippy-box light"
                tabIndex={-1}
                data-placement="bottom"
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <div className="tippy-content">
                  <a href="/app/profile">My Profile</a>
                  <a href="/security">Security</a>
                  <hr />
                  <a>English (EN)</a>
                  <hr />
                  <a onClick={() => logout(setUser)} data-dismiss="false">
                    <span>Logout</span> <i className="fa fa-sign-out muted" />
                  </a>
                </div>
                <div
                  className="tippy-arrow"
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translate(81px, 0px)",
                  }}
                />
              </div>
            </div> }
            </div>

            
          </aside>
        </section>
      </header>
    </Fragment>
  );

  return html;
}
