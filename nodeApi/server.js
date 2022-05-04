#!/usr/bin/env node
import express from "express"
import { checkAndDeposit, Deposit, Withdraw } from "./worker.js";


const app = express();
const port = process.env.PORT || 3010;







app.listen(port);

app.post("/api/anchor", async (req,res) => {
    let resp = await checkAndDeposit();
    res.json(resp)
})


app.post("/api/anchor/deposit", async (req,res) => {
    
    Deposit().then(() => console.log("finished"));
    
    res.json({"finished":true});
    
    
    
})


app.post("/api/anchor/withdraw", async (req,res) => {
    Withdraw().then(() => console.log("finished"));
    
    res.json({"finished":true});
})

console.log('Rest API server started on: ' + port);