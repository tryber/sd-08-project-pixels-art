// Paleta de cores - Adicionando as cores de forma dinâmica para evitar encadeamento de classes
let paleta = document.querySelectorAll('.color');
paleta[0].style.backgroundColor = 'black';
paleta[1].style.backgroundColor = '#f7be4a';
paleta[2].style.backgroundColor = '#ab8333';
paleta[3].style.backgroundColor = '#6b5220';

// criando quadro de pixels

let pixelBoard = document.getElementById('pixel-board');
function generatePixel(){
    for( let j = 0; j < 25; j += 1) {
        let colorizedPixel = document.createElement('div');
        colorizedPixel.className = 'pixel';
        pixelBoard.appendChild(colorizedPixel);
    }
}


// Adicionando eventos para selecionar cor da paleta






generatePixel();
