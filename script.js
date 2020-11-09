window.onload = function() {
  let pixelInicial = document.querySelector('#black');
  pixelInicial.className = "color selected";
  pixelClass()
};

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
  