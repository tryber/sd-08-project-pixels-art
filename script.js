let getColor = document.getElementsByClassName('color');

function firstColor(){
  getColor[0].classList.add('selected');
}
firstColor();

let button = document.getElementById('clear-board');
button.addEventListener('click', function (){
  let arrayPixels = document.getElementsByClassName('pixel');
  for (let indexClear = 0; indexClear < arrayPixels.length; indexClear += 1){
    arrayPixels[indexClear].style.backgroundColor = '#ffffff';
  }
})
