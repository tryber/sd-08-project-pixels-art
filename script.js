let pixel=document.querySelectorAll('.pixel');
function backgroundWhite(){
    pixel.style.backgroundColor='white';
}
window.onload=backgroundWhite;

let allColors=document.querySelector('#collor-palette');
let color=allColors.childNodes;

function removeSelected(){
    for (let inedx=0;index <color.length;index++){
        if (color[index].className ='color selected'){
            color[index].className ='color';
        }
    }
}

function addSelected(){
    allColors.addEventListener('click',function(event){
        removeSelected();
        event.target.className = 'color selected';
    })
}

addSelected();