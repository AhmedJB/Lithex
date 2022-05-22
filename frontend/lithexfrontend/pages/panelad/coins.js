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

import Switch from '@mui/material/Switch';

export default function Coins(props){
    const [loading,setLoading] = useState(true);
    const [openModal,setOpenModal ] = useState(false);
	const {addToast} = useToasts();
    const [data,setData] = useState([
    
	])
    const [selectedCoin,setSelectedCoin] = useState(null);
  
	const [filtered,setFiltered] = useState(data)


    async function refreshData(){
		let resp = await req("enablercoin");
		if (resp){
		  console.log(resp);
		  setData(resp);
		  setFiltered(resp);
		}else{
		  console.log("failed");
		}
	  }

	useEffect(() => {

		refreshData().then(() => {
		  console.log("done fetching")
		})
	
	  },[])

    function handleFees(i){
        setSelectedCoin(filtered[i]);
        console.log(filtered[i]);
        setOpenModal(true);

    }
    function handleClose(){
		setOpenModal(false);
        setSelectedCoin(null);
	}

    function handleFilter(option,newValue){
		console.log(newValue)
		let option_fil = data.filter((e) => e == newValue);
		if (option_fil.length == 0) {
		  setFiltered(data);
		}else{
		  setFiltered(option_fil)
		}
	  }

    const defaultProps = {
		options: data,
		getOptionLabel: (option) => option.symbol,
	  };
	
	  const style = {
		width : 200
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


    async function updateFee(){
        let deposit_fee = Number(document.getElementById("d_fee").value)
        let withdraw_fee = Number(document.getElementById("w_fee").value)
        let exchange_fee = Number(document.getElementById("e_fee").value)
        let spread = Number(document.getElementById("spread").value)
        let interest = Number(document.getElementById("interest").value)
        let n_fee = document.getElementById("n_fee") ? Number(document.getElementById("n_fee").value) : false;
        let body = selectedCoin;
        body['d_fee'] = deposit_fee/100;
        body['w_fee'] = withdraw_fee/100;
        body['e_fee'] = exchange_fee/100;
        body['spread'] = spread / 100;
        body['interest'] = interest / 100;
        body['n_fee'] = n_fee;
        console.log(body);
        setOpenModal(false);
        let resp = await postReq("modifycoin",body);
        if (resp){
            addToast("Modified",{
                autoDismiss:true,
                appearance:"success"
            })
        }else{
            addToast("Failed",{
                autoDismiss:true,
                appearance:"error"
            })
        }

    }

    async function updateStatus(coin,disabled){
      let body = {
        coin,
        disabled
      }
  
      let resp = await postReq("enablercoin",body);
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

<title>Admin | Coins</title>
</Head>



<div id="nexo-platform" className="application">
	<Header admin={true} location="coins" />
	
	<main>
    <section className="DashboardPage">
      <div>
        
        <div className="card">
          <div className="w-full flex items-center justify-between">
            <h3>Coins</h3>
          <Autocomplete
                  {...defaultProps}
                  sx={style}
                  id="clear-on-escape"
                  onChange={handleFilter}
                  clearOnEscape
                  renderInput={(params) => (
                    <TextField {...params} label="Filter By Username" variant="standard" />
                  )}
                />
          </div>
          <table className="AssetList" id="AssetList" cellSpacing={0} cellPadding={0} border={0}>
            <thead>
              <tr>
                <th  width={200}></th>
                <th align="left" width={200}>Coin</th>
                <th align="left" width={200}>Deposit Fees</th>
                <th align="left" width={200}>Withdraw Fees</th>
                <th align="left" width={200}>Exchange Fees</th>
                <th align="left" width={200}>Interests Rate</th>
                <th align="left" width={200}>Spread</th>
                <th align="left" width={200}>Disabled</th>
                

                
                
                <th colSpan={3} align="left" />
              </tr>
            </thead>
            <tbody>
              { filtered.map((e,i) => {
                return <tr key={i}>
                  <td align="left">
                    <span className="AssetVisual">
                    <Image src={e.image} height={32} width={32} />
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.symbol}
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.d_fee*100}%
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.w_fee*100}%
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.e_fee*100}%
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.interest*100}%
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.spread*100}%
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                    <Switch onChange={(v,newv) =>  updateStatus(e.id,newv)}  defaultChecked={e.admin_disabled} />
                    </span>
                  </td>
                  
                  

                  <td align="left" width={110}>
                    <a>
                      <button type="button" onClick={() => handleFees(i)} className="Button primary block"> Details </button>
                    </a>
                  </td>
                </tr>


              }) }
              
            </tbody>
          </table>
        </div>
      </div></section>
    <Footer />
  </main>
</div>




<Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            <h2 className="text-center">Modify Fees</h2>
                {
                    selectedCoin && <Fragment>
                            <label className="mt-l" style={{margin:10}}>Deposit Fee</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="number" step=".01" id="d_fee" defaultValue={ selectedCoin.d_fee*100 } placeholder="Value" /></div>
          <label className="mt-l" style={{margin:10}}>Withdraw Fee</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="number" step=".01" id="w_fee" defaultValue={ selectedCoin.w_fee*100 } placeholder="Value" /></div>
          <label className="mt-l" style={{margin:10}}>Exchange Fee</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="number" step=".01" id="e_fee" defaultValue={ selectedCoin.e_fee*100 } placeholder="Value" /></div>
          <label className="mt-l" style={{margin:10}}>Interests Rate</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="number" step=".01" id="interest" defaultValue={ selectedCoin.interest*100 } placeholder="Value" /></div>
          <label className="mt-l" style={{margin:10}}>Spread</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="number" step=".01" id="spread" defaultValue={ selectedCoin.spread*100 } placeholder="Value" /></div>
          
          {selectedCoin.token &&  <><label className="mt-l" style={{margin:10}}>Network Fee</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="number" step=".01" id="n_fee" defaultValue={ selectedCoin.network_fee } placeholder="Value" /></div></>}
         
          <button type="button" onClick={() => updateFee()} className="Button primary block"> Modify </button>
                    </Fragment>
                }
		
        </Box>
      </Modal>
</Fragment>

return (loading ?  <Loader admin={true} setLoading={setLoading} /> : html);



}
