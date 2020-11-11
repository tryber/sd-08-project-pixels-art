
// Requisitos 2 e 3

const elementosPaleta = document.getElementsByClassName("color");

for (index = 0; index < elementosPaleta.length; index += 1) {
  const coresDisponiveis = ["black", "purple", "blue", "cyan"];

  for (cont = 0; cont < coresDisponiveis.length; cont +=1) {
    elementosPaleta[index].style.backgroundColor = coresDisponiveis[index];
  }
}


// Requisitos 4 e 5

const n = 5;
const board = document.getElementById("pixel-board");

  for (let index = 0; index < n; index += 1) {
    let addLines = document.createElement("div");

    addLines.className = "lines";
    board.appendChild(addLines);

    const boardElements = document.getElementsByClassName("lines");

    for (let cont = 0; cont < n; cont += 1) {
      const spacesContainer = boardElements[index];
      let boardSpace = document.createElement("div");
      boardSpace.className = "pixel";

      spacesContainer.appendChild(boardSpace);
      }

    }


// Requisitos 6 e 7
let paletaCompleta = document.getElementById("color-palette");
let selectedColor = "black";

paletaCompleta.addEventListener("click", function () {
  let selected = document.querySelectorAll(".color");

  for (index = 0; index < selected.length; index += 1) {
  selected[index].className = "color";
  }
  event.target.className = "color selected";
  selectedColor = event.target.style.backgroundColor;
});


// Requisito 8

board.addEventListener ("click", function (){

event.target.style.backgroundColor = selectedColor;
})

// Requisito 9
let buttonClear = document.getElementById("clear-board");
let pixels = document.querySelectorAll(".pixel");

buttonClear.addEventListener("click", function () {
  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = "white";
  }
})

//Requisito 10

let buttonGrid = document.getElementById("generate-board");
let inputField = document.getElementById("board-size");

buttonGrid.addEventListener("click", function () {
let userValue = inputField.value;
board.innerHTML = "";

if (userValue === "") {
  alert("Board inválido!")
} else if (userValue < 5) {
  userValue = 5;
} else if (userValue >50) {
  userValue = 50;
}

  for (let index = 0; index < userValue; index += 1) {
    let addLines = document.createElement("div");


    addLines.className = "lines";
    board.appendChild(addLines);

    const boardElements = document.getElementsByClassName("lines");

    for (let cont = 0; cont < userValue; cont += 1) {
      const spacesContainer = boardElements[index];
      let boardSpace = document.createElement("div");
      boardSpace.className = "pixel";

      spacesContainer.appendChild(boardSpace);
      }

    }
  });





