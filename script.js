const colors = ['black','blue','red','yellow'];
const pixels = document.querySelectorAll('.pixel');
const clear = document.getElementById('clear-board');
//document.getElementsByClassName('color')[0].style.backgroundColor = 'red'

window.onload = createPalette(colors),createBoard();

function createPalette(colors){
    for (let pos = 0; pos < 4;pos++){
        const pPixel = document.createElement('div');
        pPixel.className = 'color';
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

function blackSelected(boxPalette) {
    pixels[0].className = 'color selected';
  }

clear.addEventListener('click', function (){
    for (let pos = 0; pos < pixels.length; pos ++){
        pixels[pos].style.backgroundColor = 'white';
    }
})


