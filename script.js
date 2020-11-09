const palleteColorsList = document.querySelector('#color-palette').firstElementChild;
let colorArray = ['red', 'green', 'blue', 'yellow', 'black'];
for (let i = 0; i < colorArray.length; i += 1) {
  let colorElement = document.createElement('li');
  colorElement.className = 'color';
  colorElement.style.backgroundColor = colorArray[i];
  palleteColorsList.appendChild(colorElement);
}