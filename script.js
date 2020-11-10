
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
    
} else {
    event.target.className = "color" 
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
    
} else {
    event.target.className = "color " 
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
    
} else {
    event.target.className = "color " 
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
    
} else {
    event.target.className = "color " 
}

    }

    )
    
}
toogleColors4()
    // function changeColorsagain () {

    //     const redCC = document.querySelector ("#red")

    // redCC.addEventListener('click', function (event) {
    //     let selected = document.querySelectorAll('.selected')  
    //     selected.classList.remove('.selected')
    //     redCC.className = "selected"
        
    
    // changeColorsagain ()
    
    // -__________________________________________________________________________________________________

//      function toogleRed ()
//      const redCC = document.querySelector ('#red')
//      const selected = document.querySelector('.selected')  
//      selected.classList.remove("selected")

//      redCC.addEventListener('click', function(event) {
      
//     if (selected === null ) {
//     event.target.className ="color selected"
    
// } else {
//     event.target.className = "color" 
// }

//     }
//     );
//     toogleRed()

        // obter elemento com a classe selected
        // remover a classe selected desse elemento
        // adicionar a classe selected ao elemento que disparou o evento de clique
//         function changeColors () {
         
//     const blackCC = document.querySelector ('#black')
//     blackCC.className = "color selected"

//         // let elements = document.querySelectorAll('.color-palettes')
//     // for ( index =0; index < elements.length; index +=1) {


//         blackCC.addEventListener('click', function (event) {

//     const selected = document.querySelector('.selected')  
//     if ( selected.className === 'selected') {
//     selected.classList.remove('selected')
//     } else if (selected === null ) {
//     event.target.className ="color selected"
    
// } else {
//     event.target.className = "color" 
// }
//         }

//         )} 
//         changeColors()

//         function changeColors2 () {
         
//             const redCCC = document.querySelector ('#red')
        
//                 // let elements = document.querySelectorAll('.color-palettes')
//             // for ( index =0; index < elements.length; index +=1) {
        
        
//                 redCC.addEventListener('click', function (event) {
        
//             const selected = document.querySelector('.selected')  
//             if ( selected.className === 'selected') {
//             selected.classList.remove('selected')
//             } else if (selected === null ) {
//             event.target.className ="color selected"
            
//         } else {
//             event.target.className = "color" 
//         }
//                 }
        
//                 )} 
//                 changeColors2()
    