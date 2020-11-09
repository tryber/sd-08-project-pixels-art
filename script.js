let pixel_board = document.querySelector('#pixel-board');
let generate_board = document.querySelector('#generate-board');

let clear_board = document.querySelector('#clear-board');
clear_board.addEventListener('click', clearBoard);

let black = document.querySelector(".black");
black.className += ' selected';

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");

for (let index = 1; index <= 5; index++) {
    for (let index = 1; index <= 5; index++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel white';

        pixel_board.appendChild(pixel);
    }
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);
yellow.addEventListener('click', selectColor);

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
    let color = document.querySelector('.selected').className.split(' ')[1];
    event.target.className = event.target.className.replace(event.target.className.split(' ')[1], color);
}

function generateBoard() {
    if (board_size.value == null || board_size.value == '') { alert('Board inválido!'); }
    else {
        pixelArray = document.querySelectorAll('.pixel');
        let boardSize = parseInt((board_size.value) * 40) + 2;
        boardSize += 'px'
        pixel_board.style.width = boardSize;
        pixel_board.style.height = boardSize;

        for (let pixel of pixelArray) { pixel_board.removeChild(pixel); }

        for (let index = 1; index <= board_size.value; index++) {
            for (let index = 1; index <= board_size.value; index++) {
                let pixel = document.createElement('div');
                pixel.className = 'pixel white';

                pixel_board.appendChild(pixel);
            }
        }
        pixelArray = document.querySelectorAll('.pixel');
        for (let pixel of pixelArray) { pixel.addEventListener('click', paintPixel) }
    }
}

function clearBoard() {
    for (let pixel of pixelArray) {
        pixel.className = pixel.className.replace(pixel.className.split(' ')[1], 'white');
    }
}