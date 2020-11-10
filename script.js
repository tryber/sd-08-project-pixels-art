// //função para limpar os pixels
function limpar() {
  const botao = document.querySelector("#clear-board");
  const tabela = document.querySelectorAll(".pixel");
  botao.addEventListener("click", changeColor);
  function changeColor() {
    for (let i = 0; i < tabela.length; i++) {
      tabela[i].style.backgroundColor = "rgb(255,255,255)";
    }
  }
}
limpar();

//selecionando os ids das cores
const black = document.querySelector("#black");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
let cor = 1;

//Função para sombrear cada cor a ser selecionada
function dayMouseOver() {
  black.addEventListener("mouseover", function (event) {
    event.target.style.boxShadow = "0px 5px 15px grey";
    event.target.style.cursor = "pointer";
    event.target.style.transition = "0.2s"       
  });
  blue.addEventListener("mouseover", function (event) {
    event.target.style.boxShadow = "0px 5px 15px grey";
    event.target.style.cursor = "pointer";
    event.target.style.transition = "0.2s"
  });

  green.addEventListener("mouseover", function (event) {
    event.target.style.boxShadow = "0px 5px 15px grey";
    event.target.style.cursor = "pointer";
    event.target.style.transition = "0.2s"
  });
  yellow.addEventListener("mouseover", function (event) {
    event.target.style.boxShadow = "0px 5px 15px grey";
    event.target.style.cursor = "pointer";
    event.target.style.transition = "0.2s"
  });
}
dayMouseOver();

function dayMouseOut() {
  black.addEventListener("mouseout", function (event) {
    event.target.style.boxShadow = "";
  });
  blue.addEventListener("mouseout", function (event) {
    event.target.style.boxShadow = "";
  });
  green.addEventListener("mouseout", function (event) {
    event.target.style.boxShadow = "";
  });
  yellow.addEventListener("mouseout", function (event) {
    event.target.style.boxShadow = "";
  });
}
dayMouseOut();

//seleciona a cor desejada e adiciona a classe selected
function mouseClick (){
    black.addEventListener("click", function (event) {
        cor = 1;   
        black.className = "selected" 
        blue.className = "color" 
        green.className = "color" 
        yellow.className = "color"  
    });
    blue.addEventListener("click", function (event) {
        cor = 2
        blue.className = "selected" 
        black.className = "color" 
        green.className = "color"  
        yellow.className = "color"
    });
    green.addEventListener("click", function (event) {
        cor = 3
        green.className = "selected"
        black.className = "color" 
        blue.className = "color" 
        yellow.className = "color"
    });
    yellow.addEventListener("click", function (event) {
        cor = 4
        yellow.className = "selected"  
        black.className = "color" 
        blue.className = "color" 
        green.className = "color" 
    });
} mouseClick();


//Ao clicar em uma das cores a variável "cor" recebe um numero que será verificado na função abaixo
function setColor (){
const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', function (event) {  
    if(cor === 1){
        event.target.style.backgroundColor = "black";
    } else if (cor === 2){
        event.target.style.backgroundColor = "blue";
    } else if (cor === 3){
        event.target.style.backgroundColor = "green";
    } else if (cor === 4){
        event.target.style.backgroundColor = "yellow";
    }
  });
}
} setColor();
