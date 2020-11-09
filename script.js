function palettaColor () {
    document.querySelectorAll('.color')[0].style.background = 'black';
    document.querySelectorAll('.color')[1].style.background = 'red';
    document.querySelectorAll('.color')[2].style.background = 'green';
    document.querySelectorAll('.color')[3].style.background = 'blue';
}
palettaColor();

function createPixels () {    
    let divlPixelBoard = document.querySelectorAll('#pixel-board');
    for (let i = 0; i < divlPixelBoard.length; i +=1) {
        for (let j = 0; j < divlPixelBoard.length; j +=1){
            let divPixel = document.createElement('div');
            divPixel.className = 'pixel';
            divlPixelBoard[i].appendChild(divPixel);
        }
    }
}
createPixels();

window.onload = function () {
    document.querySelectorAll('.color')[0].classList.add('selected');
    
}