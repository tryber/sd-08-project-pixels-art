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
          for (let pos1 = 1; pos1<= quant.value; pos1++){
            let row = document.createElement('div');
            nPixels.appendChild(row)
            row.className = 'new-divTableRow'
            for (let pos2 = 1; pos2 <= quant.value; pos2++){
              let column = document.createElement('div');
              row.appendChild(column);
              column.className = 'pixel';
            }
          }
    }else{
      if (quant.value <= 5){
        for (let pos1 = 1; pos1<= 5; pos1++){
          let row = document.createElement('div');
          nPixels.appendChild(row)
          row.className = 'new-divTableRow'
          for (let pos2 = 1; pos2 <= 5; pos2++){
            let column = document.createElement('div');
            row.appendChild(column);
            column.className = 'pixel';
          }
        }
      }else{
        for (let pos1 = 1; pos1<= 50; pos1++){
          let row = document.createElement('div');
          nPixels.appendChild(row)
          row.className = 'new-divTableRow'
          for (let pos2 = 1; pos2 <= 50; pos2++){
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
    for (let pos = 0; pos < palettes.length; pos++) {
      if (palettes[pos].className === 'color selected') {
        event.target.style.backgroundColor = window.getComputedStyle(palettes[pos], null).getPropertyValue('background-color')
      }
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

function generatorId () {
    let Ref = (Math.round(Math.random()*2))
    let Id = "cor"+ Ref;
    return Id;
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