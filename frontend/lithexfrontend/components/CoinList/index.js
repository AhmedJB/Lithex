import { Fragment, useState , useEffect } from "react";
import Image from "next/image"
import {DropzoneDialog} from 'material-ui-dropzone'
import { handleSingleFileSubmit, postReq, req, numberToBN } from "../../Utils";
import { useToasts  } from "react-toast-notifications";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {ethers} from "ethers";
import { fiats } from "../../Utils/constants";





export default function CoinList(props){

    const [coins,setCoins] = useState([
    ])
    const [openModal,setOpenModal] = useState(false);
    const [openDeposit,setOpenDeposit] = useState(false)
    const [selectedCoin,setSelectedCoin] = useState(null)
    const [selectedAddress,setSelectedAddress] = useState("");
    const {addToast} = useToasts();
    const [total,setTotal] = useState(0);

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
        <td align="right">
          <span className="normal">${data.credit}</span>
        </td>
        <td align="right">
          <span className="HighlightLabel success clickable">
           { data.interest != -1  ? `Earn up to ${data.interest}%` : "No Interest"  } 
          </span>
        </td>
        <td style={{ paddingRight: 0 }}>
          <a onClick= { fiats.includes(data.symbol) ?   () => openDepositModal(data.id)  : () => {setSelectedAddress(data.address); setOpenModal(true);}  }>
            <button type="button" className="Button primary block">
              Top Up
            </button>
          </a>
        </td>
        <td align="right" width={110}>
          <a href="withdraw/btc.html">
            <button
              type="button"
              className="Button secondary"
              style={{ minWidth: 110 }}
            >
              Withdraw
            </button>
          </a>
        </td>
        <td align="center">
          <a className="manage" href="/deposit/btc.html" />
        </td>
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
              <th align="right">Credit Line</th>
              <th align="right">Earn Interest</th>
              <th colSpan={3} align="right">
                <div className="Toggle">
                  <label>Hide Zero BalanceAssets</label>
                  <span>off</span>
                </div>
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
        <Box sx={style} className="flex items-center justify-center">
          <div className=" flex items-center justify-center h-full w-full bg-[#f6f8fb]">
            <div className="text-center w-full p-6">
            <h1 className="text-center">Your Deposit Address</h1>
            <p>{selectedAddress}</p>
            </div>
            
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