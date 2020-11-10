
window.onload = function () {
  let selectedColor = 'black';
  document.getElementById('black').style.backgroundColor = 'black';
  document.getElementById('green').style.backgroundColor = 'green';
  document.getElementById('red').style.backgroundColor = 'red';
  document.getElementById('blue').style.backgroundColor = 'blue';

  function colorChange () {
      const oldPixelSelected = document.querySelector('.selected');
      const currentPixelSelected = event.target;
      oldPixelSelected.classList.remove('selected');
      currentPixelSelected.classList.add('selected');
      selectedColor = currentPixelSelected.style.backgroundColor;
  }   
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', colorChange);

  function changeFrame () {
    event.target.style.backgroundColor = selectedColor;
}
const pixelFrame = document.querySelector('#pixel-board');
pixelFrame.addEventListener('click', changeFrame);
}

function clearFrame () {
  const pixelFrame = document.getElementsByClassName('pixel');
  for(let i = 0; i < pixelFrame.length; i += 1) {
      pixelFrame[i].style.backgroundColor = 'white';
  }
}
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', clearFrame)
