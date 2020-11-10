window.onload = function () {

    function firstColorSelected() {
        let selected = document.querySelector('.selected')
        let frames = document.querySelectorAll('.color')
        if (!selected) {
            frames[0].classList.add('selected')
        }
    }
    firstColorSelected()
    function ChangeColorOnClick() {

       
        let framesColor = document.querySelectorAll(".color")
    
        for (let index = 0; index < framesColor.length; index += 1) {
            framesColor[index].addEventListener('click',click)
            
        }
        function click(event){
            {   
                let selectedColor = document.querySelector(".selected")
                selectedColor.classList.remove('selected')
                event.target.classList.add('selected');
            }
        }
    
    }
    ChangeColorOnClick()
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



