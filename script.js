let pixelBox = 5;
function createLines () {
    let divMother = document.querySelector('#pixel-board');    
    for (let i = 0; i < pixelBox; i +=1) {
        let divNova = document.createElement('div');
        divNova.id = 'line'; 
        divMother.appendChild(divNova);
    }
}
createLines();

function createPixels () {    
    let divlPixelBoard = document.querySelectorAll('#line');
    for (let i = 0; i < divlPixelBoard.length; i +=1) {
        for (let j = 0; j < divlPixelBoard.length; j +=1){
            let divPixel = document.createElement('div');
            divPixel.className = 'pixel';
            divlPixelBoard[i].appendChild(divPixel);
        }
    }
}
createPixels();

window.onload = function () {
    document.querySelectorAll('.color')[0].classList.add('selected');    
    document.querySelectorAll('.color')[0].style.background = 'black'; 
    document.querySelectorAll('.color')[1].style.background = generateRandomColor();
    document.querySelectorAll('.color')[2].style.background = generateRandomColor();
    document.querySelectorAll('.color')[3].style.background = generateRandomColor();    
}

for (let index = 0; index < document.querySelectorAll('.color').length; index += 1){
    document.querySelectorAll('.color')[index].addEventListener('click', function eventColorClick () {    
        for (let i = 0; i < document.querySelectorAll('.color').length; i+=1) {
            if (i !== index) {                
                document.querySelectorAll('.color')[i].classList.remove('selected');
            }
            if (document.querySelectorAll('.color')[index].classList.contains('selected')) {
            } else {
                document.querySelectorAll('.color')[index].classList.add('selected');
            }            
        }    
    }); 
}

 
document.querySelector('#generate-board').addEventListener('click', function inputValue(){    
    if (document.querySelector('#board-size').value == '') {
        alert("Board inválido!");
    }    
    if (document.querySelector('#board-size').value < 5) {
        document.querySelector('#board-size').value = 5;
    } 
    if (document.querySelector('#board-size').value > 50) {
        document.querySelector('#board-size').value = 50; 
    }
    document.body.removeChild(document.getElementById('pixel-board'));
    let divNova = document.createElement('div');
    divNova.id = 'pixel-board';  
    document.body.appendChild(divNova);
    pixelBox = document.querySelector('#board-size').value;    
    createLines();
    createPixels();
    changeColorPixel();
});

function changeColorPixel() {
    for (let index2 = 0; index2 < document.querySelectorAll('.pixel').length; index2 +=1){
        document.querySelectorAll('.pixel')[index2].addEventListener('click', function  (event) {
            event.target.style.background = document.querySelector('.selected').style.background;
        });
    }
}
changeColorPixel();

document.querySelector('#clear-board').addEventListener('click', function clearPixel() {
    for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
        document.querySelectorAll('.pixel')[i].style.background = '';
    }
});

// FUNÇÃO RETIRADA DO https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);     
    return randomColor;    
}