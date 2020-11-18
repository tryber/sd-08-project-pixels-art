let pixel = document.getElementsByClassName('pixel');
let color = document.getElementsByClassName('color');
let pixelBoard = document.getElementById('color-palette');

//Cria Painel Dinâmico
function createBoard(){
let board = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index ++) {
    let row = document.createElement('div');
    row.className = 'pixel row';
    board.appendChild(row);
    for (let index2 = 0; index2 < 5; index2 ++) {
      let column = document.createElement('div');
      column.className = 'pixel column';
      row.appendChild(column);
    }
  }
}
createBoard();

//Seleciona Somente a Cor Clicada
function selectColor(chosen){
    for(let index = 0; index < pixelBoard.length; index++){
      pixelBoard[index].className = 'color';
    }
      chosen.target.className = 'color selected';
}
pixelBoard.addEventListener('click', selectColor);

//
