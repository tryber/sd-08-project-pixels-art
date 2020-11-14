    const pixelBoard = document.getElementById('pixel-board');
    const colorsArray = ["black", "yellow", "orange", "red"];

    colorsArray.forEach(function(color) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'color';
      button.style.height = '40px';
      button.style.width = '40px';
      button.style.backgroundColor = color;
      button.style.border = "1px solid #000";
      button.addEventListener('click', handler(button));
      pixelBoard.appendChild(button);
});

window.onload = function() {
  document.querySelectorAll('.color')[0].classList.add("selected");
};

function handler(el) {
    return function() {
        pixelBoard.style.backgroundColor = el.value;
    }
};