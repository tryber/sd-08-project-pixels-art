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

let paleta = document.getElementsByClassName('color')

let corPaleta = document.getElementById("color-palette")


let selecionada = 'black'

function criaEvento(event) {
    let color = document.querySelector(".selected")
    color.classList.remove("selected")
    event.classList.add("selected")
    selecionada = event.style.backgroundColor
    console.log(event.style.backgroundColor)
}

corPaleta.addEventListener("click", function(event){
    let evento = event.target
    criaEvento(evento) 

})


function pintarPixel() {
    let selected = document.querySelectorAll(".pixel")
    for (let i = 0; i < selected.length; i += 1) {
        selected[i].addEventListener("click", function (event) {
            event.target.style.backgroundColor = selecionada
            console.log(selecionada)
        })
    }
}
pintarPixel()

function limpar() {
    let limpar = document.querySelector('#clear-board')
    let color = 'white'
    limpar.addEventListener('click', () => {
        const pixels = document.querySelectorAll('.pixel')
        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = color
        }
    })
}
limpar()

/*function criaDivs() {

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

function limpar() {
    let limparBotao = document.querySelector('#clear-board')
    let color = 'white'
    limparBotao.addEventListener('click', () => {
        const pixels = document.querySelectorAll('.pixel')
        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = color
        }
    })
}
limpar()*/