window.onload = function() {
    colorOptions[0].style.backgroundColor = "black";
    colorOptions[1].style.backgroundColor = "red";
    colorOptions[2].style.backgroundColor = "blue";
    colorOptions[3].style.backgroundColor = "yellow";
    
}





function createPixelBox() {
  for (let index = 0; index < 25; index += 1) {
    let pixelBox = document.createElement("div");
    pixelBox.className = "pixel";
    document.getElementById("pixel-board").appendChild(pixelBox);
  }
}
createPixelBox();

let colorOptions = document.querySelectorAll('.color');
let selectedColor = "black";
const colorPicker = document.getElementById("color-palette");
colorPicker.addEventListener ('click', function (event) {
    if (event.target.className == "color") {
        for (let index = 0; index < colorOptions.length; index += 1) {
            colorOptions[index].className = "color";
        }
        event.target.className = "color selected";
        if (event.target.className == "color selected");
        selectedColor = event.target.style.backgroundColor;
        console.log(selectedColor);
    }
})

let pixelBox = document.getElementById("pixel-board");
pixelBox.addEventListener ('click', function (event) {
    event.target.style.backgroundColor = selectedColor;
})

let pixelElements = document.querySelectorAll('.pixel');
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener ('click', function (){
    for (let index = 0; index < pixelElements.length; index += 1) {
        pixelElements[index].style.backgroundColor = 'white';
    }

})

