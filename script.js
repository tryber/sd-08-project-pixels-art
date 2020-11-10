function quadro() {
  let quadro = document.getElementById('pixel-board');
  for (let i = 1; i <= 5; i += 1) {
    let linha = document.createElement('div');
    quadro.appendChild(linha);
    for (let j = 1; j <= 5; j += 1) {
      let pixel = document.createElement('div');
      pixel.innerText = 'a';
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
  }
}
quadro();