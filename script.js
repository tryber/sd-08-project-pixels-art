// Parametros de carregamento da pagina
window.onload = function () {
    let classColorSelect = document.querySelector('.color');
    classColorSelect.className = 'color selected';   
   
   }

   // Criando as cores da paleta
function createColorPalette() {

    const containerColorPalette = document.getElementById('color-palette');
    let colorAvaliable = ['black', 'red', 'green', 'blue'];

    for (let index = 0; index < colorAvaliable.length; index+= 1) {
        const divEachColor = document.createElement('div');
        divEachColor.className = 'color';
        divEachColor.style.backgroundColor = colorAvaliable[index];
        containerColorPalette.appendChild(divEachColor);
    }
}
createColorPalette();

// Criando o quadro de pixels
function squarePixels() {
    let sizeSquarePixels = 5;
    const containerSquarePixels = document.getElementById('pixel-board');

    // criando as colunas do quadrado
    for (let iColumn = 0; iColumn < sizeSquarePixels; iColumn+= 1) {
        const divColumnSquare = document.createElement('div');
        divColumnSquare.className = 'pixels-set';
        containerSquarePixels.appendChild(divColumnSquare);

        // criando as linhas do quadrado
        const divColumn = document.getElementsByClassName('pixels-set');
        for (let iLine = 0; iLine < sizeSquarePixels; iLine+= 1) {
            const lineToColumn = divColumn[iColumn];
            const divLineSquare = document.createElement('div');
            divLineSquare.className = 'pixel';
            lineToColumn.appendChild(divLineSquare);
       
        }
    }
}
squarePixels();

// Definindo classe SELECTED;
function setClassColor() {
    let colorPallete = document.querySelectorAll('.color');
    for (let index = 0; index < colorPallete.length; index+= 1) {
        colorPallete[index].addEventListener('click', function(changeClass) {
            let classInSelected = document.querySelector('.color.selected');
            classInSelected.className = 'color';
            changeClass.target.className = 'color selected';
          })
    }
}
setClassColor();