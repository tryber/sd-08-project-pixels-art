let colorSelected = document.querySelector('.selected').style.backgroundColor;

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
function capturedElementEvents(target, event, callback) {
  const currentElement = document.getElementById(target);
  currentElement.addEventListener(event, (element) => {
    const elementEvent = element.path[0];
    callback(elementEvent, colorSelected);
  });
}
function clear() {
  document.location.reload(true);
}

capturedElementEvents('pixel-board', 'click', backgroundColor, false);
capturedElementEvents('color-palette', 'click', addedSelected);
capturedElementEvents('clear-board', 'click', clear);
