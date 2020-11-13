//requisito 6
window.onload = function () {
    const addClassSelected = document.querySelectorAll('.color')[0];
    addClassSelected.classList.add('selected')
};

//requisito 2 - criando as 4 divs 'color'
const captureDivColorPalette = document.getElementById('color-palette')
for (let index = 0; index <= 3; index += 1) {
    let colorClass = document.createElement('div');
    colorClass.className = 'color';
    captureDivColorPalette.appendChild(colorClass);
}

//requisito 2 - função responsável por colorir
function toColorDiv (color) {
    const captureDivColor = document.getElementsByClassName('color');
    //laço responsável por distribuir as cores do array recebido e a 'div - color' criada na primeira parte do requisito 2
    for (let index = 0; index < captureDivColor.length; index += 1) {
        let toColor = captureDivColor[index]
        toColor.style.backgroundColor = color[index];
    }
}
toColorDiv(['black', 'green', 'blue', 'orange']);

//requisito 4 
//elemento 'pai' de 'pixel'
const captureIdPixelBoard = document.getElementById('pixel-board');
//laço responsável por criar 25 divs com id 'pixel'
for (let index = 1; index <= 25; index += 1) {
    let createIdPixel = document.createElement('div');
    createIdPixel.className = 'pixel';
    captureIdPixelBoard.appendChild(createIdPixel);
}

//requisito 7

const captureClassColor = document.querySelectorAll('.color');
//foi necessário criar esse laço para pegar os elementos da 'classe color' pq se colocasse a classe color direto para criar o evento o console do navegador acusava erro
for (index = 0; index < captureClassColor.length; index += 1) {
    let liColor = captureClassColor[index]
    liColor.addEventListener('click', selectClass);
}
function selectClass (event) {  
       
    const selectedClass = document.getElementsByClassName('selected')[0];
    selectedClass.classList.remove('selected');
    event.target.classList.add('selected');
    
}





/*
const captureClassColor = document.querySelectorAll('.color');
captureClassColor[3].addEventListener('click', teste)
let a = ''

function teste () {
    console.log('dfv')
}
teste ();

*/


    
    








    












