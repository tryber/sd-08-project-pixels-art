

function selector (event) {
    let seleciona = document.querySelector('.color.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');


}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);








let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clear);

function clear () {
    let board = document.getElementsByClassName('pixel');

    for (let i = 0; i < board.length; i++) {
        board[i].style.backgroundColor = 'white';
    }
}