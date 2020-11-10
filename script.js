window.onload = function () {
  document.getElementById('color-palette').firstElementChild.className =
    'color selected';
};

// function inputValueCheck() {
//   let btnGen = document.getElementById('generate-board');
//   btnGen.addEventListener('click', function () {
//     let inputValue = document.getElementById('board-size').value;
//     let correctValue;
//     if (inputValue === '') {
//       alert('Board inválido!');
//     } else if (inputValue > 50) {
//       inputValue === 50;
//     } else if (inputValue < 5) {
//       inputValue === 5;
//     } else {
//       correctValue = inputValue;
//     }
//   });
//   return correctValue;
// }
// inputValueCheck();

function quadroPixels() {
  const num = 5;
  const squareContainer = document.getElementById('pixel-board');
  for (let i = 0; i < num; i += 1) {
    let linhaPixels = document.createElement('div');
    linhaPixels.className = 'pixel';
    squareContainer.appendChild(linhaPixels);

    for (let i = 0; i < num; i += 1) {
      let colunaPixels = document.createElement('div');
      colunaPixels.className = 'pixel';
      linhaPixels.appendChild(colunaPixels);
    }
  }
}
quadroPixels();

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

function pintaColor() {
  let quadroPixels = document.getElementById('pixel-board');
  quadroPixels.addEventListener('click', function () {
    let selectedColor = document.querySelector('.selected').style
      .backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
}
pintaColor();

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
