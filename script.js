function addTable() {
    const table = document.querySelector('#pixel-board');
  
    for (let index = 0; index < 5; index += 1) {
      for (let index2 = 0; index2 < 5; index2 += 1) {
        const tableDiv = document.createElement('tr');
        tableDiv.className = 'pixel';
        table.appendChild(tableDiv);
      }
      const br = document.createElement('br');
      table.appendChild(br);
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
      if (event.target.id === 'black' || event.target.id === 'red' || event.target.id === 'green' || event.target.id === 'blue') {
        black.className = reset;
        red.className = reset;
        green.className = reset;
        blue.className = reset;  
        event.target.className = event.target.className + ' ' + 'selected';
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

function clearTable() {
    const button = document.querySelector('#clear-board');

    button.addEventListener('click', function() {
        const table = document.querySelectorAll('.pixel');

    for (index = 0; index < table.length; index += 1) {
        table[index].style.backgroundColor = 'white';
    }
    })
}

clearTable();

function nPixel() {
  const button = document.querySelector('#generate-board');

  button.addEventListener('click', function() {
    let input = document.querySelector('#board-size');
    let size = input.value;
    if (size === "") {
      alert('Board inválido!');
    }
    if (size < 5) {
      size = 5;
    } else if (size > 50) {
      size = 50;
    }
    if (size >= 1) {
      input.value = '';
      const tr = document.querySelectorAll('.pixel');
      const br = document.querySelectorAll('br');
      for (index = 0; index < br.length; index += 1){
        let table = document.querySelector('#pixel-board');
        table.removeChild(br[index]);
      }
      for (index = 0; index < tr.length; index += 1) {
        let table = document.querySelector('#pixel-board');     
        table.removeChild(tr[index]);
      }
      for (let index = 0; index < size; index += 1) {
        let table = document.querySelector('#pixel-board');
        for (let index2 = 0; index2 < size; index2 += 1) {
          let table = document.querySelector('#pixel-board');
          const tableDiv = document.createElement('tr');
          tableDiv.className = 'pixel';
          table.appendChild(tableDiv);
        }
        const br = document.createElement('br');
        table.appendChild(br);
      }
    }
  });
}

nPixel();