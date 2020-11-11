window.onload = function() {
    let palletColor = document.querySelector("#color-palette");
    let pixel = document.querySelector(".pixel");

    function paintPixel (){
        pixel.style.backgroundColor = 'black';
    }

    pixel.addEventListener("click", paintPixel);
}