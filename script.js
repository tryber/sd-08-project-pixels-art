function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');


}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);

function pintaPixels (event) {
    let selectedColor = document.querySelector('.color.selected').style.backgroundColor = 'black';
     
    event.target.style.backgroundColor = selectedColor;
}

let pixels = document.getElementById('pixel-board');
pixels.addEventListener('click', pintaPixels);

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clear);

function clear () {
    let board = document.getElementsByClassName('pixel');

    for (let i = 0; i < board.length; i++) {
        board[i].style.backgroundColor = 'white';
    }
}