import { Fragment, useState } from "react";
import Image from "next/image"





export default function CoinList(props){

    const [coins,setCoins] = useState([
        {
          "im_src": "https://static.nexo.io/currencies/BTC.svg",
          "coin": "Bitcoin",
          "symbol": "BTC",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/ETH.svg",
          "coin": "Ether",
          "symbol": "ETH",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/NEXO.svg",
          "coin": "NEXO Token",
          "symbol": "NEXO",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/XRP.svg",
          "coin": "XRP",
          "symbol": "XRP",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/USDT.svg",
          "coin": "Tether",
          "symbol": "USDT",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/USDC.svg",
          "coin": "USD Coin",
          "symbol": "USDC",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/USDP.svg",
          "coin": "Pax Dollar",
          "symbol": "USDP",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/TUSD.svg",
          "coin": "TrueUSD",
          "symbol": "TUSD",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/DAI.svg",
          "coin": "Dai",
          "symbol": "DAI",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/USDX.svg",
          "coin": "USD",
          "symbol": "USD",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/EURX.svg",
          "coin": "EUR",
          "symbol": "EUR",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/GBPX.svg",
          "coin": "GBP",
          "symbol": "GBP",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/BCH.svg",
          "coin": "Bitcoin Cash",
          "symbol": "BCH",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/LTC.svg",
          "coin": "Litecoin",
          "symbol": "LTC",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/EOS.svg",
          "coin": "EOS",
          "symbol": "EOS",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/BNB.svg",
          "coin": "BNB",
          "symbol": "BNB",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/XLM.svg",
          "coin": "Stellar",
          "symbol": "XLM",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/PAXG.svg",
          "coin": "PAX Gold",
          "symbol": "PAXG",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/LINK.svg",
          "coin": "Chainlink",
          "symbol": "LINK",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/TRX.svg",
          "coin": "Tron",
          "symbol": "TRX",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/ADA.svg",
          "coin": "Cardano",
          "symbol": "ADA",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/DOT.svg",
          "coin": "Polkadot",
          "symbol": "DOT",
          "interest": "15",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/DOGE.svg",
          "coin": "Dogecoin",
          "symbol": "DOGE",
          "interest": "3",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/AXS.svg",
          "coin": "Axie Infinity",
          "symbol": "AXS",
          "interest": "36",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/MATIC.svg",
          "coin": "Polygon",
          "symbol": "MATIC",
          "interest": "16",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/MANA.svg",
          "coin": "Decentraland",
          "symbol": "MANA",
          "interest": "Unavailable",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/SAND.svg",
          "coin": "The Sandbox",
          "symbol": "SAND",
          "interest": "Unavailable",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/UNI.svg",
          "coin": "Uniswap",
          "symbol": "UNI",
          "interest": "Unavailable",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/SOL.svg",
          "coin": "Solana",
          "symbol": "SOL",
          "interest": "8",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/AVAX.svg",
          "coin": "Avalanche",
          "symbol": "AVAX",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/LUNA.svg",
          "coin": "Terra",
          "symbol": "LUNA",
          "interest": "13",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/FTM.svg",
          "coin": "Fantom",
          "symbol": "FTM",
          "interest": "10",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/UST.svg",
          "coin": "TerraUSD",
          "symbol": "UST",
          "interest": "20",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/ATOM.svg",
          "coin": "Cosmos",
          "symbol": "ATOM",
          "interest": "11",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        },
        {
          "im_src": "https://static.nexo.io/currencies/KSM.svg",
          "coin": "Kusama",
          "symbol": "KSM",
          "interest": "12",
          "balance": 0,
          "usd_balance": 0,
          "credit": 0
        }
      ])


    const coinField = (data) => {
        return <tr>
        <td align="left">
          <span className="AssetVisual">
              <Image src={data.im_src} height={32} width={32} />
            {/* <img
              alt
              height={32}
              src={data.im_src}
            /> */}
            <strong>{data.coin}</strong>
          </span>
        </td>
        <td align="right">
          <span className="AssetBalance right semi-bold">
            <span>
              {data.symbol}
              <strong className="semi-bold">{data.blance}</strong>
            </span>
            <span className="usd">${data.usd_balance}</span>
          </span>
        </td>
        <td align="right">
          <span className="normal">${data.credit}</span>
        </td>
        <td align="right">
          <span className="HighlightLabel success clickable">
            Earn up to {data.interest}%
          </span>
        </td>
        <td style={{ paddingRight: 0 }}>
          <a href="deposit/btc.html">
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
              {coins.map((e) => coinField(e))}
            
          </tbody>
        </table>
      </Fragment>
    );

    return html;



}