
var focusInput;
var breakInput;
var focusCount = 0;

//NEED TO ADD 0 to timer input conversions below!!!

function focusSet() {

    focusInput = parseInt(document.getElementById('focusInput').value);
    document.getElementById("focusDiv").innerHTML = "Focus Time: " + focusInput + " minutes";
    focusInput = focusInput * 600;
    console.log(focusInput);
}

function breakSet() {

    breakInput = parseInt(document.getElementById('breakInput').value);
    document.getElementById("breakDiv").innerHTML ="Break Time: " + breakInput + " minutes";
    breakInput = breakInput * 600;
    console.log(breakInput);
} 


function focusTimer() {
    setTimeout(focusEnd, focusInput); 
    console.log('focustimer!') 
    focusCount += 1   
    console.log(focusCount)
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


function strainedFocus(){
    console.log('strained focus ' + Date.now());

}