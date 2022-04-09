import ccxt







class Worker:

    def __init__(self):
        api_key = "cFT6E0pHVjn6TWTCA3QHi19zmT3LYXrRxKTmiYPBHqKBQfc8JZLX00kB"
        api_secret = "7IEhBkHo+u2yH6oU2Uzd7BTJlT5eD/o0WxXRUISxzpQMv1W5RKsCG1COWMtUVT9GK5q8tMYAyYszpH3NPkm+1Q=="
        self.add = "terra1f2fgl9wyuz8k2qdj2ywtk3ksz7qgxvdcs2y7xd"
        self.desc = "xo ust"
        exchange_class = getattr(ccxt,"kraken")
        self.ex  = exchange_class({
        'apiKey':api_key,
        'secret':api_secret
        })  
        self.markets = self.ex.load_markets()


    # get price 
    def get_price(self,pair):
        orderbook = self.ex.fetch_order_book(pair)
        bid = orderbook['bids'][0][0] if len (orderbook['bids']) > 0 else None
        ask = orderbook['asks'][0][0] if len (orderbook['asks']) > 0 else None
        return ask

    # get perc amount
    def get_perc_amount(self,amount,perc):
        return round(amount  * perc , 8)

    # script to watch usdt and convert to ust
    def convert_to_ust(self):
        balance = self.ex.fetch_balance()
        ust_min  = self.markets['UST/USDT']['limits']['amount']['min']
        total_usdt = balance['total']['USDT']
        trade_amount = self.get_perc_amount(total_usdt  / self.get_price("UST/USDT") , 0.99)
        formated = self.ex.amount_to_precision("UST/USDT",trade_amount)
        if float(trade_amount) > float(ust_min):
            print("can be traded")
            res = self.ex.create_market_buy_order('UST/USDT',formated)
            print(res)
            trade_id = res.get("id",False)
            if trade_id:
                print("success UST conversion")
            else:
                print("failed UST conversion")
        else:
            print("minimum not reached")


    def get_base_fiat_amount(self,pair,amount):
        price = self.get_price(pair)
        return round((amount / price),8)

    def watch_convert_fiat(self):
        base = "USDT"
        fiats = ["USD","GBP","EUR"]
        balance= self.ex.fetch_balance()
        for fiat in fiats:
            min_amount = self.markets[base+"/"+fiat]['limits']['amount']['min']
            fiat_balance = balance['total'].get(fiat,False)
            if fiat_balance:
                trade_amount = self.get_perc_amount(fiat_balance  / self.get_price(base+"/"+fiat) , 0.99)
                formated =  self.ex.amount_to_precision(base+"/"+fiat,trade_amount)
                if float(trade_amount) > float(min_amount):
                    print("can be traded")
                    res = self.ex.create_market_buy_order(base+"/"+fiat,formated)
                    print(res)
                    trade_id = res.get("id",False)
                    if trade_id:
                        print("success Fiat Trade")
                    else:
                        print("failed Fiat Trade")
                else:
                    print("minimum not reached for "+ fiat)

            else:
                print("thee is no balance for " + fiat)


    def withdraw(self):
        tags = None
        params = {
            'key': self.desc,
        }
        balance= self.ex.fetch_balance()
        ust_balance = balance['total'].get("UST",False)
        if ust_balance:
            w = self.ex.withdraw("UST","2",self.add,tags,params)
            print(w)
            trade_id = w.get("id",False)
            if trade_id:
                print("success Withdraw")
            else:
                print("failed Withdraw")
        else:
            print("No UST balance avaialbe")
