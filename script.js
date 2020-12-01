const pixelPalette = document.getElementById('color-palette');
const palettes = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');

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



/* 
const pixels = document.querySelectorAll('.pixel');
const clearBtn = document.getElementById('clear-board');

const paint = document.querySelector('.selected')
const allPixels =document.querySelectorAll('.pixel')
//document.getElementsByClassName('color')[0].style.backgroundColor = 'red'

window.onload = createPalette(colors),createBoard();

function createPalette(colors){
    for (let pos = 0; pos < 4;pos++){
        const pPixel = document.createElement('div');
        pPixel.className = 'color';
        if(colors[pos] === 'black'){
            pPixel.className = 'color selected';
        }
        pPixel.style.backgroundColor = colors[pos];
        document.getElementById("color-palette").appendChild(pPixel);
        
    }
}

//function clear(){ for (let div of pixels){document.getElementsByClassname("pixel-board).")}} 


function createBoard(){
    for (let pos = 0; pos < 25;pos++){
        const pPixel = document.createElement('div');
        pPixel.className = 'pixel';
    document.getElementById("pixel-board").appendChild(pPixel); //Aqui eu tive que usar o getElementById pra localizar a tag que seri o pai ,dessa forma usei o append child pra dizer que "paletapixel" seria filha dessa

        
    }
}

clearBtn.addEventListener('click', function(){
    allPixels.forEach((pixel)=> {
        pixel.style.backgroundColor = 'white';
    });
});

//seleciona paletta
pixelPalette.addEventListener('click',(event) => {
    colorSel.classList.toggle('selected');
    event.target.classList.add('selected');
});

pixelBoard.addEventListener('click',(event)=>{
    event.target.backgroundColor = colorSel.style.backgroundColor;
})
 */