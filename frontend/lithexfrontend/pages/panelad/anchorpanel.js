import React , {Fragment, useEffect, useState} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ImageViewer from 'react-simple-image-viewer';
import { handleResp, postReq, req } from '../../Utils';
import {useToasts} from "react-toast-notifications"
import Footer from '../../components/Footer';
import  Router  from 'next/router';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SimpleLoader from '../../components/SimpleLoader';

export default function AnchorPanel(props){
    const [loading,setLoading] = useState(true);
    const [loadingData,setLoadingData] = useState(true);
    const [openModal,setOpenModal ] = useState(false);
	const {addToast} = useToasts();
    const [data,setData] = useState(null);
   

    
  
	


   


    async function refreshData(){
		let resp = await req("anchor");
        
		if (resp.success){
            addToast("Fetched Data",{
                appearance:"success",
                autoDismiss:true
            });
            
            setData(resp.data)
        }else{
            handleResp(resp,addToast);
        }
        
	  }

      
  
  
      

	useEffect(() => {

    refreshData().then(() => {
      console.log("done fetching")
          setLoadingData(false);
    })

        
	
	  },[data])


    
    async function handleAction(action){
        let body = {
            action
        }

        let resp = await postReq("anchor",body);
        handleResp(resp,addToast);
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

<title>Admin | Anchor</title>
</Head>

<LocalizationProvider dateAdapter={AdapterDateFns}>

<div id="nexo-platform" className="application">
	<Header admin={true} location="anchor" />
	
	<main>
    <section className="DashboardPage">
      <div className="col-md-6 mx-auto">
      <div className="card">
          {
              loadingData ?  <div style={{display:"flex",flexDirection:"column"}} className="items-center justify-center h-[400px]">
              <h3>Loading ... </h3><br></br>
              <SimpleLoader />
            </div> : <Fragment>
            <h1 className="text-center"> Anchor Overview</h1>
                <div className="AccountFinancialOverviewCol">
          <div>
            <i className="fa fa-question-circle" />
            <h6>Staked Balance</h6>
            <div />
            <span>{data.deposit_balance ? data.deposit_balance : "0.0t" } UST</span>
          </div>
          {/* <div>
            <i className="fa fa-question-circle" />
            <h6>Active Users</h6>
            <span className="tc-indigo-500">300</span>
            <div />
            <h6>Inactive Users</h6>
            <span className="tc-blue-500">200</span>
          </div> */}
          <div>
            <i className="fa fa-question-circle" />
            <h6> Kraken UST Balance</h6>
            <span className="tc-indigo-500">{data.k_balance ? data.k_balance.toFixed(8) : "0.0t" } UST</span>
            <div />
            <h6> Address Balance </h6>
            <span className="tc-blue-500">{data.account_balance ? data.account_balance : "0.0t" } UST</span>
          </div>
        </div>
        <button onClick={() => handleAction("stake") }  className="Button primary block my-4">
          Stake
        </button>
        <button onClick={() => handleAction("unstake") } className="Button primary block">
            UnStake
        </button>
            </Fragment>
          }
                
                </div>
        
        
        
        
      </div></section>
    <Footer />
  </main>
</div>
</LocalizationProvider>





</Fragment>

return (loading ?  <Loader admin={true} setLoading={setLoading} /> : html);



}
