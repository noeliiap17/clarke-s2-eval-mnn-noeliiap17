'use strict';
var randomNumber = (Math.round(Math.random()*10))+1;
var tried = document.querySelector('.number');
var button = document.querySelector('.button-text');
var result = document.querySelector('.result')
var saveBox = document.querySelector('.save-box')
tried.value = parseInt(tried.value);
var newTry = document.querySelector('.counter')
var counter = {
	initialValue: 1,
}
var scores = document.querySelector('.name');
var saveButton = document.querySelector('.save-button');
var historic = document.querySelector('.scores');
/*Funcion randomNumber*/
// function newRandom() {
// return (randomNumber)
// }
//console.log(newRandom())

/*Contador*/
function startCount() {
	counter.currentValue= counter.initialValue ++;
	newTry.innerHTML = counter.currentValue;
}

/*Funcion para pistas*/

function comprobate() {

if (tried.value == randomNumber) {
	result.innerHTML = 'Enhorabuena, has ACERTADO';
	saveBox.classList.remove('hidden')
} else if (tried.value > randomNumber) {
	result.innerHTML = 'Demasiado alto';
} else {
	result.innerHTML = 'Demasiado bajo';
}

}

/*Funcion Reset*/
function reset() {
	saveBox.classList.add('hidden');
	newRandom()

}
/*Funcion guardar historico*/

function fillHistoric() {
	historic.innerHTML += '<li>' + scores.value + '</li>'
	reset()
	}

saveButton.addEventListener('click', fillHistoric)
button.addEventListener('click', comprobate)
button.addEventListener('click', startCount);
