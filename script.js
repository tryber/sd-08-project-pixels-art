function criaCores() {
  const paleta = document.getElementById('color-palette');
  for (index = 1; index <= 4; index += 1){
    const cor = document.createElement('div');
    paleta.appendChild(cor);
    cor.id = `color${index}`;
    cor.className = 'color';
  }
  let cores = document.getElementsByClassName('color');
  cores[0].className = 'color selected';
  for (let index = 1; index < 4; index += 1){
    cores[index].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    // copiei a função de numero aleatorio do site https://www.w3schools.com/js/js_random.asp
  }
  }

criaCores();

const board = document.getElementById('pixel-board');

function criaPixels(numeroDePixels) {
  for (let index = 0; index < (numeroDePixels ** 2); index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
  board.style.maxWidth = (numeroDePixels * 40) + 'px';
}
criaPixels(5);

function selecionaCor(){
  const cores = document.querySelectorAll('.color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', mudaClasse)
  }
  function mudaClasse(event){
    for (let index = 0; index < cores.length; index += 1) {
      cores[index].className = 'color';
  }
    event.target.className = 'color selected';
  }
}
selecionaCor();

const pixels = document.getElementsByClassName('pixel');

function colorePixel() {  
  for (let index = 0; index < pixels.length; index +=1) {
  pixels[index].addEventListener('click', mudaCor);
  }
  function mudaCor(event) {
    const selecionada = document.querySelector('.selected');
    const cor = window.getComputedStyle(selecionada, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = cor;
  }
}
colorePixel();

function limpaQuadro() {
  const botao = document.querySelector('button');
  botao.addEventListener('click', fundoBranco)
  function fundoBranco(){
    for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].style.backgroundColor = 'white';
    }
  }
}
limpaQuadro();

function quadroUsuario() {
const vqv = document.getElementById('generate-board');
vqv.addEventListener('click', criaQuadro);
function criaQuadro() {
  removePixels();
  let input = document.getElementById('board-size');
  let value = parseInt(input.value);
  if(!value) {
    alert("Board inválido!");
  } else if (value > 50) {
    value = 50;
  } else if (value < 5) {
    value = 5;
  }
  criaPixels(value);
  colorePixel()
}
}
quadroUsuario();

function removePixels() {
  board.innerHTML = '';
}
// Essa função foi baseada nessa respostas do Stack Overflow: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
// foi acrescentada para corrigir o problema de acrescentar um novo quadro a cada vez que o usuario clicana no botao
