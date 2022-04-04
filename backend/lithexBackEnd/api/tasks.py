

from celery import shared_task

@shared_task
def test(r):
    print('test')
    print(r)
    for i in range(r):
        print(i)


