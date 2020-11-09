function criarElemento(elemento, name = '', value = '') {
    let el = document.createElement(elemento);
    if (name !== '' && value !== '') {
        el.setAttribute(name, value);
    }
    return el;
}

function createColors(nameEl, colors) {
    let getDiv = document.querySelector('#color-palette');
    for (let i = 0; i < colors.length; i += 1) {
        let newColor = criarElemento(nameEl, 'class', 'color');
        newColor.style.backgroundColor = colors[i];
        getDiv.appendChild(newColor);
    }
}

function pixelsLine(el, tamanho) {
    let newLine = criarElemento(el, 'class', 'line');
    for (let l = 0; l < tamanho; l += 1) {
        let newRow = criarElemento(el, 'class', 'pixel');
        newLine.appendChild(newRow);
    }
    return newLine;
}

function createPixels(nameEl, tamanho) {
    let getDiv = document.querySelector('#pixel-board');
    for (let i = 0; i < tamanho; i += 1) {
        let newPixels = pixelsLine(nameEl, 5);
        getDiv.appendChild(newPixels);
    }
}

function color(event) {
    let getPaleta = document.getElementsByClassName('color');
    let cor = event.target.style.backgroundColor;
    for (let i = 0; i < getPaleta.length; i += 1) {
        if (getPaleta[i].style.backgroundColor === cor) {
            getPaleta[i].classList.add('selected');
        } else {
            getPaleta[i].classList.remove('selected');
        }
    }
}

function colorSelected() {
    let getPaleta = document.getElementsByClassName('color');
    for (let key of getPaleta) {
        key.addEventListener('click', color);
    }
}

function getColor() {
    let getPaleta = document.querySelector('.color.selected');
    let getColor = getPaleta.style.backgroundColor;
    return getColor;
}

function paint() {
    let getPixel = document.querySelectorAll('.pixel');
    for (let key of getPixel) {
        key.addEventListener('click', function (event) {
            event.target.style.backgroundColor = getColor();
        })
    }
}

function createButton(name, nameAtribute, value) {
    let newButton = criarElemento('button', nameAtribute, value);
    newButton.innerText = name;
    newButton.type = 'button';
    return newButton;
}

function buttonClear() {
    let newBtn = createButton('Limpar', 'id', 'clear-board');
    let getContainer = document.querySelector('.btn-clear-container');
    getContainer.appendChild(newBtn);
}

function pixelColorDefault() {
    let getBtn = document.getElementById('clear-board');
    let getPixel = document.getElementsByClassName('pixel');
    getBtn.addEventListener('click', function() {
        for(let key of getPixel) {
            key.style.backgroundColor = 'white';
        }
    })
}

const colorInit = () => {
    let getPaleta = document.querySelector('.color');
    getPaleta.classList.add('selected');
}

function rgbRandon() {
    let r = parseInt(Math.random() * 255, 0);
    let g = parseInt(Math.random() * 255, 0);
    let b = parseInt(Math.random() * 255, 0);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

const arrayColors = () => {
    const contador = 3;
    let arrayColor = ['black'];
    for (let x = 0; x < contador; x += 1){
        let aux = rgbRandon();
        arrayColor.push(aux);
    }
    return arrayColor;
}

const mainFunction = () => {
    // const colors = ['black', 'green', 'gold', 'orange'];
    const colors = arrayColors();
    createColors('div', colors);
    createPixels('div', 5);
    colorInit();
    colorSelected();
    colorSelected();
    paint();
    buttonClear();
    pixelColorDefault();
}

mainFunction();
