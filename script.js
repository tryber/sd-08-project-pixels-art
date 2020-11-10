function createDiv() {
  let pallete = document.getElementById('color-palette');
  for (let i = 1; i < 5; i+=1) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    pallete.appendChild(colorDiv);
  }
}
createDiv();

function fillColor() {
  let rgb = ['black', 'red', 'green', 'blue'];
  for (let j = 0; j < rgb.length; j++) {
    let someColor = document.getElementsByClassName('color')[j];
    someColor.style.backgroundColor = rgb[j];
  }
}
fillColor();




  