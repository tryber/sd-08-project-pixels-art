function preenchePalete () {
    let coresPalete = document.querySelectorAll("#color-palette div");
    for (let i=0; i<coresPalete.length; i+=1) {
        if (i===0) {
            coresPalete[i].style.backgroundColor = "black";
        } else {
            let random1 = Math.random() * 255;
            let random2 = Math.random() * 255;
            let random3 = Math.random() * 255;
            coresPalete[i].style.backgroundColor = "rgb("+ random1 + "," + random2 + "," + random3 + ")";
        }
        
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
        if (n<0) {
            alert("Número Inválido !");
        } else {
            if (n>50) n=50;
            if (n<5) n=5;
            let board = document.getElementById("pixel-board");
            board.innerHTML = "";
            board.style.width = n*42 + "px";
            board.style.height = n*42 + "px";
            criaPixels(n);
        }
    }
}
document.getElementById("generate-board").addEventListener("click",createBoard);