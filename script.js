function nameColor(colored) {
  let colorBox ='black'
  if (colored.classList[3]!=null) {
      colorBox = colored.classList[3];
  }else{
      colorBox = colored.classList[2];
  }
  return colorBox;
}

const colored = document.getElementById('color-palette');
colored.addEventListener('click',function () {
  // console.log(event.target);
  let colorOfEvent = nameColor(event.target);
  let colorOfSelector = nameColor(document.querySelector('.selected'));
  console.log(colorOfEvent);
  if (document.querySelector('.selected') != event.target) {
    document.querySelector('.selected').className = 'color box '+ colorOfSelector;
    event.target.className = 'color box selected '+colorOfEvent ;
  }else{
    console.log('cor já selecionada');
  }
})






const button = document.getElementById('clear-board');
button.addEventListener('click',function(){
  document.getElementsByClassName('pixel')[0].className = 'box pixel white';
  document.getElementsByClassName('pixel')[1].className = 'box pixel white';
  document.getElementsByClassName('pixel')[2].className = 'box pixel white';
  document.getElementsByClassName('pixel')[3].className = 'box pixel white';
  document.getElementsByClassName('pixel')[4].className = 'box pixel white';
  document.getElementsByClassName('pixel')[5].className = 'box pixel white';
  document.getElementsByClassName('pixel')[6].className = 'box pixel white';
  document.getElementsByClassName('pixel')[7].className = 'box pixel white';
  document.getElementsByClassName('pixel')[8].className = 'box pixel white';
  document.getElementsByClassName('pixel')[9].className = 'box pixel white';
  document.getElementsByClassName('pixel')[10].className = 'box pixel white';
  document.getElementsByClassName('pixel')[11].className = 'box pixel white';
  document.getElementsByClassName('pixel')[12].className = 'box pixel white';
  document.getElementsByClassName('pixel')[13].className = 'box pixel white';
  document.getElementsByClassName('pixel')[14].className = 'box pixel white';
  document.getElementsByClassName('pixel')[15].className = 'box pixel white';
  document.getElementsByClassName('pixel')[16].className = 'box pixel white';
  document.getElementsByClassName('pixel')[17].className = 'box pixel white';
  document.getElementsByClassName('pixel')[18].className = 'box pixel white';
  document.getElementsByClassName('pixel')[19].className = 'box pixel white';
  document.getElementsByClassName('pixel')[20].className = 'box pixel white';
  document.getElementsByClassName('pixel')[21].className = 'box pixel white';
  document.getElementsByClassName('pixel')[22].className = 'box pixel white';
  document.getElementsByClassName('pixel')[23].className = 'box pixel white';
  document.getElementsByClassName('pixel')[24].className = 'box pixel white';
})




const mapa = document.getElementById('pixel-board');
mapa.addEventListener('click',function(){
  let colorOfSelector = nameColor(document.querySelector('.selected'));
  console.log(event.target.classList[2]+" =?= "+colorOfSelector)
  if(event.target.classList[0] === 'box'){
  if(event.target.classList[2] !== colorOfSelector){
    // console.log(matrix[i].className)
    event.target.className = ('box pixel ' + colorOfSelector);
    // console.log(matrix[i].className)
  }}
});