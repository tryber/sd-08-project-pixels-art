

function fillPalete() {
    let colorList = ['black','red','green','blue'];
    let palete = document.querySelector("#color-palete");
    for(let index = 0; index < 4; index += 1) {
        let paleteItem = document.createElement('li');
        paleteItem.className = "color";
        paleteItem.style.backgroundColor = colorList[index];
        palete.appendChild(paleteItem);
    }
}

fillPalete();