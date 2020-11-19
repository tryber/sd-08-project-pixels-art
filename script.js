let getColor = document.getElementsByClassName('color');
let allPixels = document.getElementsByClassName('pixel');

function firstColor(){
  getColor[0].classList.add('selected');
}
firstColor();

function addEventSelected(){
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', eventSelected);
  }
}
addEventSelected();

function eventSelected (event){
  let elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintingPixels(){
  for (let i = 0; i < allPixels.length; i += 1){
    allPixels[i].addEventListener('click', function (event){

    });
  }
}
paintingPixels();



function clearButton(){
let arrayPixels = document.getElementsByClassName('pixel');
  for (let indexClear = 0; indexClear < arrayPixels.length; indexClear += 1){
    arrayPixels[indexClear].style.backgroundColor = 'white';
  }
}
clearButton();

let button = document.getElementById('clear-board');
button.addEventListener('click', clearButton);
