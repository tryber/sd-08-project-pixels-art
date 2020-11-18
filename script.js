let pixelsLength = 5;

// Criar um quadro de pixels
function createPixels() {
  const pixelBoard = document.getElementById("pixel-board");
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

// Definir a cor selecionada
let color = document.querySelector("#color-palette");
let selected = document.getElementsByClassName("color selected");
function select (event) {
    for (var i = 0; i < selected.length; i+= 1) {
        selected[i].className = "color";
    }
    event.target.className = "color selected";
}
color.addEventListener("click", select)

// Preencher as cores do pixel
let tabela = document.querySelector("#pixel-board");
tabela.addEventListener("click", function (event) {
    let selectColor = document.querySelector(".selected");
    event.target.style.backgroundColor = selectColor.innerHTML;
})

// Botão de limpar
let cleanButton = document.querySelector("#clear-board");
cleanButton.addEventListener("click", function () {
    let pixel = document.querySelectorAll(".pixel");
    tabela.style.backgroundColor = 'lightgray';
    for (var i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = "white";
    }
})

// Botão de mudar tamanho da função
let generateButton = document.querySelector("#generate-board");
let inputText = document.querySelector("#board-size");
generateButton.addEventListener("click", function(){
    if (inputText.value > 0) {
        if (inputText.value > 50) {
            inputText.value = 50;
        } else if (inputText.value < 5) {
            inputText.value = 5;
        }
    pixelsLength = inputText.value;
    tabela.innerHTML = "";
    createPixels();
    inputText.value = ""
    } else {
        alert("Board Inválido!")
    }
})

//Cores em posição aleatória
let position1 = Math.floor(Math.random() * 10);
let position2 = Math.floor(Math.random() * 10);
let position3 = Math.floor(Math.random() * 10);
document.getElementById("yellow").style.order = position1;
document.getElementById("green").style.order = position2;
document.getElementById("pink").style.order = position3;