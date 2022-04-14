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
import Router from "next/router"



export default function Users(props){
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

	async function refreshData(){
		let resp = await req("getadminusers");
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

	const defaultProps = {
		options: data,
		getOptionLabel: (option) => option.username,
	  };
	
	  const style = {
		width : 200
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

    function showDetails(id){
        Router.push("/panelad/userdetails/"+id);
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

<title>Admin | Deposits</title>
</Head>



<div id="nexo-platform" className="application">
	<Header admin={true} location="users" />
	
	<main>
    <section className="DashboardPage">
      <div>
        
        <div className="card">
          <div className="w-full flex items-center justify-between">
            <h3>Verification Tickets</h3>
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
                <th align="left" width={200}>Username</th>
                <th align="left" width={200}>Email</th>
                <th align="left" width={200}>Personal Information Status</th>
                <th align="left" width={200}>Identity Status</th>
                
                
                <th colSpan={3} align="left" />
              </tr>
            </thead>
            <tbody>
              { filtered.map((e,i) => {
                return <tr key={i}>
                  <td align="left">
                    <span className="AssetVisual">
                      <strong>{e.username}</strong>
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.email}
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.has_personalInfo ? "Submitted" :  "Not Submitted" }
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.is_validated ? "Approved" : "Not Approved"}
                    </span>
                  </td>
                  

                  <td align="left" width={110}>
                    <a>
                      <button type="button" onClick={() => showDetails(e.id)} className="Button primary block"> Details </button>
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

return (loading ?  <Loader admin={true} setLoading={setLoading} /> : html);


}