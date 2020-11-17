let colorPalette = document.getElementById('color-palette');
let colors = ['black', 'red', 'purple', 'green'];


for (let index = 0; index < 4; index += 1){
    let createBoxColors = document.createElement('li');
    createBoxColors.className = 'color';
    createBoxColors.style.backgroundColor = colors[index];
    colorPalette.appendChild(createBoxColors);
  }