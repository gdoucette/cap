from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from accounts.forms import SignUpForm
from timer.models import StrainedFocus
# Create your views here.

# def getStrainedfocus(request):
#     data = StrainedFocus.time_stamp
#     return render(request, 'accounts/index.html', {'data': data})

    

def index(request):
    return render(request, 'accounts/index.html')


# def index(request):
#     auth = True
#     if not request.user.is_authenticated():
#         auth = False
#     return render(request, 'index.html', {'auth': auth})


# def login_user(request, user):
#     login(user)
#     return True


# def home(request):
#     return render(request, 'accounts/register.html')


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(is_staff=True, is_active=True, **form.cleaned_data)
            u = authenticate(request, username=user.username, password=request.POST.get('password'))
            if u is not None:
                login(request, u)
                return redirect('timer')
    else: 
        form = SignUpForm()

    return render(request, 'accounts/register.html', {'form': form})

# def login_view(request):
#     if request.POST:
#         username = request.POST['username']
#         password = request.POST['password']
#         user = authenticate(username = username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('index')
#         else:
#             message.error(request, 'Please check your username and password')
#     return render(request, 'login.html')

@login_required(redirect_field_name='login')
def change_password(request):
    if request.POST:
        user = request.user
        password = request.POST.get('password', None)
        if password:
            user.set_password(password)
            user.save()
        return redirect('timer')
    return render(request, 'accounts/reset.html')


# def logout_view(request):
#     logout(request)
#     return redirect('login.html')
