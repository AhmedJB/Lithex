import re   
  
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'  
  
def checkEmail(email):   
  
    if(re.search(regex,email)):   
        print("Valid Email")   
        return True
    else:   
        print("Invalid Email")   
        return False