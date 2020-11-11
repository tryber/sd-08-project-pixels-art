function creatColorPalette() {
    const colors = ['black', 'red', 'green', 'blue'];
    const colorPaletteList = document.getElementById("color-palette-list");
    
    for (index = 0; index < colors.length; index += 1) {
        const color = document.createElement('li');
        color.className = 'color';
        color.style.display = 'inline-block';
        color.style.width = '40px';
        color.style.height = '40px';
        color.style.border = 'solid 1px #000';
        color.style.background = colors[index];
        
        colorPaletteList.appendChild(color);
    }
    
}creatColorPalette();
