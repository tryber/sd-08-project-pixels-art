const colorPalette = document.getElementById('color-palette');

const colors = [];
for (let i = 0; i < 3; i++) {
  let currentColor = null;
  do {
    currentColor = getRandomColor();
  } while (colors.includes(currentColor) || currentColor === '#ffffff');
  colors.push(currentColor);
}

colors.unshift('#000000');

for (let i = 0, len = colors.length; i < len; i++) {
  const li = document.createElement('li');
  li.className = 'color';
  li.style.backgroundColor = colors[i];
  colorPalette.appendChild(li);
}

function getRandomColor() {
  let hexset = '0123456789abcdef'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexset.length);
    color += hexset[index];
  }
  return color;
}

const pixelBoard = document.getElementById('pixel-board');
for(let i = 0; i < 25; i++) {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixel);
}