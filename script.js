function colorPalette () {
    const colorLocal = document.querySelectorAll(".color");
    colorLocal[0].style.backgroundColor = "black";
    colorLocal[1].style.backgroundColor = "yellow";
    colorLocal[2].style.backgroundColor = "green";
    colorLocal[3].style.backgroundColor = "red";
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

function corInicial (){
    let pixelsLocal = document.getElementsByClassName('pixel');
    for (let i = 0; i < 25; i += 1) {
        pixelsLocal.backgroundColor = "white";
    }
}
corInicial();