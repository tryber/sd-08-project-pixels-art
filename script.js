let pixelBox = document.querySelector("#pixel-board");
//Cria 25 caixas de pixels
let boardSize = 25;
for (let index = 0; index < boardSize; index += 1) {   
let pxItem = document.createElement('div');
pxItem.className = "pixel"
pixelBox.appendChild(pxItem);
};

//Seleciona a cor na paleta / alert ("Make it so!")
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
/*function pixelColorOfSelectedPallete() {
  const pixelsBoard = document.querySelector('#pixel-board');

  pixelsBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');

    if (selectedColor !== null) {
      if (event.target.className !== 'pixel-board') {
        event.target.style.backgroundColor = selectedColor.style.backgroundColor;
      }
    }
  });
}*/
document.addEventListener('click', function(event){    
    if (event.target.classList.contains("pixel")){
        let apply = document.querySelector(".selected").style.backgroundColor;
        event.target.style.backgroundColor = apply;
    //alert ("clicou no pixel e não aconteceu nada")
    }
});

let pixels = document.querySelectorAll(".pixel")
let clearButton = document.querySelector("#clear-board")
clearButton.addEventListener('click', function(event){    
    for (let i = 0; i < pixels.length; i++){        
    pixels[i].style.backgroundColor = "white";
    }
    
});