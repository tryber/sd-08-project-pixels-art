function createDiv() {
  let pallete = document.getElementById('color-palette');

  for (let i = 1; i < 5; i+=1) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    pallete.appendChild(colorDiv);
  }
}
createDiv();




  