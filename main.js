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
var p1Results = document.querySelector('#js1-results')
var p2Results = document.querySelector('#js2-results')
var randNumber;

updateBtn.addEventListener('click', function(minNum, maxNum){
  minNum = Math.floor(minRange.value);
  maxNum = Math.ceil(maxRange.value);
  randNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randNumber;
  event.preventDefault();
})

updateBtn.addEventListener('click', function(event) {
 if(parseInt(maxRange.value<minRange.value)) {
   return;
 }
   lowEnd.innerText = minRange.value;
   highEnd.innerText = maxRange.value;
   event.preventDefault();
 })

submitBtn.addEventListener('click', function(guess) {
  pOneGuessOutput.innerText = pOneGuessInput.value;
  pOneScoreName.innerText = pOneName.value;
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

function enableButtons(){
  
}






