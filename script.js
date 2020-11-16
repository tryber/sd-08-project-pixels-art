window.onload = function () {
let button = document.getElementById('clear-board');

button.addEventListener('click', evento);

}

function evento () {
    document.getElementsByClassName('pixel').style.backgroundColor = "#ffffff";

}
evento()