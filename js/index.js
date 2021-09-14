var FALL = 0;
var SUPER_CONTRACT = 50;
var CONTRACT = 65;
var GRAND = 80;

var elForm = document.querySelector('.form'); 

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

var elUserMark = document.querySelector('.user-mark').value.trim();
var elCheckbox = document.querySelector('.checkbox')
var elResult = document.querySelector('.result');

if (elCheckbox.checked) {
  elResult.textContent = 'siz korrupsiyaga aralashganingiz tufali qamalasiz ho ho ho :))'  
}
 else if (elUserMark >= GRAND) {
  elResult.textContent = 'You get grand Welcome to our university';
} else if (elUserMark >= CONTRACT) {
  elResult.textContent = 'You get contract Welcome to our university';
} else if (elUserMark >= SUPER_CONTRACT) {
  elResult.textContent = 'You get super contract Welcome to our university';
} else if (elUserMark >= FALL) {
  elResult.textContent = 'You fall';
} else {
  elResult.textContent = 'Write right mark';
}
})