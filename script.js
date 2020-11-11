
let paletaCores = ["black", "yellow", "red", "blue"];

function cores() {

    let divPalete = document.getElementById("color-palette");
    for (let index = 0; index < 4; index += 1) {
        let divFilha = document.createElement("div");
        divFilha.className = "color";
        divFilha.style.backgroundColor = paletaCores[index];
        divPalete.appendChild(divFilha);
    }
}
cores();

// quadro de pixels com 25 pixels

function criaPixels() {
    
   let divBoard = document.querySelector('#pixel-board');
   for (let index = 0; index < 5; index += 1) {
        
        let divPixel = document.createElement("div");

        divBoard.appendChild(divPixel);
        divPixel.style.backgroundColor = "white";
         
        
        for (let index = 0; index < 5; index += 1) {

           let divPixel = document.createElement("div");
           divPixel.className = "pixel";
           divBoard.appendChild(divPixel);
        }
    }

}
criaPixels()
