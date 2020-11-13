let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;


let selectedColor = document.getElementById('#strt-color');
const paletteColors = document.querySelectorAll('.color');

function switchSelectedColor(event) {
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
  selectedColor = event.target;
}

for (const colorInPalette of paletteColors) {
  colorInPalette.addEventListener('click', switchSelectedColor);
}
