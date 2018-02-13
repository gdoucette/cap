
var focusInput;
var breakInput;
var focusCount = 0;
var id;
var minutes2mili = 600;
var running = false;
//NEED TO ADD 0 to timer input conversions below!!!

function focusSet() {

    focusInput = parseInt(document.getElementById('focusInput').value);
    document.getElementById("focusDiv").innerHTML = "Focus Time: " + focusInput + " minutes";
    focusInput = focusInput * minutes2mili;
    console.log(focusInput);
}
document.querySelector('#focusSet').addEventListener('click', function(){
    event.preventDefault();
    focusSet()
})

function breakSet() {

    breakInput = parseInt(document.getElementById('breakInput').value);
    document.getElementById("breakDiv").innerHTML ="Break Time: " + breakInput + " minutes";
    breakInput = breakInput * minutes2mili;
    console.log(breakInput);
} 


function focusTimer() {
    running = true;
    console.log(running);
    setTimeout(focusEnd, focusInput); 
    console.log('focustimer!') 
    focusCount += 1   
    // console.log(focusCount)
    $.ajax({
        url: "/timer/start_timer/", 
        type: 'post',
        data: {
            'duration': focusInput,
        }, 
        success: function(response) {
            console.log(response)
            id = response.timer_id

        }
    })
    
}

function longBreakTimer () {
    setTimeout(longBreakTimer, 1000)
}

function breakTimer() {
    setTimeout(breakEnd, breakInput);
    console.log('breaktimer!')
}


function longBreakTimer() {
    //setTimeout(breakEnd, breakInput);
    console.log('Long breaktimer!')
    focusCount = 0
}

function focusEnd() {
    running = false;
    $.ajax({
        url: "/timer/end_time/", 
        type: 'post',
        data: {
            'timer_id': id,
        }, 
        success: function(response) {
            console.log(response)
           
        }
    })
    confirm("Break Time\nClick to Start Break Time");
    if (focusCount == 4) {
        longBreakTimer()
        }

        else {breakTimer()
    }
    
}

function breakEnd() {
    confirm("Click to start your next focus period");
    focusTimer();
}

document.querySelector('#strainedFocus').addEventListener('click', function(){
    event.preventDefault();
    strainedFocus();
})

function strainedFocus(){
    if (running) {
    
        $.ajax({
            url: "/timer/strained_focus/", 
            type: 'post',
            data: {
                'timer_id': id,
            }, 
            success: function(response) {
                console.log(response)
            
            }
        })

    }
}