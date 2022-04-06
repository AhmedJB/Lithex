

from celery import shared_task
from api.kycwrapper.handler import Handler
from api.models import Documents,CustomUser,DocumentTicket


@shared_task
def test(r):
    print('test')
    print(r)
    for i in range(r):
        print(i)

@shared_task
def createCustomer(data,user_id):
    user = CustomUser.objects.filter(id=user_id).first()
    h = Handler()
    res = h.create_customer(data)
    user.cus_id = res['id']
    user.save()




@shared_task
def verify(user_id,ticket_id):
    user = CustomUser.objects.filter(id=user_id).first()
    ticket = DocumentTicket.objects.filter(id=ticket_id).first()

    h = Handler()
    front_doc = Documents.objects.filter(ticket=ticket,doc_type='front').first()
    back_doc = Documents.objects.filter(ticket=ticket,doc_type='back').first()
    selfie_doc = Documents.objects.filter(ticket=ticket,doc_type='selfie').first()
    files = [
        {
			'type' : 'front',
			'path' : front_doc.file.path
		},
		{
			'type' : 'back',
			'path' : back_doc.file.path
		}
    ]
    doc_res = h.upload_documents(files,customer=user.cus_id)
    if doc_res:
        ticket.document_id = doc_res['id']
        test_res = h.verification(selfie_doc.file.path,customer=user.cus_id,doc_id=doc_res['id'])
        if test_res:
            ticket.match = test_res['face_match']
            ticket.score = float(test_res['similarity'])
            ticket.api_reviewed  = True
            ticket.api_status = "done"
            ticket.save()
            print("done checking")
            
        else:
            print("doc scanning failed")
            ticket.api_reviewed = True
            ticket.api_status = "refused"
            ticket.save()


    else:
        print('doc upload failed')
        ticket.api_reviewed = True
        ticket.api_status = "refused"
        ticket.save()
        







@shared_task
def printCheck(text):
    print(text)