//Ao carregar a página
const valor = 5;

//Função para criar h1
const corpo = document.querySelector('body');
const titulo = document.createElement('h1');
titulo.id = 'title';
titulo.innerText = '"Paleta de Cores"';
corpo.appendChild(titulo);

//Função para criar a paleta de cores
const quadro = document.createElement('div');
quadro.id = 'pixel-board';
corpo.appendChild(quadro);
const paletaCores = document.createElement('div');
paletaCores.id = 'color-palette';
corpo.appendChild(paletaCores);

//Verificacao de cores repetidas
let color1 = [];
let color2 = [];
let color3 = [];
color1 = randomColors();
color2 = randomColors();
color3 = randomColors();
if (color1 === color2) {
  color2 = randomColors()
};
if (color1 === color3) {
  color3 = randomColors();
};
if (color3 === color2) {
  color2 = randomColors();
};
let colors = ['black', color1, color2, color3];

//criacao paleta de cores
function colorsPalete() {
  const divPaleta = document.getElementById('color-palette');
  for (let i = 0; i < colors.length; i++) {
    const divColors = document.createElement('div');
    divColors.className = 'color';
    divColors.style.backgroundColor = colors[i];
    divPaleta.appendChild(divColors);
    if (colors[i] == 'black') {
      divColors.className = 'color selected';
    };
  };
};
colorsPalete();

//Funcao cor aleatoria
function randomColors() {
  let color = '';
  while (color.length < 6) {
    color += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#' + color;
}

//Criação do botão Limpar
const botao = document.createElement('button');
botao.id = 'clear-board';
botao.innerText = '"Limpar"';
corpo.appendChild(botao);

//Criação do botão input
const divBotoes = document.createElement('div');
divBotoes.className = 'botoes';
corpo.appendChild(divBotoes);
const entrada = document.createElement('input');
entrada.id = 'board-size';
divBotoes.appendChild(entrada);
const botao2 = document.createElement('button');
botao2.id = 'generate-board';
divBotoes.appendChild(botao2);
botao2.innerText = 'VQV';

//Função para criar os elementos
function pixelBoard(valor) {
  const divPixelBoard = document.getElementById('pixel-board');
  divPixelBoard.innerHTML = '';
  for (let i = 0; i < valor; i++) {
    const divPixelsLinha = document.createElement('div');
    divPixelBoard.appendChild(divPixelsLinha);
    for (let j = 0; j < valor; j++) {
      const divPixels = document.createElement('div');
      divPixelBoard.appendChild(divPixels);
      divPixels.className = 'pixel';
      divPixels.style.backgroundColor = 'white';
    };
  };
  corpo.appendChild(divPixelBoard);
};
pixelBoard(valor);

//verificacao dos limites do quadro e dos argumentos do campo de entrada
let input = document.querySelector('#board-size');
input.min = '1';
input.type = 'number';
document.querySelector('#generate-board').addEventListener('click', function () {
  let verfNum = input.value;
  if (verfNum >= 5 && verfNum <= 50) {
    pixelBoard(verfNum);
  } else if (verfNum > 50) {
    verfNum = 50;
    document.getElementById('board-size').value = verfNum;
    pixelBoard(verfNum);
  } else if (verfNum < 5 && verfNum > 0) {
    verfNum = 5;
    document.getElementById('board-size').value = verfNum;
    pixelBoard(verfNum);
  } else {
    alert('"Board inválido!"');
  };
});

//Função para selecionar as cores
function selecionaPixel() {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      const corSelecionada = document.getElementsByClassName('selected')[0];
      corSelecionada.className = 'color';
      event.target.className = 'color selected';
    };
  });
};
selecionaPixel();

//Função para pintar com a cor selecionada
function pintaPixel() {
  document.addEventListener('click', function (event) {
    const pixel = document.getElementsByClassName('selected')[0].style.backgroundColor;
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = pixel;
    };
  });
};
pintaPixel();

//Função para o botão limpar
function limpaPixels() {
  const botaoLimpaPixel = document.querySelector('#clear-board');
  botaoLimpaPixel.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.background = 'white';
    };
  });
};
limpaPixels();
