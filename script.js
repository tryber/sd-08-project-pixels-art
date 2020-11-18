/* ---------------------------- REQUISITO 01 ---------------------------- */

function addTitle() {
    const header = document.getElementsByTagName('header')[0];
    const h1 = document.createElement('h1');

    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';

    header.appendChild(h1);
}

addTitle();

/* ---------------------------- REQUISITO 02 e 03 ---------------------------- */

const colorsPallete = ['black', 'orange', 'gray', 'blue'];

const sectionPallete = document.querySelector('.main-section');
const divContainer = document.createElement('div');
divContainer.id = 'color-palette';

function addPalleteColors() {
    for (let i = 0; i < colorsPallete.length; i += 1) {
        const divPixelsColors = document.createElement('div');
        divPixelsColors.classList.add('color');
        divPixelsColors.style.backgroundColor = colorsPallete[i];
        divPixelsColors.id = colorsPallete[i];
        divContainer.appendChild(divPixelsColors);
    }
}

sectionPallete.appendChild(divContainer);

addPalleteColors();

/* ---------------------------- REQUISITO 04 e 05 ---------------------------- */

const sectionPixels = document.querySelector('#pixel-board');

/* ---------------------------- REQUISITO 08 ---------------------------- */

function paintPixel(event) {
    const selected = divContainer.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
}

function createPixel() {
    const boxPixel = document.createElement('div');
    boxPixel.style.backgroundColor = 'white';
    boxPixel.classList.add('pixel');
    boxPixel.addEventListener('click', paintPixel);
    return boxPixel;
}

function createRow(size) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    for (let col = 0; col < size; col += 1) {
        newRow.appendChild(createPixel());
    }
    return newRow;
}

function createBoard(size) {
    for (let row = 0; row < size; row += 1) {
        sectionPixels.appendChild(createRow(size));
    }
}

createBoard(5);

/* ---------------------------- REQUISITO 06 ---------------------------- */

const selectedColor = document.querySelector('#black');

function setBlackColor() {
    selectedColor.classList.add('selected');
}

setBlackColor();

/* ---------------------------- REQUISITO 07 ---------------------------- */

const colorPallete = document.querySelector('#color-palette');

colorPallete.addEventListener('click', chooseSelectedColor);

function chooseSelectedColor(event) {
    const select = document.querySelector('.selected');
    select.classList.remove('selected');
    event.target.classList.add('selected');
}


/* ---------------------------- REQUISITO 09 ---------------------------- */

const button = document.createElement('button');
button.id = 'clear-board';
button.title = 'Limpar Campos';
button.innerHTML = 'Limpar';

const secondSection = document.querySelector('#pixel-board');
document.querySelector('body').insertBefore(button, secondSection);

button.addEventListener('click', clearPixels);

function clearPixels() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((element) => {
        element.style.backgroundColor = "white";
    })
}

/* ---------------------------- REQUISITO 10 ---------------------------- */

function sizeBoard() {
    const inputPixel = document.querySelector('input').value;
    if (inputPixel === '') {
        alert('Adicione um valor');
    }
    const number = parseInt(inputPixel);
    return number;
}

function resizePixels() {
    const buttonBoard = document.querySelector('#generate-board');
    buttonBoard.addEventListener('click', function () {

        sectionPixels.innerHTML = '';
        const size = sizeBoard();
        if (size < 1) {
            alert('Board inválido!');
        } else if (size < 5) {
            createBoard(5);
        } else if (size > 50) {
            createBoard(50);
        } else {
            createBoard(size);
        }
    })
}

resizePixels();