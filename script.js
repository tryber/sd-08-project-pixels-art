const pixel = document.querySelector("#pixel-board");
const color = document.querySelectorAll(".color");
const board = document.querySelector("#board-size");
let valorInput;
for (let coluna = 0; coluna < 5; coluna += 1) {
  for (let linha = 0; linha < 5; linha += 1) {
    let div = document.createElement("div");
    div.className = "pixel";
    div.style.backgroundColor = "white";
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.marginBottom = "10px";
    div.style.border = "1px solid black";
    pixel.appendChild(div);
  }
}
window.onload = function () {
  addEventListener("click", function (evt) {
    if (evt.target.className == "color") {
      for (let index = 0; index < color.length; index += 1) {
        color[index].className = "color";
      }
      evt.target.className = "color selected";
    }
  });
  addEventListener("click", function (evt) {
    for (let index = 0; index < color.length; index += 1) {
      if (color[index].className == "color selected" && evt.target.className == "pixel") {
        evt.target.style.backgroundColor = getComputedStyle(color[index]).backgroundColor;
      }
    }
  });
  let btnClear = document.querySelector("#clear-board");
  let clear = document.querySelectorAll(".pixel");
  btnClear.addEventListener("click", function () {
    if (valorInput * valorInput > 25) {
      clear = document.querySelectorAll(".pixel");
      for (let index = 0; index < valorInput * valorInput; index += 1) {
        clear[index].style.backgroundColor = "white";
      }
    } else {
      for (let index = 0; index < clear.length; index += 1) {
        clear[index].style.backgroundColor = "white";
      }
    }
  });
  const Gboard = document.querySelector("#generate-board");
  Gboard.addEventListener("click", function () {
    valorInput = board.value;
    if (valorInput == '') {alert('Board inválido!'); return 0;}
    if (valorInput > 4) {
      if (valorInput > 51) {valorInput = 50;}
      pixel.style["grid-template-columns"] = `repeat(${valorInput}, 1fr)`;
      while (pixel.hasChildNodes()) {
        pixel.removeChild(pixel.firstChild);
      }
      for (let coluna = 0; coluna < valorInput; coluna += 1) {
        for (let linha = 0; linha < valorInput; linha += 1) {
          let div = document.createElement("div");
          div.className = "pixel";
          div.style.backgroundColor = "white";
          div.style.width = "40px";
          div.style.height = "40px";
          div.style.marginBottom = "10px";
          div.style.border = "1px solid black";
          pixel.appendChild(div);
        }
      }
    }
  });
};
