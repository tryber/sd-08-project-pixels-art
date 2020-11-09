function startLoad() {              /* Implement window.onload */
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].style.backgroundColor = 'white';
  }

  let blackElement = document.querySelector('.black');
  blackElement.classList.add('selected');

}
startLoad();

/**/

function setPixelColor(color) {

  let pixel = document.getElementsByClassName('pixel')[0];
  pixel.style.backgroundColor = color;

}


function selectColor() {
  let colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', function (event) {
    removesSelected();

    let color = event.target;
    color.classList.add('selected');

    colorPalette.classList.remove('selected');
  });



}
selectColor();

function removesSelected() {

  let color = document.querySelectorAll('.selected');

  for (let index = 0; index < color.length; index += 1) {

    color[index].classList.remove('selected');

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



