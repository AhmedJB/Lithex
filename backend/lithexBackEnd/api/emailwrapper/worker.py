from string import Template
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

E_mail = "info@liqd.fi"
password = "1A6472D4CAA9C98B86A77C1CE4D1A9060C87"


def read_template(path):
    template_file = open(path,'r',encoding="utf-8")
    return Template(template_file.read())



def send_email(email,template_type,**kwargs):
    s = smtplib.SMTP('smtp.elasticemail.com', 2525)
    s.starttls()
    s.login(E_mail, password)

    msg = MIMEMultipart()       # create a message
    if template_type == "confirmation":
        path = "./api/emailwrapper/confirmation.txt"


    msg_template = read_template(path)
    # add in the actual person name to the message template
    
    message = msg_template.substitute(**kwargs)

    # setup the parameters of the message
    msg['From']=E_mail
    msg['To']=email
    msg['Subject']="LIQD Support Message"

    # add in the message body
    msg.attach(MIMEText(message, 'plain'))
    print(msg)

    # send the message via the server set up earlier.
    resp  = s.send_message(msg)
    print(resp)
    
    del msg
