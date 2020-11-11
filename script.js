const paletaDeCores = document.querySelector('#color-palette') 

function creatSetOfColors() {
 
    for ( let index = 0; index < 4; index += 1) {
        const palletColor = document.createElement('li');
        palletColor.className= 'color'
        paletaDeCores.appendChild(palletColor)


    }
}

creatSetOfColors();



const colorsItens = document.querySelectorAll('.color')

function addColorsToThePallete(coress) {
for ( let index = 0; index < colorsItens.length; index +=1) {
    const cor = colorsItens[index]
    cor.style.backgroundColor = coress[index]
 

}
}

addColorsToThePallete(['black', 'red', 'green', 'yellow'])



const boardofpixels = document.querySelector('#pixel-board') 

function creatBoard() {
 
    for ( let index = 0; index < 25; index += 1) {
        const pixelboard = document.createElement('li');
        pixelboard.className= 'pixel'
        boardofpixels.appendChild(pixelboard)


    }
}

creatBoard();


function blackMan () {
    for ( let index =0; index < colorsItens.length; index+=1) {
        const addcor = colorsItens[index]
        if (addcor.style.backgroundColor === "black") {
            addcor.className= "color selected"
        }

}
}
blackMan()


function selecionado (){
    for ( let index =0; index < colorsItens.length; index+=1) {
        const addcor = colorsItens[index]

        addcor.addEventListener('click', function(event){
            const selected = document.querySelector('.selected')
        if ( addcor.className ==='color'){
                selected.classList.remove('selected')
                event.target.className='color selected'
            }

        })

    }
}

selecionado()

function queHajaCor () {
    const boardofpixels = document.querySelector('#pixel-board') 

    boardofpixels.addEventListener('click', function(event){
    const selected = document.querySelector('.selected')

    if(selected !==null ){
        event.target.style.backgroundColor = selected.style.backgroundColor
    }

    })

}
queHajaCor();