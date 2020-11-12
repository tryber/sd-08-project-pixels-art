const colors = ["black", "green", "purple", "yellow"];
function createDivs() {
    let newPalette = document.getElementById('color-palette')
    for (i = 0; i < colors.length; i += 1) {
        let color = colors[i];
        let newDivs = document.createElement("div");
        newDivs.className = "color"
        newDivs.style.border = "1px solid"
        newDivs.style.backgroundColor = color
        newPalette.appendChild(newDivs)
    }
}
createDivs();