let colorPaletteContainer = document.getElementById('color-palette');
let colors = ['black', 'red', 'green', 'blue'];
for (let backColor of colors) {
  let colorPalette = document.createElement('div');
  colorPalette.className = 'color';
  colorPalette.style.backgroundColor = backColor;
  colorPaletteContainer.appendChild(colorPalette)
}