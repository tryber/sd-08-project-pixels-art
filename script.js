window.onload = function () {
    document.querySelectorAll('.color')[0].classList.add('selected');

}

function eventsColor(event) {
    const colorClass = document.querySelectorAll('.selected');
    colorClass.classList.remove('selected');
    event.target.classList.add('selected');

    
}


