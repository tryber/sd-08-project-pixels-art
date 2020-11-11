// 1
function createDivs() {
    let newPallete = document.getElementById('color-pallete')
    for (i = 0; i < 4; i += 1) {
        let newDivs = document.createElement("div");
        newDivs.className = "color"
        newPallete.appendChild(newDivs)
    }
    document.getElementsByClassName("color").style.border = "1px solid"
}

// 2
let colorBlack = document.getElementsByClassName("color")
function getColors(array) {
    for (i = 0; i < array.length; i += 1) {
            colorBlack.style.background-color == array[i]
    }
}
getColors(["black", "green", "purple", "yellow"]);

// 3



