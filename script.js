const colors = ['black', 'red', 'blue', 'green']


function paintPixelsPalette(colors) {
  let pixels = document.querySelectorAll('.color')

  for( i = 0; i < pixels.length; i++){
    let div = pixels[i]
    div.style.backgroundColor = colors[i]
  }
}
paintPixelsPalette(colors)

function selectColor(){
  var pixels = document.querySelectorAll('.color')

  for( i = 0; i < pixels.length; i++){
    selected = Boolean;
    pixels[i].addEventListener('click', (event)=>{
      if(event.target.className === 'color selected'){
        event.target.className = 'color'
        selected = false
      }else if(event.target.className === 'color' && selected == false){
        event.target.classList.toggle('selected')
        selected = true
        wathColor()
      }
    })

    function wathColor(){
      for( i = 0; i < pixels.length; i++){
      if(pixels[i].className === 'color selected'){
        var cor = pixels[i].style.backgroundColor
        return cor
      }
    }}
  }
  return cor = wathColor()
}
selectColor()





function createGrade () {
  let size = 5;
  let board = document.getElementById("pixel-board")

  for(index = 0; index < size; index++){
    let newLine = document.createElement('div')
    newLine.className = 'line'
    board.appendChild(newLine)
    for(i = 0; i < size; i++){
      let newDiv = document.createElement('div')
      newDiv.className = 'pixel'
      newLine.appendChild(newDiv)
      newDiv.addEventListener('click', (event) => {
        event.target.style.backgroundColor = selectColor()
    })
    }
  }
}
createGrade()
