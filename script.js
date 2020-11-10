function pintaPixel(event) {
  const corSelecionada = document.querySelector('.selected');
  event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const btn = document.getElementById('clear-board');
btn.addEventListener('click', clearBoard);

const cores = ['#000000'];

function selecionaCor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.className = 'color';
  event.target.className = 'selected color';
}

function geraPaletaDeCores() {
  const paletaDeCores = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const divCor = document.createElement('div');
    divCor.className = 'color';
    divCor.addEventListener('click', selecionaCor);
    paletaDeCores.append(divCor);
  }
}

geraPaletaDeCores();

function geraCores() {
  const cor = document.querySelectorAll('#color-palette .color');

  cor[0].style.backgroundColor = '#000000';
  cor[0].className = 'selected color';

  for (let index = 1; index < 4; index += 1) {
    cor[index].style.backgroundColor = '#' + (Math.floor(Math.random() * 16777215).toString(16));
    cores.push(cor[index].style.backgroundColor);
  }
}

function evitaCorRepetida() {
  for (let index = 0; index < cores.length; index += 1) {
    let pos = index + 1;

    for (pos; pos < cores.length; pos += 1) {
      if (cores[index] === cores[pos] || cores[pos] === '#FFFFFF' || cores[pos] === '') {
        geraCores();
      }
    }
  }
}

evitaCorRepetida();
geraCores();

function geraPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const newTr = document.createElement('tr');
    pixelBoard.append(newTr);

    for (let pos = 0; pos < 5; pos += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = '#FFFFFF';
      pixel.addEventListener('click', pintaPixel);
      pixelBoard.lastChild.append(pixel);
    }
  }
}

geraPixelBoard();
