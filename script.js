let paletaCompleta = document.getElementById("color-palette");
let selectedColor = "black";

paletaCompleta.addEventListener("click", function (event) {
  let selected = document.querySelectorAll(".color");
  for (index = 0; index < selected.length; index += 1) {
  selected[index].className = "color";
  }
  event.target.className = "color selected";
  selectedColor = event.target.style.backgroundColor;
});

let board = document.getElementById('pixel-board')
board.addEventListener ("click", function (event){
    event.target.style.backgroundColor = selectedColor;
    })