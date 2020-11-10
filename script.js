let body = document.querySelector("body");
let div = document.createElement("div");

body.appendChild(div);
let h1 = document.createElement("h1");
h1.id = "title";
h1.innerHTML = "Paleta de Cores";
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
            if (event.target.className !== "color selected"){
                event.target.className = "color selected";
                let oi = event.target.style.backgroundColor;
                colorPixel(oi);
            }            
                            
    });     
}
addSelected();

let ulPixel = document.querySelector("#pixel-board");
let colorSelect = document.querySelector(".color.selected").style.backgroundColor;

function colorPixel(oi){

    ulPixel.addEventListener("click", function(event){

        event.target.style.backgroundColor = oi;       

    });
}



console.log(colorSelect);
