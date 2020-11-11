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
//Selecionar cor Paleta:
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

//-Selecionar item no quadro pixel:
//add itens ao array:
let arraySquare = document.getElementsByClassName('pixel');
//console.log(arraySquare);

//add função e id a todos itens do array:
for (count = 0; count < arraySquare.length; count += 1) {
  let atualSquare = arraySquare[count];
  atualSquare.id = count;
  atualSquare.addEventListener('click', fAtualSquare);
}

  function fAtualSquare() {
    let idSquare = this.id;
    let square = document.getElementById(idSquare);
    console.log(idSquare);
    if (colorSelected === 'black') {
      square.style.backgroundColor = 'black';
    } else if (colorSelected === 'red') {
      square.style.backgroundColor = 'red';
    } else if (colorSelected === 'blue') {
      square.style.backgroundColor = 'blue';
    } else if (colorSelected === 'green') {
    square.style.backgroundColor = 'green';
    }
  }







createBtn('VQV', 'generate-board');
