
//Variaveis
let qtdPallet = 4;
let primeiroPallet = 'black';
let divPallet = document.querySelector('#color-palette');

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
    let divChildPallet = document.createElement('div')
    divChildPallet.className = 'color';
    if(i == 1){
      divChildPallet.style.backgroundColor = primeiroPallet;
    }else{
      divChildPallet.style.backgroundColor = getRandomColor();
    }
    divPallet.appendChild(divChildPallet);
  }
}
criaPalette();
