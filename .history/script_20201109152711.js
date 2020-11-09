function nameColor(colored,number){
  if (colored.classList[3]!=null){
    let colorbox = colored.classList[3]
  } else {
    let colorbox = colored.classList[2]
  }
  return colorbox // black blue red yellow
}


function toggleColor(){

  let colored = document.querySelector('.color');
  task.addEventListener('click',function(event){
    let colorbox = nameColor(colored,number);
    console.log(colorbox);
    const colorSelect = document.querySelector('.selected');
    if (colorSelect === null){
      event.target.classList = "color selected "+colorbox ;
    } else{
      event.target.classList = "color" + colorbox ;
    }
  })
}
toggleColor();
