let pixelBox = document.querySelector("#pixel-board");
//Cria 25 caixas de pixels
let boardSize = 25;
for (let index = 0; index < boardSize; index += 1) {   
let pxItem = document.createElement('div');
pxItem.className = "pixel"
pixelBox.appendChild(pxItem);
};


let blackPallet = document.querySelector("#black-pallete")
blackPallet.className = "color selected"

let colors = document.querySelectorAll(".color");
//Seleciona a cor na paleta / alert ("Make it so!")
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

//document.querySelector("black-pallete") = 
//Pinta os pixels
document.addEventListener('click', function(event){    
    if (event.target.classList.contains("pixel")){
        let apply = document.querySelector("selected").style.backgroundColor;
        event.target.style.backgroundColor = apply;
        //alert ("clicou no pixel e não aconteceu nada")
    }
});