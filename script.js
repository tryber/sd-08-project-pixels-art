// Requirements 2 and 3:
let colors = ['black', 'red', 'yellow', 'blue'];
let colorPalette = document.querySelectorAll('.color');

function fillingInPalette() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = colors[index];
  }
}
fillingInPalette();
