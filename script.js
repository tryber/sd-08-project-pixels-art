window.onload = function() {
    //Escolha de cores da paleta.
    function setBackgroundColor(color) {
      let setColor = document.querySelectorAll(".color");
      let colors = ["black", "purple", "blue", "yellow"];
      for (let index = 0; index < setColor.length; index += 1) {
        setColor[index].style.backgroundColor = colors[index];
      }
      return color;
    }
    setBackgroundColor();
    //Quadro de pixels
    function setPixelBoard() {
      let pixelBoard = document.getElementById("pixel-board");
      let boardLine = 5;
      for (let index = 0; boardLine > index; index += 1) {
        let pixelLine = document.createElement("div");
        pixelLine.className = "pixel-line";
        pixelBoard.appendChild(pixelLine);
        let setPixelBoard = document.getElementsByClassName("pixel-line");
        for (let boardColumn = 0; boardColumn < boardLine; boardColumn += 1) {
          let pixelBoardContainer = setPixelBoard[index];
          let pixelLineBoard = document.createElement("div");
          pixelLineBoard.className = "pixel";
          pixelBoardContainer.appendChild(pixelLineBoard);
        }
      }
    }
    setPixelBoard();
    //cor preta selecionada ao iniciar o arquivo
    let thisColor = document.querySelectorAll(".color");
    thisColor[0].classList.add("selected");

    //pegar cor
    for (let index = 0; thisColor.length > index; index += 1) {
      let cor = thisColor[index];
      cor.addEventListener("click", function selectColor(event) {
        let cores = document.querySelectorAll(".color");
        for (let index = 0; cores.length > index; index += 1) {
          let cor = cores[index];
          if (cor !== event.target && cor.classList.contains("selected")) {
            cor.classList.remove("selected");
            event.target.classList.add("selected");
          }
        }
      });
    }
    //Pintar pixels
    function colorClickEvent() {
      let pixels = document.querySelectorAll(".pixel");
      for (let index = 0; pixels.length > index; index += 1) {
        let pixel = pixels[index];
        pixel.addEventListener("click", function(event) {
          let selected = document.querySelector(".color.selected");
          event.target.style.backgroundColor = selected.style.backgroundColor;
        })
      }
    }
    colorClickEvent();
    //aciona e executa função para reverter as cores
    let clearButton = document.getElementById("clear-board");
    clearButton.addEventListener("click", function revertBackground() {
      let pixels = document.querySelectorAll(".pixel");
      for (let index = 0; pixels.length > index; index += 1) {
        let pixel = pixels[index];
        pixel.style.backgroundColor = "white";
      }
    });
  }
  //funções e ideias tiradas de https://stackoverflow.com/questions/62732368/background-color-changingonclick-via-javascript-not-working e https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList https://pt.stackoverflow.com/questions/296714/adicionar-input-com-javascript e links disponibilizados no proprio readme do projeto.