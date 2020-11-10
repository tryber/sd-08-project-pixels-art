let colors = ['red', 'blue', 'orange', 'green', 'yellow', 'pink', 'purple', 'grey', 'navy', 'brown'];
let colorPalette = document.querySelectorAll(".color");
colorPalette[0].style.backgroundColor = 'black';
colorPalette[0].className += ' selected';

for(let color of colorPalette) { color.addEventListener('click', selectColor); } // Gera as funções de click na paleta

// Gerador de cores aleatórias
for (let index = 1; index < colorPalette.length; index++) {
    let randomColor = parseInt(Math.random() * 9);
    for (let color of colorPalette) {
        if (color.style.backgroundColor == colors[randomColor]) { randomColor = parseInt(Math.random() * 9); }
    }
    colorPalette[index].style.backgroundColor = colors[randomColor];
}

let pixel_board = document.querySelector('#pixel-board');
let generate_board = document.querySelector('#generate-board');

let clear_board = document.querySelector('#clear-board');
clear_board.addEventListener('click', clearBoard);

for (let index = 1; index <= 5; index++) {
    for (let index = 1; index <= 5; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel white';

        pixel_board.appendChild(pixel);
    }
}

let pixelArray = document.querySelectorAll('.pixel');

for (pixel of pixelArray) {
    pixel.addEventListener('click', paintPixel);
}

generate_board.addEventListener('click', generateBoard);

let board_size = document.querySelector('#board-size');

function selectColor(event) {
    let currentSelected = document.querySelector('.selected');
    currentSelected.className = currentSelected.className.replace(" selected", "");

    event.target.className += ' selected';
}

function paintPixel(event) {
    let color = document.querySelector('.selected');
    event.target.style.backgroundColor = color.style.backgroundColor;
}

function generateBoard() {
    if (board_size.value == null || board_size.value == '') { alert('Board inválido!'); }
    else {
        if (board_size.value < 5) { board_size.value = 5; }
        else if (board_size.value > 50) { board_size.value = 50; }

        pixelArray = document.querySelectorAll('.pixel');
        let boardSize = parseInt((board_size.value) * 40) + 2;
        boardSize += 'px'
        pixel_board.style.width = boardSize;
        pixel_board.style.height = boardSize;

        for (let pixel of pixelArray) { pixel_board.removeChild(pixel); }

        for (let index = 1; index <= board_size.value; index++) {
            for (let index = 1; index <= board_size.value; index++) {
                let pixel = document.createElement('div');
                pixel.className = 'pixel';

                pixel_board.appendChild(pixel);
            }
        }
        pixelArray = document.querySelectorAll('.pixel');
        for (let pixel of pixelArray) { pixel.addEventListener('click', paintPixel) }
    }
}

function clearBoard() {
    for (let pixel of pixelArray) {
        pixel.style.backgroundColor = '#fff';
    }
}