function firstColorSelected(){
  document.querySelectorAll(".color")[0].classList.add("selected");
}

//creation of the divs in the color palette.
function createDivColor() {
  let divColor = document.getElementById("color-palette");
  for (let i = 0; i < 4; i += 1) {
    let divChild = document.createElement("div");
    divChild.className = "color";
    let colors = ["black", "yellow", "green", "blue"];
    divChild.style.backgroundColor = colors[i];
    divColor.appendChild(divChild);
  }
}
createDivColor();
firstColorSelected();
//creation of the pixels in the pixels board.
function createSquaresBox() {
  const squareBox = document.getElementById("pixel-board");
  for (let line = 0; line < 5; line += 1) {
    // number of lines
    const row = document.createElement("div");
    for (let column = 0; column < 5; column += 1) {
      // number of pixels
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      row.appendChild(pixel); //Pixel são filhos da linha.
    }
    squareBox.appendChild(row); //As linhas são filhas do Pixel-board.
  }
}
createSquaresBox();
//creation creation of the function that selects the colors to be changed on the pixel board.

//recovery colors in the HTML.
let arrColors = document.querySelectorAll(".color");
for(let i in arrColors){
  let colorsElement = arrColors[i]; 
  colorsElement.addEventListener("click",function(event){
    
    for(let i=0; i < arrColors.length; i+=1){
      arrColors[i].classList.remove("selected")
    }
    colorsElement.classList.add("selected");
  });   
} //scrolling through variable array colors and adding event click.
  