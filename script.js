window.onload = function () {
  let paletas = document.querySelectorAll('.color');
  let pixels = document.querySelectorAll('.pixel');
  let botaoLimpar = document.querySelector('#clear-board');

  function deselecionaPaletas() {
    for (let index = 0; index < paletas.length; index++) {
      if (paletas[index].classList.contains('selected')) {
        paletas[index].classList.remove('selected');
      }
    }
  }

  function selecionaPaleta(paleta) {
    deselecionaPaletas();
    paleta.target.classList.add('selected');
  }

  function pintarPixel(elemento) {
    let corSelecionada = document.querySelector('.selected').style
      .backgroundColor;
    elemento.target.style.backgroundColor = corSelecionada;
  }

  for (let index = 0; index < paletas.length; index++) {
    paletas[index].addEventListener('click', selecionaPaleta);
  }

  for (let index = 0; index < pixels.length; index++) {
    pixels[index].addEventListener('click', pintarPixel);
  }

  function limparPixels(){
    for (let index = 0; index < pixels.length; index++) {
        pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }

  botaoLimpar.addEventListener('click', limparPixels);
};
