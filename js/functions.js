function randomNumber (min, max) {
  return Math.floor (Math.random () * ((max+1) - min) + min)
}

function isNumberInArray (number, array) {
	for (var i = 0; i < array.length; i++) {
		if (number === array[i]){
			return true;
		}
	}
	return false;
}
