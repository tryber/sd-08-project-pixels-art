window.onload = function() {
    const black = document.querySelector('.color');
    black.className = 'selected';
}

function addTable() {
    const table = document.querySelector('#pixel-board');
  
    for (let index = 0; index < 5; index += 1) {
      for (let index2 = 0; index2 < 5; index2 += 1) {
        const tableDiv = document.createElement('tr');
        tableDiv.className = 'pixel';
        table.appendChild(tableDiv);
      }
    }
  }

addTable();