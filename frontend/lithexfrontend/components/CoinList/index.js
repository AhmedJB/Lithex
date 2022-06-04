import { Fragment, useState , useEffect , useContext } from "react";
import Image from "next/image"
import {DropzoneDialog} from 'material-ui-dropzone'
import { handleSingleFileSubmit, postReq, req, numberToBN , handleResp } from "../../Utils";
import { useToasts  } from "react-toast-notifications";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {ethers} from "ethers";
import { fiats } from "../../Utils/constants";
import { UserContext } from '../../contexts/UserContext';





export default function CoinList(props){

    const [User,setUser] = useContext(UserContext);

    const [coins,setCoins] = useState([
    ])
    const [openModal,setOpenModal] = useState(false);
    const [openDeposit,setOpenDeposit] = useState(false)
    const [openSubscribe,setOpenSubscribe] = useState(false);
    const [openWithdraw,setOpenWithdraw] = useState(false);
    const [openDep,setopenDep] = useState(false);
    const [selectedCoin,setSelectedCoin] = useState(null)
    const [selectedCoinData,setSelectedCoinData] = useState("");
    const [selectedId,setSelectedId] = useState(-1);
    const {addToast} = useToasts();
    const [total,setTotal] = useState(0);
    const [selectedOption,setSelectedOption] = useState("stake");

    const style = {
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

    
    

    async function fetchBalances() {
      let resp = await req("balance");
      props.setBalanceLoader(false);
      if (resp){
        setCoins(resp);
        getTotal(resp);
        addToast("Success",{
          appearance:"success",
          autoDismiss : true
        })
      }else{
        addToast("fetching balances failed",{
          appearance:"error",
          autoDismiss : true
        })
      }
    }

    

    async function handleFile(file){
      console.log(file)
      let body = {
        coin_id : selectedCoin,
        file : file
      }
      console.log(body);
      setOpenDeposit(false);
      setSelectedCoin(null);
      let resp = await handleSingleFileSubmit(file[0],'fiat',body);
      if (resp){
        addToast("Success",{
          appearance:"success",
          autoDismiss : true
        })
      }else{
        addToast("Failed Sending Document",{
          appearance:"error",
          autoDismiss : true
        })
      }

      
    }

    function openDepositModal(c_id){
      setSelectedCoin(c_id)
      setOpenDeposit(true);
    }


    useEffect( () => {
        fetchBalances().then(() => console.log("finished fetching balances"))
    },[])



    function getTotal(coins){
      let tot = 0;
      for(let coin of coins){
        tot += coin.usd_price
      }
      tot = Math.round((tot + Number.EPSILON) * 100) / 100;
      setTotal(tot)
    }


    function formatAmount(data){
      let decimal;
      console.log("formating ....")
      let balance;
      if ( fiats.includes(data.symbol) ) {
          decimal = 4;
          balance = Number(data.balance) * 10**decimal
      }else{
        decimal = data.decimals
        balance = Number(data.balance)
      }
      console.log(data)
      return ethers.utils.formatUnits(numberToBN(balance,decimal).toString(),decimal)
    }

    function formatEarn(data){
      let decimal;
      console.log("Earn ....")
      console.log(data)
      let balance;
      if ( fiats.includes(data.symbol) ) {
          decimal = 4;
          balance = Number(data.earn) * 10**decimal
      }else{
        decimal = data.decimals
        balance = Number(data.earn)
      }
      console.log(data)
      return ethers.utils.formatUnits(numberToBN(balance,decimal).toString(),decimal)
    }


    function handleSubscribe(data){
      setSelectedCoinData(data);
      setOpenSubscribe(true);
    }

    function handleWithdraw(data){
      setSelectedCoinData(data);
      setOpenWithdraw(true);
    }

    async function subscribe(){
      let amount = document.getElementById("earnAmount").value;
      console.log(amount)
      console.log(selectedCoinData.id);
      let body = {
        amount,
        id : selectedCoinData.id,
        type : selectedOption
      }
      setOpenSubscribe(false);
      console.log(body);
      let resp = await postReq("earn",body);
      handleResp(resp,addToast);
    }

    async function withdraw(){
      let amount = document.getElementById("earnAmount").value;
      let body;
      if (document.getElementById("accountName")){
        let account_name = document.getElementById("accountName").value;
        let bank_name = document.getElementById("bankName").value;
        let bank_code = document.getElementById("bankCode").value;
        let transit_number = document.getElementById("transitNumber").value;
        let account_number = document.getElementById("accountNumber").value;
        body = {
          account_name,
          bank_name,
          bank_code,
          transit_number,
          account_number
        }

      }else{
        let address = document.getElementById("address").value;
        body = {
          address
        }

      }

    
      body['amount'] = amount;
      body['id'] = selectedCoinData.id;
      setOpenWithdraw(false);
      let resp = await postReq("withdraw",body);
      handleResp(resp,addToast);
    }


    function handleSelectChange(e){
      let value = e.target.value;
      setSelectedOption(value);
    }

    function handleDepositFiat(id){
      setSelectedId(id);
      setopenDep(true);
    }



    const coinField = (data,key) => {
        return <tr key={key}>
        <td align="left">
          <span className="AssetVisual">
              <Image src={data.image} height={32} width={32} />
            {/* <img
              alt
              height={32}
              src={data.im_src}
            /> */}
            <strong>{data.name}</strong>
          </span>
        </td>
        <td align="right">
          <span className="AssetBalance right semi-bold">
            <span>
              {data.symbol}
              <strong className="semi-bold">{" " + formatAmount(data)  }</strong>
            </span>
            <span className="usd">{ "$" + data.usd_price}</span>
          </span>
        </td>
        {/* <td align="right">
          <span className="normal">${data.credit}</span>
        </td> */}
        <td align="right">
          <span className="normal">{formatEarn(data)}</span>
        </td>
        <td align="right">
          <span className="HighlightLabel success clickable">
           { Number(data.interest) >= 0  ? `Earn up to ${data.interest*100}%` : "No Interest"  } 
          </span>
        </td>
        <td style={{ paddingRight: 0 }}>
          <a onClick= { fiats.includes(data.symbol) ?   () => handleDepositFiat(data.id)  : () => {setSelectedCoinData(data); setOpenModal(true);}  }>
            <button type="button" className="Button primary block">
              Top Up
            </button>
          </a>
        </td>
        <td style={{ paddingRight: 0 }}>
          <a onClick= { () => handleSubscribe(data)  }>
            <button type="button" className="Button primary block">
              Earn
            </button>
          </a>
        </td>
        
        <td align="right" width={110}>
          <a>
            <button
              type="button"
              className="Button secondary"
              style={{ minWidth: 110 }}
              onClick= { () => handleWithdraw(data)  }
            >
              Withdraw
            </button>
          </a>
        </td>
        {/* <td align="center">
          <a className="manage" href="/deposit/btc.html" />
        </td> */}
      </tr>
    }

    const html = (
      <Fragment>
        {
          !props.balanceLoader && 
      <Fragment>
<table
          className="AssetList"
          id="AssetList"
          cellSpacing={0}
          cellPadding={0}
          border={0}
        >
          <thead>
            <tr>
              <th align="left" width={200}>
                {/* <a href="calculator.html">
                  <button type="button" className="Button secondary">
                    Calculator
                  </button>
                </a> */}
              </th>
              <th align="right" width={200}>
                Balance
              </th>
              {/* <th align="right">Credit Line</th> */}
              <th align="right">Earn Balance</th>
              <th align="right">Earn Interest</th>
              <th colSpan={3} align="right">
                {/* <div className="Toggle">
                  <label>Hide Zero BalanceAssets</label>
                  <span>off</span>
                </div> */}
              </th>
            </tr>
          </thead>
          <tbody>
              {coins &&  coins.map((e,i) => coinField(e,i))}
            
          </tbody>
        </table>
        <div className="AccountTotalAssetValuePerWallet">
        <h5 aria-expanded="false">
          Estimated Total Value of Crypto: <span>${total}</span>
        </h5>
        <small>If the value of your collateralassets reaches
          <span>$0.00</span>, small partial loan repayments will be
          initiated automatically</small>
      </div>
      </Fragment>
        }
        
        
        <Modal
        open={openModal}
        onClose={() =>  setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className=" items-center justify-center">
          <div className=" flex items-center justify-center h-full w-full bg-[#f6f8fb]">
            <div className="text-center w-full p-6">
            <h1 className="text-center">Your Deposit Address</h1>
            <p>{selectedCoinData.address}</p>

            </div>
            
          </div>
          <div className="w-full text-center my-5">
          { selectedCoinData.token ? <p>You need to send a fee payment of {selectedCoinData.token_fee } {selectedCoinData.network_symbol} </p> : "" }
          </div>
          

        </Box>
      </Modal>

      <Modal
        open={openWithdraw}
        onClose={() =>  setOpenWithdraw(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className=" items-center justify-center">
          {
            selectedCoinData && <><h1 className="text-center my-3">Submit a withdraw request</h1>
            <h3 className="my-2">For Coin : {selectedCoinData.symbol}</h3>
            {
              fiats.includes(selectedCoinData.symbol) && <> 
                <label className="mt-l" style={{margin:10}}>Account Name</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="text"  id="accountName"  placeholder="Account Name" />
              </div>
              <label className="mt-l" style={{margin:10}}>Bank Name</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="text" id="bankName"  placeholder="Bank Name" />
              </div>
              <label className="mt-l" style={{margin:10}}>Bank Code</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="text" id="bankCode"  placeholder="Bank Code" />
              </div>
              <label className="mt-l" style={{margin:10}}>Transit Number</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="text" id="transitNumber"  placeholder="Transit Number" />
              </div>
              <label className="mt-l" style={{margin:10}}>Account Number</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="text" id="accountNumber"  placeholder="Account Number" />
              </div>
              </>
            }

            {
              !fiats.includes(selectedCoinData.symbol) && <>
                <label className="mt-l" style={{margin:10}}>Address</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="text"  id="address"  placeholder="Address" />
              </div>
               </>
            }
            <label className="mt-l" style={{margin:10}}>Amount to withdraw</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="number" step=".01" id="earnAmount" defaultValue={ 0 } placeholder="Value" />
              </div>
  
              <button type="button" onClick={() => withdraw()} className="Button primary my-5  w-1/5"> Send </button>
              
              </>
          }
          
          

          

        </Box>
      </Modal>

      <Modal
        open={openSubscribe}
        onClose={() =>  setOpenSubscribe(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className=" items-center justify-center">
          {
            selectedCoinData && <><h1 className="text-center my-3">Submit a request</h1>
            <h3 className="my-2">For Coin : {selectedCoinData.symbol}</h3>
            <div className="f1">
                        <label className="Label">Request Type</label>
                        <div className="SelectBox filter">
                          <span className="hv">
                            <label className="hv">
                              <option>{ selectedOption }</option>
                            </label>
                            <i className="fa fa-chevron-down" />
                            <select onChange= { (e) =>  handleSelectChange(e)} >
                              <option key={0} value={"stake"}>Stake</option>  
                              <option key={1} value={"unstake"}>Unstake</option>  
                              
                            </select>
                          </span>
                        </div>
                      </div>
            <label className="mt-l" style={{margin:10}}>Amount to Stake</label>
            <div className="TextBox m-4 w-3/5" style={{margin:10}}>
              <input type="number" step=".01" id="earnAmount" defaultValue={ 0 } placeholder="Value" />
              </div>
  
              <button type="button" onClick={() => subscribe()} className="Button primary my-5  w-1/5"> Send </button>
              
              </>
          }
          
          

          

        </Box>
      </Modal>

      <Modal
        open={openDep}
        onClose={() =>  setopenDep(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className=" items-center justify-center">
        <div style={{display:"flex", flexDirection:"column"}} className=" p-5 rounded-[10px] items-center justify-center h-full mx-auto w-4/5 bg-[#f6f8fb]">
        <h1 className="text-center font-bold">Banking Details</h1>
        <div className="w-full flex my-2">
        <h2 className="text-2xl font-bold mx-2">Bank Name : </h2><h3 className="text-2xl"> Test Bank</h3>
        </div>
        <div className="w-full flex  my-2">
        <h2 className="text-2xl font-bold mx-2">Name : </h2><h3 className="text-2xl">Test Name</h3>
        </div>
        <div className="w-full flex  my-2">
        <h2 className="text-2xl font-bold mx-2">Account Number : </h2><h3 className="text-2xl">6541651564941951965</h3>
        </div>
        
        <div className="w-full flex  my-2">
        <h2 className="text-2xl font-bold mx-2">Swift Code : </h2><h3 className="text-2xl">5041</h3>
        </div>
        <div className="w-full flex  my-2">
        <h2 className="text-2xl font-bold mx-2">Deposit Note : </h2><h3 className="text-2xl">{User.depositID ? User.depositID : ""}</h3>
        </div>
        <p>After Sending the deposit please send us a screenshot of the receipt</p>
        <button type="button" onClick={() => { setopenDep(false); openDepositModal(selectedId)}} className="Button primary my-5  w-1/5"> Send </button>
        
        
          </div>


        </Box>
      </Modal>

        <DropzoneDialog
                    
                    open={openDeposit}
                    onSave={handleFile}
                    dropzoneText={`Drag or drop the Receipt Image`}
                    previewText={`Drag or drop the Receipt Image`}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    filesLimit={1}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={() =>{ setSelectedCoin(null); setOpenDeposit(false)}}
                />
      </Fragment>
    );

    return html;



}