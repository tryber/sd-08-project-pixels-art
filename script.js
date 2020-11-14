// O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;
let firstColor = document.querySelector('.color-1');

function callback(){
  firstColor.classList.add('selected');
}
window.addEventListener('load', callback);

/*window.onload = function(){
  let firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
}*/
