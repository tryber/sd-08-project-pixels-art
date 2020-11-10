let createPixels = () => {
  for (let i = 0; i < 25; i += 1) {
    let board = document.querySelector("#pixel-board");
    let pixel = document.createElement("div");
    pixel.className = "pixel";

    board.appendChild(pixel);
  }
};

createPixels();

const colorList = document.querySelectorAll(".color");

const black = document.querySelector(".black");
black.classList.add("selected");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");

black.style.backgroundColor = "black";
red.style.backgroundColor = "red";
blue.style.backgroundColor = "blue";
green.style.backgroundColor = "green";

let removeSelectedClass = () => {
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove("selected");
  }
};

let selectedColor = () => {
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].classList.contains("selected")) {
      return colorList[i].style.backgroundColor;
    }
  }

  return "";
};

selectedColor();

let palette = document.querySelector("#color-palette");

let selectColor = (event) => {
  if (event.target.className != "selected") {
    removeSelectedClass();

    event.target.classList.add("selected");
  }
};

palette.addEventListener("click", selectColor);
