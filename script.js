let color = document.querySelectorAll('.color');

function createSquares() {
  let squares = document.getElementById("pixel-board");
  for (let i = 0; i < 5; i += 1) {
    // quantidade de linhas
    let coluna = document.createElement("div");
    for (let j = 0; j < 5; j += 1) {
      // quantidade de pixel
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      coluna.appendChild(pixel);
    }
    squares.appendChild(coluna);
  }
}
createSquares();

addEventListener('click', function (evt){
  
  if (evt.target.className == 'color') {
    for (let i = 0; i < color.length; i+=1) {
      color[i].className = 'color';
    }
    evt.target.className = 'color selected';
  }
});

addEventListener('click', function(evt) {
  for (let i = 0; i < color.length; i+=1){
    if(color[i].className == 'color selected' && evt.target.className == 'pixel'){
      evt.target.style.backgroundColor = getComputedStyle(color[i]).backgroundColor;
    }
  }
});




