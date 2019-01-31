var updateBtn = document.querySelector('.btn-update');
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var lowEnd = document.querySelector('#low-end');
var highEnd = document.querySelector('#high-end');

updateBtn.addEventListener('click', function(event) {
  lowEnd.innerText = minRange.value;
  highEnd.innerText = maxRange.value;
  event.preventdefault();
  })

