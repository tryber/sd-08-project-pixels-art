function fillPalete() {
  const colorList = ['black', 'red', 'green', 'blue'];
  const palete = document.querySelector('#color-palette');
    for (let index = 0; index < 4; index += 1) {
      const paleteItem = document.createElement('li');
      paleteItem.className = 'color';
      paleteItem.style.backgroundColor = colorList[index];
      palete.appendChild(paleteItem);
    }
}
fillPalete();
