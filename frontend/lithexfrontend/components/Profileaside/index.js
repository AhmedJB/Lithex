import { Fragment } from "react";





export default function Profileaside(props){

    const html = (
      <Fragment>
        <aside>
          <nav>
            <a aria-current="page" className={ props.location == "verification" ? "active" : "" } href="verification.html">
              <span>Identity Verification</span>
            </a>
            <a className={ props.location == "loyalty" ? "active" : "" } href="loyalty-levels.html">
              <span>Loyalty Levels</span>
            </a>
            <a className={ props.location == "referral" ? "active" : "" } href="referrals.html">
              <span>Refer a Friend</span>
            </a>
            <a className={ props.location == "settings" ? "active" : "" } href="settings.html">
              <span>Settings</span>
            </a>
          </nav>
        </aside>
      </Fragment>
    );


    return html;


}