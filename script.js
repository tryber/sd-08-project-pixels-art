let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;


const itemPalette = document.querySelectorAll('.color');

function selectedPalette() {
    for (let index = 0; index < itemPalette.length; index += 1) {
      const item = itemPalette[index];
  
      item.addEventListener('click', (event) => {
        const selectedColor = document.querySelector('.selected');
        if (item.className === 'color') {
          selectedColor.classList.remove('selected');
          event.target.classList.add('selected');
        }
      });
    }
}
selectedPalette();