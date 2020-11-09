function criaPixels(){
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';       
    board.appendChild(pixel);
  }
}
criaPixels();

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

function colorePixel(){
  let pixels = document.getElementsByClassName('pixel');
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

/*
function mudaCor(event){
  let selecionada = document.querySelector('.selected');
  let cor = selecionada.style.getPropertyValue('background-color');
  
  event.target.backgroundColor = cor;
}
mudaCor();
*/

/*
function limpaQuadro(){
  let botao = document.querySelector('button');
  botao.addEventListener('click', fundoBranco)
  function fundoBranco(){
    let pixels = document.querySelectorAll('.pixel');
    for (index = 0; index < pixels.length; index +=1){
      pixels[index].style.backgroundColor = 'white';
    }
  }
}
limpaQuadro();
*/