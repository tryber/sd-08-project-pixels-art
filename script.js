const pixelPalette = document.getElementById('color-palette');
const palettes = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('.color');
const vqvBtn = document.getElementById('generate-board');
const pixels = document.getElementsByc('.pixel');



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