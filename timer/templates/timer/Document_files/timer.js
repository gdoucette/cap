
var focusInput;
var breakInput;
var count = 0;
var id;
//actual conversion
// var minTomil = 60000;
//test conversion
var minTomil = 600;
var running = false;
var circleDiv = document.getElementById('circles')
var startButton = document.getElementById('focusStart')
var strainButton = document.getElementById('strainedFocus')

var timer1 = document.getElementById('timer1')
var timer2 = document.getElementById('timer2')
var timer3 = document.getElementById('timer3')
var timer4 = document.getElementById('timer4')
var timerDiv = document.getElementById('timerDiv')
var timerSet = document.getElementById('timerSet')
var color1 = '#A3AF8C'
var color2 = '#4DA1A9'
var color3 = '#2E5077'
var color4 = '#611C35'


var timerCircles = [];
function focusSet() {

    focusInput = parseInt(document.getElementById('focusInput').value);
    //document.getElementById("focusDiv").innerHTML = "Focus Time: " + focusInput + " minutes";
    focusInput = focusInput * minTomil;
    console.log(focusInput);
}


// document.querySelector('#focusSet').addEventListener('input', function(){
//     event.preventDefault();
//     focusSet()
// })

function breakSet() {

    breakInput = parseInt(document.getElementById('breakInput').value);
    //document.getElementById("breakDiv").innerHTML ="Break Time: " + breakInput + " minutes";
    breakInput = breakInput * minTomil;
    console.log(breakInput);
} 


document.querySelector('#focusStart').addEventListener('click', function(){
    event.preventDefault();
    focusTimer();
});

function focusTimer() {
    if (running == false){

    if (count == 0){
        fadeIn(timerDiv);
        fadeIn(timer1);
        fadeIn(timer2);
        fadeIn(timer3);
        fadeIn(timer4);
        console.log('fade in timer');
    
    }
    
    running = true;
    fadeOutfast(startButton);
    fadeOutfast(timerSet);
    // fadeInstrain();   

    console.log(running);
    setTimeout(focusEnd, focusInput); 
    
    count += 1; 
    draw();  
    console.log('timer'+count)
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
  // s
    setTimeout(breakEnd, breakInput);
    

    console.log('breaktimer!')
}


function longBreakTimer() {
  // fadeOutfast(strainButton);
    fadeOut(timerDiv);
    setTimeout(fadeIntimerSet, 3500);
    setTimeout(fadeInstart, 3800);
    setTimeout(clear, 4000);
    console.log('Long breaktimer!');
    count = 0;
    console.log(count);
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
    if (count == 4) {
        
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

function clear() {
    timerCircles.forEach(function(ob, i){
        ob.destroy();
      })
      timerCircles = [];
    // document.getElementById('timerDiv').innerHTML = '<div class="container" id="timer4"> <div class="container" id="timer3"> <div class="container" id="timer2"> <div class="container" id="timer1"> </div> </div> </div> </div>';
    // document.getElementById('timer3').innerHTML = "";
    // document.getElementById('timer4').innerHTML = "";
}



  function draw(divTodraw) {
    
    console.log(count);
    if (count == 1) {
      divTodraw = timer1
      color = color1
    }
  
    if (count == 2) {
      divTodraw = timer2
      color = color2
    }
  
    if (count == 3) {
      divTodraw = timer3
      color = color3
    }
  
    if (count == 4) {
      divTodraw = timer4
      color = color4
    }
    console.log(divTodraw);
    // circle = new ProgressBar.Circle('#progress2',
    var circle = new ProgressBar.Circle(divTodraw, {
      strokeWidth: 15,
      color: color,
      duration: focusInput,
      easing: 'linear'
  });
  timerCircles.push(circle);
  circle.animate(1);
  
  }



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
    console.log(el); 
  
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
el = timerDiv;
  console.log('fadein');
  console.log(el);
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


  function fadeInstart(){
    el = startButton;
    console.log('fadeinstart');
    console.log(el);
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

  function fadeIntimerSet(){
    el = timerSet;
    console.log('fadeintimerset');
    console.log(el);
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

  function fadeInstrain(){
    el = strainButton;
    console.log('fadeintstrained');
    console.log(el);
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
  
  
