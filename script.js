let c1 = document.getElementById ('black');
let c2 = document.getElementById ('green');
let c3 = document.getElementById ('red');
let c4 = document.getElementById ('blue');
let pixelBoard = document.getElementById("pixel-board")
let limpar = document.getElementById('clear-board');




limpar.addEventListener('click', clearPixelBoard);
function clearPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}