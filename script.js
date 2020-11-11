// 2
const colors = ["black", "green", "purple", "yellow", "red"];
function createDivs() {
    let newPallete = document.getElementById('color-pallete')
    for (i = 0; i < colors.length; i += 1) {
        let color = colors[i];
        let newDivs = document.createElement("div");
        newDivs.className = "color"
        newDivs.style.border = "1px solid"
        newDivs.style.backgroundColor = color
        newPallete.appendChild(newDivs)

    }
}
createDivs();

