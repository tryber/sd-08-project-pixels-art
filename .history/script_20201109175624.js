function nameColor(colored){
   let colorBox ="black"
  if (colored.classList[3]!=null){
     colorBox = colored.classList[3];
  } else {
     colorBox = colored.classList[2];
  }
  return colorBox;
}

// const colored = document.querySelector('.color');
// function toggleColor(target){
//         let colorOfEvent = nameColor();
//     let colorOfSelector = nameColor(document.querySelector('.selected'));
//     console.log(colorOfEvent);
//     console.log(colorOfSelector);
//     if (document.querySelector('.selected') != event.target){
//       document.querySelector('.selected').className = "color box "+ colorOfSelector;
//       event.target.className = "color box selected "+colorOfEvent ;
//     } else{
//       console.log("cor já selecionada");
//     }
// }
// colored.addEventListener.children('click',toggleColor(target))


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
