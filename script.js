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


    // No seu uso mais comum, addEventListener recebe dois parâmetros:
    // 1) O evento que estamos esperando escutar: Exemplos: click, change, mouseover etc.
    // 2) A função (criada por você) que será executada quando o evento acontecer.


    // Eventos do PROJETO (via classList)
    // link.: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
    document.addEventListener('click', function (eventClick) {

        // Definindo Classe SELECTED (via classList)   
        if (eventClick.target.classList.contains('color')){
            // Do something...
            let classInSelected = document.querySelector('.selected');
            classInSelected.className = 'color';
            eventClick.target.className = 'color selected';
        }
    
        // Aplicando Cor selecionada nos quadrados desejados   
        if (eventClick.target.classList.contains('pixel')){
            // Do something...
            let paintColor = document.querySelector('.selected').style.backgroundColor;
            eventClick.target.style.backgroundColor = paintColor;
        }

        // Limpa o quadro com a cor branca
        if (eventClick.target.classList.contains('buttonClear')){
            // Do something...
            const divPixel = document.getElementsByClassName('pixel');
            for (let index = 0; index < divPixel.length; index += 1) {
            divPixel[index].style.background = 'white';
            }
        }
    }, false);

