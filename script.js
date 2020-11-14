let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;


function color(event) {
    let getPaleta = document.getElementsByClassName('color');
    let cor = event.target.style.backgroundColor;
    for (let i = 0; i < getPaleta.length; i += 1) {
        if (getPaleta[i].style.backgroundColor === cor) {
            getPaleta[i].classList.add('selected');
        } else {
            getPaleta[i].classList.remove('selected');
        }
    }
}
