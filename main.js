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


updateBtn.addEventListener('click', function(event) {
 if(maxRange.value<minRange.value) {
   return;
 }
   lowEnd.innerText = minRange.value;
   highEnd.innerText = maxRange.value;
   event.preventDefault();
 })

submitBtn.addEventListener('click', function(guess) {
  pOneGuessOutput.innerText = pOneGuessInput.value;
  pTwoGuessOutput.innerText = pTwoGuessInput.value;
  pOneScoreName.innerText = pOneName.value;
  pTwoScoreName.innerText = pTwoName.value;
  event.preventDefault();
})




