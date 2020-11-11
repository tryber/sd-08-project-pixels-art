const pixel = document.querySelector('#pixel-board');

function pixelBoard() {
    for (let col = 0; col < 5; col +=1) {
        for(let line = 0; line < 5; line +=1) {
            let pix = document.createElement('div');
            pix.className = 'pixel';
            pixel.appendChild(pix)
        }
    }
}
pixelBoard();


window.onload = function() {
    document.getElementById('black').classList.add('selected');
}

const itemPalette = document.getElementsByClassName('color'); // coloco as 4 cores da classe color num array 

const paletteDiv = document.getElementById("color-palette"); // seleciono a section com o ID color-pallete
paletteDiv.addEventListener("click", CreateEventsColor); //escutador de eventos
console.log(paletteDiv)

function CreateEventsColor(event) {
    const colorClass = document.querySelector(".selected");
    colorClass.classList.remove("selected");
    event.target.classList.add("selected");
  }
  
  console.log()
  