/*function criaDivs() {
    let paleta = document.getElementById ("color-palette")
    let cores  = ["black", "blue", "red", "green"]
    
        for (let i = 0; i < cores.length; i += 1) {
            let cor =cores[i]
            let box =document.createElement("div")
            box.addEventListener("click", function() {
                box.classNAme = "color selected"
            })
            box.className = "color"
            box.style
        }

}*/

let pixel = document.querySelector('#pixel-board')

function criaPixel() {
    for (let coluna = 0; coluna < 5; coluna += 1) {

        for (let linha = 0; linha < 5; linha += 1) {
            let px = document.createElement('div')
            px.className = 'pixel'
            pixel.appendChild(px)
        }
    }
} 

criaPixel()

window.onload = function() {
    document.getElementById('black').classList.add('selected')
}



let selecionada = 'black'

function pintarPixel() {
    let selecionado = document.querySelectorAll(".pixel")
    for (let i = 0; i < selecionado.length; i += 1) {
        selecionado[i].addEventListener("click", function (event) {
            event.target.style.backgroundColor = selecionada
        })
    }
}
pintarPixel ()