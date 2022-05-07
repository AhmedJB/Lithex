import ccxt
from api.constants import watch_coins
from api.models import WithdrawSettings





class Worker:

    def __init__(self):
        api_key = "BEvXskqd7KKy+cT4LYoxePoD1oEyHolI0U4gH1l4U/UTwd0GsakSdQO8"
        api_secret = "BxDwwiHKBj5zR+czwgsr1N/QBxGsaym6jECj3WyVbazPkpnQuM1/epsU7d6EJPMIvAou51ug0t3Cgsw5Qon7nA=="
        self.add = "terra1f2fgl9wyuz8k2qdj2ywtk3ksz7qgxvdcs2y7xd"
        self.settings = WithdrawSettings.objects.all()[0]
        self.ust_label = self.settings.ust_label
        exchange_class = getattr(ccxt,"kraken")
        self.ex  = exchange_class({
        'apiKey':api_key,
        'secret':api_secret
        })  
        self.markets = self.ex.load_markets()


    def get_deposit_address(self,symbol,params = {}):
        try:
            addr = self.ex.fetchDepositAddress(code=symbol,params = params)
        except:
            addr = self.ex.createDepositAddress(code=symbol,params=params)
        return addr['address']


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
        ust_min  = self.markets['UST/USD']['limits']['amount']['min']
        total_usdt = balance['total'].get('USD',0)
        trade_amount = self.get_perc_amount(total_usdt  / self.get_price("UST/USD") , 0.99)
        formated = self.ex.amount_to_precision("UST/USD",trade_amount)
        if float(trade_amount) > float(ust_min):
            print("can be traded")
            res = self.ex.create_market_buy_order('UST/USD',formated)
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
        base = "USD"
        
        balance= self.ex.fetch_balance()
        for fiat in watch_coins:
            if fiat == base:
                continue
            min_amount = self.markets[fiat+"/"+base]['limits']['amount']['min']
            fiat_balance = balance['total'].get(fiat,False)
            if fiat_balance:
                #trade_amount = self.get_perc_amount(fiat_balance  / self.get_price(base+"/"+fiat) , 0.99)
                #formated =  self.ex.amount_to_precision(base+"/"+fiat,trade_amount)
                if float(fiat_balance) > float(min_amount):
                    print("can be traded")
                    res = self.ex.create_market_sell_order(fiat+"/"+base,fiat_balance)
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
            'key': self.ust_label,
        }
        balance= self.ex.fetch_balance()
        ust_balance = balance['total'].get("UST",False)

        if ust_balance and float(ust_balance) >= 2:
            w = self.ex.withdraw("UST",ust_balance,self.add,tags,params)
            print(w)
            trade_id = w.get("id",False)
            if trade_id:
                print("success Withdraw")
                return True
            else:
                print("failed Withdraw")
                return False
        else:
            print("No UST balance avaialbe")
            return False