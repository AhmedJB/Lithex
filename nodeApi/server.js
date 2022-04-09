import express from "express"
import {Wallet, MnemonicKey,NETWORKS,CHAINS , Account, AnchorEarn, DENOMS } from "@anchor-protocol/anchor-earn"

const mnemonic = 'stem gallery engine main submit web creek swallow this burst frog settle camp eye noodle east snow canoe peasant enhance mean foot fruit fault'
const address = 'terra1f2fgl9wyuz8k2qdj2ywtk3ksz7qgxvdcs2y7xd'

const app = express();
const port = process.env.PORT || 3010;


const anchorEarn = new AnchorEarn({
    chain : CHAINS.TERRA,
    network : NETWORKS.COLUMBUS_5,
    mnemonic : mnemonic
})


export async function checkAndDeposit(){
    
    
    
    const balanceInfo = await anchorEarn.balance({
        currencies : [
            DENOMS.UST
        ]
    })
    let resp;

    if ( Number(balanceInfo.balances[0].account_balance) >= 5){
        console.log("ready to deposit")
        resp = {
            status: true,
            message : "ready to deposit"
        }

        return resp

    }else{
        console.log("not enough money for deposit")
        resp = {
            status : false,
            message : "not enough money for deposit"
        }
        return resp
    }

}

app.listen(port);

app.post("/api/anchor", async (req,res) => {
    let resp = await checkAndDeposit();
    res.json(resp)
})


app.post("/api/anchor/deposit", async (req,res) => {
    
    
    
    const balanceInfo = await anchorEarn.balance({
        currencies : [
            DENOMS.UST
        ]
    })
    let resp;
    try {
        let deposit = await anchorEarn.deposit({
            currency: DENOMS.UST,
            amount: balanceInfo.balances[0].account_balance, // 12.345 UST or 12345000 uusd
          });

        resp = {
            status : true,
            message : deposit

        }
    } catch (error) {
        resp = {
            status : false
        }
        
    }

    return resp
    
})

console.log('Rest API server started on: ' + port);