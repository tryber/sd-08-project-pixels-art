let c1 = document.getElementById ('black');
let c2 = document.getElementById ('green');
let c3 = document.getElementById ('red');
let c4 = document.getElementById ('blue');
let pixelBoard = document.getElementById("pixel-board")
let limpar = document.getElementById('clear-board');






















































buttonClear.addEventListener("click", function() {
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = "white";
    }