function nameColor(colored){
   let colorBox ="black"
  if (colored.classList[3]!=null){
     colorBox = colored.classList[3];
  } else {
     colorBox = colored.classList[2];
  }
  return colorBox;
}


function toggleColor(){

  const colored = document.querySelectorAll('.color');
  colored.addEventListener('click',function(event){
    let colorOfEvent = nameColor(event.target);
    let colorOfSelector = nameColor(document.querySelector('.selected'));
    console.log(colorOfEvent);
    const colorSelect = document.querySelector('.selected');
    if (document.querySelector('.selected') != event.target){
      event.target.classList = "color box selected "+colorOfEvent ;
      document.querySelector('.selected') = "color box "+ colorOfSelector;

    } else{
      console.log("cor já selecionada");
    }
  });
}
toggleColor();
