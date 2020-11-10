function pixelInicial() {
  let pixelInicial = document.querySelector('#black');
  pixelInicial.className = "color selected";
};
pixelInicial();

function pixelClass() {
  let pixelColor = document.querySelectorAll('.color');
  for (let i = 0; i < pixelColor.length; i += 1) {
    pixelColor[i].addEventListener('click', function(event) {
      let pixelSelected = document.querySelector(".color.selected");
      pixelSelected.className = "color";
      event.target.className = "color selected";
    })
  }
}
pixelClass()

function limpaPixels() {
  let button = document.getElementById('clear-board');
  let color = 'white';
  button.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = color;
    }
  })
}
limpaPixels()