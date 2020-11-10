// Requisito 06 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels:
window.onload = function () {
  document.getElementsByClassName('color')[0].className = 'color selected';
  
}

function randomNumber (number){
  let randomized = Math.floor(Math.random() * number);
  return randomized;
}
function randomColor() {
  let colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let colorHash = '#';
  for(let i = 0; i < 6; index += 1) {
    let randomic = randomNumber(hexadecimal.length);
    colorHash += colorHex[randomic];
    if(colorHash === "#FFFFFF"){
      i = 0;
    }
  }
  return colorHash;
}

function selecionaCor() {
    let blkSqr = document.getElementById('color-palette')
    .firstElementChild;

    ('click', function(selecionado){
        let blackColor = document.getElementById('color-palette')
    .firstElementChild.style.backgroundColor;

    })
}

function paletaCores() {
  let coresFundo = ['black', 'red', 'blue', 'green'];
  const palette = document.getElementById('color-palette');

  for (let i = 0; i < coresFundo.length; i += 1) {
    let quadradosCores = document.createElement('li');
    quadradosCores.className = 'color';
    quadradosCores.style.backgroundColor = coresFundo[i];
    palette.appendChild(quadradosCores);
  }
}
paletaCores();

function quadroPixels() {
  // let tamanhoDefinicao = prompt('quantos quadrados você quer?');
  // let tamanhoDefinido = Number(tamanhoDefinicao);
  const linhaQuadrados = 25;
  const colunaQuadrados = 5;
  const squareContainer = document.getElementById('pixel-board');

  for (let i = 0; i < linhaQuadrados; i += 1) {
    let linhaSquares = document.createElement('div');
    linhaSquares.className = 'pixel';
    squareContainer.appendChild(linhaSquares);

    // for (let i = 0; i < colunaQuadrados; i += 1) {
    //   let colunaSquares = document.createElement('div');
    //   colunaSquares.className = 'pixel';
    //   squareContainer.appendChild(colunaSquares);
    // }
   }
}
quadroPixels();

function botaoLimpar() {
  let buttonContainter = document.getElementById('button-container');
  let buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonContainter.appendChild(buttonClear);
}
botaoLimpar();

function limpeza() {
  const btnClear = document.getElementById('clear-board');
  btnClear.addEventListener('click', function () {
    let pixelNumbers = document.getElementsByClassName('pixel').length;
    for (let i = 0; i < pixelNumbers; i += 1) {
      document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
    }
  });
}
limpeza();
