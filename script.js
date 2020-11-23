//Requisito 1,2//
function criaDivs() {
 let paleta = document.getElementById("color-palette");

  let cores = ["black", "blue", "red", "green"];
  for(let index = 0; index < cores.length; index += 1) {
    let cor = cores[index];
    let box = document.createElement("div");
    box.className = "color";
    box.style.backgroundColor = cor;
    paleta.appendChild(box);
  }
}
criaDivs();

function criaQuadro() {
  for (let index = 0; index < 5; index += 1) {
    let pixel = document.createElement('tr');
    document.querySelector('#pixel-board').appendChild(pixel);
    pixel.className = `linha${index}`;

  for (let i = 0; i < 5; i += 1) {
    let coluna = document.createElement('td');
    document.querySelector(`.linha${index}`).appendChild(coluna);
    coluna.className = 'pixel';
    }
  }
}
criaQuadro();

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
  let button = document.getElementById('pixel-board');
  button.addEventListener('click', trocaCor);

  function trocaCor() {
    let quadroPixel = document.getElementById('pixel-board').style.color = 'rgb(255, 255, 255)';
  }
}
substituiCoresPorBranco();

function insereCores() {
  const tabela = document.querySelectorAll('.pixel');
  for (let index = 0; index < tabela.length; index += 1) {
    const corDaTabela = tabela[index];
  }
  tabela.addEventListener('click', function(event) {
    const tabela = document.querySelector('.selected');
    if (tabela.className === '.pixel') {
      tabela.classList.remove('selected');
      event.target.classList.add('selected');
    }
    })
}
insereCores();
