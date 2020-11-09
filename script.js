
//Variaveis
let qtdPallet = 4;
let primeiroPallet = 'black';
let divPallet = document.querySelector('#color-palette');
let divPixel = document.querySelector('#pixel-board');
let colorSelected = primeiroPallet;

function getRandomColor() {
  //Função para gerar cor Aleatória
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  if(color == "#FFFFFF") {
    getRandomColor()
  }
  return color;
}

function criaPalette() {
  //Cria as Divs filha de color-Pallet
  for(i=1;i<=qtdPallet;i+=1) {
    let divChildPallet = document.createElement('div');
    divChildPallet.className = 'color';
    if(i == 1){
      divChildPallet.style.backgroundColor = primeiroPallet;
      divChildPallet.className = 'color selected';

    }else{
      divChildPallet.style.backgroundColor = getRandomColor();
    }
    divChildPallet.addEventListener('click', mudaCor);
    divPallet.appendChild(divChildPallet);
  }
}
criaPalette();

function criaPixel() {
  for(i=0;i<5;i+=1) {
    let divChildLinePixel = document.createElement('div');

    for(coluna=0;coluna<5;coluna +=1) {
      let divChildColPixel = document.createElement('div');
      divChildColPixel.className = 'pixel';
      divChildLinePixel.appendChild(divChildColPixel);
      divChildColPixel.addEventListener('click', preenchePixel);
    }

    divPixel.appendChild(divChildLinePixel);


  }
}
criaPixel()

function mudaCor(evt) {
  let removeSelected = document.querySelector('.selected');
  removeSelected.className = 'color';
  evt.target.className = 'color selected';

}

function preenchePixel(evt) {
  let corBG = document.querySelector('.selected').style.backgroundColor ;
  evt.target.style.backgroundColor = corBG;
}
let btnClear = document.createElement('button');
btnClear.id = 'clear-board';
btnClear.innerHTML = 'Limpar';
btnClear.addEventListener('click', limpar)
document.body.appendChild(btnClear);

function limpar() {
  let todosPixels = document.querySelectorAll('.pixel');
  for(let rmPixel = 0; rmPixel < todosPixels.length ; rmPixel+=1){
    todosPixels[rmPixel].style.backgroundColor = '#FFFFFF';
  }

}
