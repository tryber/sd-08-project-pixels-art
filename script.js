const colors = document.querySelectorAll('.color');
colors[0].className = 'color selected';

for (let indexColor = 1; indexColor <= 3; indexColor += 1) {
  const rgb = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
  colors[indexColor].style.backgroundColor = `rgb(${Object.values(rgb)})`;
}

const setColor = (thisColor) => {
  colors.forEach((element, index) => {
    if (index !== thisColor) {
      element.className = 'color';
    } else {
      element.className = 'color selected';
    }
  });
};

colors[0].addEventListener('click', () => setColor(0));
colors[1].addEventListener('click', () => setColor(1));
colors[2].addEventListener('click', () => setColor(2));
colors[3].addEventListener('click', () => setColor(3));

function actionPixels() {
  const pixels = document.querySelectorAll('.pixel');

  //  https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript
  pixels.forEach((eachPixel) => {
    eachPixel.addEventListener('click', () => {
      const selectedColor = window
        .getComputedStyle(document.querySelector('.selected'))
        .getPropertyValue('background-color');
      eachPixel.style.backgroundColor = selectedColor;
    });
  });

  const clearBtn = document.querySelector('#clear-board');

  clearBtn.addEventListener('click', () =>
    pixels.forEach((eachPixel) => {
      eachPixel.style.backgroundColor = 'white';
    }));
}

actionPixels();
const generateBoard = (size) => {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.width = '100%';
  pixelBoard.innerHTML = '';

  let numberOfColumns = 1;
  while (numberOfColumns <= size) {
    numberOfColumns += 1;
    const newLine = document.createElement('div');
    pixelBoard.appendChild(newLine);

    let numberOfPixels = 1;
    while (numberOfPixels <= size) {
      numberOfPixels += 1;
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newLine.appendChild(newPixel);
    }
  }
  actionPixels();
};

const size = (inputSize) => {
  let result = inputSize;
  if (inputSize <= 5) {
    result = 5;
  } else if (inputSize >= 50) {
    result = 50;
  }
  return result;
};

const generateBoardBtn = document.querySelector('#generate-board');
generateBoardBtn.addEventListener('click', () => {
  const inputSize = document.querySelector('#board-size').value;
  if (inputSize !== '') {
    generateBoard(size(inputSize));
  } else {
    alert('Board inválido!');
  }
});
