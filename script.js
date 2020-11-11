window.onload = iniciaPreto;

function iniciaPreto() {
    let preto = document.getElementsByClassName('color')[0];
    preto.classList.add('selected');
}



function selector (event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected');
    event.target.classList.add('selected');
}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selector);



function pintaPixel () {
    const pixels = document.querySelectorAll('.pixel');

    
    for (let i = 0; i < pixels.length; i++) {

        pixels[i].addEventListener('click', function(event) {
            let color = document.querySelector('.selected').getElementsByClassName.backgroundColor;
            event.target.style.backgroundColor = color;
        });
        
    }

    

}

pintaPixel();

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', limparPixels);

function limparPixels() {
    const pixelsBox = document.querySelectorAll('.pixel')
    pixelsBox.forEach((element) {
        element.style.backgroundColor = "white";
      });
    }



