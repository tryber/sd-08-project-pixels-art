// Grid Creation
function gridCreation(size) {
  const table = document.querySelector('.table');
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    for (let j = 0; j < size; j += 1) {
      const column = document.createElement('div');
      column.className = 'pixel td';
      line.appendChild(column);
    }
    table.appendChild(line);
  }
}

// Selected Color Change

// Clear Button
const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function () {
  let linha = document.querySelectorAll(".tr");
  let coluna = document.querySelectorAll(".td");
  for (let i = 0; i < linha.length; i++) {
      linha[i].style.backgroundColor = "white";
      for (let j = 0; j < coluna.length; j++) {
          coluna[j].style.backgroundColor = "white";
      }
  }
});

window.onload = function () {
  gridCreation(5);
};
