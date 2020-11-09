// Paleta de cores - Adicionando as cores de forma dinâmica para evitar encadeamento de classes
function addPalletCOlor() {
    let paleta = document.querySelectorAll('.color');
    paleta[0].style.backgroundColor = 'black';
    paleta[1].style.backgroundColor = '#f7be4a';
    paleta[2].style.backgroundColor = '#ab8333';
    paleta[3].style.backgroundColor = '#6b5220';
}
// Adicionando eventos para selecionar a cor da paleta

let p = document.getElementsByClassName('color')
for (let i = 0; i<=3; i += 1) {
    p[i].addEventListener('click',function() {
    p[i].classList.add('selected');
    indexClicked = i;
    for(j = 0; j<=3; j += 1) {
        if(j != indexClicked) {
            p[j].className = 'color';
        }
    } 
    let color = p[indexClicked].style.backgroundColor;
    });
}



// criando quadro de pixels

let pixelBoard = document.getElementById('pixel-board');
function generatePixel() {
    for( let j = 0; j < 25; j += 1) {
        let colorizedPixel = document.createElement('div');
        colorizedPixel.className = 'pixel';
        pixelBoard.appendChild(colorizedPixel);
    }
}







addPalletCOlor();
generatePixel();
