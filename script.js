let board = document.querySelector("#pixel-board");

let boardSide = 5;

let inputValue = () => {
  const input = document.querySelector("#board-size");
  boardSide = input.value;

  if (boardSide >= 1 && boardSide <= 5) {
    boardSide = 5;
  } else if (boardSide > 50) {
    boardSide = 50;
  }
};

let generateBoardColumns = (n) => {
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement("div");
    div.className = "pixel";

    board.lastElementChild.appendChild(div);
  }
};

let generateBoardLines = (n) => {
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement("div");

    board.appendChild(div);

    generateBoardColumns(n);
  }
};

generateBoardLines(5);

let removeBoard = () => {
  const oldBoard = board.children;

  for (let i = 0; oldBoard[i]; i) {
    board.removeChild(oldBoard[i]);
  }
};

const generateButton = document.querySelector("#generate-board");

let generateNewBoard = () => {
  removeBoard();

  if (boardSide > 0) {
    generateBoardLines(boardSide);
  } else {
    generateBoardLines(5);
  }
};

function checkInputValue() {
  inputValue();

  if (!boardSide) {
    alert("Board inválido!");
  }

  generateNewBoard();
}

generateButton.addEventListener("click", checkInputValue);

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

let palette = document.querySelector("#color-palette");

let selectColor = (event) => {
  if (event.target.classList.contains("color")) {
    if (event.target.className != "selected") {
      removeSelectedClass();

      event.target.classList.add("selected");
    }
  } else {
    return;
  }
};

palette.addEventListener("click", selectColor);

let selectedColor = () => {
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].classList.contains("selected")) {
      return colorList[i].style.backgroundColor;
    }
  }

  return "";
};

let boardColors = (event) => {
  const color = selectedColor();

  event.target.style.backgroundColor = color;
};

board.addEventListener("click", boardColors);

let button = document.querySelector("#clear-board");
let pixel = document.querySelectorAll(".pixel");

let clearBoard = () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
};

button.addEventListener("click", clearBoard);
