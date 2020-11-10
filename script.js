function criaDivs() {


let paleta = document.getElementById("color-palette");

for(let index = 0; index < 4; index += 1) {
    let box = document.createElement("div");
    box.className = "color";
    paleta.appendChild(box);
}
}
criaDivs();
