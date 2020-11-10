
let caixaDois = document.querySelector('#azul');
let caixaTres = document.querySelector('#roxo');
let caixaQuatro = document.querySelector('#verde');
let squares = document.querySelectorAll('.pixel');

const colors = document.querySelectorAll('.color');
const blackSelected = document.querySelector('#preto');

function Onload (event) {
    blackSelected.classList.remove('selected');
    event.target.classList.add('selected');
    blackSelected = event.target;      
}

for(const colorSelected of colors) {
    colorSelected.addEventListener('click', Onload);
}
