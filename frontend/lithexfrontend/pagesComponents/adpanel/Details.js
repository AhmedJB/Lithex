import React , {Fragment, useEffect, useState} from 'react'
import Head from 'next/head';
import Header from '../../components/header';
import Loader from '../../components/Loader';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ImageViewer from 'react-simple-image-viewer';
import { postReq, req } from '../../Utils';
import {useToasts} from "react-toast-notifications"
import Footer from '../../components/Footer';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import Link from 'next/link';


import { countries, businesses, employments, sources,cryptos_s,phone_codes } from "../../Utils/constants"


export default function Details(props){
	const [loading,setLoading] = useState(true);
	const [images,setImages] = useState([]);
	const [currentIndex,setCurrentIndex] = useState(0);
	const [isOpen,setIsOpen] = useState(false);
	const [openModal,setOpenModal ] = useState(false);
	const {addToast} = useToasts();
	const [selectedTicket,setSelectedTicket] = useState(null);

	const [data,setData] = useState([
    
	])
  
	const [filtered,setFiltered] = useState(data)

    const [loadedUser,setLoadedUser] = useState(null);



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
    body['country'] = selectedCountrie.name || loadedUser.info.country;
    body['business'] = selectedBusiness.name || loadedUser.info.business;
    body['employment'] = selectedEmployment.name || loadedUser.info.employment  ;
    body['source'] = selectedSource.name || loadedUser.info.source  ;
    body['crypto_source'] = selectedCryptoSource.name || loadedUser.info.crypto_source  ;
    body['country_code'] = selectedPhone.value || loadedUser.info.country_code  ;
    body['user'] = props.userid
    console.log(body)
    let resp = await postReq("modifyadminuser",body,true);
    console.log(resp);
    if (!resp.failed){
      console.log("saved");
      addToast('Saved', { appearance: 'success' , autoDismiss:true });
      
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

    async function fetchUser(id){
        let body = {
            id
        }

        let resp= await postReq("loaduser",body)
        if (resp){
            setLoadedUser(resp);
            addToast("Loaded User",{
                appearance:"success",
                autoDismiss:true
            })
        }else{
            addToast("Failed loading user",{
                appearance:"error",
                autoDismiss:true
            })
        }


    }

	

	useEffect(() => {
        if (props.userid){
            console.log("user is ")
            console.log(props.userid)
            fetchUser(props.userid).then(() => {
                console.log("done fetching");
            })
        }
		
	
	  },[props.userid])

	
	
	  
	
	
	function viewDocs(i){
		console.log(i)
		setImages([filtered[i].receipt]);
		setIsOpen(true);
	  }
	

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'white',
		border: '1px solid #000',
		boxShadow: 24,
		borderRadius:5,
		p: 4,
	  };


    function handleDocsViewer(key){
        let imgs = loadedUser[key];
        if (imgs.length == 0){
            addToast("No approved documents are submitted for current user",{
                appearance:"info",
                autoDismiss:true
            })
        }else{
            setImages(imgs)
            setIsOpen(true);
        }
        
    }

	function handleApprovalModal(i){
		setSelectedTicket(i);
		setOpenModal(true);
	}

	function handleClose(){
		setOpenModal(false);
		setSelectedTicket(null);
	}

	async function approve(status,index){
		let selected = filtered[index];
		selected["status"] = status
		let amount = 0;
		if (status){
			amount = Number(document.getElementById("balance").value);
		}
		
		selected["amount"] = amount
		console.log(selected)
		handleClose();
		let resp = await postReq("balanceApprove",selected);
		if (resp){
			
			addToast(resp.reason,{
				appearance:"success",
				autoDismiss: true
			})
			await refreshData();
		}else{
			addToast("Failed",{
				appearance : "error",
				autoDismiss : true
			})
		}

	}

	const html = <Fragment>
	<Head>

<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no" />
<link rel="manifest" href="/assets/meta/manifest.json" />
<link rel="shortcut icon" href="/assets/meta/favicon.ico" />
<link rel="apple-touch-icon" sizes="57x57" href="/assets/meta/apple-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/assets/meta/apple-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/assets/meta/apple-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/assets/meta/apple-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/assets/meta/apple-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/assets/meta/apple-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/assets/meta/apple-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/assets/meta/apple-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/meta/apple-icon-180x180.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/assets/meta/android-icon-192x192.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/meta/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/assets/meta/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/meta/favicon-16x16.png" />

<title>Admin | Details</title>
</Head>



<div id="nexo-platform" className="application">
	<Header admin={true} location="info" />
	
	<main>
    { loadedUser && <section className="PersonalInfoPage">
            <div>
              <nav className="BreadCrumb">
                <Link href="/panelad/users">
                <a className="back">
                  <i className="fa fa-arrow-alt-circle-left" />
                  Go Back
                </a>
                </Link>
                
                
                <span className="last">User Info</span>
              </nav>
                <div className="header mb-xl2 flex">
                <Image src="/assets/icons/icon-personal.svg" height={50} width={50} />

                  
                  <div>
                    <h1 className="semi-bold tc-grey-700 fs-xl4 mb-xs2">
                      Personal Info
                    </h1>
                    
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
                            defaultValue={loadedUser.info.name}
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
                            defaultValue={loadedUser.info.surname}
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
                            defaultValue={loadedUser.info.city}
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
                            defaultValue={loadedUser.info.postal}
                            required
                            
                          />
                        </div>
                      </div>
                      <div className="f1">
                        <label className="Label">Country*</label>
                        <div className="SelectBox filter">
                          <span className="hv">
                            <label className="hv">
                              <option>{ selectedCountrie.name || loadedUser.info.country }</option>
                            </label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"country")}  >
                              { countries.map( (e,i) => <option key={i} value={i} >{e.name}</option>  ) }
                              
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
                            defaultValue={loadedUser.info.address}
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
                            <label>{selectedBusiness.name || loadedUser.info.business }</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"business")} >
                              { businesses.map( (e,i) => <option key={i}  value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="fade-in">
                        <label className="Label">Employment Status*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedEmployment.name || loadedUser.info.employment}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"employment")} >
                              { employments.map( (e,i) => <option key={i}  value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="fade-in">
                        <label className="Label">Source of Funds*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedSource.name || loadedUser.info.source}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"source")} >
                              { sources.map( (e,i) => <option key={i}  value={i}>{e.name}</option>  ) }
                              
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="fade-in">
                        <label className="Label">Source of crypto*</label>
                        <div className="SelectBox filter">
                          <span>
                            <label>{selectedCryptoSource.name || loadedUser.info.crypto_source}</label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"crypto")} >
                              { cryptos_s.map( (e,i) => <option key={i}  value={i}>{e.name}</option>  ) }
                              
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
                              <option>{selectedPhone.name || loadedUser.info.country_code}</option>
                            </label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e,"phone")} >
                              { phone_codes.map( (e,i) => <option key={i}  value={i}>{e.name}</option>  ) }
                              
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
                            defaultValue={loadedUser.info.phone_number}
                            required
                            
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center" style={{margin:10}}>
                    <button
                        
                        onClick={() => handleDocsViewer("auth_docs")}
                        type="button"
                        className="Button large primary "
                        style={{margin:10}}
                      >
                        Show ID Documents
                      </button>

                      
                      
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
            </div>
          </section>  }
    
              
    <Footer />
  </main>
</div>

{isOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentIndex }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ () => setIsOpen(false)}
        />
      )}


<Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>

		<label className="mt-l" style={{margin:10}}>Amount</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="decimal" id="balance" placeholder="add Amount" /></div>
          <button type="button" onClick={() => approve(true,selectedTicket)} className="Button primary block"> Add Balance </button>
        </Box>
      </Modal>
</Fragment>

return (loading ?  <Loader admin={true} setLoading={setLoading} /> : html );


}