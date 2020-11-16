//Requisito 2 e 3
function createDivs() {
    let palette = document.getElementById("color-palette");
    
    for (let index = 0; index < 4; index += 1) {
        let div = document.createElement("div");
        div.className = "color";
        palette.appendChild(div);
}
}
createDivs();

function colors (){
    let corDeFundo = ["black", "green", "orange", "yellow"];
    let paints = document.querySelectorAll(".color");
    
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
    let select = document.querySelectorAll(".color")[0];
    select.className = "selected";
}