// Requisito 06 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
window.onload = function () {
  document.querySelector('.color').className = 'color selected';
}

// Requisito 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
function hexaRandom (num){
  let random = Math.floor(Math.random() * num);
  return random;
}
function randomColor(string) {
  let hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#' + string;
  for(let index = 0; index < 5; index += 1) {
    let randomNum = hexaRandom(16);
    cor += hexadecimal[randomNum];
    if(cor === "#FFFFFF"){
      index = 0;
    }
  }
  return cor;
}

//Requisito 02 - A página deve possuir uma paleta de quatro cores distintas.
function initialColors () {
  let colors = document.querySelectorAll('.color');
  // Requisito 03 - A cor preta deve ser a primeira na paleta de cores.
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = randomColor("2");
  colors[2].style.backgroundColor = randomColor("8");
  colors[3].style.backgroundColor = randomColor("7");
}
initialColors();

// Requisito 04 - A página deve possuir um quadro de pixels, com 25 pixels.
function pixelBoard (pixels) {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < pixels; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
pixelBoard(26);

// Requisito 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.
function dinamicPixelBoard() {
  let btnGenerateBoard = document.querySelector('#generate-board');
  let board = document.querySelector('#pixel-board');
  btnGenerateBoard.addEventListener('click', function() {
    let text = document.querySelector('#board-size');
    if(text.value > text.getAttribute('min')) {
      let boardFilhos = document.getElementById('pixel-board').children.length;
      let sizeBoard = text.value;
      if(boardFilhos < sizeBoard * sizeBoard) {
        let newboard = sizeBoard * sizeBoard - boardFilhos + 1;
        board.style.width = sizeBoard * 42 + 'px';
        board.style.height = sizeBoard * 42 + 'px';
        pixelBoard(newboard);
      } else {
        let boardPai = document.getElementById('pixel-board');
        let diferenca = boardFilhos - (sizeBoard * sizeBoard);
        for(let i = 0; i < diferenca; i += 1) {
          boardPai.removeChild(boardPai.lastElementChild);
        }
        board.style.width = sizeBoard * 42 + 'px';
        board.style.height = sizeBoard * 42 + 'px';
      }
    }
  });
}
dinamicPixelBoard();

// Requisito 07 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
function selectColor () {
  let filhos = document.getElementById('color-palette').children;
  let palette = document.querySelector('#color-palette');
  
  palette.addEventListener('click', function(event) {
    for(let index = 0; index < filhos.length; index += 1) {
      if(filhos[index] === event.target) {
        event.target.className = 'color selected';
      } else {
        filhos[index].className = 'color';
      }
    }
  });
}
selectColor();

// Requisito 08 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
function paint () {
  let pixelBoad = document.querySelectorAll('.pixel').forEach(function(item) {
    item.addEventListener('click', function(event) {
      let color = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = color;
    });
  });
}
paint();

// Requisito 09 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function clear() {
  let btnClear = document.querySelector('#clear-board');
    btnClear.addEventListener('click', function() {
      document.querySelectorAll('.pixel').forEach(function(item) {
      item.style.backgroundColor = 'white';
    });
  });
}
clear();
