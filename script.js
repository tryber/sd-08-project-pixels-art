function generateRgb() {
  const code = [];
  for (let index = 0; index < 3; index += 1) {
    const randomNum = Math.random() * 254;
    code.push(Math.floor(randomNum));
  }
  return code.join(', ');
}

function generateColors() {
  const colorPalette = document.querySelectorAll('.color');
  colorPalette.forEach((color) => {
    color.style.backgroundColor = `rgb(${generateRgb()})`;
    colorPalette[0].style.backgroundColor = 'rgb(0 ,0 ,0)';
  });
}

window.onload = () => {
  generateRgb();
  generateColors();
};
