function startLoad() {              /* Implement window.onload */
  let pixels = document.getElementsByClassName('pixel');
  let blackElement = document.querySelector('.black');

  for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].style.backgroundColor = 'white';
  }

  blackElement.classList.add('selected');
}
startLoad();


/**/

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


function setPixelColor() {
  let pixelsList = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsList.length; index += 1) {
    let pixelItem = pixelsList[index];
    pixelItem.addEventListener('click', function (event) {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      console.log('s');
    })
  }
}
setPixelColor();


function createsButton(nome) {
  let button = document.createElement('button');

  button.innerHTML = nome;
  return button;
}


function clearButton() {

  let palette = document.getElementById('button-container');
  let myButton = createsButton('Limpar');

  palette.appendChild(myButton);
  myButton.id = 'clear-board';
  myButton.addEventListener('click', startLoad);

}
clearButton();



/* Selecione as cores das paletas de cores */
function setColorOne(color) {
  let colorOne = document.querySelectorAll('.color')[0];
  colorOne.style.backgroundColor = color;
}
setColorOne('black');

function setColorTwo(color) {
  let colorTwo = document.querySelectorAll('.color')[1];
  colorTwo.style.backgroundColor = color;
}
setColorTwo('rgb(15, 163, 107)');

function setColorThree(color) {
  let colorThree = document.querySelectorAll('.color')[2];
  colorThree.style.backgroundColor = color;
}
setColorThree(' rgb(255, 255, 0)');

function setColorFour(color) {
  let colorFour = document.querySelectorAll('.color')[3];
  colorFour.style.backgroundColor = color;
}
setColorFour('red');

/**/



