from django.shortcuts import render
from timer.models import Timer, StrainedFocus
from django.utils import timezone
from django.http import JsonResponse
import datetime
import time
from django.contrib.auth.decorators import login_required

@login_required(redirect_field_name='login')
def timer(request):
    return render(request, 'timer/timer.html')


def start_timer(request):
    if request.method == 'POST': 
        new_timer = Timer()
        new_timer.user = request.user
        new_timer.start_time = timezone.now()
        new_timer.save()
        return JsonResponse({'Message': 'success', 'timer_id': new_timer.pk})
    return JsonResponse({'Message': 'Fail: Must be post'})


def end_timer(request):
    if request.method == 'POST': 
        timer = Timer.objects.get(pk=request.POST.get('timer_id'))
        timer.end_timer = timezone.now()
        timer.save()
        return JsonResponse({'Message': 'success', 'timer_end': timer.end_timer, 'timer_id': timer.pk})
    return JsonResponse({'Message': 'Fail: Must be post'})


def strained_focus(request):
    if request.method == 'POST':
        sf = StrainedFocus()
        sf.time_stamp = timezone.now()
        sf.timer = Timer.objects.get(pk=request.POST.get('timer_id'))
        sf.save()
        return JsonResponse({'Message': 'success', 'strained_focus': str(sf.time_stamp), 'timer_id': sf.timer.pk})
    return JsonResponse({'Message': 'Fail: Must be post'})


def timeline(request):
    js = []
    for t in request.user.timers.all():
        js.append(
            {'id': t.id, 'content': str(t.id), 'start': str(t.start_time), 'end': str(t.end_timer)}
        )
        for s in t.strained_focus.all():
            js.append(
                {'id': s.id, 'content': 'Mark', 'start': s.time_stamp}
            )
    return JsonResponse({'timer': js}, safe=True)