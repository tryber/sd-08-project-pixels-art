const colors = ['black', 'red', 'green', 'blue'];

colors.forEach((color, index) => {
    const paletteColors = document.createElement('div');

    paletteColors.className = 'color';
    paletteColors.style.backgroundColor = color;

    document.querySelector('#color-palette').appendChild(paletteColors);
});
