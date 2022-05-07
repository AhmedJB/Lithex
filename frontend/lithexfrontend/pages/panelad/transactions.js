import { Fragment , useContext , useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../components/Loader";
import { UserContext } from "../../contexts/UserContext";
import { req,formatDate } from "../../Utils";
import { transaction_types } from "../../Utils/constants";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



export default function Transactions(props){


    const [User,setUser] = useContext(UserContext);
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    const [fromDate,setFromDate] = useState(new Date());
    const [toDate,setToDate] = useState(new Date(fromDate.getTime() + 3600*24*1000));


    const [data,setData] = useState([]);
    const [filtered,setFiltered] = useState(data);
    const [coinSelected,setCoinSelected] = useState(-1);
    const [transactionSelected,setTransactionSelected] = useState(-1)
    
    async function loadTransactions(){
      let resp = await req("admtransactions");
      if (resp){
        setData(resp);
        setFiltered(resp);
      }else{
        console.log("failed loading transactions")
      }
    }

    async function fetchCoins(){
      let resp = await req("coins");
      if (resp){
        setCoins(resp);
      }else{
        console.log("failed loading transactions")
      }
    }

    useEffect(
      () => {
        fetchCoins().then(() => console.log("done loading coins"));
        loadTransactions().then(() => console.log("done loading transactions"))
        filterByDate();
      }, 
      [User]
    )


    function filterByCoin(t){
      let target = t.target;
      console.log(target.value);
      let value = Number(target.value);
      setCoinSelected(value);
      if (value == -1){
        setFiltered(data);
      }else{
        let temp = filtered.filter((e) => e.coinData.symbol == coins[value].symbol)
        console.log(temp);
        setFiltered(temp);
      }
      
    }

    function filterByType(t){
      let value = t.target.value;
      setTransactionSelected(value);
      if (value == "-1"){
        setFiltered(data);
      }else{
        let temp = filtered.filter((e) => e.t_type == value)
        console.log(temp);
        setFiltered(temp);
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
      setCoinSelected(-1);
      setTransactionSelected("-1");
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



    

    const html = (
      <Fragment>

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

<title>Admin | Transactions</title>
</Head>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

        <div id="nexo-platform" className="application">
         
	<Header admin={true} location="transactions" />

          <main>
            <section className="TransactionsPage custom">
              <aside>
                <div className="Filter">
                  <div className="card">
                    <div className="header mb-l">
                      <h4>Filters</h4>
                    </div>
                    <fieldset>
                      <label >Date Range</label>
                      <div className="DateRangeBox pt-10">
                        <div className="DateRangePicker DateRangePicker_1">
                          <div>
                            <div className="DateRangePickerInput DateRangePickerInput_1">
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
                              <button
                                className="DateRangePickerInput_calendarIcon DateRangePickerInput_calendarIcon_1"
                                type="button"
                                aria-label="Interact with the calendar and add the check-in date for your trip."
                              >
                                <svg
                                  className="DateRangePickerInput_calendarIcon_svg DateRangePickerInput_calendarIcon_svg_1"
                                  focusable="false"
                                  viewBox="0 0 1393.1 1500"
                                >
                                  <path d="m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <label>Transaction Type</label>
                      <div className="SelectBox filter">
                        <span>
                          <label>{transactionSelected == -1 ?" All Assets" : transactionSelected}</label>
                          <i className="fa fa-chevron-down" />
                          <select onChange={filterByType} >
                            <option value={-1}>All Types</option>
                            {
                              transaction_types.map((e,i) => <option key={i} value={e} >{e}</option>)
                            }
                            
                          </select>
                        </span>
                      </div>
                    </fieldset>
                    <fieldset>
                      <label>Asset</label>
                      <div className="SelectBox filter">
                        <span>
                          <label>{coinSelected == "-1" ?" All Assets" : coins[coinSelected].symbol}</label>
                          <i className="fa fa-chevron-down" />
                          <select onChange={filterByCoin}>
                            <option key={-1} value={-1}>AllAssets</option>
                            {
                              coins.map((e,i) => <option key={i} value={i} >{e.symbol}</option>)
                            }
                          </select>
                        </span>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </aside>
              <div>
                <div className="top-container">
                  <h3>Transaction History</h3>
                  {/* <div className="sorting">
                    <label>
                      <i className="fa fa-sort-amount-down" />
                      Sort by
                    </label>
                    <div className="SelectBox">
                      <span aria-expanded="false">
                        <label className="hv">
                          <div className="selected">Newest to Oldest</div>
                        </label>
                        <i className="fa fa-chevron-down" />
                      </span>
                    </div>
                  </div> */}
                </div>
                {
                  filtered.length == 0 && <div className="Empty">
                  <Image src={"/assets/icons/no-transaction.svg"} height={200} width={200} style={{ opacity: 1, transform: "scale(1)" }} />
  
                   
                    <h6 className="semi-bold special">No transactions</h6>
                  </div>
                }

                {
                  filtered.length > 0 && 
                  <div  style={{display:'flex', flexDirection:'column'}} className="p-4 items-center" >
                  {filtered.map((e,i) => {
                    return  <div key={i} style={{display:'flex', flexDirection:'column'}} className=" w-3/5 p-4 my-4 rounded-[5px] neum transition-transform hover:scale-105 ">
                            <h3 className="font-bold text-[#1e4dd8]"> {e.t_type} { e.coinData ? ": "+e.coinData.symbol : ""}</h3>
                            <p>{e.message}</p>
                            <span className="w-fit self-end">
                              {formatDate(new Date(e.date))}
                            </span>
                          

                        </div>
                  })
                  
                }</div>
                
              }

              </div>
            </section>
            <Footer />
          </main>
        </div>
        </LocalizationProvider>
        
      </Fragment>
    );


    return (loading ?  <Loader admin={true} setLoading={setLoading} />  : html);



}