function paintPixels(){
  let colors = ['black', 'red', 'blue', 'green']
  let colotPalette = document.querySelectorAll('.color')

  for(let index= 0; index <= colotPalette.length; index++){
    let div = colotPalette[index]

    div.style.backgroundColor = colors[index]
  }

}

paintPixels()
