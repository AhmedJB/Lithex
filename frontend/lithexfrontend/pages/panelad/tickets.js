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

export default function Tickets(props){
    const [loading,setLoading] = useState(true);
    const [openModal,setOpenModal ] = useState(false);
	const {addToast} = useToasts();
    const [data,setData] = useState([])
    const [selectedTicket,setselectedTicket] = useState(null);

    const [openSearch,setOpenSearch] = useState(false);
  
	const [filtered,setFiltered] = useState(data)
    const [fromDate,setFromDate] = useState(new Date());
    const [toDate,setToDate] = useState(new Date(fromDate.getTime() + 3600*24*1000));


    async function searchById(){
        let id = document.getElementById("tickId").value;
        setOpenSearch(false);
        let body = {
            id
        }
        let resp = await postReq("admtickets",body);
        if (resp.success){
            addToast("Found Ticket",{
                appearance:"success",
                autoDismiss:true
            });
            setFiltered(resp.data)
        }else{
            handleResp(resp,addToast);
        }
        
    }


    async function refreshData(){
		let resp = await req("admtickets");
		if (resp){
		  console.log(resp);
		  setData(resp);
		  setFiltered(resp);
		}else{
		  console.log("failed");
		}
	  }

      function filterByDate(fromD=null,toD=null){
        let from = fromDate;
        let to = toDate;
        if (fromD){
          from = fromD;
        }
        if (toD) {
          to = toD;
        }
        console.log(to);
        let temp = data.filter((e) =>{
          let date = new Date(e.date);
          date.setHours(0,0,0,0);
          from.setHours(0,0,0,0);
          to.setHours(0,0,0,0);
          return (date >= from && date < to)
        } )
        console.log(temp);
        setFiltered(temp);
      }
  
  
      function handleDateChange(t,side){
        console.log(t);
        switch (side) {
          case 'from':
            setFromDate(t)
            filterByDate(t,null);
            break;
          case 'to':
            setToDate(t)
            filterByDate(null,t);
            break;
        }
        
      }

	useEffect(() => {

		refreshData().then(() => {
		  console.log("done fetching")
		})
	
	  },[])

    function handleTicket(i){
        setselectedTicket(filtered[i]);
        console.log(filtered[i]);
        setOpenModal(true);

    }
    function handleClose(){
		setOpenModal(false);
        setselectedTicket(null);
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
		getOptionLabel: (option) => option.user_data.username,
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

<title>Admin | Tickets</title>
</Head>

<LocalizationProvider dateAdapter={AdapterDateFns}>

<div id="nexo-platform" className="application">
	<Header admin={true} location="tickets" />
	
	<main>
    <section className="DashboardPage">
      <div>
        
        <div className="card">
          <div className="w-full flex items-center justify-between">
            <h3>Tickets</h3>
          
                <div className='flex items-center'>
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
                <div className="DateRangeBox mx-2">
                        
                          
                            <div className="flex items-center">
                            <MobileDatePicker
                              label="From Date"
                              inputFormat="dd/MM/yyyy"
                              value={fromDate}
                              onChange={(v) => handleDateChange(v,'from')}
                              renderInput={(params) => <TextField {...params} />}
                            />
                              <div
                                className="DateRangePickerInput_arrow DateRangePickerInput_arrow_1"
                                aria-hidden="true"
                                role="presentation"
                              >
                                -
                              </div>
                              <MobileDatePicker
                              label="To Date"
                              inputFormat="dd/MM/yyyy"
                              value={toDate}
                              onChange={(v) => handleDateChange(v,'to')}
                              renderInput={(params) => <TextField {...params} />}
                            />
                              
                            </div>
                         
                        
                </div>
                <div className=" mx-2 ">
               <button className="Button primary block" onClick={() => setOpenSearch(true)}>Search By ID</button>
                </div>
                      
                </div>
          </div>
          <table className="AssetList" id="AssetList" cellSpacing={0} cellPadding={0} border={0}>
            <thead>
              <tr>
                
                <th align="left" width={200}>Ticket ID</th>
                <th align="left" width={200}>Username</th>
                <th align="left" width={200}> Email</th>

                
                
                <th colSpan={3} align="left" />
              </tr>
            </thead>
            <tbody>
              { filtered.map((e,i) => {
                return <tr key={i}>
                  
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.id}
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.user_data.username}
                    </span>
                  </td>
                  <td align="left">
                    <span className="AssetBalance right semi-bold">
                      {e.email}
                    </span>
                  </td>
                  
                  
                  

                  <td align="left" width={110}>
                    <a>
                      <button type="button" onClick={() => handleTicket(i)} className="Button primary block"> See Message </button>
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
</LocalizationProvider>




<Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            <h2 className="text-center">Ticket Message</h2>
                {
                    selectedTicket && <Fragment>
                            <p className="w-full p-3 text-justify">
                                {selectedTicket.message}
                            </p>
          
                    </Fragment>
                }
		
        </Box>
      </Modal>

      <Modal
        open={ openSearch }
        onClose={() => setOpenSearch(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            <h2 className="text-center">Search For Ticket By ID</h2>
            <input type="text" className="outline-none p-[10px] rounded-[5px] border-2 my-5 w-full" id="tickId" placeholder="Ticket ID" />

                <button className="Button primary block" onClick={searchById}>Search</button>
        </Box>
      </Modal>
</Fragment>

return (loading ?  <Loader admin={true} setLoading={setLoading} /> : html);



}
