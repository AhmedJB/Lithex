import { Fragment } from "react";





export default function BalancesCards(){


    const html = (
      <Fragment>
        <div className="AccountFinancialOverview">
          <div>
            <i className="fa fa-question-circle" />
            <h6>Portfolio Balance</h6>
            <div />
            <span>$0.00</span>
          </div>
          {/* <div>
            <i className="fa fa-question-circle" />
            <h6>Credit Line</h6>
            <span className="tc-indigo-500">$0.00</span>
            <div />
            <h6>Available Credit</h6>
            <span className="tc-blue-500">$0.00</span>
          </div> */}
          <div>
            <i className="fa fa-question-circle" />
            <h6>Interest Earned</h6>
            <div />
            <span className="tc-mint-500">$0.00</span>
          </div>
          <div>
            <div
              className="LoyaltyBadge"
              style={{
                width: 60,
                height: 60,
                position: "absolute",
                top: 24,
                right: 24,
              }}
            >
              <img alt width={54} src="/assets/icons/ll-base.png" />
            </div>
            <h6>Loyalty Level</h6>
            <div />
            <span>Base</span>
            <a href="profile/loyalty-levels.html">
              Upgrade to Silver Level <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </Fragment>
    );

    return html;



}