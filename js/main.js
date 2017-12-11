'use strict';
// var randomNumber = (Math.round(Math.random()*10))+1;
var tried = document.querySelector('.number');
var tryButton = document.querySelector('.try-button');
var result = document.querySelector('.result');
var saveBox = document.querySelector('.save-box');
var newTry = document.querySelector('.counter');
var counter = 0;
var gamer = document.querySelector('.name');
var saveButton = document.querySelector('.save-button');
var historic = document.querySelector('.scores');
var simpson = document.querySelector('.img')

/*Funcion randomNumber*/
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var randomNumber = getRandom(1, 10);
//console.log(randomNumber);

/*Contador*/
function startCount() {
	counter += 1;
	newTry.innerHTML = counter;
}

/*Funcion para pistas*/

function comprobate() {

if (tried.value == randomNumber) {
	document.getElementById('number').value = '';
	result.innerHTML = 'Enhorabuena, has ACERTADO' + '<img class="img-ok"src="../images/homer_simpsonwoohooo.gif">';
	saveBox.classList.remove('hidden');
	simpson.classList.add('hidden');
} else if (tried.value > randomNumber) {
	document.getElementById('number').value = '';
	result.innerHTML = 'Demasiado alto' + '<img class="img-ok"src="../images/doh.jpg">';
	simpson.classList.add('hidden');
} else {
	document.getElementById('number').value = '';
	result.innerHTML = 'Demasiado bajo' + '<img class="img-ok"src="../images/doh.jpg">';
	simpson.classList.add('hidden');
}
}
/*Funcion Limpiar*/
function clear() {
document.getElementById('feedback').innerHTML = '<p>Escribe un número y dale a <em>Prueba</em></p>';
document.getElementById('number').value = '';
document.getElementById('name').value = '';
saveBox.classList.add('hidden');
simpson.classList.remove('hidden');
}
/*Funcion Reset*/
function reset() {
	counter = 0 - 1;
	  startCount();
	  clear();
	  randomNumber = getRandom(1, 10);
}
/*Funcion guardar historico*/

function fillHistoric() {
	historic.innerHTML += '<li>' + gamer.value + ': ' + counter + ' intentos' + '</li>';
	}



tryButton.addEventListener('click', comprobate);
tryButton.addEventListener('click', startCount);
saveButton.addEventListener('click', fillHistoric);
saveButton.addEventListener('click', reset);
