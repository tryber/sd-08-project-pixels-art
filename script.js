let cores = ["black", "pink", "purple", "blue"];
let paleta = document.querySelector("#color-palette");
for (let contador = 0; contador < cores.length; contador += 1) {
    let coresInicias = document.createElement("div");
    coresInicias.className = "color";
    coresInicias.style.backgroundColor = cores[contador];
    paleta.appendChild(coresInicias);
}
paleta.children[0].className += " selected";
let quadroPixel = document.querySelector("#pixel-board");
for (let contador = 0; contador < 5; contador += 1) {
    let quadrado = document.createElement("div");
    quadroPixel.appendChild(quadrado);
    quadrado.className = "linha";
    let linha = document.querySelectorAll(".linha")[contador];
    for (let coluna = 0; coluna < 5; coluna += 1) {
        let quadrado = document.createElement("div");
        quadrado.className = "pixel";
        linha.appendChild(quadrado);
    }
}
function trocarCor() {
    paleta.addEventListener('click', outraCor)
    function outraCor(event) {
        let cores = document.querySelectorAll('.color')
        for (let element of cores) {
            element.className = 'color';
        }
        event.target.className += " selected";
    }
}
trocarCor();

function pintar() {

    let quadro = document.querySelector('#pixel-board');
    quadro.addEventListener('click', pintarPixel);
    function pintarPixel(event) {
        let cor = document.querySelector(".selected");
        event.target.style.backgroundColor = cor.style.backgroundColor;
    }
}
pintar();