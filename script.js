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
// clearButton.addEventListener('click', function () {
//   let line = document.querySelectorAll('.tr');
//   let column = document.querySelectorAll('.td');
//   for (let i = 0; i < line.length; i += 1) {
//     line[i].style.backgroundColor = 'white';
//     for (let j = 0; j < column.length; j += 1) {
//       column[j].style.backgroundColor = 'white';
//     }
//   }
// });
const clearBoard = () => {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].removeAttribute('style');
  }
};
clearButton.addEventListener('click', clearBoard);

window.onload = function () {
  gridCreation(5);
};
