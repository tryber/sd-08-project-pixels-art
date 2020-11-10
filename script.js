
function toggleColor() {


    const blackCC = document.querySelector ('#black')
    blackCC.className = "color selected"

}

window.onload = toggleColor()
function toogleColors () {

    const blackCC = document.querySelector ('#black')
    // blackCC.className = "color selected"




blackCC.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected')

    if (selected !== null ) {
        selected.classList.remove('selected')
        event.target.className = "color selected"
    if (selected.className === 'color') {
    event.target.className ="color selected"

// } else {
//     event.target.className = "color"
}


    }

})

}
     toogleColors ()


function toogleColors2 () {

    const redCC = document.querySelector ('#red')


redCC.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected')

     if (selected !== null ) {
         selected.classList.remove('selected')
         event.target.className = "color selected"
     }
     if ( selected.className === 'color' ) {
         event.target.className ="color selected"

// } else {
//     event.target.className = "color "
}

    }

    )

}
toogleColors2()

function toogleColors3 () {

    const greenCC = document.querySelector ('#green')


greenCC.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected')

     if (selected !== null ) {
         selected.classList.remove('selected')
         event.target.className = "color selected"
     }
     if ( selected.className === 'color' ) {
         event.target.className ="color selected"

// } else {
//     event.target.className = "color "
}

    }

    )

}
toogleColors3()

function toogleColors4 () {

    const yellowCC = document.querySelector ('#yellow')


yellowCC.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected')

     if (selected !== null ) {
         selected.classList.remove('selected')
         event.target.className = "color selected"
     }
     if ( selected.className === 'color' ) {
         event.target.className ="color selected"

// } else {
//     event.target.className = "color "
}

    }

    )

}
toogleColors4()


function addColor (){
    
    const board = querySelector('#pixel-board')

    board.addEventListener('click', function(event){

        const selected = document.querySelector('.color selected')

        if( selected.style.backgroundColor !== null)
         {

        event.target.style.backgroundColor = selected.style.backgroundColor
        }
    })}

 

addColor()