from django import forms

class TimeButton(forms.Form):
    post = forms.datetime.now

# class TimeStamp(forms.Form)
#     post = forms.DateTimeField(auto_now=True)