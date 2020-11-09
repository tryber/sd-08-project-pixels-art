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
    for (let l = 0; l < tamanho; l += 1){
        let newRow = criarElemento(el, 'class', 'pixel');
        newLine.appendChild(newRow);
    }
    return newLine;
}

function createPixels(nameEl, tamanho) {
    let getDiv = document.querySelector('#pixel-board');
    for (let i = 0; i < tamanho; i += 1){
        let newPixels = pixelsLine(nameEl, 5);
        getDiv.appendChild(newPixels);
    }
}

function color(event) {
    let getPaleta = document.getElementsByClassName('color');
    let cor = event.target.style.backgroundColor;
    for(let i = 0; i < getPaleta.length; i += 1){
        if(getPaleta[i].style.backgroundColor === cor){
            getPaleta[i].classList.add('selected');
        }else{
            getPaleta[i].classList.remove('selected');
        }
    }
}

function colorSelected() {
    let getPaleta = document.getElementsByClassName('color');
    for (let key of getPaleta){
        key.addEventListener('click', color);
    }
}

const colorInit = () => {
    let getPaleta =  document.querySelector('.color');
    getPaleta.classList.add('selected');
}

const mainFunction = () => {
    const colors = ['black', 'blue', 'red', 'yellow'];
    createColors('div', colors);
    createPixels('div', 5);
    colorInit();
    colorSelected();
    colorSelected();
}

mainFunction();
