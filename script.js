//  Criação da paleta de 4 cores

const colorList = ['black', 'Brown', 'gold', 'turquoise'];
const colorPalette = document.getElementById('color-palette');

for (let i = 0; i < colorList.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    if (colorList[i] == 'black') {
        div.className = 'color selected'
    }
    div.style.backgroundColor = colorList[i];
    colorPalette.appendChild(div);
}

//  Criação do quadro de pixel

const elementNum = 5;

for (let i = 0; i < elementNum; i += 1) {
    const pixelContainer = document.getElementById('pixel-board');
    for (let j = 0; j < elementNum; j += 1) {
        const div = document.createElement('div');
        div.className = 'pixel';
        div.style.backgroundColor = 'rgb(255, 255, 255)'
        pixelContainer.appendChild(div);
    }
}
