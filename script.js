window.onload = function () {
  document.querySelectorAll('.color')[0].classList.add('selected');
};

function createDivs() {
  const arrayColor = ['black', 'blue', 'gray', 'red'];
  const palletDiv = document.getElementById('color-palette');
  palletDiv.addEventListener('click', createEventsColor);
  for (let index = 0; index < arrayColor.length; index += 1) {
    const myDivs = document.createElement('div');
    myDivs.style.backgroundColor = arrayColor[index]
    palletDiv.appendChild(myDivs);
    myDivs.className = 'color';
  }
}
createDivs();

function createBoxPixels() {
  const boxPixels = document.getElementById('pixel-board');
  for (let colun = 0; colun < 5; colun += 1) {
    const createPixel = document.createElement('div');
    boxPixels.appendChild(createPixel);
    for (let line = 0; line < 5; line += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      boxPixels.appendChild(createPixel);
    }
  }
}
createBoxPixels();

function createEventsColor(event) {
  const colorClass = document.querySelector('.selected');
  colorClass.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel() {
  const pixelSelected = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].addEventListener('click', function (event) {
      let colorCurrent = document.querySelector('.selected').style
        .backgroundColor;
      event.target.style.backgroundColor = colorCurrent;
    });
  }
}
paintPixel();

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', clearPixels);
function clearPixels() {
  const boxPixels = document.querySelectorAll('.pixel');
  boxPixels.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
}
