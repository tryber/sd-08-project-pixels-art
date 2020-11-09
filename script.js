function criaPixels(){
  let board = document.getElementById('pixel-board');
  

  for (let index = 0; index < 25; index += 1){
    let pixel = document.createElement('div');
  pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}
criaPixels();