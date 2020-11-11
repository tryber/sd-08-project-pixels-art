const localePixelBoard = document.getElementById('pixel-board');
const localeColorPalette = document.getElementById('color-palette');
const localeInputPixel = document.getElementById('board-size').value;
const localeButtonGenererateBoard = document.getElementById('generate-board');
const localeButtonClearBoard = document.getElementById('clear-board');
let colorSelected = 'black';
let sizePixel = 5;

function colorPalletteRondom() {
  const localeColor = document.querySelectorAll('.color');
  let colorList = [
    'Blue ',
    'Green',
    'Red',
    'Orange',
    'Violet',
    'Indigo',
    'Yellow ',
    'Gainsboro ',
    'LightGray ',
    'Silver ',
    'DarkGray ',
    'DimGray ',
    'Gray ',
    'SlateGray ',
    'DarkSlateGray ',
  ];
  localeColor.forEach((element) => {
    const colorRondm = Math.floor(Math.random() * 14);
    element.className.includes('black')
      ? (element.style.backgroundColor = 'black')
      : (element.style.backgroundColor = colorList[colorRondm]);
  });
}

function removePixelAll() {
  document.querySelectorAll('.row').forEach((element) => {
    element.remove('row');
  });
}
function createElementPixelBoard(localePixelBoard) {
  for (let index1 = 1; index1 <= sizePixel; index1 += 1) {
    let row = document.createElement('div');
    row.id = `row${index1}`;
    row.className = 'row';
    localePixelBoard.appendChild(row);

    for (let index2 = 0; index2 < sizePixel; index2 += 1) {
      let column = document.createElement('div');
      column.id = `column${index1}${index2}`;
      column.className = 'pixel';
      document.getElementById(row.id).appendChild(column);
    }
  }
}
function generateBoard(localeInputPixel, localePixelBoard) {
  sizePixel = document.getElementById('board-size').value;
  sizePixel =
    sizePixel < 1 || sizePixel === null ? alert('Board inválido!') : sizePixel;
  sizePixel = sizePixel < 5 ? 5 : sizePixel;
  sizePixel = sizePixel > 50 ? 50 : sizePixel;
  localeInputPixel.innerHTML = '';
  createElementPixelBoard(localePixelBoard);
}
function buttonClickGenerateBoard() {
  removePixelAll();
  generateBoard(localeInputPixel, localePixelBoard);
}
function backgroundColor(target, color) {
  return (target.style.backgroundColor = color);
}
function removeSelectedAll() {
  document.querySelectorAll('.color').forEach((element) => {
    removeSelected(element);
  });
}
function removeSelected(target) {
  return target.classList.remove('selected');
}
function addedSelected(target) {
  removeSelectedAll();
  colorSelected = target.style.backgroundColor;
  return target.classList.add('selected');
}
function capturedElementEvents(elementCurrent, event, callback) {
  elementCurrent.addEventListener(event, (element) => {
    const elementEvent = element.target;
    console.log(colorSelected);
    callback(elementEvent, colorSelected);
  });
}
function clear() {
  document.location.reload(true);
}

colorPalletteRondom();
generateBoard(localeInputPixel, localePixelBoard);
capturedElementEvents(localePixelBoard, 'click', backgroundColor);
capturedElementEvents(localeColorPalette, 'click', addedSelected);
capturedElementEvents(localeButtonClearBoard, 'click', clear);
capturedElementEvents(
  localeButtonGenererateBoard,
  'click',
  buttonClickGenerateBoard
);
