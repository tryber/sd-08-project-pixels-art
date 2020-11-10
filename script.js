function criaDivs() {
    let paleta = document.getElementById('color-palette');
    for (let index = 0; index < 4; index+=1) {
        let divs = document.createElement('div');
        divs.className = 'color';
        paleta.appendChild(divs);
    }
}
criaDivs();

function pintaPaleta() {
    let cores = document.querySelectorAll('.color');
    cores[0].style.backgroundColor = 'black';
    cores[1].style.backgroundColor = 'red';
    cores[2].style.backgroundColor = 'blue';
    cores[3].style.backgroundColor = 'green';
    cores[0].classList.add('selected');
}
pintaPaleta();

function criaQuadro() {
    let quadro = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index+=1) {
        let pixels = document.createElement('div');
        pixels.className = 'pixel';
        quadro.appendChild(pixels);
    }
}
criaQuadro();