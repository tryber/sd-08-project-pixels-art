let pixelBox = document.querySelector("#pixel-board");
//Cria 25 caixas de pixels
let boardSize = 25;
for (let index = 0; index < boardSize; index += 1) {   
let pxItem = document.createElement('div');
pxItem.className = "pixel"
pixelBox.appendChild(pxItem);
};


let color = document.querySelectorAll(".color");

for (let i = 0; i< color.length; i++){
    let  pallet = color[i];
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

/*document.addEventListener('click', function(event){
    //Seleciona a cor na paleta / alert ("Make it so!")
    if (event.target.classList.contains("color")){
        selectedColor[0].className = "color"
        event.target.classList.add("selected");           
        
        console.log(selectedColor)            
    }
    //Pinta os pixels
    else if (event.target.classList.contains("pixel")){
        event.target.style.background = selectedColor.style.background;
    }
});*/