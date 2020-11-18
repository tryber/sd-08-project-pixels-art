let cores = document.querySelectorAll('.color');
let selecionarCor = document.getElementById('color-palette');
let cor = document.getElementById('black').style.backgroundColor
let crimson = document.getElementById('crimson');
let selected = document.getElementsByClassName('selected')

// // crimson.addEventListener('click', function () {
// // 	selected[0].style.backgroundColor = "crimson"
// })

// requisito 7
selecionarCor.addEventListener('click', function (evento) {
	for (let index = 0; index < cores.length; index += 1)
		if (cores[index].classList.contains('color')) {
			cores[index].classList.remove('selected');
		} if (evento.target.classList.contains('color'))
		evento.target.classList.add('selected');
	console.log(evento.target);
})

let pixel = document.getElementById('pixel-board');
//Requisito 8

;
pixel.addEventListener('click', function (event) {
	let roubaCor = document.querySelector('.selected')
	let theCSSprop = window.getComputedStyle(roubaCor, null).getPropertyValue("background");
	if (event.target.classList.contains('pixel')) {
		event.target.style.background = theCSSprop
	}
})
//Requisito 9
let button = document.getElementById('clear-board');
let quadroPixel = document.getElementsByClassName('pixel')
button.addEventListener('click', function (quadroPixel) {
	for (let i = 0; i < quadroPixel.length; i += 1) {
		quadroPixel[i].style.backgroundColor = 'white';
	}

})

