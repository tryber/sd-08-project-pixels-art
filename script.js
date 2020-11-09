const colors = ['black', 'red', 'blue', 'green']


function paintPixelsPalette(colors) {
  let pixels = document.querySelectorAll('.color')

  for( i = 0; i < pixels.length; i++){
    let div = pixels[i]
    div.style.backgroundColor = colors[i]
  }
}
paintPixelsPalette(colors)

function createGrade () {
  let size = 5;
}
