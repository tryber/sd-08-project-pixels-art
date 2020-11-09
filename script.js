function createDivs(){
let colorPalette = document.getElementById('color-palette');
let divColor = document.createElement('div');
for (index = 0; index < 4; index += 1) {
colorPalette.appendChild(divColor);
divColor.className = 'color';
}
}
createDivs();

function createColor() {
let palette = ["black", "blue", "green", "yellow"];
let colors = document.querySelectorAll('.color');
for (index = 0; index < palette.length; index += 1) {
colors[index].style.backgroundColor = palette[index];
}
}
createColor();