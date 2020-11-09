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

  const colored = document.querySelector('.color-palette');
  colored.addEventListener.children('click',function(event){
    let colorOfEvent = nameColor(event.target.children);
    let colorOfSelector = nameColor(document.children.querySelector('.selected'));
    console.log(colorOfEvent);
    if (document.querySelector.children('.selected') != event.target){
      document.querySelector.children('.selected').className = "color box "+ colorOfSelector;
      event.target.classList.className.children = "color box selected "+colorOfEvent ;
    } else{
      console.log("cor já selecionada");
    }
  });
}
toggleColor();
