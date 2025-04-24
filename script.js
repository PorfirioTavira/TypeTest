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
// Run a standard minute/second/hundredths timer:\
function stopTimer(){
    clearInterval(idTime);
    clearInterval(idComplete);
    console.log("hiuufasdfa");
    testArea.removeEventListener("input", completed);
    testArea.removeEventListener("keydown", startTimer, {once: true});
}
function clearTimer(){
    theTimer.innerHTML = "00:00:00";
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

function startOver(){
    updateInput = "";
    testArea.value = "";
    testArea.addEventListener("keydown", startTimer, {once: true});
    testArea.addEventListener("input", completed);
}

// Match the text entered with the provided text on the page:
function updateInput(e){
    userInput = e.target.value;
}
testArea.addEventListener("input", updateInput);
testArea.addEventListener("keydown", startTimer, {once: true});
testArea.addEventListener("input", completed);
resetButton.addEventListener("click", startOver);

testArea

function completed(){
    if(userInput == originText){
        stopTimer();
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
