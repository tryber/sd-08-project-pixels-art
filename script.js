let pixelBox = document.querySelector("#pixel-board");
//Cria 25 caixas de pixels
let boardSize = 25;
for (let index = 0; index < boardSize; index += 1) {   
let pxItem = document.createElement('div');
pxItem.className = "pixel"
pixelBox.appendChild(pxItem);
};

//Seleciona a cor na paleta
let colors = document.querySelectorAll(".color");
for (let i = 0; i< colors.length; i++){
    let  pallet = colors[i];
    pallet.addEventListener('click', function(event){
        let selectedColor = document.querySelector(".selected");
        if (pallet.className === "color" ){
        if (selectedColor !== null){
            selectedColor.classList.remove("selected")
        }          
            event.target.classList.add("selected")
        }
    })
}
//Deixar a cor preta já selecionada para pintar os pixels
let blackPallet = document.querySelector("#black-pallete")
blackPallet.className = "color selected"

//Pinta os pixels
/**/
document.addEventListener('click', function(event){    
    if (event.target.classList.contains("pixel")){
        let colorSelected = document.querySelector(".selected");
        let apply = window.getComputedStyle(colorSelected).getPropertyValue("background-color");
        event.target.style.backgroundColor = apply;
        console.log(apply);
    //alert ("clicou no pixel e não aconteceu nada")
    }
});

let pixels = document.querySelectorAll(".pixel")
let clearButton = document.querySelector("#clear-board")
clearButton.addEventListener('click', function(event){    
    for (let i = 0; i < pixels.length; i++){        
    pixels[i].style.background = "white";
    }    
});