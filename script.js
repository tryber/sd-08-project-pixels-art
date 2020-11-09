const black = document.querySelector(".black");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");

black.addEventListener("click", changeSelector)
blue.addEventListener("click", changeSelector)
pink.addEventListener("click", changeSelector)
yellow.addEventListener("click", changeSelector)

function changeSelector() {
    black.classList.remove("selected")
    blue.classList.remove("selected")
    pink.classList.remove("selected")
    yellow.classList.remove("selected")

    this.classList.add("selected")
}

const pixel = document.querySelectorAll(".pixel")

for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener("click", changeColor)
}

function changeColor() {
    let selected = window.getComputedStyle(document.querySelector(".selected")).backgroundColor;
    
    this.style.backgroundColor = selected;
}

const button = document.querySelector(".button")

button.addEventListener("click", clearColors);

function clearColors() {
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = "white";
    }
}