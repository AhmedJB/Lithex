

#base = "http://127.0.0.1:8000"
base = "http://dev.liqd.fi"
#base = "https://35eb-105-69-234-197.ngrok.io"

rpc_urls = {
    "BNB" :  "https://bsc-dataseed.binance.org/" , #"https://data-seed-prebsc-1-s1.binance.org:8545",
    "ETH" : "https://mainnet.infura.io/v3/bd80c5f7a9e4449f958ef1e3910111ba", #"https://rinkeby.infura.io/v3/bd80c5f7a9e4449f958ef1e3910111ba",
    "MATIC" : "https://polygon-rpc.com/"   #"https://rpc-mumbai.maticvigil.com/v1/f31925b8760d30ab88e7503718d7de5ca34f1027"
}
chain_ids = {
    "ETH" : 1, # 4
    "BNB" : 56, # 97
    "MATIC" : 137  #80001
}

fiats = ["USD","GBP","EUR"]

watch_coins = ["USD","GBP","EUR","ETH","LTC","BTC","MATIC"]


api_url = "http://localhost:3010/"



