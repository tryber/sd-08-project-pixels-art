/* ---------------------------- REQUISITO 01 ---------------------------- */

function addTitle() {
    const header = document.getElementsByTagName('header')[0];
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';
    p.classList.add('subtitle');
    p.innerHTML = 'Projeto 03 - Desenvolvido por João Carlito'

    header.appendChild(h1);
    header.appendChild(p);
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

function addPixels(size) {
    for (let row = 0; row < size; row += 1) {
        const boxPixel = document.createElement('div');
        boxPixel.style.backgroundColor = 'white';
        sectionPixels.appendChild(boxPixel);

        for (let col = 0; col < size; col += 1) {
            const boxPixel = document.createElement('div');
            boxPixel.style.backgroundColor = 'white';
            boxPixel.classList.add('pixel');
            sectionPixels.appendChild(boxPixel);
        }
    }
}

addPixels(5);

/* ---------------------------- REQUISITO 06 ---------------------------- */

const blackColor = document.querySelector('#black');

function setBlackColor() {
    blackColor.classList.add('selected');
}

setBlackColor();



/* ---------------------------- REQUISITO 07 ---------------------------- */
/* ---------------------------- REQUISITO 08 ---------------------------- */
/* ---------------------------- REQUISITO 09 ---------------------------- */
/* ---------------------------- REQUISITO 10 ---------------------------- */
/* ---------------------------- REQUISITO 11 ---------------------------- */
/* ---------------------------- REQUISITO 12 ---------------------------- */