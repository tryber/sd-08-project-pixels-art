function createPixelBoard() {
  for (let count = 1; count <= 25; count += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    document.getElementById('pixel-board').appendChild(divPixel);
  }
}
createPixelBoard()

function createBtn(nome, id) {
  const btn = document.createElement('button');
  btn.innerHTML = nome;
  btn.id = id;
  document.getElementById('button-container').appendChild(btn);
}

createBtn('limpar', 'clear-board');
document.getElementById('clear-board').addEventListener('click', fClear);

function fClear () {
  let square = document.getElementsByClassName('pixel');
  let squareColor = 'white';
  for (let count = 0; count < square.length; count += 1) {
    square[count].style.backgroundColor = squareColor;
 }
}

createBtn('VQV', 'generate-board');





console.log(document.querySelectorAll('.color')[0]);


console.log(document.querySelectorAll('.pixel')[5]);