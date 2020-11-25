let color1 = randomColors ();
let color2 = randomColors ();
let color3 = randomColors ();

if (color1 === color2) {
  color2 = randomColors();
};

if (color1 === color3) {
  color3 = randomColors();
};

if (color2 === color3) {
  color3 = randomColors();
};

function randomColors () {
  let color = '';
  while (color.length < 6) {
    color += (Math.random()).toString(16).substr(-6).substr(-1);
  };
  return `#${color}`;
}

let cores = ["black", color1, color2, color3];

function criaDivs() {
  let paleta = document.getElementById("color-palette");
  for(let index = 0; index < cores.length; index += 1) {
    let cor = cores[index];
    let box = document.createElement("div");
    box.className = "color";
    box.style.backgroundColor = cor;
    paleta.appendChild(box);
  }
}
criaDivs();

function criaQuadro(parametro) {
  for (let index = 0; index < parametro; index += 1) {
    let pixel = document.createElement('tr');
    document.querySelector('#pixel-board').appendChild(pixel);
    pixel.className = `linha${index}`;

  for (let i = 0; i < parametro; i += 1) {
    let coluna = document.createElement('td');
    document.querySelector(`.linha${index}`).appendChild(coluna);
    coluna.className = 'pixel';
    }
  }
}
criaQuadro(5);

function selecionaCor() {
  const coresPaleta = document.querySelectorAll('.color');/*CoresPaleta recebe todos os elementos da classe .color*/
  coresPaleta[0].classList.add('selected');/*coresPaleta na posição 0 recebe a classe .selected*/
  for (let index = 0; index < coresPaleta.length; index +=1) {
    const corPaleta = coresPaleta[index];/*corPaleta recebe os elementos dos indices do array coresPaleta*/
    corPaleta.addEventListener('click', function(event) {/*corPaleta recebe um evento click que realiza uma função event*/
    const selecionado = document.querySelector('.selected');/*A constante selecionado a classe .selected*/
    if (corPaleta.className === 'color') {/*Se corPaleta tiver a classe .color*/
      selecionado.classList.remove('selected');/*selecionado remove a classe selected*/
      event.target.classList.add('selected');/*O event adiciona a classe selected*/
    }
    })
  }
}
selecionaCor();

function substituiCoresPorBranco() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', (event) => {
  const quadroDePixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < quadroDePixel.length; index += 1) {
      quadroDePixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
substituiCoresPorBranco();

function insereCores() {
  document.addEventListener('click', (event) => {
  const quadrado = document.getElementsByClassName('selected')[0].style.backgroundColor;
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = quadrado;
    }
  })
}
insereCores();

function defineTamanhoDoQuadro() {
  const buttonGenerateBoard = document.getElementById('generate-board');
  const entrada = document.getElementById('board-size');
  entrada.min = '1';
  entrada.type = 'number';
  buttonGenerateBoard.addEventListener('click', (event) => {
  const pixelBoard = document.getElementById('pixel-board');
    if (entrada.value === '') {
      alert ('Board inválido!');
    } else if (entrada.value >= 5 && entrada.value <= 50) {
      pixelBoard.innerHTML = '';
      criaQuadro(entrada.value);
    } else if (entrada.value < 5) {
      entrada.value = 5;
      pixelBoard.innerHTML = '';
      criaQuadro(entrada.value);
    } else if (entrada.value > 50) {
      entrada.value = 50;
      pixelBoard.innerHTML = '';
      criaQuadro(entrada.value);
    };
  });
};
defineTamanhoDoQuadro();
