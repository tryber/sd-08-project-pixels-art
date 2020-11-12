
const colors = [ 'rgb( 0 , 0 , 0 )', 'rgb( 214 , 40 , 40 )' , 'rgb( 247 , 127 , 0 )' , 'rgb( 252 , 191 , 73 )' ];
const colorPalette = document.querySelectorAll('.color');
let colorSelected = 'rgb(0,0,0)';

function pixelBoardCreation() {
  const pixelBoard = document.querySelector('#pixel-board');
  
  for (let i = 0; i < 25; i++) {
    let pixel = document.createElement('div');
    let node = document.createTextNode("");
    pixel.appendChild(node);
    pixel.classList.add('pixel');
    pixel.addEventListener('click', colorPixel);
    pixelBoard.appendChild(pixel)
  }
}

pixelBoardCreation()

function colorPixel(event) {
  event.target.style.backgroundColor = colorSelected;
}

function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'rgb( 255 , 255 , 255 )';
  }
}

// function paintPalette() {
//   for (let index in colorPalette) {
//     colorPalette[index].style.backgroundColor = colors[index];
//     colorPalette[index].addEventListener('click', selectColor);
//   }
// }

function selectColor(event) {
  colorSelected = event.target.style.backgroundColor;
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

// paintPalette()
