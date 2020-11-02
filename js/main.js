var RANDOM_NUMBERS = 16;
var MIN_NUMBER = 1;
var MAX_NUMBER_EASY = 100;
var MAX_NUMBER_MEDIUM = 49;
var MAX_NUMBER_HARD = 25;

function bombNumbersGenerator (numbers, min, max) {
	var bombNumbers = [];
	while (bombNumbers.length < numbers) {
		var generatedBombNumber = randomNumber (min, max)
		if(!isNumberInArray (generatedBombNumber, bombNumbers)) {
			bombNumbers.push (generatedBombNumber)
		}
	}
	return bombNumbers;
}

var bombNumbers = bombNumbersGenerator(RANDOM_NUMBERS, MIN_NUMBER, MAX_NUMBER_EASY);

var easySlotElements = document.querySelectorAll('.easy > *')
var mediumSlotElements = document.querySelectorAll('.medium > *')
var hardSlotElements = document.querySelectorAll('.hard > *')

// MODALITÀ STANDARD
for (var i = 0; i < easySlotElements.length; i++){

	easySlotElements[i].value = i;

	easySlotElements[i].addEventListener('click', function(event){
		var slotValue = parseInt(event.target.value);
		if (isNumberInArray(slotValue, bombNumbers)){
			event.target.style.backgroundColor = "#fc5c65"
		} else {
			event.target.style.backgroundColor = '#26de81'
		}
	})
}

// MODALITÀ ESPERTO
for (var i = 0; i < mediumSlotElements.length; i++){

	mediumSlotElements[i].value = i;

	mediumSlotElements[i].addEventListener('click', function(event){
		var slotValue = parseInt(event.target.value);
		if (isNumberInArray(slotValue, bombNumbers)){
			event.target.style.backgroundColor = "#fc5c65"
		} else {
			event.target.style.backgroundColor = '#26de81'
		}
	})
}

// MODALITÀ CRITICA
for (var i = 0; i < hardSlotElements.length; i++){

	hardSlotElements[i].value = i;

	hardSlotElements[i].addEventListener('click', function(event){
		var slotValue = parseInt(event.target.value);
		if (isNumberInArray(slotValue, bombNumbers)){
			event.target.style.backgroundColor = "#fc5c65"
		} else {
			event.target.style.backgroundColor = '#26de81'
		}
	})
}

// SELEZIONE DIFFICOLTÀ
var dashboardElements = document.getElementsByClassName('dashboard');
document.getElementById('difficulty').addEventListener('change', function(event){
	var selectedDifficulty = event.target.value;

	switch(selectedDifficulty){
		case 'easy':
			bombNumbers = bombNumbersGenerator(RANDOM_NUMBERS, MIN_NUMBER, MAX_NUMBER_EASY);
			break;
		case 'medium':
			bombNumbers = bombNumbersGenerator(RANDOM_NUMBERS, MIN_NUMBER, MAX_NUMBER_MEDIUM);
			break;
		case 'hard':
			bombNumbers = bombNumbersGenerator(RANDOM_NUMBERS, MIN_NUMBER, MAX_NUMBER_HARD);
			break;
	}

	for (var i = 0; i < dashboardElements.length; i++){
		if (dashboardElements[i].className.includes(selectedDifficulty)){
			dashboardElements[i].style.display = 'flex'
		} else {
			dashboardElements[i].style.display = 'none'
		}
	}
})
