//Cores para Sortear
let coresBases = ["yellow", "blue", "gray", "gold", "orange", "brown", "silver", "pink", "purple", "green", "red", "violet"];
// Referenciando Endereços
let botaoCoresSortidas = document.getElementById("botao-cores-sortidas");
let paletaDeCores = document.getElementById("color-palette");
let quadroDePixels = document.getElementById("pixel-board");
let tamanhoDoQuadro = document.getElementById('board-size');
let botaoGerarQuadrados = document.getElementById('generate-board');
let limparPixels = document.querySelector("#clear-board");
//Eventos
botaoCoresSortidas.addEventListener('click', geraPaletaDeCores);
botaoGerarQuadrados.addEventListener('click', gerarTabela);
paletaDeCores.addEventListener("click", alteraSelected);
quadroDePixels.addEventListener("click", pintaPixel);
limparPixels.addEventListener("click", limpaPixels);
function geraCoresAleatorias() {
  let novaCoresBase = coresBases.slice();
  let cores = ["black"];
  let contador = 0;
  while (contador < 3) {
    let sortir = [Math.floor(Math.random() * 9)];
    let novaCor = novaCoresBase[sortir];
    novaCoresBase.splice(novaCoresBase.indexOf(novaCor), 1);
    cores.push(novaCor);
    contador ++;
  }
  return cores;
}
function geraPaletaDeCores() { // Função que gera paleta de cores
  let cores = geraCoresAleatorias();
  paletaDeCores.innerHTML = "";
  for (let index = 0; index < cores.length; index += 1) {
    let divPalet = document.createElement("div");
    paletaDeCores.appendChild(divPalet);
    divPalet.className = "color";
    divPalet.style.backgroundColor = cores[index];
    if (index == 0) {
      divPalet.classList.add("selected");
    }
  }
}
geraPaletaDeCores();
function gerarTabela() {
  let numeroDeQuadros = tamanhoDoQuadro.value;
  if (numeroDeQuadros === "") {
    alert('Board inválido!');
    return;
  }
  if(numeroDeQuadros < 5 && numeroDeQuadros > 0) {
    numeroDeQuadros = 5;
  }
  if(numeroDeQuadros > 50) {
    numeroDeQuadros = 50;
  }
  quadroDePixels.innerHTML = '';
  for (let index = 0; index < numeroDeQuadros; index++) {
    let maePixexl = document.createElement('div');
    maePixexl.classList.add('row');
    quadroDePixels.appendChild(maePixexl);
    maePixexl.style.backgroundColor= "white";
      for (let j = 0; j < numeroDeQuadros; j++) {
      let divTable = document.createElement("div");
      maePixexl.appendChild(divTable);
      divTable.className = "pixel";
    }
  }
}
function geraPrimeiraTabela(){
  for (let index = 0; index < 5; index++) {
    let maePixexl = document.createElement('div');
    maePixexl.classList.add('row');
    quadroDePixels.appendChild(maePixexl);
    maePixexl.style.backgroundColor= "white";
    for (let j = 0; j < 5; j++) {
      let divTable = document.createElement("div");
      maePixexl.appendChild(divTable);
      divTable.className = "pixel";
    }
  }
}
geraPrimeiraTabela();
cor = "black";
//gerarTabela();
function alteraSelected(event) {
  let removederSeletect = document.getElementsByClassName("selected");
  for (let i = 0; i < removederSeletect.length; i++) {
    removederSeletect[i].classList.remove("selected");
  }
  let evento = event.target;
  cor = evento.style.backgroundColor;
  evento.classList.add("selected");
}
function pintaPixel(event) {
  let evento = event.target;
  evento.style.backgroundColor = cor;
}
function limpaPixels() {
  let cadaPixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < cadaPixel.length; i++) {
    cadaPixel[i].style.backgroundColor = "white";
  }
}
