window.onload = function () {
  boardGenerator(5);
  adicionarClickBotaoLimpar();
  applyInputValue();
};

function adicionarClickBotaoLimpar() {
  let botaoLimpar = document.querySelector("#clear-board");
  botaoLimpar.addEventListener("click", limparBoard);
}

function limparBoard() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((e) => {
    e.style.backgroundColor = "white";
  });
}

function boardGenerator(n) {
  if (n < 5) {
    n = 5;
  } else if (n > 50) {
    n = 50;
  }

  paleteGeneretor(n);
  let board = document.querySelector("#pixel-board");

  for (let i = 0; i < n; i++) {
    let linha = document.createElement("div");
    linha.classList.add("line");
    board.appendChild(linha);
    for (let j = 0; j < n; j++) {
      let pixelBlock = document.createElement("div");
      pixelBlock.classList.add("pixel");
      pixelBlock.addEventListener("click", (e) => {
        let corSelecionada = document.querySelector(".selected");
        corPraPintar = corSelecionada.style.backgroundColor;
        e.target.style.backgroundColor = corPraPintar;
      });
      linha.appendChild(pixelBlock);
    }
  }
}

function paleteGeneretor() {
  let paleta = document.querySelector("#color-palette");
  let lista = document.querySelector("#color-list");

  for (let i = 0; i < 4; i++) {
    let cor = document.createElement("div");
    cor.classList.add("color");

    if (i === 0) {
      cor.classList.add("selected");
    }

    cor.addEventListener("click", (e) => {
      removeAllPrevSelected();
      e.target.classList.add("selected");
      e.target.classList.add("bordao");
    });
    let backCor;
    backCor = i === 0 ? "black" : generateRandomColor();

    let itemLista = document.createElement("li");
    itemLista.innerHTML = backCor;
    lista.appendChild(itemLista);

    cor.style.backgroundColor = backCor;
    paleta.appendChild(cor);
  }
}

function removeAllPrevSelected() {
  let cor = document.querySelectorAll(".color");
  cor.forEach((e) => {
    e.classList.remove("selected");
    e.classList.remove("bordao");
  });
}

function generateRandomColor() {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  return "rgb(" + c1 + "," + c2 + "," + c3 + ")";
}

function applyInputValue() {
  let botao = document.querySelector("#generate-board");

  botao.addEventListener("click", () => {
    var size = pegaValor();
    if (size === "") {
      return alert("Board inválido!");
    }
    console.log(clearBoardList());
    boardGenerator(size);
  });
}

function pegaValor() {
  let inputData = document.querySelector("#board-size");
  return inputData.value;
}

function clearBoardList() {
  let lista = document.querySelector("#color-list");
  let listaLis = document.querySelectorAll("#color-list>li");
  let board = document.querySelector("#pixel-board");
  let boardDivs = document.querySelectorAll("#pixel-board>div");
  let paleta = document.querySelector("#color-palette");
  let paletaDivs = document.querySelectorAll("#color-palette>div");

  listaLis.forEach((element) => {
    lista.removeChild(element);
  });
  boardDivs.forEach((e) => {
    board.removeChild(e);
  });
  paletaDivs.forEach((e) => {
    paleta.removeChild(e);
  });
}
