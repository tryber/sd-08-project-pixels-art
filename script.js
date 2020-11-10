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
        let newPixels = pixelsLine(nameEl, tamanho);
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
    let getContainer = document.querySelector('.custon-container');
    getContainer.appendChild(newBtn);
}

function colorWhite() {
    let getPixel = document.getElementsByClassName('pixel');
    for (let key of getPixel) {
        key.style.backgroundColor = 'white';
    }
}

function pixelColorDefault() {
    let getBtn = document.getElementById('clear-board');
    getBtn.addEventListener('click', colorWhite);
}

function createInput(tipo, name, value) {
    let newInput = criarElemento('input', name, value);
    newInput.type = tipo;
    newInput.value = '';
    newInput.min = 1;
    newInput.max = 50;
    return newInput;
}

function createBoard() {
    let newInput = createInput('number', 'id', 'board-size');
    let newBtn = createButton('VQV', 'id', 'generate-board');

    let getCuston = document.querySelector('.custon-container');

    getCuston.appendChild(newInput);
    getCuston.appendChild(newBtn);
}

function removeChild() {
    let getPixelBoard = document.getElementById('pixel-board');
    let getPixeLine = document.querySelectorAll('.line');

    for (let key of getPixeLine) {
        getPixelBoard.removeChild(key)
    }
}

function generateBoard() {
    createBoard();
    let getBtn = document.querySelector('#generate-board');

    getBtn.addEventListener('click', function () {
        let getInput = document.querySelector('#board-size');
        if (getInput.value === ''){
            alert('Board inválido!');
        }

        if (getInput.value >=5 && getInput.value <= 50) {
            removeChild();
            createPixels('div', getInput.value);
        }

        if (getInput.value > 0 && getInput.value < 5 ){
            removeChild();
            createPixels('div', 5);
        }

        if (getInput.value > 50){
            removeChild();
            createPixels('div', 50);
        }
        getInput.value = '';
        colorWhite()
        paint();
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

const newColors = () => {
    let arrayColor = [];
    arrayColor.push('rgb(0, 0, 0)');
    let cont = 4;

    do {
        let aux = rgbRandon();
        arrayColor.push(aux);
        arrayColor = arrayColor.filter(function (el, index, arr) {
            if (arr.indexOf(el) === index && el !== 'rgb(255, 255, 255)') {
                return el;
            }
        })

    } while (arrayColor.length < cont);

    return arrayColor;
}

const mainFunction = () => {
    // const colors = ['black', 'green', 'gold', 'orange'];
    const colors = newColors();
    createColors('div', colors);
    createPixels('div', 5);
    colorInit();
    colorSelected();
    colorSelected();
    paint();
    buttonClear();
    pixelColorDefault();
    generateBoard();
}

mainFunction();
