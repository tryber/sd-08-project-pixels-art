function createPalletColors() {
    let divColorPallet = document.getElementById("color-palette");
    for (let i = 0; i < 4; i += 1) {
        let divChild = document.createElement("div");
        divChild.className = "color";
        let colors = ['black', 'blue', 'orange', 'green'];
        divChild.style.backgroundColor = colors[i];
        divColorPallet.appendChild(divChild);

    }


}

createPalletColors();