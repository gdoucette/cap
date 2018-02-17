
var focusInput;
var breakInput;
var focusCount = 0;
var id;
var minTomil = 60000;
var running = false;
var circleDiv = document.getElementById('circles')
var startButton = document.getElementById('focusTimer')
//NEED TO ADD 0 to timer input conversions below!!!

function focusSet() {

    focusInput = parseInt(document.getElementById('focusInput').value);
    document.getElementById("focusDiv").innerHTML = "Focus Time: " + focusInput + " minutes";
    focusInput = focusInput * minTomil;
    console.log(focusInput);
}
document.querySelector('#focusSet').addEventListener('click', function(){
    event.preventDefault();
    focusSet()
})

function breakSet() {

    breakInput = parseInt(document.getElementById('breakInput').value);
    document.getElementById("breakDiv").innerHTML ="Break Time: " + breakInput + " minutes";
    breakInput = breakInput * minTomil;
    console.log(breakInput);
} 


document.querySelector('#focusTimer').addEventListener('click', function(){
    event.preventDefault();
    focusTimer();
});

function focusTimer() {
    if (running == false){

    if (focusCount == 0){
        fadeIn(circleDiv);
    
    }
    running = true;
    fadeOutfast(startButton);
    console.log(running);
    setTimeout(focusEnd, focusInput); 
    console.log('focustimer!');
    focusCount += 1; 
    draw();  
    console.log('timer'+focusCount)
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
    
}}

// function longBreakTimer () {
//     setTimeout(longBreakTimer, 1000)
// }

function breakTimer() {
    setTimeout(breakEnd, breakInput);
    console.log('breaktimer!')
}


function longBreakTimer() {
    fadeOut(circleDiv);
    setTimeout(fadeInstart, 4000);
    setTimeout(clearBox, 4000);
    console.log('Long breaktimer!');
    focusCount = 0;
}

function focusEnd() {
    // running = false;
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
        
        longBreakTimer();
        }

        else {breakTimer()
    }
    running = false;
    
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

function clearBox() {

    document.getElementById('circles').innerHTML = "";
}

function draw() {
    console.log('draw')
    var circle = new ProgressBar.Circle('#circles', {
        strokeWidth: 10,
        color: '#FCB03C',
        duration: focusInput,
        easing: 'linear'
    });
  
    circle.animate(1);
    console.log('draw' + focusCount);
  };




// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      setTimeout(fade, 400);
    }
  })();
}

function fadeOutfast(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        setTimeout(fade, 40);
      }
    })();
  }


// fade in

function fadeIn(el){
  el.style.opacity = 0;
  el.style.display = "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      setTimeout(fade, 40);
    } 
  })();
}

function fadeInstart(el){
    el = startButton;
    el.style.opacity = 0;
    el.style.display = "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        setTimeout(fade, 40);
      } 
    })();
  }
  
