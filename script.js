let quadroDePixel = document.getElementById('pixel-board');

// Gera os pixels do quadro principal
function populaQuadroDePixels(){
    for(let indiceArrayA = 0; indiceArrayA < 5; indiceArrayA += 1){
        let criaPixel = document.createElement('div');
        quadroDePixel.appendChild(criaPixel);
    
        for(let indiceArrayB = 0;indiceArrayB < 5; indiceArrayB += 1){
            let criaPixel = document.createElement('div');
            quadroDePixel.appendChild(criaPixel);
            criaPixel.className = 'pixel';
        }
    }
}
let cor = document.getElementsByClassName('color');
populaQuadroDePixels();

// Torna o preto como cor pre-selecionada no quadro de cores
function selecionandoCorPreta(){
    cor[0].classList.add('selected');
}

selecionandoCorPreta();

function mudaCor(param){
    for(let indiceArrayC = 0; indiceArrayC < cor.length; indiceArrayC += 1){
        cor[indiceArrayC].classList.remove('selected');
        param.target.classList.add('select');
        cor[indiceArrayC] = param.target;
    }
}

function clique(){
    for(const cor1 of cor){
        cor1.addEventListener('click', mudaCor);
    }
}

clique();

function escolhendoACor(){
    const corSelecionada = document.getElementsByClassName('pixel');
    for(let indiceArrayD = 0; indiceArrayD < corSelecionada.length; indiceArrayD += 1){
        corSelecionada[indiceArrayD].addEventListener('click', function (param){
        let pegaCor = window.getComputedStyle(
            document.querySelector('.color.selected')
        ).backgroundColor;
        param.target.style.backgroundColor = pegaCor;
        });
    }
}

escolhendoACor();

function resetaPixel(){
    let botao = document.getElementById('clear-board');
    botao.addEventListener('click', () => {
        let selecionaCor = document.getElementsByClassName('pixel');
        for(let pixel of selecionaCor){
            pixel.style.backgroundColor = 'white';
        }
    })
}
resetaPixel();