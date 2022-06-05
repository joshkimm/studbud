//This method was learnt from this video: https://www.youtube.com/watch?v=tREjO_eAPL0&ab_channel=CodingLab, more specifically, with the if statements

//Timer default value is 0
let hours = "0" + 0,
minutes = "0" + 0,
seconds = "0" + 0,
milliseconds = "0" + 0;

//Access stopwatch controls using DOM manipulation methods
let startBtn = document.querySelector("#swstart");
let stopBtn = document.querySelector("#swpause");
let resetBtn = document.querySelector("#swrestart");

//Event listeners for each button 
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

//Starts the timer
function start() {

//setInterval runs the function every 10 milliseconds
startTimer = setInterval(function () {
  milliseconds++
  //If statement that checks if the milliseconds is less than 10, which we add a '0' to the display as well as the current value of milliseconds
  if (milliseconds < 10) {
      "0" + milliseconds;
    //If milliseconds is more than 10, milliseconds will return as normal as there are now 2 digits within the current value.
  } else {
     milliseconds;
  }

    //If statement that adds 1 second every 100 milliseconds
  if(milliseconds == 100){
    seconds++;
    //If statement that checks if seconds are less than 10, which we add a string '0' to the display as well as the current value of seconds
    if (seconds < 10) {
        "0" + seconds;
    } else {
        seconds;
    }
    //Return milliseconds as '00' as 1 second has passed
    milliseconds = "0" + 0;
  }
    //If statement that adds 1 minute every 60 seconds

  if(seconds == 60){
    minutes++;
  
        //If statement that checks if minutes are less than 10, which we add a string '0' to the display as well as the current value of minutes
    if (minutes < 10) {
        "0" + minutes;
    } else {
         minutes;
    }
        //Return seconds as '00' as 1 minute has passed
    seconds = "0" + 0;

  }
      //If statement that adds 1 hour every 60 minutes

  if(minutes == 60){
    hours++;
            //If statement that checks if hours are less than 10, which we add a string '0' to the display as well as the current value of hours
    if (hours < 10) {
        "0" + hours;
    } else {
        hours;
    }
    //Return minutes as '00' as 1 hour has passed
    minutes = "0" + 0;
  }
  //Run this here so that setInterval can run it at each interval
  displayValue();
}, 10); //1000ms = 1s

}

//Pauses the timer
function stop() {
clearInterval(startTimer);
}

//Resets the timer by manually resetting the values to "0" + 0
function reset() {
clearInterval(startTimer);
hours = "0" + 0,
minutes = "0" + 0,
seconds = "0" + 0,
milliseconds = "0" + 0;
displayValue();
}

//Render the time onto the screen using the innerText function
function displayValue() {
document.querySelector(".mill-sec").innerText = milliseconds;
document.querySelector(".seconds").innerText = seconds;
document.querySelector(".minutes").innerText = minutes;
document.querySelector(".hours").innerText = hours;
}

