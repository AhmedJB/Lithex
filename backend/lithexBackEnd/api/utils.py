import re   
import uuid
from .models import Transactions
  
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'  
  
def checkEmail(email):   
  
    if(re.search(regex,email)):   
        print("Valid Email")   
        return True
    else:   
        print("Invalid Email")   
        return False

def create_transaction_log(user,coin,message,t_type,status="completed"):
    while True:
        idd = str(uuid.uuid4())
        o_tr = Transactions.objects.filter(idd=idd).first()
        if o_tr:
            continue
        else:
            break
    tr = Transactions.objects.create(user = user, coin = coin,
         message = message,
         t_type = t_type,
         idd= idd,
         status=status
         )
    tr.save()
    return tr