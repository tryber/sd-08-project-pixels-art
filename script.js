window.onload = function() {
    const colorInit = document.querySelector('.black');
    colorInit.className = 'color black select';
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

// function colorSelect() {
//   const black = document.querySelector('.black');
//   const red = document.querySelector('.red');
//   const green = document.querySelector('.green');
//   const blue = document.querySelector('.blue');
//   const colorPalette = document.querySelector('#color-palette');

//   colorPalette.addEventListener('click', function(event) {
//     const nome = event.target.className;
//     if ()
//   });

// }

// colorSelect();