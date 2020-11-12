window.onload = function () {
    const initialColor = document.getElementsByTagName('button')[0]
    initialColor.className = 'color selected';
};

//  Criação da paleta de 4 cores
const colorList = ['black', 'Brown', 'gold', 'turquoise'];
const colorPalette = document.getElementById('color-palette');

for (let i = 0; i < colorList.length; i += 1) {
    const div = document.createElement('button');
    div.className = 'color';
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
        div.style.backgroundColor = 'rgb(255, 255, 255)';
        pixelContainer.appendChild(div);
    }
}


// Requisito

function handleSelected(event) {
    let setColorSelected = document.querySelectorAll('.selected');
    for (let index = 0; index < setColorSelected.length; index += 1) {
        setColorSelected[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
}
 
function setEventColor() {
    const buttonClass = document.querySelectorAll('.color');
    for (let index = 0; index < buttonClass.length; index += 1) {
        const currentButtonClas = buttonClass[index];
        currentButtonClas.addEventListener('click', handleSelected)
    }
}
setEventColor();

function paintPixel(event) {
    const insertColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.background = insertColor;
}

function includesEvent() {
    const pixelClass = document.querySelectorAll('.pixel');
    for (let numberOfPixels = 0; numberOfPixels < pixelClass.length; numberOfPixels += 1) {
        pixelClass[numberOfPixels].addEventListener('click', paintPixel);
    }
}
includesEvent();
