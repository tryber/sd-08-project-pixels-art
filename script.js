//Requisito 1,2 
function criaDivs() {
let paleta = document.getElementById("color-palette");

let cores = ["black", "blue", "red", "green"];


    for(let index = 0; index < cores.length; index += 1) {
        let cor = cores[index];
        let box = document.createElement("div");
        box.className = "color";
        box.style.backgroundColor = cor;
        paleta.appendChild(box);
    }
}
criaDivs();



function criaQuadro() {
    
   // let pix = document.querySelector("#pixel-board");
    

    for(let index = 0; index < 5; index += 1) {
        let pixel = document.createElement("tr");
        document.querySelector("#pixel-board").appendChild(pixel);
        pixel.className = `linha${index}`;

        for(let i = 0; i < 5; i += 1) {
            let coluna = document.createElement("td");
            document.querySelector(`.linha${index}`).appendChild(coluna);
            coluna.className = "pixel"; 
        }
    }
}
criaQuadro();
