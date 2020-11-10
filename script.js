let selecPixel = document.getElementById("pixel-board");
let tamanhoQuadro = 25;
function tamanhoTabuleiro() {
  for (let i = 0; i < tamanhoQuadro; i += 1) {
    selecPixel.innerHTML += "<div class='pixel'></div>";
  }
}
tamanhoTabuleiro();

function addSelecao() {
  const criandoCLasse = document.getElementsByClassName("selected");
  const selecionadas = document.querySelector("#color-palette");
  const arrSeleci = document.querySelectorAll(".color");

  selecionadas.addEventListener("click", function (event) {
    // console.log(document.querySelectorAll(".color"))

    if (event.target.className == "color selected") {
      // event.target.className = "color";
    } else if (event.target.className != "color selected") {
      //e todos outros voltram para color
      for (let i = 0; i < arrSeleci.length; i++) {
        arrSeleci[i].className = "color";
      }
      event.target.className += " selected";
    }
  });
}
addSelecao();

let cores = ["black", "red", "green", "blue"];
function addCoresPaleta(cores) {
  let classCor = document.querySelectorAll(".color");

  for (let i = 0; i < classCor.length; i += 1) {
    classCor[i].style.backgroundColor = cores[i];
    //console.log(classCor[i]);
  }
}
addCoresPaleta(cores);

function capturandoCor() {
  let classCor = document.querySelectorAll(".color");
  for (let i = 0; i < classCor.length; i += 1) {
    if (classCor[i].className == "selected") {
    } else {
      classCor[0].className = "color selected";
    }
  }

  let eleP = document.querySelector("#color-palette");

  eleP.addEventListener("click", function (event) {
    let corSalva = event.target.style.backgroundColor;

    let eleTela = document.querySelector("#pixel-board");
    eleTela.addEventListener("click", function (event) {
      event.target.style.backgroundColor = corSalva;
    });
  });
}
capturandoCor();

function corIncial(){
let x = document.querySelector("#pixel-board");
 x.addEventListener('click',function(event){
  event.target.style.backgroundColor = 'black';
 })

}
corIncial()
