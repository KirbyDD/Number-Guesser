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
var enterMin = document.querySelector('#min-range-error');
var enterMax = document.querySelector('#max-range-error');
var showMe = document.querySelector('.show-me');
var enterP1Name = document.querySelector('#p1-name-error');
var enterP1Guess = document.querySelector('#p1-guess-error');
var enterP2Name = document.querySelector('#p2-name-error');
var enterP2Guess = document.querySelector('#p2-guess-error');
var guessCount = 0;



gameStart();
randGen();

minRange.addEventListener('keydown', invalidInput);
maxRange.addEventListener('keydown', invalidInput);

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

function invalidInput(event){
  if (event.keyCode === 69 || event.keyCode === 187)
    {
        event.preventDefault();
    }
};

function minCheck() {
  if (parseInt(minRange.value) >= parseInt(maxRange.value)) {
    alert('Please update range to meet 2nd grade math abilities');
    gameStart();
  }
}

function checkEmptyMin(){
  if (minRange.value == "" ) {
  enterMin.classList.add('show-me');
  } else {
   enterMin.remove('show-me');
  }
}

function checkEmptyMax(){
 if (maxRange.value == "" ) {
  enterMax.classList.add('show-me');
} else {
   enterMax.remove('show-me');
 }
}

function checkEmptyName1(){
  if (pOneName.value == "") {
    enterP1Name.classList.add('show-me');
  } else {
    enterP1Name.remove('show-me');
  }
}
function checkEmptyGuess1() {
  if (pOneGuessInput.value == "") {
    enterP1Guess.classList.add('show-me');
  } else {
    enterP1Guess.remove('show-me');
  }
}
function checkEmptyName2(){
  if (pTwoName.value == "") {
    enterP2Name.classList.add('show-me');
  } else {
    enterP2Name.remove('show-me');
  }
}
function checkEmptyGuess2() {
  if (pTwoGuessInput.value == "") {
    enterP2Guess.classList.add('show-me');
  }
  else {
    enterP2Guess.remove('show-me');
  }
}

updateBtn.addEventListener('click', function(event) {
  checkEmptyMax();
  checkEmptyMin();
  minCheck()
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
  !pOneGuessInput.value;
  !pTwoGuessInput.value;
  event.preventDefault();
  resetBtn.disabled = true;
})


submitBtn.addEventListener('click', function(event) {
  checkEmptyName1();
  checkEmptyGuess1();
  checkEmptyName2();
  checkEmptyGuess2();
  outsideRange(event);
  addGuess(event);
  if (pOneGuessInput.value > randNumber) {
    p1Results.innerText = 'That\'s too high!';
  } else if (pOneGuessInput.value < randNumber) {
    p1Results.innerText = 'That\'s too low!';
  } else {
    p1Results.innerText = "BOOM!";
    createCardOne();
    rangeChange();
  }
  event.preventDefault();

  if (pTwoGuessInput.value > randNumber) {
    p2Results.innerText = 'That\'s too high!';
  } else if (pTwoGuessInput.value < randNumber) {
    p2Results.innerText = 'That\'s too low!';
  } else {
    p2Results.innerText = "BOOM!";
    createCardTwo();
    rangeChange();
  }

  event.preventDefault();
})

guessForm.addEventListener('keyup', function(){ 
  clearBtn.disabled = false;
})

clearBtn.addEventListener('click', function(){
  pOneName.value == '';
  pTwoName.value == '' ;
  pOneGuessInput.value == '';
  pTwoGuessInput.value == '';
  pOneGuessOutput.innerText = '-';
  pTwoGuessOutput.innerText = '-';
  pOneScoreName.innerText = 'Challenger 1';
  pTwoScoreName.innerText = 'Challenger 2';
  p1Results.innerText = 'No guess made';
  p2Results.innerText = 'No guess made';
  event.preventDefault();
  clearBtn.disabled = true ;
})


function outsideRange(event){
  var guess1 = parseInt(pOneGuessInput.value);
  var guess2 = parseInt(pTwoGuessInput.value);
  var min = parseInt(minRange.value);
  var max = parseInt(maxRange.value);
  if(guess1 < min || guess1 > max || guess2 < min || guess2 > max){
    alert('Please make sure guesses are within range!')
    event.preventDefault();
  } else{
    assignOutput();
  }
  if (pOneGuessInput.value == "" || pTwoGuessInput.value == "" || minRange.value == "" 
    || maxRange.value == "" || pOneName.value == "" || pTwoName.value == "") {
    event.preventDefault();
    alert('Please fill all required fields');
  } else{
    assignOutput();
}

function assignOutput(){
    pOneGuessOutput.innerText = pOneGuessInput.value;
    pOneScoreName.innerText = pOneName.value;
    pTwoGuessOutput.innerText = pTwoGuessInput.value;
    pTwoScoreName.innerText = pTwoName.value;
  }
}

function createCardOne(){
  var sectionTwo = document.querySelector('.sec2')

        sectionTwo.innerHTML += 
          `<article class="score-box-container">
          <div class="score-box">
            <h5 class="winner-name">${pOneName.value}</h5> 
            <p class="vs">vs</p> 
            <h5 class="winner-name">${pTwoName.value}</h5>
          </div>
          <div class="score-box-name">
            <h4 class="winner-display">${pOneName.value}</h4>
            <p class="winner-name">Winner</p> 
          </div>
          <div class="score-box-bot">
            <p class="score-bot-style"><span class="span-spacing" id="guess-count">43</span>Guesses</p>
            <p class="score-bot-style score-bot-style2"><span class="span-spacing" id="time">1.5</span>Minutes</p>
            <i class="fas fa-times-circle"></i>
          </div>
        </article>`        
}

function createCardTwo(){
  var sectionTwo = document.querySelector('.sec2')

        sectionTwo.innerHTML += 
          `<article class="score-box-container">
          <div class="score-box">
            <h5 class="winner-name">${pOneName.value}</h5> 
            <p class="vs">vs</p> 
            <h5 class="winner-name">${pTwoName.value}</h5>
          </div>
          <div class="score-box-name">
            <h4 class="winner-display">${pTwoName.value}</h4>
            <p class="winner-name">Winner</p> 
          </div>
          <div class="score-box-bot">
            <p class="score-bot-style"><span class="span-spacing" id="guess-count">${guessCount}</span>Guesses</p>
            <p class="score-bot-style score-bot-style2"><span class="span-spacing" id="time">1.5</span>Minutes</p>
            <i class="fas fa-times-circle"></i>
          </div>
        </article>`        
}

function rangeChange(){
  minRange.value = parseInt(minRange.value) - 10;
  maxRange.value = parseInt(maxRange.value) + 10;
  lowEnd.innerText = minRange.value;
  highEnd.innerText = maxRange.value;
  randGen();
  guessCount = 0;
}

var sectionTwo = document.querySelector('.sec2')

sectionTwo.addEventListener('click', deleteCard);

function deleteCard(event){
  console.log(event.target);
  if(event.target.classList.contains('fas')){
    event.target.parentElement.parentElement.remove();
  }

}

function addGuess(){
  guessCount += 2;

}