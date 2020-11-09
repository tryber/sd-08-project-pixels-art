const colorPalette = document.getElementById('color-palette');

const colors = [];
for (let i = 0; i < 20; i++) {
  let currentColor = null;
  do {
    currentColor = getRandomColor();
  } while (colors.includes(currentColor) || currentColor === '#ffffff');
  colors.push(currentColor);
}

for (let i = 0, len = colors.length; i < len; i++) {
  const li = document.createElement('li');
  li.className = 'color';
  li.style.backgroundColor = getRandomColor();
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

console.log(getRandomColor());