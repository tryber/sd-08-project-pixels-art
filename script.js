
function createDivs() {
    let newPallete = document.getElementById('color-pallete')
    for (i = 0; i < 4; i += 1) {
        let newDivs = document.createElement("div");
        newDivs.className = "color"
        newPallete.appendChild(newDivs)
    }
    document.getElementsByClassName("color").style.border = "1px solid"
}