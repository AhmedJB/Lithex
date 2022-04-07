import { Fragment } from "react";





export default function Footer(props){

    const html = (
      <Fragment>
        <footer>
          <section>
            <button
              type="button"
              className="Button link LanguagePickerButton m-b-5"
              aria-expanded="false"
            >
              <i className="fa fa-language" /> Language
            </button>
            <nav>
              ©2022{" "}
              <a href="https://nexo.io/" target="_blank" rel="noopener noreferrer">
                LIQD
              </a>
              <i>•</i>
              <a href="https://nexo.io/loan-terms" target="_blank" rel="noopener noreferrer">
                Credit Line Terms
              </a>
              <i>•</i>
              <a href="https://nexo.io/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <i>•</i>
              <a href="https://nexo.io/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                Terms &amp; Conditions
              </a>
            </nav>
          </section>
        </footer>
      </Fragment>
    );


    return html;


}