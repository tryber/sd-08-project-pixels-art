let colorPalette = document.getElementById('color-palette');
let colors = ['black', 'red', 'purple', 'green'];
let pixelBoard = document.getElementById('pixel-board');



for (let index = 0; index < 4; index += 1){
    let createBoxColors = document.createElement('li');
    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = colors[index];
    colorPalette.appendChild(createBoxColors);
  }
  for (let index = 0; index < 5; index += 1) {
    let linePalette = document.createElement('div');
    linePalette.className = 'line';
    pixelBoard.appendChild(linePalette);
    
    for (let index = 0; index < 5; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linePalette.appendChild(pixel);
    }
  }
  