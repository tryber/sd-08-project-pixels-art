function randomColor() {
  const c1 = Math.floor(Math.random() * 255);
  const c2 = Math.floor(Math.random() * 255);
  const c3 = Math.floor(Math.random() * 255);
  return `rgb(${c1},${c2},${c3})`;
}

function creatColorsOptions() {
  const options = document.getElementById('color-palette');
  const colors = [];
  for (let i = 0; i < 4; i += 1) {
    colors[i] = document.createElement('ul');
    colors[i].classList.add('color');
    colors[i].addEventListener('click', (e) => {
      removeSelected();
      colors[i].classList.add('selected');
    });
    if (i === 0) {
      colors[i].style.backgroundColor = 'black';
      colors[i].classList.add('selected');
    } else {
      colors[i].style.backgroundColor = randomColor();
    }
    options.appendChild(colors[i]);
  }
}


function allWhite() {
  const pixels = document.querySelectorAll('div');
  for (let i = 0; i < pixels.length; i += 1) {
   pixels[i].style.backgroundColor = 'white';
  }
}

function clearBoard() {
  const button = document.getElementById('clear-board');
  button.innerHTML = 'Clear Board';
  button.addEventListener('click', allWhite);
}

function creatPixelBoard() {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const pixelsLine = document.createElement('div');
    pixelsLine.className = 'line';
    board.appendChild(pixelsLine);
    for (let i2 = 0; i2 < 5; i2 += 1) {
      const pixels = document.createElement('div');
      pixels.classList.add('pixel');
      pixels.addEventListener('click', (e) => {
        pixels.style.backgroundColor = colorToBePainted();
      });
      board.appendChild(pixels);
    }
  }
}

function removeSelected() {
  const colors = document.getElementsByTagName('ul');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function colorToBePainted() {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  return colorSelected;
}

window.onload = function () {
  creatColorsOptions();
  clearBoard();
  creatPixelBoard();
};
