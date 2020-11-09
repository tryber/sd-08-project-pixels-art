function colorPalette () {
    const colorLocal = document.querySelectorAll(".color");
    colorLocal[0].style.backgroundColor = "black";
    colorLocal[1].style.backgroundColor = "yellow";
    colorLocal[2].style.backgroundColor = "green";
    colorLocal[3].style.backgroundColor = "red";
}
colorPalette();

function createPixels (){
    for (let i = 0; i < 25; i += 1){
        let pixelLocal = document.getElementById('pixel-board');
        let divPixels = document.createElement('div');
        divPixels.className = "pixel";
        divPixels.backgroundColor = "white";
        pixelLocal.appendChild(divPixels);
    }
}
createPixels();