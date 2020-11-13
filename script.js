function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');


}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);


function clearBoard () {
    let board = document.querySelectorAll('.pixel');
    
    for (let i = 0; i < board.length; i++) {
        board[i].style.backgroundColor = 'white';
    }        

    
}


let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard)