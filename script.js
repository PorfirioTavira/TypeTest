const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var userInput = "";
const controller = new AbortController();
var intervals;
var complete = false;
var idTime;
var idComplete;
var time;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function padZero(num){
    var stnum = num.toString();
    return String(stnum).padStart(2,'0');
}
// Run a standard minute/second/hundredths timer:
function clearTimer(){
    return "00:00:00";
}
function startTimer(){
    time = new Date("January 1 1898, 00:00:00");
    idTime = setInterval(setTimer, 10, time);
    idComplete = setInterval(checkCompletion, 10);
}

function setTimer(time){
    curMillSecs = time.getMilliseconds();
    updatedMillSecs = curMillSecs + 10;
    time.setMilliseconds(updatedMillSecs);
    mins = time.getMinutes();
    secs = time.getSeconds();
    millis = time.getMilliseconds()/10;
    theTimer.innerHTML =  padZero(mins) + ":" + padZero(secs) + ":" + padZero(millis);
    
}


// Match the text entered with the provided text on the page:
function updateInput(e){
    userInput = e.target.value;
}
testArea.addEventListener("input", updateInput);
testArea.addEventListener("keydown", startTimer, {once: true});
testArea.addEventListener("input", completed);


function completed(){
    if(userInput == originText){
    clearInterval(idTime);
    clearInterval(idComplete);
    console.log("hiuufasdfa");
    testArea.removeEventListener("input", completed);
    }
}

function checkCompletion(){
    if(userInput == originText){
       complete = true;
    }
}

// Start the timer:

// Reset everything:


// Event listeners for keyboard input and the reset button:
