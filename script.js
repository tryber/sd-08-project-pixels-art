// Creating color boxes without colors 
function createColorPallete(n) {
	const colorPaletteContainer = document.getElementById('color-palette');
	
	for (let index = 0; index < n; index += 1) {
        const createColorElement = document.createElement('li');
		createColorElement.className = "color";
        createColorElement.innerHTML = "color" + (index + 1);
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
createColorPaletteColors()
