from django.contrib import admin
from django.urls import path,re_path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    path('token',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('session',TestSession.as_view()),

    #user
    path("register",Register.as_view()),
    path("upload",UploadAuth.as_view()),
    # get verification status
    path("verify",CheckVerifStatus.as_view()),
    # submit info
    path("info",PersonalInfoView.as_view()),
    #test tasks
    path("testtask",testTask.as_view()),
    # get Balance
    path("balance",BalanceView.as_view()),
    # handle fiat deposit
    path("fiat",handleDepositDocs.as_view()),
    # get Transactions
    path("transactions",TransactionView.as_view()),
    # get coins 
    path("coins",CoinView.as_view()),
    # get price
    path("price/<str:coin>",PriceView.as_view()),
    # exchange view
    path("swap",Swap.as_view()),




    # admin endpoints
    path("stats",getUserData.as_view()),
    path('approve',setApproval.as_view()),
    path("depositTickets",GetDepositDocs.as_view()),
    path("balanceApprove",ApproveBalanceView.as_view()),
    path("loaduser",getUserDetails.as_view()),
    path("modifyadminuser",modifyInfo.as_view()),
    path("getadminusers",GetUsers.as_view()),
    path("modifycoin",ModifyCoinFees.as_view()),



]