//const pPixels = document.getElementsByClassName('color');
const colors = ['black','blue','red','yellow'];

//document.getElementsByClassName('color')[0].style.backgroundColor = 'red'

function createPalette(colors){
    for (let pos = 0; pos < 4;pos++){
        const pPixel = document.createElement('div');
        pPixel.className = 'color';
        pPixel.style.backgroundColor = colors[pos];
        document.getElementById("color-palette").appendChild(pPixel);
        
    }
}

