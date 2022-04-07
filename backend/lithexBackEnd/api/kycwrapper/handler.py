from __future__ import absolute_import
import os

import requests
import base64




class Handler:

	def __init__(self,media_path=None):
		self.api_url = "https://sandbox.cleardil.com/v1/"
		self.client_id  = "lithex_id"
		self.client_secret = "c30bcb2b-ecf2-48c1-a20f-641282768d80"
		self.media_path = media_path
		self.c_id =  "3ca09161-2d42-4b26-86bf-509550579eac"
		self.d_id = "8af7e6cf-fb42-4027-a337-1c66f7b2566f"
		self.data  = {}

	def get_token(self):
		header = {
			'Content-Type' : 'application/x-www-form-urlencoded',
			self.client_id : self.client_secret
		}
		resp = requests.post(self.api_url + 'oauth2/token',headers=header , auth=(self.client_id,self.client_secret))
		resp = self.check_resp(resp)
		if resp:
			return resp.json()
		else:
			return False
		

	def get_header(self,t):
		data = self.get_token()
		if data:

			if t== "json":
				header = {
					'content-type': 'application/json',
					'Authorization' : 'Bearer ' + data['access_token']
				}
			elif t == "form":
				header = {
					'Authorization' : 'Bearer ' + data['access_token']

				}
			return header
		else:
			return False
		

	def check_resp(self,resp):
		print(resp)
		if resp.status_code  in  range(200,300):
			return resp
		else:
			print(resp.content.decode())
			return False

	def create_customer(self,data):
		print("new customer")
		print(data)
		data['type'] = 'INDIVIDUAL'
		headers  = self.get_header(t="json")
		resp = requests.post(self.api_url + 'customers',headers=headers,json = data)
		resp = self.check_resp(resp)
		if resp:
			
			print(resp.json())
			return resp.json()
		else:
			return False

	def upload_documents(self,files,customer=None,test=False):
		data = {
			'type' : 'NATIONAL_ID_CARD',
			
		
		}
		files_values = {}
		for file in files:
			print(file)
			if test:
				path = self.media_path + '/documents/' + file['path']
			else:
				path = file['path']
			
			files_values['front_side' if file['type'] == "front" else 'back_side'] = open(path,'rb')

		print(files_values)
		url = self.api_url + 'customers/'+(customer if customer is not None else self.c_id) + '/documents'
		print(url)
		headers = self.get_header(t="form")
		print(data)
		print(headers)
		resp = requests.post(url,files=files_values,data=data,headers=headers)
		resp = self.check_resp(resp)
		if resp:
			
			print(resp.json())
			return resp.json()
		else:
			return False


	def verification(self,file,customer=None,doc_id=None,test=False):
		data = {
			'document_id' : doc_id if doc_id is not None else self.d_id
		}

		if test:
			path = self.media_path + '/documents/' + file
		else:
			path = file 
		

		data['selfie_image'] = base64.b64encode(open(path,'rb').read()).decode()
		print(data)
		url = self.api_url + 'customers/'+(customer if customer is not None else self.c_id) + '/identifications'
		print(url)
		headers = self.get_header(t="json")
		print(data)
		print(headers)
		resp = requests.post(url,json=data,headers=headers)
		resp = self.check_resp(resp)
		if resp:
			
			print(resp.json())
			return resp.json()
		else:
			return False

		
			







if __name__ == '__main__':
	media_path = "/Users/mac/Documents/work/LithexProject/Lithex/backend/lithexBackEnd/media"
	h = Handler(media_path=media_path)
	data = {
		"email" : "rossi@test.com",
		"first_name" : "rossi",
		"last_name" : 'binaca'
	}
	#h.get_token()
	files = [
		{
			'type' : 'front',
			'path' : 'front.png'
		},
		{
			'type' : 'back',
			'path' : 'back.png'
		}
	]
	#h.create_customer(data)

	#h.upload_documents(files=files,test=True)

	#h.verification('selfie.png',test=True)

	
	
