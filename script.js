let getColor = document.getElementsByClassName('color');

function firstColor(){
  getColor[0].classList.add('selected');
}
firstColor();

function addEventSelected (){
    for (let index = 0; index < getColor.length; index += 1) {
        getColor[index].addEventListener('click', eventSelected);
    }
}
addEventSelected();

function eventSelected (event){
    for (let i = 0; i < getColor.length; i += 1) {
        getColor[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
}


function clearButton(){
let arrayPixels = document.getElementsByClassName('pixel');
  for (let indexClear = 0; indexClear < arrayPixels.length; indexClear += 1){
    arrayPixels[indexClear].style.backgroundColor = 'white';
  }
}

let button = document.getElementById('clear-board');
button.addEventListener('click', clearButton);
