
//Code learnt/taught from = https://www.youtube.com/watch?v=vAEG6OVCass&t=47s&ab_channel=learn-webdev
//Access buttons using DOM methods
var startStudy = document.getElementById("pomo-start");
var pauseTimer = document.getElementById("pomo-pause");
var resetTimer = document.getElementById("pomo-reset");

//Access the timer variables using DOM
var studyMin = document.getElementById("study-min");
var studySecs = document.getElementById("study-secs");
var breakMin = document.getElementById("break-min");
var breakSecs = document.getElementById("break-secs");

//Access styling elements using DOM
let background = document.getElementById("pomo-container");
        let heading = document.getElementById("pomo-heading");
        let studyLabel = document.getElementById("study-label");
        let studyClockColor = document.getElementById("study-clock");
        let breakClockColor = document.getElementById("break-clock");
        let breakLabel = document.getElementById("break-label");

//This variable allows for a basis for the timer to run on
var timerLive = null;

//Event listener for when the user clicks on the Start button
startStudy.addEventListener("click", function () {
    //If timerLive == null (which it does), it will run the setInterval function
    if (timerLive === null) {
        timerLive = setInterval(timer, 1000);
    }
})

//Timer function
function timer() {
    //If statement checking if the study time is not 0, which in that case, counts down from 25:00
    if (studySecs.innerText != 0) {
        studySecs.innerText--;

    //If statement checking if the study minutes is not equal to 0 and study seconds is equal to 0, so it does not count down past 60 seconds
    } else if (studyMin.innerText != 0 && studySecs.innerText == 0) {
        studySecs.innerText= 59;
        studyMin.innerText--;
    }


//If statement that checks if 25 min has passed, then automatically count down the break seconds. 
    if (studySecs.innerText == 0 && studyMin.innerText == 0) {
        //New class for CSS styling
        studyLabel.classList.add("removed");
        
    


    //If statement checking if the study time is not 0, which in that case, counts down from 5:00
        if (breakSecs.innerText != 0) {
            breakSecs.innerText--;
        } else if (breakMin.innerText != 0 && breakSecs.innerText == 0) {
     //If statement checking if the break minutes is not equal to 0 and study seconds is equal to 0, so it does not count down past 60 seconds
            breakSecs.innerText = 59;
            breakMin.innerText--;
        }
    }
}

//Pause function using the pause button
pauseTimer.addEventListener("click", () => {
    //Pauses the timer referencing the timerLive variable that has the setInterval function embedded into it
    clearInterval(timerLive);
    timerLive = null;
})

//Reset function using the reset button
resetTimer.addEventListener("click", () => {
    //Remove CSS styling
    studyLabel.classList.remove("removed");
    clearInterval(timerLive);
    timerLive = null;

    //Manually reset the study and break time by changing the text of the timer.
    studyMin.innerText = "25";
    studySecs.innerText = "00";

    breakMin.innerText = "5";
    breakSecs.innerText = "00";
})
