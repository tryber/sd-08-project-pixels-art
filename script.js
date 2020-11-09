window.onload = function () {
  let paletas = document.querySelectorAll('.color');
  let botaoLimpar = document.querySelector('#clear-board');
  let botaoGerarQuadro = document.querySelector('#generate-board');

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

  function selecionarPixels() {
    let pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', pintarPixel);
    }
  }

  for (let index = 0; index < paletas.length; index += 1) {
    paletas[index].addEventListener('click', selecionaPaleta);
  }

  function limparPixels() {
    let pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }

  function criarQuadro(n) {
    console.log('entrou');
    let sectionBoard = document.querySelector('#pixel-board');
    let paiQuadro = sectionBoard.parentNode;
    paiQuadro.removeChild(sectionBoard);
    let sectionBoardCreate = document.createElement('section');
    sectionBoardCreate.id = 'pixel-board';
    for (let index = 0; index < n; index += 1) {
      let sectionLinha = document.createElement('section');
      sectionLinha.className = 'linha';
      for (let j = 0; j < n; j++) {
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        sectionLinha.appendChild(divPixel);
      }
      sectionBoardCreate.appendChild(sectionLinha);
    }
    paiQuadro.appendChild(sectionBoardCreate);
    selecionarPixels();
  }

  function gerarQuadro() {
    let tamanhoQuadro = document.querySelector('#board-size').value;
    if (tamanhoQuadro == '') {
      alert('Board inválido!');
    } else {
      criarQuadro(tamanhoQuadro);
    }
  }
  selecionarPixels();
  botaoLimpar.addEventListener('click', limparPixels);
  botaoGerarQuadro.addEventListener('click', gerarQuadro);
};
