import { Fragment } from "react";
import Link from "next/link";







export default function IdentityVerification(props){


    const html = (
      <Fragment>
        <div className="VerifyIdentityBanner">
          <div className="VerificationStatusIcon">
            <img
              alt
              width={42}
              height={42}
              src="/assets/icons/security/identity-verification.svg"
            />
            <i className="status-icon fas fa-exclamation-circle tc-yellow-500" />
          </div>
          <div style={{ display: "flex", flex: "1 1 0%" }}>
            <div className="VerificationStatusText">
              <span className="tc-grey-700 semi-bold fs-xl">
                Verify Identity
              </span>
              <span className="fs-l">
                Complete Identity Verification to unlock all features
              </span>
            </div>
          </div>
          <Link href="/app/user/verification">
          <a>
            <button type="button" className="Button primary">
              Identity Verification <i className="fa fa-arrow-right m-l-5" />
            </button>
          </a>
          </Link>
          
        </div>
      </Fragment>
    );



    return html;



}