import {Wallet, MnemonicKey,NETWORKS,CHAINS , Account, AnchorEarn, DENOMS, TxOutput, STATUS } from "@anchor-protocol/anchor-earn"

const mnemonic = 'stem gallery engine main submit web creek swallow this burst frog settle camp eye noodle east snow canoe peasant enhance mean foot fruit fault'
const address = 'terra1f2fgl9wyuz8k2qdj2ywtk3ksz7qgxvdcs2y7xd'
const mnemonic2 = "doctor rail claw glimpse mobile lonely fitness order column cargo skin require vital weasel planet beach tape burst crunch daring chest rifle thought position"
const address2 = "terra1tprgjghhf3r9l56unsr4z9szxzm6ke4j5m4h3j"

export async function checkAndDeposit(){

    let anchorEarn = new AnchorEarn({
        chain : CHAINS.TERRA,
        network : NETWORKS.BOMBAY_12,
        mnemonic : mnemonic2
    })
    
    let balanceInfo = await anchorEarn.balance({
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


export async function Deposit(){
    return new Promise( async (resolve,reject) => {
        let anchorEarn = new AnchorEarn({
            chain : CHAINS.TERRA,
            network : NETWORKS.BOMBAY_12,
            mnemonic : mnemonic2
        })
        let balanceInfo = await anchorEarn.balance({
            currencies : [
                DENOMS.UST
            ]
        })
        console.log(balanceInfo)
        let balance = Number(balanceInfo.balances[0].account_balance) - 2
        console.log(balance.toFixed(2));
        let deposit = await anchorEarn.deposit({
            currency: DENOMS.UST,
            amount: balance.toFixed(2) , // 12.345 UST or 12345000 uusd
            log : (x) => {
                console.log(x)
            }
          });
        console.log(deposit);
        resolve(deposit)

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
}


export async function Withdraw(){
    return new Promise( async (resolve,reject) => {
        let anchorEarn = new AnchorEarn({
            chain : CHAINS.TERRA,
            network : NETWORKS.BOMBAY_12,
            mnemonic : mnemonic2
        })
        let balanceInfo = await anchorEarn.balance({
            currencies : [
                DENOMS.UST
            ]
        })
        console.log(balanceInfo)
        let balance = Number(balanceInfo.balances[0].deposit_balance)
        console.log(balance.toFixed(2));
        let withdraw = await anchorEarn.withdraw({
            currency: DENOMS.UST,
            amount: balance.toFixed(2) , // 12.345 UST or 12345000 uusd
            log : (x) => {
                console.log(x)
            }
          });
        console.log(withdraw);
        resolve(withdraw)

    })

}