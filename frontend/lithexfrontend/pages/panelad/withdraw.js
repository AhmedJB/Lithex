import React , {Fragment, useEffect, useState} from 'react'
import Head from 'next/head';
import Header from '../../components/header';
import Loader from '../../components/Loader';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ImageViewer from 'react-simple-image-viewer';
import { handleResp, postReq, req } from '../../Utils';
import {useToasts} from "react-toast-notifications"
import Footer from '../../components/Footer';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { fiats } from '../../Utils/constants';



export default function Earn(props){
	const [loading,setLoading] = useState(true);
	const [images,setImages] = useState([]);
	const [currentIndex,setCurrentIndex] = useState(0);
	const [isOpen,setIsOpen] = useState(false);
	const [openModal,setOpenModal ] = useState(false);
    const [openReview,setOpenReview] = useState(false);
	const {addToast} = useToasts();
	const [selectedTicket,setSelectedTicket] = useState(null);

	const [data,setData] = useState([
    
	])
  
	const [filtered,setFiltered] = useState(data)

	async function refreshData(){
		let resp = await req("withdrawad");
		if (resp){
		  console.log(resp);
		  setData(resp);
		  setFiltered(resp);
		}else{
		  console.log("failed");
		}
	  }


      const styleWith = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "min(100%,1000px)",
        minHeight:"300px",
        bgcolor: 'background.paper',
        borderRadius:8,
        boxShadow: 24,
        display:"flex",
        flexDirection : "column"
      };

	useEffect(() => {

		refreshData().then(() => {
		  console.log("done fetching")
		})
	
	  },[])

	const defaultProps = {
		options: data,
		getOptionLabel: (option) => option.t_id,
	  };
	
	  const style = {
		width : 200
	  }
	
	  function handleFilter(option,newValue){
		console.log(newValue)
        if (newValue){
            let option_fil = data.filter((e) => e.t_id == newValue.t_id);
		if (option_fil.length == 0) {
		  setFiltered(data);
		}else{
		  setFiltered(option_fil)
		}
        }else{
            setFiltered(data);
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

	function handleRejectionModal(i){
		setSelectedTicket(i);
		setOpenModal(true);
	}

	function handleClose(){
		setOpenModal(false);
		setSelectedTicket(null);
	}

	async function approve(status,index,selectedTicket=null){
        let selected;
        if (!selectedTicket){
            selected = filtered[index];
        }else{
            selected = selectedTicket;
        }	
        let reason_container = document.getElementById("reason")
        let reason = "";
        if (reason_container){
            reason = reason_container.value;
        }
        let tag_container = document.getElementById("tag")
        let tag;
        if (tag_container){
            tag = tag_container.value;
        }else{
            tag = ""
        }
		let body  = {
            id : selected['id'],
            status,
            reason,
            action : selected.r_type,
            tag
        }
		console.log(body)
		handleClose();
        setOpenReview(false);
		let resp = await postReq("withdrawad",body);
		handleResp(resp,addToast);
        refreshData();

	}

    function handleReview(i){
        setSelectedTicket(filtered[i]);
		setOpenReview(true);
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

<title>Admin | Earn</title>
</Head>



<div id="nexo-platform" className="application">
	<Header admin={true} location="withdraw" />
	
	<main>
    <section className="DashboardPage">
      <div>
        
        <div className="card">
          <div className="w-full flex items-center justify-between">
            <h3>Withdraw Requests</h3>
          <Autocomplete
                  {...defaultProps}
                  sx={style}
                  id="clear-on-escape"
                  onChange={handleFilter}
                  clearOnEscape
                  renderInput={(params) => (
                    <TextField {...params} label="Filter By ID" variant="standard" />
                  )}
                />
          </div>
          <table className="AssetList" id="AssetList" cellSpacing={0} cellPadding={0} border={0}>
            <thead>
              <tr>
              <th align="left" width={400}>Transaction ID</th>
                <th align="left" width={200}>Username</th>
                <th align="left" width={200}>Request Type</th>
                <th align="left" width={200}>Coin</th>
                <th align="left" width={200}>Amount</th>
                
                
                <th colSpan={3} align="left" />
              </tr>
            </thead>
            <tbody>
              { filtered.map((e,i) => {
                return <tr key={i}>
                    <td align="left">
                    <span className="AssetVisual">
                      <strong>{e.t_id}</strong>
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetVisual">
                      <strong>{e.user.username}</strong>
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetVisual">
                      <strong>{e.r_type}</strong>
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.coin.symbol}
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.amount}
                    </span>
                  </td>
                  

                  
                  <td align="left" width={110}>
                    <a>
                      <button type="button" onClick={() =>  handleReview(i) } className="Button primary block"> Approve </button>
                    </a>
                  </td>

				  <td align="left" width={110}>
                    <a>
                      <button type="button" onClick={() => handleRejectionModal(i)} className="Button secondary block"> Reject </button>
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
        open={openReview}
        onClose={() =>  setOpenReview(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleWith}  className=" items-center justify-center">
          {
            selectedTicket && <><h1 className="text-center my-3">Submit a withdraw request</h1>
            <h3 className="my-2">For Coin : {selectedTicket.symbol}</h3>
            {
              selectedTicket.bank_details && <> 
                <label className="mt-l" style={{margin:10}}>Account Name</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.bank_details.account_name} type="text"  id="accountName"  placeholder="Account Name" />
              </div>
              <label className="mt-l" style={{margin:10}}>Bank Name</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.bank_details.bank_name} type="text" id="bankName"  placeholder="Bank Name" />
              </div>
              <label className="mt-l" style={{margin:10}}>Bank Code</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.bank_details.bank_code} type="text" id="bankCode"  placeholder="Bank Code" />
              </div>
              <label className="mt-l" style={{margin:10}}>Transit Number</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.bank_details.transit_number} type="text" id="transitNumber"  placeholder="Transit Number" />
              </div>
              <label className="mt-l" style={{margin:10}}>Account Number</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.bank_details.account_number} type="text" id="accountNumber"  placeholder="Account Number" />
              </div>
              </>
            }

            {
              !selectedTicket.bank_details && <>
                <label className="mt-l" style={{margin:10}}>Address</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.address} type="text"  id="address"  placeholder="Address" />
              </div>
               </>
            }
            <label className="mt-l" style={{margin:10}}>Amount to withdraw</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input disabled={true} defaultValue={selectedTicket.amount} type="number" step=".01" id="earnAmount"  placeholder="Value" />
              </div>

              <label className="mt-l" style={{margin:10}}>Withdraw Tag</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input  type="text"  id="tag"  placeholder="Value" />
              </div>
  
              <button type="button" onClick={() => approve(true,-1,selectedTicket)} className="Button primary my-5  w-1/5"> Send </button>
              
              </>
          }
          
          

          

        </Box>
      </Modal>

<Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>

		<label className="mt-l" style={{margin:10}}>Rejection Reason</label>
          <div className="TextBox m-4" style={{margin:10}}><input type="text" id="reason" placeholder="Rejection Reason" /></div>
          <button type="button" onClick={() => approve(false,selectedTicket)} className="Button primary block"> Reject </button>
        </Box>
      </Modal>
</Fragment>

return (loading ?  <Loader admin={true} setLoading={setLoading} /> : html);


}