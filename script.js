
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

paletaCompleta.addEventListener("click", function () {
  let selected = document.querySelectorAll(".color");

  for (index = 0; index < selected.length; index += 1) {
  selected[index].className = "color";
  }
  event.target.className = "color selected";
});


  // for (index = 0; index < elementosPaleta.length ; index += 1) {
  //   let elemento = elementosPaleta[index];
  //   elemento.addEventListener("click", selectColor) {
  //     function selectColor () {
  //       let selected = document.querySelector(".selected");
  //       selected.className = "color";
  //       elemento.className = "color selected";
  //     }
  //   }
  // }


clickColor ();






