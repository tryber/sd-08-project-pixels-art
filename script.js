let colorPalette = document.querySelector('#color-palette');
let pallets = document.querySelectorAll('.color')

function selectedColor(event) {
    for(let index = 0; index < pallets.length; index +=1){
        pallets[index].className = 'color';
    }
     event.target.className = 'color selected'

}
colorPalette.addEventListener('click', selectedColor);

