function criaCores(){
  const paleta = document.getElementById('color-palette');
  for (index = 1; index <=4; index +=1){
    const cor = document.createElement('div');    
    paleta.appendChild(cor);
    cor.id = `color${index}`;
    cor.className = 'color'; 
    }
    let cores = document.getElementsByClassName('color');
    cores[0].className = 'color selected';
    for (let index =1; index <4; index +=1){
      cores[index].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
      // copiei a função de numero aleatorio do site https://www.w3schools.com/js/js_random.asp
    };
  }  

criaCores();

function criaPixels(numeroDePixels){
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < Math.pow(numeroDePixels, 2); index += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';       
    board.appendChild(pixel);
  }
  board.style.maxWidth = (numeroDePixels * 40) + 'px';
}
criaPixels(5);
//função Math.pow retirada de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

function selecionaCor(){
  const cores = document.querySelectorAll('.color');  
    for (index = 0; index < cores.length; index +=1){
      cores[index].addEventListener('click', mudaClasse)
    }
    function mudaClasse(event){
      for (index = 0; index<cores.length; index+=1){
        cores[index].className = 'color';
      }
    event.target.className = 'color selected';
    }
}
selecionaCor();

let pixels = document.getElementsByClassName('pixel');

function colorePixel(){  
  for (index = 0; index < pixels.length; index +=1){
  pixels[index].addEventListener('click', mudaCor); 
  }
  function mudaCor(event){
    let selecionada = document.querySelector('.selected');
    let cor = window.getComputedStyle(selecionada, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = cor;
  }
}
colorePixel();

function limpaQuadro(){
  let botao = document.querySelector('button');
  botao.addEventListener('click', fundoBranco)
  function fundoBranco(){
    for (index = 0; index < pixels.length; index +=1){
    pixels[index].style.backgroundColor = 'white';
    }
  }
}
limpaQuadro();


/*
function quadroUsuario(){
let vqv = document.getElementById('generate-board');
vqv.addEventListener('click', criaQuadro);
function criaQuadro(){
  let input = document.getElementById('board-size');
  let value = input.value;
  criaPixels(value);
}
}
quadroUsuario();
*/