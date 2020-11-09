

function createPaleteColorEle(){
    let getpos = document.querySelector("#color-palette")
    
    
    for (let i = 0 ; i < 4 ; i++){
        let createele = document.createElement("div")

    if (i === 0) {
    
        createele.style.backgroundColor = "black"
        createele.className = "color"
       
        
        getpos.appendChild(createele)
    }
    else if(i == 1) {
      
        createele.style.backgroundColor = "red"
        createele.className = "color"
        
        
        getpos.appendChild(createele)
    }
    else if (i == 2 ){
        
        createele.style.backgroundColor = "blue"
        createele.className = "color"
       
      
        getpos.appendChild(createele)
    }
    else if (i == 3 ){
        
        createele.style.backgroundColor = "pink"
        createele.className = "color"
        
      
        getpos.appendChild(createele)

}

    else{
       
        createele.style.backgroundColor = "yellow"
        createele.className = "color"
       
        getpos.appendChild(createele)
    }

   }
 
}
createPaleteColorEle()


function createQuadroPixel(){
    let getposi = document.querySelector("#pixel-board")
    for(let i = 0; i < 5 ; i++){
        for(let i1 = 0 ; i1 < 5 ; i1 ++){
            
        }
        let createpixel = document.createElement("div")
        createpixel.className = "pixel"
        
        getposi.appendChild(createpixel)
    }
}
createQuadroPixel()