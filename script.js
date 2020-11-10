function alteraCorSelecionado(){
    const pixelsColorSelect = document.getElementsByClassName("selected");
    for(let pixelColorSelect of pixelsColorSelect){
        pixelColorSelect.classList.remove("selected");
    };
    event.target.classList.add("selected");
};

function colorePixel(){
    const pixelsColorSelect = document.getElementsByClassName("selected");
    const backgroundColor = window.getComputedStyle(pixelsColorSelect[0]).getPropertyValue("background-color");
    event.target.style.backgroundColor = backgroundColor;
};

window.onload = () => { 
 
 let pixelsColorSelect = document.getElementsByClassName("color");
 for(let pixelColorSelect of pixelsColorSelect){
     pixelColorSelect.onclick = alteraCorSelecionado;
 };
 let pixels = document.getElementsByClassName("pixel");
 for(let pixel of pixels){
     pixel.onclick = colorePixel;
 };
 
};
