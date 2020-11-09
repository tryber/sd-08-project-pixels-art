//preenchendo quadro de pixels
let pixelBoard = document.getElementById('pixel-board')

for(let index = 0; index < 25; index +=1){
    let pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';

    pixelBoard.appendChild(pixelDiv)
}

//pintando
let colorsArray = document.getElementsByClassName('color');

//classe selected
//preto

    colorsArray[0].addEventListener("click",function(){
        if(colorsArray[1].className === "color red selected"){
            colorsArray[1].className = 'color red'
        }
        if(colorsArray[2].className === "color green selected"){
            colorsArray[2].className = 'color green'
        }
        if(colorsArray[3].className === "color blue selected"){
            colorsArray[3].className = 'color blue'
        }
        colorsArray[0].className = 'color black selected'
    })

//vermelho

colorsArray[1].addEventListener("click",function(){
    if(colorsArray[0].className === "color black selected"){
        colorsArray[0].className = 'color black'
    }
    if(colorsArray[2].className === "color green selected"){
        colorsArray[2].className = 'color green'
    }
    if(colorsArray[3].className === "color blue selected"){
        colorsArray[3].className = 'color blue'
    }
    colorsArray[1].className = 'color red selected';
})

//verde

colorsArray[2].addEventListener("click",function(){
    if(colorsArray[0].className === "color black selected"){
        colorsArray[0].className = 'color black'
    }
    if(colorsArray[1].className === "color red selected"){
        colorsArray[1].className = 'color red'
    }
    if(colorsArray[3].className === "color blue selected"){
        colorsArray[3].className = 'color blue'
    }
    colorsArray[2].className = 'color green selected';
})

//azul

colorsArray[3].addEventListener("click",function(){
    if(colorsArray[0].className === "color black selected"){
        colorsArray[0].className = 'color black'
    }
    if(colorsArray[1].className === "color red selected"){
        colorsArray[1].className = 'color red'
    }
    if(colorsArray[2].className === "color green selected"){
        colorsArray[2].className = 'color green'
    }
    colorsArray[3].className = 'color blue selected';
})

//colorindo os pixels
let pixelsArray = document.getElementsByClassName('pixel');
for(let index = 0; index < pixelsArray.length; index +=1){
    pixelsArray[index].addEventListener('click', function(){
      
            var elem = document.getElementsByClassName('selected')[0];
            var elemColor = window.getComputedStyle(elem, null).getPropertyValue("background-color");
        
            pixelsArray[index].style.backgroundColor = elemColor;
    })
}

//bibliografia para resolver o requisito acima: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

let button = document.getElementById('clear-board');
button.addEventListener('click',function(){
    for(let index = 0; index < pixelsArray.length; index +=1){
        pixelsArray[index].style.backgroundColor = "white"
    }
})
