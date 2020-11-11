window.onload = iniciaPreto;

function iniciaPreto() {
    let preto = document.getElementsByClassName('color')[0];
    preto.classList.add('selected');
}



function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');
}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);

let botao = document.getElementById('clear-board');
botao.addEventListener('click', apagaPixels)

function apagaPixels() {
    let pixels = document.getElementsByClassName('pixel');
    pixels.style.backgroundColor = 'white';
}