import { Fragment, useState , useEffect } from "react";
import Image from "next/image"
import {DropzoneDialog} from 'material-ui-dropzone'
import { handleSingleFileSubmit, postReq, req } from "../../Utils";
import { useToasts  } from "react-toast-notifications";





export default function CoinList(props){

    const [coins,setCoins] = useState([
    ])

    const [openDeposit,setOpenDeposit] = useState(false)
    const [selectedCoin,setSelectedCoin] = useState(null)
    const {addToast} = useToasts();

    async function fetchBalances() {
      let resp = await req("balance");
      if (resp){
        setCoins(resp);
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

    const fiats = ['GBP','EUR','USD']



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
              <strong className="semi-bold">{" " + data.balance}</strong>
            </span>
            <span className="usd">{ data.api_id == "None" ? "--" :   "$" + 0}</span>
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
          <a onClick= { fiats.includes(data.symbol) ?   () => openDepositModal(data.id)  : () => console.log("crypto not supported yet")  }>
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
                <a href="calculator.html">
                  <button type="button" className="Button secondary">
                    Calculator
                  </button>
                </a>
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