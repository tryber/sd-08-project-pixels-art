
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
  if(color == "#FFFFFF"){
    getRandomColor()
  }
  return color;
}

function criaPalette(){
  //Cria as Divs filha de color-Pallet
  for(i=1;i<=qtdPallet;i+=1){
    let divChildPallet = document.createElement('div');
    divChildPallet.className = 'color';
    if(i == 1){
      divChildPallet.style.backgroundColor = primeiroPallet;
      divChildPallet.className = 'color selected';
    }else{
      divChildPallet.style.backgroundColor = getRandomColor();
    }
    divPallet.appendChild(divChildPallet);
  }
}
criaPalette();

function criaPixel(){
  for(i=0;i<5;i+=1){
    let divChildLinePixel = document.createElement('div');

    for(coluna=0;coluna<5;coluna +=1){
      let divChildColPixel = document.createElement('div');
      divChildColPixel.className = 'pixel';
      divChildColPixel.style.display = 'inline-block';
      divChildLinePixel.appendChild(divChildColPixel);
    }
    divPixel.appendChild(divChildLinePixel);

  }
}
criaPixel()
