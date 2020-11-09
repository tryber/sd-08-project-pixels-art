let paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', function (event){
  if (event.target.className !== 'color selected') {
    const paletaSelecionada = document.querySelector('.selected')
    event.target.className = 'color selected';
    paletaSelecionada.className = 'color';
  }
} )

let paletas = document.querySelectorAll('.color');
let pixels = document.querySelector('#pixel-board');
let teste = document.querySelector('#cor2');
pixels.addEventListener('click', function (event){
  for (i = 0; i< paletas.length; i++) {
    console.log(paletas[i].style.backgroundColor)
    if (paletas[i].className === 'color selected') {
      event.target.style.backgroundColor = window.getComputedStyle(paletas[i], null).getPropertyValue("background-color")
    }
  }
})

let pixelsList = document.querySelectorAll('.pixel');
console.log(pixelsList);
let botaoLimpeza = document.querySelector('#clear-board');

botaoLimpeza.addEventListener('click', function () {
  for (i=0; i<pixelsList.length; i++) {
    pixelsList[i].style.backgroundColor = 'white'
  }
})