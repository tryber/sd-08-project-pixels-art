// var c1 = document.getElementById ('black');
// var c2 = document.getElementById ('green');
// var c3 = document.getElementById ('red');
// var c4 = document.getElementById ('blue');

// let pixelBoard = document.getElementById("pixel-board")
// let limpar = document.getElementById('clear-board');


window.onload = function () {
  let selectedColor = 'black';
  document.getElementById('black').style.backgroundColor = 'black';
  document.getElementById('green').style.backgroundColor = 'green';
  document.getElementById('red').style.backgroundColor = 'red';
  document.getElementById('blue').style.backgroundColor = 'blue';

  function colorChange () {
      const oldPixelSelected = document.querySelector('.selected');
      const currentPixelSelected = event.target;
      oldPixelSelected.classList.remove('selected');
      currentPixelSelected.classList.add('selected');
      selectedColor = currentPixelSelected.style.backgroundColor;
  }   
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', colorChange);

  function changeFrame () {
    event.target.style.backgroundColor = selectedColor;
}
const pixelFrame = document.querySelector('#pixel-board');
pixelFrame.addEventListener('click', changeFrame);
}


// window.onload=function(){

//   localStorage.clear();
//   localStorage.setItem("selected-color", "black");
//   changeColor("green");
//   changeColor("red");
//   changeColor("blue");

// }

// function escolherCor(color){
//   localStorage.setItem("selected-color", color);	
//   let pegarCor = document.getElementsByClassName("color")  
//   for (i = 0; i < pegarCor.length; i += 1){
//     pegarCor[i].classList.remove("selected")
//   }
//   button.classList.add("selected")
// }



//   let corPreta = document.getElementById("black");
//   corPreta.addEventListener("click", function(){
//       selectColor(corPreta,"black");
//   }
//   )

//   let corVerde = document.getElementById("green");
//   corVerde.addEventListener("click", function(){
//       let corVerde = document.getElementById("green");
//       selectColor(corVerde, corVerde.style.backgroundColor);
//   }
//   )
  
//   let corVermelha = document.getElementById("red");
//   corVermelha.addEventListener("click", function(){
//       let corVermelha = document.getElementById("red");
//       selectColor(corVermelha, corVermelha.style.backgroundColor);
//   }
//   )

//   let corAzul = document.getElementById("blue");
//   corAzul.addEventListener("click", function(){
//     let corAzul = document.getElementById("blue");
//     selectColor(corAzul, corAzul.style.backgroundColor);
//   }
//   )

//   function colocarCor(pixel, color){
//     pixel.style.backgroundColor = color;
// }










  // // Criação dos itens da paleta (divs)
  // // function createPalletItem(color) {
  // //   let palletColorDiv = document.createElement('div');
  // //   palletColorDiv.style.backgroundColor = color;
  // //   palletColorDiv.className = 'color';
  // //   palletColorDiv.addEventListener('click', handlePalletColorEvent);
  // //     if (color === '#000') {
  // //       palletColorDiv.classList.add('selected');
  // //     }
  // //   return palletColorDiv;
  // // }
  
  // // Quando clica, add o selected e retira da cor antiga
  // function handlePalletColorEvent(event) {
  //   let oldSelectedDiv = document.querySelector('.selected');
  //   let currentSelectedDiv = event.target;
  
  //   oldSelectedDiv.classList.remove('selected');
  //   currentSelectedDiv.classList.add('selected');
  //   selectedColor = currentSelectedDiv.style.backgroundColor;
  // }

  
  // // Pintando o quadro
  // let pixelBoardDiv = document.querySelector('#pixel-board');
  // pixelBoardDiv.addEventListener('click', handlePixelClick);
  
  // function handlePixelClick(event) {
  //   let selectedPixelDiv = event.target;
  //   selectedPixelDiv.style.backgroundColor = selectedColor;
  // }
  
 

