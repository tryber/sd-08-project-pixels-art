function createDivs() {
    for (index = 0; index < 4; index += 1) {
    var paletteDiv = document.getElementById('color-palette');
    var myDivs = document.createElement('div');
    paletteDiv.appendChild(myDivs);
    myDivs.className = 'color';
}
}
createDivs();

function createColor() {
var cores = document.querySelectorAll(".color");
cores[0].style.backgroundColor = 'black';
cores[1].style.backgroundColor = 'blue';
cores[2].style.backgroundColor = 'green';
cores[3].style.backgroundColor = 'yellow';
}