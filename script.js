window.onload = function () {
  document.getElementById('color-palette').firstElementChild.className =
    'color selected';
};

// Função cores aleatórias (suporte para paleta de cores):
function randomColor() {
  const colorRGB = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)})`;

  return colorRGB;
}

// Função coloração das color-pallete:
function paletaCores() {
  const coresFundo = ['black', randomColor(), randomColor(), randomColor()];
  const palette = document.getElementById('color-palette');

  for (let i = 0; i < coresFundo.length; i += 1) {
    let quadradosCores = document.createElement('li');
    quadradosCores.className = 'color';
    quadradosCores.style.backgroundColor = coresFundo[i];
    palette.appendChild(quadradosCores);
  }
}
paletaCores();

// Função criação do quadro de pixels:
function quadroPixels(num) { // Mudei a declaração de variável para virar parâmetro;
  const squareContainer = document.getElementById('pixel-board');
  for (let i = 0; i < num; i += 1) {
    const linhaPixels = document.createElement('div');
    linhaPixels.className = 'pixel-line';
    squareContainer.appendChild(linhaPixels);

    for (let j = 0; j < num; j += 1) {
      const colunaPixels = document.createElement('div');
      colunaPixels.className = 'pixel';
      linhaPixels.appendChild(colunaPixels);
    }
  }
}
quadroPixels(5);

// Função selecionar cor e mudar a classe da li da color-palette:
function selectColor() {
  const quadros = document.getElementById('color-palette').children;
  const paleta = document.getElementById('color-palette');

  paleta.addEventListener('click', function (event) {
    for (let i = 0; i < quadros.length; i += 1) {
      if (quadros[i] === event.target) {
        event.target.className = 'color selected';
      } else {
        quadros[i].className = 'color';
      }
    }
  });
}
selectColor();

// Função para pintar os pixels (por algum motivo também pinta o #pixel-board):
function pintaCor() {
  const quadroPixel = document.getElementById('pixel-board');
  quadroPixel.addEventListener('click', function () {
    const selectedColor = document.querySelector('.selected').style
      .backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
}
pintaCor();

// Função criação dinâmica do botão #clear-board:
function botaoLimpar() {
  const buttonContainter = document.getElementById('button-container');
  const buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonContainter.appendChild(buttonClear);
}
botaoLimpar();

// Função tornar branco o fundo de todos os pixels (com clique no botão Limpar):
function limpeza() {
  const btnClear = document.getElementById('clear-board');
  btnClear.addEventListener('click', function () {
    const pixelNumbers = document.getElementsByClassName('pixel').length;
    for (let i = 0; i < pixelNumbers; i += 1) {
      document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
    }
  });
}
limpeza();

// Função para checar e criar novo board (ainda falta entender como apagar o board antigo):
function inputedValueCheck() {
  const btnGen = document.getElementById('generate-board');
  btnGen.addEventListener('click', function () {
    let inputedValue = document.getElementById('board-size').value;
    let correctValue;
    if (inputedValue === '') {
      alert('Board inválido!');
    }
    if (inputedValue > 50) {
      inputedValue = 50;
    }
    if (inputedValue < 5) {
      inputedValue = 5;
    }
    if (inputedValue >= 5 || inputedValue <= 50) {
      correctValue = inputedValue;
      const quadro = document.getElementById('pixel-board');
      quadro.innerHTML = ''; // Ideia vista no projeto do Massaki, que remete ao projeto da Bianca Caetano (genial!)
      quadroPixels(correctValue);
    }
  });
}
inputedValueCheck();
