function nameColor(colored){
   let colorBox ="black"
  if (colored.classList[3]!=null){
     colorBox = colored.classList[3];
  } else {
     colorBox = colored.classList[2];
  }
  return colorBox;
}


  const colored = document.querySelectorAll('.color');
  for (let i = 0; i < colored.length ; i++) {
  colored[i].addEventListener('click',function(event){
    let colorOfEvent = nameColor(event.target);
    let colorOfSelector = nameColor(document.querySelector('.selected'));
    console.log(colorOfEvent);
    if (document.querySelector('.selected') != event.target){
      document.querySelector('.selected').className = "color box "+ colorOfSelector;
      event.target.className = "color box selected "+colorOfEvent ;
    } else{
      console.log("cor já selecionada");
    }
  });
  }

  const button = document.querySelector('button');
  button.addEventListener('click',function(){
    for (let i = 0; i <= matrix.length; i++) {
      matrix[i].className ="box pixel white";
    }
  })



  const matrix = document.querySelectorAll('.pixel');
  for (let i = 0; i <= matrix.length; i++) {
  matrix[i].addEventListener('click',function(){
    let colorOfSelector = nameColor(document.querySelector('.selected'));
    console.log(matrix[i].classList[2]+" =?= "+colorOfSelector)
    if(matrix[i].classList[2] != colorOfSelector){
      console.log(matrix[i].className)
      matrix[i].className = "box pixel " + colorOfSelector ;
      console.log(matrix[i].className)
    }
  });
  }

