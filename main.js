var updateBtn = document.querySelector('.btn-update');
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var lowEnd = document.querySelector('#low-end');
var highEnd = document.querySelector('#high-end');
var pOneName = document.querySelector('#player-one-name');
var pTwoName = document.querySelector('#player-two-name');
var pOneGuessInput = document.querySelector('#p1-input');
var pTwoGuessInput = document.querySelector('#p2-input');
var pOneScoreName = document.querySelector('#p1-display-name');
var pTwoScoreName = document.querySelector('#p2-display-name');
var submitBtn = document.querySelector('#submit-btn');
var pOneGuessOutput = document.querySelector('#player-one-guess');
var pTwoGuessOutput = document.querySelector('#player-two-guess');
var p1Results = document.querySelector('#js1-results');
var p2Results = document.querySelector('#js2-results');
var randNumber;
var resetBtn = document.querySelector('#reset-btn');
var guessForm = document.querySelector('#guess-form');
var clearBtn = document.querySelector('#js-clear-btn');
var invalidChar = ['+', '-', 'e'];

gameStart();
randGen();

function gameStart(){
  minRange.value = 1;
  maxRange.value = 100;
}

function randGen(){
  minNum = Math.floor(minRange.value);
  maxNum = Math.ceil(maxRange.value);
  randNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randNumber;
}


minRange.addEventListener('keydown', invalidInput);
maxRange.addEventListener('keydown', invalidInput);

function invalidInput(event){
  if (event.keyCode === 69 || event.keyCode === 187 || event.keyCode === 189)
    {
        event.preventDefault();
    }
};

updateBtn.addEventListener('click', function(event) {

function minCheck() {
  if (minRange.value >= maxRange.value) {
    alert('Please update range to meet 2nd grade math abilities');
    gameStart();
  }
}
function checkSubBtn() {
  if (pOneGuessInput.value == "" || pTwoGuessInput.value == "" || minRange.value == "" || maxRange.value == "" || pOneName == "" || pTwoName == "") {
    alert('Please fill all required fields');
  }
}
function checkUpdBtn () {
  if (minRange.value == "" || maxRange.value == "") {
    alert('Plese fill Min and Max fields');
  } else { 
    minCheck();
  }
}
updateBtn.addEventListener('click', function(event) {
  checkUpdBtn();
  lowEnd.innerText = minRange.value;
  highEnd.innerText = maxRange.value;
  randGen();
  event.preventDefault();
});

guessForm.addEventListener('keyup', function(){
  resetBtn.removeAttribute('disabled');
})

resetBtn.addEventListener('click', function(event) {
  randGen();
  pOneGuessInput.value = "";
  pTwoGuessInput.value = "";
  event.preventDefault();
  resetBtn.disabled = true;
})
submitBtn.addEventListener('click', function(guess) {
  outsideRange();
    if (pOneGuessInput.value > randNumber) {
      p1Results.innerText = 'That\'s too high!';
    } else if (pOneGuessInput.value < randNumber) {
      p1Results.innerText = 'That\'s too low!';
    } else {
      p1Results.innerText = "BOOM!";
    }
  event.preventDefault();
})

submitBtn.addEventListener('click', function(guess) {
  pTwoGuessOutput.innerText = pTwoGuessInput.value;
  pTwoScoreName.innerText = pTwoName.value;
  if (pTwoGuessInput.value > randNumber) {
      p2Results.innerText = 'That\'s too high!';
    } else if (pTwoGuessInput.value < randNumber) {
      p2Results.innerText = 'That\'s too low!';
    } else {
      p2Results.innerText = "BOOM!";
    }
  event.preventDefault();
})

guessForm.addEventListener('keyup', function(){ 
  clearBtn.disabled = false;
})

clearBtn.addEventListener('click', function(){
  pOneName.value = '';
  pTwoName.value = '';
  pOneGuessInput.value = '';
  pTwoGuessInput.value = '';
  pOneGuessOutput.innerText = '-';
  pTwoGuessOutput.innerText = '-';
  pOneScoreName.innerText = 'Challenger 1';
  pTwoScoreName.innerText = 'Challenger 2';
  p1Results.innerText = 'No guess made';
  p2Results.innerText = 'No guess made';
  event.preventDefault();
  clearBtn.disabled = true ;
})

function outsideRange(){
  if(parseInt(pOneGuessInput.value) < parseInt(minRange.value)){
    event.preventDefault();
  } else {
    pOneGuessOutput.innerText = pOneGuessInput.value;
    pOneScoreName.innerText = pOneName.value;
  }
}






