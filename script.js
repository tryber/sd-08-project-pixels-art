

function createPaleteColorEle(){
    let getpos = document.querySelector("#color-palette")
    
    
    for (let i = 0 ; i < 4 ; i++){
        let createele = document.createElement("div")

    if (i === 0) {
    
        createele.style.backgroundColor = "black"
        createele.className = "color"
        createele.innerHTML = "Zin"
        
        getpos.appendChild(createele)
    }
    else if(i == 1) {
      
        createele.style.backgroundColor = "red"
        createele.className = "color"
        createele.innerHTML = "Zin"
        
        getpos.appendChild(createele)
    }
    else if (i == 2 ){
        
        createele.style.backgroundColor = "blue"
        createele.className = "color"
        createele.innerHTML = "Zin"
      
        getpos.appendChild(createele)
    }
    else if (i == 3 ){
        
        createele.style.backgroundColor = "pink"
        createele.className = "color"
        createele.innerHTML = "Zin"
      
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