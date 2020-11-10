function randomColor() {
  const c1 = Math.floor(Math.random() * 255);
  const c2 = Math.floor(Math.random() * 255);
  const c3 = Math.floor(Math.random() * 255);
  return `rgb(${c1},${c2},${c3})`;
}

function colorsOptions() {
  const options = document.getElementById('color-palette');
  const colors = [];
  for (let i = 0; i < 4; i += 1) {
    colors[i] = document.createElement('ul');
    colors[i].classList.add('color');
    if (i === 0) {
      colors[i].style.backgroundColor = 'black';
    } else {
      colors[i].style.backgroundColor = randomColor();
    }
    options.appendChild(colors[i]);
  }
}

function creatPixelBoard() {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const pixelsLine = document.createElement('div');
    pixelsLine.className = 'line';
    board.appendChild(pixelsLine);
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const pixelsColumn = document.createElement('div');
      pixelsColumn.classList.add('pixel');
      board.appendChild(pixelsColumn);
    }
  }
}


window.onload = function () {
  colorsOptions();
  creatPixelBoard();
};
