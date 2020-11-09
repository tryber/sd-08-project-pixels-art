window.onload = function () {
    qPixel(5);
  }
  const pixelBoard = document.querySelector('#pixel-board');

  //  Quadro pixel de 5
function qPixel () {
    let pixelBoard = document.querySelector('#pixel-board');
    for(let lIndex = 0; lIndex < 5; lIndex +=1){
      let lPixelBoard = document.createElement('div');
      lPixelBoard.className ='line';
      pixelBoard.appendChild(lPixelBoard);
    for(let pIndex = 0; pIndex < 5; pIndex +=1 ) {
          let pixel = document.createElement('div');
          pixel.className = 'pixel';
       lPixelBoard.appendChild(pixel);}
    } selectColor();
}
// cria botões para selecionar cor
    const btnBlack = document.querySelector('#black');
    const btnYellow = document.querySelector('#yellow');
    const btnGreen = document.querySelector('#green');
    const btnBlue = document.querySelector('#blue');
    let color = 'black';
// selecionar elementos com ajuda o Gabriel Gonçalves T8
    btnBlack.addEventListener('click', function () {
    btnBlack.classList.add('selected');
    btnYellow.classList.remove('selected');
    btnGreen.classList.remove('selected');
    btnBlue.classList.remove('selected');
    color = window.getComputedStyle(btnBlack).getPropertyValue("background-color");
    console.log(color);
    });
    btnYellow.addEventListener('click', function () {
    btnYellow.classList.add('selected');
    btnBlack.classList.remove('selected');
    btnGreen.classList.remove('selected');
    btnBlue.classList.remove('selected');
    color = window.getComputedStyle(btnYellow).getPropertyValue("background-color");
    console.log(color);
    btnGreen.addEventListener('click', function () {
    btnGreen.classList.add('selected');
    btnBlack.classList.remove('selected');
    btnYellow.classList.remove('selected');
    btnBlue.classList.remove('selected');
    color = window.getComputedStyle(btnGreen).getPropertyValue("background-color");
    console.log(color);
  });
    btnBlue.addEventListener('click', function () {
    btnBlue.classList.add('selected');
    btnBlack.classList.remove('selected');
    btnGreen.classList.remove('selected');
    btnYellow.classList.remove('selected');
    color = window.getComputedStyle(btnBlue).getPropertyValue("background-color");
    console.log(color);
  });
  });
//acrescenta cor no quadro
let board = document.getElementsByClassName('pixel');
function selectColor(){
  for(let index = 0; index < board.length; index += 1) {
    board[index].addEventListener('click', function () {
    board[index].style.backgroundColor = color;
   });
 }
}