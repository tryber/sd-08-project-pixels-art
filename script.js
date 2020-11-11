// Grid Creation
function gridCreation(size) {
  const table = document.querySelector('.table');
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'tr';
    for (let j = 0; j < size; j += 1) {
      const column = document.createElement('div');
      column.className = "pixel td";
      line.appendChild(column);
    }
    table.appendChild(line);
  }
}

window.onload = function () {
  gridCreation(5);
}