window.onload = function(){
        function createColorPallete() {
            let getFrames = document.querySelectorAll('.color')
            let colorClass = ['black', 'red', 'green', 'blue']
            for (let index = 0; index < getFrames.length; index += 1)
            {   let color = colorClass[index]
                getFrames[index].classList.add(color);
            }
        }

        createColorPallete()
    }
