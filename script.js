const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const botaoLimpar = document.querySelector('#clear-board');
const tamanhoQuadro = document.getElementById('board-size');
const botaoVqv = document.getElementById('generate-board');

function geraNumeroRandom() {
  return Math.floor(Math.random() * 256);
}

function geraCoresRandomRGB() {
  const red = geraNumeroRandom();
  const green = geraNumeroRandom();
  const blue = geraNumeroRandom();
  return `rgb( ${red} , ${green} , ${blue})`;
}

function geraArrayDeCores() {
  const cores = ['black'];
  while (cores.length < 4) {
    cores.push(geraCoresRandomRGB());
  }
  return cores;
}

function geraPaletaDeCores() {
  const cores = geraArrayDeCores();
  for (let index = 0; index < cores.length; index += 1) {
    const paletaDeCores = document.createElement('div');
    paletaDeCores.style.backgroundColor = cores[index];
    paletaDeCores.classList.add('color');
    if (index === 0) {
      paletaDeCores.classList.add('selected');
    }
    colorPalette.appendChild(paletaDeCores);
  }
}

geraPaletaDeCores();

function geraQuadroDePixels(tamanho) {
  for (let linha = 0; linha < tamanho; linha += 1) {
    const quadroPixel = document.createElement('div');
    quadroPixel.classList.add('linha');
    pixelBoard.appendChild(quadroPixel);
    for (let elemento = 0; elemento < tamanho; elemento += 1) {
      const pixel = document.createElement('div');
      quadroPixel.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

geraQuadroDePixels(5);

let cor = 'black';
function alteraPaletaSelecionada(event) {
  const removedSeletect = document.getElementsByClassName('selected');

  for (let i = 0; i < removedSeletect.length; i += 1) {
    removedSeletect[i].classList.remove('selected');
  }

  const evento = event.target;
  cor = evento.style.backgroundColor;
  evento.classList.add('selected');
}

colorPalette.addEventListener('click', alteraPaletaSelecionada);

function pintaPixel(event) {
  event.target.style.backgroundColor = cor;
}

pixelBoard.addEventListener('click', pintaPixel);

function limparQuadro() {
  const todosPixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < todosPixels.length; index += 1) {
    todosPixels[index].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', limparQuadro)

function trataInputValidos(numeroDeQuadros) {
  if (numeroDeQuadros < 5 && numeroDeQuadros > 0) {
    numeroDeQuadros = 5;
  }
  if (numeroDeQuadros > 50) {
    numeroDeQuadros = 50;
  }
  return numeroDeQuadros;
}
function trataInputInvalidos(numeroDeQuadros) {
  if (!numeroDeQuadros === '' || numeroDeQuadros <= 0) {
    return alert('Board inválido!'), geraQuadroDePixels(quadrosAjustados);
  }
}

function gerarTabela() {
  const numeroDeQuadros = tamanhoQuadro.value;
  if (!numeroDeQuadros) {
    return alert('Board inválido!');
  }
  const quadrosAjustados = trataInputValidos(numeroDeQuadros);
  pixelBoard.innerHTML = '';
  geraQuadroDePixels(quadrosAjustados);
}

botaoVqv.addEventListener('click', gerarTabela);
