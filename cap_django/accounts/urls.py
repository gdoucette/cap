from django.urls import path, include
from . import views
from django.contrib.auth.views import login, logout 




urlpatterns = [
 
path('login/', login, {'template_name': 'accounts/login.html'}, name='login'),  
path('register/', views.signup, name='register'),
path('reset/', views.change_password, name='reset'),
path('logout/', logout, {'next_page': '/'}, name='logout')
]