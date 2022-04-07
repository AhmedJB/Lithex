import { Fragment, useContext, useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../../components/Loader";
import { UserContext } from "../../../contexts/UserContext";
import Profileaside from "../../../components/Profileaside";
import { countries, businesses, employments, sources,cryptos_s,phone_codes } from "../../../Utils/constants";
import Link from "next/link";
import { postReq } from "../../../Utils";
import { useToasts } from 'react-toast-notifications';
import  Router  from "next/router";









export default function Personal(props) {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  // select states
  const [selectedCountrie , setSelectedCountrie] = useState(0);
  const [selectedBusiness , setSelectedBusiness ] = useState(0);
  const [selectedEmployment, setSelectedEmployment] = useState(0);
  const [selectedSource , setSelectedSource] = useState(0);
  const [selectedCryptoSource , setSelectedCryptoSource] = useState(0);
  const [selectedPhone , setSelectedPhone ] = useState(0);

  // handle select change

  const handleSelectChange = (e,type) => {
    let value = Number(e.target.value);
    switch (type) {
      case "country":
        setSelectedCountrie(countries[value]);
        break;

        case "business":
          setSelectedBusiness(businesses[value]);
          break;
          case "employment":
            setSelectedEmployment(employments[value]);
            break;

            case "source":
              setSelectedSource(sources[value]);
              break;

              case "crypto":
                setSelectedCryptoSource(cryptos_s[value]);
                break;
                case "phone":
        setSelectedPhone(phone_codes[value]);
        break;
        
      default:
        break;
    }

  }


  const handleSubmit = async (e) => {
    let t = document.getElementById('form-container');
    let inputs = t.querySelectorAll('input')
    let body = {}
    for (let input of inputs){
      body[input.name] = input.value;
    }
    body['country'] = selectedCountrie.name;
    body['business'] = selectedBusiness.name;
    body['employment'] = selectedEmployment.name;
    body['source'] = selectedSource.name;
    body['crypto_source'] = selectedCryptoSource.name;
    body['country_code'] = selectedPhone.value;
    console.log(body)
    let resp = await postReq("info",body,true);
    console.log(resp);
    if (!resp.failed){
      console.log("saved");
      addToast('Saved', { appearance: 'success' , autoDismiss:true });
      Router.push("/app/profile")
      
    }else{
      if (resp.failed){
        for (let key of Object.keys(resp.result)){
          if (key == "detail"){
            addToast("failed : " + resp.result[key],{
              appearance:'error',
              autoDismiss:true
            })
          }else{
            addToast("failed : " +  key + " : " + resp.result[key][0],{
              appearance:'error',
              autoDismiss:true
            })
          }
          

        }
      }else{
        addToast("failed", { appearance : 'error', autoDismiss:true})
      }
      
    }

  }


  


  const html = (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"
        />
        <link rel="manifest" href="/assets/meta/manifest.json" />
        <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/meta/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/meta/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/meta/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/meta/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/meta/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/meta/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/meta/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/meta/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/meta/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/meta/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/meta/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/meta/favicon-16x16.png"
        />

        <title>Personal Info</title>
      </Head>
      <div id="nexo-platform" className="application">
        <Header location="personal" setLoading={setLoading} />
        <main>
          <section className="PersonalInfoPage">
            <div>
              <nav className="BreadCrumb">
                <Link href="/app/profile">
                <a className="back">
                  <i className="fa fa-arrow-alt-circle-left" />
                  Go Back
                </a>
                </Link>
                
                <span className="parent">Verify Identity</span>
                <span className="divider">/</span>
                <span className="last">Personal Info</span>
              </nav>
              <main>
                <div className="header mb-xl2 flex">
                <Image src="/assets/icons/icon-personal.svg" height={50} width={50} />

                  
                  <div>
                    <h1 className="semi-bold tc-grey-700 fs-xl4 mb-xs2">
                      Personal Info
                    </h1>
                    <p className="fs-l">
                      Submit your personal information and add а mobile phone
                      number
                    </p>
                  </div>
                </div>
                <div className="FormPersonalInfo" id='form-container'>
                  <div>
                    <h3 className="semi-bold fs-xl2 tc-grey-700 mb-m">
                      Legal Name &amp; Residential Address
                    </h3>
                    <div className="form-section">
                      <div className="f1">
                        <label className="Label">First Name*</label>
                        <div className="TextBox">
                          <input
                            type="text"
                            name="name"
                            required
                            
                          />
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">Last Name*</label>
                        <div className="TextBox">
                          <input
                            type="text"
                            name="surname"
                            required
                            
                          />
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">City*</label>
                        <div className="TextBox">
                          <input
                            type="text"
                            name="city"
                            required
                            
                          />
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">Postal Code / ZIP*</label>
                        <div className="TextBox">
                          <input
                            type="text"
                            name="postal"
                            required
                            
                          />
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">Country*</label>
                        <div className="SelectBox filter">
                          <span className="hv">
                            <label className="hv">
                              <option>{ selectedCountrie.name }</option>
                            </label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"country")} >
                              { countries.map( (e,i) => <option key={i} value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">Address Line 1*</label>
                        <div className="TextBox">
                          <input
                            type="text"
                            name="address"
                            required
                            
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="semi-bold fs-xl2 tc-grey-700 mb-m">
                      Employment details
                    </h3>
                    <div className="form-section">
                      <div className="fade-in">
                        <label className="Label">Nature of Business*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedBusiness.name}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"business")} >
                              { businesses.map( (e,i) => <option key={i} value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="fade-in">
                        <label className="Label">Employment Status*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedEmployment.name}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"employment")} >
                              { employments.map( (e,i) => <option key={i} value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="fade-in">
                        <label className="Label">Source of Funds*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedSource.name}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"source")} >
                              { sources.map( (e,i) => <option key={i} value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="fade-in">
                        <label className="Label">Source of crypto*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedCryptoSource.name}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"crypto")} >
                              { cryptos_s.map( (e,i) => <option key={i} value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="semi-bold fs-xl2 tc-grey-700 mb-m">
                      Phone Number
                    </h3>
                    <div className="form-section">
                      <div className="f1">
                        <label className="Label">Country Code*</label>
                        <div className="SelectBox filter">
                          <span className="hv">
                            <label className="hv">
                              <option>{selectedPhone.name}</option>
                            </label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"phone")} >
                              { phone_codes.map( (e,i) => <option key={i} value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">
                          Mobile Phone Number (without country code)*
                        </label>
                        <div className="TextBox">
                          <input
                            type="text"
                            name="phone_number"
                            required
                            
                          />
                        </div>
                      </div>
                    </div>
                    <footer>
                      <span>
                        <i className="fa fa-user-shield mr-xs tc-mint-500" />
                        As a regulated business, we need this info to comply
                        with financial regulators. Your data is encrypted and
                        securely stored on our system.
                      </span>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="Button large primary"
                      >
                        Submit
                      </button>
                    </footer>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );

  return (loading ?  <Loader setLoading={setLoading} /> : html);
}
