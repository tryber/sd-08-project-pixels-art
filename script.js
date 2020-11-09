function createDivs() {
    for (index = 0; index < 4; index += 1) {
    let paletteDiv = document.getElementById('color-palette');
    let myDivs = document.createElement('div');
    paletteDiv.appendChild(myDivs);
    myDivs.className = 'color';
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