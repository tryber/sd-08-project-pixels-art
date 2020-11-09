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
    for (let colum = 0; colum < 5; colum += 1){
        let pixelColum = document.getElementById('pixel-board');
        let tdPixels = document.createElement('td');
        pixelColum.appendChild(tdPixels); 
        let pixelLine = document.getElementsByTagName('td')[colum]; 

        for (let line = 0; line < 5; line += 1){                       
            let trPixels = document.createElement('tr');    
            trPixels.className = "pixel";
            pixelLine.appendChild(trPixels);
        }    
    }    
}
createPixels();

function selectedColor (){
    let colorInicial = document.querySelector("color");
}