const cores = ['#000000'];

function geraPaletaDeCores() {
  const paletaDeCores = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const divCor = document.createElement('div');
    divCor.className = 'color';
    paletaDeCores.append(divCor);
  }

  geraCores();
}

geraPaletaDeCores();

function evitaCorRepetida() {
    for (let index = 0; index < cores.length; index += 1) {
      let pos = index + 1;
  
      for (pos; pos < cores.length; pos += 1) {
        if (cores[index] === cores[pos] || cores[index] === '#FFFFFF' || cores[index] === '') {
          geraCores();
        }
      }
    }
  }

function geraCores() {  
  const cor = document.querySelectorAll('#color-palette .color');

  cor[0].style.backgroundColor = '#000000';
  cor[0].className = 'selected color';

  for (let index = 1; index < 4; index += 1) {
    cor[index].style.backgroundColor = '#' + (Math.floor(Math.random() * 16777215).toString(16));
    cores.push(cor[index].style.backgroundColor);
  }

  evitaCorRepetida();
}

function geraPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const newTr = document.createElement('tr');
    pixelBoard.append(newTr);

    for (let pos = 0; pos < 5; pos += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = '#FFFFFF';
      pixelBoard.lastChild.append(pixel);
    }
  }
}

geraPixelBoard();
