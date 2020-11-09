function createDivs() {
    for (index = 0; index < 5; index += 1) {
    var paletteDiv = document.getElementById('color-palette');
    var myDivs = document.createElement('divs');
    paletteDiv.appendChild(myDivs);
    myDivs.className = 'color';
}
}
createDivs();

function createColor() {
var paletteDiv = document.getElementsByClassName('color');
paletteDiv[0].style.backgroundColor = 'black';
}