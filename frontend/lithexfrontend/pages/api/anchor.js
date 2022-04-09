/* import Cors from 'cors'
import {Wallet, MnemonicKey,NETWORKS,CHAINS , Account, AnchorEarn, DENOMS } from "@anchor-protocol/anchor-earn"

const mnemonic = 'stem gallery engine main submit web creek swallow this burst frog settle camp eye noodle east snow canoe peasant enhance mean foot fruit fault'
const address = 'terra1f2fgl9wyuz8k2qdj2ywtk3ksz7qgxvdcs2y7xd'

const anchorEarn = new AnchorEarn({
    chain : CHAINS.TERRA,
    network : NETWORKS.COLUMBUS_5,
    mnemonic : mnemonic
})


const balanceInfo = await anchorEarn.balance({
    currencies : [
        DENOMS.UST
    ]
})

console.log(balanceInfo)

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET','POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}




async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)
    if (req.method == "POST"){
        let anchorEarn = new AnchorEarn({
            chain : CHAINS.TERRA,
            network : NETWORKS.COLUMBUS_5,
            mnemonic : mnemonic
        })
        
        
        let balanceInfo = await anchorEarn.balance({
            currencies : [
                DENOMS.UST
            ]
        })
        //let resp = await checkAndDeposit();
        let resp;
        if ( Number(balanceInfo.balances[0].account_balance) >= 1){
            console.log("ready to deposit")
            resp = {
                status: true,
                message : "ready to deposit"
            }
            
        }else{
            console.log("not enough money for deposit")
            resp = {
                status : false,
                message : "not enough money for deposit"
            }
            return resp
        }
        res.json(resp)
    }
  // Rest of the API logic
}

export default handler */

