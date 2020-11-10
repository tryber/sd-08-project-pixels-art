document.querySelector('#black').className= "color selected"


const colorPalette = document.getElementById('color-palette')
colorPalette.addEventListener('click', selectColor)


function selectColor(e) {
  const color = e.target.style.backgroundColor;
  let colorSelected = document.getElementById(e.target.id)
  colorSelected.className = "color selected"

switch (color) {
  case 'red' :
    colorSelected.className = "color selected"
    document.querySelector('#black').className= "color"
    document.querySelector('#blue').className= "color"
    document.querySelector('#green').className= "color"
      break;
  case 'blue' :
    colorSelected.className = "color selected"
    document.querySelector('#black').className= "color"
    document.querySelector('#red').className= "color"
    document.querySelector('#green').className= "color"
		  break;
	case 'green' :
	  colorSelected.className = "color selected"
		document.querySelector('#black').className= "color"
		document.querySelector('#red').className= "color"
		document.querySelector('#blue').className= "color"
			break;
	case 'black' :
	  colorSelected.className = "color selected"
		document.querySelector('#blue').className= "color"
		document.querySelector('#red').className= "color"
		document.querySelector('#green').className= "color"
			break;
    default:
            console.log("ops")
   }
}


const pixelToPaint = document.querySelector('#pixel-board')
pixelToPaint.addEventListener('click', colorPixel)

function colorPixel(e) {
	let colorSelected = document.querySelector('#color-palette .selected')
	let colorToSet = colorSelected.style.backgroundColor
	let pixel = e.target
	pixel.style.backgroundColor = colorToSet
}
