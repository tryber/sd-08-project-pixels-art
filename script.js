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
  let board = document.getElementById("pixel-board")

  for(index = 0; index < size; index++){
    let newLine = document.createElement('div')
    newLine.className = 'line'
    newLine.setAttribute('onclick', 'paint()')
    board.appendChild(newLine)
    for(i = 0; i < size; i++){
      let newDiv = document.createElement('div')
      newDiv.className = 'pixel'
      newLine.appendChild(newDiv)
    }
  }
}
createGrade()

function getColor(selected) {
  selected.setAttribute('class', 'selected')
}

getColor()
function paint () {

}
