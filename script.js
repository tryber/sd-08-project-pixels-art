
/*function criaBox() {
  for (let index =0;index < 4; index +=1){
  let box =document.createElement("div");
  box.innerHTML = "cores";
  box.className = "cxcores";
  let elPronto = document.getElementsByClassName('.hdr')
  elPronto.appendChild(box);
  }  
};*/
const selectPonto = document.getElementById("seletorCor");
const index =["black", "red", "blue", "green"];


  for(i =0; i < index.length ; i +=1){
  let elemento = document.createElement("div");
  //elemento.innerHTML = index[i];
  elemento.className = "color";
  elemento.id = index[i];  
  elemento.style.background = index[i];
  elemento.style.width = "100px";
  elemento.style.display = "inline-block";
  elemento.style.border = "solid 1px";
  //selectPonto.appendChild(elemento);
  //let parag = document.createElement("p");
  //parag.innerHTML = index[i];
  //parag.style.paragAlign = "center";
  //parag.style.elemeno = "#fff";
  //elemento.appendChild(parag);
  selectPonto.appendChild(elemento);
  };
