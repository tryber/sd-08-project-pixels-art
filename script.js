const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const clear = document.getElementById('clear-board');

for (let index = 0; index < colors.length; index += 1) {
    const item = colors[index];
    item.addEventListener('click', function(event){
        const selected = document.querySelector('.selected');
        selected.className = 'color';
        event.target.className = 'color selected'; 
    })
}

pixelBoard.addEventListener('click', function(event) {
    const selected = document.querySelector('.selected');
    let compStyles = window.getComputedStyle(selected);
    event.target.style.backgroundColor = compStyles.getPropertyValue('background-color');
})

clear.addEventListener('click', function(){
    for (let index =0; index < pixelBoard.children.length; index += 1) {
        const item = pixelBoard.children[index];
        item.style.backgroundColor = 'white';
    }
})