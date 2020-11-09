/*
//requisito 1 - feito em JS, pena que o evaluator não aceitou :/
const titlePaletadeCores = document.createElement('h1');
const captureBody = document.querySelector('body');
//dando o id e nome para o h1 criado
titlePaletadeCores.id = 'title';
titlePaletadeCores.innerHTML = 'Paleta de Cores';
//posicionei title como filho de body
captureBody.appendChild (titlePaletadeCores);
*/

//requisito 2
const captureBody = document.querySelector('body');
//criação da div 'color-palette'
const idPaletaDeCores = document.createElement('div');
idPaletaDeCores.id = `color-palette`;
//color-palete esta como filha de 'body'
captureBody.appendChild(idPaletaDeCores);

//esse laço vai criar 4 divs e dar o nome 'color' a elas
for (let index = 0; index <= 3; index += 1) {
    let colorClass = document.createElement('div');
    colorClass.className = 'color';
    idPaletaDeCores.appendChild(colorClass);
}

//capturar a div 'color' para poder usar o laço for - getElementsByClassName gera um array, o que dispensa o laço for
const captureDivColor = document.getElementsByClassName('color');
    //requisito 3
   captureDivColor[0].style.backgroundColor = 'black';
   captureDivColor[1].style.backgroundColor = 'blue';
   captureDivColor[2].style.backgroundColor = 'green';
   captureDivColor[3].style.backgroundColor = 'orange';








