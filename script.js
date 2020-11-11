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

function colorSelected() {
    const colorPalette = document.querySelector('#color-palette');
    let black = document.querySelector('#black');
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue = document.querySelector('#blue');
    const reset = 'color';

    colorPalette.addEventListener('click', function(event) {
      black.className = reset;
      red.className = reset;
      green.className = reset;
      blue.className = reset;

      if (event.target.id === 'black' || event.target.id === 'red' || event.target.id === 'green' || event.target.id === 'blue') {
        event.target.className = 'selected';
      }
    });
}

colorSelected();

function colorPaint() {
    const table = document.querySelector('#pixel-board');

    table.addEventListener('click', function(event) {
        const selected = document.querySelector('.selected');
        const color = selected.id;
        
        if (event.target.className === 'pixel') {
            event.target.style.backgroundColor = color;
        }
    });
}

colorPaint();