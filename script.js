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



function printPixel () {
    let corSelecionada = document.querySelector('selected');
    let pixelPrint = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixelPrint.length; i++) {

        pixelPrint[i].style.backgroundColor = corSelecionada.style.backgroundColor;
        
    }

    

}
let quadroCores = document.getElementById('pixel-board')

