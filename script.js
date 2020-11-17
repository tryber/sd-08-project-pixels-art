let cores = document.querySelectorAll('.color');


let selecionarCor = document.getElementById('color-palette');
selecionarCor.addEventListener('click', function (evento) {
	if (evento.target.classList.contains('color')) {
		evento.target.classList.add('selected');

	}else if (evento.target.classList.contains('selected')) {
		evento.target.classList.remove('selected')
	}
		
	
	console.log(evento.target);

})

// let antigoSelected = document.querySelector('.selected')