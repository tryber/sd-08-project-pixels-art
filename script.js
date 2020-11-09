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
    console.log("Selecionou");
}
document.getElementById("color-palette").addEventListener("click",selectColor);