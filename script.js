function colorsPalete() {
  let colors = [' black', ' red', ' green', ' blue'];
  let divPaleta = document.getElementById('color-palette');

  for (i = 0; i < colors.length; i++) {
    
    let divColors = document.createElement('div');
    divPaleta.appendChild(divColors)
    divColors.className = 'color';
    divColors.className += colors[i];
  }
}
colorsPalete();

