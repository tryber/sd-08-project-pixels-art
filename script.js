let selectedColor = document.getElementById("black");
let table = document.querySelectorAll(".pixel");
let clearBoard = document.getElementById("clear-board");
let paintColor = document.querySelectorAll(".pixel");
let colorOptions = document.querySelectorAll(".color");

colorOptions.forEach(colorSelect);
    function colorSelect(element) {
    element.addEventListener("click", function () {
        colorOptions;
    element.classList.add("selected");
        selectedColor = element;
    element.classList.remove("selected");
  });
}
paintColor.forEach(changeColor);
    function changeColor(element) {
   element.addEventListener("click", () => {
    color = window
  .getComputedStyle(selectedColor)
  .getPropertyValue("background-color");
    element.style.backgroundColor = color;
  });
}
clearBoard.addEventListener("click", () => {
  for (let i = 0; i < table.length; i += 1) {
    table[i].style.backgroundColor = "white";
  }
});