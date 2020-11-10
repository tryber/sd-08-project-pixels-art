// Creating color boxes without colors 
function createColorPallete(n) {
	const colorPaletteContainer = document.getElementById('color-palette');
	
	for (let index = 0; index < n; index += 1) {
        const createColorElement = document.createElement('li');
		createColorElement.className = "color";
        colorPaletteContainer.appendChild(createColorElement);
	};
};
createColorPallete(4);

// Coloring palette boxes
function createColorPaletteColors() {
    const colorPalette = document.querySelectorAll('.color');
    const colorsArray = ['black', 'blue', 'green', 'yellow'];

    for (let index = 0; index < colorPalette.length; index +=1) {
        colorPalette[index].style.backgroundColor = colorsArray[index];
        colorPalette[index].style.color = colorsArray[index];
    };
};
createColorPaletteColors();

// Creating white pixel board
function createPixelBoard(number) {
	const pixelBoardContainer = document.getElementById('pixel-board');

	for (let index1 = 0; index1 < number; index1 += 1) {
		const createPixelElement = document.createElement('li');
		createPixelElement.className = "pixel";
        createPixelElement.style.backgroundColor = 'white';
        createPixelElement.style.color = 'white';
		pixelBoardContainer.appendChild(createPixelElement);
	};
};

createPixelBoard(25);

// Selecting first color (black) as default
// function defaultColor() {
// 	var colors = document.getElementsByClassName('color');

// 	const initialColor = colors[0];

// 	initialColor.className += ' selected';
// };
// defaultColor();

// Selectig any color from color palette; black as default
const colors = document.querySelectorAll('.color');
colors[0].classList.add('selected');

colors.forEach(color => color.addEventListener('click', selectColor));

function selectColor(event) {
  console.log('Clicked on color:', this.style.backgroundColor);
  for (let index = 0; index < colors.length; index += 1) {
    const color = colors[index];
    if (color !== event.target && color.classList.contains('selected')) color.classList.remove('selected');
    event.target.classList.add('selected');
  };
};

