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
