//Função cria o quadro a ser pintado:
function createPixelBoard() {
  for (let count = 1; count <= 25; count += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    document.getElementById('pixel-board').appendChild(divPixel);
  }
}
createPixelBoard()

//Função criar botões:
function createBtn(nome, id) {
  const btn = document.createElement('button');
  btn.innerHTML = nome;
  btn.id = id;
  document.getElementById('button-container').appendChild(btn);
}

//Criar botão de Limpar / add evento no botão: 
createBtn('limpar', 'clear-board');
document.getElementById('clear-board').addEventListener('click', fClear);

// Função limpar o quadro de pintura:
function fClear () {
  let square = document.getElementsByClassName('pixel');
  let squareColor = 'white';
  for (let count = 0; count < square.length; count += 1) {
    square[count].style.backgroundColor = squareColor;
 }
}
//Evento selecionar cor:
let squareBlack = document.getElementsByClassName('color')[0];
let squareRed = document.getElementsByClassName('color')[1];
let squareBlue = document.getElementsByClassName('color')[2];
let squareGreen = document.getElementsByClassName('color')[3];
let colorSelected = "black";

squareBlack.addEventListener('click', fBlack);
squareRed.addEventListener('click', fRed);
squareBlue.addEventListener('click', fBlue);
squareGreen.addEventListener('click', fGreen);

function fBlack() {
  squareBlack.className = 'color black selected';
  squareRed.className = 'color red';
  squareBlue.className = 'color blue';
  squareGreen.className = 'color green';
  colorSelected = "black";
}

function fRed() {
  squareBlack.className = 'color black';
  squareRed.className = 'color red selected';
  squareBlue.className = 'color blue';
  squareGreen.className = 'color green';
  colorSelected = "red";
}

function fBlue() {
  squareBlack.className = 'color black';
  squareRed.className = 'color red';
  squareBlue.className = 'color blue selected';
  squareGreen.className = 'color green';
  colorSelected = "blue";
}
function fGreen() {
  squareBlack.className = 'color black';
  squareRed.className = 'color red';
  squareBlue.className = 'color blue';
  squareGreen.className = 'color green selected';
  colorSelected = "green";
}

//console.log(colorSelected);




createBtn('VQV', 'generate-board');
