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

function criaPixels (n) {    
    for (let i=0; i<n*n; i+=1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        document.getElementById("pixel-board").appendChild(pixel);
    }
}
criaPixels(5);

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

function createBoard () {
    let input = document.querySelector("#board-size");
    if (input.value === ""){
        alert("Board inválido!")
    } else {
        let n = parseInt(input.value);
        if (n > 50 || n<5) {
            alert("Número Inválido ! Digite um número entre 5 e 50");
        } else {
            let board = document.getElementById("pixel-board");
            board.innerHTML = "";
            board.style.width = n*42 + "px";
            board.style.height = n*42 + "px";
            criaPixels(n);
        }
    }
}
document.getElementById("generate-board").addEventListener("click",createBoard);