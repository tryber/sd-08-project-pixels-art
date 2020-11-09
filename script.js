window.onload = function () {
  const paletas = document.querySelectorAll('.color');
  const botaoLimpar = document.querySelector('#clear-board');
  const botaoGerarQuadro = document.querySelector('#generate-board');

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
    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', pintarPixel);
    }
  }

  for (let index = 0; index < paletas.length; index += 1) {
    paletas[index].addEventListener('click', selecionaPaleta);
  }

  function limparPixels() {
    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }

  function criarQuadro(n) {
    const sectionBoard = document.querySelector('#pixel-board');
    const paiQuadro = sectionBoard.parentNode;
    paiQuadro.removeChild(sectionBoard);
    const sectionBoardCreate = document.createElement('section');
    sectionBoardCreate.id = 'pixel-board';
    for (let index = 0; index < n; index += 1) {
      const sectionLinha = document.createElement('section');
      sectionLinha.className = 'linha';
      for (let j = 0; j < n; j += 1) {
        const divPixel = document.createElement('div');
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
    if (tamanhoQuadro === '') {
      alert('Board inválido!');
    } else {
      if (tamanhoQuadro < 5) {
        tamanhoQuadro = 5;
      } else if (tamanhoQuadro > 50) {
        tamanhoQuadro = 50;
      }
      criarQuadro(tamanhoQuadro);
    }
  }

  function gerarCor() {
    const corR = parseInt(Math.random() * 255, 10);
    const corG = parseInt(Math.random() * 255, 10);
    const corB = parseInt(Math.random() * 255, 10);
    return `rgb(${corR}, ${corG}, ${corB})`;
  }

  function gerarCoresAleatorias() {
    const paleta2 = document.querySelector('.paleta2');
    const paleta3 = document.querySelector('.paleta3');
    const paleta4 = document.querySelector('.paleta4');

    paleta2.style.backgroundColor = gerarCor();
    paleta3.style.backgroundColor = gerarCor();
    paleta4.style.backgroundColor = gerarCor();
  }
  selecionarPixels();
  botaoLimpar.addEventListener('click', limparPixels);
  botaoGerarQuadro.addEventListener('click', gerarQuadro);
  gerarCoresAleatorias();
};
