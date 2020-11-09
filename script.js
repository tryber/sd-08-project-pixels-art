function preenchePalete () {
    let coresPalete = document.querySelectorAll("#color-palette div");
    for (let i=0; i<coresPalete.length; i+=1) {
        if (i===0) coresPalete[i].style.backgroundColor = "black";
        if (i===1) coresPalete[i].style.backgroundColor = "red";
        if (i===2) coresPalete[i].style.backgroundColor = "blue";
        if (i===3) coresPalete[i].style.backgroundColor = "green";
    }
}
preenchePalete();

function criaPixels () {    
    for (let i=0; i<25; i+=1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        document.getElementById("pixel-board").appendChild(pixel);
    }
}
criaPixels();

function selectColor (event) {
    let selected = document.getElementsByClassName("selected");
    selected[0].classList.remove("selected");
    event.target.classList.add("selected");
}
document.getElementById("color-palette").addEventListener("click",selectColor);

function fillPixel (event) {
    let selected = document.getElementsByClassName("selected");
    event.target.style.backgroundColor = selected[0].style.backgroundColor;
}
document.getElementById("pixel-board").addEventListener("click",fillPixel);

function clearBoard () {
    let pixels = document.getElementsByClassName("pixel");
    for (let i=0; i<pixels.length; i+=1){
        pixels[i].style.backgroundColor = "white";
    }
}
document.getElementById("clear-board").addEventListener("click",clearBoard);