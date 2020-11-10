let colors = ['#000000', '#2EC2A8', '#2D88CD', '#342FD4'];
let current = '#000000';
let buttons = document.getElementsByClassName('color');

function ChangeToColor(c) {
  current = colors[c];
}

window.onload = function() {
  for(let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.backgroundColor = colors[i];
  }
};