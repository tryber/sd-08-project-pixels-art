// Declaracao de variaveis globais
const palette = document.getElementById('color-palette');

const preto = document.getElementsByClassName('preto');
const amarelo = document.getElementsByClassName('amarelo');
const laranja = document.getElementsByClassName('laranja');
const vermelho = document.getElementsByClassName('vermelho');

const cores = document.querySelectorAll('.color');


// function createDiv() {
//     let palette = document.getElementById('color-palette');

//     for (let i = 1; i < 5; i+=1) {
//         let colorDiv = document.createElement('div');
//         colorDiv.className = ('color');
//     }
// };

// createDiv();

window.onload = function () {
  preto.style.backgroundColor = 'black';
  preto.classList.add('selected');
};
function corDeFundo() {
  if (cores.className === amarelo) {
    cores.style.backgroundColor = 'yellow';
  } else if (cores.className === laranja) {
    cores.style.backgroundColor = 'orange';
  } else {
    cores.style.backgroundColor = 'red';
  }
}
corDeFundo();
