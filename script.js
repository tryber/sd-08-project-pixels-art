window.onload = function () {
  document.getElementById('color-palette').firstElementChild.className =
    'color selected';
};

function randomColor() {
  let colorRGB = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)})`;

  return colorRGB;
}

function paletaCores() {
  let coresFundo = ['black', randomColor(), randomColor(), randomColor()];
  const palette = document.getElementById('color-palette');

  for (let i = 0; i < coresFundo.length; i += 1) {
    let quadradosCores = document.createElement('li');
    quadradosCores.className = 'color';
    quadradosCores.style.backgroundColor = coresFundo[i];
    palette.appendChild(quadradosCores);
  }
}
paletaCores();

function selectedColor() {
  let quadros = document.getElementById('color-palette').children;
  let paleta = document.getElementById('color-palette');

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
selectedColor();

function pintaColor () {
let quadroPixels = document.getElementById('pixel-board');
quadroPixels.addEventListener('click', function () {
let selectedColor = document.querySelector('.selected').style.backgroundColor;
event.target.style.backgroundColor = selectedColor;
})
}
pintaColor()
function quadroPixels() {
  const numQuadrados = 25;
  const squareContainer = document.getElementById('pixel-board');
  for (let i = 0; i < numQuadrados; i += 1) {
    let linhaSquares = document.createElement('div');
    linhaSquares.className = 'pixel';
    squareContainer.appendChild(linhaSquares);
  }
}
quadroPixels();

function botaoLimpar() {
  let buttonContainter = document.getElementById('button-container');
  let buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonContainter.appendChild(buttonClear);
}
botaoLimpar();

function limpeza() {
  const btnClear = document.getElementById('clear-board');
  btnClear.addEventListener('click', function () {
    let pixelNumbers = document.getElementsByClassName('pixel').length;
    for (let i = 0; i < pixelNumbers; i += 1) {
      document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
    }
  });
}
limpeza();
