let body = document.querySelector("body");
let div = document.createElement("div");

body.appendChild(div);
let h1 = document.createElement("h1");
h1.id = "title";
h1.innerHTML = "Paleta de Cores";
div.id = "div-palette";
div.appendChild(h1);

let ul = document.createElement("ul");
ul.id = "color-palette";
div.appendChild(ul);

for (let index=0; index<4; index++){
    let color = ["black", "green", "blue", "red"];
    let li = document.createElement("li");
    li.className = "color";
    ul.appendChild(li);

    let colorIndex = document.querySelectorAll(".color");
    colorIndex[index].style.backgroundColor = color[index];

    if (color[index] == "black"){
        li.className += " selected";
    }   
}

let divQuadro = document.createElement("div");
body.appendChild(divQuadro);

let ulQuadro = document.createElement("ul");
ulQuadro.id = "pixel-board";
divQuadro.appendChild(ulQuadro);

for (let index=0; index<25; index++){
    let liQuadro = document.createElement("li");
    liQuadro.className = "pixel";
    liQuadro.style.backgroundColor = "white";
    ulQuadro.appendChild(liQuadro);
}

let ulColor = document.querySelector("#color-palette");
let color = ulColor.childNodes;

function removeSelected(){
    for (let index=0; index<color.length; index++){
        if (color[index].className == "color selected"){
            color[index].className = "color";
        }
    }
}

function addSelected(){    
    ulColor.addEventListener("click", function(event){                     
            removeSelected();            
            event.target.className = "color selected";       
                            
    });     
}
addSelected();

let ulPixel = document.querySelector("#pixel-board");

function colorPixel(){    
    ulPixel.addEventListener("click", function(event){        
        let colorSelect = document.querySelector(".color.selected").style.backgroundColor;        
        event.target.style.backgroundColor = colorSelect;       
    });
}
colorPixel();

let button = document.createElement("button");
button.id = "clear-board";
button.innerHTML = "Limpar";

let divPalette = document.querySelector("#div-palette");
divPalette.appendChild(button);

function buttonClear(){
    button.addEventListener("click", function(event){

        let buttonPixel = document.querySelectorAll(".pixel");

        for (let index=0; index<buttonPixel.length; index++){
            buttonPixel[index].style.backgroundColor = "white";
        }        
    });
}
buttonClear();



