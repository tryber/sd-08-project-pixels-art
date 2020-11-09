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

  cosnt colored = document.querySelector('.color');
  colored.addEventListener('click',function(event){
    let colorbox = nameColor(event.target);
    console.log(colorbox);
    const colorSelect = document.querySelector('.selected');
    if (colorSelect === null){
      event.target.classList = "color box selected "+colorbox ;
    } else{
      event.target.classList = "color box" + colorbox ;
    }
  });
}
toggleColor();
