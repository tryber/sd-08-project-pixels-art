function nameColor(colored){
   let colorBox ="black"
  if (colored.classList[3]!=null){
     colorBox = colored.classList[3];
  } else {
     colorBox = colored.classList[2];
  }
  return colorBox;
}

const colored = document.querySelector('.color');
function toggleColor(){
    let colorOfEvent = nameColor(event.target.children);
    let colorOfSelector = nameColor(document.querySelector('.selected'));
    console.log(colorOfEvent);
    if (document.querySelector('.selected') != event.target){
      document.querySelector('.selected').className = "color box "+ colorOfSelector;
      event.target.classList.className = "color box selected "+colorOfEvent ;
    } else{
      console.log("cor já selecionada");
    }
}

colored.addEventListener.children('click',toggleColor())
