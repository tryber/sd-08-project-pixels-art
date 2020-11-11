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
        const boardpixel = document.createElement('li');
        boardpixel.pixel.className= 'pixel'
        boardofpixels.appendChild(boardpixel)


    }
}

creatBoard();





// function toggleColor() {


//     const blackCC = document.querySelector ('#black')
//     blackCC.className = "color selected"

// }

// toggleColor()

// function toogleColors () {

//     const blackCC = document.querySelector ('#black')
//     // blackCC.className = "color selected"




// blackCC.addEventListener('click', function (event) {
//     const selected = document.querySelector('.selected')

//     if (selected !== null ) {
//         selected.classList.remove('selected')
//         event.target.className = "color selected"
//     if (selected.className === 'color') {
//     event.target.className ="color selected"

// // } else {
// //     event.target.className = "color"
// }

//     }

// })

// }
//      toogleColors ()


// function toogleColors2 () {

//     const redCC = document.querySelector ('#red')


// redCC.addEventListener('click', function (event) {
//     const selected = document.querySelector('.selected')

//      if (selected !== null ) {
//          selected.classList.remove('selected')
//          event.target.className = "color selected"
//      }
//      if ( selected.className === 'color' ) {
//          event.target.className ="color selected"

// // } else {
// //     event.target.className = "color "
// }

//     }

//     )

// }
// toogleColors2()

// function toogleColors3 () {

//     const greenCC = document.querySelector ('#green')


// greenCC.addEventListener('click', function (event) {
//     const selected = document.querySelector('.selected')

//      if (selected !== null ) {
//          selected.classList.remove('selected')
//          event.target.className = "color selected"
//      }
//      if ( selected.className === 'color' ) {
//          event.target.className ="color selected"

// // } else {
// //     event.target.className = "color "
// }

//     }

//     )

// }
// toogleColors3()

// function toogleColors4 () {

//     const yellowCC = document.querySelector ('#yellow')


// yellowCC.addEventListener('click', function (event) {
//     const selected = document.querySelector('.selected')

//      if (selected !== null ) {
//          selected.classList.remove('selected')
//          event.target.className = "color selected"
//      }
//      if ( selected.className === 'color' ) {
//          event.target.className ="color selected"

// // } else {
// //     event.target.className = "color "
// }

//     }

//     )

// }
// toogleColors4()


// // function addColortothepixels(){
    
// //     const boardR=document.getElementById('pixel-board')

// //     boardR.children.addEventListener('click', function(event){
        
// //         const selected = document.querySelector('.color selected')

// //  if(selected != null){
         
// //         event.target.style.backgroundColor = selected.style.backgroundColor
// //         }
// //     })}

 

// // addColortothepixels()


// function paintPallet () {
//     let pixelados = document.querySelectorAll('.pixel')

//     pixelados.addEventListener('click', function(event) {
//         const selected = document.querySelector('.selected')
//         if (selected !== null) {
//             event.target.style.backgroundColor === selected.style.backgroundColor

    
//         }


// //     })

// //     paintPallet () 


// // }



