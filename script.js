var paleta = document.querySelector("#color-palette")
console.log(paleta)

paleta.addEventListener('click', function(event){
  if (event.target.className !== 'color selected') { 
    let paletaSelecionada = document.querySelector(".selected")    
    event.target.className = 'color selected';
    paletaSelecionada.className = 'color';
  }
} )

let paletas = document.querySelectorAll('.color')
console.log(paletas);
let pixels = document.querySelector("#pixel-board");
console.log(pixels);
let teste = document.querySelector("#cor2")
console.log(window.getComputedStyle(teste, null).getPropertyValue("background-color"));