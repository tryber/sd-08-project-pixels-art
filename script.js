let pixel = document.getElementsByClassName('pixel');
let color = document.getElementsByClassName('color');
let palette = document.getElementById('color-palette');
let selected = document.querySelector('.selected').style.backgroundColor
let blue = document.getElementById('blue').style.backgroundColor = '#6ABECD';
let green = document.getElementById('green').style.backgroundColor = '#88D78C';
let darkBlue = document.getElementById('darkBlue').style.backgroundColor = '#265473';
let black = document.getElementById('black').style.backgroundColor = 'black';
//Cria Painel Dinâmico
function createBoard(){
let board = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index ++) {
    let row = document.createElement('div');
    row.className = 'pixel row';
    board.appendChild(row);
  }
}
createBoard();

//Seleciona Somente a Cor Clicada
function selectColor(chosen){
  for(let index = 0; index < color.length; index++){
    color[index].className = 'color';
  }
    chosen.target.className = 'color selected';
}
palette.addEventListener('click', selectColor);

let pixelBoard = document.getElementById('pixel-board');

//Preenche com a Cor Selecionada
function paint(clicked){
  let selected = document.querySelector('.selected').style.backgroundColor;
  clicked.target.style.backgroundColor = selected;
  console.log(selected);
}
pixelBoard.addEventListener('click', paint);