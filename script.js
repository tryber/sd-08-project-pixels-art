

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
    
    let getposi1 = document.querySelector("#div1")
    
    let getposi2 = document.querySelector("#div2")
    
    let getposi3 = document.querySelector("#div3")
    
    let getposi4 = document.querySelector("#div4")
    
    let getposi5 = document.querySelector("#div5")
    
    
    
    for(let i = 0; i < 5 ; i++){

        let createpixel = document.createElement("div")
        createpixel.className = "pixel"
        
        
        getposi1.appendChild(createpixel)
        
        

    } 
    for(let i = 0; i < 5 ; i++){

        let createpixel = document.createElement("div")
        createpixel.className = "pixel"
       
        
        getposi2.appendChild(createpixel)
        
        

    }
    for(let i = 0; i < 5 ; i++){

        let createpixel = document.createElement("div")
        createpixel.className = "pixel"
       
        
        getposi3.appendChild(createpixel)
        
        

    }
    for(let i = 0; i < 5 ; i++){

        let createpixel = document.createElement("div")
        createpixel.className = "pixel"
        
        
        getposi4.appendChild(createpixel)
        
        

    }
    for(let i = 0; i < 5 ; i++){

        let createpixel = document.createElement("div")
        createpixel.className = "pixel"
      
        
        getposi5.appendChild(createpixel)
        
        

    }
   

}
createQuadroPixel()


/* 
function createtable() {
    let getpostable = document.querySelector("#table")
    let tr = document.querySelector("#td1")
    
    
    for(let i = 0 ; i  < 5 ; i ++){
let createcel = document.createElement("td")
createcel.className = "pixel"
tr.appendChild(createcel)
getpostable.appendChild(tr)

   }
   for(let i = 0 ; i  < 5 ; i ++){
    let createcel = document.createElement("td")
    createcel.className = "pixel"
    tr.appendChild(createcel)
    getpostable.appendChild(tr)
    
       }
       for(let i = 0 ; i  < 5 ; i ++){
        let createcel = document.createElement("td")
        createcel.className = "pixel"
        tr.appendChild(createcel)
        getpostable.appendChild(tr)
        
           }
   
   
}
createtable()

function paintpallete(){
let getposicaopal = document.querySelector()



}
paintpallete()
*/ 





function pegacor(){

    let pega1 = document.querySelectorAll(".color")
    let pega2 = document.querySelectorAll(".selected")
    

        for(let i = 0 ; i <pega1.length ; i++){
            
            
            
            pega1[i].addEventListener("click",function(){
                let color = pega1[i].style.backgroundColor
                
                
                console.log(color)

            

            })
            

          }
         
  }
  pegacor()


    function aplicacor(){


        let pegaposi3 = document.querySelectorAll(".pixel")
        

        for(let i = 0 ; i <pegaposi3.length ; i++){

            pegaposi3.addEventListener("click",function(pegacor){

            if(pegaposi3[i] === pega2){

            pegaposi3.style.backgroundColor = pega2.style.backgroundColor
}

            
        })




    }
    }
    aplicacor()



    
    
    
    

    











    
    
    
    







