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

colorsOptions();
