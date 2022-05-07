import { Fragment, useContext, useState, useEffect } from "react";
import { logout,isLogged } from "../../Utils";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link"
import Image from "next/image"
import Router from "next/router";


export default function Header(props) {
    const [openUserDropdown,setOpenUserDropdown] = useState(false);
    const [User,setUser] = useContext(UserContext);

    useEffect(() => {
      console.log(props.location);
      console.log(props.admin);
      if (User.logged) {
        console.log("logged in");
        if (props.admin && !User.isA){
          console.log('here')
          console.log(res)
          Router.push(User.path)

        }else if (!props.admin && User.isA){
          Router.push(User.path)
        }
      }else{
        console.log("need login");
        Router.push("/app/login")
      }
    }
        

   ,[User] )

  const html = (
    <Fragment>
      {!props.admin &&  <header id="Header">
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
            <Link href="/app/exchange">
            <a
              className={ props.location == "exchange" ? "active" : "" }
              aria-expanded="false"
            >
              Exchange
              {/* <i className="fas fa-caret-down" /> */}
            </a>
            </Link>
            <Link href="/app/tickets">
            <a
              className={ props.location == "tickets" ? "active" : "" }
              aria-expanded="false"
            >
              Tickets
              {/* <i className="fas fa-caret-down" /> */}
            </a>
            </Link>
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
                 <Link href="/app/profile"><a >My Profile</a></Link> 
                  <Link href="/app/secrity"><a>Security</a></Link>
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
      </header>  }

      {props.admin && <header id="Header">
    <section>
      <aside>
        <Link href="/">
        <a className="m-t-5">
          <Image src="/assets/images/logo.png" width={100} height={25} />
          
        </a>
        </Link>
        
      </aside>
      <nav>
        <Link href="/panelad/users">
        <a className={ props.location == "users" ? "active" : "" }  aria-current="page">
          <i className="fa fa-user" />
          <span>Users</span>
        </a>
        </Link>
        <Link href="/panelad/manageusers">
        <a className={ props.location == "manageusers" ? "active" : "" }  aria-current="page">
          <i className="fa fa-user" />
          <span>Verification</span>
        </a>

        </Link>
        
          <Link href="/panelad/deposits">
          <a className={ props.location == "deposits" ? "active" : "" } aria-current="page">
          <i className="fa fa-user" />
          <span>Deposits</span>
        </a>
          </Link>
          <Link href="/panelad/coins">
          <a className={ props.location == "coins" ? "active" : "" } aria-current="page">
          <i className="fa fa-user" />
          <span>Coins</span>
        </a>
          </Link>
          <Link href="/panelad/tickets">
          <a className={ props.location == "tickets" ? "active" : "" } aria-current="page">
          <i className="fa fa-user" />
          <span>Tickets</span>
        </a>
          </Link>
          <Link href="/panelad/anchorpanel">
          <a className={ props.location == "anchor" ? "active" : "" } aria-current="page">
          <i className="fa fa-user" />
          <span>Anchor</span>
        </a>
          </Link>
          <Link href="/panelad/transactions">
          <a className={ props.location == "transactions" ? "active" : "" } aria-current="page">
          <i className="fa fa-user" />
          <span>Transactions</span>
        </a>
          </Link>

          {/* <Link href="/panelad/anchorpanel">
          <a className={ props.location == "anchor" ? "active" : "" } aria-current="page">
          <i className="fa fa-user" />
          <span>Anchor</span>
        </a>
          </Link> */}
        

      </nav>
      <aside>
        <a className="MenuAccount" onClick={() => logout(setUser)} aria-expanded="false">
          <i className="fa fa-sign-out" /> Logout </a>
      </aside>
    </section>
  </header>}
      
    </Fragment>
  );

  return html;
}
