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

function paintPixel() {
    const pixelSelected = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixelSelected.length; index += 1) {
      pixelSelected[index].addEventListener("click", function (event) {
        let colorCurrent = document.querySelector(".selected").style.backgroundColor;
        event.target.style.backgroundColor = colorCurrent;
      });
    }
  }
  paintPixel();