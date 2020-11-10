function nameColor(colored){
   let colorBox ="black"
  if (colored.classList[3]!=null){
     colorBox = colored.classList[3];
  } else {
     colorBox = colored.classList[2];
  }
  return colorBox;
}

  const colored= document.getElementById("color-palette");
  colored.addEventListener("click",function(){
    //console.log(event.target);
    let colorOfEvent = nameColor(event.target);
    let colorOfSelector = nameColor(document.querySelector('.selected'));
    console.log(colorOfEvent);
    if (document.querySelector('.selected') != event.target){
      document.querySelector('.selected').className = "color box "+ colorOfSelector;
      event.target.className = "color box selected "+colorOfEvent ;
    } else{
      console.log("cor já selecionada");
    }
  })





  let matrix = document.querySelectorAll('.pixel');
  const button = document.getElementById("clear-board");
  button.addEventListener('click',function(){
    for (let i = 0; i <= matrix.length; i++) {
      matrix[i].className ="box pixel white";
    }
  })




  const mapa= document.getElementById("pixel-board");
  mapa.addEventListener('click',function(){
    let colorOfSelector = nameColor(document.querySelector('.selected'));
    console.log(event.target.classList[2]+" =?= "+colorOfSelector)
    if(event.target.classList[0] == "box"){
    if(event.target.classList[2] != colorOfSelector){
      //console.log(matrix[i].className)
      event.target.className = "box pixel " + colorOfSelector ;
      //console.log(matrix[i].className)
    }}
  });





