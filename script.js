
let paletaCores = ["black", "yellow", "red", "blue"];

function cores() {

    let divPalete = document.getElementById("color-palette");
    for (let index = 0; index < 4; index += 1) {
        let divFilha = document.createElement("div");
        divFilha.className = "color";
        divFilha.style.backgroundColor = paletaCores[index];
        divPalete.appendChild(divFilha);
    }
}
cores();