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

const buttonClear = document.getElementById('clear-board');

function pixelClear () {
    const pixels = document.getElementsByClassName('pixel');
    
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    }

      
}

buttonClear.addEventListener('click', pixelClear);

