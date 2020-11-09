window.onload = function () {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

/* Selecione as cores das paletas de cores */
function setColorTwo(color) {
  let colorTwo = document.querySelectorAll('.color')[1];
  colorTwo.style.backgroundColor = color;
}
setColorTwo();

function setColorThree(color) {
  let colorThree = document.querySelectorAll('.color')[2];
  colorThree.style.backgroundColor = color;
}
setColorThree();

function setColorFour(color) {
  let colorFour = document.querySelectorAll('.color')[3];
  colorFour.style.backgroundColor = color;
}
setColorFour();

/**/
