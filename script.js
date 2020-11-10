const body = document.querySelector('body');

function createElements() {
    let h1 = document.createElement('h1');
    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';
    body.appendChild(h1);
}

createElements();

function createColorPallet() {
    let colors = ["black", "red", "blue", "green"];

    //Cria a paleta de cores
    let colorPallet = document.createElement('div');
    colorPallet.id = 'color-palette';
    colorPallet.style.display = 'block'
    body.appendChild(colorPallet);

    //Cria cada elemento da paleta de cores
    for (let i = 0; i < colors.length; i += 1) {
        let block = document.createElement('div');
        block.className = 'color';
        block.style.height = '30px';
        block.style.width = '30px';
        block.style.display = 'inline-block';
        block.style.border = '1px solid black';
        block.style.backgroundColor = colors[i];

        //Adciona a classe selected a cor preta assim que a página é carregada
        if (colors[i] == 'black') {
            block.className = 'color selected';
        }

        //Adiciona eventListener a cada bloco para que ele receba ou perca a className selected quando uma cor for selecionada
        block.addEventListener('click', selectColor);

        colorPallet.appendChild(block);
    }
}

createColorPallet();

let quantPixels = 5;

function criaQuadro() {
    let addBorderSize = 2 * quantPixels;
    let pixelSize = 40;

    let quadro = document.createElement('div');
    quadro.id = 'pixel-board';
    let quadroWidth = quantPixels * pixelSize + addBorderSize + 'px';
    quadro.style.width = quadroWidth;
    quadro.style.maxWidth = quadroWidth;
    quadro.style.display = 'block';
    body.appendChild(quadro);

    let getPixelBoard = document.querySelector('#pixel-board');

    for (let i = 0; i < (quantPixels * quantPixels); i += 1) {
        let div = document.createElement('div');
        div.style.display = 'inline-block';
        div.className = 'pixel';
        div.style.backgroundColor = 'white';
        div.style.width = pixelSize + 'px';
        div.style.height = pixelSize + 'px';
        div.style.border = '1px solid black'


        div.addEventListener('click', function (event) {
            let getBgColor = document.querySelector('.selected').style.backgroundColor;
            event.target.style.backgroundColor = getBgColor;
        });

        getPixelBoard.appendChild(div);
    }

}
createInput();
createButtonClear();
criaQuadro();

function selectColor(event) {
    let colorPixels = document.querySelectorAll('.color');
    for (let i = 0; i < colorPixels.length; i += 1) {
        colorPixels[i].className = 'color';
    }
    event.target.className = 'color selected';
}

function createButtonClear() {
    let button = document.createElement('button');
    let getPallet = document.querySelector('#color-palette')
    button.id = 'clear-board';
    button.innerHTML = 'Limpar';
    button.style.display = 'block';
    button.style.marginBottom = '4px'

    button.addEventListener('click', function (event) {
        let getAllPixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < getAllPixels.length; i += 1) {
            getAllPixels[i].style.backgroundColor = 'white';
        }
    })

    body.appendChild(button);

}

//<input type="number" id="quantity" name="quantity" min="1" max="5"></input>

function createInput() {
    let input = document.createElement('input');
    input.id = 'board-size';
    input.setAttribute('type', 'number')
    input.setAttribute('min', 1)
    input.setAttribute('max', 50)
    body.appendChild(input);

    let button = document.createElement('button');
    button.id = 'generate-board';
    button.innerHTML = 'VQV';

    button.addEventListener('click', function () {
        let getInputValue = document.querySelector('#board-size').value;

        if (getInputValue == '') {
            alert('Board inválido!');
        } else {
            if (getInputValue > 50) {
                getInputValue = 50;
            }
            if (getInputValue < 5) {
                getInputValue = 5;
            }
            document.querySelector('#board-size').value = getInputValue;
            quantPixels = getInputValue;
            let getPixelBoard = document.querySelector('#pixel-board');
            body.removeChild(getPixelBoard);
            criaQuadro();
        }
    })

    body.appendChild(button);
}