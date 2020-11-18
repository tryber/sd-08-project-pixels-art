let cores = document.querySelectorAll('.color');
let selecionarCor = document.getElementById('color-palette');
let cor = document.getElementById('black').style.backgroundColor

// requisito 7
selecionarCor.addEventListener('click', function (evento) {
	if (evento.target.classList.contains('color')) {
		evento.target.classList.add('selected');
	}
	console.log(evento.target);
})

let pixel = document.getElementById('pixel-board');

//Requisito 8
pixel.addEventListener('click', function (event) {
	if (event.target.classList.contains('pixel')) {
		event.target.classList.add('selected')
	}
})
//Requisito 9
let button = document.getElementById('clear-board');
let quadroPixel = document.getElementsByClassName('pixel')
button.addEventListener('click', function () {
	for (let i = 0; i < quadroPixel.length; i += 1) {
		quadroPixel[i].style.backgroundColor = "white"
	}

})