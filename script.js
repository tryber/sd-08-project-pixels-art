let selectedColor = document.getElementById("black");
document.querySelectorAll(".color").forEach(colorSelect);
    function colorSelect(element) {
    element.addEventListener("click", function () {
        document.querySelectorAll(".color");
    element.classList.add("selected");
        selectedColor = element;
    element.classList.remove("selected");
  });
}
let paintColor = document.querySelectorAll(".pixel");

document.querySelectorAll(".pixel").forEach(changeColor);
    function changeColor(element) {
   element.addEventListener("click", () => {
    color = window
  .getComputedStyle(selectedColor)
  .getPropertyValue("background-color");
    element.style.backgroundColor = color;
  });
}