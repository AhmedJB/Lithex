import { Fragment } from "react";
import Link from "next/link";







export default function IdentityVerification(props){
  const verificationStatus = props.verificationStatus;

  const verificationStep = () => {

    switch (verificationStatus.status) {
      case "personal":
        Router.push(verificationStatus.path)
        break;
    
      default:
        console.log("not supported yet")
        break;
    }


  }


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
                { props.customTitle ?  props.customTitle  : "Verify Identity" }
              </span>
              <span className="fs-l">
                {props.customText ? props.customText : "Complete Identity Verification to unlock all features"}
                
              </span>
            </div>
          </div>
          <Link href="/app/user/verification">
          <a>
            <button type="button" className="Button primary">
            { props.customTitle ?  props.customTitle  : "Identity Verification" } <i className="fa fa-arrow-right m-l-5" />
            </button>
          </a>
          </Link>
          
        </div>
      </Fragment>
    );



    return ( !verificationStatus.verified && html  ) ;



}