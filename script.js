const colors = ["black", "yellow", "green", "red"];
function colorPalette () {
    let paletteLocal = document.getElementById("color-palette");
    
    for (let i = 0; i < colors.length; i += 1) {
        let colorBox = document.createElement('div');
        colorBox.className = "color";
        paletteLocal.appendChild(colorBox);

        const colorLocal = document.querySelectorAll(".color");
        colorLocal[i].style.backgroundColor = colors[i];
    }
}
colorPalette();

function createPixels (){
    for (let line = 0; line < 5; line += 1){
        let lineLocal = document.getElementById('pixel-board');
        let linePixels = document.createElement('div');
        linePixels.className = "line";
        lineLocal.appendChild(linePixels); 
        let pixelLine = document.getElementsByClassName('line')[line]; 

        for (let colum = 0; colum < 5; colum += 1){                       
            let columPixels = document.createElement('div');    
            columPixels.className = "pixel";
            pixelLine.appendChild(columPixels);
        }    
    }    
}
createPixels();

function selectedColor (){
    let colorInicial = document.querySelector(".color");
    colorInicial.className += " selected"; 
}
selectedColor();

function changeSelectedColor (){
    const colorSelected = document.querySelector("#color-palette");
    const colorLocal = document.querySelectorAll(".color");

    colorSelected.addEventListener("click", function (event){  
        for (let i = 0; i < colors.length; i += 1) {
            colorLocal[i].className = "color";           
        }
        event.target.className += " selected";
    });
}
changeSelectedColor();

function changeColorPixel (){    
    const pixelLocal = document.getElementById("pixel-board");
    pixelLocal.addEventListener("click", function (event){
        let colorSelected = document.querySelector(".selected");
        event.target.style.backgroundColor = colorSelected.style.backgroundColor;
    });
}
changeColorPixel();

function createBotton (type, text){
    const bottonLocal = document.querySelector("#clear-board");
    let botton = document.createElement(type);
    botton.innerText = text;
    bottonLocal.appendChild(botton);
}
createBotton("button", "Limpar");

function cleanPixels (){ //resolvido com ajuda de Rosiele David
    const botonLocal = document.getElementById("clear-board");
    botonLocal.addEventListener("click", function (){        
        const pixelLocal = document.querySelectorAll(".pixel");
        for (let i=0; i<pixelLocal.length; i+=1) {
            const pix = pixelLocal[i]; //foi adicionado após analisar o código de paulo-simões
            pix.style.backgroundColor = "white";
        }                       
    });
}
cleanPixels();