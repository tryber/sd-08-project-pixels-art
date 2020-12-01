const pixelPalette = document.getElementById('color-palette');
const palettes = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('.color');
const vqvBtn = document.getElementById('generate-board');
const pixels = document.getElementsByClassName('pixel');
const size = document.getElementById("board-size");
const clrBtn = document.getElementById('clear-board');


vqvBtn.addEventListener('click', function() {

  let temp = document.querySelector("body > div:nth-child(5)")
  temp.id = 'receptora'
  let nPixels = document.createElement('div')
  temp.appendChild(nPixels);
  nPixels.id = 'pixel-board';
  
  
  if (quant.value !== ""){
    document.querySelector('#pixel-board').parentNode.removeChild(document.querySelector('#pixel-board'));
    if (quant.value < 50 && quant.value > 5){
          for (let i = 1; i<= quant.value; i++){
            let row = document.createElement('div');
            nPixels.appendChild(row)
            row.className = 'new-divTableRow'
            for (let j = 1; j <= quant.value; j++){
              let colunas = document.createElement('div');
              row.appendChild(colunas);
              colunas.className = 'pixel';
            }
          }
    }else{
      if (quant.value <= 5){
        for (let i = 1; i<= 5; i++){
          let row = document.createElement('div');
          nPixels.appendChild(row)
          row.className = 'new-divTableRow'
          for (let j = 1; j <= 5; j++){
            let colunas = document.createElement('div');
            row.appendChild(colunas);
            colunas.className = 'pixel';
          }
        }
      }else{
        for (let i = 1; i<= 50; i++){
          let row = document.createElement('div');
          nPixels.appendChild(row)
          row.className = 'new-divTableRow'
          for (let j = 1; j <= 50; j++){
            let column = document.createElement('div');
            row.appendChild(column);
            column.className = 'pixel';
          }
        }
      }
    }
  }else{
    alert("Board inválido!");
  }

  nPixels.addEventListener('click', function (event) {
    for (let pos = 0; pos < paletas.length; pos++) {
      if (paletas[pos].className === 'color selected') {
        event.target.style.backgroundColor = window.getComputedStyle(paletas[i], null).getPropertyValue('background-color')
      }
    }
  })
  let pixelsList = document.querySelectorAll('.pixel');
let botaoLimpeza = document.querySelector('#clear-board');
botaoLimpeza.addEventListener('click', function () {
  for (let pos = 0; pos < pixelsList.length; pos++) {
    pixelsList[pos].style.backgroundColor = 'white'
  }
})
})


clrBtn.addEventListener('click', function () {
  for (let pos = 0; pos < pixelsList.length; pos++) {
    pixels[pos].style.backgroundColor = 'white'
  }
})

function randomMaker(){
    let cor1 =  (Math.round(Math.random()*255));
    let cor2 =  (Math.round(Math.random()*255));
    let cor3 =  (Math.round(Math.random()*255));
    let rColors =  ("rgb("+cor1+", "+cor2+", "+cor3+")");
    return rColors;
}


for (let pos = 1; pos < colors.length; pos++){
    let aux = colors[pos];
    
    aux.style.backgroundColor = randomMaker();
}

pixelPalette.addEventListener('click',function(event) {
    if (event.target.className !== 'color selected') {
        const colorSel = document.getElementsByClassName('selected');
        event.target.className = 'color selected';
        colorSel.className = 'color';
      }
});

pixelBoard.addEventListener('click', function (event) {
  for (let pos = 0; pos < palettes.length; pos++) {
    if (palettes[pos].className === 'color selected') {
      event.target.style.backgroundColor = window.getComputedStyle(palettes[pos], null).getPropertyValue('background-color')
    }
  }
})