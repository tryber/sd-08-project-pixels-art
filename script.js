

function createPaleteColorEle(){
    let getpos = document.querySelector("#color-palette")
    
    
    for (let i = 0 ; i < 4 ; i++){
        let createele = document.createElement("div")

    if (i === 0) {
    
        createele.style.backgroundColor = "black"
        createele.className = "color selected"
      
       
        
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




// 



/* pega cor do color

    let pega1 = document.querySelectorAll(".color")
    
    

        for(let i = 0 ; i <pega1.length ; i++){
            
            
            
            pega1[i].addEventListener("click",function(){
                
                pega1[i].className = "color" , "selected"
               let color = pega1[i].style.backgroundColor
               

              console.log(color)


            */


            /* let color = event.target;
              color.classList.add('selected');
          
              colorPalette.classList.remove('selected');
            });
            

            })

          }
          */
        

        
/*
    function aplicacor(){


        let pegaposi3 = document.querySelectorAll(".pixel")
        

        for(let i = 0 ; i <pegaposi3.length ; i++){

            pegaposi3[i].addEventListener("click",function(pegacorpalleta){
                let pegaposi5 = document.querySelector(".selected")
                
            //    let color1 = pegaposi5.style.backgroundColor


            pegaposi3[i].style.backgroundColor = color
  
        })

    }
    }
    
    aplicacor()

*/   


function limpabotao(){

    let pegaposicaobotao = document.querySelector("#divbotao")
    
    let criabotao = document.createElement("button")
    criabotao.id= "clear-board"
    criabotao.innerHTML = "Limpar"
    pegaposicaobotao.appendChild(criabotao)
    
   
   }
    limpabotao()

    function addfunctilimpar(){

        let pegalimpar = document.querySelector("#clear-board")
       
        let pegapixels = document.querySelectorAll(".pixel")
       
       
       
       pegalimpar.addEventListener("click", function(){
       
       
        for(let i = 0 ; i < pegapixels.length ; i++){

            pegapixels[i].style.backgroundColor = "white"

            



        }

        })

    }

    addfunctilimpar()
  
   
   

    


    /* function pegacorpalleta(){

let pegaposicaok = document.querySelectorAll(".color")
console.log(pegaposicaok)


for(let i =0 ; i < pegaposicaok.length ; i ++ ){
    
  
    pegaposicaok[i].addEventListener("click",function(event){
        


  if(event.target.className === "color"  ){
     
 event.target.classList.add("selected")
 let color = event.target.style.backgroundColor
 console.log(color)

  }
  else{
      event.target.classList.remove("selected")
      event.target.classList.add("color")
      


  }
   

})

    }
    }
    pegacorpalleta()
    
    

*/ 

    
   function apllycolor(){

   
    let pegapixels = document.querySelectorAll(".pixel")
    
    


    for(let i = 0 ; i < pegapixels.length  ; i++)
    
    // so apos ter atribuido um valor a cor anterior mente quando clicado na palleta e q ele ira resgatar o valor da cor e aplicar no quadrado
    pegapixels[i].addEventListener("click", function(event){
        let pegaselected = document.querySelector(".selected")
        let color = pegaselected.style.backgroundColor
       
       event.target.style.backgroundColor = color
    

    
    })




   }
   apllycolor()
    




let getposicaocolor = document.getElementsByClassName("color") ;

function alternaclasse(){

    

   
    for(let i of getposicaocolor){
        

       i.addEventListener("click", AdicionarRemover) ;
       



       }


    }


    

alternaclasse()

getposicaocolor[0].classList.add("selected")

function AdicionarRemover(event){
   
 
   
    for(let index = 0 ; index < getposicaocolor.length ; index ++ ){
       
    
        getposicaocolor[index].classList.remove("selected");


    }
    event.target.classList.add("selected");
}








    
    
    
    







