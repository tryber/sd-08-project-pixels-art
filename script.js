window.onload = function () {

    function firstColorSelected() {
        let selected = document.querySelector('.selected')
        let frames = document.querySelectorAll('.color')
        if (!selected) {
            frames[0].classList.add('selected')
        }
    }

    firstColorSelected()
    function changeClassOnClick() {
        let framesColor = document.querySelectorAll(".color")
        for (let index = 0; index < framesColor.length; index += 1) {
            framesColor[index].addEventListener('click', click)

        }
        function click(event) {
            {
                let selectedColor = document.querySelector(".selected")
                selectedColor.classList.remove('selected')
                event.target.classList.add('selected');
            }
        }

    }

    changeClassOnClick()

    function changeColor() {
        let pixels = document.getElementsByClassName('pixel');
        
        
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].addEventListener("click", changePixelColor)
        }
        function changePixelColor(event){
            let currentColorSelected = window.getComputedStyle(document.querySelector(".selected")).backgroundColor;
            event.target.style.backgroundColor = currentColorSelected;
        }
    }

    changeColor()

    function createClearButton(textContent){
        let buttonPosition = document.querySelector("#color-palette")
        let button = document.createElement('button')
        button.innerHTML = textContent;
        button.setAttribute('id','clear-board')
        buttonPosition.insertAdjacentElement('afterend',button);
        
        let createButton = document.getElementById('clear-board')
        createButton.addEventListener('click',ClearPixels)
        function ClearPixels (){
            let pixels = document.querySelectorAll('.pixel')
            for(let index = 0 ; index < pixels.length ; index +=1 ){
                pixel = pixels[index];
                pixel.style.backgroundColor = "white";
            }
        }
    }

    createClearButton("Limpar")
}

function createColorPallete() {
    let frames = document.querySelectorAll('.color')
    let colorClass = ['black', 'red', 'green', 'blue']
    for (let index = 0; index < frames.length; index += 1) {
        let color = colorClass[index]
        frames[index].classList.add(color);
    }
}

createColorPallete()



