const corDeFundo = ["black", "green", "orange", "yellow"];


//Requisito 2 e 3
function createDivs() {
    let palette = document.getElementById("color-palette");
    
    for (let index = 0; index < corDeFundo.length; index += 1) {
        let div = document.createElement("div");
        div.className = "color";
        palette.appendChild(div);
        div.addEventListener("click", changeColor)
    }
}
createDivs();

const paints = document.getElementsByClassName("color");

function colors (){
    for (let c = 0; c < corDeFundo.length; c += 1){
        paints[c].style.backgroundColor = corDeFundo[c];
    }
    
}
colors ();

//Requisito 4 e 5
function createBoard() {
    let board = document.getElementById("pixel-board");

    for (let index = 0; index < 5; index += 1) {
        let div = document.createElement("div");
        div.className = "pixel";
        board.appendChild(div);
        
    for(let index = 0; index < 5; index += 1) {
        let div = document.createElement("div");
        div.className = "pixel-coloumn";
        board.appendChild(div);
    }    
  }  
}
createBoard();

//Requisito 6
function mousePaint(){
    paints[0].classList.add("selected");
}
mousePaint();

//Requisito 7
function changeColor(event){
    for (index = 0; index < paints.length; index += 1) {
        paints[index].className = "color";
    }
    event.target.className += " selected";
}

//Requisito 8
function paintBoard(){
    
}


//Requisito 9
function createButton (){
    let btn = document.getElementById("button");
}
createButton ();