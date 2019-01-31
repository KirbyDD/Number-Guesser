var updateBtn = document.querySelector('.btn-update');
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var lowEnd = document.querySelector('#low-end');
var highEnd = document.querySelector('#high-end');
var pOneName = document.querySelector('#player-one-name');
var pTwoName = document.querySelector('#player-two-name');
var pOneGuessInput = document.querySelector('#p1-input');
var pTwoGuessInput = document.querySelector('#p2-input');



updateBtn.addEventListener('click', function(event) {
  // if(minRange.value != so && maxRange != NaN && maxRange > minRange){
  lowEnd.innerText = minRange.value;
  highEnd.innerText = maxRange.value;
// } else {
//   alert('Please correct values');
// }
  event.preventdefault();
  })

