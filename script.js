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

//Requisito 4
