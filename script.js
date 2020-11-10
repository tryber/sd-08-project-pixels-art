document.querySelector('#black').className= "color selected"


const colorPalette = document.getElementById('color-palette')
colorPalette.addEventListener('click', selectColor)


function selectColor(e) {
   //console.log(e.target.style.backgroundColor)
   const color = e.target.style.backgroundColor;
  // console.log(e.target.id)
   let colorSelected = document.getElementById(e.target.id)
  // console.log(colorSelected)
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

