let botaoGeraPaletas = document.getElementById("botao-cores-sortidas");
let paletaDeCores = document.getElementById("color-palette");
let quadroPixels = document.getElementById("pixel-board");
let tamanhoQuadro = document.getElementById('board-size');
let botaoGerarQuadrados = document.getElementById('generate-board');
let botaolimpaQuadroPixels = document.querySelector("#clear-board");
botaoGeraPaletas.addEventListener('click', geraPaletaCores);
botaoGerarQuadrados.addEventListener('click', gerarTabela);
paletaDeCores.addEventListener("click", alteraPaletaSelecionada);
quadroPixels.addEventListener("click", pintaQuadroPexil);
botaolimpaQuadroPixels.addEventListener("click", limpaPixels);
function geraNumeroRGBAlatorio(limite) {
  return Math.floor(Math.random() * limite);
}
function geraCoresRandomicas() {
  const red = geraNumeroRGBAlatorio(256);
  const green = geraNumeroRGBAlatorio(256);
  const blue = geraNumeroRGBAlatorio(256);
  return `rgb(${red}, ${green}, ${blue})`;
}
function geraCoresAleatorias() {
  let cores = ["black"];
  while (cores.length < 4) {
    cores.push(geraCoresRandomicas());
  }
  return cores;
}
function geraPaletaCores() {
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
geraPaletaCores();
function gerarTabela() {
  let nQuadros = tamanhoQuadro.value;
  trataInputInvalidos(nQuadros);
  let quadrosAjustados = trataInputValidos(nQuadros);
  quadroPixels.innerHTML = '';
  gerarPixels(quadrosAjustados);
}
function trataInputValidos(nQuadros) {
  if (nQuadros < 5 && nQuadros > 0) {
    nQuadros = 5;
  }
  if (nQuadros > 50) {
    nQuadros = 50;
  }
  return nQuadros;
}
function trataInputInvalidos(nQuadros) {
  if (nQuadros === "" || nQuadros < 0) {
    return alert('Board inválido!'), gerarPixels(quadrosAjustados);
  }
}
function gerarPixels(quadrosAjustados) {
  if (quadrosAjustados == undefined) {
    quadrosAjustados = 5;
  }
  for (let index = 0; index < quadrosAjustados; index++) {
    let quadroPixel = document.createElement('div');
    quadroPixel.classList.add('row');
    quadroPixels.appendChild(quadroPixel);
    for (let j = 0; j < quadrosAjustados; j++) {
      let pixel = document.createElement("div");
      quadroPixel.appendChild(pixel);
      pixel.className = "pixel";
    }
  }
}
gerarPixels();
cor = "black";
function alteraPaletaSelecionada(event) {
  let removederSeletect = document.getElementsByClassName("selected");
  for (let i = 0; i < removederSeletect.length; i++) {
    removederSeletect[i].classList.remove("selected");
  }
  let evento = event.target;
  cor = evento.style.backgroundColor;
  evento.classList.add("selected");
}

function pintaQuadroPexil(event) {
  let evento = event.target;
  evento.style.backgroundColor = cor;
}
function limpaPixels() {
  let todosPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < todosPixels.length; i++) {
    todosPixels[i].style.backgroundColor = "white";
  }
}
