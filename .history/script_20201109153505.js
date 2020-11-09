function nameColor(colored){
  if (colored.classList[3]!=null){
    let colorbox = colored.classList[3]
  } else {
    let colorbox = colored.classList[2]
  }
  return colorbox // black blue red yellow
}


function toggleColor(){

  const colored = document.querySelector('.color');
  colored.addEventListener('click',function(event){
    let colorbox = nameColor(colored);
    console.log(colorbox);
    const colorSelect = document.querySelector('.selected');
    if (colorSelect === null){
      event.target.classList = "color selected "+colorbox ;
    } else{
      event.target.classList = "color" + colorbox ;
    }
  });
}
toggleColor();
