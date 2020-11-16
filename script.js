let paletaCores = ["black", "yellow", "red", "blue"];
//let selecionaCor = document.getElementsByClassName('color');

function cores() {
  let divPalete = document.getElementById("color-palette");
  for (let index = 0; index < 4; index += 1) {
    let divFilha = document.createElement("div");
    divFilha.className = "color";
    divFilha.style.backgroundColor = paletaCores[index];
    divPalete.appendChild(divFilha);
  }

  
  let preto = document.querySelectorAll(".color");
  preto[0].classList.add("selected");

  for (let index = 0; index < preto.length; index += 1) {
    //preto[index].style.backgroundColor = paletaCores[index];
    preto[index].addEventListener("click", function (event) {
      let remover = document.querySelectorAll(".selected");
      for (let index = 0; index < remover.length; index += 1) {
        remover[index].classList.remove("selected");
      }
      event.target.classList.add("selected");
    });
  }

}
cores();

let board = document.getElementById("pixel-board");
board.addEventListener("click", function (event) {
  let varSelected = document.querySelector(".selected");
  event.target.style.backgroundColor = varSelected.style.backgroundColor;
})






//function primeiraCor() {
  //selecionaCor[0].classList.add('selected');
//}
//primeiraCor();


//function pintarPixel(event) {
    
    //for(let index = 0; index < selecionaCor.length; index += 1){
      //selecionaCor[index].classList.remove('selected');
      //event.target.classList.add('selected');
      //selecionaCor[index] = event.target;
    //}
  
     
//}

//pintarPixel();



// quadro de pixels com 25 pixels

function criaPixels() {
  let divBoard = document.querySelector("#pixel-board");
  for (let index = 0; index < 5; index += 1) {
    let divPixel = document.createElement("div");
    divBoard.appendChild(divPixel);

    for (let index = 0; index < 5; index += 1) {
      let divPixel = document.createElement("div");
      divPixel.className = "pixel";
      divBoard.appendChild(divPixel);
    }
  }
}
criaPixels();

// ### 6 - Ao carregar a página, a cor **preta** da paleta já deve estar selecionada para pintar os pixels.
//criar botão na cor preta que tem função de pintar o background de preto;

//##### As seguintes verificações serão feitas:

//- O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

//- Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.
