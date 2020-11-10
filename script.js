document.querySelector('#black').className = "color selected"


let RGB =  [];


function generateRandomicRGBColors() {
 for (let index = 0; index < 3; index += 1 ) {
	let numberOfRgbColor = Math.random() * 255
	RGB[index] = parseInt(numberOfRgbColor)
 }
 return RGB
}


function setRandomColor () {
	for (let index = 1; index < 4; index += 1) {
		let RGB = generateRandomicRGBColors()
		document.querySelectorAll('.color')[index].style.background = `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`
	}
}
setRandomColor ()


const colorPalette = document.getElementById('color-palette')
colorPalette.addEventListener('click', selectColor)


function selectColor(e) {
  const color = e.target.style.backgroundColor;
	let colorSelected = document.getElementById(e.target.id)
	colorSelected.className = "color selected"

//switch (color) {
	switch (colorSelected.id) {
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
			break;
            //console.log("ops")
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

 const buttonToClear = document.getElementById('clear-board')
 buttonToClear.addEventListener('click', clearPixels )

 function clearPixels() {
	let lengthOFTable = document.getElementsByClassName('pixel').length

	for (let index = 0; index < lengthOFTable; index += 1) {
		document.getElementsByClassName('pixel')[index].style.background = "white"
	}
 }



//  Cria a tabela de forma dinamica

 let newRow = document.createElement('TR')

 let newColumn = document.createElement('TD')
 let matrix = 5;


 for (let index = 0; index < matrix; index += 1) {
	newRow = document.createElement('TR')
	document.querySelector('#table-of-pixel').appendChild(newRow)
	createLineOfTable(matrix)
 }

 function createLineOfTable (matrix) {
	let ops = document.querySelector('#table-of-pixel').lastChild
	for (let index = 0; index < matrix; index += 1){
		newColumn = document.createElement('TD')
		ops.appendChild(newColumn).className = 'pixel'
	 	}
 }


