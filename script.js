// Requisito 06 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
window.onload = function () {
  document.querySelector('.color').className = 'color selected';
}

// Requisito 10.
function hexaRandom (num){
  let random = Math.floor(Math.random() * num);
  return random;
}
function randomColor() {
  let hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  for(let index = 0; index < 6; index += 1) {
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
  colors[1].style.backgroundColor = randomColor();
  colors[2].style.backgroundColor = randomColor();
  colors[3].style.backgroundColor = randomColor();
}
initialColors();


// Requisito 04 - A página deve possuir um quadro de pixels, com 25 pixels.
function pixelBoard () {
  let divBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 26; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divBoard.appendChild(divPixel);
  }
}
pixelBoard();

// Requisito 07 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
function selectColor () {
  let filhos = document.getElementById('color-palette').children;
  // let element1 = document.querySelectorAll('.color')[0];
  // let element2 = document.querySelectorAll('.color')[1];
  // let element3 = document.querySelectorAll('.color')[2];
  // let element4 = document.querySelectorAll('.color')[3];
  let palette = document.querySelector('#color-palette');
  
  palette.addEventListener('click', function(event) {
    for(let index = 0; index < filhos.length; index += 1) {
      if(filhos[index] === event.target) {
        event.target.className = 'color selected';
      } else {
        filhos[index].className = 'color';
      }
    }
    // if (event.target.style.backgroundColor === 'black' && event.target.className === 'color') {
    //   event.target.className = 'color selected';
    //   element2.className = 'color';
    //   element3.className = 'color';
    //   element4.className = 'color';
    // } else if (event.target.style.backgroundColor === 'blue' && event.target.className === 'color') {
    //   event.target.className = 'color selected';
    //   element1.className = 'color';
    //   element3.className = 'color';
    //   element4.className = 'color';
    // } else if (event.target.style.backgroundColor === 'yellow' && event.target.className === 'color') {
    //   event.target.className = 'color selected';
    //   element1.className = 'color';
    //   element2.className = 'color';
    //   element4.className = 'color';
    // } else if (event.target.style.backgroundColor === 'green' && event.target.className === 'color') {
    //   event.target.className = 'color selected';
    //   element1.className = 'color';
    //   element2.className = 'color';
    //   element3.className = 'color';
    // }
  });

  // let colorselection = document.querySelectorAll('.color').forEach (function (item) {
  //   item.addEventListener('click', function (event) {
  //     event.target.className = 'color selected';
  //     console.log(item.className);
  // });
  // });
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