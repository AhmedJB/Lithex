from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lithexBackEnd.settings')
app = Celery('lithexBackEnd')

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


app.conf.beat_schedule = {
    # Executes every Monday morning at 7:30 a.m.
    'fiat_watcher_30s': {
        'task': 'api.tasks.fiat_watcher',
        'schedule': 30.0,
        'args': (),
    },
    'ust_watcher_30s': {
        'task': 'api.tasks.ust_watcher',
        'schedule': 30.0,
        'args': (),
    },
    'withdraw_watcher_30s': {
        'task': 'api.tasks.withdraw_watcher',
        'schedule': 30.0,
        'args': (False,),
    },
    'anchor_balance_watcher_30s': {
        'task': 'api.tasks.anchorBalanceWatcher',
        'schedule': 30.0,
        'args': (),
    },
    'depositWatcher' : {
        'task' : 'api.tasks.DepositWatcher',
        'schedule' : 90.0,
        'args' : (),
    }
}


@app.task(bind=True)
def debug_task(self):
	print('Request: {0!r}'.format(self.request))