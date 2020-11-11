// Table creation
function tableCreation(size) {
  const table = document.querySelector('#pixel-board');
  for (let i = 0; i < size; i += 1) {
    const tr = document.createElement('div');
    tr.className = 'tr';
    for (let j = 0; j < size; j += 1) {
      const td = document.createElement('div');
      td.className = 'pixel tr';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

window.onlad = function () {
  tableCreation(5);
};
