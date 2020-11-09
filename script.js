window.onload = function() {
    let colorBlack = document.getElementsByClassName("black")[0];
    let colorRed = document.getElementsByClassName("red")[0];
    let colorBlue = document.getElementsByClassName("blue")[0];
    let colorGreen = document.getElementsByClassName("green")[0];
    let pixel = document.querySelectorAll(".pixel");
    let buttonClear = document.querySelector(".limpando-quadro");
    let buttonSize = document.querySelector(".aumentando-quadro");
    let inputNumber = document.querySelector(".input1");
    let mouseColor = "black";
  
  
  
    for (let i = 0; i < pixel.length; i++){
      pixel[i].addEventListener("click", function() {
        pixel[i].style.backgroundColor = mouseColor})
    };
        

    function anyColor(color) {
      mouseColor = color;
    }
  
    colorBlack.addEventListener("click",() => {
      anyColor("black");
      for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
        document.querySelectorAll(".color")[i].classList.remove("selected");
      }
      colorBlack.classList.add("selected");
      })
  
    colorRed.addEventListener("click", () => {
      anyColor(document.getElementsByClassName("red")[0].style.backgroundColor);
      for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
        document.querySelectorAll(".color")[i].classList.remove("selected");
      }
      colorRed.classList.add("selected");
    });
  
    colorBlue.addEventListener("click",() => {
      anyColor(document.getElementsByClassName("blue")[0].style.backgroundColor)
      for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
        document.querySelectorAll(".color")[i].classList.remove("selected");
      }
      colorBlue.classList.add("selected");
    });
  
    colorGreen.addEventListener("click", () => {
      anyColor(document.getElementsByClassName("green")[0].style.backgroundColor);
      for (let i = 0; i < document.querySelectorAll(".color").length; i++) {
        document.querySelectorAll(".color")[i].classList.remove("selected");
      }
      colorGreen.classList.add("selected");
    });
  
    function clearBoard() {
      for (let i = 0; i < document.querySelectorAll(".pixel").length; i++){
        document.querySelectorAll(".pixel")[i].style.backgroundColor = "white";
      }
    }
    buttonClear.addEventListener("click", clearBoard);
  
    function resizeBoard() {
      document.getElementsByClassName("body-pixel")[0].remove();
      let tb = document.createElement("tbody")
      tb.classList.add("body-pixel");
      document.getElementById("pixel-board").appendChild(tb);
      resizeLines();
      resizeColums();
      let pixel1 = document.querySelectorAll(".pixel");
      for (let i = 0; i < pixel1.length; i++){
        pixel1[i].addEventListener("click", function() {
          pixel1[i].style.backgroundColor = mouseColor})
      };
    };
    
    resizeBoard(inputNumber.value = "5");
  
    function resizeLines () {
      if(parseInt(inputNumber.value) < 5) {
        inputNumber.value = "5";
        lines();
      }
      else if(parseInt(inputNumber.value) > 50) {
        inputNumber.value = "50";
        lines();
      } else{
        lines();
      }
    }
  
    function resizeColums() {
        if(parseInt(inputNumber.value) < 5) {
          inputNumber.value = "5";
          colums();
        }
        else if(parseInt(inputNumber.value) > 50) {
          inputNumber.value = "50";
          colums();
        } else{
          colums();
        }
      }
      buttonSize.addEventListener("click", resizeBoard);
    
      function lines() {
        for (let i = 0; i < parseInt(inputNumber.value); i++) {
          let line = document.createElement("tr");
          document.getElementsByClassName("body-pixel")[0].appendChild(line.cloneNode());
        }
      }
    
      function colums() {
        for (let i = 0; i < parseInt(inputNumber.value); i++) {
          let colum = document.createElement("td");
          colum.classList.add("pixel");
          for(let j = 0; j < parseInt(inputNumber.value); j++) {
            document.getElementsByClassName("body-pixel")[0].children[i].appendChild(colum.cloneNode())
          }
        }
      }
    
    
      function getRandomRgb() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
    
      document.getElementsByClassName("red")[0].style.backgroundColor = getRandomRgb();
      document.getElementsByClassName("blue")[0].style.backgroundColor = getRandomRgb();
      document.getElementsByClassName("green")[0].style.backgroundColor = getRandomRgb();
      
    }