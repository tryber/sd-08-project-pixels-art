window.onload = function () {
  const paletas = document.querySelectorAll('.color');
  const pixels = document.querySelectorAll('.pixel');
  const botaoLimpar = document.querySelector('#clear-board');

  function deselecionaPaletas() {
    for (let index = 0; index < paletas.length; index += 1) {
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
    const paletaSelecionada = document.querySelector('.selected');
    const corSelecionada = window
      .getComputedStyle(paletaSelecionada, null)
      .getPropertyValue('background-color');
    elemento.target.style.backgroundColor = corSelecionada;
  }

  for (let index = 0; index < paletas.length; index += 1) {
    paletas[index].addEventListener('click', selecionaPaleta);
  }

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pintarPixel);
  }

  function limparPixels() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }

  botaoLimpar.addEventListener('click', limparPixels);
};
