import requests




class Handler:

	def __init__(self):
		self.api_url = "https://sandbox.cleardil.com/v1/"
		self.client_id  = "lithex_id"
		self.client_secret = "c30bcb2b-ecf2-48c1-a20f-641282768d80"
		self.data  = {}

	def get_token(self):
		header = {
			'Content-Type' : 'application/x-www-form-urlencoded',
			self.client_id : self.client_secret
		}
		resp = requests.post(self.api_url + 'oauth2/token',headers=header , auth=(self.client_id,self.client_secret))
		print(resp)
		self.data = resp.json()

	def create_customer(self):
		print("new customer")





if __name__ == '__main__':
	h = Handler()
	h.get_token()
