let colorPalette = document.querySelector('#color-palette');
let pallets = document.querySelectorAll('.color');
let pixelBoard = document.querySelector('#pixel-board')
let colorChoose = document.querySelector('.selected')
let button = document.querySelector('#clear-board');
let pixel = document.querySelectorAll('.pixel') ;

document.querySelector('#colorBlack').style.backgroundColor = 'black';
document.querySelector('#colorBlue').style.backgroundColor = '#36467C';
document.querySelector('#colorGray').style.backgroundColor = '#B0B0B0';
document.querySelector('#colorBrown').style.backgroundColor = '#CCBAAA';

function selectedColor(event) {
    for(let index = 0; index < pallets.length; index +=1){
        pallets[index].className = 'color';
    }
     event.target.className = 'color selected'

}
colorPalette.addEventListener('click', selectedColor);

function colorize (event) {
    let pickColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = pickColor;
    console.log(pickColor);
}

pixelBoard.addEventListener('click', colorize);


function clear () {
    for(let index = 0; index < pixel.length; index +=1){
    pixel[index].style.backgroundColor = 'white';
    }  
}
button.addEventListener('click', clear)
