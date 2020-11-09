let pixelsLength = 5;

//Criar um quadro de pixels
function createPixels() {
  let pixelBoard = document.getElementById("pixel-board");
    for (var i = 0; i < pixelsLength; i+= 1) {
        let line = document.createElement("tr")
        line.className = "line"
        pixelBoard.appendChild(line)
        }
    for (var j = 0; j < pixelsLength; j+= 1) {
        for (var i = 0; i < pixelsLength; i+= 1) {
            let pixelLine = document.getElementsByClassName("line")[j];
            let pixel = document.createElement("td");
            pixel.className = "pixel";
            pixelLine.appendChild(pixel)
        }
    }
}

createPixels()

//Definir a cor selecionada
let color = document.querySelectorAll("#color-palette")[0];
let selected = document.getElementsByClassName("color selected");
function select (event) {
    for (var i = 0; i < selected.length; i+= 1) {
        selected[i].className = "color";
    }
    event.target.className = "color selected";
}
color.addEventListener("click", select)





