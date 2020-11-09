window.onload = function () {
  const pixel = document.getElementsByClassName('color');
  const colors = ['black', 'blue', 'red', 'yellow'];

  function setupColorPalette() {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = colors[i];
    }
  }
  setupColorPalette();

  function selectColor(color) {
    for (let i = 0; i < pixel.length; i += 1) {
      if (pixel[i].style.backgroundColor === color) {
        pixel[i].classList.add('selected');
      }
    }
  }
  selectColor('black');

  function eventPalette() {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', function () {
        const colorSelected = document.querySelector('.selected');
        colorSelected.classList.remove('selected');
        pixel[i].classList.add('selected');
      });
    }
  }
  eventPalette();
};
